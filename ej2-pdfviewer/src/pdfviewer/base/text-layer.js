import { createElement, isNullOrUndefined, Browser, isBlazor } from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-popups';
/**
 * TextLayer module is used to handle the text content on the control.
 *
 * @hidden
 */
var TextLayer = /** @class */ (function () {
    /**
     * @param {PdfViewer} pdfViewer - The PdfViewer.
     * @param {PdfViewerBase} pdfViewerBase - The PdfViewerBase.
     * @private
     */
    function TextLayer(pdfViewer, pdfViewerBase) {
        var _this = this;
        // eslint-disable-next-line
        this.textBoundsArray = [];
        /**
         * @private
         */
        // eslint-disable-next-line
        this.characterBound = [];
        /**
         * @returns {void}
         */
        this.closeNotification = function () {
            _this.notifyDialog.hide();
        };
        this.pdfViewer = pdfViewer;
        this.pdfViewerBase = pdfViewerBase;
    }
    /**
     * @param {number} pageNumber - The pageNumber.
     * @param {number} pageWidth - The pageWidth.
     * @param {number} pageHeight - The pageHeight.
     * @param {HTMLElement} pageDiv - The pageDiv.
     * @returns {HTMLElement} - The HTMLElement.
     * @private
     */
    TextLayer.prototype.addTextLayer = function (pageNumber, pageWidth, pageHeight, pageDiv) {
        var textDiv = document.getElementById(this.pdfViewer.element.id + '_textLayer_' + pageNumber);
        var textLayer;
        if (!textDiv) {
            textLayer = createElement('div', { id: this.pdfViewer.element.id + '_textLayer_' + pageNumber, className: 'e-pv-text-layer' });
            textLayer.style.width = pageWidth + 'px';
            textLayer.style.height = pageHeight + 'px';
            if (pageDiv) {
                pageDiv.appendChild(textLayer);
            }
        }
        this.pdfViewerBase.applyElementStyles(textLayer, pageNumber);
        return textLayer;
    };
    /**
     * @param {number} pageNumber - The pageNumber.
     * @param {any} textContents - The textContents.
     * @param {any} textBounds - The textBounds.
     * @param {any} rotation - The rotation.
     * @returns {void}
     * @private
     */
    // eslint-disable-next-line
    TextLayer.prototype.renderTextContents = function (pageNumber, textContents, textBounds, rotation) {
        var textLayer = document.getElementById(this.pdfViewer.element.id + '_textLayer_' + pageNumber);
        var canvasElement = createElement("canvas");
        if (canvasElement && textLayer && textLayer.childNodes.length === 0) {
            for (var i = 0; i < textContents.length; i++) {
                // eslint-disable-next-line
                var bounds = textBounds[i];
                // eslint-disable-next-line max-len
                var textDiv = createElement('div', { id: this.pdfViewer.element.id + '_text_' + pageNumber + '_' + i, className: 'e-pv-text', attrs: { 'tabindex': '0' } });
                var textContent = textContents[i];
                textDiv.textContent = textContent.replace(/&nbsp;/g, ' ');
                // eslint-disable-next-line
                var newLine = textContents[i].replace(/  +/g, ' ');
                if (newLine !== ' ') {
                    textDiv.style.whiteSpace = 'pre';
                }
                if (bounds) {
                    this.setStyleToTextDiv(textDiv, bounds.X, bounds.Y, bounds.Bottom, bounds.Width, bounds.Height);
                }
                this.setTextElementProperties(textDiv);
                var context = canvasElement.getContext('2d');
                context.font = textDiv.style.fontSize + ' ' + textDiv.style.fontFamily;
                var contextWidth = context.measureText(textContents[i].replace(/(\r\n|\n|\r)/gm, '')).width;
                if (bounds) {
                    var scale = bounds.Width * this.pdfViewerBase.getZoomFactor() / contextWidth;
                    this.applyTextRotation(scale, textDiv, rotation, bounds.Rotation);
                }
                textLayer.appendChild(textDiv);
                this.resizeExcessDiv(textLayer, textDiv);
                // eslint-disable-next-line max-len
                if (this.pdfViewer.textSelectionModule && this.pdfViewer.enableTextSelection && !this.pdfViewerBase.isTextSelectionDisabled && textDiv.className !== 'e-pdfviewer-formFields'
                    && textDiv.className !== 'e-pdfviewer-signatureformfields' && textDiv.className !== 'e-pdfviewer-signatureformfields-signature') {
                    textDiv.classList.add('e-pv-cursor');
                }
            }
        }
    };
    /**
     * @param pageNumber
     * @param textContents
     * @param textBounds
     * @param rotation
     * @param isTextSearch
     * @param pageNumber
     * @param textContents
     * @param textBounds
     * @param rotation
     * @param isTextSearch
     * @private
     */
    // eslint-disable-next-line
    TextLayer.prototype.resizeTextContents = function (pageNumber, textContents, textBounds, rotation, isTextSearch) {
        var textLayer = this.pdfViewerBase.getElement('_textLayer_' + pageNumber);
        var canvasElement = createElement("canvas");
        if (canvasElement) {
            for (var i = 0; i < textLayer.childNodes.length; i++) {
                // eslint-disable-next-line
                var bounds = void 0;
                var textDiv = this.pdfViewerBase.getElement('_text_' + pageNumber + '_' + i);
                if (isNullOrUndefined(textDiv)) {
                    break;
                }
                if (textBounds) {
                    bounds = textBounds[i];
                    if (bounds) {
                        this.setStyleToTextDiv(textDiv, bounds.X, bounds.Y, bounds.Bottom, bounds.Width, bounds.Height);
                    }
                }
                this.setTextElementProperties(textDiv);
                var context = canvasElement.getContext('2d');
                context.font = textDiv.style.fontSize + ' ' + textDiv.style.fontFamily;
                var contextWidth = void 0;
                if (textContents) {
                    var textContent = textContents[i];
                    if (textContent) {
                        contextWidth = context.measureText(textContent.replace(/(\r\n|\n|\r)/gm, '')).width;
                    }
                }
                else {
                    contextWidth = context.measureText(textDiv.textContent.replace(/(\r\n|\n|\r)/gm, '')).width;
                }
                if (bounds) {
                    var scale = bounds.Width * this.pdfViewerBase.getZoomFactor() / contextWidth;
                    this.applyTextRotation(scale, textDiv, rotation, bounds.Rotation);
                }
                this.resizeExcessDiv(textLayer, textDiv);
            }
        }
        else {
            textLayer.parentElement.removeChild(textLayer);
        }
        if (this.pdfViewer.textSearch) {
            if (!isTextSearch) {
                this.pdfViewer.textSearch.resizeSearchElements(pageNumber);
            }
        }
    };
    TextLayer.prototype.applyTextRotation = function (scale, textDiv, rotation, textRotation) {
        var scaleString = 'scaleX(' + scale + ')';
        if (rotation === 0) {
            if (textRotation >= 0 && textRotation <= 90) {
                textDiv.style.transform = scaleString;
            }
            else {
                textDiv.style.transform = 'rotate(' + textRotation + 'deg) ' + scaleString;
            }
        }
        else if (rotation === 1) {
            if (textRotation === 0) {
                textDiv.style.transform = 'rotate(90deg) ' + scaleString;
            }
            else if (textRotation === -90) {
                textDiv.style.transform = scaleString;
            }
            else {
                textDiv.style.transform = 'rotate(' + textRotation + 'deg) ' + scaleString;
            }
        }
        else if (rotation === 2) {
            if (textRotation === 0) {
                textDiv.style.transform = 'rotate(180deg) ' + scaleString;
            }
            else if (textRotation === 180) {
                textDiv.style.transform = scaleString;
            }
            else {
                textDiv.style.transform = 'rotate(' + textRotation + 'deg) ' + scaleString;
            }
        }
        else if (rotation === 3) {
            if (textRotation === 0) {
                textDiv.style.transform = 'rotate(-90deg) ' + scaleString;
            }
            else if (textRotation === 90) {
                textDiv.style.transform = scaleString;
            }
            else {
                textDiv.style.transform = 'rotate(' + textRotation + 'deg) ' + scaleString;
            }
        }
    };
    TextLayer.prototype.setTextElementProperties = function (textDiv) {
        textDiv.style.fontFamily = 'serif';
        textDiv.style.transformOrigin = '0%';
    };
    /**
     * @param {number} pageNumber - The pageNumber.
     * @returns {void}
     * @private
     */
    TextLayer.prototype.resizeTextContentsOnZoom = function (pageNumber) {
        // eslint-disable-next-line max-len
        var renderObject = window.sessionStorage.getItem(this.pdfViewerBase.getDocumentId() + '_' + pageNumber + '_' + this.getPreviousZoomFactor());
        // eslint-disable-next-line
        var textBounds = [];
        var textContents = [];
        // eslint-disable-next-line
        var rotation;
        if (renderObject) {
            // eslint-disable-next-line
            var data = JSON.parse(renderObject);
            // eslint-disable-next-line
            textBounds = data['textBounds'];
            // eslint-disable-next-line
            textContents = data['textContent'];
            // eslint-disable-next-line
            rotation = data['rotation'];
        }
        if (textBounds.length !== 0) {
            this.textBoundsArray.push({ pageNumber: pageNumber, textBounds: textBounds });
            this.resizeTextContents(pageNumber, textContents, textBounds, rotation);
        }
        else {
            // eslint-disable-next-line
            var textElements = this.textBoundsArray.filter(function (obj) {
                return obj.pageNumber === pageNumber;
            });
            if (textElements) {
                if (textElements.length !== 0) {
                    // eslint-disable-next-line
                    textBounds = textElements[0]['textBounds'];
                    this.resizeTextContents(pageNumber, null, textBounds, rotation);
                }
            }
        }
    };
    TextLayer.prototype.resizeExcessDiv = function (textLayer, textDiv) {
        var textLayerPosition = textLayer.getBoundingClientRect();
        var textDivPosition = textDiv.getBoundingClientRect();
        // eslint-disable-next-line max-len
        if ((textDivPosition.width + textDivPosition.left) >= (textLayerPosition.width + textLayerPosition.left) || (textDivPosition.width > textLayerPosition.width)) {
            // 'auto' width is set to reset the size of the div to its contents.
            textDiv.style.width = 'auto';
            // Client width gets reset by 'auto' width property which has the width of the content.
            textDiv.style.width = textDiv.clientWidth + 'px';
        }
    };
    /**
     * @private
     * @param {boolean} isPinchZoomed - The isPinchZoomed.
     * @returns {void}
     */
    TextLayer.prototype.clearTextLayers = function (isPinchZoomed) {
        var lowerPageValue = this.pdfViewerBase.currentPageNumber - 3;
        lowerPageValue = (lowerPageValue > 0) ? lowerPageValue : 0;
        var higherPageValue = this.pdfViewerBase.currentPageNumber + 1;
        higherPageValue = (higherPageValue < this.pdfViewerBase.pageCount) ? higherPageValue : (this.pdfViewerBase.pageCount - 1);
        var textLayers = document.querySelectorAll('div[id*="' + this.pdfViewer.element.id + '_textLayer_"]');
        for (var i = 0; i < textLayers.length; i++) {
            textLayers[i].style.display = 'block';
            if (this.pdfViewerBase.getMagnified() && (this.getTextSelectionStatus() || this.getTextSearchStatus())) {
                // eslint-disable-next-line radix
                var pageNumber = parseInt(textLayers[i].id.split('_textLayer_')[1]);
                if (!(((lowerPageValue + 1) <= pageNumber) && (pageNumber <= (higherPageValue - 1)))) {
                    this.removeElement(textLayers[i], isPinchZoomed);
                }
            }
            else if (this.pdfViewerBase.getPinchZoomed()) {
                this.removeElement(textLayers[i], isPinchZoomed);
            }
            else {
                this.removeElement(textLayers[i], isPinchZoomed);
            }
        }
    };
    TextLayer.prototype.removeElement = function (element, isPinchZoomed) {
        if (isPinchZoomed) {
            this.removeForeignObjects(element);
        }
        else {
            if (Browser.isIE) {
                if (element.parentElement) {
                    element.parentElement.removeChild(element);
                }
                else if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }
            else {
                element.remove();
            }
        }
    };
    TextLayer.prototype.removeForeignObjects = function (element) {
        // eslint-disable-next-line
        var childElement = element.getElementsByClassName('foreign-object');
        if (childElement) {
            for (var i = 0; i < childElement.length; i++) {
                if (childElement[i].parentElement.className === 'e-pv-text-layer') {
                    element.removeChild(childElement[0]);
                }
            }
        }
    };
    /**
     * @param pageNumber
     * @param divId
     * @param fromOffset
     * @param toOffset
     * @param textString
     * @param className
     * @private
     */
    // eslint-disable-next-line max-len
    TextLayer.prototype.convertToSpan = function (pageNumber, divId, fromOffset, toOffset, textString, className) {
        var textDiv = this.pdfViewerBase.getElement('_text_' + pageNumber + '_' + divId);
        var textContent = textString.substring(fromOffset, toOffset);
        var node = document.createTextNode(textContent);
        if (className) {
            var spanElement = createElement('span');
            spanElement.className = className + ' e-pv-text';
            spanElement.appendChild(node);
            textDiv.appendChild(spanElement);
        }
        else {
            textDiv.appendChild(node);
        }
    };
    /**
     * @param startPage
     * @param endPage
     * @param anchorOffsetDiv
     * @param focusOffsetDiv
     * @param anchorOffset
     * @param focusOffset
     * @private
     */
    // eslint-disable-next-line max-len
    TextLayer.prototype.applySpanForSelection = function (startPage, endPage, anchorOffsetDiv, focusOffsetDiv, anchorOffset, focusOffset) {
        if (this.pdfViewer.textSelectionModule) {
            for (var i = startPage; i <= endPage; i++) {
                var startId = void 0;
                var endId = void 0;
                // eslint-disable-next-line
                var textDivs = this.pdfViewerBase.getElement('_textLayer_' + i).childNodes;
                if (i === startPage) {
                    startId = anchorOffsetDiv;
                    endId = textDivs.length - 1;
                }
                else if (i === endPage) {
                    startId = 0;
                    endId = focusOffsetDiv;
                }
                else {
                    startId = 0;
                    endId = textDivs.length - 1;
                }
                if (startPage === endPage) {
                    startId = anchorOffsetDiv;
                    endId = focusOffsetDiv;
                }
                for (var j = startId; j <= endId; j++) {
                    var textDiv = this.pdfViewerBase.getElement('_text_' + i + '_' + j);
                    var initId = void 0;
                    var lastId = void 0;
                    var length_1 = void 0;
                    if (textDiv && textDiv.textContent) {
                        length_1 = textDiv.textContent.length;
                        var textContent = textDiv.textContent;
                        textDiv.textContent = '';
                        if (j === startId) {
                            if (i === startPage) {
                                initId = anchorOffset;
                            }
                            else {
                                initId = 0;
                            }
                            lastId = length_1;
                            this.convertToSpan(i, j, 0, initId, textContent, null);
                        }
                        else if (j === endId && i === endPage) {
                            initId = 0;
                            lastId = focusOffset;
                        }
                        else {
                            initId = 0;
                            lastId = length_1;
                        }
                        if (startId === endId && startPage === endPage) {
                            initId = anchorOffset;
                            lastId = focusOffset;
                        }
                        this.convertToSpan(i, j, initId, lastId, textContent, 'e-pv-maintaincontent');
                        if (j === endId && i === endPage) {
                            this.convertToSpan(i, j, lastId, textContent.length, textContent, null);
                        }
                    }
                }
            }
        }
    };
    /**
     * @private
     * @returns {void}
     */
    TextLayer.prototype.clearDivSelection = function () {
        var textLayers = document.querySelectorAll('div[id*="' + this.pdfViewer.element.id + '_textLayer_"]');
        for (var i = 0; i < textLayers.length; i++) {
            var childNodes = textLayers[i].childNodes;
            for (var j = 0; j < childNodes.length; j++) {
                var textDiv = childNodes[j];
                // eslint-disable-next-line max-len
                if (textDiv.className !== 'e-pdfviewer-formFields' && textDiv.className !== 'e-pdfviewer-signatureformfields' && textDiv.className !== 'e-pdfviewer-signatureformfields-signature') {
                    var textContent = textDiv.textContent;
                    // eslint-disable-next-line max-len
                    if (textDiv.childNodes.length > 1 || textDiv.childNodes.length === 1 && (textDiv.childNodes[0].tagName === 'SPAN')) {
                        textDiv.textContent = '';
                        textDiv.textContent = textContent;
                    }
                }
            }
        }
    };
    // eslint-disable-next-line
    TextLayer.prototype.setStyleToTextDiv = function (textDiv, left, top, bottom, width, height) {
        textDiv.style.left = left * this.pdfViewerBase.getZoomFactor() + 'px';
        textDiv.style.top = top * this.pdfViewerBase.getZoomFactor() + 'px';
        var textHeight = height * this.pdfViewerBase.getZoomFactor();
        textDiv.style.height = textHeight + 'px';
        textDiv.style.fontSize = height * this.pdfViewerBase.getZoomFactor() + 'px';
    };
    TextLayer.prototype.getTextSelectionStatus = function () {
        if (this.pdfViewer.textSelectionModule) {
            return this.pdfViewer.textSelectionModule.isTextSelection;
        }
        else {
            return false;
        }
    };
    /**
     * @param {boolean} isAdd - The isAdd.
     * @returns {void}
     * @private
     */
    TextLayer.prototype.modifyTextCursor = function (isAdd) {
        var textLayerList = document.querySelectorAll('div[id*="' + this.pdfViewer.element.id + '_textLayer_"]');
        for (var i = 0; i < textLayerList.length; i++) {
            var childNodes = textLayerList[i].childNodes;
            for (var j = 0; j < childNodes.length; j++) {
                var textElement = childNodes[j];
                // eslint-disable-next-line max-len
                if (isAdd && textElement.className !== 'e-pdfviewer-formFields' && textElement.className !== 'e-pdfviewer-signatureformfields' && textElement.className !== 'e-pdfviewer-signatureformfields-signature') {
                    textElement.classList.add('e-pv-cursor');
                }
                else {
                    textElement.classList.remove('e-pv-cursor');
                }
            }
        }
    };
    /**
     * @param {Selection} selection - The Selection.
     * @returns {boolean} - Returns true or false.
     * @private
     */
    TextLayer.prototype.isBackWardSelection = function (selection) {
        var position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
        var backward = false;
        if (!position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
            backward = true;
        }
        return backward;
    };
    /**
     * @param {Node} element - The element.
     * @returns {number} - Returns number.
     * @private
     */
    TextLayer.prototype.getPageIndex = function (element) {
        var pageId;
        // eslint-disable-next-line
        var parentElement = element.parentElement;
        if (!parentElement) {
            parentElement = element.parentNode;
        }
        if (parentElement.className === 'e-pv-text-layer') {
            // eslint-disable-next-line radix
            pageId = parseInt(element.id.split('_text_')[1]);
        }
        else {
            // eslint-disable-next-line radix
            pageId = parseInt(parentElement.id.split('_text_')[1]);
        }
        return pageId;
    };
    /**
     * @param {Node} element - The element.
     * @param {number} pageIndex - The pageIndex.
     * @returns {number} - Returns number.
     * @private
     */
    TextLayer.prototype.getTextIndex = function (element, pageIndex) {
        var textIndex;
        // eslint-disable-next-line
        var parentElement = element.parentElement;
        if (!parentElement) {
            parentElement = element.parentNode;
        }
        if (parentElement.className === 'e-pv-text-layer') {
            // eslint-disable-next-line radix
            textIndex = parseInt(element.id.split('_text_' + pageIndex + '_')[1]);
        }
        else {
            // eslint-disable-next-line radix
            textIndex = parseInt(parentElement.id.split('_text_' + pageIndex + '_')[1]);
        }
        return textIndex;
    };
    TextLayer.prototype.getPreviousZoomFactor = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.previousZoomFactor;
        }
        else {
            return 1;
        }
    };
    /**
     * @private
     * @returns {boolean} - Returns true or false.
     */
    TextLayer.prototype.getTextSearchStatus = function () {
        if (this.pdfViewer.textSearchModule) {
            return this.pdfViewer.textSearchModule.isTextSearch;
        }
        else {
            return false;
        }
    };
    /**
     * @param {string} text - The text.
     * @returns {void}
     * @private
     */
    TextLayer.prototype.createNotificationPopup = function (text) {
        var _this = this;
        if (!this.isMessageBoxOpen) {
            if (!isBlazor()) {
                // eslint-disable-next-line max-len
                var popupElement_1 = createElement('div', { id: this.pdfViewer.element.id + '_notify', className: 'e-pv-notification-popup' });
                this.pdfViewerBase.viewerContainer.appendChild(popupElement_1);
                this.notifyDialog = new Dialog({
                    showCloseIcon: true, closeOnEscape: false, isModal: true, header: this.pdfViewer.localeObj.getConstant('PdfViewer'),
                    buttons: [{
                            buttonModel: { content: this.pdfViewer.localeObj.getConstant('OK'), isPrimary: true },
                            click: this.closeNotification.bind(this)
                        }],
                    // eslint-disable-next-line max-len
                    content: '<div class="e-pv-notification-popup-content" tabindex = "0">' + text + '</div>', target: this.pdfViewer.element,
                    beforeClose: function () {
                        _this.notifyDialog.destroy();
                        if (_this.pdfViewer.element) {
                            try {
                                _this.pdfViewer.element.removeChild(popupElement_1);
                            }
                            catch (error) {
                                popupElement_1.parentElement.removeChild(popupElement_1);
                            }
                        }
                        if (_this.pdfViewer.textSearchModule) {
                            _this.pdfViewer.textSearch.isMessagePopupOpened = false;
                        }
                        _this.isMessageBoxOpen = false;
                    }
                });
                if (this.pdfViewer.enableRtl) {
                    this.notifyDialog.enableRtl = true;
                }
                this.notifyDialog.appendTo(popupElement_1);
                this.isMessageBoxOpen = true;
            }
            else {
                // eslint-disable-next-line
                var notificationElement = document.getElementById(this.pdfViewer.element.id + '_notification_popup_content');
                if (notificationElement) {
                    notificationElement.textContent = text;
                    notificationElement.innerHTML = text;
                }
                if (this.pdfViewer.textSearchModule) {
                    this.pdfViewer.textSearch.isMessagePopupOpened = false;
                }
                this.pdfViewer._dotnetInstance.invokeMethodAsync('OpenNotificationPopup', text);
            }
        }
    };
    return TextLayer;
}());
export { TextLayer };
