import { getSheetName, getSheet, getSheetIndexFromId } from '../base/index';
import { getSingleSelectedRange, getCell, getSheetIndex } from '../base/index';
import { workbookFormulaOperation, getColumnHeaderText, aggregateComputation, clearFormulaDependentCells, formulaInValidation } from '../common/index';
import { Calculate, ValueChangedArgs, CommonErrors, getAlphalabel } from '../../calculate/index';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { getCellAddress, getFormattedCellObject, isNumber, checkIsFormula, removeUniquecol, checkUniqueRange } from '../common/index';
import { getRangeAddress, getRangeFromAddress, isCellReference, refreshInsertDelete, getUpdatedFormulaOnInsertDelete } from '../common/index';
import { getUniqueRange, DefineName, selectionComplete, getRangeIndexes } from '../common/index';
/**
 * @hidden
 * The `WorkbookFormula` module is used to handle the formula operation in Workbook.
 */
var WorkbookFormula = /** @class */ (function () {
    /**
     * Constructor for formula module in Workbook.
     *
     * @param {Workbook} workbook - Specifies the workbook.
     * @private
     */
    function WorkbookFormula(workbook) {
        this.uniqueOBracket = String.fromCharCode(129);
        this.uniqueCBracket = String.fromCharCode(130);
        this.uniqueCSeparator = String.fromCharCode(131);
        this.uniqueCOperator = String.fromCharCode(132);
        this.uniquePOperator = String.fromCharCode(133);
        this.uniqueSOperator = String.fromCharCode(134);
        this.uniqueMOperator = String.fromCharCode(135);
        this.uniqueDOperator = String.fromCharCode(136);
        this.uniqueModOperator = String.fromCharCode(137);
        this.uniqueConcateOperator = String.fromCharCode(138);
        this.uniqueEqualOperator = String.fromCharCode(139);
        this.uniqueExpOperator = String.fromCharCode(140);
        this.uniqueGTOperator = String.fromCharCode(141);
        this.uniqueLTOperator = String.fromCharCode(142);
        this.sheetInfo = [];
        this.parent = workbook;
        this.init();
    }
    WorkbookFormula.prototype.init = function () {
        this.addEventListener();
        this.initCalculate();
        this.registerSheet();
    };
    /**
     * To destroy the formula module.
     *
     * @returns {void}
     * @hidden
     */
    WorkbookFormula.prototype.destroy = function () {
        this.removeEventListener();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.parent.refreshing) {
            this.clearAllUniqueFormulaValue();
        }
        this.calculateInstance.dispose();
        this.calculateInstance = null;
        this.parent = null;
    };
    WorkbookFormula.prototype.addEventListener = function () {
        this.parent.on(workbookFormulaOperation, this.performFormulaOperation, this);
        this.parent.on(aggregateComputation, this.aggregateComputation, this);
        this.parent.on(getUniqueRange, this.getUniqueRange, this);
        this.parent.on(removeUniquecol, this.removeUniquecol, this);
        this.parent.on(clearFormulaDependentCells, this.clearFormulaDependentCells, this);
        this.parent.on(formulaInValidation, this.formulaInValidation, this);
        this.parent.on(refreshInsertDelete, this.refreshInsertDelete, this);
        this.parent.on(getUpdatedFormulaOnInsertDelete, this.getUpdatedFormulaOnInsertDelete, this);
    };
    WorkbookFormula.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(workbookFormulaOperation, this.performFormulaOperation);
            this.parent.off(aggregateComputation, this.aggregateComputation);
            this.parent.off(getUniqueRange, this.getUniqueRange);
            this.parent.off(removeUniquecol, this.removeUniquecol);
            this.parent.off(clearFormulaDependentCells, this.clearFormulaDependentCells);
            this.parent.off(formulaInValidation, this.formulaInValidation);
            this.parent.off(refreshInsertDelete, this.refreshInsertDelete);
            this.parent.off(getUpdatedFormulaOnInsertDelete, this.getUpdatedFormulaOnInsertDelete);
        }
    };
    /**
     * Get the module name.
     *
     * @returns {string} - Get the module name.
     * @private
     */
    WorkbookFormula.prototype.getModuleName = function () {
        return 'workbookFormula';
    };
    WorkbookFormula.prototype.initCalculate = function () {
        this.calculateInstance = new Calculate(this.parent);
        this.calcID = this.calculateInstance.createSheetFamilyID();
        this.calculateInstance.setTreatEmptyStringAsZero(true);
        this.calculateInstance.grid = this.parent.getActiveSheet().id.toString();
    };
    WorkbookFormula.prototype.clearFormulaDependentCells = function (args) {
        if (args.isOpen) {
            this.calculateInstance.getDependentCells().clear();
            this.calculateInstance.getFormulaInfoTable().clear();
            return;
        }
        var cellRef = args.cellRef;
        cellRef = cellRef.split(':')[0];
        cellRef = '!' + this.parent.activeSheetIndex + '!' + cellRef;
        this.calculateInstance.clearFormulaDependentCells(cellRef);
    };
    WorkbookFormula.prototype.formulaInValidation = function (args) {
        var col = this.calculateInstance.getLibraryFormulas().get(args.value);
        args.skip = isNullOrUndefined(col);
    };
    WorkbookFormula.prototype.performFormulaOperation = function (args) {
        var action = args.action;
        var formulas;
        var formulaInfo;
        if (action !== 'refreshCalculate') {
            formulas = this.calculateInstance.getLibraryFormulas();
            formulaInfo = (Array.from(formulas.values()));
        }
        var collection;
        switch (action) {
            case 'getLibraryFormulas':
                args.formulaCollection = Array.from(formulas.keys());
                break;
            case 'getFormulaCategory':
                collection = ['All'];
                for (var i = 1; i < Array.from(formulas.values()).length; i++) {
                    if (collection.indexOf(formulaInfo[i].category) < 0) {
                        collection.push(formulaInfo[i].category);
                    }
                }
                args.categoryCollection = collection;
                break;
            case 'dropDownSelectFormulas':
                for (var i = 0; i < Array.from(formulas.values()).length; i++) {
                    if (args.selectCategory === formulaInfo[i].category) {
                        args.formulaCollection[i] = Array.from(formulas.keys())[i];
                    }
                }
                break;
            case 'getFormulaDescription':
                for (var i = 0; i < Array.from(formulas.values()).length; i++) {
                    if (args.selectedList === Array.from(formulas.keys())[i]) {
                        args.description = formulaInfo[i].description;
                    }
                }
                break;
            case 'registerSheet':
                this.registerSheet(args.sheetIndex, args.sheetCount);
                if (args.isImport) {
                    this.updateSheetInfo();
                }
                break;
            case 'unRegisterSheet':
                this.unRegisterSheet(args.sheetIndex, args.sheetCount, args.propertyChange);
                break;
            case 'initSheetInfo':
                this.updateSheetInfo();
                break;
            case 'refreshCalculate':
                if (args.isFormula) {
                    args.value = this.autoCorrectFormula(args.value, args.rowIndex, args.colIndex, args.sheetIndex);
                    if (args.isClipboard && args.value.toString().toUpperCase().includes('UNIQUE')) {
                        this.parent.sheets[args.sheetIndex].rows[args.rowIndex].cells[args.colIndex].value = '';
                    }
                }
                args.isFormulaDependent = this.refreshCalculate(args.rowIndex, args.colIndex, args.value, args.isFormula, args.sheetIndex, args.isRefreshing);
                args.value = args.value ? args.value.toString().split('-*').join('-').split('/*').join('/').split('*/').
                    join('*').split('-/').join('-').split('*+').join('*').split('+*').join('+') : args.value;
                break;
            case 'getArgumentSeparator':
                args.argumentSeparator = this.calculateInstance.getParseArgumentSeparator();
                break;
            case 'addDefinedName':
                args.isAdded = this.addDefinedName(args.definedName, false, args.index, args.isEventTrigger);
                break;
            case 'removeDefinedName':
                args.isRemoved = this.removeDefinedName(args.definedName, args.scope, args.isEventTrigger);
                break;
            case 'initiateDefinedNames':
                this.initiateDefinedNames();
                break;
            case 'renameUpdation':
                this.renameUpdation(args.value, args.pName);
                break;
            case 'addSheet':
                this.sheetInfo.push({ visibleName: args.visibleName, sheet: args.sheetName, index: args.sheetId });
                break;
            case 'getSheetInfo':
                args.sheetInfo = this.sheetInfo;
                break;
            case 'deleteSheetTab':
                for (var i = 0; i < this.sheetInfo.length; i++) {
                    if (this.sheetInfo[i].index === args.sheetId) {
                        var sheetName = this.sheetInfo[i].sheet;
                        this.sheetInfo.splice(i, 1);
                        var id = args.sheetId.toString();
                        this.sheetDeletion(sheetName, id);
                        this.calculateInstance.unregisterGridAsSheet(id, id);
                        break;
                    }
                }
                break;
            case 'getReferenceError':
                args.refError = this.referenceError();
                break;
            case 'getAlpha':
                args.col = getAlphalabel(args.col);
                break;
            case 'addCustomFunction':
                this.addCustomFunction(args.functionHandler, args.functionName);
                break;
            case 'computeExpression':
                args.calcValue = this.calculateInstance.computeExpression(args.formula);
                break;
            case 'registerGridInCalc':
                this.calculateInstance.grid = args.sheetID;
                break;
            case 'dependentCellsAvailable':
            case 'checkFormulaAdded':
                // eslint-disable-next-line no-case-declarations
                var family = this.calculateInstance.getSheetFamilyItem(args.sheetId);
                if (family.isSheetMember && !isNullOrUndefined(family.parentObjectToToken)) {
                    args.address = family.parentObjectToToken.get(args.sheetId) + args.address;
                }
                if (action === 'checkFormulaAdded') {
                    args.added = this.calculateInstance.getFormulaInfoTable().has(args.address);
                }
                else {
                    args.isAvailable = this.calculateInstance.getDependentCells().has(args.address);
                }
                break;
        }
    };
    WorkbookFormula.prototype.referenceError = function () {
        return this.calculateInstance.getErrorStrings()[CommonErrors.ref];
    };
    WorkbookFormula.prototype.getSheetInfo = function () {
        return this.sheetInfo;
    };
    WorkbookFormula.prototype.addCustomFunction = function (functionHandler, functionName) {
        this.calculateInstance.defineFunction(functionName, functionHandler);
    };
    WorkbookFormula.prototype.updateSheetInfo = function () {
        var _this = this;
        this.sheetInfo = [];
        this.parent.sheets.forEach(function (sheet) {
            _this.sheetInfo.push({ visibleName: sheet.name, sheet: 'Sheet' + sheet.id, index: sheet.id });
        });
    };
    WorkbookFormula.prototype.sheetDeletion = function (delSheetName, sheetId) {
        var _this = this;
        var dependentCell = this.calculateInstance.getDependentCells();
        var fInfo;
        var formulaVal;
        var rowId;
        var colId;
        var token;
        var family = this.calculateInstance.getSheetFamilyItem(sheetId);
        dependentCell.forEach(function (dependentCellRefs, cellRef) {
            dependentCellRefs.forEach(function (dependentCellRef) {
                fInfo = _this.calculateInstance.getFormulaInfoTable().get(dependentCellRef);
                if (!isNullOrUndefined(fInfo)) {
                    formulaVal = fInfo.formulaText;
                    if (formulaVal.toUpperCase().indexOf(delSheetName.toUpperCase()) > -1) {
                        formulaVal = formulaVal.toUpperCase().split(delSheetName.toUpperCase() +
                            _this.calculateInstance.sheetToken).join(_this.referenceError());
                        rowId = _this.calculateInstance.rowIndex(dependentCellRef);
                        colId = _this.calculateInstance.colIndex(dependentCellRef);
                        token = dependentCellRef.slice(0, dependentCellRef.lastIndexOf(_this.calculateInstance.sheetToken) + 1);
                        _this.updateDataContainer([rowId - 1, colId - 1], { value: formulaVal, visible: false, sheetId: family.tokenToParentObject.has(token) ?
                                Number(family.tokenToParentObject.get(token)) : parseInt(dependentCellRef.split('!')[1], 10) + 1 });
                        _this.calculateInstance.refresh(fInfo.getParsedFormula());
                    }
                }
                token = cellRef.slice(0, cellRef.lastIndexOf(_this.calculateInstance.sheetToken) + 1);
                if (sheetId === (family.tokenToParentObject.has(token) ? family.tokenToParentObject.get(token) :
                    cellRef.split('!')[1])) {
                    _this.calculateInstance.getFormulaInfoTable().delete(cellRef);
                    _this.calculateInstance.clearFormulaDependentCells(cellRef);
                }
            });
        });
    };
    WorkbookFormula.prototype.renameUpdation = function (name, pName) {
        var _this = this;
        var sheet;
        var cell;
        var uPName = pName.toUpperCase();
        var escapeRegx = new RegExp('[!@#$%^&()+=\';,.{}|\\":<>~_-]', 'g');
        var exp = '(?=[\'!])(?=[^"]*(?:"[^"]*"[^"]*)*$)';
        var regx = new RegExp(pName.replace(escapeRegx, '\\$&') + exp, 'gi');
        this.sheetInfo.forEach(function (info, index) {
            sheet = _this.parent.sheets[index];
            for (var i = 0, rowLen = sheet.usedRange.rowIndex; i <= rowLen; i++) {
                for (var j = 0, colLen = sheet.usedRange.colIndex; j <= colLen; j++) {
                    cell = getCell(i, j, sheet, false, true);
                    if (cell.formula && checkIsFormula(cell.formula) && cell.formula.toUpperCase().includes(uPName) &&
                        cell.formula.match(regx)) {
                        cell.formula = cell.formula.replace(regx, name);
                    }
                }
            }
            if (info.visibleName === pName) {
                info.visibleName = name;
            }
        });
    };
    WorkbookFormula.prototype.updateDataContainer = function (indexes, data) {
        var sheet;
        var rowData;
        var colObj;
        for (var i = 0, len = this.parent.sheets.length; i < len; i++) {
            if (this.parent.sheets[i].id === data.sheetId) {
                sheet = this.parent.sheets[i];
                if (indexes[0] in sheet.rows) {
                    rowData = sheet.rows[indexes[0]];
                    if (indexes[1] in rowData.cells) {
                        colObj = rowData.cells[indexes[1]];
                        colObj.formula = data.value;
                        if (data.visible) {
                            if (i === this.parent.activeSheetIndex && sheet.activeCell === getCellAddress(indexes[0], indexes[1])) {
                                this.parent.notify(selectionComplete, {});
                            }
                        }
                        else {
                            colObj.value = this.referenceError();
                        }
                    }
                    else {
                        rowData.cells[indexes[1]] = colObj = {};
                    }
                }
                else {
                    rowData = sheet.rows[indexes[0]] = {};
                    rowData[indexes[1]] = colObj = {};
                }
                break;
            }
        }
    };
    WorkbookFormula.prototype.parseSheetRef = function (value) {
        var regx;
        // eslint-disable-next-line no-useless-escape
        var escapeRegx = new RegExp('[!@#$%^&()+=\';,.{}|\":<>~_-]', 'g');
        var i = 0;
        var sheetCount = this.parent.sheets.length;
        var temp = [];
        temp.length = 0;
        var regxTemp;
        var searchIdx;
        var idx;
        var valSearchIdx;
        var regxVisible;
        var sheetInfo = this.getSheetInfo();
        var exp = '(?=[\'!])(?=[^"]*(?:"[^"]*"[^"]*)*$)';
        for (i = 0; i < sheetCount; i++) {
            if (sheetInfo[i].sheet !== sheetInfo[i].visibleName) {
                regx = new RegExp(sheetInfo[i].visibleName.replace(escapeRegx, '\\$&') + exp, 'gi');
                idx = i;
                if (value.match(regx)) {
                    for (var j = i + 1; j < sheetCount; j++) {
                        regxTemp = new RegExp(sheetInfo[j].visibleName.replace(escapeRegx, '\\$&') + exp, 'gi');
                        searchIdx = value.search(regxTemp);
                        valSearchIdx = value.search(regx);
                        if (searchIdx > -1 && (searchIdx < valSearchIdx || (searchIdx === valSearchIdx && sheetInfo[j].visibleName.length >
                            sheetInfo[i].visibleName.length))) {
                            regxVisible = new RegExp('Sheet', 'gi');
                            if (sheetInfo[j].visibleName.search(regxVisible) !== 0) {
                                regx = regxTemp;
                                idx = j;
                            }
                        }
                    }
                    value = value.replace(regx, idx + '/');
                    temp.push(idx);
                }
            }
        }
        i = 0;
        while (i < temp.length) {
            regx = new RegExp(temp[i] + '/' + exp, 'gi');
            value = value.replace(regx, sheetInfo[temp[i]].sheet);
            i++;
        }
        return value;
    };
    WorkbookFormula.prototype.registerSheet = function (sheetIndex, sheetCount) {
        if (sheetIndex === void 0) { sheetIndex = 0; }
        if (sheetCount === void 0) { sheetCount = this.parent.sheets.length; }
        var id;
        while (sheetIndex < sheetCount) {
            id = getSheet(this.parent, sheetIndex).id + '';
            this.calculateInstance.registerGridAsSheet(id, id, this.calcID);
            sheetIndex++;
        }
    };
    WorkbookFormula.prototype.unRegisterSheet = function (sheetIndex, sheetCount, propertyChange) {
        if (sheetIndex === void 0) { sheetIndex = 0; }
        if (sheetCount === void 0) { sheetCount = this.parent.sheets.length; }
        var id;
        this.calculateInstance.tokenCount = 0;
        if (propertyChange) {
            this.calculateInstance.unregisterGridAsSheet(id, id, propertyChange);
        }
        else {
            while (sheetIndex < sheetCount) {
                id = getSheet(this.parent, sheetIndex).id + '';
                this.calculateInstance.unregisterGridAsSheet(id, id);
                sheetIndex++;
            }
        }
    };
    WorkbookFormula.prototype.getUniqueRange = function (args) {
        args.range = this.calculateInstance.uniqueRange;
    };
    WorkbookFormula.prototype.removeUniquecol = function (args) {
        if (args && args.clearAll) {
            this.clearAllUniqueFormulaValue();
            return;
        }
        var sheet = this.parent.getActiveSheet();
        for (var i = 0; i < this.calculateInstance.uniqueRange.length; i++) {
            var uniqRngAddress = this.calculateInstance.uniqueRange[i].split(':')[0].split('!');
            if (uniqRngAddress[0] === sheet.name && uniqRngAddress[1] === sheet.activeCell) {
                var range = getRangeIndexes(this.calculateInstance.uniqueRange[i]);
                this.calculateInstance.uniqueRange.splice(i, 1);
                for (var j = range[0]; j <= range[2]; j++) {
                    for (var k = range[1]; k <= range[3]; k++) {
                        var cell = getCell(j, k, this.parent.getActiveSheet());
                        cell.formula = '';
                        this.parent.updateCell({ value: '', formula: '' }, getRangeAddress([j, k]));
                    }
                }
            }
        }
    };
    WorkbookFormula.prototype.refreshCalculate = function (rowIdx, colIdx, value, isFormula, sheetIdx, isRefreshing) {
        var sheet = isNullOrUndefined(sheetIdx) ? this.parent.getActiveSheet() : getSheet(this.parent, sheetIdx);
        var sheetId = sheet.id + '';
        var sheetName = sheet.name;
        var family = this.calculateInstance.getSheetFamilyItem(sheetId);
        var cellRef = getColumnHeaderText(colIdx + 1) + (rowIdx + 1);
        if (family.isSheetMember && !isNullOrUndefined(family.parentObjectToToken)) {
            cellRef = family.parentObjectToToken.get(sheetId) + cellRef;
        }
        if (isFormula) {
            value = this.parseSheetRef(value);
            var cellArgs = new ValueChangedArgs(rowIdx + 1, colIdx + 1, value);
            var usedRange = [sheet.usedRange.rowIndex, sheet.usedRange.colIndex];
            this.calculateInstance.valueChanged(sheetId, cellArgs, true, usedRange, isRefreshing, sheetName);
            var referenceCollection = this.calculateInstance.randCollection;
            if (this.calculateInstance.isRandomVal === true) {
                var rowId = void 0;
                var colId = void 0;
                var refValue = '';
                if (this.calculateInstance.randomValues.size > 1 && this.calculateInstance.randomValues.size ===
                    referenceCollection.length) {
                    for (var i = 0; i < this.calculateInstance.randomValues.size; i++) {
                        rowId = this.calculateInstance.rowIndex(referenceCollection[i]);
                        colId = this.calculateInstance.colIndex(referenceCollection[i]);
                        refValue = this.calculateInstance.randomValues.get(referenceCollection[i]);
                        sheetId = (parseFloat(this.calculateInstance.getSheetToken(referenceCollection[i]).split(this.calculateInstance.sheetToken).join('')) + 1).toString();
                        var tempArgs = new ValueChangedArgs(rowId, colId, refValue);
                        this.calculateInstance.valueChanged(sheetId, tempArgs, true);
                    }
                }
            }
        }
        else {
            if (this.calculateInstance.getFormulaInfoTable().has(cellRef)) {
                this.calculateInstance.getFormulaInfoTable().delete(cellRef);
                this.calculateInstance.clearFormulaDependentCells(cellRef);
            }
            this.calculateInstance.refresh(cellRef);
            this.calculateInstance.refreshRandValues(cellRef);
        }
        this.calculateInstance.cell = '';
        var updatedCell = getCell(rowIdx, colIdx, this.parent.getActiveSheet());
        if (value && value.toString().toUpperCase().startsWith('=DOLLAR(') &&
            updatedCell && updatedCell.value && updatedCell.value.startsWith('$')) {
            this.dollarFormulaDecimalHandler(updatedCell);
        }
        if (updatedCell && value && value.toString().toUpperCase().indexOf('=SUM(') === 0) {
            var errorStrings = ['#N/A', '#VALUE!', '#REF!', '#DIV/0!', '#NUM!', '#NAME?', '#NULL!', 'invalid arguments'];
            var val = value.toString().toUpperCase().replace('=SUM', '').replace('(', '').replace(')', '').split(':')[0];
            if (isCellReference(val)) {
                var index = getRangeIndexes(val);
                var fCell = getCell(index[0], index[1], this.parent.getActiveSheet());
                if (fCell && fCell.value && fCell.format &&
                    errorStrings.indexOf(updatedCell.value) < 0 && errorStrings.indexOf(fCell.value) < 0) {
                    updatedCell.format = fCell.format;
                }
            }
        }
        return this.calculateInstance.getDependentCells().has(cellRef);
    };
    WorkbookFormula.prototype.dollarFormulaDecimalHandler = function (updatedCell) {
        var decimalCount = updatedCell.value.split('.')[1].length;
        var decimalValue = "";
        for (var decimalIdx = 1; decimalIdx <= decimalCount; decimalIdx++) {
            decimalValue += "0";
        }
        updatedCell.format = '$#,##.' + decimalValue;
    };
    WorkbookFormula.prototype.autoCorrectFormula = function (formula, rowIdx, colIdx, sheetIdx) {
        if (!isNullOrUndefined(formula)) {
            formula = formula.toString();
            if (formula.split('(').length === 2 && formula.indexOf(')') < 0) {
                formula += ')';
            }
            var isEqual = void 0;
            if (formula.indexOf('=') === 0) {
                formula = formula.slice(1);
                isEqual = true;
            }
            var lessEq = formula.match(/</g);
            var greaterEq = formula.match(/>/g);
            var equal = formula.match(/=/g);
            if (lessEq) {
                var lessOp = '';
                for (var i = 0; i < lessEq.length; i++) {
                    lessOp = lessOp + lessEq[i];
                }
                formula = formula.replace(lessOp, '<');
            }
            if (greaterEq) {
                var greaterOp = '';
                for (var j = 0; j < greaterEq.length; j++) {
                    greaterOp = greaterOp + greaterEq[j];
                }
                formula = formula.replace(greaterOp, '>');
            }
            if (equal) {
                var equalOp = '';
                for (var c = 0; c < equal.length; c++) {
                    equalOp = equalOp + equal[c];
                }
                formula = formula.split(equalOp).join('=');
            }
            formula = isEqual ? '=' + formula : formula;
            if (lessEq || greaterEq || equal) {
                getCell(rowIdx, colIdx, isNullOrUndefined(sheetIdx) ? this.parent.getActiveSheet() : getSheet(this.parent, sheetIdx)).formula = formula;
            }
        }
        return formula;
    };
    WorkbookFormula.prototype.initiateDefinedNames = function () {
        var definedNames = this.parent.definedNames;
        var i = 0;
        while (i < definedNames.length) {
            var definedname = definedNames[i];
            var refersTo = this.parseSheetRef(definedname.refersTo);
            var range = getRangeFromAddress(refersTo);
            var cellRef = false;
            var isLink = refersTo.indexOf('http:') > -1 ? true : (refersTo.indexOf('https:') > -1 ? true : false);
            range = range.split('$').join('');
            range = range.split('=').join('');
            if (range.indexOf(':') > -1) {
                var rangeSplit = range.split(':');
                if (isCellReference(rangeSplit[0]) && isCellReference(rangeSplit[1])) {
                    cellRef = true;
                }
            }
            else if (range.indexOf(':') < 0) {
                if (isCellReference(range)) {
                    cellRef = true;
                }
            }
            if (isLink) {
                cellRef = false;
            }
            if (cellRef) {
                this.addDefinedName(definedname, true, undefined, true);
            }
            else {
                this.removeDefinedName(definedname.name, definedname.scope, true);
                i--;
            }
            i++;
        }
    };
    /**
     * @hidden
     * Used to add defined name to workbook.
     *
     * @param {DefineNameModel} definedName - Define named range.
     * @param {boolean} isValidate - Specify the boolean value.
     * @param {number} index - Define named index.
     * @param {boolean} isEventTrigger - Specify the boolean value.
     * @returns {boolean} - Used to add defined name to workbook.
     */
    WorkbookFormula.prototype.addDefinedName = function (definedName, isValidate, index, isEventTrigger) {
        if (index === undefined || index < -1) {
            index = this.parent.definedNames.length;
        }
        var isAdded = true;
        var sheetIdx;
        var name = definedName.name;
        if (definedName.refersTo.indexOf('!') < 0) {
            var sheetName = getSheetName(this.parent);
            sheetName = sheetName.indexOf(' ') !== -1 ? '\'' + sheetName + '\'' : sheetName;
            definedName.refersTo = sheetName + '!' + ((definedName.refersTo.indexOf('=') < 0) ?
                definedName.refersTo : definedName.refersTo.split('=')[1]);
        }
        var visibleRefersTo = definedName.refersTo;
        var refersTo = this.parseSheetRef(definedName.refersTo);
        if (definedName.scope) {
            sheetIdx = getSheetIndex(this.parent, definedName.scope);
            if (sheetIdx > -1) {
                name = getSheetName(this.parent, sheetIdx) + '!' + name;
            }
        }
        else {
            definedName.scope = '';
        }
        if (!definedName.comment) {
            definedName.comment = '';
        }
        //need to extend once internal sheet value changes done.
        if (!isValidate && this.checkIsNameExist(definedName.name, definedName.scope)) {
            isAdded = false;
        }
        else {
            this.calculateInstance.addNamedRange(name, refersTo[0] === '=' ? refersTo.substr(1) : refersTo);
            if (refersTo[0] !== '=') {
                definedName.refersTo = '=' + visibleRefersTo;
            }
            if (this.parent.definedNames.indexOf(definedName) < 0) {
                this.parent.definedNames.splice(index, 0, definedName);
            }
        }
        var eventArgs = { name: definedName.name, scope: definedName.scope, comment: definedName.comment,
            refersTo: definedName.refersTo, cancel: false };
        if (!isEventTrigger) {
            this.parent.notify('actionComplete', { eventArgs: eventArgs, action: 'addDefinedName' });
        }
        return isAdded;
    };
    /**
     * @hidden
     * Used to remove defined name from workbook.
     *
     * @param {string} name - Specifies the defined name.
     * @param {string} scope - Specifies the scope of the define name.
     * @param {boolean} isEventTrigger - Specify the boolean value.
     * @returns {boolean} - To Return the bool value.
     */
    WorkbookFormula.prototype.removeDefinedName = function (name, scope, isEventTrigger) {
        var isRemoved = false;
        var index = this.getIndexFromNameColl(name, scope);
        if (index > -1) {
            var calcName = name;
            if (scope) {
                var sheetIdx = getSheetIndex(this.parent, scope);
                if (sheetIdx) {
                    calcName = getSheetName(this.parent, sheetIdx) + '!' + name;
                }
            }
            this.calculateInstance.removeNamedRange(calcName);
            this.parent.definedNames.splice(index, 1);
            if (!isEventTrigger) {
                var eventArgs = { name: name, scope: scope, cancel: false };
                this.parent.notify('actionComplete', { eventArgs: eventArgs, action: 'removeDefinedName' });
            }
            isRemoved = true;
        }
        return isRemoved;
    };
    WorkbookFormula.prototype.checkIsNameExist = function (name, sheetName) {
        var isExist = this.parent.definedNames.some(function (key) {
            return key.name === name && (sheetName ? key.scope === sheetName : key.scope === '');
        });
        return isExist;
    };
    WorkbookFormula.prototype.getIndexFromNameColl = function (definedName, scope) {
        if (scope === void 0) { scope = ''; }
        var index = -1;
        this.parent.definedNames.filter(function (name, idx) {
            if (name.name === definedName && name.scope === scope) {
                index = idx;
            }
        });
        return index;
    };
    WorkbookFormula.prototype.toFixed = function (value) {
        var num = Number(value);
        if (Math.round(num) !== num) {
            value = num.toFixed(2);
        }
        return value;
    };
    WorkbookFormula.prototype.aggregateComputation = function (args) {
        var sheet = this.parent.getActiveSheet();
        var range = getSingleSelectedRange(sheet);
        var indexes = getRangeIndexes(range.split(':')[1]);
        if (indexes[0] + 1 === sheet.rowCount && indexes[1] + 1 === sheet.colCount) {
            range = "A1:" + getCellAddress(sheet.usedRange.rowIndex, sheet.usedRange.colIndex);
        }
        var calcValue;
        var i;
        var cellCol = this.calculateInstance.getCellCollection(range);
        for (i = 0; i < cellCol.length; i++) {
            calcValue = this.calculateInstance.getValueFromArg(cellCol[i]);
            if (isNumber(calcValue)) {
                args.countOnly = false;
                break;
            }
        }
        args.Count = this.calculateInstance.getFunction('COUNTA')(range);
        if (!args.Count || args.countOnly) {
            return;
        }
        var formulaVal = ['SUM', 'AVERAGE', 'MIN', 'MAX'];
        var formatedValues = [];
        var index = getRangeIndexes(sheet.activeCell);
        var cell = getCell(index[0], index[1], sheet, false, true);
        for (i = 0; i < 4; i++) {
            calcValue = this.toFixed(this.calculateInstance.getFunction(formulaVal[i])(range));
            if (cell.format) {
                var eventArgs = { formattedText: calcValue, value: calcValue,
                    format: cell.format, cell: { value: calcValue, format: cell.format }, onLoad: true };
                this.parent.notify(getFormattedCellObject, eventArgs);
                calcValue = eventArgs.formattedText;
            }
            formatedValues.push(calcValue);
        }
        args.Sum = formatedValues[0];
        args.Avg = formatedValues[1];
        args.Min = formatedValues[2];
        args.Max = formatedValues[3];
    };
    WorkbookFormula.prototype.refreshInsertDelete = function (args) {
        var _this = this;
        var formulaDependentCells = this.calculateInstance.getDependentFormulaCells();
        var cell;
        var sheetIndex = getSheetIndexFromId(this.parent, args.sheet.id);
        this.parent.sheets.forEach(function (sheet, index) {
            for (var i = 0, rowLen = sheet.usedRange.rowIndex; i <= rowLen; i++) {
                for (var j = 0, colLen = sheet.usedRange.colIndex; j <= colLen; j++) {
                    cell = getCell(i, j, sheet, false, true);
                    if (cell.formula && checkIsFormula(cell.formula)) {
                        if (index === sheetIndex) {
                            if (args.isInsert || !(args.modelType === 'Row' ? i >= args.startIndex && i <= args.endIndex :
                                j >= args.startIndex && j <= args.endIndex)) {
                                _this.updateFormula(args, cell, i, j);
                            }
                        }
                        else if (cell.formula.includes(args.sheet.name)) {
                            _this.updateFormula(args, cell, i, j, true);
                        }
                    }
                }
            }
        });
        formulaDependentCells.clear();
        this.calculateInstance.getDependentCells().clear();
        this.calculateInstance.getFormulaInfoTable().clear();
        this.refreshNamedRange(args);
    };
    WorkbookFormula.prototype.getUpdatedFormulaOnInsertDelete = function (args) {
        this.updateFormula(args.insertDeleteArgs, args.cell, args.row, args.col);
    };
    WorkbookFormula.prototype.updateFormula = function (args, cell, row, col, otherSheet) {
        var ref;
        var pVal;
        var index;
        var updated;
        if (cell.formula && cell.formula.includes('UNIQUE')) {
            this.clearUniqueRange(row, col, args.sheet);
        }
        var getAddress = function () {
            return index[0] === index[2] && index[1] === index[3] ? getCellAddress(index[0], index[1]) : getRangeAddress(index);
        };
        var formulaArr = this.parseFormula(cell.formula, true);
        for (var i = 0; i < formulaArr.length; i++) {
            ref = formulaArr[i].trim().replace(/[$]/g, '');
            if (this.calculateInstance.isCellReference(ref)) {
                pVal = i && formulaArr[i - 1].trim();
                if (pVal && pVal[pVal.length - 1] === '!') {
                    pVal = pVal.replace(/['!]/g, '');
                    if (pVal !== args.sheet.name) {
                        continue;
                    }
                }
                else if (otherSheet) {
                    continue;
                }
                index = getRangeIndexes(ref);
                updated = this.parent.updateRangeOnInsertDelete(args, index);
                if (updated) {
                    formulaArr[i] = index[2] < index[0] || index[3] < index[1] ? this.calculateInstance.getErrorStrings()[CommonErrors.ref]
                        : getAddress();
                }
            }
        }
        var newFormula = '=' + formulaArr.join('');
        if (cell.formula !== newFormula) {
            cell.formula = newFormula;
            cell.value = null;
        }
    };
    WorkbookFormula.prototype.clearUniqueRange = function (row, col, sheet) {
        var uniqueArgs = { cellIdx: [row, col, row, col], isUnique: false, uniqueRange: '' };
        this.parent.notify(checkUniqueRange, uniqueArgs);
        var range = getRangeIndexes(uniqueArgs.uniqueRange);
        for (var i = range[0]; i <= range[2]; i++) {
            for (var j = range[1]; j <= range[3]; j++) {
                delete getCell(i, j, sheet, false, true).value;
            }
        }
    };
    WorkbookFormula.prototype.clearAllUniqueFormulaValue = function () {
        var ranges = this.calculateInstance.uniqueRange;
        var uniqueAddr;
        var cell;
        var sheet;
        var range;
        for (var i = 0; i < ranges.length; i++) {
            uniqueAddr = ranges[i].split('!');
            sheet = getSheet(this.parent, getSheetIndex(this.parent, uniqueAddr[0]));
            range = getRangeIndexes(uniqueAddr[1]);
            cell = getCell(range[0], range[1], sheet);
            if (cell && cell.value === '#SPILL!') {
                continue;
            }
            for (var j = range[0]; j <= range[2]; j++) {
                for (var k = range[1]; k <= range[3]; k++) {
                    cell = getCell(j, k, sheet);
                    if (cell && cell.value) {
                        delete cell.value;
                    }
                }
            }
        }
    };
    WorkbookFormula.prototype.parseFormula = function (formula, rangeRef) {
        var temp;
        var str;
        var i = 0;
        var arr = [];
        var formulaVal = [];
        formulaVal = this.markSpecialChar(formula.replace('=', ''), rangeRef);
        formulaVal = rangeRef ? formulaVal.split(/\(|\)|=|\^|>|<|,|\+|-|\*|\/|%|&/g) :
            formulaVal.split(/\(|\)|=|\^|>|<|,|:|\+|-|\*|\/|%|&/g);
        var len = formulaVal.length;
        while (i < len) {
            temp = formulaVal[i];
            if (!temp) {
                i++;
                continue;
            }
            if (temp.length === 1) {
                arr.push(this.isUniqueChar(temp) ? this.getUniqueCharVal(temp) : temp);
            }
            else {
                str = temp[0];
                if (temp.indexOf('!') > 0) {
                    if (this.isUniqueChar(str)) {
                        arr.push(this.getUniqueCharVal(str));
                        temp = temp.substr(1);
                    }
                    str = temp.indexOf('!') + 1;
                    arr.push(temp.substr(0, str));
                    arr.push(temp.substr(str));
                }
                else if (this.isUniqueChar(str)) {
                    arr.push(this.getUniqueCharVal(str));
                    arr.push(temp.substr(1));
                }
                else {
                    arr.push(temp);
                }
            }
            i++;
        }
        return arr;
    };
    WorkbookFormula.prototype.getUniqueCharVal = function (formula) {
        switch (formula) {
            case this.uniqueOBracket:
                return '(';
            case this.uniqueCBracket:
                return ')';
            case this.uniqueCSeparator:
                return ',';
            case this.uniqueCOperator:
                return ':';
            case this.uniquePOperator:
                return '+';
            case this.uniqueSOperator:
                return '-';
            case this.uniqueMOperator:
                return '*';
            case this.uniqueDOperator:
                return '/';
            case this.uniqueModOperator:
                return '%';
            case this.uniqueConcateOperator:
                return '&';
            case this.uniqueEqualOperator:
                return '=';
            case this.uniqueExpOperator:
                return '^';
            case this.uniqueGTOperator:
                return '>';
            case this.uniqueLTOperator:
                return '<';
        }
        return '';
    };
    WorkbookFormula.prototype.isUniqueChar = function (formula) {
        var code = formula.charCodeAt(formula);
        return code >= 129 && code <= 142;
    };
    WorkbookFormula.prototype.markSpecialChar = function (formula, rangeRef) {
        formula = formula.replace(/\(/g, '(' + this.uniqueOBracket).replace(/\)/g, ')' + this.uniqueCBracket);
        if (rangeRef) {
            formula = formula.replace(/,/g, ',' + this.uniqueCSeparator);
        }
        else {
            formula = formula.replace(/,/g, ',' + this.uniqueCSeparator).replace(/:/g, ':' + this.uniqueCOperator);
        }
        formula = formula.replace(/\+/g, '+' + this.uniquePOperator).replace(/-/g, '-' + this.uniqueSOperator);
        formula = formula.replace(/\*/g, '*' + this.uniqueMOperator).replace(/\//g, '/' + this.uniqueDOperator);
        formula = formula.replace(/&/g, '&' + this.uniqueConcateOperator);
        formula = formula.replace(/=/g, '=' + this.uniqueEqualOperator);
        formula = formula.replace(/\^/g, '^' + this.uniqueExpOperator);
        formula = formula.replace(/>/g, '>' + this.uniqueGTOperator).replace(/</g, '<' + this.uniqueLTOperator);
        return formula.replace(/%/g, '%' + this.uniqueModOperator);
    };
    WorkbookFormula.prototype.refreshNamedRange = function (args) {
        var _this = this;
        if (args.definedNames && args.definedNames.length) {
            args.definedNames.forEach(function (definedName) {
                _this.parent.removeDefinedName(definedName.name, definedName.scope);
                _this.parent.addDefinedName(definedName);
            });
            return;
        }
        var len = this.parent.definedNames.length;
        if (!len) {
            return;
        }
        var definedNames = Object.assign({}, this.parent.definedNames);
        var range;
        var sheetName;
        var splitedRef;
        var definedName;
        var updated;
        for (var i = 0; i < len; i++) {
            definedName = definedNames[i];
            splitedRef = definedName.refersTo.split('!');
            sheetName = splitedRef[0].split('=')[1];
            if (sheetName !== args.sheet.name) {
                continue;
            }
            range = getRangeIndexes(splitedRef[1]);
            updated = this.parent.updateRangeOnInsertDelete(args, range);
            if (args.isInsert) {
                this.updateDefinedNames(definedName, sheetName, range, updated);
            }
            else {
                if (args.modelType === 'Row') {
                    this.updateDefinedNames(definedName, sheetName, range, updated, [range[0], range[2]], args);
                }
                else if (args.modelType === 'Column') {
                    this.updateDefinedNames(definedName, sheetName, range, updated, [range[1], range[3]], args);
                }
            }
        }
    };
    WorkbookFormula.prototype.updateDefinedNames = function (definedName, sheetName, range, changed, idx, args) {
        if (!changed) {
            return;
        }
        var index = this.parent.definedNames.indexOf(definedName);
        var eventArgs = {
            action: 'removeDefinedName',
            isRemoved: false,
            definedName: definedName.name,
            scope: definedName.scope,
            isEventTrigger: true
        };
        this.parent.notify(workbookFormulaOperation, eventArgs);
        if (idx) {
            var oldDefinedName = { name: definedName.name, comment: definedName.comment, refersTo: definedName.refersTo,
                scope: definedName.scope };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            oldDefinedName = new DefineName(this.parent, 'definedNames', oldDefinedName, true);
            if (args.definedNames) {
                args.definedNames.push(oldDefinedName);
            }
            else {
                args.definedNames = [oldDefinedName];
            }
            if (idx[1] < idx[0]) {
                return;
            }
        }
        definedName.refersTo = sheetName + '!' + getRangeAddress(range);
        this.parent.notify(workbookFormulaOperation, { action: 'addDefinedName', definedName: definedName, isAdded: false, index: index, isEventTrigger: true });
        var refreshArgs = { name: definedName.name, scope: definedName.scope, comment: definedName.comment,
            refersTo: definedName.refersTo, cancel: false };
        this.parent.notify('actionComplete', { eventArgs: refreshArgs, action: 'refreshNamedRange' });
    };
    return WorkbookFormula;
}());
export { WorkbookFormula };
