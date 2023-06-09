import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { setValue, FormBase, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { RichTextEditor, Toolbar, Link, Image, Count, QuickToolbar, HtmlEditor, MarkdownEditor, Table, PasteCleanup, Resize, FileManager } from '@syncfusion/ej2-richtexteditor';
export * from '@syncfusion/ej2-richtexteditor';
import { CommonModule } from '@angular/common';

var RichTextEditorComponent_1;
const inputs = ['autoSaveOnIdle', 'backgroundColor', 'bulletFormatList', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'enterKey', 'fileManagerSettings', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'numberFormatList', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'shiftEnterKey', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'afterImageDelete', 'afterPasteCleanup', 'beforeDialogClose', 'beforeDialogOpen', 'beforeImageDrop', 'beforeImageUpload', 'beforePasteCleanup', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate', 'updatedToolbarStatus', 'valueChange'];
const twoWays = ['value'];
/**
 * `ejs-richtexteditor` represents the Angular richtexteditor Component.
 * ```html
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
let RichTextEditorComponent = RichTextEditorComponent_1 = class RichTextEditorComponent extends RichTextEditor {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('RichTextEditorToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('RichTextEditorLink');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('RichTextEditorImage');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('RichTextEditorCount');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('RichTextEditorQuickToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('RichTextEditorHtmlEditor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('RichTextEditorMarkdownEditor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('RichTextEditorTable');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('RichTextEditorPasteCleanup');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('RichTextEditorResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('RichTextEditorFileManager');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext = new FormBase();
        this.formCompContext = new ComponentBase();
    }
    registerOnChange(registerFunction) {
    }
    registerOnTouched(registerFunction) {
    }
    writeValue(value) {
    }
    setDisabledState(disabled) {
    }
    ngOnInit() {
        this.formCompContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.formContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.formCompContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.formCompContext.ngAfterContentChecked(this);
    }
};
RichTextEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
RichTextEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: RichTextEditorComponent, selector: "ejs-richtexteditor", inputs: { autoSaveOnIdle: "autoSaveOnIdle", backgroundColor: "backgroundColor", bulletFormatList: "bulletFormatList", cssClass: "cssClass", editorMode: "editorMode", enableAutoUrl: "enableAutoUrl", enableHtmlEncode: "enableHtmlEncode", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableResize: "enableResize", enableRtl: "enableRtl", enableTabKey: "enableTabKey", enableXhtml: "enableXhtml", enabled: "enabled", enterKey: "enterKey", fileManagerSettings: "fileManagerSettings", floatingToolbarOffset: "floatingToolbarOffset", fontColor: "fontColor", fontFamily: "fontFamily", fontSize: "fontSize", format: "format", formatter: "formatter", height: "height", htmlAttributes: "htmlAttributes", iframeSettings: "iframeSettings", inlineMode: "inlineMode", insertImageSettings: "insertImageSettings", keyConfig: "keyConfig", locale: "locale", maxLength: "maxLength", numberFormatList: "numberFormatList", pasteCleanupSettings: "pasteCleanupSettings", placeholder: "placeholder", quickToolbarSettings: "quickToolbarSettings", readonly: "readonly", saveInterval: "saveInterval", shiftEnterKey: "shiftEnterKey", showCharCount: "showCharCount", tableSettings: "tableSettings", toolbarSettings: "toolbarSettings", undoRedoSteps: "undoRedoSteps", undoRedoTimer: "undoRedoTimer", value: "value", valueTemplate: "valueTemplate", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", afterImageDelete: "afterImageDelete", afterPasteCleanup: "afterPasteCleanup", beforeDialogClose: "beforeDialogClose", beforeDialogOpen: "beforeDialogOpen", beforeImageDrop: "beforeImageDrop", beforeImageUpload: "beforeImageUpload", beforePasteCleanup: "beforePasteCleanup", beforeQuickToolbarOpen: "beforeQuickToolbarOpen", beforeSanitizeHtml: "beforeSanitizeHtml", blur: "blur", change: "change", created: "created", destroyed: "destroyed", dialogClose: "dialogClose", dialogOpen: "dialogOpen", focus: "focus", imageRemoving: "imageRemoving", imageSelected: "imageSelected", imageUploadFailed: "imageUploadFailed", imageUploadSuccess: "imageUploadSuccess", imageUploading: "imageUploading", quickToolbarClose: "quickToolbarClose", quickToolbarOpen: "quickToolbarOpen", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", toolbarClick: "toolbarClick", toolbarStatusUpdate: "toolbarStatusUpdate", updatedToolbarStatus: "updatedToolbarStatus", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RichTextEditorComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "valueTemplate", first: true, predicate: ["valueTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], RichTextEditorComponent.prototype, "valueTemplate", void 0);
RichTextEditorComponent = RichTextEditorComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], RichTextEditorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-richtexteditor',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RichTextEditorComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { valueTemplate: [{
                type: ContentChild,
                args: ['valueTemplate']
            }] } });

/**
 * NgModule definition for the RichTextEditor component.
 */
class RichTextEditorModule {
}
RichTextEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RichTextEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorModule, declarations: [RichTextEditorComponent], imports: [CommonModule], exports: [RichTextEditorComponent] });
RichTextEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        RichTextEditorComponent
                    ],
                    exports: [
                        RichTextEditorComponent
                    ]
                }]
        }] });

const ToolbarService = { provide: 'RichTextEditorToolbar', useValue: Toolbar };
const LinkService = { provide: 'RichTextEditorLink', useValue: Link };
const ImageService = { provide: 'RichTextEditorImage', useValue: Image };
const CountService = { provide: 'RichTextEditorCount', useValue: Count };
const QuickToolbarService = { provide: 'RichTextEditorQuickToolbar', useValue: QuickToolbar };
const HtmlEditorService = { provide: 'RichTextEditorHtmlEditor', useValue: HtmlEditor };
const MarkdownEditorService = { provide: 'RichTextEditorMarkdownEditor', useValue: MarkdownEditor };
const TableService = { provide: 'RichTextEditorTable', useValue: Table };
const PasteCleanupService = { provide: 'RichTextEditorPasteCleanup', useValue: PasteCleanup };
const ResizeService = { provide: 'RichTextEditorResize', useValue: Resize };
const FileManagerService = { provide: 'RichTextEditorFileManager', useValue: FileManager };
/**
 * NgModule definition for the RichTextEditor component with providers.
 */
class RichTextEditorAllModule {
}
RichTextEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RichTextEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, imports: [CommonModule, RichTextEditorModule], exports: [RichTextEditorModule] });
RichTextEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, providers: [
        ToolbarService,
        LinkService,
        ImageService,
        CountService,
        QuickToolbarService,
        HtmlEditorService,
        MarkdownEditorService,
        TableService,
        PasteCleanupService,
        ResizeService,
        FileManagerService
    ], imports: [[CommonModule, RichTextEditorModule], RichTextEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RichTextEditorModule],
                    exports: [
                        RichTextEditorModule
                    ],
                    providers: [
                        ToolbarService,
                        LinkService,
                        ImageService,
                        CountService,
                        QuickToolbarService,
                        HtmlEditorService,
                        MarkdownEditorService,
                        TableService,
                        PasteCleanupService,
                        ResizeService,
                        FileManagerService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { CountService, FileManagerService, HtmlEditorService, ImageService, LinkService, MarkdownEditorService, PasteCleanupService, QuickToolbarService, ResizeService, RichTextEditorAllModule, RichTextEditorComponent, RichTextEditorModule, TableService, ToolbarService };
//# sourceMappingURL=syncfusion-ej2-angular-richtexteditor.mjs.map
