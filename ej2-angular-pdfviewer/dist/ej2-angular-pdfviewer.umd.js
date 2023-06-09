/*!
*  filename: ej2-angular-pdfviewer.umd.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-pdfviewer'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-pdfviewer', '@angular/common'], factory) :
	(factory((global['ej2-angular-pdfviewer'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.pdfviewer,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Pdfviewer,common) { 'use strict';

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
var inputs = ['DropdownFieldSettings', 'ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'checkBoxFieldSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'designerMode', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormDesigner', 'enableFormDesignerToolbar', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enablePrintRotation', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'exportAnnotationFileName', 'formFieldCollections', 'formFields', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'initialDialogSettings', 'initialFieldSettings', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isAnnotationToolbarVisible', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormDesignerToolbarVisible', 'isFormFieldDocument', 'isInitialFieldToolbarSelection', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'listBoxFieldSettings', 'locale', 'measurementSettings', 'pageCount', 'passwordFieldSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'radioButtonFieldSettings', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureDialogSettings', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textFieldSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue'];
var outputs = ['addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'ajaxRequestSuccess', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationMoving', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldAdd', 'formFieldClick', 'formFieldDoubleClick', 'formFieldFocusOut', 'formFieldMouseLeave', 'formFieldMouseover', 'formFieldMove', 'formFieldPropertiesChange', 'formFieldRemove', 'formFieldResize', 'formFieldSelect', 'formFieldUnselect', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
var twoWays = [];
/**
 * `ejs-pdfviewer` represents the Angular PdfViewer Component.
 * ```html
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
exports.PdfViewerComponent = /** @class */ (function (_super) {
    __extends(PdfViewerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PdfViewerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('PdfViewerLinkAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('PdfViewerBookmarkView');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('PdfViewerMagnification');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('PdfViewerThumbnailView');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('PdfViewerToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('PdfViewerNavigation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('PdfViewerPrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('PdfViewerTextSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('PdfViewerTextSearch');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('PdfViewerAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('PdfViewerFormDesigner');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('PdfViewerFormFields');
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
    PdfViewerComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return PdfViewerComponent;
}(ej2Pdfviewer.PdfViewer));
exports.PdfViewerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-pdfviewer',
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
exports.PdfViewerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.PdfViewerComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.PdfViewerComponent);
/**
 * NgModule definition for the PdfViewer component.
 */
var PdfViewerModule = /** @class */ (function () {
    function PdfViewerModule() {
    }
    return PdfViewerModule;
}());
PdfViewerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.PdfViewerComponent
                ],
                exports: [
                    exports.PdfViewerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PdfViewerModule.ctorParameters = function () { return []; };
var LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: ej2Pdfviewer.LinkAnnotation };
var BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: ej2Pdfviewer.BookmarkView };
var MagnificationService = { provide: 'PdfViewerMagnification', useValue: ej2Pdfviewer.Magnification };
var ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ej2Pdfviewer.ThumbnailView };
var ToolbarService = { provide: 'PdfViewerToolbar', useValue: ej2Pdfviewer.Toolbar };
var NavigationService = { provide: 'PdfViewerNavigation', useValue: ej2Pdfviewer.Navigation };
var PrintService = { provide: 'PdfViewerPrint', useValue: ej2Pdfviewer.Print };
var TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: ej2Pdfviewer.TextSelection };
var TextSearchService = { provide: 'PdfViewerTextSearch', useValue: ej2Pdfviewer.TextSearch };
var AnnotationService = { provide: 'PdfViewerAnnotation', useValue: ej2Pdfviewer.Annotation };
var FormDesignerService = { provide: 'PdfViewerFormDesigner', useValue: ej2Pdfviewer.FormDesigner };
var FormFieldsService = { provide: 'PdfViewerFormFields', useValue: ej2Pdfviewer.FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
var PdfViewerAllModule = /** @class */ (function () {
    function PdfViewerAllModule() {
    }
    return PdfViewerAllModule;
}());
PdfViewerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PdfViewerModule],
                exports: [
                    PdfViewerModule
                ],
                providers: [
                    LinkAnnotationService,
                    BookmarkViewService,
                    MagnificationService,
                    ThumbnailViewService,
                    ToolbarService,
                    NavigationService,
                    PrintService,
                    TextSelectionService,
                    TextSearchService,
                    AnnotationService,
                    FormDesignerService,
                    FormFieldsService
                ]
            },] },
];
/**
 * @nocollapse
 */
PdfViewerAllModule.ctorParameters = function () { return []; };

exports.PdfViewerModule = PdfViewerModule;
exports.PdfViewerAllModule = PdfViewerAllModule;
exports.LinkAnnotationService = LinkAnnotationService;
exports.BookmarkViewService = BookmarkViewService;
exports.MagnificationService = MagnificationService;
exports.ThumbnailViewService = ThumbnailViewService;
exports.ToolbarService = ToolbarService;
exports.NavigationService = NavigationService;
exports.PrintService = PrintService;
exports.TextSelectionService = TextSelectionService;
exports.TextSearchService = TextSearchService;
exports.AnnotationService = AnnotationService;
exports.FormDesignerService = FormDesignerService;
exports.FormFieldsService = FormFieldsService;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.Drawing = ej2Pdfviewer.Drawing;
exports.findActiveElement = ej2Pdfviewer.findActiveElement;
exports.findObjectsUnderMouse = ej2Pdfviewer.findObjectsUnderMouse;
exports.findObjectUnderMouse = ej2Pdfviewer.findObjectUnderMouse;
exports.CalculateLeaderPoints = ej2Pdfviewer.CalculateLeaderPoints;
exports.findElementUnderMouse = ej2Pdfviewer.findElementUnderMouse;
exports.insertObject = ej2Pdfviewer.insertObject;
exports.findTargetShapeElement = ej2Pdfviewer.findTargetShapeElement;
exports.findObjects = ej2Pdfviewer.findObjects;
exports.findActivePage = ej2Pdfviewer.findActivePage;
exports.ActiveElements = ej2Pdfviewer.ActiveElements;
exports.getConnectorPoints = ej2Pdfviewer.getConnectorPoints;
exports.getSegmentPath = ej2Pdfviewer.getSegmentPath;
exports.updateSegmentElement = ej2Pdfviewer.updateSegmentElement;
exports.getSegmentElement = ej2Pdfviewer.getSegmentElement;
exports.updateDecoratorElement = ej2Pdfviewer.updateDecoratorElement;
exports.getDecoratorElement = ej2Pdfviewer.getDecoratorElement;
exports.clipDecorators = ej2Pdfviewer.clipDecorators;
exports.clipDecorator = ej2Pdfviewer.clipDecorator;
exports.initDistanceLabel = ej2Pdfviewer.initDistanceLabel;
exports.updateDistanceLabel = ej2Pdfviewer.updateDistanceLabel;
exports.updateRadiusLabel = ej2Pdfviewer.updateRadiusLabel;
exports.initPerimeterLabel = ej2Pdfviewer.initPerimeterLabel;
exports.updatePerimeterLabel = ej2Pdfviewer.updatePerimeterLabel;
exports.removePerimeterLabel = ej2Pdfviewer.removePerimeterLabel;
exports.updateCalibrateLabel = ej2Pdfviewer.updateCalibrateLabel;
exports.getPolygonPath = ej2Pdfviewer.getPolygonPath;
exports.textElement = ej2Pdfviewer.textElement;
exports.initLeaders = ej2Pdfviewer.initLeaders;
exports.initLeader = ej2Pdfviewer.initLeader;
exports.isPointOverConnector = ej2Pdfviewer.isPointOverConnector;
exports.findNearestPoint = ej2Pdfviewer.findNearestPoint;
exports.getDecoratorShape = ej2Pdfviewer.getDecoratorShape;
exports.renderAdornerLayer = ej2Pdfviewer.renderAdornerLayer;
exports.createSvg = ej2Pdfviewer.createSvg;
exports.isLineShapes = ej2Pdfviewer.isLineShapes;
exports.setElementStype = ej2Pdfviewer.setElementStype;
exports.findPointsLength = ej2Pdfviewer.findPointsLength;
exports.findPerimeterLength = ej2Pdfviewer.findPerimeterLength;
exports.getBaseShapeAttributes = ej2Pdfviewer.getBaseShapeAttributes;
exports.getFunction = ej2Pdfviewer.getFunction;
exports.cloneObject = ej2Pdfviewer.cloneObject;
exports.cloneArray = ej2Pdfviewer.cloneArray;
exports.getInternalProperties = ej2Pdfviewer.getInternalProperties;
exports.isLeader = ej2Pdfviewer.isLeader;
exports.PdfBounds = ej2Pdfviewer.PdfBounds;
exports.PdfFont = ej2Pdfviewer.PdfFont;
exports.PdfAnnotationBase = ej2Pdfviewer.PdfAnnotationBase;
exports.PdfFormFieldBase = ej2Pdfviewer.PdfFormFieldBase;
exports.ZOrderPageTable = ej2Pdfviewer.ZOrderPageTable;
exports.Selector = ej2Pdfviewer.Selector;
exports.ToolBase = ej2Pdfviewer.ToolBase;
exports.SelectTool = ej2Pdfviewer.SelectTool;
exports.MoveTool = ej2Pdfviewer.MoveTool;
exports.StampTool = ej2Pdfviewer.StampTool;
exports.InkDrawingTool = ej2Pdfviewer.InkDrawingTool;
exports.ConnectTool = ej2Pdfviewer.ConnectTool;
exports.ResizeTool = ej2Pdfviewer.ResizeTool;
exports.NodeDrawingTool = ej2Pdfviewer.NodeDrawingTool;
exports.PolygonDrawingTool = ej2Pdfviewer.PolygonDrawingTool;
exports.LineTool = ej2Pdfviewer.LineTool;
exports.RotateTool = ej2Pdfviewer.RotateTool;
exports.Annotation = ej2Pdfviewer.Annotation;
exports.LinkAnnotation = ej2Pdfviewer.LinkAnnotation;
exports.TextMarkupAnnotation = ej2Pdfviewer.TextMarkupAnnotation;
exports.MeasureAnnotation = ej2Pdfviewer.MeasureAnnotation;
exports.ShapeAnnotation = ej2Pdfviewer.ShapeAnnotation;
exports.StampAnnotation = ej2Pdfviewer.StampAnnotation;
exports.StickyNotesAnnotation = ej2Pdfviewer.StickyNotesAnnotation;
exports.FreeTextAnnotation = ej2Pdfviewer.FreeTextAnnotation;
exports.InputElement = ej2Pdfviewer.InputElement;
exports.InkAnnotation = ej2Pdfviewer.InkAnnotation;
exports.NavigationPane = ej2Pdfviewer.NavigationPane;
exports.PdfViewerBase = ej2Pdfviewer.PdfViewerBase;
exports.TextLayer = ej2Pdfviewer.TextLayer;
exports.ContextMenu = ej2Pdfviewer.ContextMenu;
exports.CommentStatus = ej2Pdfviewer.CommentStatus;
exports.FontStyle = ej2Pdfviewer.FontStyle;
exports.ContextMenuItem = ej2Pdfviewer.ContextMenuItem;
exports.SignatureType = ej2Pdfviewer.SignatureType;
exports.AnnotationResizerLocation = ej2Pdfviewer.AnnotationResizerLocation;
exports.DisplayMode = ej2Pdfviewer.DisplayMode;
exports.CursorType = ej2Pdfviewer.CursorType;
exports.DynamicStampItem = ej2Pdfviewer.DynamicStampItem;
exports.SignStampItem = ej2Pdfviewer.SignStampItem;
exports.StandardBusinessStampItem = ej2Pdfviewer.StandardBusinessStampItem;
exports.AllowedInteraction = ej2Pdfviewer.AllowedInteraction;
exports.AnnotationDataFormat = ej2Pdfviewer.AnnotationDataFormat;
exports.AjaxHandler = ej2Pdfviewer.AjaxHandler;
exports.Signature = ej2Pdfviewer.Signature;
exports.Spinner = ej2Pdfviewer.Spinner;
exports.createSpinner = ej2Pdfviewer.createSpinner;
exports.showSpinner = ej2Pdfviewer.showSpinner;
exports.hideSpinner = ej2Pdfviewer.hideSpinner;
exports.setSpinner = ej2Pdfviewer.setSpinner;
exports.BlazorUiAdaptor = ej2Pdfviewer.BlazorUiAdaptor;
exports.Magnification = ej2Pdfviewer.Magnification;
exports.Navigation = ej2Pdfviewer.Navigation;
exports.ThumbnailView = ej2Pdfviewer.ThumbnailView;
exports.Toolbar = ej2Pdfviewer.Toolbar;
exports.AnnotationToolbar = ej2Pdfviewer.AnnotationToolbar;
exports.FormDesignerToolbar = ej2Pdfviewer.FormDesignerToolbar;
exports.ToolbarSettings = ej2Pdfviewer.ToolbarSettings;
exports.AjaxRequestSettings = ej2Pdfviewer.AjaxRequestSettings;
exports.CustomStamp = ej2Pdfviewer.CustomStamp;
exports.AnnotationToolbarSettings = ej2Pdfviewer.AnnotationToolbarSettings;
exports.FormDesignerToolbarSettings = ej2Pdfviewer.FormDesignerToolbarSettings;
exports.SignatureFieldSettings = ej2Pdfviewer.SignatureFieldSettings;
exports.InitialFieldSettings = ej2Pdfviewer.InitialFieldSettings;
exports.SignatureIndicatorSettings = ej2Pdfviewer.SignatureIndicatorSettings;
exports.SignatureDialogSettings = ej2Pdfviewer.SignatureDialogSettings;
exports.ServerActionSettings = ej2Pdfviewer.ServerActionSettings;
exports.StrikethroughSettings = ej2Pdfviewer.StrikethroughSettings;
exports.UnderlineSettings = ej2Pdfviewer.UnderlineSettings;
exports.HighlightSettings = ej2Pdfviewer.HighlightSettings;
exports.LineSettings = ej2Pdfviewer.LineSettings;
exports.ArrowSettings = ej2Pdfviewer.ArrowSettings;
exports.RectangleSettings = ej2Pdfviewer.RectangleSettings;
exports.CircleSettings = ej2Pdfviewer.CircleSettings;
exports.ShapeLabelSettings = ej2Pdfviewer.ShapeLabelSettings;
exports.PolygonSettings = ej2Pdfviewer.PolygonSettings;
exports.StampSettings = ej2Pdfviewer.StampSettings;
exports.CustomStampSettings = ej2Pdfviewer.CustomStampSettings;
exports.DistanceSettings = ej2Pdfviewer.DistanceSettings;
exports.PerimeterSettings = ej2Pdfviewer.PerimeterSettings;
exports.AreaSettings = ej2Pdfviewer.AreaSettings;
exports.RadiusSettings = ej2Pdfviewer.RadiusSettings;
exports.VolumeSettings = ej2Pdfviewer.VolumeSettings;
exports.InkAnnotationSettings = ej2Pdfviewer.InkAnnotationSettings;
exports.StickyNotesSettings = ej2Pdfviewer.StickyNotesSettings;
exports.MeasurementSettings = ej2Pdfviewer.MeasurementSettings;
exports.FreeTextSettings = ej2Pdfviewer.FreeTextSettings;
exports.AnnotationSelectorSettings = ej2Pdfviewer.AnnotationSelectorSettings;
exports.TextSearchColorSettings = ej2Pdfviewer.TextSearchColorSettings;
exports.HandWrittenSignatureSettings = ej2Pdfviewer.HandWrittenSignatureSettings;
exports.AnnotationSettings = ej2Pdfviewer.AnnotationSettings;
exports.DocumentTextCollectionSettings = ej2Pdfviewer.DocumentTextCollectionSettings;
exports.TextDataSettings = ej2Pdfviewer.TextDataSettings;
exports.RectangleBounds = ej2Pdfviewer.RectangleBounds;
exports.TileRenderingSettings = ej2Pdfviewer.TileRenderingSettings;
exports.ScrollSettings = ej2Pdfviewer.ScrollSettings;
exports.FormField = ej2Pdfviewer.FormField;
exports.ContextMenuSettings = ej2Pdfviewer.ContextMenuSettings;
exports.TextFieldSettings = ej2Pdfviewer.TextFieldSettings;
exports.PasswordFieldSettings = ej2Pdfviewer.PasswordFieldSettings;
exports.CheckBoxFieldSettings = ej2Pdfviewer.CheckBoxFieldSettings;
exports.RadioButtonFieldSettings = ej2Pdfviewer.RadioButtonFieldSettings;
exports.DropdownFieldSettings = ej2Pdfviewer.DropdownFieldSettings;
exports.ListBoxFieldSettings = ej2Pdfviewer.ListBoxFieldSettings;
exports.Item = ej2Pdfviewer.Item;
exports.PdfViewer = ej2Pdfviewer.PdfViewer;
exports.BookmarkView = ej2Pdfviewer.BookmarkView;
exports.TextSelection = ej2Pdfviewer.TextSelection;
exports.TextSearch = ej2Pdfviewer.TextSearch;
exports.Print = ej2Pdfviewer.Print;
exports.FormFields = ej2Pdfviewer.FormFields;
exports.FormDesigner = ej2Pdfviewer.FormDesigner;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-pdfviewer.umd.js.map
