import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS TimePicker Component.
 * ```html
 * <ejs-timepicker v-bind:value='value'></ejs-timepicker>
 * ```
 */
export declare class TimePickerComponent extends ComponentBase {
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
    hide(): void;
    requiredModules(): Object[];
    show(event?: Object | Object | Object): void;
}
export declare const TimePickerPlugin: {
    name: string;
    install(Vue: any): void;
};
