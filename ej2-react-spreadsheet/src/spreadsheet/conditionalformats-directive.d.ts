import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ConditionalFormatModel } from '@syncfusion/ej2-spreadsheet';
/**
 * `ConditionalFormatDirective` represent a conditionalformat of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <ConditionalFormatsDirective>
 *    <ConditionalFormatDirective dataSource={data}></ConditionalFormatDirective>
 *    </ConditionalFormatsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
export declare class ConditionalFormatDirective extends ComplexBase<ConditionalFormatModel & {
    children?: React.ReactNode;
}, ConditionalFormatModel> {
    static moduleName: string;
}
export declare class ConditionalFormatsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
