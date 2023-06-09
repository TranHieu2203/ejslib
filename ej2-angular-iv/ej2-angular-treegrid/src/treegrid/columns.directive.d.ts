import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-column` directive represent a column of the Angular TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
export declare class ColumnDirective extends ComplexBase<ColumnDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the data type of the column.
     * @default null
     */
    type: any;
    /**
     * If `allowEditing` set to false, then it disables editing of a particular column.
     * By default all columns are editable.
     * @default true
     */
    allowEditing: any;
    /**
     * If `allowFiltering` set to false, then it disables filtering option and filter bar element of a particular column.
     * By default all columns are filterable.
     * @default true
     */
    allowFiltering: any;
    /**
     * If `allowReordering` set to false, then it disables reorder of a particular column.
     * By default all columns can be reorder.
     * @default true
     */
    allowReordering: any;
    /**
     * If `allowResizing` set to false, it disables resize option of a particular column.
     * @default true
     */
    allowResizing: any;
    /**
     * If `allowSorting` set to false, then it disables sorting option of a particular column.
     * By default all columns are sortable.
     * @default true
     */
    allowSorting: any;
    /**
     * Defines the cell content's overflow mode. The available modes are
     * * `Clip` -  Truncates the cell content when it overflows its area.
     * * `Ellipsis` -  Displays ellipsis when the cell content overflows its area.
     * * `EllipsisWithTooltip` - Displays ellipsis when the cell content overflows its area
     * also it will display tooltip while hover on ellipsis applied cell.
     * @default Syncfusion.EJ2.Grids.ClipMode.Ellipsis
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.ClipMode
     */
    clipMode: any;
    /**
     * Used to render multiple header rows(stacked headers) on TreeGrid header.
     * @default null
     */
    columns: any;
    /**
     * `commands` provides an option to display command buttons in every cell.
     * The available built-in command buttons are
     * * Edit - Edit the record.
     * * Delete - Delete the record.
     * * Save - Save the record.
     * * Cancel - Cancel the edit state.
     *
     * The following code example implements the custom command column.
     *```html
     *<style type="text/css" class="cssStyles">
     *.details-icon:before
     *{
     *   content:"\e74d";
     *}
     *</style>
     *<div id="TreeGrid"></div>
     *```
     *```typescript
     *var gridObj = new TreeGrid({
     *datasource: window.gridData,
     *columns : [
     * { field: 'CustomerID', headerText: 'Customer ID' },
     * { field: 'CustomerName', headerText: 'Customer Name' },
     * {commands: [{buttonOption:{content: 'Details', click: onClick, cssClass: details-icon}}], headerText: 'Customer Details'}
     *]
     *gridObj.appendTo("#TreeGrid");
     *```
     *
     * @default null
     */
    commands: any;
    /**
     * The CSS styles and attributes of the content cells of a particular column can be customized.
     * @default null
     */
    customAttributes: any;
    /**
     * Defines default values for the component when adding a new record to the TreeGrid.
     * @default null
     */
    defaultValue: any;
    /**
     * If `disableHtmlEncode` is set to true, it encodes the HTML of the header and content cells.
     * @default true
     */
    disableHtmlEncode: any;
    /**
     * If `displayAsCheckBox` is set to true, it displays the column value as a check box instead of Boolean value.
     * @default false
     */
    displayAsCheckBox: any;
    /**
     * Defines the `IEditCell` object to customize default edit cell.
     * @default {}
     */
    edit: any;
    /**
     * Defines the type of component for editing.
     * @default 'stringedit'
     */
    editType: any;
    /**
     * Defines the field name of column which is mapped with mapping name of DataSource.
     * The bounded columns can be sort, filter etc.,
     * The `field` name must be a valid JavaScript identifier,
     * the first character must be an alphabet and should not contain spaces and special characters.
     * @default 'undefined'
     */
    field: any;
    /**
     *  Defines the filter options to customize filtering for the particular column.
     *
     *  @default null
     *
     */
    filter: any;
    /**
     * The `filterBarTemplate` is used to add a custom component instead of default input component for filter bar.
     * It have create and read functions.
     * * create: It is used for creating custom components.
     * * read: It is used to perform custom filter action.
     *
     * ```html
     *<div id="TreeGrid"></div>
     *```
     *```typescript
     *let gridObj: TreeGrid = new TreeGrid({
     *dataSource: filterData,
     *columns: [
     *  { field: 'OrderID', headerText: 'Order ID' },
     *  {
     *     field: 'EmployeeID', filterBarTemplate: {
     *        create: (args: { element: Element, column: Column }) => {
     *             let input: HTMLInputElement = document.createElement('input');
     *             input.id = 'EmployeeID';
     *             input.type = 'text';
     *             return input;
     *        },
     *        write: (args: { element: Element, column: Column }) => {
     *            args.element.addEventListener('input', args.column.filterBarTemplate.read as EventListener);
     *        },
     *        read: (args: { element: HTMLInputElement, columnIndex: number, column: Column }) => {
     *            gridObj.filterByColumn(args.element.id, 'equal', args.element.value);
     *       }
     *    }
     * }],
     *  allowFiltering: true
     *});
     *gridObj.appendTo('#TreeGrid');
     *```
     *
     * @default null
     */
    filterBarTemplate: any;
    /**
     * It is used to change display value with the given format and does not affect the original data.
     * Gets the format from the user which can be standard or custom
     * [`number`](../../../common/internationalization/#supported-format-string)
     * and [`date`](../../../common/internationalization/#supported-format-string-1) formats.
     * @default null
     * @asptype string
     */
    format: any;
    /**
     * Defines the method which is used to achieve custom formatting from an external function.
     * This function triggers before rendering of each cell.
     * @default null
     */
    formatter: any;
    /**
     * Defines which side the column need to freeze
     * @default Syncfusion.EJ2.Grids.FreezeDirection.None
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.FreezeDirection
     */
    freeze: any;
    /**
     * Defines the header text of column which is used to display in column header.
     * If `headerText` is not defined, then field name value will be assigned to header text.
     * @default 'undefined'
     */
    headerText: any;
    /**
     * Define the alignment of column header which is used to align the text of column header.
     * @default null
     * @aspdefaultvalueignore
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.TextAlign
     */
    headerTextAlign: any;
    /**
     * Column visibility can change based on [`Media Queries`](http://cssmediaqueries.com/what-are-css-media-queries.html).
     * `hideAtMedia` accepts only valid Media Queries.
     * @default 'undefined'
     */
    hideAtMedia: any;
    /**
     * You can use this property to freeze selected columns in grid.
     * @default false
     */
    isFrozen: any;
    /**
     * If `isIdentity` is set to true, then this column is considered as identity column.
     * @default false
     */
    isIdentity: any;
    /**
     * If `isPrimaryKey` is set to true, considers this column as the primary key constraint.
     * @default false
     */
    isPrimaryKey: any;
    /**
     * If `lockColumn` set to true, then it disables Reordering of a particular column.
     * The locked column will be moved to first position.
     * @default false
     */
    lockColumn: any;
    /**
     * Defines the maximum width of the column in pixels or percentage, which will restrict resizing beyond this pixels or percentage.
     * @default 'undefined'
     */
    maxWidth: any;
    /**
     * Defines the minimum width of the column in pixels or percentage.
     * @default 'undefined'
     */
    minWidth: any;
    /**
     * If `showCheckbox` set to true, then the checkboxes will be displayed in particular column.
     * @default false
     */
    showCheckbox: any;
    /**
     * If `showColumnMenu` set to false, then it disable the column menu of a particular column.
     * By default column menu will show for all columns
     * @default true
     */
    showColumnMenu: any;
    /**
     * If `showInColumnChooser` set to false, then hide the particular column in column chooser.
     *  By default all columns are displayed in column Chooser.
     * @default true
     */
    showInColumnChooser: any;
    /**
     * Defines the sort comparer property.
     * @default 'undefined'
     */
    sortComparer: any;
    /**
     * Defines the alignment of the column in both header and content cells.
     * @default Syncfusion.EJ2.Grids.TextAlign.Left
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.TextAlign
     */
    textAlign: any;
    /**
     * Gets the unique identifier value of the column. It is used to get the object.
     * @default 'undefined'
     */
    uid: any;
    /**
     * Defines rules to validate data before creating and updating.
     * @default null
     */
    validationRules: any;
    /**
     * Defines the method used to apply custom cell values from external function and display this on each cell rendered.
     * @default null
     */
    valueAccessor: any;
    /**
     * If `visible` is set to false, hides the particular column. By default, columns are displayed.
     * @default true
     */
    visible: any;
    /**
     * Defines the width of the column in pixels or percentage.
     * @default 'undefined'
     */
    width: any;
    /**
     * Defines the column template that renders customized element in each cell of the column.
     * It accepts either [template string](../../../common/template-engine/) or HTML element ID.
     * @default null
     */
    template: any;
    /**
     * Defines the header template as string or HTML element ID which is used to add customized element in the column header.
     * @default null
     */
    headerTemplate: any;
    filter_itemTemplate: any;
    /**
     * Defines the filter template/UI that is used as filter for a particular column.
     * It accepts either template string or HTML element ID.
     * @aspignore
     */
    filterTemplate: any;
    commandsTemplate: any;
    /**
     * Defines the cell edit template that used as editor for a particular column.
     * It accepts either template string or HTML element ID.
     * @aspignore
     */
    editTemplate: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnDirective, "ejs-treegrid>e-columns>e-column", never, { "allowEditing": "allowEditing"; "allowFiltering": "allowFiltering"; "allowReordering": "allowReordering"; "allowResizing": "allowResizing"; "allowSorting": "allowSorting"; "clipMode": "clipMode"; "columns": "columns"; "commands": "commands"; "customAttributes": "customAttributes"; "defaultValue": "defaultValue"; "disableHtmlEncode": "disableHtmlEncode"; "displayAsCheckBox": "displayAsCheckBox"; "edit": "edit"; "editTemplate": "editTemplate"; "editType": "editType"; "field": "field"; "filter": "filter"; "filterBarTemplate": "filterBarTemplate"; "filterTemplate": "filterTemplate"; "format": "format"; "formatter": "formatter"; "freeze": "freeze"; "headerTemplate": "headerTemplate"; "headerText": "headerText"; "headerTextAlign": "headerTextAlign"; "hideAtMedia": "hideAtMedia"; "isFrozen": "isFrozen"; "isIdentity": "isIdentity"; "isPrimaryKey": "isPrimaryKey"; "lockColumn": "lockColumn"; "maxWidth": "maxWidth"; "minWidth": "minWidth"; "showCheckbox": "showCheckbox"; "showColumnMenu": "showColumnMenu"; "showInColumnChooser": "showInColumnChooser"; "sortComparer": "sortComparer"; "template": "template"; "textAlign": "textAlign"; "type": "type"; "uid": "uid"; "validationRules": "validationRules"; "valueAccessor": "valueAccessor"; "visible": "visible"; "width": "width"; }, {}, ["template", "headerTemplate", "filter_itemTemplate", "filterTemplate", "commandsTemplate", "editTemplate"]>;
}
/**
 * Column Array Directive
 * @private
 */
export declare class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnsDirective, "ejs-treegrid>e-columns", never, {}, {}, ["children"]>;
}
