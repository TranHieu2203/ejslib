import { formulaBar, locale, enableFormulaInput, focus, getUpdateUsingRaf, dialog } from '../common/index';
import { mouseUpAfterSelection, click } from '../common/index';
import { getRangeIndexes, getRangeFromAddress, getCellAddress, getCellIndexes } from './../../workbook/common/address';
import { getSheetName, getTypeFromFormat, getSheet, checkIsFormula, getCell } from '../../workbook/index';
import { updateSelectedRange, getSheetNameFromAddress, getSheetIndex, isLocked, getColumn } from '../../workbook/index';
import { ComboBox, DropDownList } from '@syncfusion/ej2-dropdowns';
import { rippleEffect, EventHandler, detach, Internationalization, isNullOrUndefined, closest, select } from '@syncfusion/ej2-base';
import { isUndefined } from '@syncfusion/ej2-base';
import { editOperation, formulaBarOperation, keyDown, keyUp, formulaOperation, editAlert, editValue, toggleFormulaBar, renderInsertDlg } from '../common/event';
import { intToDate } from '../../workbook/common/math';
import { ListView } from '@syncfusion/ej2-lists';
import { workbookFormulaOperation, selectionComplete } from '../../workbook/common/event';
import { isFormulaBarEdit } from '../common/event';
/**
 * Represents Formula bar for Spreadsheet.
 */
var FormulaBar = /** @class */ (function () {
    function FormulaBar(parent) {
        this.categoryCollection = [];
        this.formulaCollection = [];
        this.isGoto = false;
        this.parent = parent;
        this.addEventListener();
    }
    FormulaBar.prototype.getModuleName = function () {
        return 'formulaBar';
    };
    FormulaBar.prototype.createFormulaBar = function (args) {
        if (!this.parent.showFormulaBar && this.insertFnRipple) {
            this.destroy();
            return;
        }
        var l10n = this.parent.serviceLocator.getService(locale);
        var id = this.parent.element.id;
        var fBarWrapper = this.parent.createElement('div', { className: 'e-formula-bar-panel' });
        if (!this.parent.isMobileView()) {
            var nameBox = this.parent.createElement('input', { id: id + '_name_box', attrs: { type: 'text' } });
            fBarWrapper.appendChild(nameBox);
            this.comboBoxInstance = new ComboBox({
                value: 'A1',
                cssClass: 'e-name-box',
                width: '',
                noRecordsTemplate: '',
                fields: { text: 'name', value: 'refersTo' },
                beforeOpen: this.nameBoxBeforeOpen.bind(this),
                blur: this.nameBoxBlur.bind(this),
                select: this.nameBoxSelect.bind(this),
                change: function () {
                    /** */
                }
            });
            this.comboBoxInstance.createElement = this.parent.createElement;
            this.comboBoxInstance.appendTo(nameBox);
            this.comboBoxInstance.element.parentElement.title = l10n.getConstant('NameBox');
        }
        var insertFnBtn = fBarWrapper.appendChild(this.parent.createElement('button', {
            className: 'e-btn e-css e-flat e-icon-btn e-insert-function', attrs: { 'title': l10n.getConstant('InsertFunction') }
        }));
        insertFnBtn.appendChild(this.parent.createElement('span', { className: 'e-btn-icon e-icons' }));
        this.insertFnRipple = rippleEffect(fBarWrapper, { selector: '.e-insert-function' });
        fBarWrapper.appendChild(this.parent.createElement('div', { className: 'e-separator' }));
        var textarea = fBarWrapper.appendChild(this.parent.createElement('textarea', {
            className: 'e-formula-bar e-css', id: id + '_formula_input',
            attrs: { 'title': l10n.getConstant('FormulaBar'), 'spellcheck': 'false' }
        }));
        textarea.rows = 1;
        if (this.parent.isMobileView()) {
            textarea.placeholder = l10n.getConstant('MobileFormulaBarPlaceHolder');
            EventHandler.add(textarea, 'focus', this.textAreaFocusIn, this);
            EventHandler.add(textarea, 'blur', this.textAreaFocusOut, this);
        }
        else {
            var text = l10n.getConstant('ExpandFormulaBar');
            fBarWrapper.appendChild(this.parent.createElement('span', { className: 'e-drop-icon e-icons', attrs: { 'title': text, 'role': 'button',
                    'tabindex': '-1', 'aria-label': text } }));
        }
        if (args && args.uiUpdate) {
            this.parent.element.insertBefore(fBarWrapper, document.getElementById(id + '_sheet_panel'));
        }
        else {
            this.parent.element.appendChild(fBarWrapper);
        }
    };
    FormulaBar.prototype.textAreaFocusIn = function () {
        var formulaPanel = this.parent.element.querySelector('.e-formula-bar-panel');
        var tickBtn = this.parent.createElement('button', { className: 'e-btn e-css e-flat e-icon-btn e-formula-submit' });
        tickBtn.appendChild(this.parent.createElement('span', { className: 'e-btn-icon e-icons e-tick-icon' }));
        formulaPanel.classList.add('e-focused');
        formulaPanel.appendChild(tickBtn);
    };
    FormulaBar.prototype.textAreaFocusOut = function () {
        var formulaPanel = this.parent.element.querySelector('.e-formula-bar-panel');
        formulaPanel.classList.remove('e-focused');
        detach(formulaPanel.querySelector('.e-formula-submit'));
    };
    FormulaBar.prototype.keyDownHandler = function (e) {
        var trgtElem = e.target;
        if (this.parent.isEdit && !this.parent.getActiveSheet().isProtected) {
            if ((checkIsFormula(trgtElem.value) || (trgtElem.validity && trgtElem.value.toString().indexOf('=') === 0)) &&
                e.keyCode === 16) {
                return;
            }
            if (trgtElem.classList.contains('e-formula-bar')) {
                this.parent.notify(editOperation, { action: 'refreshEditor', value: trgtElem.value, refreshEditorElem: true });
            }
        }
    };
    FormulaBar.prototype.keyUpHandler = function (e) {
        if (this.parent.isEdit) {
            var trgtElem = e.target;
            if (trgtElem.classList.contains('e-formula-bar')) {
                var eventArg = { action: 'getCurrentEditValue', editedValue: '' };
                this.parent.notify(editOperation, eventArg);
                if (eventArg.editedValue !== trgtElem.value && e.keyCode !== 16) {
                    this.parent.notify(editOperation, { action: 'refreshEditor', value: trgtElem.value, refreshEditorElem: true });
                }
            }
        }
    };
    FormulaBar.prototype.nameBoxBeforeOpen = function (args) {
        if (this.comboBoxInstance.element.classList.contains('e-name-editing')) {
            args.cancel = true;
        }
        else {
            this.comboBoxInstance.element.select();
        }
    };
    FormulaBar.prototype.nameBoxBlur = function () {
        if (this.comboBoxInstance.element.classList.contains('e-name-editing')) {
            this.comboBoxInstance.element.classList.remove('e-name-editing');
            this.UpdateValueAfterMouseUp();
        }
    };
    FormulaBar.prototype.nameBoxSelect = function (args) {
        if (args.isInteracted) {
            var refersTo = args.itemData.refersTo.substr(1);
            var sheetIdx = getSheetIndex(this.parent, getSheetNameFromAddress(refersTo));
            if (sheetIdx === undefined) {
                return;
            }
            var range = getRangeFromAddress(refersTo);
            var sheet = getSheet(this.parent, sheetIdx);
            if (range.indexOf(':') !== -1) {
                var colIndex = range.indexOf(':');
                var left = range.substr(0, colIndex);
                var right = range.substr(colIndex + 1, range.length);
                left = left.replace('$', '');
                right = right.replace('$', '');
                if (right.match(/\D/g) && !right.match(/[0-9]/g) && left.match(/\D/g) && !left.match(/[0-9]/g)) {
                    left = left + '1';
                    right = right + sheet.rowCount;
                    range = left + ':' + right;
                }
                else if (!right.match(/\D/g) && right.match(/[0-9]/g) && !left.match(/\D/g) && left.match(/[0-9]/g)) {
                    left = getCellAddress(parseInt(left, 10) - 1, 0);
                    right = getCellAddress(parseInt(right, 10) - 1, sheet.colCount - 1);
                    range = left + ':' + right;
                }
            }
            if ((sheetIdx) === this.parent.activeSheetIndex) {
                this.parent.selectRange(range);
                focus(this.parent.element);
            }
            else {
                updateSelectedRange(this.parent, range, sheet);
                this.parent.activeSheetIndex = sheetIdx;
            }
        }
    };
    FormulaBar.prototype.formulaBarUpdateHandler = function (e) {
        var _this = this;
        var sheet = this.parent.getActiveSheet();
        var range = sheet.selectedRange.split(':');
        var address;
        var editArgs = { action: 'getElement', element: null };
        this.parent.notify(editOperation, editArgs);
        var formulaBar = this.parent.element.querySelector('.e-formula-bar');
        var intl = new Internationalization();
        if (e.type === 'mousemove' || e.type === 'pointermove') {
            var indexes1 = getRangeIndexes(range[0]);
            var indexes2 = getRangeIndexes(range[1]);
            address = Math.abs(indexes1[0] - indexes2[0]) + 1 + "R x " + (Math.abs(indexes1[1] - indexes2[1]) + 1) + "C";
            if (this.parent.isEdit) {
                if (e.target && !e.target.classList.contains('e-spreadsheet-edit')) {
                    this.parent.notify(editValue, null);
                }
                else if (editArgs.element) {
                    formulaBar.value = editArgs.element.textContent;
                }
            }
        }
        else {
            address = range[0];
            var data = this.parent.getData(getSheetName(this.parent) + "!" + address);
            data.then(function (values) {
                if (!_this.parent) {
                    return;
                }
                var value = '';
                var intDate;
                values.forEach(function (cell) {
                    var type = cell && cell.format ? getTypeFromFormat(cell.format) : 'General';
                    if (cell) {
                        if (!isNullOrUndefined(cell.value)) {
                            intDate = intToDate(Number(cell.value));
                            if (intDate.toString() !== 'Invalid Date' && (type === 'ShortDate' || type === 'LongDate')) {
                                value = intl.formatDate(intDate, {
                                    type: 'date',
                                    skeleton: 'yMd'
                                });
                                if (value && value.indexOf('/') > -1 || value.indexOf('-') > 0) {
                                    var dateSplit = value.split(/-|\//);
                                    var cellFormat = cell ? cell.format : '';
                                    if (((cellFormat === 'dd-MM-yyyy' || cellFormat === 'dd/MM/yyyy')) && Number(dateSplit[0]) <= 12 && Number(dateSplit[1]) <= 31) {
                                        value = dateSplit[1] + '/' + dateSplit[0] + '/' + dateSplit[2];
                                    }
                                }
                            }
                            else if (intDate.toString() !== 'Invalid Date' && type === 'Time') {
                                if (Number(cell.value) >= 1) {
                                    value = intl.formatDate(intDate, { type: 'dateTime', skeleton: 'yMd' }) + ' ';
                                }
                                value += intl.formatDate(intDate, { type: 'dateTime', skeleton: 'hms' });
                            }
                            else {
                                value = cell.value;
                            }
                        }
                        if (cell.formula) {
                            value = cell.formula;
                        }
                    }
                    var eventArgs = { action: 'getCurrentEditValue', editedValue: '' };
                    _this.parent.notify(editOperation, eventArgs);
                    var isFormulaEdit = (eventArgs.editedValue && eventArgs.editedValue.toString().indexOf('=') === 0) ||
                        checkIsFormula(eventArgs.editedValue);
                    var formulaInp = document.getElementById(_this.parent.element.id + '_formula_input');
                    var addressRange = getRangeIndexes(address);
                    var cellEle = _this.parent.getCell(addressRange[0], addressRange[1]);
                    if (cell && !cell.formula && cellEle && (type !== 'Time' || !value)) {
                        if (cell.value === undefined || (_this.isDateTimeType(cell.format) && cell.value && intToDate(Number(cell.value)).toString() !== 'Invalid Date') || isNullOrUndefined(cell.format)) {
                            var key = _this.isDateTimeType(cell.format);
                            if (key) {
                                var intl_1 = new Internationalization();
                                var format = key === 'date' ? 'M/d/yyyy' : 'h:mm:ss a';
                                if (cell.format === 'dd-MM-yyyy' || cell.format === 'dd/MM/yyyy') {
                                    format = cell.format;
                                }
                                formulaInp.value = intl_1.formatDate(intToDate(parseFloat(cell.value)), { type: key, format: format });
                            }
                            else {
                                if (cell.validation && cell.validation.type === 'List') {
                                    formulaInp.value = (cellEle.lastElementChild || cellEle).textContent;
                                }
                                else {
                                    formulaInp.value = cellEle.textContent;
                                }
                            }
                        }
                        else {
                            formulaInp.value = cell.value;
                        }
                    }
                    else {
                        formulaInp.value = value;
                    }
                    if (!isNullOrUndefined(value) && !isFormulaEdit) {
                        _this.parent.notify(editOperation, { action: 'refreshEditor', value: formulaInp.value, refreshEditorElem: true });
                    }
                    if (_this.parent.isEdit) {
                        if (e.target && !e.target.classList.contains('e-spreadsheet-edit')) {
                            _this.parent.notify(editValue, null);
                        }
                        else if (editArgs.element) {
                            formulaBar.value = editArgs.element.textContent;
                        }
                    }
                });
            });
        }
        this.updateComboBoxValue(address);
    };
    FormulaBar.prototype.isDateTimeType = function (format) {
        var dateCodes = ['/', '-d', '-m', '-y', 'dd', 'mm', 'yy'];
        var timeCodes = [':', 'hh', 'h', 'mm:ss', 'h:mm:ss'];
        var result;
        timeCodes.forEach(function (code) {
            if (format && format.indexOf(code) > -1) {
                result = 'time';
            }
        });
        if (result) {
            return result;
        }
        else {
            dateCodes.forEach(function (code) {
                if (format && format.indexOf(code) > -1) {
                    result = 'date';
                }
            });
        }
        return result;
    };
    FormulaBar.prototype.UpdateValueAfterMouseUp = function () {
        this.updateComboBoxValue(this.parent.getActiveSheet().selectedRange.split(':')[0]);
    };
    FormulaBar.prototype.updateComboBoxValue = function (value) {
        var sheet = this.parent.getActiveSheet();
        var range = getSheetName(this.parent) + '!' + sheet.selectedRange;
        var eventArgs = {
            action: 'getNameFromRange', range: range, definedName: null
        };
        this.parent.notify(formulaOperation, eventArgs);
        if (eventArgs.definedName) {
            value = eventArgs.definedName.name;
        }
        if (!this.parent.isMobileView()) {
            if (this.comboBoxInstance.text === value) {
                return;
            }
            this.comboBoxInstance.text = value;
            this.comboBoxInstance.dataBind();
        }
    };
    FormulaBar.prototype.disabletextarea = function () {
        var element = this.getFormulaBar();
        if (this.parent.getActiveSheet().isProtected) {
            element.disabled = true;
        }
        else {
            element.disabled = false;
        }
    };
    FormulaBar.prototype.formulaBarScrollEdit = function () {
        var index = getRangeIndexes(this.parent.getActiveSheet().selectedRange);
        var viewportIndexes = getCellIndexes(this.parent.getActiveSheet().topLeftCell);
        if (index[0] < viewportIndexes[0]) {
            this.parent.goTo(this.parent.getActiveSheet().selectedRange);
            this.isGoto = true;
        }
        this.parent.notify(editOperation, { action: 'startEdit', refreshCurPos: false });
    };
    FormulaBar.prototype.formulaBarClickHandler = function (e) {
        var target = e.target;
        var sheet = this.parent.getActiveSheet();
        var isSheetProtected = sheet.isProtected;
        var range = getCellIndexes(sheet.activeCell);
        var cell = getCell(range[0], range[1], sheet);
        var isCellLocked = isLocked(cell, getColumn(sheet, range[1]));
        if (target.classList.contains('e-drop-icon') && closest(target, '.e-formula-bar-panel')) {
            this.toggleFormulaBar(target);
        }
        else if (target.classList.contains('e-formula-bar')) {
            if (!this.parent.isEdit && (!isSheetProtected || (isSheetProtected && !isCellLocked))) {
                this.formulaBarScrollEdit();
            }
            else if (isSheetProtected && isCellLocked) {
                this.parent.notify(editAlert, null);
            }
        }
        else if (target.parentElement && target.parentElement.classList.contains('e-name-box')) {
            if (target.classList.contains('e-ddl-icon')) {
                var eventArgs = { action: 'getNames', names: [] };
                this.parent.notify(formulaOperation, eventArgs);
                this.comboBoxInstance.dataSource = eventArgs.names;
            }
            else {
                this.comboBoxInstance.element.classList.add('e-name-editing');
                this.comboBoxInstance.element.select();
            }
        }
        if (!isNullOrUndefined(target.offsetParent) && ((target.offsetParent.classList.contains('e-insert-function')) ||
            (target.classList.contains('e-insert-function')) || (this.parent.element.id + '_insert_function' === target.offsetParent.id)
            || (this.parent.element.id + '_insert_function' === target.id) ||
            target.parentElement.classList.contains('e-insert-function')
            || (this.parent.element.id + '_insert_function' === target.parentElement.id))) {
            if (isSheetProtected) {
                this.parent.notify(editAlert, null);
                return;
            }
            this.renderInsertDlg();
        }
    };
    FormulaBar.prototype.renderInsertDlg = function () {
        var _this = this;
        var l10n = this.parent.serviceLocator.getService(locale);
        var isOpen = !this.parent.isEdit;
        var args = { action: 'getCurrentEditValue', editedValue: '' };
        if (!isOpen) {
            var eventArgs = { action: 'isFormulaEditing', isFormulaEdit: false };
            this.parent.notify(formulaOperation, eventArgs);
            isOpen = eventArgs.isFormulaEdit;
            this.parent.notify(editOperation, args);
        }
        if (isOpen || args.editedValue === '') {
            if (args.editedValue === '') {
                this.parent.notify(editOperation, { action: 'refreshEditor', value: '=' });
            }
            var formulaDescription = this.parent.createElement('div', { className: 'e-formula-description', id: this.parent.element.id + '_description_content' });
            var categoryContent = this.parent.createElement('div', {
                className: 'e-category-content', id: this.parent.element.id + '_category_content',
                innerHTML: l10n.getConstant('PickACategory')
            });
            var dropDownElement = this.parent.createElement('input', { className: 'e-formula-category', id: this.parent.element.id + '_formula_category' });
            var listViewElement = this.parent.createElement('div', { className: 'e-formula-list', id: this.parent.element.id + '_formula_list' });
            var descriptionContent = this.parent.createElement('div', { className: 'e-description-content', innerHTML: l10n.getConstant('Description') });
            var headerContent = this.parent.createElement('div', { className: 'e-header-content', innerHTML: l10n.getConstant('InsertFunction') });
            var categoryArgs = {
                action: 'getFormulaCategory', categoryCollection: []
            };
            this.parent.notify(workbookFormulaOperation, categoryArgs);
            this.categoryCollection = categoryArgs.categoryCollection;
            this.categoryList = new DropDownList({
                dataSource: this.categoryCollection, index: 0, width: '285px', popupHeight: '210px',
                select: this.dropDownSelect.bind(this)
            });
            var listArgs = {
                action: 'getLibraryFormulas', formulaCollection: []
            };
            this.parent.notify(workbookFormulaOperation, listArgs);
            this.formulaCollection = listArgs.formulaCollection;
            this.formulaList = new ListView({
                dataSource: this.formulaCollection.sort(),
                actionComplete: this.updateFormulaList.bind(this),
                select: this.listSelected.bind(this), width: '285px', height: '200px'
            });
            this.dialog = this.parent.serviceLocator.getService(dialog);
            if (!this.parent.element.querySelector('.e-spreadsheet-function-dlg')) {
                this.dialog.show({
                    header: headerContent.outerHTML,
                    content: categoryContent.outerHTML + dropDownElement.outerHTML + listViewElement.outerHTML +
                        descriptionContent.outerHTML + formulaDescription.outerHTML,
                    width: '320px', height: '485px', cssClass: 'e-spreadsheet-function-dlg',
                    showCloseIcon: true, isModal: true,
                    beforeOpen: function (args) {
                        var dlgArgs = {
                            dialogName: 'InsertFunctionDialog', element: args.element, target: args.target, cancel: args.cancel
                        };
                        _this.parent.trigger('dialogBeforeOpen', dlgArgs);
                        if (dlgArgs.cancel) {
                            args.cancel = true;
                        }
                        focus(_this.parent.element);
                    },
                    open: this.dialogOpen.bind(this), beforeClose: this.dialogBeforeClose.bind(this), close: this.dialogClose.bind(this),
                    buttons: [
                        {
                            click: (this.selectFormula.bind(this, this.dialog, this)),
                            buttonModel: { content: l10n.getConstant('Ok'), isPrimary: true }
                        }
                    ]
                });
                this.categoryList.appendTo('#' + this.parent.element.id + '_formula_category');
                this.formulaList.appendTo('#' + this.parent.element.id + '_formula_list');
                EventHandler.add(this.formulaList.element, 'dblclick', this.formulaClickHandler, this);
            }
        }
    };
    FormulaBar.prototype.toggleFormulaBar = function (target) {
        var parent = target.parentElement;
        var l10n = this.parent.serviceLocator.getService(locale);
        if (parent.classList.contains('e-expanded')) {
            parent.classList.remove('e-expanded');
            document.getElementById(this.parent.element.id + '_formula_input').rows = 1;
            target.title = l10n.getConstant('ExpandFormulaBar');
            target.setAttribute('aria-label', l10n.getConstant('CollapseFormulaBar'));
        }
        else {
            parent.classList.add('e-expanded');
            document.getElementById(this.parent.element.id + '_formula_input').rows = 3;
            target.title = l10n.getConstant('CollapseFormulaBar');
            target.setAttribute('aria-label', l10n.getConstant('ExpandFormulaBar'));
        }
        this.parent.setPanelSize();
    };
    FormulaBar.prototype.toggleFormulaBarBtn = function () {
        var formulaExpand = this.parent.element.querySelector('.e-formula-bar-panel .e-drop-icon');
        this.toggleFormulaBar(formulaExpand);
    };
    FormulaBar.prototype.dialogOpen = function () {
        var _this = this;
        getUpdateUsingRaf(function () {
            var okBtn = _this.dialog.dialogInstance.element.querySelector('.e-footer-content .e-primary');
            var l10n = _this.parent.serviceLocator.getService(locale);
            okBtn.setAttribute('aria-label', l10n.getConstant('InsertFunction') + ' ' + l10n.getConstant('Ok'));
            focus(okBtn);
        });
    };
    FormulaBar.prototype.dialogClose = function () {
        var args = { action: 'getCurrentEditValue', editedValue: '' };
        this.parent.notify(editOperation, args);
        if (args.editedValue.toString().trim() === '=') {
            this.parent.notify(editOperation, { action: 'refreshEditor', value: '' });
        }
    };
    FormulaBar.prototype.dialogBeforeClose = function () {
        EventHandler.remove(this.formulaList.element, 'dblclick', this.formulaClickHandler);
        var dialogContentEle = document.getElementsByClassName('e-spreadsheet-function-dlg')[0].
            querySelector('.e-dlg-content');
        dialogContentEle.parentNode.removeChild(dialogContentEle);
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        this.dialog.dialogInstance.storeActiveElement = document.getElementById(this.parent.element.id + '_edit');
    };
    FormulaBar.prototype.selectFormula = function (dialog, formulaBarObj) {
        var formulaText = formulaBarObj.formulaList.getSelectedItems().text;
        var sheet = getSheet(this.parent, this.parent.activeSheetIndex);
        if (this.parent.isEdit) {
            this.parent.notify(editOperation, {
                action: 'refreshEditor', value: formulaText + '(', refreshFormulaBar: true,
                refreshEditorElem: true, isAppend: true
            });
        }
        else {
            this.parent.notify(editOperation, { action: 'startEdit', value: '=' + formulaText + '(', address: sheet.activeCell });
            this.parent.notify(formulaBarOperation, { action: 'refreshFormulabar', value: '=' + formulaText + '(' });
        }
        dialog.hide();
    };
    FormulaBar.prototype.listSelected = function () {
        this.updateFormulaDescription();
    };
    FormulaBar.prototype.updateFormulaList = function () {
        this.activeListFormula();
        this.updateFormulaDescription();
    };
    FormulaBar.prototype.dropDownSelect = function (args) {
        this.formulaCollection = [];
        var listArgs = {
            action: 'getLibraryFormulas',
            formulaCollection: []
        };
        if (args.item.textContent === 'All') {
            this.parent.notify(workbookFormulaOperation, listArgs);
            this.formulaCollection = listArgs.formulaCollection;
        }
        else {
            var category = args.item.textContent;
            var selectArgs = {
                action: 'dropDownSelectFormulas',
                formulaCollection: [],
                selectCategory: category
            };
            this.parent.notify(workbookFormulaOperation, selectArgs);
            this.formulaCollection = selectArgs.formulaCollection;
        }
        this.formulaList.dataSource = this.formulaCollection.sort();
    };
    FormulaBar.prototype.activeListFormula = function () {
        var acListEle = document.getElementById(this.parent.element.id + '_formula_list');
        var firstElement = acListEle.children[0].children[0].firstElementChild;
        this.formulaList.selectItem(firstElement);
    };
    FormulaBar.prototype.updateFormulaDescription = function () {
        var selectedFormula = this.formulaList.getSelectedItems().text;
        var descriptionArgs = {
            action: 'getFormulaDescription',
            description: '',
            selectedList: selectedFormula
        };
        this.parent.notify(workbookFormulaOperation, descriptionArgs);
        var okBtn = this.dialog.dialogInstance.element.querySelector('.e-footer-content .e-primary');
        if (okBtn.hasAttribute('aria-label')) {
            okBtn.removeAttribute('aria-label');
        }
        focus(okBtn);
        var descriptionArea = document.getElementById(this.parent.element.id + '_description_content');
        selectedFormula = (selectedFormula === 'AND') ? 'CalculateAND' : (selectedFormula === 'OR') ? 'CalculateOR' : selectedFormula;
        descriptionArea.innerHTML = this.parent.serviceLocator.getService(locale).getConstant(selectedFormula);
    };
    FormulaBar.prototype.formulaClickHandler = function (args) {
        var trgtElem = args.target;
        var sheet = getSheet(this.parent, this.parent.activeSheetIndex);
        if (trgtElem.offsetParent.classList.contains('e-text-content') || trgtElem.classList.contains('e-list-item')) {
            if (this.parent.isEdit) {
                this.parent.notify(editOperation, {
                    action: 'refreshEditor', value: trgtElem.innerText + '(', refreshFormulaBar: true,
                    refreshEditorElem: true, isAppend: true
                });
            }
            else {
                this.parent.notify(editOperation, { action: 'startEdit', value: '=' + trgtElem.innerText + '(', address: sheet.activeCell });
                this.parent.notify(formulaBarOperation, { action: 'refreshFormulabar', value: '=' + trgtElem.innerText + '(' });
            }
            this.dialog.hide();
        }
    };
    FormulaBar.prototype.addEventListener = function () {
        this.parent.on(formulaBar, this.createFormulaBar, this);
        this.parent.on(click, this.formulaBarClickHandler, this);
        this.parent.on(keyDown, this.keyDownHandler, this);
        this.parent.on(renderInsertDlg, this.renderInsertDlg, this);
        this.parent.on(toggleFormulaBar, this.toggleFormulaBarBtn, this);
        this.parent.on(keyUp, this.keyUpHandler, this);
        this.parent.on(selectionComplete, this.formulaBarUpdateHandler, this);
        this.parent.on(mouseUpAfterSelection, this.UpdateValueAfterMouseUp, this);
        this.parent.on(formulaBarOperation, this.editOperationHandler, this);
        this.parent.on(enableFormulaInput, this.disabletextarea, this);
        this.parent.on(isFormulaBarEdit, this.isFormulaBarEdit, this);
    };
    FormulaBar.prototype.destroy = function () {
        this.removeEventListener();
        this.comboBoxInstance.destroy();
        this.comboBoxInstance = null;
        this.insertFnRipple();
        this.insertFnRipple = null;
        var formulaPanel = this.parent.element.querySelector('.e-formula-bar-panel');
        if (formulaPanel) {
            detach(formulaPanel);
        }
    };
    FormulaBar.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(formulaBar, this.createFormulaBar);
            this.parent.off(click, this.formulaBarClickHandler);
            this.parent.off(renderInsertDlg, this.renderInsertDlg);
            this.parent.off(toggleFormulaBar, this.toggleFormulaBarBtn);
            this.parent.off(keyDown, this.keyDownHandler);
            this.parent.off(keyUp, this.keyUpHandler);
            this.parent.off(selectionComplete, this.formulaBarUpdateHandler);
            this.parent.off(mouseUpAfterSelection, this.UpdateValueAfterMouseUp);
            this.parent.off(formulaBarOperation, this.editOperationHandler);
            this.parent.off(enableFormulaInput, this.disabletextarea);
            this.parent.off(isFormulaBarEdit, this.isFormulaBarEdit);
        }
    };
    FormulaBar.prototype.editOperationHandler = function (args) {
        var action = args.action;
        switch (action) {
            case 'refreshFormulabar':
                this.getFormulaBar().value = isUndefined(args.value) ? '' : args.value;
                break;
            case 'getElement':
                args.element = this.getFormulaBar();
                break;
        }
    };
    FormulaBar.prototype.isFormulaBarEdit = function (args) {
        var edit = this.parent.isEdit;
        if (edit && this.isGoto) {
            args.isEdit = true;
        }
        else {
            args.isEdit = false;
        }
    };
    FormulaBar.prototype.getFormulaBar = function () {
        return select('#' + this.parent.element.id + '_formula_input', this.parent.element);
    };
    return FormulaBar;
}());
export { FormulaBar };
