var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Cell, CellType } from '@syncfusion/ej2-grids';
import { VirtualContentRenderer } from '@syncfusion/ej2-grids';
import { InterSectionObserver } from '@syncfusion/ej2-grids';
import { TreeVirtualRowModelGenerator } from '../renderer/virtual-row-model-generator';
import * as events from '../base/constant';
import { isNullOrUndefined, EventHandler, getValue, setValue, Browser, debounce } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { isCountRequired } from '../utils';
var VirtualTreeContentRenderer = /** @class */ (function (_super) {
    __extends(VirtualTreeContentRenderer, _super);
    function VirtualTreeContentRenderer(parent, locator) {
        var _this = _super.call(this, parent, locator) || this;
        _this.isExpandCollapse = false;
        _this.translateY = 0;
        _this.maxiPage = 0;
        _this.recordAdded = false;
        /** @hidden */
        _this.startIndex = -1;
        _this.endIndex = -1;
        _this.preTranslate = 0;
        _this.isRemoteExpand = false;
        /** @hidden */
        _this.isDataSourceChanged = false;
        _this.addEventListener();
        return _this;
    }
    VirtualTreeContentRenderer.prototype.getModelGenerator = function () {
        return new TreeVirtualRowModelGenerator(this.parent);
    };
    VirtualTreeContentRenderer.prototype.getRowByIndex = function (index) {
        return this.parent.getDataRows().filter(function (e) { return parseInt(e.getAttribute('data-rowindex'), 10) === index; })[0];
    };
    VirtualTreeContentRenderer.prototype.addEventListener = function () {
        this.parent.on(events.virtualActionArgs, this.virtualOtherAction, this);
        this.parent.on(events.indexModifier, this.indexModifier, this);
    };
    VirtualTreeContentRenderer.prototype.virtualOtherAction = function (args) {
        if (args.setTop) {
            this.translateY = 0;
            this.startIndex = 0;
            this.endIndex = this.parent.pageSettings.pageSize - 1;
        }
        else if (args.isExpandCollapse) {
            this.isExpandCollapse = true;
        }
    };
    VirtualTreeContentRenderer.prototype.indexModifier = function (args) {
        var content = this.parent.getContent().querySelector('.e-content');
        if (this.recordAdded && this.startIndex > -1 && this.endIndex > -1) {
            if (this.endIndex > args.count - this.parent.pageSettings.pageSize) {
                var nextSetResIndex = ~~(content.scrollTop / this.parent.getRowHeight());
                var lastIndex = nextSetResIndex + this.parent.getRows().length;
                if (lastIndex > args.count) {
                    lastIndex = nextSetResIndex +
                        (args.count - nextSetResIndex);
                }
                this.startIndex = lastIndex - this.parent.getRows().length;
                this.endIndex = lastIndex;
            }
            else {
                this.startIndex += 1;
                this.endIndex += 1;
            }
            this.recordAdded = false;
        }
        if (this.isDataSourceChanged) {
            this.startIndex = 0;
            this.endIndex = this.parent.pageSettings.pageSize - 1;
        }
        args.startIndex = this.startIndex;
        args.endIndex = this.endIndex;
    };
    VirtualTreeContentRenderer.prototype.eventListener = function (action) {
        var _this = this;
        if (!(this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== '') || !isCountRequired(this.parent)) {
            this.parent[action]('data-ready', this.onDataReady, this);
            this.parent[action]('refresh-virtual-block', this.refreshContentRows, this);
            this.fn = function () {
                _this.observers.observes(function (scrollArgs) { return _this.scrollListeners(scrollArgs); }, _this.onEnteredAction());
                _this.parent.off('content-ready', _this.fn);
            };
            this.parent.addEventListener('dataBound', this.dataBoundEvent.bind(this));
            this.parent.addEventListener('rowSelected', this.rowSelectedEvent.bind(this));
            this.parent[action]('select-virtual-Row', this.toSelectVirtualRow, this);
            this.parent.on('content-ready', this.fn, this);
            this.parent.addEventListener(events.actionComplete, this.onActionComplete.bind(this));
            this.parent[action]('virtual-scroll-edit-action-begin', this.beginEdit, this);
            this.parent[action]('virtual-scroll-add-action-begin', this.beginAdd, this);
            this.parent[action]('virtual-scroll-edit-success', this.virtualEditSuccess, this);
            this.parent[action]('edit-reset', this.resetIseditValue, this);
            this.parent[action]('get-virtual-data', this.getData, this);
            this.parent[action]('virtual-scroll-edit-cancel', this.cancelEdit, this);
            this.parent[action]('select-row-on-context-open', this.toSelectRowOnContextOpen, this);
            this.parent[action]('refresh-virtual-editform-cells', this.refreshCell, this);
            this.parent[action]('virtaul-cell-focus', this.cellFocus, this);
        }
        else {
            _super.prototype.eventListener.call(this, 'on');
        }
    };
    VirtualTreeContentRenderer.prototype.cellFocus = function (e) {
        var virtualCellFocus = 'virtualCellFocus';
        _super.prototype[virtualCellFocus].call(this, e);
    };
    VirtualTreeContentRenderer.prototype.onDataReady = function (e) {
        _super.prototype.onDataReady.call(this, e);
        if (!(this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== '') || !isCountRequired(this.parent)) {
            if (!isNullOrUndefined(e.count)) {
                this.totalRecords = e.count;
                if (!this.parent.enableColumnVirtualization) {
                    getValue('virtualEle', this).setVirtualHeight(this.parent.getRowHeight() * e.count, '100%');
                }
            }
            if ((!isNullOrUndefined(e.requestType) && e.requestType.toString() === 'collapseAll') || (this.isDataSourceChanged && (this.startIndex === -1 || this.startIndex === 0 && this['preStartIndex'] === 0))) {
                this.contents.scrollTop = 0;
                this.isDataSourceChanged = false;
            }
        }
    };
    VirtualTreeContentRenderer.prototype.renderTable = function () {
        _super.prototype.renderTable.call(this);
        if (!(this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== '') || !isCountRequired(this.parent)) {
            getValue('observer', this).options.debounceEvent = false;
            this.observers = new TreeInterSectionObserver(getValue('observer', this).element, getValue('observer', this).options);
            this.contents = this.getPanel().firstChild;
        }
    };
    VirtualTreeContentRenderer.prototype.getTranslateY = function (sTop, cHeight, info, isOnenter) {
        if ((this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== undefined
            && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== '') || isCountRequired(this.parent)) {
            if (this.isRemoteExpand) {
                this.isRemoteExpand = false;
                return this.preTranslate;
            }
            else {
                this.preTranslate = _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
                return _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
            }
        }
        else {
            return _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
        }
    };
    VirtualTreeContentRenderer.prototype.dataBoundEvent = function () {
        var dataBoundEve = 'dataBound';
        var initialRowTop = 'initialRowTop';
        if (this.parent.getRows().length && !this[initialRowTop] && !isNullOrUndefined(this.parent.getRowByIndex(0))) {
            var rowTop = this.parent.getRowByIndex(0).getBoundingClientRect().top;
            var gridTop = this.parent.element.getBoundingClientRect().top;
            if (rowTop > 0) {
                this[initialRowTop] = this.parent.getRowByIndex(0).getBoundingClientRect().top - gridTop;
            }
            else {
                this[initialRowTop] = this.content.getBoundingClientRect().top -
                    this.parent.getRowByIndex(0).getBoundingClientRect().height;
            }
        }
        _super.prototype[dataBoundEve].call(this);
    };
    VirtualTreeContentRenderer.prototype.rowSelectedEvent = function (args) {
        var rowSelected = 'rowSelected';
        _super.prototype[rowSelected].call(this, args);
    };
    VirtualTreeContentRenderer.prototype.toSelectVirtualRow = function (args) {
        if (this.parent.isEdit) {
            return;
        }
        var selectVirtualRow = 'selectVirtualRow';
        var containerRect = 'containerRect';
        if (isNullOrUndefined(this.observer[containerRect])) {
            this.observer[containerRect] = this.observers[containerRect];
        }
        if (isNullOrUndefined(this.parent['clipboardModule'].treeGridParent.editModule) || args.selectedIndex !== 0 ||
            isNullOrUndefined(this.parent['clipboardModule'].treeGridParent.editModule['addRowIndex'])) {
            _super.prototype[selectVirtualRow].call(this, args);
        }
    };
    VirtualTreeContentRenderer.prototype.refreshCell = function (rowObj) {
        rowObj.cells = this.generateCells();
    };
    VirtualTreeContentRenderer.prototype.generateCells = function () {
        var cells = [];
        for (var i = 0; i < this.parent.columns.length; i++) {
            cells.push(this.generateCell(this.parent.columns[i]));
        }
        return cells;
    };
    VirtualTreeContentRenderer.prototype.generateCell = function (col, rowId, cellType, colSpan, oIndex, foreignKeyData) {
        var opt = {
            'visible': col.visible,
            'isDataCell': !isNullOrUndefined(col.field || col.template),
            'isTemplate': !isNullOrUndefined(col.template),
            'rowID': rowId,
            'column': col,
            'cellType': !isNullOrUndefined(cellType) ? cellType : CellType.Data,
            'colSpan': colSpan,
            'commands': col.commands,
            'isForeignKey': col.isForeignColumn && col.isForeignColumn(),
            'foreignKeyData': col.isForeignColumn && col.isForeignColumn() && getValue(col.field, foreignKeyData)
        };
        if (opt.isDataCell || opt.column.type === 'checkbox' || opt.commands) {
            opt.index = oIndex;
        }
        return new Cell(opt);
    };
    VirtualTreeContentRenderer.prototype.beginEdit = function (e) {
        var selector = '.e-row[data-rowindex="' + e.index + '"]';
        var index = this.parent.getContent().querySelector(selector).rowIndex;
        var rowData = this.parent.getCurrentViewRecords()[index];
        e.data = rowData;
    };
    VirtualTreeContentRenderer.prototype.beginAdd = function (args) {
        var addAction = 'addActionBegin';
        var isAdd = 'isAdd';
        var addArgs = { newRowPosition: this.rowPosition, addRowIndex: this.addRowIndex, dataRowIndex: this.dataRowIndex };
        this.parent.notify('get-row-position', addArgs);
        this.rowPosition = addArgs.newRowPosition;
        this.addRowIndex = addArgs.addRowIndex;
        this.dataRowIndex = addArgs.dataRowIndex;
        var rows = this.parent.getRows();
        var firstAriaIndex = rows.length ? +rows[0].getAttribute('data-rowindex') : 0;
        var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute('data-rowindex') : 0;
        var withInRange = this.parent.selectedRowIndex >= firstAriaIndex && this.parent.selectedRowIndex <= lastAriaIndex;
        if (!(this.rowPosition === 'Top' || this.rowPosition === 'Bottom')) {
            this[isAdd] = true;
        }
        if (this.rowPosition === 'Top' || this.rowPosition === 'Bottom' ||
            ((!this.addRowIndex || this.addRowIndex === -1) && (this.parent.selectedRowIndex === -1 || !withInRange))) {
            _super.prototype[addAction].call(this, args);
        }
    };
    VirtualTreeContentRenderer.prototype.restoreEditState = function () {
        var restoreEdit = 'restoreEdit';
        _super.prototype[restoreEdit].call(this);
    };
    VirtualTreeContentRenderer.prototype.resetIseditValue = function () {
        var resetIsEdit = 'resetIsedit';
        var isAdd = 'isAdd';
        this.parent.notify('reset-edit-props', {});
        if ((this.rowPosition === 'Top' || this.rowPosition === 'Bottom') && this[isAdd]) {
            _super.prototype[resetIsEdit].call(this);
        }
    };
    VirtualTreeContentRenderer.prototype.virtualEditSuccess = function () {
        var isAdd = 'isAdd';
        var content = this.parent.getContent().querySelector('.e-content');
        if (this[isAdd] && content.querySelector('.e-addedrow')) {
            this.recordAdded = true;
        }
    };
    VirtualTreeContentRenderer.prototype.cancelEdit = function (args) {
        var editCancel = 'editCancel';
        _super.prototype[editCancel].call(this, args);
    };
    VirtualTreeContentRenderer.prototype.toSelectRowOnContextOpen = function (args) {
        var selectRowOnContextOpen = 'selectRowOnContextOpen';
        _super.prototype[selectRowOnContextOpen].call(this, args);
    };
    VirtualTreeContentRenderer.prototype.restoreNewRow = function () {
        var isAdd = 'isAdd';
        var content = this.parent.getContent().querySelector('.e-content');
        if (this[isAdd] && !content.querySelector('.e-addedrow')) {
            this.parent.isEdit = false;
            this.parent.addRecord();
        }
    };
    VirtualTreeContentRenderer.prototype.getData = function (data) {
        var getVirtualData = 'getVirtualData';
        _super.prototype[getVirtualData].call(this, data);
    };
    VirtualTreeContentRenderer.prototype.onActionComplete = function (args) {
        if (args.requestType === 'add') {
            var addArgs = { newRowPosition: this.rowPosition, addRowIndex: this.addRowIndex, dataRowIndex: this.dataRowIndex };
            this.parent.notify('get-row-position', addArgs);
            this.rowPosition = addArgs.newRowPosition;
            this.addRowIndex = addArgs.addRowIndex;
            this.dataRowIndex = addArgs.dataRowIndex;
        }
        var actionComplete = 'actionComplete';
        _super.prototype[actionComplete].call(this, args);
    };
    VirtualTreeContentRenderer.prototype.onEnteredAction = function () {
        var _this = this;
        return function (element, current, direction, e, isWheel, check) {
            var directVirtualRender = 'directVirtualRender';
            if (!_this.parent[directVirtualRender]) { // with this property, columns are rendered without debouncing on horizontal scroll.
                var preventEvent = 'preventEvent';
                if (Browser.isIE && !isWheel && check && !_this[preventEvent]) {
                    _this.parent.showSpinner();
                }
                var xAxis = current.axis === 'X';
                var x = _this.getColumnOffset(xAxis ? _this.vgenerator.getColumnIndexes()[0] - 1 : _this.prevInfo.columnIndexes[0]
                    - 1);
                if (xAxis) {
                    var idx = Object.keys(_this.vgenerator.cOffsets).length - _this.prevInfo.columnIndexes.length;
                    var maxLeft = _this.vgenerator.cOffsets[idx - 1];
                    x = x > maxLeft ? maxLeft : x; //TODO: This fix horizontal scrollbar jumping issue in column virtualization.
                }
                _this.virtualEle.adjustTable(x, _this.translateY);
                if (_this.parent.enableColumnVirtualization) {
                    _this.header.virtualEle.adjustTable(x, 0);
                }
            }
        };
    };
    VirtualTreeContentRenderer.prototype.scrollListeners = function (scrollArgs) {
        var info = scrollArgs.sentinel;
        var outBuffer = this.parent.pageSettings.pageSize - Math.ceil(this.parent.pageSettings.pageSize / 2);
        var content = this.parent.getContent().querySelector('.e-content');
        var scrollHeight = outBuffer * this.parent.getRowHeight();
        var upScroll = (scrollArgs.offset.top - this.translateY) < 0;
        var downScroll = Math.ceil(scrollArgs.offset.top - this.translateY) >= scrollHeight;
        var selectedRowIndex = 'selectedRowIndex';
        if (upScroll && (scrollArgs.direction !== 'right' && scrollArgs.direction !== 'left')) {
            var vHeight = +(this.parent.height.toString().indexOf('%') < 0 ? this.parent.height :
                this.parent.element.getBoundingClientRect().height);
            var index = (~~(content.scrollTop / this.parent.getRowHeight())
                + Math.ceil(vHeight / this.parent.getRowHeight()))
                - this.parent.pageSettings.pageSize;
            index = (index > 0) ? index : 0;
            if (!isNullOrUndefined(this[selectedRowIndex]) && this[selectedRowIndex] !== -1 && index !== this[selectedRowIndex]) {
                index = this[selectedRowIndex];
            }
            this.startIndex = index;
            this.endIndex = index + this.parent.pageSettings.pageSize;
            if (this.endIndex > this.totalRecords) {
                var lastInx = this.totalRecords - 1;
                var remains = this.endIndex % lastInx;
                this.endIndex = lastInx;
                this.startIndex = (this.startIndex - remains) < 0 ? 0 : (this.startIndex - remains);
            }
            //var firsttdinx = parseInt(this.parent.getContent().querySelector('.e-content td').getAttribute('index'), 0);
            var rowPt = Math.ceil(scrollArgs.offset.top / this.parent.getRowHeight());
            rowPt = rowPt % this.parent.pageSettings.pageSize;
            var firsttdinx = 0;
            if (!isNullOrUndefined(this.parent.getRows()[rowPt]) &&
                !isNullOrUndefined(this.parent.getContent().querySelectorAll('.e-content tr')[rowPt])) {
                var attr = this.parent.getContent().querySelectorAll('.e-content tr')[rowPt]
                    .querySelector('td').getAttribute('index');
                firsttdinx = +attr; // this.parent.getContent().querySelector('.e-content tr').getAttribute('data-rowindex');
            }
            if (firsttdinx === 0) {
                if (this.parent.allowRowDragAndDrop) {
                    this.translateY = scrollArgs.offset.top - this.parent.getRowHeight() * 2;
                }
                else {
                    this.translateY = scrollArgs.offset.top;
                }
            }
            else {
                var height = this.parent.getRowHeight();
                this.translateY = (scrollArgs.offset.top - (outBuffer * height) > 0) ?
                    scrollArgs.offset.top - (outBuffer * height) + 10 : 0;
            }
        }
        else if (downScroll && (scrollArgs.direction !== 'right' && scrollArgs.direction !== 'left')) {
            var nextSetResIndex = ~~(content.scrollTop / this.parent.getRowHeight());
            var isLastBlock = (this[selectedRowIndex] + this.parent.pageSettings.pageSize) < this.totalRecords ? false : true;
            if (!isNullOrUndefined(this[selectedRowIndex]) && this[selectedRowIndex] !== -1 &&
                nextSetResIndex !== this[selectedRowIndex] && !isLastBlock) {
                nextSetResIndex = this[selectedRowIndex];
            }
            var lastIndex = nextSetResIndex + this.parent.pageSettings.pageSize;
            if (lastIndex > this.totalRecords) {
                lastIndex = nextSetResIndex +
                    (this.totalRecords - nextSetResIndex);
            }
            this.startIndex = !isLastBlock ? lastIndex - this.parent.pageSettings.pageSize : nextSetResIndex;
            this.endIndex = lastIndex;
            if (scrollArgs.offset.top > (this.parent.getRowHeight() * this.totalRecords)) {
                this.translateY = this.getTranslateY(scrollArgs.offset.top, content.getBoundingClientRect().height);
            }
            else {
                if (this.parent.allowRowDragAndDrop) {
                    this.translateY = scrollArgs.offset.top - this.parent.getRowHeight() * 2;
                }
                else {
                    this.translateY = scrollArgs.offset.top;
                }
            }
        }
        if (((downScroll && (scrollArgs.offset.top < (this.parent.getRowHeight() * this.totalRecords)))
            || (upScroll)) || (scrollArgs.direction === 'right' || scrollArgs.direction === 'left')) {
            var viewInfo = this.currentInfo = getValue('getInfoFromView', this).apply(this, [scrollArgs.direction, info, scrollArgs.offset]);
            this.previousInfo = viewInfo;
            this.parent.setColumnIndexesInView(this.parent.enableColumnVirtualization ? viewInfo.columnIndexes : []);
            var page = viewInfo.loadNext && !viewInfo.loadSelf ? viewInfo.nextInfo.page : viewInfo.page;
            this.parent.setProperties({ pageSettings: { currentPage: page } }, true);
            if (scrollArgs.direction !== 'right' && scrollArgs.direction !== 'left') {
                viewInfo.event = viewInfo.event === 'refresh-virtual-block' ? 'model-changed' : viewInfo.event;
            }
            this.parent.notify(viewInfo.event, { requestType: 'virtualscroll', virtualInfo: viewInfo, focusElement: scrollArgs.focusElement });
        }
    };
    VirtualTreeContentRenderer.prototype.appendContent = function (target, newChild, e) {
        if ((this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== undefined
            && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== '') || isCountRequired(this.parent)) {
            if (getValue('isExpandCollapse', e)) {
                this.isRemoteExpand = true;
            }
            _super.prototype.appendContent.call(this, target, newChild, e);
        }
        else {
            var info = e.virtualInfo.sentinelInfo && e.virtualInfo.sentinelInfo.axis === 'Y' &&
                getValue('currentInfo', this).page && getValue('currentInfo', this).page !== e.virtualInfo.page ?
                getValue('currentInfo', this) : e.virtualInfo;
            var cBlock = (info.columnIndexes[0]) - 1;
            var cOffset = this.getColumnOffset(cBlock);
            var width = void 0;
            if (this.parent.enableColumnVirtualization) {
                this.header.virtualEle.adjustTable(cOffset, 0);
                var cIndex = info.columnIndexes;
                width = this.getColumnOffset(cIndex[cIndex.length - 1]) - this.getColumnOffset(cIndex[0] - 1) + '';
                this.header.virtualEle.setWrapperWidth(width);
            }
            this.virtualEle.setWrapperWidth(width, (Browser.isIE || Browser.info.name === 'edge'));
            target = this.parent.createElement('tbody');
            target.appendChild(newChild);
            var replace = 'replaceWith';
            this.getTable().querySelector('tbody')[replace](target);
            if (!this.isExpandCollapse || this.translateY === 0) {
                this.translateY = this.translateY < 0 ? 0 : this.translateY;
                getValue('virtualEle', this).adjustTable(cOffset, this.translateY);
            }
            else {
                this.isExpandCollapse = false;
            }
            setValue('prevInfo', this.previousInfo ? this.previousInfo : info, this);
            if (e.requestType === 'virtualscroll' && e.virtualInfo.sentinelInfo.axis === 'X') {
                this.parent.notify(events.autoCol, {});
            }
            var focusCell = 'focusCell';
            var restoreAdd = 'restoreAdd';
            var ensureSelectedRowPosition = 'ensureSelectedRowPosition';
            _super.prototype[focusCell].call(this, e);
            var isAdd = 'isAdd';
            if (this[isAdd] && !this.parent.getContent().querySelector('.e-content').querySelector('.e-addedrow')) {
                if (!(this.rowPosition === 'Top' || this.rowPosition === 'Bottom')) {
                    if (this.dataRowIndex >= this.startIndex) {
                        this.restoreNewRow();
                    }
                    else if (this.addRowIndex && this.addRowIndex > -1) {
                        this[isAdd] = false;
                        this.parent.isEdit = false;
                    }
                }
            }
            this.restoreEditState();
            _super.prototype[restoreAdd].call(this);
            _super.prototype[ensureSelectedRowPosition].call(this);
        }
    };
    VirtualTreeContentRenderer.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('data-ready', this.onDataReady);
        this.parent.off('content-ready', this.fn);
        this.parent.off('select-virtual-Row', this.toSelectVirtualRow);
        this.parent.off('dataBound', this.dataBoundEvent);
        this.parent.off('rowSelected', this.rowSelectedEvent);
        this.parent.off(events.virtualActionArgs, this.virtualOtherAction);
        this.parent.off(events.indexModifier, this.indexModifier);
        this.parent.off('virtual-scroll-edit-action-begin', this.beginEdit);
        this.parent.off('virtual-scroll-add-action-begin', this.beginAdd);
        this.parent.off('virtual-scroll-edit-success', this.virtualEditSuccess);
        this.parent.off('edit-reset', this.resetIseditValue);
        this.parent.off('get-virtual-data', this.getData);
        this.parent.off('virtual-scroll-edit-cancel', this.cancelEdit);
        this.parent.off('select-row-on-context-open', this.toSelectRowOnContextOpen);
        this.parent.off('refresh-virtual-editform-cells', this.refreshCell);
        this.parent.off('virtaul-cell-focus', this.cellFocus);
    };
    return VirtualTreeContentRenderer;
}(VirtualContentRenderer));
export { VirtualTreeContentRenderer };
var TreeInterSectionObserver = /** @class */ (function (_super) {
    __extends(TreeInterSectionObserver, _super);
    function TreeInterSectionObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isWheeling = false;
        _this.newPos = 0;
        _this.lastPos = 0;
        _this.timer = 0;
        return _this;
    }
    TreeInterSectionObserver.prototype.observes = function (callback, onEnterCallback) {
        var containerRect = 'containerRect';
        _super.prototype[containerRect] = getValue('options', this).container.getBoundingClientRect();
        EventHandler.add(getValue('options', this).container, 'scroll', this.virtualScrollHandlers(callback, onEnterCallback), this);
    };
    TreeInterSectionObserver.prototype.clear = function () {
        this.lastPos = null;
    };
    TreeInterSectionObserver.prototype.virtualScrollHandlers = function (callback, onEnterCallback) {
        var _this = this;
        var delay = Browser.info.name === 'chrome' ? 200 : 100;
        var options = 'options';
        var movableEle = 'movableEle';
        var element = 'element';
        var fromWheel = 'fromWheel';
        var debounced100 = debounce(callback, delay);
        var debounced50 = debounce(callback, 50);
        this[options].prevTop = this[options].prevLeft = 0;
        return function (e) {
            var top = _this[options].movableContainer ? _this[options].container.scrollTop : e.target.scrollTop;
            var left = _this[options].movableContainer ? _this[options].scrollbar.scrollLeft : e.target.scrollLeft;
            var direction = _this[options].prevTop < top ? 'down' : 'up';
            direction = _this[options].prevLeft === left ? direction : _this[options].prevLeft < left ? 'right' : 'left';
            _this[options].prevTop = top;
            _this[options].prevLeft = left;
            var current = _this.sentinelInfo[direction];
            var delta = 0;
            _this.newPos = top;
            if (_this.lastPos != null) { // && newPos < maxScroll
                delta = _this.newPos - _this.lastPos;
            }
            _this.lastPos = _this.newPos;
            if (_this.timer) {
                clearTimeout(_this.timer);
            }
            _this.timer = setTimeout(_this.clear, 0);
            if ((delta > 100 || delta < -100) && (e && e.preventDefault)) {
                e.returnValue = false;
                e.preventDefault();
            }
            if (_this[options].axes.indexOf(current.axis) === -1) {
                return;
            }
            var check = _this.check(direction);
            if (current.entered && current.axis === 'X') {
                if (_this[movableEle] && (direction === 'right' || direction === 'left')) {
                    onEnterCallback(_this[movableEle], current, direction, { top: top, left: left }, _this[fromWheel], check);
                }
                else {
                    onEnterCallback(_this[element], current, direction, { top: top, left: left }, _this[fromWheel], check);
                }
            }
            if (check) {
                var fn = debounced100;
                if (current.axis === 'X') {
                    fn = debounced50;
                    fn({ direction: direction, sentinel: current, offset: { top: top, left: left },
                        focusElement: document.activeElement });
                }
                else {
                    callback({ direction: direction, sentinel: current, offset: { top: top, left: left },
                        focusElement: document.activeElement });
                }
            }
            _this[fromWheel] = false;
        };
    };
    return TreeInterSectionObserver;
}(InterSectionObserver));
export { TreeInterSectionObserver };
