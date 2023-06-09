export declare const isExecute: any;
declare let vueImport: any;
export declare class HeaderRowsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const HeaderRowsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
export declare class HeaderRowDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const HeaderRowPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
