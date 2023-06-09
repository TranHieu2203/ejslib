import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RangeModel } from '@syncfusion/ej2-spreadsheet';
export interface RangeDirTypecast {
    template?: string | Function | any;
}
/**
 * `RangeDirective` represent a range of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RangesDirective>
 *    <RangeDirective dataSource={data}></RangeDirective>
 *    </RangesDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
export declare class RangeDirective extends ComplexBase<RangeModel | RangeDirTypecast & {
    children?: React.ReactNode;
}, RangeModel | RangeDirTypecast> {
    static moduleName: string;
}
export declare class RangesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
