import { Dialog } from '@syncfusion/ej2-popups';
import { createElement, setStyleAttribute, remove, isNullOrUndefined, KeyboardEvents, closest } from '@syncfusion/ej2-base';
import * as cls from '../../common/base/css-constant';
import { Grid, Reorder, Resize, ColumnChooser, Toolbar, ExcelExport, PdfExport } from '@syncfusion/ej2-grids';
import { VirtualScroll, Selection, Edit, Page, CommandColumn } from '@syncfusion/ej2-grids';
import * as events from '../../common/base/constant';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
/**
 * `DrillThroughDialog` module to create drill-through dialog.
 */
/** @hidden */
var DrillThroughDialog = /** @class */ (function () {
    /* eslint-disable-next-line */
    /**
     * Constructor for the dialog action.
     * @hidden
     */
    function DrillThroughDialog(parent) {
        /** @hidden */
        this.indexString = [];
        this.clonedData = [];
        this.isUpdated = false;
        this.gridIndexObjects = {};
        this.gridData = [];
        this.formatList = {};
        this.drillKeyConfigs = {
            escape: 'escape'
        };
        this.parent = parent;
        this.engine = this.parent.dataType === 'olap' ? this.parent.olapEngineModule : this.parent.engineModule;
    }
    DrillThroughDialog.prototype.frameHeaderWithKeys = function (header) {
        var keys = Object.keys(header);
        var keyPos = 0;
        var framedHeader = {}; /* eslint-disable-line */
        while (keyPos < keys.length) {
            framedHeader[keys[keyPos]] = header[keys[keyPos]];
            keyPos++;
        }
        return framedHeader;
    };
    /* eslint-disable-next-line */
    /** @hidden */
    DrillThroughDialog.prototype.showDrillThroughDialog = function (eventArgs) {
        var _this = this;
        this.gridData = eventArgs.rawData;
        for (var i = 0; i < eventArgs.rawData.length; i++) {
            this.clonedData.push(this.frameHeaderWithKeys(eventArgs.rawData[i]));
        }
        var actualText = eventArgs.currentCell.actualText.toString();
        try {
            if (this.parent.currentView === 'Table' && this.parent.editSettings.allowInlineEditing &&
                this.parent.editSettings.allowEditing && eventArgs.rawData.length === 1) {
                this.parent.actionObj.actionName = events.editRecord;
                if (this.parent.actionBeginMethod()) {
                    return;
                }
                this.editCell(eventArgs);
            }
            else {
                this.removeDrillThroughDialog();
                var drillThroughDialog = createElement('div', {
                    id: this.parent.element.id + '_drillthrough',
                    className: cls.DRILLTHROUGH_DIALOG
                });
                this.parent.element.appendChild(drillThroughDialog);
                this.dialogPopUp = new Dialog({
                    animationSettings: { effect: 'Fade' },
                    allowDragging: false,
                    header: this.parent.localeObj.getConstant('details'),
                    content: this.createDrillThroughGrid(eventArgs),
                    cssClass: this.parent.cssClass,
                    beforeOpen: function () {
                        _this.drillThroughGrid.setProperties({
                            dataSource: _this.parent.editSettings.allowEditing ?
                                _this.dataWithPrimarykey(eventArgs) : _this.gridData,
                            height: !_this.parent.editSettings.allowEditing ? 300 : 220
                        }, false);
                    },
                    beforeClose: function () {
                        if (_this.parent.editSettings.allowEditing && _this.isUpdated) {
                            if (_this.parent.dataSourceSettings.type === 'CSV') {
                                _this.updateData(_this.drillThroughGrid.dataSource);
                            }
                            var gridIndexObjectsValue = Object.keys(_this.gridIndexObjects);
                            var previousPosition = [];
                            for (var _i = 0, gridIndexObjectsValue_1 = gridIndexObjectsValue; _i < gridIndexObjectsValue_1.length; _i++) {
                                var value = gridIndexObjectsValue_1[_i];
                                previousPosition.push(_this.gridIndexObjects[value]);
                            }
                            var count = Object.keys(_this.gridIndexObjects).length;
                            var addItems = [];
                            var prevItems = [];
                            var index = 0;
                            /* eslint-disable @typescript-eslint/dot-notation */
                            for (var _a = 0, _b = _this.drillThroughGrid.dataSource; _a < _b.length; _a++) {
                                var item = _b[_a];
                                if (isNullOrUndefined(item['__index']) || item['__index'] === '') {
                                    for (var _c = 0, _d = _this.engine.fields; _c < _d.length; _c++) {
                                        var field = _d[_c];
                                        if (isNullOrUndefined(item[field])) {
                                            delete item[field];
                                        }
                                    }
                                    delete item['__index'];
                                    addItems.push(item);
                                }
                                else if (count > 0) {
                                    delete _this.gridIndexObjects[item['__index'].toString()];
                                    prevItems.push(item);
                                    count--;
                                }
                                if (_this.parent.dataSourceSettings.mode === 'Server') {
                                    if (item['__index']) {
                                        delete item['__index'];
                                    }
                                    if (_this.gridData[index]['__index']) {
                                        delete _this.gridData[index]['__index'];
                                    }
                                }
                                index++;
                            }
                            count = 0;
                            if (_this.parent.dataSourceSettings.mode === 'Server') {
                                var gridIndex = []; /* eslint-disable-line */
                                var keys = Object.keys(_this.gridIndexObjects);
                                for (var len = 0; len < keys.length; len++) {
                                    delete _this.parent.drillThroughValue.indexObject[_this.gridIndexObjects[keys[len]]];
                                    gridIndex.push({ Key: keys[len], Value: _this.gridIndexObjects[keys[len]] }); /* eslint-disable-line */
                                }
                                var indexObject = []; /* eslint-disable-line */
                                keys = Object.keys(_this.parent.drillThroughValue.indexObject);
                                for (var len = 0; len < keys.length; len++) {
                                    indexObject.push({ Key: keys[len], Value: _this.parent.drillThroughValue.indexObject[keys[len]] }); /* eslint-disable-line */
                                }
                                _this.parent.getEngine('updateRawData', null, null, null, null, null, null, null, { 'addedData': addItems, 'removedData': gridIndex, 'updatedData': prevItems, indexObject: indexObject });
                            }
                            else {
                                var items = [];
                                var data = (_this.parent.allowDataCompression && _this.parent.enableVirtualization) ?
                                    _this.parent.engineModule.actualData : _this.parent.engineModule.data;
                                for (var _e = 0, _f = data; _e < _f.length; _e++) {
                                    var item = _f[_e];
                                    delete item['__index'];
                                    if (_this.gridIndexObjects[count.toString()] === undefined) {
                                        items.push(item);
                                    }
                                    count++;
                                }
                                /* eslint-enable @typescript-eslint/dot-notation */
                                items = items.concat(addItems);
                                var eventArgs_1 = {
                                    currentData: _this.drillThroughGrid.dataSource,
                                    previousData: _this.clonedData,
                                    previousPosition: previousPosition,
                                    cancel: false
                                };
                                _this.parent.trigger(events.editCompleted, eventArgs_1);
                                if (!eventArgs_1.cancel) {
                                    _this.parent.setProperties({ dataSourceSettings: { dataSource: items } }, true);
                                    _this.engine.updateGridData(_this.parent.dataSourceSettings);
                                    _this.parent.pivotValues = _this.engine.pivotValues;
                                }
                            }
                            _this.parent.actionObj.actionName = events.recordUpdated;
                            var actionInfo = {
                                editInfo: {
                                    type: _this.drillThroughGrid.editSettings.mode, action: 'Update', currentData: _this.drillThroughGrid.dataSource,
                                    previousData: _this.clonedData, previousPosition: previousPosition
                                }
                            };
                            _this.parent.actionObj.actionInfo = actionInfo;
                        }
                        _this.isUpdated = false;
                        _this.gridIndexObjects = {};
                    },
                    isModal: true,
                    visible: true,
                    showCloseIcon: true,
                    locale: this.parent.locale,
                    enableRtl: this.parent.enableRtl,
                    width: this.parent.isAdaptive ? '100%' : '60%',
                    position: { X: 'center', Y: 'center' },
                    closeOnEscape: !this.parent.editSettings.allowEditing,
                    target: document.body,
                    close: this.removeDrillThroughDialog.bind(this)
                });
                this.dialogPopUp.isStringTemplate = true;
                this.dialogPopUp.appendTo(drillThroughDialog);
                // this.dialogPopUp.element.querySelector('.e-dlg-header').innerHTML = this.parent.localeObj.getConstant('details');
                setStyleAttribute(this.dialogPopUp.element, { 'visibility': 'visible' });
                if (this.parent.editSettings.allowEditing) {
                    this.drillthroughKeyboardModule = new KeyboardEvents(this.dialogPopUp.element, {
                        keyAction: this.drillthroughKeyActionHandler.bind(this),
                        keyConfigs: this.drillKeyConfigs,
                        eventName: 'keydown'
                    });
                }
            }
        }
        catch (execption) {
            this.parent.actionFailureMethod(execption);
        }
    };
    DrillThroughDialog.prototype.editCell = function (eventArgs) {
        var _this = this;
        var gridResize = this.parent.gridSettings.allowResizing;
        var actualText = eventArgs.currentCell.actualText.toString();
        var indexObject = Number(Object.keys(eventArgs.currentCell.indexObject));
        eventArgs.currentTarget.firstElementChild.style.display = 'none';
        var cellValue = Number(eventArgs.rawData[0][actualText]);
        /* eslint-disable */
        var previousData = this.frameHeaderWithKeys(eventArgs.rawData[eventArgs.rawData.length - 1]);
        var currentData = eventArgs.rawData[eventArgs.rawData.length - 1];
        /* eslint-enable */
        // if (eventArgs.currentCell.actualText in previousData) {
        //     currentData[eventArgs.currentCell.actualText] = eventArgs.currentCell.actualValue;
        // }
        var actionInfo = {
            editInfo: { type: 'Inline editing', action: 'update', data: this.gridData }
        };
        this.parent.actionObj.actionInfo = actionInfo;
        this.numericTextBox = new NumericTextBox({
            value: cellValue,
            enableRtl: this.parent.enableRtl,
            enabled: true,
            format: '####.##',
            locale: this.parent.locale,
            cssClass: this.parent.cssClass,
            change: function () {
                var textBoxValue = _this.numericTextBox.value;
                var indexValue = eventArgs.currentCell.indexObject[indexObject];
                eventArgs.rawData[0][actualText] = textBoxValue;
                _this.parent.engineModule.data[indexValue] = eventArgs.rawData[0];
            },
            blur: function () {
                var eventArgs = {
                    currentData: currentData,
                    previousData: previousData,
                    previousPosition: currentData.index,
                    cancel: false
                };
                _this.parent.trigger(events.editCompleted, eventArgs);
                if (!eventArgs.cancel) {
                    _this.parent.setProperties({ dataSourceSettings: { dataSource: _this.parent.engineModule.data } }, true);
                    _this.engine.updateGridData(_this.parent.dataSourceSettings);
                    _this.parent.pivotValues = _this.engine.pivotValues;
                    _this.parent.gridSettings.allowResizing = gridResize;
                }
            }
        });
        var textBoxElement = createElement('input', {
            id: this.parent.element.id + '_inputbox'
        });
        eventArgs.currentTarget.appendChild(textBoxElement);
        this.numericTextBox.appendTo(textBoxElement);
        eventArgs.currentCell.value = this.numericTextBox.value;
        this.numericTextBox.focusIn();
        this.parent.gridSettings.allowResizing = false;
    };
    /* eslint-disable , @typescript-eslint/no-explicit-any */
    DrillThroughDialog.prototype.updateData = function (dataSource) {
        var dataPos = 0;
        var data = (this.parent.allowDataCompression && this.parent.enableVirtualization) ?
            this.parent.engineModule.actualData : this.parent.engineModule.data;
        while (dataPos < dataSource.length) {
            var fields = Object.keys(dataSource[dataPos]);
            var keyPos = 0;
            var framedSet = [];
            while (keyPos < fields.length) {
                if (!isNullOrUndefined(this.parent.engineModule.fieldKeys[fields[keyPos]])) {
                    framedSet[this.parent.engineModule.fieldKeys[fields[keyPos]]] = dataSource[dataPos][fields[keyPos]];
                }
                keyPos++;
            }
            data[dataSource[dataPos]['__index']] = framedSet; /* eslint-disable-line */
            dataPos++;
        }
        if (this.parent.allowDataCompression && this.parent.enableVirtualization) {
            this.parent.engineModule.actualData = data;
        }
        else {
            this.parent.engineModule.data = data;
        }
    };
    DrillThroughDialog.prototype.removeDrillThroughDialog = function () {
        if (this.dialogPopUp && !this.dialogPopUp.isDestroyed) {
            this.parent.actionObj.actionName = events.drillThroughClosed;
            if (this.parent.actionObj.actionName) {
                this.parent.actionCompleteMethod();
            }
            this.dialogPopUp.destroy();
        }
        var dialogElement = document.getElementById(this.parent.element.id + '_drillthrough');
        if (dialogElement) {
            remove(dialogElement);
        }
        if (document.getElementById(this.parent.element.id + '_drillthroughgrid_ccdlg')) {
            remove(document.getElementById(this.parent.element.id + '_drillthroughgrid_ccdlg'));
        }
    };
    /* eslint-disable  */
    DrillThroughDialog.prototype.createDrillThroughGrid = function (eventArgs) {
        var _this = this;
        var drillThroughBody = createElement('div', { id: this.parent.element.id + '_drillthroughbody', className: cls.DRILLTHROUGH_BODY_CLASS });
        var drillThroughBodyHeader = createElement('div', {
            id: this.parent.element.id +
                '_drillthroughbodyheader', className: cls.DRILLTHROUGH_BODY_HEADER_CONTAINER_CLASS
        });
        if (eventArgs.rowHeaders !== '') {
            drillThroughBodyHeader.innerHTML = '<span class=' +
                cls.DRILLTHROUGH_BODY_HEADER_COMMON_CLASS + '><span class=' + cls.DRILLTHROUGH_BODY_HEADER_CLASS + '>' +
                this.parent.localeObj.getConstant('row') + '</span> :<span class=' +
                cls.DRILLTHROUGH_BODY_HEADER_VALUE_CLASS + '>' + eventArgs.rowHeaders + '</span></span>';
        }
        if (eventArgs.columnHeaders !== '') {
            drillThroughBodyHeader.innerHTML = drillThroughBodyHeader.innerHTML + '<span class=' +
                cls.DRILLTHROUGH_BODY_HEADER_COMMON_CLASS + '><span class=' +
                cls.DRILLTHROUGH_BODY_HEADER_CLASS + '>' + this.parent.localeObj.getConstant('column') +
                '</span> :<span class=' + cls.DRILLTHROUGH_BODY_HEADER_VALUE_CLASS + '>' +
                eventArgs.columnHeaders + '</span></span>';
        }
        if (eventArgs.value !== '') {
            var measure = eventArgs.value.split('(')[0];
            var value = eventArgs.value.split('(')[1].split(')')[0];
            if (value !== '0') {
                drillThroughBodyHeader.innerHTML = drillThroughBodyHeader.innerHTML + '<span class=' +
                    cls.DRILLTHROUGH_BODY_HEADER_COMMON_CLASS + '><span class=' +
                    cls.DRILLTHROUGH_BODY_HEADER_CLASS + '>' +
                    measure + '</span> :<span class=' + cls.DRILLTHROUGH_BODY_HEADER_VALUE_CLASS + '>' + value + '</span></span>';
            }
        }
        var toolbarItems = ['ColumnChooser'];
        if (this.parent.editSettings.allowEditing) {
            if (this.parent.editSettings.allowCommandColumns) {
                toolbarItems = ['ColumnChooser', 'Add'];
            }
            else if (this.parent.editSettings.mode === 'Batch') {
                toolbarItems = ['ColumnChooser', 'Add', 'Delete', 'Update', 'Cancel'];
            }
            else if (this.parent.editSettings.mode === 'Dialog') {
                toolbarItems = ['ColumnChooser', 'Add', 'Edit', 'Delete'];
            }
            else {
                toolbarItems = ['ColumnChooser', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'];
            }
        }
        var drillThroughGrid = createElement('div', { id: this.parent.element.id + '_drillthroughgrid', className: cls.DRILLTHROUGH_GRID_CLASS });
        Grid.Inject(Selection, Reorder, Resize, Toolbar, ColumnChooser);
        this.drillThroughGrid = new Grid({
            cssClass: this.parent.cssClass,
            gridLines: 'Default',
            allowResizing: true,
            allowReordering: true,
            showColumnChooser: true,
            enableHover: false,
            toolbar: toolbarItems,
            columns: eventArgs.gridColumns,
            locale: this.parent.locale,
            enableRtl: this.parent.enableRtl,
            enableVirtualization: !this.parent.editSettings.allowEditing,
            allowPaging: this.parent.editSettings.allowEditing,
            pageSettings: { pageSize: 20 },
            rowHeight: this.parent.gridSettings.rowHeight
        });
        if (this.parent.dataType === 'olap') {
            this.formatData();
        }
        var dialogModule = this;
        this.parent.trigger(events.beginDrillThrough, {
            cellInfo: eventArgs,
            gridObj: this.drillThroughGrid,
            type: 'editing'
        });
        if (this.drillThroughGrid.allowExcelExport) {
            Grid.Inject(ExcelExport);
        }
        if (this.drillThroughGrid.allowPdfExport) {
            Grid.Inject(PdfExport);
        }
        if (this.parent.editSettings.allowEditing) {
            Grid.Inject(Edit, Page);
            try {
                this.drillThroughGrid.editSettings = this.parent.editSettings;
                this.drillThroughGrid.actionBegin = function (args) {
                    var actionName = (args.requestType == 'save') ? events.saveEditedRecords : (args.requestType == 'add') ? events.addNewRecord : (args.requestType == 'delete') ? events.removeRecord : '';
                    _this.parent.actionObj.actionName = actionName;
                    if (_this.parent.actionObj.actionName) {
                        if (_this.parent.actionBeginMethod()) {
                            return;
                        }
                    }
                };
                if (this.parent.editSettings.allowCommandColumns) {
                    this.drillThroughGrid.editSettings.mode = 'Normal';
                    this.drillThroughGrid.editSettings.allowEditOnDblClick = false;
                    Grid.Inject(CommandColumn);
                    this.drillThroughGrid.columns.push({
                        headerText: this.parent.localeObj.getConstant('manageRecords'), width: 160, showInColumnChooser: false,
                        commands: [
                            { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' + (this.parent.cssClass ? (' ' + this.parent.cssClass) : '') } },
                            { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' + (this.parent.cssClass ? (' ' + this.parent.cssClass) : '') } },
                            { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' + (this.parent.cssClass ? (' ' + this.parent.cssClass) : '') } },
                            { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' + (this.parent.cssClass ? (' ' + this.parent.cssClass) : '') } }
                        ]
                    });
                }
                else {
                    this.drillThroughGrid.editSettings.allowEditOnDblClick = this.parent.editSettings.allowEditOnDblClick;
                }
                this.drillThroughGrid.columns.push({
                    field: '__index', visible: false, isPrimaryKey: true, type: 'string', showInColumnChooser: false
                });
            }
            catch (execption) {
                this.parent.actionFailureMethod(execption);
            }
            this.drillThroughGrid.actionComplete = function (args) {
                if (args.requestType === 'batchsave' || args.requestType === 'save' || args.requestType === 'delete') {
                    dialogModule.isUpdated = true;
                }
                _this.parent.actionObj.actionName = _this.parent.getActionCompleteName();
                var actionInfo = {
                    editInfo: { type: _this.drillThroughGrid.editSettings.mode, action: args.requestType, data: _this.gridData }
                };
                _this.parent.actionObj.actionInfo = actionInfo;
                if (_this.parent.actionObj.actionName) {
                    _this.parent.actionCompleteMethod();
                }
                if ((dialogModule.drillThroughGrid.editSettings.mode === 'Normal' && args.requestType === 'save' &&
                    dialogModule.drillThroughGrid.element.querySelectorAll('.e-tbar-btn:hover').length > 0 &&
                    !dialogModule.parent.editSettings.allowCommandColumns) || args.requestType === 'batchsave') {
                    dialogModule.dialogPopUp.hide();
                }
            };
            this.drillThroughGrid.beforeBatchSave = function () {
                dialogModule.isUpdated = true;
            };
            /* eslint-enable @typescript-eslint/indent */
        }
        else {
            Grid.Inject(VirtualScroll);
        }
        document.body.appendChild(drillThroughGrid);
        this.drillThroughGrid.isStringTemplate = true;
        this.drillThroughGrid.appendTo(drillThroughGrid);
        drillThroughBody.appendChild(drillThroughBodyHeader);
        drillThroughBody.appendChild(drillThroughGrid);
        return drillThroughBody;
    };
    /** @hidden */
    DrillThroughDialog.prototype.frameGridColumns = function (rawData) {
        var keys = this.parent.dataType === 'olap' ? rawData[0] ? Object.keys(rawData[0]) : [] :
            Object.keys(this.engine.fieldList);
        var columns = [];
        if (this.parent.dataSourceSettings.formatSettings.length > 0) {
            for (var i = 0; i < this.parent.dataSourceSettings.formatSettings.length; i++) {
                this.formatList[this.parent.dataSourceSettings.formatSettings[i].name] = this.parent.dataSourceSettings.formatSettings[i].format;
            }
        }
        if (this.parent.dataType === 'olap') {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                columns.push({
                    field: key.replace(/_x005B_|_x0020_|_x005D_|_x0024_/g, '').replace('].[', '').split('.').reverse().join(''),
                    headerText: key.replace(/_x005B_|_x005D_|_x0024_/g, '').replace(/_x0020_/g, ' ').
                        replace('].[', '').split('.').reverse().join('.'),
                    width: 120,
                    visible: true,
                    validationRules: { required: true },
                    format: !isNullOrUndefined(this.formatList[key]) ? this.formatList[key] : null,
                    type: !isNullOrUndefined(this.formatList[key]) ? null : 'string'
                });
            }
        }
        else {
            for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
                var key = keys_2[_a];
                if (this.engine.fieldList[key].aggregateType !== 'CalculatedField') {
                    var editType = '';
                    var isDateField = ((this.engine.fieldList[key].type === 'date' || this.engine.fieldList[key].type === 'datetime')
                        && (this.isDateFieldExist(key) || (rawData[0] && rawData[0][key] && rawData[0][key].toString().indexOf(' ') === -1))) ? true : false;
                    if (this.engine.fieldList[key].type === 'number') {
                        editType = 'numericedit';
                    }
                    else if (this.engine.fieldList[key].type === 'date' && isDateField) {
                        editType = 'datepickeredit';
                    }
                    else if (this.engine.fieldList[key].type === 'datetime' && isDateField) {
                        editType = 'datetimepickeredit';
                    }
                    else {
                        editType = 'defaultedit';
                    }
                    columns.push({
                        field: key,
                        headerText: this.engine.fieldList[key].caption,
                        width: 120,
                        visible: this.engine.fieldList[key].isSelected,
                        validationRules: { required: true },
                        editType: editType,
                        format: !isNullOrUndefined(this.formatList[key]) ? this.formatList[key] : undefined,
                        type: !isNullOrUndefined(this.formatList[key]) ? null : 'string'
                    });
                }
            }
        }
        return columns;
    };
    DrillThroughDialog.prototype.isDateFieldExist = function (key) {
        for (var len = 0; len < this.parent.dataSourceSettings.formatSettings.length; len++) {
            if (this.parent.dataSourceSettings.formatSettings[len].name === key &&
                this.parent.dataSourceSettings.formatSettings[len].type.indexOf('date') > -1) {
                return true;
            }
        }
        for (var len = 0; len < this.parent.dataSourceSettings.fieldMapping.length; len++) {
            if (this.parent.dataSourceSettings.fieldMapping[len].name === key &&
                this.parent.dataSourceSettings.fieldMapping[len].dataType.indexOf('date') > -1) {
                return true;
            }
        }
        return false;
    };
    DrillThroughDialog.prototype.formatData = function () {
        var index = 0;
        while (index < this.gridData.length) {
            var data = this.gridData[index];
            var keys = Object.keys(this.gridData[index]);
            var newData = {};
            var i = 0;
            while (i < keys.length) {
                var key = keys[i].replace(/_x005B_|_x0020_|_x005D_|_x0024_/g, '').replace('].[', '').split('.').reverse().join('');
                newData[key] = data[keys[i]];
                i++;
            }
            this.gridData[index] = newData;
            index++;
        }
    };
    DrillThroughDialog.prototype.dataWithPrimarykey = function (eventArgs) {
        var indexString = this.indexString.length > 0 ? this.indexString : Object.keys(eventArgs.currentCell.indexObject);
        var rawData = this.gridData;
        var count = 0;
        for (var _i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {
            var item = rawData_1[_i];
            item['__index'] = indexString[count];
            this.gridIndexObjects[indexString[count].toString()] = Number(indexString[count]);
            count++;
        }
        return rawData;
    };
    DrillThroughDialog.prototype.drillthroughKeyActionHandler = function (e) {
        switch (e.action) {
            case 'escape':
                this.processClose(e);
                break;
        }
    };
    DrillThroughDialog.prototype.processClose = function (e) {
        var target = e.target;
        if (target && closest(target, '.e-popup.e-popup-open')) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            var dialogInstance = closest(target, '.e-popup.e-popup-open').ej2_instances[0];
            if (dialogInstance && !dialogInstance.closeOnEscape) {
                var button = dialogInstance.element.getAttribute('data-fieldName');
                dialogInstance.hide();
                if (this.parent.element) {
                    var pivotButtons = [].slice.call(this.parent.element.querySelectorAll('.e-pivot-button'));
                    for (var _i = 0, pivotButtons_1 = pivotButtons; _i < pivotButtons_1.length; _i++) {
                        var item = pivotButtons_1[_i];
                        if (item.getAttribute('data-uid') === button) {
                            item.focus();
                            break;
                        }
                    }
                }
                e.preventDefault();
                return;
            }
        }
    };
    /**
     * To destroy the drillthrough keyboard module.
     * @returns  {void}
     * @hidden
     */
    DrillThroughDialog.prototype.destroy = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        if (this.drillthroughKeyboardModule && !this.drillthroughKeyboardModule.isDestroyed) {
            this.drillthroughKeyboardModule.destroy();
            this.drillthroughKeyboardModule = null;
        }
        else {
            return;
        }
    };
    return DrillThroughDialog;
}());
export { DrillThroughDialog };
