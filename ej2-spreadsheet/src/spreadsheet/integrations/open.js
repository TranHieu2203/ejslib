import { refreshSheetTabs, completeAction, unProtectSheetPassword } from '../common/event';
import { dialog, importProtectWorkbook, locale } from '../common/index';
import { openSuccess, openFailure, clearFormulaDependentCells } from '../../workbook/index';
var Open = /** @class */ (function () {
    function Open(parent) {
        this.isImportedFile = false;
        this.unProtectSheetIdx = [];
        this.parent = parent;
        this.addEventListener();
        this.renderFileUpload();
        //Spreadsheet.Inject(WorkbookOpen);
    }
    /**
     * Adding event listener for success and failure
     *
     * @returns {void} - Adding event listener for success and failure
     */
    Open.prototype.addEventListener = function () {
        this.parent.on(openSuccess, this.openSuccess, this);
        this.parent.on(openFailure, this.openFailed, this);
    };
    /**
     * Removing event listener for success and failure
     *
     * @returns {void} - Removing event listener for success and failure
     */
    Open.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(openSuccess, this.openSuccess);
            this.parent.off(openFailure, this.openFailed);
        }
    };
    /**
     * Rendering upload component for importing files.
     *
     * @returns {void} - Rendering upload component for importing files.
     */
    Open.prototype.renderFileUpload = function () {
        var uploadID = this.parent.element.id + '_fileUpload';
        this.parent.element.appendChild(this.parent.createElement('input', {
            id: uploadID,
            attrs: { type: 'file', accept: '.xls, .xlsx, .csv, .xlsm, .xlsb', name: 'fileUpload' }
        }));
        var uploadBox = document.getElementById(uploadID);
        uploadBox.onchange = this.fileSelect.bind(this);
        uploadBox.onerror = this.openFailed.bind(this);
        uploadBox.style.display = 'none';
    };
    /**
     * Process after select the excel and image file.
     *
     * @param {Event} args - File select native event.
     * @returns {void} - Process after select the excel and image file.
     */
    Open.prototype.fileSelect = function (args) {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var filesData = args.target.files[0];
        if (filesData && filesData.length < 1) {
            return;
        }
        var impArgs = {
            file: filesData
        };
        this.parent.open(impArgs);
        document.getElementById(this.parent.element.id + '_fileUpload').value = '';
    };
    /**
     * File open success event declaration.
     *
     * @param {string} response - File open success response text.
     * @returns {void} - File open success event declaration.
     */
    Open.prototype.openSuccess = function (response) {
        var _this = this;
        var openError = ['UnsupportedFile', 'InvalidUrl', 'NeedPassword', 'InCorrectPassword', 'InCorrectSheetPassword', 'CorrectSheetPassword'];
        if (openError.indexOf(response.data) > -1) {
            if (openError[2] === response.data) {
                if (!this.parent.element.querySelector('.e-importprotectworkbook-dlg')) {
                    this.parent.notify(importProtectWorkbook, response.eventArgs);
                }
            }
            else if (openError[3] === response.data) {
                var l10n = this.parent.serviceLocator.getService(locale);
                var alertSpan = this.parent.createElement('span', {
                    className: 'e-importprotectpwd-alert-span',
                    innerHTML: l10n.getConstant('InCorrectPassword')
                });
                (this.parent.element.querySelector('.e-importprotectworkbook-dlg').querySelector('.e-dlg-content')).appendChild(alertSpan);
            }
            else if (openError[4] === response.data) {
                var l10n = this.parent.serviceLocator.getService(locale);
                var alertSpan = this.parent.createElement('span', {
                    className: 'e-unprotectsheetpwd-alert-span',
                    innerHTML: l10n.getConstant('InCorrectPassword')
                });
                (this.parent.element.querySelector('.e-unprotectworksheet-dlg').querySelector('.e-dlg-content')).appendChild(alertSpan);
            }
            else if (openError[5] === response.data) {
                this.parent.isOpen = false;
                this.parent.notify(unProtectSheetPassword, null);
                var dialogInst = this.parent.serviceLocator.getService(dialog);
                dialogInst.hide();
                this.parent.hideSpinner();
            }
            else {
                var dialogInst = this.parent.serviceLocator.getService(dialog);
                dialogInst.hide();
                this.parent.serviceLocator.getService(dialog).show({
                    content: this.parent.serviceLocator.getService('spreadsheetLocale')
                        .getConstant(response.data),
                    width: '300',
                    beforeOpen: function (args) {
                        var dlgArgs = {
                            dialogName: 'OpenDialog',
                            element: args.element, target: args.target, cancel: args.cancel
                        };
                        _this.parent.trigger('dialogBeforeOpen', dlgArgs);
                        if (dlgArgs.cancel) {
                            args.cancel = true;
                        }
                    }
                });
                this.parent.hideSpinner();
                return;
            }
        }
        else {
            var dialogInst = this.parent.serviceLocator.getService(dialog);
            dialogInst.hide();
            this.parent.showSpinner();
        }
        if (!this.parent.element) {
            return;
        }
        if (openError[5] !== response.data) {
            if (!response.isOpenFromJson) {
                this.parent.trigger('openComplete', { response: response });
                this.parent.notify(completeAction, { response: response, action: 'import' });
            }
            this.parent.notify(clearFormulaDependentCells, { cellRef: null, isOpen: true });
            this.parent.renderModule.refreshSheet(response.isOpenFromJson);
            this.parent.notify(refreshSheetTabs, null);
            this.isImportedFile = true;
            this.unProtectSheetIdx = [];
            this.parent.hideSpinner();
        }
    };
    /**
     * File open failure event declaration.
     *
     * @param {object} args - Open failure arguments.
     * @returns {void} - File open failure event declaration.
     */
    Open.prototype.openFailed = function (args) {
        this.parent.trigger('openFailure', args);
        this.parent.hideSpinner();
        /* Need to Implement */
    };
    /**
     * To Remove the event listeners.
     *
     * @returns {void} - To Remove the event listeners.
     */
    Open.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    /**
     * Get the sheet open module name.
     *
     * @returns {string} - Get the sheet open module name.
     */
    Open.prototype.getModuleName = function () {
        return 'open';
    };
    return Open;
}());
export { Open };
