/*!
*  filename: ej2-angular-pivotview.es5.js
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
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { CalculatedField, ConditionalFormatting, DrillThrough, ExcelExport, FieldList, Grouping, GroupingBar, NumberFormatting, PDFExport, PivotChart, PivotFieldList, PivotView, Toolbar, VirtualScroll } from '@syncfusion/ej2-pivotview';
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
var inputs = ['aggregateTypes', 'allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'chartTypes', 'cssClass', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'exportAllPages', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'toolbarTemplate', 'tooltipTemplate', 'width'];
var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeExport', 'beforeServiceInvoke', 'beginDrillThrough', 'calculatedFieldCreate', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'editCompleted', 'enginePopulated', 'enginePopulating', 'exportComplete', 'fetchReport', 'fieldDragStart', 'fieldDrop', 'fieldListRefreshed', 'fieldRemove', 'hyperlinkCellClick', 'load', 'loadReport', 'memberEditorOpen', 'memberFiltering', 'newReport', 'numberFormatting', 'onFieldDropped', 'onHeadersSort', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
var twoWays = [];
/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
var PivotViewComponent = /** @class */ (function (_super) {
    __extends(PivotViewComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PivotViewComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('PivotViewGroupingBar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('PivotViewFieldList');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('PivotViewCalculatedField');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('PivotViewConditionalFormatting');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('PivotViewVirtualScroll');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('PivotViewDrillThrough');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('PivotViewToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('PivotViewPivotChart');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('PivotViewPDFExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('PivotViewExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('PivotViewNumberFormatting');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('PivotViewGrouping');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return PivotViewComponent;
}(PivotView));
PivotViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pivotview',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PivotViewComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
PivotViewComponent.propDecorators = {
    'cellTemplate': [{ type: ContentChild, args: ['cellTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], PivotViewComponent.prototype, "cellTemplate", void 0);
PivotViewComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PivotViewComponent);
/**
 * NgModule definition for the PivotView component.
 */
var PivotViewModule = /** @class */ (function () {
    function PivotViewModule() {
    }
    return PivotViewModule;
}());
PivotViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PivotViewComponent
                ],
                exports: [
                    PivotViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewModule.ctorParameters = function () { return []; };
var GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: GroupingBar };
var FieldListService = { provide: 'PivotViewFieldList', useValue: FieldList };
var CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: CalculatedField };
var ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ConditionalFormatting };
var VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: VirtualScroll };
var DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: DrillThrough };
var ToolbarService = { provide: 'PivotViewToolbar', useValue: Toolbar };
var PivotChartService = { provide: 'PivotViewPivotChart', useValue: PivotChart };
var PDFExportService = { provide: 'PivotViewPDFExport', useValue: PDFExport };
var ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ExcelExport };
var NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: NumberFormatting };
var GroupingService = { provide: 'PivotViewGrouping', useValue: Grouping };
/**
 * NgModule definition for the PivotView component with providers.
 */
var PivotViewAllModule = /** @class */ (function () {
    function PivotViewAllModule() {
    }
    return PivotViewAllModule;
}());
PivotViewAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PivotViewModule],
                exports: [
                    PivotViewModule
                ],
                providers: [
                    GroupingBarService,
                    FieldListService,
                    CalculatedFieldService,
                    ConditionalFormattingService,
                    VirtualScrollService,
                    DrillThroughService,
                    ToolbarService,
                    PivotChartService,
                    PDFExportService,
                    ExcelExportService,
                    NumberFormattingService,
                    GroupingService
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['aggregateTypes', 'allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'currencyCode', 'dataSourceSettings', 'enableFieldSearching', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target'];
var outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeServiceInvoke', 'calculatedFieldCreate', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'fieldDragStart', 'fieldDrop', 'fieldRemove', 'load', 'memberEditorOpen', 'memberFiltering', 'onFieldDropped', 'onHeadersSort'];
var twoWays$1 = [];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
var PivotFieldListComponent = /** @class */ (function (_super) {
    __extends(PivotFieldListComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PivotFieldListComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('PivotViewCalculatedField');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return PivotFieldListComponent;
}(PivotFieldList));
PivotFieldListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pivotfieldlist',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
PivotFieldListComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PivotFieldListComponent);
/**
 * NgModule definition for the PivotFieldList component.
 */
var PivotFieldListModule = /** @class */ (function () {
    function PivotFieldListModule() {
    }
    return PivotFieldListModule;
}());
PivotFieldListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PivotFieldListComponent
                ],
                exports: [
                    PivotFieldListComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the PivotFieldList component with providers.
 */
var PivotFieldListAllModule = /** @class */ (function () {
    function PivotFieldListAllModule() {
    }
    return PivotFieldListAllModule;
}());
PivotFieldListAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PivotFieldListModule],
                exports: [
                    PivotFieldListModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { PivotViewComponent, PivotViewModule, PivotViewAllModule, GroupingBarService, FieldListService, CalculatedFieldService, ConditionalFormattingService, VirtualScrollService, DrillThroughService, ToolbarService, PivotChartService, PDFExportService, ExcelExportService, NumberFormattingService, GroupingService, PivotFieldListComponent, PivotFieldListModule, PivotFieldListAllModule, inputs$1 as ɵc, outputs$1 as ɵd, inputs as ɵa, outputs as ɵb };
export { GroupingBarSettings, CellEditSettings, ConditionalSettings, HyperlinkSettings, DisplayOption, PivotView, Render, ExcelExport, PDFExport, KeyboardInteraction, VirtualScroll, DrillThrough, PivotChart, PivotFieldList, TreeViewRenderer, AxisFieldRenderer, AxisTableRenderer, DialogRenderer, EventBase, NodeStateModified, DataSourceUpdate, FieldList, CommonKeyboardInteraction, Common, GroupingBar, CalculatedField, ConditionalFormatting, PivotCommon, load, enginePopulating, enginePopulated, onFieldDropped, fieldDrop, beforePivotTableRender, afterPivotTableRender, beforeExport, exportComplete, excelHeaderQueryCellInfo, pdfHeaderQueryCellInfo, excelQueryCellInfo, pdfQueryCellInfo, onPdfCellRender, dataBound, queryCellInfo, headerCellInfo, hyperlinkCellClick, resizing, resizeStop, cellClick, drillThrough, beforeColumnsRender, selected, cellSelecting, drill, cellSelected, cellDeselected, rowSelected, rowDeselected, beginDrillThrough, editCompleted, multiLevelLabelClick, saveReport, fetchReport, loadReport, renameReport, removeReport, newReport, toolbarRender, toolbarClick, chartTooltipRender, chartLoaded, chartLoad, chartResized, chartAxisLabelRender, chartSeriesCreated, aggregateCellInfo, onHeadersSort, contextMenuClick, contextMenuOpen, fieldListRefreshed, conditionalFormatting, beforePdfExport, beforeExcelExport, memberFiltering, calculatedFieldCreate, memberEditorOpen, fieldRemove, numberFormatting, aggregateMenuOpen, fieldDragStart, chartPointClick, beforeServiceInvoke, actionBegin, actionComplete, actionFailure, initialLoad, uiUpdate, scroll, verticalScroll, horizontalScroll, contentReady, dataReady, initSubComponent, treeViewUpdate, pivotButtonUpdate, initCalculatedField, click, initToolbar, initFormatting, initGrouping, sortValue, drillUp, drillDown, addNewReport, saveCurrentReport, saveAsCurrentReport, renameCurrentReport, removeCurrentReport, loadReports, openConditionalFormatting, openNumberFormatting, MdxQuery, showFieldList, tableView, chartView, multipleAxis, showLegend, pdfExport, pngExport, excelExport, csvExport, jpegExport, svgExport, hideSubTotals, subTotalsRow, subTotalsColumn, showSubTotals, hideGrandTotals, grandTotalsRow, grandTotalsColumn, showGrandTotals, numberFormattingMenu, conditionalFormattingMenu, reportChange, sortFieldTree, editCalculatedField, sortField, filterField, removeField, openCalculatedField, editRecord, saveEditedRecords, addNewRecord, removeRecord, aggregateField, contextMenuCalculatedField, windowResize, calculatedFieldApplied, editedRecordsSaved, newRecordAdded, recordRemoved, closeFieldlist, fieldTreeSorted, reportSaved, newReportAdded, reportReSaved, reportRenamed, reportRemoved, excelExported, csvExported, pdfExported, pngExported, jpegExported, svgExported, conditionallyFormatted, numberFormatted, tableViewed, chartViewed, subTotalsHidden, subTotalsRowShown, subTotalsColumnShown, subTotalsShown, grandTotalsHidden, grandTotalsRowShown, grandTotalsColumnShown, grandTotalsShown, valueSorted, calculatedFieldEdited, fieldSorted, fieldFiltered, fieldRemoved, fieldAggregated, recordEdited, reportChanged, windowResized, recordUpdated, drillThroughClosed, verticalScrolled, horizontalScrolled, Theme, ErrorDialog, FilterDialog, PivotContextMenu, AggregateMenu, Toolbar, NumberFormatting, Grouping, PivotEngine, PivotUtil, OlapEngine, MDXQuery } from '@syncfusion/ej2-pivotview';
//# sourceMappingURL=ej2-angular-pivotview.es5.js.map
