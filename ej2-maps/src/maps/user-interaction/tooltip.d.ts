import { Maps } from '../index';
import { Tooltip } from '@syncfusion/ej2-svg-base';
/**
 * Map Tooltip
 */
export declare class MapsTooltip {
    private maps;
    private tooltipSettings;
    /**
     * @private
     */
    svgTooltip: Tooltip;
    private isTouch;
    private tooltipId;
    private currentTime;
    private clearTimeout;
    tooltipTargetID: string;
    constructor(maps: Maps);
    renderTooltip(e: PointerEvent): void;
    /**
     * To get content for the current toolitp
     *
     * @param {TooltipSettingsModel} options - Specifies the options for rendering tooltip
     * @param {any} templateData - Specifies the template data
     * @returns {any} - Returns the local data
     */
    private setTooltipContent;
    private formatter;
    mouseUpHandler(e: PointerEvent): void;
    removeTooltip(): boolean;
    private clearTooltip;
    /**
     * To bind events for tooltip module
     */
    addEventListener(): void;
    removeEventListener(): void;
    /**
     * Get module name.
     *
     * @returns {string} Returns the module name
     */
    protected getModuleName(): string;
    /**
     * To destroy the tooltip.
     *
     * @param {Maps} maps Specifies the maps instance
     * @returns {void}
     * @private
     */
    destroy(maps: Maps): void;
}
