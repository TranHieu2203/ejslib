import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents vue QRCode Component
 * ```html
 * <ejs-qrcode-generator></ejs-qrcode-generator>
 * ```
 */
export declare class QRCodeGeneratorComponent extends ComponentBase {
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
    render(createElement: any): any;
    custom(): void;
    exportAsBase64Image(barcodeExportType: Object): Object;
    exportImage(filename: string, barcodeExportType: Object): void;
}
export declare const QRCodeGeneratorPlugin: {
    name: string;
    install(Vue: any): void;
};
