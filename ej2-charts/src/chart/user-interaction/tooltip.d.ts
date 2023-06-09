import { Chart } from '../chart';
import { PointData } from '../../common/utils/helper';
import { BaseTooltip } from '../../common/user-interaction/tooltip';
/**
 * `Tooltip` module is used to render the tooltip for chart series.
 */
export declare class Tooltip extends BaseTooltip {
    /**
     * Constructor for tooltip module.
     *
     * @private
     */
    constructor(chart: Chart);
    /**
     * @hidden
     */
    private addEventListener;
    private mouseUpHandler;
    private mouseLeaveHandler;
    private mouseMoveHandler;
    /**
     * Handles the long press on chart.
     *
     * @returns {boolean} false
     * @private
     */
    private longPress;
    /**
     * Renders the tooltip.
     *
     * @returns {void}
     */
    tooltip(): void;
    private findHeader;
    private findShapes;
    private renderSeriesTooltip;
    private triggerTooltipRender;
    private findMarkerHeight;
    private findData;
    private getSymbolLocation;
    private getRangeArea;
    private getWaterfallRegion;
    private getTooltipText;
    private getTemplateText;
    private findMouseValue;
    private renderGroupedTooltip;
    private triggerSharedTooltip;
    private findSharedLocation;
    private getBoxLocation;
    private parseTemplate;
    private formatPointValue;
    private getFormat;
    private getIndicatorTooltipFormat;
    removeHighlightedMarker(data: PointData[], fadeOut: boolean): void;
    /**
     * Get module name.
     */
    protected getModuleName(): string;
    /**
     * To destroy the tooltip.
     *
     * @returns {void}
     * @private
     */
    destroy(): void;
}
