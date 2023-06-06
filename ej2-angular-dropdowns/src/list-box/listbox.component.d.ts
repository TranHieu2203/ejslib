import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
* The ListBox allows the user to select values from the predefined list of values.
*```html
*<ejs-listbox [dataSource]='data'></ejs-listbox>
*```
*/
export declare class ListBoxComponent extends ListBox implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    beforeDrop: any;
    beforeItemRender: any;
    change: any;
    created: any;
    dataBound: any;
    destroyed: any;
    drag: any;
    dragStart: any;
    drop: any;
    filtering: any;
    select: any;
    valueChange: any;
    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * We have built-in `template engine`
     *
     * which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.
     *
     * @default null
     * @deprecated
     */
    itemTemplate: any;
    noRecordsTemplate: any;
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
