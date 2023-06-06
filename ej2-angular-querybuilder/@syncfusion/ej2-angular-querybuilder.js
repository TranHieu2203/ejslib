/*!
*  filename: ej2-angular-querybuilder.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
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
let input = ['category', 'columns', 'field', 'format', 'label', 'operators', 'ruleTemplate', 'step', 'template', 'type', 'validation', 'value', 'values'];
let outputs = [];
/**
 * `e-column` directive represent a column of the Angular QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```html
 * <ejs-querybuilder [dataSource]='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'></e-column>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'></e-column>
 *   </e-columns>
 * </ejs-querybuilder>
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
                selector: 'ejs-querybuilder>e-columns>e-column',
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
    'ruleTemplate': [{ type: ContentChild, args: ['ruleTemplate',] },],
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "ruleTemplate", void 0);
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
                selector: 'ejs-querybuilder>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'fieldMode', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width'];
const outputs$1 = ['actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'ruleChange'];
const twoWays = [''];
/**
 * Represents the EJ2 Angular QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
let QueryBuilderComponent = class QueryBuilderComponent extends QueryBuilder {
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
        this.tags = ['columns'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
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
        this.context.ngAfterContentChecked(this);
    }
};
QueryBuilderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-querybuilder',
                inputs: inputs,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
QueryBuilderComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
QueryBuilderComponent.propDecorators = {
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], QueryBuilderComponent.prototype, "headerTemplate", void 0);
QueryBuilderComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], QueryBuilderComponent);

/**
 * NgModule definition for the QueryBuilder component.
 */
class QueryBuilderModule {
}
QueryBuilderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    QueryBuilderComponent,
                    ColumnDirective,
                    ColumnsDirective
                ],
                exports: [
                    QueryBuilderComponent,
                    ColumnDirective,
                    ColumnsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
QueryBuilderModule.ctorParameters = () => [];

/**
 * NgModule definition for the QueryBuilder component with providers.
 */
class QueryBuilderAllModule {
}
QueryBuilderAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, QueryBuilderModule],
                exports: [
                    QueryBuilderModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
QueryBuilderAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, QueryBuilderComponent, QueryBuilderModule, QueryBuilderAllModule, inputs as ɵa, outputs$1 as ɵb };
export { Columns, Rule, Value, ShowButtons, QueryBuilder } from '@syncfusion/ej2-querybuilder';
//# sourceMappingURL=ej2-angular-querybuilder.js.map
