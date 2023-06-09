import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
export declare class InPlaceEditorComponent extends InPlaceEditor implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    actionBegin: any;
    actionFailure: any;
    actionSuccess: any;
    beforeSanitizeHtml: any;
    beginEdit: any;
    cancelClick: any;
    change: any;
    created: any;
    destroyed: any;
    endEdit: any;
    submitClick: any;
    validating: any;
    valueChange: any;
    /**
     * Specifies the HTML element ID as a string that can be added as a editable field.
     *
     * {% codeBlock src='inplace-editor/template/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @blazortype string
     */
    template: any;
    focus: any;
    blur: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    registerOnChange(registerFunction: (_: any) => void): void;
    registerOnTouched(registerFunction: () => void): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
