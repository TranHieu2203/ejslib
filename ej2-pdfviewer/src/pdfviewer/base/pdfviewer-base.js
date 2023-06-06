var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createElement, Browser, isNullOrUndefined, isBlazor } from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { TextLayer, ContextMenu, Signature, PdfFormFieldBase } from '../index';
import { NavigationPane } from './navigation-pane';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { AjaxHandler } from '../index';
import { Point, Rect, identityMatrix, transformPointByMatrix, contains, rotateMatrix } from '@syncfusion/ej2-drawings';
import { SelectTool, MoveTool, ResizeTool, ConnectTool, NodeDrawingTool, PolygonDrawingTool, LineTool, RotateTool, StampTool, InkDrawingTool } from '../drawing/tools';
import { Selector } from '../drawing/selector';
import { ActiveElements, findActiveElement } from '../drawing/action';
import { renderAdornerLayer } from '../drawing/dom-util';
import { AnnotationDataFormat } from './types';
import { cloneObject } from '../drawing/drawing-util';
import { BlazorContextMenu } from './blazor-context-menu';
import { createSpinner, showSpinner, hideSpinner } from './spinner';
import { BlazorUiAdaptor } from './blazor-ui-adaptor';
/**
 * The `PdfViewerBase` module is used to handle base methods of PDF viewer.
 *
 * @hidden
 */
var PdfViewerBase = /** @class */ (function () {
    /**
     * Initialize the constructor of PDFViewerBase
     *
     * @param { PdfViewer } viewer - Specified PdfViewer class.
     */
    function PdfViewerBase(viewer) {
        var _this = this;
        /**
         * @private
         */
        this.pageSize = [];
        /**
         * @private
         */
        this.pageCount = 0;
        /**
         * @private
         */
        this.isReRenderRequired = true;
        /**
         * @private
         */
        this.currentPageNumber = 0;
        /**
         * @private
         */
        this.activeElements = new ActiveElements();
        /**
         * @private
         */
        this.mouseDownEvent = null;
        /**
         * @private
         */
        this.isDocumentLoaded = false;
        /**
         * @private
         */
        this.renderedPagesList = [];
        /**
         * @private
         */
        this.pageGap = 8;
        /**
         * @private
         */
        this.signatureAdded = false;
        /**
         * @private
         */
        this.isFreeTextSelected = false;
        this.pageLeft = 5;
        this.sessionLimit = 1000;
        this.pageStopValue = 300;
        /**
         * @private
         */
        this.toolbarHeight = 56;
        this.pageLimit = 0;
        this.previousPage = 0;
        this.isViewerMouseDown = false;
        this.isViewerMouseWheel = false;
        this.scrollPosition = 0;
        this.sessionStorage = [];
        /**
         * @private
         */
        this.isLoadedFormFieldAdded = false;
        this.pointerCount = 0;
        this.pointersForTouch = [];
        /**
         * @private
         */
        this.isPasswordAvailable = false;
        /**
         * @private
         */
        this.passwordData = '';
        /**
         * @private
         */
        this.reRenderedCount = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        /**
         * @private
         */
        this.mouseLeft = 0;
        /**
         * @private
         */
        this.mouseTop = 0;
        this.touchClientX = 0;
        this.touchClientY = 0;
        this.previousTime = 0;
        this.currentTime = 0;
        this.isTouchScrolled = false;
        this.isLongTouchPropagated = false;
        // eslint-disable-next-line
        this.longTouchTimer = null;
        this.isViewerContainerDoubleClick = false;
        // eslint-disable-next-line
        this.dblClickTimer = null;
        /**
         * @private
         */
        this.pinchZoomStorage = [];
        /**
         * @private
         */
        this.isTextSelectionDisabled = false;
        /**
         * @private
         */
        this.isPanMode = false;
        this.dragX = 0;
        this.dragY = 0;
        this.isScrollbarMouseDown = false;
        this.scrollX = 0;
        this.scrollY = 0;
        this.ispageMoved = false;
        this.isThumb = false;
        this.isTapHidden = false;
        // eslint-disable-next-line
        this.singleTapTimer = null;
        this.tapCount = 0;
        this.inputTapCount = 0;
        /**
         * @private
         */
        this.isInitialLoaded = false;
        this.annotationPageList = [];
        this.importPageList = [];
        /**
         * @private
         */
        this.isImportAction = false;
        this.isImportedAnnotation = false;
        /**
         * @private
         */
        this.isAnnotationCollectionRemoved = false;
        /**
         * @private
         */
        this.tool = null;
        // eslint-disable-next-line
        this.action = 'Select';
        /**
         * @private
         */
        this.eventArgs = null;
        /**
         * @private
         */
        this.inAction = false;
        /**
         * @private
         */
        this.isMouseDown = false;
        /**
         * @private
         */
        this.isStampMouseDown = false;
        /**
         * @private
         */
        this.stampAdded = false;
        /**
         * @private
         */
        this.customStampCount = 0;
        /**
         * @private
         */
        this.isDynamicStamp = false;
        /**
         * @private
         */
        this.isMixedSizeDocument = false;
        /**
         * @private
         */
        this.highestWidth = 0;
        /**
         * @private
         */
        this.highestHeight = 0;
        /**
         * @private
         */
        this.customStampCollection = [];
        /**
         * @private
         */
        this.isAlreadyAdded = false;
        /**
         * @private
         */
        this.isWebkitMobile = false;
        /**
         * @private
         */
        this.isFreeTextContextMenu = false;
        /**
         * @private
         */
        this.isSelection = false;
        /**
         * @private
         */
        this.isAddAnnotation = false;
        /**
         * @private
         */
        // eslint-disable-next-line
        this.annotationComments = null;
        /**
         * @private
         */
        this.isToolbarSignClicked = false;
        /**
         * @private
         */
        this.signatureCount = 0;
        /**
         * @private
         */
        this.isSignatureAdded = false;
        /**
         * @private
         */
        this.isNewSignatureAdded = false;
        /**
         * @private
         */
        this.isInitialPageMode = false;
        /**
         * @private
         */
        // eslint-disable-next-line
        this.documentAnnotationCollections = null;
        /**
         * @private
         */
        this.annotationRenderredList = [];
        /**
         * @private
         */
        // eslint-disable-next-line
        this.annotationStorage = {};
        /**
         * @private
         */
        // eslint-disable-next-line
        this.formFieldStorage = {};
        /**
         * @private
         */
        this.isStorageExceed = false;
        /**
         * @private
         */
        this.isNewStamp = false;
        /**
         * @private
         */
        // eslint-disable-next-line
        this.downloadCollections = {};
        /**
         * @private
         */
        this.isAnnotationAdded = false;
        /**
         * @private
         */
        // eslint-disable-next-line
        this.annotationEvent = null;
        /**
         * @private
        */
        this.isAnnotationDrawn = false;
        /**
         * @private
         */
        this.isAnnotationSelect = false;
        /**
         * @private
         */
        this.isAnnotationMouseDown = false;
        /**
         * @private
         */
        this.isAnnotationMouseMove = false;
        /**
         * @private
         */
        this.validateForm = false;
        /**
         * @private
         */
        this.isMinimumZoom = false;
        /**
         * @private
         */
        this.documentLoaded = false;
        this.tileRenderCount = 0;
        this.tileRequestCount = 0;
        /**
         * @private
         */
        this.isTileImageRendered = false;
        this.isDataExits = false;
        this.requestLists = [];
        this.tilerequestLists = [];
        /**
         * @private
         */
        this.isInkAdded = false;
        /**
         * @private
         */
        this.inkCount = 0;
        /**
         * @private
         */
        this.isAddedSignClicked = false;
        /**
         * @private
         */
        this.imageCount = 0;
        /**
         * @private
         */
        this.isMousedOver = false;
        /**
         * @private
         */
        this.isFormFieldSelect = false;
        /**
         * @private
         */
        this.isFormFieldMouseDown = false;
        /**
         * @private
         */
        this.isFormFieldMouseMove = false;
        /**
         * @private
         */
        this.isFormFieldMousedOver = false;
        /**
         * @private
         */
        this.isPassword = false;
        this.isDrawnCompletely = false;
        /**
         * @private
         */
        this.isAddComment = false;
        /**
         * @private
         */
        this.drawSignatureWithTool = false;
        /**
         * @private
         */
        // eslint-disable-next-line
        this.formFieldCollection = [];
        /**
         * @private
         */
        // eslint-disable-next-line
        this.nonFillableFields = {};
        /**
         * @private
         */
        this.isInitialField = false;
        /**
         * @private
         */
        this.isTouchDesignerMode = false;
        /**
         * @private
         */
        this.isPrint = false;
        /**
         * @private
         */
        this.isJsonImported = false;
        /**
         * @private
         */
        this.isJsonExported = false;
        /**
         * @private
         */
        this.isPageRotated = false;
        this.downloadFileName = '';
        /**
         * @private
         */
        // eslint-disable-next-line
        this.isFocusField = false;
        /**
         * @private
         */
        // eslint-disable-next-line
        this.focusField = [];
        /**
         * @returns {void}
         */
        this.clearSessionStorage = function () {
            var documentId = '';
            if (Browser.isIE || Browser.info.name === 'edge') {
                documentId = decodeURI(window.sessionStorage.getItem('hashId'));
            }
            else {
                documentId = window.sessionStorage.getItem('hashId');
            }
            var documentLiveCount = window.sessionStorage.getItem('documentLiveCount');
            if (documentId !== null) {
                // eslint-disable-next-line max-len
                var jsonObject = { hashId: documentId, documentLiveCount: documentLiveCount, action: 'Unload', elementId: _this.pdfViewer.element.id };
                var actionName = window.sessionStorage.getItem('unload');
                var serviceUrl = window.sessionStorage.getItem('serviceURL');
                if (serviceUrl && serviceUrl !== 'undefined') {
                    // eslint-disable-next-line
                    var browserSupportsKeepalive = 'keepalive' in new Request('');
                    if (browserSupportsKeepalive) {
                        // eslint-disable-next-line
                        var headerValue = _this.setUnloadRequestHeaders();
                        var credentialsData = _this.pdfViewer.ajaxRequestSettings.withCredentials ? 'include' : 'omit';
                        fetch(serviceUrl + '/' + actionName, {
                            method: 'POST',
                            credentials: credentialsData,
                            headers: headerValue,
                            body: JSON.stringify(jsonObject)
                        });
                    }
                }
                else if (isBlazor()) {
                    _this.clearCache(actionName, jsonObject, _this);
                }
            }
            window.sessionStorage.removeItem(_this.documentId + '_annotations_textMarkup');
            window.sessionStorage.removeItem(_this.documentId + '_annotations_shape');
            window.sessionStorage.removeItem(_this.documentId + '_annotations_shape_measure');
            window.sessionStorage.removeItem(_this.documentId + '_annotations_stamp');
            window.sessionStorage.removeItem(_this.documentId + '_annotations_sticky');
            window.sessionStorage.removeItem(_this.documentId + '_annotations_freetext');
            window.sessionStorage.removeItem(_this.documentId + '_formfields');
            window.sessionStorage.removeItem(_this.documentId + '_formDesigner');
            window.sessionStorage.removeItem(_this.documentId + '_annotations_sign');
            window.sessionStorage.removeItem(_this.documentId + '_pagedata');
            window.sessionStorage.removeItem('hashId');
            window.sessionStorage.removeItem('documentLiveCount');
            window.sessionStorage.removeItem('currentDocument');
            window.sessionStorage.removeItem('serviceURL');
            window.sessionStorage.removeItem('unload');
        };
        /**
         * @private
         * @param {MouseEvent} event - Mouse event.
         * @returns {void}
         */
        this.onWindowResize = function (event) {
            var proxy = null;
            proxy = _this;
            if (_this.pdfViewer.enableRtl) {
                // eslint-disable-next-line max-len
                proxy.viewerContainer.style.right = (proxy.navigationPane.sideBarToolbar ? proxy.navigationPane.getViewerContainerLeft() : 0) + 'px';
                // eslint-disable-next-line max-len
                proxy.viewerContainer.style.left = (proxy.navigationPane.commentPanelContainer ? proxy.navigationPane.commentPanelContainer.offsetWidth : 0) + 'px';
            }
            else {
                // eslint-disable-next-line max-len
                proxy.viewerContainer.style.left = (proxy.navigationPane.sideBarToolbar ? proxy.navigationPane.getViewerContainerLeft() : 0) + 'px';
                // eslint-disable-next-line max-len
                proxy.viewerContainer.style.right = (proxy.navigationPane.commentPanelContainer ? proxy.navigationPane.commentPanelContainer.offsetWidth : 0) + 'px';
            }
            // eslint-disable-next-line
            var viewerElementWidth = (proxy.pdfViewer.element.clientWidth > 0 ? proxy.pdfViewer.element.clientWidth : proxy.pdfViewer.element.style.width);
            // eslint-disable-next-line
            var viewerWidth = (viewerElementWidth - (proxy.navigationPane.sideBarToolbar ? proxy.navigationPane.getViewerContainerLeft() : 0) - (proxy.navigationPane.commentPanelContainer ? proxy.navigationPane.getViewerContainerRight() : 0));
            proxy.viewerContainer.style.width = viewerWidth + 'px';
            if (proxy.pdfViewer.toolbarModule) {
                // eslint-disable-next-line
                var toolbarContainer = isBlazor() ? proxy.pdfViewer.element.querySelector('.e-pv-toolbar') : proxy.getElement('_toolbarContainer');
                var toolbarHeight = 0;
                var formDesignerToolbarHeight = 0;
                if (toolbarContainer) {
                    toolbarHeight = toolbarContainer.getBoundingClientRect().height;
                }
                if (proxy.isAnnotationToolbarHidden() || (Browser.isDevice && !_this.pdfViewer.enableDesktopMode)) {
                    if (toolbarHeight === 0) {
                        if (_this.navigationPane.isNavigationToolbarVisible) {
                            // eslint-disable-next-line
                            var navigationToolbar = proxy.getElement('_navigationToolbar');
                            toolbarHeight = navigationToolbar.getBoundingClientRect().height;
                        }
                    }
                    if (!proxy.isFormDesignerToolbarHidded()) {
                        var formDesignerToolbar = proxy.getElement('_formdesigner_toolbar');
                        formDesignerToolbarHeight = formDesignerToolbar ? formDesignerToolbar.getBoundingClientRect().height : 0;
                    }
                    // eslint-disable-next-line max-len
                    proxy.viewerContainer.style.height = proxy.updatePageHeight(proxy.pdfViewer.element.getBoundingClientRect().height, toolbarHeight + formDesignerToolbarHeight);
                }
                else {
                    // eslint-disable-next-line
                    var annotationToolbarContainer = isBlazor() ? proxy.pdfViewer.element.querySelector('.e-pv-annotation-toolbar') : proxy.getElement('_annotation_toolbar');
                    var annotationToolbarHeight = 0;
                    if (annotationToolbarContainer) {
                        annotationToolbarHeight = annotationToolbarContainer.getBoundingClientRect().height;
                    }
                    // eslint-disable-next-line max-len
                    proxy.viewerContainer.style.height = proxy.updatePageHeight(proxy.pdfViewer.element.getBoundingClientRect().height, toolbarHeight + annotationToolbarHeight);
                }
            }
            else {
                proxy.viewerContainer.style.height = proxy.updatePageHeight(proxy.pdfViewer.element.getBoundingClientRect().height, 0);
            }
            if (proxy.pdfViewer.bookmarkViewModule && (Browser.isDevice && !_this.pdfViewer.enableDesktopMode)) {
                var bookmarkContainer = proxy.getElement('_bookmarks_container');
                if (bookmarkContainer) {
                    bookmarkContainer.style.height = proxy.updatePageHeight(proxy.pdfViewer.element.getBoundingClientRect().height, 0);
                }
            }
            if (proxy.viewerContainer.style.height === '0px') {
                if (proxy.pdfViewer.height.toString() === 'auto') {
                    proxy.pdfViewer.height = 500;
                    proxy.viewerContainer.style.height = proxy.pdfViewer.height + 'px';
                }
                else {
                    proxy.viewerContainer.style.height = proxy.pdfViewer.element.style.height;
                }
            }
            if (proxy.viewerContainer.style.width === '0px') {
                if (proxy.pdfViewer.width.toString() === 'auto') {
                    proxy.pdfViewer.width = 500;
                    proxy.viewerContainer.style.width = proxy.pdfViewer.width + 'px';
                }
                else {
                    proxy.viewerContainer.style.width = proxy.pdfViewer.element.style.width;
                }
            }
            proxy.pageContainer.style.width = proxy.viewerContainer.clientWidth + 'px';
            if (proxy.viewerContainer.clientWidth === 0) {
                proxy.pageContainer.style.width = proxy.pdfViewer.element.style.width;
            }
            if (!isBlazor()) {
                if (proxy.pdfViewer.toolbarModule) {
                    // eslint-disable-next-line max-len
                    proxy.pdfViewer.toolbarModule.onToolbarResize((proxy.navigationPane.sideBarToolbar ? proxy.navigationPane.getViewerMainContainerWidth() : proxy.pdfViewer.element.clientWidth));
                }
            }
            if (_this.pdfViewer.enableToolbar && _this.pdfViewer.thumbnailViewModule) {
                proxy.pdfViewer.thumbnailViewModule.gotoThumbnailImage(proxy.currentPageNumber - 1);
            }
            if (proxy.pdfViewer.textSearchModule && (!Browser.isDevice || _this.pdfViewer.enableDesktopMode)) {
                proxy.pdfViewer.textSearchModule.textSearchBoxOnResize();
            }
            if (viewerWidth !== 0) {
                if (!proxy.navigationPane.isBookmarkListOpen) {
                    proxy.updateZoomValue();
                }
            }
            if (Browser.isDevice && !_this.pdfViewer.enableDesktopMode) {
                proxy.mobileScrollerContainer.style.left = (viewerWidth - parseFloat(proxy.mobileScrollerContainer.style.width)) + 'px';
                proxy.mobilePageNoContainer.style.left = (viewerWidth / 2) - (parseFloat(proxy.mobilePageNoContainer.style.width) / 2) + 'px';
                proxy.mobilePageNoContainer.style.top = (proxy.pdfViewer.element.clientHeight / 2) + 'px';
                proxy.updateMobileScrollerPosition();
            }
            else {
                proxy.navigationPane.setResizeIconTop();
                proxy.navigationPane.setCommentPanelResizeIconTop();
                if (event && event.type === 'resize') {
                    proxy.signatureModule.updateCanvasSize();
                }
            }
            if (proxy.navigationPane.sideBarToolbar) {
                proxy.navigationPane.sideBarToolbar.style.height = proxy.viewerContainer.style.height;
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMousedown = function (event) {
            _this.isFreeTextContextMenu = false;
            var isUpdate = false;
            _this.isSelection = true;
            if (event.button === 0 && !_this.getPopupNoteVisibleStatus() && !_this.isClickedOnScrollBar(event, false)) {
                _this.isViewerMouseDown = true;
                // eslint-disable-next-line
                var target = event.target;
                if (event.detail === 1 && target.className !== 'e-pdfviewer-formFields' && target.className !== 'free-text-input') {
                    isUpdate = true;
                    _this.focusViewerContainer(true);
                }
                _this.scrollPosition = _this.viewerContainer.scrollTop / _this.getZoomFactor();
                _this.mouseX = event.clientX;
                _this.mouseY = event.clientY;
                _this.mouseLeft = event.clientX;
                _this.mouseTop = event.clientY;
                // eslint-disable-next-line
                var isIE = !!document.documentMode;
                if (_this.pdfViewer.textSelectionModule && !_this.isClickedOnScrollBar(event, true) && !_this.isTextSelectionDisabled) {
                    if (!isIE && target.className !== 'e-pdfviewer-formFields' && target.className !== 'e-pdfviewer-ListBox' && target.className !== 'e-pv-formfield-dropdown'
                        && target.className !== 'e-pv-formfield-listbox') {
                        event.preventDefault();
                    }
                    if (target.className !== 'e-pv-droplet') {
                        _this.pdfViewer.textSelectionModule.clearTextSelection();
                    }
                }
            }
            if (_this.isClickedOnScrollBar(event, false)) {
                _this.isViewerMouseDown = true;
            }
            if (_this.isPanMode) {
                _this.dragX = event.pageX;
                _this.dragY = event.pageY;
                // eslint-disable-next-line max-len
                if (_this.viewerContainer.contains(event.target) && (event.target !== _this.viewerContainer) && (event.target !== _this.pageContainer) && _this.isPanMode) {
                    _this.viewerContainer.style.cursor = 'grabbing';
                }
            }
            if (_this.isShapeBasedAnnotationsEnabled()) {
                _this.diagramMouseDown(event);
            }
            if (_this.pdfViewer.annotation && _this.pdfViewer.annotation.stickyNotesAnnotationModule.accordionContainer) {
                if (!isUpdate) {
                    _this.pdfViewer.annotationModule.stickyNotesAnnotationModule.isEditableElement = false;
                    _this.updateCommentPanel();
                    isUpdate = true;
                }
            }
            if (isBlazor()) {
                _this.mouseDownHandler(event);
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMouseup = function (event) {
            if (!_this.getPopupNoteVisibleStatus()) {
                if (_this.isViewerMouseDown) {
                    if (_this.scrollHoldTimer) {
                        clearTimeout(_this.scrollHoldTimer);
                        _this.scrollHoldTimer = null;
                    }
                    if ((_this.scrollPosition * _this.getZoomFactor()) !== _this.viewerContainer.scrollTop) {
                        _this.pageViewScrollChanged(_this.currentPageNumber);
                    }
                }
                var isSignatureFieldReadOnly = false;
                if (event.target) {
                    if (event.target.className == 'e-pv-show-designer-name' && event.target.id.split('_', 1) != '') {
                        isSignatureFieldReadOnly = document.getElementById(event.target.id.split('_', 1)).disabled;
                    }
                    if (event.target.className == 'foreign-object' && event.target.children[0]) {
                        isSignatureFieldReadOnly = event.target.children[0].disabled;
                    }
                }
                if (isSignatureFieldReadOnly && _this.pdfViewer.annotation) {
                    _this.pdfViewer.annotation.clearSelection();
                }
                if (_this.isShapeBasedAnnotationsEnabled() && !isSignatureFieldReadOnly) {
                    _this.diagramMouseUp(event);
                    if (_this.pdfViewer.annotation) {
                        _this.pdfViewer.annotation.onAnnotationMouseUp();
                    }
                }
                if (_this.pdfViewer.selectedItems.formFields.length > 0) {
                    // eslint-disable-next-line max-len
                    if (!isNullOrUndefined(_this.pdfViewer.toolbar) && !isNullOrUndefined(_this.pdfViewer.toolbar.formDesignerToolbarModule) && !Browser.isDevice) {
                        _this.pdfViewer.toolbar.formDesignerToolbarModule.showHideDeleteIcon(true);
                    }
                }
                else {
                    // eslint-disable-next-line max-len
                    if (!isNullOrUndefined(_this.pdfViewer.toolbar) && !isNullOrUndefined(_this.pdfViewer.toolbar.formDesignerToolbarModule) && !Browser.isDevice) {
                        _this.pdfViewer.toolbar.formDesignerToolbarModule.showHideDeleteIcon(false);
                    }
                }
                _this.isSelection = false;
                // eslint-disable-next-line max-len
                var commentElement = document.getElementById(_this.pdfViewer.element.id + '_commantPanel');
                if (commentElement && commentElement.style.display === 'block') {
                    if (_this.pdfViewer.selectedItems) {
                        if (_this.pdfViewer.selectedItems.annotations.length !== 0) {
                            // eslint-disable-next-line
                            var accordionExpand = document.getElementById(_this.pdfViewer.element.id + '_accordionContainer' + _this.pdfViewer.currentPageNumber);
                            if (accordionExpand) {
                                accordionExpand.ej2_instances[0].expandItem(true);
                            }
                            // eslint-disable-next-line
                            var commentsDiv = document.getElementById(_this.pdfViewer.selectedItems.annotations[0].annotName);
                            if (commentsDiv) {
                                if (!commentsDiv.classList.contains('e-pv-comments-border')) {
                                    commentsDiv.firstChild.click();
                                }
                            }
                        }
                    }
                }
                if (event.button === 0 && !_this.isClickedOnScrollBar(event, false)) {
                    // 0 is for left button.
                    var eventTarget = event.target;
                    var offsetX = event.clientX;
                    var offsetY = event.clientY;
                    var zoomFactor = _this.getZoomFactor();
                    var pageIndex = _this.currentPageNumber;
                    if (eventTarget) {
                        // eslint-disable-next-line
                        var pageString = eventTarget.id.split('_text_')[1] || eventTarget.id.split('_textLayer_')[1] || eventTarget.id.split('_annotationCanvas_')[1] || eventTarget.id.split('_pageDiv_')[1];
                        // eslint-disable-next-line
                        pageIndex = parseInt(pageString);
                    }
                    var pageDiv = _this.getElement('_pageDiv_' + pageIndex);
                    if (pageDiv) {
                        var pageCurrentRect = pageDiv.getBoundingClientRect();
                        offsetX = (event.clientX - pageCurrentRect.left) / zoomFactor;
                        offsetY = (event.clientY - pageCurrentRect.top) / zoomFactor;
                    }
                    // eslint-disable-next-line max-len
                    if (eventTarget && eventTarget.classList && !eventTarget.classList.contains('e-pv-hyperlink') && !eventTarget.classList.contains('e-pv-page-container')) {
                        // eslint-disable-next-line
                        _this.pdfViewer.firePageClick(offsetX, offsetY, pageIndex + 1);
                        if (_this.pdfViewer.formFieldsModule && !_this.pdfViewer.formDesignerModule) {
                            _this.pdfViewer.formFieldsModule.removeFocus();
                        }
                    }
                    if (_this.isTextMarkupAnnotationModule() && !_this.isToolbarInkClicked) {
                        _this.pdfViewer.annotationModule.textMarkupAnnotationModule.onTextMarkupAnnotationMouseUp(event);
                    }
                    if (_this.pdfViewer.formDesignerModule && !_this.pdfViewer.annotationModule) {
                        _this.pdfViewer.formDesignerModule.updateCanvas(pageIndex);
                    }
                    // eslint-disable-next-line max-len
                    if (_this.viewerContainer.contains(event.target) && (event.target !== _this.viewerContainer) && (event.target !== _this.pageContainer) && _this.isPanMode) {
                        _this.viewerContainer.style.cursor = 'move';
                        _this.viewerContainer.style.cursor = '-webkit-grab';
                        _this.viewerContainer.style.cursor = '-moz-grab';
                        _this.viewerContainer.style.cursor = 'grab';
                    }
                }
                _this.isViewerMouseDown = false;
            }
        };
        /**
         * @param {WheelEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMouseWheel = function (event) {
            _this.isViewerMouseWheel = true;
            if (_this.getRerenderCanvasCreated()) {
                event.preventDefault();
            }
            if (event.ctrlKey) {
                var zoomDifference = 25;
                if (_this.pdfViewer.magnification.zoomFactor < 1) {
                    zoomDifference = 10;
                }
                if (_this.pdfViewer.magnification.zoomFactor >= 2) {
                    zoomDifference = 50;
                }
                // eslint-disable-next-line
                if (event.wheelDelta > 0) {
                    _this.pdfViewer.magnification.zoomTo((_this.pdfViewer.magnification.zoomFactor * 100) + zoomDifference);
                }
                else {
                    _this.pdfViewer.magnification.zoomTo((_this.pdfViewer.magnification.zoomFactor * 100) - zoomDifference);
                }
            }
            if (_this.pdfViewer.magnificationModule) {
                _this.pdfViewer.magnificationModule.pageRerenderOnMouseWheel();
                if (event.ctrlKey) {
                    event.preventDefault();
                }
                _this.pdfViewer.magnificationModule.fitPageScrollMouseWheel(event);
            }
            if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled) {
                if (_this.isViewerMouseDown) {
                    if (!event.target.classList.contains('e-pv-text')) {
                        _this.pdfViewer.textSelectionModule.textSelectionOnMouseWheel(_this.currentPageNumber - 1);
                    }
                }
            }
        };
        /**
         * @param {KeyboardEvent} event - The KeyboardEvent.
         * @returns {void}
         */
        this.onWindowKeyDown = function (event) {
            var isMac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
            var isCommandKey = isMac ? event.metaKey : false;
            if ((_this.isFreeTextAnnotationModule() && _this.pdfViewer.annotationModule
                && (_this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus === true
                    || _this.pdfViewer.annotationModule.inputElementModule.isInFocus === true))) {
                return;
            }
            if (!event.ctrlKey || !isCommandKey) {
                switch (event.keyCode) {
                    case 27:
                        if (_this.pdfViewer.toolbar) {
                            _this.pdfViewer.toolbar.addInkAnnotation();
                            _this.pdfViewer.toolbar.deSelectCommentAnnotation();
                            _this.pdfViewer.toolbar.updateStampItems();
                            if (_this.pdfViewer.toolbar.annotationToolbarModule) {
                                if (isBlazor()) {
                                    _this.pdfViewer.toolbar.annotationToolbarModule.deselectAllItemsInBlazor();
                                }
                                else {
                                    _this.pdfViewer.toolbar.annotationToolbarModule.deselectAllItems();
                                }
                            }
                            if (_this.pdfViewer.isFormDesignerToolbarVisible && document.getElementById('FormField_helper_html_element')) {
                                var formFieldElement = document.getElementById('FormField_helper_html_element');
                                if (formFieldElement) {
                                    formFieldElement.remove();
                                }
                            }
                            _this.pdfViewer.tool = '';
                            _this.focusViewerContainer();
                        }
                        break;
                    case 9:
                        if (event.target && event.target.id && _this.pdfViewer.formFields) {
                            for (var i = 0; i < _this.pdfViewer.formFields.length; i++) {
                                var formField = _this.pdfViewer.formFields[i];
                                if (event.target.id === formField.id) {
                                    // eslint-disable-next-line
                                    var field = {
                                        value: formField.value, fontFamily: formField.fontFamily, fontSize: formField.fontSize, fontStyle: formField.fontStyle,
                                        // eslint-disable-next-line
                                        color: formField.color, backgroundColor: formField.backgroundColor, alignment: formField.alignment, isReadonly: formField.isReadonly, visibility: formField.visibility,
                                        // eslint-disable-next-line
                                        maxLength: formField.maxLength, isRequired: formField.isRequired, isPrint: formField.isPrint, rotation: formField.rotateAngle, tooltip: formField.tooltip,
                                        // eslint-disable-next-line
                                        options: formField.options, isChecked: formField.isChecked, isSelected: formField.isSelected
                                    };
                                    _this.pdfViewer.fireFocusOutFormField(field, formField.pageIndex);
                                }
                            }
                        }
                        break;
                }
            }
        };
        /**
         * @param {KeyboardEvent} event - The KeyboardEvent.
         * @returns {void}
         */
        this.viewerContainerOnKeyDown = function (event) {
            var isMac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
            var isCommandKey = isMac ? event.metaKey : false;
            if ((_this.isFreeTextAnnotationModule() && _this.pdfViewer.annotationModule
                && (_this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus === true
                    || _this.pdfViewer.annotationModule.inputElementModule.isInFocus === true))) {
                return;
            }
            if (event.ctrlKey || isCommandKey) {
                // add keycodes if shift key is used.
                if ((event.shiftKey && !isMac) || (isMac && !event.shiftKey)) {
                    switch (event.keyCode) {
                        case 38: // up arrow
                        case 33: // page up
                            event.preventDefault();
                            if (_this.currentPageNumber !== 1) {
                                _this.updateScrollTop(0);
                            }
                            break;
                        case 40: // down arrow
                        case 34: // page down
                            event.preventDefault();
                            if (_this.currentPageNumber !== _this.pageCount) {
                                _this.updateScrollTop(_this.pageCount - 1);
                            }
                            break;
                        default:
                            break;
                    }
                }
                switch (event.keyCode) {
                    case 79: // o key
                        if (_this.pdfViewer.toolbarModule && _this.pdfViewer.enableToolbar) {
                            _this.pdfViewer.toolbarModule.openFileDialogBox(event);
                        }
                        break;
                    case 67: // c key
                        if (_this.pdfViewer.textSelectionModule && _this.pdfViewer.enableTextSelection && !_this.isTextSelectionDisabled) {
                            event.preventDefault();
                            _this.pdfViewer.textSelectionModule.copyText();
                        }
                        if (_this.pdfViewer.selectedItems.annotations.length || _this.pdfViewer.selectedItems.formFields.length) {
                            _this.pdfViewer.copy();
                            _this.contextMenuModule.previousAction = 'Copy';
                        }
                        break;
                    case 70: // f key
                        if (_this.pdfViewer.textSearchModule && _this.pdfViewer.enableTextSearch) {
                            event.preventDefault();
                            _this.pdfViewer.toolbarModule.textSearchButtonHandler();
                        }
                        break;
                    case 80: // p key
                        if (_this.pdfViewer.printModule && _this.pdfViewer.enablePrint) {
                            event.preventDefault();
                            _this.pdfViewer.print.print();
                        }
                        break;
                    case 90: //z key
                        if (_this.pdfViewer.annotationModule) {
                            _this.pdfViewer.annotationModule.undo();
                        }
                        break;
                    case 88: //x key
                        if (_this.pdfViewer.selectedItems.annotations.length || _this.pdfViewer.selectedItems.formFields.length) {
                            _this.pdfViewer.cut();
                            _this.contextMenuModule.previousAction = 'Cut';
                        }
                        break;
                    case 89: //y key
                        if (_this.pdfViewer.annotationModule) {
                            _this.pdfViewer.annotationModule.redo();
                        }
                        break;
                    case 86: //v key
                        // eslint-disable-next-line max-len
                        if ((_this.pdfViewer.annotation && _this.pdfViewer.annotation.isShapeCopied) || (_this.pdfViewer.formFields && _this.pdfViewer.formDesigner.isShapeCopied)) {
                            _this.pdfViewer.paste();
                            _this.contextMenuModule.previousAction = 'Paste';
                        }
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (event.keyCode) {
                    case 46:
                        _this.DeleteKeyPressed(event);
                        break;
                }
            }
            if (_this.pdfViewer.magnificationModule) {
                _this.pdfViewer.magnificationModule.magnifyBehaviorKeyDown(event);
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMousemove = function (event) {
            _this.mouseX = event.clientX;
            _this.mouseY = event.clientY;
            // eslint-disable-next-line
            var isIE = !!document.documentMode;
            var target = event.target;
            if (_this.action === 'Drag') {
                event.preventDefault();
            }
            // eslint-disable-next-line max-len
            if (_this.isViewerMouseDown && !(_this.action === 'Perimeter' || _this.action === 'Polygon' || _this.action === 'Line' || _this.action === 'DrawTool' || _this.action === 'Distance')) {
                // eslint-disable-next-line max-len
                if (_this.pdfViewer.textSelectionModule && _this.pdfViewer.enableTextSelection && !_this.isTextSelectionDisabled && !_this.getPopupNoteVisibleStatus()) {
                    // text selection won't perform if we start the selection from hyperlink content by commenting this line.
                    // this region block the toc/hyperlink navigation on sometimes.
                    // if ((event.target as HTMLElement).classList.contains('e-pv-hyperlink') && this.pdfViewer.linkAnnotationModule) {
                    // this.pdfViewer.linkAnnotationModule.modifyZindexForHyperlink((event.target as HTMLElement), true);
                    // }
                    if (!isIE) {
                        if (event.target.className != 'e-pdfviewer-formFields')
                            event.preventDefault();
                        _this.mouseX = event.clientX;
                        _this.mouseY = event.clientY;
                        // eslint-disable-next-line
                        var annotationModule = _this.pdfViewer.annotationModule;
                        // eslint-disable-next-line max-len
                        if (annotationModule && annotationModule.textMarkupAnnotationModule && annotationModule.textMarkupAnnotationModule.isDropletClicked && annotationModule.textMarkupAnnotationModule.isEnableTextMarkupResizer(annotationModule.textMarkupAnnotationModule.currentTextMarkupAddMode)) {
                            annotationModule.textMarkupAnnotationModule.textSelect(event.target, _this.mouseX, _this.mouseY);
                        }
                        else {
                            _this.pdfViewer.textSelectionModule.textSelectionOnMouseMove(event.target, _this.mouseX, _this.mouseY);
                        }
                    }
                    else {
                        var selection = window.getSelection();
                        if (!selection.type && !selection.isCollapsed && selection.anchorNode !== null) {
                            _this.pdfViewer.textSelectionModule.isTextSelection = true;
                        }
                    }
                }
                else if (_this.skipPreventDefault(target)) {
                    event.preventDefault();
                }
            }
            if (_this.isTextMarkupAnnotationModule() && !_this.getPopupNoteVisibleStatus()) {
                _this.pdfViewer.annotationModule.textMarkupAnnotationModule.onTextMarkupAnnotationMouseMove(event);
            }
            if (_this.isPanMode) {
                _this.panOnMouseMove(event);
            }
            if (_this.isShapeBasedAnnotationsEnabled()) {
                var canvas = void 0;
                // eslint-disable-next-line max-len
                if (event.target && (event.target.id.indexOf('_text') > -1 || (event.target.parentElement.classList.contains('foreign-object')) || event.target.id.indexOf('_annotationCanvas') > -1 || event.target.classList.contains('e-pv-hyperlink')) && _this.pdfViewer.annotation || event.target.classList.contains('e-pdfviewer-formFields')) {
                    var pageIndex = _this.pdfViewer.annotation.getEventPageNumber(event);
                    var diagram = document.getElementById(_this.pdfViewer.element.id + '_annotationCanvas_' + pageIndex);
                    if (diagram) {
                        var canvas1 = diagram.getBoundingClientRect();
                        var left = canvas1.x ? canvas1.x : canvas1.left;
                        var top_1 = canvas1.y ? canvas1.y : canvas1.top;
                        // eslint-disable-next-line max-len
                        if (_this.pdfViewer.annotationModule.stampAnnotationModule.currentStampAnnotation && _this.pdfViewer.annotationModule.stampAnnotationModule.currentStampAnnotation.shapeAnnotationType === 'Image') {
                            canvas = new Rect(left, top_1, canvas1.width - 10, canvas1.height - 10);
                        }
                        else {
                            canvas = new Rect(left + 1, top_1 + 1, canvas1.width - 3, canvas1.height - 3);
                        }
                    }
                }
                else if (!_this.pdfViewer.annotationModule && _this.pdfViewer.formDesignerModule) {
                    var pageIndex = _this.pdfViewer.formDesignerModule.getEventPageNumber(event);
                    var diagram = document.getElementById(_this.pdfViewer.element.id + '_annotationCanvas_' + pageIndex);
                    if (diagram) {
                        var canvas1 = diagram.getBoundingClientRect();
                        var left = canvas1.x ? canvas1.x : canvas1.left;
                        var top_2 = canvas1.y ? canvas1.y : canvas1.top;
                        canvas = new Rect(left + 10, top_2 + 10, canvas1.width - 10, canvas1.height - 10);
                    }
                }
                // eslint-disable-next-line max-len
                var stampModule = _this.pdfViewer.annotationModule ? _this.pdfViewer.annotationModule.stampAnnotationModule : null;
                if (canvas && canvas.containsPoint({ x: _this.mouseX, y: _this.mouseY }) && !(stampModule && stampModule.isStampAnnotSelected)) {
                    _this.diagramMouseMove(event);
                    _this.annotationEvent = event;
                }
                else {
                    _this.diagramMouseLeave(event);
                    if (_this.isAnnotationDrawn && _this.action !== 'Ink') {
                        _this.diagramMouseUp(event);
                        _this.isAnnotationAdded = true;
                    }
                }
                if (_this.pdfViewer.enableStampAnnotations) {
                    if (stampModule && stampModule.isStampAnnotSelected) {
                        _this.pdfViewer.tool = 'Stamp';
                        _this.tool = new StampTool(_this.pdfViewer, _this);
                        _this.isMouseDown = true;
                        stampModule.isStampAnnotSelected = false;
                        stampModule.isNewStampAnnot = true;
                    }
                }
                if (_this.isSignatureAdded && _this.pdfViewer.enableHandwrittenSignature) {
                    _this.pdfViewer.tool = 'Stamp';
                    _this.tool = new StampTool(_this.pdfViewer, _this);
                    _this.isMouseDown = true;
                    _this.isSignatureAdded = false;
                    _this.isNewSignatureAdded = true;
                }
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.panOnMouseMove = function (event) {
            var isStampMode = false;
            // eslint-disable-next-line max-len
            if (_this.action === 'Ink' || _this.action === "Line" || _this.action === 'Perimeter' || _this.action === 'Polygon' || _this.action === 'DrawTool' || _this.action === 'Drag' || _this.action.indexOf('Rotate') !== -1 || _this.action.indexOf('Resize') !== -1) {
                isStampMode = true;
            }
            // eslint-disable-next-line max-len
            if (_this.viewerContainer.contains(event.target) && (event.target !== _this.viewerContainer) && (event.target !== _this.pageContainer) && !isStampMode) {
                if (_this.isViewerMouseDown) {
                    var deltaX = _this.dragX - event.pageX;
                    var deltaY = _this.dragY - event.pageY;
                    _this.viewerContainer.scrollTop = _this.viewerContainer.scrollTop + deltaY;
                    _this.viewerContainer.scrollLeft = _this.viewerContainer.scrollLeft + deltaX;
                    _this.viewerContainer.style.cursor = 'move';
                    _this.viewerContainer.style.cursor = '-webkit-grabbing';
                    _this.viewerContainer.style.cursor = '-moz-grabbing';
                    _this.viewerContainer.style.cursor = 'grabbing';
                    _this.dragX = event.pageX;
                    _this.dragY = event.pageY;
                }
                else {
                    if (!_this.navigationPane.isNavigationPaneResized) {
                        _this.viewerContainer.style.cursor = 'move';
                        _this.viewerContainer.style.cursor = '-webkit-grab';
                        _this.viewerContainer.style.cursor = '-moz-grab';
                        _this.viewerContainer.style.cursor = 'grab';
                    }
                }
            }
            else {
                if (!_this.navigationPane.isNavigationPaneResized) {
                    _this.viewerContainer.style.cursor = 'auto';
                }
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMouseLeave = function (event) {
            if (_this.isViewerMouseDown) {
                if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled) {
                    _this.pdfViewer.textSelectionModule.textSelectionOnMouseLeave(event);
                }
            }
            if (_this.pdfViewer.textSelectionModule && _this.pdfViewer.textSelectionModule.isTextSelection) {
                event.preventDefault();
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMouseEnter = function (event) {
            if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled) {
                _this.pdfViewer.textSelectionModule.clear();
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnMouseOver = function (event) {
            // eslint-disable-next-line
            var isIE = !!document.documentMode;
            if (_this.isViewerMouseDown) {
                if (!isIE) {
                    event.preventDefault();
                }
            }
        };
        /**
         * @param {MouseEvent} event - The MouseEvent.
         * @returns {void}
         */
        this.viewerContainerOnClick = function (event) {
            if (event.type === 'dblclick') {
                if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled && !_this.getCurrentTextMarkupAnnotation()) {
                    if (event.target.classList.contains('e-pv-text')) {
                        _this.isViewerContainerDoubleClick = true;
                        if (!_this.getTextMarkupAnnotationMode()) {
                            var pageNumber = parseFloat(event.target.id.split('_')[2]);
                            _this.pdfViewer.fireTextSelectionStart(pageNumber + 1);
                        }
                        _this.pdfViewer.textSelectionModule.selectAWord(event.target, event.clientX, event.clientY, false);
                        if (_this.pdfViewer.contextMenuSettings.contextMenuAction === 'MouseUp') {
                            _this.pdfViewer.textSelectionModule.calculateContextMenuPosition(event.clientY, event.clientX);
                        }
                        if (!_this.getTextMarkupAnnotationMode()) {
                            _this.pdfViewer.textSelectionModule.maintainSelectionOnZoom(true, false);
                            _this.dblClickTimer = setTimeout(function () {
                                _this.applySelection();
                            }, 100);
                            _this.pdfViewer.textSelectionModule.fireTextSelectEnd();
                        }
                        else if (_this.isTextMarkupAnnotationModule() && _this.getTextMarkupAnnotationMode()) {
                            // eslint-disable-next-line max-len
                            _this.pdfViewer.annotationModule.textMarkupAnnotationModule.drawTextMarkupAnnotations(_this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAddMode);
                        }
                    }
                }
                else if (_this.getCurrentTextMarkupAnnotation()) {
                    // this.pdfViewer.annotationModule.showAnnotationPopup(event);
                }
                if (_this.action && (_this.action === 'Perimeter' || _this.action === 'Polygon') && _this.tool) {
                    _this.eventArgs.position = _this.currentPosition;
                    _this.getMouseEventArgs(_this.currentPosition, _this.eventArgs, event, _this.eventArgs.source);
                    var ctrlKey = _this.isMetaKey(event);
                    var info = { ctrlKey: event.ctrlKey, shiftKey: event.shiftKey };
                    _this.eventArgs.info = info;
                    _this.eventArgs.clickCount = event.detail;
                    _this.tool.mouseUp(_this.eventArgs, true);
                }
                if (_this.pdfViewer.selectedItems ||
                    (_this.pdfViewer.annotation && _this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation)) {
                    if (_this.pdfViewer.selectedItems.annotations.length !== 0) {
                        // eslint-disable-next-line
                        var currentAnnotation = _this.pdfViewer.selectedItems.annotations[0];
                        // eslint-disable-next-line max-len
                        if (_this.pdfViewer.annotationModule && !currentAnnotation.formFieldAnnotationType) {
                            // eslint-disable-next-line max-len
                            _this.pdfViewer.annotationModule.annotationSelect(currentAnnotation.annotName, currentAnnotation.pageIndex, currentAnnotation, null, true);
                            if (_this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus === false) {
                                if (_this.isFreeTextAnnotation(_this.pdfViewer.selectedItems.annotations) === true) {
                                    var elmtPosition = {};
                                    elmtPosition.x = _this.pdfViewer.selectedItems.annotations[0].bounds.x;
                                    elmtPosition.y = _this.pdfViewer.selectedItems.annotations[0].bounds.y;
                                    // eslint-disable-next-line max-len
                                    _this.pdfViewer.annotation.freeTextAnnotationModule.addInuptElemet(elmtPosition, _this.pdfViewer.selectedItems.annotations[0]);
                                }
                                else if (_this.pdfViewer.selectedItems.annotations[0].enableShapeLabel === true) {
                                    var elmtPosition = {};
                                    elmtPosition.x = _this.pdfViewer.selectedItems.annotations[0].bounds.x;
                                    elmtPosition.y = _this.pdfViewer.selectedItems.annotations[0].bounds.y;
                                    // eslint-disable-next-line max-len
                                    _this.pdfViewer.annotation.inputElementModule.editLabel(elmtPosition, _this.pdfViewer.selectedItems.annotations[0]);
                                }
                                else {
                                    // eslint-disable-next-line
                                    var accordionExpand = document.getElementById(_this.pdfViewer.element.id + '_accordionContainer' + _this.pdfViewer.currentPageNumber);
                                    if (accordionExpand) {
                                        accordionExpand.ej2_instances[0].expandItem(true);
                                    }
                                    // eslint-disable-next-line
                                    var commentsDiv = document.getElementById(_this.pdfViewer.selectedItems.annotations[0].annotName);
                                    if (commentsDiv) {
                                        if (!commentsDiv.classList.contains('e-pv-comments-border')) {
                                            commentsDiv.firstChild.click();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        // eslint-disable-next-line max-len
                        var annotation = _this.pdfViewer.annotation;
                        var annotationModule = _this.pdfViewer.annotationModule;
                        if (annotation && annotationModule.textMarkupAnnotationModule && annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                            // eslint-disable-next-line
                            var annotation_1 = _this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation;
                            // eslint-disable-next-line max-len
                            _this.pdfViewer.annotationModule.annotationSelect(annotation_1.annotName, _this.pdfViewer.annotationModule.textMarkupAnnotationModule.selectTextMarkupCurrentPage, annotation_1, null, true);
                            // eslint-disable-next-line
                            var accordionExpand = document.getElementById(_this.pdfViewer.element.id + '_accordionContainer' + _this.currentPageNumber);
                            if (accordionExpand) {
                                accordionExpand.ej2_instances[0].expandItem(true);
                            }
                            // eslint-disable-next-line
                            var comments = document.getElementById(annotation_1.annotName);
                            if (comments) {
                                comments.firstChild.click();
                            }
                        }
                    }
                }
                if (_this.pdfViewer.designerMode && _this.pdfViewer.selectedItems.formFields.length > 0) {
                    var eventArgs = { name: "formFieldDoubleClick", field: _this.pdfViewer.selectedItems.formFields[0], cancel: false };
                    _this.pdfViewer.fireFormFieldDoubleClickEvent(eventArgs);
                    if (!eventArgs.cancel) {
                        _this.pdfViewer.formDesigner.createPropertiesWindow();
                    }
                }
            }
            else {
                if (event.detail === 3) {
                    if (_this.isViewerContainerDoubleClick) {
                        clearTimeout(_this.dblClickTimer);
                        _this.isViewerContainerDoubleClick = false;
                    }
                    if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled && !_this.getTextMarkupAnnotationMode()) {
                        _this.pdfViewer.textSelectionModule.selectEntireLine(event);
                        _this.pdfViewer.textSelectionModule.maintainSelectionOnZoom(true, false);
                        _this.pdfViewer.textSelectionModule.fireTextSelectEnd();
                        _this.applySelection();
                    }
                }
            }
        };
        /**
         * @param {DragEvent} event - The DragEvent.
         * @returns {void}
         */
        this.viewerContainerOnDragStart = function (event) {
            // eslint-disable-next-line
            var isIE = !!document.documentMode;
            if (!isIE) {
                event.preventDefault();
            }
        };
        // eslint-disable-next-line
        this.viewerContainerOnContextMenuClick = function (event) {
            _this.isViewerMouseDown = false;
        };
        // eslint-disable-next-line
        this.onWindowMouseUp = function (event) {
            _this.isFreeTextContextMenu = false;
            _this.isNewStamp = false;
            _this.signatureAdded = false;
            // eslint-disable-next-line
            var annotationModule = _this.pdfViewer.annotationModule;
            // eslint-disable-next-line max-len
            if (annotationModule && annotationModule.textMarkupAnnotationModule && annotationModule.textMarkupAnnotationModule.isEnableTextMarkupResizer(annotationModule.textMarkupAnnotationModule.currentTextMarkupAddMode)) {
                // eslint-disable-next-line
                var modules = annotationModule.textMarkupAnnotationModule;
                modules.isLeftDropletClicked = false;
                modules.isDropletClicked = false;
                modules.isRightDropletClicked = false;
                if (!modules.currentTextMarkupAnnotation && window.getSelection().anchorNode === null) {
                    modules.showHideDropletDiv(true);
                }
                else if (!modules.currentTextMarkupAnnotation && modules.currentTextMarkupAddMode === '') {
                    modules.isTextMarkupAnnotationMode = false;
                }
            }
            if (!_this.getPopupNoteVisibleStatus()) {
                if (event.button === 0) {
                    // eslint-disable-next-line max-len
                    if (_this.isNewFreeTextAnnotation()) {
                        if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled && !_this.getTextMarkupAnnotationMode()) {
                            // eslint-disable-next-line max-len
                            if (event.detail === 1 && !_this.viewerContainer.contains(event.target) && !_this.contextMenuModule.contextMenuElement.contains(event.target)) {
                                if (window.getSelection().anchorNode !== null) {
                                    _this.pdfViewer.textSelectionModule.textSelectionOnMouseup(event);
                                }
                            }
                            // eslint-disable-next-line
                            var target = event.target;
                            if (_this.viewerContainer.contains(event.target) && target.className !== 'e-pdfviewer-formFields' && target.className !== 'e-pv-formfield-input') {
                                if (!_this.isClickedOnScrollBar(event, true) && !_this.isScrollbarMouseDown) {
                                    _this.pdfViewer.textSelectionModule.textSelectionOnMouseup(event);
                                }
                                else {
                                    if (window.getSelection().anchorNode !== null) {
                                        _this.pdfViewer.textSelectionModule.applySpanForSelection();
                                    }
                                }
                            }
                        }
                        else if (_this.getTextMarkupAnnotationMode()) {
                            // eslint-disable-next-line
                            var viewerElement = _this.pdfViewer.element;
                            // eslint-disable-next-line
                            var targetElement = event.target;
                            if (viewerElement && targetElement) {
                                if (viewerElement.id.split('_')[0] === targetElement.id.split('_')[0]) {
                                    // eslint-disable-next-line max-len
                                    _this.pdfViewer.annotationModule.textMarkupAnnotationModule.drawTextMarkupAnnotations(_this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAddMode);
                                }
                            }
                        }
                    }
                }
                else if (event.button === 2) {
                    if (_this.viewerContainer.contains(event.target) && _this.skipPreventDefault(event.target)) {
                        if (_this.checkIsNormalText()) {
                            window.getSelection().removeAllRanges();
                        }
                    }
                }
                if (_this.isViewerMouseDown) {
                    _this.isViewerMouseDown = false;
                    if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled) {
                        _this.pdfViewer.textSelectionModule.clear();
                        _this.pdfViewer.textSelectionModule.selectionStartPage = null;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
                else {
                    return true;
                }
            }
        };
        /**
         * @param {TouchEvent} event - The DragEvent.
         * @returns {void}
         */
        this.onWindowTouchEnd = function (event) {
            _this.signatureAdded = false;
            // eslint-disable-next-line max-len
            if (!_this.pdfViewer.element.contains(event.target) && !_this.contextMenuModule.contextMenuElement.contains(event.target)) {
                if (_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled) {
                    _this.pdfViewer.textSelectionModule.clearTextSelection();
                }
            }
        };
        /**
         * @param {TouchEvent} event - The TouchEvent.
         * @returns {void}
         */
        this.viewerContainerOnTouchStart = function (event) {
            var touchPoints = event.touches;
            if (_this.pdfViewer.magnificationModule) {
                _this.pdfViewer.magnificationModule.setTouchPoints(touchPoints[0].clientX, touchPoints[0].clientY);
            }
            var target = event.target;
            // eslint-disable-next-line max-len
            if (touchPoints.length === 1 && !(target.classList.contains('e-pv-hyperlink')) && _this.skipPreventDefault(target)) {
                _this.preventTouchEvent(event);
            }
            if (event.touches.length === 1 && _this.isTextMarkupAnnotationModule() && !_this.getPopupNoteVisibleStatus()) {
                if (!_this.isToolbarInkClicked) {
                    _this.pdfViewer.annotationModule.textMarkupAnnotationModule.onTextMarkupAnnotationTouchEnd(event);
                }
            }
            _this.touchClientX = touchPoints[0].clientX;
            _this.touchClientY = touchPoints[0].clientY;
            _this.scrollY = touchPoints[0].clientY;
            _this.previousTime = new Date().getTime();
            // eslint-disable-next-line max-len
            if (touchPoints.length === 1 && !(event.target.classList.contains('e-pv-touch-select-drop') || event.target.classList.contains('e-pv-touch-ellipse'))) {
                if ((Browser.isDevice && !_this.pdfViewer.enableDesktopMode) && _this.pageCount > 0 && !_this.isThumb && !(event.target.classList.contains('e-pv-hyperlink'))) {
                    _this.handleTaps(touchPoints);
                }
                if (!isBlazor() || !Browser.isDevice || _this.pdfViewer.enableDesktopMode) {
                    _this.handleTextBoxTaps(touchPoints);
                }
                var designerMode = _this.isDesignerMode(target);
                if (designerMode) {
                    _this.contextMenuModule.close();
                    // event.preventDefault();
                    if (!_this.isLongTouchPropagated) {
                        _this.longTouchTimer = setTimeout(function () {
                            if (!_this.isMoving) {
                                _this.isTouchDesignerMode = true;
                                _this.contextMenuModule.open(_this.touchClientY, _this.touchClientX, _this.viewerContainer);
                            }
                        }, 1000);
                    }
                    _this.isLongTouchPropagated = true;
                    _this.isMoving = false;
                }
                else if ((_this.pdfViewer.textSelectionModule && !_this.isTextSelectionDisabled)) {
                    _this.pdfViewer.textSelectionModule.clearTextSelection();
                    _this.contextMenuModule.close();
                    // event.preventDefault();
                    if (!_this.isLongTouchPropagated) {
                        _this.longTouchTimer = setTimeout(function () {
                            _this.viewerContainerOnLongTouch(event);
                        }, 1000);
                    }
                    _this.isLongTouchPropagated = true;
                }
            }
            // eslint-disable-next-line
            var toolbarModule = _this.pdfViewer.toolbarModule ? _this.pdfViewer.toolbarModule.annotationToolbarModule : 'null';
            if (target.classList.contains('e-pv-text') && (!toolbarModule || !toolbarModule.textMarkupToolbarElement || toolbarModule.textMarkupToolbarElement.children.length === 0)) {
                target.classList.add('e-pv-text-selection-none');
            }
            _this.diagramMouseDown(event);
            // eslint-disable-next-line max-len
            if (_this.action === 'Perimeter' || _this.action === 'Polygon' || _this.action === 'DrawTool' || _this.action === 'Drag' || _this.action.indexOf('Rotate') !== -1 || _this.action.indexOf('Resize') !== -1) {
                event.preventDefault();
            }
        };
        /**
         * @param {TouchEvent} event - The TouchEvent.
         * @returns {void}
         */
        this.viewerContainerOnLongTouch = function (event) {
            _this.touchClientX = event.touches[0].clientX;
            _this.touchClientY = event.touches[0].clientY;
            event.preventDefault();
            if (_this.pdfViewer.textSelectionModule) {
                var target = event.target;
                if (target.classList.contains('e-pv-text-selection-none')) {
                    target.classList.remove('e-pv-text-selection-none');
                }
                _this.pdfViewer.textSelectionModule.initiateTouchSelection(event, _this.touchClientX, _this.touchClientY);
                if (Browser.isDevice && !_this.pdfViewer.enableDesktopMode) {
                    clearTimeout(_this.singleTapTimer);
                    _this.tapCount = 0;
                }
            }
        };
        /**
         * @param {PointerEvent} event - The PointerEvent.
         * @returns {void}
         */
        this.viewerContainerOnPointerDown = function (event) {
            if (event.pointerType === 'touch') {
                _this.pointerCount++;
                if (_this.pointerCount <= 2) {
                    event.preventDefault();
                    _this.pointersForTouch.push(event);
                    if (_this.pointerCount === 2) {
                        _this.pointerCount = 0;
                    }
                    if (_this.pdfViewer.magnificationModule) {
                        _this.pdfViewer.magnificationModule.setTouchPoints(event.clientX, event.clientY);
                    }
                }
            }
        };
        /**
         * @param {TouchEvent} event - The TouchEvent.
         * @returns {void}
         */
        this.viewerContainerOnTouchMove = function (event) {
            if (_this.action === 'Drag') {
                _this.isMoving = true;
            }
            if (Browser.isDevice && !_this.pdfViewer.enableDesktopMode) {
                clearTimeout(_this.singleTapTimer);
                _this.tapCount = 0;
            }
            _this.preventTouchEvent(event);
            if (_this.isToolbarInkClicked) {
                event.preventDefault();
            }
            var touchPoints = event.touches;
            if (_this.pdfViewer.magnificationModule) {
                _this.isTouchScrolled = true;
                if (touchPoints.length > 1 && _this.pageCount > 0) {
                    if (Browser.isDevice && !_this.pdfViewer.enableDesktopMode) {
                        _this.isTouchScrolled = false;
                    }
                    if (_this.pdfViewer.enablePinchZoom) {
                        // eslint-disable-next-line max-len
                        _this.pdfViewer.magnificationModule.initiatePinchMove(touchPoints[0].clientX, touchPoints[0].clientY, touchPoints[1].clientX, touchPoints[1].clientY);
                    }
                }
                else if (touchPoints.length === 1 && _this.getPagesPinchZoomed()) {
                    if (Browser.isDevice && !_this.pdfViewer.enableDesktopMode) {
                        _this.isTouchScrolled = false;
                    }
                    _this.pdfViewer.magnificationModule.pinchMoveScroll();
                }
            }
            _this.mouseX = touchPoints[0].clientX;
            _this.mouseY = touchPoints[0].clientY;
            var canvas;
            // eslint-disable-next-line max-len
            if (event.target && (event.target.id.indexOf('_text') > -1 || event.target.id.indexOf('_annotationCanvas') > -1 || event.target.classList.contains('e-pv-hyperlink')) && _this.pdfViewer.annotation) {
                var pageIndex = _this.pdfViewer.annotation.getEventPageNumber(event);
                var diagram = document.getElementById(_this.pdfViewer.element.id + '_annotationCanvas_' + pageIndex);
                if (diagram) {
                    var canvas1 = diagram.getBoundingClientRect();
                    var left = canvas1.x ? canvas1.x : canvas1.left;
                    var top_3 = canvas1.y ? canvas1.y : canvas1.top;
                    canvas = new Rect(left + 10, top_3 + 10, canvas1.width - 10, canvas1.height - 10);
                }
            }
            if (canvas && canvas.containsPoint({ x: _this.mouseX, y: _this.mouseY })) {
                _this.diagramMouseMove(event);
                _this.annotationEvent = event;
            }
            else {
                _this.diagramMouseLeave(event);
                if (_this.isAnnotationDrawn) {
                    _this.diagramMouseUp(event);
                    _this.isAnnotationAdded = true;
                }
            }
            touchPoints = null;
        };
        /**
         * @param {PointerEvent} event - The TouchEvent.
         * @returns {void}
         */
        this.viewerContainerOnPointerMove = function (event) {
            if (event.pointerType === 'touch' && _this.pageCount > 0) {
                event.preventDefault();
                if (_this.pointersForTouch.length === 2) {
                    for (var i = 0; i < _this.pointersForTouch.length; i++) {
                        if (event.pointerId === _this.pointersForTouch[i].pointerId) {
                            _this.pointersForTouch[i] = event;
                            break;
                        }
                    }
                    if (_this.pdfViewer.magnificationModule && _this.pdfViewer.enablePinchZoom) {
                        // eslint-disable-next-line max-len
                        _this.pdfViewer.magnificationModule.initiatePinchMove(_this.pointersForTouch[0].clientX, _this.pointersForTouch[0].clientY, _this.pointersForTouch[1].clientX, _this.pointersForTouch[1].clientY);
                    }
                }
            }
        };
        /**
         * @param {TouchEvent} event - The TouchEvent.
         * @returns {void}
         */
        this.viewerContainerOnTouchEnd = function (event) {
            if (_this.pdfViewer.magnificationModule) {
                _this.pdfViewer.magnificationModule.pinchMoveEnd();
            }
            if (event.cancelable && !event.target.classList.contains('e-pv-touch-ellipse') && _this.pdfViewer.textSelectionModule && _this.pdfViewer.textSelectionModule.isTextSelection) {
                event.preventDefault();
            }
            _this.isLongTouchPropagated = false;
            clearInterval(_this.longTouchTimer);
            _this.longTouchTimer = null;
            if ((Browser.isDevice && !_this.pdfViewer.enableDesktopMode) && _this.isTouchScrolled) {
                _this.currentTime = new Date().getTime();
                var duration = _this.currentTime - _this.previousTime;
                // eslint-disable-next-line
                var difference = _this.scrollY - event.changedTouches[0].pageY;
                // eslint-disable-next-line
                var speed = (difference) / (duration);
                if (Math.abs(speed) > 1.5) {
                    // eslint-disable-next-line
                    var scrollTop = (difference) + ((duration) * speed);
                    _this.viewerContainer.scrollTop += scrollTop;
                    _this.updateMobileScrollerPosition();
                }
            }
            _this.diagramMouseUp(event);
            _this.renderStampAnnotation(event);
            if (!Browser.isDevice) {
                _this.focusViewerContainer();
            }
        };
        /**
         * @param {PointerEvent} event - The PointerEvent.
         * @returns {void}
         */
        this.viewerContainerOnPointerEnd = function (event) {
            if (event.pointerType === 'touch') {
                event.preventDefault();
                if (_this.pdfViewer.magnificationModule) {
                    _this.pdfViewer.magnificationModule.pinchMoveEnd();
                }
                _this.pointersForTouch = [];
                _this.pointerCount = 0;
            }
        };
        // eslint-disable-next-line
        this.viewerContainerOnScroll = function (event) {
            var proxy = null;
            proxy = _this;
            var allowServerDataBind = proxy.pdfViewer.allowServerDataBinding;
            proxy.pdfViewer.enableServerDataBinding(false);
            var scrollposX = 0;
            var scrollposY = 0;
            if (event.touches && (Browser.isDevice && !_this.pdfViewer.enableDesktopMode)) {
                // eslint-disable-next-line
                var ratio = (_this.viewerContainer.scrollHeight - _this.viewerContainer.clientHeight) / (_this.viewerContainer.clientHeight - _this.toolbarHeight);
                if (_this.isThumb) {
                    _this.ispageMoved = true;
                    event.preventDefault();
                    _this.mobilePageNoContainer.style.display = 'block';
                    scrollposX = event.touches[0].pageX - _this.scrollX;
                    scrollposY = event.touches[0].pageY - _this.viewerContainer.offsetTop;
                    _this.viewerContainer.scrollTop = scrollposY * ratio;
                    // eslint-disable-next-line
                    var containerValue = event.touches[0].pageY;
                    // eslint-disable-next-line
                    var toolbarHeight = _this.pdfViewer.toolbarModule ? 0 : 50;
                    if (_this.viewerContainer.scrollTop !== 0 && ((containerValue) <= (_this.viewerContainer.clientHeight - toolbarHeight))) {
                        _this.mobileScrollerContainer.style.top = containerValue + 'px';
                    }
                }
                else if (event.touches[0].target.className !== 'e-pv-touch-ellipse') {
                    if (!(_this.isWebkitMobile && (Browser.isDevice && !_this.pdfViewer.enableDesktopMode))) {
                        _this.mobilePageNoContainer.style.display = 'none';
                        scrollposY = _this.touchClientY - event.touches[0].pageY;
                        scrollposX = _this.touchClientX - event.touches[0].pageX;
                        _this.viewerContainer.scrollTop = _this.viewerContainer.scrollTop + (scrollposY);
                        _this.viewerContainer.scrollLeft = _this.viewerContainer.scrollLeft + (scrollposX);
                    }
                    // eslint-disable-next-line
                    _this.updateMobileScrollerPosition();
                    _this.touchClientY = event.touches[0].pageY;
                    _this.touchClientX = event.touches[0].pageX;
                }
            }
            if (_this.scrollHoldTimer) {
                clearTimeout(_this.scrollHoldTimer);
            }
            var pageIndex = _this.currentPageNumber;
            _this.scrollHoldTimer = null;
            _this.contextMenuModule.close();
            var verticalScrollValue = _this.viewerContainer.scrollTop;
            // eslint-disable-next-line max-len
            for (var i = 0; i < _this.pageCount; i++) {
                if (_this.pageSize[i] != null) {
                    var pageHeight = _this.getPageHeight(i);
                    if (pageHeight < 150) {
                        _this.pageStopValue = 75;
                    }
                    else if (pageHeight >= 150 && pageHeight < 300) {
                        _this.pageStopValue = 125;
                    }
                    else if (pageHeight >= 300 && pageHeight < 500) {
                        _this.pageStopValue = 200;
                    }
                    else {
                        _this.pageStopValue = 300;
                    }
                    // eslint-disable-next-line max-len
                    if ((verticalScrollValue + _this.pageStopValue) <= (_this.getPageTop(i) + pageHeight)) {
                        _this.currentPageNumber = i + 1;
                        _this.pdfViewer.currentPageNumber = i + 1;
                        break;
                    }
                }
            }
            // eslint-disable-next-line max-len
            if (_this.pdfViewer.magnificationModule && _this.pdfViewer.magnificationModule.fitType === 'fitToPage' && _this.currentPageNumber > 0) {
                if (_this.pageSize[_this.currentPageNumber - 1]) {
                    if (!_this.isPanMode && (!Browser.isDevice && _this.pdfViewer.enableDesktopMode)) {
                        _this.viewerContainer.scrollTop = _this.pageSize[_this.currentPageNumber - 1].top * _this.getZoomFactor();
                    }
                }
            }
            _this.renderElementsVirtualScroll(_this.currentPageNumber);
            // eslint-disable-next-line max-len
            if (!_this.isViewerMouseDown && !_this.getPinchZoomed() && !_this.getPinchScrolled() && !_this.getPagesPinchZoomed() || _this.isViewerMouseWheel) {
                _this.pageViewScrollChanged(_this.currentPageNumber);
                _this.isViewerMouseWheel = false;
            }
            else {
                _this.showPageLoadingIndicator(_this.currentPageNumber - 1, false);
            }
            if (_this.pdfViewer.toolbarModule) {
                if (!isBlazor()) {
                    _this.pdfViewer.toolbarModule.updateCurrentPage(_this.currentPageNumber);
                }
                _this.viewerContainer.setAttribute('aria-labelledby', _this.pdfViewer.element.id + '_pageDiv_' + (_this.currentPageNumber - 1));
                if (!isBlazor()) {
                    if (!Browser.isDevice || _this.pdfViewer.enableDesktopMode) {
                        _this.pdfViewer.toolbarModule.updateNavigationButtons();
                    }
                }
            }
            if (Browser.isDevice && !_this.pdfViewer.enableDesktopMode) {
                _this.mobileSpanContainer.innerHTML = _this.currentPageNumber.toString();
                _this.mobilecurrentPageContainer.innerHTML = _this.currentPageNumber.toString();
            }
            if (pageIndex !== _this.currentPageNumber) {
                if (proxy.pdfViewer.thumbnailViewModule && (!Browser.isDevice || _this.pdfViewer.enableDesktopMode)) {
                    proxy.pdfViewer.thumbnailViewModule.gotoThumbnailImage(proxy.currentPageNumber - 1);
                    proxy.pdfViewer.thumbnailViewModule.isThumbnailClicked = false;
                }
                _this.pdfViewer.firePageChange(pageIndex);
            }
            if (_this.pdfViewer.magnificationModule) {
                if (!_this.isPanMode && (!Browser.isDevice && _this.pdfViewer.enableDesktopMode)) {
                    _this.pdfViewer.magnificationModule.updatePagesForFitPage(_this.currentPageNumber - 1);
                }
            }
            var currentPage = _this.getElement('_pageDiv_' + (_this.currentPageNumber - 1));
            if (currentPage) {
                currentPage.style.visibility = 'visible';
            }
            if (_this.isViewerMouseDown) {
                if (_this.getRerenderCanvasCreated() && !_this.isPanMode) {
                    _this.pdfViewer.magnificationModule.clearIntervalTimer();
                }
                // eslint-disable-next-line
                var data = _this.getStoredData(_this.currentPageNumber);
                if (data) {
                    _this.isDataExits = true;
                    _this.initiatePageViewScrollChanged();
                    _this.isDataExits = false;
                }
                else {
                    // eslint-disable-next-line max-len
                    var timer = _this.pdfViewer.scrollSettings.delayPageRequestTimeOnScroll ? _this.pdfViewer.scrollSettings.delayPageRequestTimeOnScroll : 100;
                    _this.scrollHoldTimer = setTimeout(function () {
                        _this.initiatePageViewScrollChanged();
                    }, timer);
                }
            }
            if (_this.pdfViewer.annotation && _this.navigationPane.commentPanelContainer) {
                _this.pdfViewer.annotation.stickyNotesAnnotationModule.updateCommentPanelScrollTop(_this.currentPageNumber);
            }
            // eslint-disable-next-line max-len
            if ((Browser.isDevice && !_this.pdfViewer.enableDesktopMode) && event.touches && event.touches[0].target.className !== 'e-pv-touch-ellipse') {
                setTimeout(function () {
                    _this.updateMobileScrollerPosition();
                }, 500);
            }
            proxy.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
        };
        this.pdfViewer = viewer;
        this.navigationPane = new NavigationPane(this.pdfViewer, this);
        this.textLayer = new TextLayer(this.pdfViewer, this);
        this.signatureModule = new Signature(this.pdfViewer, this);
        this.isWebkitMobile = /Chrome/.test(navigator.userAgent) || /Google Inc/.test(navigator.vendor) || (navigator.userAgent.indexOf('Safari') !== -1);
    }
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.initializeComponent = function () {
        var element = document.getElementById(this.pdfViewer.element.id);
        if (element) {
            this.blazorUIAdaptor = isBlazor() ? new BlazorUiAdaptor(this.pdfViewer, this) : null;
            if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
                this.pdfViewer.element.classList.add('e-pv-mobile-view');
            }
            var controlWidth = '100%';
            var toolbarDiv = void 0;
            this.viewerMainContainer = isBlazor() ? element.querySelector('.e-pv-viewer-main-container') : createElement('div', { id: this.pdfViewer.element.id + '_viewerMainContainer', className: 'e-pv-viewer-main-container' });
            this.viewerContainer = isBlazor() ? element.querySelector('.e-pv-viewer-container') : createElement('div', { id: this.pdfViewer.element.id + '_viewerContainer', className: 'e-pv-viewer-container', attrs: { 'aria-label': 'pdfviewer scroll view' } });
            if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
                this.createMobilePageNumberContainer();
            }
            // eslint-disable-next-line
            this.viewerContainer.tabIndex = 0;
            if (this.pdfViewer.enableRtl) {
                this.viewerContainer.style.direction = 'rtl';
            }
            element.style.touchAction = 'pan-x pan-y';
            this.setMaximumHeight(element);
            this.mainContainer = isBlazor() ? element.querySelector('.e-pv-main-container') : createElement('div', { id: this.pdfViewer.element.id + '_mainContainer', className: 'e-pv-main-container' });
            this.mainContainer.appendChild(this.viewerMainContainer);
            element.appendChild(this.mainContainer);
            this.applyViewerHeight(this.mainContainer);
            if (this.pdfViewer.toolbarModule) {
                this.navigationPane.initializeNavigationPane();
                toolbarDiv = this.pdfViewer.toolbarModule.intializeToolbar(controlWidth);
            }
            else {
                if (isBlazor()) {
                    this.navigationPane.initializeNavigationPane();
                    toolbarDiv = this.pdfViewer.element.querySelector('.e-pv-toolbar');
                    if (!this.pdfViewer.enableToolbar) {
                        this.toolbarHeight = 0;
                        toolbarDiv.style.display = 'none';
                    }
                    if (!this.pdfViewer.enableNavigationToolbar && ((Browser.isDevice && this.pdfViewer.enableDesktopMode) || (!Browser.isDevice))) {
                        this.navigationPane.sideBarToolbar.style.display = 'none';
                        this.navigationPane.sideBarToolbarSplitter.style.display = 'none';
                        if (this.navigationPane.isBookmarkOpen || this.navigationPane.isThumbnailOpen) {
                            this.navigationPane.updateViewerContainerOnClose();
                        }
                    }
                }
            }
            if (toolbarDiv) {
                this.viewerContainer.style.height = this.updatePageHeight(this.pdfViewer.element.getBoundingClientRect().height, 56);
            }
            else {
                this.viewerContainer.style.height = this.updatePageHeight(this.pdfViewer.element.getBoundingClientRect().height, 0);
            }
            var viewerWidth = this.pdfViewer.element.clientWidth;
            if (!Browser.isDevice || this.pdfViewer.enableDesktopMode) {
                viewerWidth = viewerWidth - (this.navigationPane.sideBarToolbar ? this.navigationPane.getViewerContainerLeft() : 0) -
                    (this.navigationPane.commentPanelContainer ? this.navigationPane.getViewerContainerRight() : 0);
            }
            this.viewerContainer.style.width = viewerWidth + 'px';
            this.viewerMainContainer.appendChild(this.viewerContainer);
            if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
                this.mobileScrollerContainer.style.left = (viewerWidth - parseFloat(this.mobileScrollerContainer.style.width)) + 'px';
                this.mobilePageNoContainer.style.left = (viewerWidth / 2) - (parseFloat(this.mobilePageNoContainer.style.width) / 2) + 'px';
                this.mobilePageNoContainer.style.top = (this.pdfViewer.element.clientHeight / 2) + 'px';
                this.mobilePageNoContainer.style.display = 'none';
                this.mobilePageNoContainer.appendChild(this.mobilecurrentPageContainer);
                this.mobilePageNoContainer.appendChild(this.mobilenumberContainer);
                this.mobilePageNoContainer.appendChild(this.mobiletotalPageContainer);
                this.viewerContainer.appendChild(this.mobilePageNoContainer);
                this.viewerMainContainer.appendChild(this.mobileScrollerContainer);
                this.mobileScrollerContainer.appendChild(this.mobileSpanContainer);
            }
            this.pageContainer = createElement('div', { id: this.pdfViewer.element.id + '_pageViewContainer', className: 'e-pv-page-container', attrs: { 'tabindex': '0', 'aria-label': 'pdfviewer Page View' } });
            if (this.pdfViewer.enableRtl) {
                this.pageContainer.style.direction = 'ltr';
            }
            this.viewerContainer.appendChild(this.pageContainer);
            this.pageContainer.style.width = this.viewerContainer.clientWidth + 'px';
            if (toolbarDiv && this.pdfViewer.thumbnailViewModule && (!Browser.isDevice || this.pdfViewer.enableDesktopMode)) {
                this.pdfViewer.thumbnailViewModule.createThumbnailContainer();
            }
            this.createPrintPopup();
            if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
                this.createGoToPagePopup();
            }
            var waitingPopup = createElement('div', { id: this.pdfViewer.element.id + '_loadingIndicator' });
            this.viewerContainer.appendChild(waitingPopup);
            createSpinner({ target: waitingPopup, cssClass: 'e-spin-center' });
            this.setLoaderProperties(waitingPopup);
            if (isBlazor()) {
                this.contextMenuModule = new BlazorContextMenu(this.pdfViewer, this);
                // eslint-disable-next-line
                var spinnerElement = document.getElementsByClassName(this.pdfViewer.element.id + '_spinner');
                if (spinnerElement && spinnerElement[0] && (!spinnerElement[0].classList.contains('e-spin-hide'))) {
                    spinnerElement[0].classList.remove('e-spin-show');
                    spinnerElement[0].classList.add('e-spin-hide');
                }
            }
            else {
                this.contextMenuModule = new ContextMenu(this.pdfViewer, this);
            }
            this.contextMenuModule.createContextMenu();
            this.createFileInputElement();
            this.wireEvents();
            if (this.pdfViewer.textSearchModule && (!Browser.isDevice || this.pdfViewer.enableDesktopMode)) {
                this.pdfViewer.textSearchModule.createTextSearchBox();
            }
            if (this.pdfViewer.documentPath) {
                if (isBlazor()) {
                    this.pdfViewer._dotnetInstance.invokeMethodAsync('LoadDocumentFromClient', this.pdfViewer.documentPath);
                }
                else {
                    this.pdfViewer.load(this.pdfViewer.documentPath, null);
                }
            }
            if (this.pdfViewer.annotationModule) {
                this.pdfViewer.annotationModule.initializeCollection();
            }
        }
        if (Browser.isDevice && this.pdfViewer.enableDesktopMode && this.pdfViewer.toolbarModule) {
            this.pdfViewer.interactionMode = 'Pan';
        }
    };
    PdfViewerBase.prototype.createMobilePageNumberContainer = function () {
        this.mobilePageNoContainer = createElement('div', { id: this.pdfViewer.element.id + '_mobilepagenoContainer', className: 'e-pv-mobilepagenoscroll-container' });
        this.mobilecurrentPageContainer = createElement('span', { id: this.pdfViewer.element.id + '_mobilecurrentpageContainer', className: 'e-pv-mobilecurrentpage-container' });
        this.mobilenumberContainer = createElement('span', { id: this.pdfViewer.element.id + '_mobiledashedlineContainer', className: 'e-pv-mobiledashedline-container' });
        this.mobiletotalPageContainer = createElement('span', { id: this.pdfViewer.element.id + '_mobiletotalpageContainer', className: 'e-pv-mobiletotalpage-container' });
        this.mobileScrollerContainer = createElement('div', { id: this.pdfViewer.element.id + '_mobilescrollContainer', className: 'e-pv-mobilescroll-container' });
        this.mobileSpanContainer = createElement('span', { id: this.pdfViewer.element.id + '_mobilespanContainer', className: 'e-pv-mobilespanscroll-container' });
        this.mobileSpanContainer.innerHTML = '1';
        this.mobilecurrentPageContainer.innerHTML = '1';
        this.mobilenumberContainer.innerHTML = '&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;';
        this.mobileScrollerContainer.style.cssFloat = 'right';
        this.mobileScrollerContainer.style.width = '40px';
        this.mobileScrollerContainer.style.height = '32px';
        this.mobileScrollerContainer.style.zIndex = '100';
        this.mobilePageNoContainer.style.width = '120px';
        this.mobilePageNoContainer.style.height = '100px';
        this.mobilePageNoContainer.style.zIndex = '100';
        this.mobilePageNoContainer.style.position = 'fixed';
        this.mobileScrollerContainer.addEventListener('touchstart', this.mobileScrollContainerDown.bind(this));
        this.mobileScrollerContainer.addEventListener('touchend', this.mobileScrollContainerEnd.bind(this));
        this.mobileScrollerContainer.style.display = 'none';
    };
    /**
     * @private
     * @param  {string} documentData - file name or base64 string.
     * @param {string} password - password of the PDF document.
     * @returns {void}
     */
    PdfViewerBase.prototype.initiatePageRender = function (documentData, password) {
        this.loadedData = documentData;
        this.documentId = this.createGUID();
        if (this.viewerContainer) {
            this.viewerContainer.scrollTop = 0;
        }
        this.showLoadingIndicator(true);
        this.hashId = ' ';
        this.isFileName = false;
        this.saveDocumentInfo();
        if (this.pdfViewer.interactionMode === 'Pan') {
            this.initiatePanning();
        }
        documentData = this.checkDocumentData(documentData);
        this.setFileName();
        if (this.pdfViewer.downloadFileName) {
            this.downloadFileName = this.pdfViewer.downloadFileName;
        }
        else {
            this.downloadFileName = this.pdfViewer.fileName;
        }
        var jsonObject = this.constructJsonObject(documentData, password);
        this.createAjaxRequest(jsonObject, documentData, password);
    };
    /**
     * @private
     */
    PdfViewerBase.prototype.initiateLoadDocument = function (documentId, isFileName, fileName) {
        if (documentId) {
            this.documentId = documentId;
        }
        if (this.viewerContainer) {
            this.viewerContainer.scrollTop = 0;
        }
        this.showLoadingIndicator(true);
        this.hashId = ' ';
        this.isFileName = isFileName;
        this.saveDocumentInfo();
        if (this.pdfViewer.interactionMode === 'Pan') {
            this.initiatePanning();
        }
        this.setFileName();
        if (this.pdfViewer.fileName === null) {
            if (isFileName && fileName) {
                this.pdfViewer.fileName = fileName;
                this.jsonDocumentId = this.pdfViewer.fileName;
            }
            else {
                this.pdfViewer.fileName = 'undefined.pdf';
                this.jsonDocumentId = null;
            }
        }
        if (this.pdfViewer.downloadFileName) {
            this.downloadFileName = this.pdfViewer.downloadFileName;
        }
        else {
            this.downloadFileName = this.pdfViewer.fileName;
        }
    };
    /**
     * @private
     */
    PdfViewerBase.prototype.loadSuccess = function (documentDetails, password) {
        // eslint-disable-next-line
        var data = documentDetails;
        if (data) {
            if (typeof data !== 'object') {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    this.onControlError(500, data, this.pdfViewer.serverActionSettings.load);
                    data = null;
                }
            }
            if (data) {
                while (typeof data !== 'object') {
                    data = JSON.parse(data);
                    // eslint-disable-next-line
                    if (typeof parseInt(data) === 'number' && !isNaN(parseInt(data))) {
                        // eslint-disable-next-line
                        data = parseInt(data);
                        break;
                    }
                }
                if (data.StatusText && (data.StatusText === 'File Does not Exist')) {
                    this.showLoadingIndicator(false);
                }
                // eslint-disable-next-line
                if (data.uniqueId === this.documentId || (typeof parseInt(data) === 'number' && !isNaN(parseInt(data)))) {
                    this.pdfViewer.fireAjaxRequestSuccess(this.pdfViewer.serverActionSettings.load, data);
                    this.requestSuccess(data, null, password);
                }
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.mobileScrollContainerDown = function (event) {
        this.ispageMoved = false;
        this.isThumb = true;
        if (this.isTextMarkupAnnotationModule()) {
            // eslint-disable-next-line max-len
            if (this.pdfViewer.annotationModule.textMarkupAnnotationModule.selectTextMarkupCurrentPage != null && (Browser.isDevice && !this.pdfViewer.enableDesktopMode)) {
                var pageNumber = this.pdfViewer.annotationModule.textMarkupAnnotationModule.selectTextMarkupCurrentPage;
                this.pdfViewer.annotationModule.textMarkupAnnotationModule.selectTextMarkupCurrentPage = null;
                this.pdfViewer.annotationModule.textMarkupAnnotationModule.clearAnnotationSelection(pageNumber);
                this.pdfViewer.toolbar.showToolbar(true);
            }
        }
        this.mobileScrollerContainer.addEventListener('touchmove', this.viewerContainerOnScroll.bind(this), true);
    };
    /**
     * @private
     * @param {MouseEvent} e - default mouse event.
     * @returns {PointModel} - retuns the bounds.
     */
    PdfViewerBase.prototype.relativePosition = function (e) {
        // eslint-disable-next-line
        var currentRect = this.viewerContainer.getBoundingClientRect();
        var left = e.clientX - currentRect.left;
        var top = e.clientY - currentRect.top;
        return { x: left, y: top };
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.setMaximumHeight = function (element) {
        // eslint-disable-next-line
        var currentRect = element.getBoundingClientRect();
        if ((!Browser.isDevice || this.pdfViewer.enableDesktopMode) || (currentRect && currentRect.height === 0)) {
            element.style.minHeight = '500px';
        }
        this.updateWidth();
        this.updateHeight();
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.applyViewerHeight = function (element) {
        // eslint-disable-next-line
        var currentRect = element.getBoundingClientRect();
        if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && currentRect && currentRect.height === 0) {
            element.style.minHeight = '500px';
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.updateWidth = function () {
        if (this.pdfViewer.width.toString() !== 'auto') {
            // eslint-disable-next-line
            this.pdfViewer.element.style.width = this.pdfViewer.width;
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.updateHeight = function () {
        if (this.pdfViewer.height.toString() !== 'auto') {
            // eslint-disable-next-line
            this.pdfViewer.element.style.height = this.pdfViewer.height;
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.updateViewerContainer = function () {
        var sideBarContentContainer = this.getElement('_sideBarContentContainer');
        if (sideBarContentContainer && sideBarContentContainer.style.display === 'none') {
            this.navigationPane.updateViewerContainerOnClose();
        }
        else if (sideBarContentContainer && sideBarContentContainer.style.display === 'block') {
            this.navigationPane.updateViewerContainerOnExpand();
        }
        else {
            this.updateViewerContainerSize();
        }
        // eslint-disable-next-line
        var toolbarModule = this.pdfViewer.toolbarModule;
        if (toolbarModule) {
            if (isBlazor()) {
                if (this.pdfViewer.enableToolbar || this.pdfViewer.enableAnnotationToolbar) {
                    this.pdfViewer._dotnetInstance.invokeMethodAsync('RefreshToolbarItems');
                }
            }
            else {
                if (this.pdfViewer.enableToolbar) {
                    toolbarModule.toolbar.refreshOverflow();
                }
                if (this.pdfViewer.enableAnnotationToolbar && toolbarModule.annotationToolbarModule) {
                    toolbarModule.annotationToolbarModule.toolbar.refreshOverflow();
                }
            }
        }
    };
    PdfViewerBase.prototype.updateViewerContainerSize = function () {
        this.viewerContainer.style.width = this.pdfViewer.element.clientWidth + 'px';
        this.pageContainer.style.width = this.viewerContainer.offsetWidth + 'px';
        this.updateZoomValue();
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.mobileScrollContainerEnd = function (event) {
        if (!this.ispageMoved) {
            this.goToPagePopup.show();
        }
        this.isThumb = false;
        this.ispageMoved = false;
        this.mobileScrollerContainer.removeEventListener('touchmove', this.viewerContainerOnScroll.bind(this), true);
        this.mobilePageNoContainer.style.display = 'none';
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.createAjaxRequest = function (jsonObject, documentData, password) {
        var proxy = null;
        proxy = this;
        if (this.pdfViewer.serverActionSettings) {
            this.loadRequestHandler = new AjaxHandler(this.pdfViewer);
            this.loadRequestHandler.url = this.pdfViewer.serviceUrl + '/' + this.pdfViewer.serverActionSettings.load;
            this.loadRequestHandler.responseType = 'json';
            this.loadRequestHandler.mode = true;
            // eslint-disable-next-line
            jsonObject['action'] = 'Load';
            // eslint-disable-next-line
            jsonObject['elementId'] = this.pdfViewer.element.id;
            this.loadRequestHandler.send(jsonObject);
            // eslint-disable-next-line
            this.loadRequestHandler.onSuccess = function (result) {
                // eslint-disable-next-line
                var data = result.data;
                if (data) {
                    if (typeof data !== 'object') {
                        try {
                            data = JSON.parse(data);
                        }
                        catch (error) {
                            proxy.onControlError(500, data, this.pdfViewer.serverActionSettings.load);
                            data = null;
                        }
                    }
                    if (data) {
                        while (typeof data !== 'object') {
                            data = JSON.parse(data);
                            // eslint-disable-next-line
                            if (typeof parseInt(data) === 'number' && !isNaN(parseInt(data))) {
                                // eslint-disable-next-line
                                data = parseInt(data);
                                break;
                            }
                        }
                        // eslint-disable-next-line
                        if (data.uniqueId === proxy.documentId || (typeof parseInt(data) === 'number' && !isNaN(parseInt(data)))) {
                            proxy.updateFormFieldName(data);
                            proxy.pdfViewer.fireAjaxRequestSuccess(this.pdfViewer.serverActionSettings.load, data);
                            proxy.requestSuccess(data, documentData, password);
                        }
                    }
                }
                else {
                    proxy.showLoadingIndicator(false);
                    proxy.openImportExportNotificationPopup(proxy.pdfViewer.localeObj.getConstant('Import PDF Failed'));
                }
            };
            // eslint-disable-next-line
            this.loadRequestHandler.onFailure = function (result) {
                var statusString = result.status.toString().split('')[0];
                if (statusString === '4') {
                    proxy.openNotificationPopup('Client error');
                }
                else {
                    proxy.openNotificationPopup();
                }
                proxy.showLoadingIndicator(false);
                proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.load);
            };
            // eslint-disable-next-line
            this.loadRequestHandler.onError = function (result) {
                proxy.openNotificationPopup();
                proxy.showLoadingIndicator(false);
                // eslint-disable-next-line
                proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.load);
            };
        }
    };
    // EJ2-60380 - As of now, in form designer the element name is taken fromfield.ActualFieldName (with hypen) but for
    // Form fields it is taken from field.FieldName (without hypen).
    // For this reason when user taken the form feilds on button click, name of the form feilds are different with and without form designer module
    // eslint-disable-next-line
    PdfViewerBase.prototype.updateFormFieldName = function (data) {
        if (data && data.PdfRenderedFormFields && data.PdfRenderedFormFields.length > 0) {
            var field = void 0;
            for (var i = 0; i < data.PdfRenderedFormFields.length; i++) {
                field = data.PdfRenderedFormFields[i];
                if (field) {
                    if (field.ActualFieldName) {
                        field.FieldName = field.ActualFieldName;
                    }
                }
            }
        }
    };
    /**
     * @private
     * @param {string} errorString - The message to be displayed.
     * @returns {void}
     */
    PdfViewerBase.prototype.openNotificationPopup = function (errorString) {
        var _this = this;
        if (this.pdfViewer.showNotificationDialog) {
            if (errorString === 'Client error') {
                if (isBlazor()) {
                    var promise = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_Clienterror');
                    promise.then(function (value) {
                        _this.textLayer.createNotificationPopup(value);
                    });
                }
                else {
                    this.textLayer.createNotificationPopup(this.pdfViewer.localeObj.getConstant('Client error'));
                }
            }
            else {
                if (isBlazor()) {
                    var promise = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_Servererror');
                    promise.then(function (value) {
                        _this.textLayer.createNotificationPopup(value);
                    });
                }
                else {
                    this.textLayer.createNotificationPopup(this.pdfViewer.localeObj.getConstant('Server error'));
                }
            }
            if (this.getElement('_notify')) {
                this.getElement('_notify').classList.add('e-pv-notification-large-content');
            }
        }
    };
    /**
     * @private
     * @param {string} errorString - The message to be shown.
     * @returns {void}
     */
    PdfViewerBase.prototype.showNotificationPopup = function (errorString) {
        if (!this.pdfViewer.showNotificationDialog && errorString !== '') {
            this.textLayer.createNotificationPopup(errorString);
            if (this.getElement('_notify')) {
                this.getElement('_notify').classList.add('e-pv-notification-large-content');
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.requestSuccess = function (data, documentData, password) {
        if (data && data.pageCount !== undefined) {
            if (isBlazor() && this.isPassword) {
                this.isPassword = false;
                this.isPasswordAvailable = false;
                this.pdfViewer._dotnetInstance.invokeMethodAsync('ClosePasswordDialog');
            }
            if (password && password != '') {
                this.passwordData = password;
            }
            this.pdfViewer.allowServerDataBinding = false;
            this.pageCount = data.pageCount;
            this.pdfViewer.pageCount = data.pageCount;
            this.hashId = data.hashId;
            this.documentLiveCount = data.documentLiveCount;
            this.isAnnotationCollectionRemoved = false;
            this.saveDocumentHashData();
            this.saveFormfieldsData(data);
            this.pdfViewer.allowServerDataBinding = true;
            this.pageRender(data);
            // eslint-disable-next-line
            var pageData = { pageCount: data.pageCount, pageSizes: data.pageSizes };
            window.sessionStorage.setItem(this.documentId + '_pagedata', JSON.stringify(pageData));
            if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
                this.mobileScrollerContainer.style.display = '';
                // eslint-disable-next-line
                var toolbarHeight = this.pdfViewer.toolbarModule ? this.toolbarHeight : 0;
                this.mobileScrollerContainer.style.top = (toolbarHeight) + 'px';
            }
            this.restrictionList = data.RestrictionSummary;
            this.RestrictionEnabled(this.restrictionList, false);
        }
        else {
            this.pageCount = 0;
            this.currentPageNumber = 0;
            if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
                this.mobileScrollerContainer.style.display = 'none';
            }
            if (data === 4) {
                if (!isBlazor()) {
                    // 4 is error code for encrypted document.
                    this.renderPasswordPopup(documentData, password);
                }
            }
            else if (data === 3) {
                if (!isBlazor()) {
                    // 3 is error code for corrupted document.
                    this.renderCorruptPopup();
                }
            }
            if (this.pdfViewer.toolbarModule) {
                this.pdfViewer.toolbarModule.updateToolbarItems();
            }
        }
        // eslint-disable-next-line
        var annotationModule = this.pdfViewer.annotationModule;
        // eslint-disable-next-line max-len
        if (annotationModule && annotationModule.textMarkupAnnotationModule && annotationModule.textMarkupAnnotationModule.isEnableTextMarkupResizer(annotationModule.textMarkupAnnotationModule.currentTextMarkupAddMode)) {
            annotationModule.textMarkupAnnotationModule.createAnnotationSelectElement();
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.RestrictionEnabled = function (restrictionSummary, isEnable) {
        if (restrictionSummary) {
            for (var i = 0; i < restrictionSummary.length; i++) {
                this.EnableRestriction(restrictionSummary[i], isEnable);
                if (!isBlazor()) {
                    if (this.pdfViewer.toolbarModule) {
                        this.pdfViewer.toolbarModule.DisableToolbarItems(restrictionSummary[i], isEnable);
                    }
                }
                else {
                    if (this.pdfViewer.toolbarModule) {
                        this.pdfViewer._dotnetInstance.invokeMethodAsync('RestrictToolbarItems', restrictionSummary, isEnable);
                    }
                }
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.EnableRestriction = function (restrictionSummary, isEnable) {
        switch (restrictionSummary) {
            case 'Print':
                this.pdfViewer.enablePrint = isEnable;
                break;
            case 'CopyContent':
                this.pdfViewer.enableTextSelection = isEnable;
                break;
            case 'FillFields':
                this.pdfViewer.enableFormFields = isEnable;
                this.enableFormFieldButton(isEnable);
                break;
            case 'EditAnnotations':
                this.pdfViewer.enableAnnotation = isEnable;
                break;
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.pageRender = function (data) {
        this.document = null;
        this.passwordDialogReset();
        if (this.passwordPopup) {
            this.passwordPopup.hide();
        }
        var pageIndex = 0;
        this.initPageDiv(data);
        this.currentPageNumber = pageIndex + 1;
        this.pdfViewer.currentPageNumber = pageIndex + 1;
        this.previousZoomValue = this.pdfViewer.zoomValue;
        var isZoomMode = false;
        if (this.pdfViewer.magnificationModule) {
            this.pdfViewer.magnificationModule.isAutoZoom = true;
            if (this.pdfViewer.zoomValue && this.pdfViewer.zoomValue > 0) {
                if (this.pdfViewer.zoomValue !== 100) {
                    isZoomMode = true;
                }
                this.isInitialPageMode = true;
                this.pdfViewer.magnification.zoomTo(this.pdfViewer.zoomValue);
            }
            if (this.pdfViewer.zoomMode === 'FitToWidth') {
                this.isInitialPageMode = true;
                this.pdfViewer.magnificationModule.fitToWidth();
            }
            else if (this.pdfViewer.zoomMode === 'FitToPage') {
                this.isInitialPageMode = true;
                this.pdfViewer.magnificationModule.fitToPage();
            }
            this.documentLoaded = true;
            this.pdfViewer.magnificationModule.isInitialLoading = true;
            this.onWindowResize();
            this.documentLoaded = false;
            this.pdfViewer.magnificationModule.isInitialLoading = false;
        }
        this.isDocumentLoaded = true;
        // eslint-disable-next-line
        var viewPortWidth = 816;
        // eslint-disable-next-line radix
        viewPortWidth = parseInt(viewPortWidth);
        var pageWidth = this.pageSize[pageIndex].width;
        if (this.renderedPagesList.indexOf(pageIndex) === -1 && !isZoomMode) {
            this.createRequestForRender(pageIndex);
            var pageNumber = pageIndex + 1;
            if (pageNumber < this.pageCount) {
                this.createRequestForRender(pageNumber);
                pageNumber = pageNumber + 1;
            }
            if (this.pageSize[pageNumber]) {
                var pageTop = this.getPageTop(pageNumber);
                var viewerHeight = this.viewerContainer.clientHeight;
                while (viewerHeight > pageTop) {
                    if (this.pageSize[pageNumber]) {
                        this.renderPageElement(pageNumber);
                        this.createRequestForRender(pageNumber);
                        pageTop = this.getPageTop(pageNumber);
                        pageNumber = pageNumber + 1;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        this.showLoadingIndicator(false);
        if (!isBlazor()) {
            if (this.pdfViewer.toolbarModule) {
                this.pdfViewer.toolbarModule.uploadedDocumentName = null;
                this.pdfViewer.toolbarModule.updateCurrentPage(this.currentPageNumber);
                this.pdfViewer.toolbarModule.updateToolbarItems();
                if (this.pdfViewer.toolbar && this.pdfViewer.toolbar.annotationToolbarModule) {
                    this.pdfViewer.toolbar.annotationToolbarModule.enableAnnotationAddTools(true);
                }
                // eslint-disable-next-line max-len
                this.viewerContainer.setAttribute('aria-labelledby', this.pdfViewer.element.id + '_pageDiv_' + (this.currentPageNumber - 1));
            }
        }
        if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
            this.mobileSpanContainer.innerHTML = this.currentPageNumber.toString();
            this.mobilecurrentPageContainer.innerHTML = this.currentPageNumber.toString();
        }
    };
    PdfViewerBase.prototype.renderPasswordPopup = function (documentData, password) {
        var _this = this;
        if (!isBlazor()) {
            if (!this.isPasswordAvailable) {
                if (this.isFileName) {
                    this.document = documentData;
                }
                else {
                    this.document = 'data:application/pdf;base64,' + documentData;
                }
                this.isPasswordAvailable = true;
                this.createPasswordPopup();
                this.pdfViewer.fireDocumentLoadFailed(true, null);
                this.passwordPopup.show();
            }
            else {
                this.pdfViewer.fireDocumentLoadFailed(true, password);
                this.promptElement.classList.add('e-pv-password-error');
                this.promptElement.textContent = this.pdfViewer.localeObj.getConstant('Invalid Password');
                this.promptElement.focus();
                if (this.isFileName) {
                    this.document = documentData;
                }
                else {
                    this.document = 'data:application/pdf;base64,' + documentData;
                }
                this.passwordPopup.show();
            }
        }
        else {
            // eslint-disable-next-line
            var promptElement_1 = document.getElementById(this.pdfViewer.element.id + '_prompt');
            var promise = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_EnterPassword');
            promise.then(function (value) {
                promptElement_1.textContent = value;
            });
            // eslint-disable-next-line
            var passwordInput_1 = document.querySelector('#' + this.pdfViewer.element.id + '_password_input');
            passwordInput_1.addEventListener('keyup', function () {
                if (passwordInput_1.value === '') {
                    _this.passwordDialogReset();
                }
            });
            passwordInput_1.addEventListener('focus', function () {
                passwordInput_1.parentElement.classList.add('e-input-focus');
            });
            passwordInput_1.addEventListener('blur', function () {
                passwordInput_1.parentElement.classList.remove('e-input-focus');
            });
            if (!this.isPasswordAvailable) {
                if (this.isFileName) {
                    this.document = documentData;
                }
                else {
                    this.document = 'data:application/pdf;base64,' + documentData;
                }
                this.isPasswordAvailable = true;
                this.pdfViewer.fireDocumentLoadFailed(true, null);
            }
            else {
                this.pdfViewer.fireDocumentLoadFailed(true, password);
                promptElement_1.classList.add('e-pv-password-error');
                var promise_1 = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_InvalidPassword');
                promise_1.then(function (value) {
                    promptElement_1.textContent = value;
                });
                promptElement_1.focus();
                if (this.isFileName) {
                    this.document = documentData;
                }
                else {
                    this.document = 'data:application/pdf;base64,' + documentData;
                }
            }
            this.pdfViewer._dotnetInstance.invokeMethodAsync('OpenPasswordDialog');
        }
    };
    PdfViewerBase.prototype.renderCorruptPopup = function () {
        this.pdfViewer.fireDocumentLoadFailed(false, null);
        this.documentId = null;
        if (this.pdfViewer.showNotificationDialog) {
            if (!isBlazor()) {
                this.createCorruptedPopup();
                this.corruptPopup.show();
            }
            else {
                this.pdfViewer._dotnetInstance.invokeMethodAsync('OpenCorruptedDialog');
            }
        }
    };
    PdfViewerBase.prototype.constructJsonObject = function (documentData, password) {
        var jsonObject;
        if (password) {
            this.isPasswordAvailable = true;
            this.passwordData = password;
            // eslint-disable-next-line max-len
            jsonObject = { document: documentData, password: password, zoomFactor: "1", isFileName: this.isFileName.toString(), uniqueId: this.documentId };
        }
        else {
            this.isPasswordAvailable = false;
            this.passwordData = '';
            jsonObject = { document: documentData, zoomFactor: "1", isFileName: this.isFileName.toString(), uniqueId: this.documentId };
        }
        return jsonObject;
    };
    PdfViewerBase.prototype.checkDocumentData = function (documentData) {
        var base64String = documentData.split('base64,')[1];
        if (base64String === undefined) {
            this.isFileName = true;
            this.jsonDocumentId = documentData;
            if (this.pdfViewer.fileName === null) {
                // eslint-disable-next-line max-len
                var documentStringArray = (documentData.indexOf('\\') !== -1) ? documentData.split('\\') : documentData.split('/');
                this.pdfViewer.fileName = documentStringArray[documentStringArray.length - 1];
                this.jsonDocumentId = this.pdfViewer.fileName;
                base64String = documentData;
            }
        }
        else {
            this.jsonDocumentId = null;
        }
        return base64String;
    };
    PdfViewerBase.prototype.setFileName = function () {
        if (this.pdfViewer.fileName === null) {
            if (this.pdfViewer.toolbarModule && this.pdfViewer.toolbarModule.uploadedDocumentName) {
                this.pdfViewer.fileName = this.pdfViewer.toolbarModule.uploadedDocumentName;
                this.jsonDocumentId = this.pdfViewer.fileName;
            }
            else {
                this.pdfViewer.fileName = 'undefined.pdf';
                this.jsonDocumentId = null;
            }
        }
    };
    PdfViewerBase.prototype.saveDocumentInfo = function () {
        window.sessionStorage.setItem('currentDocument', this.documentId);
        window.sessionStorage.setItem('serviceURL', this.pdfViewer.serviceUrl);
        if (this.pdfViewer.serverActionSettings) {
            window.sessionStorage.setItem('unload', this.pdfViewer.serverActionSettings.unload);
        }
    };
    PdfViewerBase.prototype.saveDocumentHashData = function () {
        var hashId = '';
        if (Browser.isIE || Browser.info.name === 'edge') {
            hashId = encodeURI(this.hashId);
        }
        else {
            hashId = this.hashId;
        }
        window.sessionStorage.setItem('hashId', hashId);
        if (this.documentLiveCount) {
            window.sessionStorage.setItem('documentLiveCount', this.documentLiveCount.toString());
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.saveFormfieldsData = function (data) {
        this.pdfViewer.isFormFieldDocument = false;
        this.enableFormFieldButton(false);
        if (data && data.PdfRenderedFormFields && data.PdfRenderedFormFields.length > 0) {
            if (this.formfieldvalue) {
                if (this.pdfViewer.formFieldsModule) {
                    this.setItemInSessionStorage(this.formfieldvalue, '_formfields');
                }
                this.formfieldvalue = null;
            }
            else if (this.pdfViewer.formFieldsModule) {
                for (var i = 0; i < data.PdfRenderedFormFields.length; i++) {
                    if (data.PdfRenderedFormFields[i].FieldName == '') {
                        data.PdfRenderedFormFields.splice(i, 1);
                    }
                }
                this.setItemInSessionStorage(data.PdfRenderedFormFields, '_formfields');
            }
            if (this.pdfViewer.enableFormFields && this.pdfViewer.formFieldsModule) {
                this.pdfViewer.formFieldsModule.formFieldCollections();
            }
            if (this.pdfViewer.formFieldCollections.length > 0) {
                this.pdfViewer.isFormFieldDocument = true;
                this.enableFormFieldButton(true);
            }
        }
    };
    /**
     * @param {boolean} isEnable - Enable or disable the toolbar itema.
     * @returns {void}
     * @private
     */
    PdfViewerBase.prototype.enableFormFieldButton = function (isEnable) {
        if (isEnable) {
            this.pdfViewer.isFormFieldDocument = true;
        }
        if (this.pdfViewer.toolbarModule && this.pdfViewer.toolbarModule.submitItem) {
            this.pdfViewer.toolbarModule.toolbar.enableItems(this.pdfViewer.toolbarModule.submitItem.parentElement, isEnable);
        }
    };
    PdfViewerBase.prototype.updateWaitingPopup = function (pageNumber) {
        if (this.pageSize[pageNumber].top != null) {
            // eslint-disable-next-line max-len
            var pageCurrentRect = this.getElement('_pageDiv_' + pageNumber).getBoundingClientRect();
            var waitingPopup = this.getElement('_pageDiv_' + pageNumber).firstChild.firstChild;
            if (pageCurrentRect.top < 0) {
                if (this.toolbarHeight + (this.viewerContainer.clientHeight / 2) - pageCurrentRect.top < pageCurrentRect.height) {
                    waitingPopup.style.top = ((this.viewerContainer.clientHeight / 2) - pageCurrentRect.top) - this.toolbarHeight + 'px';
                }
                else {
                    if (this.toolbarHeight + (pageCurrentRect.bottom / 2) - pageCurrentRect.top < pageCurrentRect.height) {
                        waitingPopup.style.top = ((pageCurrentRect.bottom / 2) - pageCurrentRect.top) - this.toolbarHeight + 'px';
                    }
                }
            }
            else {
                waitingPopup.style.top = this.viewerContainer.clientHeight / 2 + 'px';
            }
            if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && pageCurrentRect.width > this.viewerContainer.clientWidth) {
                waitingPopup.style.left = (this.viewerContainer.clientWidth / 2) + (this.viewerContainer.scrollLeft) + 'px';
            }
            else if (this.getZoomFactor() > 1.25 && pageCurrentRect.width > this.viewerContainer.clientWidth) {
                waitingPopup.style.left = this.viewerContainer.clientWidth / 2 + 'px';
            }
            else {
                waitingPopup.style.left = pageCurrentRect.width / 2 + 'px';
            }
        }
    };
    /**
     * @private
     * @returns {number} - returned the page value.
     */
    PdfViewerBase.prototype.getActivePage = function (isPageNumber) {
        if (this.activeElements && !isNullOrUndefined(this.activeElements.activePageID)) {
            if (isPageNumber) {
                return this.activeElements.activePageID + 1;
            }
            else {
                return this.activeElements.activePageID;
            }
        }
        else {
            if (isPageNumber) {
                return this.currentPageNumber;
            }
            else {
                return this.currentPageNumber - 1;
            }
        }
    };
    PdfViewerBase.prototype.createWaitingPopup = function (pageNumber) {
        // eslint-disable-next-line max-len
        var waitingPopup = document.getElementById(this.pdfViewer.element.id + '_pageDiv_' + pageNumber);
        if (waitingPopup) {
            createSpinner({ target: waitingPopup });
            this.setLoaderProperties(waitingPopup);
        }
    };
    PdfViewerBase.prototype.showLoadingIndicator = function (isShow) {
        var waitingPopup = this.getElement('_loadingIndicator');
        if (waitingPopup) {
            if (isShow) {
                waitingPopup.style.display = 'block';
                showSpinner(waitingPopup);
            }
            else {
                waitingPopup.style.display = 'none';
                hideSpinner(waitingPopup);
            }
        }
    };
    PdfViewerBase.prototype.showPageLoadingIndicator = function (pageIndex, isShow) {
        var waitingPopup = this.getElement('_pageDiv_' + pageIndex);
        if (waitingPopup != null) {
            if (isShow) {
                showSpinner(waitingPopup);
            }
            else {
                hideSpinner(waitingPopup);
            }
            this.updateWaitingPopup(pageIndex);
        }
    };
    /**
     * @param {boolean} isShow - Show or hide print loading indicator.
     * @returns {void}
     * @private
     */
    PdfViewerBase.prototype.showPrintLoadingIndicator = function (isShow) {
        var printWaitingPopup = this.getElement('_printLoadingIndicator');
        if (printWaitingPopup != null) {
            if (isShow) {
                this.printMainContainer.style.display = 'block';
                showSpinner(printWaitingPopup);
            }
            else {
                this.printMainContainer.style.display = 'none';
                hideSpinner(printWaitingPopup);
            }
        }
    };
    PdfViewerBase.prototype.setLoaderProperties = function (element) {
        var spinnerElement = element.firstChild.firstChild.firstChild;
        if (spinnerElement) {
            spinnerElement.style.height = '48px';
            spinnerElement.style.width = '48px';
            spinnerElement.style.transformOrigin = '24px 24px 24px';
        }
    };
    /**
     * @param {number} pageNumber - Specify the pageNumber.
     * @returns {void}
     * @private
     */
    PdfViewerBase.prototype.updateScrollTop = function (pageNumber) {
        var _this = this;
        // eslint-disable-next-line
        if (this.pageSize[pageNumber] != null) {
            this.renderElementsVirtualScroll(pageNumber);
            this.viewerContainer.scrollTop = this.getPageTop(pageNumber);
            if (this.renderedPagesList.indexOf(pageNumber) === -1) {
                this.createRequestForRender(pageNumber);
            }
            setTimeout(function () {
                var currentPageNumber = pageNumber + 1;
                if (currentPageNumber !== _this.currentPageNumber) {
                    _this.pdfViewer.currentPageNumber = currentPageNumber;
                    _this.currentPageNumber = currentPageNumber;
                    if (_this.pdfViewer.toolbarModule) {
                        _this.pdfViewer.toolbarModule.updateCurrentPage(currentPageNumber);
                    }
                }
            }, 100);
        }
    };
    /**
     * @private
     * @returns {number} - Returns the zoom factor value.
     */
    PdfViewerBase.prototype.getZoomFactor = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.zoomFactor;
        }
        else {
            // default value
            return 1;
        }
    };
    /**
     * @private
     * @returns {boolean} - Returns whether the pinch zoom is performed or not.
     */
    PdfViewerBase.prototype.getPinchZoomed = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.isPinchZoomed;
        }
        else {
            // default value
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} -Returns whether the zoom is performed or not.
     */
    PdfViewerBase.prototype.getMagnified = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.isMagnified;
        }
        else {
            // default value
            return false;
        }
    };
    PdfViewerBase.prototype.getPinchScrolled = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.isPinchScrolled;
        }
        else {
            // default value
            return false;
        }
    };
    PdfViewerBase.prototype.getPagesPinchZoomed = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.isPagePinchZoomed;
        }
        else {
            // default value
            return false;
        }
    };
    PdfViewerBase.prototype.getPagesZoomed = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.isPagesZoomed;
        }
        else {
            // default value
            return false;
        }
    };
    PdfViewerBase.prototype.getRerenderCanvasCreated = function () {
        if (this.pdfViewer.magnificationModule) {
            return this.pdfViewer.magnificationModule.isRerenderCanvasCreated;
        }
        else {
            // default value
            return false;
        }
    };
    /**
     * @private
     * @returns {string} - retrun the docuumentid.
     */
    PdfViewerBase.prototype.getDocumentId = function () {
        return this.documentId;
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.download = function () {
        if (this.pageCount > 0) {
            this.createRequestForDownload();
        }
    };
    /**
     * @private
     * @returns {promise<Blob>} - Returns the blob object.
     */
    PdfViewerBase.prototype.saveAsBlob = function () {
        var _this = this;
        if (this.pageCount > 0) {
            return new Promise(function (resolve, reject) {
                _this.saveAsBlobRequest().then(function (value) {
                    resolve(value);
                });
            });
        }
        return null;
    };
    PdfViewerBase.prototype.saveAsBlobRequest = function () {
        var _this = this;
        var proxy = null;
        proxy = this;
        var promise = new Promise(function (resolve, reject) {
            // eslint-disable-next-line
            var jsonObject = proxy.constructJsonDownload();
            _this.dowonloadRequestHandler = new AjaxHandler(_this.pdfViewer);
            _this.dowonloadRequestHandler.url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.download;
            _this.dowonloadRequestHandler.responseType = 'text';
            _this.dowonloadRequestHandler.send(jsonObject);
            // eslint-disable-next-line
            _this.dowonloadRequestHandler.onSuccess = function (result) {
                // eslint-disable-next-line
                var data = result.data;
                if (data) {
                    if (typeof data === 'object') {
                        data = JSON.parse(data);
                    }
                    if (typeof data !== 'object' && data.indexOf('data:application/pdf') === -1) {
                        proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.download);
                        data = null;
                    }
                    if (data) {
                        proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.download, data);
                        var blobUrl = proxy.createBlobUrl(data.split('base64,')[1], 'application/pdf');
                        resolve(blobUrl);
                    }
                }
            };
            // eslint-disable-next-line
            _this.dowonloadRequestHandler.onFailure = function (result) {
                proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.download);
            };
            // eslint-disable-next-line
            _this.dowonloadRequestHandler.onError = function (result) {
                proxy.openNotificationPopup();
                proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.download);
            };
        });
        return promise;
    };
    /**
     * @param {boolean} isTriggerEvent - check to trigger the event.
     * @returns {void}
     * @private
     */
    PdfViewerBase.prototype.clear = function (isTriggerEvent) {
        var proxy = this;
        var pdfViewer = proxy.pdfViewer;
        var printModule = pdfViewer.printModule;
        var textSearchModule = pdfViewer.textSearchModule;
        var bookmarkViewModule = pdfViewer.bookmarkViewModule;
        var thumbnailViewModule = pdfViewer.thumbnailView;
        var annotationModule = pdfViewer.annotation;
        var magnificationModule = pdfViewer.magnificationModule;
        var textSelectionModule = pdfViewer.textSelectionModule;
        var formFieldsModule = pdfViewer.formFieldsModule;
        var signatureModule = proxy.signatureModule;
        proxy.isPasswordAvailable = false;
        proxy.isDocumentLoaded = false;
        proxy.isInitialLoaded = false;
        proxy.isImportAction = false;
        proxy.annotationPageList = [];
        proxy.annotationComments = null;
        pdfViewer.annotationCollection = [];
        pdfViewer.signatureCollection = [];
        pdfViewer.formFieldCollection = [];
        proxy.isAnnotationCollectionRemoved = false;
        proxy.documentAnnotationCollections = null;
        proxy.isDrawnCompletely = false;
        proxy.annotationRenderredList = [];
        proxy.isImportAction = false;
        proxy.isImportedAnnotation = false;
        proxy.importedAnnotation = [];
        proxy.isStorageExceed = false;
        proxy.annotationStorage = {};
        proxy.formFieldStorage = {};
        proxy.downloadCollections = {};
        proxy.annotationEvent = null;
        proxy.highestWidth = 0;
        proxy.highestHeight = 0;
        proxy.requestLists = [];
        proxy.tilerequestLists = [];
        proxy.isToolbarInkClicked = false;
        pdfViewer.formFieldCollections = [];
        proxy.passwordData = '';
        proxy.isFocusField = false;
        proxy.focusField = [];
        proxy.updateDocumentEditedProperty(false);
        if (pdfViewer.formDesignerModule) {
            pdfViewer.formDesignerModule.formFieldIndex = 0;
            if (proxy.activeElements) {
                pdfViewer.clearSelection(proxy.activeElements.activePageID);
            }
            pdfViewer.zIndexTable = [];
        }
        proxy.initiateTextSelectMode();
        proxy.RestrictionEnabled(proxy.restrictionList, true);
        proxy.restrictionList = null;
        if (!Browser.isDevice || pdfViewer.enableDesktopMode) {
            if (proxy.navigationPane.sideBarToolbar) {
                proxy.navigationPane.clear();
            }
        }
        if (!isBlazor() && Browser.isDevice || !pdfViewer.enableDesktopMode) {
            proxy.navigationPane.clear();
        }
        if (thumbnailViewModule) {
            thumbnailViewModule.clear();
        }
        if (bookmarkViewModule) {
            bookmarkViewModule.clear();
        }
        if (magnificationModule) {
            magnificationModule.isMagnified = false;
            magnificationModule.clearIntervalTimer();
        }
        if (textSelectionModule) {
            textSelectionModule.clearTextSelection();
        }
        if (textSearchModule) {
            textSearchModule.resetTextSearch();
        }
        if (annotationModule) {
            annotationModule.clear();
            annotationModule.initializeCollection();
        }
        if (formFieldsModule) {
            formFieldsModule.readOnlyCollection = [];
            formFieldsModule.signatureFieldCollection = [];
            formFieldsModule.currentTarget = null;
        }
        if (signatureModule) {
            signatureModule.signaturecollection = [];
            signatureModule.outputcollection = [];
        }
        if (proxy.pageSize) {
            proxy.pageSize = [];
        }
        if (proxy.renderedPagesList) {
            proxy.renderedPagesList = [];
        }
        if (proxy.pageContainer) {
            while (proxy.pageContainer.hasChildNodes()) {
                proxy.pageContainer.removeChild(proxy.pageContainer.lastChild);
            }
        }
        if (proxy.pageCount > 0) {
            proxy.unloadDocument(proxy);
            // eslint-disable-next-line
            proxy.textLayer.characterBound = new Array();
            proxy.loadRequestHandler && proxy.loadRequestHandler.clear();
            proxy.virtualLoadRequestHandler && proxy.virtualLoadRequestHandler.clear();
            proxy.pageRequestHandler && proxy.pageRequestHandler.clear();
            proxy.dowonloadRequestHandler && proxy.dowonloadRequestHandler.clear();
            proxy.importAnnotationRequestHandler && proxy.importAnnotationRequestHandler.clear();
            proxy.exportAnnotationRequestHandler && proxy.exportAnnotationRequestHandler.clear();
            proxy.importFormFieldsRequestHandler && proxy.importFormFieldsRequestHandler.clear();
            proxy.exportFormFieldsRequestHandler && proxy.exportFormFieldsRequestHandler.clear();
            if (printModule && printModule.printRequestHandler) {
                printModule.printRequestHandler.clear();
            }
        }
        proxy.windowSessionStorageClear();
        if (proxy.pinchZoomStorage) {
            proxy.pinchZoomStorage = [];
        }
        if ((proxy.previousZoomValue || proxy.previousZoomValue === 0) && proxy.previousZoomValue !== pdfViewer.zoomValue) {
            pdfViewer.zoomValue = proxy.previousZoomValue;
        }
        if (isTriggerEvent && proxy.pageCount > 0) {
            pdfViewer.fireDocumentUnload(this.pdfViewer.fileName);
        }
        this.pdfViewer.fileName = null;
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.destroy = function () {
        if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
            this.pdfViewer.element.classList.remove('e-pv-mobile-view');
        }
        this.unWireEvents();
        this.clear(false);
        this.pageContainer.parentNode ? this.pageContainer.parentNode.removeChild(this.pageContainer) : null;
        this.viewerContainer.parentNode ? this.viewerContainer.parentNode.removeChild(this.viewerContainer) : null;
        if (this.contextMenuModule) {
            var contextMenuElement = this.contextMenuModule.contextMenuElement;
            contextMenuElement && contextMenuElement.ej2_instances && contextMenuElement.ej2_instances.length > 0 ? this.contextMenuModule.destroy() : null;
        }
        if (this.pdfViewer.toolbarModule) {
            this.navigationPane.destroy();
        }
        var measureElement = document.getElementById('measureElement');
        if (measureElement) {
            measureElement = undefined;
        }
    };
    /**
     * @param {PdfViewerBase} proxy - PdfviewerBase class.
     * @returns {void}
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.unloadDocument = function (proxy) {
        var documentId = '';
        if (Browser.isIE || Browser.info.name === 'edge') {
            documentId = decodeURI(window.sessionStorage.getItem('hashId'));
        }
        else {
            documentId = proxy.hashId ? proxy.hashId : window.sessionStorage.getItem('hashId');
        }
        var documentLiveCount = window.sessionStorage.getItem('documentLiveCount');
        if (documentId !== null) {
            // eslint-disable-next-line max-len
            var jsonObject = { hashId: documentId, documentLiveCount: documentLiveCount, action: 'Unload', elementId: proxy.pdfViewer.element.id };
            var actionName = window.sessionStorage.getItem('unload');
            if (window.sessionStorage.getItem('serviceURL') && window.sessionStorage.getItem('serviceURL') !== 'undefined') {
                try {
                    // eslint-disable-next-line
                    var browserSupportsKeepalive = 'keepalive' in new Request('');
                    if (browserSupportsKeepalive) {
                        // eslint-disable-next-line
                        var headerValue = this.setUnloadRequestHeaders();
                        var credentialsData = this.pdfViewer.ajaxRequestSettings.withCredentials ? 'include' : 'omit';
                        fetch(window.sessionStorage.getItem('serviceURL') + '/' + actionName, {
                            method: 'POST',
                            credentials: credentialsData,
                            headers: headerValue,
                            body: JSON.stringify(jsonObject)
                        });
                    }
                }
                catch (error) {
                    this.unloadRequestHandler = new AjaxHandler(this.pdfViewer);
                    this.unloadRequestHandler.send(jsonObject);
                }
            }
            else if (isBlazor()) {
                this.clearCache(actionName, jsonObject, proxy);
            }
        }
        if (this.pdfViewer.magnificationModule) {
            this.pdfViewer.magnificationModule.zoomFactor = 1;
        }
        this.formFieldCollection = [];
        window.sessionStorage.removeItem('hashId');
        window.sessionStorage.removeItem('documentLiveCount');
        if (this.documentId) {
            window.sessionStorage.removeItem(this.documentId + '_formfields');
            window.sessionStorage.removeItem(this.documentId + '_formDesigner');
            window.sessionStorage.removeItem(this.documentId + '_annotations_shape');
            window.sessionStorage.removeItem(this.documentId + '_annotations_shape_measure');
            window.sessionStorage.removeItem(this.documentId + '_annotations_stamp');
            window.sessionStorage.removeItem(this.documentId + '_annotations_sticky');
            window.sessionStorage.removeItem(this.documentId + '_annotations_textMarkup');
            window.sessionStorage.removeItem(this.documentId + '_annotations_freetext');
            window.sessionStorage.removeItem(this.documentId + '_formfields');
            window.sessionStorage.removeItem(this.documentId + '_annotations_sign');
            window.sessionStorage.removeItem(this.documentId + '_annotations_ink');
        }
    };
    PdfViewerBase.prototype.clearCache = function (actionName, jsonObject, proxy) {
        this.unloadRequestHandler = new AjaxHandler(this.pdfViewer);
        this.unloadRequestHandler.url = window.sessionStorage.getItem('serviceURL') + '/' + actionName;
        this.unloadRequestHandler.mode = false;
        this.unloadRequestHandler.responseType = null;
        this.unloadRequestHandler.send(jsonObject);
        // eslint-disable-next-line
        this.unloadRequestHandler.onSuccess = function (result) {
            // eslint-disable-next-line
            var data = result.data;
            if (data) {
                if (typeof data !== 'object') {
                    if (data.indexOf('Document') === -1) {
                        proxy.onControlError(500, data, actionName);
                        data = null;
                    }
                }
                if (data) {
                    proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.unload, data);
                }
            }
        };
        // eslint-disable-next-line
        this.unloadRequestHandler.onFailure = function (result) {
            proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, actionName);
        };
        // eslint-disable-next-line
        this.unloadRequestHandler.onError = function (result) {
            proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, actionName);
        };
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.setUnloadRequestHeaders = function () {
        // eslint-disable-next-line
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json;charset=UTF-8');
        for (var i = 0; i < this.pdfViewer.ajaxRequestSettings.ajaxHeaders.length; i++) {
            // eslint-disable-next-line max-len
            myHeaders.append(this.pdfViewer.ajaxRequestSettings.ajaxHeaders[i].headerName, this.pdfViewer.ajaxRequestSettings.ajaxHeaders[i].headerValue);
        }
        return myHeaders;
    };
    PdfViewerBase.prototype.windowSessionStorageClear = function () {
        window.sessionStorage.removeItem('currentDocument');
        window.sessionStorage.removeItem('serviceURL');
        window.sessionStorage.removeItem('unload');
        for (var i = 0; i < this.sessionStorage.length; i++) {
            window.sessionStorage.removeItem(this.sessionStorage[i]);
        }
    };
    PdfViewerBase.prototype.updateCommentPanel = function () {
        // eslint-disable-next-line
        var moreOptionsButton = document.querySelectorAll('#' + this.pdfViewer.element.id + '_more-options');
        for (var i = 0; i < moreOptionsButton.length; i++) {
            moreOptionsButton[i].style.visibility = 'hidden';
        }
        // eslint-disable-next-line
        var commentTextBox = document.querySelectorAll('.e-pv-new-comments-div');
        for (var j = 0; j < commentTextBox.length; j++) {
            commentTextBox[j].style.display = 'none';
        }
        // eslint-disable-next-line
        var commentContainer = document.querySelectorAll('.e-pv-comments-border');
        for (var j = 0; j < commentContainer.length; j++) {
            commentContainer[j].classList.remove('e-pv-comments-border');
        }
        // eslint-disable-next-line
        var editableElement = document.querySelectorAll('.e-editable-inline');
        for (var j = 0; j < editableElement.length; j++) {
            editableElement[j].style.display = 'none';
        }
        // eslint-disable-next-line
        var commentSelect = document.querySelectorAll('.e-pv-comments-select');
        for (var z = 0; z < commentSelect.length; z++) {
            commentSelect[z].classList.remove('e-pv-comments-select');
        }
        // eslint-disable-next-line
        var commentsDiv = document.querySelectorAll('.e-pv-comments-div');
        for (var j = 0; j < commentsDiv.length; j++) {
            commentsDiv[j].style.minHeight = 60 + 'px';
        }
    };
    /**
     * @param {boolean} isMouseDown - check whether the mouse down is triggered.
     * @returns {void}
     * @private
     */
    PdfViewerBase.prototype.focusViewerContainer = function (isMouseDown) {
        var scrollX = window.scrollX;
        var scrollY = window.scrollY;
        // eslint-disable-next-line
        var parentNode = this.getScrollParent(this.viewerContainer);
        var scrollNodeX = 0;
        var scrollNodeY = 0;
        if (parentNode !== null) {
            scrollNodeX = parentNode.scrollLeft;
            scrollNodeY = parentNode.scrollTop;
        }
        this.viewerContainer.focus();
        if (this.currentPageNumber > 0) {
            this.viewerContainer.setAttribute('aria-labelledby', this.pdfViewer.element.id + '_pageDiv_' + (this.currentPageNumber - 1));
        }
        if (this.pdfViewer.annotation && this.pdfViewer.annotation.stickyNotesAnnotationModule.accordionContainer) {
            this.updateCommentPanel();
        }
        // eslint-disable-next-line max-len
        if ((navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge') !== -1) && parentNode !== null) {
            parentNode.scrollLeft = scrollNodeX;
            parentNode.scrollTop = scrollNodeY;
        }
        else if (parentNode !== null) {
            parentNode.scrollTo(scrollNodeX, scrollNodeY);
        }
        window.scrollTo(scrollX, scrollY);
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.getScrollParent = function (node) {
        if (node === null || node.nodeName === 'HTML') {
            return null;
        }
        var style = getComputedStyle(node);
        if (this.viewerContainer.id !== node.id && (style.overflowY === 'scroll' || style.overflowY === 'auto')) {
            return node;
        }
        else {
            return this.getScrollParent(node.parentNode);
        }
    };
    PdfViewerBase.prototype.createCorruptedPopup = function () {
        var _this = this;
        // eslint-disable-next-line max-len
        var popupElement = createElement('div', { id: this.pdfViewer.element.id + '_corrupted_popup', className: 'e-pv-corrupted-popup' });
        this.pageContainer.appendChild(popupElement);
        this.corruptPopup = new Dialog({
            showCloseIcon: true, closeOnEscape: true, isModal: true,
            // eslint-disable-next-line max-len
            header: '<div class="e-pv-corrupted-popup-header"> ' + this.pdfViewer.localeObj.getConstant('File Corrupted') + '</div>', visible: false,
            // eslint-disable-next-line max-len
            buttons: [{ buttonModel: { content: this.pdfViewer.localeObj.getConstant('OK'), isPrimary: true }, click: this.closeCorruptPopup.bind(this) }],
            target: this.pdfViewer.element, beforeClose: function () {
                _this.corruptPopup.destroy();
                _this.getElement('_corrupted_popup').remove();
                _this.corruptPopup = null;
                var waitingPopup = _this.getElement('_loadingIndicator');
                if (waitingPopup != null) {
                    hideSpinner(waitingPopup);
                }
            }
        });
        if (this.pdfViewer.enableRtl) {
            // eslint-disable-next-line max-len
            this.corruptPopup.content = '<div id="templatertl" class="e-pv-notification-icon-rtl"> <div class="e-pv-corrupted-popup-content-rtl" tabindex="0">' + this.pdfViewer.localeObj.getConstant('File Corrupted Content') + '</div></div>';
            this.corruptPopup.enableRtl = true;
        }
        else {
            // eslint-disable-next-line max-len
            this.corruptPopup.content = '<div id="template" class="e-pv-notification-icon"> <div class="e-pv-corrupted-popup-content" tabindex="0">' + this.pdfViewer.localeObj.getConstant('File Corrupted Content') + '</div></div>';
        }
        this.corruptPopup.appendTo(popupElement);
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.hideLoadingIndicator = function () {
        var waitingPopup = this.getElement('_loadingIndicator');
        if (waitingPopup !== null) {
            hideSpinner(waitingPopup);
        }
    };
    PdfViewerBase.prototype.closeCorruptPopup = function () {
        this.corruptPopup.hide();
        var waitingPopup = this.getElement('_loadingIndicator');
        if (waitingPopup !== null) {
            hideSpinner(waitingPopup);
        }
    };
    PdfViewerBase.prototype.createPrintPopup = function () {
        var element = document.getElementById(this.pdfViewer.element.id);
        this.printMainContainer = createElement('div', {
            id: this.pdfViewer.element.id + '_printcontainer',
            className: 'e-pv-print-popup-container'
        });
        element.appendChild(this.printMainContainer);
        this.printMainContainer.style.display = 'none';
        var printWaitingPopup = createElement('div', {
            id: this.pdfViewer.element.id + '_printLoadingIndicator',
            className: 'e-pv-print-loading-container'
        });
        this.printMainContainer.appendChild(printWaitingPopup);
        createSpinner({ target: printWaitingPopup, cssClass: 'e-spin-center' });
        this.setLoaderProperties(printWaitingPopup);
    };
    PdfViewerBase.prototype.createGoToPagePopup = function () {
        var _this = this;
        // eslint-disable-next-line max-len
        var popupElement = createElement('div', { id: this.pdfViewer.element.id + '_goTopage_popup', className: 'e-pv-gotopage-popup' });
        this.goToPageElement = createElement('span', { id: this.pdfViewer.element.id + '_prompt' });
        this.goToPageElement.textContent = this.pdfViewer.localeObj.getConstant('Enter pagenumber');
        popupElement.appendChild(this.goToPageElement);
        var inputContainer = createElement('span', { className: 'e-pv-text-input' });
        // eslint-disable-next-line max-len
        this.goToPageInput = createElement('input', { id: this.pdfViewer.element.id + '_page_input', className: 'e-input' });
        this.goToPageInput.type = 'text';
        this.goToPageInput.style.maxWidth = '80%';
        this.pageNoContainer = createElement('span', { className: '.e-pv-number-ofpages' });
        inputContainer.appendChild(this.goToPageInput);
        inputContainer.appendChild(this.pageNoContainer);
        popupElement.appendChild(inputContainer);
        this.pageContainer.appendChild(popupElement);
        this.goToPagePopup = new Dialog({
            showCloseIcon: true, closeOnEscape: false, isModal: true,
            header: this.pdfViewer.localeObj.getConstant('GoToPage'), visible: false, buttons: [
                {
                    buttonModel: { content: this.pdfViewer.localeObj.getConstant('Cancel') },
                    click: this.GoToPageCancelClick.bind(this)
                },
                // eslint-disable-next-line max-len
                {
                    buttonModel: { content: this.pdfViewer.localeObj.getConstant('Apply'), disabled: true, cssClass: 'e-pv-gotopage-apply-btn', isPrimary: true },
                    click: this.GoToPageApplyClick.bind(this)
                }
            ], close: this.closeGoToPagePopUp.bind(this)
        });
        if (this.pdfViewer.enableRtl) {
            this.goToPagePopup.enableRtl = true;
        }
        this.goToPagePopup.appendTo(popupElement);
        if (!isBlazor()) {
            var goToPageTextBox = new NumericTextBox({ format: '##', showSpinButton: false });
            goToPageTextBox.appendTo(this.goToPageInput);
        }
        this.goToPageInput.addEventListener('keyup', function () {
            // eslint-disable-next-line
            var inputValue = _this.goToPageInput.value;
            if (inputValue !== '' && parseFloat(inputValue) > 0 && (_this.pdfViewer.pageCount + 1) > parseFloat(inputValue)) {
                _this.EnableApplyButton();
            }
            else {
                _this.DisableApplyButton();
            }
        });
    };
    PdfViewerBase.prototype.closeGoToPagePopUp = function () {
        this.goToPageInput.value = '';
        this.DisableApplyButton();
    };
    PdfViewerBase.prototype.EnableApplyButton = function () {
        // eslint-disable-next-line
        var popupElements = document.getElementsByClassName('e-pv-gotopage-apply-btn')[0];
        popupElements.removeAttribute('disabled');
    };
    PdfViewerBase.prototype.DisableApplyButton = function () {
        // eslint-disable-next-line
        var popupElements = document.getElementsByClassName('e-pv-gotopage-apply-btn')[0];
        popupElements.setAttribute('disabled', true);
    };
    PdfViewerBase.prototype.GoToPageCancelClick = function () {
        this.goToPagePopup.hide();
    };
    PdfViewerBase.prototype.GoToPageApplyClick = function () {
        this.goToPagePopup.hide();
        // eslint-disable-next-line
        var pageNumber = this.goToPageInput.value;
        this.pdfViewer.navigation.goToPage(pageNumber);
        this.updateMobileScrollerPosition();
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.updateMobileScrollerPosition = function () {
        if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && this.mobileScrollerContainer) {
            // eslint-disable-next-line
            var ratio = (this.viewerContainer.scrollHeight - this.viewerContainer.clientHeight) / (this.viewerContainer.clientHeight - 56);
            // eslint-disable-next-line
            var differenceRatio = (this.viewerContainer.scrollTop) / ratio;
            // eslint-disable-next-line
            var toolbarHeight = this.pdfViewer.toolbarModule ? this.toolbarHeight : 0;
            this.mobileScrollerContainer.style.top = (toolbarHeight + differenceRatio) + 'px';
        }
    };
    PdfViewerBase.prototype.createPasswordPopup = function () {
        var _this = this;
        // eslint-disable-next-line max-len
        var popupElement = createElement('div', { id: this.pdfViewer.element.id + '_password_popup', className: 'e-pv-password-popup', attrs: { 'tabindex': '-1' } });
        this.promptElement = createElement('span', { id: this.pdfViewer.element.id + '_prompt', attrs: { 'tabindex': '-1' } });
        this.promptElement.textContent = this.pdfViewer.localeObj.getConstant('Enter Password');
        popupElement.appendChild(this.promptElement);
        var inputContainer = createElement('span', { className: 'e-input-group e-pv-password-input' });
        // eslint-disable-next-line max-len
        this.passwordInput = createElement('input', { id: this.pdfViewer.element.id + '_password_input', className: 'e-input' });
        this.passwordInput.type = 'password';
        this.passwordInput.name = 'Required';
        inputContainer.appendChild(this.passwordInput);
        popupElement.appendChild(inputContainer);
        this.pageContainer.appendChild(popupElement);
        this.passwordPopup = new Dialog({
            showCloseIcon: true, closeOnEscape: false, isModal: true,
            header: this.pdfViewer.localeObj.getConstant('Password Protected'), visible: false,
            close: this.passwordCancel.bind(this), target: this.pdfViewer.element, beforeClose: function () {
                _this.passwordPopup.destroy();
                _this.getElement('_password_popup').remove();
                _this.passwordPopup = null;
                var waitingPopup = _this.getElement('_loadingIndicator');
                if (waitingPopup != null) {
                    hideSpinner(waitingPopup);
                }
            }
        });
        if (!Browser.isDevice || this.pdfViewer.enableDesktopMode) {
            this.passwordPopup.buttons = [
                {
                    buttonModel: { content: this.pdfViewer.localeObj.getConstant('OK'), isPrimary: true },
                    click: this.applyPassword.bind(this)
                },
                { buttonModel: { content: this.pdfViewer.localeObj.getConstant('Cancel') }, click: this.passwordCancelClick.bind(this) }
            ];
        }
        else {
            this.passwordPopup.buttons = [
                { buttonModel: { content: this.pdfViewer.localeObj.getConstant('Cancel') }, click: this.passwordCancelClick.bind(this) },
                {
                    buttonModel: { content: this.pdfViewer.localeObj.getConstant('OK'), isPrimary: true },
                    click: this.applyPassword.bind(this)
                }
            ];
        }
        if (this.pdfViewer.enableRtl) {
            this.passwordPopup.enableRtl = true;
        }
        this.passwordPopup.appendTo(popupElement);
        this.passwordInput.addEventListener('keyup', function () {
            if (_this.passwordInput.value === '') {
                _this.passwordDialogReset();
            }
        });
        this.passwordInput.addEventListener('focus', function () {
            _this.passwordInput.parentElement.classList.add('e-input-focus');
        });
        this.passwordInput.addEventListener('blur', function () {
            _this.passwordInput.parentElement.classList.remove('e-input-focus');
        });
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.passwordCancel = function (args) {
        if (args.isInteraction) {
            this.clear(false);
            this.passwordDialogReset();
            this.passwordInput.value = '';
        }
        var waitingPopup = this.getElement('_loadingIndicator');
        if (waitingPopup !== null) {
            hideSpinner(waitingPopup);
        }
    };
    PdfViewerBase.prototype.passwordCancelClick = function () {
        this.clear(false);
        this.passwordDialogReset();
        this.passwordPopup.hide();
        var waitingPopup = this.getElement('_loadingIndicator');
        if (waitingPopup !== null) {
            hideSpinner(waitingPopup);
        }
    };
    PdfViewerBase.prototype.passwordDialogReset = function () {
        if (!isBlazor()) {
            if (this.promptElement) {
                this.promptElement.classList.remove('e-pv-password-error');
                this.promptElement.textContent = this.pdfViewer.localeObj.getConstant('Enter Password');
                this.passwordInput.value = '';
            }
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.applyPassword = function () {
        if (!isBlazor()) {
            var password = this.passwordInput.value;
            if (password !== '') {
                this.pdfViewer.load(this.document, password);
            }
        }
        this.focusViewerContainer();
    };
    PdfViewerBase.prototype.createFileInputElement = function () {
        if (Browser.isDevice || !this.pdfViewer.enableDesktopMode) {
            // eslint-disable-next-line max-len
            if (this.pdfViewer.enableAnnotationToolbar && this.pdfViewer.toolbarModule && this.pdfViewer.toolbarModule.annotationToolbarModule) {
                this.pdfViewer.toolbarModule.annotationToolbarModule.createCustomStampElement();
            }
            if (this.signatureModule) {
                this.signatureModule.createSignatureFileElement();
            }
        }
    };
    PdfViewerBase.prototype.wireEvents = function () {
        var _this = this;
        this.viewerContainer.addEventListener('scroll', this.viewerContainerOnScroll, true);
        if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
            this.viewerContainer.addEventListener('touchmove', this.viewerContainerOnScroll, true);
        }
        this.viewerContainer.addEventListener('mousedown', this.viewerContainerOnMousedown);
        this.viewerContainer.addEventListener('mouseup', this.viewerContainerOnMouseup);
        this.viewerContainer.addEventListener('wheel', this.viewerContainerOnMouseWheel);
        this.viewerContainer.addEventListener('mousemove', this.viewerContainerOnMousemove);
        this.viewerContainer.addEventListener('mouseleave', this.viewerContainerOnMouseLeave);
        this.viewerContainer.addEventListener('mouseenter', this.viewerContainerOnMouseEnter);
        this.viewerContainer.addEventListener('mouseover', this.viewerContainerOnMouseOver);
        this.viewerContainer.addEventListener('click', this.viewerContainerOnClick);
        this.viewerContainer.addEventListener('dblclick', this.viewerContainerOnClick);
        this.viewerContainer.addEventListener('dragstart', this.viewerContainerOnDragStart);
        this.pdfViewer.element.addEventListener('keydown', this.viewerContainerOnKeyDown);
        window.addEventListener('keydown', this.onWindowKeyDown);
        window.addEventListener('mouseup', this.onWindowMouseUp);
        window.addEventListener('touchend', this.onWindowTouchEnd);
        this.unload = function () { return _this.unloadDocument(_this); };
        window.addEventListener('unload', this.unload);
        window.addEventListener('beforeunload', this.clearSessionStorage);
        window.addEventListener('resize', this.onWindowResize);
        // eslint-disable-next-line max-len
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.indexOf('Edge') !== -1 || navigator.userAgent.indexOf('Trident') !== -1) {
            this.viewerContainer.addEventListener('pointerdown', this.viewerContainerOnPointerDown);
            this.viewerContainer.addEventListener('pointermove', this.viewerContainerOnPointerMove);
            this.viewerContainer.addEventListener('pointerup', this.viewerContainerOnPointerEnd);
            this.viewerContainer.addEventListener('pointerleave', this.viewerContainerOnPointerEnd);
        }
        else {
            this.viewerContainer.addEventListener('touchstart', this.viewerContainerOnTouchStart);
            this.viewerContainer.addEventListener('touchmove', this.viewerContainerOnTouchMove);
            this.viewerContainer.addEventListener('touchend', this.viewerContainerOnTouchEnd);
            this.viewerContainer.addEventListener('touchleave', this.viewerContainerOnTouchEnd);
            this.viewerContainer.addEventListener('touchcancel', this.viewerContainerOnTouchEnd);
        }
    };
    PdfViewerBase.prototype.unWireEvents = function () {
        this.viewerContainer.removeEventListener('scroll', this.viewerContainerOnScroll, true);
        if (Browser.isDevice && !this.pdfViewer.enableDesktopMode) {
            this.viewerContainer.removeEventListener('touchmove', this.viewerContainerOnScroll, true);
        }
        this.viewerContainer.removeEventListener('mousedown', this.viewerContainerOnMousedown);
        this.viewerContainer.removeEventListener('mouseup', this.viewerContainerOnMouseup);
        this.viewerContainer.removeEventListener('wheel', this.viewerContainerOnMouseWheel);
        this.viewerContainer.removeEventListener('mousemove', this.viewerContainerOnMousemove);
        this.viewerContainer.removeEventListener('mouseleave', this.viewerContainerOnMouseLeave);
        this.viewerContainer.removeEventListener('mouseenter', this.viewerContainerOnMouseEnter);
        this.viewerContainer.removeEventListener('mouseover', this.viewerContainerOnMouseOver);
        this.viewerContainer.removeEventListener('click', this.viewerContainerOnClick);
        this.viewerContainer.removeEventListener('dragstart', this.viewerContainerOnDragStart);
        this.viewerContainer.removeEventListener('contextmenu', this.viewerContainerOnContextMenuClick);
        this.pdfViewer.element.removeEventListener('keydown', this.viewerContainerOnKeyDown);
        window.addEventListener('keydown', this.onWindowKeyDown);
        window.removeEventListener('mouseup', this.onWindowMouseUp);
        window.removeEventListener('unload', this.unload);
        window.removeEventListener('resize', this.onWindowResize);
        // eslint-disable-next-line max-len
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.indexOf('Edge') !== -1 || navigator.userAgent.indexOf('Trident') !== -1) {
            this.viewerContainer.removeEventListener('pointerdown', this.viewerContainerOnPointerDown);
            this.viewerContainer.removeEventListener('pointermove', this.viewerContainerOnPointerMove);
            this.viewerContainer.removeEventListener('pointerup', this.viewerContainerOnPointerEnd);
            this.viewerContainer.removeEventListener('pointerleave', this.viewerContainerOnPointerEnd);
        }
        else {
            this.viewerContainer.removeEventListener('touchstart', this.viewerContainerOnTouchStart);
            this.viewerContainer.removeEventListener('touchmove', this.viewerContainerOnTouchMove);
            this.viewerContainer.removeEventListener('touchend', this.viewerContainerOnTouchEnd);
            this.viewerContainer.removeEventListener('touchleave', this.viewerContainerOnTouchEnd);
            this.viewerContainer.removeEventListener('touchcancel', this.viewerContainerOnTouchEnd);
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.updateZoomValue = function () {
        if (this.pdfViewer.magnificationModule) {
            if (this.pdfViewer.magnificationModule.isAutoZoom) {
                this.pdfViewer.magnificationModule.fitToAuto();
            }
            else if (this.pdfViewer.zoomMode !== 'FitToWidth' && this.pdfViewer.magnificationModule.fitType === 'fitToWidth') {
                this.pdfViewer.magnificationModule.fitToWidth();
            }
            else if (this.pdfViewer.magnificationModule.fitType === 'fitToPage') {
                this.pdfViewer.magnificationModule.fitToPage();
            }
        }
        for (var i = 0; i < this.pageCount; i++) {
            this.applyLeftPosition(i);
        }
    };
    /**
     * @private
     * @param {any} annotation - The annotation type of any.
     * @returns {void}
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.updateFreeTextProperties = function (annotation) {
        if (this.pdfViewer.enableShapeLabel) {
            if (this.pdfViewer.shapeLabelSettings.fillColor) {
                annotation.labelFillColor = this.pdfViewer.shapeLabelSettings.fillColor;
            }
            if (this.pdfViewer.shapeLabelSettings.fontColor) {
                annotation.fontColor = this.pdfViewer.shapeLabelSettings.fontColor;
            }
            if (this.pdfViewer.shapeLabelSettings.fontSize) {
                annotation.fontSize = this.pdfViewer.shapeLabelSettings.fontSize;
            }
            if (this.pdfViewer.shapeLabelSettings.fontFamily) {
                annotation.fontFamily = this.pdfViewer.shapeLabelSettings.fontFamily;
            }
            if (this.pdfViewer.shapeLabelSettings.opacity) {
                annotation.labelOpacity = this.pdfViewer.shapeLabelSettings.opacity;
            }
            if (this.pdfViewer.shapeLabelSettings.labelContent) {
                annotation.labelContent = this.pdfViewer.shapeLabelSettings.labelContent;
            }
        }
    };
    /**
     * @private
     * @param {MouseEvent} event - The mouse event.
     * @returns {void}
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.mouseDownHandler = function (event) {
        var isEnableDelete = false;
        var isCancel;
        var hidenItems = [];
        var disabledItems = [];
        if (event && event.target) {
            this.mouseDownEvent = event;
            this.contextMenuModule.currentTarget = event.target;
        }
        if (this.pdfViewer.annotationModule) {
            isEnableDelete = this.pdfViewer.annotationModule.isEnableDelete();
        }
        if (!isEnableDelete) {
            disabledItems.push('DeleteContext');
        }
        if (this.pdfViewer.contextMenuOption === 'None') {
            isCancel = true;
        }
        else if (this.pdfViewer.textSelectionModule || this.isShapeBasedAnnotationsEnabled()) {
            if (event) {
                var isClickWithinSelectionBounds = this.isClickWithinSelectionBounds(event);
                // eslint-disable-next-line max-len
                if (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus) {
                    this.isFreeTextContextMenu = true;
                    // eslint-disable-next-line max-len
                    if (this.pdfViewer.annotation.freeTextAnnotationModule && !this.pdfViewer.annotation.freeTextAnnotationModule.isTextSelected) {
                        disabledItems.push('Cut');
                        disabledItems.push('Copy');
                    }
                    // eslint-disable-next-line max-len
                    if (this.pdfViewer.annotation.freeTextAnnotationModule && this.pdfViewer.annotation.freeTextAnnotationModule.selectedText === '') {
                        disabledItems.push('Paste');
                    }
                    hidenItems.push('HighlightContext');
                    hidenItems.push('UnderlineContext');
                    hidenItems.push('StrikethroughContext');
                    hidenItems.push('ScaleRatio');
                    hidenItems.push('Properties');
                    hidenItems.push('Comment');
                    hidenItems.push('DeleteContext');
                }
                else if (isClickWithinSelectionBounds && this.pdfViewer.textSelectionModule) {
                    // eslint-disable-next-line max-len
                    if ((!event.target.classList.contains('e-pv-maintaincontent') && event.target.classList.contains('e-pv-text') || event.target.classList.contains('e-pv-text-layer'))) {
                        if (this.checkIsNormalText()) {
                            isCancel = true;
                        }
                        // eslint-disable-next-line max-len
                    }
                    else if ((Browser.isIE || Browser.info.name === 'edge') && event.target.classList.contains('e-pv-page-container')) {
                        isCancel = true;
                    }
                    hidenItems.push('Cut');
                    hidenItems.push('Paste');
                    hidenItems.push('DeleteContext');
                    hidenItems.push('ScaleRatio');
                    hidenItems.push('Comment');
                    hidenItems.push('Properties');
                    // eslint-disable-next-line max-len
                }
                else if (this.pdfViewer.selectedItems.annotations.length !== 0 && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'HandWrittenSignature' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureText' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureImage')) {
                    this.shapeMenuItems(hidenItems, disabledItems, false, true);
                    // eslint-disable-next-line max-len
                }
                else if (this.pdfViewer.selectedItems.annotations.length !== 0 && this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType !== 'Path') {
                    this.shapeMenuItems(hidenItems, disabledItems, true);
                }
                else {
                    // eslint-disable-next-line max-len
                    if (this.pdfViewer.annotation && this.pdfViewer.annotation.isShapeCopied && (event.target.classList.contains('e-pv-text-layer') ||
                        event.target.classList.contains('e-pv-text')) && !this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                        hidenItems.push('Properties');
                        this.shapeMenuItems(hidenItems, disabledItems, false);
                        // eslint-disable-next-line max-len
                    }
                    else if (this.isCalibrateAnnotationModule() && this.pdfViewer.annotationModule.measureAnnotationModule.currentAnnotationMode) {
                        hidenItems.push('HighlightContext');
                        hidenItems.push('UnderlineContext');
                        hidenItems.push('StrikethroughContext');
                        hidenItems.push('Properties');
                        disabledItems.push('Cut');
                        disabledItems.push('Copy');
                        disabledItems.push('Paste');
                        disabledItems.push('DeleteContext');
                        disabledItems.push('Comment');
                        // eslint-disable-next-line max-len
                    }
                    else if (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                        hidenItems.push('HighlightContext');
                        hidenItems.push('UnderlineContext');
                        hidenItems.push('StrikethroughContext');
                        hidenItems.push('Properties');
                        hidenItems.push('Cut');
                        hidenItems.push('Copy');
                        hidenItems.push('Paste');
                        hidenItems.push('ScaleRatio');
                    }
                    else {
                        isCancel = true;
                    }
                }
            }
            else if (this.pdfViewer.textSelectionModule && (this.pdfViewer.contextMenuOption === 'MouseUp')) {
                hidenItems.push('Cut');
                hidenItems.push('Paste');
                hidenItems.push('DeleteContext');
                hidenItems.push('ScaleRatio');
                hidenItems.push('Comment');
                hidenItems.push('Properties');
            }
            else if (this.pdfViewer.selectedItems.annotations.length === 0) {
                hidenItems.push('Cut');
                hidenItems.push('Paste');
                hidenItems.push('DeleteContext');
                hidenItems.push('ScaleRatio');
                hidenItems.push('Properties');
            }
            if (!this.pdfViewer.enableCommentPanel) {
                disabledItems.push('Comment');
            }
        }
        else {
            isCancel = true;
        }
        var eventArgs = { hidenItems: hidenItems, disabledItems: disabledItems, isCancel: isCancel };
        this.pdfViewer._dotnetInstance.invokeMethodAsync('MouseDownHandler', eventArgs);
    };
    /**
     * @private
     * @param {string} selectedMenu - The selected menu.
     * @returns {void}
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.OnItemSelected = function (selectedMenu) {
        // eslint-disable-next-line
        var target = this.contextMenuModule.currentTarget;
        switch (selectedMenu) {
            case this.pdfViewer.localeObj.getConstant('Copy'):
                this.CopyItemSelected();
                break;
            case this.pdfViewer.localeObj.getConstant('Highlight context'):
                this.TextMarkUpSelected('Highlight');
                break;
            case this.pdfViewer.localeObj.getConstant('Underline context'):
                this.TextMarkUpSelected('Underline');
                break;
            case this.pdfViewer.localeObj.getConstant('Strikethrough context'):
                this.TextMarkUpSelected('Strikethrough');
                break;
            case this.pdfViewer.localeObj.getConstant('Properties'):
                this.PropertiesItemSelected();
                break;
            case this.pdfViewer.localeObj.getConstant('Cut'):
                this.CutItemSelected(target);
                break;
            case this.pdfViewer.localeObj.getConstant('Paste'):
                this.pasteItemSelected(target);
                break;
            case this.pdfViewer.localeObj.getConstant('Delete Context'):
                this.DeleteItemSelected();
                break;
            case this.pdfViewer.localeObj.getConstant('Scale Ratio'):
                this.ScaleRatioSelected();
                break;
            case this.pdfViewer.localeObj.getConstant('Comment'):
                this.CommentItemSelected();
                break;
            default:
                break;
        }
    };
    PdfViewerBase.prototype.CommentItemSelected = function () {
        if (this.pdfViewer.annotation) {
            this.pdfViewer.annotation.showCommentsPanel();
            if (this.pdfViewer.selectedItems.annotations.length !== 0 ||
                this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                // eslint-disable-next-line
                var currentAnnotation = void 0;
                if (this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                    currentAnnotation = this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation;
                }
                else {
                    currentAnnotation = this.pdfViewer.selectedItems.annotations[0];
                }
                // eslint-disable-next-line
                var accordionExpand = document.getElementById(this.pdfViewer.element.id + '_accordionContainer' + this.pdfViewer.currentPageNumber);
                if (accordionExpand) {
                    accordionExpand.ej2_instances[0].expandItem(true);
                }
                // eslint-disable-next-line
                var commentsDiv = document.getElementById(currentAnnotation.annotName);
                if (commentsDiv) {
                    if (!commentsDiv.classList.contains('e-pv-comments-border')) {
                        commentsDiv.firstChild.click();
                    }
                }
            }
        }
    };
    PdfViewerBase.prototype.ScaleRatioSelected = function () {
        if (this.isCalibrateAnnotationModule()) {
            this.pdfViewer.annotation.measureAnnotationModule.createScaleRatioWindow();
        }
    };
    PdfViewerBase.prototype.DeleteItemSelected = function () {
        if (this.pdfViewer.formDesignerModule && this.pdfViewer.selectedItems.formFields.length !== 0) {
            this.pdfViewer.formDesignerModule.deleteFormField(this.pdfViewer.selectedItems.formFields[0].id);
        }
        else if (this.pdfViewer.annotation) {
            this.pdfViewer.annotation.deleteAnnotation();
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.pasteItemSelected = function (target) {
        // eslint-disable-next-line max-len
        if (this.isFreeTextContextMenu || (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus) && (target && target.className === 'free-text-input' && target.tagName === 'TEXTAREA')) {
            this.pdfViewer.annotation.freeTextAnnotationModule.pasteSelectedText(target);
            this.contextMenuModule.close();
        }
        else {
            this.pdfViewer.paste();
            this.contextMenuModule.previousAction = 'Paste';
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.CutItemSelected = function (target) {
        // eslint-disable-next-line max-len
        if (this.isFreeTextContextMenu || (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus) && (target && target.className === 'free-text-input' && target.tagName === 'TEXTAREA')) {
            this.pdfViewer.annotation.freeTextAnnotationModule.cutSelectedText(target);
            this.contextMenuModule.close();
        }
        else if (this.pdfViewer.selectedItems.annotations.length === 1) {
            var pageIndex = this.pdfViewer.selectedItems.annotations[0].pageIndex;
            this.pdfViewer.cut();
            this.contextMenuModule.previousAction = 'Cut';
        }
        else if (this.pdfViewer.selectedItems.formFields.length === 1) {
            this.pdfViewer.cut();
            this.contextMenuModule.previousAction = 'Cut';
        }
    };
    PdfViewerBase.prototype.CopyItemSelected = function () {
        var isSkip = false;
        // eslint-disable-next-line max-len
        if (this.isFreeTextContextMenu || (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus)) {
            this.pdfViewer.annotation.freeTextAnnotationModule.copySelectedText();
            this.contextMenuModule.close();
            isSkip = true;
        }
        else if (this.pdfViewer.textSelectionModule) {
            this.pdfViewer.textSelectionModule.copyText();
            this.contextMenuModule.close();
        }
        if (this.pdfViewer.selectedItems.annotations.length && !isSkip) {
            this.pdfViewer.copy();
            this.contextMenuModule.previousAction = 'Copy';
        }
        else if (this.pdfViewer.selectedItems.formFields.length > 0) {
            this.pdfViewer.copy();
            this.contextMenuModule.previousAction = 'Copy';
        }
    };
    PdfViewerBase.prototype.PropertiesItemSelected = function () {
        // eslint-disable-next-line max-len
        if (this.pdfViewer.selectedItems.annotations.length !== 0 && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Line' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'LineWidthArrowHead' ||
            this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Distance')) {
            this.pdfViewer.annotation.createPropertiesWindow();
            // eslint-disable-next-line max-len
        }
        else if (this.pdfViewer.selectedItems.formFields.length !== 0 && this.pdfViewer.selectedItems.formFields[0].formFieldAnnotationType) {
            this.pdfViewer.formDesigner.createPropertiesWindow();
        }
    };
    PdfViewerBase.prototype.TextMarkUpSelected = function (type) {
        if (this.pdfViewer.annotation && this.pdfViewer.annotation.textMarkupAnnotationModule) {
            this.pdfViewer.annotation.textMarkupAnnotationModule.isSelectionMaintained = false;
            this.pdfViewer.annotation.textMarkupAnnotationModule.drawTextMarkupAnnotations(type);
            this.pdfViewer.annotation.textMarkupAnnotationModule.isTextMarkupAnnotationMode = false;
            this.pdfViewer.annotation.textMarkupAnnotationModule.currentTextMarkupAddMode = '';
            this.pdfViewer.annotation.textMarkupAnnotationModule.isSelectionMaintained = true;
        }
    };
    PdfViewerBase.prototype.shapeMenuItems = function (hidenItems, disabledItems, enableProperties, isSignature) {
        if (this.pdfViewer.annotation && !this.pdfViewer.annotation.isShapeCopied) {
            disabledItems.push('Paste');
        }
        hidenItems.push('HighlightContext');
        hidenItems.push('UnderlineContext');
        hidenItems.push('StrikethroughContext');
        hidenItems.push('ScaleRatio');
        if (enableProperties) {
            // eslint-disable-next-line max-len
            if (!(this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Line' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'LineWidthArrowHead' ||
                this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Distance')) {
                hidenItems.push('Properties');
            }
        }
        else if (isSignature) {
            hidenItems.push('Properties');
            hidenItems.push('Comment');
        }
        else {
            hidenItems.push('Cut');
            hidenItems.push('Copy');
            hidenItems.push('DeleteContext');
            hidenItems.push('Comment');
        }
    };
    PdfViewerBase.prototype.checkIsRtlText = function (text) {
        // eslint-disable-next-line max-len
        var ltrChars = 'A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02B8\\u0300-\\u0590\\u0800-\\u1FFF' + '\\u2C00-\\uFB1C\\uFDFE-\\uFE6F\\uFEFD-\\uFFFF';
        var rtlChars = '\\u0591-\\u07FF\\uFB1D-\\uFDFD\\uFE70-\\uFEFC';
        // eslint-disable-next-line
        var rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');
        return rtlDirCheck.test(text);
    };
    /**
     * @private
     * @param {any} event - Specifies the event.
     * @returns {boolean} - retruned the beolean value.
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.isClickWithinSelectionBounds = function (event) {
        var bounds;
        var isWithin = false;
        var diCount = 5;
        var negativeCount = ((this.currentPageNumber - diCount) < 0) ? 0 : this.currentPageNumber - diCount;
        var positiveCount = ((this.currentPageNumber - diCount) > this.pageCount) ? this.pageCount : this.currentPageNumber + diCount;
        if (this.pdfViewer.textSelectionModule) {
            for (var i = negativeCount; i < positiveCount; i++) {
                if (i >= 0) {
                    bounds = this.pdfViewer.textSelectionModule.getCurrentSelectionBounds(i);
                    if (bounds) {
                        var currentBound = bounds;
                        if (this.getHorizontalValue(currentBound.left, i) < event.clientX && this.getHorizontalValue(currentBound.right, i) >
                            event.clientX && this.getVerticalValue(currentBound.top, i) < event.clientY &&
                            this.getVerticalValue(currentBound.bottom, i) > event.clientY) {
                            isWithin = true;
                            break;
                        }
                    }
                }
            }
            if ((Browser.isIE || Browser.info.name === 'edge') && bounds) {
                isWithin = true;
            }
        }
        return isWithin;
    };
    PdfViewerBase.prototype.getHorizontalClientValue = function (value) {
        var pageDiv = this.getElement('_pageDiv_' + (this.currentPageNumber - 1));
        var pageBounds = pageDiv.getBoundingClientRect();
        return (value - pageBounds.left);
    };
    PdfViewerBase.prototype.getVerticalClientValue = function (value) {
        var pageDiv = this.getElement('_pageDiv_' + (this.currentPageNumber - 1));
        var pageBounds = pageDiv.getBoundingClientRect();
        return (value - pageBounds.top);
    };
    PdfViewerBase.prototype.getHorizontalValue = function (value, pageNumber) {
        var pageDiv = this.getElement('_pageDiv_' + (pageNumber || this.currentPageNumber - 1));
        var pageBounds = pageDiv.getBoundingClientRect();
        return (value * this.getZoomFactor()) + pageBounds.left;
    };
    PdfViewerBase.prototype.getVerticalValue = function (value, pageNumber) {
        var pageDiv = this.getElement('_pageDiv_' + (pageNumber || this.currentPageNumber - 1));
        var pageBounds = pageDiv.getBoundingClientRect();
        return (value * this.getZoomFactor()) + pageBounds.top;
    };
    /**
     * @private
     * @returns {boolean} - retruned the beolean value.
     */
    PdfViewerBase.prototype.checkIsNormalText = function () {
        var isText = true;
        var currentText = '';
        // eslint-disable-next-line
        var textSelectionModule = this.pdfViewer.textSelectionModule;
        if (textSelectionModule && textSelectionModule.selectionRangeArray && textSelectionModule.selectionRangeArray.length === 1) {
            currentText = textSelectionModule.selectionRangeArray[0].textContent;
        }
        else if (window.getSelection() && window.getSelection().anchorNode) {
            currentText = window.getSelection().toString();
        }
        if (currentText !== '' && this.checkIsRtlText(currentText)) {
            isText = false;
        }
        return isText;
    };
    PdfViewerBase.prototype.DeleteKeyPressed = function (event) {
        if (this.pdfViewer.formDesignerModule && this.pdfViewer.designerMode && this.pdfViewer.selectedItems.formFields.length !== 0) {
            this.pdfViewer.formDesignerModule.deleteFormField(this.pdfViewer.selectedItems.formFields[0].id);
        }
        else if (this.pdfViewer.annotation && !this.pdfViewer.designerMode) {
            if (this.isTextMarkupAnnotationModule() && !this.getPopupNoteVisibleStatus()) {
                this.pdfViewer.annotationModule.deleteAnnotation();
            }
            if (this.pdfViewer.selectedItems.annotations.length > 0) {
                // eslint-disable-next-line
                var annotation = this.pdfViewer.selectedItems.annotations[0];
                var isReadOnly = true;
                var type = annotation.shapeAnnotationType;
                if (type === 'Path' || annotation.formFieldAnnotationType === 'SignatureField' || annotation.formFieldAnnotationType === 'InitialField' || type === 'HandWrittenSignature' || type === 'SignatureText' || type === 'SignatureImage') {
                    var inputFields = document.getElementById(annotation.id);
                    if (inputFields && inputFields.disabled) {
                        isReadOnly = true;
                    }
                }
                if (!isReadOnly) {
                    if (annotation.annotationSettings && annotation.annotationSettings.isLock) {
                        if (this.pdfViewer.annotationModule.checkAllowedInteractions('Delete', annotation)) {
                            this.pdfViewer.remove(annotation);
                            this.pdfViewer.renderSelector(this.pdfViewer.annotation.getEventPageNumber(event));
                        }
                    }
                    else {
                        this.pdfViewer.remove(annotation);
                        this.pdfViewer.renderSelector(this.pdfViewer.annotation.getEventPageNumber(event));
                    }
                }
            }
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.initiatePanning = function () {
        this.isPanMode = true;
        this.textLayer.modifyTextCursor(false);
        this.disableTextSelectionMode();
        if (this.pdfViewer.toolbar && this.pdfViewer.toolbar.annotationToolbarModule) {
            this.pdfViewer.toolbar.annotationToolbarModule.deselectAllItems();
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.initiateTextSelectMode = function () {
        this.isPanMode = false;
        if (this.viewerContainer) {
            this.viewerContainer.style.cursor = 'auto';
            if (this.pdfViewer.textSelectionModule) {
                this.textLayer.modifyTextCursor(true);
                this.pdfViewer.textSelectionModule.enableTextSelectionMode();
            }
            if ((!Browser.isDevice || this.pdfViewer.enableDesktopMode) && !isBlazor()) {
                this.enableAnnotationAddTools(true);
            }
        }
    };
    /**
     * @private
     * @returns {void}
    */
    PdfViewerBase.prototype.initiateTextSelection = function () {
        if (this.pdfViewer.toolbar && !this.pdfViewer.toolbar.isSelectionToolDisabled) {
            this.initiateTextSelectMode();
            this.pdfViewer.toolbar.updateInteractionTools(true);
        }
    };
    PdfViewerBase.prototype.enableAnnotationAddTools = function (isEnable) {
        if (this.pdfViewer.toolbarModule) {
            if (this.pdfViewer.toolbarModule.annotationToolbarModule) {
                this.pdfViewer.toolbarModule.annotationToolbarModule.enableAnnotationAddTools(isEnable);
            }
        }
    };
    PdfViewerBase.prototype.applySelection = function () {
        if (window.getSelection().anchorNode !== null) {
            this.pdfViewer.textSelectionModule.applySpanForSelection();
        }
        this.isViewerContainerDoubleClick = false;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.isDesignerMode = function (target) {
        var isDesignerMode = false;
        if (this.pdfViewer.selectedItems.annotations.length !== 0 && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'HandWrittenSignature' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureText' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureImage')) {
            isDesignerMode = true;
            // eslint-disable-next-line max-len
        }
        else if (this.pdfViewer.selectedItems.annotations.length !== 0 && this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType !== 'Path') {
            isDesignerMode = true;
            // eslint-disable-next-line max-len
        }
        else if (this.pdfViewer.selectedItems.formFields.length !== 0 && this.pdfViewer.selectedItems.formFields[0].formFieldAnnotationType && this.pdfViewer.designerMode) {
            isDesignerMode = true;
        }
        else {
            // eslint-disable-next-line max-len
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.isShapeCopied && (target.classList.contains('e-pv-text-layer') ||
                // eslint-disable-next-line max-len
                target.classList.contains('e-pv-text')) && !this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                isDesignerMode = true;
                // eslint-disable-next-line max-len
            }
            else if (this.pdfViewer.formDesigner && this.pdfViewer.formDesigner.isShapeCopied && (target.classList.contains('e-pv-text-layer') ||
                target.classList.contains('e-pv-text'))) {
                isDesignerMode = true;
            }
        }
        this.designerModetarget = target;
        return isDesignerMode;
    };
    PdfViewerBase.prototype.handleTaps = function (touchPoints) {
        var _this = this;
        if (!this.singleTapTimer) {
            this.singleTapTimer = setTimeout(function () {
                _this.onSingleTap(touchPoints);
                // eslint-disable-next-line
            }, 300);
            this.tapCount++;
        }
        else {
            if (this.pdfViewer.enablePinchZoom) {
                this.tapCount++;
                clearTimeout(this.singleTapTimer);
                this.singleTapTimer = null;
                this.onDoubleTap(touchPoints);
            }
        }
    };
    PdfViewerBase.prototype.handleTextBoxTaps = function (touchPoints) {
        var _this = this;
        setTimeout(function () {
            _this.inputTapCount = 0;
        }, 300);
        this.inputTapCount++;
        // eslint-disable-next-line
        var timer = setTimeout(function () {
            _this.onTextBoxDoubleTap(touchPoints);
        }, 200);
        if (this.inputTapCount > 2) {
            this.inputTapCount = 0;
        }
    };
    PdfViewerBase.prototype.onTextBoxDoubleTap = function (touches) {
        var target = touches[0].target;
        if (this.inputTapCount === 2) {
            if (this.pdfViewer.selectedItems.annotations.length !== 0) {
                if (this.pdfViewer.annotationModule) {
                    var currentAnnotation = this.pdfViewer.selectedItems.annotations[0];
                    this.pdfViewer.annotationModule.annotationSelect(currentAnnotation.annotName, currentAnnotation.pageIndex, currentAnnotation, null, true);
                }
                if (this.isFreeTextAnnotation(this.pdfViewer.selectedItems.annotations) === true) {
                    var elmtPosition = {};
                    elmtPosition.x = this.pdfViewer.selectedItems.annotations[0].bounds.x;
                    elmtPosition.y = this.pdfViewer.selectedItems.annotations[0].bounds.y;
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotation.freeTextAnnotationModule.addInuptElemet(elmtPosition, this.pdfViewer.selectedItems.annotations[0]);
                }
                else if (this.pdfViewer.selectedItems.annotations[0].enableShapeLabel === true) {
                    var elmtPosition = {};
                    elmtPosition.x = this.pdfViewer.selectedItems.annotations[0].bounds.x;
                    elmtPosition.y = this.pdfViewer.selectedItems.annotations[0].bounds.y;
                    this.pdfViewer.annotation.inputElementModule.editLabel(elmtPosition, this.pdfViewer.selectedItems.annotations[0]);
                }
            }
        }
    };
    PdfViewerBase.prototype.onSingleTap = function (touches) {
        var target = touches[0].target;
        var isFormfields = false;
        this.singleTapTimer = null;
        if (target && (target.classList.contains('e-pdfviewer-formFields')
            || target.classList.contains('e-pdfviewer-ListBox') || target.classList.contains('e-pdfviewer-signatureformfields'))) {
            isFormfields = true;
        }
        if (!this.isLongTouchPropagated && !this.navigationPane.isNavigationToolbarVisible && !isFormfields) {
            if (this.pdfViewer.toolbarModule) {
                if ((this.touchClientX >= touches[0].clientX - 10) && (this.touchClientX <= touches[0].clientX + 10) &&
                    (this.touchClientY >= touches[0].clientY - 10) && (this.touchClientY <= touches[0].clientY + 10)) {
                    if (!this.isTapHidden) {
                        if (isBlazor()) {
                            // eslint-disable-next-line max-len
                            this.viewerContainer.scrollTop -= this.pdfViewer.element.querySelector('.e-pv-mobile-toolbar').clientHeight * this.getZoomFactor();
                        }
                        if (this.pdfViewer.toolbar.moreDropDown) {
                            var dropDown = this.getElement('_more_option-popup');
                            if (dropDown.firstElementChild) {
                                dropDown.classList.remove('e-popup-open');
                                dropDown.classList.add('e-popup-close');
                                dropDown.removeChild(dropDown.firstElementChild);
                            }
                        }
                    }
                    else {
                        if (isBlazor()) {
                            // eslint-disable-next-line max-len
                            this.viewerContainer.scrollTop += this.pdfViewer.element.querySelector('.e-pv-mobile-toolbar').clientHeight * this.getZoomFactor();
                        }
                    }
                    if (this.isTapHidden && (Browser.isDevice && !this.pdfViewer.enableDesktopMode)) {
                        this.mobileScrollerContainer.style.display = '';
                        this.updateMobileScrollerPosition();
                        // eslint-disable-next-line max-len
                    }
                    else if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && this.getSelectTextMarkupCurrentPage() == null) {
                        this.mobileScrollerContainer.style.display = 'none';
                    }
                    if (this.getSelectTextMarkupCurrentPage() == null) {
                        if (!isBlazor()) {
                            if (this.pdfViewer.enableToolbar) {
                                this.pdfViewer.toolbarModule.showToolbar(true);
                            }
                        }
                        else {
                            //this.pdfViewer._dotnetInstance.invokeMethodAsync('TapOnMobileDevice', this.isTapHidden);
                            this.blazorUIAdaptor.tapOnMobileDevice(this.isTapHidden);
                        }
                        this.isTapHidden = !this.isTapHidden;
                    }
                }
                this.tapCount = 0;
            }
        }
    };
    PdfViewerBase.prototype.onDoubleTap = function (touches) {
        var target = touches[0].target;
        var isFormfields = false;
        if (target && (target.classList.contains('e-pdfviewer-formFields')
            || target.classList.contains('e-pdfviewer-ListBox') || target.classList.contains('e-pdfviewer-signatureformfields'))) {
            isFormfields = true;
        }
        if (this.tapCount === 2 && !isFormfields) {
            this.tapCount = 0;
            /**
             * Sometimes the values gets differ by some decimal points. So converted the decimal points values to Integer values.
             */
            // eslint-disable-next-line
            if ((this.touchClientX >= parseInt((touches[0].clientX - 10).toString())) && (this.touchClientX <= touches[0].clientX + 10) &&
                (this.touchClientY >= touches[0].clientY - 10) && (this.touchClientY <= touches[0].clientY + 30)) {
                if (this.pdfViewer.magnification && this.pdfViewer.selectedItems.annotations.length !== 1) {
                    this.pdfViewer.magnification.onDoubleTapMagnification();
                }
                this.viewerContainer.style.height = this.updatePageHeight(this.pdfViewer.element.getBoundingClientRect().height, this.toolbarHeight);
                this.isTapHidden = false;
                clearTimeout(this.singleTapTimer);
            }
        }
    };
    PdfViewerBase.prototype.preventTouchEvent = function (event) {
        if (this.pdfViewer.textSelectionModule) {
            // eslint-disable-next-line max-len
            if (!this.isPanMode && this.pdfViewer.enableTextSelection && !this.isTextSelectionDisabled && this.getSelectTextMarkupCurrentPage() == null) {
                if (!(this.isWebkitMobile && (Browser.isDevice && !this.pdfViewer.enableDesktopMode))) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }
    };
    PdfViewerBase.prototype.renderStampAnnotation = function (event) {
        if (this.pdfViewer.annotation) {
            var zoomFactor = this.getZoomFactor();
            var pageIndex = this.pdfViewer.annotation.getEventPageNumber(event);
            var pageDiv = this.getElement('_pageDiv_' + pageIndex);
            if (this.pdfViewer.enableStampAnnotations) {
                var stampModule = this.pdfViewer.annotationModule.stampAnnotationModule;
                if (stampModule && stampModule.isStampAnnotSelected) {
                    if (pageDiv) {
                        var pageCurrentRect = pageDiv.getBoundingClientRect();
                        // eslint-disable-next-line max-len
                        if (event.type === 'touchend' && this.pdfViewer.annotationModule.stampAnnotationModule.currentStampAnnotation.shapeAnnotationType === 'Image') {
                            var currentStampObj = this.pdfViewer.annotationModule.stampAnnotationModule.currentStampAnnotation;
                            currentStampObj.pageIndex = pageIndex;
                            currentStampObj.bounds.x = (event.changedTouches[0].clientX - pageCurrentRect.left) / zoomFactor;
                            currentStampObj.bounds.y = (event.changedTouches[0].clientY - pageCurrentRect.top) / zoomFactor;
                            stampModule.updateDeleteItems(pageIndex, currentStampObj, currentStampObj.opacity);
                            this.pdfViewer.add(currentStampObj);
                            var canvas = document.getElementById(this.pdfViewer.element.id + '_annotationCanvas_' + pageIndex);
                            this.pdfViewer.renderDrawing(canvas, pageIndex);
                        }
                        else {
                            // eslint-disable-next-line max-len
                            stampModule.renderStamp((event.changedTouches[0].clientX - pageCurrentRect.left) / zoomFactor, (event.changedTouches[0].clientY - pageCurrentRect.top) / zoomFactor, null, null, pageIndex, null, null, null, null);
                        }
                        stampModule.isStampAnnotSelected = false;
                    }
                }
                this.pdfViewer.annotation.onAnnotationMouseDown();
            }
            if (this.pdfViewer.enableHandwrittenSignature && this.isSignatureAdded && pageDiv) {
                var pageCurrentRect = pageDiv.getBoundingClientRect();
                this.currentSignatureAnnot.pageIndex = pageIndex;
                // eslint-disable-next-line max-len
                this.signatureModule.renderSignature((event.changedTouches[0].clientX - pageCurrentRect.left) / zoomFactor, (event.changedTouches[0].clientY - pageCurrentRect.top) / zoomFactor);
                this.isSignatureAdded = false;
            }
            if (event.touches.length === 1 && this.isTextMarkupAnnotationModule() && !this.getPopupNoteVisibleStatus()) {
                this.pdfViewer.annotationModule.textMarkupAnnotationModule.onTextMarkupAnnotationTouchEnd(event);
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.initPageDiv = function (pageValues) {
        if (!isBlazor()) {
            if (this.pdfViewer.toolbarModule) {
                this.pdfViewer.toolbarModule.updateTotalPage();
            }
        }
        if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && this.mobiletotalPageContainer) {
            this.mobiletotalPageContainer.innerHTML = this.pageCount.toString();
            this.pageNoContainer.innerHTML = '(1-' + this.pageCount.toString() + ')';
        }
        if (this.pageCount > 0) {
            var topValue = 0;
            var pageLimit = 0;
            this.isMixedSizeDocument = false;
            if (this.pageCount > 100) {
                // to render 100 pages intially.
                pageLimit = 100;
                this.pageLimit = pageLimit;
            }
            else {
                pageLimit = this.pageCount;
            }
            var isPortrait = false;
            var isLandscape = false;
            var differentPageSize = false;
            for (var i = 0; i < pageLimit; i++) {
                if (typeof pageValues.pageSizes[i] !== 'object') {
                    var pageSize = pageValues.pageSizes[i].split(',');
                    if (pageValues.pageSizes[i - 1] !== null && i !== 0) {
                        var previousPageHeight = pageValues.pageSizes[i - 1].split(',');
                        topValue = this.pageGap + parseFloat(previousPageHeight[1]) + topValue;
                    }
                    else {
                        topValue = this.pageGap;
                    }
                    var size = { width: parseFloat(pageSize[0]), height: parseFloat(pageSize[1]), top: topValue };
                    this.pageSize.push(size);
                }
                else {
                    if (pageValues.pageSizes[i - 1] !== null && i !== 0) {
                        // eslint-disable-next-line
                        var previousPageHeight = pageValues.pageSizes[i - 1];
                        topValue = this.pageGap + parseFloat(previousPageHeight.Height) + topValue;
                    }
                    else {
                        topValue = this.pageGap;
                    }
                    var size = { width: pageValues.pageSizes[i].Width, height: pageValues.pageSizes[i].Height, top: topValue };
                    this.pageSize.push(size);
                }
                if (this.pageSize[i].height > this.pageSize[i].width) {
                    isPortrait = true;
                }
                if (this.pageSize[i].width > this.pageSize[i].height) {
                    isLandscape = true;
                }
                if (i > 0 && this.pageSize[i].width !== this.pageSize[i - 1].width) {
                    differentPageSize = true;
                }
                var pageWidth = this.pageSize[i].width;
                if (pageWidth > this.highestWidth) {
                    this.highestWidth = pageWidth;
                }
                var pageHeight = this.pageSize[i].height;
                if (pageHeight > this.highestHeight) {
                    this.highestHeight = pageHeight;
                }
            }
            if ((isPortrait && isLandscape) || differentPageSize) {
                this.isMixedSizeDocument = true;
            }
            var limit = this.pageCount < 10 ? this.pageCount : 10;
            for (var i = 0; i < limit; i++) {
                this.renderPageContainer(i, this.getPageWidth(i), this.getPageHeight(i), this.getPageTop(i));
            }
            // eslint-disable-next-line max-len
            this.pageContainer.style.height = this.getPageTop(this.pageSize.length - 1) + this.getPageHeight(this.pageSize.length - 1) + 'px';
            this.pageContainer.style.position = 'relative';
            if (this.pageLimit === 100) {
                var pageDiv = this.getElement('_pageDiv_' + this.pageLimit);
                if (pageDiv === null && this.pageLimit < this.pageCount) {
                    Promise.all([this.renderPagesVirtually()]);
                }
            }
        }
    };
    PdfViewerBase.prototype.renderElementsVirtualScroll = function (pageNumber) {
        var lowerLimit = 1;
        var higherLimit = 3;
        if (this.pageStopValue <= 200) {
            lowerLimit = 4;
            higherLimit = 4;
        }
        else {
            lowerLimit = 2;
            higherLimit = 3;
        }
        var pageValue = pageNumber + lowerLimit;
        if (pageValue > this.pageCount) {
            pageValue = this.pageCount;
        }
        for (var i = pageNumber - 1; i <= pageValue; i++) {
            if (i !== -1) {
                this.renderPageElement(i);
            }
        }
        var lowerPageValue = pageNumber - 3;
        if (lowerPageValue < 0) {
            lowerPageValue = 0;
        }
        for (var i = pageNumber - 1; i >= lowerPageValue; i--) {
            if (i !== -1) {
                this.renderPageElement(i);
            }
        }
        for (var j = 0; j < this.pageCount; j++) {
            if (!((lowerPageValue <= j) && (j <= pageValue))) {
                var pageDiv = this.getElement('_pageDiv_' + j);
                var pageCanvas = this.getElement('_pageCanvas_' + j);
                var textLayer = this.getElement('_textLayer_' + j);
                if (pageCanvas) {
                    pageCanvas.parentNode.removeChild(pageCanvas);
                    if (textLayer) {
                        if (this.pdfViewer.textSelectionModule && textLayer.childNodes.length !== 0 && !this.isTextSelectionDisabled) {
                            this.pdfViewer.textSelectionModule.maintainSelectionOnScroll(j, true);
                        }
                        textLayer.parentNode.removeChild(textLayer);
                    }
                    var indexInArray = this.renderedPagesList.indexOf(j);
                    if (indexInArray !== -1) {
                        this.renderedPagesList.splice(indexInArray, 1);
                    }
                }
                if (pageDiv) {
                    pageDiv.parentNode.removeChild(pageDiv);
                    var indexInArray = this.renderedPagesList.indexOf(j);
                    if (indexInArray !== -1) {
                        this.renderedPagesList.splice(indexInArray, 1);
                    }
                }
            }
        }
        if (isBlazor())
            this.pdfViewer._dotnetInstance.invokeMethodAsync('UpdateCurrentPageNumber', this.currentPageNumber);
    };
    PdfViewerBase.prototype.renderPageElement = function (i) {
        var pageDiv = this.getElement('_pageDiv_' + i);
        var canvas = this.getElement('_pageCanvas_' + i);
        if (canvas == null && pageDiv == null && i < this.pageSize.length) {
            // eslint-disable-next-line
            this.renderPageContainer(i, this.getPageWidth(i), this.getPageHeight(i), this.getPageTop(i));
        }
    };
    PdfViewerBase.prototype.renderPagesVirtually = function () {
        return __awaiter(this, void 0, void 0, function () {
            var proxy;
            var _this = this;
            return __generator(this, function (_a) {
                proxy = this;
                setTimeout(function () {
                    _this.initiateRenderPagesVirtually(proxy);
                }, 500);
                return [2 /*return*/];
            });
        });
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.initiateRenderPagesVirtually = function (proxy) {
        var jsonObject = { hashId: proxy.hashId, isCompletePageSizeNotReceived: true, action: 'VirtualLoad', elementId: proxy.pdfViewer.element.id, uniqueId: proxy.documentId, password: proxy.passwordData };
        if (proxy.jsonDocumentId) {
            // eslint-disable-next-line
            jsonObject.documentId = proxy.jsonDocumentId;
        }
        this.virtualLoadRequestHandler = new AjaxHandler(this.pdfViewer);
        this.virtualLoadRequestHandler.url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.load;
        this.virtualLoadRequestHandler.responseType = 'json';
        this.virtualLoadRequestHandler.mode = true;
        this.virtualLoadRequestHandler.send(jsonObject);
        // eslint-disable-next-line
        this.virtualLoadRequestHandler.onSuccess = function (result) {
            // eslint-disable-next-line
            var data = result.data;
            if (data) {
                if (typeof data !== 'object') {
                    try {
                        data = JSON.parse(data);
                    }
                    catch (error) {
                        proxy.onControlError(500, data, 'VirtualLoad');
                    }
                }
            }
            if (data) {
                while (typeof data !== 'object') {
                    data = JSON.parse(data);
                }
                if (proxy.documentId === data.uniqueId) {
                    proxy.pdfViewer.fireAjaxRequestSuccess('VirtualLoad', data);
                    // eslint-disable-next-line
                    var pageValues = data;
                    if (proxy.pageSize[proxy.pageLimit - 1]) {
                        var topValue = proxy.pageSize[proxy.pageLimit - 1].top;
                        for (var i = proxy.pageLimit; i < proxy.pageCount; i++) {
                            if (typeof (pageValues.pageSizes[i]) !== 'object') {
                                var pageSize = pageValues.pageSizes[i].split(',');
                                if (proxy.pageSize[i - 1] !== null && i !== 0) {
                                    var previousPageHeight = proxy.pageSize[i - 1].height;
                                    topValue = proxy.pageGap + parseFloat(previousPageHeight) + topValue;
                                }
                                var size = { width: parseFloat(pageSize[0]), height: parseFloat(pageSize[1]), top: topValue };
                                proxy.pageSize.push(size);
                            }
                            else {
                                if (proxy.pageSize[i - 1] !== null && i !== 0) {
                                    var previousPageHeight = proxy.pageSize[i - 1].height;
                                    topValue = proxy.pageGap + parseFloat(previousPageHeight) + topValue;
                                }
                                var size = { width: parseFloat(pageValues.pageSizes[i].Width), height: parseFloat(pageValues.pageSizes[i].Height), top: topValue };
                                proxy.pageSize.push(size);
                            }
                        }
                        // eslint-disable-next-line max-len
                        proxy.pageContainer.style.height = proxy.getPageTop(proxy.pageSize.length - 1) + proxy.getPageHeight(proxy.pageSize.length - 1) + 'px';
                        // eslint-disable-next-line
                        var pageData = window.sessionStorage.getItem(proxy.documentId + '_pagedata');
                        if (proxy.pageCount > 100) {
                            proxy.pdfViewer.fireDocumentLoad(pageData);
                            var linkAnnotationModule = proxy.pdfViewer.linkAnnotationModule;
                            if (linkAnnotationModule && linkAnnotationModule.linkAnnotation && linkAnnotationModule.linkAnnotation.length > 0 && linkAnnotationModule.linkPage.length > 0) {
                                linkAnnotationModule.renderDocumentLink(linkAnnotationModule.linkAnnotation, linkAnnotationModule.linkPage, linkAnnotationModule.annotationY, proxy.currentPageNumber - 1);
                            }
                        }
                    }
                }
            }
        };
        // eslint-disable-next-line
        this.virtualLoadRequestHandler.onFailure = function (result) {
            proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText);
        };
        // eslint-disable-next-line
        this.virtualLoadRequestHandler.onError = function (result) {
            proxy.openNotificationPopup();
            proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText);
        };
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.tileRenderPage = function (data, pageIndex) {
        var _this = this;
        var proxy = null;
        proxy = this;
        if (data && this.pageSize[pageIndex]) {
            var pageWidth = this.getPageWidth(pageIndex);
            var pageHeight = this.getPageHeight(pageIndex);
            // eslint-disable-next-line max-len
            var canvas_1 = this.getElement('_pageCanvas_' + pageIndex);
            var pageDiv_1 = this.getElement('_pageDiv_' + pageIndex);
            var tileX = data.tileX ? data.tileX : 0;
            var tileY = data.tileY ? data.tileY : 0;
            if (pageDiv_1) {
                pageDiv_1.style.width = pageWidth + 'px';
                pageDiv_1.style.height = pageHeight + 'px';
                pageDiv_1.style.background = '#fff';
                pageDiv_1.style.top = this.getPageTop(pageIndex) + 'px';
                if (this.pdfViewer.enableRtl) {
                    pageDiv_1.style.right = this.updateLeftPosition(pageIndex) + 'px';
                }
                else {
                    pageDiv_1.style.left = this.updateLeftPosition(pageIndex) + 'px';
                }
            }
            if (canvas_1) {
                canvas_1.style.background = '#fff';
            }
            var imageData = data['image'];
            var zoomFactor = this.retrieveCurrentZoomFactor();
            if (this.isReRenderRequired) {
                if (data.zoomFactor) {
                    zoomFactor = data.zoomFactor;
                }
                var currentString = this.documentId + '_' + pageIndex + '_' + zoomFactor + '_' + data.tileX + '_' + data.tileY;
                // eslint-disable-next-line max-len
                this.tilerequestLists.push(currentString);
                // eslint-disable-next-line
                var matrix = data['transformationMatrix'];
                // eslint-disable-next-line
                var width = data['width'];
                if (imageData) {
                    var tileX_1 = data.tileX ? data.tileX : 0;
                    var tileY_1 = data.tileY ? data.tileY : 0;
                    var scaleFactor = (!isNullOrUndefined(data.scaleFactor)) ? data.scaleFactor : 1.5;
                    var image = document.getElementById(this.pdfViewer.element.id + '_tileimg_' + pageIndex + '_' + this.getZoomFactor() + '_' + tileX_1 + '_' + tileY_1);
                    if (!image) {
                        image = new Image();
                        image.id = this.pdfViewer.element.id + '_tileimg_' + pageIndex + '_' + this.getZoomFactor() + '_' + tileX_1 + '_' + tileY_1;
                        if (pageDiv_1) {
                            pageDiv_1.append(image);
                        }
                    }
                    image.src = imageData;
                    image.onload = function () {
                        proxy.showPageLoadingIndicator(pageIndex, false);
                        proxy.tileRenderCount = proxy.tileRenderCount + 1;
                        if ((tileX_1 === 0) && (tileY_1 === 0)) {
                            if (pageIndex === 0 && _this.isDocumentLoaded) {
                                proxy.renderPDFInformations();
                                proxy.isInitialLoaded = true;
                                // eslint-disable-next-line
                                var pageData = window.sessionStorage.getItem(proxy.documentId + '_pagedata');
                                if (proxy.pageCount <= 100) {
                                    proxy.pdfViewer.fireDocumentLoad(pageData);
                                }
                                proxy.isDocumentLoaded = false;
                                if (proxy.pdfViewer.textSearch && proxy.pdfViewer.isExtractText) {
                                    proxy.pdfViewer.textSearchModule.getPDFDocumentTexts();
                                }
                            }
                        }
                        if (proxy.tileRenderCount === proxy.tileRequestCount) {
                            if (proxy.isTextMarkupAnnotationModule()) {
                                proxy.pdfViewer.annotationModule.textMarkupAnnotationModule.rerenderAnnotations(pageIndex);
                            }
                            if (canvas_1) {
                                canvas_1.style.display = 'none';
                                canvas_1.src = '#';
                            }
                            var oldPageDiv = document.querySelectorAll('img[id*="' + proxy.pdfViewer.element.id + '_oldCanvas"]');
                            for (var i = 0; i < oldPageDiv.length; i++) {
                                pageDiv_1.removeChild(oldPageDiv[i]);
                            }
                            proxy.isTileImageRendered = false;
                            proxy.tileRenderCount = 0;
                            if (proxy.pdfViewer.magnificationModule) {
                                proxy.pdfViewer.magnificationModule.rerenderCountIncrement();
                            }
                            proxy.isDrawnCompletely = true;
                        }
                    };
                    var currentImageWidth = (((width * this.getZoomFactor()) / zoomFactor) / scaleFactor);
                    var matrixElements = matrix.Elements ? matrix.Elements : matrix.Values;
                    var currentImageTop = (((matrixElements[5] * this.getZoomFactor()) / zoomFactor) / scaleFactor);
                    var currentImageLeft = (((matrixElements[4] * this.getZoomFactor()) / zoomFactor) / scaleFactor);
                    image.width = currentImageWidth;
                    image.style.width = currentImageWidth + 'px';
                    image.style.top = currentImageTop + 'px';
                    image.style.left = currentImageLeft + 'px';
                    image.style.position = 'absolute';
                }
                if ((tileX === 0) && (tileY === 0)) {
                    this.onPageRender(data, pageIndex, pageDiv_1);
                }
            }
            else {
                var oldCanvases = document.querySelectorAll('img[id*="' + proxy.pdfViewer.element.id + '_tileimg_' + pageIndex + '_"]');
                for (var l = 0; l < oldCanvases.length; l++) {
                    var tileImgId = oldCanvases[l].id.split('_');
                    var zoomFactor_1 = proxy.retrieveCurrentZoomFactor();
                    // eslint-disable-next-line
                    var tileData = JSON.parse(proxy.getWindowSessionStorageTile(pageIndex, parseFloat(tileImgId[tileImgId.length - 2]), parseFloat(tileImgId[tileImgId.length - 1]), zoomFactor_1));
                    if (tileData && tileData.zoomFactor) {
                        zoomFactor_1 = tileData.zoomFactor;
                    }
                    if (parseFloat(tileImgId[tileImgId.length - 4]) === pageIndex) {
                        var node = oldCanvases[l];
                        // Make sure it's really an Element
                        if (node.nodeType == Node.ELEMENT_NODE) {
                            node.onload = function () {
                                proxy.showPageLoadingIndicator(pageIndex, false);
                                proxy.tileRenderCount = proxy.tileRenderCount + 1;
                                if ((tileX_2 === 0) && (tileY_2 === 0)) {
                                    if (pageIndex === 0 && _this.isDocumentLoaded) {
                                        _this.renderPDFInformations();
                                        _this.isInitialLoaded = true;
                                        // eslint-disable-next-line
                                        var pageData = window.sessionStorage.getItem(proxy.documentId + '_pagedata');
                                        if (proxy.pageCount <= 100) {
                                            proxy.pdfViewer.fireDocumentLoad(pageData);
                                        }
                                        proxy.isDocumentLoaded = false;
                                        if (proxy.pdfViewer.textSearch && proxy.pdfViewer.isExtractText) {
                                            proxy.pdfViewer.textSearchModule.getPDFDocumentTexts();
                                        }
                                    }
                                }
                                if (proxy.tileRenderCount === proxy.tileRequestCount) {
                                    canvas_1.style.display = 'none';
                                    canvas_1.src = '#';
                                    if (proxy.isTextMarkupAnnotationModule()) {
                                        proxy.pdfViewer.annotationModule.textMarkupAnnotationModule.rerenderAnnotations(pageIndex);
                                    }
                                    var oldPageDiv = document.querySelectorAll('img[id*="' + proxy.pdfViewer.element.id + '_oldCanvas"]');
                                    for (var i = 0; i < oldPageDiv.length; i++) {
                                        pageDiv_1.removeChild(oldPageDiv[i]);
                                    }
                                    proxy.isTileImageRendered = false;
                                    proxy.tileRenderCount = 0;
                                    if (proxy.pdfViewer.magnificationModule) {
                                        proxy.pdfViewer.magnificationModule.rerenderCountIncrement();
                                    }
                                    proxy.isDrawnCompletely = true;
                                }
                            };
                            if (tileData)
                                node.src = tileData.image;
                        }
                    }
                }
                var tileX_2 = data.tileX ? data.tileX : 0;
                var tileY_2 = data.tileY ? data.tileY : 0;
                if ((tileX_2 === 0) && (tileY_2 === 0)) {
                    this.onPageRender(data, pageIndex, pageDiv_1);
                }
            }
        }
    };
    PdfViewerBase.prototype.renderTileCanvas = function (pageWidth, pageHeight, pageIndex, pageDiv, zoomFactor, scaleFactor) {
        var pageCanvas = this.getElement('_pageTileCanvas_' + pageIndex);
        if (!pageCanvas) {
            pageCanvas = createElement('canvas', { id: this.pdfViewer.element.id + '_pageTileCanvas_' + pageIndex, className: 'e-pv-pageTile-canvas' });
            pageCanvas.style.width = pageWidth + 'px';
            pageCanvas.style.height = pageHeight + 'px';
            pageCanvas.style.display = 'none';
            pageCanvas.style.backgroundColor = '#fff';
            if (this.isMixedSizeDocument && this.highestWidth > 0) {
                pageCanvas.style.marginLeft = 'auto';
                pageCanvas.style.marginRight = 'auto';
            }
            pageDiv.appendChild(pageCanvas);
        }
        return pageCanvas;
    };
    PdfViewerBase.prototype.calculateImageWidth = function (pageWidth, zoomFactor, scaleFactor, imageWidth) {
        var width = (pageWidth / this.getZoomFactor()) * zoomFactor * scaleFactor;
        // eslint-disable-next-line
        if ((parseInt(imageWidth.toString())) === (parseInt(width.toString()))) {
            imageWidth = width;
        }
        imageWidth = ((imageWidth * this.getZoomFactor()) / zoomFactor);
        return imageWidth;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.renderPage = function (data, pageIndex) {
        var _this = this;
        var proxy = this;
        if (data && this.pageSize[pageIndex]) {
            var pageWidth = this.getPageWidth(pageIndex);
            var pageHeight = this.getPageHeight(pageIndex);
            // eslint-disable-next-line max-len
            var canvas_2 = this.getElement('_pageCanvas_' + pageIndex);
            var pageDiv_2 = this.getElement('_pageDiv_' + pageIndex);
            if (pageDiv_2) {
                pageDiv_2.style.width = pageWidth + 'px';
                pageDiv_2.style.height = pageHeight + 'px';
                pageDiv_2.style.top = this.getPageTop(pageIndex) + 'px';
                if (this.pdfViewer.enableRtl) {
                    pageDiv_2.style.right = this.updateLeftPosition(pageIndex) + 'px';
                }
                else {
                    pageDiv_2.style.left = this.updateLeftPosition(pageIndex) + 'px';
                }
            }
            if (canvas_2) {
                canvas_2.style.background = '#fff';
                canvas_2.style.display = 'block';
                canvas_2.style.width = pageWidth + 'px';
                canvas_2.style.height = pageHeight + 'px';
                if (pageWidth < parseFloat(pageDiv_2.style.width)) {
                    pageDiv_2.style.boxShadow = 'none';
                }
                // eslint-disable-next-line
                var imageData = data['image'];
                if (imageData) {
                    canvas_2.onload = function () {
                        var oldCanvases = document.querySelectorAll('img[id*="' + proxy.pdfViewer.element.id + '_tileimg_' + pageIndex + '_"]');
                        var pageCanvas = proxy.getElement('_pageDiv_' + pageIndex);
                        for (var i = 0; i < oldCanvases.length; i++) {
                            var tileImgId = oldCanvases[i].id.split('_');
                            if (parseFloat(tileImgId[tileImgId.length - 3]) != proxy.getZoomFactor())
                                pageCanvas.removeChild(oldCanvases[i]);
                        }
                        var oldPageDiv = document.querySelectorAll('img[id*="' + proxy.pdfViewer.element.id + '_oldCanvas"]');
                        for (var i = 0; i < oldPageDiv.length; i++) {
                            pageDiv_2.removeChild(oldPageDiv[i]);
                        }
                        if (_this.pdfViewer.magnificationModule) {
                            _this.pdfViewer.magnificationModule.rerenderCountIncrement();
                        }
                        _this.showPageLoadingIndicator(pageIndex, false);
                        if (pageIndex === 0 && _this.isDocumentLoaded) {
                            _this.renderPDFInformations();
                            _this.isInitialLoaded = true;
                            // eslint-disable-next-line
                            var pageData = window.sessionStorage.getItem(_this.documentId + '_pagedata');
                            if (_this.pageCount <= 100) {
                                _this.pdfViewer.fireDocumentLoad(pageData);
                            }
                            _this.isDocumentLoaded = false;
                            if (_this.pdfViewer.textSearch && _this.pdfViewer.isExtractText) {
                                _this.pdfViewer.textSearchModule.getPDFDocumentTexts();
                            }
                        }
                        if (_this.pdfViewer.magnificationModule) {
                            _this.pdfViewer.magnificationModule.pushImageObjects(canvas_2);
                        }
                    };
                    canvas_2.src = imageData;
                }
                this.onPageRender(data, pageIndex, pageDiv_2);
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.onPageRender = function (data, pageIndex, pageDiv) {
        // eslint-disable-next-line
        var aElement = pageDiv && pageDiv.getElementsByTagName('a');
        var isAnnotationRendered = false;
        if (aElement && aElement.length !== 0) {
            for (var index = aElement.length - 1; index >= 0; index--) {
                aElement[index].parentNode.removeChild(aElement[index]);
            }
        }
        if (this.pdfViewer.textSearchModule || this.pdfViewer.textSelectionModule || this.pdfViewer.annotationModule) {
            this.renderTextContent(data, pageIndex);
        }
        if (this.pdfViewer.formFieldsModule && !this.pdfViewer.magnificationModule.isFormFieldPageZoomed) {
            this.pdfViewer.formFieldsModule.renderFormFields(pageIndex);
        }
        if (this.pdfViewer.formDesignerModule && !this.isDocumentLoaded) {
            this.pdfViewer.formDesignerModule.rerenderFormFields(pageIndex);
        }
        if (this.pdfViewer.formFieldsModule && !this.isDocumentLoaded && !this.pdfViewer.formDesignerModule) {
            this.pdfViewer.formFieldsModule.renderFormFields(pageIndex);
        }
        if (this.pdfViewer.formDesignerModule && this.isDocumentLoaded && this.pdfViewer.magnificationModule.isFormFieldPageZoomed) {
            this.pdfViewer.formFieldsModule.renderFormFields(pageIndex);
            this.pdfViewer.magnificationModule.isFormFieldPageZoomed = false;
        }
        if (this.pdfViewer.enableHyperlink && this.pdfViewer.linkAnnotationModule) {
            this.pdfViewer.linkAnnotationModule.renderHyperlinkContent(data, pageIndex);
        }
        if (this.pdfViewer.textSelectionModule && !this.isTextSelectionDisabled) {
            this.pdfViewer.textSelectionModule.applySelectionRangeOnScroll(pageIndex);
        }
        if (this.documentAnnotationCollections) {
            var isAnnotationAdded = false;
            for (var i = 0; i < this.annotationRenderredList.length; i++) {
                if (this.annotationRenderredList[i] === pageIndex) {
                    isAnnotationAdded = true;
                }
            }
            // eslint-disable-next-line
            var pageAnnotations = this.documentAnnotationCollections[pageIndex];
            if (pageAnnotations && !isAnnotationAdded) {
                data.shapeAnnotation = pageAnnotations.shapeAnnotation;
                data.measureShapeAnnotation = pageAnnotations.measureShapeAnnotation;
                data.textMarkupAnnotation = pageAnnotations.textMarkupAnnotation;
                data.freeTextAnnotation = pageAnnotations.freeTextAnnotation;
                data.stampAnnotations = pageAnnotations.stampAnnotations;
                data.stickyNotesAnnotation = pageAnnotations.stickyNotesAnnotation;
                data.signatureInkAnnotation = pageAnnotations.signatureInkAnnotation;
                this.annotationRenderredList.push(pageIndex);
            }
        }
        if (this.isImportAction) {
            // eslint-disable-next-line
            var pageAnnotations = this.checkDocumentCollectionData(pageIndex);
            if (pageAnnotations) {
                data.shapeAnnotation = pageAnnotations.shapeAnnotation;
                data.measureShapeAnnotation = pageAnnotations.measureShapeAnnotation;
                data.textMarkupAnnotation = pageAnnotations.textMarkupAnnotation;
                data.freeTextAnnotation = pageAnnotations.freeTextAnnotation;
                data.stampAnnotations = pageAnnotations.stampAnnotations;
                data.stickyNotesAnnotation = pageAnnotations.stickyNotesAnnotation;
                data.signatureInkAnnotation = pageAnnotations.signatureInkAnnotation;
                isAnnotationRendered = true;
            }
        }
        if (this.pdfViewer.annotationModule && (this.isTextMarkupAnnotationModule() || this.isShapeBasedAnnotationsEnabled())) {
            if (this.isStampAnnotationModule()) {
                // eslint-disable-next-line
                var stampData = data['stampAnnotations'];
                if (isAnnotationRendered) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.stampAnnotationModule.renderStampAnnotations(stampData, pageIndex, null, true);
                }
                else {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.stampAnnotationModule.renderStampAnnotations(stampData, pageIndex);
                }
            }
            if (isAnnotationRendered) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.renderAnnotations(pageIndex, data.shapeAnnotation, data.measureShapeAnnotation, data.textMarkupAnnotation, null, true);
            }
            else {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.renderAnnotations(pageIndex, data.shapeAnnotation, data.measureShapeAnnotation, data.textMarkupAnnotation);
            }
            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderStickyNotesAnnotations(data.stickyNotesAnnotation, pageIndex);
        }
        if (this.pdfViewer.formDesignerModule && !this.pdfViewer.annotationModule) {
            this.pdfViewer.formDesignerModule.updateCanvas(pageIndex);
        }
        if (this.pdfViewer.textSearchModule) {
            if (this.pdfViewer.textSearchModule.isTextSearch) {
                this.pdfViewer.textSearchModule.highlightOtherOccurrences(pageIndex);
            }
        }
        if (this.isShapeBasedAnnotationsEnabled()) {
            var canvas1 = this.getElement('_annotationCanvas_' + pageIndex);
            var commonStyle = 'position:absolute;top:0px;left:0px;overflow:hidden;pointer-events:none;z-index:1000';
            if (canvas1) {
                var bounds = canvas1.getBoundingClientRect();
                renderAdornerLayer(bounds, commonStyle, canvas1, pageIndex, this.pdfViewer);
                this.pdfViewer.renderSelector(pageIndex, this.pdfViewer.annotationSelectorSettings);
            }
        }
        if (this.pdfViewer.annotationModule) {
            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.selectCommentsAnnotation(pageIndex);
        }
        if (this.isFreeTextAnnotationModule() && data.freeTextAnnotation) {
            if (isAnnotationRendered) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.freeTextAnnotationModule.renderFreeTextAnnotations(data.freeTextAnnotation, pageIndex);
            }
            else {
                this.pdfViewer.annotationModule.freeTextAnnotationModule.renderFreeTextAnnotations(data.freeTextAnnotation, pageIndex);
            }
        }
        if (this.isInkAnnotationModule() && data && data.signatureInkAnnotation) {
            // eslint-disable-next-line max-len
            this.pdfViewer.annotationModule.inkAnnotationModule.renderExistingInkSignature(data.signatureInkAnnotation, pageIndex, isAnnotationRendered);
        }
        // eslint-disable-next-line max-len
        if (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.isAnnotationSelected && this.pdfViewer.annotationModule.annotationPageIndex === pageIndex) {
            this.pdfViewer.annotationModule.selectAnnotationFromCodeBehind();
        }
        this.isLoadedFormFieldAdded = false;
    };
    /**
     * @private
     * @param {number} pageIndex - page index for rendering the annotation.
     * @returns {void}
     */
    PdfViewerBase.prototype.renderAnnotations = function (pageIndex, isAddedProgrammatically) {
        // eslint-disable-next-line
        var data = {};
        if (this.documentAnnotationCollections) {
            var isAnnotationAdded = false;
            for (var i = 0; i < this.annotationRenderredList.length; i++) {
                if (this.annotationRenderredList[i] === pageIndex) {
                    isAnnotationAdded = true;
                }
            }
            // eslint-disable-next-line
            var pageAnnotations = this.documentAnnotationCollections[pageIndex];
            if (pageAnnotations && !isAnnotationAdded) {
                data.shapeAnnotation = pageAnnotations.shapeAnnotation;
                data.measureShapeAnnotation = pageAnnotations.measureShapeAnnotation;
                data.textMarkupAnnotation = pageAnnotations.textMarkupAnnotation;
                data.freeTextAnnotation = pageAnnotations.freeTextAnnotation;
                data.stampAnnotations = pageAnnotations.stampAnnotations;
                data.stickyNotesAnnotation = pageAnnotations.stickyNotesAnnotation;
                data.signatureAnnotation = pageAnnotations.signatureAnnotation;
                data.signatureInkAnnotation = pageAnnotations.signatureInkAnnotation;
                this.annotationRenderredList.push(pageIndex);
            }
        }
        if (this.isAnnotationCollectionRemoved) {
            data.shapeAnnotation = [];
            data.measureShapeAnnotation = [];
            data.textMarkupAnnotation = [];
            data.freeTextAnnotation = [];
            data.stampAnnotations = [];
            data.stickyNotesAnnotation = [];
            data.signatureInkAnnotation = [];
        }
        if (this.isTextMarkupAnnotationModule() || this.isShapeBasedAnnotationsEnabled()) {
            if (this.isStampAnnotationModule()) {
                // eslint-disable-next-line
                var stampData = data['stampAnnotations'];
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.stampAnnotationModule.renderStampAnnotations(stampData, pageIndex);
            }
            // eslint-disable-next-line max-len
            this.pdfViewer.annotationModule.renderAnnotations(pageIndex, data.shapeAnnotation, data.measureShapeAnnotation, data.textMarkupAnnotation);
            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderStickyNotesAnnotations(data.stickyNotesAnnotation, pageIndex);
        }
        if (this.pdfViewer.textSearchModule) {
            if (this.pdfViewer.textSearchModule.isTextSearch) {
                this.pdfViewer.textSearchModule.highlightOtherOccurrences(pageIndex);
            }
        }
        if (this.isImportAction) {
            var isAnnotationAdded = false;
            for (var i = 0; i < this.annotationPageList.length; i++) {
                if (this.annotationPageList[i] === pageIndex) {
                    isAnnotationAdded = true;
                }
            }
            if (!isAnnotationAdded) {
                if (this.importedAnnotation) {
                    this.drawPageAnnotations(this.importedAnnotation, pageIndex, true);
                    this.annotationPageList[this.annotationPageList.length] = pageIndex;
                }
            }
        }
        if (this.isShapeBasedAnnotationsEnabled()) {
            var canvas1 = this.getElement('_annotationCanvas_' + pageIndex);
            var commonStyle = 'position:absolute;top:0px;left:0px;overflow:hidden;pointer-events:none;z-index:1000';
            if (canvas1) {
                var bounds = canvas1.getBoundingClientRect();
                renderAdornerLayer(bounds, commonStyle, canvas1, pageIndex, this.pdfViewer);
                this.pdfViewer.renderSelector(pageIndex);
            }
        }
        if (this.pdfViewer.annotationModule) {
            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.selectCommentsAnnotation(pageIndex);
        }
        if (this.isFreeTextAnnotationModule() && data.freeTextAnnotation) {
            this.pdfViewer.annotationModule.freeTextAnnotationModule.renderFreeTextAnnotations(data.freeTextAnnotation, pageIndex, undefined);
        }
        if (data && data.signatureAnnotation) {
            this.signatureModule.renderExistingSignature(data.signatureAnnotation, pageIndex, false);
        }
        if (this.isInkAnnotationModule() && data && data.signatureInkAnnotation) {
            this.pdfViewer.annotationModule.inkAnnotationModule.renderExistingInkSignature(data.signatureInkAnnotation, pageIndex, false);
        }
        if (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.isAnnotationSelected) {
            this.pdfViewer.annotationModule.selectAnnotationFromCodeBehind();
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.renderTextContent = function (data, pageIndex) {
        // eslint-disable-next-line
        var texts = data['textContent'];
        // eslint-disable-next-line
        var bounds = data['textBounds'];
        // eslint-disable-next-line
        var rotation = data['rotation'];
        var textLayer = this.getElement('_textLayer_' + pageIndex);
        if (!textLayer) {
            // eslint-disable-next-line max-len
            textLayer = this.textLayer.addTextLayer(pageIndex, this.getPageWidth(pageIndex), this.getPageHeight(pageIndex), this.getElement('_pageDiv_' + pageIndex));
        }
        if (textLayer && texts && bounds) {
            textLayer.style.display = 'block';
            if (textLayer.childNodes.length === 0) {
                this.textLayer.renderTextContents(pageIndex, texts, bounds, rotation);
            }
            else {
                this.textLayer.resizeTextContents(pageIndex, texts, bounds, rotation, true);
            }
        }
    };
    PdfViewerBase.prototype.renderPageContainer = function (pageNumber, pageWidth, pageHeight, topValue) {
        // eslint-disable-next-line max-len
        var pageDiv = createElement('div', { id: this.pdfViewer.element.id + '_pageDiv_' + pageNumber, className: 'e-pv-page-div', attrs: { 'tabindex': '0' } });
        pageDiv.style.width = pageWidth + 'px';
        pageDiv.style.height = pageHeight + 'px';
        if (this.pdfViewer.enableRtl) {
            pageDiv.style.right = this.updateLeftPosition(pageNumber) + 'px';
        }
        else {
            pageDiv.style.left = this.updateLeftPosition(pageNumber) + 'px';
        }
        pageDiv.style.top = topValue + 'px';
        this.pageContainer.appendChild(pageDiv);
        this.pageContainer.style.width = this.viewerContainer.clientWidth + 'px';
        this.createWaitingPopup(pageNumber);
        this.orderPageDivElements(pageDiv, pageNumber);
        this.renderPageCanvas(pageDiv, pageWidth, pageHeight, pageNumber, 'block');
        if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && !this.isThumb) {
            this.updateMobileScrollerPosition();
        }
    };
    PdfViewerBase.prototype.renderPDFInformations = function () {
        if (this.pdfViewer.thumbnailViewModule && (!Browser.isDevice || this.pdfViewer.enableDesktopMode)) {
            this.pdfViewer.thumbnailViewModule.createRequestForThumbnails();
        }
        if (this.pdfViewer.bookmarkViewModule) {
            this.pdfViewer.bookmarkViewModule.createRequestForBookmarks();
        }
        if (this.pdfViewer.annotationModule) {
            if (this.pdfViewer.toolbarModule) {
                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.initializeAcccordionContainer();
            }
            if (this.pdfViewer.isCommandPanelOpen) {
                this.pdfViewer.annotation.showCommentsPanel();
            }
            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.createRequestForComments();
        }
    };
    PdfViewerBase.prototype.orderPageDivElements = function (pageDiv, pageIndex) {
        var nextElement = this.getElement('_pageDiv_' + (pageIndex + 1));
        if (nextElement) {
            this.pageContainer.insertBefore(pageDiv, nextElement);
        }
        else {
            this.pageContainer.appendChild(pageDiv);
        }
    };
    /**
     * @param pageDiv
     * @param pageWidth
     * @param pageHeight
     * @param pageNumber
     * @param displayMode
     * @param pageDiv
     * @param pageWidth
     * @param pageHeight
     * @param pageNumber
     * @param displayMode
     * @param pageDiv
     * @param pageWidth
     * @param pageHeight
     * @param pageNumber
     * @param displayMode
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.renderPageCanvas = function (pageDiv, pageWidth, pageHeight, pageNumber, displayMode) {
        if (pageDiv) {
            // eslint-disable-next-line
            var pageCanvas = this.getElement('_pageCanvas_' + pageNumber);
            if (pageCanvas) {
                pageCanvas.width = pageWidth;
                pageCanvas.height = pageHeight;
                pageCanvas.style.display = 'block';
                if (this.isMixedSizeDocument && this.highestWidth > 0) {
                    pageCanvas.style.marginLeft = 'auto';
                    pageCanvas.style.marginRight = 'auto';
                }
            }
            else {
                // eslint-disable-next-line max-len
                pageCanvas = createElement('img', { id: this.pdfViewer.element.id + '_pageCanvas_' + pageNumber, className: 'e-pv-page-canvas' });
                pageCanvas.width = pageWidth;
                pageCanvas.height = pageHeight;
                pageCanvas.style.display = displayMode;
                if (this.isMixedSizeDocument && this.highestWidth > 0) {
                    pageCanvas.style.marginLeft = 'auto';
                    pageCanvas.style.marginRight = 'auto';
                }
                pageDiv.appendChild(pageCanvas);
            }
            if (this.pdfViewer.annotationModule && this.pdfViewer.annotation) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.createAnnotationLayer(pageDiv, pageWidth, pageHeight, pageNumber, displayMode);
            }
            if (this.pdfViewer.textSearchModule || this.pdfViewer.textSelectionModule || this.pdfViewer.annotationModule) {
                this.textLayer.addTextLayer(pageNumber, pageWidth, pageHeight, pageDiv);
            }
            if (this.pdfViewer.formDesignerModule && !this.pdfViewer.annotationModule) {
                this.pdfViewer.formDesignerModule.createAnnotationLayer(pageDiv, pageWidth, pageHeight, pageNumber, displayMode);
            }
            return pageCanvas;
        }
    };
    /**
     * @private
     * @param {any} pageCanvas - The canvas for rendering the page.
     * @param {any} pageNumber - The page number for adding styles.
     * @returns {void}
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.applyElementStyles = function (pageCanvas, pageNumber) {
        if (this.isMixedSizeDocument && pageCanvas) {
            var canvasElement = document.getElementById(this.pdfViewer.element.id + '_pageCanvas_' + pageNumber);
            var oldCanvas = document.getElementById(this.pdfViewer.element.id + '_oldCanvas_' + pageNumber);
            if (pageCanvas && canvasElement && canvasElement.offsetLeft > 0) {
                pageCanvas.style.marginLeft = canvasElement.offsetLeft + 'px';
                pageCanvas.style.marginRight = canvasElement.offsetLeft + 'px';
            }
            else if (oldCanvas && oldCanvas.offsetLeft > 0) {
                pageCanvas.style.marginLeft = oldCanvas.offsetLeft + 'px';
                pageCanvas.style.marginRight = oldCanvas.offsetLeft + 'px';
            }
            else {
                pageCanvas.style.marginLeft = 'auto';
                pageCanvas.style.marginRight = 'auto';
            }
        }
    };
    /**
     * @private
     * @param  {number} pageIndex - page index for updating positon.
     * @returns {void}
     */
    PdfViewerBase.prototype.updateLeftPosition = function (pageIndex) {
        var leftPosition;
        var width = this.viewerContainer.getBoundingClientRect().width;
        if (width === 0) {
            width = parseFloat(this.pdfViewer.width.toString());
        }
        // eslint-disable-next-line max-len
        if (this.isMixedSizeDocument && this.highestWidth > 0) {
            if (this.viewerContainer.clientWidth > 0) {
                leftPosition = (this.viewerContainer.clientWidth - (this.highestWidth * this.getZoomFactor())) / 2;
            }
            else {
                leftPosition = (width - (this.highestWidth * this.getZoomFactor())) / 2;
            }
            var pageDiff = (this.highestWidth * this.getZoomFactor() - this.getPageWidth(pageIndex)) / 2;
            if (leftPosition > 0) {
                leftPosition += pageDiff;
            }
            else {
                leftPosition = pageDiff;
            }
        }
        else {
            if (this.viewerContainer.clientWidth > 0) {
                leftPosition = (this.viewerContainer.clientWidth - this.getPageWidth(pageIndex)) / 2;
            }
            else {
                leftPosition = (width - this.getPageWidth(pageIndex)) / 2;
            }
        }
        var isLandscape = false;
        if (this.pageSize[pageIndex].width > this.pageSize[pageIndex].height) {
            isLandscape = true;
        }
        // eslint-disable-next-line max-len
        if (leftPosition < 0 || (this.pdfViewer.magnificationModule ? ((this.pdfViewer.magnificationModule.isAutoZoom && this.getZoomFactor() < 1) || this.pdfViewer.magnificationModule.fitType === 'fitToWidth') : false)) {
            var leftValue = leftPosition;
            if (leftPosition > 0 && (Browser.isDevice && !this.pdfViewer.enableDesktopMode)) {
                // eslint-disable-next-line
                leftPosition = leftValue;
            }
            else {
                leftPosition = this.pageLeft;
            }
            if ((leftPosition > 0) && this.isMixedSizeDocument) {
                if (leftValue > 0) {
                    leftPosition = leftValue;
                }
            }
        }
        return leftPosition;
    };
    /**
     * @private
     * @param {number} pageIndex - The page index for positon.
     * @returns {void}
     */
    PdfViewerBase.prototype.applyLeftPosition = function (pageIndex) {
        var leftPosition;
        if (this.pageSize[pageIndex]) {
            if (this.isMixedSizeDocument && this.highestWidth > 0) {
                if (this.viewerContainer.clientWidth > 0) {
                    // eslint-disable-next-line max-len
                    leftPosition = (this.viewerContainer.clientWidth - (this.highestWidth * this.getZoomFactor())) / 2;
                }
                else {
                    // eslint-disable-next-line max-len
                    leftPosition = (this.viewerContainer.getBoundingClientRect().width - (this.highestWidth * this.getZoomFactor())) / 2;
                }
                var pageDiff = (this.highestWidth * this.getZoomFactor() - this.getPageWidth(pageIndex)) / 2;
                if (leftPosition > 0) {
                    leftPosition += pageDiff;
                }
                else {
                    leftPosition = pageDiff;
                }
            }
            else {
                if (this.viewerContainer.clientWidth > 0) {
                    // eslint-disable-next-line max-len
                    leftPosition = (this.viewerContainer.clientWidth - this.pageSize[pageIndex].width * this.getZoomFactor()) / 2;
                }
                else {
                    // eslint-disable-next-line max-len
                    leftPosition = (this.viewerContainer.getBoundingClientRect().width - this.pageSize[pageIndex].width * this.getZoomFactor()) / 2;
                }
            }
            var isLandscape = false;
            if (this.pageSize[pageIndex].width > this.pageSize[pageIndex].height) {
                isLandscape = true;
            }
            // eslint-disable-next-line max-len
            if (leftPosition < 0 || (this.pdfViewer.magnificationModule ? ((this.pdfViewer.magnificationModule.isAutoZoom && this.getZoomFactor() < 1) || this.pdfViewer.magnificationModule.fitType === 'fitToWidth') : false)) {
                var leftValue = leftPosition;
                leftPosition = this.pageLeft;
                // eslint-disable-next-line max-len
                if ((leftValue > 0) && this.isMixedSizeDocument) {
                    leftPosition = leftValue;
                }
            }
            // eslint-disable-next-line max-len
            var pageDiv = document.getElementById(this.pdfViewer.element.id + '_pageDiv_' + pageIndex);
            if (pageDiv) {
                if (!this.pdfViewer.enableRtl) {
                    pageDiv.style.left = leftPosition + 'px';
                }
                else {
                    pageDiv.style.right = leftPosition + 'px';
                }
            }
        }
    };
    PdfViewerBase.prototype.updatePageHeight = function (viewerHeight, toolbarHeight) {
        return ((viewerHeight - toolbarHeight) / viewerHeight) * 100 + '%';
    };
    /**
     * @private
     * @param {Point} clientPoint - The user should provide a x, y coordinates.
     * @returns {number}
     */
    PdfViewerBase.prototype.getPageNumberFromClientPoint = function (clientPoint) {
        var pointX = clientPoint.x + this.viewerContainer.scrollLeft;
        var pointY = clientPoint.y + this.viewerContainer.scrollTop;
        for (var i = 0; i < this.pageCount; i++) {
            if (pointY < (this.pageSize[i].top + this.pageSize[i].height)) {
                var viewerContainerBounds = this.getElement('_pageViewContainer').getBoundingClientRect();
                var pageLeft = ((viewerContainerBounds.width - this.pageSize[i].width) / 2) + viewerContainerBounds.x;
                var verticalScrollPosition = 0;
                if (pointY > this.pageSize[i].top) {
                    verticalScrollPosition = (pointY - this.pageSize[i].top);
                }
                else {
                    verticalScrollPosition = (this.pageSize[i].top - pointY);
                }
                if (verticalScrollPosition > 0) {
                    if (this.pageSize[i] != null) {
                        var pageHeight = this.getPageHeight(i);
                        if ((pointX < pageLeft) || (pointX > (pageLeft + (this.pageSize[i].width)))) {
                            return -1;
                        }
                        if (verticalScrollPosition <= (this.getPageTop(i) + this.pageSize[i].height)) {
                            return i + 1;
                        }
                    }
                }
            }
        }
        return -1;
    };
    /**
     * @private
     * @param {Point} clientPoint - The user should provide a x, y coordinates.
     * @param {number} pageNumber - We need to pass pageNumber.
     * @returns {Point}
     */
    PdfViewerBase.prototype.convertClientPointToPagePoint = function (clientPoint, pageNumber) {
        if (pageNumber !== -1) {
            var viewerContainerBounds = this.getElement('_pageViewContainer').getBoundingClientRect();
            var pageLeft = ((viewerContainerBounds.width - this.pageSize[pageNumber - 1].width) / 2) + viewerContainerBounds.x;
            var pagePoint = { x: (clientPoint.x + this.viewerContainer.scrollLeft) - pageLeft, y: (clientPoint.y + this.viewerContainer.scrollTop) - this.pageSize[pageNumber - 1].top };
            return pagePoint;
        }
        return null;
    };
    /**
     * @private
     * @param {Point} pagePoint - The user needs to provide a page x, y position.
     * @param {number} pageNumber - We need to pass pageNumber.
     * @returns {Point}
     */
    PdfViewerBase.prototype.convertPagePointToClientPoint = function (pagePoint, pageNumber) {
        if (pageNumber !== -1) {
            var viewerContainerBounds = this.getElement('_pageViewContainer').getBoundingClientRect();
            var pageLeft = ((viewerContainerBounds.width - this.pageSize[pageNumber - 1].width) / 2) + viewerContainerBounds.x;
            var clientPoint = { x: pagePoint.x + pageLeft, y: pagePoint.y + this.pageSize[pageNumber - 1].top };
            return clientPoint;
        }
        return null;
    };
    /**
     * @private
     * @param {Point} pagePoint - The user needs to provide a page x, y position.
     * @param {number} pageNumber - We need to pass pageNumber.
     * @returns {Point}
     */
    PdfViewerBase.prototype.convertPagePointToScrollingPoint = function (pagePoint, pageNumber) {
        if (pageNumber !== -1) {
            var scrollingPoint = { x: pagePoint.x + this.viewerContainer.scrollLeft, y: pagePoint.y + this.viewerContainer.scrollTop };
            return scrollingPoint;
        }
        return null;
    };
    PdfViewerBase.prototype.initiatePageViewScrollChanged = function () {
        if (this.scrollHoldTimer) {
            clearTimeout(this.scrollHoldTimer);
        }
        this.scrollHoldTimer = null;
        if ((this.scrollPosition * this.getZoomFactor()) !== this.viewerContainer.scrollTop) {
            this.scrollPosition = this.viewerContainer.scrollTop;
            this.pageViewScrollChanged(this.currentPageNumber);
        }
    };
    PdfViewerBase.prototype.renderCountIncrement = function () {
        if (this.pdfViewer.magnificationModule) {
            this.pdfViewer.magnificationModule.renderCountIncrement();
        }
    };
    /**
     * @private
     * @param {number} currentPageNumber - The current pagenumber.
     * @returns {void}
     */
    PdfViewerBase.prototype.pageViewScrollChanged = function (currentPageNumber) {
        if (this.isPanMode) {
            if (this.renderedPagesList.indexOf(currentPageNumber - 1) === -1) {
                this.reRenderedCount = 0;
            }
        }
        else {
            this.reRenderedCount = 0;
        }
        var currentPageIndex = currentPageNumber - 1;
        if (currentPageNumber !== this.previousPage && currentPageNumber <= this.pageCount) {
            var isSkip = false;
            if (this.isDataExits && !this.getStoredData(currentPageIndex)) {
                isSkip = true;
            }
            if (this.renderedPagesList.indexOf(currentPageIndex) === -1 && !this.getMagnified() && !isSkip) {
                this.renderCountIncrement();
                this.createRequestForRender(currentPageIndex);
            }
        }
        if (!(this.getMagnified() || this.getPagesPinchZoomed())) {
            var previous = currentPageIndex - 1;
            var isSkip = false;
            var canvas = this.getElement('_pageCanvas_' + previous);
            if (this.isDataExits && !this.getStoredData(previous)) {
                isSkip = true;
            }
            if (canvas !== null && !isSkip) {
                if (this.renderedPagesList.indexOf(previous) === -1 && !this.getMagnified()) {
                    this.renderCountIncrement();
                    this.createRequestForRender(previous);
                }
            }
            if (this.isMinimumZoom) {
                this.renderPreviousPagesInScroll(previous);
            }
            var next = currentPageIndex + 1;
            var pageHeight = 0;
            if (next < this.pageCount) {
                pageHeight = this.getPageHeight(next);
                if (this.renderedPagesList.indexOf(next) === -1 && !this.getMagnified() && pageHeight) {
                    this.createRequestForRender(next);
                    this.renderCountIncrement();
                    while (this.viewerContainer.clientHeight > pageHeight) {
                        next = next + 1;
                        if (next < this.pageCount) {
                            this.renderPageElement(next);
                            this.createRequestForRender(next);
                            pageHeight += this.getPageHeight(next);
                            this.renderCountIncrement();
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    };
    PdfViewerBase.prototype.renderPreviousPagesInScroll = function (pageIndex) {
        var next = pageIndex - 1;
        var pageNumber = next - 1;
        if (next > 0) {
            if (this.renderedPagesList.indexOf(next) === -1 && !this.getMagnified()) {
                this.createRequestForRender(next);
                this.renderCountIncrement();
            }
            if (pageNumber > 0) {
                if (this.renderedPagesList.indexOf(pageNumber) === -1 && !this.getMagnified()) {
                    this.createRequestForRender(pageNumber);
                    this.renderCountIncrement();
                }
            }
        }
    };
    PdfViewerBase.prototype.downloadDocument = function (blobUrl) {
        // eslint-disable-next-line
        var Url = URL || webkitURL;
        blobUrl = Url.createObjectURL(blobUrl);
        var anchorElement = createElement('a');
        if (anchorElement.click) {
            anchorElement.href = blobUrl;
            anchorElement.target = '_parent';
            if ('download' in anchorElement) {
                anchorElement.download = this.downloadFileName;
            }
            (document.body || document.documentElement).appendChild(anchorElement);
            anchorElement.click();
            anchorElement.parentNode.removeChild(anchorElement);
        }
        else {
            if (window.top === window &&
                blobUrl.split('#')[0] === window.location.href.split('#')[0]) {
                var padCharacter = blobUrl.indexOf('?') === -1 ? '?' : '&';
                blobUrl = blobUrl.replace(/#|$/, padCharacter + '$&');
            }
            window.open(blobUrl, '_parent');
        }
    };
    PdfViewerBase.prototype.downloadExportAnnotationJson = function (blobUrl, isForm) {
        // eslint-disable-next-line
        var Url = URL || webkitURL;
        blobUrl = Url.createObjectURL(blobUrl);
        var anchorElement = createElement('a');
        if (anchorElement.click) {
            anchorElement.href = blobUrl;
            anchorElement.target = '_parent';
            if ('download' in anchorElement) {
                if (this.pdfViewer.exportAnnotationFileName !== null) {
                    anchorElement.download = this.pdfViewer.exportAnnotationFileName.split('.')[0] + '.json';
                }
                else {
                    anchorElement.download = this.pdfViewer.fileName.split('.')[0] + '.json';
                }
            }
            (document.body || document.documentElement).appendChild(anchorElement);
            anchorElement.click();
            anchorElement.parentNode.removeChild(anchorElement);
            if (isForm) {
                this.pdfViewer.fireFormExportSuccess(blobUrl, anchorElement.download);
            }
            else {
                this.pdfViewer.fireExportSuccess(blobUrl, anchorElement.download);
            }
        }
        else {
            if (window.top === window &&
                blobUrl.split('#')[0] === window.location.href.split('#')[0]) {
                var padCharacter = blobUrl.indexOf('?') === -1 ? '?' : '&';
                blobUrl = blobUrl.replace(/#|$/, padCharacter + '$&');
            }
            window.open(blobUrl, '_parent');
            if (isForm) {
                this.pdfViewer.fireFormExportSuccess(blobUrl, this.pdfViewer.fileName.split('.')[0] + '.json');
            }
            else {
                this.pdfViewer.fireExportSuccess(blobUrl, this.pdfViewer.fileName.split('.')[0] + '.json');
            }
        }
    };
    PdfViewerBase.prototype.downloadExportedXFdfAnnotation = function (blobUrl) {
        // eslint-disable-next-line
        var Url = URL || webkitURL;
        blobUrl = Url.createObjectURL(blobUrl);
        var anchorElement = createElement('a');
        if (anchorElement.click) {
            anchorElement.href = blobUrl;
            anchorElement.target = '_parent';
            if ('download' in anchorElement) {
                if (this.pdfViewer.exportAnnotationFileName !== null) {
                    anchorElement.download = this.pdfViewer.exportAnnotationFileName.split('.')[0] + '.xfdf';
                }
                else {
                    anchorElement.download = this.pdfViewer.fileName.split('.')[0] + '.xfdf';
                }
            }
            (document.body || document.documentElement).appendChild(anchorElement);
            anchorElement.click();
            anchorElement.parentNode.removeChild(anchorElement);
            this.pdfViewer.fireExportSuccess(blobUrl, anchorElement.download);
        }
    };
    /**
     * @private
     * @param {string} path - The path for exporting the fields.
     * @returns {void}
     */
    PdfViewerBase.prototype.exportFormFields = function (path) {
        this.createRequestForExportFormfields(false, path);
    };
    /**
     * @param source
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.importFormFields = function (source) {
        this.createRequestForImportingFormfields(source);
    };
    /**
     * @param isObject
     * @param path
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.createRequestForExportFormfields = function (isObject, path) {
        var _this = this;
        var proxy = null;
        proxy = this;
        var promise = new Promise(function (resolve, reject) {
            // eslint-disable-next-line
            var jsonObject = proxy.createFormfieldsJsonData();
            proxy.pdfViewer.fireFormExportStarted(jsonObject.pdfAnnotation);
            jsonObject.action = 'ExportFormFields';
            // eslint-disable-next-line
            jsonObject['hashId'] = proxy.hashId;
            // eslint-disable-next-line
            jsonObject['fileName'] = proxy.pdfViewer.fileName;
            if (path && path !== '' && !isObject) {
                // eslint-disable-next-line
                jsonObject['filePath'] = path;
            }
            // eslint-disable-next-line
            jsonObject['elementId'] = _this.pdfViewer.element.id;
            // eslint-disable-next-line max-len
            if (proxy.jsonDocumentId) {
                // eslint-disable-next-line
                jsonObject.document = proxy.jsonDocumentId;
            }
            var url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.exportFormFields;
            proxy.exportFormFieldsRequestHandler = new AjaxHandler(_this.pdfViewer);
            proxy.exportFormFieldsRequestHandler.url = url;
            proxy.exportFormFieldsRequestHandler.mode = true;
            proxy.exportFormFieldsRequestHandler.responseType = 'text';
            proxy.exportFormFieldsRequestHandler.send(jsonObject);
            // eslint-disable-next-line
            proxy.exportFormFieldsRequestHandler.onSuccess = function (result) {
                // eslint-disable-next-line
                var data = result.data;
                if (data) {
                    if (data) {
                        proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.exportFormFields, data);
                        if (isObject) {
                            // eslint-disable-next-line
                            var annotationJson = decodeURIComponent(escape(atob(data.split(',')[1])));
                            resolve(annotationJson);
                            proxy.pdfViewer.fireFormExportSuccess(annotationJson, proxy.pdfViewer.fileName);
                        }
                        else if (data.split('base64,')[1]) {
                            var blobUrl = proxy.createBlobUrl(data.split('base64,')[1], 'application/json');
                            if (Browser.isIE || Browser.info.name === 'edge') {
                                window.navigator.msSaveOrOpenBlob(blobUrl, proxy.pdfViewer.fileName.split('.')[0] + '.json');
                            }
                            else {
                                proxy.downloadExportAnnotationJson(blobUrl, true);
                            }
                        }
                    }
                }
            };
            // eslint-disable-next-line
            proxy.exportFormFieldsRequestHandler.onFailure = function (result) {
                proxy.pdfViewer.fireFormExportFailed(jsonObject.pdfAnnotation, result.statusText);
            };
            // eslint-disable-next-line
            proxy.exportFormFieldsRequestHandler.onError = function (result) {
                proxy.pdfViewer.fireFormExportFailed(jsonObject.pdfAnnotation, result.statusText);
            };
        });
        if (isObject) {
            return promise;
        }
        else {
            return true;
        }
    };
    /**
     * @param source
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.createRequestForImportingFormfields = function (source) {
        var proxy = null;
        proxy = this;
        // eslint-disable-next-line
        var jsonObject = {};
        if (typeof source === 'object') {
            jsonObject.data = JSON.stringify(source);
        }
        else {
            jsonObject.data = source;
            if (source.split('.')[1] === 'json') {
                // eslint-disable-next-line
                jsonObject['fileName'] = proxy.pdfViewer.fileName;
            }
        }
        proxy.pdfViewer.fireFormImportStarted(source);
        // eslint-disable-next-line
        jsonObject.action = 'ImportFormFields';
        // eslint-disable-next-line
        jsonObject['hashId'] = proxy.hashId;
        // eslint-disable-next-line
        jsonObject['elementId'] = this.pdfViewer.element.id;
        // eslint-disable-next-line max-len
        if (proxy.jsonDocumentId) {
            // eslint-disable-next-line
            jsonObject.document = proxy.jsonDocumentId;
        }
        var url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.importFormFields;
        proxy.importFormFieldsRequestHandler = new AjaxHandler(this.pdfViewer);
        proxy.importFormFieldsRequestHandler.url = url;
        proxy.importFormFieldsRequestHandler.mode = true;
        proxy.importFormFieldsRequestHandler.responseType = 'text';
        proxy.importFormFieldsRequestHandler.send(jsonObject);
        // eslint-disable-next-line
        proxy.importFormFieldsRequestHandler.onSuccess = function (result) {
            // eslint-disable-next-line
            var data = result.data;
            if (data && data !== 'null') {
                if (typeof data !== 'object') {
                    try {
                        data = JSON.parse(data);
                        if (typeof data !== 'object') {
                            proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.importFormFields);
                            proxy.pdfViewer.fireFormImportFailed(source, result.statusText);
                            data = null;
                        }
                    }
                    catch (error) {
                        proxy.pdfViewer.fireFormImportFailed(source, proxy.pdfViewer.localeObj.getConstant('File not found'));
                        if (isBlazor()) {
                            var promise = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_FileNotFound');
                            promise.then(function (value) {
                                proxy.openImportExportNotificationPopup(value);
                            });
                        }
                        else {
                            proxy.openImportExportNotificationPopup(proxy.pdfViewer.localeObj.getConstant('File not found'));
                        }
                        proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.importFormFields);
                        data = null;
                    }
                }
                proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.importFormFields, data);
                proxy.pdfViewer.fireFormImportSuccess(source);
                window.sessionStorage.removeItem(this.documentId + '_formfields');
                this.pdfViewer.formFieldsModule.removeExistingFormFields();
                window.sessionStorage.removeItem(this.documentId + '_formDesigner');
                proxy.saveFormfieldsData(data);
                for (var i = 0; i < proxy.renderedPagesList.length; i++) {
                    this.pdfViewer.formFieldsModule.renderFormFields(proxy.renderedPagesList[i]);
                }
            }
            else {
                proxy.pdfViewer.fireFormImportFailed(source, result.statusText);
                if (isBlazor()) {
                    var promise = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_FileNotFound');
                    promise.then(function (value) {
                        proxy.openImportExportNotificationPopup(value);
                    });
                }
                else {
                    proxy.openImportExportNotificationPopup(proxy.pdfViewer.localeObj.getConstant('File not found'));
                }
            }
        };
        // eslint-disable-next-line
        proxy.importFormFieldsRequestHandler.onFailure = function (result) {
            proxy.pdfViewer.fireFormImportFailed(source, result.statusText);
        };
        // eslint-disable-next-line
        proxy.importFormFieldsRequestHandler.onError = function (result) {
            proxy.pdfViewer.fireFormImportFailed(source, result.statusText);
        };
    };
    /**
     * @public
     * @returns {any} - Returns the Json data.
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.createFormfieldsJsonData = function () {
        // eslint-disable-next-line
        var jsonObject = {};
        if (this.pdfViewer.formDesignerModule) {
            var fieldsData = this.pdfViewer.formDesignerModule.downloadFormDesigner();
            // eslint-disable-next-line
            jsonObject['formDesigner'] = fieldsData;
        }
        else if (this.pdfViewer.formFieldsModule) {
            var fieldsData = this.pdfViewer.formFieldsModule.downloadFormFieldsData();
            // eslint-disable-next-line
            jsonObject['fieldsData'] = fieldsData;
        }
        return jsonObject;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.constructJsonDownload = function () {
        // eslint-disable-next-line
        var jsonObject = { hashId: this.hashId };
        if (this.jsonDocumentId) {
            jsonObject.documentId = this.jsonDocumentId;
        }
        jsonObject.uniqueId = this.documentId;
        this.importPageList = [];
        if (this.pdfViewer.annotationModule) {
            this.saveImportedAnnotations();
        }
        if (this.isTextMarkupAnnotationModule()) {
            this.isJsonExported = false;
            // eslint-disable-next-line max-len
            var textMarkupAnnotationCollection = this.pdfViewer.annotationModule.textMarkupAnnotationModule.saveTextMarkupAnnotations();
            // eslint-disable-next-line
            jsonObject['textMarkupAnnotations'] = textMarkupAnnotationCollection;
        }
        if (this.isShapeAnnotationModule()) {
            this.isJsonExported = false;
            // eslint-disable-next-line max-len
            var shapeAnnotations = this.pdfViewer.annotationModule.shapeAnnotationModule.saveShapeAnnotations();
            // eslint-disable-next-line
            jsonObject['shapeAnnotations'] = shapeAnnotations;
        }
        if (this.isCalibrateAnnotationModule()) {
            this.isJsonExported = false;
            // eslint-disable-next-line max-len
            var calibrateAnnotations = this.pdfViewer.annotationModule.measureAnnotationModule.saveMeasureShapeAnnotations();
            // eslint-disable-next-line
            jsonObject['measureShapeAnnotations'] = calibrateAnnotations;
        }
        if (this.isStampAnnotationModule()) {
            // eslint-disable-next-line max-len
            var stampAnnotationCollection = this.pdfViewer.annotationModule.stampAnnotationModule.saveStampAnnotations();
            // eslint-disable-next-line
            jsonObject['stampAnnotations'] = stampAnnotationCollection;
        }
        if (this.isCommentAnnotationModule()) {
            // eslint-disable-next-line max-len
            var stickyAnnotationCollection = this.pdfViewer.annotationModule.stickyNotesAnnotationModule.saveStickyAnnotations();
            // eslint-disable-next-line
            jsonObject['stickyNotesAnnotation'] = stickyAnnotationCollection;
        }
        if (this.isImportAction) {
            var importList = JSON.stringify(this.importPageList);
            // eslint-disable-next-line
            jsonObject['importPageList'] = importList;
        }
        if (this.pdfViewer.formDesignerModule) {
            var fieldsData = this.pdfViewer.formDesignerModule.downloadFormDesigner();
            // eslint-disable-next-line
            jsonObject['formDesigner'] = fieldsData;
        }
        else if (this.pdfViewer.formFieldsModule) {
            var fieldsData = this.pdfViewer.formFieldsModule.downloadFormFieldsData();
            // eslint-disable-next-line
            jsonObject['fieldsData'] = fieldsData;
        }
        var signatureData = this.signatureModule.saveSignature();
        // eslint-disable-next-line
        jsonObject['signatureData'] = signatureData;
        if (this.pdfViewer.isSignatureEditable) {
            // eslint-disable-next-line
            jsonObject['isSignatureEdited'] = this.pdfViewer.isSignatureEditable;
        }
        if (this.isFreeTextAnnotationModule()) {
            // eslint-disable-next-line max-len
            var freeTextAnnotationCollection = this.pdfViewer.annotationModule.freeTextAnnotationModule.saveFreeTextAnnotations();
            // eslint-disable-next-line
            jsonObject['freeTextAnnotation'] = freeTextAnnotationCollection;
        }
        if (this.isInkAnnotationModule()) {
            var inkSignatureData = this.pdfViewer.annotationModule.inkAnnotationModule.saveInkSignature();
            // eslint-disable-next-line
            jsonObject['inkSignatureData'] = inkSignatureData;
        }
        // eslint-disable-next-line
        jsonObject['action'] = 'Download';
        // eslint-disable-next-line
        jsonObject['elementId'] = this.pdfViewer.element.id;
        return jsonObject;
    };
    /**
     * @private
     * @param {string} annotationID - The annotationID.
     * @returns {any} - Returns collection of type.
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkFormFieldCollection = function (annotationID) {
        var isFormFieldAnnotation = false;
        // eslint-disable-next-line
        var formDesignerData = null;
        formDesignerData = this.getItemFromSessionStorage('_formDesigner');
        if (formDesignerData) {
            // eslint-disable-next-line
            var formFieldsData = JSON.parse(formDesignerData);
            for (var i = 0; i < formFieldsData.length; i++) {
                if (formFieldsData[i].FormField.formFieldAnnotationType === 'RadioButton') {
                    for (var j = 0; j < formFieldsData[i].FormField.radiobuttonItem.length; j++) {
                        if (annotationID === formFieldsData[i].FormField.radiobuttonItem[j].id.split('_')[0]) {
                            isFormFieldAnnotation = true;
                            break;
                        }
                    }
                }
                else if (formFieldsData[i].Key.split('_')[0] === annotationID) {
                    isFormFieldAnnotation = true;
                    break;
                }
            }
        }
        return isFormFieldAnnotation;
    };
    /**
     * @private
     * @returns {boolean} - Returns whether freetext module is enabled.
     */
    PdfViewerBase.prototype.isFreeTextAnnotationModule = function () {
        // eslint-disable-next-line max-len
        if (this.pdfViewer.annotation) {
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.freeTextAnnotationModule) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.createRequestForDownload = function () {
        var proxy = null;
        proxy = this;
        proxy.pdfViewer.fireDownloadStart(proxy.downloadFileName);
        // eslint-disable-next-line
        var jsonObject = this.constructJsonDownload();
        this.dowonloadRequestHandler = new AjaxHandler(this.pdfViewer);
        this.dowonloadRequestHandler.url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.download;
        this.dowonloadRequestHandler.responseType = 'text';
        if (this.validateForm && this.pdfViewer.enableFormFieldsValidation) {
            this.pdfViewer.fireValidatedFailed(proxy.pdfViewer.serverActionSettings.download);
            this.validateForm = false;
        }
        else {
            this.dowonloadRequestHandler.send(jsonObject);
        }
        // eslint-disable-next-line
        this.dowonloadRequestHandler.onSuccess = function (result) {
            // eslint-disable-next-line
            var data = result.data;
            if (data) {
                if (typeof data !== 'object' && data.indexOf('data:application/pdf') === -1) {
                    proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.download);
                    data = null;
                }
                if (typeof data === 'object') {
                    data = JSON.parse(data);
                }
                if (data) {
                    if (proxy.pdfViewer.downloadFileName && (proxy.pdfViewer.downloadFileName !== proxy.downloadFileName)) {
                        proxy.downloadFileName = proxy.pdfViewer.downloadFileName;
                    }
                    proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.download, data);
                    var blobUrl = proxy.createBlobUrl(data.split('base64,')[1], 'application/pdf');
                    if (Browser.isIE || Browser.info.name === 'edge') {
                        window.navigator.msSaveOrOpenBlob(blobUrl, proxy.downloadFileName);
                    }
                    else {
                        proxy.downloadDocument(blobUrl);
                    }
                    proxy.pdfViewer.fireDownloadEnd(proxy.downloadFileName, data);
                }
                proxy.updateDocumentAnnotationCollections();
            }
            else {
                proxy.pdfViewer.fireDownloadEnd(proxy.downloadFileName, 'PDF Document saved in server side successfully');
            }
        };
        // eslint-disable-next-line
        this.dowonloadRequestHandler.onFailure = function (result) {
            proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.download);
        };
        // eslint-disable-next-line
        this.dowonloadRequestHandler.onError = function (result) {
            proxy.openNotificationPopup();
            proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.download);
        };
    };
    /**
     * @param pageWidth
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.getTileCount = function (pageWidth) {
        if (pageWidth && typeof pageWidth === 'number') {
            var defaultWidth = 816;
            var tileCount = 1;
            if (this.getZoomFactor() > 2 && pageWidth <= 1200) {
                tileCount = 2;
            }
            else {
                tileCount = pageWidth / defaultWidth;
            }
            // eslint-disable-next-line radix
            var tileValue = parseInt(tileCount.toFixed());
            if (tileValue <= 0) {
                return 1;
            }
            else {
                if (this.pdfViewer.tileRenderingSettings.enableTileRendering) {
                    return tileValue;
                }
                else {
                    return 1;
                }
            }
        }
        else {
            return 1;
        }
    };
    PdfViewerBase.prototype.createRequestForRender = function (pageIndex) {
        var proxy = null;
        proxy = this;
        var canvas = proxy.getElement('_pageCanvas_' + pageIndex);
        var oldCanvas = proxy.getElement('_oldCanvas_' + pageIndex);
        if (this.pageSize && this.pageSize[pageIndex]) {
            var pageWidth_1 = this.pageSize[pageIndex].width;
            var pageHeight = this.pageSize[pageIndex].height;
            var tilecanvas = this.getElement('_pageCanvas_' + pageIndex);
            // eslint-disable-next-line
            var viewPortWidth_1 = 1200; // On diving the value greater than 1200 we will get the tile count as 2.
            // eslint-disable-next-line
            var viewPortHeight = proxy.pdfViewer.element.clientHeight > 0 ? proxy.pdfViewer.element.clientHeight : proxy.pdfViewer.element.style.height;
            // eslint-disable-next-line radix
            viewPortWidth_1 = parseInt(viewPortWidth_1);
            // eslint-disable-next-line radix
            viewPortHeight = parseInt(viewPortHeight) ? parseInt(viewPortHeight) : 500; //we have applied minimum-height as 500.
            var noTileX = void 0;
            var noTileY = void 0;
            var tileCount = this.getTileCount(pageWidth_1);
            if (canvas) {
                if (!isNaN(parseFloat(canvas.style.width)) || oldCanvas) {
                    if (proxy.isInitialLoaded) {
                        proxy.showPageLoadingIndicator(pageIndex, false);
                    }
                }
                // eslint-disable-next-line
                var data = proxy.getStoredData(pageIndex);
                noTileX = noTileY = tileCount;
                var tileSettings = proxy.pdfViewer.tileRenderingSettings;
                if (tileSettings.enableTileRendering && tileSettings.x > 0 && tileSettings.y > 0) {
                    if ((viewPortWidth_1 < pageWidth_1 || this.getZoomFactor() > 2)) {
                        noTileX = tileSettings.x;
                        noTileY = tileSettings.y;
                    }
                }
                proxy.tileRequestCount = noTileX * noTileY;
                var zoomFactor = this.retrieveCurrentZoomFactor();
                var isPageRequestSent = void 0;
                if (tileCount === 1) {
                    data = proxy.getStoredData(pageIndex);
                    isPageRequestSent = proxy.pageRequestSent(pageIndex, 0, 0);
                }
                else {
                    // eslint-disable-next-line
                    var tileData = JSON.parse(proxy.getWindowSessionStorageTile(pageIndex, 0, 0, zoomFactor));
                    if (tileData) {
                        data = tileData;
                    }
                }
                if (data && data.uniqueId === proxy.documentId) {
                    canvas.style.backgroundColor = '#fff';
                    if ((proxy.pdfViewer.magnification && proxy.pdfViewer.magnification.isPinchZoomed) || !this.pageSize[pageIndex]) {
                        return;
                    }
                    var zoomFactor_2 = this.retrieveCurrentZoomFactor();
                    if (zoomFactor_2 > 2 && pageWidth_1 <= 1200) {
                        viewPortWidth_1 = 700;
                    }
                    else {
                        viewPortWidth_1 = 1200;
                    }
                    if (!proxy.pdfViewer.tileRenderingSettings.enableTileRendering) {
                        viewPortWidth_1 = 1200;
                    }
                    if ((viewPortWidth_1 >= pageWidth_1) || !proxy.pdfViewer.tileRenderingSettings.enableTileRendering) {
                        proxy.renderPage(data, pageIndex);
                    }
                    else {
                        proxy.isTileImageRendered = true;
                        proxy.tileRenderCount = 0;
                        proxy.tileRenderPage(data, pageIndex);
                        for (var k = 0; k < noTileX; k++) {
                            for (var l = 0; l < noTileY; l++) {
                                if (k === 0 && l === 0) {
                                    continue;
                                }
                                data = JSON.parse(this.getWindowSessionStorageTile(pageIndex, k, l, zoomFactor_2));
                                if (data) {
                                    proxy.tileRenderPage(data, pageIndex);
                                }
                            }
                        }
                    }
                    data = null;
                }
                else if (data === null || !isPageRequestSent) {
                    if (this.getPagesPinchZoomed()) {
                        proxy.showPageLoadingIndicator(pageIndex, false);
                    }
                    else {
                        proxy.showPageLoadingIndicator(pageIndex, true);
                    }
                    if (proxy.getPagesZoomed()) {
                        if (proxy.isInitialLoaded) {
                            proxy.showPageLoadingIndicator(pageIndex, false);
                        }
                    }
                    if (proxy.pdfViewer.magnification && proxy.pdfViewer.magnification.isPinchZoomed) {
                        return;
                    }
                    if (!proxy.pdfViewer.tileRenderingSettings.enableTileRendering) {
                        noTileX = 1;
                        noTileY = 1;
                    }
                    proxy.tileRenderCount = 0;
                    proxy.isTileImageRendered = true;
                    for (var x = 0; x < noTileX; x++) {
                        for (var y = 0; y < noTileY; y++) {
                            var jsonObject = null;
                            var zoomFactor_3 = this.retrieveCurrentZoomFactor();
                            if (zoomFactor_3 > 2 && pageWidth_1 <= 1200) {
                                viewPortWidth_1 = 700;
                            }
                            else {
                                viewPortWidth_1 = 1200;
                            }
                            if (!proxy.pdfViewer.tileRenderingSettings.enableTileRendering) {
                                viewPortWidth_1 = 1200;
                            }
                            // eslint-disable-next-line max-len
                            jsonObject = {
                                xCoordinate: (x).toString(), yCoordinate: (y).toString(), viewPortWidth: (viewPortWidth_1).toString(), viewPortHeight: (viewPortHeight).toString(),
                                pageNumber: (pageIndex).toString(), hashId: proxy.hashId, tilecount: (tileCount).toString(), tileXCount: (noTileX).toString(), tileYCount: (noTileY).toString(),
                                // eslint-disable-next-line max-len
                                zoomFactor: (zoomFactor_3).toString(), action: 'RenderPdfPages', uniqueId: this.documentId, elementId: proxy.pdfViewer.element.id
                            };
                            if (this.jsonDocumentId) {
                                // eslint-disable-next-line
                                jsonObject.documentId = this.jsonDocumentId;
                            }
                            proxy.pageRequestHandler = new AjaxHandler(this.pdfViewer);
                            // eslint-disable-next-line max-len
                            proxy.pageRequestHandler.url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.renderPages;
                            proxy.pageRequestHandler.responseType = 'json';
                            proxy.pageRequestHandler.send(jsonObject);
                            proxy.requestLists.push(proxy.documentId + '_' + pageIndex + '_' + x + '_' + y + '_' + zoomFactor_3);
                            // eslint-disable-next-line
                            proxy.pageRequestHandler.onSuccess = function (result) {
                                // eslint-disable-next-line max-len
                                if ((proxy.pdfViewer.magnification && proxy.pdfViewer.magnification.isPinchZoomed) || !proxy.pageSize[pageIndex]) {
                                    return;
                                }
                                // eslint-disable-next-line
                                var data = result.data;
                                if (data) {
                                    if (typeof data !== 'object') {
                                        try {
                                            data = JSON.parse(data);
                                        }
                                        catch (error) {
                                            proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.renderPages);
                                            data = null;
                                        }
                                    }
                                }
                                if (data) {
                                    while (typeof data !== 'object') {
                                        data = JSON.parse(data);
                                    }
                                    if (data.image && data.uniqueId === proxy.documentId) {
                                        var currentPageWidth = (data.pageWidth && data.pageWidth > 0) ? data.pageWidth : pageWidth_1;
                                        proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.renderPages, data);
                                        var pageNumber = (data.pageNumber !== undefined) ? data.pageNumber : pageIndex;
                                        if ((viewPortWidth_1 >= currentPageWidth) || !proxy.pdfViewer.tileRenderingSettings.enableTileRendering) {
                                            proxy.storeWinData(data, pageNumber);
                                        }
                                        else {
                                            proxy.storeWinData(data, pageNumber, data.tileX, data.tileY);
                                        }
                                        if ((viewPortWidth_1 >= currentPageWidth) || !proxy.pdfViewer.tileRenderingSettings.enableTileRendering) {
                                            proxy.renderPage(data, pageNumber);
                                        }
                                        else {
                                            proxy.tileRenderPage(data, pageNumber);
                                        }
                                    }
                                }
                            };
                            // eslint-disable-next-line
                            this.pageRequestHandler.onFailure = function (result) {
                                // eslint-disable-next-line max-len
                                proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.renderPages);
                            };
                            // eslint-disable-next-line
                            this.pageRequestHandler.onError = function (result) {
                                proxy.openNotificationPopup();
                                // eslint-disable-next-line max-len
                                proxy.pdfViewer.fireAjaxRequestFailed(result.status, result.statusText, proxy.pdfViewer.serverActionSettings.renderPages);
                            };
                        }
                    }
                }
                proxy.renderedPagesList.push(pageIndex);
            }
        }
    };
    PdfViewerBase.prototype.pageRequestSent = function (pageIndex, tileX, tileY) {
        var zoomFactor = this.retrieveCurrentZoomFactor();
        var currentString = this.documentId + '_' + pageIndex + '_' + tileX + '_' + tileY + '_' + zoomFactor;
        if (this.requestLists && this.requestLists.indexOf(currentString) > -1) {
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {string} status - The status message.
     * @param {string} errorMessage - The error message.
     * @param {string} action - The action.
     * @returns {void}
     */
    PdfViewerBase.prototype.onControlError = function (status, errorMessage, action) {
        this.openNotificationPopup();
        this.pdfViewer.fireAjaxRequestFailed(status, errorMessage, action);
    };
    /**
     * @param pageIndex
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.getStoredData = function (pageIndex, isTextSearch) {
        var zoomFactor = this.retrieveCurrentZoomFactor();
        if (this.pdfViewer.restrictZoomRequest && !this.pdfViewer.tileRenderingSettings.enableTileRendering) {
            zoomFactor = 1;
        }
        // eslint-disable-next-line
        var storedData = this.getWindowSessionStorage(pageIndex, zoomFactor) ? this.getWindowSessionStorage(pageIndex, zoomFactor) : this.getPinchZoomPage(pageIndex);
        if (!storedData && isTextSearch) {
            // eslint-disable-next-line
            var storedTileData = this.getWindowSessionStorageTile(pageIndex, 0, 0, zoomFactor);
            if (storedTileData) {
                storedData = storedTileData;
            }
        }
        // eslint-disable-next-line
        var data = null;
        if (storedData) {
            // eslint-disable-next-line
            data = storedData;
            if (!this.isPinchZoomStorage) {
                data = JSON.parse(storedData);
            }
            this.isPinchZoomStorage = false;
        }
        return data;
    };
    /**
     * @private
     * @param  {any} data - The data.
     * @param {number} pageIndex - The pageIndex.
     * @param {number} tileX - The tileX.
     * @param {number} tileY - The tileY.
     * @returns {void}
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.storeWinData = function (data, pageIndex, tileX, tileY) {
        // eslint-disable-next-line
        var blobObj = this.createBlobUrl(data['image'].split('base64,')[1], 'image/png');
        // eslint-disable-next-line
        var Url = URL || webkitURL;
        var blobUrl = Url.createObjectURL(blobObj);
        // eslint-disable-next-line
        var storeObject;
        if ((isNaN(tileX) && isNaN(tileY)) || (tileX === 0 && tileY === 0)) {
            storeObject = {
                // eslint-disable-next-line
                image: blobUrl, transformationMatrix: data['transformationMatrix'], hyperlinks: data['hyperlinks'], hyperlinkBounds: data['hyperlinkBounds'], linkAnnotation: data['linkAnnotation'], linkPage: data['linkPage'], annotationLocation: data['annotationLocation'],
                // eslint-disable-next-line
                textContent: data['textContent'], width: data['width'], textBounds: data['textBounds'], pageText: data['pageText'], rotation: data['rotation'], scaleFactor: data['scaleFactor'], uniqueId: data['uniqueId'], zoomFactor: data['zoomFactor'], tileX: tileX, tileY: tileY
            };
            if (this.pageSize[pageIndex]) {
                // eslint-disable-next-line
                this.pageSize[pageIndex].rotation = parseFloat(data['rotation']);
            }
            // eslint-disable-next-line
            this.textLayer.characterBound[pageIndex] = data['characterBounds'];
        }
        else {
            storeObject = {
                // eslint-disable-next-line
                image: blobUrl, transformationMatrix: data['transformationMatrix'], tileX: tileX, tileY: tileY, width: data['width'], zoomFactor: data['zoomFactor']
            };
        }
        // eslint-disable-next-line
        var viewPortWidth = 816;
        var pageWidth = 0;
        if (this.pageSize[pageIndex]) {
            pageWidth = this.pageSize[pageIndex].width;
        }
        this.manageSessionStorage(pageIndex, storeObject, tileX, tileY);
    };
    /**
     * @private
     * @param {XMLHttpRequest} request - The Xml request.
     * @returns {void}
     */
    PdfViewerBase.prototype.setCustomAjaxHeaders = function (request) {
        for (var i = 0; i < this.pdfViewer.ajaxRequestSettings.ajaxHeaders.length; i++) {
            // eslint-disable-next-line max-len
            request.setRequestHeader(this.pdfViewer.ajaxRequestSettings.ajaxHeaders[i].headerName, this.pdfViewer.ajaxRequestSettings.ajaxHeaders[i].headerValue);
        }
    };
    /**
     * @private
     * @param {number} pageIndex - Page index.
     * @returns {object}
     */
    PdfViewerBase.prototype.getPinchZoomPage = function (pageIndex) {
        // eslint-disable-next-line
        for (var key in this.pinchZoomStorage) {
            // eslint-disable-next-line
            if (this.pinchZoomStorage.hasOwnProperty(key)) {
                if (this.pinchZoomStorage[key].index === pageIndex) {
                    this.isPinchZoomStorage = true;
                    return this.pinchZoomStorage[key].pinchZoomStorage;
                }
            }
        }
        return null;
    };
    /**
     * @private
     * @param {number} pageIndex - current page index.
     * @param {number} zoomFactor - cuurent zoom factor
     * @returns {string}
     */
    PdfViewerBase.prototype.getWindowSessionStorage = function (pageIndex, zoomFactor) {
        return window.sessionStorage.getItem(this.documentId + '_' + pageIndex + '_' + zoomFactor);
    };
    /**
     * @private
     * @param {number} pageIndex - current page index.
     * @param {number} tileX - cuurent tile x
     * @param {number} tileY - cuurent tile y
     * @param {number} zoomFactor - cuurent zoom factor
     * @returns {string}
     */
    PdfViewerBase.prototype.getWindowSessionStorageTile = function (pageIndex, tileX, tileY, zoomFactor) {
        return window.sessionStorage.getItem(this.documentId + '_' + pageIndex + '_' + tileX + '_' + tileY + '_' + zoomFactor);
    };
    /**
     * @private
     * @returns {number}
     */
    PdfViewerBase.prototype.retrieveCurrentZoomFactor = function () {
        var zoomFactor = this.getZoomFactor();
        if (this.pdfViewer.enableZoomOptimization) {
            if ((zoomFactor) <= 1) {
                zoomFactor = 1;
            }
            else if ((zoomFactor) > 1 && zoomFactor <= 2) {
                zoomFactor = 2;
            }
            else if ((zoomFactor) > 2 && zoomFactor <= 3) {
                zoomFactor = 3;
            }
            else if ((zoomFactor) > 3 && zoomFactor <= 4) {
                zoomFactor = 4;
            }
            return zoomFactor;
        }
        else {
            if (zoomFactor <= 0) {
                zoomFactor = 1;
            }
            return zoomFactor;
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.manageSessionStorage = function (pageIndex, storeObject, tileX, tileY) {
        // eslint-disable-next-line
        var sessionSize = Math.round(JSON.stringify(window.sessionStorage).length / 1024);
        var maxSessionSize = 5000;
        if (sessionSize >= maxSessionSize) {
            if (!this.isStorageExceed) {
                // eslint-disable-next-line
                var annotationList = [];
                for (var i = 0; i < window.sessionStorage.length; i++) {
                    if (window.sessionStorage.key(i) && window.sessionStorage.key(i).split('_')[3]) {
                        if (window.sessionStorage.key(i).split('_')[3] === 'annotations') {
                            // eslint-disable-next-line max-len
                            this.annotationStorage[window.sessionStorage.key(i)] = window.sessionStorage.getItem(window.sessionStorage.key(i));
                            annotationList.push(window.sessionStorage.key(i));
                        }
                    }
                }
                if (annotationList) {
                    for (var i = 0; i < annotationList.length; i++) {
                        window.sessionStorage.removeItem(annotationList[i]);
                    }
                }
            }
            this.isStorageExceed = true;
            sessionSize = Math.round(JSON.stringify(window.sessionStorage).length / 1024);
            if (sessionSize >= 5000) {
                var storageLength = window.sessionStorage.length;
                if (storageLength > 200) {
                    storageLength = 200;
                }
                for (var i = 0; i < storageLength; i++) {
                    if (window.sessionStorage.key(i) && window.sessionStorage.key(i).split('_')[3]) {
                        if (window.sessionStorage.key(i).split('_')[3] !== 'annotations') {
                            window.sessionStorage.removeItem(window.sessionStorage.key(i));
                        }
                    }
                }
            }
        }
        var zoomFactor = this.retrieveCurrentZoomFactor();
        if (isNaN(tileX) && isNaN(tileY)) {
            // eslint-disable-next-line max-len
            window.sessionStorage.setItem(this.documentId + '_' + pageIndex + '_' + zoomFactor, JSON.stringify(storeObject));
            this.sessionStorage.push(this.documentId + '_' + pageIndex + '_' + zoomFactor);
        }
        else {
            this.sessionStorage.push(this.documentId + '_' + pageIndex + '_' + tileX + '_' + tileY + '_' + zoomFactor);
            // eslint-disable-next-line max-len
            window.sessionStorage.setItem(this.documentId + '_' + pageIndex + '_' + tileX + '_' + tileY + '_' + zoomFactor, JSON.stringify(storeObject));
        }
    };
    PdfViewerBase.prototype.createBlobUrl = function (base64String, contentType) {
        var sliceSize = 512;
        var byteCharacters = atob(base64String);
        // eslint-disable-next-line
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            // eslint-disable-next-line
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            // eslint-disable-next-line
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        // eslint-disable-next-line
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    PdfViewerBase.prototype.getRandomNumber = function () {
        // eslint-disable-next-line
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // eslint-disable-next-line
            var random = Math.random() * 16 | 0, v = c == 'x' ? random : (random & 0x3 | 0x8);
            return random.toString(16);
        });
    };
    PdfViewerBase.prototype.createGUID = function () {
        // eslint-disable-next-line max-len
        return 'Sync_PdfViewer_' + this.getRandomNumber();
    };
    /**
     * @private
     * @param {MouseEvent} event - The mouse event.
     * @param {boolean} isNeedToSet - Is need to test.
     * @returns {boolean} - Returns true or false.
     */
    PdfViewerBase.prototype.isClickedOnScrollBar = function (event, isNeedToSet) {
        var isScrollBar = false;
        if (isNeedToSet) {
            this.setScrollDownValue(event.type, false);
        }
        // eslint-disable-next-line max-len
        if ((this.viewerContainer.clientWidth + this.viewerContainer.offsetLeft) < event.clientX && event.clientX < (this.viewerContainer.offsetWidth + this.viewerContainer.offsetLeft)) {
            isScrollBar = true;
            if (isNeedToSet) {
                this.setScrollDownValue(event.type, true);
            }
        }
        // eslint-disable-next-line max-len
        if ((this.viewerContainer.clientHeight + this.viewerContainer.offsetTop) < event.clientY && event.clientY < (this.viewerContainer.offsetHeight + this.viewerContainer.offsetTop)) {
            isScrollBar = true;
            if (isNeedToSet) {
                this.setScrollDownValue(event.type, true);
            }
        }
        return isScrollBar;
    };
    PdfViewerBase.prototype.setScrollDownValue = function (eventType, boolValue) {
        if (eventType === 'mousedown') {
            this.isScrollbarMouseDown = boolValue;
        }
    };
    /**
     * @private
     * @returns {void}
     */
    PdfViewerBase.prototype.disableTextSelectionMode = function () {
        this.isTextSelectionDisabled = true;
        this.viewerContainer.classList.remove('e-enable-text-selection');
        if (this.pdfViewer.textSelectionModule) {
            this.pdfViewer.textSelectionModule.clearTextSelection();
        }
        this.viewerContainer.classList.add('e-disable-text-selection');
        this.viewerContainer.addEventListener('selectstart', function () {
            return false;
        });
    };
    /**
     * @private
     * @param {string} idString - The Id string.
     * @returns {HTMLElement} - The html element.
     */
    PdfViewerBase.prototype.getElement = function (idString) {
        return document.getElementById(this.pdfViewer.element.id + idString);
    };
    /**
     * @private
     * @param {number} pageIndex - The pageIndex
     * @returns {number} - Returns number
     */
    PdfViewerBase.prototype.getPageWidth = function (pageIndex) {
        if (this.pageSize[pageIndex]) {
            return this.pageSize[pageIndex].width * this.getZoomFactor();
        }
        else {
            return 0;
        }
    };
    /**
     * @private
     * @param {number} pageIndex - The pageIndex
     * @returns {number} - Returns number
     */
    PdfViewerBase.prototype.getPageHeight = function (pageIndex) {
        if (this.pageSize[pageIndex]) {
            return this.pageSize[pageIndex].height * this.getZoomFactor();
        }
        else {
            return 0;
        }
    };
    /**
     * @private
     * @param {number} pageIndex - The pageIndex.
     * @returns {number} - Returns number
     */
    PdfViewerBase.prototype.getPageTop = function (pageIndex) {
        if (this.pageSize[pageIndex]) {
            return this.pageSize[pageIndex].top * this.getZoomFactor();
        }
        else {
            return 0;
        }
    };
    PdfViewerBase.prototype.isAnnotationToolbarHidden = function () {
        if (this.pdfViewer.toolbarModule.annotationToolbarModule) {
            return this.pdfViewer.toolbarModule.annotationToolbarModule.isToolbarHidden;
        }
        else {
            return true;
        }
    };
    PdfViewerBase.prototype.isFormDesignerToolbarHidded = function () {
        var formDesignerToolbar = this.pdfViewer.toolbarModule.formDesignerToolbarModule;
        if (formDesignerToolbar) {
            return formDesignerToolbar.isToolbarHidden;
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @returns {boolean} - Returns true or false.
     */
    PdfViewerBase.prototype.getTextMarkupAnnotationMode = function () {
        if (this.isTextMarkupAnnotationModule()) {
            return this.pdfViewer.annotationModule.textMarkupAnnotationModule.isTextMarkupAnnotationMode;
        }
        else {
            return false;
        }
    };
    PdfViewerBase.prototype.isNewFreeTextAnnotation = function () {
        // eslint-disable-next-line max-len
        if (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule) {
            if (!this.pdfViewer.annotationModule.freeTextAnnotationModule.isNewFreeTextAnnot) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    PdfViewerBase.prototype.getCurrentTextMarkupAnnotation = function () {
        if (this.isTextMarkupAnnotationModule()) {
            if (this.pdfViewer.annotationModule.textMarkupAnnotationModule.currentTextMarkupAnnotation) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {number} - Returns page number.
     */
    PdfViewerBase.prototype.getSelectTextMarkupCurrentPage = function () {
        if (this.isTextMarkupAnnotationModule()) {
            return this.pdfViewer.annotationModule.textMarkupAnnotationModule.selectTextMarkupCurrentPage;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.getAnnotationToolStatus = function () {
        if (this.pdfViewer.toolbarModule) {
            return this.pdfViewer.toolbarModule.annotationToolbarModule.isAnnotationButtonsEnabled();
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.getPopupNoteVisibleStatus = function () {
        if (this.pdfViewer.annotationModule) {
            return this.pdfViewer.annotationModule.isPopupNoteVisible;
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {TextMarkupAnnotation} - TextMarkupAnnotation.
     */
    PdfViewerBase.prototype.isTextMarkupAnnotationModule = function () {
        if (this.pdfViewer.annotationModule) {
            return this.pdfViewer.annotationModule.textMarkupAnnotationModule;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @returns {boolean} - Returns true or false.
     */
    PdfViewerBase.prototype.isShapeAnnotationModule = function () {
        if (this.pdfViewer.annotation) {
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.shapeAnnotationModule) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.isFormDesignerModule = function () {
        if (this.pdfViewer.formDesignerModule) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.isCalibrateAnnotationModule = function () {
        if (this.pdfViewer.annotation) {
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.measureAnnotationModule) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.isStampAnnotationModule = function () {
        if (this.pdfViewer.annotation) {
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.stampAnnotationModule) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.isInkAnnotationModule = function () {
        if (this.pdfViewer.annotation) {
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.inkAnnotationModule) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.isCommentAnnotationModule = function () {
        if (this.pdfViewer.annotation) {
            if (this.pdfViewer.annotation && this.pdfViewer.annotation.stickyNotesAnnotationModule) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @returns {boolean} - Retunrs true or false.
     */
    PdfViewerBase.prototype.isShapeBasedAnnotationsEnabled = function () {
        // eslint-disable-next-line max-len
        if (this.isShapeAnnotationModule() || this.isCalibrateAnnotationModule() || this.isStampAnnotationModule() || this.isCommentAnnotationModule() || this.isFormDesignerModule()) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @param {MouseEvent | PointerEvent | TouchEvent} e - Returns event.
     * @returns {PointModel} - Returns points.
     */
    PdfViewerBase.prototype.getMousePosition = function (e) {
        var touchArg;
        var offsetX;
        var offsetY;
        var currentTarget = e.target.parentElement;
        if (e.type.indexOf('touch') !== -1) {
            touchArg = e;
            if (this.pdfViewer.annotation) {
                var pageDiv = this.getElement('_pageDiv_' + this.pdfViewer.annotation.getEventPageNumber(e));
                if (pageDiv) {
                    var pageCurrentRect = pageDiv.getBoundingClientRect();
                    offsetX = touchArg.changedTouches[0].clientX - pageCurrentRect.left;
                    offsetY = touchArg.changedTouches[0].clientY - pageCurrentRect.top;
                }
            }
        }
        else {
            if (e.target.classList.contains('e-pv-hyperlink')) {
                offsetX = e.offsetX + e.target.offsetLeft;
                offsetY = e.offsetY + e.target.offsetTop;
            }
            else if (e.target.classList.contains('e-pv-text') && currentTarget) {
                var targetParentRect = currentTarget.getBoundingClientRect();
                offsetX = e.clientX - targetParentRect.left;
                offsetY = e.clientY - targetParentRect.top;
                // eslint-disable-next-line
            }
            else if (e.target && (e && e.path) && currentTarget && (currentTarget.classList.contains('foreign-object') || currentTarget.parentElement.classList.contains('foreign-object'))) {
                // eslint-disable-next-line
                var targetParentRect = void 0;
                if (e.path[4].className === 'e-pv-page-div') {
                    targetParentRect = e.path[4].getBoundingClientRect();
                }
                else {
                    for (var i = 0; i < e.path.length; i++) {
                        if (e.path[i].className === 'e-pv-page-div') {
                            targetParentRect = e.path[i].getBoundingClientRect();
                            break;
                        }
                    }
                }
                offsetX = e.clientX - targetParentRect.left;
                offsetY = e.clientY - targetParentRect.top;
                // eslint-disable-next-line
            }
            else if (e.target && currentTarget && currentTarget.classList.contains('foreign-object')) {
                // eslint-disable-next-line
                var targetParentRect = e.target.offsetParent.offsetParent.offsetParent.getBoundingClientRect();
                offsetX = e.clientX - targetParentRect.left;
                offsetY = e.clientY - targetParentRect.top;
                // eslint-disable-next-line
            }
            else {
                offsetX = e.offsetX;
                offsetY = e.offsetY;
            }
        }
        return { x: offsetX, y: offsetY };
    };
    PdfViewerBase.prototype.getMouseEventArgs = function (position, args, evt, source) {
        args.position = position;
        var obj;
        var objects;
        if (!source) {
            if (this.action === 'Drag' || this.action === 'ConnectorSourceEnd' || this.action === 'SegmentEnd' ||
                this.action === 'OrthoThumb' || this.action === 'BezierSourceThumb' || this.action === 'BezierTargetThumb' ||
                this.action === 'ConnectorTargetEnd' || this.action.indexOf('Rotate') !== -1 || this.action.indexOf('Resize') !== -1) {
                obj = this.pdfViewer.selectedItems;
                if (this.action === 'Drag' && obj && this.pdfViewer.selectedItems.annotations.length > 0) {
                    obj = findActiveElement(evt, this, this.pdfViewer);
                }
                else if (this.action === 'Drag' && obj && this.pdfViewer.selectedItems.formFields.length > 0) {
                    obj = findActiveElement(evt, this, this.pdfViewer);
                }
            }
            else {
                obj = findActiveElement(evt, this, this.pdfViewer);
            }
        }
        else {
            //   objects = this.diagram.findObjectsUnderMouse(this.currentPosition, source);
            obj = findActiveElement(evt, this, this.pdfViewer);
        }
        var wrapper;
        if (obj) {
            wrapper = obj.wrapper;
        }
        if (!source) {
            args.source = obj;
            args.sourceWrapper = wrapper;
        }
        else {
            args.target = obj;
            args.targetWrapper = wrapper;
        }
        args.actualObject = this.eventArgs.actualObject;
        //args.startTouches = this.touchStartList;
        //args.moveTouches = this.touchMoveList;
        return args;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - The object.
     * @param {PointModel} position - The position.
     * @returns {Actions | string} - Returns the string.
     */
    PdfViewerBase.prototype.findToolToActivate = function (obj, position) {
        position = { x: position.x / this.getZoomFactor(), y: position.y / this.getZoomFactor() };
        var element = this.pdfViewer.selectedItems.wrapper;
        if (element && obj) {
            var selectorBnds = element.bounds; //let handle: SelectorModel = diagram.selectedItems;
            var paddedBounds = new Rect(selectorBnds.x, selectorBnds.y, selectorBnds.width, selectorBnds.height);
            if (obj.shapeAnnotationType === 'Line' || obj.shapeAnnotationType === 'LineWidthArrowHead' ||
                obj.shapeAnnotationType === 'Distance' || obj.shapeAnnotationType === 'Polygon') {
                var conn = this.pdfViewer.selectedItems.annotations[0];
                if (conn) {
                    for (var i = 0; i < conn.vertexPoints.length; i++) {
                        if (contains(position, conn.vertexPoints[i], 10) && conn.leaderHeight !== 0) {
                            return 'ConnectorSegmentPoint_' + i;
                        }
                    }
                }
            }
            if (obj.shapeAnnotationType === 'Distance') {
                var leaderCount = 0;
                var newPoint1 = void 0;
                if (obj && obj.wrapper) {
                    for (var i = 0; i < obj.wrapper.children.length; i++) {
                        var elementAngle = Point.findAngle(obj.sourcePoint, obj.targetPoint);
                        // eslint-disable-next-line
                        var segment = obj.wrapper.children[i];
                        if (segment.id.indexOf('leader') > -1) {
                            var centerPoint = obj.wrapper.children[0].bounds.center;
                            if (leaderCount === 0) {
                                newPoint1 = { x: obj.sourcePoint.x, y: obj.sourcePoint.y - obj.leaderHeight };
                                centerPoint = obj.sourcePoint;
                            }
                            else {
                                newPoint1 = { x: obj.targetPoint.x, y: obj.targetPoint.y - obj.leaderHeight };
                                centerPoint = obj.targetPoint;
                            }
                            var matrix_1 = identityMatrix();
                            rotateMatrix(matrix_1, elementAngle, centerPoint.x, centerPoint.y);
                            var rotatedPoint = transformPointByMatrix(matrix_1, { x: newPoint1.x, y: newPoint1.y });
                            if (contains(position, rotatedPoint, 10)) {
                                return 'Leader' + leaderCount;
                            }
                            leaderCount++;
                        }
                    }
                }
            }
            var ten = this.pdfViewer.touchPadding / this.getZoomFactor();
            var matrix = identityMatrix();
            rotateMatrix(matrix, obj.rotateAngle + element.parentTransform, element.offsetX, element.offsetY);
            //check for resizing tool
            var x = element.offsetX - element.pivot.x * element.actualSize.width;
            var y = element.offsetY - element.pivot.y * element.actualSize.height;
            var rotateThumb = {
                x: x + ((element.pivot.x === 0.5 ? element.pivot.x * 2 : element.pivot.x) * element.actualSize.width / 2),
                y: y - 30 / this.getZoomFactor()
            };
            rotateThumb = transformPointByMatrix(matrix, rotateThumb);
            if (obj.shapeAnnotationType === 'Stamp' && contains(position, rotateThumb, ten)) {
                return 'Rotate';
            }
            paddedBounds = this.inflate(ten, paddedBounds);
            if (paddedBounds.containsPoint(position, 0)) {
                var action = this.checkResizeHandles(this.pdfViewer, element, position, matrix, x, y);
                if (action) {
                    return action;
                }
            }
            if (this.pdfViewer.selectedItems.annotations.indexOf(obj) > -1) {
                return 'Drag';
            }
            else if (this.pdfViewer.selectedItems.formFields.indexOf(obj) > -1 && this.pdfViewer.designerMode) {
                return 'Drag';
            }
            return 'Select';
        }
        return this.pdfViewer.tool || 'Select';
    };
    PdfViewerBase.prototype.inflate = function (padding, bound) {
        bound.x -= padding;
        bound.y -= padding;
        bound.width += padding * 2;
        bound.height += padding * 2;
        return bound;
    };
    PdfViewerBase.prototype.checkResizeHandles = function (diagram, element, position, matrix, x, y) {
        var action;
        if (!action) {
            action = this.checkForResizeHandles(diagram, element, position, matrix, x, y);
        }
        if (action) {
            return action;
        }
        return null;
    };
    PdfViewerBase.prototype.checkForResizeHandles = function (diagram, element, position, matrix, x, y) {
        var forty = 40 / 1;
        var ten = this.pdfViewer.touchPadding / 1;
        if (element.actualSize.width < 40 || element.actualSize.height < 40) {
            ten = ten / 2 * this.getZoomFactor() / 1;
        }
        var selectedItems = diagram.selectedItems;
        var isStamp = false;
        var isSticky = false;
        var isNodeShape = false;
        var isInk = false;
        var resizerLocation = this.pdfViewer.annotationSelectorSettings.resizerLocation;
        if (resizerLocation < 1 || resizerLocation > 3) {
            resizerLocation = 3;
        }
        // eslint-disable-next-line max-len
        if (this.pdfViewer.selectedItems.annotations[0] && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Stamp'
            || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'FreeText' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Image' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'HandWrittenSignature'
            || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureText' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureImage')) {
            isStamp = true;
        }
        // eslint-disable-next-line max-len
        if (this.pdfViewer.selectedItems.annotations[0] && this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'StickyNotes') {
            isSticky = true;
        }
        // eslint-disable-next-line max-len
        if (this.pdfViewer.selectedItems.annotations[0] && this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Ink') {
            isInk = true;
        }
        // eslint-disable-next-line max-len
        if (this.pdfViewer.selectedItems.annotations[0] && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Ellipse' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Radius' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Rectangle')) {
            isNodeShape = true;
        }
        if (!isSticky) {
            // eslint-disable-next-line max-len
            if ((isInk || isStamp || (this.pdfViewer.selectedItems.annotations[0] && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'HandWrittenSignature' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureText' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureImage')) || ((element.actualSize.width >= forty && element.actualSize.height >= forty) && isNodeShape && (resizerLocation === 1 || resizerLocation === 3)))) {
                if (contains(position, transformPointByMatrix(matrix, { x: x + element.actualSize.width, y: y + element.actualSize.height }), ten)) {
                    return 'ResizeSouthEast';
                }
                if (contains(position, transformPointByMatrix(matrix, { x: x, y: y + element.actualSize.height }), ten)) {
                    return 'ResizeSouthWest';
                }
                if (contains(position, transformPointByMatrix(matrix, { x: x + element.actualSize.width, y: y }), ten)) {
                    return 'ResizeNorthEast';
                }
                if (contains(position, transformPointByMatrix(matrix, { x: x, y: y }), ten)) {
                    return 'ResizeNorthWest';
                }
            }
            // eslint-disable-next-line max-len
            if (isInk || !isNodeShape || (isNodeShape && (resizerLocation === 2 || resizerLocation === 3 || (!(element.actualSize.width >= forty && element.actualSize.height >= forty) && resizerLocation === 1)))) {
                if (contains(
                // eslint-disable-next-line max-len
                position, transformPointByMatrix(matrix, { x: x + element.actualSize.width, y: y + element.actualSize.height / 2 }), ten) && !isStamp) {
                    return 'ResizeEast';
                }
                // eslint-disable-next-line max-len
                if (contains(position, transformPointByMatrix(matrix, { x: x, y: y + element.actualSize.height / 2 }), ten) && !isStamp) {
                    return 'ResizeWest';
                }
                if (contains(
                // eslint-disable-next-line max-len
                position, transformPointByMatrix(matrix, { x: x + element.actualSize.width / 2, y: y + element.actualSize.height }), ten) && !isStamp) {
                    return 'ResizeSouth';
                }
                // eslint-disable-next-line max-len
                if (contains(position, transformPointByMatrix(matrix, { x: x + element.actualSize.width / 2, y: y }), ten) && !isStamp) {
                    return 'ResizeNorth';
                }
            }
        }
        return null;
    };
    /**
     * @private
     * @param {string} fieldID - The fieldID
     * @returns {boolean} - Returns true or false.
     */
    PdfViewerBase.prototype.checkSignatureFormField = function (fieldID) {
        var isFormFieldSign = false;
        if (this.pdfViewer.formDesignerModule) {
            fieldID = fieldID.split('_')[0];
        }
        // eslint-disable-next-line
        var formField = this.pdfViewer.nameTable[fieldID];
        if (formField) {
            if (formField.formFieldAnnotationType === 'SignatureField' || formField.formFieldAnnotationType === 'InitialField' || formField.annotName === 'SignatureField') {
                isFormFieldSign = true;
            }
        }
        return isFormFieldSign;
    };
    /**
     * @private
     * @param {MouseEvent | TouchEvent} evt - The event.
     * @returns {void}
     */
    PdfViewerBase.prototype.diagramMouseMove = function (evt) {
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        this.currentPosition = this.getMousePosition(evt);
        this.pdfViewer.firePageMouseover(this.currentPosition.x, this.currentPosition.y);
        if (this.pdfViewer.annotation) {
            this.activeElements.activePageID = this.pdfViewer.annotation.getEventPageNumber(evt);
        }
        else if (this.pdfViewer.formDesignerModule) {
            this.activeElements.activePageID = this.pdfViewer.formDesignerModule.getEventPageNumber(evt);
        }
        var obj = findActiveElement(evt, this, this.pdfViewer);
        if ((this.tool instanceof NodeDrawingTool) || (this.tool instanceof LineTool)) {
            obj = this.pdfViewer.drawingObject;
        }
        var target;
        var isFormFieldSign = this.pdfViewer.selectedItems.annotations.length > 0 ? this.checkSignatureFormField(this.pdfViewer.selectedItems.annotations[0].id) : false;
        if ((Point.equals(this.currentPosition, this.prevPosition) === false || this.inAction)) {
            if (this.isMouseDown === false) {
                this.eventArgs = {};
                var sourceDrawingElement = null;
                if (obj) {
                    this.tool = this.getTool(this.action);
                    if (obj.wrapper) {
                        sourceDrawingElement = obj.wrapper.children[0];
                        if (sourceDrawingElement) {
                            target = obj;
                        }
                    }
                }
                var eventTarget = evt.target;
                this.action = this.findToolToActivate(obj, this.currentPosition);
                // eslint-disable-next-line
                if (obj && obj.annotationSettings && obj.annotationSettings.isLock) {
                    if (this.action === 'Select') {
                        if (!this.pdfViewer.annotationModule.checkAllowedInteractions('Select', obj)) {
                            this.action = '';
                        }
                    }
                    if (this.action === 'Drag') {
                        if (!this.pdfViewer.annotationModule.checkAllowedInteractions('Move', obj)) {
                            this.action = 'Select';
                        }
                    }
                    // eslint-disable-next-line max-len
                    if (this.action === 'ResizeSouthEast' || this.action === 'ResizeNorthEast' || this.action === 'ResizeNorthWest' || this.action === 'ResizeSouthWest' ||
                        // eslint-disable-next-line max-len
                        this.action === 'ResizeNorth' || this.action === 'ResizeWest' || this.action === 'ResizeEast' || this.action === 'ResizeSouth' || this.action.includes('ConnectorSegmentPoint') || this.action.includes('Leader')) {
                        if (!this.pdfViewer.annotationModule.checkAllowedInteractions('Resize', obj)) {
                            this.action = 'Select';
                        }
                    }
                }
                // eslint-disable-next-line max-len
                if (!this.pdfViewer.designerMode && ((!isNullOrUndefined(target) && (!isNullOrUndefined(target.formFieldAnnotationType))) || isFormFieldSign)) {
                    if (this.action === 'ResizeSouthEast' || this.action === 'ResizeNorthEast' || this.action === 'ResizeNorthWest' || this.action === 'ResizeSouthWest' ||
                        // eslint-disable-next-line max-len
                        this.action === 'ResizeNorth' || this.action === 'Drag' || this.action === 'ResizeWest' || this.action === 'ResizeEast' || this.action === 'ResizeSouth' || this.action.includes('ConnectorSegmentPoint') || this.action.includes('Leader')) {
                        this.action = '';
                    }
                }
                this.tool = this.getTool(this.action);
                this.setCursor(eventTarget, evt);
                if (this.pdfViewer.linkAnnotationModule) {
                    this.pdfViewer.linkAnnotationModule.disableHyperlinkNavigationUnderObjects(eventTarget, evt, this);
                }
            }
            else {
                if (!this.tool && this.action && this.action === 'Rotate') {
                    this.tool = this.getTool(this.action);
                    if (evt.target) {
                        this.setCursor(evt.target, evt);
                    }
                }
                // eslint-disable-next-line max-len
                if (!this.pdfViewer.designerMode && ((!isNullOrUndefined(target) && (!isNullOrUndefined(target.formFieldAnnotationType))) || isFormFieldSign)) {
                    if (this.action === 'ResizeSouthEast' || this.action === 'ResizeNorthEast' || this.action === 'ResizeNorthWest' || this.action === 'ResizeSouthWest' ||
                        // eslint-disable-next-line max-len
                        this.action === 'ResizeNorth' || this.action === 'Drag' || this.action === 'ResizeWest' || this.action === 'ResizeEast' || this.action === 'ResizeSouth' || this.action.includes('ConnectorSegmentPoint') || this.action.includes('Leader')) {
                        this.action = '';
                        this.tool = null;
                    }
                }
                if (this.eventArgs && this.eventArgs.source) {
                    var eventTarget = evt.target;
                    this.updateDefaultCursor(this.eventArgs.source, eventTarget, evt);
                }
                else {
                    this.setCursor(evt.target, evt);
                }
                this.diagramMouseActionHelper(evt);
                if (this.tool) {
                    var currentObject = obj;
                    if (currentObject && currentObject.shapeAnnotationType === 'FreeText') {
                        if (this.pdfViewer.freeTextSettings.allowEditTextOnly && this.action !== "Ink" &&
                            (this.eventArgs.source && this.eventArgs.source.shapeAnnotationType === "FreeText")) {
                            var eventTarget = event.target;
                            eventTarget.style.cursor = 'default';
                            this.tool = null;
                        }
                    }
                    if (this.tool != null) {
                        var info = { ctrlKey: evt.ctrlKey, shiftKey: evt.shiftKey };
                        this.eventArgs.info = info;
                        this.tool.mouseMove(this.eventArgs);
                    }
                }
            }
            if (this.pdfViewer.drawingObject && this.pdfViewer.drawingObject.formFieldAnnotationType && this.action !== 'Drag') {
                if (!(this.tool instanceof ResizeTool)) {
                    this.tool = this.getTool(this.action);
                    if (this.tool instanceof NodeDrawingTool) {
                        var obj_1 = this.pdfViewer.drawingObject;
                        // eslint-disable-next-line
                        var bounds = this.pdfViewer.formDesignerModule.updateFormFieldInitialSize(obj_1, obj_1.formFieldAnnotationType);
                        var pageWidth = this.pageContainer.firstElementChild.clientWidth - bounds.width;
                        var pageHeight = this.pageContainer.firstElementChild.clientHeight - bounds.height;
                        if (this.pdfViewer.formDesignerModule && obj_1.formFieldAnnotationType
                            && this.currentPosition.x < pageWidth && this.currentPosition.y < pageHeight) {
                            // eslint-disable-next-line
                            var formFieldElement = document.getElementById('FormField_helper_html_element');
                            if (!formFieldElement) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.formDesignerModule.drawHelper(obj_1.formFieldAnnotationType, obj_1, evt);
                            }
                            else if (formFieldElement) {
                                var previousActivePage = formFieldElement.parentElement.id.split("_text_")[1] || formFieldElement.parentElement.id.split("_textLayer_")[1] || formFieldElement.parentElement.id.split("_annotationCanvas_")[1] || formFieldElement.parentElement.id.split("_pageDiv_")[1];
                                if (parseInt(previousActivePage) !== this.activeElements.activePageID) {
                                    formFieldElement.remove("FormField_helper_html_element");
                                }
                                else {
                                    // eslint-disable-next-line
                                    var point = this.getMousePosition(event);
                                    if (obj_1.formFieldAnnotationType === 'Checkbox') {
                                        formFieldElement.firstElementChild.firstElementChild.lastElementChild.style.visibility = 'visible';
                                    }
                                    else if (obj_1.formFieldAnnotationType === 'SignatureField' || obj_1.formFieldAnnotationType === 'InitialField') {
                                        formFieldElement.firstElementChild.firstElementChild.style.visibility = 'visible';
                                        formFieldElement.firstElementChild.lastElementChild.style.visibility = 'visible';
                                    }
                                    else {
                                        formFieldElement.firstElementChild.firstElementChild.style.visibility = 'visible';
                                    }
                                    formFieldElement.setAttribute('style', 'height:' + bounds.height + 'px; width:' + bounds.width + 'px;left:' + point.x + 'px; top:' + point.y + 'px;' +
                                        'position:absolute;opacity: 0.5;');
                                }
                            }
                        }
                        else if (this.currentPosition.x > pageWidth || this.currentPosition.y > pageHeight) {
                            // eslint-disable-next-line
                            var formFieldElement = document.getElementById('FormField_helper_html_element');
                            if (!formFieldElement) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.formDesignerModule.drawHelper(obj_1.formFieldAnnotationType, obj_1, evt);
                            }
                            else if (formFieldElement) {
                                // eslint-disable-next-line
                                var point = this.getMousePosition(event);
                                formFieldElement.setAttribute('style', 'height:' + bounds.height + 'px; width:' + bounds.width + 'px;left:' + point.x + 'px; top:' + point.y + 'px;' +
                                    'position:absolute;opacity: 0.5;');
                                if (obj_1.formFieldAnnotationType === 'Checkbox') {
                                    formFieldElement.firstElementChild.firstElementChild.lastElementChild.style.visibility = 'hidden';
                                }
                                else if (obj_1.formFieldAnnotationType === 'SignatureField' || obj_1.formFieldAnnotationType === 'InitialField') {
                                    formFieldElement.firstElementChild.firstElementChild.style.visibility = 'hidden';
                                    formFieldElement.firstElementChild.lastElementChild.style.visibility = 'hidden';
                                }
                                else {
                                    formFieldElement.firstElementChild.firstElementChild.style.visibility = 'hidden';
                                }
                            }
                        }
                    }
                }
            }
            this.prevPosition = this.currentPosition;
        }
        this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.updateDefaultCursor = function (source, target, event) {
        // eslint-disable-next-line max-len
        if (source && source.pageIndex !== undefined && source.pageIndex !== this.activeElements.activePageID && target) {
            // eslint-disable-next-line
            this.isPanMode ? target.style.cursor = 'grab' : target.style.cursor = 'default';
        }
        else {
            this.setCursor(target, event);
        }
    };
    /**
     * @private
     * @param {MouseEvent | TouchEvent} evt - The event.
     * @returns {void}
     */
    PdfViewerBase.prototype.diagramMouseLeave = function (evt) {
        this.currentPosition = this.getMousePosition(evt);
        if (this.pdfViewer.annotation) {
            this.activeElements.activePageID = this.pdfViewer.annotation.getEventPageNumber(evt);
        }
        var shapeElement = findActiveElement(evt, this, this.pdfViewer);
        var mouseMoveforce = false;
        var target;
        if (Point.equals(this.currentPosition, this.prevPosition) === false || this.inAction) {
            if (this.isMouseDown === false || mouseMoveforce) {
                this.eventArgs = {};
                var sourceElement = null;
                if (shapeElement) {
                    sourceElement = shapeElement.wrapper.children[0];
                    if (sourceElement) {
                        target = shapeElement;
                    }
                    mouseMoveforce = false;
                }
            }
            else {
                this.diagramMouseActionHelper(evt);
                // eslint-disable-next-line max-len
                if (this.tool && this.action !== 'Drag' && this.pdfViewer.tool !== 'Stamp' && this.tool.currentElement && this.tool.currentElement.shapeAnnotationType !== 'Stamp') {
                    this.tool.mouseLeave(this.eventArgs);
                    this.tool = null;
                    if (this.pdfViewer.annotation) {
                        this.pdfViewer.annotationModule.renderAnnotations(this.previousPage, null, null, null);
                    }
                }
            }
            this.prevPosition = this.currentPosition;
        }
    };
    PdfViewerBase.prototype.diagramMouseActionHelper = function (evt) {
        this.eventArgs.position = this.currentPosition;
        if (this.action === 'Drag' &&
            this.eventArgs.source instanceof Selector) {
            this.getMouseEventArgs(this.currentPosition, this.eventArgs, evt);
        }
        this.getMouseEventArgs(this.currentPosition, this.eventArgs, evt, this.eventArgs.source);
        this.inAction = true;
        this.initialEventArgs = null;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.setCursor = function (eventTarget, event) {
        // eslint-disable-next-line max-len
        var freeTextAnnotModule = this.pdfViewer.annotationModule ? this.pdfViewer.annotationModule.freeTextAnnotationModule : null;
        var cursorType;
        if (this.tool instanceof ResizeTool) {
            if (this.tool.corner === 'ResizeNorthWest') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'nw-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeNorthEast') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'ne-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeSouthWest') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'sw-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeSouthEast') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'se-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeNorth') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'n-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeWest') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'w-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeEast') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'e-resize' : cursorType;
            }
            else if (this.tool.corner === 'ResizeSouth') {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 's-resize' : cursorType;
            }
        }
        else if (this.isCommentIconAdded && this.isAddComment) {
            eventTarget.style.cursor = 'crosshair';
        }
        else if (this.pdfViewer.enableHandwrittenSignature && this.isNewSignatureAdded && this.tool instanceof StampTool) {
            eventTarget.style.cursor = 'crosshair';
        }
        else if (this.tool instanceof MoveTool) {
            eventTarget.style.cursor = 'move';
            // eslint-disable-next-line max-len
        }
        else if (this.tool instanceof NodeDrawingTool || this.tool instanceof LineTool || this.tool instanceof PolygonDrawingTool || (freeTextAnnotModule && freeTextAnnotModule.isNewAddedAnnot) || this.tool instanceof InkDrawingTool) {
            eventTarget.style.cursor = 'crosshair';
        }
        else if (this.tool instanceof ConnectTool) {
            if (this.tool.endPoint && this.tool.endPoint.indexOf('Leader0')) {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'nw-resize' : cursorType;
            }
            else if (this.tool.endPoint && this.tool.endPoint.indexOf('Leader1')) {
                cursorType = this.setResizerCursorType();
                eventTarget.style.cursor = isNullOrUndefined(cursorType) ? 'ne-resize' : cursorType;
            }
            else if (this.tool.endPoint && this.tool.endPoint.indexOf('ConnectorSegmentPoint')) {
                eventTarget.style.cursor = 'sw-resize';
            }
        }
        else {
            if (eventTarget.classList.contains('e-pv-text')) {
                eventTarget.style.cursor = 'text';
            }
            else if (eventTarget.classList.contains('e-pv-hyperlink')) {
                eventTarget.style.cursor = 'pointer';
            }
            else if (this.isPanMode) {
                if (this.isViewerMouseDown && event.type === 'mousemove') {
                    eventTarget.style.cursor = 'grabbing';
                }
                else {
                    var obj = findActiveElement(event, this, this.pdfViewer);
                    if (obj && event.type === 'mousemove') {
                        eventTarget.style.cursor = 'pointer';
                        // eslint-disable-next-line max-len
                        var currentObject = obj;
                        // eslint-disable-next-line
                        var currentPosition = this.getMousePosition(event);
                        // eslint-disable-next-line
                        var relativePosition = this.relativePosition(event);
                        // eslint-disable-next-line
                        var viewerPositions = { left: relativePosition.x, top: relativePosition.y };
                        // eslint-disable-next-line
                        var mousePositions = { left: currentPosition.x, top: currentPosition.y };
                        // eslint-disable-next-line
                        var annotationSettings = { opacity: currentObject.opacity, fillColor: currentObject.fillColor, strokeColor: currentObject.strokeColor, thicknes: currentObject.thickness, author: currentObject.author, subject: currentObject.subject, modifiedDate: currentObject.modifiedDate };
                        // eslint-disable-next-line max-len
                        this.isMousedOver = true;
                        var isFormField = this.checkSignatureFormField(currentObject.id);
                        if (currentObject.formFieldAnnotationType) {
                            this.isFormFieldMousedOver = true;
                            var field_1 = {
                                // eslint-disable-next-line
                                value: currentObject.value, fontFamily: currentObject.fontFamily, fontSize: currentObject.fontSize, fontStyle: currentObject.fontStyle,
                                // eslint-disable-next-line max-len
                                color: currentObject.color, backgroundColor: currentObject.backgroundColor, borderColor: currentObject.borderColor,
                                // eslint-disable-next-line
                                thickness: currentObject.thickness, alignment: currentObject.alignment, isReadonly: currentObject.isReadonly, visibility: currentObject.visibility,
                                // eslint-disable-next-line
                                maxLength: currentObject.maxLength, isRequired: currentObject.isRequired, isPrint: currentObject.isPrint, rotation: currentObject.rotateAngle, tooltip: currentObject.tooltip, options: currentObject.options,
                                // eslint-disable-next-line
                                isChecked: currentObject.isChecked, isSelected: currentObject.isSelected
                            };
                            this.pdfViewer.fireFormFieldMouseoverEvent('formFieldMouseover', field_1, currentObject.pageIndex, relativePosition.x, relativePosition.y, currentPosition.x, currentPosition.y);
                        }
                        else {
                            if (!isFormField)
                                // eslint-disable-next-line max-len
                                this.pdfViewer.fireAnnotationMouseover(currentObject.annotName, currentObject.pageIndex, currentObject.shapeAnnotationType, currentObject.bounds, annotationSettings, mousePositions, viewerPositions);
                        }
                    }
                    else {
                        eventTarget.style.cursor = 'grab';
                        if (this.isMousedOver) {
                            var pageIndex = void 0;
                            if (this.pdfViewer.formDesignerModule) {
                                pageIndex = this.pdfViewer.formDesignerModule.getEventPageNumber(event);
                            }
                            else {
                                pageIndex = this.pdfViewer.annotation.getEventPageNumber(event);
                            }
                            if (this.isFormFieldMousedOver) {
                                this.pdfViewer.fireFormFieldMouseLeaveEvent('formFieldMouseLeave', null, pageIndex);
                            }
                            else {
                                this.pdfViewer.fireAnnotationMouseLeave(pageIndex);
                            }
                            this.isMousedOver = false;
                            this.isFormFieldMousedOver = false;
                        }
                    }
                }
            }
            else {
                var obj = findActiveElement(event, this, this.pdfViewer);
                if (obj && this.pdfViewer.selectedItems.annotations.length === 0 && event.type === 'mousemove') {
                    var currentObject = obj;
                    // eslint-disable-next-line
                    var annotationObject = this.pdfViewer.nameTable[currentObject.id];
                    // eslint-disable-next-line max-len
                    if (annotationObject.shapeAnnotationType !== 'HandWrittenSignature' && annotationObject.shapeAnnotationType !== 'Ink' && annotationObject.annotationSettings && annotationObject.annotationSettings.isLock !== undefined) {
                        annotationObject.annotationSettings.isLock = JSON.parse(annotationObject.annotationSettings.isLock);
                    }
                    if (annotationObject.annotationSettings && annotationObject.annotationSettings.isLock) {
                        eventTarget.style.cursor = 'default';
                    }
                    else {
                        eventTarget.style.cursor = 'pointer';
                    }
                    // eslint-disable-next-line
                    var currentPosition = this.getMousePosition(event);
                    // eslint-disable-next-line
                    var relativePosition = this.relativePosition(event);
                    // eslint-disable-next-line
                    var viewerPositions = { left: relativePosition.x, top: relativePosition.y };
                    // eslint-disable-next-line
                    var mousePositions = { left: currentPosition.x, top: currentPosition.y };
                    // eslint-disable-next-line
                    var annotationSettings = { opacity: currentObject.opacity, fillColor: currentObject.fillColor, strokeColor: currentObject.strokeColor, thicknes: currentObject.thickness, author: currentObject.author, subject: currentObject.subject, modifiedDate: currentObject.modifiedDate };
                    // eslint-disable-next-line max-len
                    this.isMousedOver = true;
                    var isFormField = this.checkSignatureFormField(currentObject.id);
                    if (currentObject.formFieldAnnotationType) {
                        this.isFormFieldMousedOver = true;
                        var field_2 = {
                            // eslint-disable-next-line
                            value: currentObject.value, fontFamily: currentObject.fontFamily, fontSize: currentObject.fontSize, fontStyle: currentObject.fontStyle,
                            // eslint-disable-next-line max-len
                            color: currentObject.color, backgroundColor: currentObject.backgroundColor, borderColor: currentObject.borderColor,
                            // eslint-disable-next-line
                            thickness: currentObject.thickness, alignment: currentObject.alignment, isReadonly: currentObject.isReadonly, visibility: currentObject.visibility,
                            // eslint-disable-next-line
                            maxLength: currentObject.maxLength, isRequired: currentObject.isRequired, isPrint: currentObject.isPrint, rotation: currentObject.rotateAngle, tooltip: currentObject.tooltip, options: currentObject.options,
                            // eslint-disable-next-line
                            isChecked: currentObject.isChecked, isSelected: currentObject.isSelected
                        };
                        this.fromTarget = currentObject;
                        this.pdfViewer.fireFormFieldMouseoverEvent('formFieldMouseover', field_2, currentObject.pageIndex, relativePosition.x, relativePosition.y, currentPosition.x, currentPosition.y);
                    }
                    else {
                        if (!isFormField)
                            // eslint-disable-next-line max-len
                            this.pdfViewer.fireAnnotationMouseover(currentObject.annotName, currentObject.pageIndex, currentObject.shapeAnnotationType, currentObject.bounds, annotationSettings, mousePositions, viewerPositions);
                    }
                }
                else if (!this.pdfViewer.formDesignerModule && event.target.classList.contains('e-pdfviewer-formFields')) {
                    var pageIndex = this.pdfViewer.annotation.getEventPageNumber(event);
                    var currentPosition = this.getMousePosition(event);
                    var relativePosition = this.relativePosition(event);
                    var viewerPositions = { left: relativePosition.x, top: relativePosition.y };
                    var mousePositions = { left: currentPosition.x, top: currentPosition.y };
                    var dataJson = this.getItemFromSessionStorage('_formfields');
                    var data = JSON.parse(dataJson);
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].FieldName === event.target.name) {
                            var field = { name: data[i].FieldName };
                        }
                    }
                    this.isMousedOver = true;
                    this.isFormFieldMousedOver = true;
                    this.pdfViewer.fireFormFieldMouseoverEvent('formFieldMouseover', field, pageIndex, relativePosition.x, relativePosition.y, currentPosition.x, currentPosition.y);
                }
                else {
                    if (this.isMousedOver) {
                        var pageIndex = void 0;
                        if (this.pdfViewer.formDesignerModule) {
                            pageIndex = this.pdfViewer.formDesignerModule.getEventPageNumber(event);
                        }
                        else {
                            pageIndex = this.pdfViewer.annotation.getEventPageNumber(event);
                        }
                        if (this.isFormFieldMousedOver) {
                            if (this.fromTarget) {
                                var field_3 = {
                                    // eslint-disable-next-line
                                    name: this.fromTarget.name, id: this.fromTarget.id, value: this.fromTarget.value, fontFamily: this.fromTarget.fontFamily, fontSize: this.fromTarget.fontSize, fontStyle: this.fromTarget.fontStyle,
                                    // eslint-disable-next-line max-len
                                    color: this.fromTarget.color, backgroundColor: this.fromTarget.backgroundColor, borderColor: this.fromTarget.borderColor,
                                    // eslint-disable-next-line
                                    thickness: this.fromTarget.thickness, alignment: this.fromTarget.alignment, isReadonly: this.fromTarget.isReadonly, visibility: this.fromTarget.visibility,
                                    // eslint-disable-next-line
                                    maxLength: this.fromTarget.maxLength, isRequired: this.fromTarget.isRequired, isPrint: this.fromTarget.isPrint, rotation: this.fromTarget.rotateAngle, tooltip: this.fromTarget.tooltip, options: this.fromTarget.options,
                                    // eslint-disable-next-line
                                    isChecked: this.fromTarget.isChecked, isSelected: this.fromTarget.isSelected
                                };
                                this.pdfViewer.fireFormFieldMouseLeaveEvent('formFieldMouseLeave', field_3, pageIndex);
                            }
                            else {
                                this.pdfViewer.fireFormFieldMouseLeaveEvent('formFieldMouseLeave', null, pageIndex);
                            }
                        }
                        else {
                            this.pdfViewer.fireAnnotationMouseLeave(pageIndex);
                        }
                        this.isMousedOver = false;
                        this.isFormFieldMousedOver = false;
                        eventTarget.style.cursor = 'default';
                    }
                    if (obj && this.pdfViewer.selectedItems.annotations.length === 1 && event.type === 'mousemove') {
                        eventTarget.style.cursor = 'pointer';
                    }
                    else {
                        eventTarget.style.cursor = 'default';
                    }
                }
            }
        }
    };
    PdfViewerBase.prototype.setResizerCursorType = function () {
        var cursorType;
        // eslint-disable-next-line max-len
        if (this.pdfViewer.selectedItems.annotations[0] && isNullOrUndefined(this.pdfViewer.selectedItems.annotations[0].annotationSelectorSettings.resizerCursorType)) {
            if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'FreeText') {
                // eslint-disable-next-line max-len
                cursorType = !isNullOrUndefined(this.pdfViewer.freeTextSettings.annotationSelectorSettings) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerCursorType : null;
            }
            else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Stamp') {
                // eslint-disable-next-line max-len
                cursorType = !isNullOrUndefined(this.pdfViewer.stampSettings.annotationSelectorSettings) ? this.pdfViewer.stampSettings.annotationSelectorSettings.resizerCursorType : null;
            }
            else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'HandWrittenSignature' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureText' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'SignatureImage') {
                // eslint-disable-next-line max-len
                cursorType = !isNullOrUndefined(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) ? this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerCursorType : null;
            }
            else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Ink') {
                // eslint-disable-next-line max-len
                cursorType = !isNullOrUndefined(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) ? this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerCursorType : null;
            }
            else if (!this.pdfViewer.selectedItems.annotations[0].measureType) {
                if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Line') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.lineSettings.annotationSelectorSettings) ? this.pdfViewer.lineSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'LineWidthArrowHead') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.arrowSettings.annotationSelectorSettings) ? this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Rectangle') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.rectangleSettings.annotationSelectorSettings) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Ellipse') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.circleSettings.annotationSelectorSettings) ? this.pdfViewer.circleSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Polygon') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.polygonSettings.annotationSelectorSettings) ? this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerCursorType : null;
                }
            }
            else if (this.pdfViewer.selectedItems.annotations[0].measureType) {
                if (this.pdfViewer.selectedItems.annotations[0].subject === 'Distance calculation') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.distanceSettings.annotationSelectorSettings) ? this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].subject === 'Perimeter calculation') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.perimeterSettings.annotationSelectorSettings) ? this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].subject === 'Area calculation') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.areaSettings.annotationSelectorSettings) ? this.pdfViewer.areaSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].subject === 'Radius calculation') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.radiusSettings.annotationSelectorSettings) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerCursorType : null;
                }
                else if (this.pdfViewer.selectedItems.annotations[0].subject === 'Volume calculation') {
                    // eslint-disable-next-line max-len
                    cursorType = !isNullOrUndefined(this.pdfViewer.volumeSettings.annotationSelectorSettings) ? this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerCursorType : null;
                }
            }
        }
        else {
            if (this.pdfViewer.selectedItems.annotations[0]) {
                cursorType = this.pdfViewer.selectedItems.annotations[0].annotationSelectorSettings.resizerCursorType;
            }
        }
        if (!cursorType) {
            cursorType = this.pdfViewer.annotationSelectorSettings.resizerCursorType;
        }
        return cursorType;
    };
    /**
     * @private
     * @param {Actions | string} action - The actions.
     * @returns {ToolBase} - Returns tools.
     */
    PdfViewerBase.prototype.getTool = function (action) {
        switch (action) {
            case 'Select':
                return new SelectTool(this.pdfViewer, this);
            case 'Drag':
                return new MoveTool(this.pdfViewer, this);
            case 'ResizeSouthEast':
            case 'ResizeSouthWest':
            case 'ResizeNorthEast':
            case 'ResizeNorthWest':
            case 'ResizeSouth':
            case 'ResizeNorth':
            case 'ResizeWest':
            case 'ResizeEast':
                return new ResizeTool(this.pdfViewer, this, action);
            case 'ConnectorSourceEnd':
            case 'ConnectorTargetEnd':
            case 'Leader':
            case 'ConnectorSegmentPoint':
                return new ConnectTool(this.pdfViewer, this, action);
            case 'DrawTool':
                return new NodeDrawingTool(this.pdfViewer, this, this.pdfViewer.drawingObject);
            case 'Polygon':
                return new PolygonDrawingTool(this.pdfViewer, this, 'Polygon');
            case 'Distance':
                return new LineTool(this.pdfViewer, this, 'Leader1', undefined);
            case 'Line':
                return new LineTool(this.pdfViewer, this, 'ConnectorSegmentPoint_1', this.pdfViewer.drawingObject);
            case 'Perimeter':
                return new PolygonDrawingTool(this.pdfViewer, this, 'Perimeter');
            case 'Rotate':
                return new RotateTool(this.pdfViewer, this);
            case 'Stamp':
                return new StampTool(this.pdfViewer, this);
            case 'Ink':
                return new InkDrawingTool(this.pdfViewer, this, this.pdfViewer.drawingObject);
        }
        if (action.indexOf('ConnectorSegmentPoint') > -1 || action.indexOf('Leader') > -1) {
            return new ConnectTool(this.pdfViewer, this, action);
        }
        return null;
    };
    /**
     * @private
     * @param {MouseEvent | TouchEvent} evt - The events.
     * @returns {void}
     */
    PdfViewerBase.prototype.diagramMouseUp = function (evt) {
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        var touches;
        if (this.tool) {
            if (!this.inAction && evt.which !== 3) {
                if (this.action === 'Drag') {
                    this.action = 'Select';
                    var obj = findActiveElement(evt, this, this.pdfViewer);
                    var isMultipleSelect = true;
                }
            }
            var isGroupAction = void 0;
            if (!(this.tool instanceof PolygonDrawingTool) && !(this.tool instanceof LineTool) && !(this.tool instanceof NodeDrawingTool)) {
                this.inAction = false;
                this.isMouseDown = false;
            }
            this.currentPosition = this.getMousePosition(evt);
            if (this.tool) {
                this.eventArgs.position = this.currentPosition;
                this.getMouseEventArgs(this.currentPosition, this.eventArgs, evt, this.eventArgs.source);
                var ctrlKey = this.isMetaKey(evt);
                var info = { ctrlKey: evt.ctrlKey, shiftKey: evt.shiftKey };
                this.eventArgs.info = info;
                this.eventArgs.clickCount = evt.detail;
                this.tool.mouseUp(this.eventArgs);
                this.isAnnotationMouseDown = false;
                this.isFormFieldMouseDown = false;
                // eslint-disable-next-line max-len
                if ((this.tool instanceof NodeDrawingTool || this.tool instanceof LineTool || this.tool instanceof PolygonDrawingTool) && !this.tool.dragging) {
                    this.inAction = false;
                    this.isMouseDown = false;
                }
                var obj = findActiveElement(evt, this, this.pdfViewer);
                // eslint-disable-next-line max-len
                if ((this.isShapeAnnotationModule() && this.isCalibrateAnnotationModule())) {
                    this.pdfViewer.annotation.onShapesMouseup(obj, evt);
                }
                this.isAnnotationDrawn = false;
            }
        }
        var target = evt.target;
        // eslint-disable-next-line max-len
        if (!touches && evt.cancelable && this.skipPreventDefault(target) && (!Browser.isDevice || this.pdfViewer.enableDesktopMode)) {
            evt.preventDefault();
        }
        this.eventArgs = {};
        this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
    };
    /**
     * @private
     * @param {HTMLElement} target - The target.
     * @returns {boolean} - Returns true or false.
     */
    PdfViewerBase.prototype.skipPreventDefault = function (target) {
        var isSkipped = false;
        var isSkip = false;
        // eslint-disable-next-line max-len
        if (this.pdfViewer.annotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule && this.pdfViewer.annotationModule.freeTextAnnotationModule.isInuptBoxInFocus) {
            isSkip = true;
        }
        // eslint-disable-next-line max-len
        if (target.parentElement && target.parentElement.className !== 'foreign-object' && !target.classList.contains('e-pv-radio-btn') && !target.classList.contains('e-pv-radiobtn-span') && !target.classList.contains('e-pv-checkbox-div') && !target.classList.contains('e-pdfviewer-formFields')
            && !target.classList.contains('e-pdfviewer-ListBox') && !target.classList.contains('e-pdfviewer-signatureformfields')
            && !((target).className === 'free-text-input' && (target).tagName === 'TEXTAREA')
            && !isSkip && !((target).className === 'e-pv-hyperlink')) {
            isSkipped = true;
        }
        return isSkipped;
    };
    PdfViewerBase.prototype.isMetaKey = function (evt) {
        return navigator.platform.match('Mac') ? evt.metaKey : evt.ctrlKey;
    };
    /**
     * @private
     * @param {MouseEvent | TouchEvent} evt - The events.
     * @returns {void}
     */
    PdfViewerBase.prototype.diagramMouseDown = function (evt) {
        var _this = this;
        if (this.tool instanceof MoveTool && !(this.tool instanceof StampTool) && this.tool['inAction']) {
            this.diagramMouseUp(evt);
            if (evt.which === 1) {
                this.preventContextmenu = true;
                setTimeout(function () {
                    _this.preventContextmenu = false;
                }, 200);
            }
        }
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        var touches = null;
        touches = evt.touches;
        this.isMouseDown = true;
        this.isAnnotationAdded = false;
        this.currentPosition = this.prevPosition = this.getMousePosition(evt);
        this.eventArgs = {};
        var isStamp = false;
        if (this.pdfViewer.tool === 'Stamp') {
            this.pdfViewer.tool = '';
            isStamp = true;
        }
        var target;
        if (Browser.isDevice && this.pdfViewer.annotation) {
            this.activeElements.activePageID = this.pdfViewer.annotation.getEventPageNumber(evt);
        }
        var obj = findActiveElement(evt, this, this.pdfViewer);
        if ((Browser.isDevice && !this.pdfViewer.enableDesktopMode) && (obj && !(obj instanceof PdfFormFieldBase))) {
            evt.preventDefault();
        }
        if (this.pdfViewer.annotation && this.pdfViewer.enableStampAnnotations) {
            var stampModule = this.pdfViewer.annotationModule.stampAnnotationModule;
            if (stampModule && stampModule.isNewStampAnnot) {
                var stampObj = obj;
                if (!stampObj && this.pdfViewer.selectedItems.annotations[0]) {
                    stampObj = this.pdfViewer.selectedItems.annotations[0];
                }
                if (stampObj) {
                    this.isViewerMouseDown = false;
                    stampObj.opacity = this.pdfViewer.stampSettings.opacity;
                    this.isNewStamp = true;
                    var opacity = void 0;
                    if (stampObj.shapeAnnotationType === 'Image') {
                        opacity = this.pdfViewer.customStampSettings.opacity;
                    }
                    else {
                        opacity = this.pdfViewer.stampSettings.opacity;
                    }
                    // eslint-disable-next-line max-len
                    this.pdfViewer.nodePropertyChange(stampObj, { opacity: opacity });
                    this.pdfViewer.annotation.stampAnnotationModule.isStampAddMode = false;
                    if (stampObj.shapeAnnotationType === 'Image' && !this.isAlreadyAdded) {
                        this.stampAdded = true;
                        var stampName = stampObj.id;
                        if (stampModule.currentStampAnnotation && stampModule.currentStampAnnotation.signatureName) {
                            stampName = stampModule.currentStampAnnotation.signatureName;
                        }
                        var isSkip = false;
                        for (var i = 0; i < this.customStampCollection.length; i++) {
                            if (this.customStampCollection[i].customStampName === stampName) {
                                isSkip = true;
                                break;
                            }
                        }
                        if (isSkip) {
                            stampName = stampObj.id;
                        }
                        stampName = stampModule.customStampName ? stampModule.customStampName : stampModule.currentStampAnnotation.signatureName;
                        this.customStampCollection.push({ customStampName: stampName, customStampImageSource: stampObj.data });
                        if (isBlazor()) {
                            this.pdfViewer._dotnetInstance.invokeMethodAsync("UpdateCustomStampCollection", stampName, stampObj.data);
                        }
                    }
                    if (this.pdfViewer.customStampSettings.enableCustomStamp && this.pdfViewer.customStampSettings.isAddToMenu) {
                        this.stampAdded = true;
                    }
                    this.isAlreadyAdded = false;
                    stampModule.updateDeleteItems(stampObj.pageIndex, stampObj, stampObj.opacity);
                    stampModule.resetAnnotation();
                    stampModule.isNewStampAnnot = false;
                }
            }
        }
        if (this.isNewSignatureAdded) {
            this.signatureCount++;
            this.currentSignatureAnnot = null;
            var signObject = obj;
            if (isNullOrUndefined(signObject) && this.pdfViewer.selectedItems.annotations[0]) {
                signObject = this.pdfViewer.selectedItems.annotations[0];
            }
            if (signObject) {
                this.signatureAdded = true;
                this.signatureModule.storeSignatureData(signObject.pageIndex, signObject);
                // eslint-disable-next-line
                var bounds = { left: signObject.bounds.x, top: signObject.bounds.y, width: signObject.bounds.width, height: signObject.bounds.height };
                // eslint-disable-next-line max-len
                this.pdfViewer.fireSignatureAdd(signObject.pageIndex, signObject.signatureName, signObject.shapeAnnotationType, bounds, signObject.opacity, signObject.strokeColor, signObject.thickness, this.signatureModule.saveImageString);
            }
            this.isNewSignatureAdded = false;
        }
        if (this.pdfViewer.annotationModule) {
            var freeTextAnnotModule = this.pdfViewer.annotationModule.freeTextAnnotationModule;
            var canvasPaddingLeft = 5, canvasPaddingWidth = 10;
            // eslint-disable-next-line
            if (freeTextAnnotModule.isNewFreeTextAnnot === true) {
                var canvas = void 0;
                // eslint-disable-next-line max-len
                if (evt.target && (evt.target.id.indexOf('_text') > -1 || evt.target.id.indexOf('_annotationCanvas') > -1 || evt.target.classList.contains('e-pv-hyperlink')) && this.pdfViewer.annotation) {
                    var pageIndex = this.pdfViewer.annotation.getEventPageNumber(evt);
                    var diagram = document.getElementById(this.pdfViewer.element.id + '_annotationCanvas_' + pageIndex);
                    if (diagram) {
                        var canvas1 = diagram.getBoundingClientRect();
                        var left = canvas1.x ? canvas1.x : canvas1.left;
                        var top_4 = canvas1.y ? canvas1.y : canvas1.top;
                        canvas = new Rect(left + canvasPaddingLeft, top_4 + canvasPaddingLeft, canvas1.width - canvasPaddingWidth, canvas1.height - canvasPaddingWidth);
                    }
                }
                if (touches) {
                    this.mouseX = touches[0].clientX;
                    this.mouseY = touches[0].clientY;
                }
                if (canvas && canvas.containsPoint({ x: this.mouseX, y: this.mouseY }) && freeTextAnnotModule.isNewAddedAnnot) {
                    var pageIndex = this.pdfViewer.annotation.getEventPageNumber(evt);
                    if (!this.pdfViewer.freeTextSettings.enableAutoFit) {
                        var zoomFactor = this.getZoomFactor();
                        var width = this.currentPosition.x + (freeTextAnnotModule.defautWidth * zoomFactor);
                        var pageWidth = this.getPageWidth(pageIndex);
                        if (width >= pageWidth) {
                            this.currentPosition.x = pageWidth - (freeTextAnnotModule.defautWidth * zoomFactor);
                            this.currentPosition.x <= 0 ? this.currentPosition.x = canvasPaddingLeft : this.currentPosition.x;
                            freeTextAnnotModule.defautWidth = (freeTextAnnotModule.defautWidth * zoomFactor) >= pageWidth ? pageWidth - canvasPaddingWidth : freeTextAnnotModule.defautWidth;
                        }
                    }
                    freeTextAnnotModule.addInuptElemet(this.currentPosition, null, pageIndex);
                    if (this.pdfViewer.toolbar && this.pdfViewer.toolbar.annotationToolbarModule) {
                        // eslint-disable-next-line
                        var annotModule = this.pdfViewer.toolbar.annotationToolbarModule;
                        if (!isBlazor()) {
                            annotModule.primaryToolbar.deSelectItem(annotModule.freeTextEditItem);
                        }
                    }
                    evt.preventDefault();
                    freeTextAnnotModule.isNewAddedAnnot = false;
                }
            }
        }
        var sourceElement = null;
        if (obj) {
            sourceElement = obj.wrapper.children[0];
            if (sourceElement) {
                target = obj;
            }
        }
        if (!this.tool || (this.tool && !this.tool.drawingObject)) {
            if (!isStamp) {
                this.action = this.findToolToActivate(obj, this.currentPosition);
                // eslint-disable-next-line
                if (obj && obj.annotationSettings && obj.annotationSettings.isLock) {
                    if (this.action === 'Select') {
                        if (!this.pdfViewer.annotationModule.checkAllowedInteractions('Select', obj)) {
                            this.action = '';
                        }
                    }
                    if (this.action === 'Drag') {
                        if (!this.pdfViewer.annotationModule.checkAllowedInteractions('Move', obj)) {
                            this.action = 'Select';
                        }
                    }
                    if (this.action === 'Rotate') {
                        this.action = 'Select';
                    }
                    // eslint-disable-next-line max-len
                    if (this.action === 'ResizeSouthEast' || this.action === 'ResizeNorthEast' || this.action === 'ResizeNorthWest' || this.action === 'ResizeSouthWest' || this.action === 'ResizeSouth' || // eslint-disable-next-line max-len
                        this.action === 'ResizeNorth' || this.action === 'ResizeWest' || this.action === 'ResizeEast' || this.action.includes('ConnectorSegmentPoint') || this.action.includes('Leader')) {
                        if (!this.pdfViewer.annotationModule.checkAllowedInteractions('Resize', obj)) {
                            this.action = 'Select';
                        }
                    }
                }
                this.tool = this.getTool(this.action);
                if (!this.tool) {
                    this.action = this.pdfViewer.tool || 'Select';
                    this.tool = this.getTool(this.action);
                }
            }
            else {
                this.action = 'Select';
                this.tool = this.getTool(this.action);
            }
        }
        this.getMouseEventArgs(this.currentPosition, this.eventArgs, evt);
        this.eventArgs.position = this.currentPosition;
        if (this.tool) {
            this.isAnnotationMouseDown = false;
            this.isFormFieldMouseDown = false;
            this.isAnnotationMouseMove = false;
            this.isFormFieldMouseMove = false;
            this.tool.mouseDown(this.eventArgs);
            this.isAnnotationDrawn = true;
            this.signatureAdded = true;
        }
        if (this.pdfViewer.annotation) {
            this.pdfViewer.annotation.onAnnotationMouseDown();
        }
        if (this.pdfViewer.selectedItems && this.pdfViewer.selectedItems.formFields.length === 1) {
            if (!isNullOrUndefined(this.pdfViewer.toolbar) && !isNullOrUndefined(this.pdfViewer.toolbar.formDesignerToolbarModule)) {
                this.pdfViewer.toolbar.formDesignerToolbarModule.showHideDeleteIcon(true);
            }
        }
        var signatureFieldAnnotation = this.pdfViewer.selectedItems.annotations.length === 1 ? this.pdfViewer.nameTable[this.pdfViewer.selectedItems.annotations[0].id.split('_')[0] + '_content'] : null;
        if (!signatureFieldAnnotation) {
            signatureFieldAnnotation = this.pdfViewer.selectedItems.annotations.length === 1 ? this.pdfViewer.nameTable[this.pdfViewer.selectedItems.annotations[0].id] : null;
        }
        // eslint-disable-next-line max-len
        if (this.eventArgs && this.eventArgs.source && (this.eventArgs.source.formFieldAnnotationType || signatureFieldAnnotation) && !this.pdfViewer.designerMode) {
            var currentObject = void 0;
            if (signatureFieldAnnotation) {
                currentObject = this.pdfViewer.nameTable[this.pdfViewer.selectedItems.annotations[0].id.split('_')[0]];
            }
            else {
                currentObject = this.eventArgs.source;
            }
            if (!currentObject) {
                currentObject = this.pdfViewer.formFieldCollections[this.pdfViewer.formFieldCollections.findIndex(function (el) { return el.id === signatureFieldAnnotation.id; })];
            }
            if (currentObject) {
                // eslint-disable-next-line
                var field = {
                    // eslint-disable-next-line max-len
                    name: currentObject.name, id: currentObject.id, fontFamily: currentObject.fontFamily, fontSize: currentObject.fontSize, fontStyle: currentObject.fontStyle,
                    // eslint-disable-next-line
                    color: currentObject.color, value: currentObject.value, type: currentObject.formFieldAnnotationType ? currentObject.formFieldAnnotationType : currentObject.type, backgroundColor: currentObject.backgroundColor, alignment: currentObject.alignment
                };
                var target_1 = document.getElementById(currentObject.id);
                target_1 = target_1 ? target_1 : (document.getElementById(currentObject.id + '_content_html_element') ? document.getElementById(currentObject.id + '_content_html_element').children[0].children[0] : null);
                if (target_1) {
                    this.currentTarget = target_1;
                    this.pdfViewer.fireFormFieldClickEvent('formFieldClicked', field, false, evt.button === 0);
                }
            }
        }
        this.initialEventArgs = { source: this.eventArgs.source, sourceWrapper: this.eventArgs.sourceWrapper };
        this.initialEventArgs.position = this.currentPosition;
        this.initialEventArgs.info = this.eventArgs.info;
        this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
    };
    /**
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.exportAnnotationsAsObject = function () {
        var _this = this;
        if (this.pdfViewer.annotationModule) {
            var isAnnotations = this.updateExportItem();
            if (isAnnotations) {
                return new Promise(function (resolve, reject) {
                    _this.createRequestForExportAnnotations(true, AnnotationDataFormat.Json).then(function (value) {
                        resolve(value);
                    });
                });
            }
        }
    };
    /**
     * @private
     * @param {string} type - The type.
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.getItemFromSessionStorage = function (type) {
        if (this.isStorageExceed) {
            return this.formFieldStorage[this.documentId + type];
        }
        else {
            return window.sessionStorage.getItem(this.documentId + type);
        }
    };
    /**
     * @param textDiv
     * @param left
     * @param top
     * @param fontHeight
     * @param width
     * @param height
     * @param isPrint
     * @param textDiv
     * @param left
     * @param top
     * @param fontHeight
     * @param width
     * @param height
     * @param isPrint
     * @param textDiv
     * @param left
     * @param top
     * @param fontHeight
     * @param width
     * @param height
     * @param isPrint
     * @param textDiv
     * @param left
     * @param top
     * @param fontHeight
     * @param width
     * @param height
     * @param isPrint
     * @param textDiv
     * @param left
     * @param top
     * @param fontHeight
     * @param width
     * @param height
     * @param isPrint
     * @private
     */
    // eslint-disable-next-line max-len
    PdfViewerBase.prototype.setStyleToTextDiv = function (textDiv, left, top, fontHeight, width, height, isPrint) {
        var zoomvalue = this.getZoomFactor();
        if (isPrint) {
            zoomvalue = 1;
            textDiv.style.position = 'absolute';
        }
        textDiv.style.left = left * zoomvalue + 'px';
        textDiv.style.top = top * zoomvalue + 'px';
        textDiv.style.height = height * zoomvalue + 'px';
        textDiv.style.width = width * zoomvalue + 'px';
        textDiv.style.margin = '0px';
        if (fontHeight > 0) {
            textDiv.style.fontSize = fontHeight * zoomvalue + 'px';
        }
    };
    /**
     * @param number
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.ConvertPointToPixel = function (number) {
        return (number * (96 / 72));
    };
    /**
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.setItemInSessionStorage = function (formFieldsData, type) {
        // eslint-disable-next-line
        var formFieldsSize = Math.round(JSON.stringify(formFieldsData).length / 1024);
        if (formFieldsSize > 4500) {
            this.isStorageExceed = true;
            if (this.pdfViewer.formFieldsModule) {
                this.pdfViewer.formFieldsModule.clearFormFieldStorage();
            }
        }
        if (this.isStorageExceed) {
            this.formFieldStorage[this.documentId + type] = JSON.stringify(formFieldsData);
        }
        else {
            window.sessionStorage.setItem(this.documentId + type, JSON.stringify(formFieldsData));
        }
    };
    /**
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.exportFormFieldsAsObject = function () {
        var _this = this;
        if (this.pdfViewer.formFieldsModule) {
            return new Promise(function (resolve, reject) {
                _this.createRequestForExportFormfields(true).then(function (value) {
                    resolve(value);
                });
            });
        }
    };
    /**
     * @param importData
     * @param annotationDataFormat
     * @param isXfdf
     * @param importData
     * @param annotationDataFormat
     * @param isXfdf
     * @param importData
     * @param annotationDataFormat
     * @param isXfdf
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.importAnnotations = function (importData, annotationDataFormat, isXfdf) {
        if (this.pdfViewer.annotationModule) {
            this.createRequestForImportAnnotations(importData, annotationDataFormat, isXfdf);
        }
    };
    /**
     * @private
     * @param {AnnotationDataFormat} annotationDataFormat - The annotationDataFormat.
     * @returns {void}
     */
    PdfViewerBase.prototype.exportAnnotations = function (annotationDataFormat) {
        if (this.pdfViewer.annotationModule) {
            var isAnnotations = this.updateExportItem();
            if (isAnnotations) {
                this.createRequestForExportAnnotations(false, annotationDataFormat);
            }
        }
    };
    /**
     * @param isObject
     * @param annotationDataFormat
     * @param isBase64String
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.createRequestForExportAnnotations = function (isObject, annotationDataFormat, isBase64String) {
        var _this = this;
        var proxy = null;
        proxy = this;
        var promise = new Promise(function (resolve, reject) {
            // eslint-disable-next-line
            var jsonObject;
            if (annotationDataFormat === 'Json') {
                // eslint-disable-next-line max-len
                jsonObject = { hashId: proxy.hashId, action: 'ExportAnnotations', pdfAnnotation: proxy.createAnnotationJsonData(), elementId: proxy.pdfViewer.element.id, annotationDataFormat: annotationDataFormat, uniqueId: proxy.documentId };
                proxy.pdfViewer.fireExportStart(jsonObject.pdfAnnotation);
            }
            else {
                jsonObject = _this.constructJsonDownload();
                jsonObject.annotationDataFormat = annotationDataFormat;
                // eslint-disable-next-line
                jsonObject['action'] = 'ExportAnnotations';
                proxy.pdfViewer.fireExportStart(jsonObject);
            }
            if (proxy.jsonDocumentId) {
                // eslint-disable-next-line
                jsonObject.document = proxy.jsonDocumentId;
            }
            var url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.exportAnnotations;
            proxy.exportAnnotationRequestHandler = new AjaxHandler(_this.pdfViewer);
            proxy.exportAnnotationRequestHandler.url = url;
            proxy.exportAnnotationRequestHandler.mode = true;
            proxy.exportAnnotationRequestHandler.responseType = 'text';
            proxy.exportAnnotationRequestHandler.send(jsonObject);
            // eslint-disable-next-line
            proxy.exportAnnotationRequestHandler.onSuccess = function (result) {
                // eslint-disable-next-line
                var data = result.data;
                if (data) {
                    if (typeof data === 'object') {
                        data = JSON.parse(data);
                    }
                    if (data) {
                        var isCancel = proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.exportAnnotations, data);
                        if (isObject || (isBase64String && !isBlazor())) {
                            if (data.split('base64,')[1]) {
                                var exportObject = data;
                                // eslint-disable-next-line 
                                var annotationJson = atob(data.split(',')[1]);
                                if (isObject) {
                                    if (jsonObject.annotationDataFormat === 'Json') {
                                        exportObject = JSON.parse(annotationJson);
                                    }
                                    else {
                                        exportObject = annotationJson;
                                    }
                                }
                                if (proxy.pdfViewer.exportAnnotationFileName !== null) {
                                    proxy.pdfViewer.fireExportSuccess(exportObject, proxy.pdfViewer.exportAnnotationFileName);
                                }
                                else {
                                    proxy.pdfViewer.fireExportSuccess(exportObject, proxy.pdfViewer.fileName);
                                }
                                proxy.updateDocumentAnnotationCollections();
                                if (isBase64String) {
                                    resolve(data);
                                }
                                else {
                                    resolve(annotationJson);
                                }
                            }
                            else {
                                // eslint-disable-next-line max-len
                                proxy.pdfViewer.fireExportFailed(jsonObject.pdfAnnotation, proxy.pdfViewer.localeObj.getConstant('Export Failed'));
                            }
                        }
                        else {
                            if (annotationDataFormat === 'Json') {
                                if (data.split('base64,')[1]) {
                                    if (!isCancel) {
                                        var blobUrl = proxy.createBlobUrl(data.split('base64,')[1], 'application/json');
                                        if (Browser.isIE || Browser.info.name === 'edge') {
                                            if (proxy.pdfViewer.exportAnnotationFileName !== null) {
                                                // eslint-disable-next-line max-len
                                                window.navigator.msSaveOrOpenBlob(blobUrl, proxy.pdfViewer.exportAnnotationFileName.split('.')[0] + '.json');
                                            }
                                            else {
                                                window.navigator.msSaveOrOpenBlob(blobUrl, proxy.pdfViewer.fileName.split('.')[0] + '.json');
                                            }
                                        }
                                        else {
                                            proxy.downloadExportAnnotationJson(blobUrl);
                                        }
                                        proxy.updateDocumentAnnotationCollections();
                                    }
                                    else {
                                        return data;
                                    }
                                }
                                else {
                                    if (isBlazor()) {
                                        var promise_2 = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_ExportFailed');
                                        promise_2.then(function (value) {
                                            proxy.openImportExportNotificationPopup(value);
                                        });
                                    }
                                    else {
                                        proxy.openImportExportNotificationPopup(proxy.pdfViewer.localeObj.getConstant('Export Failed'));
                                    }
                                    // eslint-disable-next-line max-len
                                    proxy.pdfViewer.fireExportFailed(jsonObject.pdfAnnotation, proxy.pdfViewer.localeObj.getConstant('Export Failed'));
                                }
                            }
                            else {
                                if (data.split('base64,')[1]) {
                                    if (!isCancel) {
                                        var blobUrl = proxy.createBlobUrl(data.split('base64,')[1], 'application/vnd.adobe.xfdf');
                                        if (Browser.isIE || Browser.info.name === 'edge') {
                                            window.navigator.msSaveOrOpenBlob(blobUrl, proxy.pdfViewer.fileName.split('.')[0] + '.xfdf');
                                        }
                                        else {
                                            proxy.downloadExportedXFdfAnnotation(blobUrl);
                                        }
                                    }
                                    else {
                                        return data;
                                    }
                                }
                                else {
                                    if (isBlazor()) {
                                        var promise_3 = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_ExportFailed');
                                        promise_3.then(function (value) {
                                            proxy.openImportExportNotificationPopup(value);
                                        });
                                    }
                                    else {
                                        proxy.openImportExportNotificationPopup(proxy.pdfViewer.localeObj.getConstant('Export Failed'));
                                    }
                                    // eslint-disable-next-line max-len
                                    proxy.pdfViewer.fireExportFailed(jsonObject, proxy.pdfViewer.localeObj.getConstant('Export Failed'));
                                }
                            }
                        }
                    }
                    if (typeof data !== 'string') {
                        try {
                            if (typeof data === 'string') {
                                proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.exportAnnotations);
                                data = null;
                            }
                        }
                        catch (error) {
                            // eslint-disable-next-line max-len
                            proxy.pdfViewer.fireExportFailed(jsonObject.pdfAnnotation, proxy.pdfViewer.localeObj.getConstant('Export Failed'));
                            proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.exportAnnotations);
                            data = null;
                        }
                    }
                }
                else {
                    var fileName = void 0;
                    if (proxy.pdfViewer.exportAnnotationFileName !== null) {
                        fileName = proxy.pdfViewer.exportAnnotationFileName;
                    }
                    else {
                        fileName = proxy.pdfViewer.fileName;
                    }
                    proxy.pdfViewer.fireExportSuccess('Exported data saved in server side successfully', fileName);
                }
            };
            // eslint-disable-next-line
            proxy.exportAnnotationRequestHandler.onFailure = function (result) {
                proxy.pdfViewer.fireExportFailed(jsonObject.pdfAnnotation, result.statusText);
            };
            // eslint-disable-next-line
            proxy.exportAnnotationRequestHandler.onError = function (result) {
                proxy.pdfViewer.fireExportFailed(jsonObject.pdfAnnotation, result.statusText);
            };
        });
        if (isObject || isBase64String) {
            return promise;
        }
        else {
            return true;
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.createRequestForImportAnnotations = function (importData, annotationDataFormat, isXfdf) {
        var jsonObject;
        var proxy = null;
        proxy = this;
        if (typeof importData === 'string' && annotationDataFormat === 'Json' && importData.indexOf(".json") === -1) {
            importData = importData.split(',')[1] ? importData.split(',')[1] : importData.split(',')[0];
            importData = JSON.parse(decodeURIComponent(escape(atob(importData))));
        }
        if (typeof importData === 'object') {
            if (!isXfdf) {
                this.isJsonImported = true;
            }
            else {
                this.isJsonImported = false;
            }
            proxy.reRenderAnnotations(importData.pdfAnnotation);
            proxy.isImportedAnnotation = true;
            proxy.updateDocumentEditedProperty(true);
            if (!this.isAddAnnotation) {
                proxy.pdfViewer.fireImportSuccess(importData.pdfAnnotation);
            }
        }
        else {
            proxy.pdfViewer.fireImportStart(importData);
            if (annotationDataFormat === 'Json') {
                // eslint-disable-next-line max-len
                jsonObject = { fileName: importData, action: 'ImportAnnotations', elementId: proxy.pdfViewer.element.id, hashId: proxy.hashId, uniqueId: proxy.documentId };
            }
            else {
                if (!isXfdf) {
                    importData = btoa(importData);
                }
                importData = importData.split(',')[1] ? importData.split(',')[1] : importData.split(',')[0];
                // eslint-disable-next-line max-len
                jsonObject = { importedData: importData, action: 'ImportAnnotations', elementId: proxy.pdfViewer.element.id, hashId: proxy.hashId, uniqueId: proxy.documentId };
            }
            if (proxy.jsonDocumentId) {
                // eslint-disable-next-line
                jsonObject.document = proxy.jsonDocumentId;
            }
            var url = proxy.pdfViewer.serviceUrl + '/' + proxy.pdfViewer.serverActionSettings.importAnnotations;
            proxy.importAnnotationRequestHandler = new AjaxHandler(proxy.pdfViewer);
            proxy.importAnnotationRequestHandler.url = url;
            proxy.importAnnotationRequestHandler.mode = true;
            proxy.importAnnotationRequestHandler.responseType = 'text';
            proxy.importAnnotationRequestHandler.send(jsonObject);
            // eslint-disable-next-line
            proxy.importAnnotationRequestHandler.onSuccess = function (result) {
                // eslint-disable-next-line
                var data = result.data;
                if (data) {
                    if (typeof data !== 'object') {
                        try {
                            data = JSON.parse(data);
                            if (typeof data !== 'object') {
                                proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.importAnnotations);
                                data = null;
                            }
                        }
                        catch (error) {
                            proxy.pdfViewer.fireImportFailed(importData, proxy.pdfViewer.localeObj.getConstant('File not found'));
                            if (isBlazor()) {
                                var promise = this.pdfViewer._dotnetInstance.invokeMethodAsync('GetLocaleText', 'PdfViewer_FileNotFound');
                                promise.then(function (value) {
                                    proxy.openImportExportNotificationPopup(value);
                                });
                            }
                            else {
                                proxy.openImportExportNotificationPopup(proxy.pdfViewer.localeObj.getConstant('File not found'));
                            }
                            proxy.onControlError(500, data, proxy.pdfViewer.serverActionSettings.importAnnotations);
                            data = null;
                        }
                    }
                    if (data) {
                        proxy.pdfViewer.fireAjaxRequestSuccess(proxy.pdfViewer.serverActionSettings.importAnnotations, data);
                        if (data.pdfAnnotation) {
                            proxy.reRenderAnnotations(data.pdfAnnotation);
                            proxy.isImportedAnnotation = true;
                            proxy.updateDocumentEditedProperty(true);
                            proxy.pdfViewer.fireImportSuccess(data.pdfAnnotation);
                        }
                    }
                }
            };
            // eslint-disable-next-line
            proxy.importAnnotationRequestHandler.onFailure = function (result) {
                proxy.pdfViewer.fireImportFailed(importData, result.statusText);
            };
            // eslint-disable-next-line
            proxy.importAnnotationRequestHandler.onError = function (result) {
                proxy.pdfViewer.fireImportFailed(importData, result.statusText);
            };
        }
    };
    /**
     * @private
     * @param {string} errorDetails - The error details.
     * @returns {void}
     */
    PdfViewerBase.prototype.openImportExportNotificationPopup = function (errorDetails) {
        if (this.pdfViewer.showNotificationDialog) {
            this.textLayer.createNotificationPopup(errorDetails);
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.reRenderAnnotations = function (annotation) {
        if (annotation) {
            this.isImportAction = true;
            var count = void 0;
            if (this.isImportedAnnotation) {
                this.importedAnnotation = this.combineImportedData(this.importedAnnotation, annotation);
            }
            else {
                if (this.pageCount > 0) {
                    this.importedAnnotation = annotation;
                }
            }
            if (!this.isImportedAnnotation) {
                count = 0;
            }
            for (var i = 0; i < this.pageCount; i++) {
                if (annotation[i]) {
                    // eslint-disable-next-line
                    var importPageCollections = [];
                    // eslint-disable-next-line
                    var textMarkupObject = window.sessionStorage.getItem(this.documentId + '_annotations_textMarkup');
                    // eslint-disable-next-line
                    var shapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape');
                    // eslint-disable-next-line
                    var measureShapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape_measure');
                    // eslint-disable-next-line
                    var stampObject = window.sessionStorage.getItem(this.documentId + '_annotations_stamp');
                    // eslint-disable-next-line
                    var stickyObject = window.sessionStorage.getItem(this.documentId + '_annotations_sticky');
                    // eslint-disable-next-line
                    var freeTextObject = window.sessionStorage.getItem(this.documentId + '_annotations_freetext');
                    // eslint-disable-next-line
                    var signatureObject = window.sessionStorage.getItem(this.documentId + '_annotations_sign');
                    // eslint-disable-next-line
                    var inkObject = window.sessionStorage.getItem(this.documentId + '_annotations_ink');
                    if (this.isStorageExceed) {
                        textMarkupObject = this.annotationStorage[this.documentId + '_annotations_textMarkup'];
                        shapeObject = this.annotationStorage[this.documentId + '_annotations_shape'];
                        measureShapeObject = this.annotationStorage[this.documentId + '_annotations_shape_measure'];
                        stampObject = this.annotationStorage[this.documentId + '_annotations_stamp'];
                        stickyObject = this.annotationStorage[this.documentId + '_annotations_sticky'];
                        freeTextObject = this.annotationStorage[this.documentId + '_annotations_freetext'];
                        inkObject = this.annotationStorage[this.documentId + '_annotations_ink'];
                    }
                    var annotationCanvas = this.getElement('_annotationCanvas_' + i);
                    if (annotationCanvas) {
                        this.drawPageAnnotations(annotation[i], i);
                        if (this.isImportedAnnotation) {
                            var isAdded = false;
                            for (var j = 0; j < this.annotationPageList.length; j++) {
                                if (this.annotationPageList[j] === i) {
                                    isAdded = true;
                                }
                            }
                            if (isAdded) {
                                this.annotationPageList[count] = i;
                                count = count + 1;
                            }
                        }
                        else {
                            this.annotationPageList[count] = i;
                            count = count + 1;
                        }
                    }
                    if (annotation[i].textMarkupAnnotation && annotation[i].textMarkupAnnotation.length !== 0) {
                        if (textMarkupObject) {
                            var annotObject = JSON.parse(textMarkupObject);
                            // eslint-disable-next-line max-len
                            annotation[i].textMarkupAnnotation = this.checkAnnotationCollections(annotObject, annotation[i].textMarkupAnnotation, i);
                        }
                        annotation[i].textMarkupAnnotation = this.checkAnnotationCommentsCollections(annotation[i].textMarkupAnnotation, i);
                        importPageCollections.textMarkupAnnotation = annotation[i].textMarkupAnnotation;
                        if (annotation[i].textMarkupAnnotation.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].textMarkupAnnotation, i);
                            for (var j = 0; j < annotation[i].textMarkupAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.textMarkupAnnotationModule.updateTextMarkupAnnotationCollections(annotation[i].textMarkupAnnotation[j], i));
                            }
                        }
                    }
                    if (annotation[i].shapeAnnotation && annotation[i].shapeAnnotation.length !== 0) {
                        if (shapeObject) {
                            var annotObject = JSON.parse(shapeObject);
                            annotation[i].shapeAnnotation = this.checkAnnotationCollections(annotObject, annotation[i].shapeAnnotation, i);
                        }
                        annotation[i].shapeAnnotation = this.checkAnnotationCommentsCollections(annotation[i].shapeAnnotation, i);
                        importPageCollections.shapeAnnotation = annotation[i].shapeAnnotation;
                        if (annotation[i].shapeAnnotation.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].shapeAnnotation, i);
                            for (var j = 0; j < annotation[i].shapeAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.shapeAnnotationModule.updateShapeAnnotationCollections(annotation[i].shapeAnnotation[j], i));
                            }
                        }
                    }
                    if (annotation[i].measureShapeAnnotation && annotation[i].measureShapeAnnotation.length !== 0) {
                        if (measureShapeObject) {
                            var annotObject = JSON.parse(measureShapeObject);
                            // eslint-disable-next-line max-len
                            annotation[i].measureShapeAnnotation = this.checkAnnotationCollections(annotObject, annotation[i].measureShapeAnnotation, i);
                        }
                        // eslint-disable-next-line max-len
                        annotation[i].measureShapeAnnotation = this.checkAnnotationCommentsCollections(annotation[i].measureShapeAnnotation, i);
                        importPageCollections.measureShapeAnnotation = annotation[i].measureShapeAnnotation;
                        if (annotation[i].measureShapeAnnotation.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].measureShapeAnnotation, i);
                            for (var j = 0; j < annotation[i].measureShapeAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.measureAnnotationModule.updateMeasureAnnotationCollections(annotation[i].measureShapeAnnotation[j], i));
                            }
                        }
                    }
                    if (annotation[i].stampAnnotations && annotation[i].stampAnnotations.length !== 0) {
                        if (stampObject) {
                            var annotObject = JSON.parse(stampObject);
                            // eslint-disable-next-line max-len
                            annotation[i].stampAnnotations = this.checkAnnotationCollections(annotObject, annotation[i].stampAnnotations, i);
                        }
                        annotation[i].stampAnnotations = this.checkAnnotationCommentsCollections(annotation[i].stampAnnotations, i);
                        importPageCollections.stampAnnotations = annotation[i].stampAnnotations;
                        if (annotation[i].stampAnnotations.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].stampAnnotations, i);
                            for (var j = 0; j < annotation[i].stampAnnotations.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.stampAnnotationModule.updateStampAnnotationCollections(annotation[i].stampAnnotations[j], i));
                            }
                        }
                    }
                    if (annotation[i].stickyNotesAnnotation && annotation[i].stickyNotesAnnotation.length !== 0) {
                        if (stickyObject) {
                            var annotObject = JSON.parse(stickyObject);
                            // eslint-disable-next-line max-len
                            annotation[i].stickyNotesAnnotation = this.checkAnnotationCollections(annotObject, annotation[i].stickyNotesAnnotation, i);
                        }
                        // eslint-disable-next-line max-len
                        annotation[i].stickyNotesAnnotation = this.checkAnnotationCommentsCollections(annotation[i].stickyNotesAnnotation, i);
                        importPageCollections.stickyNotesAnnotation = annotation[i].stickyNotesAnnotation;
                        if (annotation[i].stickyNotesAnnotation.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].stickyNotesAnnotation, i);
                            for (var j = 0; j < annotation[i].stickyNotesAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateStickyNotesAnnotationCollections(annotation[i].stickyNotesAnnotation[j], i));
                            }
                        }
                    }
                    if (annotation[i].freeTextAnnotation && annotation[i].freeTextAnnotation.length !== 0) {
                        if (freeTextObject) {
                            var annotObject = JSON.parse(freeTextObject);
                            // eslint-disable-next-line max-len
                            annotation[i].freeTextAnnotation = this.checkAnnotationCollections(annotObject, annotation[i].freeTextAnnotation, i);
                        }
                        annotation[i].freeTextAnnotation = this.checkAnnotationCommentsCollections(annotation[i].freeTextAnnotation, i);
                        importPageCollections.freeTextAnnotation = annotation[i].freeTextAnnotation;
                        if (annotation[i].freeTextAnnotation.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].freeTextAnnotation, i);
                            for (var j = 0; j < annotation[i].freeTextAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.freeTextAnnotationModule.updateFreeTextAnnotationCollections(annotation[i].freeTextAnnotation[j], i));
                            }
                        }
                    }
                    if (annotation[i].signatureAnnotation && annotation[i].signatureAnnotation.length !== 0) {
                        if (signatureObject) {
                            var annotObject = JSON.parse(signatureObject);
                            // eslint-disable-next-line max-len
                            annotation[i].signatureAnnotation = this.checkSignatureCollections(annotObject, annotation[i].signatureAnnotation, i);
                        }
                        importPageCollections.signatureAnnotation = annotation[i].signatureAnnotation;
                        if (annotation[i].signatureAnnotation.length !== 0) {
                            for (var j = 0; j < annotation[i].signatureAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.signatureModule.updateSignatureCollections(annotation[i].signatureAnnotation[j], i), true);
                            }
                        }
                    }
                    if (annotation[i].signatureInkAnnotation && annotation[i].signatureInkAnnotation.length !== 0) {
                        if (inkObject) {
                            var annotObject = JSON.parse(inkObject);
                            // eslint-disable-next-line max-len
                            annotation[i].signatureInkAnnotation = this.checkAnnotationCollections(annotObject, annotation[i].signatureInkAnnotation, i);
                        }
                        // eslint-disable-next-line max-len
                        annotation[i].signatureInkAnnotation = this.checkAnnotationCommentsCollections(annotation[i].signatureInkAnnotation, i);
                        importPageCollections.signatureInkAnnotation = annotation[i].signatureInkAnnotation;
                        if (annotation[i].signatureInkAnnotation.length !== 0) {
                            // eslint-disable-next-line max-len
                            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderAnnotationComments(annotation[i].signatureInkAnnotation, i);
                            for (var j = 0; j < annotation[i].signatureInkAnnotation.length; j++) {
                                // eslint-disable-next-line max-len
                                // this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateCollections(this.pdfViewer.annotationModule.freeTextAnnotationModule.updateFreeTextAnnotationCollections(annotation[i].freeTextAnnotation[j], i));
                            }
                        }
                    }
                    this.updateImportedAnnotationsInDocumentCollections(importPageCollections, i);
                }
            }
            if (this.pageCount > 0) {
                // eslint-disable-next-line max-len
                if (this.pdfViewer.annotationModule.stickyNotesAnnotationModule && !this.pdfViewer.annotationModule.stickyNotesAnnotationModule.isAnnotationRendered) {
                    // eslint-disable-next-line
                    var annotationCollection = this.createAnnotationsCollection();
                    if (annotationCollection) {
                        // eslint-disable-next-line max-len
                        this.documentAnnotationCollections = this.pdfViewer.annotationModule.stickyNotesAnnotationModule.updateAnnotationsInDocumentCollections(this.importedAnnotation, annotationCollection);
                    }
                }
            }
        }
    };
    /**
     * @param importedAnnotations
     * @param pageNumber
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.updateImportedAnnotationsInDocumentCollections = function (importedAnnotations, pageNumber) {
        if (this.documentAnnotationCollections) {
            // eslint-disable-next-line
            var documentAnnotationCollection = this.documentAnnotationCollections;
            // eslint-disable-next-line
            var pageCollections = documentAnnotationCollection[pageNumber];
            if (pageCollections) {
                if (importedAnnotations.textMarkupAnnotation && importedAnnotations.textMarkupAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.textMarkupAnnotation.length; i++) {
                        pageCollections.textMarkupAnnotation.push(importedAnnotations.textMarkupAnnotation[i]);
                    }
                }
                if (importedAnnotations.shapeAnnotation && importedAnnotations.shapeAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.shapeAnnotation.length; i++) {
                        pageCollections.shapeAnnotation.push(importedAnnotations.shapeAnnotation[i]);
                    }
                }
                if (importedAnnotations.measureShapeAnnotation && importedAnnotations.measureShapeAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.measureShapeAnnotation.length; i++) {
                        pageCollections.measureShapeAnnotation.push(importedAnnotations.measureShapeAnnotation[i]);
                    }
                }
                if (importedAnnotations.stampAnnotations && importedAnnotations.stampAnnotations.length !== 0) {
                    for (var i = 0; i < importedAnnotations.stampAnnotations.length; i++) {
                        pageCollections.stampAnnotations.push(importedAnnotations.stampAnnotations[i]);
                    }
                }
                if (importedAnnotations.stickyNotesAnnotation && importedAnnotations.stickyNotesAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.stickyNotesAnnotation.length; i++) {
                        pageCollections.stickyNotesAnnotation.push(importedAnnotations.stickyNotesAnnotation[i]);
                    }
                }
                if (importedAnnotations.freeTextAnnotation && importedAnnotations.freeTextAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.freeTextAnnotation.length; i++) {
                        pageCollections.freeTextAnnotation.push(importedAnnotations.freeTextAnnotation[i]);
                    }
                }
                if (importedAnnotations.signatureAnnotation && importedAnnotations.signatureAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.signatureAnnotation.length; i++) {
                        pageCollections.signatureAnnotation.push(importedAnnotations.signatureAnnotation[i]);
                    }
                }
                if (importedAnnotations.signatureInkAnnotation && importedAnnotations.signatureInkAnnotation.length !== 0) {
                    for (var i = 0; i < importedAnnotations.signatureInkAnnotation.length; i++) {
                        pageCollections.signatureInkAnnotation.push(importedAnnotations.signatureInkAnnotation[i]);
                    }
                }
                this.documentAnnotationCollections[pageNumber] = pageCollections;
            }
        }
    };
    /**
     * @param pageIndex
     * @param pageCollections
     * @param pageIndex
     * @param pageCollections
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkDocumentCollectionData = function (pageIndex, pageCollections) {
        // eslint-disable-next-line
        var importPageCollections;
        if (pageCollections) {
            importPageCollections = pageCollections;
        }
        else if (this.documentAnnotationCollections) {
            // eslint-disable-next-line
            var documetCollections = this.documentAnnotationCollections[pageIndex];
            if (documetCollections) {
                importPageCollections = cloneObject(documetCollections);
            }
        }
        if (importPageCollections) {
            // eslint-disable-next-line
            var textMarkupObject = window.sessionStorage.getItem(this.documentId + '_annotations_textMarkup');
            // eslint-disable-next-line
            var shapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape');
            // eslint-disable-next-line
            var measureShapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape_measure');
            // eslint-disable-next-line
            var stampObject = window.sessionStorage.getItem(this.documentId + '_annotations_stamp');
            // eslint-disable-next-line
            var stickyObject = window.sessionStorage.getItem(this.documentId + '_annotations_sticky');
            // eslint-disable-next-line
            var freeTextObject = window.sessionStorage.getItem(this.documentId + '_annotations_freetext');
            // eslint-disable-next-line
            var inkObject = window.sessionStorage.getItem(this.documentId + '_annotations_ink');
            // eslint-disable-next-line
            var signatureObject = window.sessionStorage.getItem(this.documentId + '_annotations_sign');
            if (this.isStorageExceed) {
                textMarkupObject = this.annotationStorage[this.documentId + '_annotations_textMarkup'];
                shapeObject = this.annotationStorage[this.documentId + '_annotations_shape'];
                measureShapeObject = this.annotationStorage[this.documentId + '_annotations_shape_measure'];
                stampObject = this.annotationStorage[this.documentId + '_annotations_stamp'];
                stickyObject = this.annotationStorage[this.documentId + '_annotations_sticky'];
                freeTextObject = this.annotationStorage[this.documentId + '_annotations_freetext'];
                inkObject = this.annotationStorage[this.documentId + '_annotations_ink'];
                signatureObject = this.annotationStorage[this.documentId + '_annotations_sign'];
            }
            if (importPageCollections.textMarkupAnnotation && importPageCollections.textMarkupAnnotation.length !== 0) {
                if (textMarkupObject) {
                    var annotationObject = JSON.parse(textMarkupObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.textMarkupAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.textMarkupAnnotation, pageIndex);
                    }
                }
            }
            if (importPageCollections.shapeAnnotation && importPageCollections.shapeAnnotation.length !== 0) {
                if (shapeObject) {
                    var annotationObject = JSON.parse(shapeObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.shapeAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.shapeAnnotation, pageIndex);
                    }
                }
            }
            if (importPageCollections.measureShapeAnnotation && importPageCollections.measureShapeAnnotation.length !== 0) {
                if (measureShapeObject) {
                    var annotationObject = JSON.parse(measureShapeObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.measureShapeAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.measureShapeAnnotation, pageIndex);
                    }
                }
            }
            if (importPageCollections.stampAnnotations && importPageCollections.stampAnnotations.length !== 0) {
                if (stampObject) {
                    var annotationObject = JSON.parse(stampObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.stampAnnotations = this.findImportedAnnotations(annotationObject, importPageCollections.stampAnnotations, pageIndex);
                    }
                }
            }
            if (importPageCollections.stickyNotesAnnotation && importPageCollections.stickyNotesAnnotation.length !== 0) {
                if (stickyObject) {
                    var annotationObject = JSON.parse(stickyObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.stickyNotesAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.stickyNotesAnnotation, pageIndex);
                    }
                }
            }
            if (importPageCollections.freeTextAnnotation && importPageCollections.freeTextAnnotation.length !== 0) {
                if (freeTextObject) {
                    var annotationObject = JSON.parse(freeTextObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.freeTextAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.freeTextAnnotation, pageIndex);
                    }
                }
            }
            if (importPageCollections.signatureInkAnnotation && importPageCollections.signatureInkAnnotation.length !== 0) {
                if (inkObject) {
                    var annotationObject = JSON.parse(inkObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.signatureInkAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.signatureInkAnnotation, pageIndex);
                    }
                }
            }
            if (importPageCollections.signatureAnnotation && importPageCollections.signatureAnnotation.length !== 0) {
                if (signatureObject) {
                    var annotationObject = JSON.parse(inkObject);
                    if (annotationObject) {
                        // eslint-disable-next-line max-len
                        importPageCollections.signatureAnnotation = this.findImportedAnnotations(annotationObject, importPageCollections.signatureAnnotation, pageIndex);
                    }
                }
            }
            return importPageCollections;
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.findImportedAnnotations = function (annotationCollection, importAnnotations, pageNumber) {
        // eslint-disable-next-line
        var pageCollections = null;
        for (var a = 0; a < annotationCollection.length; a++) {
            if (annotationCollection[a].pageIndex === pageNumber) {
                pageCollections = annotationCollection[a].annotations;
            }
        }
        if (pageCollections) {
            for (var i = 0; i < pageCollections.length; i++) {
                for (var j = 0; j < importAnnotations.length; j++) {
                    if (pageCollections[i].annotName === importAnnotations[j].AnnotName) {
                        importAnnotations.splice(j, 1);
                        j = j - 1;
                    }
                }
            }
        }
        pageCollections = null;
        return importAnnotations;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.drawPageAnnotations = function (annotation, pageIndex, isNewlyAdded) {
        if (isNewlyAdded) {
            annotation = annotation[pageIndex];
        }
        if (annotation) {
            if (annotation.textMarkupAnnotation && annotation.textMarkupAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_textMarkup');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_textMarkup'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    if (annotObject) {
                        // eslint-disable-next-line max-len
                        annotation.textMarkupAnnotation = this.checkAnnotationCollections(annotObject, annotation.textMarkupAnnotation, pageIndex);
                    }
                }
                annotation.textMarkupAnnotation = this.checkAnnotationCommentsCollections(annotation.textMarkupAnnotation, pageIndex);
                if (annotation.textMarkupAnnotation.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.renderAnnotations(pageIndex, null, null, annotation.textMarkupAnnotation, null, true);
                }
            }
            if (annotation.shapeAnnotation && annotation.shapeAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_shape'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    annotation.shapeAnnotation = this.checkAnnotationCollections(annotObject, annotation.shapeAnnotation, pageIndex);
                }
                annotation.shapeAnnotation = this.checkAnnotationCommentsCollections(annotation.shapeAnnotation, pageIndex);
                if (annotation.shapeAnnotation.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.renderAnnotations(pageIndex, annotation.shapeAnnotation, null, null, null, true);
                }
            }
            if (annotation.measureShapeAnnotation && annotation.measureShapeAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape_measure');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_shape_measure'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    // eslint-disable-next-line max-len
                    annotation.measureShapeAnnotation = this.checkAnnotationCollections(annotObject, annotation.measureShapeAnnotation, pageIndex);
                }
                annotation.measureShapeAnnotation = this.checkAnnotationCommentsCollections(annotation.measureShapeAnnotation, pageIndex);
                if (annotation.measureShapeAnnotation.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.renderAnnotations(pageIndex, null, annotation.measureShapeAnnotation, null, null, true);
                }
            }
            if (annotation.stampAnnotations && annotation.stampAnnotations.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_stamp');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_stamp'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    annotation.stampAnnotations = this.checkAnnotationCollections(annotObject, annotation.stampAnnotations, pageIndex);
                }
                annotation.stampAnnotations = this.checkAnnotationCommentsCollections(annotation.stampAnnotations, pageIndex);
                if (annotation.stampAnnotations.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.stampAnnotationModule.renderStampAnnotations(annotation.stampAnnotations, pageIndex, null, true);
                }
            }
            if (annotation.stickyNotesAnnotation && annotation.stickyNotesAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_sticky');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_sticky'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    // eslint-disable-next-line max-len
                    annotation.stickyNotesAnnotation = this.checkAnnotationCollections(annotObject, annotation.stickyNotesAnnotation, pageIndex);
                }
                annotation.stickyNotesAnnotation = this.checkAnnotationCommentsCollections(annotation.stickyNotesAnnotation, pageIndex);
                if (annotation.stickyNotesAnnotation.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.stickyNotesAnnotationModule.renderStickyNotesAnnotations(annotation.stickyNotesAnnotation, pageIndex);
                }
            }
            if (annotation.freeTextAnnotation && annotation.freeTextAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_freetext');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_freetext'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    annotation.freeTextAnnotation = this.checkAnnotationCollections(annotObject, annotation.freeTextAnnotation, pageIndex);
                }
                annotation.freeTextAnnotation = this.checkAnnotationCommentsCollections(annotation.freeTextAnnotation, pageIndex);
                if (annotation.freeTextAnnotation.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.freeTextAnnotationModule.renderFreeTextAnnotations(annotation.freeTextAnnotation, pageIndex, true);
                }
            }
            if (annotation.signatureAnnotation && annotation.signatureAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_sign');
                var annotObject = JSON.parse(storeObject);
                if (annotObject) {
                    annotation.signatureAnnotation = this.checkSignatureCollections(annotObject, annotation.signatureAnnotation, pageIndex);
                }
                this.signatureModule.renderExistingSignature(annotation.signatureAnnotation, pageIndex, true);
            }
            if (annotation.signatureInkAnnotation && annotation.signatureInkAnnotation.length !== 0) {
                // eslint-disable-next-line
                var storeObject = window.sessionStorage.getItem(this.documentId + '_annotations_ink');
                if (this.isStorageExceed) {
                    storeObject = this.annotationStorage[this.documentId + '_annotations_ink'];
                }
                if (storeObject) {
                    var annotObject = JSON.parse(storeObject);
                    // eslint-disable-next-line max-len
                    annotation.signatureInkAnnotation = this.checkAnnotationCollections(annotObject, annotation.signatureInkAnnotation, pageIndex);
                }
                annotation.signatureInkAnnotation = this.checkAnnotationCommentsCollections(annotation.signatureInkAnnotation, pageIndex);
                if (annotation.signatureInkAnnotation.length !== 0) {
                    // eslint-disable-next-line max-len
                    this.pdfViewer.annotationModule.inkAnnotationModule.renderExistingInkSignature(annotation.signatureInkAnnotation, pageIndex, true);
                }
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkSignatureCollections = function (annotationCollection, annotation, pageNumber) {
        // eslint-disable-next-line
        var pageCollections = null;
        for (var a = 0; a < annotationCollection.length; a++) {
            if (annotationCollection[a].pageIndex === pageNumber) {
                pageCollections = annotationCollection[a].annotations;
            }
        }
        if (pageCollections) {
            for (var i = 0; i < pageCollections.length; i++) {
                for (var j = 0; j < annotation.length; j++) {
                    if (pageCollections[i].signatureName === annotation[j].SignatureName) {
                        annotation.splice(j, 1);
                        j = j - 1;
                    }
                }
            }
        }
        pageCollections = null;
        return annotation;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkAnnotationCollections = function (annotationCollection, annotation, pageNumber) {
        // eslint-disable-next-line
        var pageCollections = null;
        for (var a = 0; a < annotationCollection.length; a++) {
            if (annotationCollection[a].pageIndex === pageNumber) {
                pageCollections = annotationCollection[a].annotations;
            }
        }
        if (pageCollections) {
            for (var i = 0; i < pageCollections.length; i++) {
                for (var j = 0; j < annotation.length; j++) {
                    if (pageCollections[i].annotName === annotation[j].AnnotName) {
                        annotation.splice(j, 1);
                        j = j - 1;
                    }
                }
            }
        }
        pageCollections = null;
        return annotation;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkAnnotationCommentsCollections = function (annotation, pageNumber) {
        if (this.annotationComments) {
            // eslint-disable-next-line
            var annotationCollections = this.annotationComments[pageNumber];
            annotationCollections = this.selectAnnotationCollections(annotationCollections);
            if (annotationCollections) {
                for (var i = 0; i < annotationCollections.length; i++) {
                    for (var j = 0; j < annotation.length; j++) {
                        if (annotationCollections[i].AnnotName === annotation[j].AnnotName) {
                            annotation.splice(j, 1);
                            j = j - 1;
                        }
                    }
                }
            }
            annotationCollections = null;
        }
        return annotation;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.selectAnnotationCollections = function (pageAnnotations) {
        // eslint-disable-next-line
        var pageCollections = [];
        if (pageAnnotations) {
            if (pageAnnotations.textMarkupAnnotation && pageAnnotations.textMarkupAnnotation.length !== 0) {
                for (var i = 0; i < pageAnnotations.textMarkupAnnotation.length; i++) {
                    pageCollections.push(pageAnnotations.textMarkupAnnotation[i]);
                }
            }
            if (pageAnnotations.shapeAnnotation && pageAnnotations.shapeAnnotation.length !== 0) {
                for (var i = 0; i < pageAnnotations.shapeAnnotation.length; i++) {
                    pageCollections.push(pageAnnotations.shapeAnnotation[i]);
                }
            }
            if (pageAnnotations.measureShapeAnnotation && pageAnnotations.measureShapeAnnotation.length !== 0) {
                for (var i = 0; i < pageAnnotations.measureShapeAnnotation.length; i++) {
                    pageCollections.push(pageAnnotations.measureShapeAnnotation[i]);
                }
            }
            if (pageAnnotations.stampAnnotations && pageAnnotations.stampAnnotations.length !== 0) {
                for (var i = 0; i < pageAnnotations.stampAnnotations.length; i++) {
                    pageCollections.push(pageAnnotations.stampAnnotations[i]);
                }
            }
            if (pageAnnotations.stickyNotesAnnotation && pageAnnotations.stickyNotesAnnotation.length !== 0) {
                for (var i = 0; i < pageAnnotations.stickyNotesAnnotation.length; i++) {
                    pageCollections.push(pageAnnotations.stickyNotesAnnotation[i]);
                }
            }
            if (pageAnnotations.freeTextAnnotation && pageAnnotations.freeTextAnnotation.length !== 0) {
                for (var i = 0; i < pageAnnotations.freeTextAnnotation.length; i++) {
                    pageCollections.push(pageAnnotations.freeTextAnnotation[i]);
                }
            }
            if (pageAnnotations.signatureInkAnnotation && pageAnnotations.signatureInkAnnotation.length !== 0) {
                for (var i = 0; i < pageAnnotations.signatureInkAnnotation.length; i++) {
                    pageCollections.push(pageAnnotations.signatureInkAnnotation[i]);
                }
            }
        }
        return pageCollections;
    };
    PdfViewerBase.prototype.saveImportedAnnotations = function () {
        // eslint-disable-next-line
        var textMarkupObject = window.sessionStorage.getItem(this.documentId + '_annotations_textMarkup');
        // eslint-disable-next-line
        var shapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape');
        // eslint-disable-next-line
        var measureShapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape_measure');
        // eslint-disable-next-line
        var stampObject = window.sessionStorage.getItem(this.documentId + '_annotations_stamp');
        // eslint-disable-next-line
        var stickyObject = window.sessionStorage.getItem(this.documentId + '_annotations_sticky');
        // eslint-disable-next-line
        var freeTextObject = window.sessionStorage.getItem(this.documentId + '_annotations_freetext');
        // eslint-disable-next-line
        var inkObject = window.sessionStorage.getItem(this.documentId + '_annotations_ink');
        // eslint-disable-next-line
        var signatureObject = window.sessionStorage.getItem(this.documentId + '_annotations_sign');
        if (this.isStorageExceed) {
            textMarkupObject = this.annotationStorage[this.documentId + '_annotations_textMarkup'];
            shapeObject = this.annotationStorage[this.documentId + '_annotations_shape'];
            measureShapeObject = this.annotationStorage[this.documentId + '_annotations_shape_measure'];
            stampObject = this.annotationStorage[this.documentId + '_annotations_stamp'];
            stickyObject = this.annotationStorage[this.documentId + '_annotations_sticky'];
            freeTextObject = this.annotationStorage[this.documentId + '_annotations_freetext'];
            inkObject = this.annotationStorage[this.documentId + '_annotations_ink'];
            signatureObject = this.annotationStorage[this.documentId + '_annotations_sign'];
        }
        // eslint-disable-next-line max-len
        this.downloadCollections = { textMarkupObject: textMarkupObject, shapeObject: shapeObject, measureShapeObject: measureShapeObject, stampObject: stampObject, stickyObject: stickyObject, freeTextObject: freeTextObject, inkObject: inkObject, signatureObject: signatureObject };
        if (this.documentAnnotationCollections) {
            for (var i = 0; i < this.pageCount; i++) {
                if (this.documentAnnotationCollections[i]) {
                    // eslint-disable-next-line
                    var pageCollections = cloneObject(this.documentAnnotationCollections[i]);
                    pageCollections = this.checkDocumentCollectionData(i, pageCollections);
                    this.savePageAnnotations(pageCollections, i);
                }
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.savePageAnnotations = function (annotation, pageIndex) {
        if (annotation.textMarkupAnnotation.length !== 0) {
            for (var s = 0; s < annotation.textMarkupAnnotation.length; s++) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.textMarkupAnnotationModule.saveImportedTextMarkupAnnotations(annotation.textMarkupAnnotation[s], pageIndex);
            }
        }
        if (annotation.shapeAnnotation.length !== 0) {
            for (var s = 0; s < annotation.shapeAnnotation.length; s++) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.shapeAnnotationModule.saveImportedShapeAnnotations(annotation.shapeAnnotation[s], pageIndex);
            }
        }
        if (annotation.measureShapeAnnotation.length !== 0) {
            for (var s = 0; s < annotation.measureShapeAnnotation.length; s++) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.measureAnnotationModule.saveImportedMeasureAnnotations(annotation.measureShapeAnnotation[s], pageIndex);
            }
        }
        if (annotation.stampAnnotations.length !== 0) {
            for (var s = 0; s < annotation.stampAnnotations.length; s++) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.stampAnnotationModule.saveImportedStampAnnotations(annotation.stampAnnotations[s], pageIndex);
            }
        }
        if (annotation.stickyNotesAnnotation.length !== 0) {
            for (var s = 0; s < annotation.stickyNotesAnnotation.length; s++) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.stickyNotesAnnotationModule.saveImportedStickyNotesAnnotations(annotation.stickyNotesAnnotation[s], pageIndex);
            }
        }
        if (annotation.freeTextAnnotation.length !== 0) {
            for (var s = 0; s < annotation.freeTextAnnotation.length; s++) {
                // eslint-disable-next-line max-len
                this.pdfViewer.annotationModule.freeTextAnnotationModule.saveImportedFreeTextAnnotations(annotation.freeTextAnnotation[s], pageIndex);
            }
        }
    };
    PdfViewerBase.prototype.updateDocumentAnnotationCollections = function () {
        window.sessionStorage.removeItem(this.documentId + '_annotations_textMarkup');
        window.sessionStorage.removeItem(this.documentId + '_annotations_shape');
        window.sessionStorage.removeItem(this.documentId + '_annotations_shape_measure');
        window.sessionStorage.removeItem(this.documentId + '_annotations_stamp');
        window.sessionStorage.removeItem(this.documentId + '_annotations_sticky');
        window.sessionStorage.removeItem(this.documentId + '_annotations_freetext');
        window.sessionStorage.removeItem(this.documentId + '_annotations_ink');
        if (this.downloadCollections) {
            if (this.isStorageExceed) {
                this.annotationStorage[this.documentId + '_annotations_textMarkup'] = this.downloadCollections.textMarkupObject;
                this.annotationStorage[this.documentId + '_annotations_shape'] = this.downloadCollections.shapeObject;
                this.annotationStorage[this.documentId + '_annotations_shape_measure'] = this.downloadCollections.measureShapeObject;
                this.annotationStorage[this.documentId + '_annotations_stamp'] = this.downloadCollections.stampObject;
                this.annotationStorage[this.documentId + '_annotations_sticky'] = this.downloadCollections.stickyObject;
                this.annotationStorage[this.documentId + '_annotations_freetext'] = this.downloadCollections.freeTextObject;
                this.annotationStorage[this.documentId + '_annotations_ink'] = this.downloadCollections.inkObject;
            }
            else {
                if (this.downloadCollections.textMarkupObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_textMarkup', this.downloadCollections.textMarkupObject);
                }
                if (this.downloadCollections.shapeObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_shape', this.downloadCollections.shapeObject);
                }
                if (this.downloadCollections.measureShapeObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_shape_measure', this.downloadCollections.measureShapeObject);
                }
                if (this.downloadCollections.stampObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_stamp', this.downloadCollections.stampObject);
                }
                if (this.downloadCollections.stickyObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_sticky', this.downloadCollections.stickyObject);
                }
                if (this.downloadCollections.freeTextObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_freetext', this.downloadCollections.freeTextObject);
                }
                if (this.downloadCollections.inkObject) {
                    window.sessionStorage.setItem(this.documentId + '_annotations_ink', this.downloadCollections.inkObject);
                }
            }
        }
    };
    /**
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.createAnnotationJsonData = function () {
        // eslint-disable-next-line
        var annotationCollection = {};
        var textMarkupAnnotationCollection;
        var shapeAnnotations;
        var calibrateAnnotations;
        var stampAnnotationCollection;
        var stickyAnnotationCollection;
        var freeTextAnnotationCollection;
        var signaturCollection;
        var signaturInkCollection;
        this.saveImportedAnnotations();
        if (this.isTextMarkupAnnotationModule()) {
            this.isJsonExported = true;
            // eslint-disable-next-line max-len
            textMarkupAnnotationCollection = this.pdfViewer.annotationModule.textMarkupAnnotationModule.saveTextMarkupAnnotations();
        }
        if (this.isShapeAnnotationModule()) {
            this.isJsonExported = true;
            // eslint-disable-next-line max-len
            shapeAnnotations = this.pdfViewer.annotationModule.shapeAnnotationModule.saveShapeAnnotations();
        }
        if (this.isCalibrateAnnotationModule()) {
            this.isJsonExported = true;
            // eslint-disable-next-line max-len
            calibrateAnnotations = this.pdfViewer.annotationModule.measureAnnotationModule.saveMeasureShapeAnnotations();
        }
        if (this.isStampAnnotationModule()) {
            // eslint-disable-next-line max-len
            stampAnnotationCollection = this.pdfViewer.annotationModule.stampAnnotationModule.saveStampAnnotations();
        }
        if (this.isCommentAnnotationModule()) {
            // eslint-disable-next-line max-len
            stickyAnnotationCollection = this.pdfViewer.annotationModule.stickyNotesAnnotationModule.saveStickyAnnotations();
        }
        if (this.isFreeTextAnnotationModule()) {
            // eslint-disable-next-line max-len
            freeTextAnnotationCollection = this.pdfViewer.annotationModule.freeTextAnnotationModule.saveFreeTextAnnotations();
        }
        if (this.isInkAnnotationModule()) {
            // eslint-disable-next-line
            signaturInkCollection = this.pdfViewer.annotationModule.inkAnnotationModule.saveInkSignature();
        }
        if (this.pdfViewer.isSignatureEditable) {
            // eslint-disable-next-line
            signaturCollection = this.signatureModule.saveSignature();
        }
        else {
            // eslint-disable-next-line
            var annotations = new Array();
            for (var j = 0; j < this.pageCount; j++) {
                annotations[j] = [];
            }
            signaturCollection = JSON.stringify(annotations);
        }
        for (var s = 0; s < this.pageCount; s++) {
            // eslint-disable-next-line max-len
            var annotation = {
                textMarkupAnnotation: JSON.parse(textMarkupAnnotationCollection)[s], shapeAnnotation: JSON.parse(shapeAnnotations)[s],
                measureShapeAnnotation: JSON.parse(calibrateAnnotations)[s], stampAnnotations: JSON.parse(stampAnnotationCollection)[s],
                // eslint-disable-next-line max-len
                stickyNotesAnnotation: JSON.parse(stickyAnnotationCollection)[s], freeTextAnnotation: JSON.parse(freeTextAnnotationCollection)[s], signatureAnnotation: JSON.parse(signaturCollection)[s], signatureInkAnnotation: JSON.parse(signaturInkCollection)[s]
            };
            annotationCollection[s] = annotation;
        }
        return JSON.stringify(annotationCollection);
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.combineImportedData = function (excistingImportAnnotation, newlyImportAnnotation) {
        for (var i = 0; i < this.pageCount; i++) {
            if (newlyImportAnnotation[i]) {
                if (excistingImportAnnotation[i]) {
                    if (newlyImportAnnotation[i].textMarkupAnnotation && newlyImportAnnotation[i].textMarkupAnnotation.length !== 0) {
                        if (excistingImportAnnotation[i].textMarkupAnnotation) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].textMarkupAnnotation = this.checkImportedData(excistingImportAnnotation[i].textMarkupAnnotation, newlyImportAnnotation[i].textMarkupAnnotation, i);
                            if (newlyImportAnnotation[i].textMarkupAnnotation.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].textMarkupAnnotation = excistingImportAnnotation[i].textMarkupAnnotation.concat(newlyImportAnnotation[i].textMarkupAnnotation);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].textMarkupAnnotation = newlyImportAnnotation[i].textMarkupAnnotation;
                        }
                    }
                    if (newlyImportAnnotation[i].shapeAnnotation && newlyImportAnnotation[i].shapeAnnotation.length !== 0) {
                        if (excistingImportAnnotation[i].shapeAnnotation) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].shapeAnnotation = this.checkImportedData(excistingImportAnnotation[i].shapeAnnotation, newlyImportAnnotation[i].shapeAnnotation, i);
                            if (newlyImportAnnotation[i].shapeAnnotation.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].shapeAnnotation = excistingImportAnnotation[i].shapeAnnotation.concat(newlyImportAnnotation[i].shapeAnnotation);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].shapeAnnotation = newlyImportAnnotation[i].shapeAnnotation;
                        }
                    }
                    if (newlyImportAnnotation[i].measureShapeAnnotation && newlyImportAnnotation[i].measureShapeAnnotation.length !== 0) {
                        if (excistingImportAnnotation[i].measureShapeAnnotation) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].measureShapeAnnotation = this.checkImportedData(excistingImportAnnotation[i].measureShapeAnnotation, newlyImportAnnotation[i].measureShapeAnnotation, i);
                            if (newlyImportAnnotation[i].measureShapeAnnotation.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].measureShapeAnnotation = excistingImportAnnotation[i].measureShapeAnnotation.concat(newlyImportAnnotation[i].measureShapeAnnotation);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].measureShapeAnnotation = newlyImportAnnotation[i].measureShapeAnnotation;
                        }
                    }
                    if (newlyImportAnnotation[i].stampAnnotations && newlyImportAnnotation[i].stampAnnotations.length !== 0) {
                        if (excistingImportAnnotation[i].stampAnnotations) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].stampAnnotations = this.checkImportedData(excistingImportAnnotation[i].stampAnnotations, newlyImportAnnotation[i].stampAnnotations, i);
                            if (newlyImportAnnotation[i].stampAnnotations.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].stampAnnotations = excistingImportAnnotation[i].stampAnnotations.concat(newlyImportAnnotation[i].stampAnnotations);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].stampAnnotations = newlyImportAnnotation[i].stampAnnotations;
                        }
                    }
                    if (newlyImportAnnotation[i].stickyNotesAnnotation && newlyImportAnnotation[i].stickyNotesAnnotation.length !== 0) {
                        if (excistingImportAnnotation[i].stickyNotesAnnotation) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].stickyNotesAnnotation = this.checkImportedData(excistingImportAnnotation[i].stickyNotesAnnotation, newlyImportAnnotation[i].stickyNotesAnnotation, i);
                            if (newlyImportAnnotation[i].stickyNotesAnnotation.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].stickyNotesAnnotation = excistingImportAnnotation[i].stickyNotesAnnotation.concat(newlyImportAnnotation[i].stickyNotesAnnotation);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].stickyNotesAnnotation = newlyImportAnnotation[i].stickyNotesAnnotation;
                        }
                    }
                    if (newlyImportAnnotation[i].freeTextAnnotation && newlyImportAnnotation[i].freeTextAnnotation.length !== 0) {
                        if (excistingImportAnnotation[i].freeTextAnnotation) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].freeTextAnnotation = this.checkImportedData(excistingImportAnnotation[i].freeTextAnnotation, newlyImportAnnotation[i].freeTextAnnotation, i);
                            if (newlyImportAnnotation[i].freeTextAnnotation.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].freeTextAnnotation = excistingImportAnnotation[i].freeTextAnnotation.concat(newlyImportAnnotation[i].freeTextAnnotation);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].freeTextAnnotation = newlyImportAnnotation[i].freeTextAnnotation;
                        }
                    }
                    if (newlyImportAnnotation[i].signatureInkAnnotation && newlyImportAnnotation[i].signatureInkAnnotation.length !== 0) {
                        if (excistingImportAnnotation[i].signatureInkAnnotation) {
                            // eslint-disable-next-line max-len
                            newlyImportAnnotation[i].signatureInkAnnotation = this.checkImportedData(excistingImportAnnotation[i].signatureInkAnnotation, newlyImportAnnotation[i].signatureInkAnnotation, i);
                            if (newlyImportAnnotation[i].signatureInkAnnotation.length !== 0) {
                                // eslint-disable-next-line max-len
                                excistingImportAnnotation[i].signatureInkAnnotation = excistingImportAnnotation[i].signatureInkAnnotation.concat(newlyImportAnnotation[i].signatureInkAnnotation);
                            }
                        }
                        else {
                            excistingImportAnnotation[i].signatureInkAnnotation = newlyImportAnnotation[i].signatureInkAnnotation;
                        }
                    }
                }
                else {
                    // eslint-disable-next-line max-len
                    var annotation = {
                        // eslint-disable-next-line max-len
                        textMarkupAnnotation: newlyImportAnnotation[i].textMarkupAnnotation, shapeAnnotation: newlyImportAnnotation[i].shapeAnnotation,
                        // eslint-disable-next-line max-len
                        measureShapeAnnotation: newlyImportAnnotation[i].measureShapeAnnotation, stampAnnotations: newlyImportAnnotation[i].stampAnnotations,
                        // eslint-disable-next-line max-len
                        stickyNotesAnnotation: newlyImportAnnotation[i].stickyNotesAnnotation, freeTextAnnotation: newlyImportAnnotation[i].freeTextAnnotation,
                        signatureInkAnnotation: newlyImportAnnotation[i].signatureInkAnnotation
                    };
                    excistingImportAnnotation[i] = annotation;
                }
            }
        }
        return excistingImportAnnotation;
    };
    /**
     * @private
     * @returns {boolean} - Returns true or false.
     */
    PdfViewerBase.prototype.updateExportItem = function () {
        // eslint-disable-next-line
        var shapeObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape');
        // eslint-disable-next-line
        var measureObject = window.sessionStorage.getItem(this.documentId + '_annotations_shape_measure');
        // eslint-disable-next-line
        var stampObject = window.sessionStorage.getItem(this.documentId + '_annotations_stamp');
        // eslint-disable-next-line
        var stickyObject = window.sessionStorage.getItem(this.documentId + '_annotations_sticky');
        // eslint-disable-next-line
        var textMarkupObject = window.sessionStorage.getItem(this.documentId + '_annotations_textMarkup');
        // eslint-disable-next-line
        var freeTextObject = window.sessionStorage.getItem(this.documentId + '_annotations_freetext');
        var isSignatureEditable = false;
        // eslint-disable-next-line
        var inkAnnotationObjct = window.sessionStorage.getItem(this.documentId + '_annotations_ink');
        if (this.pdfViewer.isSignatureEditable) {
            // eslint-disable-next-line
            var signatureObject = window.sessionStorage.getItem(this.documentId + '_annotations_sign');
            if (signatureObject) {
                isSignatureEditable = true;
            }
        }
        // eslint-disable-next-line max-len
        if (shapeObject || measureObject || stampObject || stickyObject || textMarkupObject || freeTextObject || this.isImportAction || this.isStorageExceed || isSignatureEditable || inkAnnotationObjct) {
            return true;
        }
        else {
            return false;
        }
    };
    PdfViewerBase.prototype.isFreeTextAnnotation = function (annotations) {
        var resut = false;
        if (annotations && annotations.length > 0) {
            resut = annotations.some(function (s) { return s.shapeAnnotationType === 'FreeText' && s.subject === 'Text Box'; });
        }
        return resut;
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkImportedData = function (existingCollection, newCollection, pageIndex) {
        for (var i = 0; i < existingCollection.length; i++) {
            for (var j = 0; j < newCollection.length; j++) {
                if (existingCollection[i].AnnotName === newCollection[j].AnnotName) {
                    newCollection.splice(j, 1);
                    j = j - 1;
                }
            }
        }
        if (this.annotationComments) {
            // eslint-disable-next-line
            var annotationCollections = this.annotationComments[pageIndex];
            annotationCollections = this.selectAnnotationCollections(annotationCollections);
            if (annotationCollections) {
                for (var i = 0; i < annotationCollections.length; i++) {
                    for (var j = 0; j < newCollection.length; j++) {
                        if (annotationCollections[i].AnnotName === newCollection[j].AnnotName) {
                            newCollection.splice(j, 1);
                            j = j - 1;
                        }
                    }
                }
            }
        }
        return newCollection;
    };
    /**
     * @param points
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.checkAnnotationWidth = function (points) {
        var width = 0;
        var height = 0;
        var minWidth;
        var maxWidth;
        var minHeight;
        var maxHeight;
        for (var i = 0; i < points.length; i++) {
            if (!minWidth) {
                minWidth = points[i].x;
                maxWidth = points[i].x;
                minHeight = points[i].y;
                maxHeight = points[i].y;
            }
            else {
                if (minWidth > points[i].x) {
                    minWidth = points[i].x;
                }
                else if (maxWidth < points[i].x) {
                    maxWidth = points[i].x;
                }
                if (minHeight > points[i].y) {
                    minHeight = points[i].y;
                }
                else if (maxHeight < points[i].y) {
                    maxHeight = points[i].y;
                }
            }
        }
        width = maxWidth - minWidth;
        height = maxHeight - minHeight;
        return { width: width, height: height };
    };
    PdfViewerBase.prototype.deleteAnnotations = function () {
        if (this.pdfViewer.annotationModule) {
            this.pdfViewer.annotations = [];
            this.pdfViewer.zIndexTable = [];
            this.pdfViewer.annotationCollection = [];
            this.pdfViewer.signatureCollection = [];
            // eslint-disable-next-line
            var annotationCollection = this.createAnnotationsCollection();
            this.annotationComments = annotationCollection;
            this.documentAnnotationCollections = annotationCollection;
            this.annotationRenderredList = [];
            window.sessionStorage.removeItem(this.documentId + '_annotations_shape');
            window.sessionStorage.removeItem(this.documentId + '_annotations_shape_measure');
            window.sessionStorage.removeItem(this.documentId + '_annotations_stamp');
            window.sessionStorage.removeItem(this.documentId + '_annotations_sticky');
            window.sessionStorage.removeItem(this.documentId + '_annotations_textMarkup');
            window.sessionStorage.removeItem(this.documentId + '_annotations_freetext');
            window.sessionStorage.removeItem(this.documentId + '_annotations_sign');
            window.sessionStorage.removeItem(this.documentId + '_annotations_ink');
            for (var i = 0; i < this.pageCount; i++) {
                this.pdfViewer.annotationModule.renderAnnotations(i, null, null, null);
                this.pdfViewer.renderDrawing(undefined, i);
                this.pdfViewer.clearSelection(i);
                var accordionContent = document.getElementById(this.pdfViewer.element.id + '_accordionContainer' + (i + 1));
                if (accordionContent) {
                    accordionContent.remove();
                }
                // eslint-disable-next-line max-len
                var accordionContentContainer = document.getElementById(this.pdfViewer.element.id + '_accordionContentContainer');
                if (accordionContentContainer) {
                    if (accordionContentContainer.childElementCount === 0) {
                        accordionContentContainer.style.display = 'none';
                        if (document.getElementById(this.pdfViewer.element.id + '_commentsPanelText')) {
                            // eslint-disable-next-line max-len
                            this.navigationPane.annotationMenuObj.enableItems([this.pdfViewer.localeObj.getConstant('Export Annotations')], false);
                            document.getElementById(this.pdfViewer.element.id + '_commentsPanelText').style.display = 'block';
                        }
                    }
                }
            }
            this.isImportedAnnotation = false;
            this.isImportAction = false;
            this.importedAnnotation = [];
            this.annotationPageList = [];
            this.pdfViewer.annotationModule.freeTextAnnotationModule.freeTextPageNumbers = [];
            this.pdfViewer.annotationModule.stampAnnotationModule.stampPageNumber = [];
            this.pdfViewer.annotation.inkAnnotationModule.inkAnnotationindex = [];
            this.isAnnotationCollectionRemoved = true;
        }
    };
    /**
     * @param pageNumber
     * @param isObject
     * @param pageNumber
     * @param isObject
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.createAnnotationsCollection = function (pageNumber, isObject) {
        // eslint-disable-next-line
        var annotationCollectionList = [];
        if (!isObject) {
            for (var i = 0; i < this.pageCount; i++) {
                var annotation = {
                    // eslint-disable-next-line max-len
                    textMarkupAnnotation: [], shapeAnnotation: [], measureShapeAnnotation: [], stampAnnotations: [], stickyNotesAnnotation: [], freeTextAnnotation: [], signatureAnnotation: [], signatureInkAnnotation: []
                };
                annotationCollectionList.push(annotation);
            }
        }
        else {
            annotationCollectionList = {};
            var annotation = {
                // eslint-disable-next-line max-len
                textMarkupAnnotation: [], shapeAnnotation: [], measureShapeAnnotation: [], stampAnnotations: [], stickyNotesAnnotation: [], freeTextAnnotation: [], signatureAnnotation: [], signatureInkAnnotation: []
            };
            annotationCollectionList[pageNumber] = annotation;
        }
        return annotationCollectionList;
    };
    /**
     * @param importAnnotation
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.addAnnotation = function (importAnnotation) {
        // eslint-disable-next-line
        var pdfAnnotation = {};
        // eslint-disable-next-line
        var documentCollections;
        if (importAnnotation) {
            var isAnnotationObject = false;
            var annotationCount = 1;
            if (importAnnotation.shapeAnnotationType || importAnnotation.author) {
                isAnnotationObject = true;
                documentCollections = this.createAnnotationsCollection(importAnnotation.pageNumber, true);
            }
            else {
                if (importAnnotation.length) {
                    annotationCount = importAnnotation.length;
                    documentCollections = this.createAnnotationsCollection();
                }
                else {
                    isAnnotationObject = true;
                    documentCollections = this.createAnnotationsCollection(importAnnotation.pageNumber, true);
                }
            }
            for (var a = 0; a < annotationCount; a++) {
                // eslint-disable-next-line
                var annotation = void 0;
                if (isAnnotationObject) {
                    annotation = importAnnotation;
                }
                else {
                    annotation = importAnnotation[a];
                }
                // eslint-disable-next-line
                var newAnnotation = {};
                newAnnotation.ShapeAnnotationType = annotation.shapeAnnotationType;
                newAnnotation.AnnotationAddMode = annotation.annotationAddMode;
                newAnnotation.Author = annotation.author;
                newAnnotation.AnnotationSelectorSettings = annotation.annotationSelectorSettings;
                newAnnotation.AnnotationSettings = annotation.annotationSettings;
                newAnnotation.PageNumber = annotation.pageNumber;
                newAnnotation.ModifiedDate = annotation.modifiedDate;
                newAnnotation.Subject = annotation.subject;
                newAnnotation.Note = annotation.note;
                newAnnotation.AnnotName = annotation.annotationId;
                newAnnotation.IsCommentLock = annotation.isCommentLock;
                newAnnotation.Comments = annotation.comments;
                if (annotation.comments && annotation.comments.length > 0) {
                    // eslint-disable-next-line
                    var comments = [];
                    for (var i = 0; i < annotation.comments.length; i++) {
                        comments.push(this.updateComments(annotation, annotation.comments[i]));
                    }
                    newAnnotation.Comments = comments;
                }
                if (annotation.review) {
                    newAnnotation.State = annotation.review.state;
                    newAnnotation.StateModel = annotation.review.stateModel;
                }
                newAnnotation.CustomData = annotation.customData;
                newAnnotation.Opacity = annotation.opacity;
                if (annotation.shapeAnnotationType === 'textMarkup') {
                    newAnnotation.AnnotType = 'textMarkup';
                    newAnnotation.Color = annotation.color;
                    newAnnotation.IsMultiSelect = annotation.isMultiSelect;
                    newAnnotation.TextMarkupAnnotationType = annotation.textMarkupAnnotationType;
                    newAnnotation.TextMarkupContent = annotation.textMarkupContent;
                    newAnnotation.TextMarkupStartIndex = annotation.textMarkupStartIndex;
                    newAnnotation.TextMarkupEndIndex = annotation.textMarkupEndIndex;
                    if (annotation.rect) {
                        newAnnotation.Rect = this.convertBounds(annotation.rect, true);
                    }
                    if (annotation.bounds && annotation.bounds.length >= 1) {
                        // eslint-disable-next-line
                        var bounds = new Array();
                        for (var i = 0; i < annotation.bounds.length; i++) {
                            bounds.push(this.convertBounds(annotation.bounds[i]));
                        }
                        newAnnotation.Bounds = bounds;
                    }
                    documentCollections[annotation.pageNumber].textMarkupAnnotation.push(newAnnotation);
                }
                else if (annotation.shapeAnnotationType === 'sticky') {
                    newAnnotation.AnnotType = 'sticky';
                    newAnnotation.Icon = 'Comment';
                    newAnnotation.Bounds = this.convertBounds(annotation.bounds);
                    newAnnotation.StrokeColor = annotation.strokeColor;
                    newAnnotation.Color = annotation.color;
                    documentCollections[annotation.pageNumber].stickyNotesAnnotation.push(newAnnotation);
                }
                else if (annotation.shapeAnnotationType === 'FreeText') {
                    newAnnotation.AnnotType = 'freeText';
                    newAnnotation.Name = annotation.annotationId;
                    newAnnotation.MarkupText = annotation.dynamicText;
                    newAnnotation.Text = annotation.dynamicText;
                    newAnnotation.Note = annotation.dynamicText;
                    newAnnotation.TextAlign = annotation.textAlign;
                    newAnnotation.Thickness = annotation.thicknes;
                    newAnnotation.StrokeColor = annotation.strokeColor;
                    newAnnotation.FillColor = annotation.fillColor;
                    newAnnotation.FontColor = annotation.fontColor;
                    newAnnotation.FontSize = annotation.fontSize;
                    newAnnotation.FontFamily = annotation.fontFamily;
                    newAnnotation.Rotate = annotation.rotateAngle;
                    newAnnotation.Bounds = this.convertBounds(annotation.bounds);
                    // eslint-disable-next-line max-len
                    newAnnotation.Font = { 'Name': annotation.fontFamily, 'Size': annotation.fontSize, 'Bold': annotation.font.isBold, 'Italic': annotation.font.isItalic, 'Strikeout': annotation.font.isStrikeout, 'Underline': annotation.font.isUnderline };
                    documentCollections[annotation.pageNumber].freeTextAnnotation.push(newAnnotation);
                }
                else if (annotation.shapeAnnotationType === 'stamp') {
                    newAnnotation.AnnotType = 'stamp';
                    newAnnotation.Icon = annotation.icon;
                    newAnnotation.isDynamic = false;
                    newAnnotation.Rect = this.convertBounds(annotation.bounds, false, true);
                    newAnnotation.RotateAngle = annotation.rotateAngle;
                    newAnnotation.FillColor = annotation.fillColor;
                    newAnnotation.StrokeColor = annotation.strokeColor;
                    newAnnotation.StampAnnotationType = annotation.stampAnnotationType;
                    newAnnotation.CreationDate = annotation.creationDate;
                    if (annotation.stampAnnotationType === 'image') {
                        // eslint-disable-next-line
                        var apperarance = [];
                        // eslint-disable-next-line
                        var imageData = { 'imagedata': annotation.stampAnnotationPath };
                        apperarance.push(imageData);
                        newAnnotation.Apperarance = apperarance;
                    }
                    if (annotation.isDynamicStamp) {
                        newAnnotation.IsDynamic = true;
                        newAnnotation.StrokeColor = annotation.stampFillcolor;
                        // eslint-disable-next-line
                        var apperarance = [];
                        // eslint-disable-next-line
                        var imageData = { 'type': 'string', 'text': annotation.dynamicText, 'currentFontname': '95b303ab-d397-438a-83af-e2ff8a9900f1', 'baseFontName': 'Helvetica-BoldOblique', 'fontSize': 10, 'isImport': true };
                        apperarance.push(imageData);
                        newAnnotation.Apperarance = apperarance;
                    }
                    documentCollections[annotation.pageNumber].stampAnnotations.push(newAnnotation);
                }
                else if (annotation.shapeAnnotationType === 'Ink' || annotation.shapeAnnotationType === 'Signature') {
                    newAnnotation.StrokeColor = annotation.strokeColor;
                    newAnnotation.FillColor = annotation.fillColor;
                    newAnnotation.Thickness = annotation.thickness;
                    newAnnotation.Bounds = this.convertBounds(annotation.bounds);
                    newAnnotation.PathData = annotation.data;
                    newAnnotation.pageIndex = annotation.pageNumber;
                    if (annotation.shapeAnnotationType === 'Ink') {
                        newAnnotation.AnnotType = 'Ink';
                        newAnnotation.IsPathData = true;
                        documentCollections[annotation.pageNumber].signatureInkAnnotation.push(newAnnotation);
                    }
                    if (annotation.shapeAnnotationType === 'Signature') {
                        newAnnotation.AnnotType = 'Signature';
                        newAnnotation.SignatureName = annotation.annotationId;
                        newAnnotation.IsSignature = true;
                        documentCollections[annotation.pageNumber].signatureAnnotation.push(newAnnotation);
                    }
                }
                else {
                    // eslint-disable-next-line max-len
                    if (annotation.shapeAnnotationType === 'Line' || annotation.shapeAnnotationType === 'LineWidthArrowHead' || annotation.shapeAnnotationType === 'Polyline' || annotation.shapeAnnotationType === 'Polygon' || annotation.shapeAnnotationType === 'Polyline' || annotation.shapeAnnotationType === 'Circle' || annotation.shapeAnnotationType === 'Oval' || annotation.shapeAnnotationType === 'Rectangle' || annotation.shapeAnnotationType === 'Square' || annotation.shapeAnnotationType === 'Ellipse') {
                        newAnnotation.AnnotType = 'shape';
                        newAnnotation.StrokeColor = annotation.strokeColor;
                        newAnnotation.FillColor = annotation.fillColor;
                        newAnnotation.Thickness = annotation.thickness;
                        newAnnotation.BorderStyle = annotation.borderStyle;
                        newAnnotation.BorderDashArray = annotation.borderDashArray;
                        newAnnotation.RotateAngle = annotation.rotateAngle;
                        newAnnotation.IsCloudShape = annotation.isCloudShape;
                        newAnnotation.CloudIntensity = annotation.cloudIntensity;
                        newAnnotation.RectangleDifference = annotation.rectangleDifference;
                        newAnnotation.LineHeadStart = annotation.lineHeadStart;
                        newAnnotation.LineHeadEnd = annotation.lineHeadEnd;
                        newAnnotation.IsLocked = annotation.isLocked;
                        newAnnotation.EnableShapeLabel = annotation.enableShapeLabel;
                        newAnnotation.LabelContent = annotation.labelContent;
                        newAnnotation.LabelFillColor = annotation.labelFillColor;
                        newAnnotation.LabelBorderColor = annotation.labelBorderColor;
                        newAnnotation.FontColor = annotation.fontColor;
                        newAnnotation.FontSize = annotation.fontSize;
                        newAnnotation.LabelBounds = this.convertBounds(annotation.labelBounds);
                        newAnnotation.LabelSettings = annotation.labelSettings;
                        newAnnotation.Bounds = this.convertBounds(annotation.bounds);
                        newAnnotation.LeaderLength = annotation.leaderLength;
                        newAnnotation.LeaderLineExtenstion = annotation.leaderLineExtension;
                        if (annotation.vertexPoints && annotation.vertexPoints.length >= 1) {
                            // eslint-disable-next-line
                            var points = new Array();
                            for (var i = 0; i < annotation.vertexPoints.length; i++) {
                                points.push(this.convertVertexPoints(annotation.vertexPoints[i]));
                            }
                            newAnnotation.VertexPoints = points;
                        }
                        newAnnotation.EnableShapeLabel = annotation.enableShapeLabel;
                        // eslint-disable-next-line max-len
                        if (annotation.subject === 'Distance calculation' || annotation.subject === 'Perimeter calculation' || annotation.subject === 'Area calculation' || annotation.subject === 'Radius calculation' || annotation.subject === 'Volume calculation') {
                            newAnnotation.AnnotType = 'shape_measure';
                            // eslint-disable-next-line
                            var calibrate = annotation.calibrate;
                            if (calibrate) {
                                // eslint-disable-next-line
                                newAnnotation.Calibrate = {
                                    'Ratio': calibrate.ratio, 'X': [{ 'Unit': calibrate.x[0].unit, 'ConversionFactor': calibrate.x[0].conversionFactor, 'FractionalType': calibrate.x[0].fractionalType, 'Denominator': calibrate.x[0].denominator, 'FormatDenominator': calibrate.x[0].formatDenominator }],
                                    // eslint-disable-next-line
                                    'Distance': [{ 'Unit': calibrate.distance[0].unit, 'ConversionFactor': calibrate.distance[0].conversionFactor, 'FractionalType': calibrate.distance[0].fractionalType, 'Denominator': calibrate.distance[0].denominator, 'FormatDenominator': calibrate.distance[0].formatDenominator }],
                                    // eslint-disable-next-line
                                    'Area': [{ 'Unit': calibrate.area[0].unit, 'ConversionFactor': calibrate.area[0].conversionFactor, 'FractionalType': calibrate.area[0].fractionalType, 'Denominator': calibrate.area[0].denominator, 'FormatDenominator': calibrate.area[0].formatDenominator }],
                                    // eslint-disable-next-line
                                    'Angle': null, 'Volume': null, 'TargetUnitConversion': calibrate.targetUnitConversion, 'Depth': calibrate.depth
                                };
                            }
                            newAnnotation.Indent = annotation.indent;
                            newAnnotation.Caption = annotation.caption;
                            newAnnotation.CaptionPosition = annotation.captionPosition;
                            newAnnotation.LeaderLineExtension = annotation.leaderLineExtension;
                            newAnnotation.LeaderLength = annotation.leaderLength;
                            newAnnotation.LeaderLineOffset = annotation.leaderLineOffset;
                            documentCollections[annotation.pageNumber].measureShapeAnnotation.push(newAnnotation);
                        }
                        else {
                            documentCollections[annotation.pageNumber].shapeAnnotation.push(newAnnotation);
                        }
                    }
                }
            }
            pdfAnnotation.pdfAnnotation = documentCollections;
            this.pdfViewer.importAnnotation(pdfAnnotation);
        }
    };
    /**
     * @param bounds
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.convertBounds = function (bounds, isRect, isStamp) {
        if (bounds) {
            if (isRect) {
                var left = bounds.left ? bounds.left : bounds.Left ? bounds.Left : 0;
                var right = bounds.right ? bounds.right : bounds.Right ? bounds.Right : 0;
                var bottom = bounds.bottom ? bounds.bottom : bounds.Bottom ? bounds.Bottom : 0;
                var top_5 = bounds.top ? bounds.top : bounds.Top ? bounds.Top : 0;
                return { left: left, right: right, bottom: bottom, top: top_5 };
            }
            else {
                var x = bounds.x ? bounds.x : bounds.left ? bounds.left : bounds.Left ? bounds.Left : 0;
                var y = bounds.y ? bounds.y : bounds.top ? bounds.top : bounds.Top ? bounds.Top : 0;
                var width = bounds.width ? bounds.width : bounds.Width ? bounds.Width : 0;
                var height = bounds.height ? bounds.height : bounds.Height ? bounds.Height : 0;
                if (isStamp) {
                    return { X: this.ConvertPixelToPoint(x), Y: this.ConvertPixelToPoint(y), Left: this.ConvertPixelToPoint(x), Top: this.ConvertPixelToPoint(y), Height: this.ConvertPixelToPoint(height), Width: this.ConvertPixelToPoint(width) };
                }
                else {
                    return { X: x, Y: y, Left: x, Top: y, Height: height, Width: width };
                }
            }
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.ConvertPixelToPoint = function (number) {
        return (number * (72 / 96));
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.convertVertexPoints = function (points) {
        if (points) {
            var x = points.x ? points.x : points.X ? points.X : 0;
            var y = points.y ? points.y : points.Y ? points.Y : 0;
            return { X: x, Y: y, Left: x, Top: y };
        }
    };
    // eslint-disable-next-line
    PdfViewerBase.prototype.updateComments = function (annotation, comments) {
        if (annotation && comments) {
            // eslint-disable-next-line
            var newAnnotation = {};
            newAnnotation.ShapeAnnotationType = annotation.shapeAnnotationType;
            newAnnotation.Author = comments.author;
            newAnnotation.AnnotationSelectorSettings = annotation.annotationSelectorSettings;
            newAnnotation.AnnotationSettings = annotation.annotationSettings;
            newAnnotation.PageNumber = annotation.pageNumber;
            newAnnotation.ModifiedDate = comments.modifiedDate;
            newAnnotation.Subject = annotation.subject;
            newAnnotation.Note = comments.note;
            newAnnotation.AnnotName = comments.annotName;
            newAnnotation.Comments = comments.comments;
            newAnnotation.State = comments.review.state;
            newAnnotation.StateModel = comments.review.stateModel;
            newAnnotation.CustomData = annotation.customData;
            newAnnotation.IsLock = comments.isLock;
            return newAnnotation;
        }
    };
    /**
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.removeFocus = function () {
        if (isBlazor()) {
            // eslint-disable-next-line
            var currentPageContainer = this.pdfViewer.element.querySelector('#' + this.pdfViewer.element.id + '_totalPage');
            // eslint-disable-next-line max-len
            if (currentPageContainer && currentPageContainer.firstElementChild && currentPageContainer.firstElementChild.firstElementChild) {
                currentPageContainer.firstElementChild.firstElementChild.blur();
            }
        }
    };
    /**
     * @private
     */
    // eslint-disable-next-line
    PdfViewerBase.prototype.updateDocumentEditedProperty = function (isEdited) {
        this.pdfViewer.allowServerDataBinding = true;
        this.pdfViewer.isDocumentEdited = isEdited;
        this.pdfViewer.allowServerDataBinding = false;
    };
    /**
    * @private
    */
    PdfViewerBase.prototype.getWindowDevicePixelRatio = function () {
        var devicePixelRatio = window.devicePixelRatio;
        if (!Browser.isDevice) {
            return devicePixelRatio;
        }
        else {
            return devicePixelRatio = 2;
        }
    };
    /**
    * @private
    */
    PdfViewerBase.prototype.getZoomRatio = function (zoom) {
        var zoomFactor = this.getZoomFactor();
        var zoomValue = zoom ? zoom : 1;
        var ratio;
        var devicePixelRatio = this.getWindowDevicePixelRatio();
        if (!Browser.isDevice || (Browser.isDevice && zoomFactor <= 0.7)) {
            ratio = zoomValue * devicePixelRatio;
        }
        else {
            ratio = zoomValue;
        }
        return ratio;
    };
    /**
    * @private
    */
    PdfViewerBase.prototype.importJsonForRotatedDocuments = function (Rotate, pageNumber, bounds, originalRotation) {
        // eslint-disable-next-line
        var rotateAngle = Math.abs(Rotate);
        var pageDetails = this.pageSize[pageNumber];
        //originalRotation = !isNullOrUndefined(originalRotation) ? originalRotation : pageDetails.rotation;
        if (originalRotation !== pageDetails.rotation) {
            rotateAngle = this.getRotationAngle(originalRotation, pageNumber);
            this.isPageRotated = true;
        }
        else {
            rotateAngle = 0;
            this.isPageRotated = false;
        }
        if (rotateAngle === 1) {
            return { X: pageDetails.width - bounds.Y - bounds.Height, Y: bounds.X, Height: bounds.Width, Width: bounds.Height };
        }
        else if (rotateAngle === 2) {
            return { X: pageDetails.width - bounds.X - bounds.Width, Y: pageDetails.height - bounds.Y - bounds.Height, Height: bounds.Height, Width: bounds.Width };
        }
        else if (rotateAngle === 3) {
            return { X: bounds.Y, Y: pageDetails.height - bounds.X - bounds.Width, Height: bounds.Width, Width: bounds.Height };
        }
        else {
            return bounds;
        }
    };
    PdfViewerBase.prototype.getRotationAngle = function (originalRotation, pageNumber) {
        var pageDetails = this.pageSize[pageNumber];
        originalRotation = Math.abs(originalRotation);
        var rotateAngle;
        if (originalRotation === 0) {
            return rotateAngle = pageDetails.rotation;
        }
        else if (originalRotation === 1 || originalRotation === 90) {
            if (pageDetails.rotation == 0) {
                return rotateAngle = 3;
            }
            else if (pageDetails.rotation === 2) {
                return rotateAngle = 1;
            }
            else if (pageDetails.rotation === 3) {
                return rotateAngle = 2;
            }
        }
        else if (originalRotation === 2 || originalRotation === 180) {
            if (pageDetails.rotation == 0) {
                return rotateAngle = 2;
            }
            else if (pageDetails.rotation === 1) {
                return rotateAngle = 3;
            }
            else if (pageDetails.rotation === 3) {
                return rotateAngle = 1;
            }
        }
        else if (originalRotation === 3 || originalRotation === 270) {
            if (pageDetails.rotation == 0) {
                return rotateAngle = 1;
            }
            else if (pageDetails.rotation === 2) {
                return rotateAngle = 3;
            }
            else if (pageDetails.rotation === 1) {
                return rotateAngle = 2;
            }
        }
    };
    /**
   * @private
   */
    PdfViewerBase.prototype.calculateVertexPoints = function (Rotate, pageNumber, vertexPoints, originalRotation) {
        // eslint-disable-next-line
        var rotateAngle = Math.abs(Rotate);
        var vPoints = [];
        var pageDetails = this.pageSize[pageNumber];
        var x;
        var y;
        var point;
        //originalRotation = !isNullOrUndefined(originalRotation) ? originalRotation : pageDetails.rotation;
        if (originalRotation !== pageDetails.rotation) {
            rotateAngle = this.getRotationAngle(originalRotation, pageNumber);
        }
        else {
            rotateAngle = 0;
        }
        for (var j = 0; j < vertexPoints.length; j++) {
            if (rotateAngle === 1) {
                x = vertexPoints[j].Y ? pageDetails.width - vertexPoints[j].Y : pageDetails.width - vertexPoints[j].y;
                y = vertexPoints[j].X ? vertexPoints[j].X : vertexPoints[j].x;
                point = { x: x, y: y };
                vPoints.push(point);
            }
            else if (rotateAngle === 2) {
                x = vertexPoints[j].X ? pageDetails.width - vertexPoints[j].X : pageDetails.width - vertexPoints[j].x;
                y = vertexPoints[j].Y ? pageDetails.height - vertexPoints[j].Y : pageDetails.height - vertexPoints[j].y;
                var point_1 = { x: x, y: y };
                vPoints.push(point_1);
            }
            else if (rotateAngle == 3) {
                x = vertexPoints[j].Y ? vertexPoints[j].Y : vertexPoints[j].y;
                y = vertexPoints[j].X ? pageDetails.height - vertexPoints[j].X : pageDetails.height - vertexPoints[j].x;
                point = { x: x, y: y };
                vPoints.push(point);
            }
            else {
                x = vertexPoints[j].X ? vertexPoints[j].X : vertexPoints[j].x;
                y = vertexPoints[j].Y ? vertexPoints[j].Y : vertexPoints[j].y;
                var point_2 = { x: x, y: y };
                vPoints.push(point_2);
            }
        }
        return vPoints;
    };
    return PdfViewerBase;
}());
export { PdfViewerBase };
