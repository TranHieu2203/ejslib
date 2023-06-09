export declare const isExecute: any;
declare let vueImport: any;
export declare class ColumnsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ColumnsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-column` directive represent a column of the VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='150'/>
 *    <e-column field='taskName' headerText='Task Name' width='200'/>
 *   </e-columns>
 * </ejs-gantt>
 * ```
 */
export declare class ColumnDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ColumnPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
