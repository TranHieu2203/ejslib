/*!
*  filename: ej2-angular-kanban.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Kanban } from '@syncfusion/ej2-kanban';
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
let input = ['allowDrag', 'allowDrop', 'allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showAddButton', 'showItemCount', 'template', 'transitionColumns'];
let outputs = [];
/**
 * `e-columns` directive represent a columns of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
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
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
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
                selector: 'ejs-kanban>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = () => [];

let input$1 = ['keyFields', 'text'];
let outputs$1 = [];
/**
 * `e-stackedHeaders` directive represent a stacked header of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
class StackedHeaderDirective extends ComplexBase {
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
StackedHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stackedHeaders>e-stackedHeader',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StackedHeaderDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StackedHeader Array Directive
 */
class StackedHeadersDirective extends ArrayBase {
    constructor() {
        super('stackedheaders');
    }
}
StackedHeadersDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-kanban>e-stackedHeaders',
                queries: {
                    children: new ContentChildren(StackedHeaderDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StackedHeadersDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'externalDropId', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width'];
const outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
const twoWays = [''];
/**
 * `ej-kanban` represents the Angular Kanban Component.
 * ```html
 * <ejs-kanban></ejs-kanban>
 * ```
 */
let KanbanComponent = class KanbanComponent extends Kanban {
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
        this.tags = ['columns', 'stackedHeaders'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
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
        this.tagObjects[0].instance = this.childColumns;
        if (this.childStackedHeaders) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childStackedHeaders);
        }
        this.context.ngAfterContentChecked(this);
    }
};
KanbanComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-kanban',
                inputs: inputs,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective),
                    childStackedHeaders: new ContentChild(StackedHeadersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
KanbanComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
KanbanComponent.propDecorators = {
    'tooltipTemplate': [{ type: ContentChild, args: ['tooltipTemplate',] },],
    'columns_template': [{ type: ContentChild, args: ['columnsTemplate',] },],
    'swimlaneSettings_template': [{ type: ContentChild, args: ['swimlaneSettingsTemplate',] },],
    'cardSettings_template': [{ type: ContentChild, args: ['cardSettingsTemplate',] },],
    'dialogSettings_template': [{ type: ContentChild, args: ['dialogSettingsTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "tooltipTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "columns_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "swimlaneSettings_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "cardSettings_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "dialogSettings_template", void 0);
KanbanComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], KanbanComponent);

/**
 * NgModule definition for the Kanban component.
 */
class KanbanModule {
}
KanbanModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    KanbanComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    StackedHeaderDirective,
                    StackedHeadersDirective
                ],
                exports: [
                    KanbanComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    StackedHeaderDirective,
                    StackedHeadersDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
KanbanModule.ctorParameters = () => [];

/**
 * NgModule definition for the Kanban component with providers.
 */
class KanbanAllModule {
}
KanbanAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, KanbanModule],
                exports: [
                    KanbanModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
KanbanAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, StackedHeaderDirective, StackedHeadersDirective, KanbanComponent, KanbanModule, KanbanAllModule, inputs as ɵa, outputs$2 as ɵb };
export { Kanban, actionBegin, actionComplete, actionFailure, cardClick, cardDoubleClick, cardRendered, queryCellInfo, dataBinding, dataBound, dragStart, drag, dragStop, documentClick, dialogOpen, dialogClose, contentReady, dataReady, bottomSpace, cardSpace, toggleWidth, dataSourceChanged, dataStateChange } from '@syncfusion/ej2-kanban';
//# sourceMappingURL=ej2-angular-kanban.js.map
