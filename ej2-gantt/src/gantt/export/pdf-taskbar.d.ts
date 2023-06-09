import { PointF, PdfColor, PdfPage, PdfFontFamily } from '@syncfusion/ej2-pdf-export';
import { TimelineDetails, TaskLabel } from './../base/interface';
import { Gantt } from '../base/gantt';
/**
 * @hidden
 */
export declare class PdfGanttTaskbarCollection {
    endDate?: Date;
    /** Defines the duration of task. */
    duration?: number;
    /** Defines the duration unit of task. */
    durationUnit?: string;
    /** Defines the task is auto schedule-able or not. */
    isAutoSchedule?: boolean;
    /** Defines the task is milestone or not. */
    isMilestone?: boolean;
    /** Defines the left of task.
     *
     * @hidden
     */
    left?: number;
    /** Defines the progress of task. */
    progress?: number;
    /** Defines the progress width of task. */
    progressWidth?: number;
    /** Defines the start date of task. */
    startDate?: Date;
    /** Defines the id of task. */
    taskId?: string;
    /** Defines the parent id of task. */
    parentId?: string;
    /** Defines the name of task. */
    taskName?: string;
    /** Defines the width of task. */
    width?: number;
    /** Defines the unique id of task. */
    uniqueID?: string;
    /** Defines the total progress of task. */
    totalProgress?: number;
    /** Defines the total duration of task. */
    totalDuration?: number;
    /**
     * @private
     */
    unscheduledTaskBy?: string;
    /**
     * @private
     */
    unscheduleStarteDate?: Date;
    /**
     * @private
     */
    unscheduleEndDate?: Date;
    isParentTask?: boolean;
    isScheduledTask?: boolean;
    height: number;
    fontFamily: PdfFontFamily;
    gridLineColor: PdfColor;
    progressFontColor: PdfColor;
    taskColor: PdfColor;
    labelColor: PdfColor;
    taskBorderColor: PdfColor;
    progressColor: PdfColor;
    milestoneColor: PdfColor;
    taskbar: PdfGanttTaskbarCollection[];
    parent: Gantt;
    isCompleted: boolean;
    /**
     * @private
     */
    leftTaskLabel: TaskLabel;
    /**
     * @private
     */
    rightTaskLabel: TaskLabel;
    taskLabel: string;
    startPage: number;
    endPage: number;
    isStartPoint: boolean;
    taskStartPoint: PointF;
    add(): PdfGanttTaskbarCollection;
    constructor(parent?: Gantt);
    /**
     * @param {PdfPage} page .
     * @returns {PdfPage} .
     * Get the next PDF page
     */
    private GetNextPage;
    /**
     * Draw the taskbar, chart back ground
     *
     * @private
     */
    drawTaskbar(page: PdfPage, startPoint: PointF, detail: TimelineDetails, cumulativeWidth: number, rowHeight: number, taskbar: PdfGanttTaskbarCollection): boolean;
    /**
     * @param {PdfPage} page .
     * @param {PointF} startPoint .
     * @param {TimelineDetails} detail .
     * @param {number} cumulativeWidth .
     * @returns {void}
     * Draw task right side label
     */
    private drawRightLabel;
    /**
     * @param {PdfPage} page .
     * @param {PointF} startPoint .
     * @param {TimelineDetails} detail .
     * @param {number} cumulativeWidth .
     * @returns {void}
     * Draw task left task label
     */
    private drawLeftLabel;
    private getWidth;
    /**
     * @param {PdfGraphics} taskGraphics .
     * @param {PointF} startPoint .
     * @param {number} cumulativeWidth .
     * @param {number} adjustHeight .
     * @returns {void}
     * Draw Unscheduled Task
     */
    private drawUnscheduledTask;
    /**
     * @param {PdfPage} page .
     * @param {PointF} startPoint .
     * @param {TimelineDetails} detail .
     * @param {number} cumulativeWidth .
     * @returns {void}
     * Draw milestone task
     */
    private drawMilestone;
}
