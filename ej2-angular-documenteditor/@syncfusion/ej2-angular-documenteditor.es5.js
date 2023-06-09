/*!
*  filename: ej2-angular-documenteditor.es5.js
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
import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BookmarkDialog, BordersAndShadingDialog, BulletsAndNumberingDialog, CellOptionsDialog, CollaborativeEditing, ContextMenu, DocumentEditor, DocumentEditorContainer, Editor, EditorHistory, FontDialog, HyperlinkDialog, ImageResizer, ListDialog, OptionsPane, PageSetupDialog, ParagraphDialog, Print, Search, Selection, SfdtExport, SpellCheckDialog, SpellChecker, StyleDialog, StylesDialog, TableDialog, TableOfContentsDialog, TableOptionsDialog, TablePropertiesDialog, TextExport, Toolbar, WordExport } from '@syncfusion/ej2-documenteditor';
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
var inputs = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentEditorSettings', 'documentName', 'documentSettings', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableComment', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableFootnoteAndEndnoteDialog', 'enableFormField', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableLockAndEdit', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableTrackChanges', 'enableWordExport', 'headers', 'height', 'isReadOnly', 'layoutType', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'showComments', 'showRevisions', 'useCtrlClickToFollowHyperlink', 'userColor', 'width', 'zIndex', 'zoomFactor'];
var outputs = ['actionComplete', 'afterFormFieldFill', 'beforeCommentAction', 'beforeFileOpen', 'beforeFormFieldFill', 'beforePaneSwitch', 'commentBegin', 'commentDelete', 'commentEnd', 'contentChange', 'contentControl', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'serviceFailure', 'trackChange', 'viewChange', 'zoomFactorChange', 'beforeXmlHttpRequestSend'];
var twoWays = [];
/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
var DocumentEditorComponent = /** @class */ (function (_super) {
    __extends(DocumentEditorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DocumentEditorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DocumentEditorPrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('DocumentEditorSfdtExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('DocumentEditorWordExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('DocumentEditorTextExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('DocumentEditorSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('DocumentEditorSearch');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('DocumentEditorEditor');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('DocumentEditorEditorHistory');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('DocumentEditorOptionsPane');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('DocumentEditorContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('DocumentEditorImageResizer');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('DocumentEditorHyperlinkDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('DocumentEditorTableDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('DocumentEditorBookmarkDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('DocumentEditorTableOfContentsDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('DocumentEditorPageSetupDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('DocumentEditorParagraphDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('DocumentEditorListDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            var mod = _this.injector.get('DocumentEditorStyleDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            var mod = _this.injector.get('DocumentEditorStylesDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            var mod = _this.injector.get('DocumentEditorBulletsAndNumberingDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            var mod = _this.injector.get('DocumentEditorFontDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            var mod = _this.injector.get('DocumentEditorTablePropertiesDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            var mod = _this.injector.get('DocumentEditorBordersAndShadingDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            var mod = _this.injector.get('DocumentEditorTableOptionsDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            var mod = _this.injector.get('DocumentEditorCellOptionsDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            var mod = _this.injector.get('DocumentEditorSpellChecker');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            var mod = _this.injector.get('DocumentEditorSpellCheckDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        try {
            var mod = _this.injector.get('DocumentEditorCollaborativeEditing');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_4) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return DocumentEditorComponent;
}(DocumentEditor));
DocumentEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-documenteditor',
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
DocumentEditorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DocumentEditorComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DocumentEditorComponent);
/**
 * NgModule definition for the DocumentEditor component.
 */
var DocumentEditorModule = /** @class */ (function () {
    function DocumentEditorModule() {
    }
    return DocumentEditorModule;
}());
DocumentEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DocumentEditorComponent
                ],
                exports: [
                    DocumentEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorModule.ctorParameters = function () { return []; };
var PrintService = { provide: 'DocumentEditorPrint', useValue: Print };
var SfdtExportService = { provide: 'DocumentEditorSfdtExport', useValue: SfdtExport };
var WordExportService = { provide: 'DocumentEditorWordExport', useValue: WordExport };
var TextExportService = { provide: 'DocumentEditorTextExport', useValue: TextExport };
var SelectionService = { provide: 'DocumentEditorSelection', useValue: Selection };
var SearchService = { provide: 'DocumentEditorSearch', useValue: Search };
var EditorService = { provide: 'DocumentEditorEditor', useValue: Editor };
var EditorHistoryService = { provide: 'DocumentEditorEditorHistory', useValue: EditorHistory };
var OptionsPaneService = { provide: 'DocumentEditorOptionsPane', useValue: OptionsPane };
var ContextMenuService = { provide: 'DocumentEditorContextMenu', useValue: ContextMenu };
var ImageResizerService = { provide: 'DocumentEditorImageResizer', useValue: ImageResizer };
var HyperlinkDialogService = { provide: 'DocumentEditorHyperlinkDialog', useValue: HyperlinkDialog };
var TableDialogService = { provide: 'DocumentEditorTableDialog', useValue: TableDialog };
var BookmarkDialogService = { provide: 'DocumentEditorBookmarkDialog', useValue: BookmarkDialog };
var TableOfContentsDialogService = { provide: 'DocumentEditorTableOfContentsDialog', useValue: TableOfContentsDialog };
var PageSetupDialogService = { provide: 'DocumentEditorPageSetupDialog', useValue: PageSetupDialog };
var ParagraphDialogService = { provide: 'DocumentEditorParagraphDialog', useValue: ParagraphDialog };
var ListDialogService = { provide: 'DocumentEditorListDialog', useValue: ListDialog };
var StyleDialogService = { provide: 'DocumentEditorStyleDialog', useValue: StyleDialog };
var StylesDialogService = { provide: 'DocumentEditorStylesDialog', useValue: StylesDialog };
var BulletsAndNumberingDialogService = { provide: 'DocumentEditorBulletsAndNumberingDialog', useValue: BulletsAndNumberingDialog };
var FontDialogService = { provide: 'DocumentEditorFontDialog', useValue: FontDialog };
var TablePropertiesDialogService = { provide: 'DocumentEditorTablePropertiesDialog', useValue: TablePropertiesDialog };
var BordersAndShadingDialogService = { provide: 'DocumentEditorBordersAndShadingDialog', useValue: BordersAndShadingDialog };
var TableOptionsDialogService = { provide: 'DocumentEditorTableOptionsDialog', useValue: TableOptionsDialog };
var CellOptionsDialogService = { provide: 'DocumentEditorCellOptionsDialog', useValue: CellOptionsDialog };
var SpellCheckerService = { provide: 'DocumentEditorSpellChecker', useValue: SpellChecker };
var SpellCheckDialogService = { provide: 'DocumentEditorSpellCheckDialog', useValue: SpellCheckDialog };
var CollaborativeEditingService = { provide: 'DocumentEditorCollaborativeEditing', useValue: CollaborativeEditing };
/**
 * NgModule definition for the DocumentEditor component with providers.
 */
var DocumentEditorAllModule = /** @class */ (function () {
    function DocumentEditorAllModule() {
    }
    return DocumentEditorAllModule;
}());
DocumentEditorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DocumentEditorModule],
                exports: [
                    DocumentEditorModule
                ],
                providers: [
                    PrintService,
                    SfdtExportService,
                    WordExportService,
                    TextExportService,
                    SelectionService,
                    SearchService,
                    EditorService,
                    EditorHistoryService,
                    OptionsPaneService,
                    ContextMenuService,
                    ImageResizerService,
                    HyperlinkDialogService,
                    TableDialogService,
                    BookmarkDialogService,
                    TableOfContentsDialogService,
                    PageSetupDialogService,
                    ParagraphDialogService,
                    ListDialogService,
                    StyleDialogService,
                    StylesDialogService,
                    BulletsAndNumberingDialogService,
                    FontDialogService,
                    TablePropertiesDialogService,
                    BordersAndShadingDialogService,
                    TableOptionsDialogService,
                    CellOptionsDialogService,
                    SpellCheckerService,
                    SpellCheckDialogService,
                    CollaborativeEditingService
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['currentUser', 'documentEditorSettings', 'documentSettings', 'enableComment', 'enableCsp', 'enableLocalPaste', 'enableLockAndEdit', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'enableTrackChanges', 'headers', 'height', 'layoutType', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'toolbarItems', 'userColor', 'width', 'zIndex'];
var outputs$1 = ['beforeCommentAction', 'beforePaneSwitch', 'commentDelete', 'contentChange', 'contentControl', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange', 'serviceFailure', 'toolbarClick', 'trackChange', 'beforeXmlHttpRequestSend'];
var twoWays$1 = [];
/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
var DocumentEditorContainerComponent = /** @class */ (function (_super) {
    __extends(DocumentEditorContainerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DocumentEditorContainerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DocumentEditorToolbar');
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
    DocumentEditorContainerComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return DocumentEditorContainerComponent;
}(DocumentEditorContainer));
DocumentEditorContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-documenteditorcontainer',
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
DocumentEditorContainerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DocumentEditorContainerComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DocumentEditorContainerComponent);
/**
 * NgModule definition for the DocumentEditorContainer component.
 */
var DocumentEditorContainerModule = /** @class */ (function () {
    function DocumentEditorContainerModule() {
    }
    return DocumentEditorContainerModule;
}());
DocumentEditorContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DocumentEditorContainerComponent
                ],
                exports: [
                    DocumentEditorContainerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorContainerModule.ctorParameters = function () { return []; };
var ToolbarService = { provide: 'DocumentEditorToolbar', useValue: Toolbar };
/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
var DocumentEditorContainerAllModule = /** @class */ (function () {
    function DocumentEditorContainerAllModule() {
    }
    return DocumentEditorContainerAllModule;
}());
DocumentEditorContainerAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DocumentEditorContainerModule],
                exports: [
                    DocumentEditorContainerModule
                ],
                providers: [
                    ToolbarService
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorContainerAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { DocumentEditorComponent, DocumentEditorModule, DocumentEditorAllModule, PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService, EditorHistoryService, OptionsPaneService, ContextMenuService, ImageResizerService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, ParagraphDialogService, ListDialogService, StyleDialogService, StylesDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, SpellCheckerService, SpellCheckDialogService, CollaborativeEditingService, DocumentEditorContainerComponent, DocumentEditorContainerModule, DocumentEditorContainerAllModule, ToolbarService, inputs$1 as ɵc, outputs$1 as ɵd, inputs as ɵa, outputs as ɵb };
export { CharacterRangeType, Dictionary, WUniqueFormat, WUniqueFormats, XmlHttpRequestHandler, internalZoomFactorChange, contentChangeEvent, documentChangeEvent, selectionChangeEvent, zoomFactorChangeEvent, beforeFieldFillEvent, afterFieldFillEvent, afterFormFieldFillEvent, beforeFormFieldFillEvent, serviceFailureEvent, viewChangeEvent, customContextMenuSelectEvent, customContextMenuBeforeOpenEvent, contentControlEvent, commentBeginEvent, commentEndEvent, beforeCommentActionEvent, commentDeleteEvent, beforePaneSwitchEvent, requestNavigateEvent, actionCompleteEvent, trackChangeEvent, searchResultsChangeEvent, keyDownEvent, toolbarClickEvent, beforeFileOpenEvent, internalviewChangeEvent, beforeXmlHttpRequestSend, protectionTypeChangeEvent, Print, ContextMenu, CommentReviewPane, CommentPane, CommentView, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, ParagraphDialog, ListDialog, StyleDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog, SpellCheckDialog, CheckBoxFormFieldDialog, TextFormFieldDialog, DropDownFormFieldDialog, FormFieldPopUp, Editor, ImageResizer, ImageResizingPoints, SelectedImageInfo, TableResizer, HelperMethods, Point, Base64, WrapPosition, CollaborativeEditing, EditorHistory, BaseHistoryInfo, HistoryInfo, ModifiedLevel, ModifiedParagraphFormat, RowHistoryFormat, TableHistoryInfo, TableFormatHistoryInfo, RowFormatHistoryInfo, CellFormatHistoryInfo, CellHistoryFormat, WSectionFormat, WStyle, WParagraphStyle, WCharacterStyle, WStyles, WCharacterFormat, WListFormat, WTabStop, WParagraphFormat, WTableFormat, WRowFormat, WCellFormat, WBorder, WBorders, WShading, WList, WAbstractList, WListLevel, WLevelOverride, AddUserDialog, EnforceProtectionDialog, UnProtectDocumentDialog, RestrictEditing, Search, OptionsPane, TextSearch, SearchWidgetInfo, TextSearchResult, TextSearchResults, Selection, SelectionCharacterFormat, SelectionBorder, SelectionBorders, SelectionParagraphFormat, SelectionSectionFormat, SelectionTableFormat, SelectionCellFormat, SelectionRowFormat, SelectionImageFormat, TextPosition, SelectionWidgetInfo, Hyperlink, ImageInfo, SpellChecker, Optimized, Regular, Revision, RevisionCollection, TrackChangesPane, ChangesSingleView, DocumentHelper, LayoutViewer, PageLayoutViewer, WebLayoutViewer, Rect, Padding, Margin, Widget, BlockContainer, BodyWidget, HeaderFooterWidget, BlockWidget, FootNoteWidget, ParagraphWidget, TablePosition, TableWidget, TableRowWidget, TableCellWidget, LineWidget, ElementBox, FieldElementBox, FormField, TextFormField, CheckBoxFormField, DropDownFormField, TextElementBox, Footnote, FootnoteElementBox, ErrorTextElementBox, FieldTextElementBox, TabElementBox, BookmarkElementBox, ContentControl, ContentControlProperties, ContentControlListItems, CheckBoxState, XmlMapping, CustomXmlPart, ShapeCommon, ShapeBase, ShapeElementBox, TextFrame, LineFormat, FillFormat, ImageElementBox, ListTextElementBox, EditRangeEndElementBox, EditRangeStartElementBox, ChartElementBox, ChartArea, ChartCategory, ChartData, ChartLegend, ChartSeries, ChartErrorBar, ChartSeriesFormat, ChartDataLabels, ChartTrendLines, ChartTitleArea, ChartDataFormat, ChartFill, ChartLayout, ChartCategoryAxis, ChartDataTable, CommentCharacterElementBox, CommentElementBox, Page, WTableHolder, WColumn, ColumnSizeInfo, Layout, Renderer, SfdtReader, TextHelper, Zoom, WordExport, TextExport, SfdtExport, HtmlExport, DocumentEditorSettings, DocumentSettings, DocumentEditor, ServerActionSettings, FormFieldSettings, CollaborativeEditingSettings, ContainerServerActionSettings, Toolbar, DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
//# sourceMappingURL=ej2-angular-documenteditor.es5.js.map
