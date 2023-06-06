import { Component, INotifyPropertyChanged, EmitType } from '@syncfusion/ej2-base';
import { ModuleDeclaration } from '@syncfusion/ej2-base';
import { WorkbookModel } from './workbook-model';
import { SheetModel, CellModel, ColumnModel, RowModel, RangeModel } from './index';
import { OpenOptions, BeforeOpenEventArgs, OpenFailureArgs } from '../../spreadsheet/common/interface';
import { BorderType } from '../common/index';
import { CellStyleModel, DefineNameModel, HyperlinkModel } from '../common/index';
import { ModelType, ProtectSettingsModel, ValidationModel } from '../common/index';
import { BeforeSaveEventArgs, SaveCompleteEventArgs, BeforeCellFormatArgs } from '../common/interface';
import { SaveOptions, ClearOptions, AutoFillDirection, AutoFillType } from '../common/index';
import { SortOptions, SortEventArgs, FindOptions, CellInfoEventArgs, ConditionalFormatModel } from '../common/index';
import { FilterEventArgs, FilterOptions, ChartModel } from '../common/index';
import { MergeType, ImageModel, FilterCollectionModel, SortCollectionModel } from '../common/index';
import { InsertDeleteEventArgs } from '../index';
import { ServiceLocator } from '../services/index';
import { BeforeCellUpdateArgs } from '../common/index';
import { AutoFillSettingsModel } from '../..';
/**
 * Represents the Workbook.
 */
export declare class Workbook extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Configures sheets and its options.
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      sheets: [{
     *                  name: 'First Sheet',
     *                  range: [{ dataSource: data }],
     *                  rows: [{
     *                          index: 5,
     *                          cells: [{ index: 4, value: 'Total Amount:' },
     *                                  { formula: '=SUM(F2:F30)', style: { fontWeight: 'bold' } }]
     *                  }]
     *              }, {
     *                  name: 'Second Sheet',
     *                  columns: [{ width: 180 }, { index: 4, width: 130 }]
     *              }]
     * ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @default []
     */
    sheets: SheetModel[];
    /**
     * Specifies active sheet index in workbook.
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      activeSheetIndex: 2
     * ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @default 0
     * @asptype int
     */
    activeSheetIndex: number;
    /**
     * Defines the height of the Spreadsheet. It accepts height as pixels, number, and percentage.
     *
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      height: '550px'
     * ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @default '100%'
     */
    height: string | number;
    /**
     * It allows to enable/disable find and replace with its functionalities.
     *
     * @default true
     */
    allowFindAndReplace: boolean;
    /**
     * It stores the filtered range collection.
     *
     * @hidden
     */
    filterCollection: FilterCollectionModel[];
    /**
     * It stores the filtered range collection.
     *
     * @hidden
     */
    sortCollection: SortCollectionModel[];
    /** @hidden */
    isEdit: boolean;
    /**
     * Defines the width of the Spreadsheet. It accepts width as pixels, number, and percentage.
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      width: '550px'
     * ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @default '100%'
     */
    width: string | number;
    /**
     * It shows or hides the ribbon in spreadsheet.
     *
     * @default true
     */
    showRibbon: boolean;
    /**
     * It shows or hides the formula bar and its features.
     *
     * @default true
     */
    showFormulaBar: boolean;
    /**
     * It shows or hides the sheets tabs, this is used to navigate among the sheets and create or delete sheets by UI interaction.
     *
     * @default true
     */
    showSheetTabs: boolean;
    /**
     * It allows you to add new data or update existing cell data. If it is false, it will act as read only mode.
     *
     * @default true
     */
    allowEditing: boolean;
    /**
     * It allows you to open an Excel file (.xlsx, .xls, and .csv) in Spreadsheet.
     *
     * @default true
     */
    allowOpen: boolean;
    /**
     * It allows you to save Spreadsheet with all data as Excel file (.xlsx, .xls, and .csv).
     *
     * @default true
     */
    allowSave: boolean;
    /**
     * It allows to enable/disable sort and its functionalities.
     *
     * @default true
     */
    allowSorting: boolean;
    /**
     * It allows to enable/disable filter and its functionalities.
     *
     * @default true
     */
    allowFiltering: boolean;
    /**
     * It allows formatting a raw number into different types of formats (number, currency, accounting, percentage, short date,
     * long date, time, fraction, scientific, and text) with built-in format codes.
     *
     * @default true
     */
    allowNumberFormatting: boolean;
    /**
     * It allows you to apply styles (font size, font weight, font family, fill color, and more) to the spreadsheet cells.
     *
     * @default true
     */
    allowCellFormatting: boolean;
    /**
     * It allows to enable/disable Hyperlink and its functionalities.
     *
     * @default true
     */
    allowHyperlink: boolean;
    /**
     * It allows you to insert rows, columns and sheets in to the spreadsheet.
     *
     * @default true
     */
    allowInsert: boolean;
    /**
     * It allows you to delete rows, columns and sheets from spreadsheet.
     *
     * @default true
     */
    allowDelete: boolean;
    /**
     * It allows you to merge the range of cells.
     *
     * @default true
     */
    allowMerge: boolean;
    /**
     * It allows you to apply validation to the spreadsheet cells.
     *
     * @default true
     */
    allowDataValidation: boolean;
    /**
     * It allows you to insert the image in spreadsheet.
     *
     * @default true
     */
    allowImage: boolean;
    /**
     * It allows you to insert the chart in spreadsheet.
     *
     * @default true
     */
    allowChart: boolean;
    /**
     * It allows to enable/disable AutoFill functionalities.
     *
     * @default true
     */
    allowAutoFill: boolean;
    /**
     * Configures the auto fill settings.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      autoFillSettings: {
     *          fillType: 'FillSeries',
     *          showFillOptions: true
     *      }
     * ...
     * }, '#Spreadsheet');
     *
     * The autoFillSettings `fillType` property has FOUR values and it is described below:
     *
     * * CopyCells: To update the copied cells of the selected range.
     * * FillSeries: To update the filled series of the selected range.
     * * FillFormattingOnly: To fill the formats only for the selected range.
     * * FillWithoutFormatting: To fill without the format of the selected range.
     *
     * ```
     *
     * @default { fillType: 'FillSeries', showFillOptions: true }
     */
    autoFillSettings: AutoFillSettingsModel;
    /**
     * It allows you to apply conditional formatting to the sheet.
     *
     * @default true
     */
    allowConditionalFormat: boolean;
    /**
     * Specifies the cell style options.
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      ...
     *          cellStyle: { fontWeight: 'bold', fontSize: 12,
     *              fontStyle: 'italic', textIndent: '2pt'
     *              backgroundColor: '#4b5366', color: '#ffffff'
     *      },
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @default {}
     */
    cellStyle: CellStyleModel;
    /**
     * Specifies the service URL to open excel file in spreadsheet.
     *
     * @default ''
     */
    openUrl: string;
    /**
     * Specifies the service URL to save spreadsheet as Excel file.
     *
     * @default ''
     */
    saveUrl: string;
    /**
     * Specifies the password.
     *
     * @default ''
     */
    password: string;
    /**
     * Specifies to  protect the workbook.
     *
     * @default false
     */
    isProtected: boolean;
    /**
     * Specifies the name for a range and uses it in formula for calculation.
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      ...
     *      definedNames: [{ name: 'namedRange1', refersTo: 'Sheet1!A1:B5' }],
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @default []
     */
    definedNames: DefineNameModel[];
    /**
     * Triggers before opening an Excel file.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *       beforeOpen: (args: BeforeOpenEventArgs) => {
     *       }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event beforeOpen
     */
    beforeOpen: EmitType<BeforeOpenEventArgs>;
    /**
     * Triggers when the opened Excel file fails to load.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *       openFailure: (args: OpenFailureArgs) => {
     *       }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event openFailure
     */
    openFailure: EmitType<OpenFailureArgs>;
    /**
     * Triggers before saving the Spreadsheet as Excel file.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *       beforeSave: (args: BeforeSaveEventArgs) => {
     *       }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event beforeSave
     */
    beforeSave: EmitType<BeforeSaveEventArgs>;
    /**
     * Triggers after saving the Spreadsheet as Excel file.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *       saveComplete: (args: SaveCompleteEventArgs) => {
     *       }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event saveComplete
     */
    saveComplete: EmitType<SaveCompleteEventArgs>;
    /**
     * Triggers before the cell format applied to the cell.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *       beforeCellFormat: (args: BeforeCellFormatArgs) => {
     *       }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event beforeCellFormat
     */
    beforeCellFormat: EmitType<BeforeCellFormatArgs>;
    /**
     * Triggered every time a request is made to access cell information.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * new Spreadsheet({
     *      queryCellInfo: (args: CellInfoEventArgs) => {
     *      }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event queryCellInfo
     */
    queryCellInfo: EmitType<CellInfoEventArgs>;
    /**
     * Triggers before changing any cell properties.
     * ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     *  new Spreadsheet({
     *      beforeCellUpdate: (args: BeforeCellUpdateArgs) => {
     *      }
     *      ...
     *  }, '#Spreadsheet');
     * ```
     *
     * @event beforeCellUpdate
     */
    beforeCellUpdate: EmitType<BeforeCellUpdateArgs>;
    /**
     * It allows to enable/disable freeze pane functionality in spreadsheet.
     *
     * @default true
     */
    allowFreezePane: boolean;
    /** @hidden */
    commonCellStyle: CellStyleModel;
    /**
     * To generate sheet name based on sheet count.
     *
     * @hidden
     */
    sheetNameCount: number;
    /** @hidden */
    serviceLocator: ServiceLocator;
    /**
     * @hidden
     */
    dataValidationRange: string;
    /**
     * @hidden
     */
    isOpen: boolean;
    /**
     * @hidden
     */
    chartColl: ChartModel[];
    /**
     * @hidden
     */
    chartCount: number;
    /** @hidden */
    formulaRefCell: string;
    /**
     * Constructor for initializing the library.
     *
     * @param {WorkbookModel} options - Configures Workbook model.
     */
    constructor(options: WorkbookModel);
    /**
     * For internal use only.
     *
     * @returns {void} - For internal use only.
     * @hidden
     */
    protected preRender(): void;
    private initWorkbookServices;
    /**
     * For internal use only.
     *
     * @returns {void} - For internal use only.
     * @hidden
     */
    protected render(): void;
    /**
     * To provide the array of modules needed for workbook.
     *
     * @returns {ModuleDeclaration[]} - To provide the array of modules needed for workbook.
     * @hidden
     */
    requiredModules(): ModuleDeclaration[];
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Get the properties to be maintained in the persisted state.
     * @hidden
     */
    getPersistData(): string;
    /**
     * Applies the style (font family, font weight, background color, etc...) to the specified range of cells.
     *
     * {% codeBlock src='spreadsheet/cellFormat/index.md' %}{% endcodeBlock %}
     *
     * @param {CellStyleModel} style - Specifies the cell style.
     * @param {string} range - Specifies the address for the range of cells.
     * @returns {void} - Applies the style (font family, font weight, background color, etc...) to the specified range of cells.
     */
    cellFormat(style: CellStyleModel, range?: string): void;
    /**
     * Applies cell lock to the specified range of cells.
     *
     * {% codeBlock src='spreadsheet/lockCells/index.md' %}{% endcodeBlock %}
     *
     * @param {string} range - Specifies the address for the range of cells.
     * @param {boolean} isLocked -Specifies the cell is locked or not.
     * @returns {void} - To Applies cell lock to the specified range of cells.
     */
    lockCells(range?: string, isLocked?: boolean): void;
    /**
     * @hidden
     * @param {Workbook} cssProps - Specifies the cssProps.
     * @param {number[]} indexes - Specifies the indexes.
     * @returns {CellStyleModel} - To get Cell Style Value.
     */
    getCellStyleValue(cssProps: string[], indexes: number[]): CellStyleModel;
    /**
     * Applies the number format (number, currency, percentage, short date, etc...) to the specified range of cells.
     *
     * {% codeBlock src='spreadsheet/numberFormat/index.md' %}{% endcodeBlock %}
     *
     * @param {string} format - Specifies the number format code.
     * @param {string} range - Specifies the address for the range of cells.
     * @returns {void} - Applies the number format (number, currency, percentage, short date, etc...) to the specified range of cells.
     */
    numberFormat(format: string, range?: string): void;
    /**
     * Used to create new sheet.
     *
     * @hidden
     * @param {number} index - Specifies the index.
     * @param {SheetModel[]} sheets - Specifies the sheets.
     * @returns {void} - To create new sheet.
     */
    createSheet(index?: number, sheets?: SheetModel[]): void;
    /**
     * Used to remove sheet.
     *
     * @hidden
     * @param  {number} idx - Specifies the index.
     * @returns {void} - To remove sheet
     */
    removeSheet(idx: number): void;
    /**
     * Destroys the Workbook library.
     *
     * @returns {void} - To destroy sheet
     */
    destroy(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @param {WorkbookModel} newProp - To set the properties
     * @param {WorkbookModel} oldProp - To get the properties
     * @returns {void} - property value changed
     * @hidden
     */
    onPropertyChanged(newProp: WorkbookModel, oldProp: WorkbookModel): void;
    /**
     * Not applicable for workbook.
     *
     * @hidden
     * @param {string | HTMLElement} selector - Specifies the selector.
     * @returns {void} - To append the element.
     */
    appendTo(selector: string | HTMLElement): void;
    /**
     * Used to hide/show the rows in spreadsheet.
     *
     * @param {number} startIndex - Specifies the start row index.
     * @param {number} endIndex - Specifies the end row index.
     * @param {boolean} hide - To hide/show the rows in specified range.
     * @returns {void} - To hide/show the rows in spreadsheet.
     */
    hideRow(startIndex: number, endIndex?: number, hide?: boolean): void;
    /**
     * Used to hide/show the columns in spreadsheet.
     *
     * @param {number} startIndex - Specifies the start column index.
     * @param {number} endIndex - Specifies the end column index.
     * @param {boolean} hide - Set `true` / `false` to hide / show the columns.
     * @returns {void} - To hide/show the columns in spreadsheet.
     */
    hideColumn(startIndex: number, endIndex?: number, hide?: boolean): void;
    /**
     * Sets the border to specified range of cells.
     *
     * {% codeBlock src='spreadsheet/setBorder/index.md' %}{% endcodeBlock %}
     *
     * @param {CellStyleModel} style - Specifies the style property which contains border value.
     * @param {string} range - Specifies the range of cell reference. If not specified, it will considered the active cell reference.
     * @param {BorderType} type - Specifies the range of cell reference. If not specified, it will considered the active cell reference.
     * @returns {void} - To Sets the border to specified range of cells.
     */
    setBorder(style: CellStyleModel, range?: string, type?: BorderType): void;
    /**
     * Used to insert rows in to the spreadsheet.
     *
     * {% codeBlock src='spreadsheet/insertRow/index.md' %}{% endcodeBlock %}
     *
     * @param {number | RowModel[]} startRow - Specifies the start row index / row model which needs to be inserted.
     * @param {number} endRow - Specifies the end row index.
     * @param {number | string} sheet - Specifies the sheet name or index in which the insert operation will perform. By default,
     * active sheet will be considered.
     * @returns {void} - To insert rows in to the spreadsheet.
     */
    insertRow(startRow?: number | RowModel[], endRow?: number, sheet?: number | string): void;
    /**
     * Used to insert columns in to the spreadsheet.
     *
     * {% codeBlock src='spreadsheet/insertColumn/index.md' %}{% endcodeBlock %}
     *
     * @param {number | ColumnModel[]} startColumn - Specifies the start column index / column model which needs to be inserted.
     * @param {number} endColumn - Specifies the end column index.
     * @param {number | string} sheet - Specifies the sheet name or index in which the insert operation will perform. By default,
     * active sheet will be considered.
     * @returns {void} - To insert columns in to the spreadsheet.
     */
    insertColumn(startColumn?: number | ColumnModel[], endColumn?: number, sheet?: number | string): void;
    /**
     * Used to insert sheets in to the spreadsheet.
     *
     * {% codeBlock src='spreadsheet/insertSheet/index.md' %}{% endcodeBlock %}
     *
     * @param {number | SheetModel[]} startSheet - Specifies the start sheet index / sheet model which needs to be inserted.
     * @param {number} endSheet - Specifies the end sheet index.
     * @returns {void} - To insert sheets in to the spreadsheet.
     */
    insertSheet(startSheet?: number | SheetModel[], endSheet?: number): void;
    /**
     * Used to delete rows, columns and sheets from the spreadsheet.
     *
     * {% codeBlock src='spreadsheet/delete/index.md' %}{% endcodeBlock %}
     *
     * @param {number} startIndex - Specifies the start sheet / row / column index.
     * @param {number} endIndex - Specifies the end sheet / row / column index.
     * @param {ModelType} model - Specifies the delete model type. By default, the model is considered as `Sheet`. The possible values are,
     * - Row: To delete rows.
     * - Column: To delete columns.
     * - Sheet: To delete sheets.
     * @param {number | string} sheet - Specifies the sheet name or index in which the delete operation will perform. By default,
     * active sheet will be considered. It is applicable only for model type Row and Column.
     * @returns {void} - To delete rows, columns and sheets from the spreadsheet.
     */
    delete(startIndex?: number, endIndex?: number, model?: ModelType, sheet?: number | string): void;
    /**
     * Used to move the sheets to the specified position in the list of sheets.
     *
     * {% codeBlock src='spreadsheet/moveSheet/index.md' %}{% endcodeBlock %}
     *
     * @param {number} position - Specifies the position to move a sheet in the list of sheets.
     * @param {number[]} sheetIndexes - Specifies the indexes of the sheet to be moved. By default, the active sheet will be moved.
     * @returns {void} - Used to move the sheets to the specified position in the list of sheets.
     */
    moveSheet(position: number, sheetIndexes?: number[]): void;
    /**
     * Used to make a duplicate/copy of the sheet in the spreadsheet.
     *
     * {% codeBlock src='spreadsheet/duplicateSheet/index.md' %}{% endcodeBlock %}
     *
     * @param {number} sheetIndex - Specifies the index of the sheet to be duplicated. By default, the active sheet will be duplicated.
     * @returns {void} - Used to make a duplicate/copy of the sheet in the spreadsheet.
     */
    duplicateSheet(sheetIndex?: number): void;
    private getSheetModel;
    /**
     * Used to merge the range of cells.
     *
     * {% codeBlock src='spreadsheet/merge/index.md' %}{% endcodeBlock %}
     *
     * @param {string} range - Specifies the range of cells as address.
     * @param {MergeType} type - Specifies the merge type. The possible values are,
     * - All: Merge all the cells between provided range.
     * - Horizontally: Merge the cells row-wise.
     * - Vertically: Merge the cells column-wise.
     * @returns {void} - To merge the range of cells.
     */
    merge(range?: string, type?: MergeType): void;
    /**
     * Used to split the merged cell into multiple cells.
     *
     * {% codeBlock src='spreadsheet/unMerge/index.md' %}{% endcodeBlock %}
     *
     * @param {string} range - Specifies the range of cells as address.
     * @returns {void} - To split the merged cell into multiple cells.
     */
    unMerge(range?: string): void;
    /** Used to compute the specified expression/formula.
     *
     * {% codeBlock src='spreadsheet/computeExpression/index.md' %}{% endcodeBlock %}
     *
     * @param {string} formula - Specifies the formula(=SUM(A1:A3)) or expression(2+3).
     * @returns {string | number} - to compute the specified expression/formula.
     */
    computeExpression(formula: string): string | number;
    private initEmptySheet;
    /** @hidden
     * @returns {SheetModel} - To get Active Sheet.
     */
    getActiveSheet(): SheetModel;
    /** @hidden
     * @param {number} index - Specifies the index.
     * @param {number} initIdx - Specifies the initIdx.
     * @param {number} hiddenCount - Specifies the initIdx.
     * @returns {number} - To skip Hidden Sheets.
     */
    skipHiddenSheets(index: number, initIdx?: number, hiddenCount?: number): number;
    /**
     * Used for setting the used range row and column index.
     *
     * @hidden
     * @param {number} rowIdx - Specifies the rowIndex.
     * @param {number} colIdx - Specifies the colIndex.
     * @param {SheetModel} sheet - Specifies the active sheet.
     * @param {boolean} preventRowColUpdate - To prevent updating row and column count.
     * @param {boolean} forceUpdate - To force updating row and column count.
     * @returns {void} - To setting the used range row and column index.
     */
    setUsedRange(rowIdx: number, colIdx: number, sheet?: SheetModel, preventRowColUpdate?: boolean, forceUpdate?: boolean): void;
    /**
     * Gets the range of data as JSON from the specified address.
     *
     * {% codeBlock src='spreadsheet/getData/index.md' %}{% endcodeBlock %}
     *
     * @param {string} address - Specifies the address for range of cells.
     * @returns {Promise<Map<string, CellModel>>} - Gets the range of data as JSON from the specified address.
     */
    getData(address: string): Promise<Map<string, CellModel>>;
    /**
     * Get component name.
     *
     * @returns {string} - Gets the module name.
     * @hidden
     */
    getModuleName(): string;
    /** @hidden
     * @param {string} address - Specifies the sheet id.
     * @returns {void} - To set the value for row and col.
     */
    goTo(address?: string): void;
    /** @hidden
     * @param {number} sheetId - Specifies the sheet id.
     * @param {number} rowIndex - Specifies the rowIndex.
     * @param {number} colIndex - Specifies the colIndex.
     * @param {string} formulaCellReference - Specifies the formulaCellReference.
     * @param {boolean} refresh - Specifies the refresh.
     * @returns {string | number} - To set the value for row and col.
     */
    getValueRowCol(sheetId: number, rowIndex: number, colIndex: number, formulaCellReference?: string, refresh?: boolean, isUnique?: boolean): string | number;
    /** @hidden
     * @param {number} sheetId - Specifies the sheet id.
     * @param {string | number} value - Specifies the value.
     * @param {number} rowIndex - Specifies the rowIndex.
     * @param {number} colIndex - Specifies the colIndex.
     * @param {string} formula - Specifies the colIndex.
     * @returns {void} - To set the value for row and col.
     */
    setValueRowCol(sheetId: number, value: string | number, rowIndex: number, colIndex: number, formula?: string): void;
    /**
     * Opens the specified excel file or stream.
     *
     * @param {OpenOptions} options - Options for opening the excel file.
     * @returns {void} - Opens the specified excel file or stream.
     */
    open(options: OpenOptions): void;
    /**
     * Opens the specified JSON object.
     *
     * {% codeBlock src='spreadsheet/openFromJson/index.md' %}{% endcodeBlock %}
     *
     * The available arguments in options are:
     * * file: Specifies the spreadsheet model as object or string. And the object contains the jsonObject,
     * which is saved from spreadsheet using saveAsJson method.
     *
     * @param {Object} options - Options for opening the JSON object.
     * @param {string | object} options.file - Options for opening the JSON object.
     * @returns {void} - Opens the specified JSON object.
     */
    openFromJson(options: {
        file: string | object;
    }): void;
    /**
     * Saves the Spreadsheet data to Excel file.
     *
     * {% codeBlock src='spreadsheet/save/index.md' %}{% endcodeBlock %}
     *
     * The available arguments in saveOptions are:
     * * url: Specifies the save URL.
     * * fileName: Specifies the file name.
     * * saveType: Specifies the file type need to be saved.
     *
     * @param {SaveOptions} saveOptions - Options for saving the excel file.
     * @returns {void} - To Saves the Spreadsheet data to Excel file.
     */
    save(saveOptions?: SaveOptions): void;
    /**
     * Saves the Spreadsheet data as JSON object.
     *
     * {% codeBlock src='spreadsheet/saveAsJson/index.md' %}{% endcodeBlock %}
     *
     * @returns {Promise<object>} - To Saves the Spreadsheet data as JSON object.
     */
    saveAsJson(): Promise<object>;
    addHyperlink(hyperlink: string | HyperlinkModel, cellAddress: string): void;
    /**
     * To find the specified cell value.
     *
     * @hidden
     * @param {FindOptions} args - options for find.
     * {% codeBlock src='spreadsheet/findHandler/index.md' %}{% endcodeBlock %}
     * @returns {void} - To find the specified cell value.
     */
    findHandler(args: FindOptions): void;
    /**
     * @hidden
     * @param {FindOptions} args - Specifies the FindOptions.
     * @returns {void} - To replace the value.
     */
    replaceHandler(args: FindOptions): void;
    /**
     * Protect the active sheet based on the protect sheetings.
     *
     * @param {number} sheet - Specifies the sheet to protect.
     * @param {ProtectSettingsModel} protectSettings - Specifies the protect settings of the sheet.
     * @param {string} password - Specifies the password to protect
     * @returns {void} - protect the active sheet.
     */
    protectSheet(sheet?: number | string, protectSettings?: ProtectSettingsModel, password?: string): void;
    /**
     * Unprotect the active sheet.
     *
     * @param {number} sheet - Specifies the sheet to Unprotect.
     * @returns {void} - Unprotect the active sheet.
     */
    unprotectSheet(sheet: number): void;
    /**
     * Sorts the range of cells in the active Spreadsheet.
     *
     * @param {SortOptions} sortOptions - options for sorting.
     * @param {string} range - address of the data range.
     * @returns {Promise<SortEventArgs>} - Sorts the range of cells in the active Spreadsheet.
     */
    sort(sortOptions?: SortOptions, range?: string): Promise<SortEventArgs>;
    addDataValidation(rules: ValidationModel, range?: string): void;
    removeDataValidation(range?: string): void;
    addInvalidHighlight(range: string): void;
    removeInvalidHighlight(range: string): void;
    /**
     * To determine whether the cell value in a data validation applied cell is valid or not.
     *
     * @param {string} cellAddress - Address of the cell.
     * @returns {boolean} - It return true if the cell value is valid; otherwise, false.
     */
    isValidCell(cellAddress?: string): boolean;
    conditionalFormat(conditionalFormat: ConditionalFormatModel): void;
    clearConditionalFormat(range: string): void;
    /**
     * To update a cell properties.
     *
     * @param {CellModel} cell - Cell properties.
     * @param {string} address - Address to update.
     * @returns {void} - To update a cell properties
     * {% codeBlock src='spreadsheet/updateCell/index.md' %}{% endcodeBlock %}
     */
    updateCell(cell: CellModel, address?: string): void;
    /**
     * Used to get a row data from the data source with updated cell value.
     *
     * {% codeBlock src='spreadsheet/getRowData/index.md' %}{% endcodeBlock %}
     *
     * @param {number} index - Specifies the row index.
     * @param {number} sheetIndex - Specifies the sheet index. By default, it consider the active sheet index.
     * @returns {Object[]} - Return row data.
     */
    getRowData(index?: number, sheetIndex?: number): Object[];
    /**
     * This method is used to update the Range property in specified sheetIndex.
     *
     * @param {RangeModel} range - Specifies the range properties to update.
     * @param {number} sheetIdx - Specifies the sheetIdx to update.
     * @returns {void} - To update a range properties.
     */
    updateRange(range: RangeModel, sheetIdx?: number): void;
    /**
     * This method is used to wrap/unwrap the text content of the cell.
     *
     * {% codeBlock src='spreadsheet/wrap/index.md' %}{% endcodeBlock %}
     *
     * @param {string} address - Address of the cell to be wrapped.
     * @param {boolean} wrap - Set `false` if the text content of the cell to be unwrapped.
     * @returns {void} - To wrap/unwrap the text content of the cell.
     * {% codeBlock src='spreadsheet/wrap/index.md' %}{% endcodeBlock %}
     */
    wrap(address: string, wrap?: boolean): void;
    /**
     * Adds the defined name to the Spreadsheet.
     *
     * @param {DefineNameModel} definedName - Specifies the name.
     * @returns {boolean} - Return the added status of the defined name.
     * {% codeBlock src='spreadsheet/addDefinedName/index.md' %}{% endcodeBlock %}
     */
    addDefinedName(definedName: DefineNameModel): boolean;
    /**
     * Removes the defined name from the Spreadsheet.
     *
     * @param {string} definedName - Specifies the name.
     * @param {string} scope - Specifies the scope of the defined name.
     * @returns {boolean} - Return the removed status of the defined name.
     * {% codeBlock src='spreadsheet/removeDefinedName/index.md' %}{% endcodeBlock %}
     */
    removeDefinedName(definedName: string, scope?: string): boolean;
    /** @hidden
     * @param {string} address - Specifies the address.
     * @param {number} sheetIndex - Specifies the sheetIndex.
     * @param {boolean} valueOnly - Specifies the bool value.
     * @returns {void} - To clear range.
     */
    clearRange(address?: string, sheetIndex?: number, valueOnly?: boolean): void;
    /**
     * Used to set the image in spreadsheet.
     *
     * @param {ImageModel} images - Specifies the options to insert image in spreadsheet.
     * @param {string} range - Specifies the range in spreadsheet.
     * @returns {void} - To set the image in spreadsheet.
     */
    insertImage(images: ImageModel[], range?: string): void;
    /**
     * Used to perform autofill action based on the specified range in spreadsheet.
     *
     * @param {string} fillRange - Specifies the fill range.
     * @param {string} dataRange - Specifies the data range.
     * @param {AutoFillDirection} direction - Specifies the direction("Down","Right","Up","Left") to be filled.
     * @param {AutoFillType} fillType - Specifies the fill type("FillSeries","CopyCells","FillFormattingOnly","FillWithoutFormatting") for autofill action.
     * @returns {void} - To perform autofill action based on the specified range in spreadsheet.
     */
    autoFill(fillRange: string, dataRange?: string, direction?: AutoFillDirection, fillType?: AutoFillType): void;
    /**
     * Used to set the chart in spreadsheet.
     *
     * {% codeBlock src='spreadsheet/insertChart/index.md' %}{% endcodeBlock %}
     *
     * @param {ChartModel} chart - Specifies the options to insert chart in spreadsheet
     * @returns {void} - To set the chart in spreadsheet.
     */
    insertChart(chart?: ChartModel[]): void;
    /**
     * Used to delete the chart from spreadsheet.
     *
     * {% codeBlock src='spreadsheet/deleteChart/index.md' %}{% endcodeBlock %}
     *
     * @param {string} id - Specifies the chart element id.
     * @returns {void} - To delete the chart from spreadsheet.
     */
    deleteChart(id?: string): void;
    /**
     * Filters the range of cells in the sheet.
     *
     * @param {FilterOptions} filterOptions - Specifies the filterOptions
     * @param {string} range - Specifies the range
     * @returns {Promise<FilterEventArgs>} - To Filters the range of cells in the sheet.
     */
    filter(filterOptions?: FilterOptions, range?: string): Promise<FilterEventArgs>;
    /**
     * To add custom library function.
     *
     * @param {string} functionHandler - Custom function handler name
     * @param {string} functionName - Custom function name
     * {% codeBlock src='spreadsheet/addCustomFunction/index.md' %}{% endcodeBlock %}
     * @returns {void} - To add custom library function.
     */
    addCustomFunction(functionHandler: string | Function, functionName?: string): void;
    /**
     * This method is used to Clear contents, formats and hyperlinks in spreadsheet.
     *
     * @param {ClearOptions} options - Options for clearing the content, formats and hyperlinks in spreadsheet.
     * @returns {void} - To Clear contents, formats and hyperlinks.
     */
    clear(options: ClearOptions): void;
    /**
     * Gets the formatted text of the cell.
     *
     * {% codeBlock src='spreadsheet/getDisplayText/index.md' %}{% endcodeBlock %}
     *
     * @param {CellModel} cell - Specifies the cell.
     * @returns {string} - To get Display Text.
     */
    getDisplayText(cell: CellModel): string;
    /**
     * This method is used to freeze rows and columns after the specified cell in the Spreadsheet.
     *
     * @param {number} row - Specifies the freezed row count.
     * @param {number} column - Specifies the freezed column count.
     * @param {number | string} sheet - Specifies the sheet name or index in which the freeze operation will perform. By default,
     * active sheet will be considered.
     * {% codeBlock src='spreadsheet/freezePanes/index.md' %}{% endcodeBlock %}
     * @returns {void}
     */
    freezePanes(row?: number, column?: number, sheet?: number | string): void;
    /**
     * This method is used to unfreeze the frozen rows and columns from the active sheet.
     *
     * @param {number | string} sheet - Specifies the sheet name or index in which the unfreeze operation will perform. By default,
     * active sheet will be considered.
     * {% codeBlock src='spreadsheet/unfreezePanes/index.md' %}{% endcodeBlock %}
     * @returns {void}
     * @deprecated This method is deprecated, use `unfreezePanes` method to unfreeze the frozen rows and columns.
     */
    Unfreeze(sheet?: number | string): void;
    /**
     * This method is used to unfreeze the frozen rows and columns from spreadsheet.
     *
     * @param {number | string} sheet - Specifies the sheet name or index in which the unfreeze operation will perform. By default,
     * active sheet will be considered.
     * {% codeBlock src='spreadsheet/unfreezePanes/index.md' %}{% endcodeBlock %}
     * @returns {void}
     */
    unfreezePanes(sheet?: number | string): void;
    /**
     * @param {number} top - Specifies the top.
     * @param {number} left - Specifies the fleft.
     * @param {string} model - Specifies the model.
     * @param {SheetModel} sheet - Specifies the sheet.
     * @returns {void}
     * @hidden
     */
    updateTopLeftCell(top?: number, left?: number, model?: string, sheet?: SheetModel): void;
    /**
     * @hidden
     * @param {string} address - Specifies the address.
     * @returns {number | number[]} - To get address info.
     */
    getAddressInfo(address: string): {
        sheetIndex: number;
        indices: number[];
    };
    /**
     * @hidden
     * @param {SheetModel} sheet - Specifies the sheet.
     * @param {string} prop - Specifies the prop.
     * @param {Object} value - Specifies the value.
     * @returns {void} - To set sheet properties.
     */
    setSheetPropertyOnMute(sheet: SheetModel, prop: string, value: Object): void;
    /**
     * To get frozen row count from top index.
     *
     * @hidden
     * @param {SheetModel} sheet - Specifies the sheet.
     * @returns {number} - to get the frozen count.
     */
    frozenRowCount(sheet: SheetModel): number;
    /**
     * To get frozen column count from left index.
     *
     * @hidden
     * @param {SheetModel} sheet - Specifies the sheet.
     * @returns {number} - to get the frozen count.
     */
    frozenColCount(sheet: SheetModel): number;
    /**
     * To update the provided range while inserting or deleting rows and columns.
     *
     * @param {InsertDeleteEventArgs} args - Insert / Detele event arguments.
     * @param {number[]} index - Existing range.
     * @returns {boolean} - It return `true`, if the insert / delete action happens between the provided range, otherwise `false`.
     * @hidden
     */
    updateRangeOnInsertDelete(args: InsertDeleteEventArgs, index: number[]): boolean;
    /**
     * Used in calculate to compute integer value of date
     */
    private dateToInt;
    /**
     * Used to update format from calculate.
     */
    private setDateFormat;
}
