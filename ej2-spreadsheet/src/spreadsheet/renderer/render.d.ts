import { Spreadsheet } from '../base/index';
import { RefreshArgs } from '../common/index';
/**
 * Render module is used to render the spreadsheet
 *
 * @hidden
 */
export declare class Render {
    private parent;
    constructor(parent: Spreadsheet);
    render(): void;
    private checkTopLeftCell;
    private renderSheet;
    /**
     * @hidden
     * @param {RefreshArgs} args - Specifies the RefreshArgs.
     * @param {string} address - Specifies the address.
     * @param {boolean} initLoad - Specifies the initLoad.
     * @param {boolean} isRefreshing - Specifies the isRefreshing.
     * @returns {void}
     */
    refreshUI(args: RefreshArgs, address?: string, initLoad?: boolean, isRefreshing?: boolean, preventModelCheck?: boolean): void;
    private updateTopLeftScrollPosition;
    private removeSheet;
    /**
     * Refresh the active sheet.
     *
     * @param {boolean} isOpen - Specifies the isOpen.
     * @param {boolean} resize - Set `true` to refresh the sheet with exiting scroll top and left.
     * @param {boolean} focusEle - Specify the focusEle.
     * @returns {void}
     */
    refreshSheet(isOpen?: boolean, resize?: boolean, focusEle?: boolean, preventModelCheck?: boolean): void;
    /**
     * Used to set sheet panel size.
     *
     * @returns {void}
     */
    setSheetPanelSize(): void;
    private roundValue;
    private moveOrDuplicateSheetHandler;
    decreaseHidden(startIdx: number, endIdx: number, freezeCount: number, layout?: string): number;
    /**
     * Registing the renderer related services.
     *
     * @returns {void}
     */
    private instantiateRenderer;
    /**
     * Destroy the Render module.
     *
     * @returns {void}
     */
    destroy(): void;
    private addEventListener;
    private removeEventListener;
}
