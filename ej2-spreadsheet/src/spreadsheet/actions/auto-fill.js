import { getColIdxFromClientX, getClientY, getClientX, selectAutoFillRange, setPosition, completeAction, showAggregate, dialog, locale, fillRange, hideAutoFillOptions, performUndoRedo, hideAutoFillElement } from '../../spreadsheet/index';
import { contentLoaded, positionAutoFillElement, getCellPosition, getRowIdxFromClientY } from '../../spreadsheet/index';
import { performAutoFill, isLockedCells } from '../../spreadsheet/index';
import { editAlert } from '../common/index';
import { updateSelectedRange, isHiddenRow, setAutoFill, refreshCell, getFillInfo, getautofillDDB } from '../../workbook/index';
import { getRangeIndexes, getSwapRange, getRowsHeight, getColumnsWidth, isInRange } from '../../workbook/index';
import { getCell, getRangeAddress, isHiddenCol, beginAction } from '../../workbook/index';
import { addClass, isNullOrUndefined, removeClass } from '@syncfusion/ej2-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
/**
 * AutoFill module allows to perform auto fill functionalities.
 */
var AutoFill = /** @class */ (function () {
    function AutoFill(parent) {
        this.fillOptionIndex = 0;
        this.parent = parent;
        this.addEventListener();
    }
    AutoFill.prototype.getfillItems = function () {
        var l10n = this.parent.serviceLocator.getService(locale);
        return [
            { text: l10n.getConstant('CopyCells') },
            { text: l10n.getConstant('FillSeries') },
            { text: l10n.getConstant('FillFormattingOnly') },
            { text: l10n.getConstant('FillWithoutFormatting') }
        ];
    };
    AutoFill.prototype.createAutoFillElement = function () {
        var element = this.parent.getMainContent();
        var ele = this.parent.createElement('div', { className: 'e-autofill' });
        if (element.lastElementChild && element.lastElementChild.classList.contains('e-ss-overlay')) {
            element.insertBefore(ele, element.getElementsByClassName('e-ss-overlay')[0]);
        }
        else {
            element.appendChild(ele);
        }
        this.autoFillElement = ele;
        this.getautofillDDB({ id: this.parent.element.id + '_autofilloptionbtn', appendElem: element });
    };
    AutoFill.prototype.getautofillDDB = function (args) {
        var _this = this;
        var splitBtnElem = this.parent.createElement('button', { id: args.id, className: 'e-filloption' });
        splitBtnElem.appendChild(this.parent.createElement('span', { className: 'e-tbar-btn-text' }));
        this.autoFillDropDown = new DropDownButton({
            cssClass: 'e-dragfill-ddb',
            iconCss: 'e-icons e-dragfill-icon',
            items: this.getfillItems(),
            createPopupOnClick: true,
            select: function (args) {
                _this.autoFillOptionClick({ type: _this.getFillType(args.item.text) });
            },
            beforeOpen: function () { return _this.autoFillClick(); }
        });
        this.autoFillDropDown.createElement = this.parent.createElement;
        this.autoFillDropDown.appendTo(splitBtnElem);
        args.appendElem.appendChild(splitBtnElem);
        return this.autoFillDropDown;
    };
    AutoFill.prototype.getFillType = function (text) {
        var l10n = this.parent.serviceLocator.getService(locale);
        var type;
        if (text === l10n.getConstant('CopyCells')) {
            type = 'CopyCells';
        }
        else if (text === l10n.getConstant('FillSeries')) {
            type = 'FillSeries';
        }
        else if (text === l10n.getConstant('FillFormattingOnly')) {
            type = 'FillFormattingOnly';
        }
        else {
            type = 'FillWithoutFormatting';
        }
        return type;
    };
    AutoFill.prototype.autoFillClick = function () {
        var l10n = this.parent.serviceLocator.getService(locale);
        var fillInfo = { fillType: 'FillSeries', disableItems: [''] };
        this.parent.notify(getFillInfo, fillInfo);
        this.autoFillDropDown.setProperties({ 'items': this.getfillItems() }, true);
        this.autoFillDropDown.removeItems(fillInfo.disableItems);
        this.refreshAutoFillOption(l10n.getConstant(fillInfo.fillType));
    };
    AutoFill.prototype.getFillRange = function (pStartCell, pEndCell, pFillCell, direction) {
        switch (direction) {
            case 'Up':
                return [pFillCell.rowIndex, pStartCell.colIndex, pStartCell.rowIndex - 1, pEndCell.colIndex];
            case 'Right':
                return [pStartCell.rowIndex, pEndCell.colIndex + 1, pEndCell.rowIndex, pFillCell.colIndex];
            case 'Down':
                return [pEndCell.rowIndex + 1, pStartCell.colIndex, pFillCell.rowIndex, pEndCell.colIndex];
            case 'Left':
                return [pStartCell.rowIndex, pFillCell.colIndex, pEndCell.rowIndex, pStartCell.colIndex - 1];
        }
    };
    AutoFill.prototype.autoFillOptionClick = function (args) {
        var l10n = this.parent.serviceLocator.getService(locale);
        var sheet = this.parent.getActiveSheet();
        var range = getSwapRange(getRangeIndexes(this.parent.selectionModule.dAutoFillCell));
        var currcell = getRangeIndexes(sheet.selectedRange);
        var minr = range[0];
        var minc = range[1];
        var maxr = range[2];
        var maxc = range[3];
        var dir = this.getDirection({ rowIndex: maxr, colIndex: maxc }, { rowIndex: currcell[2],
            colIndex: currcell[3] });
        var dataRange = [minr, minc, maxr, maxc];
        var fillRange = this.getFillRange({ rowIndex: minr, colIndex: minc }, { rowIndex: maxr, colIndex: maxc }, { rowIndex: currcell[2], colIndex: currcell[3] }, dir);
        this.refreshAutoFillOption(l10n.getConstant(args.type));
        this.parent.notify(performUndoRedo, { isUndo: true, isPublic: true, preventEvt: args.type === 'FillWithoutFormatting', preventReSelect: true });
        var eventArgs = { dataRange: sheet.name + '!' + getRangeAddress(dataRange), fillRange: sheet.name + '!' + getRangeAddress(fillRange), direction: dir, fillType: args.type, isFillOptClick: true };
        this.isVerticalFill = eventArgs.direction === 'Down' || eventArgs.direction === 'Up';
        this.parent.notify(setAutoFill, eventArgs);
        this.positionAutoFillElement({ isautofill: true });
        var autoFillArgs = { dataRange: eventArgs.dataRange, fillRange: eventArgs.fillRange, fillType: eventArgs.fillType, direction: eventArgs.direction, selectedRange: sheet.name + '!' + getRangeAddress(currcell) };
        this.parent.notify(completeAction, { eventArgs: autoFillArgs, action: 'autofill' });
        this.parent.notify(showAggregate, {});
        this.autoFillClick();
    };
    AutoFill.prototype.refreshAutoFillOption = function (type) {
        for (var i = 0; i < this.autoFillDropDown.items.length; i++) {
            this.autoFillDropDown.items[i].iconCss = '';
        }
        for (var i = 0; i < this.autoFillDropDown.items.length; i++) {
            if (this.autoFillDropDown.items[i].text === type) {
                this.autoFillDropDown.items[i].iconCss = 'e-icons e-selected-icon';
            }
        }
        if (['Copy Cells', 'Fill Series', 'Fill Formatting Only', 'Fill Without Formatting'].indexOf(type) < 0) {
            this.autoFillDropDown.items[this.fillOptionIndex].iconCss = '';
        }
        this.autoFillDropDown.dataBind();
    };
    AutoFill.prototype.positionAutoFillElement = function (args) {
        var top = 0;
        var left = 0;
        var sheet = this.parent.getActiveSheet();
        var indexes = getSwapRange(getRangeIndexes(sheet.selectedRange));
        var tdiff = -5;
        var ldiff = -5;
        var otdiff = 6;
        var oldiff = 6;
        var isRowSelected = (indexes[1] === 0 && indexes[3] === sheet.colCount - 1);
        var isColSelected = (indexes[0] === 0 && indexes[2] === sheet.rowCount - 1);
        var rowIdx = indexes[2];
        var colIdx = indexes[3];
        var height;
        var width;
        var pos;
        var cell = this.parent.getCell(rowIdx, colIdx);
        if (isHiddenCol(sheet, indexes[3]) || isHiddenRow(sheet, indexes[2]) ||
            (cell && cell.classList.contains('e-formularef-selection')) || (sheet.isProtected && sheet.protectSettings.selectUnLockedCells
            && isLockedCells(this.parent, indexes))) {
            this.hideAutoFillElement();
            return;
        }
        if ((sheet.isProtected && (sheet.protectSettings.selectCells || sheet.protectSettings.selectUnLockedCells)) || !sheet.isProtected) {
            if (isRowSelected) {
                tdiff = -5;
                ldiff = -1;
                otdiff = 6;
                oldiff = 2;
                rowIdx = indexes[2];
                colIdx = indexes[1];
            }
            else if (isColSelected) {
                ldiff = -5;
                tdiff = 0;
                otdiff = 1;
                oldiff = 6;
                rowIdx = indexes[0];
                colIdx = indexes[3];
            }
            if (sheet.frozenColumns || sheet.frozenRows) {
                if (isColSelected || isRowSelected) {
                    setPosition(this.parent, this.autoFillElement, indexes, 'e-autofill', args && args.preventAnimation);
                    if (this.parent.autoFillSettings.showFillOptions && args && args.isautofill) {
                        setPosition(this.parent, this.autoFillDropDown.element, indexes, 'e-filloption');
                    }
                }
                else {
                    setPosition(this.parent, this.autoFillElement, [rowIdx, colIdx, rowIdx, colIdx], 'e-autofill', args && args.preventAnimation);
                    if (this.parent.autoFillSettings.showFillOptions && args && args.isautofill) {
                        setPosition(this.parent, this.autoFillDropDown.element, [rowIdx, colIdx, rowIdx, colIdx], 'e-filloption');
                    }
                }
                if (this.autoFillElement) {
                    this.autoFillCell = { rowIndex: rowIdx, colIndex: colIdx };
                    var element = this.parent.element.querySelectorAll('.e-autofill')[0];
                    if (element) {
                        var clientRect = element.getBoundingClientRect();
                        this.autoFillElementPosition = {
                            left: clientRect.left, top: clientRect.top
                        };
                    }
                }
            }
            else {
                pos = getCellPosition(sheet, [rowIdx, colIdx, rowIdx, colIdx], this.parent.frozenRowCount(sheet), this.parent.frozenColCount(sheet), this.parent.viewport.beforeFreezeHeight, this.parent.viewport.beforeFreezeWidth, this.parent.sheetModule.colGroupWidth);
                height = getRowsHeight(sheet, rowIdx, rowIdx, true);
                width = getColumnsWidth(sheet, colIdx, colIdx, true);
                if (!isColSelected) {
                    top += height;
                }
                if (!isRowSelected) {
                    left += width;
                }
                top += Math.round(pos.top) + tdiff;
                left += Math.round(pos.left) + ldiff;
                if (this.autoFillElement) {
                    removeClass([this.autoFillElement], 'e-hide');
                    this.autoFillElement.style.top = top + 'px';
                    this.autoFillElement.style.left = left + 'px';
                    this.autoFillCell = { rowIndex: rowIdx, colIndex: colIdx };
                    var clientRect = this.autoFillElement.getBoundingClientRect();
                    this.autoFillElementPosition = {
                        left: clientRect.left, top: clientRect.top
                    };
                    if (this.parent.autoFillSettings.showFillOptions && args && args.isautofill) {
                        removeClass([this.autoFillDropDown.element], 'e-hide');
                        this.autoFillDropDown.element.style.top = top + otdiff + 'px';
                        this.autoFillDropDown.element.style.left = left + oldiff + 'px';
                    }
                }
            }
        }
    };
    AutoFill.prototype.hideAutoFillElement = function () {
        var elem = this.parent.element;
        [].slice.call(elem.querySelectorAll('.e-autofill')).forEach(function (optElem) {
            if (elem) {
                addClass([optElem], 'e-hide');
            }
        });
    };
    AutoFill.prototype.hideAutoFillOptions = function () {
        var elem = this.parent.element;
        [].slice.call(elem.querySelectorAll('.e-filloption')).forEach(function (optElem) {
            if (elem) {
                addClass([optElem], 'e-hide');
            }
        });
    };
    AutoFill.prototype.selectAutoFillRange = function (args) {
        var rowObj = { clientY: getClientY(args.e), target: args.e.target };
        var colObj = { clientX: getClientX(args.e), target: args.e.target };
        var sheet = this.parent.getActiveSheet();
        this.parent.notify(getRowIdxFromClientY, rowObj);
        this.parent.notify(getColIdxFromClientX, colObj);
        var rangeIndexes;
        var autofillRange = this.getAutoFillRange({ rowIndex: rowObj.clientY, colIndex: colObj.clientX });
        if (autofillRange && autofillRange.fillRange) {
            rangeIndexes = [autofillRange.startCell.rowIndex, autofillRange.startCell.colIndex, autofillRange.endCell.rowIndex,
                autofillRange.endCell.colIndex];
        }
        else {
            rangeIndexes = getRangeIndexes(sheet.selectedRange);
        }
        args.indexes = rangeIndexes;
        return rangeIndexes;
    };
    AutoFill.prototype.getAutoFillRange = function (idx) {
        var sheet = this.parent.getActiveSheet();
        var aCell = this.autoFillCell;
        var range = getSwapRange(getRangeIndexes(sheet.selectedRange));
        var minr = range[0];
        var minc = range[1];
        var maxr = range[2];
        var maxc = range[3];
        var inRange = isInRange(range, [idx.rowIndex, idx.colIndex, idx.rowIndex, idx.colIndex], true);
        var minIdx = { rowIndex: minr, colIndex: minc };
        var scell = { rowIndex: range[0], colIndex: range[1] };
        var ecell = { rowIndex: range[2], colIndex: range[3] };
        var maxIdx = { rowIndex: maxr, colIndex: maxc };
        var modifiedIdx = this.modifyRangeForMerge(idx.rowIndex, idx.colIndex, aCell.rowIndex, aCell.colIndex, range);
        if (idx.rowIndex < aCell.rowIndex) { // up
            if ((minr - idx.rowIndex > idx.colIndex - maxc) && (minr - idx.rowIndex > minc - idx.colIndex)) {
                return inRange ? { startCell: minIdx, endCell: { rowIndex: idx.rowIndex, colIndex: maxc } } : { startCell: maxIdx, endCell: { rowIndex: modifiedIdx.rowIndex, colIndex: minc }, fillRange: [modifiedIdx.rowIndex, minc, minr - 1, maxc], direction: 'Up' };
            }
            else if (idx.colIndex > aCell.colIndex) {
                return { startCell: minIdx, endCell: { rowIndex: maxr, colIndex: idx.colIndex },
                    fillRange: [minr, maxc + 1, maxr, idx.colIndex], direction: 'Right' };
            }
            else if (idx.colIndex < aCell.colIndex) {
                return inRange ? { startCell: minIdx, endCell: maxIdx } : { startCell: maxIdx, endCell: { rowIndex: minr, colIndex: idx.colIndex }, fillRange: [minr, idx.colIndex, maxr, minc - 1], direction: 'Left' };
            }
            else {
                return { startCell: scell, endCell: ecell };
            }
        }
        else if (idx.colIndex > aCell.colIndex) { // right
            if ((idx.rowIndex - maxr > idx.colIndex - maxc)) {
                return { startCell: minIdx, endCell: { rowIndex: idx.rowIndex, colIndex: maxc },
                    fillRange: [maxr + 1, minc, idx.rowIndex, maxc], direction: 'Down' };
            }
            else {
                return { startCell: minIdx, endCell: { rowIndex: maxr, colIndex: modifiedIdx.colIndex },
                    fillRange: [minr, maxc + 1, maxr, modifiedIdx.colIndex], direction: 'Right' };
            }
        }
        else if (idx.colIndex < aCell.colIndex) { // left
            if ((idx.rowIndex - maxr > maxc - idx.colIndex) || ((idx.rowIndex - minr > maxc - idx.colIndex) && idx.rowIndex !== maxr)) {
                return { startCell: minIdx, endCell: { rowIndex: idx.rowIndex, colIndex: maxc },
                    fillRange: [maxr + 1, minc, idx.rowIndex, maxc], direction: 'Down' };
            }
            else {
                return inRange ? { startCell: minIdx, endCell: maxIdx } : { startCell: maxIdx, endCell: { rowIndex: minr, colIndex: modifiedIdx.colIndex }, fillRange: [minr, modifiedIdx.colIndex, maxr, minc - 1], direction: 'Left' };
            }
        }
        else if (idx.rowIndex > aCell.rowIndex) { // down
            return { startCell: minIdx, endCell: { rowIndex: modifiedIdx.rowIndex, colIndex: maxc },
                fillRange: [maxr + 1, minc, modifiedIdx.rowIndex, maxc], direction: 'Down' };
        }
        else if (idx.rowIndex === aCell.rowIndex && idx.colIndex === aCell.colIndex) {
            return { startCell: scell, endCell: ecell };
        }
        else {
            return { startCell: scell, endCell: ecell };
        }
    };
    AutoFill.prototype.modifyRangeForMerge = function (rowIdx, colIdx, autoFillRowIdx, autoFillColIdx, selRange) {
        var modifiedIdx = { rowIndex: rowIdx, colIndex: colIdx };
        if (this.isMergedRange(selRange)) {
            var selRowCount = selRange[2] - selRange[0] + 1;
            var selColCount = selRange[3] - selRange[1] + 1;
            var remainder = void 0;
            if (rowIdx < autoFillRowIdx) { // up
                remainder = (selRange[2] - rowIdx + 1) % selRowCount;
                if (remainder && rowIdx - (selRowCount - remainder) >= 0) {
                    modifiedIdx.rowIndex = rowIdx - (selRowCount - remainder);
                }
            }
            else if (colIdx > autoFillColIdx) { // right
                remainder = (colIdx - selRange[1] + 1) % selColCount;
                if (remainder) {
                    modifiedIdx.colIndex = colIdx + (selColCount - remainder);
                }
            }
            else if (colIdx < autoFillColIdx) { // left
                remainder = (selRange[3] - colIdx + 1) % selColCount;
                if (remainder && colIdx - (selColCount - remainder) >= 0) {
                    modifiedIdx.colIndex = colIdx - (selColCount - remainder);
                }
            }
            else if (rowIdx > autoFillRowIdx) { // down
                remainder = (rowIdx - selRange[0] + 1) % selRowCount;
                if (remainder) {
                    modifiedIdx.rowIndex = rowIdx + (selRowCount - remainder);
                }
            }
        }
        return modifiedIdx;
    };
    AutoFill.prototype.performAutoFill = function (args) {
        if (!(args.event.clientX > this.autoFillElementPosition.left && args.event.clientX < this.autoFillElementPosition.left + 10) ||
            !(args.event.clientY > this.autoFillElementPosition.top && args.event.clientY < this.autoFillElementPosition.top + 10)) {
            var rowObj = { clientY: getClientY(args.event), target: args.event.target };
            var colObj = { clientX: getClientX(args.event), target: args.event.target };
            var sheet = this.parent.getActiveSheet();
            this.parent.notify(getRowIdxFromClientY, rowObj);
            this.parent.notify(getColIdxFromClientX, colObj);
            var autofillRange = this.getAutoFillRange({ rowIndex: rowObj.clientY, colIndex: colObj.clientX });
            if (autofillRange && autofillRange.fillRange) {
                var eventArgs = {
                    dataRange: sheet.name + '!' + args.dAutoFillCell,
                    fillRange: sheet.name + '!' + getRangeAddress(autofillRange.fillRange), direction: autofillRange.direction,
                    fillType: this.parent.autoFillSettings.fillType, cancel: false
                };
                this.parent.notify(beginAction, { eventArgs: eventArgs, action: 'autofill' });
                if (eventArgs.cancel) {
                    return;
                }
                var isLockedCell = isLockedCells(this.parent, autofillRange.fillRange);
                if (sheet.isProtected && isLockedCell) {
                    this.parent.notify(editAlert, null);
                    return;
                }
                this.performAutoFillAction(eventArgs, autofillRange, isLockedCell);
                if (this.isMergedRange(getRangeIndexes(eventArgs.dataRange))) {
                    this.parent.renderModule.refreshSheet();
                }
                this.positionAutoFillElement({ isautofill: !this.isMergedRange(getRangeIndexes(eventArgs.fillRange)) });
            }
        }
        else {
            this.positionAutoFillElement({ isautofill: false });
        }
    };
    AutoFill.prototype.refreshCell = function (options) {
        this.parent.serviceLocator.getService('cell').refreshRange([options.rowIndex, options.colIndex, options.rowIndex, options.colIndex]);
    };
    AutoFill.prototype.isRange = function (range) {
        return range && (range[0] !== range[2] || range[1] !== range[3]);
    };
    AutoFill.prototype.fillRange = function (options) {
        var args = {
            dataRange: '',
            fillRange: '',
            direction: 'Down',
            fillType: 'CopyCells'
        };
        var sheet = this.parent.getActiveSheet();
        var range = getSwapRange(getRangeIndexes(sheet.selectedRange));
        var minr = range[0];
        var minc = range[1];
        var maxr = range[2];
        var maxc = range[3];
        var dirc = this.getDirection({ rowIndex: minr, colIndex: minc }, { rowIndex: maxr, colIndex: maxc }, options.verticalFill);
        var isProperKey = options.verticalFill ? dirc === 'Down' : dirc === 'Right';
        if (this.isRange(range) && isProperKey) {
            if (options.verticalFill) {
                args.dataRange = sheet.name + '!' + getRangeAddress([minr, minc, minr, maxc]);
                args.fillRange = sheet.name + '!' + getRangeAddress([minr + 1, minc, maxr, maxc]);
            }
            else {
                args.dataRange = sheet.name + '!' + getRangeAddress([minr, minc, maxr, minc]);
                args.fillRange = sheet.name + '!' + getRangeAddress([minr, minc + 1, maxr, maxc]);
            }
        }
        else {
            if (options.verticalFill) {
                if (!minr) {
                    return;
                }
                args.dataRange = sheet.name + '!' + getRangeAddress([minr - 1, minc, minr - 1, maxc]);
            }
            else {
                if (!minc) {
                    return;
                }
                args.dataRange = sheet.name + '!' + getRangeAddress([minr, minc - 1, maxr, minc - 1]);
            }
            args.fillRange = sheet.name + '!' + getRangeAddress(range);
        }
        args.direction = options.verticalFill ? 'Down' : 'Right';
        args.fillType = 'CopyCells';
        if (sheet.isProtected) {
            return;
        }
        this.performAutoFillAction(args);
    };
    AutoFill.prototype.getDirection = function (endCell, currcell, isVerticalFill) {
        isVerticalFill = isNullOrUndefined(isVerticalFill) ? this.isVerticalFill : isVerticalFill;
        if (isVerticalFill) {
            if (currcell.rowIndex < endCell.rowIndex) { // up
                return 'Up';
            }
            else if (currcell.rowIndex > endCell.rowIndex) { // down
                return 'Down';
            }
            else if (currcell.colIndex > endCell.colIndex) { // right
                return 'Right';
            }
            else if (currcell.colIndex < endCell.colIndex) { // left
                return 'Left';
            }
        }
        else {
            if (currcell.colIndex > endCell.colIndex) { // right
                return 'Right';
            }
            else if (currcell.colIndex < endCell.colIndex) { // left
                return 'Left';
            }
            else if (currcell.rowIndex < endCell.rowIndex) { // up
                return 'Up';
            }
            else if (currcell.rowIndex > endCell.rowIndex) { // down
                return 'Down';
            }
        }
        return null;
    };
    AutoFill.prototype.performAutoFillAction = function (args, autoFillRange, isLockedCell) {
        var _this = this;
        var sheet = this.parent.getActiveSheet();
        var l10n = this.parent.serviceLocator.getService(locale);
        if (this.isMergedRange(getRangeIndexes(args.fillRange))) {
            var dialogInst_1 = this.parent.serviceLocator.getService(dialog);
            dialogInst_1.show({
                target: this.parent.element, isModal: true, showCloseIcon: true, height: 180, width: 400, content: l10n.getConstant('AutoFillMergeAlertMsg'),
                buttons: [{
                        buttonModel: { content: this.parent.serviceLocator.getService(locale).getConstant('Ok'), isPrimary: true },
                        click: function () { dialogInst_1.hide(); _this.parent.selectRange(args.dataRange); }
                    }],
                close: function () { dialogInst_1.hide(); _this.parent.selectRange(args.dataRange); }
            }, false);
            return;
        }
        this.isVerticalFill = args.direction === 'Down' || args.direction === 'Up';
        this.parent.notify(setAutoFill, {
            dataRange: args.dataRange,
            fillRange: args.fillRange, direction: args.direction, fillType: args.fillType, isLockedCell: isLockedCell
        });
        var selRange = autoFillRange ? getRangeAddress([autoFillRange.startCell.rowIndex, autoFillRange.startCell.colIndex,
            autoFillRange.endCell.rowIndex, autoFillRange.endCell.colIndex]) : sheet.selectedRange;
        updateSelectedRange(this.parent, selRange, sheet);
        var autoFillArgs = { dataRange: args.dataRange, fillRange: args.fillRange, fillType: args.fillType, direction: args.direction,
            selectedRange: selRange };
        this.parent.notify(completeAction, { eventArgs: autoFillArgs, action: 'autofill' });
        this.parent.notify(showAggregate, {});
    };
    AutoFill.prototype.getRangeData = function (options) {
        var arr = [];
        var sheet = this.parent.getActiveSheet();
        var minr = options.range[0];
        var minc = options.range[1];
        var maxr = options.range[2];
        var maxc = options.range[3];
        var minCol = minc;
        var cell;
        while (minr <= maxr) {
            if (isHiddenRow(sheet, minr)) {
                minr++;
                continue;
            }
            minc = minCol;
            while (minc <= maxc) {
                if (isHiddenCol(sheet, minc)) {
                    minc++;
                    continue;
                }
                cell = getCell(minr, minc, sheet);
                arr.push(cell);
                minc++;
            }
            minr++;
        }
        return arr;
    };
    AutoFill.prototype.isMergedRange = function (range) {
        var i = 0;
        var data = this.getRangeData({ range: range, sheetIdx: this.parent.activeSheetIndex });
        for (i = 0; i < data.length; i++) {
            if (data[i] && (data[i].rowSpan || data[i].colSpan)) {
                return true;
            }
        }
        return false;
    };
    AutoFill.prototype.addEventListener = function () {
        this.parent.on(contentLoaded, this.createAutoFillElement, this);
        this.parent.on(positionAutoFillElement, this.positionAutoFillElement, this);
        this.parent.on(hideAutoFillOptions, this.hideAutoFillOptions, this);
        this.parent.on(hideAutoFillElement, this.hideAutoFillElement, this);
        this.parent.on(performAutoFill, this.performAutoFill, this);
        this.parent.on(fillRange, this.fillRange, this);
        this.parent.on(selectAutoFillRange, this.selectAutoFillRange, this);
        this.parent.on(refreshCell, this.refreshCell, this);
        this.parent.on(getautofillDDB, this.getautofillDDB, this);
    };
    AutoFill.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(contentLoaded, this.createAutoFillElement);
            this.parent.off(positionAutoFillElement, this.positionAutoFillElement);
            this.parent.off(hideAutoFillOptions, this.hideAutoFillOptions);
            this.parent.off(hideAutoFillElement, this.hideAutoFillElement);
            this.parent.off(performAutoFill, this.performAutoFill);
            this.parent.off(fillRange, this.fillRange);
            this.parent.off(selectAutoFillRange, this.selectAutoFillRange);
            this.parent.off(refreshCell, this.refreshCell);
            this.parent.off(getautofillDDB, this.getautofillDDB);
        }
    };
    /**
     * Destroy AutoFill module.
     *
     * @returns {void} - Destroy auto fill module.
     */
    AutoFill.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    /**
     * Get the AutoFill module name.
     *
     * @returns {string} - Get the auto fill module name.
     */
    AutoFill.prototype.getModuleName = function () {
        return 'autofill';
    };
    return AutoFill;
}());
export { AutoFill };
