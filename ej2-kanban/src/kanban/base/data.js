/* eslint-disable @typescript-eslint/no-explicit-any */
import { extend } from '@syncfusion/ej2-base';
import { DataManager, Query, Deferred, UrlAdaptor } from '@syncfusion/ej2-data';
import * as events from './constant';
/**
 * Kanban data module
 */
var Data = /** @class */ (function () {
    /**
     * Constructor for data module
     *
     * @param {Kanban} parent Accepts the instance of the Kanban
     */
    function Data(parent) {
        this.dataState = { isPending: false, resolver: null, isDataChanged: false };
        this.parent = parent;
        this.keyField = this.parent.cardSettings.headerField;
        this.dataState = { isDataChanged: false };
        this.isObservable = false;
        this.initDataManager(parent.dataSource, parent.query);
        this.refreshDataManager();
    }
    /**
     * The function used to initialize dataManager` and query
     *
     * @param {Object[] | DataManager} dataSource Accepts the dataSource as collection of objects or Datamanager instance.
     * @param {Query} query Accepts the query to process the data from collections.
     * @returns {void}
     * @private
     */
    Data.prototype.initDataManager = function (dataSource, query) {
        this.dataManager = dataSource instanceof DataManager ? dataSource : new DataManager(dataSource);
        this.query = query instanceof Query ? query : new Query();
        this.kanbanData = new DataManager(this.parent.kanbanData);
    };
    /**
     * The function used to generate updated Query from schedule model
     *
     * @returns {void}
     * @private
     */
    Data.prototype.getQuery = function () {
        return this.query.clone();
    };
    /**
     * The function used to get dataSource by executing given Query
     *
     * @param  {Query} query - A Query that specifies to generate dataSource
     * @returns {void}
     * @private
     */
    Data.prototype.getData = function (query) {
        if (this.parent.dataSource && 'result' in this.parent.dataSource) {
            var def = this.eventPromise({ requestType: '' }, query);
            this.isObservable = true;
            return def.promise;
        }
        return this.dataManager.executeQuery(query);
    };
    Data.prototype.setState = function (state) {
        return this.dataState = state;
    };
    Data.prototype.getStateEventArgument = function (query) {
        var adaptr = new UrlAdaptor();
        var dm = new DataManager({ url: '', adaptor: new UrlAdaptor });
        var state = adaptr.processQuery(dm, query);
        var data = JSON.parse(state.data);
        return extend(data, state.pvtData);
    };
    Data.prototype.eventPromise = function (args, query, index) {
        var _this = this;
        var dataArgs = args;
        var state = this.getStateEventArgument(query);
        var def = new Deferred();
        var deff = new Deferred();
        if (args.requestType !== undefined && this.dataState.isDataChanged !== false) {
            state.action = args;
            if (args.requestType === 'cardChanged' || args.requestType === 'cardRemoved' || args.requestType === 'cardCreated') {
                var editArgs_1 = args;
                editArgs_1.promise = deff.promise;
                editArgs_1.state = state;
                editArgs_1.index = index;
                this.setState({ isPending: true, resolver: deff.resolve });
                dataArgs.endEdit = deff.resolve;
                dataArgs.cancelEdit = deff.reject;
                this.parent.trigger(events.dataSourceChanged, editArgs_1);
                deff.promise.then(function () {
                    _this.setState({ isPending: true, resolver: def.resolve });
                    _this.parent.trigger(events.dataStateChange, state);
                    editArgs_1.addedRecords.forEach(function (data) {
                        _this.parent.kanbanData.push(data);
                    });
                    editArgs_1.changedRecords.forEach(function (changedRecord) {
                        var cardObj = _this.parent.kanbanData.filter(function (data) {
                            return data[_this.parent.cardSettings.headerField] === changedRecord[_this.parent.cardSettings.headerField];
                        })[0];
                        extend(cardObj, changedRecord);
                    });
                    editArgs_1.deletedRecords.forEach(function (deletedRecord) {
                        var index = _this.parent.kanbanData.findIndex(function (data) {
                            return data[_this.parent.cardSettings.headerField] === deletedRecord[_this.parent.cardSettings.headerField];
                        });
                        _this.parent.kanbanData.splice(index, 1);
                    });
                }).catch(function () { _this.parent.hideSpinner(); void 0; });
            }
            else {
                this.setState({ isPending: true, resolver: def.resolve });
                this.parent.trigger(events.dataStateChange, state);
            }
        }
        else {
            this.setState({});
            def.resolve(this.parent.dataSource);
        }
        return def;
    };
    /**
     * The function used to get the table name from the given Query
     *
     * @returns {string} Returns the table name.
     * @private
     */
    Data.prototype.getTable = function () {
        if (this.parent.query) {
            var query = this.getQuery();
            return query.fromTable;
        }
        else {
            return null;
        }
    };
    /**
     * The function is used to send the request and get response from datamanager
     *
     * @returns {void}
     * @private
     */
    Data.prototype.refreshDataManager = function () {
        var _this = this;
        var dataManager = this.getData(this.getQuery());
        dataManager.then(function (e) { return _this.dataManagerSuccess(e); }).catch(function (e) { return _this.dataManagerFailure(e); });
    };
    /**
     * The function is used to handle the success response from dataManager
     *
     * @param {ReturnType} e Accepts the dataManager success result
     * @returns {void}
     * @private
     */
    Data.prototype.dataManagerSuccess = function (e, type, offlineArgs, index) {
        var _this = this;
        if (this.parent.isDestroyed) {
            return;
        }
        if (type) {
            var resultData = extend([], e.result, null, true);
            this.parent.kanbanData = resultData;
        }
        else {
            this.parent.trigger(events.dataBinding, e, function (args) {
                var resultData = extend([], args.result, null, true);
                _this.parent.kanbanData = resultData;
                _this.parent.notify(events.dataReady, { processedData: resultData });
                _this.parent.trigger(events.dataBound, null, function () { return _this.parent.hideSpinner(); });
            });
        }
    };
    /**
     * The function is used to handle the failure response from dataManager
     *
     * @param {ReturnType} e Accepts the dataManager failure result
     * @returns {void}
     * @private
     */
    Data.prototype.dataManagerFailure = function (e) {
        var _this = this;
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.trigger(events.actionFailure, { error: e }, function () { return _this.parent.hideSpinner(); });
    };
    /**
     * The function is used to perform the insert, update, delete and batch actions in datamanager
     *
     * @param {string} updateType Accepts the update type action
     * @param {SaveChanges} params Accepts the savechanges params
     * @param {string} type Accepts the requestType as string
     * @param {Object} data Accepts the data to perform crud action
     * @param {number} index Accepts the index to refresh the data into UI
     * @returns {void}
     * @private
     */
    Data.prototype.updateDataManager = function (updateType, params, type, data, index) {
        var _this = this;
        this.parent.showSpinner();
        var promise;
        var actionArgs = {
            requestType: type, cancel: false, addedRecords: params.addedRecords,
            changedRecords: params.changedRecords, deletedRecords: params.deletedRecords
        };
        this.eventPromise(actionArgs, this.query, index);
        this.parent.trigger(events.actionComplete, actionArgs, function (offlineArgs) {
            if (!offlineArgs.cancel) {
                switch (updateType) {
                    case 'insert':
                        promise = _this.dataManager.insert(data, _this.getTable(), _this.getQuery());
                        break;
                    case 'update':
                        promise = _this.dataManager.update(_this.keyField, data, _this.getTable(), _this.getQuery());
                        break;
                    case 'delete':
                        promise = _this.dataManager.remove(_this.keyField, data, _this.getTable(), _this.getQuery());
                        break;
                    case 'batch':
                        promise = _this.dataManager.saveChanges(params, _this.keyField, _this.getTable(), _this.getQuery());
                        break;
                }
                if (_this.dataManager.dataSource.offline) {
                    if (!_this.isObservable) {
                        _this.kanbanData = _this.dataManager;
                        _this.parent.kanbanData = _this.dataManager.dataSource.json;
                        _this.refreshUI(offlineArgs, index);
                    }
                }
                else {
                    promise.then(function (args) {
                        if (_this.parent.isDestroyed) {
                            return;
                        }
                        var dataManager = _this.getData(_this.getQuery());
                        dataManager.then(function (e) { return _this.dataManagerSuccess(e, 'DataSourceChange', offlineArgs, index); }).catch(function (e) { return _this.dataManagerFailure(e); });
                        if (offlineArgs.requestType === 'cardCreated') {
                            if (!Array.isArray(args)) {
                                offlineArgs.addedRecords[0] = extend(offlineArgs.addedRecords[0], args);
                            }
                            else {
                                _this.modifyArrayData(offlineArgs.addedRecords, args);
                            }
                        }
                        else if (offlineArgs.requestType === 'cardChanged') {
                            if (!Array.isArray(args)) {
                                offlineArgs.changedRecords[0] = extend(offlineArgs.changedRecords[0], args);
                            }
                            else {
                                _this.modifyArrayData(offlineArgs.changedRecords, args);
                            }
                        }
                        else if (offlineArgs.requestType === 'cardRemoved') {
                            if (!Array.isArray(args)) {
                                offlineArgs.deletedRecords[0] = extend(offlineArgs.deletedRecords[0], args);
                            }
                            else {
                                _this.modifyArrayData(offlineArgs.deletedRecords, args);
                            }
                        }
                        _this.refreshUI(offlineArgs, index);
                    }).catch(function (e) {
                        _this.dataManagerFailure(e);
                    });
                }
            }
        });
    };
    Data.prototype.modifyArrayData = function (onLineData, e) {
        if (onLineData.length === e.length) {
            for (var i = 0; i < e.length; i++) {
                onLineData[i] = extend(onLineData[i], e[i]);
            }
        }
        return onLineData;
    };
    /**
     * The function is used to refresh the UI once the data manager action is completed
     *
     * @param {ActionEventArgs} args Accepts the ActionEventArgs to refresh UI.
     * @param {number} position Accepts the index to refresh UI.
     * @returns {void}
     */
    Data.prototype.refreshUI = function (args, position) {
        var _this = this;
        this.parent.layoutModule.columnData = this.parent.layoutModule.getColumnCards();
        if (this.parent.swimlaneSettings.keyField) {
            this.parent.layoutModule.kanbanRows = this.parent.layoutModule.getRows();
            this.parent.layoutModule.swimlaneData = this.parent.layoutModule.getSwimlaneCards();
        }
        args.addedRecords.forEach(function (data, index) {
            if (_this.parent.swimlaneSettings.keyField && !data[_this.parent.swimlaneSettings.keyField]) {
                data[_this.parent.swimlaneSettings.keyField] = '';
            }
            _this.parent.layoutModule.renderCardBasedOnIndex(data, position + index);
        });
        args.changedRecords.forEach(function (data) {
            if (_this.parent.swimlaneSettings.keyField && !data[_this.parent.swimlaneSettings.keyField]) {
                data[_this.parent.swimlaneSettings.keyField] = '';
            }
            _this.parent.layoutModule.removeCard(data);
            _this.parent.layoutModule.renderCardBasedOnIndex(data, position);
            if (_this.parent.layoutModule.isSelectedCard) {
                _this.parent.actionModule.SingleCardSelection(data);
            }
            if (_this.parent.sortSettings.field && _this.parent.sortSettings.sortBy === 'Index'
                && _this.parent.sortSettings.direction === 'Descending' && position > 0) {
                --position;
            }
        });
        args.deletedRecords.forEach(function (data) {
            _this.parent.layoutModule.removeCard(data);
        });
        this.parent.layoutModule.refresh();
        this.parent.renderTemplates();
        this.parent.notify(events.contentReady, {});
        this.parent.trigger(events.dataBound, args, function () { return _this.parent.hideSpinner(); });
    };
    return Data;
}());
export { Data };
