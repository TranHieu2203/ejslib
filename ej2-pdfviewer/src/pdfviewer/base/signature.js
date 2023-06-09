import { createElement, isNullOrUndefined, isBlazor } from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { splitArrayCollection, processPathData, getPathString } from '@syncfusion/ej2-drawings';
import { TextBox } from '@syncfusion/ej2-inputs';
import { cloneObject } from '../drawing/drawing-util';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { Tab } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
import { DisplayMode } from './types';
/**
 * @hidden
 */
var Signature = /** @class */ (function () {
    /**
     * Initialize the constructor of blazorUIadapater.
     * @private
     * @param { PdfViewer } pdfViewer - Specified PdfViewer class.
     * @param { PdfViewerBase } pdfViewerBase - The pdfViewerBase.
     */
    function Signature(pdfViewer, pdfViewerBase) {
        var _this = this;
        this.mouseMoving = true;
        this.canvasTouched = false;
        // eslint-disable-next-line
        this.newObject = [];
        /**
         * @private
         */
        this.outputString = '';
        /**
         * @private
         */
        this.drawOutputString = '';
        /**
        * @private
        */
        this.imageOutputString = '';
        /**
         * @private
         */
        // eslint-disable-next-line
        this.signaturecollection = [];
        /**
         * @private
         */
        // eslint-disable-next-line
        this.outputcollection = [];
        /**
         * @private
         */
        // eslint-disable-next-line
        this.signAnnotationIndex = [];
        // eslint-disable-next-line
        this.fontsign = [];
        // eslint-disable-next-line
        this.signfontStyle = [];
        this.isSaveSignature = false;
        this.isInitialFiledSaveSignature = false;
        this.isSignatureFieldsSaveSignature = false;
        // eslint-disable-next-line
        this.saveSignatureString = '';
        /**
         * @private
         */
        // eslint-disable-next-line
        this.saveImageString = '';
        this.signatureImageString = '';
        /**
         * @private
         */
        // eslint-disable-next-line
        this.maxSaveLimit = 5;
        this.select = function (e) {
            if (this.canvasTouched) {
                this.mouseMoving = true;
                this.canvasTouched = false;
            }
            if (e.isSwiped && this.signaturetype == 'Draw' && this.mouseMoving) {
                e.cancel = true;
                this.mouseMoving = false;
            }
        };
        // eslint-disable-next-line
        this.addStampImage = function (args) {
            // eslint-disable-next-line
            var proxy = _this;
            // eslint-disable-next-line
            var upoadedFiles = args.target.files;
            if (args.target.files[0] !== null) {
                var uploadedFile = upoadedFiles[0];
                if (uploadedFile.type.split('/')[0] === 'image') {
                    var reader = new FileReader();
                    // eslint-disable-next-line
                    reader.onload = function (e) {
                        // eslint-disable-next-line
                        var canvas = document.getElementById(_this.pdfViewer.element.id + '_signatureuploadCanvas_');
                        // eslint-disable-next-line
                        var context = canvas.getContext('2d');
                        // eslint-disable-next-line
                        var image = new Image();
                        // eslint-disable-next-line
                        var proxy = _this;
                        image.onload = function () {
                            // eslint-disable-next-line
                            var signbutton = document.getElementById(_this.pdfViewer.element.id + '_e-pv-upload-button');
                            signbutton.style.visibility = 'hidden';
                            context.drawImage(image, 0, 0, canvas.width, canvas.height);
                            proxy.enableCreateButton(false);
                            proxy.outputString = image.src;
                            proxy.signatureImageHeight = image.naturalHeight;
                            proxy.signatureImageWidth = image.naturalWidth;
                        };
                        image.src = e.currentTarget.result;
                        proxy.outputString = e.currentTarget.result;
                    };
                    reader.readAsDataURL(uploadedFile);
                }
            }
            args.target.value = '';
            args.currentTarget.value = '';
        };
        this.pdfViewer = pdfViewer;
        this.pdfViewerBase = pdfViewerBase;
    }
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.createSignaturePanel = function () {
        var _this = this;
        var maximumWidth = 750;
        if (!isBlazor()) {
            var elementID = this.pdfViewer.element.id;
            var dialogDiv = createElement('div', { id: elementID + '_signature_window', className: 'e-pv-signature-window' });
            dialogDiv.style.display = 'block';
            this.pdfViewerBase.pageContainer.appendChild(dialogDiv);
            var appearanceTab = this.createSignatureCanvas();
            var signaturePanelHeader = void 0;
            if (!this.pdfViewerBase.isToolbarSignClicked) {
                if (this.pdfViewerBase.isInitialField) {
                    signaturePanelHeader = this.pdfViewer.localeObj.getConstant('HandwrittenInitialDialogHeaderText');
                }
                else {
                    signaturePanelHeader = this.pdfViewer.localeObj.getConstant('HandwrittenSignatureDialogHeaderText');
                }
            }
            else {
                if (this.pdfViewerBase.isInitialField) {
                    signaturePanelHeader = this.pdfViewer.localeObj.getConstant('InitialFieldDialogHeaderText');
                }
                else {
                    signaturePanelHeader = this.pdfViewer.localeObj.getConstant('SignatureFieldDialogHeaderText');
                }
            }
            if (this.signatureDialog) {
                this.signatureDialog.content = appearanceTab;
            }
            else {
                this.signatureDialog = new Dialog({
                    // eslint-disable-next-line max-len
                    showCloseIcon: true, closeOnEscape: false, isModal: true, header: signaturePanelHeader, cssClass: 'e-pv-signature-dialog-height',
                    target: this.pdfViewer.element, content: appearanceTab, width: '750px', visible: true, allowDragging: true,
                    beforeClose: function () {
                        _this.clearSignatureCanvas();
                        _this.signatureDialog.destroy();
                        _this.signatureDialog = null;
                        if (_this.tabObj) {
                            _this.tabObj.destroy();
                        }
                        // eslint-disable-next-line
                        var signatureWindow = document.getElementById(_this.pdfViewer.element.id + '_signature_window');
                        if (signatureWindow) {
                            // eslint-disable-next-line
                            signatureWindow.parentNode ? signatureWindow.parentNode.removeChild(signatureWindow) : signatureWindow.parentElement.removeChild(signatureWindow);
                        }
                        // eslint-disable-next-line max-len
                        if (!_this.pdfViewerBase.isToolbarSignClicked && !_this.pdfViewerBase.drawSignatureWithTool && !isNullOrUndefined(_this.pdfViewer.formFieldsModule.currentTarget)) {
                            _this.pdfViewer.fireFocusOutFormField(_this.pdfViewer.formFieldsModule.currentTarget.name, '');
                        }
                        _this.pdfViewerBase.isToolbarSignClicked = false;
                        _this.pdfViewer.formFieldsModule.setFocus();
                    }
                });
                this.signatureDialog.buttons = [
                    // eslint-disable-next-line max-len
                    { buttonModel: { content: this.pdfViewer.localeObj.getConstant('Clear'), disabled: true, cssClass: 'e-pv-clearbtn' }, click: this.clearSignatureCanvas.bind(this) },
                    // eslint-disable-next-line max-len
                    { buttonModel: { content: this.pdfViewer.localeObj.getConstant('Cancel') }, click: this.closeSignaturePanel.bind(this) },
                    // eslint-disable-next-line max-len
                    { buttonModel: { content: this.pdfViewer.localeObj.getConstant('Create'), isPrimary: true, disabled: true, cssClass: 'e-pv-createbtn' }, click: this.addSignatureInPage.bind(this) }
                ];
                this.signatureDialog.appendTo(dialogDiv);
            }
            if (this.pdfViewer.element.offsetWidth < maximumWidth)
                this.updateCanvasSize();
            if (this.pdfViewer.enableRtl) {
                this.signatureDialog.enableRtl = this.pdfViewer.enableRtl;
            }
            var checkboxItem = this.signatureDialog.content.ej2_instances[0].items[0];
            if (checkboxItem.header.label === 'DRAW') {
                var drawCheckbox = document.getElementById("checkbox");
                this.hideSignatureCheckbox(drawCheckbox);
            }
            else if (checkboxItem.header.label === 'TYPE') {
                var typeCheckbox = document.getElementById("checkbox1");
                this.hideSignatureCheckbox(typeCheckbox);
            }
            else {
                var imageCheckbox = document.getElementById("checkbox2");
                this.hideSignatureCheckbox(imageCheckbox);
            }
        }
        else {
            // eslint-disable-next-line
            var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
            if (canvas) {
                if (!this.pdfViewerBase.pageContainer.querySelector('.e-pv-signature-window')) {
                    var elementID = this.pdfViewer.element.id;
                    // eslint-disable-next-line max-len
                    var dialogDiv = createElement('div', { id: elementID + '_signature_window', className: 'e-pv-signature-window' });
                    dialogDiv.style.display = 'block';
                    this.pdfViewerBase.pageContainer.appendChild(dialogDiv);
                }
                canvas.addEventListener('mousedown', this.signaturePanelMouseDown.bind(this));
                canvas.addEventListener('mousemove', this.signaturePanelMouseMove.bind(this));
                canvas.addEventListener('mouseup', this.signaturePanelMouseUp.bind(this));
                canvas.addEventListener('mouseleave', this.signaturePanelMouseUp.bind(this));
                canvas.addEventListener('touchstart', this.signaturePanelMouseDown.bind(this));
                canvas.addEventListener('touchmove', this.signaturePanelMouseMove.bind(this));
                canvas.addEventListener('touchend', this.signaturePanelMouseUp.bind(this));
                this.clearSignatureCanvas();
            }
            this.pdfViewer._dotnetInstance.invokeMethodAsync('OpenSignaturePanel', this.pdfViewerBase.isToolbarSignClicked);
        }
        this.drawSavedSignature();
    };
    Signature.prototype.drawSavedSignature = function () {
        if (!this.pdfViewerBase.isToolbarSignClicked && this.isSaveSignature) {
            this.outputString = this.saveSignatureString;
            // eslint-disable-next-line
            var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
            // eslint-disable-next-line
            var context_1 = canvas.getContext('2d');
            // eslint-disable-next-line
            var image_1 = new Image();
            image_1.onload = function () {
                context_1.drawImage(image_1, 0, 0);
            };
            image_1.src = this.signatureImageString;
            // eslint-disable-next-line
            var checkbox = document.getElementById(this.pdfViewer.element.id + '_signatureCheckBox');
            if (checkbox) {
                checkbox.checked = true;
            }
            this.enableCreateButton(false);
            this.enableClearbutton(false);
        }
    };
    Signature.prototype.hideSignatureCheckbox = function (checkbox) {
        if (this.pdfViewerBase.isToolbarSignClicked) {
            if (this.pdfViewerBase.isInitialField) {
                if (this.pdfViewer.handWrittenSignatureSettings.initialDialogSettings.hideSaveSignature) {
                    this.hideCheckboxParent(checkbox);
                }
            }
            else if (this.pdfViewer.handWrittenSignatureSettings.signatureDialogSettings.hideSaveSignature) {
                this.hideCheckboxParent(checkbox);
            }
        }
        else {
            if (this.pdfViewerBase.isInitialField) {
                if (this.pdfViewer.initialFieldSettings.initialDialogSettings.hideSaveSignature) {
                    this.hideCheckboxParent(checkbox);
                }
            }
            else {
                if (this.pdfViewer.signatureFieldSettings.signatureDialogSettings.hideSaveSignature) {
                    this.hideCheckboxParent(checkbox);
                }
            }
        }
    };
    Signature.prototype.saveSignatureCheckbox = function () {
        if (this.pdfViewerBase.isToolbarSignClicked) {
            return false;
        }
        else {
            if (this.pdfViewerBase.isInitialField) {
                if (this.pdfViewer.initialFieldSettings.initialDialogSettings.hideSaveSignature) {
                    return false;
                }
                else {
                    return this.isInitialFiledSaveSignature;
                }
            }
            else {
                if (this.pdfViewer.signatureFieldSettings.signatureDialogSettings.hideSaveSignature) {
                    return false;
                }
                else {
                    return this.isSignatureFieldsSaveSignature;
                }
            }
        }
    };
    Signature.prototype.hideCheckboxParent = function (checkbox) {
        if (checkbox) {
            checkbox.parentElement.style.display = 'none';
        }
    };
    Signature.prototype.saveSignatureImage = function () {
        // eslint-disable-next-line
        var checkbox = document.getElementById(this.pdfViewer.element.id + '_signatureCheckBox');
        if (checkbox && checkbox.checked) {
            if (this.outputString !== '') {
                this.isSaveSignature = true;
                this.saveSignatureString = this.outputString;
                // eslint-disable-next-line
                var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
                this.saveImageString = canvas.toDataURL();
                this.signatureImageString = this.saveImageString;
            }
        }
        else {
            if (this.isSaveSignature) {
                this.isSaveSignature = false;
                this.saveSignatureString = '';
                this.saveImageString = '';
                this.signatureImageString = '';
            }
            this.clearSignatureCanvas();
        }
    };
    /**
     * @param type
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.addSignature = function (type) {
        var annot;
        if (this.pdfViewerBase.isToolbarSignClicked) {
            var annotationName = this.pdfViewer.annotation.createGUID();
            this.pdfViewerBase.currentSignatureAnnot = null;
            this.pdfViewerBase.isSignatureAdded = true;
            var pageIndex = this.pdfViewerBase.currentPageNumber - 1;
            // eslint-disable-next-line max-len
            var thickness = this.pdfViewer.handWrittenSignatureSettings.thickness ? this.pdfViewer.handWrittenSignatureSettings.thickness : 1;
            // eslint-disable-next-line max-len
            var opacity = this.pdfViewer.handWrittenSignatureSettings.opacity ? this.pdfViewer.handWrittenSignatureSettings.opacity : 1;
            // eslint-disable-next-line max-len
            var strokeColor = this.pdfViewer.handWrittenSignatureSettings.strokeColor ? this.pdfViewer.handWrittenSignatureSettings.strokeColor : '#000000';
            var fontSize = 16;
            var fontFamily = 'Helvetica';
            var signatureBounds = this.pdfViewer.formFieldsModule.updateSignatureAspectRatio(this.outputString, true);
            // eslint-disable-next-line
            var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
            this.saveImageString = canvas.toDataURL();
            this.signatureImageString = this.saveImageString;
            annot = {
                // eslint-disable-next-line max-len
                id: 'sign' + this.pdfViewerBase.signatureCount, bounds: signatureBounds, pageIndex: pageIndex, data: this.outputString, fontFamily: fontFamily, fontSize: fontSize,
                shapeAnnotationType: 'HandWrittenSignature', opacity: opacity, strokeColor: strokeColor, thickness: thickness, signatureName: annotationName
            };
            this.pdfViewerBase.currentSignatureAnnot = annot;
            // eslint-disable-next-line
            var checkbox = void 0;
            if (isBlazor()) {
                checkbox = document.getElementById(this.pdfViewer.element.id + '_signatureCheckBox');
            }
            else {
                checkbox = document.getElementById('checkbox');
            }
            if (checkbox && checkbox.checked) {
                this.addSignatureCollection();
            }
            this.hideSignaturePanel();
            this.pdfViewerBase.isToolbarSignClicked = false;
        }
        else {
            // eslint-disable-next-line
            var checkbox = void 0;
            if (isBlazor()) {
                checkbox = document.getElementById(this.pdfViewer.element.id + '_signatureCheckBox');
            }
            else {
                checkbox = document.getElementById('checkbox');
            }
            var isSignatureAdded = false;
            if (isBlazor() && type) {
                if (type[0] === 'Image') {
                    this.imageAddSignature();
                    isSignatureAdded = true;
                    this.outputString = '';
                }
                else if (type[0] === 'Type') {
                    this.typeAddSignature();
                    isSignatureAdded = true;
                    this.outputString = '';
                }
            }
            if (!isSignatureAdded) {
                // eslint-disable-next-line
                var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
                this.saveImageString = canvas.toDataURL();
                if (checkbox && checkbox.checked) {
                    this.isSaveSignature = true;
                    this.saveSignatureString = this.outputString;
                    this.checkSaveFiledSign(this.pdfViewerBase.isInitialField, true);
                }
                else {
                    this.isSaveSignature = false;
                    this.saveSignatureString = '';
                    this.checkSaveFiledSign(this.pdfViewerBase.isInitialField, false);
                }
                this.signatureImageString = this.saveImageString;
                this.pdfViewer.formFieldsModule.drawSignature(null, null, this.pdfViewerBase.currentTarget, null);
                isSignatureAdded = true;
            }
        }
    };
    Signature.prototype.checkSaveFiledSign = function (initialField, saveSign) {
        if (initialField) {
            this.isInitialFiledSaveSignature = saveSign;
        }
        else {
            this.isSignatureFieldsSaveSignature = saveSign;
        }
    };
    Signature.prototype.addSignatureInPage = function () {
        if (this.signaturetype === 'Draw') {
            this.addSignature();
        }
        else if (this.signaturetype === 'Type') {
            this.typeAddSignature();
        }
        else {
            this.imageAddSignature();
        }
        this.drawOutputString = '';
        this.imageOutputString = '';
    };
    Signature.prototype.typeAddSignature = function () {
        if (this.pdfViewerBase.isToolbarSignClicked) {
            var zoomvalue = this.pdfViewerBase.getZoomFactor();
            // eslint-disable-next-line
            var annot = null;
            var annotationName = this.pdfViewer.annotation.createGUID();
            this.pdfViewerBase.currentSignatureAnnot = null;
            this.pdfViewerBase.isSignatureAdded = true;
            var pageIndex = this.pdfViewerBase.currentPageNumber - 1;
            var pageDiv = document.getElementById(this.pdfViewer.element.id + '_pageDiv_' + pageIndex);
            var thickness = this.pdfViewer.handWrittenSignatureSettings.thickness ? this.pdfViewer.handWrittenSignatureSettings.thickness : 1;
            var opacity = this.pdfViewer.handWrittenSignatureSettings.opacity ? this.pdfViewer.handWrittenSignatureSettings.opacity : 1;
            var strokeColor = this.pdfViewer.handWrittenSignatureSettings.strokeColor ? this.pdfViewer.handWrittenSignatureSettings.strokeColor : '#000000';
            var fontSize = 16;
            var currentLeft = 0;
            var currentTop = 0;
            var currentHeight = 65;
            var currentWidth = 200;
            currentLeft = ((parseFloat(pageDiv.style.width) / 2) - (currentWidth / 2)) / zoomvalue;
            currentTop = ((parseFloat(pageDiv.style.height) / 2) - (currentHeight / 2)) / zoomvalue;
            var zoomFactor = this.pdfViewerBase.getZoomFactor();
            if (!this.signtypevalue) {
                this.updateSignatureTypeValue(true);
            }
            var inputValue = this.signtypevalue;
            annot = {
                // eslint-disable-next-line max-len
                id: 'Typesign' + this.pdfViewerBase.signatureCount, bounds: {
                    left: currentLeft / zoomFactor, top: currentTop / zoomFactor, x: currentLeft / zoomFactor,
                    // eslint-disable-next-line max-len
                    y: currentTop / zoomFactor, width: currentWidth, height: currentHeight
                }, pageIndex: pageIndex, dynamicText: inputValue, data: this.pdfViewerBase.signatureModule.outputString, shapeAnnotationType: 'SignatureText',
                opacity: opacity, strokeColor: strokeColor, thickness: thickness, fontSize: fontSize, fontFamily: this.fontName, signatureName: annotationName
            };
            this.pdfViewerBase.currentSignatureAnnot = annot;
            // eslint-disable-next-line
            var checkbox = void 0;
            if (isBlazor()) {
                checkbox = document.getElementById(this.pdfViewer.element.id + '_signatureCheckBox');
            }
            else {
                checkbox = document.getElementById('checkbox1');
            }
            if (checkbox && checkbox.checked) {
                this.addSignatureCollection();
            }
            this.signtypevalue = '';
            this.hideSignaturePanel();
            this.pdfViewerBase.isToolbarSignClicked = false;
        }
        else {
            if (this.outputString === '') {
                this.updateSignatureTypeValue();
            }
            this.pdfViewer.formFieldsModule.drawSignature('Type', '', this.pdfViewerBase.currentTarget);
            this.hideSignaturePanel();
        }
    };
    Signature.prototype.imageAddSignature = function () {
        if (this.pdfViewerBase.isToolbarSignClicked) {
            var zoomvalue = this.pdfViewerBase.getZoomFactor();
            // eslint-disable-next-line
            var annot = null;
            var annotationName = this.pdfViewer.annotation.createGUID();
            this.pdfViewerBase.currentSignatureAnnot = null;
            this.pdfViewerBase.isSignatureAdded = true;
            var pageIndex = this.pdfViewerBase.currentPageNumber - 1;
            var pageDiv = document.getElementById(this.pdfViewer.element.id + '_pageDiv_' + pageIndex);
            var thickness = this.pdfViewer.handWrittenSignatureSettings.thickness ? this.pdfViewer.handWrittenSignatureSettings.thickness : 1;
            var opacity = this.pdfViewer.handWrittenSignatureSettings.opacity ? this.pdfViewer.handWrittenSignatureSettings.opacity : 1;
            var strokeColor = this.pdfViewer.handWrittenSignatureSettings.strokeColor ? this.pdfViewer.handWrittenSignatureSettings.strokeColor : '#000000';
            var fontSize = 16;
            var currentLeft = 0;
            var currentTop = 0;
            var standardImageRatio = 100;
            var currentHeight = 0;
            var currentWidth = 0;
            // eslint-disable-next-line max-len
            if (this.signatureImageHeight >= this.signatureImageWidth) {
                currentHeight = ((this.signatureImageHeight / this.signatureImageHeight) * standardImageRatio);
                currentWidth = ((this.signatureImageWidth / this.signatureImageHeight) * standardImageRatio);
            }
            else {
                currentHeight = ((this.signatureImageHeight / this.signatureImageWidth) * standardImageRatio);
                currentWidth = ((this.signatureImageWidth / this.signatureImageWidth) * standardImageRatio);
            }
            currentLeft = ((parseFloat(pageDiv.style.width) / 2) - (currentWidth / 2)) / zoomvalue;
            currentTop = ((parseFloat(pageDiv.style.height) / 2) - (currentHeight / 2)) / zoomvalue;
            var zoomFactor = this.pdfViewerBase.getZoomFactor();
            var inputValue = this.signtypevalue;
            annot = {
                // eslint-disable-next-line max-len
                id: 'Typesign' + this.pdfViewerBase.signatureCount, bounds: {
                    left: currentLeft / zoomFactor, top: currentTop / zoomFactor, x: currentLeft / zoomFactor,
                    // eslint-disable-next-line max-len
                    y: currentTop / zoomFactor, width: currentWidth, height: currentHeight
                }, pageIndex: pageIndex, dynamicText: inputValue, data: this.pdfViewerBase.signatureModule.outputString, shapeAnnotationType: 'SignatureImage',
                opacity: opacity, strokeColor: strokeColor, thickness: thickness, fontSize: fontSize, fontFamily: this.fontName, signatureName: annotationName
            };
            this.pdfViewerBase.currentSignatureAnnot = annot;
            // eslint-disable-next-line
            var checkbox = void 0;
            if (isBlazor()) {
                checkbox = document.getElementById(this.pdfViewer.element.id + '_signatureCheckBox');
            }
            else {
                checkbox = document.getElementById('checkbox2');
            }
            if (checkbox && checkbox.checked) {
                this.addSignatureCollection();
            }
            this.hideSignaturePanel();
            this.pdfViewerBase.isToolbarSignClicked = false;
        }
        else {
            this.pdfViewer.formFieldsModule.drawSignature('Image', '', this.pdfViewerBase.currentTarget);
            this.hideSignaturePanel();
        }
    };
    Signature.prototype.updateSignatureTypeValue = function (isType) {
        // eslint-disable-next-line
        var fontElements = document.querySelectorAll('.e-pv-font-sign');
        if (fontElements) {
            for (var j = 0; j < fontElements.length; j++) {
                if (fontElements[j] && fontElements[j].style.borderColor === 'red') {
                    if (isType) {
                        this.signtypevalue = fontElements[j].textContent;
                        this.outputString = fontElements[j].textContent;
                    }
                    else {
                        this.outputString = fontElements[j].textContent;
                    }
                    try {
                        this.fontName = JSON.parse(fontElements[j].style.fontFamily);
                    }
                    catch (e) {
                        this.fontName = fontElements[j].style.fontFamily;
                    }
                }
            }
        }
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.hideSignaturePanel = function () {
        if (this.signatureDialog) {
            this.signatureDialog.hide();
        }
    };
    Signature.prototype.bindTypeSignatureClickEvent = function () {
        if (isBlazor()) {
            for (var i = 0; i < 4; i++) {
                // eslint-disable-next-line
                var fontElement = document.querySelector('#' + this.pdfViewer.element.id + '_font_signature' + i);
                if (fontElement) {
                    fontElement.addEventListener('click', this.typeSignatureclicked.bind(this));
                }
            }
        }
    };
    Signature.prototype.bindDrawSignatureClickEvent = function () {
        // eslint-disable-next-line
        var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
        if (canvas) {
            canvas.addEventListener('mousedown', this.signaturePanelMouseDown.bind(this));
            canvas.addEventListener('mousemove', this.signaturePanelMouseMove.bind(this));
            canvas.addEventListener('mouseup', this.signaturePanelMouseUp.bind(this));
            canvas.addEventListener('mouseleave', this.signaturePanelMouseUp.bind(this));
            canvas.addEventListener('touchstart', this.signaturePanelMouseDown.bind(this));
            canvas.addEventListener('touchmove', this.signaturePanelMouseMove.bind(this));
            canvas.addEventListener('touchend', this.signaturePanelMouseUp.bind(this));
        }
    };
    // eslint-disable-next-line
    Signature.prototype.typeSignatureclicked = function (event) {
        var eventTarget = event.target;
        if (eventTarget) {
            for (var i = 0; i < 4; i++) {
                // eslint-disable-next-line
                var fontElement = document.querySelector('#' + this.pdfViewer.element.id + '_font_signature' + i);
                if (fontElement) {
                    fontElement.style.borderColor = '';
                }
            }
            eventTarget.style.borderColor = 'red';
            this.outputString = eventTarget.textContent;
            try {
                this.fontName = JSON.parse(eventTarget.style.fontFamily);
            }
            catch (e) {
                this.fontName = eventTarget.style.fontFamily;
            }
            this.enableCreateButton(false);
        }
    };
    // eslint-disable-next-line
    Signature.prototype.createSignatureCanvas = function () {
        // eslint-disable-next-line
        var previousField = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
        // eslint-disable-next-line
        var field = document.getElementById(this.pdfViewer.element.id + 'Signature_appearance');
        if (previousField) {
            previousField.remove();
        }
        if (field) {
            field.remove();
        }
        // eslint-disable-next-line max-len
        var appearanceDiv = createElement('div', { id: this.pdfViewer.element.id + 'Signature_appearance', className: 'e-pv-signature-apperance', styles: 'margin-top:30px' });
        // eslint-disable-next-line max-len
        var canvas = createElement('canvas', { id: this.pdfViewer.element.id + '_signatureCanvas_', className: 'e-pv-signature-canvas' });
        if (this.pdfViewer.element.offsetWidth > 750) {
            canvas.width = 714;
        }
        else {
            canvas.width = this.pdfViewer.element.offsetWidth - 35;
        }
        canvas.classList.add('e-pv-canvas-signature');
        canvas.height = 305;
        canvas.style.height = '305px';
        canvas.style.border = '1px dotted #bdbdbd';
        canvas.style.backgroundColor = 'white';
        canvas.style.boxSizing = 'border-box';
        canvas.style.borderRadius = '2px';
        canvas.addEventListener('mousedown', this.signaturePanelMouseDown.bind(this));
        canvas.addEventListener('mousemove', this.signaturePanelMouseMove.bind(this));
        canvas.addEventListener('mouseup', this.signaturePanelMouseUp.bind(this));
        canvas.addEventListener('mouseleave', this.signaturePanelMouseLeave.bind(this));
        canvas.addEventListener('touchstart', this.signaturePanelMouseDown.bind(this));
        canvas.addEventListener('touchmove', this.signaturePanelMouseMove.bind(this));
        canvas.addEventListener('touchend', this.signaturePanelMouseUp.bind(this));
        appearanceDiv.appendChild(canvas);
        // eslint-disable-next-line
        var checkBoxObj;
        // eslint-disable-next-line
        var input;
        var saveCheckBoxContent;
        if (this.pdfViewerBase.isToolbarSignClicked && !this.pdfViewerBase.isInitialField) {
            saveCheckBoxContent = this.pdfViewer.localeObj.getConstant('Save Signature');
        }
        else {
            saveCheckBoxContent = this.pdfViewerBase.isInitialField ? this.pdfViewer.localeObj.getConstant('Save Initial') : this.pdfViewer.localeObj.getConstant('Save Signature');
        }
        if (!this.pdfViewer.hideSaveSignature) {
            // eslint-disable-next-line
            input = document.createElement('input');
            input.type = 'checkbox';
            input.id = 'checkbox';
            appearanceDiv.appendChild(input);
            checkBoxObj = new CheckBox({ label: saveCheckBoxContent, disabled: false, checked: false });
            checkBoxObj.appendTo(input);
        }
        this.isSaveSignature = this.saveSignatureCheckbox();
        if (this.isSaveSignature) {
            checkBoxObj.checked = true;
        }
        //if (!this.pdfViewerBase.isToolbarSignClicked) {
        // eslint-disable-next-line
        var typeDiv = createElement('div', { id: this.pdfViewer.element.id + 'type_appearance', className: 'e-pv-signature-apperance', styles: 'margin-top:6px' });
        // eslint-disable-next-line
        var inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.id = this.pdfViewer.element.id + '_e-pv-Signtext-box';
        typeDiv.appendChild(inputText);
        // eslint-disable-next-line
        var inputobj = new TextBox({
            placeholder: this.pdfViewer.localeObj.getConstant('Enter Signature as Name'),
            floatLabelType: 'Auto'
        });
        inputobj.appendTo(inputText);
        // eslint-disable-next-line
        var fontDiv = createElement('div', { id: this.pdfViewer.element.id + '_font_appearance', className: 'e-pv-font-appearance-style' });
        fontDiv.classList.add('e-pv-canvas-signature');
        fontDiv.style.height = '270px';
        fontDiv.style.border = '1px dotted #bdbdbd';
        fontDiv.style.boxSizing = 'border-box';
        fontDiv.style.borderRadius = '2px';
        fontDiv.style.backgroundColor = 'white';
        fontDiv.style.color = 'black';
        fontDiv.style.marginTop = '8px';
        typeDiv.appendChild(fontDiv);
        input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'checkbox1';
        typeDiv.appendChild(input);
        checkBoxObj = new CheckBox({ label: saveCheckBoxContent, disabled: false, checked: false });
        checkBoxObj.appendTo(input);
        inputobj.addEventListener('input', this.renderSignatureText.bind(this));
        this.enableCreateButton(true);
        // eslint-disable-next-line
        var tab = createElement('div', { id: this.pdfViewer.element.id + 'Signature_tab' });
        var uploadDiv = createElement('div', { id: this.pdfViewer.element.id + 'upload_appearance', className: 'e-pv-signature-apperance', styles: 'padding-top:30px' });
        // eslint-disable-next-line
        var button = document.createElement('div');
        button.id = this.pdfViewer.element.id + '_e-pv-upload-button';
        uploadDiv.appendChild(button);
        // eslint-disable-next-line
        var uploadButton = new Button({ cssClass: 'e-pv-sign-upload', content: this.pdfViewer.localeObj.getConstant('Browse Signature Image') });
        uploadButton.appendTo(button);
        uploadButton.element.style.position = 'absolute';
        // eslint-disable-next-line max-len
        var uploadCanvas = createElement('canvas', { id: this.pdfViewer.element.id + '_signatureuploadCanvas_', className: 'e-pv-signature-uploadcanvas' });
        if (this.pdfViewer.element.offsetWidth > 750) {
            uploadCanvas.width = 714;
        }
        else {
            uploadCanvas.width = this.pdfViewer.element.offsetWidth - 35;
        }
        uploadCanvas.classList.add('e-pv-canvas-signature');
        uploadCanvas.height = 305;
        uploadCanvas.style.height = '305px';
        uploadButton.element.style.left = ((uploadCanvas.width / 2) - 50) + 'px';
        uploadButton.element.style.top = ((parseFloat(uploadCanvas.style.height) / 2) + 20) + 'px';
        uploadCanvas.style.border = '1px dotted #bdbdbd';
        uploadCanvas.style.backgroundColor = 'white';
        uploadCanvas.style.boxSizing = 'border-box';
        uploadCanvas.style.borderRadius = '2px';
        uploadCanvas.style.zIndex = '0';
        uploadDiv.appendChild(uploadCanvas);
        input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'checkbox2';
        uploadDiv.appendChild(input);
        checkBoxObj = new CheckBox({ label: saveCheckBoxContent, disabled: false, checked: false });
        checkBoxObj.appendTo(input);
        button.addEventListener('click', this.uploadSignatureImage.bind(this));
        // eslint-disable-next-line max-len
        this.signfontStyle = [{ FontName: 'Helvetica' }, { FontName: 'Times New Roman' }, { FontName: 'Courier' }, { FontName: 'Symbol' }];
        // eslint-disable-next-line
        var fontSignature = [];
        if (this.pdfViewerBase.isToolbarSignClicked && !isNullOrUndefined(this.pdfViewer.handWrittenSignatureSettings.typeSignatureFonts)) {
            for (var j = 0; j < 4; j++) {
                if (!isNullOrUndefined(this.pdfViewer.handWrittenSignatureSettings.typeSignatureFonts[j])) {
                    this.signfontStyle[j].FontName = this.pdfViewer.handWrittenSignatureSettings.typeSignatureFonts[j];
                }
            }
        }
        for (var i = 0; i < this.signfontStyle.length; i++) {
            fontSignature[i] = document.createElement('div');
            fontSignature[i].id = '_font_signature' + i + '';
            fontSignature[i].classList.add('e-pv-font-sign');
        }
        this.fontsign = fontSignature;
        // eslint-disable-next-line
        var proxy = this;
        var items = [];
        if (this.pdfViewerBase.isToolbarSignClicked) {
            if (this.pdfViewerBase.isInitialField) {
                items = this.showHideSignatureTab(this.pdfViewer.handWrittenSignatureSettings.initialDialogSettings.displayMode, appearanceDiv, typeDiv, uploadDiv);
            }
            else {
                items = this.showHideSignatureTab(this.pdfViewer.handWrittenSignatureSettings.signatureDialogSettings.displayMode, appearanceDiv, typeDiv, uploadDiv);
            }
        }
        else {
            if (this.pdfViewerBase.isInitialField) {
                items = this.showHideSignatureTab(this.pdfViewer.initialFieldSettings.initialDialogSettings.displayMode, appearanceDiv, typeDiv, uploadDiv);
            }
            else {
                items = this.showHideSignatureTab(this.pdfViewer.signatureFieldSettings.signatureDialogSettings.displayMode, appearanceDiv, typeDiv, uploadDiv);
            }
        }
        // eslint-disable-next-line
        this.tabObj = new Tab({
            selected: function (args) {
                proxy.handleSelectEvent(args);
            },
            selecting: function (args) {
                proxy.select(args);
            },
            items: items
        });
        this.tabObj.appendTo(tab);
        if (tab && tab.lastElementChild) {
            tab.lastElementChild.style.overflow = 'hidden';
        }
        if (items[0].header.label === 'DRAW') {
            this.signaturetype = 'Draw';
        }
        else if (items[0].header.label === 'TYPE') {
            this.signaturetype = 'Type';
        }
        else {
            this.signaturetype = 'Image';
        }
        return tab;
        // } else {
        //     return appearanceDiv;
        // }
    };
    Signature.prototype.handleSelectEvent = function (e) {
        // eslint-disable-next-line
        var headerText = '';
        var maximumWidth = 750;
        var tabInstance = document.getElementById(this.pdfViewer.element.id + 'Signature_tab').ej2_instances[0];
        if (tabInstance) {
            if (tabInstance.items.length > 0) {
                for (var i = 0; i < tabInstance.items.length; i++) {
                    var headerValue = tabInstance.items[i].header.text;
                    if (headerValue === e.selectedItem.textContent) {
                        headerText = tabInstance.items[i].header.label;
                    }
                }
            }
        }
        var checkbox = document.getElementById('checkbox');
        if (checkbox && checkbox.checked) {
            if (e.previousIndex === 0 && this.outputString !== '') {
                this.isSaveSignature = true;
                this.saveSignatureString = this.outputString;
                // eslint-disable-next-line
                var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
                this.saveImageString = canvas.toDataURL();
                this.signatureImageString = this.saveImageString;
            }
        }
        else {
            if (this.isSaveSignature) {
                this.isSaveSignature = false;
                this.saveSignatureString = '';
                this.saveImageString = '';
                this.signatureImageString = '';
            }
        }
        this.clearSignatureCanvas(e);
        // eslint-disable-next-line
        if (headerText.toLocaleLowerCase() === 'draw') {
            this.signaturetype = 'Draw';
            this.enableCreateSignatureButton();
            var drawCheckbox = document.getElementById("checkbox");
            this.hideSignatureCheckbox(drawCheckbox);
        }
        else if (headerText.toLocaleLowerCase() === 'type') {
            this.updateSignatureTypeValue();
            this.signaturetype = 'Type';
            this.enableCreateSignatureButton();
            var typeCheckbox = document.getElementById("checkbox1");
            this.hideSignatureCheckbox(typeCheckbox);
        }
        else if (headerText.toLocaleLowerCase() === 'upload') {
            this.signaturetype = 'Image';
            this.enableCreateSignatureButton();
            var imageCheckbox = document.getElementById("checkbox2");
            this.hideSignatureCheckbox(imageCheckbox);
        }
        if (this.pdfViewer.element.offsetWidth < maximumWidth)
            this.updateCanvasSize();
    };
    Signature.prototype.enableCreateSignatureButton = function () {
        if (this.outputString !== "") {
            this.enableCreateButton(false);
        }
        else {
            this.enableCreateButton(true);
        }
    };
    Signature.prototype.showHideSignatureTab = function (displayMode, appearanceDiv, typeDiv, uploadDiv) {
        var items = [];
        if (displayMode & DisplayMode.Draw) {
            items.push({
                header: { 'text': this.pdfViewer.localeObj.getConstant('Draw-hand Signature'), 'label': 'DRAW' },
                content: appearanceDiv
            });
        }
        if (displayMode & DisplayMode.Text) {
            items.push({
                header: { 'text': this.pdfViewer.localeObj.getConstant('Type Signature'), 'label': 'TYPE' },
                content: typeDiv
            });
        }
        if (displayMode & DisplayMode.Upload) {
            items.push({
                header: { 'text': this.pdfViewer.localeObj.getConstant('Upload Signature'), 'label': 'UPLOAD' },
                content: uploadDiv
            });
        }
        return items;
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.createSignatureFileElement = function () {
        // eslint-disable-next-line
        var signImage = createElement('input', { id: this.pdfViewer.element.id + '_signElement', attrs: { 'type': 'file' } });
        signImage.setAttribute('accept', '.jpg,.jpeg,.png');
        signImage.style.position = 'absolute';
        signImage.style.left = '0px';
        signImage.style.top = '0px';
        signImage.style.visibility = 'hidden';
        document.body.appendChild(signImage);
        signImage.addEventListener('change', this.addStampImage);
    };
    Signature.prototype.uploadSignatureImage = function () {
        // eslint-disable-next-line
        var signImage = document.getElementById(this.pdfViewer.element.id + '_signElement');
        if (signImage) {
            signImage.click();
        }
    };
    Signature.prototype.renderSignatureText = function () {
        var maximumWidth = 750;
        // eslint-disable-next-line
        var fontDiv = document.getElementById(this.pdfViewer.element.id + '_font_appearance');
        // eslint-disable-next-line
        var textBox = document.getElementById(this.pdfViewer.element.id + '_e-pv-Signtext-box');
        for (var i = 0; i < this.signfontStyle.length; i++) {
            this.fontsign[i].innerHTML = textBox.value;
            this.fontsign[i].style.fontFamily = this.signfontStyle[i].FontName;
            if (this.signfontStyle[i].FontName === 'Helvetica') {
                this.fontsign[i].style.borderColor = 'red';
            }
            fontDiv.appendChild(this.fontsign[i]);
        }
        for (var i = 0; i < this.signfontStyle.length; i++) {
            // eslint-disable-next-line
            var clickSign = document.getElementById('_font_signature' + i + '');
            clickSign.addEventListener('click', this.typeSignatureclick.bind(this));
        }
        this.enableCreateButton(false);
        this.enableClearbutton(false);
        if (this.pdfViewer.element.offsetWidth < maximumWidth)
            this.updateCanvasSize();
    };
    Signature.prototype.typeSignatureclick = function () {
        var eventTarget = event.target;
        // eslint-disable-next-line
        var createButton = document.getElementsByClassName('e-pv-createbtn')[0];
        createButton.disabled = false;
        for (var i = 0; i < 4; i++) {
            // eslint-disable-next-line
            var fontElement = document.getElementById('_font_signature' + i + '');
            if (fontElement) {
                fontElement.style.borderColor = '';
            }
        }
        eventTarget.style.borderColor = 'red';
        this.outputString = eventTarget.textContent;
        try {
            this.fontName = JSON.parse(eventTarget.style.fontFamily);
        }
        catch (e) {
            this.fontName = eventTarget.style.fontFamily;
        }
    };
    /**
     * @param bounds
     * @param position
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.addSignatureCollection = function (bounds, position) {
        var minimumX = -1;
        var minimumY = -1;
        var maximumX = -1;
        var maximumY = -1;
        // eslint-disable-next-line
        var collectionData = processPathData(this.outputString);
        // eslint-disable-next-line
        var newCanvas = document.createElement('canvas');
        // eslint-disable-next-line
        var context = newCanvas.getContext('2d');
        // eslint-disable-next-line
        var imageString;
        var signatureType = this.pdfViewerBase.currentSignatureAnnot.shapeAnnotationType;
        if (signatureType === 'HandWrittenSignature') {
            if (collectionData.length !== 0) {
                // eslint-disable-next-line
                for (var k = 0; k < collectionData.length; k++) {
                    // eslint-disable-next-line
                    var val = collectionData[k];
                    if (minimumX === -1) {
                        // eslint-disable-next-line
                        minimumX = (val['x']);
                        // eslint-disable-next-line
                        maximumX = (val['x']);
                        // eslint-disable-next-line
                        minimumY = (val['y']);
                        // eslint-disable-next-line
                        maximumY = (val['y']);
                    }
                    else {
                        // eslint-disable-next-line
                        var point1 = (val['x']);
                        // eslint-disable-next-line
                        var point2 = (val['y']);
                        if (minimumX >= point1) {
                            minimumX = point1;
                        }
                        if (minimumY >= point2) {
                            minimumY = point2;
                        }
                        if (maximumX <= point1) {
                            maximumX = point1;
                        }
                        if (maximumY <= point2) {
                            maximumY = point2;
                        }
                    }
                }
                var newdifferenceX = maximumX - minimumX;
                var newdifferenceY = maximumY - minimumY;
                var differenceX = newdifferenceX / 100;
                var differenceY = newdifferenceY / 100;
                var left = 0;
                var top_1 = 0;
                if (bounds) {
                    newCanvas.width = position.currentWidth;
                    newCanvas.height = position.currentHeight;
                    differenceX = newdifferenceX / (bounds.width);
                    differenceY = newdifferenceY / (bounds.height);
                    left = bounds.x - position.currentLeft;
                    top_1 = bounds.y - position.currentTop;
                }
                else {
                    newCanvas.width = 100;
                    newCanvas.height = 100;
                }
                context.beginPath();
                for (var n = 0; n < collectionData.length; n++) {
                    // eslint-disable-next-line
                    var val = collectionData[n];
                    // eslint-disable-next-line
                    var point1 = ((val['x'] - minimumX) / differenceX) + left;
                    // eslint-disable-next-line
                    var point2 = ((val['y'] - minimumY) / differenceY) + top_1;
                    // eslint-disable-next-line
                    if (val['command'] === 'M') {
                        context.moveTo(point1, point2);
                        // eslint-disable-next-line
                    }
                    else if (val['command'] === 'L') {
                        context.lineTo(point1, point2);
                    }
                }
                context.stroke();
                context.closePath();
                imageString = newCanvas.toDataURL();
            }
        }
        else if (signatureType === 'SignatureText') {
            imageString = this.outputString;
        }
        else {
            imageString = this.outputString;
        }
        if (bounds) {
            this.saveImageString = imageString;
        }
        else {
            // eslint-disable-next-line
            var signCollection = {};
            signCollection['sign_' + this.pdfViewerBase.imageCount] = this.outputString;
            this.outputcollection.push(signCollection);
            // eslint-disable-next-line
            var signature = [];
            signature.push({ id: 'sign_' + this.pdfViewerBase.imageCount, imageData: imageString, signatureType: signatureType, fontFamily: this.pdfViewerBase.currentSignatureAnnot.fontFamily });
            this.signaturecollection.push({ image: signature, isInitial: this.pdfViewerBase.isInitialField });
            this.pdfViewerBase.imageCount++;
        }
    };
    /**
     * @private]
     * @param {number} limit - The limit.
     * @returns {number} - Returns number.
     */
    Signature.prototype.getSaveLimit = function (limit) {
        if (limit > this.maxSaveLimit) {
            limit = this.maxSaveLimit;
        }
        else if (limit < 1) {
            limit = 1;
        }
        return limit;
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.RenderSavedSignature = function () {
        this.pdfViewerBase.signatureCount++;
        var zoomvalue = this.pdfViewerBase.getZoomFactor();
        var annot;
        if (this.pdfViewerBase.isAddedSignClicked) {
            var annotationName = this.pdfViewer.annotation.createGUID();
            this.pdfViewerBase.currentSignatureAnnot = null;
            this.pdfViewerBase.isSignatureAdded = true;
            var pageIndex = this.pdfViewerBase.currentPageNumber - 1;
            var pageDiv = document.getElementById(this.pdfViewer.element.id + '_pageDiv_' + pageIndex);
            var currentLeft = 0;
            var currentTop = 0;
            // eslint-disable-next-line max-len
            var currentWidth = this.pdfViewer.handWrittenSignatureSettings.width ? this.pdfViewer.handWrittenSignatureSettings.width : 100;
            // eslint-disable-next-line max-len
            var currentHeight = this.pdfViewer.handWrittenSignatureSettings.height ? this.pdfViewer.handWrittenSignatureSettings.height : 100;
            // eslint-disable-next-line max-len
            var thickness = this.pdfViewer.handWrittenSignatureSettings.thickness ? this.pdfViewer.handWrittenSignatureSettings.thickness : 1;
            // eslint-disable-next-line max-len
            var opacity = this.pdfViewer.handWrittenSignatureSettings.opacity ? this.pdfViewer.handWrittenSignatureSettings.opacity : 1;
            // eslint-disable-next-line max-len
            var strokeColor = this.pdfViewer.handWrittenSignatureSettings.strokeColor ? this.pdfViewer.handWrittenSignatureSettings.strokeColor : '#000000';
            currentLeft = ((parseFloat(pageDiv.style.width) / 2) - (currentWidth / 2)) / zoomvalue;
            // eslint-disable-next-line max-len
            currentTop = ((parseFloat(pageDiv.style.height) / 2) - (currentHeight / 2)) / zoomvalue;
            var keyString = '';
            var signatureType = void 0;
            var signatureFontFamily = void 0;
            for (var collection = 0; collection < this.outputcollection.length; collection++) {
                // eslint-disable-next-line
                var collectionAddedsign = this.outputcollection[collection];
                // eslint-disable-next-line
                var eventTarget = event.target;
                // eslint-disable-next-line max-len
                if (eventTarget && eventTarget.id === 'sign_' + collection || eventTarget && eventTarget.id === 'sign_border' + collection) {
                    keyString = collectionAddedsign['sign_' + collection];
                    break;
                }
            }
            for (var signatureIndex = 0; signatureIndex < this.signaturecollection.length; signatureIndex++) {
                var eventTarget = event.target;
                var signatureId = this.signaturecollection[signatureIndex].image[0].id.split('_')[1];
                if (eventTarget && eventTarget.id === 'sign_' + signatureId || eventTarget && eventTarget.id === 'sign_border' + signatureId) {
                    signatureType = this.signaturecollection[signatureIndex].image[0].signatureType;
                    signatureFontFamily = this.signaturecollection[signatureIndex].image[0].fontFamily;
                    break;
                }
            }
            if (signatureType === 'HandWrittenSignature') {
                // eslint-disable-next-line
                var signatureBounds = this.pdfViewer.formFieldsModule.updateSignatureAspectRatio(keyString, true);
                // eslint-disable-next-line max-len
                currentWidth = signatureBounds.width ? signatureBounds.width : currentWidth;
                // eslint-disable-next-line max-len
                currentHeight = signatureBounds.height ? signatureBounds.height : currentHeight;
            }
            else {
                currentWidth = currentWidth === 150 ? 200 : this.pdfViewer.handWrittenSignatureSettings.width;
                // eslint-disable-next-line max-len
                currentHeight = currentHeight === 100 ? 65 : this.pdfViewer.handWrittenSignatureSettings.height;
            }
            annot = {
                // eslint-disable-next-line max-len
                id: 'sign' + this.pdfViewerBase.signatureCount, bounds: { x: currentLeft, y: currentTop, width: currentWidth, height: currentHeight }, pageIndex: pageIndex, data: keyString,
                // eslint-disable-next-line max-len
                shapeAnnotationType: signatureType, opacity: opacity, fontFamily: signatureFontFamily, strokeColor: strokeColor, thickness: thickness, signatureName: annotationName
            };
            this.pdfViewerBase.currentSignatureAnnot = annot;
            this.pdfViewerBase.isAddedSignClicked = false;
        }
        else {
            this.pdfViewer.formFieldsModule.drawSignature();
        }
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.updateCanvasSize = function () {
        // eslint-disable-next-line
        var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
        this.setTabItemWidth(canvas);
        var uploadCanvas = document.getElementById(this.pdfViewer.element.id + '_signatureuploadCanvas_');
        this.setTabItemWidth(uploadCanvas);
        var fontAppearance = document.getElementById(this.pdfViewer.element.id + '_font_appearance');
        this.setTabItemWidth(fontAppearance);
    };
    Signature.prototype.setTabItemWidth = function (canvas) {
        var padding = 2;
        var maximumWidth = 750;
        var canvasWidth = 714;
        var margin = 50;
        var elem = document.querySelector('.e-dlg-content');
        if (elem) {
            var style = getComputedStyle(elem);
            padding = padding + parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
        }
        if (canvas && this.signatureDialog && this.signatureDialog.visible) {
            if (this.pdfViewer.element.offsetWidth > maximumWidth) {
                canvas.width = canvasWidth;
                canvas.style.width = canvasWidth + 'px';
            }
            else {
                canvas.width = this.pdfViewer.element.offsetWidth - padding;
                canvas.style.width = canvas.width + 'px';
            }
        }
        var fontInnerDiv = document.getElementsByClassName('e-pv-font-sign');
        if (canvas && fontInnerDiv && fontInnerDiv.length > 0) {
            for (var i = 0; i < fontInnerDiv.length; i++) {
                var fontDiv = fontInnerDiv[i];
                fontDiv.style.width = ((canvas.width / 2) - margin) + 'px';
            }
        }
    };
    Signature.prototype.signaturePanelMouseDown = function (e) {
        if (e.type !== 'contextmenu') {
            e.preventDefault();
            this.findMousePosition(e);
            this.mouseDetection = true;
            this.oldX = this.mouseX;
            this.oldY = this.mouseY;
            this.newObject = [];
            this.drawMousePosition(e);
            this.mouseMoving = true;
        }
    };
    Signature.prototype.enableCreateButton = function (isEnable) {
        // eslint-disable-next-line
        var createbtn = document.getElementsByClassName('e-pv-createbtn')[0];
        if (createbtn) {
            createbtn.disabled = isEnable;
        }
        this.enableClearbutton(isEnable);
    };
    Signature.prototype.enableClearbutton = function (isEnable) {
        // eslint-disable-next-line
        var clearbtn = document.getElementsByClassName('e-pv-clearbtn')[0];
        if (clearbtn) {
            clearbtn.disabled = isEnable;
        }
    };
    Signature.prototype.signaturePanelMouseMove = function (e) {
        if (this.mouseDetection && this.signaturetype === 'Draw') {
            this.findMousePosition(e);
            this.enableCreateButton(false);
            this.drawMousePosition(e);
        }
    };
    Signature.prototype.findMousePosition = function (event) {
        var offsetX;
        var offsetY;
        if (event.type.indexOf('touch') !== -1) {
            event = event;
            var element = event.target;
            // eslint-disable-next-line
            var currentRect = element.getBoundingClientRect();
            this.mouseX = event.changedTouches[0].clientX - currentRect.left;
            this.mouseY = event.changedTouches[0].clientY - currentRect.top;
        }
        else {
            event = event;
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
        }
    };
    Signature.prototype.drawMousePosition = function (event) {
        if (this.mouseDetection) {
            this.drawSignatureInCanvas();
            this.oldX = this.mouseX;
            this.oldY = this.mouseY;
        }
    };
    Signature.prototype.drawSignatureInCanvas = function () {
        // eslint-disable-next-line
        var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
        // eslint-disable-next-line
        var context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(this.oldX, this.oldY);
        context.lineTo(this.mouseX, this.mouseY);
        context.stroke();
        context.lineWidth = 2;
        context.arc(this.oldX, this.oldY, 2 / 2, 0, Math.PI * 2, true);
        context.closePath();
        this.newObject.push(this.mouseX, this.mouseY);
    };
    Signature.prototype.signaturePanelMouseUp = function () {
        if (this.mouseDetection) {
            this.convertToPath(this.newObject);
        }
        this.mouseDetection = false;
        if (event.type == 'touchend') {
            this.canvasTouched = true;
        }
    };
    Signature.prototype.signaturePanelMouseLeave = function () {
        if (this.mouseDetection) {
            this.convertToPath(this.newObject);
        }
        this.mouseDetection = false;
        this.mouseMoving = false;
    };
    ;
    // eslint-disable-next-line
    Signature.prototype.convertToPath = function (newObject) {
        this.movePath(newObject[0], newObject[1]);
        this.linePath(newObject[0], newObject[1]);
        for (var n = 2; n < newObject.length; n = n + 2) {
            this.linePath(newObject[n], newObject[n + 1]);
        }
    };
    Signature.prototype.linePath = function (x, y) {
        this.outputString += 'L' + x + ',' + y + ' ';
    };
    Signature.prototype.movePath = function (x, y) {
        this.outputString += 'M' + x + ',' + y + ' ';
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.clearSignatureCanvas = function (type) {
        var isCanvasClear = true;
        var drawObject = [];
        if (type && !isNullOrUndefined(type.previousIndex) && !isNullOrUndefined(type.selectedIndex)) {
            isCanvasClear = false;
            if (type.previousIndex === 0) {
                this.drawOutputString = this.outputString;
                drawObject = this.newObject;
            }
            else if (type.previousIndex === 2) {
                this.imageOutputString = this.outputString;
            }
            this.outputString = '';
            this.newObject = [];
            if (type.selectedIndex === 0) {
                this.outputString = this.drawOutputString;
                this.newObject = drawObject;
            }
            else if (type.selectedIndex === 2) {
                this.outputString = this.imageOutputString;
            }
        }
        else {
            this.outputString = '';
            this.newObject = [];
        }
        var isClearDrawTab = false;
        var isClearTypeTab = false;
        var isClearImageTab = false;
        if (type && type.currentTarget && type.currentTarget.classList.contains("e-pv-clearbtn")) {
            isCanvasClear = false;
            if (this.signaturetype === 'Draw') {
                isClearDrawTab = true;
            }
            else if (this.signaturetype === 'Type') {
                isClearTypeTab = true;
            }
            else {
                isClearImageTab = true;
            }
        }
        // eslint-disable-next-line
        var canvas = document.getElementById(this.pdfViewer.element.id + '_signatureCanvas_');
        // eslint-disable-next-line
        if ((canvas && isCanvasClear) || (isClearDrawTab)) {
            // eslint-disable-next-line
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        // eslint-disable-next-line
        var imageCanvas = document.getElementById(this.pdfViewer.element.id + '_signatureuploadCanvas_');
        if (imageCanvas && isCanvasClear || (isClearImageTab)) {
            // eslint-disable-next-line
            var context = imageCanvas.getContext('2d');
            context.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
            // eslint-disable-next-line
            var signbutton = document.getElementById(this.pdfViewer.element.id + '_e-pv-upload-button');
            if (signbutton) {
                signbutton.style.visibility = '';
            }
        }
        // eslint-disable-next-line
        var fontdiv = document.getElementById(this.pdfViewer.element.id + '_font_appearance');
        // eslint-disable-next-line
        var textbox = document.getElementById(this.pdfViewer.element.id + '_e-pv-Signtext-box');
        if ((fontdiv && textbox && isCanvasClear) || (isClearTypeTab)) {
            textbox.value = '';
            if (!isBlazor()) {
                fontdiv.innerHTML = '';
            }
        }
        this.enableCreateButton(true);
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.closeSignaturePanel = function () {
        if (this.pdfViewerBase.currentTarget) {
            this.pdfViewerBase.drawSignatureWithTool = true;
        }
        this.clearSignatureCanvas();
        if (!isBlazor()) {
            this.signatureDialog.hide();
        }
        this.pdfViewerBase.isToolbarSignClicked = false;
        this.pdfViewerBase.drawSignatureWithTool = false;
        this.drawOutputString = '';
        this.imageOutputString = '';
    };
    /**
     * @private
     * @returns {string} - Returns the string.
     */
    Signature.prototype.saveSignature = function () {
        // eslint-disable-next-line
        var storeObject = null;
        if (this.pdfViewerBase.isStorageExceed) {
            storeObject = this.pdfViewerBase.annotationStorage[this.pdfViewerBase.documentId + '_annotations_sign'];
        }
        else {
            storeObject = window.sessionStorage.getItem(this.pdfViewerBase.documentId + '_annotations_sign');
        }
        // eslint-disable-next-line
        var annotations = new Array();
        for (var j = 0; j < this.pdfViewerBase.pageCount; j++) {
            annotations[j] = [];
        }
        if (storeObject) {
            var annotationCollection = JSON.parse(storeObject);
            for (var i = 0; i < annotationCollection.length; i++) {
                var newArray = [];
                var pageAnnotationObject = annotationCollection[i];
                if (pageAnnotationObject) {
                    for (var z = 0; pageAnnotationObject.annotations.length > z; z++) {
                        // eslint-disable-next-line max-len
                        var strokeColorString = pageAnnotationObject.annotations[z].strokeColor ? pageAnnotationObject.annotations[z].strokeColor : "black";
                        pageAnnotationObject.annotations[z].strokeColor = JSON.stringify(this.getRgbCode(strokeColorString));
                        // eslint-disable-next-line max-len
                        pageAnnotationObject.annotations[z].bounds = JSON.stringify(this.pdfViewer.annotation.getBounds(pageAnnotationObject.annotations[z].bounds, pageAnnotationObject.pageIndex));
                        if (pageAnnotationObject.annotations[z].shapeAnnotationType === 'HandWrittenSignature') {
                            // eslint-disable-next-line
                            var collectionData = processPathData(pageAnnotationObject.annotations[z].data);
                            // eslint-disable-next-line
                            var csData = splitArrayCollection(collectionData);
                            pageAnnotationObject.annotations[z].data = JSON.stringify(csData);
                        }
                        else {
                            if (pageAnnotationObject.annotations[z].shapeAnnotationType === 'SignatureText' && !this.checkDefaultFont(pageAnnotationObject.annotations[z].fontFamily)) {
                                var signTypeCanvas = createElement('canvas');
                                var bounds = JSON.parse(pageAnnotationObject.annotations[z].bounds);
                                signTypeCanvas.width = (bounds && bounds.width) || 150;
                                signTypeCanvas.height = (bounds && bounds.height) || pageAnnotationObject.annotations[z].fontSize * 2;
                                // eslint-disable-next-line
                                var canvasContext = signTypeCanvas.getContext('2d');
                                var x = signTypeCanvas.width / 2;
                                var y = (signTypeCanvas.height / 2) + pageAnnotationObject.annotations[z].fontSize / 2 - 10;
                                canvasContext.textAlign = 'center';
                                canvasContext.font = pageAnnotationObject.annotations[z].fontSize + 'px ' + pageAnnotationObject.annotations[z].fontFamily;
                                canvasContext.fillText(pageAnnotationObject.annotations[z].data, x, y);
                                pageAnnotationObject.annotations[z].data = JSON.stringify(signTypeCanvas.toDataURL('image/png'));
                                pageAnnotationObject.annotations[z].shapeAnnotationType = 'SignatureImage';
                            }
                            else {
                                pageAnnotationObject.annotations[z].data = JSON.stringify(pageAnnotationObject.annotations[z].data);
                            }
                        }
                    }
                    newArray = pageAnnotationObject.annotations;
                }
                annotations[pageAnnotationObject.pageIndex] = newArray;
            }
        }
        return JSON.stringify(annotations);
    };
    Signature.prototype.checkDefaultFont = function (fontName) {
        // eslint-disable-next-line
        [{ FontName: 'Helvetica' }, { FontName: 'Times New Roman' }, { FontName: 'Courier' }, { FontName: 'Symbol' }];
        if (fontName === 'Helvetica' || fontName === 'Times New Roman' || fontName === 'Courier' || fontName === 'Symbol') {
            return true;
        }
        return false;
    };
    /**
     * @param colorString
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.getRgbCode = function (colorString) {
        if (!colorString.match(/#([a-z0-9]+)/gi) && !colorString.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)) {
            colorString = this.pdfViewer.annotationModule.nameToHash(colorString);
        }
        var stringArray = colorString.split(',');
        if (isNullOrUndefined(stringArray[1])) {
            colorString = this.pdfViewer.annotationModule.getValue(colorString, 'rgba');
            stringArray = colorString.split(',');
        }
        // eslint-disable-next-line radix
        var r = parseInt(stringArray[0].split('(')[1]);
        // eslint-disable-next-line radix
        var g = parseInt(stringArray[1]);
        // eslint-disable-next-line radix
        var b = parseInt(stringArray[2]);
        // eslint-disable-next-line radix
        var a = parseInt(stringArray[3]);
        return { r: r, g: g, b: b, a: a };
    };
    /**
     * @private
     * @param {number} left - The left.
     * @param {number} top - The top.
     * @returns {void}
     */
    Signature.prototype.renderSignature = function (left, top) {
        var annot;
        // eslint-disable-next-line
        var currentAnnotation = this.pdfViewerBase.currentSignatureAnnot;
        var annotationName = this.pdfViewer.annotation.createGUID();
        if (currentAnnotation) {
            if (this.pdfViewerBase.currentSignatureAnnot.shapeAnnotationType === 'HandWrittenSignature') {
                annot = {
                    // eslint-disable-next-line max-len
                    id: currentAnnotation.id, bounds: { x: left, y: top, width: currentAnnotation.bounds.width, height: currentAnnotation.bounds.height }, pageIndex: currentAnnotation.pageIndex, data: currentAnnotation.data,
                    shapeAnnotationType: 'HandWrittenSignature', opacity: currentAnnotation.opacity, fontFamily: currentAnnotation.fontFamily, fontSize: currentAnnotation.fontSize, strokeColor: currentAnnotation.strokeColor, thickness: currentAnnotation.thickness, signatureName: annotationName
                };
            }
            if (this.pdfViewerBase.currentSignatureAnnot.shapeAnnotationType === 'SignatureText') {
                annot = {
                    // eslint-disable-next-line max-len
                    id: currentAnnotation.id, bounds: { x: left, y: top, width: currentAnnotation.bounds.width, height: currentAnnotation.bounds.height }, pageIndex: currentAnnotation.pageIndex, data: currentAnnotation.data,
                    shapeAnnotationType: 'SignatureText', opacity: currentAnnotation.opacity, fontFamily: currentAnnotation.fontFamily, fontSize: currentAnnotation.fontSize, strokeColor: currentAnnotation.strokeColor, thickness: currentAnnotation.thickness, signatureName: annotationName
                };
            }
            else if (this.pdfViewerBase.currentSignatureAnnot.shapeAnnotationType === 'SignatureImage') {
                annot = {
                    // eslint-disable-next-line max-len
                    id: currentAnnotation.id, bounds: { x: left, y: top, width: currentAnnotation.bounds.width, height: currentAnnotation.bounds.height }, pageIndex: currentAnnotation.pageIndex, data: currentAnnotation.data,
                    shapeAnnotationType: 'SignatureImage', opacity: currentAnnotation.opacity, fontFamily: currentAnnotation.fontFamily, fontSize: currentAnnotation.fontSize, strokeColor: currentAnnotation.strokeColor, thickness: currentAnnotation.thickness, signatureName: annotationName
                };
            }
            this.pdfViewer.add(annot);
            // eslint-disable-next-line
            var canvass = document.getElementById(this.pdfViewer.element.id + '_annotationCanvas_' + currentAnnotation.pageIndex);
            // eslint-disable-next-line
            this.pdfViewer.renderDrawing(canvass, currentAnnotation.pageIndex);
            this.pdfViewerBase.signatureAdded = true;
            // eslint-disable-next-line max-len
            this.storeSignatureData(currentAnnotation.pageIndex, annot);
            this.pdfViewer.fireSignatureAdd(currentAnnotation.pageIndex, currentAnnotation.signatureName, currentAnnotation.shapeAnnotationType, currentAnnotation.bounds, currentAnnotation.opacity, currentAnnotation.strokeColor, currentAnnotation.thickness);
            this.pdfViewerBase.currentSignatureAnnot = null;
            this.pdfViewerBase.signatureCount++;
        }
    };
    /**
     * @param annotationCollection
     * @param pageIndex
     * @param isImport
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.renderExistingSignature = function (annotationCollection, pageIndex, isImport) {
        var annot;
        var isAnnotationAdded = false;
        if (!isImport) {
            for (var p = 0; p < this.signAnnotationIndex.length; p++) {
                if (this.signAnnotationIndex[p] === pageIndex) {
                    isAnnotationAdded = true;
                    break;
                }
            }
        }
        if (annotationCollection && !isAnnotationAdded) {
            if (annotationCollection.length > 0 && this.signAnnotationIndex.indexOf(pageIndex) === -1) {
                this.signAnnotationIndex.push(pageIndex);
            }
            for (var n = 0; n < annotationCollection.length; n++) {
                // eslint-disable-next-line
                var currentAnnotation = annotationCollection[n];
                if (currentAnnotation) {
                    // eslint-disable-next-line
                    var data = currentAnnotation.PathData;
                    if (isImport) {
                        if (currentAnnotation.IsSignature) {
                            data = currentAnnotation.PathData;
                        }
                        else if (currentAnnotation.AnnotationType === 'SignatureImage' || currentAnnotation.AnnotationType === 'SignatureText') {
                            data = JSON.parse(JSON.stringify(currentAnnotation.PathData));
                        }
                        else {
                            if (data.includes('command')) {
                                data = getPathString(JSON.parse(currentAnnotation.PathData));
                            }
                            else {
                                data = currentAnnotation.PathData;
                            }
                        }
                    }
                    this.outputString = data;
                    this.outputString = '';
                    var rectDiff = 0;
                    var rectDifference = 1;
                    var bounds = currentAnnotation.Bounds;
                    var currentLeft = !isNullOrUndefined(bounds.X) ? bounds.X + (rectDiff / 2) : bounds.x + (rectDiff / 2);
                    var currentTop = !isNullOrUndefined(bounds.Y) ? bounds.Y + (rectDiff / 2) : bounds.y + (rectDiff / 2);
                    var currentWidth = bounds.Width ? bounds.Width - (rectDifference - 1) : bounds.width - (rectDifference - 1);
                    var currentHeight = bounds.Height ? bounds.Height - (rectDifference - 1) : bounds.height - (rectDifference - 1);
                    if (currentAnnotation.AnnotationType === 'SignatureText') {
                        annot = {
                            id: 'sign' + this.pdfViewerBase.signatureCount, bounds: { x: currentLeft, y: currentTop, width: currentWidth, height: currentHeight }, pageIndex: pageIndex, data: data, fontFamily: currentAnnotation.FontFamily, fontSize: currentAnnotation.FontSize,
                            shapeAnnotationType: 'SignatureText', opacity: currentAnnotation.Opacity, strokeColor: currentAnnotation.StrokeColor, thickness: currentAnnotation.Thickness, signatureName: currentAnnotation.SignatureName
                        };
                    }
                    else if (currentAnnotation.AnnotationType === 'SignatureImage') {
                        annot = {
                            id: 'sign' + this.pdfViewerBase.signatureCount, bounds: { x: currentLeft, y: currentTop, width: currentWidth, height: currentHeight }, pageIndex: pageIndex, data: data, shapeAnnotationType: 'SignatureImage', opacity: currentAnnotation.Opacity, strokeColor: currentAnnotation.StrokeColor, thickness: currentAnnotation.Thickness, signatureName: currentAnnotation.SignatureName
                        };
                    }
                    else {
                        annot = {
                            id: 'sign' + this.pdfViewerBase.signatureCount, bounds: { x: currentLeft, y: currentTop, width: currentWidth, height: currentHeight }, pageIndex: pageIndex, data: data, shapeAnnotationType: 'HandWrittenSignature', opacity: currentAnnotation.Opacity, strokeColor: currentAnnotation.StrokeColor, thickness: currentAnnotation.Thickness, signatureName: currentAnnotation.SignatureName
                        };
                    }
                }
                this.pdfViewer.add(annot);
                // eslint-disable-next-line
                var canvass = document.getElementById(this.pdfViewer.element.id + '_annotationCanvas_' + currentAnnotation.pageIndex);
                // eslint-disable-next-line
                this.pdfViewer.renderDrawing(canvass, annot.pageIndex);
                this.storeSignatureData(annot.pageIndex, annot);
                this.pdfViewerBase.currentSignatureAnnot = null;
                this.pdfViewerBase.signatureCount++;
                // eslint-disable-next-line max-len
                if (this.pdfViewerBase.navigationPane && this.pdfViewerBase.navigationPane.annotationMenuObj && this.pdfViewer.isSignatureEditable) {
                    // eslint-disable-next-line max-len
                    this.pdfViewerBase.navigationPane.annotationMenuObj.enableItems([this.pdfViewer.localeObj.getConstant('Export Annotations')], true);
                    // eslint-disable-next-line max-len
                    this.pdfViewerBase.navigationPane.annotationMenuObj.enableItems([this.pdfViewer.localeObj.getConstant('Export XFDF')], true);
                }
            }
        }
    };
    /**
     * @param pageNumber
     * @param annotations
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.storeSignatureData = function (pageNumber, annotations) {
        // eslint-disable-next-line max-len
        this.pdfViewer.annotation.addAction(annotations.pageIndex, null, annotations, 'Addition', '', annotations, annotations);
        var annotation = null;
        var left = annotations.bounds.left ? annotations.bounds.left : annotations.bounds.x;
        var top = annotations.bounds.top ? annotations.bounds.top : annotations.bounds.y;
        if (annotations.wrapper && annotations.wrapper.bounds) {
            left = annotations.wrapper.bounds.left;
            top = annotations.wrapper.bounds.top;
        }
        annotation = {
            // eslint-disable-next-line max-len
            id: annotations.id, bounds: { left: left, top: top, width: annotations.bounds.width, height: annotations.bounds.height }, shapeAnnotationType: annotations.shapeAnnotationType, opacity: annotations.opacity, thickness: annotations.thickness, strokeColor: annotations.strokeColor, pageIndex: annotations.pageIndex, data: annotations.data, fontSize: annotations.fontSize, fontFamily: annotations.fontFamily, signatureName: annotations.signatureName
        };
        // eslint-disable-next-line
        var sessionSize = Math.round(JSON.stringify(window.sessionStorage).length / 1024);
        // eslint-disable-next-line
        var currentAnnotation = Math.round(JSON.stringify(annotation).length / 1024);
        if ((sessionSize + currentAnnotation) > 4500) {
            this.pdfViewerBase.isStorageExceed = true;
            this.pdfViewer.annotationModule.clearAnnotationStorage();
        }
        // eslint-disable-next-line
        var storeObject = window.sessionStorage.getItem(this.pdfViewerBase.documentId + '_annotations_sign');
        var index = 0;
        if (!storeObject) {
            this.storeSignatureCollections(annotation, pageNumber);
            var shapeAnnotation = { pageIndex: pageNumber, annotations: [] };
            shapeAnnotation.annotations.push(annotation);
            index = shapeAnnotation.annotations.indexOf(annotation);
            var annotationCollection = [];
            annotationCollection.push(shapeAnnotation);
            var annotationStringified = JSON.stringify(annotationCollection);
            if (this.pdfViewerBase.isStorageExceed) {
                this.pdfViewerBase.annotationStorage[this.pdfViewerBase.documentId + '_annotations_sign'] = annotationStringified;
            }
            else {
                window.sessionStorage.setItem(this.pdfViewerBase.documentId + '_annotations_sign', annotationStringified);
            }
        }
        else {
            this.storeSignatureCollections(annotation, pageNumber);
            var annotObject = JSON.parse(storeObject);
            window.sessionStorage.removeItem(this.pdfViewerBase.documentId + '_annotations_sign');
            var pageIndex = this.pdfViewer.annotationModule.getPageCollection(annotObject, pageNumber);
            if (annotObject[pageIndex]) {
                annotObject[pageIndex].annotations.push(annotation);
                index = annotObject[pageIndex].annotations.indexOf(annotation);
            }
            else {
                var markupAnnotation = { pageIndex: pageNumber, annotations: [] };
                markupAnnotation.annotations.push(annotation);
                index = markupAnnotation.annotations.indexOf(annotation);
                annotObject.push(markupAnnotation);
            }
            var annotationStringified = JSON.stringify(annotObject);
            if (this.pdfViewerBase.isStorageExceed) {
                this.pdfViewerBase.annotationStorage[this.pdfViewerBase.documentId + '_annotations_sign'] = annotationStringified;
            }
            else {
                window.sessionStorage.setItem(this.pdfViewerBase.documentId + '_annotations_sign', annotationStringified);
            }
        }
    };
    /**
     * @param property
     * @param pageNumber
     * @param annotationBase
     * @param isSignatureEdited
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.modifySignatureCollection = function (property, pageNumber, annotationBase, isSignatureEdited) {
        this.pdfViewerBase.updateDocumentEditedProperty(true);
        var currentAnnotObject = null;
        var pageAnnotations = this.getAnnotations(pageNumber, null);
        if (pageAnnotations != null && annotationBase) {
            for (var i = 0; i < pageAnnotations.length; i++) {
                if (annotationBase.id === pageAnnotations[i].id) {
                    if (property === 'bounds') {
                        // eslint-disable-next-line max-len
                        pageAnnotations[i].bounds = { left: annotationBase.wrapper.bounds.left, top: annotationBase.wrapper.bounds.top, width: annotationBase.bounds.width, height: annotationBase.bounds.height };
                        pageAnnotations[i].fontSize = annotationBase.fontSize;
                    }
                    else if (property === 'stroke') {
                        pageAnnotations[i].strokeColor = annotationBase.wrapper.children[0].style.strokeColor;
                    }
                    else if (property === 'opacity') {
                        pageAnnotations[i].opacity = annotationBase.wrapper.children[0].style.opacity;
                    }
                    else if (property === 'thickness') {
                        pageAnnotations[i].thickness = annotationBase.wrapper.children[0].style.strokeWidth;
                    }
                    else if (property === 'delete') {
                        this.updateSignatureCollection(pageAnnotations[i]);
                        currentAnnotObject = pageAnnotations.splice(i, 1)[0];
                        break;
                    }
                    if (property && property !== 'delete') {
                        this.storeSignatureCollections(pageAnnotations[i], pageNumber);
                    }
                    if (isSignatureEdited) {
                        pageAnnotations[i].opacity = annotationBase.wrapper.children[0].style.opacity;
                        pageAnnotations[i].strokeColor = annotationBase.wrapper.children[0].style.strokeColor;
                        pageAnnotations[i].thickness = annotationBase.wrapper.children[0].style.strokeWidth;
                        this.storeSignatureCollections(pageAnnotations[i], pageNumber);
                        break;
                    }
                }
            }
            this.manageAnnotations(pageAnnotations, pageNumber);
        }
        return currentAnnotObject;
    };
    /**
     * @param annotation
     * @param pageNumber
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.storeSignatureCollections = function (annotation, pageNumber) {
        // eslint-disable-next-line
        var collectionDetails = this.checkSignatureCollection(annotation);
        // eslint-disable-next-line
        var selectAnnotation = cloneObject(annotation);
        selectAnnotation.annotationId = annotation.signatureName;
        selectAnnotation.pageNumber = pageNumber;
        delete selectAnnotation.annotName;
        if (annotation.id) {
            selectAnnotation.uniqueKey = annotation.id;
            delete selectAnnotation.id;
        }
        if (collectionDetails.isExisting) {
            this.pdfViewer.signatureCollection.splice(collectionDetails.position, 0, selectAnnotation);
        }
        else {
            this.pdfViewer.signatureCollection.push(selectAnnotation);
        }
    };
    // eslint-disable-next-line
    Signature.prototype.checkSignatureCollection = function (signature) {
        // eslint-disable-next-line
        var collections = this.pdfViewer.signatureCollection;
        if (collections && signature) {
            for (var i = 0; i < collections.length; i++) {
                if (collections[i].annotationId === signature.signatureName) {
                    this.pdfViewer.signatureCollection.splice(i, 1);
                    return { isExisting: true, position: i };
                }
            }
        }
        return { isExisting: false, position: null };
    };
    /**
     * @param signature
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.updateSignatureCollection = function (signature) {
        // eslint-disable-next-line
        var collections = this.pdfViewer.signatureCollection;
        if (collections && signature) {
            for (var i = 0; i < collections.length; i++) {
                if (collections[i].annotationId === signature.signatureName) {
                    this.pdfViewer.signatureCollection.splice(i, 1);
                    break;
                }
            }
        }
    };
    /**
     * @param pageNumber
     * @param signature
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.addInCollection = function (pageNumber, signature) {
        if (signature) {
            this.storeSignatureCollections(signature, pageNumber);
            // eslint-disable-next-line
            var pageSignatures = this.getAnnotations(pageNumber, null);
            if (pageSignatures) {
                pageSignatures.push(signature);
            }
            this.manageAnnotations(pageSignatures, pageNumber);
        }
    };
    // eslint-disable-next-line
    Signature.prototype.getAnnotations = function (pageIndex, shapeAnnotations) {
        // eslint-disable-next-line
        var annotationCollection;
        // eslint-disable-next-line
        var storeObject = null;
        if (this.pdfViewerBase.isStorageExceed) {
            storeObject = this.pdfViewerBase.annotationStorage[this.pdfViewerBase.documentId + '_annotations_sign'];
        }
        else {
            storeObject = window.sessionStorage.getItem(this.pdfViewerBase.documentId + '_annotations_sign');
        }
        if (storeObject) {
            var annotObject = JSON.parse(storeObject);
            var index = this.pdfViewer.annotationModule.getPageCollection(annotObject, pageIndex);
            if (annotObject[index]) {
                annotationCollection = annotObject[index].annotations;
            }
            else {
                annotationCollection = shapeAnnotations;
            }
        }
        else {
            annotationCollection = shapeAnnotations;
        }
        return annotationCollection;
    };
    Signature.prototype.manageAnnotations = function (pageAnnotations, pageNumber) {
        // eslint-disable-next-line
        var storeObject = null;
        if (this.pdfViewerBase.isStorageExceed) {
            storeObject = this.pdfViewerBase.annotationStorage[this.pdfViewerBase.documentId + '_annotations_sign'];
        }
        else {
            storeObject = window.sessionStorage.getItem(this.pdfViewerBase.documentId + '_annotations_sign');
        }
        if (storeObject) {
            var annotObject = JSON.parse(storeObject);
            window.sessionStorage.removeItem(this.pdfViewerBase.documentId + '_annotations_sign');
            var index = this.pdfViewer.annotationModule.getPageCollection(annotObject, pageNumber);
            if (annotObject[index]) {
                annotObject[index].annotations = pageAnnotations;
            }
            var annotationStringified = JSON.stringify(annotObject);
            if (this.pdfViewerBase.isStorageExceed) {
                this.pdfViewerBase.annotationStorage[this.pdfViewerBase.documentId + '_annotations_sign'] = annotationStringified;
            }
            else {
                window.sessionStorage.setItem(this.pdfViewerBase.documentId + '_annotations_sign', annotationStringified);
            }
        }
    };
    /**
     * @private
     * @param {boolean} isShow - Returns the true or false.
     * @returns {void}
     */
    Signature.prototype.showSignatureDialog = function (isShow) {
        if (isShow) {
            this.createSignaturePanel();
        }
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.setAnnotationMode = function () {
        this.pdfViewerBase.isToolbarSignClicked = true;
        this.showSignatureDialog(true);
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.setInitialMode = function () {
        this.pdfViewerBase.isToolbarSignClicked = true;
        this.pdfViewerBase.isInitialField = true;
        this.showSignatureDialog(true);
    };
    /**
     * @param number
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.ConvertPointToPixel = function (number) {
        return (number * (96 / 72));
    };
    /**
     * @param signature
     * @param pageIndex
     * @param isImport
     * @private
     */
    // eslint-disable-next-line
    Signature.prototype.updateSignatureCollections = function (signature, pageIndex, isImport) {
        var annot;
        // eslint-disable-next-line
        if (signature) {
            // eslint-disable-next-line
            var bounds = signature.Bounds;
            var currentLeft = bounds.X;
            var currentTop = bounds.Y;
            var currentWidth = bounds.Width;
            var currentHeight = bounds.Height;
            // eslint-disable-next-line
            var data = signature.PathData;
            if (isImport) {
                data = getPathString(JSON.parse(signature.PathData));
            }
            annot = {
                // eslint-disable-next-line max-len
                id: 'sign' + signature.SignatureName, bounds: { x: currentLeft, y: currentTop, width: currentWidth, height: currentHeight }, pageIndex: pageIndex, data: data,
                shapeAnnotationType: 'HandWrittenSignature', opacity: signature.Opacity, strokeColor: signature.StrokeColor, thickness: signature.Thickness, signatureName: signature.SignatureName
            };
            return annot;
        }
    };
    /**
     * @private
     * @returns {void}
     */
    Signature.prototype.destroy = function () {
        window.sessionStorage.removeItem('_annotations_sign');
        // eslint-disable-next-line
        var signImage = document.getElementById(this.pdfViewer.element.id + '_signElement');
        if (signImage) {
            signImage.removeEventListener('change', this.addStampImage);
            if (signImage.parentElement)
                signImage.parentElement.removeChild(signImage);
        }
        if (this.signatureDialog)
            this.signatureDialog.destroy();
    };
    return Signature;
}());
export { Signature };
