import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * `ej-schedule` represents the VueJS Schedule Component.
 * ```vue
 * <ejs-schedule></ejs-schedule>
 * ```
 */
export declare class ScheduleComponent extends ComponentBase {
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
    addEvent(data: Object | Object[]): void;
    addResource(resources: Object | Object[], name: string, index: number): void;
    changeCurrentView(viewName: Object, viewIndex?: number): void;
    closeEditor(): void;
    closeQuickInfoPopup(): void;
    collapseResource(resourceId: string | number, name: string): void;
    deleteEvent(id: string | number | Object | Object[], currentAction?: Object): void;
    expandResource(resourceId: string | number, name: string): void;
    exportToExcel(excelExportOptions?: Object): void;
    exportToICalendar(fileName?: string, customData?: Object[]): void;
    getBlockEvents(startDate?: Object, endDate?: Object, includeOccurrences?: boolean): Object[];
    getCellDetails(tdCol: Object | Object[]): Object;
    getCurrentViewDates(): Object[];
    getCurrentViewEvents(): Object[];
    getCurrentViewIndex(): number;
    getDeletedOccurrences(recurrenceData: string | number | Object): Object[];
    getEventDetails(element: Object): Object;
    getEventMaxID(): number | string;
    getEvents(startDate?: Object, endDate?: Object, includeOccurrences?: boolean): Object[];
    getIndexFromResourceId(id: string | number, name?: string): number;
    getOccurrencesByID(eventID: number | string): Object[];
    getOccurrencesByRange(startTime: Object, endTime: Object): Object[];
    getResourceCollections(): Object[];
    getResourcesByIndex(index: number): Object;
    getSelectedElements(): Object[];
    hideSpinner(): void;
    importICalendar(fileContent: Object | string): void;
    isSlotAvailable(startTime: Object | Object, endTime?: Object, groupIndex?: number): boolean;
    openEditor(data: Object, action: Object, isEventData?: boolean, repeatType?: number): void;
    openQuickInfoPopup(data: Object): void;
    print(printOptions?: Object): void;
    refreshEvents(isRemoteRefresh: boolean): void;
    refreshLayout(): void;
    refreshTemplates(templateName?: string): void;
    removeResource(resourceId: string | string[] | number | number[], name: string): void;
    resetWorkHours(dates: Object[], start?: string, end?: string, groupIndex?: number): void;
    saveEvent(data: Object | Object[], currentAction?: Object): void;
    scrollTo(hour: string, scrollDate?: Object): void;
    scrollToResource(resourceId: string | number, groupName?: string): void;
    selectResourceByIndex(groupIndex: number): void;
    setRecurrenceEditor(recurrenceEditor: Object): void;
    setResourceCollections(resourceCol: Object[]): void;
    setWorkHours(dates: Object[], start: string, end: string, groupIndex?: number): void;
    showSpinner(): void;
}
export declare const SchedulePlugin: {
    name: string;
    install(Vue: any): void;
};
