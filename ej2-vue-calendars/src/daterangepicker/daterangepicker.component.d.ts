import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker v-bind:startDate='date' v-bind:endDate='date'></ejs-daterangepicker>
 * ```
 */
export declare class DateRangePickerComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    isVue3: boolean;
    templateCollection: any;
    constructor();
    clearTemplate(templateNames?: string[]): any;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    custom(): void;
    focusIn(): void;
    focusOut(): void;
    getSelectedRange(): Object;
    hide(event?: Object | Object | Object): void;
    requiredModules(): Object[];
    show(element?: Object, event?: Object | Object | Object): void;
}
export declare const DateRangePickerPlugin: {
    name: string;
    install(Vue: any): void;
};
