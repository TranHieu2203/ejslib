import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Calendar } from '@syncfusion/ej2-calendars';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular Calendar Component.
 * ```html
 * <ejs-calendar [value]='date'></ejs-calendar>
 * ```
 */
export declare class CalendarComponent extends Calendar implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    change: any;
    created: any;
    destroyed: any;
    navigated: any;
    renderDayCell: any;
    valueChange: any;
    valuesChange: any;
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
