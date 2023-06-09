import { IPivotValues, IDataOptions, IFieldOptions, IFilter, ISort, IFormatSettings } from './engine';
import { IDrillOptions, IGroupSettings, FieldItemInfo } from './engine';
import { ICalculatedFieldSettings, IGridValues, IAxisSet } from './engine';
import { PivotView, PivotViewModel } from '../pivotview';
import { PivotFieldList, PivotFieldListModel } from '../pivotfieldlist';
import { IOlapField } from './olap/engine';
import { HeadersSortEventArgs } from '../common/base/interface';
/**
 * This is a file to perform common utility for OLAP and Relational datasource
 * @hidden
 */
export declare class PivotUtil {
    static getType(value: any): string;
    static resetTime(date: Date): Date;
    static getClonedData(data: {
        [key: string]: Object;
    }[]): {
        [key: string]: Object;
    }[];
    private static getDefinedObj;
    static inArray(value: Object, collection: Object[]): number;
    static setPivotProperties(control: any, properties: any): void;
    static getClonedDataSourceSettings(dataSourceSettings: IDataOptions): IDataOptions;
    static updateDataSourceSettings(control: PivotView | PivotFieldList, dataSourceSettings: IDataOptions): void;
    static cloneFieldSettings(collection: IFieldOptions[]): IFieldOptions[];
    static cloneOlapFieldSettings(collection: IOlapField[]): IOlapField[];
    static cloneFilterSettings(collection: IFilter[]): IFilter[];
    private static cloneSortSettings;
    static cloneDrillMemberSettings(collection: IDrillOptions[]): IDrillOptions[];
    static cloneFormatSettings(collection: IFormatSettings[]): IFormatSettings[];
    private static CloneValueSortObject;
    private static CloneAuthenticationObject;
    static cloneCalculatedFieldSettings(collection: ICalculatedFieldSettings[]): ICalculatedFieldSettings[];
    private static cloneConditionalFormattingSettings;
    static cloneGroupSettings(collection: IGroupSettings[]): IGroupSettings[];
    private static cloneCustomGroups;
    static getFilterItemByName(fieldName: string, fields: IFilter[]): IFilter;
    static getFieldByName(fieldName: string, fields: IFieldOptions[] | ISort[] | IFormatSettings[] | IDrillOptions[] | IGroupSettings[] | ICalculatedFieldSettings[]): IFieldOptions | ISort | IFormatSettings | IDrillOptions | IGroupSettings | ICalculatedFieldSettings;
    static getFieldInfo(fieldName: string, control: PivotView | PivotFieldList, hasAllField?: boolean): FieldItemInfo;
    static isButtonIconRefesh(prop: string, oldProp: PivotViewModel | PivotFieldListModel, newProp: PivotViewModel | PivotFieldListModel): boolean;
    static formatPivotValues(pivotValues: any): any;
    static formatFieldList(fieldList: any): any;
    static frameContent(pivotValues: IPivotValues, type: string, rowPosition: number, control: PivotView | PivotFieldList): IGridValues;
    static getLocalizedObject(control: PivotView | PivotFieldList): Object;
    static updateReport(control: PivotView | PivotFieldList, report: any): void;
    static generateUUID(): string;
    /** @hidden */
    static applyCustomSort(sortDetails: HeadersSortEventArgs, sortMembersOrder: IAxisSet[], type: string | boolean, hasMembersOrder?: boolean, isOlap?: boolean): IAxisSet[];
    /** @hidden */
    static applyHeadersSort(sortMembersOrder: IAxisSet[], sortOrder: string, type: string | boolean): IAxisSet[];
}
