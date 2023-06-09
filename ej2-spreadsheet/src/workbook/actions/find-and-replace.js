var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getCell, getSheet } from '../base/index';
import { getCellIndexes, getCellAddress, findNext, findPrevious, count, getRangeIndexes, getSheetIndexFromAddress } from '../common/index';
import { goto, replace, replaceAll, showDialog, replaceAllDialog } from '../common/index';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';
import { findAllValues, workBookeditAlert, updateCell, beginAction } from '../common/index';
/**
 * `WorkbookFindAndReplace` module is used to handle the search action in Spreadsheet.
 */
var WorkbookFindAndReplace = /** @class */ (function () {
    /**
     * Constructor for WorkbookFindAndReplace module.
     *
     * @param {Workbook} parent - Specifies the workbook.
     */
    function WorkbookFindAndReplace(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * To destroy the FindAndReplace module.
     *
     * @returns {void} - To destroy the FindAndReplace module.
     */
    WorkbookFindAndReplace.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    WorkbookFindAndReplace.prototype.addEventListener = function () {
        this.parent.on(findNext, this.findNext, this);
        this.parent.on(findPrevious, this.findPrevious, this);
        this.parent.on(replace, this.replace, this);
        this.parent.on(replaceAll, this.replaceAll, this);
        this.parent.on(count, this.totalCount, this);
        this.parent.on(findAllValues, this.findAllValues, this);
    };
    WorkbookFindAndReplace.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(findNext, this.findNext);
            this.parent.off(findPrevious, this.findPrevious);
            this.parent.off(replace, this.replace);
            this.parent.off(replaceAll, this.replaceAll);
            this.parent.off(count, this.totalCount);
            this.parent.off(findAllValues, this.findAllValues);
        }
    };
    WorkbookFindAndReplace.prototype.findNext = function (args) {
        var sheets = this.parent.sheets;
        var val;
        var sheetIndex = isUndefined(args.sheetIndex) ? this.parent.activeSheetIndex : args.sheetIndex;
        var sheet = sheets[sheetIndex];
        var activecell = getCellIndexes(sheet.activeCell);
        var usedRange = sheet.usedRange;
        var endColumn = usedRange.colIndex;
        var stringValue = args.value.toString();
        var cidx;
        var ridx;
        var count = 0;
        var endRow = usedRange.rowIndex;
        var loopCount = 0;
        var cellFormat;
        var valueOfCell;
        cidx = activecell[1];
        ridx = activecell[0];
        var startColumn = cidx;
        var startRow = ridx;
        if (sheet.rows[ridx]) {
            if (sheet.rows[ridx].cells && sheet.rows[ridx].cells[cidx]) {
                cellFormat = sheet.rows[ridx].cells[cidx].format;
                if (cellFormat) {
                    var dispTxt = this.parent.getDisplayText(sheet.rows[ridx].cells[cidx]);
                    valueOfCell = dispTxt.toString();
                }
                else {
                    if (sheet.rows[ridx].cells[cidx].value) {
                        valueOfCell = sheet.rows[ridx].cells[cidx].value.toString();
                    }
                }
            }
        }
        if (valueOfCell) {
            var lcValueOfCell = valueOfCell.toLowerCase();
            var ivalueOfCell = valueOfCell.indexOf(args.value) > -1;
            var lowerCaseIndex = lcValueOfCell.indexOf(args.value.toString().toLowerCase()) > -1;
            if ((stringValue === valueOfCell) || (stringValue === lcValueOfCell) || (ivalueOfCell) || (lowerCaseIndex)) {
                if (args.searchBy === 'By Column') {
                    ridx++;
                }
                else {
                    cidx++;
                }
                count++;
            }
        }
        if (activecell[0] > sheet.usedRange.rowIndex || activecell[1] > sheet.usedRange.colIndex) {
            if (activecell[0] > sheet.usedRange.rowIndex && activecell[1] <= sheet.usedRange.colIndex) {
                ridx = 0;
                cidx = activecell[1];
            }
            else if (activecell[0] <= sheet.usedRange.rowIndex && activecell[1] > sheet.usedRange.colIndex) {
                ridx = activecell[0];
                cidx = 0;
            }
            else {
                ridx = 0;
                cidx = 0;
            }
        }
        var findNextArgs = {
            rowIndex: ridx, colIndex: cidx, usedRange: usedRange, endRow: endRow, endColumn: endColumn, startRow: startRow,
            mode: args.mode, loopCount: loopCount, count: count, args: args, val: val, stringValue: stringValue,
            sheetIndex: sheetIndex, startColumn: startColumn, sheets: sheets
        };
        if (args.searchBy === 'By Row') {
            this.findNxtRow(findNextArgs);
        }
        if (args.searchBy === 'By Column') {
            this.findNxtCol(findNextArgs);
        }
    };
    WorkbookFindAndReplace.prototype.findNxtRow = function (findNextArgs) {
        var usedRange;
        var sheet = findNextArgs.sheets[findNextArgs.sheetIndex];
        var sheetsLen = this.parent.sheets.length;
        usedRange = sheet.usedRange;
        var activecell = getCellIndexes(sheet.activeCell);
        if (findNextArgs.colIndex >= findNextArgs.usedRange.colIndex + 1) {
            findNextArgs.colIndex = 0;
            findNextArgs.rowIndex++;
        }
        for (findNextArgs.rowIndex; findNextArgs.rowIndex <= findNextArgs.endRow + 1; findNextArgs.rowIndex++) {
            if (findNextArgs.rowIndex > findNextArgs.endRow) {
                if (findNextArgs.mode === 'Workbook') {
                    var noCellfound = this.parent.activeSheetIndex;
                    findNextArgs.sheetIndex++;
                    if (sheetsLen === findNextArgs.sheetIndex) {
                        findNextArgs.sheetIndex = 0;
                    }
                    if (noCellfound === findNextArgs.sheetIndex) {
                        if (findNextArgs.count === 0) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                    sheet = findNextArgs.sheets[findNextArgs.sheetIndex];
                    usedRange = sheet.usedRange;
                    activecell = getCellIndexes(sheet.activeCell);
                    findNextArgs.rowIndex = 0;
                    findNextArgs.colIndex = 0;
                    findNextArgs.endColumn = usedRange.colIndex;
                    findNextArgs.endRow = usedRange.rowIndex;
                }
                if (findNextArgs.colIndex === 0 && findNextArgs.rowIndex > findNextArgs.endRow) {
                    if ((activecell[0] === 0 && activecell[1] === 0)) {
                        if (findNextArgs.count === 0) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                    else if ((activecell[0] !== 0 && activecell[1] !== 0) || (activecell[0] !== 0 || activecell[1] !== 0)) {
                        findNextArgs.startColumn = 0;
                        findNextArgs.startRow = 0;
                        findNextArgs.endColumn = usedRange.colIndex;
                        findNextArgs.endRow = activecell[0];
                        findNextArgs.rowIndex = findNextArgs.startRow;
                        findNextArgs.colIndex = findNextArgs.startColumn;
                        findNextArgs.loopCount++;
                    }
                }
            }
            if (findNextArgs.count > 0) {
                if (usedRange.rowIndex < findNextArgs.rowIndex) {
                    findNextArgs.rowIndex = 0;
                    if (findNextArgs.rowIndex === 0) {
                        findNextArgs.colIndex = 0;
                    }
                }
            }
            if (sheet.rows[findNextArgs.rowIndex]) {
                var row = sheet.rows[findNextArgs.rowIndex];
                for (findNextArgs.colIndex; findNextArgs.colIndex <= findNextArgs.endColumn; findNextArgs.colIndex++) {
                    if (row) {
                        if (row.cells && row.cells[findNextArgs.colIndex]) {
                            var checkTrue = this.nextCommon(findNextArgs);
                            if (checkTrue) {
                                return;
                            }
                        }
                    }
                }
                if (findNextArgs.colIndex > findNextArgs.endColumn) {
                    findNextArgs.colIndex = 0;
                }
                if (findNextArgs.loopCount > 0) {
                    if (activecell[0] === findNextArgs.rowIndex) {
                        this.parent.notify(showDialog, null);
                        return;
                    }
                }
            }
        }
        if (findNextArgs.count === 0) {
            this.parent.notify(showDialog, null);
            return;
        }
    };
    WorkbookFindAndReplace.prototype.findNxtCol = function (findNextArgs) {
        var sheet = findNextArgs.sheets[findNextArgs.sheetIndex];
        var noFound;
        var activecell = getCellIndexes(sheet.activeCell);
        var sheetsLen = this.parent.sheets.length;
        if (findNextArgs.rowIndex >= findNextArgs.usedRange.rowIndex) {
            findNextArgs.rowIndex = 0;
            findNextArgs.colIndex++;
        }
        for (findNextArgs.colIndex; findNextArgs.colIndex <= findNextArgs.usedRange.colIndex + 1; findNextArgs.colIndex++) {
            if (findNextArgs.colIndex >= findNextArgs.endColumn + 1) {
                if (findNextArgs.mode === 'Workbook') {
                    noFound = this.parent.activeSheetIndex;
                    findNextArgs.sheetIndex++;
                    if (sheetsLen === findNextArgs.sheetIndex) {
                        findNextArgs.sheetIndex = 0;
                    }
                    if (noFound === findNextArgs.sheetIndex) {
                        if (findNextArgs.count === 0) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                    sheet = findNextArgs.sheets[findNextArgs.sheetIndex];
                    findNextArgs.usedRange = sheet.usedRange;
                    activecell = getCellIndexes(sheet.activeCell);
                    findNextArgs.colIndex = 0;
                    findNextArgs.rowIndex = 0;
                    findNextArgs.endColumn = findNextArgs.usedRange.colIndex;
                    findNextArgs.endRow = findNextArgs.usedRange.rowIndex;
                }
            }
            if (findNextArgs.colIndex >= findNextArgs.endColumn + 1) {
                findNextArgs.colIndex = 0;
            }
            if (findNextArgs.rowIndex > findNextArgs.endRow && findNextArgs.colIndex === 0) {
                if ((activecell[0] === 0 && activecell[1] === 0) ||
                    (activecell[1] > sheet.usedRange.rowIndex || activecell[0] > sheet.usedRange.colIndex)) {
                    if (findNextArgs.count === 0) {
                        this.parent.notify(showDialog, null);
                        return;
                    }
                }
                else if ((activecell[1] !== 0 || activecell[0] !== 0) || (activecell[1] !== 0 && activecell[0] !== 0)) {
                    findNextArgs.startRow = 0;
                    findNextArgs.startColumn = 0;
                    findNextArgs.endRow = activecell[0];
                    findNextArgs.endColumn = findNextArgs.usedRange.colIndex;
                    findNextArgs.colIndex = findNextArgs.startColumn;
                    findNextArgs.rowIndex = findNextArgs.startRow;
                    findNextArgs.loopCount++;
                }
            }
            if (findNextArgs.count > 0) {
                if (findNextArgs.usedRange.colIndex + 1 < findNextArgs.colIndex) {
                    findNextArgs.colIndex = 0;
                    findNextArgs.rowIndex = 0;
                }
            }
            if (findNextArgs.rowIndex >= findNextArgs.endRow) {
                findNextArgs.rowIndex = 0;
            }
            if (findNextArgs.colIndex <= findNextArgs.usedRange.colIndex) {
                for (findNextArgs.rowIndex; findNextArgs.rowIndex <= findNextArgs.usedRange.rowIndex; findNextArgs.rowIndex++) {
                    if (sheet.rows[findNextArgs.rowIndex]) {
                        if (sheet.rows[findNextArgs.rowIndex].cells && sheet.rows[findNextArgs.rowIndex].cells[findNextArgs.colIndex]) {
                            var checkTrue = this.nextCommon(findNextArgs);
                            if (checkTrue) {
                                return;
                            }
                        }
                    }
                }
                if (findNextArgs.loopCount > 0) {
                    if (activecell[1] === findNextArgs.colIndex) {
                        this.parent.notify(showDialog, null);
                        return;
                    }
                }
            }
        }
        if (findNextArgs.count === 0) {
            this.parent.notify(showDialog, null);
            return;
        }
    };
    WorkbookFindAndReplace.prototype.nextCommon = function (findNextArgs) {
        var sheet = findNextArgs.sheets[findNextArgs.sheetIndex];
        var row = sheet.rows[findNextArgs.rowIndex];
        if (row && (!row.isFiltered || !row.hidden)) {
            var rowCol = row.cells[findNextArgs.colIndex];
            if (rowCol && rowCol.value) {
                if (sheet.isProtected && (rowCol.isLocked || rowCol.isLocked === undefined) && sheet.protectSettings.selectUnLockedCells) {
                    return false;
                }
                var cellType = row.cells[findNextArgs.colIndex];
                if (cellType) {
                    var cellval = void 0;
                    if (cellType.format) {
                        var displayTxt = this.parent.getDisplayText(row.cells[findNextArgs.colIndex]);
                        cellval = displayTxt;
                    }
                    else {
                        cellval = row.cells[findNextArgs.colIndex].value.toString();
                    }
                    if (findNextArgs.args.isCSen && findNextArgs.args.isEMatch) {
                        if (cellval === findNextArgs.stringValue) {
                            var address = sheet.name + '!' + getCellAddress(findNextArgs.rowIndex, findNextArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findNextArgs.count++;
                            return true;
                        }
                    }
                    else if (findNextArgs.args.isCSen && !findNextArgs.args.isEMatch) {
                        var index = cellval.indexOf(findNextArgs.args.value) > -1;
                        if ((cellval === findNextArgs.stringValue) || (index)) {
                            var address = sheet.name + '!' + getCellAddress(findNextArgs.rowIndex, findNextArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findNextArgs.count++;
                            return true;
                        }
                    }
                    else if (!findNextArgs.args.isCSen && findNextArgs.args.isEMatch) {
                        findNextArgs.val = cellval.toString().toLowerCase();
                        if (findNextArgs.val === findNextArgs.stringValue) {
                            var address = sheet.name + '!' + getCellAddress(findNextArgs.rowIndex, findNextArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findNextArgs.count++;
                            return true;
                        }
                    }
                    else if (!findNextArgs.args.isCSen && !findNextArgs.args.isEMatch) {
                        findNextArgs.val = cellval.toString().toLowerCase();
                        var index = findNextArgs.val.indexOf(findNextArgs.args.value.toString().toLowerCase()) > -1;
                        var lowerCaseIndex = findNextArgs.val.indexOf(findNextArgs.args.value) > -1;
                        if ((findNextArgs.val === findNextArgs.stringValue) || ((cellval === findNextArgs.stringValue) || (index)) ||
                            (cellval === findNextArgs.stringValue) || (lowerCaseIndex)) {
                            var address = sheet.name + '!' + getCellAddress(findNextArgs.rowIndex, findNextArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findNextArgs.count++;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    WorkbookFindAndReplace.prototype.findPrevious = function (args) {
        var sheets = this.parent.sheets;
        var sheetIndex = args.sheetIndex;
        var sheet = sheets[sheetIndex];
        var valueOfCell;
        var cellFormat;
        var val;
        var activecell = getCellIndexes(sheet.activeCell);
        var loopCount = 0;
        var count = 0;
        var endRow = sheet.usedRange.rowIndex;
        var endColumn = sheet.usedRange.colIndex;
        var stringValue = args.value.toString();
        var cidx = activecell[1];
        var ridx = activecell[0];
        var startColumn = cidx;
        var startRow = ridx;
        if (sheet.rows[ridx]) {
            if (sheet.rows[ridx].cells[cidx]) {
                cellFormat = sheet.rows[ridx].cells[cidx].format;
                if (cellFormat) {
                    var displayTxt = this.parent.getDisplayText(sheet.rows[ridx].cells[cidx]);
                    valueOfCell = displayTxt.toString();
                }
                else {
                    if (sheet.rows[ridx].cells[cidx].value) {
                        valueOfCell = sheet.rows[ridx].cells[cidx].value.toString();
                    }
                }
            }
        }
        if (valueOfCell) {
            var lcValue = valueOfCell.toLowerCase();
            var ivalue = valueOfCell.indexOf(args.value) > -1;
            var lowerCaseIndex = lcValue.indexOf(args.value.toString().toLowerCase()) > -1;
            if ((stringValue === valueOfCell) || (stringValue === lcValue) || (ivalue) || (lowerCaseIndex)) {
                if (args.searchBy === 'By Row') {
                    cidx--;
                }
                if (args.searchBy === 'By Column') {
                    ridx--;
                }
                count++;
            }
        }
        if (activecell[0] > sheet.usedRange.rowIndex || activecell[1] > sheet.usedRange.colIndex) {
            if (activecell[0] > sheet.usedRange.rowIndex && activecell[1] <= sheet.usedRange.colIndex) {
                ridx = sheet.usedRange.rowIndex;
                cidx = activecell[1];
            }
            else if (activecell[0] <= sheet.usedRange.rowIndex && activecell[1] > sheet.usedRange.colIndex) {
                ridx = activecell[0];
                cidx = sheet.usedRange.colIndex;
            }
            else {
                ridx = sheet.usedRange.rowIndex;
                cidx = sheet.usedRange.colIndex;
            }
        }
        var findPrevArgs = {
            rowIndex: ridx, colIndex: cidx, endRow: endRow, endColumn: endColumn, startRow: startRow,
            loopCount: loopCount, count: count, args: args, val: val, stringValue: stringValue,
            sheets: sheets, sheetIndex: sheetIndex, startColumn: startColumn
        };
        if (args.searchBy === 'By Row') {
            this.findPreRow(findPrevArgs);
        }
        if (args.searchBy === 'By Column') {
            this.findPreCol(findPrevArgs);
        }
    };
    WorkbookFindAndReplace.prototype.findPreRow = function (findPrevArgs) {
        var usedRan;
        var sheet = findPrevArgs.sheets[findPrevArgs.sheetIndex];
        var sheetsLength = this.parent.sheets.length;
        var noValueBoolean = false;
        var activecell = getCellIndexes(sheet.activeCell);
        if (findPrevArgs.colIndex === -1) {
            findPrevArgs.colIndex = findPrevArgs.endColumn;
            findPrevArgs.rowIndex--;
        }
        for (findPrevArgs.rowIndex; findPrevArgs.rowIndex >= -1; findPrevArgs.rowIndex--) {
            if (findPrevArgs.rowIndex < 0 && findPrevArgs.colIndex <= 0) {
                if (findPrevArgs.args.mode === 'Workbook') {
                    var noCellfound = this.parent.activeSheetIndex;
                    findPrevArgs.sheetIndex--;
                    if (findPrevArgs.sheetIndex === -1) {
                        findPrevArgs.sheetIndex = sheetsLength - 1;
                    }
                    if (noCellfound === findPrevArgs.sheetIndex) {
                        if (findPrevArgs.count === 0) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                    sheet = findPrevArgs.sheets[findPrevArgs.sheetIndex];
                    usedRan = sheet.usedRange;
                    activecell = getCellIndexes(sheet.activeCell);
                    findPrevArgs.rowIndex = usedRan.rowIndex;
                    findPrevArgs.colIndex = usedRan.colIndex;
                    findPrevArgs.endColumn = 0;
                    findPrevArgs.endRow = 0;
                }
                noValueBoolean = this.commonCondition(findPrevArgs, activecell);
            }
            if (!noValueBoolean) {
                if (findPrevArgs.args.mode !== 'Workbook') {
                    if (findPrevArgs.count > 0) {
                        if (findPrevArgs.rowIndex === -1) {
                            findPrevArgs.rowIndex = findPrevArgs.endRow;
                        }
                    }
                }
                if (findPrevArgs.rowIndex === -1) {
                    findPrevArgs.rowIndex = sheet.usedRange.rowIndex;
                    findPrevArgs.colIndex = sheet.usedRange.colIndex;
                }
                var row = sheet.rows[findPrevArgs.rowIndex];
                if (row) {
                    if (findPrevArgs.colIndex === -1) {
                        findPrevArgs.colIndex = sheet.usedRange.colIndex;
                    }
                    for (findPrevArgs.colIndex; findPrevArgs.colIndex >= 0; findPrevArgs.colIndex--) {
                        if (row) {
                            if (row.cells && row.cells[findPrevArgs.colIndex]) {
                                var checkTrue = this.prevCommon(findPrevArgs);
                                if (checkTrue) {
                                    return;
                                }
                            }
                        }
                    }
                    if (findPrevArgs.loopCount > 0) {
                        if (activecell[0] === findPrevArgs.rowIndex) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                }
            }
        }
        if (!noValueBoolean) {
            if (findPrevArgs.count === 0) {
                this.parent.notify(showDialog, null);
                return;
            }
        }
    };
    WorkbookFindAndReplace.prototype.findPreCol = function (findPrevArgs) {
        var usedRange;
        var sheet = findPrevArgs.sheets[findPrevArgs.sheetIndex];
        var sheetsLen = this.parent.sheets.length;
        var noValueBoolean = false;
        var activecell = getCellIndexes(sheet.activeCell);
        for (findPrevArgs.colIndex; findPrevArgs.colIndex >= -1; findPrevArgs.colIndex--) {
            if (findPrevArgs.rowIndex < 0 && findPrevArgs.colIndex <= 0) {
                if (findPrevArgs.args.mode === 'Workbook') {
                    var noCellfound = this.parent.activeSheetIndex;
                    findPrevArgs.sheetIndex--;
                    if (findPrevArgs.sheetIndex === -1) {
                        findPrevArgs.sheetIndex = sheetsLen - 1;
                    }
                    if (noCellfound === findPrevArgs.sheetIndex) {
                        if (findPrevArgs.count === 0) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                    sheet = findPrevArgs.sheets[findPrevArgs.sheetIndex];
                    usedRange = sheet.usedRange;
                    activecell = getCellIndexes(sheet.activeCell);
                    findPrevArgs.rowIndex = usedRange.rowIndex;
                    findPrevArgs.colIndex = usedRange.colIndex;
                    findPrevArgs.endColumn = 0;
                    findPrevArgs.endRow = 0;
                }
                noValueBoolean = this.commonCondition(findPrevArgs, activecell);
            }
            if (!noValueBoolean) {
                if (findPrevArgs.count > 0) {
                    if (findPrevArgs.colIndex < 0) {
                        findPrevArgs.colIndex = findPrevArgs.endColumn;
                    }
                }
                if (findPrevArgs.rowIndex < 0) {
                    findPrevArgs.rowIndex = sheet.usedRange.rowIndex;
                }
                if (findPrevArgs.colIndex < -1) {
                    findPrevArgs.colIndex = sheet.usedRange.colIndex;
                    findPrevArgs.rowIndex--;
                }
                var row = sheet.rows[findPrevArgs.rowIndex];
                if (row) {
                    if (sheet.rows[findPrevArgs.rowIndex].cells[findPrevArgs.colIndex]) {
                        if (findPrevArgs.rowIndex === -1) {
                            findPrevArgs.rowIndex = sheet.usedRange.rowIndex;
                        }
                    }
                }
                for (findPrevArgs.rowIndex; findPrevArgs.rowIndex >= 0; findPrevArgs.rowIndex--) {
                    if (row) {
                        if (row.cells && row.cells[findPrevArgs.colIndex]) {
                            var check = this.prevCommon(findPrevArgs);
                            if (check) {
                                return;
                            }
                        }
                    }
                    if (findPrevArgs.loopCount > 0) {
                        if (activecell[1] === findPrevArgs.colIndex) {
                            this.parent.notify(showDialog, null);
                            return;
                        }
                    }
                }
            }
        }
        if (!noValueBoolean) {
            if (findPrevArgs.count === 0) {
                this.parent.notify(showDialog, null);
                return;
            }
        }
    };
    WorkbookFindAndReplace.prototype.commonCondition = function (findPrevArgs, activecell) {
        var sheet = findPrevArgs.sheets[findPrevArgs.sheetIndex];
        var isTrue;
        if ((activecell[0] !== findPrevArgs.endRow && activecell[1] !== findPrevArgs.endColumn) ||
            (activecell[0] !== findPrevArgs.endRow || activecell[1] !== findPrevArgs.endColumn)) {
            findPrevArgs.startColumn = sheet.usedRange.colIndex;
            findPrevArgs.startRow = sheet.usedRange.rowIndex;
            findPrevArgs.endColumn = 0;
            findPrevArgs.endRow = activecell[0];
            findPrevArgs.rowIndex = findPrevArgs.startRow;
            findPrevArgs.colIndex = findPrevArgs.startColumn;
            findPrevArgs.loopCount++;
            isTrue = false;
        }
        else if (((activecell[0] === sheet.usedRange.rowIndex && activecell[1] === sheet.usedRange.colIndex) ||
            (activecell[0] > sheet.usedRange.rowIndex || activecell[1] > sheet.usedRange.colIndex)) &&
            (activecell[0] !== 0 && activecell[1] !== 0)) {
            this.parent.notify(showDialog, null);
            isTrue = true;
        }
        return isTrue;
    };
    WorkbookFindAndReplace.prototype.prevCommon = function (findPrevArgs) {
        var sheet = findPrevArgs.sheets[findPrevArgs.sheetIndex];
        var row = sheet.rows[findPrevArgs.rowIndex];
        if (row && (!row.isFiltered || !row.hidden)) {
            var rowCol = row.cells[findPrevArgs.colIndex];
            if (rowCol && rowCol.value) {
                if (sheet.isProtected && (rowCol.isLocked || rowCol.isLocked === undefined) && sheet.protectSettings.selectUnLockedCells) {
                    return false;
                }
                var cellType = row.cells[findPrevArgs.colIndex];
                if (cellType) {
                    var cellvalue = void 0;
                    if (cellType.format) {
                        var displayTxt = this.parent.getDisplayText(row.cells[findPrevArgs.colIndex]);
                        cellvalue = displayTxt;
                    }
                    else {
                        cellvalue = row.cells[findPrevArgs.colIndex].value.toString();
                    }
                    if (findPrevArgs.args.isCSen && findPrevArgs.args.isEMatch) {
                        if (cellvalue === findPrevArgs.stringValue) {
                            var address = sheet.name + '!' + getCellAddress(findPrevArgs.rowIndex, findPrevArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findPrevArgs.count++;
                            return true;
                        }
                    }
                    else if (findPrevArgs.args.isCSen && !findPrevArgs.args.isEMatch) {
                        var index = cellvalue.indexOf(findPrevArgs.args.value) > -1;
                        if ((cellvalue === findPrevArgs.stringValue) || (index)) {
                            var address = sheet.name + '!' + getCellAddress(findPrevArgs.rowIndex, findPrevArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findPrevArgs.count++;
                            return true;
                        }
                    }
                    else if (!findPrevArgs.args.isCSen && findPrevArgs.args.isEMatch) {
                        findPrevArgs.val = cellvalue.toString().toLowerCase();
                        if (findPrevArgs.val === findPrevArgs.stringValue) {
                            var address = sheet.name + '!' + getCellAddress(findPrevArgs.rowIndex, findPrevArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findPrevArgs.count++;
                            return true;
                        }
                    }
                    else if (!findPrevArgs.args.isCSen && !findPrevArgs.args.isEMatch) {
                        findPrevArgs.val = cellvalue.toString().toLowerCase();
                        var index = findPrevArgs.val.indexOf(findPrevArgs.args.value.toString().toLowerCase()) > -1;
                        var lowerCaseIndex = findPrevArgs.val.indexOf(findPrevArgs.args.value) > -1;
                        if ((cellvalue === findPrevArgs.stringValue) || ((cellvalue === findPrevArgs.stringValue) ||
                            (index)) || (findPrevArgs.val === findPrevArgs.stringValue) || (lowerCaseIndex)) {
                            var address = sheet.name + '!' + getCellAddress(findPrevArgs.rowIndex, findPrevArgs.colIndex);
                            this.parent.notify(goto, { address: address });
                            findPrevArgs.count++;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    WorkbookFindAndReplace.prototype.replace = function (args) {
        var sheetIndex = isUndefined(args.sheetIndex) ? this.parent.activeSheetIndex : args.sheetIndex;
        var sheet = getSheet(this.parent, args.sheetIndex);
        if (sheet.isProtected) {
            this.parent.notify(workBookeditAlert, null);
            return;
        }
        var address = args.address;
        var activeCell = getRangeIndexes(address || sheet.activeCell);
        var compareVal = this.parent.getDisplayText(getCell(activeCell[0], activeCell[1], sheet, false, true)).toString();
        var checkValue;
        args.value = args.value.toString();
        if (!args.isCSen) {
            checkValue = args.value.toLowerCase();
        }
        var replacedValue = this.getReplaceValue(args, compareVal, checkValue);
        if (!replacedValue) {
            args.findOpt = 'next';
            this.findNext(args);
            activeCell = getCellIndexes(sheet.activeCell);
            compareVal = this.parent.getDisplayText(getCell(activeCell[0], activeCell[1], sheet)).toString();
            replacedValue = this.getReplaceValue(args, compareVal, checkValue);
            if (!replacedValue) {
                return;
            }
        }
        var eventArgs = { address: sheet.name + "!" + getCellAddress(activeCell[0], activeCell[1]), cancel: false,
            compareValue: args.value, replaceValue: args.replaceValue, sheetIndex: sheetIndex };
        if (args.isAction) {
            this.parent.notify(beginAction, { action: 'beforeReplace', eventArgs: eventArgs });
            if (eventArgs.cancel) {
                return;
            }
            delete eventArgs.cancel;
        }
        updateCell(this.parent, sheet, { cell: { value: replacedValue }, rowIdx: activeCell[0], colIdx: activeCell[1], uiRefresh: true,
            valChange: true });
        if (args.isAction) {
            this.parent.notify('actionComplete', { action: 'replace', eventArgs: eventArgs });
        }
    };
    WorkbookFindAndReplace.prototype.replaceAll = function (args) {
        var _this = this;
        var startSheet = args.mode === 'Sheet' ? args.sheetIndex : 0;
        var sheet = this.parent.sheets[startSheet];
        var endRow = sheet.usedRange.rowIndex;
        var startRow = 0;
        var endColumn = sheet.usedRange.colIndex;
        var startColumn = 0;
        var addressCollection = [];
        var triggerEvent = args.isAction;
        var eventArgs = __assign({ addressCollection: addressCollection, cancel: false }, args);
        var updateAsync = function (cellValue, index) {
            if (requestAnimationFrame) {
                requestAnimationFrame(function () {
                    if (!eventArgs.cancel && eventArgs.addressCollection[index]) {
                        var indexes = getCellIndexes(eventArgs.addressCollection[index].split('!')[1]);
                        var sheetIndex = getSheetIndexFromAddress(_this.parent, eventArgs.addressCollection[index]);
                        updateCell(_this.parent, _this.parent.sheets[sheetIndex], { cell: { value: cellValue }, rowIdx: indexes[0], colIdx: indexes[1], uiRefresh: true,
                            valChange: true });
                        if (index === eventArgs.addressCollection.length - 1 && triggerEvent) {
                            _this.parent.notify('actionComplete', { action: 'replaceAll', eventArgs: eventArgs });
                        }
                    }
                });
            }
            else {
                _this.parent.updateCell({ value: cellValue }, eventArgs.addressCollection[index]);
            }
        };
        var cellval;
        var row;
        var regX;
        for (startRow; startRow <= endRow + 1; startRow++) {
            if (startColumn > endColumn && startRow > endRow) {
                if (args.mode === 'Workbook') {
                    startSheet++;
                    sheet = this.parent.sheets[startSheet];
                    if (sheet) {
                        startColumn = 0;
                        startRow = 0;
                        endColumn = sheet.usedRange.colIndex;
                        endRow = sheet.usedRange.rowIndex;
                    }
                    else {
                        break;
                    }
                }
            }
            row = sheet.rows[startRow];
            if (row) {
                if (startColumn === endColumn + 1) {
                    startColumn = 0;
                }
                for (startColumn; startColumn <= endColumn; startColumn++) {
                    if (row) {
                        if (row.cells && row.cells[startColumn]) {
                            cellval = this.parent.getDisplayText(sheet.rows[startRow].cells[startColumn]).toString();
                            if (cellval) {
                                if (args.isCSen) {
                                    if (args.isEMatch) {
                                        if (cellval === args.value) {
                                            updateAsync(args.replaceValue, addressCollection.length);
                                            addressCollection.push(sheet.name + '!' + getCellAddress(startRow, startColumn));
                                        }
                                    }
                                    else {
                                        if (cellval.indexOf(args.value) > -1) {
                                            updateAsync(cellval.replace(args.value, args.replaceValue), addressCollection.length);
                                            addressCollection.push(sheet.name + '!' + getCellAddress(startRow, startColumn));
                                        }
                                    }
                                }
                                else {
                                    if (args.isEMatch) {
                                        if (cellval.toLowerCase() === args.value) {
                                            updateAsync(args.replaceValue, addressCollection.length);
                                            addressCollection.push(sheet.name + '!' + getCellAddress(startRow, startColumn));
                                        }
                                    }
                                    else {
                                        var val = cellval.toLowerCase();
                                        if ((cellval === args.value || val.indexOf(args.value.toString().toLowerCase()) > -1) || val ===
                                            args.value || cellval === args.value || val.indexOf(args.value) > -1) {
                                            regX = new RegExp(args.value.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
                                            updateAsync(cellval.replace(regX, args.replaceValue), addressCollection.length);
                                            addressCollection.push(sheet.name + '!' + getCellAddress(startRow, startColumn));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (addressCollection.length && triggerEvent) {
            this.parent.notify('actionBegin', { action: 'beforeReplaceAll', eventArgs: eventArgs });
            if (!eventArgs.cancel) {
                this.parent.notify(replaceAllDialog, { count: eventArgs.addressCollection.length, replaceValue: eventArgs.replaceValue });
            }
        }
        else {
            this.parent.notify(replaceAllDialog, { count: eventArgs.addressCollection.length, replaceValue: eventArgs.replaceValue });
        }
    };
    WorkbookFindAndReplace.prototype.getReplaceValue = function (args, cellval, checkValue) {
        if (args.isCSen) {
            if (args.isEMatch) {
                return cellval === args.value && args.replaceValue;
            }
            else {
                return cellval.indexOf(args.value) > -1 && cellval.replace(args.value, args.replaceValue);
            }
        }
        else {
            if (args.isEMatch) {
                return cellval.toLowerCase() === checkValue && args.replaceValue;
            }
            else {
                return (cellval.toLowerCase().includes(checkValue)) &&
                    cellval.replace(new RegExp(args.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig'), args.replaceValue);
            }
        }
    };
    WorkbookFindAndReplace.prototype.totalCount = function (args) {
        var _this = this;
        var sheet = this.parent.sheets[args.sheetIndex];
        var activeCell = getCellIndexes(sheet.activeCell);
        var count = 0;
        var requiredCount = 0;
        var cellValue;
        var findValue = args.value.toLowerCase();
        sheet.rows.filter(function (row, rowIdx) { return row && row.cells && (!row.isFiltered || !row.hidden) &&
            row.cells.filter(function (cell, colIdx) {
                if (cell && (cell.value || cell.value === 0)) {
                    cellValue = (cell.format ? _this.parent.getDisplayText(cell) : cell.value.toString()).toLowerCase();
                    if (cellValue.includes(findValue)) {
                        count++;
                        if ((rowIdx === activeCell[0] && colIdx >= activeCell[1]) || rowIdx > activeCell[0]) {
                            requiredCount++;
                        }
                    }
                }
            }); });
        requiredCount -= 1;
        var totalCount = count;
        count = totalCount - requiredCount;
        if (count > totalCount) {
            count = totalCount;
        }
        if (count !== 0 && !this.parent.getDisplayText(getCell(activeCell[0], activeCell[1], sheet)).toLowerCase().includes(findValue)) {
            count -= 1;
        }
        args.findCount = count + " of " + totalCount;
    };
    WorkbookFindAndReplace.prototype.findAllValues = function (findAllArguments) {
        var startSheet = findAllArguments.sheetIndex;
        var sheet = this.parent.sheets[startSheet];
        var endRow = sheet.usedRange.rowIndex;
        var rowIndex = 0;
        var count = 0;
        var address;
        var endColumn = sheet.usedRange.colIndex;
        var columnIndex = 0;
        var sheetLength = this.parent.sheets.length;
        var initialSheet = findAllArguments.sheetIndex;
        for (rowIndex; rowIndex <= endRow + 1; rowIndex++) {
            if ((initialSheet !== 1) && (findAllArguments.sheetIndex === sheetLength)) {
                startSheet = 1;
            }
            if (rowIndex > endRow && columnIndex > endColumn) {
                if (findAllArguments.mode === 'Workbook') {
                    startSheet++;
                    if (initialSheet === startSheet) {
                        if (count === 0) {
                            return;
                        }
                        return;
                    }
                    if (startSheet > sheetLength - 1) {
                        startSheet = 0;
                    }
                    sheet = this.parent.sheets[startSheet];
                    if (sheet) {
                        rowIndex = 0;
                        columnIndex = 0;
                        endColumn = sheet.usedRange.colIndex;
                        endRow = sheet.usedRange.rowIndex;
                    }
                }
            }
            if (!isNullOrUndefined(sheet)) {
                if (sheet.rows[rowIndex]) {
                    var row = sheet.rows[rowIndex];
                    if (columnIndex === endColumn + 2) {
                        columnIndex = 0;
                    }
                    for (columnIndex; columnIndex <= endColumn + 1; columnIndex++) {
                        if (row) {
                            if (row.cells && row.cells[columnIndex]) {
                                var cell = sheet.rows[rowIndex].cells[columnIndex];
                                if (cell) {
                                    var cellFormat = cell.format;
                                    var cellvalue = void 0;
                                    if (cellFormat) {
                                        var displayTxt = this.parent.getDisplayText(sheet.rows[rowIndex].
                                            cells[columnIndex]);
                                        cellvalue = displayTxt.toString();
                                    }
                                    else {
                                        cellvalue = cell.value.toString();
                                    }
                                    if (findAllArguments.isCSen && findAllArguments.isEMatch) {
                                        if (cellvalue === findAllArguments.value) {
                                            address = sheet.name + '!' + getCellAddress(rowIndex, columnIndex);
                                            findAllArguments.findCollection.push(address);
                                            count++;
                                        }
                                    }
                                    else if (findAllArguments.isCSen && !findAllArguments.isEMatch) {
                                        var index = cellvalue.indexOf(findAllArguments.value) > -1;
                                        if ((cellvalue === findAllArguments.value) || (index)) {
                                            address = sheet.name + '!' + getCellAddress(rowIndex, columnIndex);
                                            findAllArguments.findCollection.push(address);
                                            count++;
                                        }
                                    }
                                    else if (!findAllArguments.isCSen && findAllArguments.isEMatch) {
                                        var val = cellvalue.toString().toLowerCase();
                                        if (val === findAllArguments.value) {
                                            address = sheet.name + '!' + getCellAddress(rowIndex, columnIndex);
                                            findAllArguments.findCollection.push(address);
                                            count++;
                                        }
                                    }
                                    else if (!findAllArguments.isCSen && !findAllArguments.isEMatch) {
                                        var val = cellvalue.toString().toLowerCase();
                                        var index = val.indexOf(findAllArguments.value.toLowerCase()) > -1;
                                        if ((val === findAllArguments.value) || ((cellvalue === findAllArguments.value) || (index)) ||
                                            ((cellvalue === findAllArguments.value))) {
                                            address = sheet.name + '!' + getCellAddress(rowIndex, columnIndex);
                                            findAllArguments.findCollection.push(address);
                                            count++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (count === 0) {
            return;
        }
        return;
    };
    /**
     * Gets the module name.
     *
     * @returns {string} - Return the string
     */
    WorkbookFindAndReplace.prototype.getModuleName = function () {
        return 'workbookfindAndReplace';
    };
    return WorkbookFindAndReplace;
}());
export { WorkbookFindAndReplace };
