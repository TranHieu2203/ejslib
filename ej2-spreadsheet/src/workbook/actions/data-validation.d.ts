import { Workbook } from '../base/index';
/**
 * The `WorkbookHyperlink` module is used to handle Hyperlink action in Spreadsheet.
 */
export declare class WorkbookDataValidation {
    private parent;
    /**
     * Constructor for WorkbookSort module.
     *
     * @param {Workbook} parent - Specifies the parent element.
     */
    constructor(parent: Workbook);
    /**
     * To destroy the sort module.
     *
     * @returns {void}
     */
    protected destroy(): void;
    private addEventListener;
    private removeEventListener;
    private validationHandler;
    private addHighlightHandler;
    private removeHighlightHandler;
    private getRange;
    private InvalidDataHandler;
    private beforeInsertDeleteHandler;
    private getRangeWhenColumnSelected;
    private updateValidationForInsertedModel;
    /**
     * Gets the module name.
     *
     * @returns {string} string
     */
    protected getModuleName(): string;
}
