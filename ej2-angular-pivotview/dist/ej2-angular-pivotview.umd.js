/*!
*  filename: ej2-angular-pivotview.umd.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-pivotview'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-pivotview', '@angular/common'], factory) :
	(factory((global['ej2-angular-pivotview'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.pivotview,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Pivotview,common) { 'use strict';

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
var inputs = ['aggregateTypes', 'allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'chartTypes', 'cssClass', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'exportAllPages', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'toolbarTemplate', 'tooltipTemplate', 'width'];
var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeExport', 'beforeServiceInvoke', 'beginDrillThrough', 'calculatedFieldCreate', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'editCompleted', 'enginePopulated', 'enginePopulating', 'exportComplete', 'fetchReport', 'fieldDragStart', 'fieldDrop', 'fieldListRefreshed', 'fieldRemove', 'hyperlinkCellClick', 'load', 'loadReport', 'memberEditorOpen', 'memberFiltering', 'newReport', 'numberFormatting', 'onFieldDropped', 'onHeadersSort', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
var twoWays = [];
/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
exports.PivotViewComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
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
}(ej2Pivotview.PivotView));
exports.PivotViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-pivotview',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.PivotViewComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.PivotViewComponent.propDecorators = {
    'cellTemplate': [{ type: core.ContentChild, args: ['cellTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.PivotViewComponent.prototype, "cellTemplate", void 0);
exports.PivotViewComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.PivotViewComponent);
/**
 * NgModule definition for the PivotView component.
 */
var PivotViewModule = /** @class */ (function () {
    function PivotViewModule() {
    }
    return PivotViewModule;
}());
PivotViewModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.PivotViewComponent
                ],
                exports: [
                    exports.PivotViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewModule.ctorParameters = function () { return []; };
var GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: ej2Pivotview.GroupingBar };
var FieldListService = { provide: 'PivotViewFieldList', useValue: ej2Pivotview.FieldList };
var CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: ej2Pivotview.CalculatedField };
var ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ej2Pivotview.ConditionalFormatting };
var VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: ej2Pivotview.VirtualScroll };
var DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: ej2Pivotview.DrillThrough };
var ToolbarService = { provide: 'PivotViewToolbar', useValue: ej2Pivotview.Toolbar };
var PivotChartService = { provide: 'PivotViewPivotChart', useValue: ej2Pivotview.PivotChart };
var PDFExportService = { provide: 'PivotViewPDFExport', useValue: ej2Pivotview.PDFExport };
var ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ej2Pivotview.ExcelExport };
var NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: ej2Pivotview.NumberFormatting };
var GroupingService = { provide: 'PivotViewGrouping', useValue: ej2Pivotview.Grouping };
/**
 * NgModule definition for the PivotView component with providers.
 */
var PivotViewAllModule = /** @class */ (function () {
    function PivotViewAllModule() {
    }
    return PivotViewAllModule;
}());
PivotViewAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PivotViewModule],
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
exports.PivotFieldListComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
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
}(ej2Pivotview.PivotFieldList));
exports.PivotFieldListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-pivotfieldlist',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.PivotFieldListComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.PivotFieldListComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.PivotFieldListComponent);
/**
 * NgModule definition for the PivotFieldList component.
 */
var PivotFieldListModule = /** @class */ (function () {
    function PivotFieldListModule() {
    }
    return PivotFieldListModule;
}());
PivotFieldListModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.PivotFieldListComponent
                ],
                exports: [
                    exports.PivotFieldListComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PivotFieldListModule],
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

exports.PivotViewModule = PivotViewModule;
exports.PivotViewAllModule = PivotViewAllModule;
exports.GroupingBarService = GroupingBarService;
exports.FieldListService = FieldListService;
exports.CalculatedFieldService = CalculatedFieldService;
exports.ConditionalFormattingService = ConditionalFormattingService;
exports.VirtualScrollService = VirtualScrollService;
exports.DrillThroughService = DrillThroughService;
exports.ToolbarService = ToolbarService;
exports.PivotChartService = PivotChartService;
exports.PDFExportService = PDFExportService;
exports.ExcelExportService = ExcelExportService;
exports.NumberFormattingService = NumberFormattingService;
exports.GroupingService = GroupingService;
exports.PivotFieldListModule = PivotFieldListModule;
exports.PivotFieldListAllModule = PivotFieldListAllModule;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.GroupingBarSettings = ej2Pivotview.GroupingBarSettings;
exports.CellEditSettings = ej2Pivotview.CellEditSettings;
exports.ConditionalSettings = ej2Pivotview.ConditionalSettings;
exports.HyperlinkSettings = ej2Pivotview.HyperlinkSettings;
exports.DisplayOption = ej2Pivotview.DisplayOption;
exports.PivotView = ej2Pivotview.PivotView;
exports.Render = ej2Pivotview.Render;
exports.ExcelExport = ej2Pivotview.ExcelExport;
exports.PDFExport = ej2Pivotview.PDFExport;
exports.KeyboardInteraction = ej2Pivotview.KeyboardInteraction;
exports.VirtualScroll = ej2Pivotview.VirtualScroll;
exports.DrillThrough = ej2Pivotview.DrillThrough;
exports.PivotChart = ej2Pivotview.PivotChart;
exports.PivotFieldList = ej2Pivotview.PivotFieldList;
exports.TreeViewRenderer = ej2Pivotview.TreeViewRenderer;
exports.AxisFieldRenderer = ej2Pivotview.AxisFieldRenderer;
exports.AxisTableRenderer = ej2Pivotview.AxisTableRenderer;
exports.DialogRenderer = ej2Pivotview.DialogRenderer;
exports.EventBase = ej2Pivotview.EventBase;
exports.NodeStateModified = ej2Pivotview.NodeStateModified;
exports.DataSourceUpdate = ej2Pivotview.DataSourceUpdate;
exports.FieldList = ej2Pivotview.FieldList;
exports.CommonKeyboardInteraction = ej2Pivotview.CommonKeyboardInteraction;
exports.Common = ej2Pivotview.Common;
exports.GroupingBar = ej2Pivotview.GroupingBar;
exports.CalculatedField = ej2Pivotview.CalculatedField;
exports.ConditionalFormatting = ej2Pivotview.ConditionalFormatting;
exports.PivotCommon = ej2Pivotview.PivotCommon;
exports.load = ej2Pivotview.load;
exports.enginePopulating = ej2Pivotview.enginePopulating;
exports.enginePopulated = ej2Pivotview.enginePopulated;
exports.onFieldDropped = ej2Pivotview.onFieldDropped;
exports.fieldDrop = ej2Pivotview.fieldDrop;
exports.beforePivotTableRender = ej2Pivotview.beforePivotTableRender;
exports.afterPivotTableRender = ej2Pivotview.afterPivotTableRender;
exports.beforeExport = ej2Pivotview.beforeExport;
exports.exportComplete = ej2Pivotview.exportComplete;
exports.excelHeaderQueryCellInfo = ej2Pivotview.excelHeaderQueryCellInfo;
exports.pdfHeaderQueryCellInfo = ej2Pivotview.pdfHeaderQueryCellInfo;
exports.excelQueryCellInfo = ej2Pivotview.excelQueryCellInfo;
exports.pdfQueryCellInfo = ej2Pivotview.pdfQueryCellInfo;
exports.onPdfCellRender = ej2Pivotview.onPdfCellRender;
exports.dataBound = ej2Pivotview.dataBound;
exports.queryCellInfo = ej2Pivotview.queryCellInfo;
exports.headerCellInfo = ej2Pivotview.headerCellInfo;
exports.hyperlinkCellClick = ej2Pivotview.hyperlinkCellClick;
exports.resizing = ej2Pivotview.resizing;
exports.resizeStop = ej2Pivotview.resizeStop;
exports.cellClick = ej2Pivotview.cellClick;
exports.drillThrough = ej2Pivotview.drillThrough;
exports.beforeColumnsRender = ej2Pivotview.beforeColumnsRender;
exports.selected = ej2Pivotview.selected;
exports.cellSelecting = ej2Pivotview.cellSelecting;
exports.drill = ej2Pivotview.drill;
exports.cellSelected = ej2Pivotview.cellSelected;
exports.cellDeselected = ej2Pivotview.cellDeselected;
exports.rowSelected = ej2Pivotview.rowSelected;
exports.rowDeselected = ej2Pivotview.rowDeselected;
exports.beginDrillThrough = ej2Pivotview.beginDrillThrough;
exports.editCompleted = ej2Pivotview.editCompleted;
exports.multiLevelLabelClick = ej2Pivotview.multiLevelLabelClick;
exports.saveReport = ej2Pivotview.saveReport;
exports.fetchReport = ej2Pivotview.fetchReport;
exports.loadReport = ej2Pivotview.loadReport;
exports.renameReport = ej2Pivotview.renameReport;
exports.removeReport = ej2Pivotview.removeReport;
exports.newReport = ej2Pivotview.newReport;
exports.toolbarRender = ej2Pivotview.toolbarRender;
exports.toolbarClick = ej2Pivotview.toolbarClick;
exports.chartTooltipRender = ej2Pivotview.chartTooltipRender;
exports.chartLoaded = ej2Pivotview.chartLoaded;
exports.chartLoad = ej2Pivotview.chartLoad;
exports.chartResized = ej2Pivotview.chartResized;
exports.chartAxisLabelRender = ej2Pivotview.chartAxisLabelRender;
exports.chartSeriesCreated = ej2Pivotview.chartSeriesCreated;
exports.aggregateCellInfo = ej2Pivotview.aggregateCellInfo;
exports.onHeadersSort = ej2Pivotview.onHeadersSort;
exports.contextMenuClick = ej2Pivotview.contextMenuClick;
exports.contextMenuOpen = ej2Pivotview.contextMenuOpen;
exports.fieldListRefreshed = ej2Pivotview.fieldListRefreshed;
exports.conditionalFormatting = ej2Pivotview.conditionalFormatting;
exports.beforePdfExport = ej2Pivotview.beforePdfExport;
exports.beforeExcelExport = ej2Pivotview.beforeExcelExport;
exports.memberFiltering = ej2Pivotview.memberFiltering;
exports.calculatedFieldCreate = ej2Pivotview.calculatedFieldCreate;
exports.memberEditorOpen = ej2Pivotview.memberEditorOpen;
exports.fieldRemove = ej2Pivotview.fieldRemove;
exports.numberFormatting = ej2Pivotview.numberFormatting;
exports.aggregateMenuOpen = ej2Pivotview.aggregateMenuOpen;
exports.fieldDragStart = ej2Pivotview.fieldDragStart;
exports.chartPointClick = ej2Pivotview.chartPointClick;
exports.beforeServiceInvoke = ej2Pivotview.beforeServiceInvoke;
exports.actionBegin = ej2Pivotview.actionBegin;
exports.actionComplete = ej2Pivotview.actionComplete;
exports.actionFailure = ej2Pivotview.actionFailure;
exports.initialLoad = ej2Pivotview.initialLoad;
exports.uiUpdate = ej2Pivotview.uiUpdate;
exports.scroll = ej2Pivotview.scroll;
exports.verticalScroll = ej2Pivotview.verticalScroll;
exports.horizontalScroll = ej2Pivotview.horizontalScroll;
exports.contentReady = ej2Pivotview.contentReady;
exports.dataReady = ej2Pivotview.dataReady;
exports.initSubComponent = ej2Pivotview.initSubComponent;
exports.treeViewUpdate = ej2Pivotview.treeViewUpdate;
exports.pivotButtonUpdate = ej2Pivotview.pivotButtonUpdate;
exports.initCalculatedField = ej2Pivotview.initCalculatedField;
exports.click = ej2Pivotview.click;
exports.initToolbar = ej2Pivotview.initToolbar;
exports.initFormatting = ej2Pivotview.initFormatting;
exports.initGrouping = ej2Pivotview.initGrouping;
exports.sortValue = ej2Pivotview.sortValue;
exports.drillUp = ej2Pivotview.drillUp;
exports.drillDown = ej2Pivotview.drillDown;
exports.addNewReport = ej2Pivotview.addNewReport;
exports.saveCurrentReport = ej2Pivotview.saveCurrentReport;
exports.saveAsCurrentReport = ej2Pivotview.saveAsCurrentReport;
exports.renameCurrentReport = ej2Pivotview.renameCurrentReport;
exports.removeCurrentReport = ej2Pivotview.removeCurrentReport;
exports.loadReports = ej2Pivotview.loadReports;
exports.openConditionalFormatting = ej2Pivotview.openConditionalFormatting;
exports.openNumberFormatting = ej2Pivotview.openNumberFormatting;
exports.MdxQuery = ej2Pivotview.MdxQuery;
exports.showFieldList = ej2Pivotview.showFieldList;
exports.tableView = ej2Pivotview.tableView;
exports.chartView = ej2Pivotview.chartView;
exports.multipleAxis = ej2Pivotview.multipleAxis;
exports.showLegend = ej2Pivotview.showLegend;
exports.pdfExport = ej2Pivotview.pdfExport;
exports.pngExport = ej2Pivotview.pngExport;
exports.excelExport = ej2Pivotview.excelExport;
exports.csvExport = ej2Pivotview.csvExport;
exports.jpegExport = ej2Pivotview.jpegExport;
exports.svgExport = ej2Pivotview.svgExport;
exports.hideSubTotals = ej2Pivotview.hideSubTotals;
exports.subTotalsRow = ej2Pivotview.subTotalsRow;
exports.subTotalsColumn = ej2Pivotview.subTotalsColumn;
exports.showSubTotals = ej2Pivotview.showSubTotals;
exports.hideGrandTotals = ej2Pivotview.hideGrandTotals;
exports.grandTotalsRow = ej2Pivotview.grandTotalsRow;
exports.grandTotalsColumn = ej2Pivotview.grandTotalsColumn;
exports.showGrandTotals = ej2Pivotview.showGrandTotals;
exports.numberFormattingMenu = ej2Pivotview.numberFormattingMenu;
exports.conditionalFormattingMenu = ej2Pivotview.conditionalFormattingMenu;
exports.reportChange = ej2Pivotview.reportChange;
exports.sortFieldTree = ej2Pivotview.sortFieldTree;
exports.editCalculatedField = ej2Pivotview.editCalculatedField;
exports.sortField = ej2Pivotview.sortField;
exports.filterField = ej2Pivotview.filterField;
exports.removeField = ej2Pivotview.removeField;
exports.openCalculatedField = ej2Pivotview.openCalculatedField;
exports.editRecord = ej2Pivotview.editRecord;
exports.saveEditedRecords = ej2Pivotview.saveEditedRecords;
exports.addNewRecord = ej2Pivotview.addNewRecord;
exports.removeRecord = ej2Pivotview.removeRecord;
exports.aggregateField = ej2Pivotview.aggregateField;
exports.contextMenuCalculatedField = ej2Pivotview.contextMenuCalculatedField;
exports.windowResize = ej2Pivotview.windowResize;
exports.calculatedFieldApplied = ej2Pivotview.calculatedFieldApplied;
exports.editedRecordsSaved = ej2Pivotview.editedRecordsSaved;
exports.newRecordAdded = ej2Pivotview.newRecordAdded;
exports.recordRemoved = ej2Pivotview.recordRemoved;
exports.closeFieldlist = ej2Pivotview.closeFieldlist;
exports.fieldTreeSorted = ej2Pivotview.fieldTreeSorted;
exports.reportSaved = ej2Pivotview.reportSaved;
exports.newReportAdded = ej2Pivotview.newReportAdded;
exports.reportReSaved = ej2Pivotview.reportReSaved;
exports.reportRenamed = ej2Pivotview.reportRenamed;
exports.reportRemoved = ej2Pivotview.reportRemoved;
exports.excelExported = ej2Pivotview.excelExported;
exports.csvExported = ej2Pivotview.csvExported;
exports.pdfExported = ej2Pivotview.pdfExported;
exports.pngExported = ej2Pivotview.pngExported;
exports.jpegExported = ej2Pivotview.jpegExported;
exports.svgExported = ej2Pivotview.svgExported;
exports.conditionallyFormatted = ej2Pivotview.conditionallyFormatted;
exports.numberFormatted = ej2Pivotview.numberFormatted;
exports.tableViewed = ej2Pivotview.tableViewed;
exports.chartViewed = ej2Pivotview.chartViewed;
exports.subTotalsHidden = ej2Pivotview.subTotalsHidden;
exports.subTotalsRowShown = ej2Pivotview.subTotalsRowShown;
exports.subTotalsColumnShown = ej2Pivotview.subTotalsColumnShown;
exports.subTotalsShown = ej2Pivotview.subTotalsShown;
exports.grandTotalsHidden = ej2Pivotview.grandTotalsHidden;
exports.grandTotalsRowShown = ej2Pivotview.grandTotalsRowShown;
exports.grandTotalsColumnShown = ej2Pivotview.grandTotalsColumnShown;
exports.grandTotalsShown = ej2Pivotview.grandTotalsShown;
exports.valueSorted = ej2Pivotview.valueSorted;
exports.calculatedFieldEdited = ej2Pivotview.calculatedFieldEdited;
exports.fieldSorted = ej2Pivotview.fieldSorted;
exports.fieldFiltered = ej2Pivotview.fieldFiltered;
exports.fieldRemoved = ej2Pivotview.fieldRemoved;
exports.fieldAggregated = ej2Pivotview.fieldAggregated;
exports.recordEdited = ej2Pivotview.recordEdited;
exports.reportChanged = ej2Pivotview.reportChanged;
exports.windowResized = ej2Pivotview.windowResized;
exports.recordUpdated = ej2Pivotview.recordUpdated;
exports.drillThroughClosed = ej2Pivotview.drillThroughClosed;
exports.verticalScrolled = ej2Pivotview.verticalScrolled;
exports.horizontalScrolled = ej2Pivotview.horizontalScrolled;
exports.Theme = ej2Pivotview.Theme;
exports.ErrorDialog = ej2Pivotview.ErrorDialog;
exports.FilterDialog = ej2Pivotview.FilterDialog;
exports.PivotContextMenu = ej2Pivotview.PivotContextMenu;
exports.AggregateMenu = ej2Pivotview.AggregateMenu;
exports.Toolbar = ej2Pivotview.Toolbar;
exports.NumberFormatting = ej2Pivotview.NumberFormatting;
exports.Grouping = ej2Pivotview.Grouping;
exports.PivotEngine = ej2Pivotview.PivotEngine;
exports.PivotUtil = ej2Pivotview.PivotUtil;
exports.OlapEngine = ej2Pivotview.OlapEngine;
exports.MDXQuery = ej2Pivotview.MDXQuery;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-pivotview.umd.js.map
