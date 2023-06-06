import { IBasicFormula } from '../common/index';
import { Calculate } from '../base/index';
/**
 * Represents the basic formulas module.
 */
export declare class BasicFormulas {
    private parent;
    formulas: IBasicFormula[];
    private isConcat;
    constructor(parent?: Calculate);
    private init;
    private addFormulaCollection;
    /**
     * @hidden
     * @param {string[]} args - specify the args
     * @returns {string | number} - Comput sum value
     */
    ComputeSUM(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string | number} - Compute the Integer.
     */
    ComputeINT(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {Date | string} - Compute the Today.
     */
    ComputeTODAY(...args: string[]): Date | string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {number} - Compute the day from the date.
     */
    ComputeWEEKDAY(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string} - Compute to the Proper casing.
     */
    ComputePROPER(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string | number} - Compute the Sum product.
     */
    ComputeSUMPRODUCT(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string | number} - Compute the Roundup.
     */
    ComputeROUNDUP(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {number | string} - Compute the count.
     */
    ComputeCOUNT(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {Date | string} - Compute the Date.
     */
    ComputeDATE(...args: string[]): Date | string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {number | string} - Compute the ceiling.
     */
    ComputeFLOOR(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {number | string} - Compute the ceiling.
     */
    ComputeCEILING(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} serialNumber - specify the serialNumber.
     * @returns {number | string} - Compute the DAY.
     */
    ComputeDAY(...serialNumber: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string | number} - Compute the IF value.
     */
    ComputeIF(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {number | string} - Compute the IFERROR value.
     */
    ComputeIFERROR(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the PRODUCT value.
     */
    ComputePRODUCT(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the Choose value.
     */
    ComputeDAYS(...range: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the unique.
     */
    ComputeUNIQUE(...args: string[]): number | string;
    private setValueRefresh;
    private checkSpill;
    clearDependency(value: string): void;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string} - Compute the text or null value.
     */
    ComputeT(...args: string[]): string;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the hours.
     */
    ComputeHOUR(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string} argArr - specify the args.
     * @returns {string | boolean} - Compute the hours.
     */
    ComputeMINUTE(...argArr: string[]): number | string;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the hours.
     */
    ComputeSECOND(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string} argsVal - specify the args.
     * @returns {string | boolean} - Compute the months.
     */
    ComputeMONTH(...argsVal: string[]): number | string;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string } - Compute the time and date value.
     */
    ComputeNOW(...args: string[]): string;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the exact value or not.
     */
    ComputeEXACT(...args: string[]): string | boolean;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the exact value or not.
     */
    ComputeLEN(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the remainder from the given numbers.
     */
    ComputeMOD(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the next odd number.
     */
    ComputeODD(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the next even number.
     */
    ComputeEVEN(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the value of pi.
     */
    ComputePI(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the median value.
     */
    ComputeMEDIAN(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the edate value.
     */
    ComputeEDATE(...args: string[]): Date | string;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the date value.
     */
    ComputeDATEVALUE(...args: string[]): Date | string;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the count blank value.
     */
    ComputeCOUNTBLANK(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the factorial value.
     */
    ComputeFACT(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the decimal value.
     */
    ComputeDECIMAL(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the degrees value.
     */
    ComputeDEGREES(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the cell address.
     */
    ComputeADDRESS(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the time.
     */
    ComputeTIME(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the char value.
     */
    ComputeCHAR(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the code value.
     */
    ComputeCODE(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the currency value.
     */
    ComputeDOLLAR(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the k-th smallest value.
     */
    ComputeSMALL(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string} args - specify the args.
     * @returns {string | boolean} - Compute the k-th largest value.
     */
    ComputeLARGE(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string | number} - Compute the Choose value.
     */
    ComputeCHOOSE(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the SUMIF value.
     */
    ComputeSUMIF(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} absValue - specify the absValue.
     * @returns {string | number} - Compute the AVERAGE value.
     */
    ComputeABS(...absValue: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {string} - Compute the AVERAGE value.
     */
    ComputeAVERAGE(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the AVERAGEIF value.
     */
    ComputeAVERAGEIF(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string} - Compute the CONCATENATE value.
     */
    ComputeCONCATENATE(...range: string[]): string;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string} - Compute the CONCAT value.
     */
    ComputeCONCAT(...range: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string | number} - Compute the MAX value.
     */
    ComputeMAX(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string} - Compute the MIN value.
     */
    ComputeMIN(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string} - Compute the RAND value.
     */
    ComputeRAND(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string} - Compute the AND value.
     */
    ComputeAND(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the args.
     * @returns {string} - Compute the OR value.
     */
    ComputeOR(...args: string[]): string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {string | number} - Compute the find value.
     */
    ComputeFIND(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the index.
     */
    ComputeINDEX(...range: string[]): string | number;
    private getSheetReference;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the if.
     */
    ComputeIFS(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the count.
     */
    ComputeCOUNTA(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the average.
     */
    ComputeAVERAGEA(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the count if.
     */
    ComputeSORT(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the count if.
     */
    ComputeCOUNTIF(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the sum if.
     */
    ComputeSUMIFS(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {string | number} - Compute the Text.
     */
    ComputeTEXT(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the count if.
     */
    ComputeCOUNTIFS(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {number | string} - Compute the Average if.
     */
    ComputeAVERAGEIFS(...args: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} args - specify the range.
     * @returns {string | number} - Compute the Match.
     */
    ComputeMATCH(...args: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the sub total value.
     */
    ComputeSUBTOTAL(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the Radians value.
     */
    ComputeRADIANS(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the random between value.
     */
    ComputeRANDBETWEEN(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the slope value.
     */
    ComputeSLOPE(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} range - specify the range.
     * @returns {string | number} - Compute the intercept.
     */
    ComputeINTERCEPT(...range: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {string | number} - Compute the value.
     */
    ComputeLN(...logValue: string[]): string | number;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {boolean | string} - Compute the Isnumber value.
     */
    ComputeISNUMBER(...logValue: string[]): boolean | string;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {number | string} - Compute the round value.
     */
    ComputeROUND(...logValue: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {boolean | string} - Compute the power value.
     */
    ComputePOWER(...logValue: string[]): boolean | string;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {number | string} - Compute the log value.
     */
    ComputeLOG(...logValue: string[]): number | string;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {boolean | string} - Compute the trunc value.
     */
    ComputeTRUNC(...logValue: string[]): boolean | string;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value.
     * @returns {boolean | string} - Compute the expression.
     */
    ComputeEXP(...logValue: string[]): boolean | string;
    /**
     * @hidden
     * @param {string[]} logValue - specify the log value
     * @returns {boolean | string} - compute the value.
     */
    ComputeGEOMEAN(...logValue: string[]): boolean | string;
    private getDataCollection;
    /**
     * @hidden
     * @param {string} value - specify the value
     * @returns {number} - Returns parse double value.
     */
    private parseDouble;
    /**
     * @hidden
     * @param {string} value - specify the value
     * @returns {string} - Returns spreadsheet display text.
     */
    private spreadsheetDisplayText;
    /**
     * @hidden
     * @param {string} value - specify the value
     * @returns {string} - Returns spreadsheet format.
     */
    private spreadsheetFormat;
    protected getModuleName(): string;
}
