import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker v-bind:value='dateTime'></ejs-datetimepicker>
 * ```
 */
export declare class DateTimePickerComponent extends ComponentBase {
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
    addDate(dates: Object | Object[]): void;
    createContent(): void;
    currentView(): string;
    focusIn(): void;
    focusOut(): void;
    hide(e?: Object | Object | Object): void;
    navigateTo(view: Object, date: Object): void;
    removeDate(dates: Object | Object[]): void;
    requiredModules(): Object[];
    show(type?: string, e?: Object | Object | Object): void;
    toggle(e?: Object): void;
}
export declare const DateTimePickerPlugin: {
    name: string;
    install(Vue: any): void;
};
