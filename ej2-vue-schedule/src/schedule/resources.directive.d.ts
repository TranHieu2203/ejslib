export declare const isExecute: any;
declare let vueImport: any;
export declare class ResourcesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ResourcesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-resources` directive represent a resources of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
export declare class ResourceDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ResourcePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
