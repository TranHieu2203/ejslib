import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { Schedule, Day, Week, WorkWeek, Month, Year, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop, ExcelExport, ICalendarExport, ICalendarImport, Print, RecurrenceEditor } from '@syncfusion/ej2-schedule';
export * from '@syncfusion/ej2-schedule';
import { CommonModule } from '@angular/common';

let input$2 = ['allowVirtualScrolling', 'cellHeaderTemplate', 'cellTemplate', 'dateFormat', 'dateHeaderTemplate', 'dayHeaderTemplate', 'displayDate', 'displayName', 'endHour', 'eventTemplate', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'interval', 'isSelected', 'monthHeaderTemplate', 'monthsCount', 'numberOfWeeks', 'option', 'orientation', 'readonly', 'resourceHeaderTemplate', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'workDays'];
let outputs$4 = [];
/**
 * `e-views` directive represent a view of the Angular Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
class ViewDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$2;
    }
}
ViewDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ViewDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ViewDirective, selector: "e-views>e-view", inputs: { allowVirtualScrolling: "allowVirtualScrolling", cellHeaderTemplate: "cellHeaderTemplate", cellTemplate: "cellTemplate", dateFormat: "dateFormat", dateHeaderTemplate: "dateHeaderTemplate", dayHeaderTemplate: "dayHeaderTemplate", displayDate: "displayDate", displayName: "displayName", endHour: "endHour", eventTemplate: "eventTemplate", firstDayOfWeek: "firstDayOfWeek", firstMonthOfYear: "firstMonthOfYear", group: "group", headerIndentTemplate: "headerIndentTemplate", headerRows: "headerRows", interval: "interval", isSelected: "isSelected", monthHeaderTemplate: "monthHeaderTemplate", monthsCount: "monthsCount", numberOfWeeks: "numberOfWeeks", option: "option", orientation: "orientation", readonly: "readonly", resourceHeaderTemplate: "resourceHeaderTemplate", showWeekNumber: "showWeekNumber", showWeekend: "showWeekend", startHour: "startHour", timeFormat: "timeFormat", timeScale: "timeScale", workDays: "workDays" }, queries: [{ propertyName: "dateHeaderTemplate", first: true, predicate: ["dateHeaderTemplate"], descendants: true }, { propertyName: "dayHeaderTemplate", first: true, predicate: ["dayHeaderTemplate"], descendants: true }, { propertyName: "cellHeaderTemplate", first: true, predicate: ["cellHeaderTemplate"], descendants: true }, { propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true }, { propertyName: "eventTemplate", first: true, predicate: ["eventTemplate"], descendants: true }, { propertyName: "monthHeaderTemplate", first: true, predicate: ["monthHeaderTemplate"], descendants: true }, { propertyName: "resourceHeaderTemplate", first: true, predicate: ["resourceHeaderTemplate"], descendants: true }, { propertyName: "headerIndentTemplate", first: true, predicate: ["headerIndentTemplate"], descendants: true }, { propertyName: "timeScale_minorSlotTemplate", first: true, predicate: ["timeScaleMinorSlotTemplate"], descendants: true }, { propertyName: "timeScale_majorSlotTemplate", first: true, predicate: ["timeScaleMajorSlotTemplate"], descendants: true }, { propertyName: "group_headerTooltipTemplate", first: true, predicate: ["groupHeaderTooltipTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ViewDirective.prototype, "dateHeaderTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "dayHeaderTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "cellHeaderTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "cellTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "eventTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "monthHeaderTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "resourceHeaderTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "headerIndentTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate([
    Template()
], ViewDirective.prototype, "group_headerTooltipTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-views>e-view',
                    inputs: input$2,
                    outputs: outputs$4,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { dateHeaderTemplate: [{
                type: ContentChild,
                args: ['dateHeaderTemplate']
            }], dayHeaderTemplate: [{
                type: ContentChild,
                args: ['dayHeaderTemplate']
            }], cellHeaderTemplate: [{
                type: ContentChild,
                args: ['cellHeaderTemplate']
            }], cellTemplate: [{
                type: ContentChild,
                args: ['cellTemplate']
            }], eventTemplate: [{
                type: ContentChild,
                args: ['eventTemplate']
            }], monthHeaderTemplate: [{
                type: ContentChild,
                args: ['monthHeaderTemplate']
            }], resourceHeaderTemplate: [{
                type: ContentChild,
                args: ['resourceHeaderTemplate']
            }], headerIndentTemplate: [{
                type: ContentChild,
                args: ['headerIndentTemplate']
            }], timeScale_minorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMinorSlotTemplate']
            }], timeScale_majorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMajorSlotTemplate']
            }], group_headerTooltipTemplate: [{
                type: ContentChild,
                args: ['groupHeaderTooltipTemplate']
            }] } });
/**
 * View Array Directive
 * @private
 */
class ViewsDirective extends ArrayBase {
    constructor() {
        super('views');
    }
}
ViewsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ViewsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ViewsDirective, selector: "ejs-schedule>e-views", queries: [{ propertyName: "children", predicate: ViewDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-schedule>e-views',
                    queries: {
                        children: new ContentChildren(ViewDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['allowMultiple', 'colorField', 'cssClassField', 'dataSource', 'endHourField', 'expandedField', 'field', 'groupIDField', 'idField', 'name', 'query', 'startHourField', 'textField', 'title', 'workDaysField'];
let outputs$3 = [];
/**
 * `e-resources` directive represent a resources of the Angular Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
class ResourceDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$1;
    }
}
ResourceDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResourceDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ResourceDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ResourceDirective, selector: "e-resources>e-resource", inputs: { allowMultiple: "allowMultiple", colorField: "colorField", cssClassField: "cssClassField", dataSource: "dataSource", endHourField: "endHourField", expandedField: "expandedField", field: "field", groupIDField: "groupIDField", idField: "idField", name: "name", query: "query", startHourField: "startHourField", textField: "textField", title: "title", workDaysField: "workDaysField" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResourceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-resources>e-resource',
                    inputs: input$1,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Resource Array Directive
 * @private
 */
class ResourcesDirective extends ArrayBase {
    constructor() {
        super('resources');
    }
}
ResourcesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResourcesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ResourcesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ResourcesDirective, selector: "ejs-schedule>e-resources", queries: [{ propertyName: "children", predicate: ResourceDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResourcesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-schedule>e-resources',
                    queries: {
                        children: new ContentChildren(ResourceDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['option', 'template'];
let outputs$2 = [];
/**
 * `e-header-rows` directive represent a header rows of the Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
class HeaderRowDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input;
    }
}
HeaderRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeaderRowDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
HeaderRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: HeaderRowDirective, selector: "e-header-rows>e-header-row", inputs: { option: "option", template: "template" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], HeaderRowDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeaderRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-header-rows>e-header-row',
                    inputs: input,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * HeaderRow Array Directive
 * @private
 */
class HeaderRowsDirective extends ArrayBase {
    constructor() {
        super('headerrows');
    }
}
HeaderRowsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeaderRowsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
HeaderRowsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: HeaderRowsDirective, selector: "ejs-schedule>e-header-rows", queries: [{ propertyName: "children", predicate: HeaderRowDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeaderRowsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-schedule>e-header-rows',
                    queries: {
                        children: new ContentChildren(HeaderRowDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['agendaDaysCount', 'allowDragAndDrop', 'allowInline', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiDrag', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'dayHeaderTemplate', 'editorTemplate', 'enableAdaptiveUI', 'enableAllDayScroll', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'monthHeaderTemplate', 'monthsCount', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'timezone', 'timezoneDataSource', 'views', 'weekRule', 'width', 'workDays', 'workHours'];
const outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select', 'currentViewChange', 'selectedDateChange'];
const twoWays$1 = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
let ScheduleComponent = class ScheduleComponent extends Schedule {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['views', 'resources', 'headerRows'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ScheduleDay');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleWorkWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleMonthAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineViews');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleDragAndDrop');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleICalendarExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleICalendarImport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('SchedulePrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childViews;
        if (this.childResources) {
            this.tagObjects[1].instance = this.childResources;
        }
        if (this.childHeaderRows) {
            this.tagObjects[2].instance = this.childHeaderRows;
        }
        this.context.ngAfterContentChecked(this);
    }
};
ScheduleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ScheduleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ScheduleComponent, selector: "ejs-schedule", inputs: { agendaDaysCount: "agendaDaysCount", allowDragAndDrop: "allowDragAndDrop", allowInline: "allowInline", allowKeyboardInteraction: "allowKeyboardInteraction", allowMultiCellSelection: "allowMultiCellSelection", allowMultiDrag: "allowMultiDrag", allowMultiRowSelection: "allowMultiRowSelection", allowResizing: "allowResizing", calendarMode: "calendarMode", cellHeaderTemplate: "cellHeaderTemplate", cellTemplate: "cellTemplate", cssClass: "cssClass", currentView: "currentView", dateFormat: "dateFormat", dateHeaderTemplate: "dateHeaderTemplate", dayHeaderTemplate: "dayHeaderTemplate", editorTemplate: "editorTemplate", enableAdaptiveUI: "enableAdaptiveUI", enableAllDayScroll: "enableAllDayScroll", enablePersistence: "enablePersistence", enableRecurrenceValidation: "enableRecurrenceValidation", enableRtl: "enableRtl", endHour: "endHour", eventDragArea: "eventDragArea", eventSettings: "eventSettings", firstDayOfWeek: "firstDayOfWeek", firstMonthOfYear: "firstMonthOfYear", group: "group", headerIndentTemplate: "headerIndentTemplate", headerRows: "headerRows", height: "height", hideEmptyAgendaDays: "hideEmptyAgendaDays", locale: "locale", maxDate: "maxDate", minDate: "minDate", monthHeaderTemplate: "monthHeaderTemplate", monthsCount: "monthsCount", quickInfoOnSelectionEnd: "quickInfoOnSelectionEnd", quickInfoTemplates: "quickInfoTemplates", readonly: "readonly", resourceHeaderTemplate: "resourceHeaderTemplate", resources: "resources", rowAutoHeight: "rowAutoHeight", selectedDate: "selectedDate", showHeaderBar: "showHeaderBar", showQuickInfo: "showQuickInfo", showTimeIndicator: "showTimeIndicator", showWeekNumber: "showWeekNumber", showWeekend: "showWeekend", startHour: "startHour", timeFormat: "timeFormat", timeScale: "timeScale", timezone: "timezone", timezoneDataSource: "timezoneDataSource", views: "views", weekRule: "weekRule", width: "width", workDays: "workDays", workHours: "workHours" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", cellClick: "cellClick", cellDoubleClick: "cellDoubleClick", created: "created", dataBinding: "dataBinding", dataBound: "dataBound", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", eventClick: "eventClick", eventRendered: "eventRendered", hover: "hover", moreEventsClick: "moreEventsClick", navigating: "navigating", popupClose: "popupClose", popupOpen: "popupOpen", renderCell: "renderCell", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", select: "select", currentViewChange: "currentViewChange", selectedDateChange: "selectedDateChange" }, queries: [{ propertyName: "dateHeaderTemplate", first: true, predicate: ["dateHeaderTemplate"], descendants: true }, { propertyName: "dayHeaderTemplate", first: true, predicate: ["dayHeaderTemplate"], descendants: true }, { propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true }, { propertyName: "cellHeaderTemplate", first: true, predicate: ["cellHeaderTemplate"], descendants: true }, { propertyName: "eventSettings_tooltipTemplate", first: true, predicate: ["eventSettingsTooltipTemplate"], descendants: true }, { propertyName: "eventSettings_template", first: true, predicate: ["eventSettingsTemplate"], descendants: true }, { propertyName: "editorTemplate", first: true, predicate: ["editorTemplate"], descendants: true }, { propertyName: "monthHeaderTemplate", first: true, predicate: ["monthHeaderTemplate"], descendants: true }, { propertyName: "timeScale_minorSlotTemplate", first: true, predicate: ["timeScaleMinorSlotTemplate"], descendants: true }, { propertyName: "timeScale_majorSlotTemplate", first: true, predicate: ["timeScaleMajorSlotTemplate"], descendants: true }, { propertyName: "resourceHeaderTemplate", first: true, predicate: ["resourceHeaderTemplate"], descendants: true }, { propertyName: "headerIndentTemplate", first: true, predicate: ["headerIndentTemplate"], descendants: true }, { propertyName: "quickInfoTemplates_header", first: true, predicate: ["quickInfoTemplatesHeader"], descendants: true }, { propertyName: "quickInfoTemplates_content", first: true, predicate: ["quickInfoTemplatesContent"], descendants: true }, { propertyName: "quickInfoTemplates_footer", first: true, predicate: ["quickInfoTemplatesFooter"], descendants: true }, { propertyName: "group_headerTooltipTemplate", first: true, predicate: ["groupHeaderTooltipTemplate"], descendants: true }, { propertyName: "childViews", first: true, predicate: ViewsDirective, descendants: true }, { propertyName: "childResources", first: true, predicate: ResourcesDirective, descendants: true }, { propertyName: "childHeaderRows", first: true, predicate: HeaderRowsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ScheduleComponent.prototype, "dateHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "dayHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "cellTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "cellHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "eventSettings_tooltipTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "eventSettings_template", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "editorTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "monthHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "resourceHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "headerIndentTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_header", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_content", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_footer", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "group_headerTooltipTemplate", void 0);
ScheduleComponent = __decorate([
    ComponentMixins([ComponentBase])
], ScheduleComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-schedule',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childViews: new ContentChild(ViewsDirective),
                        childResources: new ContentChild(ResourcesDirective),
                        childHeaderRows: new ContentChild(HeaderRowsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { dateHeaderTemplate: [{
                type: ContentChild,
                args: ['dateHeaderTemplate']
            }], dayHeaderTemplate: [{
                type: ContentChild,
                args: ['dayHeaderTemplate']
            }], cellTemplate: [{
                type: ContentChild,
                args: ['cellTemplate']
            }], cellHeaderTemplate: [{
                type: ContentChild,
                args: ['cellHeaderTemplate']
            }], eventSettings_tooltipTemplate: [{
                type: ContentChild,
                args: ['eventSettingsTooltipTemplate']
            }], eventSettings_template: [{
                type: ContentChild,
                args: ['eventSettingsTemplate']
            }], editorTemplate: [{
                type: ContentChild,
                args: ['editorTemplate']
            }], monthHeaderTemplate: [{
                type: ContentChild,
                args: ['monthHeaderTemplate']
            }], timeScale_minorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMinorSlotTemplate']
            }], timeScale_majorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMajorSlotTemplate']
            }], resourceHeaderTemplate: [{
                type: ContentChild,
                args: ['resourceHeaderTemplate']
            }], headerIndentTemplate: [{
                type: ContentChild,
                args: ['headerIndentTemplate']
            }], quickInfoTemplates_header: [{
                type: ContentChild,
                args: ['quickInfoTemplatesHeader']
            }], quickInfoTemplates_content: [{
                type: ContentChild,
                args: ['quickInfoTemplatesContent']
            }], quickInfoTemplates_footer: [{
                type: ContentChild,
                args: ['quickInfoTemplatesFooter']
            }], group_headerTooltipTemplate: [{
                type: ContentChild,
                args: ['groupHeaderTooltipTemplate']
            }] } });

/**
 * NgModule definition for the Schedule component.
 */
class ScheduleModule {
}
ScheduleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleModule, declarations: [ScheduleComponent,
        ViewDirective,
        ViewsDirective,
        ResourceDirective,
        ResourcesDirective,
        HeaderRowDirective,
        HeaderRowsDirective], imports: [CommonModule], exports: [ScheduleComponent,
        ViewDirective,
        ViewsDirective,
        ResourceDirective,
        ResourcesDirective,
        HeaderRowDirective,
        HeaderRowsDirective] });
ScheduleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ScheduleComponent,
                        ViewDirective,
                        ViewsDirective,
                        ResourceDirective,
                        ResourcesDirective,
                        HeaderRowDirective,
                        HeaderRowsDirective
                    ],
                    exports: [
                        ScheduleComponent,
                        ViewDirective,
                        ViewsDirective,
                        ResourceDirective,
                        ResourcesDirective,
                        HeaderRowDirective,
                        HeaderRowsDirective
                    ]
                }]
        }] });

const DayService = { provide: 'ScheduleDay', useValue: Day };
const WeekService = { provide: 'ScheduleWeek', useValue: Week };
const WorkWeekService = { provide: 'ScheduleWorkWeek', useValue: WorkWeek };
const MonthService = { provide: 'ScheduleMonth', useValue: Month };
const YearService = { provide: 'ScheduleYear', useValue: Year };
const AgendaService = { provide: 'ScheduleAgenda', useValue: Agenda };
const MonthAgendaService = { provide: 'ScheduleMonthAgenda', useValue: MonthAgenda };
const TimelineViewsService = { provide: 'ScheduleTimelineViews', useValue: TimelineViews };
const TimelineMonthService = { provide: 'ScheduleTimelineMonth', useValue: TimelineMonth };
const TimelineYearService = { provide: 'ScheduleTimelineYear', useValue: TimelineYear };
const ResizeService = { provide: 'ScheduleResize', useValue: Resize };
const DragAndDropService = { provide: 'ScheduleDragAndDrop', useValue: DragAndDrop };
const ExcelExportService = { provide: 'ScheduleExcelExport', useValue: ExcelExport };
const ICalendarExportService = { provide: 'ScheduleICalendarExport', useValue: ICalendarExport };
const ICalendarImportService = { provide: 'ScheduleICalendarImport', useValue: ICalendarImport };
const PrintService = { provide: 'SchedulePrint', useValue: Print };
/**
 * NgModule definition for the Schedule component with providers.
 */
class ScheduleAllModule {
}
ScheduleAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, imports: [CommonModule, ScheduleModule], exports: [ScheduleModule] });
ScheduleAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        YearService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,
        TimelineYearService,
        ResizeService,
        DragAndDropService,
        ExcelExportService,
        ICalendarExportService,
        ICalendarImportService,
        PrintService
    ], imports: [[CommonModule, ScheduleModule], ScheduleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ScheduleModule],
                    exports: [
                        ScheduleModule
                    ],
                    providers: [
                        DayService,
                        WeekService,
                        WorkWeekService,
                        MonthService,
                        YearService,
                        AgendaService,
                        MonthAgendaService,
                        TimelineViewsService,
                        TimelineMonthService,
                        TimelineYearService,
                        ResizeService,
                        DragAndDropService,
                        ExcelExportService,
                        ICalendarExportService,
                        ICalendarImportService,
                        PrintService
                    ]
                }]
        }] });

const inputs = ['calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value'];
const outputs = ['change'];
const twoWays = [];
/**
 * `ejs-recurrenceeditor` represents the Angular RecurrenceEditor Component.
 * ```html
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
let RecurrenceEditorComponent = class RecurrenceEditorComponent extends RecurrenceEditor {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
RecurrenceEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
RecurrenceEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: RecurrenceEditorComponent, selector: "ejs-recurrenceeditor", inputs: { calendarMode: "calendarMode", cssClass: "cssClass", dateFormat: "dateFormat", enablePersistence: "enablePersistence", enableRtl: "enableRtl", firstDayOfWeek: "firstDayOfWeek", frequencies: "frequencies", locale: "locale", maxDate: "maxDate", minDate: "minDate", selectedType: "selectedType", startDate: "startDate", value: "value" }, outputs: { change: "change" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
RecurrenceEditorComponent = __decorate([
    ComponentMixins([ComponentBase])
], RecurrenceEditorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-recurrenceeditor',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the RecurrenceEditor component.
 */
class RecurrenceEditorModule {
}
RecurrenceEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RecurrenceEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorModule, declarations: [RecurrenceEditorComponent], imports: [CommonModule], exports: [RecurrenceEditorComponent] });
RecurrenceEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        RecurrenceEditorComponent
                    ],
                    exports: [
                        RecurrenceEditorComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the RecurrenceEditor component with providers.
 */
class RecurrenceEditorAllModule {
}
RecurrenceEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RecurrenceEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorAllModule, imports: [CommonModule, RecurrenceEditorModule], exports: [RecurrenceEditorModule] });
RecurrenceEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorAllModule, providers: [], imports: [[CommonModule, RecurrenceEditorModule], RecurrenceEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RecurrenceEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RecurrenceEditorModule],
                    exports: [
                        RecurrenceEditorModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AgendaService, DayService, DragAndDropService, ExcelExportService, HeaderRowDirective, HeaderRowsDirective, ICalendarExportService, ICalendarImportService, MonthAgendaService, MonthService, PrintService, RecurrenceEditorAllModule, RecurrenceEditorComponent, RecurrenceEditorModule, ResizeService, ResourceDirective, ResourcesDirective, ScheduleAllModule, ScheduleComponent, ScheduleModule, TimelineMonthService, TimelineViewsService, TimelineYearService, ViewDirective, ViewsDirective, WeekService, WorkWeekService, YearService };
//# sourceMappingURL=syncfusion-ej2-angular-schedule.mjs.map
