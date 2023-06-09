/*!
*  filename: ej2-angular-spreadsheet.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AllModule, BasicModule, CellFormat, Clipboard, CollaborativeEditing, ContextMenu, DataBind, Edit, Formula, FormulaBar, KeyboardNavigation, KeyboardShortcut, NumberFormat, Open, Ribbon, Save, Selection, SheetTabs, Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { CommonModule } from '@angular/common';

let input = ['height', 'id', 'left', 'src', 'top', 'width'];
let outputs = [];
class ImageDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-images>e-image',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ImageDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Image Array Directive
 */
class ImagesDirective extends ArrayBase {
    constructor() {
        super('image');
    }
}
ImagesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cell>e-images',
                queries: {
                    children: new ContentChildren(ImageDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ImagesDirective.ctorParameters = () => [];

let input$1 = ['dataLabelSettings', 'height', 'id', 'isSeriesInRows', 'legendSettings', 'primaryXAxis', 'primaryYAxis', 'range', 'theme', 'title', 'type', 'width'];
let outputs$1 = [];
class ChartDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input$1;
    }
}
ChartDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-charts>e-chart',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ChartDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Chart Array Directive
 */
class ChartsDirective extends ArrayBase {
    constructor() {
        super('chart');
    }
}
ChartsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cell>e-charts',
                queries: {
                    children: new ContentChildren(ChartDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ChartsDirective.ctorParameters = () => [];

let input$2 = ['chart', 'colSpan', 'format', 'formula', 'hyperlink', 'image', 'index', 'isLocked', 'rowSpan', 'style', 'validation', 'value', 'wrap'];
let outputs$2 = [];
/**
 * `e-cell` directive represent a cell of the Angular Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class CellDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['image', 'chart'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$2;
    }
}
CellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cells>e-cell',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childImage: new ContentChild(ImagesDirective),
                    childChart: new ContentChild(ChartsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
CellDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Cell Array Directive
 */
class CellsDirective extends ArrayBase {
    constructor() {
        super('cells');
    }
}
CellsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-row>e-cells',
                queries: {
                    children: new ContentChildren(CellDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CellsDirective.ctorParameters = () => [];

let input$3 = ['cells', 'customHeight', 'format', 'height', 'hidden', 'index'];
let outputs$3 = [];
/**
 * `e-row` directive represent a row of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class RowDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['cells'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$3;
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childCells: new ContentChild(CellsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
RowDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Row Array Directive
 */
class RowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
RowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-rows',
                queries: {
                    children: new ContentChildren(RowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RowsDirective.ctorParameters = () => [];

let input$4 = ['customWidth', 'format', 'hidden', 'index', 'isLocked', 'validation', 'width'];
let outputs$4 = [];
/**
 * `e-column` directive represent a column of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-columns>
 *    <e-column width='100'></e-column>
 *    </e-columns>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class ColumnDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$4;
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input$4,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Column Array Directive
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$5 = ['address', 'dataSource', 'query', 'showFieldAsHeader', 'startCell', 'template'];
let outputs$5 = [];
/**
 * `e-range` directive represent a range of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range [dataSource]='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class RangeDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$5;
    }
}
RangeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-ranges>e-range',
                inputs: input$5,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
RangeDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], RangeDirective.prototype, "template", void 0);
/**
 * Range Array Directive
 */
class RangesDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
RangesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-ranges',
                queries: {
                    children: new ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = () => [];

let input$6 = ['cFColor', 'format', 'range', 'type', 'value'];
let outputs$6 = [];
/**
 * `e-conditionalformat` directive represent a conditionalformat of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class ConditionalFormatDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
        this.directivePropList = input$6;
    }
}
ConditionalFormatDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-conditionalformats>e-conditionalformat',
                inputs: input$6,
                outputs: outputs$6,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ConditionalFormatDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * ConditionalFormat Array Directive
 */
class ConditionalFormatsDirective extends ArrayBase {
    constructor() {
        super('conditionalformats');
    }
}
ConditionalFormatsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-conditionalformats',
                queries: {
                    children: new ContentChildren(ConditionalFormatDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ConditionalFormatsDirective.ctorParameters = () => [];

let input$7 = ['activeCell', 'colCount', 'columns', 'conditionalFormats', 'frozenColumns', 'frozenRows', 'index', 'isProtected', 'name', 'paneTopLeftCell', 'password', 'protectSettings', 'ranges', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'state', 'topLeftCell', 'usedRange'];
let outputs$7 = [];
/**
 * `e-sheet` directive represent a sheet of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class SheetDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['rows', 'columns', 'ranges', 'conditionalFormats'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$7);
        this.directivePropList = input$7;
    }
}
SheetDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheets>e-sheet',
                inputs: input$7,
                outputs: outputs$7,
                queries: {
                    childRows: new ContentChild(RowsDirective),
                    childColumns: new ContentChild(ColumnsDirective),
                    childRanges: new ContentChild(RangesDirective),
                    childConditionalFormats: new ContentChild(ConditionalFormatsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SheetDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Sheet Array Directive
 */
class SheetsDirective extends ArrayBase {
    constructor() {
        super('sheets');
    }
}
SheetsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-spreadsheet>e-sheets',
                queries: {
                    children: new ContentChildren(SheetDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SheetsDirective.ctorParameters = () => [];

let input$8 = ['comment', 'name', 'refersTo', 'scope'];
let outputs$8 = [];
/**
 * `e-definedname` directive represent a defined name of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
class DefinedNameDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$8);
        this.directivePropList = input$8;
    }
}
DefinedNameDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-definednames>e-definedname',
                inputs: input$8,
                outputs: outputs$8,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DefinedNameDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * DefinedName Array Directive
 */
class DefinedNamesDirective extends ArrayBase {
    constructor() {
        super('definednames');
    }
}
DefinedNamesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-spreadsheet>e-definednames',
                queries: {
                    children: new ContentChildren(DefinedNameDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
DefinedNamesDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['activeSheetIndex', 'allowAutoFill', 'allowCellFormatting', 'allowChart', 'allowConditionalFormat', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowFreezePane', 'allowHyperlink', 'allowImage', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'autoFillSettings', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'isProtected', 'locale', 'openUrl', 'password', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showAggregate', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width'];
const outputs$9 = ['actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeCellUpdate', 'beforeConditionalFormat', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'dataSourceChanged', 'dialogBeforeOpen', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
const twoWays = [''];
/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
let SpreadsheetComponent = class SpreadsheetComponent extends Spreadsheet {
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
        this.tags = ['sheets', 'definedNames'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('SpreadsheetClipboard');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('SpreadsheetEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('SpreadsheetKeyboardNavigation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('SpreadsheetKeyboardShortcut');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('SpreadsheetCollaborativeEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('SpreadsheetSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('SpreadsheetContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('SpreadsheetFormulaBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('SpreadsheetRibbon');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('SpreadsheetSave');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('SpreadsheetOpen');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('SpreadsheetSheetTabs');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('SpreadsheetDataBind');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('SpreadsheetAllModule');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('SpreadsheetBasicModule');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('SpreadsheetCellFormat');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('SpreadsheetNumberFormat');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('SpreadsheetFormula');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        this.registerEvents(outputs$9);
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
        this.tagObjects[0].instance = this.childSheets;
        if (this.childDefinedNames) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childDefinedNames);
        }
        this.context.ngAfterContentChecked(this);
    }
};
SpreadsheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-spreadsheet',
                inputs: inputs,
                outputs: outputs$9,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSheets: new ContentChild(SheetsDirective),
                    childDefinedNames: new ContentChild(DefinedNamesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SpreadsheetComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SpreadsheetComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], SpreadsheetComponent.prototype, "template", void 0);
SpreadsheetComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SpreadsheetComponent);

/**
 * NgModule definition for the Spreadsheet component.
 */
class SpreadsheetModule {
}
SpreadsheetModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SpreadsheetComponent,
                    ImageDirective,
                    ImagesDirective,
                    ChartDirective,
                    ChartsDirective,
                    CellDirective,
                    CellsDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeDirective,
                    RangesDirective,
                    ConditionalFormatDirective,
                    ConditionalFormatsDirective,
                    SheetDirective,
                    SheetsDirective,
                    DefinedNameDirective,
                    DefinedNamesDirective
                ],
                exports: [
                    SpreadsheetComponent,
                    ImageDirective,
                    ImagesDirective,
                    ChartDirective,
                    ChartsDirective,
                    CellDirective,
                    CellsDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeDirective,
                    RangesDirective,
                    ConditionalFormatDirective,
                    ConditionalFormatsDirective,
                    SheetDirective,
                    SheetsDirective,
                    DefinedNameDirective,
                    DefinedNamesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SpreadsheetModule.ctorParameters = () => [];

const ClipboardService = { provide: 'SpreadsheetClipboard', useValue: Clipboard };
const EditService = { provide: 'SpreadsheetEdit', useValue: Edit };
const KeyboardNavigationService = { provide: 'SpreadsheetKeyboardNavigation', useValue: KeyboardNavigation };
const KeyboardShortcutService = { provide: 'SpreadsheetKeyboardShortcut', useValue: KeyboardShortcut };
const CollaborativeEditingService = { provide: 'SpreadsheetCollaborativeEditing', useValue: CollaborativeEditing };
const SelectionService = { provide: 'SpreadsheetSelection', useValue: Selection };
const ContextMenuService = { provide: 'SpreadsheetContextMenu', useValue: ContextMenu };
const FormulaBarService = { provide: 'SpreadsheetFormulaBar', useValue: FormulaBar };
const RibbonService = { provide: 'SpreadsheetRibbon', useValue: Ribbon };
const SaveService = { provide: 'SpreadsheetSave', useValue: Save };
const OpenService = { provide: 'SpreadsheetOpen', useValue: Open };
const SheetTabsService = { provide: 'SpreadsheetSheetTabs', useValue: SheetTabs };
const DataBindService = { provide: 'SpreadsheetDataBind', useValue: DataBind };
const AllModuleService = { provide: 'SpreadsheetAllModule', useValue: AllModule };
const BasicModuleService = { provide: 'SpreadsheetBasicModule', useValue: BasicModule };
const CellFormatService = { provide: 'SpreadsheetCellFormat', useValue: CellFormat };
const NumberFormatService = { provide: 'SpreadsheetNumberFormat', useValue: NumberFormat };
const FormulaService = { provide: 'SpreadsheetFormula', useValue: Formula };
/**
 * NgModule definition for the Spreadsheet component with providers.
 */
class SpreadsheetAllModule {
}
SpreadsheetAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SpreadsheetModule],
                exports: [
                    SpreadsheetModule
                ],
                providers: [
                    ClipboardService,
                    EditService,
                    KeyboardNavigationService,
                    KeyboardShortcutService,
                    CollaborativeEditingService,
                    SelectionService,
                    ContextMenuService,
                    FormulaBarService,
                    RibbonService,
                    SaveService,
                    OpenService,
                    SheetTabsService,
                    DataBindService,
                    AllModuleService,
                    BasicModuleService,
                    CellFormatService,
                    NumberFormatService,
                    FormulaService
                ]
            },] },
];
/**
 * @nocollapse
 */
SpreadsheetAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ImageDirective, ImagesDirective, ChartDirective, ChartsDirective, CellDirective, CellsDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, RangeDirective, RangesDirective, ConditionalFormatDirective, ConditionalFormatsDirective, SheetDirective, SheetsDirective, DefinedNameDirective, DefinedNamesDirective, SpreadsheetComponent, SpreadsheetModule, SpreadsheetAllModule, ClipboardService, EditService, KeyboardNavigationService, KeyboardShortcutService, CollaborativeEditingService, SelectionService, ContextMenuService, FormulaBarService, RibbonService, SaveService, OpenService, SheetTabsService, DataBindService, AllModuleService, BasicModuleService, CellFormatService, NumberFormatService, FormulaService, inputs as ɵa, outputs$9 as ɵb };
export { Workbook, Range, UsedRange, Sheet, getSheetIndex, getSheetIndexFromId, getSheetNameFromAddress, getSheetIndexByName, updateSelectedRange, getSelectedRange, getSingleSelectedRange, getSheet, getSheetNameCount, getMaxSheetId, initSheet, getSheetName, moveSheet, duplicateSheet, Row, getRow, setRow, isHiddenRow, isFilterHidden, getRowHeight, setRowHeight, getRowsHeight, Column, getColumn, setColumn, getColumnWidth, getColumnsWidth, isHiddenCol, checkColumnValidation, Cell, getCell, setCell, skipDefaultValue, wrap, getColorCode, getCustomColors, isCustomDateTime, getData, getValueFromFormat, getModel, processIdx, getRangeIndexes, getCellIndexes, getColIndex, getCellAddress, getRangeAddress, getColumnHeaderText, getIndexesFromAddress, getRangeFromAddress, getAddressFromSelectedRange, getAddressInfo, getSheetIndexFromAddress, getSwapRange, isSingleCell, executeTaskAsync, WorkbookBasicModule, WorkbookAllModule, getWorkbookRequiredModules, CellStyle, FilterCollection, SortCollection, DefineName, ProtectSettings, Hyperlink, Validation, Format, ConditionalFormat, LegendSettings, DataLabelSettings, MajorGridLines, MinorGridLines, Axis, Chart, Image, AutoFillSettings, workbookDestroyed, updateSheetFromDataSource, dataSourceChanged, dataChanged, triggerDataChange, workbookOpen, beginSave, beginAction, sortImport, ribbonFind, exportDialog, getFilteredCollection, saveCompleted, applyNumberFormatting, getFormattedCellObject, refreshCellElement, setCellFormat, findAllValues, textDecorationUpdate, applyCellFormat, updateUsedRange, updateRowColCount, workbookFormulaOperation, workbookEditOperation, checkDateFormat, getFormattedBarText, activeCellChanged, openSuccess, openFailure, sheetCreated, sheetsDestroyed, aggregateComputation, getUniqueRange, removeUniquecol, checkUniqueRange, reApplyFormula, clearFormulaDependentCells, formulaInValidation, beforeSort, initiateSort, updateSortedDataOnCell, sortComplete, sortRangeAlert, initiatelink, beforeHyperlinkCreate, afterHyperlinkCreate, beforeHyperlinkClick, afterHyperlinkClick, addHyperlink, setLinkModel, beforeFilter, initiateFilter, filterComplete, filterRangeAlert, clearAllFilter, wrapEvent, onSave, insert, deleteAction, insertModel, deleteModel, isValidation, cellValidation, addHighlight, dataValidate, findNext, findPrevious, goto, findWorkbookHandler, replace, replaceAll, showDialog, findKeyUp, removeHighlight, queryCellInfo, count, findCount, protectSheetWorkBook, updateToggle, protectsheetHandler, replaceAllDialog, unprotectsheetHandler, workBookeditAlert, setLockCells, applyLockCells, setMerge, applyMerge, mergedRange, activeCellMergedRange, insertMerge, pasteMerge, hideShow, setCFRule, applyCF, clearCFRule, clear, clearCF, setImage, setChart, initiateChart, refreshRibbonIcons, refreshChart, refreshChartSize, updateChart, deleteChartColl, initiateChartModel, focusChartBorder, saveError, validationHighlight, updateFilter, beforeInsert, beforeDelete, deleteHyperlink, moveOrDuplicateSheet, setAutoFill, refreshCell, getFillInfo, getautofillDDB, rowFillHandler, getTextSpace, refreshClipboard, updateView, selectionComplete, refreshInsertDelete, getUpdatedFormulaOnInsertDelete, beforeCellUpdate, duplicateSheetFilterHandler, unMerge, checkIsFormula, isCellReference, isChar, isRowSelected, isColumnSelected, inRange, isInMultipleRange, isInRange, getSplittedAddressForColumn, isLocked, isValidCellReference, skipHiddenIdx, isHeightCheckNeeded, getUpdatedFormula, updateCell, getDataRange, insertFormatRange, deleteFormatRange, updateCFModel, toFraction, getGcd, intToDate, dateToInt, isDateTime, isNumber, toDate, parseIntValue, workbookLocale, localeData, DataBind, WorkbookOpen, WorkbookSave, WorkbookFormula, WorkbookNumberFormat, getFormatFromType, getTypeFromFormat, WorkbookSort, WorkbookFilter, WorkbookImage, WorkbookChart, WorkbookCellFormat, WorkbookEdit, WorkbookHyperlink, WorkbookInsert, WorkbookDelete, WorkbookDataValidation, WorkbookFindAndReplace, WorkbookProtectSheet, WorkbookMerge, WorkbookConditionalFormat, WorkbookAutoFill, getRequiredModules, ribbon, formulaBar, sheetTabs, refreshSheetTabs, isFormulaBarEdit, initialLoad, contentLoaded, mouseDown, spreadsheetDestroyed, editOperation, formulaOperation, formulaBarOperation, click, keyUp, keyDown, formulaKeyUp, formulaBarUpdate, onVerticalScroll, onHorizontalScroll, beforeContentLoaded, beforeVirtualContentLoaded, virtualContentLoaded, contextMenuOpen, cellNavigate, mouseUpAfterSelection, cMenuBeforeOpen, insertSheetTab, removeSheetTab, renameSheetTab, ribbonClick, refreshRibbon, enableToolbarItems, tabSwitch, selectRange, cut, copy, paste, clearCopy, dataBound, beforeDataBound, addContextMenuItems, removeContextMenuItems, enableContextMenuItems, enableFileMenuItems, hideFileMenuItems, addFileMenuItems, hideRibbonTabs, enableRibbonTabs, addRibbonTabs, addToolbarItems, hideToolbarItems, beforeRibbonCreate, rowHeightChanged, colWidthChanged, onContentScroll, deInitProperties, activeSheetChanged, renameSheet, initiateCustomSort, applySort, collaborativeUpdate, autoFit, updateToggleItem, initiateHyperlink, editHyperlink, openHyperlink, removeHyperlink, createHyperlinkElement, sheetNameUpdate, hideSheet, performUndoRedo, updateUndoRedoCollection, setActionData, getBeforeActionData, clearUndoRedoCollection, initiateFilterUI, renderFilterCell, reapplyFilter, filterByCellValue, clearFilter, getFilteredColumn, completeAction, filterCellKeyDown, getFilterRange, setAutoFit, refreshFormulaDatasource, setScrollEvent, initiateDataValidation, validationError, startEdit, invalidData, clearInvalid, protectSheet, applyProtect, unprotectSheet, protectCellFormat, gotoDlg, findDlg, findHandler, created, editAlert, setUndoRedo, enableFormulaInput, protectSelection, hiddenMerge, checkPrevMerge, checkMerge, removeDataValidation, showAggregate, goToSheet, showSheet, renderCFDlg, clearViewer, initiateFormulaReference, initiateCur, clearCellRef, editValue, addressHandle, initiateEdit, forRefSelRender, insertImage, refreshImgElem, refreshImgCellObj, getRowIdxFromClientY, getColIdxFromClientX, createImageElement, deleteImage, deleteChart, refreshChartCellObj, refreshImagePosition, updateTableWidth, focusBorder, clearChartBorder, insertChart, chartRangeSelection, insertDesignChart, removeDesignChart, chartDesignTab, addChartEle, undoRedoForChartDesign, isReact, renderReactTemplates, clearTemplate, protectWorkbook, unProtectWorkbook, getPassWord, setProtectWorkbook, removeWorkbookProtection, importProtectWorkbook, selectionStatus, freeze, overlayEleSize, updateScroll, positionAutoFillElement, hideAutoFillOptions, performAutoFill, selectAutoFillRange, autoFill, fillRange, hideAutoFillElement, unProtectSheetPassword, updateTranslate, getUpdatedScrollPosition, updateScrollValue, beforeCheckboxRender, refreshCheckbox, renderInsertDlg, toggleFormulaBar, toggleProtect, getUpdateUsingRaf, removeAllChildren, getColGroupWidth, getScrollBarWidth, getSiblingsHeight, inView, getCellPosition, setPosition, removeRangeEle, locateElem, setStyleAttribute, getStartEvent, getMoveEvent, getEndEvent, isTouchStart, isTouchMove, isTouchEnd, isMouseDown, isMouseMove, isMouseUp, getClientX, getClientY, getDPRValue, setAriaOptions, destroyComponent, setResize, setWidthAndHeight, setTextLineHeight, findMaxValue, updateAction, hasTemplate, setRowEleHeight, getTextHeight, getLineHeight, getTextWidth, getLines, getBorderHeight, getExcludedColumnWidth, getTextHeightWithBorder, setMaxHgt, getMaxHgt, focus, isLockedCells, isDiscontinuousRange, clearRange, BasicModule, AllModule, ScrollSettings, SelectionSettings, DISABLED, WRAPTEXT, locale, dialog, actionEvents, overlay, fontColor, fillColor, keyCodes, defaultLocale, Spreadsheet, Clipboard, Edit, Selection, Scroll, VirtualScroll, KeyboardNavigation, KeyboardShortcut, CellFormat, Resize, CollaborativeEditing, ShowHide, SpreadsheetHyperlink, UndoRedo, WrapText, Insert, Delete, DataValidation, ProtectSheet, FindAndReplace, Merge, ConditionalFormatting, AutoFill, Ribbon, FormulaBar, Formula, SheetTabs, Open, Save, ContextMenu, NumberFormat, Sort, Filter, SpreadsheetImage, SpreadsheetChart, Render, SheetRender, RowRenderer, CellRenderer, Calculate, FormulaError, FormulaInfo, CalcSheetFamilyItem, getAlphalabel, ValueChangedArgs, Parser, CalculateCommon, isUndefined, getSkeletonVal, isExternalFileLink, getModules, getValue, setValue, ModuleLoader, CommonErrors, FormulasErrorsStrings, ExcelFileFormats, BasicFormulas } from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-angular-spreadsheet.js.map
