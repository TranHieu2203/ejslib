import { Spreadsheet } from '../index';
/**
 * `Filter` module is used to handle the filter action in Spreadsheet.
 */
export declare class Filter {
    private parent;
    private filterRange;
    private filterCollection;
    private filterBtn;
    /**
     * Constructor for filter module.
     *
     * @param {Spreadsheet} parent - Specifies the Spreadsheet.
     */
    constructor(parent: Spreadsheet);
    /**
     * To destroy the filter module.
     *
     * @returns {void} - To destroy the filter module.
     */
    protected destroy(): void;
    private addEventListener;
    private removeEventListener;
    /**
     * Gets the module name.
     *
     * @returns {string} - Gets the module name.
     */
    protected getModuleName(): string;
    /**
     * Validates the range and returns false when invalid.
     *
     * @param {SheetModel} sheet - Specify the sheet.
     * @param {string} range - Specify the range.
     * @returns {void} - Validates the range and returns false when invalid.
     */
    private isInValidFilterRange;
    /**
     * Shows the range error alert dialog.
     *
     * @param {any} args - Specifies the args
     * @param {string} args.error - range error string.
     * @returns {void} - Shows the range error alert dialog.
     */
    private filterRangeAlertHandler;
    /**
     * Triggers before filter context menu opened and used to add sorting items.
     *
     * @param {any} args - Specifies the args
     * @param {HTMLElement} args.element - Specify the element
     * @returns {void} - Triggers before filter context menu opened and used to add sorting items.
     */
    private beforeFilterMenuOpenHandler;
    /**
     * Creates new menu item element
     *
     * @param {Element} ul - Specify the element.
     * @param {string} text - Specify the text.
     * @param {string} className - Specify the className
     * @param {string} iconCss - Specify the iconCss
     * @returns {void} - Creates new menu item element
     */
    private addMenuItem;
    /**
     * Initiates the filter UI for the selected range.
     *
     * @param {any} args - Specifies the args
     * @param {PredicateModel[]} args.predicates - Specify the predicates.
     * @param {number} args.range - Specify the range.
     * @param {Promise<FilterEventArgs>} args.promise - Spefify the promise.
     * @param {number} args.sIdx - Specify the sIdx
     * @param {boolean} args.isCut - Specify the bool value
     * @param {boolean} args.isUndoRedo - Specify the bool value
     * @param {boolean} args.isInternal - Spefify the isInternal.
     * @returns {void} - Initiates the filter UI for the selected range.
     */
    private initiateFilterUIHandler;
    /**
     * Processes the range if no filter applied.
     *
     * @param {SheetModel} sheet - Specify the sheet.
     * @param {number} sheetIdx - Specify the sheet index.
     * @param {string} filterRange - Specify the filterRange.
     * @param {boolean} preventRefresh - To prevent refreshing the filter buttons.
     * @param {boolean} useFilterRange - Specifies whether to consider filtering range or used range during filering.
     * @returns {void} - Processes the range if no filter applied.
     */
    private processRange;
    /**
     * Removes all the filter related collections for the active sheet.
     *
     * @param {number} sheetIdx - Specify the sheet index.
     * @param {boolean} isCut - Specify the bool value.
     * @param {boolean} preventRefresh - Specify the preventRefresh.
     * @param {boolean} isUndoRedo - Specify the isUndoRedo.
     * @returns {void} - Removes all the filter related collections for the active sheet.
     */
    private removeFilter;
    /**
     * Handles filtering cell value based on context menu.
     *
     * @returns {void} - Handles filtering cell value based on context menu.
     */
    private filterByCellValueHandler;
    /**
     * Creates filter buttons and renders the filter applied cells.
     *
     * @param { any} args - Specifies the args
     * @param { HTMLElement} args.td - specify the element
     * @param { number} args.rowIndex - specify the rowIndex
     * @param { number} args.colIndex - specify the colIndex
     * @param { number} args.sIdx - specify the sIdx
     * @returns {void} - Creates filter buttons and renders the filter applied cells.
     */
    private renderFilterCellHandler;
    private getFilterSortClassName;
    /**
     * Refreshes the filter header range.
     *
     * @param {number[]} filterRange - Specify the filterRange.
     * @param {boolean} remove - Specify the bool value
     * @param {number} sIdx - Specify the index.
     * @returns {void} - Refreshes the filter header range.
     */
    private refreshFilterRange;
    /**
     * Checks whether the provided cell is a filter cell.
     *
     * @param {number} sheetIdx - Specify the sheet index.
     * @param {number} rowIndex - Specify the row index
     * @param {number} colIndex - Specify the col index.
     * @returns {boolean} - Checks whether the provided cell is a filter cell.
     */
    private isFilterCell;
    /**
     * Checks whether the provided cell is in a filter range
     *
     * @param {number} sheetIdx - Specify the sheet index.
     * @param {number} rowIndex - Specify the row index
     * @param {number} colIndex - Specify the col index.
     * @returns {boolean} - Checks whether the provided cell is in a filter range
     */
    private isFilterRange;
    /**
     * Gets the filter information from active cell
     *
     * @param {any} args - Specifies the args
     * @param {string} args.field - Specify the field
     * @param {string} args.clearFilterText - Specify the clearFilterText
     * @param {boolean} args.isFiltered - Specify the isFiltered
     * @param {boolean} args.isClearAll - Specify the isClearAll
     * @returns {void} - Triggers before context menu created to enable or disable items.
     */
    private getFilteredColumnHandler;
    /**
     * Triggers before context menu created to enable or disable items.
     *
     * @param {any} e - Specifies the args
     * @param {HTMLElement} e.element - Specify the element
     * @param {MenuItemModel[]} e.items - Specify the items
     * @param {MenuItemModel} e.parentItem - Specify the parentItem
     * @param {string} e.target - Specify the target
     * @returns {void} - Triggers before context menu created to enable or disable items.
     */
    private cMenuBeforeOpenHandler;
    /**
     * Closes the filter popup.
     *
     * @returns {void} - Closes the filter popup.
     */
    private closeDialog;
    private removeFilterClass;
    /**
     * Returns true if the filter popup is opened.
     *
     * @returns {boolean} - Returns true if the filter popup is opened.
     */
    private isPopupOpened;
    private filterCellKeyDownHandler;
    private filterMouseDownHandler;
    private initTreeView;
    private generatePredicate;
    private refreshCheckbox;
    private openDialog;
    private getPredicateRange;
    private filterDialogCreatedHandler;
    /**
     * Formats cell value for listing it in filter popup.
     *
     * @param {any} args - Specifies the args
     * @param {string | number} args.value - Specify the value
     * @param {object} args.column - Specify the column
     * @param {object} args.data - Specify the data
     * @returns {void} - Formats cell value for listing it in filter popup.
     */
    private filterCboxValueHandler;
    /**
     * Triggers when sorting items are chosen on context menu of filter popup.
     *
     * @param {HTMLElement} target - Specify the element.
     * @returns {void} - Triggers when sorting items are chosen on context menu of filter popup.
     */
    private selectSortItemHandler;
    /**
     * Triggers when OK button or clear filter item is selected
     *
     * @param {DataManager} dataSource - Specify the data source
     * @param {Object} args - Specify the data source
     * @param {string} args.action - Specify the action
     * @param {PredicateModel[]} args.filterCollection - Specify the filter collection.
     * @param {string} args.field - Specify the field.
     * @param {number} args.sIdx - Specify the index.
     * @param {boolean} args.isUndoRedo - Specify the bool.
     * @param {boolean} args.isInternal - Specify the isInternal.
     * @param {boolean} args.isFilterByValue - Specify the isFilterByValue.
     * @param {PredicateModel[]} args.prevPredicates - Specify the prevPredicates.
     * @returns {void} - Triggers when OK button or clear filter item is selected
     */
    private filterSuccessHandler;
    private updatePredicate;
    /**
     * Triggers events for filtering and applies filter.
     *
     * @param {FilterOptions} filterOptions - Specify the filteroptions.
     * @param {string} range - Specify the range.
     * @param {number} sheetIdx - Specify the sheet index.
     * @param {PredicateModel[]} prevPredicates - Specify the predicates.
     * @param {boolean} isUndoRedo - Specify the undo redo.
     * @param {boolean} refresh - Spefify the refresh.
     * @param {boolean} isInternal - Specify the isInternal.
     * @returns {void} - Triggers events for filtering and applies filter.
     */
    private applyFilter;
    /**
     * Gets the predicates for the sheet
     *
     * @param {number} sheetIdx - Specify the sheetindex
     * @returns {Predicate[]} - Gets the predicates for the sheet
     */
    private getPredicates;
    /**
     * Gets the column type to pass it into the excel filter options.
     *
     * @param {SheetModel} sheet - Specify the sheet.
     * @param {number} colIndex - Specify the colindex
     * @param {number[]} range - Specify the range.
     * @returns {string} - Gets the column type to pass it into the excel filter options.
     */
    private getColumnType;
    private getDateFormatFromColumn;
    /**
     * Clear filter from the field.
     *
     * @param {any} args - Specifies the args
     * @param {{ field: string }} args.field - Specify the args
     * @param {boolean} args.isAction - Specify the isAction.
     * @param {boolean} args.preventRefresh - Specify the preventRefresh.
     * @returns {void} - Clear filter from the field.
     */
    private clearFilterHandler;
    /**
     * Reapplies the filter.
     *
     * @param {boolean} isInternal - Specifies the isInternal.
     * @param {boolean} refresh - Specifies the refresh.
     * @returns {void} - Reapplies the filter.
     */
    private reapplyFilterHandler;
    /**
     * Gets the filter information of the sheet.
     *
     * @param {FilterInfoArgs} args - Specify the args
     * @returns {void} - Gets the filter information of the sheet.
     */
    private getFilterRangeHandler;
    /**
     * Returns the custom operators for filter items.
     *
     * @returns {Object} - Returns the custom operators for filter items.
     */
    private getLocalizedCustomOperators;
    /**
     * To get filtered range and predicates collections
     *
     * @returns {void} - To get filtered range and predicates collections
     */
    private getFilteredCollection;
    private updateFilter;
    private getFilterOperator;
    private beforeInsertHandler;
    private beforeDeleteHandler;
    private deleteSheetHandler;
    private clearHandler;
    private duplicateSheetFilterHandler;
}
