import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * MultiSelect component allows the user to select a value from the predefined list of values.
 * ```html
 * <ejs-multiselect :dataSource='data'></ejs-multiselect>
 * ```
 */
export declare class MultiSelectComponent extends ComponentBase {
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
    addItem(items: undefined[] | undefined | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void;
    clear(): void;
    filter(dataSource: undefined[] | Object | string[] | number[] | boolean[], query?: Object, fields?: Object): void;
    focusIn(): void;
    focusOut(): void;
    getDataByValue(value: string | number | boolean): Object | string | number | boolean;
    getItems(): Object[];
    hidePopup(e?: Object | Object): void;
    hideSpinner(): void;
    requiredModules(): Object[];
    selectAll(state: boolean): void;
    showPopup(): void;
    showSpinner(): void;
}
export declare const MultiSelectPlugin: {
    name: string;
    install(Vue: any): void;
};
