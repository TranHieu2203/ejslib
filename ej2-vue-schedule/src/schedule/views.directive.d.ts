export declare const isExecute: any;
declare let vueImport: any;
export declare class ViewsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ViewsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-views` directive represent a view of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
export declare class ViewDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ViewPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
