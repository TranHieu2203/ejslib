import { Workbook } from '../index';
/**
 * The `WorkbookConditionalFormat` module is used to handle conditional formatting action in Spreadsheet.
 */
export declare class WorkbookConditionalFormat {
    private parent;
    /**
     * Constructor for WorkbookConditionalFormat module.
     *
     * @param {Workbook} parent - Specifies the parent element.
     */
    constructor(parent: Workbook);
    /**
     * To destroy the conditional format module.
     *
     * @returns {void}
     */
    protected destroy(): void;
    private addEventListener;
    private removeEventListener;
    private setCFRule;
    private clearCFRule;
    /**
     * Gets the module name.
     *
     * @returns {void} string
     */
    protected getModuleName(): string;
}
