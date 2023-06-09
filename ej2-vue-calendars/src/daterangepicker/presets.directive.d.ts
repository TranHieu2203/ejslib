export declare const isExecute: any;
declare let vueImport: any;
export declare class PresetsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const PresetsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-presets' directive represent a presets of VueJS daterangepicker
 * It must be contained in a daterangepicker component(`ej-daterangepicker`).
 * ```html
 * <ejs-daterangepicker id='range'>
 *   <e-presets>
 *   <e-preset label='Last Week' v-bind:start='startValue' v-bind:end='endValue'></e-preset>
 *   <e-preset label='Last Month' v-bind:start='startValue' v-bind:end='endValue'></e-preset>
 *   </e-presets>
 * </ejs-daterangepicker>
 * ```
 */
export declare class PresetDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const PresetPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
