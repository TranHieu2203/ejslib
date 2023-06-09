import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
* The MultiSelect allows the user to pick a values from the predefined list of values.
*```html
*<ejs-multiselect></ejs-multiselect>
*```
*/
export declare class MultiSelectComponent extends MultiSelect implements IComponentBase {
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
    beforeOpen: any;
    beforeSelectAll: any;
    blur: any;
    change: any;
    chipSelection: any;
    close: any;
    created: any;
    customValueSelection: any;
    dataBound: any;
    destroyed: any;
    filtering: any;
    focus: any;
    open: any;
    removed: any;
    removing: any;
    select: any;
    selectedAll: any;
    tagging: any;
    valueChange: any;
    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * @default null
     */
    footerTemplate: any;
    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * @default null
     */
    headerTemplate: any;
    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * For more details about the available template options refer to
     * [`Template`](../../multi-select/templates) documentation.
     *
     * We have built-in `template engine`
     *which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.
     *
     * @default null
     */
    valueTemplate: any;
    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     *
     * We have built-in `template engine`
     *which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.
     *
     * @default null
     */
    itemTemplate: any;
    /**
     * Accepts the template design and assigns it to the group headers present in the MultiSelect popup list.
     * @default null
     */
    groupTemplate: any;
    noRecordsTemplate: any;
    actionFailureTemplate: any;
    private skipFromEvent;
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
