/*!
*  filename: ej2-angular-grids.umd.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-grids'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-grids', '@angular/common'], factory) :
	(factory((global['ej2-angular-grids'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.grids,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Grids,common) { 'use strict';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input = ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'freeze', 'headerTemplate', 'headerText', 'headerTextAlign', 'headerValueAccessor', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
var outputs = [];
/**
 * `e-stacked-column` directive represent the stacked column of the Angular Grid.
 * It must be contained in a StackedColumns component(`e-stacked-columns`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column headerText='Details' width='100'>
 *       <e-stacked-columns>
 *         <e-stacked-column field='Name' width='140'></e-stacked-column>
 *       </e-stacked-columns>
 *     </e-column>
 *   </e-columns>
 * </ejs-grid>
 * ```
 */
var StackedColumnDirective = /** @class */ (function (_super) {
    __extends(StackedColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StackedColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return StackedColumnDirective;
}(ej2AngularBase.ComplexBase));
StackedColumnDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-columns>e-column>e-stacked-columns>e-stacked-column',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StackedColumnDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
StackedColumnDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'commandsTemplate': [{ type: core.ContentChild, args: ['commandsTemplate',] },],
    'filter_itemTemplate': [{ type: core.ContentChild, args: ['filterItemTemplate',] },],
    'editTemplate': [{ type: core.ContentChild, args: ['editTemplate',] },],
    'filterTemplate': [{ type: core.ContentChild, args: ['filterTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "template", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "editTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "filterTemplate", void 0);
/**
 * StackedColumn Array Directive
 */
var StackedColumnsDirective = /** @class */ (function (_super) {
    __extends(StackedColumnsDirective, _super);
    function StackedColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return StackedColumnsDirective;
}(ej2AngularBase.ArrayBase));
StackedColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-columns>e-column>e-stacked-columns',
                queries: {
                    children: new core.ContentChildren(StackedColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StackedColumnsDirective.ctorParameters = function () { return []; };
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$1 = ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'freeze', 'headerTemplate', 'headerText', 'headerTextAlign', 'headerValueAccessor', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
var outputs$1 = [];
/**
 * `e-column` directive represent a column of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-grid>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['columns'];
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return ColumnDirective;
}(ej2AngularBase.ComplexBase));
ColumnDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-columns>e-column',
                inputs: input$1,
                outputs: outputs$1,
                queries: {
                    childColumns: new core.ContentChild(StackedColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
ColumnDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'commandsTemplate': [{ type: core.ContentChild, args: ['commandsTemplate',] },],
    'filter_itemTemplate': [{ type: core.ContentChild, args: ['filterItemTemplate',] },],
    'editTemplate': [{ type: core.ContentChild, args: ['editTemplate',] },],
    'filterTemplate': [{ type: core.ContentChild, args: ['filterTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "editTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "filterTemplate", void 0);
/**
 * Column Array Directive
 */
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return ColumnsDirective;
}(ej2AngularBase.ArrayBase));
ColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = function () { return []; };
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$2 = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'groupCaptionTemplate', 'groupFooterTemplate', 'type'];
var outputs$2 = [];
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the Angular Grid.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-grid>
 * ```
 */
var AggregateColumnDirective = /** @class */ (function (_super) {
    __extends(AggregateColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AggregateColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return AggregateColumnDirective;
}(ej2AngularBase.ComplexBase));
AggregateColumnDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate>e-columns>e-column',
                inputs: input$2,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AggregateColumnDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
AggregateColumnDirective.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
    'groupFooterTemplate': [{ type: core.ContentChild, args: ['groupFooterTemplate',] },],
    'groupCaptionTemplate': [{ type: core.ContentChild, args: ['groupCaptionTemplate',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], AggregateColumnDirective.prototype, "footerTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], AggregateColumnDirective.prototype, "groupFooterTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], AggregateColumnDirective.prototype, "groupCaptionTemplate", void 0);
/**
 * AggregateColumn Array Directive
 */
var AggregateColumnsDirective = /** @class */ (function (_super) {
    __extends(AggregateColumnsDirective, _super);
    function AggregateColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return AggregateColumnsDirective;
}(ej2AngularBase.ArrayBase));
AggregateColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate>e-columns',
                queries: {
                    children: new core.ContentChildren(AggregateColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AggregateColumnsDirective.ctorParameters = function () { return []; };
var input$3 = ['columns'];
var outputs$3 = [];
/**
 * `e-aggregate` directive represent a aggregate row of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-grid>
 * ```
 */
var AggregateDirective = /** @class */ (function (_super) {
    __extends(AggregateDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AggregateDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['columns'];
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return AggregateDirective;
}(ej2AngularBase.ComplexBase));
AggregateDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childColumns: new core.ContentChild(AggregateColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AggregateDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * Aggregate Array Directive
 */
var AggregatesDirective = /** @class */ (function (_super) {
    __extends(AggregatesDirective, _super);
    function AggregatesDirective() {
        return _super.call(this, 'aggregates') || this;
    }
    return AggregatesDirective;
}(ej2AngularBase.ArrayBase));
AggregatesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-grid>e-aggregates',
                queries: {
                    children: new core.ContentChildren(AggregateDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AggregatesDirective.ctorParameters = function () { return []; };
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowKeyboard', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'clipMode', 'columnChooserSettings', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'cssClass', 'currencyCode', 'currentAction', 'dataSource', 'detailTemplate', 'editSettings', 'ej2StatePersistenceVersion', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRtl', 'enableStickyHeader', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'infiniteScrollSettings', 'locale', 'pageSettings', 'pagerTemplate', 'parentDetails', 'printMode', 'query', 'queryString', 'resizeSettings', 'rowDropSettings', 'rowHeight', 'rowRenderingMode', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'];
var outputs$4 = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeAutoFill', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforeOpenAdaptiveDialog', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDataStateChange', 'columnDeselected', 'columnDeselecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'columnSelected', 'columnSelecting', 'commandClick', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailDataBound', 'excelAggregateQueryCellInfo', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'lazyLoadGroupCollapse', 'lazyLoadGroupExpand', 'load', 'pdfAggregateQueryCellInfo', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordClick', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * `ejs-grid` represents the Angular Grid Component.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
exports.GridComponent = /** @class */ (function (_super) {
    __extends(GridComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function GridComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['columns', 'aggregates'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('GridsFilter');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('GridsPage');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('GridsSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('GridsSort');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('GridsGroup');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('GridsReorder');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('GridsRowDD');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('GridsDetailRow');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('GridsToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('GridsAggregate');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('GridsSearch');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('GridsVirtualScroll');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('GridsEdit');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('GridsResize');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('GridsExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('GridsPdfExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('GridsCommandColumn');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('GridsContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            var mod = _this.injector.get('GridsFreeze');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            var mod = _this.injector.get('GridsColumnMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            var mod = _this.injector.get('GridsColumnChooser');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            var mod = _this.injector.get('GridsForeignKey');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            var mod = _this.injector.get('GridsInfiniteScroll');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            var mod = _this.injector.get('GridsLazyLoadGroup');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAggregates) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childAggregates);
        }
        this.context.ngAfterContentChecked(this);
    };
    return GridComponent;
}(ej2Grids.Grid));
exports.GridComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-grid',
                inputs: inputs,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new core.ContentChild(ColumnsDirective),
                    childAggregates: new core.ContentChild(AggregatesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.GridComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.GridComponent.propDecorators = {
    'rowTemplate': [{ type: core.ContentChild, args: ['rowTemplate',] },],
    'detailTemplate': [{ type: core.ContentChild, args: ['detailTemplate',] },],
    'toolbarTemplate': [{ type: core.ContentChild, args: ['toolbarTemplate',] },],
    'pagerTemplate': [{ type: core.ContentChild, args: ['pagerTemplate',] },],
    'editSettings_template': [{ type: core.ContentChild, args: ['editSettingsTemplate',] },],
    'groupSettings_captionTemplate': [{ type: core.ContentChild, args: ['groupSettingsCaptionTemplate',] },],
};
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.GridComponent.prototype, "rowTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.GridComponent.prototype, "detailTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.GridComponent.prototype, "toolbarTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.GridComponent.prototype, "pagerTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.GridComponent.prototype, "editSettings_template", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.GridComponent.prototype, "groupSettings_captionTemplate", void 0);
exports.GridComponent = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.GridComponent);
/**
 * NgModule definition for the Grid component.
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.GridComponent,
                    StackedColumnDirective,
                    StackedColumnsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    AggregateColumnDirective,
                    AggregateColumnsDirective,
                    AggregateDirective,
                    AggregatesDirective
                ],
                exports: [
                    exports.GridComponent,
                    StackedColumnDirective,
                    StackedColumnsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    AggregateColumnDirective,
                    AggregateColumnsDirective,
                    AggregateDirective,
                    AggregatesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
GridModule.ctorParameters = function () { return []; };
var FilterService = { provide: 'GridsFilter', useValue: ej2Grids.Filter };
var PageService = { provide: 'GridsPage', useValue: ej2Grids.Page };
var SelectionService = { provide: 'GridsSelection', useValue: ej2Grids.Selection };
var SortService = { provide: 'GridsSort', useValue: ej2Grids.Sort };
var GroupService = { provide: 'GridsGroup', useValue: ej2Grids.Group };
var ReorderService = { provide: 'GridsReorder', useValue: ej2Grids.Reorder };
var RowDDService = { provide: 'GridsRowDD', useValue: ej2Grids.RowDD };
var DetailRowService = { provide: 'GridsDetailRow', useValue: ej2Grids.DetailRow };
var ToolbarService = { provide: 'GridsToolbar', useValue: ej2Grids.Toolbar };
var AggregateService = { provide: 'GridsAggregate', useValue: ej2Grids.Aggregate };
var SearchService = { provide: 'GridsSearch', useValue: ej2Grids.Search };
var VirtualScrollService = { provide: 'GridsVirtualScroll', useValue: ej2Grids.VirtualScroll };
var EditService = { provide: 'GridsEdit', useValue: ej2Grids.Edit };
var ResizeService = { provide: 'GridsResize', useValue: ej2Grids.Resize };
var ExcelExportService = { provide: 'GridsExcelExport', useValue: ej2Grids.ExcelExport };
var PdfExportService = { provide: 'GridsPdfExport', useValue: ej2Grids.PdfExport };
var CommandColumnService = { provide: 'GridsCommandColumn', useValue: ej2Grids.CommandColumn };
var ContextMenuService = { provide: 'GridsContextMenu', useValue: ej2Grids.ContextMenu };
var FreezeService = { provide: 'GridsFreeze', useValue: ej2Grids.Freeze };
var ColumnMenuService = { provide: 'GridsColumnMenu', useValue: ej2Grids.ColumnMenu };
var ColumnChooserService = { provide: 'GridsColumnChooser', useValue: ej2Grids.ColumnChooser };
var ForeignKeyService = { provide: 'GridsForeignKey', useValue: ej2Grids.ForeignKey };
var InfiniteScrollService = { provide: 'GridsInfiniteScroll', useValue: ej2Grids.InfiniteScroll };
var LazyLoadGroupService = { provide: 'GridsLazyLoadGroup', useValue: ej2Grids.LazyLoadGroup };
/**
 * NgModule definition for the Grid component with providers.
 */
var GridAllModule = /** @class */ (function () {
    function GridAllModule() {
    }
    return GridAllModule;
}());
GridAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, GridModule],
                exports: [
                    GridModule
                ],
                providers: [
                    FilterService,
                    PageService,
                    SelectionService,
                    SortService,
                    GroupService,
                    ReorderService,
                    RowDDService,
                    DetailRowService,
                    ToolbarService,
                    AggregateService,
                    SearchService,
                    VirtualScrollService,
                    EditService,
                    ResizeService,
                    ExcelExportService,
                    PdfExportService,
                    CommandColumnService,
                    ContextMenuService,
                    FreezeService,
                    ColumnMenuService,
                    ColumnChooserService,
                    ForeignKeyService,
                    InfiniteScrollService,
                    LazyLoadGroupService
                ]
            },] },
];
/**
 * @nocollapse
 */
GridAllModule.ctorParameters = function () { return []; };
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['cssClass', 'currentPage', 'customText', 'enableExternalMessage', 'enablePagerMessage', 'enablePersistence', 'enableQueryString', 'enableRtl', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizes', 'template', 'totalRecordsCount'];
var outputs$5 = ['click', 'created', 'dropDownChanged'];
var twoWays$1 = [];
/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
exports.PagerComponent = /** @class */ (function (_super) {
    __extends(PagerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PagerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$5);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return PagerComponent;
}(ej2Grids.Pager));
exports.PagerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-pager',
                inputs: inputs$1,
                outputs: outputs$5,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.PagerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.PagerComponent.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate$4([
    ej2AngularBase.Template(),
    __metadata$4("design:type", Object)
], exports.PagerComponent.prototype, "template", void 0);
exports.PagerComponent = __decorate$4([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$4("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.PagerComponent);
/**
 * NgModule definition for the Pager component.
 */
var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    return PagerModule;
}());
PagerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.PagerComponent
                ],
                exports: [
                    exports.PagerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PagerModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Pager component with providers.
 */
var PagerAllModule = /** @class */ (function () {
    function PagerAllModule() {
    }
    return PagerAllModule;
}());
PagerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PagerModule],
                exports: [
                    PagerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
PagerAllModule.ctorParameters = function () { return []; };

exports.StackedColumnDirective = StackedColumnDirective;
exports.StackedColumnsDirective = StackedColumnsDirective;
exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.AggregateColumnDirective = AggregateColumnDirective;
exports.AggregateColumnsDirective = AggregateColumnsDirective;
exports.AggregateDirective = AggregateDirective;
exports.AggregatesDirective = AggregatesDirective;
exports.GridModule = GridModule;
exports.GridAllModule = GridAllModule;
exports.FilterService = FilterService;
exports.PageService = PageService;
exports.SelectionService = SelectionService;
exports.SortService = SortService;
exports.GroupService = GroupService;
exports.ReorderService = ReorderService;
exports.RowDDService = RowDDService;
exports.DetailRowService = DetailRowService;
exports.ToolbarService = ToolbarService;
exports.AggregateService = AggregateService;
exports.SearchService = SearchService;
exports.VirtualScrollService = VirtualScrollService;
exports.EditService = EditService;
exports.ResizeService = ResizeService;
exports.ExcelExportService = ExcelExportService;
exports.PdfExportService = PdfExportService;
exports.CommandColumnService = CommandColumnService;
exports.ContextMenuService = ContextMenuService;
exports.FreezeService = FreezeService;
exports.ColumnMenuService = ColumnMenuService;
exports.ColumnChooserService = ColumnChooserService;
exports.ForeignKeyService = ForeignKeyService;
exports.InfiniteScrollService = InfiniteScrollService;
exports.LazyLoadGroupService = LazyLoadGroupService;
exports.PagerModule = PagerModule;
exports.PagerAllModule = PagerAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$4;
exports.ɵc = inputs$1;
exports.ɵd = outputs$5;
exports.CheckBoxFilterBase = ej2Grids.CheckBoxFilterBase;
exports.ExcelFilterBase = ej2Grids.ExcelFilterBase;
exports.SortDescriptor = ej2Grids.SortDescriptor;
exports.SortSettings = ej2Grids.SortSettings;
exports.Predicate = ej2Grids.Predicate;
exports.InfiniteScrollSettings = ej2Grids.InfiniteScrollSettings;
exports.FilterSettings = ej2Grids.FilterSettings;
exports.SelectionSettings = ej2Grids.SelectionSettings;
exports.SearchSettings = ej2Grids.SearchSettings;
exports.RowDropSettings = ej2Grids.RowDropSettings;
exports.TextWrapSettings = ej2Grids.TextWrapSettings;
exports.ResizeSettings = ej2Grids.ResizeSettings;
exports.GroupSettings = ej2Grids.GroupSettings;
exports.EditSettings = ej2Grids.EditSettings;
exports.Grid = ej2Grids.Grid;
exports.CellType = ej2Grids.CellType;
exports.RenderType = ej2Grids.RenderType;
exports.ToolbarItem = ej2Grids.ToolbarItem;
exports.ResponsiveDialogAction = ej2Grids.ResponsiveDialogAction;
exports.ResponsiveToolbarAction = ej2Grids.ResponsiveToolbarAction;
exports.doesImplementInterface = ej2Grids.doesImplementInterface;
exports.valueAccessor = ej2Grids.valueAccessor;
exports.headerValueAccessor = ej2Grids.headerValueAccessor;
exports.getUpdateUsingRaf = ej2Grids.getUpdateUsingRaf;
exports.isExportColumns = ej2Grids.isExportColumns;
exports.updateColumnTypeForExportColumns = ej2Grids.updateColumnTypeForExportColumns;
exports.updatecloneRow = ej2Grids.updatecloneRow;
exports.getCollapsedRowsCount = ej2Grids.getCollapsedRowsCount;
exports.recursive = ej2Grids.recursive;
exports.iterateArrayOrObject = ej2Grids.iterateArrayOrObject;
exports.iterateExtend = ej2Grids.iterateExtend;
exports.templateCompiler = ej2Grids.templateCompiler;
exports.setStyleAndAttributes = ej2Grids.setStyleAndAttributes;
exports.extend = ej2Grids.extend;
exports.setColumnIndex = ej2Grids.setColumnIndex;
exports.prepareColumns = ej2Grids.prepareColumns;
exports.setCssInGridPopUp = ej2Grids.setCssInGridPopUp;
exports.getActualProperties = ej2Grids.getActualProperties;
exports.parentsUntil = ej2Grids.parentsUntil;
exports.getElementIndex = ej2Grids.getElementIndex;
exports.inArray = ej2Grids.inArray;
exports.getActualPropFromColl = ej2Grids.getActualPropFromColl;
exports.removeElement = ej2Grids.removeElement;
exports.getPosition = ej2Grids.getPosition;
exports.getUid = ej2Grids.getUid;
exports.appendChildren = ej2Grids.appendChildren;
exports.parents = ej2Grids.parents;
exports.calculateAggregate = ej2Grids.calculateAggregate;
exports.getScrollBarWidth = ej2Grids.getScrollBarWidth;
exports.getRowHeight = ej2Grids.getRowHeight;
exports.getActualRowHeight = ej2Grids.getActualRowHeight;
exports.isComplexField = ej2Grids.isComplexField;
exports.getComplexFieldID = ej2Grids.getComplexFieldID;
exports.setComplexFieldID = ej2Grids.setComplexFieldID;
exports.isEditable = ej2Grids.isEditable;
exports.isActionPrevent = ej2Grids.isActionPrevent;
exports.wrap = ej2Grids.wrap;
exports.setFormatter = ej2Grids.setFormatter;
exports.addRemoveActiveClasses = ej2Grids.addRemoveActiveClasses;
exports.distinctStringValues = ej2Grids.distinctStringValues;
exports.getFilterMenuPostion = ej2Grids.getFilterMenuPostion;
exports.getZIndexCalcualtion = ej2Grids.getZIndexCalcualtion;
exports.toogleCheckbox = ej2Grids.toogleCheckbox;
exports.setChecked = ej2Grids.setChecked;
exports.createCboxWithWrap = ej2Grids.createCboxWithWrap;
exports.removeAddCboxClasses = ej2Grids.removeAddCboxClasses;
exports.refreshForeignData = ej2Grids.refreshForeignData;
exports.getForeignData = ej2Grids.getForeignData;
exports.getColumnByForeignKeyValue = ej2Grids.getColumnByForeignKeyValue;
exports.getDatePredicate = ej2Grids.getDatePredicate;
exports.renderMovable = ej2Grids.renderMovable;
exports.isGroupAdaptive = ej2Grids.isGroupAdaptive;
exports.getObject = ej2Grids.getObject;
exports.getCustomDateFormat = ej2Grids.getCustomDateFormat;
exports.getExpandedState = ej2Grids.getExpandedState;
exports.getPrintGridModel = ej2Grids.getPrintGridModel;
exports.extendObjWithFn = ej2Grids.extendObjWithFn;
exports.measureColumnDepth = ej2Grids.measureColumnDepth;
exports.checkDepth = ej2Grids.checkDepth;
exports.refreshFilteredColsUid = ej2Grids.refreshFilteredColsUid;
exports.Global = ej2Grids.Global;
exports.getTransformValues = ej2Grids.getTransformValues;
exports.applyBiggerTheme = ej2Grids.applyBiggerTheme;
exports.alignFrozenEditForm = ej2Grids.alignFrozenEditForm;
exports.ensureLastRow = ej2Grids.ensureLastRow;
exports.ensureFirstRow = ej2Grids.ensureFirstRow;
exports.isRowEnteredInGrid = ej2Grids.isRowEnteredInGrid;
exports.getEditedDataIndex = ej2Grids.getEditedDataIndex;
exports.eventPromise = ej2Grids.eventPromise;
exports.getStateEventArgument = ej2Grids.getStateEventArgument;
exports.ispercentageWidth = ej2Grids.ispercentageWidth;
exports.resetRowIndex = ej2Grids.resetRowIndex;
exports.compareChanges = ej2Grids.compareChanges;
exports.setRowElements = ej2Grids.setRowElements;
exports.splitFrozenRowObjectCells = ej2Grids.splitFrozenRowObjectCells;
exports.gridActionHandler = ej2Grids.gridActionHandler;
exports.getGridRowObjects = ej2Grids.getGridRowObjects;
exports.getGridRowElements = ej2Grids.getGridRowElements;
exports.sliceElements = ej2Grids.sliceElements;
exports.getCellsByTableName = ej2Grids.getCellsByTableName;
exports.getCellByColAndRowIndex = ej2Grids.getCellByColAndRowIndex;
exports.setValidationRuels = ej2Grids.setValidationRuels;
exports.getMovableTbody = ej2Grids.getMovableTbody;
exports.getFrozenRightTbody = ej2Grids.getFrozenRightTbody;
exports.setRowsInTbody = ej2Grids.setRowsInTbody;
exports.getNumberFormat = ej2Grids.getNumberFormat;
exports.addBiggerDialog = ej2Grids.addBiggerDialog;
exports.performComplexDataOperation = ej2Grids.performComplexDataOperation;
exports.setDisplayValue = ej2Grids.setDisplayValue;
exports.addRemoveEventListener = ej2Grids.addRemoveEventListener;
exports.createEditElement = ej2Grids.createEditElement;
exports.getColumnModelByUid = ej2Grids.getColumnModelByUid;
exports.getColumnModelByFieldName = ej2Grids.getColumnModelByFieldName;
exports.registerEventHandlers = ej2Grids.registerEventHandlers;
exports.removeEventHandlers = ej2Grids.removeEventHandlers;
exports.clearReactVueTemplates = ej2Grids.clearReactVueTemplates;
exports.getRowIndexFromElement = ej2Grids.getRowIndexFromElement;
exports.generateExpandPredicates = ej2Grids.generateExpandPredicates;
exports.getPredicates = ej2Grids.getPredicates;
exports.getGroupKeysAndFields = ej2Grids.getGroupKeysAndFields;
exports.findCellIndex = ej2Grids.findCellIndex;
exports.created = ej2Grids.created;
exports.destroyed = ej2Grids.destroyed;
exports.load = ej2Grids.load;
exports.rowDataBound = ej2Grids.rowDataBound;
exports.queryCellInfo = ej2Grids.queryCellInfo;
exports.headerCellInfo = ej2Grids.headerCellInfo;
exports.actionBegin = ej2Grids.actionBegin;
exports.actionComplete = ej2Grids.actionComplete;
exports.actionFailure = ej2Grids.actionFailure;
exports.dataBound = ej2Grids.dataBound;
exports.rowSelecting = ej2Grids.rowSelecting;
exports.rowSelected = ej2Grids.rowSelected;
exports.rowDeselecting = ej2Grids.rowDeselecting;
exports.rowDeselected = ej2Grids.rowDeselected;
exports.cellSelecting = ej2Grids.cellSelecting;
exports.cellSelected = ej2Grids.cellSelected;
exports.cellDeselecting = ej2Grids.cellDeselecting;
exports.cellDeselected = ej2Grids.cellDeselected;
exports.columnSelecting = ej2Grids.columnSelecting;
exports.columnSelected = ej2Grids.columnSelected;
exports.columnDeselecting = ej2Grids.columnDeselecting;
exports.columnDeselected = ej2Grids.columnDeselected;
exports.columnDragStart = ej2Grids.columnDragStart;
exports.columnDrag = ej2Grids.columnDrag;
exports.columnDrop = ej2Grids.columnDrop;
exports.rowDragStartHelper = ej2Grids.rowDragStartHelper;
exports.rowDragStart = ej2Grids.rowDragStart;
exports.rowDrag = ej2Grids.rowDrag;
exports.rowDrop = ej2Grids.rowDrop;
exports.beforePrint = ej2Grids.beforePrint;
exports.printComplete = ej2Grids.printComplete;
exports.detailDataBound = ej2Grids.detailDataBound;
exports.toolbarClick = ej2Grids.toolbarClick;
exports.batchAdd = ej2Grids.batchAdd;
exports.batchCancel = ej2Grids.batchCancel;
exports.batchDelete = ej2Grids.batchDelete;
exports.beforeBatchAdd = ej2Grids.beforeBatchAdd;
exports.beforeBatchDelete = ej2Grids.beforeBatchDelete;
exports.beforeBatchSave = ej2Grids.beforeBatchSave;
exports.beginEdit = ej2Grids.beginEdit;
exports.cellEdit = ej2Grids.cellEdit;
exports.cellSave = ej2Grids.cellSave;
exports.cellSaved = ej2Grids.cellSaved;
exports.endAdd = ej2Grids.endAdd;
exports.endDelete = ej2Grids.endDelete;
exports.endEdit = ej2Grids.endEdit;
exports.recordDoubleClick = ej2Grids.recordDoubleClick;
exports.recordClick = ej2Grids.recordClick;
exports.beforeDataBound = ej2Grids.beforeDataBound;
exports.beforeOpenColumnChooser = ej2Grids.beforeOpenColumnChooser;
exports.beforeOpenAdaptiveDialog = ej2Grids.beforeOpenAdaptiveDialog;
exports.resizeStart = ej2Grids.resizeStart;
exports.onResize = ej2Grids.onResize;
exports.resizeStop = ej2Grids.resizeStop;
exports.checkBoxChange = ej2Grids.checkBoxChange;
exports.beforeCopy = ej2Grids.beforeCopy;
exports.beforePaste = ej2Grids.beforePaste;
exports.beforeAutoFill = ej2Grids.beforeAutoFill;
exports.filterChoiceRequest = ej2Grids.filterChoiceRequest;
exports.filterAfterOpen = ej2Grids.filterAfterOpen;
exports.filterBeforeOpen = ej2Grids.filterBeforeOpen;
exports.filterSearchBegin = ej2Grids.filterSearchBegin;
exports.commandClick = ej2Grids.commandClick;
exports.exportGroupCaption = ej2Grids.exportGroupCaption;
exports.lazyLoadGroupExpand = ej2Grids.lazyLoadGroupExpand;
exports.lazyLoadGroupCollapse = ej2Grids.lazyLoadGroupCollapse;
exports.initialLoad = ej2Grids.initialLoad;
exports.initialEnd = ej2Grids.initialEnd;
exports.dataReady = ej2Grids.dataReady;
exports.contentReady = ej2Grids.contentReady;
exports.uiUpdate = ej2Grids.uiUpdate;
exports.onEmpty = ej2Grids.onEmpty;
exports.inBoundModelChanged = ej2Grids.inBoundModelChanged;
exports.modelChanged = ej2Grids.modelChanged;
exports.colGroupRefresh = ej2Grids.colGroupRefresh;
exports.headerRefreshed = ej2Grids.headerRefreshed;
exports.pageBegin = ej2Grids.pageBegin;
exports.pageComplete = ej2Grids.pageComplete;
exports.sortBegin = ej2Grids.sortBegin;
exports.sortComplete = ej2Grids.sortComplete;
exports.filterBegin = ej2Grids.filterBegin;
exports.filterComplete = ej2Grids.filterComplete;
exports.searchBegin = ej2Grids.searchBegin;
exports.searchComplete = ej2Grids.searchComplete;
exports.reorderBegin = ej2Grids.reorderBegin;
exports.reorderComplete = ej2Grids.reorderComplete;
exports.rowDragAndDropBegin = ej2Grids.rowDragAndDropBegin;
exports.rowDragAndDropComplete = ej2Grids.rowDragAndDropComplete;
exports.groupBegin = ej2Grids.groupBegin;
exports.groupComplete = ej2Grids.groupComplete;
exports.ungroupBegin = ej2Grids.ungroupBegin;
exports.ungroupComplete = ej2Grids.ungroupComplete;
exports.groupAggregates = ej2Grids.groupAggregates;
exports.refreshFooterRenderer = ej2Grids.refreshFooterRenderer;
exports.refreshAggregateCell = ej2Grids.refreshAggregateCell;
exports.refreshAggregates = ej2Grids.refreshAggregates;
exports.rowSelectionBegin = ej2Grids.rowSelectionBegin;
exports.rowSelectionComplete = ej2Grids.rowSelectionComplete;
exports.columnSelectionBegin = ej2Grids.columnSelectionBegin;
exports.columnSelectionComplete = ej2Grids.columnSelectionComplete;
exports.cellSelectionBegin = ej2Grids.cellSelectionBegin;
exports.cellSelectionComplete = ej2Grids.cellSelectionComplete;
exports.beforeCellFocused = ej2Grids.beforeCellFocused;
exports.cellFocused = ej2Grids.cellFocused;
exports.keyPressed = ej2Grids.keyPressed;
exports.click = ej2Grids.click;
exports.destroy = ej2Grids.destroy;
exports.columnVisibilityChanged = ej2Grids.columnVisibilityChanged;
exports.scroll = ej2Grids.scroll;
exports.columnWidthChanged = ej2Grids.columnWidthChanged;
exports.columnPositionChanged = ej2Grids.columnPositionChanged;
exports.rowDragAndDrop = ej2Grids.rowDragAndDrop;
exports.rowsAdded = ej2Grids.rowsAdded;
exports.rowsRemoved = ej2Grids.rowsRemoved;
exports.columnDragStop = ej2Grids.columnDragStop;
exports.headerDrop = ej2Grids.headerDrop;
exports.dataSourceModified = ej2Grids.dataSourceModified;
exports.refreshComplete = ej2Grids.refreshComplete;
exports.refreshVirtualBlock = ej2Grids.refreshVirtualBlock;
exports.dblclick = ej2Grids.dblclick;
exports.toolbarRefresh = ej2Grids.toolbarRefresh;
exports.bulkSave = ej2Grids.bulkSave;
exports.autoCol = ej2Grids.autoCol;
exports.tooltipDestroy = ej2Grids.tooltipDestroy;
exports.updateData = ej2Grids.updateData;
exports.editBegin = ej2Grids.editBegin;
exports.editComplete = ej2Grids.editComplete;
exports.addBegin = ej2Grids.addBegin;
exports.addComplete = ej2Grids.addComplete;
exports.saveComplete = ej2Grids.saveComplete;
exports.deleteBegin = ej2Grids.deleteBegin;
exports.deleteComplete = ej2Grids.deleteComplete;
exports.preventBatch = ej2Grids.preventBatch;
exports.dialogDestroy = ej2Grids.dialogDestroy;
exports.crudAction = ej2Grids.crudAction;
exports.addDeleteAction = ej2Grids.addDeleteAction;
exports.destroyForm = ej2Grids.destroyForm;
exports.doubleTap = ej2Grids.doubleTap;
exports.beforeExcelExport = ej2Grids.beforeExcelExport;
exports.excelExportComplete = ej2Grids.excelExportComplete;
exports.excelQueryCellInfo = ej2Grids.excelQueryCellInfo;
exports.excelHeaderQueryCellInfo = ej2Grids.excelHeaderQueryCellInfo;
exports.exportDetailDataBound = ej2Grids.exportDetailDataBound;
exports.beforePdfExport = ej2Grids.beforePdfExport;
exports.pdfExportComplete = ej2Grids.pdfExportComplete;
exports.pdfQueryCellInfo = ej2Grids.pdfQueryCellInfo;
exports.pdfHeaderQueryCellInfo = ej2Grids.pdfHeaderQueryCellInfo;
exports.accessPredicate = ej2Grids.accessPredicate;
exports.contextMenuClick = ej2Grids.contextMenuClick;
exports.freezeRender = ej2Grids.freezeRender;
exports.freezeRefresh = ej2Grids.freezeRefresh;
exports.contextMenuOpen = ej2Grids.contextMenuOpen;
exports.columnMenuClick = ej2Grids.columnMenuClick;
exports.columnMenuOpen = ej2Grids.columnMenuOpen;
exports.filterOpen = ej2Grids.filterOpen;
exports.filterDialogCreated = ej2Grids.filterDialogCreated;
exports.filterMenuClose = ej2Grids.filterMenuClose;
exports.initForeignKeyColumn = ej2Grids.initForeignKeyColumn;
exports.getForeignKeyData = ej2Grids.getForeignKeyData;
exports.generateQuery = ej2Grids.generateQuery;
exports.showEmptyGrid = ej2Grids.showEmptyGrid;
exports.foreignKeyData = ej2Grids.foreignKeyData;
exports.columnDataStateChange = ej2Grids.columnDataStateChange;
exports.dataStateChange = ej2Grids.dataStateChange;
exports.dataSourceChanged = ej2Grids.dataSourceChanged;
exports.rtlUpdated = ej2Grids.rtlUpdated;
exports.beforeFragAppend = ej2Grids.beforeFragAppend;
exports.frozenHeight = ej2Grids.frozenHeight;
exports.textWrapRefresh = ej2Grids.textWrapRefresh;
exports.recordAdded = ej2Grids.recordAdded;
exports.cancelBegin = ej2Grids.cancelBegin;
exports.editNextValCell = ej2Grids.editNextValCell;
exports.hierarchyPrint = ej2Grids.hierarchyPrint;
exports.expandChildGrid = ej2Grids.expandChildGrid;
exports.printGridInit = ej2Grids.printGridInit;
exports.exportRowDataBound = ej2Grids.exportRowDataBound;
exports.exportDataBound = ej2Grids.exportDataBound;
exports.rowPositionChanged = ej2Grids.rowPositionChanged;
exports.columnChooserOpened = ej2Grids.columnChooserOpened;
exports.batchForm = ej2Grids.batchForm;
exports.beforeStartEdit = ej2Grids.beforeStartEdit;
exports.beforeBatchCancel = ej2Grids.beforeBatchCancel;
exports.batchEditFormRendered = ej2Grids.batchEditFormRendered;
exports.partialRefresh = ej2Grids.partialRefresh;
exports.beforeCustomFilterOpen = ej2Grids.beforeCustomFilterOpen;
exports.selectVirtualRow = ej2Grids.selectVirtualRow;
exports.columnsPrepared = ej2Grids.columnsPrepared;
exports.cBoxFltrBegin = ej2Grids.cBoxFltrBegin;
exports.cBoxFltrComplete = ej2Grids.cBoxFltrComplete;
exports.fltrPrevent = ej2Grids.fltrPrevent;
exports.beforeFltrcMenuOpen = ej2Grids.beforeFltrcMenuOpen;
exports.valCustomPlacement = ej2Grids.valCustomPlacement;
exports.filterCboxValue = ej2Grids.filterCboxValue;
exports.componentRendered = ej2Grids.componentRendered;
exports.restoreFocus = ej2Grids.restoreFocus;
exports.detailStateChange = ej2Grids.detailStateChange;
exports.detailIndentCellInfo = ej2Grids.detailIndentCellInfo;
exports.virtaulKeyHandler = ej2Grids.virtaulKeyHandler;
exports.virtaulCellFocus = ej2Grids.virtaulCellFocus;
exports.virtualScrollEditActionBegin = ej2Grids.virtualScrollEditActionBegin;
exports.virtualScrollEditSuccess = ej2Grids.virtualScrollEditSuccess;
exports.virtualScrollEditCancel = ej2Grids.virtualScrollEditCancel;
exports.virtualScrollEdit = ej2Grids.virtualScrollEdit;
exports.refreshVirtualCache = ej2Grids.refreshVirtualCache;
exports.editReset = ej2Grids.editReset;
exports.virtualScrollAddActionBegin = ej2Grids.virtualScrollAddActionBegin;
exports.getVirtualData = ej2Grids.getVirtualData;
exports.refreshInfiniteModeBlocks = ej2Grids.refreshInfiniteModeBlocks;
exports.resetInfiniteBlocks = ej2Grids.resetInfiniteBlocks;
exports.infiniteScrollHandler = ej2Grids.infiniteScrollHandler;
exports.infinitePageQuery = ej2Grids.infinitePageQuery;
exports.infiniteShowHide = ej2Grids.infiniteShowHide;
exports.appendInfiniteContent = ej2Grids.appendInfiniteContent;
exports.removeInfiniteRows = ej2Grids.removeInfiniteRows;
exports.setInfiniteCache = ej2Grids.setInfiniteCache;
exports.infiniteEditHandler = ej2Grids.infiniteEditHandler;
exports.initialCollapse = ej2Grids.initialCollapse;
exports.getAggregateQuery = ej2Grids.getAggregateQuery;
exports.closeFilterDialog = ej2Grids.closeFilterDialog;
exports.columnChooserCancelBtnClick = ej2Grids.columnChooserCancelBtnClick;
exports.getFilterBarOperator = ej2Grids.getFilterBarOperator;
exports.resetColumns = ej2Grids.resetColumns;
exports.pdfAggregateQueryCellInfo = ej2Grids.pdfAggregateQueryCellInfo;
exports.excelAggregateQueryCellInfo = ej2Grids.excelAggregateQueryCellInfo;
exports.setGroupCache = ej2Grids.setGroupCache;
exports.lazyLoadScrollHandler = ej2Grids.lazyLoadScrollHandler;
exports.groupCollapse = ej2Grids.groupCollapse;
exports.beforeCheckboxRenderer = ej2Grids.beforeCheckboxRenderer;
exports.refreshHandlers = ej2Grids.refreshHandlers;
exports.refreshFrozenColumns = ej2Grids.refreshFrozenColumns;
exports.setReorderDestinationElement = ej2Grids.setReorderDestinationElement;
exports.refreshVirtualFrozenHeight = ej2Grids.refreshVirtualFrozenHeight;
exports.setFreezeSelection = ej2Grids.setFreezeSelection;
exports.setInfiniteFrozenHeight = ej2Grids.setInfiniteFrozenHeight;
exports.setInfiniteColFrozenHeight = ej2Grids.setInfiniteColFrozenHeight;
exports.beforeRefreshOnDataChange = ej2Grids.beforeRefreshOnDataChange;
exports.immutableBatchCancel = ej2Grids.immutableBatchCancel;
exports.refreshVirtualFrozenRows = ej2Grids.refreshVirtualFrozenRows;
exports.checkScrollReset = ej2Grids.checkScrollReset;
exports.refreshFrozenHeight = ej2Grids.refreshFrozenHeight;
exports.setHeightToFrozenElement = ej2Grids.setHeightToFrozenElement;
exports.preventFrozenScrollRefresh = ej2Grids.preventFrozenScrollRefresh;
exports.nextCellIndex = ej2Grids.nextCellIndex;
exports.refreshInfiniteCurrentViewData = ej2Grids.refreshInfiniteCurrentViewData;
exports.infiniteCrudCancel = ej2Grids.infiniteCrudCancel;
exports.filterDialogClose = ej2Grids.filterDialogClose;
exports.refreshCustomFilterOkBtn = ej2Grids.refreshCustomFilterOkBtn;
exports.refreshCustomFilterClearBtn = ej2Grids.refreshCustomFilterClearBtn;
exports.renderResponsiveCmenu = ej2Grids.renderResponsiveCmenu;
exports.filterCmenuSelect = ej2Grids.filterCmenuSelect;
exports.customFilterClose = ej2Grids.customFilterClose;
exports.setFullScreenDialog = ej2Grids.setFullScreenDialog;
exports.refreshExpandandCollapse = ej2Grids.refreshExpandandCollapse;
exports.rowModeChange = ej2Grids.rowModeChange;
exports.enterKeyHandler = ej2Grids.enterKeyHandler;
exports.refreshVirtualMaxPage = ej2Grids.refreshVirtualMaxPage;
exports.setVirtualPageQuery = ej2Grids.setVirtualPageQuery;
exports.selectRowOnContextOpen = ej2Grids.selectRowOnContextOpen;
exports.pagerRefresh = ej2Grids.pagerRefresh;
exports.closeInline = ej2Grids.closeInline;
exports.closeBatch = ej2Grids.closeBatch;
exports.closeEdit = ej2Grids.closeEdit;
exports.resetVirtualFocus = ej2Grids.resetVirtualFocus;
exports.afterContentRender = ej2Grids.afterContentRender;
exports.refreshVirtualEditFormCells = ej2Grids.refreshVirtualEditFormCells;
exports.scrollToEdit = ej2Grids.scrollToEdit;
exports.beforeCheckboxRendererQuery = ej2Grids.beforeCheckboxRendererQuery;
exports.createVirtualValidationForm = ej2Grids.createVirtualValidationForm;
exports.validateVirtualForm = ej2Grids.validateVirtualForm;
exports.destroyChildGrid = ej2Grids.destroyChildGrid;
exports.stickyScrollComplete = ej2Grids.stickyScrollComplete;
exports.captionActionComplete = ej2Grids.captionActionComplete;
exports.refreshInfinitePersistSelection = ej2Grids.refreshInfinitePersistSelection;
exports.refreshInfiniteEditrowindex = ej2Grids.refreshInfiniteEditrowindex;
exports.afterFilterColumnMenuClose = ej2Grids.afterFilterColumnMenuClose;
exports.beforeCheckboxfilterRenderer = ej2Grids.beforeCheckboxfilterRenderer;
exports.commandColumnDestroy = ej2Grids.commandColumnDestroy;
exports.rowCell = ej2Grids.rowCell;
exports.gridHeader = ej2Grids.gridHeader;
exports.gridContent = ej2Grids.gridContent;
exports.gridFooter = ej2Grids.gridFooter;
exports.headerContent = ej2Grids.headerContent;
exports.movableContent = ej2Grids.movableContent;
exports.movableHeader = ej2Grids.movableHeader;
exports.frozenContent = ej2Grids.frozenContent;
exports.frozenHeader = ej2Grids.frozenHeader;
exports.content = ej2Grids.content;
exports.table = ej2Grids.table;
exports.row = ej2Grids.row;
exports.gridChkBox = ej2Grids.gridChkBox;
exports.editedRow = ej2Grids.editedRow;
exports.addedRow = ej2Grids.addedRow;
exports.changedRecords = ej2Grids.changedRecords;
exports.addedRecords = ej2Grids.addedRecords;
exports.deletedRecords = ej2Grids.deletedRecords;
exports.leftRight = ej2Grids.leftRight;
exports.frozenRight = ej2Grids.frozenRight;
exports.frozenLeft = ej2Grids.frozenLeft;
exports.dataColIndex = ej2Grids.dataColIndex;
exports.ariaColIndex = ej2Grids.ariaColIndex;
exports.dataRowIndex = ej2Grids.dataRowIndex;
exports.ariaRowIndex = ej2Grids.ariaRowIndex;
exports.tbody = ej2Grids.tbody;
exports.colGroup = ej2Grids.colGroup;
exports.open = ej2Grids.open;
exports.change = ej2Grids.change;
exports.focus = ej2Grids.focus;
exports.create = ej2Grids.create;
exports.beforeOpen = ej2Grids.beforeOpen;
exports.downArrow = ej2Grids.downArrow;
exports.upArrow = ej2Grids.upArrow;
exports.pageUp = ej2Grids.pageUp;
exports.pageDown = ej2Grids.pageDown;
exports.enter = ej2Grids.enter;
exports.shiftEnter = ej2Grids.shiftEnter;
exports.tab = ej2Grids.tab;
exports.shiftTab = ej2Grids.shiftTab;
exports.Data = ej2Grids.Data;
exports.Sort = ej2Grids.Sort;
exports.Page = ej2Grids.Page;
exports.Selection = ej2Grids.Selection;
exports.Filter = ej2Grids.Filter;
exports.Search = ej2Grids.Search;
exports.Scroll = ej2Grids.Scroll;
exports.resizeClassList = ej2Grids.resizeClassList;
exports.Resize = ej2Grids.Resize;
exports.Reorder = ej2Grids.Reorder;
exports.RowDD = ej2Grids.RowDD;
exports.Group = ej2Grids.Group;
exports.getCloneProperties = ej2Grids.getCloneProperties;
exports.Print = ej2Grids.Print;
exports.DetailRow = ej2Grids.DetailRow;
exports.Toolbar = ej2Grids.Toolbar;
exports.Aggregate = ej2Grids.Aggregate;
exports.summaryIterator = ej2Grids.summaryIterator;
exports.VirtualScroll = ej2Grids.VirtualScroll;
exports.Edit = ej2Grids.Edit;
exports.BatchEdit = ej2Grids.BatchEdit;
exports.InlineEdit = ej2Grids.InlineEdit;
exports.NormalEdit = ej2Grids.NormalEdit;
exports.DialogEdit = ej2Grids.DialogEdit;
exports.ColumnChooser = ej2Grids.ColumnChooser;
exports.ExcelExport = ej2Grids.ExcelExport;
exports.PdfExport = ej2Grids.PdfExport;
exports.ExportHelper = ej2Grids.ExportHelper;
exports.ExportValueFormatter = ej2Grids.ExportValueFormatter;
exports.Clipboard = ej2Grids.Clipboard;
exports.CommandColumn = ej2Grids.CommandColumn;
exports.CheckBoxFilter = ej2Grids.CheckBoxFilter;
exports.menuClass = ej2Grids.menuClass;
exports.ContextMenu = ej2Grids.ContextMenu;
exports.Freeze = ej2Grids.Freeze;
exports.ColumnMenu = ej2Grids.ColumnMenu;
exports.ExcelFilter = ej2Grids.ExcelFilter;
exports.ForeignKey = ej2Grids.ForeignKey;
exports.Logger = ej2Grids.Logger;
exports.detailLists = ej2Grids.detailLists;
exports.InfiniteScroll = ej2Grids.InfiniteScroll;
exports.LazyLoadGroup = ej2Grids.LazyLoadGroup;
exports.Column = ej2Grids.Column;
exports.CommandColumnModel = ej2Grids.CommandColumnModel;
exports.GridColumn = ej2Grids.GridColumn;
exports.StackedColumn = ej2Grids.StackedColumn;
exports.Row = ej2Grids.Row;
exports.Cell = ej2Grids.Cell;
exports.HeaderRender = ej2Grids.HeaderRender;
exports.ContentRender = ej2Grids.ContentRender;
exports.RowRenderer = ej2Grids.RowRenderer;
exports.CellRenderer = ej2Grids.CellRenderer;
exports.HeaderCellRenderer = ej2Grids.HeaderCellRenderer;
exports.FilterCellRenderer = ej2Grids.FilterCellRenderer;
exports.StackedHeaderCellRenderer = ej2Grids.StackedHeaderCellRenderer;
exports.Render = ej2Grids.Render;
exports.IndentCellRenderer = ej2Grids.IndentCellRenderer;
exports.GroupCaptionCellRenderer = ej2Grids.GroupCaptionCellRenderer;
exports.GroupCaptionEmptyCellRenderer = ej2Grids.GroupCaptionEmptyCellRenderer;
exports.BatchEditRender = ej2Grids.BatchEditRender;
exports.DialogEditRender = ej2Grids.DialogEditRender;
exports.InlineEditRender = ej2Grids.InlineEditRender;
exports.EditRender = ej2Grids.EditRender;
exports.BooleanEditCell = ej2Grids.BooleanEditCell;
exports.DefaultEditCell = ej2Grids.DefaultEditCell;
exports.DropDownEditCell = ej2Grids.DropDownEditCell;
exports.NumericEditCell = ej2Grids.NumericEditCell;
exports.DatePickerEditCell = ej2Grids.DatePickerEditCell;
exports.CommandColumnRenderer = ej2Grids.CommandColumnRenderer;
exports.FreezeContentRender = ej2Grids.FreezeContentRender;
exports.FreezeRender = ej2Grids.FreezeRender;
exports.StringFilterUI = ej2Grids.StringFilterUI;
exports.NumberFilterUI = ej2Grids.NumberFilterUI;
exports.DateFilterUI = ej2Grids.DateFilterUI;
exports.BooleanFilterUI = ej2Grids.BooleanFilterUI;
exports.FlMenuOptrUI = ej2Grids.FlMenuOptrUI;
exports.AutoCompleteEditCell = ej2Grids.AutoCompleteEditCell;
exports.ComboboxEditCell = ej2Grids.ComboboxEditCell;
exports.MultiSelectEditCell = ej2Grids.MultiSelectEditCell;
exports.TimePickerEditCell = ej2Grids.TimePickerEditCell;
exports.ToggleEditCell = ej2Grids.ToggleEditCell;
exports.MaskedTextBoxCellEdit = ej2Grids.MaskedTextBoxCellEdit;
exports.VirtualContentRenderer = ej2Grids.VirtualContentRenderer;
exports.VirtualHeaderRenderer = ej2Grids.VirtualHeaderRenderer;
exports.VirtualElementHandler = ej2Grids.VirtualElementHandler;
exports.GroupLazyLoadRenderer = ej2Grids.GroupLazyLoadRenderer;
exports.ColumnFreezeHeaderRenderer = ej2Grids.ColumnFreezeHeaderRenderer;
exports.ColumnFreezeContentRenderer = ej2Grids.ColumnFreezeContentRenderer;
exports.ResponsiveDialogRenderer = ej2Grids.ResponsiveDialogRenderer;
exports.EditCellBase = ej2Grids.EditCellBase;
exports.CellRendererFactory = ej2Grids.CellRendererFactory;
exports.ServiceLocator = ej2Grids.ServiceLocator;
exports.RowModelGenerator = ej2Grids.RowModelGenerator;
exports.GroupModelGenerator = ej2Grids.GroupModelGenerator;
exports.FreezeRowModelGenerator = ej2Grids.FreezeRowModelGenerator;
exports.ValueFormatter = ej2Grids.ValueFormatter;
exports.VirtualRowModelGenerator = ej2Grids.VirtualRowModelGenerator;
exports.InterSectionObserver = ej2Grids.InterSectionObserver;
exports.Pager = ej2Grids.Pager;
exports.ExternalMessage = ej2Grids.ExternalMessage;
exports.NumericContainer = ej2Grids.NumericContainer;
exports.PagerMessage = ej2Grids.PagerMessage;
exports.PagerDropDown = ej2Grids.PagerDropDown;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-grids.umd.js.map
