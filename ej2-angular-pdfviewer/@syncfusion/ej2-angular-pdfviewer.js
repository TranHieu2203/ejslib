/*!
*  filename: ej2-angular-pdfviewer.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Annotation, BookmarkView, FormDesigner, FormFields, LinkAnnotation, Magnification, Navigation, PdfViewer, Print, TextSearch, TextSelection, ThumbnailView, Toolbar } from '@syncfusion/ej2-pdfviewer';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['DropdownFieldSettings', 'ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'checkBoxFieldSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'designerMode', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormDesigner', 'enableFormDesignerToolbar', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enablePrintRotation', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'exportAnnotationFileName', 'formFieldCollections', 'formFields', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'initialDialogSettings', 'initialFieldSettings', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isAnnotationToolbarVisible', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormDesignerToolbarVisible', 'isFormFieldDocument', 'isInitialFieldToolbarSelection', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'listBoxFieldSettings', 'locale', 'measurementSettings', 'pageCount', 'passwordFieldSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'radioButtonFieldSettings', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureDialogSettings', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textFieldSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue'];
const outputs = ['addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'ajaxRequestSuccess', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationMoving', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldAdd', 'formFieldClick', 'formFieldDoubleClick', 'formFieldFocusOut', 'formFieldMouseLeave', 'formFieldMouseover', 'formFieldMove', 'formFieldPropertiesChange', 'formFieldRemove', 'formFieldResize', 'formFieldSelect', 'formFieldUnselect', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
const twoWays = [];
/**
 * `ejs-pdfviewer` represents the Angular PdfViewer Component.
 * ```html
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
let PdfViewerComponent = class PdfViewerComponent extends PdfViewer {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PdfViewerLinkAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('PdfViewerBookmarkView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('PdfViewerMagnification');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('PdfViewerThumbnailView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('PdfViewerToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('PdfViewerNavigation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('PdfViewerPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('PdfViewerTextSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('PdfViewerTextSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('PdfViewerAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('PdfViewerFormDesigner');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('PdfViewerFormFields');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
PdfViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pdfviewer',
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
PdfViewerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
PdfViewerComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PdfViewerComponent);

/**
 * NgModule definition for the PdfViewer component.
 */
class PdfViewerModule {
}
PdfViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PdfViewerComponent
                ],
                exports: [
                    PdfViewerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PdfViewerModule.ctorParameters = () => [];

const LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: LinkAnnotation };
const BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: BookmarkView };
const MagnificationService = { provide: 'PdfViewerMagnification', useValue: Magnification };
const ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ThumbnailView };
const ToolbarService = { provide: 'PdfViewerToolbar', useValue: Toolbar };
const NavigationService = { provide: 'PdfViewerNavigation', useValue: Navigation };
const PrintService = { provide: 'PdfViewerPrint', useValue: Print };
const TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: TextSelection };
const TextSearchService = { provide: 'PdfViewerTextSearch', useValue: TextSearch };
const AnnotationService = { provide: 'PdfViewerAnnotation', useValue: Annotation };
const FormDesignerService = { provide: 'PdfViewerFormDesigner', useValue: FormDesigner };
const FormFieldsService = { provide: 'PdfViewerFormFields', useValue: FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
class PdfViewerAllModule {
}
PdfViewerAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PdfViewerModule],
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
PdfViewerAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { PdfViewerComponent, PdfViewerModule, PdfViewerAllModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, PrintService, TextSelectionService, TextSearchService, AnnotationService, FormDesignerService, FormFieldsService, inputs as ɵa, outputs as ɵb };
export { Drawing, findActiveElement, findObjectsUnderMouse, findObjectUnderMouse, CalculateLeaderPoints, findElementUnderMouse, insertObject, findTargetShapeElement, findObjects, findActivePage, ActiveElements, getConnectorPoints, getSegmentPath, updateSegmentElement, getSegmentElement, updateDecoratorElement, getDecoratorElement, clipDecorators, clipDecorator, initDistanceLabel, updateDistanceLabel, updateRadiusLabel, initPerimeterLabel, updatePerimeterLabel, removePerimeterLabel, updateCalibrateLabel, getPolygonPath, textElement, initLeaders, initLeader, isPointOverConnector, findNearestPoint, getDecoratorShape, renderAdornerLayer, createSvg, isLineShapes, setElementStype, findPointsLength, findPerimeterLength, getBaseShapeAttributes, getFunction, cloneObject, cloneArray, getInternalProperties, isLeader, PdfBounds, PdfFont, PdfAnnotationBase, PdfFormFieldBase, ZOrderPageTable, Selector, ToolBase, SelectTool, MoveTool, StampTool, InkDrawingTool, ConnectTool, ResizeTool, NodeDrawingTool, PolygonDrawingTool, LineTool, RotateTool, Annotation, LinkAnnotation, TextMarkupAnnotation, MeasureAnnotation, ShapeAnnotation, StampAnnotation, StickyNotesAnnotation, FreeTextAnnotation, InputElement, InkAnnotation, NavigationPane, PdfViewerBase, TextLayer, ContextMenu, CommentStatus, FontStyle, ContextMenuItem, SignatureType, AnnotationResizerLocation, DisplayMode, CursorType, DynamicStampItem, SignStampItem, StandardBusinessStampItem, AllowedInteraction, AnnotationDataFormat, AjaxHandler, Signature, Spinner, createSpinner, showSpinner, hideSpinner, setSpinner, BlazorUiAdaptor, Magnification, Navigation, ThumbnailView, Toolbar, AnnotationToolbar, FormDesignerToolbar, ToolbarSettings, AjaxRequestSettings, CustomStamp, AnnotationToolbarSettings, FormDesignerToolbarSettings, SignatureFieldSettings, InitialFieldSettings, SignatureIndicatorSettings, SignatureDialogSettings, ServerActionSettings, StrikethroughSettings, UnderlineSettings, HighlightSettings, LineSettings, ArrowSettings, RectangleSettings, CircleSettings, ShapeLabelSettings, PolygonSettings, StampSettings, CustomStampSettings, DistanceSettings, PerimeterSettings, AreaSettings, RadiusSettings, VolumeSettings, InkAnnotationSettings, StickyNotesSettings, MeasurementSettings, FreeTextSettings, AnnotationSelectorSettings, TextSearchColorSettings, HandWrittenSignatureSettings, AnnotationSettings, DocumentTextCollectionSettings, TextDataSettings, RectangleBounds, TileRenderingSettings, ScrollSettings, FormField, ContextMenuSettings, TextFieldSettings, PasswordFieldSettings, CheckBoxFieldSettings, RadioButtonFieldSettings, DropdownFieldSettings, ListBoxFieldSettings, Item, PdfViewer, BookmarkView, TextSelection, TextSearch, Print, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
//# sourceMappingURL=ej2-angular-pdfviewer.js.map
