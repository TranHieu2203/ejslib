import { Dialog } from '@syncfusion/ej2-popups';
import { EventHandler, remove } from '@syncfusion/ej2-base';
import { parentsUntil, addBiggerDialog, addRemoveEventListener } from '../base/util';
import * as events from '../base/constant';
import { Button } from '@syncfusion/ej2-buttons';
import { ResponsiveDialogAction } from '../base/enum';
/**
 *
 * The `ResponsiveDialogRenderer` module is used to render the responsive dialogs.
 */
var ResponsiveDialogRenderer = /** @class */ (function () {
    function ResponsiveDialogRenderer(parent, serviceLocator) {
        this.sortedCols = [];
        this.sortPredicate = [];
        /** @hidden */
        this.isCustomDialog = false;
        this.parent = parent;
        this.serviceLocator = serviceLocator;
        this.addEventListener();
    }
    ResponsiveDialogRenderer.prototype.addEventListener = function () {
        this.evtHandlers = [{ event: events.filterDialogClose, handler: this.closeCustomDialog },
            { event: events.refreshCustomFilterOkBtn, handler: this.refreshCustomFilterOkBtn },
            { event: events.renderResponsiveCmenu, handler: this.renderResponsiveContextMenu },
            { event: events.filterCmenuSelect, handler: this.renderCustomFilterDiv },
            { event: events.customFilterClose, handler: this.customExFilterClose },
            { event: events.refreshCustomFilterClearBtn, handler: this.refreshCustomFilterClearBtn }];
        addRemoveEventListener(this.parent, this.evtHandlers, true, this);
        this.onActionCompleteFn = this.editComplate.bind(this);
        this.parent.addEventListener(events.actionComplete, this.onActionCompleteFn);
    };
    ResponsiveDialogRenderer.prototype.customExFilterClose = function () {
        this.isCustomDlgRender = false;
    };
    ResponsiveDialogRenderer.prototype.renderCustomFilterDiv = function () {
        var header = this.customResponsiveDlg.element.querySelector('.e-dlg-header-content');
        var title = header.querySelector('.e-dlg-custom-header');
        var closeBtn = header.querySelector('.e-dlg-closeicon-btn');
        this.isCustomDlgRender = true;
        this.parent.filterModule.filterModule.closeDialog();
        this.saveBtn.element.style.display = '';
        this.refreshCustomFilterOkBtn({ disabled: false });
        this.backBtn.element.style.display = 'none';
        closeBtn.style.display = '';
        title.innerHTML = this.parent.localeObj.getConstant('CustomFilter');
        var content = this.customResponsiveDlg.element.querySelector('.e-dlg-content');
        this.customExcelFilterParent = this.parent.createElement('div', { className: 'e-xl-customfilterdiv e-default-filter' });
        content.appendChild(this.customExcelFilterParent);
    };
    ResponsiveDialogRenderer.prototype.renderResponsiveContextMenu = function (args) {
        if (this.action === ResponsiveDialogAction.isFilter) {
            var content = this.customResponsiveDlg.element.querySelector('.e-dlg-content');
            var header = this.customResponsiveDlg.element.querySelector('.e-dlg-header-content');
            var closeBtn = header.querySelector('.e-dlg-closeicon-btn');
            var text = header.querySelector('.e-dlg-custom-header');
            if (args.isOpen) {
                content.firstChild.style.display = 'none';
                content.appendChild(args.target);
                closeBtn.style.display = 'none';
                this.saveBtn.element.style.display = 'none';
                this.filterClearBtn.element.style.display = 'none';
                text.innerHTML = args.header;
                var backBtn = this.parent.createElement('button');
                var span = this.parent.createElement('span', { className: 'e-btn-icon e-resfilterback e-icons' });
                backBtn.appendChild(span);
                this.backBtn = new Button({
                    cssClass: this.parent.cssClass ? 'e-res-back-btn' + ' ' + this.parent.cssClass : 'e-res-back-btn'
                });
                this.backBtn.appendTo(backBtn);
                text.parentElement.insertBefore(backBtn, text);
            }
            else if (this.backBtn && !this.isCustomDlgRender) {
                content.firstChild.style.display = '';
                remove(this.backBtn.element);
                closeBtn.style.display = '';
                this.saveBtn.element.style.display = '';
                if (this.isFiltered) {
                    this.filterClearBtn.element.style.display = '';
                }
                text.innerHTML = this.getHeaderTitle({ action: ResponsiveDialogAction.isFilter }, args.col);
            }
        }
    };
    ResponsiveDialogRenderer.prototype.refreshCustomFilterClearBtn = function (args) {
        if (this.filterClearBtn) {
            this.isFiltered = args.isFiltered;
            this.filterClearBtn.element.style.display = args.isFiltered ? '' : 'none';
        }
    };
    ResponsiveDialogRenderer.prototype.refreshCustomFilterOkBtn = function (args) {
        if (this.saveBtn) {
            this.saveBtn.disabled = args.disabled;
        }
    };
    ResponsiveDialogRenderer.prototype.renderResponsiveContent = function (col) {
        var _this = this;
        var gObj = this.parent;
        if (col) {
            this.filterParent = this.parent.createElement('div', { className: 'e-mainfilterdiv e-default-filter', id: col.uid + '-main-filter' });
            return this.filterParent;
        }
        else {
            var cols = gObj.getColumns();
            this.customColumnDiv = gObj.createElement('div', { className: 'columndiv', styles: 'width: 100%' });
            var sortBtnParent = gObj.createElement('div', { className: 'e-ressortbutton-parent' });
            var filteredCols = [];
            var isSort = this.action === ResponsiveDialogAction.isSort;
            var isFilter = this.action === ResponsiveDialogAction.isFilter;
            if (isFilter) {
                for (var i = 0; i < gObj.filterSettings.columns.length; i++) {
                    filteredCols.push(gObj.filterSettings.columns[i].field);
                }
            }
            for (var i = 0; i < cols.length; i++) {
                if (!cols[i].visible || (!cols[i].allowSorting && isSort) || (!cols[i].allowFiltering && isFilter)) {
                    continue;
                }
                var cDiv = gObj.createElement('div', { className: 'e-responsivecoldiv' });
                cDiv.setAttribute('data-e-mappingname', cols[i].field);
                cDiv.setAttribute('data-e-mappinguid', cols[i].uid);
                var span = gObj.createElement('span', { innerHTML: cols[i].headerText, className: 'e-res-header-text' });
                cDiv.appendChild(span);
                this.customColumnDiv.appendChild(cDiv);
                if (isSort) {
                    var fields = this.getSortedFieldsAndDirections('field');
                    var index = fields.indexOf(cols[i].field);
                    var button = gObj.createElement('button', { id: gObj.element.id + cols[i].field + 'sortbutton' });
                    var clone = sortBtnParent.cloneNode();
                    clone.appendChild(button);
                    cDiv.appendChild(clone);
                    var btnObj = new Button({
                        cssClass: this.parent.cssClass ? 'e-ressortbutton' + ' ' + this.parent.cssClass : 'e-ressortbutton'
                    });
                    btnObj.appendTo(button);
                    button.innerHTML = index > -1 ? this.parent.sortSettings.columns[index].direction : 'None';
                    button.onclick = function (e) {
                        _this.sortButtonClickHandler(e.target);
                    };
                }
                if (isFilter && filteredCols.indexOf(cols[i].field) > -1) {
                    var divIcon = gObj.createElement('div', { className: 'e-icons e-res-icon e-filtersetdiv' });
                    var iconSpan = gObj.createElement('span', { className: 'e-icons e-res-icon e-filterset' });
                    iconSpan.setAttribute('colType', cols[i].type);
                    divIcon.appendChild(iconSpan);
                    cDiv.appendChild(divIcon);
                }
            }
            EventHandler.add(this.customColumnDiv, 'click', this.customFilterColumnClickHandler, this);
            return this.customColumnDiv;
        }
    };
    ResponsiveDialogRenderer.prototype.getSortedFieldsAndDirections = function (name) {
        var fields = [];
        for (var i = 0; i < this.parent.sortSettings.columns.length; i++) {
            fields.push(this.parent.sortSettings.columns[i][name]);
        }
        return fields;
    };
    ResponsiveDialogRenderer.prototype.sortButtonClickHandler = function (target) {
        if (target) {
            var columndiv = parentsUntil(target, 'e-responsivecoldiv');
            var field = columndiv.getAttribute('data-e-mappingname');
            if (!this.parent.allowMultiSorting) {
                this.sortPredicate = [];
                this.sortedCols = [];
                this.isSortApplied = false;
                this.resetSortButtons(target);
            }
            var txt = target.textContent;
            var direction = txt === 'None' ? 'Ascending' : txt === 'Ascending' ? 'Descending' : 'None';
            target.innerHTML = direction;
            this.setSortedCols(field, direction);
        }
    };
    ResponsiveDialogRenderer.prototype.resetSortButtons = function (target) {
        var buttons = [].slice.call(this.customColumnDiv.getElementsByClassName('e-ressortbutton'));
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i] !== target) {
                buttons[i].innerHTML = 'None';
            }
        }
    };
    ResponsiveDialogRenderer.prototype.setSortedCols = function (field, direction) {
        var fields = this.getCurrentSortedFields();
        var index = fields.indexOf(field);
        if (this.parent.allowMultiSorting && index > -1) {
            this.sortedCols.splice(index, 1);
            this.sortPredicate.splice(index, 1);
        }
        this.isSortApplied = true;
        if (direction !== 'None') {
            this.sortedCols.push(field);
            this.sortPredicate.push({ field: field, direction: direction });
        }
    };
    ResponsiveDialogRenderer.prototype.getCurrentSortedFields = function () {
        var fields = [];
        for (var i = 0; i < this.sortedCols.length; i++) {
            fields.push(this.sortedCols[i]);
        }
        return fields;
    };
    ResponsiveDialogRenderer.prototype.customFilterColumnClickHandler = function (e) {
        if (this.action !== ResponsiveDialogAction.isFilter) {
            return;
        }
        var gObj = this.parent;
        var target = e.target;
        if (gObj.filterSettings.type !== 'FilterBar') {
            if (target.classList.contains('e-responsivecoldiv') || target.parentElement.classList.contains('e-responsivecoldiv')) {
                var field = target.getAttribute('data-e-mappingname');
                if (!field) {
                    field = target.parentElement.getAttribute('data-e-mappingname');
                }
                if (field) {
                    var col = gObj.getColumnByField(field);
                    this.isRowResponsive = true;
                    this.showResponsiveDialog(col);
                }
            }
            else if (target.classList.contains('e-filterset') || target.parentElement.classList.contains('e-filtersetdiv')) {
                var colDiv = parentsUntil(target, 'e-responsivecoldiv');
                if (colDiv) {
                    var field = colDiv.getAttribute('data-e-mappingname');
                    var col = gObj.getColumnByField(field);
                    if (col.filter.type === 'Menu' || (!col.filter.type && gObj.filterSettings.type === 'Menu')) {
                        this.isDialogClose = true;
                    }
                    this.parent.filterModule.filterModule.clearCustomFilter(col);
                    this.removeCustomDlgFilterEle(target);
                }
            }
        }
    };
    /**
     * Function to show the responsive dialog
     *
     * @param {Column} col - specifies the column
     * @returns {void}
     */
    ResponsiveDialogRenderer.prototype.showResponsiveDialog = function (col) {
        if (this.isCustomDialog && this.action === ResponsiveDialogAction.isFilter && !this.isRowResponsive) {
            this.renderCustomFilterDialog();
        }
        else {
            this.filteredCol = col;
            this.renderResponsiveDialog(col);
            if (this.parent.enableAdaptiveUI && col) {
                this.parent.filterModule.setFilterModel(col);
                this.parent.filterModule.filterModule.openDialog(this.parent.filterModule.createOptions(col, undefined));
            }
            if (this.action === ResponsiveDialogAction.isSort) {
                var args = {
                    cancel: false, dialogObj: this.customResponsiveDlg, requestType: 'beforeOpenAptiveSortDialog'
                };
                this.parent.trigger(events.beforeOpenAdaptiveDialog, args);
                if (args.cancel) {
                    return;
                }
            }
            this.customResponsiveDlg.show(true);
            this.customResponsiveDlg.element.style.maxHeight = '100%';
            this.setTopToChildDialog(this.customResponsiveDlg.element);
        }
    };
    ResponsiveDialogRenderer.prototype.setTopToChildDialog = function (dialogEle) {
        var child = dialogEle.querySelector('.e-dialog');
        if (child) {
            var top_1 = dialogEle.querySelector('.e-dlg-header-content').getBoundingClientRect().height;
            child.style.top = top_1 + 'px';
        }
    };
    ResponsiveDialogRenderer.prototype.renderCustomFilterDialog = function (col) {
        var gObj = this.parent;
        if (this.action === ResponsiveDialogAction.isFilter && gObj.filterSettings.type === 'FilterBar') {
            return;
        }
        var outerDiv = this.parent.createElement('div', {
            id: gObj.element.id + 'customfilter',
            className: this.parent.cssClass ?
                'e-customfilterdiv e-responsive-dialog ' + this.parent.cssClass : 'e-customfilterdiv e-responsive-dialog'
        });
        this.parent.element.appendChild(outerDiv);
        this.customFilterDlg = this.getDialogOptions(col, true);
        var args = {
            cancel: false, dialogObj: this.customFilterDlg, requestType: 'beforeOpenAptiveFilterDialog'
        };
        this.parent.trigger(events.beforeOpenAdaptiveDialog, args);
        if (args.cancel) {
            return;
        }
        this.customFilterDlg.appendTo(outerDiv);
        this.customFilterDlg.show(true);
        this.customFilterDlg.element.style.maxHeight = '100%';
    };
    ResponsiveDialogRenderer.prototype.getDialogOptions = function (col, isCustomFilter, id) {
        var options = new Dialog({
            isModal: true,
            showCloseIcon: true,
            closeOnEscape: false,
            locale: this.parent.locale,
            target: this.parent.adaptiveDlgTarget ? this.parent.adaptiveDlgTarget : document.body,
            visible: false,
            enableRtl: this.parent.enableRtl,
            content: this.renderResponsiveContent(col),
            open: this.dialogOpen.bind(this),
            created: this.dialogCreated.bind(this),
            close: this.beforeDialogClose.bind(this),
            width: '100%',
            height: '100%',
            animationSettings: { effect: 'None' },
            cssClass: this.parent.cssClass ? this.parent.cssClass : ''
        });
        var isStringTemplate = 'isStringTemplate';
        options[isStringTemplate] = true;
        if (isCustomFilter) {
            options.header = this.renderResponsiveHeader(col, undefined, true);
            options.cssClass = 'e-customfilter';
        }
        else {
            options.header = this.renderResponsiveHeader(col);
            options.cssClass = this.parent.rowRenderingMode === 'Vertical' && this.action === ResponsiveDialogAction.isFilter
                ? 'e-res' + id + ' e-row-responsive-filter' : 'e-res' + id;
        }
        return options;
    };
    ResponsiveDialogRenderer.prototype.renderResponsiveDialog = function (col) {
        var gObj = this.parent;
        if (this.action === ResponsiveDialogAction.isFilter && gObj.filterSettings.type === 'FilterBar') {
            return;
        }
        var id = this.action === ResponsiveDialogAction.isFilter ? 'filter' : 'sort';
        var outerDiv = this.parent.createElement('div', {
            id: gObj.element.id + 'responsive' + id,
            className: this.parent.cssClass ?
                'e-res' + id + 'div e-responsive-dialog ' + this.parent.cssClass : 'e-res' + id + 'div e-responsive-dialog'
        });
        this.parent.element.appendChild(outerDiv);
        this.customResponsiveDlg = this.getDialogOptions(col, false, id);
        this.customResponsiveDlg.appendTo(outerDiv);
    };
    ResponsiveDialogRenderer.prototype.dialogCreated = function () {
        addBiggerDialog(this.parent);
    };
    ResponsiveDialogRenderer.prototype.dialogOpen = function () {
        if (this.action === ResponsiveDialogAction.isSort && this.parent.allowMultiSorting) {
            for (var i = 0; i < this.parent.sortSettings.columns.length; i++) {
                this.sortedCols.push(this.parent.sortSettings.columns[i].field);
                var sortField = this.parent.sortSettings.columns[i].field;
                var sortDirection = this.parent.sortSettings.columns[i].direction;
                this.sortPredicate.push({ field: sortField, direction: sortDirection });
            }
        }
    };
    ResponsiveDialogRenderer.prototype.beforeDialogClose = function (args) {
        this.isDialogClose = args.element && !args.element.querySelector('.e-xl-customfilterdiv')
            && args.element.classList.contains('e-resfilterdiv');
        if (this.action === ResponsiveDialogAction.isFilter) {
            if (args.element.classList.contains('e-resfilterdiv')) {
                this.parent.filterModule.filterModule.closeResponsiveDialog(this.isCustomDlgRender);
            }
            else if (args.element.classList.contains('e-customfilterdiv')) {
                this.closeCustomFilter();
            }
        }
        else if (this.action === ResponsiveDialogAction.isSort) {
            this.closeCustomDialog();
        }
        this.parent.off(events.enterKeyHandler, this.keyHandler);
    };
    ResponsiveDialogRenderer.prototype.sortColumn = function () {
        if (!this.isSortApplied) {
            this.closeCustomDialog();
            return;
        }
        if (this.sortPredicate.length) {
            this.parent.setProperties({ sortSettings: { columns: [] } }, true);
        }
        for (var i = 0; i < this.sortPredicate.length; i++) {
            this.parent.sortColumn(this.sortPredicate[i].field, this.sortPredicate[i].direction, this.parent.allowMultiSorting);
        }
        if (!this.sortPredicate.length) {
            this.parent.clearSorting();
        }
        this.closeCustomDialog();
    };
    ResponsiveDialogRenderer.prototype.getHeaderTitle = function (args, col) {
        var gObj = this.parent;
        var title;
        if (this.action === ResponsiveDialogAction.isEdit) {
            title = gObj.localeObj.getConstant('EditFormTitle') + args.primaryKeyValue[0];
        }
        else if (this.action === ResponsiveDialogAction.isAdd) {
            title = gObj.localeObj.getConstant('AddFormTitle');
        }
        else if (this.action === ResponsiveDialogAction.isFilter) {
            title = col ? col.headerText || col.field : gObj.localeObj.getConstant('FilterButton');
        }
        else if (this.action === ResponsiveDialogAction.isSort) {
            title = gObj.localeObj.getConstant('Sort');
        }
        return title;
    };
    ResponsiveDialogRenderer.prototype.getDialogName = function (action) {
        var name;
        if (action === ResponsiveDialogAction.isAdd || action === ResponsiveDialogAction.isEdit) {
            name = 'dialogEdit_wrapper_title';
        }
        else if (action === ResponsiveDialogAction.isFilter) {
            name = 'responsive_filter_dialog_wrapper';
        }
        return name;
    };
    ResponsiveDialogRenderer.prototype.getButtonText = function (action) {
        var text;
        if (action === ResponsiveDialogAction.isAdd || action === ResponsiveDialogAction.isEdit) {
            text = 'Save';
        }
        else if (action === ResponsiveDialogAction.isFilter || this.action === ResponsiveDialogAction.isSort) {
            text = 'OKButton';
        }
        return text;
    };
    /**
     * Function to render the responsive header
     *
     * @param {Column} col - specifies the column
     * @param {ResponsiveDialogArgs} args - specifies the responsive dialog arguments
     * @param {boolean} isCustomFilter - specifies whether it is custom filter or not
     * @returns {HTMLElement | string} returns the html element or string
     */
    ResponsiveDialogRenderer.prototype.renderResponsiveHeader = function (col, args, isCustomFilter) {
        var _this = this;
        var gObj = this.parent;
        gObj.on(events.enterKeyHandler, this.keyHandler, this);
        var id = gObj.element.id + this.getDialogName(this.action);
        var header = gObj.createElement('div', { className: 'e-res-custom-element' });
        var titleDiv = gObj.createElement('div', { className: 'e-dlg-custom-header', id: id });
        titleDiv.innerHTML = this.getHeaderTitle(args, col);
        header.appendChild(titleDiv);
        var saveBtn = gObj.createElement('button');
        if (!isCustomFilter) {
            this.saveBtn = new Button({
                cssClass: this.parent.cssClass ?
                    'e-primary e-flat e-res-apply-btn' + ' ' + this.parent.cssClass : 'e-primary e-flat e-res-apply-btn'
            });
            saveBtn.innerHTML = gObj.localeObj.getConstant(this.getButtonText(this.action));
            this.saveBtn.appendTo(saveBtn);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            saveBtn.onclick = function (e) {
                _this.dialogHdrBtnClickHandler();
            };
        }
        var isSort = this.action === ResponsiveDialogAction.isSort;
        var isFilter = this.action === ResponsiveDialogAction.isFilter;
        if (isFilter || isSort) {
            var id_1 = isSort ? 'sort' : 'filter';
            var clearBtn = gObj.createElement('button');
            this.filterClearBtn = new Button({
                cssClass: this.parent.cssClass ? 'e-primary e-flat e-res-' + id_1 + '-clear-btn' + ' ' + this.parent.cssClass
                    : 'e-primary e-flat e-res-' + id_1 + '-clear-btn'
            });
            if (isFilter) {
                var span = gObj.createElement('span', { className: 'e-btn-icon e-icon-filter-clear e-icons' });
                clearBtn.appendChild(span);
            }
            else {
                clearBtn.innerHTML = gObj.localeObj.getConstant('Clear');
            }
            header.appendChild(clearBtn);
            this.filterClearBtn.appendTo(clearBtn);
            clearBtn.onclick = function (e) {
                if ((parentsUntil(e.target, 'e-customfilter'))) {
                    _this.parent.filterModule.clearFiltering();
                    _this.removeCustomDlgFilterEle();
                }
                else {
                    if (isFilter) {
                        _this.filterClear();
                    }
                    else {
                        _this.resetSortButtons();
                        _this.sortedCols = [];
                        _this.sortPredicate = [];
                        _this.isSortApplied = true;
                    }
                }
            };
            header.appendChild(clearBtn);
        }
        if (!isCustomFilter) {
            header.appendChild(saveBtn);
        }
        return header;
    };
    ResponsiveDialogRenderer.prototype.filterClear = function () {
        this.parent.filterModule.filterModule.clearCustomFilter(this.filteredCol);
        this.parent.filterModule.filterModule.closeResponsiveDialog();
    };
    ResponsiveDialogRenderer.prototype.dialogHdrBtnClickHandler = function () {
        if (this.action === ResponsiveDialogAction.isEdit || this.action === ResponsiveDialogAction.isAdd) {
            this.parent.endEdit();
        }
        else if (this.action === ResponsiveDialogAction.isFilter) {
            this.parent.filterModule.filterModule.applyCustomFilter({ col: this.filteredCol, isCustomFilter: this.isCustomDlgRender });
        }
        else if (this.action === ResponsiveDialogAction.isSort) {
            this.sortColumn();
        }
    };
    ResponsiveDialogRenderer.prototype.closeCustomDialog = function () {
        if (this.isCustomDlgRender) {
            var mainfilterdiv = this.customResponsiveDlg.element.querySelector('.e-mainfilterdiv');
            remove(mainfilterdiv);
            return;
        }
        this.isRowResponsive = false;
        this.isCustomDlgRender = false;
        this.destroyCustomFilterDialog();
    };
    ResponsiveDialogRenderer.prototype.destroyCustomFilterDialog = function () {
        if (!this.customResponsiveDlg) {
            return;
        }
        var elem = document.getElementById(this.customResponsiveDlg.element.id);
        if (this.customResponsiveDlg && !this.customResponsiveDlg.isDestroyed && elem) {
            this.customResponsiveDlg.destroy();
            remove(elem);
        }
        this.closeCustomFilter();
        if (this.action === ResponsiveDialogAction.isSort) {
            this.sortPredicate = [];
            this.sortedCols = [];
            this.isSortApplied = false;
        }
    };
    ResponsiveDialogRenderer.prototype.closeCustomFilter = function () {
        if (!this.isDialogClose && this.customFilterDlg) {
            var customEle = document.getElementById(this.customFilterDlg.element.id);
            if (this.customFilterDlg && !this.customFilterDlg.isDestroyed && customEle) {
                this.customFilterDlg.destroy();
                remove(customEle);
            }
        }
        this.isCustomDialog = false;
        this.isDialogClose = false;
    };
    ResponsiveDialogRenderer.prototype.removeCustomDlgFilterEle = function (target) {
        if (target) {
            if (target.parentElement.classList.contains('e-filtersetdiv')) {
                remove(target.parentElement);
            }
            else {
                remove(target);
            }
        }
        else {
            var child = this.customColumnDiv.children;
            for (var i = 0; i < child.length; i++) {
                target = child[i].querySelector('.e-filtersetdiv');
                if (target) {
                    remove(target);
                    i--;
                }
            }
        }
    };
    ResponsiveDialogRenderer.prototype.keyHandler = function (e) {
        if (e.keyCode === 13 && ((this.action === ResponsiveDialogAction.isFilter
            && e.target.classList.contains('e-searchinput'))
            || (this.action === ResponsiveDialogAction.isEdit || this.action === ResponsiveDialogAction.isAdd))) {
            this.dialogHdrBtnClickHandler();
        }
    };
    ResponsiveDialogRenderer.prototype.editComplate = function (args) {
        if (args.requestType === 'save' || args.requestType === 'cancel') {
            this.parent.off(events.enterKeyHandler, this.keyHandler);
        }
    };
    ResponsiveDialogRenderer.prototype.removeEventListener = function () {
        if (this.customColumnDiv) {
            EventHandler.remove(this.customColumnDiv, 'click', this.customFilterColumnClickHandler);
        }
        addRemoveEventListener(this.parent, this.evtHandlers, true, this);
        this.parent.removeEventListener(events.actionComplete, this.onActionCompleteFn);
    };
    return ResponsiveDialogRenderer;
}());
export { ResponsiveDialogRenderer };
