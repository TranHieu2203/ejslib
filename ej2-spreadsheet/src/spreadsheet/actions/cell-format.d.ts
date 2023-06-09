import { Spreadsheet } from '../../spreadsheet/index';
/**
 * CellFormat module allows to format the cell styles.
 */
export declare class CellFormat {
    private parent;
    private checkHeight;
    constructor(parent: Spreadsheet);
    private applyCellFormat;
    private updateRowHeight;
    private updateMergeBorder;
    private setLeftBorder;
    private setTopBorder;
    private setThickBorderHeight;
    private getBorderSize;
    private clearObj;
    private addEventListener;
    private removeEventListener;
    /**
     * Destroy cell format module.
     *
     * @returns {void} - Destroy cell format module.
     */
    destroy(): void;
    /**
     * Get the cell format module name.
     *
     * @returns {string} - Get the cell format module name.
     */
    getModuleName(): string;
}
