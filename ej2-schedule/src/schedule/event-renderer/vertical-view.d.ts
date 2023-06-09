import { EventFieldsMapping, TdData } from '../base/interface';
import { Schedule } from '../base/schedule';
import { EventBase } from './event-base';
/**
 * Vertical view appointment rendering
 */
export declare class VerticalEvent extends EventBase {
    dateRender: Date[][];
    private renderedEvents;
    private renderedAllDayEvents;
    private overlapEvents;
    private moreEvents;
    private overlapList;
    private allDayEvents;
    private slotCount;
    private interval;
    allDayLevel: number;
    private startHour;
    private endHour;
    private element;
    allDayElement: HTMLElement[];
    private animation;
    fields: EventFieldsMapping;
    cellHeight: number;
    resources: TdData[];
    constructor(parent: Schedule);
    renderAppointments(): void;
    initializeValues(): void;
    getHeight(start: Date, end: Date): number;
    private appendEvent;
    private processBlockEvents;
    private renderBlockEvents;
    private renderEvents;
    private setValues;
    private getResourceList;
    createAppointmentElement(record: Record<string, any>, isAllDay: boolean, data: Record<string, any>, resource: number): HTMLElement;
    private createMoreIndicator;
    private renderSpannedIcon;
    isSpannedEvent(record: Record<string, any>, day: number, resource: number): Record<string, any>;
    renderAllDayEvents(eventObj: Record<string, any>, dayIndex: number, resource: number, dayCount: number, inline?: boolean): void;
    renderNormalEvents(eventObj: Record<string, any>, dayIndex: number, resource: number, dayCount: number, inline?: boolean): void;
    private getEventWidth;
    private getEventLeft;
    getTopValue(date: Date, day: number, resource: number): number;
    private getOverlapIndex;
    private adjustOverlapElements;
    private setAllDayRowHeight;
    private addOrRemoveClass;
    private getEventHeight;
    private rowExpandCollapse;
    private animationUiUpdate;
    destroy(): void;
}
