import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ColumnsDirective } from './columns.directive';
import { AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { HolidaysDirective } from './holidays.directive';
import { EventMarkersDirective } from './eventmarkers.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
export declare class GanttComponent extends Gantt implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    beforeExcelExport: any;
    beforePdfExport: any;
    beforeTooltipRender: any;
    cellDeselected: any;
    cellDeselecting: any;
    cellEdit: any;
    cellSelected: any;
    cellSelecting: any;
    collapsed: any;
    collapsing: any;
    columnDrag: any;
    columnDragStart: any;
    columnDrop: any;
    columnMenuClick: any;
    columnMenuOpen: any;
    contextMenuClick: any;
    contextMenuOpen: any;
    created: any;
    dataBound: any;
    dataStateChange: any;
    destroyed: any;
    endEdit: any;
    excelExportComplete: any;
    excelHeaderQueryCellInfo: any;
    excelQueryCellInfo: any;
    expanded: any;
    expanding: any;
    headerCellInfo: any;
    load: any;
    onMouseMove: any;
    onTaskbarClick: any;
    pdfColumnHeaderQueryCellInfo: any;
    pdfExportComplete: any;
    pdfQueryCellInfo: any;
    pdfQueryTaskbarInfo: any;
    pdfQueryTimelineCellInfo: any;
    queryCellInfo: any;
    queryTaskbarInfo: any;
    recordDoubleClick: any;
    resizeStart: any;
    resizeStop: any;
    resizing: any;
    rowDataBound: any;
    rowDeselected: any;
    rowDeselecting: any;
    rowDrag: any;
    rowDragStart: any;
    rowDragStartHelper: any;
    rowDrop: any;
    rowSelected: any;
    rowSelecting: any;
    splitterResizeStart: any;
    splitterResized: any;
    splitterResizing: any;
    taskbarEdited: any;
    taskbarEditing: any;
    toolbarClick: any;
    dataSourceChange: any;
    childColumns: QueryList<ColumnsDirective>;
    childAddDialogFields: QueryList<AddDialogFieldsDirective>;
    childEditDialogFields: QueryList<EditDialogFieldsDirective>;
    childDayWorkingTime: QueryList<DayWorkingTimeCollectionDirective>;
    childHolidays: QueryList<HolidaysDirective>;
    childEventMarkers: QueryList<EventMarkersDirective>;
    tags: string[];
    /**
     * The parent task bar template that renders customized parent task bars from the given template.
     * @default null
     */
    parentTaskbarTemplate: any;
    /**
     * The milestone template that renders customized milestone task from the given template.
     * @default null
     */
    milestoneTemplate: any;
    /**
     * The task bar template that renders customized child task bars from the given template.
     * @default null
     */
    taskbarTemplate: any;
    labelSettings_rightLabel: any;
    labelSettings_leftLabel: any;
    labelSettings_taskLabel: any;
    tooltipSettings_taskbar: any;
    tooltipSettings_baseline: any;
    tooltipSettings_connectorLine: any;
    tooltipSettings_editing: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GanttComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GanttComponent, "ejs-gantt", never, { "addDialogFields": "addDialogFields"; "allowExcelExport": "allowExcelExport"; "allowFiltering": "allowFiltering"; "allowKeyboard": "allowKeyboard"; "allowPdfExport": "allowPdfExport"; "allowReordering": "allowReordering"; "allowResizing": "allowResizing"; "allowRowDragAndDrop": "allowRowDragAndDrop"; "allowSelection": "allowSelection"; "allowSorting": "allowSorting"; "allowUnscheduledTasks": "allowUnscheduledTasks"; "autoFocusTasks": "autoFocusTasks"; "baselineColor": "baselineColor"; "collapseAllParentTasks": "collapseAllParentTasks"; "columnMenuItems": "columnMenuItems"; "columns": "columns"; "connectorLineBackground": "connectorLineBackground"; "connectorLineWidth": "connectorLineWidth"; "contextMenuItems": "contextMenuItems"; "dataSource": "dataSource"; "dateFormat": "dateFormat"; "dayWorkingTime": "dayWorkingTime"; "disableHtmlEncode": "disableHtmlEncode"; "durationUnit": "durationUnit"; "editDialogFields": "editDialogFields"; "editSettings": "editSettings"; "enableContextMenu": "enableContextMenu"; "enableImmutableMode": "enableImmutableMode"; "enableMultiTaskbar": "enableMultiTaskbar"; "enablePersistence": "enablePersistence"; "enablePredecessorValidation": "enablePredecessorValidation"; "enableRtl": "enableRtl"; "enableVirtualization": "enableVirtualization"; "eventMarkers": "eventMarkers"; "filterSettings": "filterSettings"; "gridLines": "gridLines"; "height": "height"; "highlightWeekends": "highlightWeekends"; "holidays": "holidays"; "includeWeekend": "includeWeekend"; "labelSettings": "labelSettings"; "locale": "locale"; "milestoneTemplate": "milestoneTemplate"; "parentTaskbarTemplate": "parentTaskbarTemplate"; "projectEndDate": "projectEndDate"; "projectStartDate": "projectStartDate"; "query": "query"; "readOnly": "readOnly"; "renderBaseline": "renderBaseline"; "resourceFields": "resourceFields"; "resourceIDMapping": "resourceIDMapping"; "resourceNameMapping": "resourceNameMapping"; "resources": "resources"; "rowHeight": "rowHeight"; "searchSettings": "searchSettings"; "segmentData": "segmentData"; "selectedRowIndex": "selectedRowIndex"; "selectionSettings": "selectionSettings"; "showColumnMenu": "showColumnMenu"; "showInlineNotes": "showInlineNotes"; "showOverAllocation": "showOverAllocation"; "sortSettings": "sortSettings"; "splitterSettings": "splitterSettings"; "taskFields": "taskFields"; "taskMode": "taskMode"; "taskType": "taskType"; "taskbarHeight": "taskbarHeight"; "taskbarTemplate": "taskbarTemplate"; "timelineSettings": "timelineSettings"; "timezone": "timezone"; "toolbar": "toolbar"; "tooltipSettings": "tooltipSettings"; "treeColumnIndex": "treeColumnIndex"; "validateManualTasksOnLinking": "validateManualTasksOnLinking"; "viewType": "viewType"; "width": "width"; "workUnit": "workUnit"; "workWeek": "workWeek"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "actionFailure": "actionFailure"; "beforeExcelExport": "beforeExcelExport"; "beforePdfExport": "beforePdfExport"; "beforeTooltipRender": "beforeTooltipRender"; "cellDeselected": "cellDeselected"; "cellDeselecting": "cellDeselecting"; "cellEdit": "cellEdit"; "cellSelected": "cellSelected"; "cellSelecting": "cellSelecting"; "collapsed": "collapsed"; "collapsing": "collapsing"; "columnDrag": "columnDrag"; "columnDragStart": "columnDragStart"; "columnDrop": "columnDrop"; "columnMenuClick": "columnMenuClick"; "columnMenuOpen": "columnMenuOpen"; "contextMenuClick": "contextMenuClick"; "contextMenuOpen": "contextMenuOpen"; "created": "created"; "dataBound": "dataBound"; "dataStateChange": "dataStateChange"; "destroyed": "destroyed"; "endEdit": "endEdit"; "excelExportComplete": "excelExportComplete"; "excelHeaderQueryCellInfo": "excelHeaderQueryCellInfo"; "excelQueryCellInfo": "excelQueryCellInfo"; "expanded": "expanded"; "expanding": "expanding"; "headerCellInfo": "headerCellInfo"; "load": "load"; "onMouseMove": "onMouseMove"; "onTaskbarClick": "onTaskbarClick"; "pdfColumnHeaderQueryCellInfo": "pdfColumnHeaderQueryCellInfo"; "pdfExportComplete": "pdfExportComplete"; "pdfQueryCellInfo": "pdfQueryCellInfo"; "pdfQueryTaskbarInfo": "pdfQueryTaskbarInfo"; "pdfQueryTimelineCellInfo": "pdfQueryTimelineCellInfo"; "queryCellInfo": "queryCellInfo"; "queryTaskbarInfo": "queryTaskbarInfo"; "recordDoubleClick": "recordDoubleClick"; "resizeStart": "resizeStart"; "resizeStop": "resizeStop"; "resizing": "resizing"; "rowDataBound": "rowDataBound"; "rowDeselected": "rowDeselected"; "rowDeselecting": "rowDeselecting"; "rowDrag": "rowDrag"; "rowDragStart": "rowDragStart"; "rowDragStartHelper": "rowDragStartHelper"; "rowDrop": "rowDrop"; "rowSelected": "rowSelected"; "rowSelecting": "rowSelecting"; "splitterResizeStart": "splitterResizeStart"; "splitterResized": "splitterResized"; "splitterResizing": "splitterResizing"; "taskbarEdited": "taskbarEdited"; "taskbarEditing": "taskbarEditing"; "toolbarClick": "toolbarClick"; "dataSourceChange": "dataSourceChange"; }, ["parentTaskbarTemplate", "milestoneTemplate", "taskbarTemplate", "labelSettings_rightLabel", "labelSettings_leftLabel", "labelSettings_taskLabel", "tooltipSettings_taskbar", "tooltipSettings_baseline", "tooltipSettings_connectorLine", "tooltipSettings_editing", "childColumns", "childAddDialogFields", "childEditDialogFields", "childDayWorkingTime", "childHolidays", "childEventMarkers"], never>;
}
