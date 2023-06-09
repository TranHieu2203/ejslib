import { PivotView } from '../base/pivotview';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
/**
 * @hidden
 * `PDFExport` module is used to handle the PDF export action.
 */
export declare class PDFExport {
    private parent;
    private gridStyle;
    private engine;
    /**
     * Constructor for the PivotGrid PDF Export module.
     * @param {PivotView} parent - Instance of pivot table.
     * @hidden
     */
    constructor(parent?: PivotView);
    /**
     * For internal use only - Get the module name.
     * @returns {string} - string.
     * @private
     */
    protected getModuleName(): string;
    private addPage;
    private hexDecToRgb;
    private getFontStyle;
    private getBorderStyle;
    private getDashStyle;
    private getStyle;
    private setRecordThemeStyle;
    /**
     * Method to perform pdf export.
     * @hidden
     */
    exportToPDF(pdfExportProperties?: PdfExportProperties, isBlob?: Boolean): void;
    private applyStyle;
    private getFontFamily;
    private getFont;
    private processCellStyle;
    private applyEvent;
    /**
     * To destroy the pdf export module.
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
