import { extend, isNullOrUndefined, setValue, getValue, addClass, removeClass } from '@syncfusion/ej2-base';
import { DataManager, Query, DataUtil } from '@syncfusion/ej2-data';
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { getObject, getUid } from '@syncfusion/ej2-grids';
import { isRemoteData, isOffline, isCountRequired, getExpandStatus } from '../utils';
import * as events from './constant';
/**
 * Internal dataoperations for tree grid
 *
 * @hidden
 */
var DataManipulation = /** @class */ (function () {
    function DataManipulation(grid) {
        this.addedRecords = 'addedRecords';
        this.parent = grid;
        this.parentItems = [];
        this.taskIds = [];
        this.hierarchyData = [];
        this.storedIndex = -1;
        this.sortedData = [];
        this.isSortAction = false;
        this.addEventListener();
        this.dataResults = {};
        this.isSelfReference = !isNullOrUndefined(this.parent.parentIdMapping);
    }
    /**
     * @hidden
     * @returns {void}
     */
    DataManipulation.prototype.addEventListener = function () {
        this.parent.on('updateRemoteLevel', this.updateParentRemoteData, this);
        this.parent.grid.on('sorting-begin', this.beginSorting, this);
        this.parent.on('updateAction', this.updateData, this);
        this.parent.on(events.remoteExpand, this.collectExpandingRecs, this);
        this.parent.on('dataProcessor', this.dataProcessor, this);
    };
    /**
     * @hidden
     * @returns {void}
     */
    DataManipulation.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(events.remoteExpand, this.collectExpandingRecs);
        this.parent.off('updateRemoteLevel', this.updateParentRemoteData);
        this.parent.off('updateAction', this.updateData);
        this.parent.off('dataProcessor', this.dataProcessor);
        this.parent.grid.off('sorting-begin', this.beginSorting);
    };
    /**
     * To destroy the dataModule
     *
     * @returns {void}
     * @hidden
     */
    DataManipulation.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * @hidden
     * @returns {boolean} -Returns whether remote data binding
     */
    DataManipulation.prototype.isRemote = function () {
        if (!(this.parent.dataSource instanceof DataManager)) {
            return false;
        }
        return true;
        // let gridData:  DataManager = <DataManager>this.parent.dataSource;
        // return gridData.dataSource.offline !== true && gridData.dataSource.url !== undefined;
    };
    /**
     * Function to manipulate datasource
     *
     * @param {Object} data - Provide tree grid datasource to convert to flat data
     * @hidden
     * @returns {void}
     */
    DataManipulation.prototype.convertToFlatData = function (data) {
        var _this = this;
        this.parent.flatData = (Object.keys(data).length === 0 && !(this.parent.dataSource instanceof DataManager) ?
            this.parent.dataSource : []);
        this.parent.parentData = [];
        if ((isRemoteData(this.parent) && !isOffline(this.parent)) && data instanceof DataManager && !(data instanceof Array)) {
            var dm = this.parent.dataSource;
            if (this.parent.parentIdMapping) {
                this.parent.query = isNullOrUndefined(this.parent.query) ?
                    new Query() : this.parent.query;
                if (this.parent.parentIdMapping) {
                    var filterKey = this.parent.query.params.filter(function (param) { return param.key === 'IdMapping'; });
                    if (this.parent.initialRender && !filterKey.length) {
                        this.parent.query.where(this.parent.parentIdMapping, 'equal', null);
                        this.parent.query.addParams('IdMapping', this.parent.idMapping);
                    }
                }
                if (!this.parent.hasChildMapping) {
                    var qry = this.parent.query.clone();
                    qry.queries = [];
                    qry = qry.select([this.parent.parentIdMapping]);
                    qry.isCountRequired = true;
                    dm.executeQuery(qry).then(function (e) {
                        _this.parentItems = DataUtil.distinct(e.result, _this.parent.parentIdMapping, false);
                        var req = getObject('dataSource.requests', _this.parent).filter(function (e) {
                            return e.httpRequest.statusText !== 'OK';
                        }).length;
                        if (req === 0) {
                            setValue('grid.contentModule.isLoaded', true, _this.parent);
                            if (!isNullOrUndefined(_this.zerothLevelData)) {
                                setValue('cancel', false, _this.zerothLevelData);
                                getValue('grid.renderModule', _this.parent).dataManagerSuccess(_this.zerothLevelData);
                                _this.zerothLevelData = null;
                            }
                            _this.parent.grid.hideSpinner();
                        }
                    });
                }
            }
        }
        else if (data instanceof Array) {
            this.convertJSONData(data);
        }
    };
    DataManipulation.prototype.convertJSONData = function (data) {
        this.hierarchyData = [];
        this.taskIds = [];
        if (!this.parent.idMapping) {
            this.hierarchyData = data;
        }
        else {
            var keys = Object.keys(data);
            for (var i = 0; i < keys.length; i++) {
                var tempData = data[i];
                this.hierarchyData.push(extend({}, tempData));
                if (!isNullOrUndefined(tempData[this.parent.idMapping])) {
                    this.taskIds.push(tempData[this.parent.idMapping]);
                }
            }
        }
        if (this.isSelfReference) {
            var selfData = [];
            var mappingData = new DataManager(this.hierarchyData).executeLocal(new Query()
                .group(this.parent.parentIdMapping));
            for (var i = 0; i < mappingData.length; i++) {
                var groupData = mappingData[i];
                var index = this.taskIds.indexOf(groupData.key);
                if (!isNullOrUndefined(groupData.key)) {
                    if (index > -1) {
                        var childData = (groupData.items);
                        this.hierarchyData[index][this.parent.childMapping] = childData;
                        continue;
                    }
                }
                selfData.push.apply(selfData, groupData.items);
            }
            this.hierarchyData = this.selfReferenceUpdate(selfData);
        }
        if (!Object.keys(this.hierarchyData).length) {
            var isGantt = 'isGantt';
            var referenceData = !(this.parent.dataSource instanceof DataManager) && this.parent[isGantt];
            this.parent.flatData = referenceData ? (this.parent.dataSource) : [];
        }
        else {
            this.createRecords(this.hierarchyData);
        }
        this.storedIndex = -1;
    };
    // private crudActions(): void {
    //   if (this.parent.dataSource instanceof DataManager && (this.parent.dataSource.adaptor instanceof RemoteSaveAdaptor)) {
    //     let oldUpdate: Function = this.parent.dataSource.adaptor.update;
    //     this.parent.dataSource.adaptor.update =
    //         function (dm: DataManager, keyField: string, value: Object, tableName?: string, query?: Query, original?: Object): Object {
    //                value = getPlainData(value);
    //                return oldUpdate.apply(this, [dm, keyField, value, tableName, query, original]);
    //              }
    //   }
    // }
    DataManipulation.prototype.selfReferenceUpdate = function (selfData) {
        var result = [];
        while (this.hierarchyData.length > 0 && selfData.length > 0) {
            var index = selfData.indexOf(this.hierarchyData[0]);
            if (index === -1) {
                this.hierarchyData.shift();
            }
            else {
                result.push(this.hierarchyData.shift());
                selfData.splice(index, 1);
            }
        }
        return result;
    };
    /**
     * Function to update the zeroth level parent records in remote binding
     *
     * @param {BeforeDataBoundArgs} args - contains data before its bounds to tree grid
     * @hidden
     * @returns {void}
     */
    DataManipulation.prototype.updateParentRemoteData = function (args) {
        var records = args.result;
        if (!this.parent.hasChildMapping && !this.parentItems.length &&
            (!this.parent.loadChildOnDemand)) {
            this.zerothLevelData = args;
            setValue('cancel', true, args);
        }
        else {
            if (!this.parent.loadChildOnDemand) {
                for (var rec = 0; rec < records.length; rec++) {
                    if (isCountRequired(this.parent) && records[rec].hasChildRecords && this.parent.initialRender) {
                        records[rec].expanded = false;
                    }
                    if (isNullOrUndefined(records[rec].index)) {
                        records[rec].taskData = extend({}, records[rec]);
                        records[rec].uniqueID = getUid(this.parent.element.id + '_data_');
                        setValue('uniqueIDCollection.' + records[rec].uniqueID, records[rec], this.parent);
                        records[rec].level = 0;
                        records[rec].index = Math.ceil(Math.random() * 1000);
                        if ((records[rec][this.parent.hasChildMapping] ||
                            this.parentItems.indexOf(records[rec][this.parent.idMapping]) !== -1)) {
                            records[rec].hasChildRecords = true;
                        }
                        records[rec].checkboxState = 'uncheck';
                    }
                }
            }
            else {
                if (!isNullOrUndefined(records)) {
                    this.convertToFlatData(records);
                }
            }
        }
        args.result = this.parent.loadChildOnDemand ? this.parent.flatData : records;
        this.parent.notify('updateResults', args);
    };
    /**
     * Function to manipulate datasource
     *
     * @param {{record: ITreeData, rows: HTMLTableRowElement[], parentRow: HTMLTableRowElement}} rowDetails - Row details for which child rows has to be fetched
     * @param {ITreeData} rowDetails.record - current expanding record
     * @param {HTMLTableRowElement[]} rowDetails.rows - Expanding Row element
     * @param {HTMLTableRowElement} rowDetails.parentRow  - Curent expanding row element
     * @param {boolean} isChild - Specified whether current record is already a child record
     * @hidden
     * @returns {void}
     */
    DataManipulation.prototype.collectExpandingRecs = function (rowDetails, isChild) {
        var gridRows = this.parent.getRows();
        if (this.parent.rowTemplate) {
            var rows = this.parent.getContentTable().rows;
            gridRows = [].slice.call(rows);
        }
        var childRecord;
        if (rowDetails.rows.length > 0) {
            if (!isChild) {
                rowDetails.record.expanded = true;
            }
            for (var i = 0; i < rowDetails.rows.length; i++) {
                rowDetails.rows[i].style.display = 'table-row';
                if (this.parent.loadChildOnDemand) {
                    var targetEle = rowDetails.rows[i].getElementsByClassName('e-treegridcollapse')[0];
                    childRecord = this.parent.rowTemplate ? this.parent.grid.getCurrentViewRecords()[rowDetails.rows[i].rowIndex] :
                        this.parent.grid.getRowObjectFromUID(rowDetails.rows[i].getAttribute('data-Uid')).data;
                    if (!isNullOrUndefined(targetEle) && childRecord.expanded) {
                        addClass([targetEle], 'e-treegridexpand');
                        removeClass([targetEle], 'e-treegridcollapse');
                    }
                    var childRows = [];
                    childRows = gridRows.filter(function (r) {
                        return r.querySelector('.e-gridrowindex' + childRecord.index + 'level' + (childRecord.level + 1));
                    });
                    if (childRows.length && childRecord.expanded) {
                        this.collectExpandingRecs({ record: childRecord, rows: childRows, parentRow: rowDetails.parentRow }, true);
                    }
                }
                var expandingTd = rowDetails.rows[i].querySelector('.e-detailrowcollapse');
                if (!isNullOrUndefined(expandingTd)) {
                    this.parent.grid.detailRowModule.expand(expandingTd);
                }
            }
        }
        else {
            this.fetchRemoteChildData({ record: rowDetails.record, rows: rowDetails.rows, parentRow: rowDetails.parentRow });
        }
    };
    DataManipulation.prototype.fetchRemoteChildData = function (rowDetails) {
        var _this = this;
        var args = { row: rowDetails.parentRow, data: rowDetails.record };
        var dm = this.parent.dataSource;
        var qry = this.parent.grid.getDataModule().generateQuery();
        var clonequries = qry.queries.filter(function (e) { return e.fn !== 'onPage' && e.fn !== 'onWhere'; });
        qry.queries = clonequries;
        qry.isCountRequired = true;
        qry.where(this.parent.parentIdMapping, 'equal', rowDetails.record[this.parent.idMapping]);
        showSpinner(this.parent.element);
        dm.executeQuery(qry).then(function (e) {
            var datas = _this.parent.grid.currentViewData.slice();
            var inx = datas.indexOf(rowDetails.record);
            if (inx === -1) {
                _this.parent.grid.getRowsObject().forEach(function (rows) {
                    if (rows.data.uniqueID === rowDetails.record.uniqueID) {
                        inx = rows.index;
                    }
                });
            }
            var haveChild = getObject('actual.nextLevel', e);
            var result = e.result;
            rowDetails.record.childRecords = result;
            for (var r = 0; r < result.length; r++) {
                result[r].taskData = extend({}, result[r]);
                result[r].level = rowDetails.record.level + 1;
                result[r].index = Math.ceil(Math.random() * 1000);
                var parentData = extend({}, rowDetails.record);
                delete parentData.childRecords;
                result[r].parentItem = parentData;
                result[r].parentUniqueID = rowDetails.record.uniqueID;
                result[r].uniqueID = getUid(_this.parent.element.id + '_data_');
                result[r].checkboxState = 'uncheck';
                setValue('uniqueIDCollection.' + result[r].uniqueID, result[r], _this.parent);
                // delete result[r].parentItem.childRecords;
                if ((result[r][_this.parent.hasChildMapping] || _this.parentItems.indexOf(result[r][_this.parent.idMapping]) !== -1)
                    && !(haveChild && !haveChild[r])) {
                    result[r].hasChildRecords = true;
                    result[r].expanded = false;
                }
                datas.splice(inx + r + 1, 0, result[r]);
            }
            setValue('result', datas, e);
            setValue('action', 'beforecontentrender', e);
            _this.parent.trigger(events.actionComplete, e);
            hideSpinner(_this.parent.element);
            if (_this.parent.grid.aggregates.length > 0 && !_this.parent.enableVirtualization) {
                var gridQuery = getObject('query', e);
                var result_1 = 'result';
                if (isNullOrUndefined(gridQuery)) {
                    gridQuery = getValue('grid.renderModule.data', _this.parent).aggregateQuery(new Query());
                }
                if (!isNullOrUndefined(gridQuery)) {
                    var summaryQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onAggregates'; });
                    e[result_1] = _this.parent.summaryModule.calculateSummaryValue(summaryQuery, e[result_1], true);
                }
            }
            e.count = _this.parent.grid.pageSettings.totalRecordsCount;
            var virtualArgs = {};
            if (_this.parent.enableVirtualization) {
                _this.remoteVirtualAction(virtualArgs);
            }
            var notifyArgs = { index: inx, childData: result };
            if (_this.parent.enableInfiniteScrolling) {
                _this.parent.notify('infinite-remote-expand', notifyArgs);
            }
            else {
                getValue('grid.renderModule', _this.parent).dataManagerSuccess(e, virtualArgs);
            }
            _this.parent.trigger(events.expanded, args);
        });
    };
    DataManipulation.prototype.remoteVirtualAction = function (virtualArgs) {
        virtualArgs.requestType = 'refresh';
        setValue('isExpandCollapse', true, virtualArgs);
        var contentModule = getValue('grid.contentModule', this.parent);
        var currentInfo = getValue('currentInfo', contentModule);
        var prevInfo = getValue('prevInfo', contentModule);
        if (currentInfo.loadNext && this.parent.grid.pageSettings.currentPage === currentInfo.nextInfo.page) {
            this.parent.grid.pageSettings.currentPage = prevInfo.page;
        }
    };
    DataManipulation.prototype.beginSorting = function () {
        this.isSortAction = true;
    };
    DataManipulation.prototype.createRecords = function (data, parentRecords) {
        var treeGridData = [];
        var keys = Object.keys(data);
        for (var i = 0, len = keys.length; i < len; i++) {
            var currentData = extend({}, data[i]);
            currentData.taskData = data[i];
            var level = 0;
            this.storedIndex++;
            if (!Object.prototype.hasOwnProperty.call(currentData, 'index')) {
                currentData.index = this.storedIndex;
            }
            if ((!isNullOrUndefined(currentData[this.parent.childMapping]) && !isCountRequired(this.parent)) ||
                ((currentData[this.parent.hasChildMapping]) && isCountRequired(this.parent) && this.parent.initialRender)) {
                currentData.hasChildRecords = true;
                if (this.parent.enableCollapseAll || !isNullOrUndefined(this.parent.dataStateChange)
                    && isNullOrUndefined(currentData[this.parent.childMapping])) {
                    currentData.expanded = false;
                }
                else {
                    currentData.expanded = !isNullOrUndefined(currentData[this.parent.expandStateMapping])
                        ? currentData[this.parent.expandStateMapping] : true;
                }
            }
            if (!Object.prototype.hasOwnProperty.call(currentData, 'index')) {
                currentData.index = currentData.hasChildRecords ? this.storedIndex : this.storedIndex;
            }
            if (this.isSelfReference && isNullOrUndefined(currentData[this.parent.parentIdMapping])) {
                this.parent.parentData.push(currentData);
            }
            currentData.uniqueID = getUid(this.parent.element.id + '_data_');
            setValue('uniqueIDCollection.' + currentData.uniqueID, currentData, this.parent);
            if (!isNullOrUndefined(parentRecords)) {
                var parentData = extend({}, parentRecords);
                delete parentData.childRecords;
                delete parentData[this.parent.childMapping];
                if (this.isSelfReference) {
                    delete parentData.taskData[this.parent.childMapping];
                }
                currentData.parentItem = parentData;
                currentData.parentUniqueID = parentData.uniqueID;
                level = parentRecords.level + 1;
            }
            if (!Object.prototype.hasOwnProperty.call(currentData, 'level')) {
                currentData.level = level;
            }
            currentData.checkboxState = 'uncheck';
            if (isNullOrUndefined(currentData[this.parent.parentIdMapping]) || currentData.parentItem) {
                this.parent.flatData.push(currentData);
            }
            if (!this.isSelfReference && currentData.level === 0) {
                this.parent.parentData.push(currentData);
            }
            if (!isNullOrUndefined(currentData[this.parent.childMapping] && currentData[this.parent.childMapping].length)) {
                var record = this.createRecords(currentData[this.parent.childMapping], currentData);
                currentData.childRecords = record;
            }
            treeGridData.push(currentData);
        }
        return treeGridData;
    };
    /**
     * Function to perform filtering/sorting action for local data
     *
     * @param {BeforeDataBoundArgs} args - data details to be processed before binding to grid
     * @hidden
     * @returns {void}
     */
    DataManipulation.prototype.dataProcessor = function (args) {
        var isExport = getObject('isExport', args);
        var expresults = getObject('expresults', args);
        var exportType = getObject('exportType', args);
        var isPrinting = getObject('isPrinting', args);
        var dataObj;
        var actionArgs = getObject('actionArgs', args);
        var requestType = getObject('requestType', args);
        var actionData = getObject('data', args);
        var action = getObject('action', args);
        var actionAddArgs = actionArgs;
        var primaryKeyColumnName = this.parent.getPrimaryKeyFieldNames()[0];
        var dataValue = getObject('data', actionAddArgs);
        if ((!isNullOrUndefined(actionAddArgs)) && (!isNullOrUndefined(actionAddArgs.action)) && (actionAddArgs.action === 'add')
            && (!isNullOrUndefined(actionAddArgs.data)) && isNullOrUndefined(actionAddArgs.data[primaryKeyColumnName])) {
            actionAddArgs.data[primaryKeyColumnName] = args.result[actionAddArgs.index][primaryKeyColumnName];
            dataValue.taskData[primaryKeyColumnName] = args.result[actionAddArgs.index][primaryKeyColumnName];
        }
        if ((!isNullOrUndefined(actionArgs) && Object.keys(actionArgs).length) || requestType === 'save') {
            requestType = requestType ? requestType : actionArgs.requestType;
            actionData = actionData ? actionData : getObject('data', actionArgs);
            action = action ? action : getObject('action', actionArgs);
            if (this.parent.editSettings.mode === 'Batch') {
                this.batchChanges = this.parent.grid.editModule.getBatchChanges();
            }
            if (this.parent.isLocalData) {
                this.updateAction(actionData, action, requestType);
            }
        }
        if (isExport && !isNullOrUndefined(expresults)) {
            dataObj = expresults;
        }
        else {
            dataObj = isCountRequired(this.parent) ? getValue('result', this.parent.grid.dataSource)
                : this.parent.grid.dataSource;
        }
        var results = dataObj instanceof DataManager ? dataObj.dataSource.json : dataObj;
        var count = isCountRequired(this.parent) ? getValue('count', this.parent.dataSource)
            : results.length;
        var qry = new Query();
        var gridQuery = getObject('query', args);
        var filterQuery;
        var searchQuery;
        if (!isNullOrUndefined(gridQuery)) {
            filterQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onWhere'; });
            searchQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onSearch'; });
        }
        if ((this.parent.grid.allowFiltering && this.parent.grid.filterSettings.columns.length) ||
            (this.parent.grid.searchSettings.key.length > 0) || (!isNullOrUndefined(gridQuery) &&
            (filterQuery.length || searchQuery.length) && this.parent.isLocalData)) {
            if (isNullOrUndefined(gridQuery)) {
                gridQuery = new Query();
                gridQuery = getValue('grid.renderModule.data', this.parent).filterQuery(gridQuery);
                gridQuery = getValue('grid.renderModule.data', this.parent).searchQuery(gridQuery);
            }
            var fltrQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onWhere'; });
            var srchQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onSearch'; });
            qry.queries = fltrQuery.concat(srchQuery);
            var filteredData = new DataManager(results).executeLocal(qry);
            this.parent.notify('updateFilterRecs', { data: filteredData });
            results = this.dataResults.result;
            this.dataResults.result = null;
            if (this.parent.grid.aggregates.length > 0) {
                var query = getObject('query', args);
                if (isNullOrUndefined(gridQuery)) {
                    gridQuery = getValue('grid.renderModule.data', this.parent).aggregateQuery(new Query());
                }
                if (!isNullOrUndefined(query)) {
                    var summaryQuery = query.queries.filter(function (q) { return q.fn === 'onAggregates'; });
                    results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, results, true);
                }
            }
        }
        if (this.parent.grid.aggregates.length && this.parent.grid.sortSettings.columns.length === 0
            && this.parent.grid.filterSettings.columns.length === 0 && !this.parent.grid.searchSettings.key.length) {
            var gridQuery_1 = getObject('query', args);
            if (isNullOrUndefined(gridQuery_1)) {
                gridQuery_1 = getValue('grid.renderModule.data', this.parent).aggregateQuery(new Query());
            }
            var summaryQuery = gridQuery_1.queries.filter(function (q) { return q.fn === 'onAggregates'; });
            results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.parent.flatData, true);
        }
        if (this.parent.grid.sortSettings.columns.length > 0 || this.isSortAction) {
            this.isSortAction = false;
            var parentData = this.parent.parentData;
            var query = getObject('query', args);
            var srtQry = new Query();
            for (var srt = this.parent.grid.sortSettings.columns.length - 1; srt >= 0; srt--) {
                var getColumnByField = 'getColumnByField';
                var col = this.parent.grid.renderModule.data[getColumnByField](this.parent.grid.
                    sortSettings.columns[srt].field);
                var compFun = col.sortComparer && isOffline(this.parent) ?
                    col.sortComparer.bind(col) :
                    this.parent.grid.sortSettings.columns[srt].direction;
                srtQry.sortBy(this.parent.grid.sortSettings.columns[srt].field, compFun);
            }
            var modifiedData = new DataManager(parentData).executeLocal(srtQry);
            if (this.parent.allowRowDragAndDrop && !isNullOrUndefined(this.parent.rowDragAndDropModule['draggedRecord']) &&
                this.parent.rowDragAndDropModule['droppedRecord'].hasChildRecords && this.parent.rowDragAndDropModule['dropPosition'] !== 'middleSegment') {
                var dragdIndex = modifiedData.indexOf(this.parent.rowDragAndDropModule['draggedRecord']);
                modifiedData.splice(dragdIndex, 1);
                var dropdIndex = modifiedData.indexOf(this.parent.rowDragAndDropModule['droppedRecord']);
                if (this.parent.rowDragAndDropModule['droppedRecord'].hasChildRecords && this.parent.rowDragAndDropModule['dropPosition'] === 'topSegment') {
                    modifiedData.splice(dropdIndex, 0, this.parent.rowDragAndDropModule['draggedRecord']);
                }
                else if (this.parent.rowDragAndDropModule['dropPosition'] === 'bottomSegment') {
                    modifiedData.splice(dropdIndex + 1, 0, this.parent.rowDragAndDropModule['draggedRecord']);
                }
            }
            var sortArgs = { modifiedData: modifiedData, filteredData: results, srtQry: srtQry };
            this.parent.notify('createSort', sortArgs);
            results = sortArgs.modifiedData;
            this.dataResults.result = null;
            this.sortedData = results;
            this.parent.notify('updateModel', {});
            if (this.parent.grid.aggregates.length > 0 && !isNullOrUndefined(query)) {
                var isSort = false;
                var query_1 = getObject('query', args);
                var summaryQuery = query_1.queries.filter(function (q) { return q.fn === 'onAggregates'; });
                results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.sortedData, isSort);
            }
        }
        count = isCountRequired(this.parent) ? getValue('count', this.parent.dataSource)
            : results.length;
        var temp = this.paging(results, count, isExport, isPrinting, exportType, args);
        results = temp.result;
        count = temp.count;
        args.result = results;
        args.count = count;
        this.parent.notify('updateResults', args);
    };
    DataManipulation.prototype.paging = function (results, count, isExport, isPrinting, exportType, args) {
        if (this.parent.allowPaging && (!isExport || exportType === 'CurrentPage')
            && (!isPrinting || this.parent.printMode === 'CurrentPage')) {
            this.parent.notify(events.pagingActions, { result: results, count: count });
            results = this.dataResults.result;
            count = isCountRequired(this.parent) ? getValue('count', this.parent.dataSource)
                : this.dataResults.count;
        }
        else if ((this.parent.enableVirtualization || this.parent.enableInfiniteScrolling) && (!isExport || exportType === 'CurrentPage')
            && getValue('requestType', args) !== 'save') {
            var actArgs = this.parent.enableInfiniteScrolling ? args : getValue('actionArgs', args);
            this.parent.notify(events.pagingActions, { result: results, count: count, actionArgs: actArgs });
            results = this.dataResults.result;
            count = this.dataResults.count;
        }
        var isPdfExport = 'isPdfExport';
        var isCollapsedStatePersist = 'isCollapsedStatePersist';
        if ((isPrinting === true || (args[isPdfExport] && (isNullOrUndefined(args[isCollapsedStatePersist])
            || args[isCollapsedStatePersist]))) && this.parent.printMode === 'AllPages') {
            var actualResults = [];
            for (var i = 0; i < results.length; i++) {
                var expandStatus = getExpandStatus(this.parent, results[i], this.parent.parentData);
                if (expandStatus) {
                    actualResults.push(results[i]);
                }
            }
            results = actualResults;
            count = results.length;
        }
        var value = { result: results, count: count };
        return value;
    };
    DataManipulation.prototype.updateData = function (dataResult) {
        this.dataResults = dataResult;
    };
    DataManipulation.prototype.updateAction = function (actionData, action, requestType) {
        if ((requestType === 'delete' || requestType === 'save')) {
            this.parent.notify(events.crudAction, { value: actionData, action: action || requestType });
        }
        if (requestType === 'batchsave' && this.parent.editSettings.mode === 'Batch') {
            this.parent.notify(events.batchSave, {});
        }
    };
    return DataManipulation;
}());
export { DataManipulation };
