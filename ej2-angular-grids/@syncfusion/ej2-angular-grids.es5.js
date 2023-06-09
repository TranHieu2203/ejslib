/*!
*  filename: ej2-angular-grids.es5.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

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
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Aggregate, ColumnChooser, ColumnMenu, CommandColumn, ContextMenu, DetailRow, Edit, ExcelExport, Filter, ForeignKey, Freeze, Grid, Group, InfiniteScroll, LazyLoadGroup, Page, Pager, PdfExport, Reorder, Resize, RowDD, Search, Selection, Sort, Toolbar, VirtualScroll } from '@syncfusion/ej2-grids';
import { CommonModule } from '@angular/common';
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return StackedColumnDirective;
}(ComplexBase));
StackedColumnDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
]; };
StackedColumnDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'commandsTemplate': [{ type: ContentChild, args: ['commandsTemplate',] },],
    'filter_itemTemplate': [{ type: ContentChild, args: ['filterItemTemplate',] },],
    'editTemplate': [{ type: ContentChild, args: ['editTemplate',] },],
    'filterTemplate': [{ type: ContentChild, args: ['filterTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "template", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], StackedColumnDirective.prototype, "editTemplate", void 0);
__decorate([
    Template(),
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
}(ArrayBase));
StackedColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-columns>e-column>e-stacked-columns',
                queries: {
                    children: new ContentChildren(StackedColumnDirective)
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return ColumnDirective;
}(ComplexBase));
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-columns>e-column',
                inputs: input$1,
                outputs: outputs$1,
                queries: {
                    childColumns: new ContentChild(StackedColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
ColumnDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'commandsTemplate': [{ type: ContentChild, args: ['commandsTemplate',] },],
    'filter_itemTemplate': [{ type: ContentChild, args: ['filterItemTemplate',] },],
    'editTemplate': [{ type: ContentChild, args: ['editTemplate',] },],
    'filterTemplate': [{ type: ContentChild, args: ['filterTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ColumnDirective.prototype, "editTemplate", void 0);
__decorate$1([
    Template(),
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
}(ArrayBase));
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return AggregateColumnDirective;
}(ComplexBase));
AggregateColumnDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
]; };
AggregateColumnDirective.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'groupFooterTemplate': [{ type: ContentChild, args: ['groupFooterTemplate',] },],
    'groupCaptionTemplate': [{ type: ContentChild, args: ['groupCaptionTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], AggregateColumnDirective.prototype, "footerTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], AggregateColumnDirective.prototype, "groupFooterTemplate", void 0);
__decorate$2([
    Template(),
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
}(ArrayBase));
AggregateColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate>e-columns',
                queries: {
                    children: new ContentChildren(AggregateColumnDirective)
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return AggregateDirective;
}(ComplexBase));
AggregateDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childColumns: new ContentChild(AggregateColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AggregateDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
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
}(ArrayBase));
AggregatesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates',
                queries: {
                    children: new ContentChildren(AggregateDirective)
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
var GridComponent = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
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
}(Grid));
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-grid',
                inputs: inputs,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective),
                    childAggregates: new ContentChild(AggregatesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
GridComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
GridComponent.propDecorators = {
    'rowTemplate': [{ type: ContentChild, args: ['rowTemplate',] },],
    'detailTemplate': [{ type: ContentChild, args: ['detailTemplate',] },],
    'toolbarTemplate': [{ type: ContentChild, args: ['toolbarTemplate',] },],
    'pagerTemplate': [{ type: ContentChild, args: ['pagerTemplate',] },],
    'editSettings_template': [{ type: ContentChild, args: ['editSettingsTemplate',] },],
    'groupSettings_captionTemplate': [{ type: ContentChild, args: ['groupSettingsCaptionTemplate',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], GridComponent.prototype, "rowTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], GridComponent.prototype, "detailTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], GridComponent.prototype, "toolbarTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], GridComponent.prototype, "pagerTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], GridComponent.prototype, "editSettings_template", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], GridComponent.prototype, "groupSettings_captionTemplate", void 0);
GridComponent = __decorate$3([
    ComponentMixins([ComponentBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], GridComponent);
/**
 * NgModule definition for the Grid component.
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    GridComponent,
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
                    GridComponent,
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
var FilterService = { provide: 'GridsFilter', useValue: Filter };
var PageService = { provide: 'GridsPage', useValue: Page };
var SelectionService = { provide: 'GridsSelection', useValue: Selection };
var SortService = { provide: 'GridsSort', useValue: Sort };
var GroupService = { provide: 'GridsGroup', useValue: Group };
var ReorderService = { provide: 'GridsReorder', useValue: Reorder };
var RowDDService = { provide: 'GridsRowDD', useValue: RowDD };
var DetailRowService = { provide: 'GridsDetailRow', useValue: DetailRow };
var ToolbarService = { provide: 'GridsToolbar', useValue: Toolbar };
var AggregateService = { provide: 'GridsAggregate', useValue: Aggregate };
var SearchService = { provide: 'GridsSearch', useValue: Search };
var VirtualScrollService = { provide: 'GridsVirtualScroll', useValue: VirtualScroll };
var EditService = { provide: 'GridsEdit', useValue: Edit };
var ResizeService = { provide: 'GridsResize', useValue: Resize };
var ExcelExportService = { provide: 'GridsExcelExport', useValue: ExcelExport };
var PdfExportService = { provide: 'GridsPdfExport', useValue: PdfExport };
var CommandColumnService = { provide: 'GridsCommandColumn', useValue: CommandColumn };
var ContextMenuService = { provide: 'GridsContextMenu', useValue: ContextMenu };
var FreezeService = { provide: 'GridsFreeze', useValue: Freeze };
var ColumnMenuService = { provide: 'GridsColumnMenu', useValue: ColumnMenu };
var ColumnChooserService = { provide: 'GridsColumnChooser', useValue: ColumnChooser };
var ForeignKeyService = { provide: 'GridsForeignKey', useValue: ForeignKey };
var InfiniteScrollService = { provide: 'GridsInfiniteScroll', useValue: InfiniteScroll };
var LazyLoadGroupService = { provide: 'GridsLazyLoadGroup', useValue: LazyLoadGroup };
/**
 * NgModule definition for the Grid component with providers.
 */
var GridAllModule = /** @class */ (function () {
    function GridAllModule() {
    }
    return GridAllModule;
}());
GridAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, GridModule],
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
var PagerComponent = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
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
}(Pager));
PagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pager',
                inputs: inputs$1,
                outputs: outputs$5,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PagerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
PagerComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$4([
    Template(),
    __metadata$4("design:type", Object)
], PagerComponent.prototype, "template", void 0);
PagerComponent = __decorate$4([
    ComponentMixins([ComponentBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PagerComponent);
/**
 * NgModule definition for the Pager component.
 */
var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    return PagerModule;
}());
PagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PagerComponent
                ],
                exports: [
                    PagerComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, PagerModule],
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
/**
 * Generated bundle index. Do not edit.
 */
export { StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, GridComponent, GridModule, GridAllModule, FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService, ToolbarService, AggregateService, SearchService, VirtualScrollService, EditService, ResizeService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, FreezeService, ColumnMenuService, ColumnChooserService, ForeignKeyService, InfiniteScrollService, LazyLoadGroupService, PagerComponent, PagerModule, PagerAllModule, inputs as ɵa, outputs$4 as ɵb, inputs$1 as ɵc, outputs$5 as ɵd };
export { CheckBoxFilterBase, ExcelFilterBase, SortDescriptor, SortSettings, Predicate, InfiniteScrollSettings, FilterSettings, SelectionSettings, SearchSettings, RowDropSettings, TextWrapSettings, ResizeSettings, GroupSettings, EditSettings, Grid, CellType, RenderType, ToolbarItem, ResponsiveDialogAction, ResponsiveToolbarAction, doesImplementInterface, valueAccessor, headerValueAccessor, getUpdateUsingRaf, isExportColumns, updateColumnTypeForExportColumns, updatecloneRow, getCollapsedRowsCount, recursive, iterateArrayOrObject, iterateExtend, templateCompiler, setStyleAndAttributes, extend, setColumnIndex, prepareColumns, setCssInGridPopUp, getActualProperties, parentsUntil, getElementIndex, inArray, getActualPropFromColl, removeElement, getPosition, getUid, appendChildren, parents, calculateAggregate, getScrollBarWidth, getRowHeight, getActualRowHeight, isComplexField, getComplexFieldID, setComplexFieldID, isEditable, isActionPrevent, wrap, setFormatter, addRemoveActiveClasses, distinctStringValues, getFilterMenuPostion, getZIndexCalcualtion, toogleCheckbox, setChecked, createCboxWithWrap, removeAddCboxClasses, refreshForeignData, getForeignData, getColumnByForeignKeyValue, getDatePredicate, renderMovable, isGroupAdaptive, getObject, getCustomDateFormat, getExpandedState, getPrintGridModel, extendObjWithFn, measureColumnDepth, checkDepth, refreshFilteredColsUid, Global, getTransformValues, applyBiggerTheme, alignFrozenEditForm, ensureLastRow, ensureFirstRow, isRowEnteredInGrid, getEditedDataIndex, eventPromise, getStateEventArgument, ispercentageWidth, resetRowIndex, compareChanges, setRowElements, splitFrozenRowObjectCells, gridActionHandler, getGridRowObjects, getGridRowElements, sliceElements, getCellsByTableName, getCellByColAndRowIndex, setValidationRuels, getMovableTbody, getFrozenRightTbody, setRowsInTbody, getNumberFormat, addBiggerDialog, performComplexDataOperation, setDisplayValue, addRemoveEventListener, createEditElement, getColumnModelByUid, getColumnModelByFieldName, registerEventHandlers, removeEventHandlers, clearReactVueTemplates, getRowIndexFromElement, generateExpandPredicates, getPredicates, getGroupKeysAndFields, findCellIndex, created, destroyed, load, rowDataBound, queryCellInfo, headerCellInfo, actionBegin, actionComplete, actionFailure, dataBound, rowSelecting, rowSelected, rowDeselecting, rowDeselected, cellSelecting, cellSelected, cellDeselecting, cellDeselected, columnSelecting, columnSelected, columnDeselecting, columnDeselected, columnDragStart, columnDrag, columnDrop, rowDragStartHelper, rowDragStart, rowDrag, rowDrop, beforePrint, printComplete, detailDataBound, toolbarClick, batchAdd, batchCancel, batchDelete, beforeBatchAdd, beforeBatchDelete, beforeBatchSave, beginEdit, cellEdit, cellSave, cellSaved, endAdd, endDelete, endEdit, recordDoubleClick, recordClick, beforeDataBound, beforeOpenColumnChooser, beforeOpenAdaptiveDialog, resizeStart, onResize, resizeStop, checkBoxChange, beforeCopy, beforePaste, beforeAutoFill, filterChoiceRequest, filterAfterOpen, filterBeforeOpen, filterSearchBegin, commandClick, exportGroupCaption, lazyLoadGroupExpand, lazyLoadGroupCollapse, initialLoad, initialEnd, dataReady, contentReady, uiUpdate, onEmpty, inBoundModelChanged, modelChanged, colGroupRefresh, headerRefreshed, pageBegin, pageComplete, sortBegin, sortComplete, filterBegin, filterComplete, searchBegin, searchComplete, reorderBegin, reorderComplete, rowDragAndDropBegin, rowDragAndDropComplete, groupBegin, groupComplete, ungroupBegin, ungroupComplete, groupAggregates, refreshFooterRenderer, refreshAggregateCell, refreshAggregates, rowSelectionBegin, rowSelectionComplete, columnSelectionBegin, columnSelectionComplete, cellSelectionBegin, cellSelectionComplete, beforeCellFocused, cellFocused, keyPressed, click, destroy, columnVisibilityChanged, scroll, columnWidthChanged, columnPositionChanged, rowDragAndDrop, rowsAdded, rowsRemoved, columnDragStop, headerDrop, dataSourceModified, refreshComplete, refreshVirtualBlock, dblclick, toolbarRefresh, bulkSave, autoCol, tooltipDestroy, updateData, editBegin, editComplete, addBegin, addComplete, saveComplete, deleteBegin, deleteComplete, preventBatch, dialogDestroy, crudAction, addDeleteAction, destroyForm, doubleTap, beforeExcelExport, excelExportComplete, excelQueryCellInfo, excelHeaderQueryCellInfo, exportDetailDataBound, beforePdfExport, pdfExportComplete, pdfQueryCellInfo, pdfHeaderQueryCellInfo, accessPredicate, contextMenuClick, freezeRender, freezeRefresh, contextMenuOpen, columnMenuClick, columnMenuOpen, filterOpen, filterDialogCreated, filterMenuClose, initForeignKeyColumn, getForeignKeyData, generateQuery, showEmptyGrid, foreignKeyData, columnDataStateChange, dataStateChange, dataSourceChanged, rtlUpdated, beforeFragAppend, frozenHeight, textWrapRefresh, recordAdded, cancelBegin, editNextValCell, hierarchyPrint, expandChildGrid, printGridInit, exportRowDataBound, exportDataBound, rowPositionChanged, columnChooserOpened, batchForm, beforeStartEdit, beforeBatchCancel, batchEditFormRendered, partialRefresh, beforeCustomFilterOpen, selectVirtualRow, columnsPrepared, cBoxFltrBegin, cBoxFltrComplete, fltrPrevent, beforeFltrcMenuOpen, valCustomPlacement, filterCboxValue, componentRendered, restoreFocus, detailStateChange, detailIndentCellInfo, virtaulKeyHandler, virtaulCellFocus, virtualScrollEditActionBegin, virtualScrollEditSuccess, virtualScrollEditCancel, virtualScrollEdit, refreshVirtualCache, editReset, virtualScrollAddActionBegin, getVirtualData, refreshInfiniteModeBlocks, resetInfiniteBlocks, infiniteScrollHandler, infinitePageQuery, infiniteShowHide, appendInfiniteContent, removeInfiniteRows, setInfiniteCache, infiniteEditHandler, initialCollapse, getAggregateQuery, closeFilterDialog, columnChooserCancelBtnClick, getFilterBarOperator, resetColumns, pdfAggregateQueryCellInfo, excelAggregateQueryCellInfo, setGroupCache, lazyLoadScrollHandler, groupCollapse, beforeCheckboxRenderer, refreshHandlers, refreshFrozenColumns, setReorderDestinationElement, refreshVirtualFrozenHeight, setFreezeSelection, setInfiniteFrozenHeight, setInfiniteColFrozenHeight, beforeRefreshOnDataChange, immutableBatchCancel, refreshVirtualFrozenRows, checkScrollReset, refreshFrozenHeight, setHeightToFrozenElement, preventFrozenScrollRefresh, nextCellIndex, refreshInfiniteCurrentViewData, infiniteCrudCancel, filterDialogClose, refreshCustomFilterOkBtn, refreshCustomFilterClearBtn, renderResponsiveCmenu, filterCmenuSelect, customFilterClose, setFullScreenDialog, refreshExpandandCollapse, rowModeChange, enterKeyHandler, refreshVirtualMaxPage, setVirtualPageQuery, selectRowOnContextOpen, pagerRefresh, closeInline, closeBatch, closeEdit, resetVirtualFocus, afterContentRender, refreshVirtualEditFormCells, scrollToEdit, beforeCheckboxRendererQuery, createVirtualValidationForm, validateVirtualForm, destroyChildGrid, stickyScrollComplete, captionActionComplete, refreshInfinitePersistSelection, refreshInfiniteEditrowindex, afterFilterColumnMenuClose, beforeCheckboxfilterRenderer, commandColumnDestroy, rowCell, gridHeader, gridContent, gridFooter, headerContent, movableContent, movableHeader, frozenContent, frozenHeader, content, table, row, gridChkBox, editedRow, addedRow, changedRecords, addedRecords, deletedRecords, leftRight, frozenRight, frozenLeft, dataColIndex, ariaColIndex, dataRowIndex, ariaRowIndex, tbody, colGroup, open, change, focus, create, beforeOpen, downArrow, upArrow, pageUp, pageDown, enter, shiftEnter, tab, shiftTab, Data, Sort, Page, Selection, Filter, Search, Scroll, resizeClassList, Resize, Reorder, RowDD, Group, getCloneProperties, Print, DetailRow, Toolbar, Aggregate, summaryIterator, VirtualScroll, Edit, BatchEdit, InlineEdit, NormalEdit, DialogEdit, ColumnChooser, ExcelExport, PdfExport, ExportHelper, ExportValueFormatter, Clipboard, CommandColumn, CheckBoxFilter, menuClass, ContextMenu, Freeze, ColumnMenu, ExcelFilter, ForeignKey, Logger, detailLists, InfiniteScroll, LazyLoadGroup, Column, CommandColumnModel, GridColumn, StackedColumn, Row, Cell, HeaderRender, ContentRender, RowRenderer, CellRenderer, HeaderCellRenderer, FilterCellRenderer, StackedHeaderCellRenderer, Render, IndentCellRenderer, GroupCaptionCellRenderer, GroupCaptionEmptyCellRenderer, BatchEditRender, DialogEditRender, InlineEditRender, EditRender, BooleanEditCell, DefaultEditCell, DropDownEditCell, NumericEditCell, DatePickerEditCell, CommandColumnRenderer, FreezeContentRender, FreezeRender, StringFilterUI, NumberFilterUI, DateFilterUI, BooleanFilterUI, FlMenuOptrUI, AutoCompleteEditCell, ComboboxEditCell, MultiSelectEditCell, TimePickerEditCell, ToggleEditCell, MaskedTextBoxCellEdit, VirtualContentRenderer, VirtualHeaderRenderer, VirtualElementHandler, GroupLazyLoadRenderer, ColumnFreezeHeaderRenderer, ColumnFreezeContentRenderer, ResponsiveDialogRenderer, EditCellBase, CellRendererFactory, ServiceLocator, RowModelGenerator, GroupModelGenerator, FreezeRowModelGenerator, ValueFormatter, VirtualRowModelGenerator, InterSectionObserver, Pager, ExternalMessage, NumericContainer, PagerMessage, PagerDropDown } from '@syncfusion/ej2-grids';
//# sourceMappingURL=ej2-angular-grids.es5.js.map
