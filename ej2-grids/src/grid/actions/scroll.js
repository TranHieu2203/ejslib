import { Browser, EventHandler } from '@syncfusion/ej2-base';
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { formatUnit, isNullOrUndefined } from '@syncfusion/ej2-base';
import { getScrollBarWidth, getUpdateUsingRaf } from '../base/util';
import { scroll, contentReady, uiUpdate, onEmpty, headerRefreshed, textWrapRefresh, virtualScrollEdit, infiniteScrollHandler, closeFilterDialog } from '../base/constant';
import { lazyLoadScrollHandler, checkScrollReset } from '../base/constant';
import { ColumnWidthService } from '../services/width-controller';
import * as literals from '../base/string-literals';
import * as events from '../base/constant';
/**
 * The `Scroll` module is used to handle scrolling behaviour.
 */
var Scroll = /** @class */ (function () {
    /**
     * Constructor for the Grid scrolling.
     *
     * @param {IGrid} parent - specifies the IGrid
     * @hidden
     */
    function Scroll(parent) {
        //To maintain scroll state on grid actions.
        this.previousValues = { top: 0, left: 0 };
        this.oneTimeReady = true;
        this.parent = parent;
        this.widthService = new ColumnWidthService(parent);
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} returns the module name
     * @private
     */
    Scroll.prototype.getModuleName = function () {
        return 'scroll';
    };
    /**
     * @param {boolean} uiupdate - specifies the uiupdate
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.setWidth = function (uiupdate) {
        this.parent.element.style.width = formatUnit(this.parent.width);
        if (uiupdate) {
            this.widthService.setWidthToColumns();
        }
        if (this.parent.toolbarModule && this.parent.toolbarModule.toolbar &&
            this.parent.toolbarModule.toolbar.element) {
            this.parent.toolbarModule.toolbar.refreshOverflow();
        }
    };
    /**
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.setHeight = function () {
        var mHdrHeight = 0;
        var content = this.parent.getContent().querySelector('.' + literals.content);
        var height = this.parent.height;
        if (this.parent.isFrozenGrid() && this.parent.height !== 'auto' && this.parent.height.toString().indexOf('%') < 0) {
            height = parseInt(height, 10) - Scroll.getScrollBarWidth();
        }
        if (!this.parent.enableVirtualization && this.parent.frozenRows && this.parent.height !== 'auto') {
            var tbody = this.parent.getHeaderContent().querySelector(literals.tbody);
            mHdrHeight = tbody ? tbody.offsetHeight : 0;
            if (tbody && mHdrHeight) {
                var add = tbody.getElementsByClassName(literals.addedRow).length;
                var height_1 = add * this.parent.getRowHeight();
                mHdrHeight -= height_1;
            }
            content.style.height = formatUnit(height - mHdrHeight);
        }
        else {
            content.style.height = formatUnit(height);
        }
        this.ensureOverflow(content);
        if (this.parent.isFrozenGrid()) {
            this.refresh();
        }
    };
    /**
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.setPadding = function () {
        var content = this.parent.getHeaderContent();
        var scrollWidth = Scroll.getScrollBarWidth() - this.getThreshold();
        var cssProps = this.getCssProperties();
        var padding = this.parent.getFrozenMode() === 'Right' || this.parent.getFrozenMode() === literals.leftRight ? '0.5px' : '1px';
        content.querySelector('.' + literals.headerContent).style[cssProps.border] = scrollWidth > 0 ? padding : '0px';
        content.style[cssProps.padding] = scrollWidth > 0 ? scrollWidth + 'px' : '0px';
    };
    /**
     * @param {boolean} rtl - specifies the rtl
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.removePadding = function (rtl) {
        var cssProps = this.getCssProperties(rtl);
        var hDiv = this.parent.getHeaderContent().querySelector('.' + literals.headerContent);
        hDiv.style[cssProps.border] = '';
        hDiv.parentElement.style[cssProps.padding] = '';
        var footerDiv = this.parent.getFooterContent();
        if (footerDiv && footerDiv.classList.contains('e-footerpadding')) {
            footerDiv.classList.remove('e-footerpadding');
        }
    };
    /**
     * Refresh makes the Grid adoptable with the height of parent container.
     *
     * > The [`height`](grid/#height/) must be set to 100%.
     *
     * @returns {void}
     */
    Scroll.prototype.refresh = function () {
        if (this.parent.height !== '100%') {
            return;
        }
        var content = this.parent.getContent();
        this.parent.element.style.height = '100%';
        var height = this.widthService.getSiblingsHeight(content);
        content.style.height = 'calc(100% - ' + height + 'px)'; //Set the height to the  '.' + literals.gridContent;
        if (this.parent.isFrozenGrid()) {
            content.firstElementChild.style.height = 'calc(100% - ' + getScrollBarWidth() + 'px)';
        }
    };
    Scroll.prototype.getThreshold = function () {
        /* Some browsers places the scroller outside the content,
         * hence the padding should be adjusted.*/
        var appName = Browser.info.name;
        if (appName === 'mozilla') {
            return 0.5;
        }
        return 1;
    };
    /**
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.addEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.on(onEmpty, this.wireEvents, this);
        this.parent.on(contentReady, this.wireEvents, this);
        this.parent.on(uiUpdate, this.onPropertyChanged, this);
        this.parent.on(textWrapRefresh, this.wireEvents, this);
        this.parent.on(headerRefreshed, this.setScrollLeft, this);
    };
    /**
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(onEmpty, this.wireEvents);
        this.parent.off(contentReady, this.wireEvents);
        this.parent.off(uiUpdate, this.onPropertyChanged);
        this.parent.off(textWrapRefresh, this.wireEvents);
        this.parent.off(headerRefreshed, this.setScrollLeft);
    };
    Scroll.prototype.setScrollLeft = function () {
        if (this.parent.isFrozenGrid()) {
            this.parent.headerModule.getMovableHeader().scrollLeft = this.previousValues.left;
        }
        else {
            this.parent.getHeaderContent().querySelector('.' + literals.headerContent).scrollLeft = this.previousValues.left;
        }
    };
    Scroll.prototype.onFrozenContentScroll = function () {
        var _this = this;
        return function (e) {
            if (_this.content.querySelector(literals.tbody) === null || _this.parent.isPreventScrollEvent) {
                return;
            }
            if (!isNullOrUndefined(_this.parent.infiniteScrollModule) && _this.parent.enableInfiniteScrolling) {
                _this.parent.notify(infiniteScrollHandler, e);
            }
            _this.previousValues.top = e.target.scrollTop;
        };
    };
    Scroll.prototype.onContentScroll = function (scrollTarget) {
        var _this = this;
        var element = scrollTarget;
        var isHeader = element.classList.contains(literals.headerContent);
        return function (e) {
            if (_this.content.querySelector(literals.tbody) === null || _this.parent.isPreventScrollEvent) {
                return;
            }
            var target = e.target;
            var left = target.scrollLeft;
            if (!isNullOrUndefined(_this.parent.infiniteScrollModule) && _this.parent.enableInfiniteScrolling) {
                _this.parent.notify(infiniteScrollHandler, { target: e.target, isLeft: _this.previousValues.left !== left });
            }
            if (_this.parent.groupSettings.columns.length && _this.parent.groupSettings.enableLazyLoading) {
                var isDown = _this.previousValues.top < _this.parent.getContent().firstElementChild.scrollTop;
                _this.parent.notify(lazyLoadScrollHandler, { scrollDown: isDown });
            }
            _this.parent.notify(virtualScrollEdit, {});
            var isFooter = target.classList.contains('e-summarycontent');
            if (_this.previousValues.left === left) {
                _this.previousValues.top = !isHeader ? _this.previousValues.top : target.scrollTop;
                return;
            }
            _this.parent.notify(closeFilterDialog, e);
            element.scrollLeft = left;
            if (isFooter) {
                _this.header.scrollLeft = left;
            }
            _this.previousValues.left = left;
            _this.parent.notify(scroll, { left: left });
        };
    };
    Scroll.prototype.onCustomScrollbarScroll = function (mCont, mHdr) {
        var _this = this;
        var content = mCont;
        var header = mHdr;
        return function (e) {
            if (_this.content.querySelector(literals.tbody) === null) {
                return;
            }
            var target = e.target;
            var left = target.scrollLeft;
            if (_this.previousValues.left === left) {
                return;
            }
            content.scrollLeft = left;
            header.scrollLeft = left;
            _this.previousValues.left = left;
            _this.parent.notify(scroll, { left: left });
            if (_this.parent.isDestroyed) {
                return;
            }
        };
    };
    Scroll.prototype.onTouchScroll = function (scrollTarget) {
        var _this = this;
        var element = scrollTarget;
        return function (e) {
            if (e.pointerType === 'mouse') {
                return;
            }
            var isFrozen = _this.parent.isFrozenGrid();
            var pageXY = _this.getPointXY(e);
            var left = element.scrollLeft + (_this.pageXY.x - pageXY.x);
            var mHdr = isFrozen ?
                _this.parent.getHeaderContent().querySelector('.' + literals.movableHeader) :
                _this.parent.getHeaderContent().querySelector('.' + literals.headerContent);
            var mCont = isFrozen ?
                _this.parent.getContent().querySelector('.' + literals.movableContent) :
                _this.parent.getContent().querySelector('.' + literals.content);
            if (_this.previousValues.left === left || (left < 0 || (mHdr.scrollWidth - mHdr.clientWidth) < left)) {
                return;
            }
            e.preventDefault();
            mHdr.scrollLeft = left;
            mCont.scrollLeft = left;
            if (isFrozen) {
                var scrollBar = _this.parent.getContent().querySelector('.e-movablescrollbar');
                scrollBar.scrollLeft = left;
            }
            _this.pageXY.x = pageXY.x;
            _this.previousValues.left = left;
        };
    };
    Scroll.prototype.setPageXY = function () {
        var _this = this;
        return function (e) {
            if (e.pointerType === 'mouse') {
                return;
            }
            _this.pageXY = _this.getPointXY(e);
        };
    };
    Scroll.prototype.getPointXY = function (e) {
        var pageXY = { x: 0, y: 0 };
        if (e.touches && e.touches.length) {
            pageXY.x = e.touches[0].pageX;
            pageXY.y = e.touches[0].pageY;
        }
        else {
            pageXY.x = e.pageX;
            pageXY.y = e.pageY;
        }
        return pageXY;
    };
    Scroll.prototype.getScrollbleParent = function (node) {
        if (node === null) {
            return null;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var parent = isNullOrUndefined(node.tagName) ? node.scrollingElement : node;
        var overflowY = document.defaultView.getComputedStyle(parent, null).overflowY;
        if (parent.scrollHeight > parent.clientHeight && overflowY !== 'hidden'
            && overflowY !== 'visible' || node.tagName === 'HTML' || node.tagName === 'BODY') {
            return node;
        }
        else {
            return this.getScrollbleParent(node.parentNode);
        }
    };
    /**
     * @param {boolean} isAdd - specifies whether adding/removing the event
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.addStickyListener = function (isAdd) {
        this.parentElement = this.getScrollbleParent(this.parent.element.parentElement);
        if (isAdd) {
            if (this.parentElement) {
                EventHandler.add(this.parentElement.tagName === 'HTML' || this.parentElement.tagName === 'BODY' ? document :
                    this.parentElement, 'scroll', this.makeStickyHeader, this);
            }
        }
        else {
            EventHandler.remove(this.parentElement, 'scroll', this.makeStickyHeader);
        }
    };
    Scroll.prototype.wireEvents = function () {
        var _this = this;
        if (this.oneTimeReady) {
            var frzCols = this.parent.isFrozenGrid();
            this.content = this.parent.getContent().querySelector('.' + literals.content);
            this.header = this.parent.getHeaderContent().querySelector('.' + literals.headerContent);
            var mCont = this.content.querySelector('.' + literals.movableContent);
            var mHdr = this.header.querySelector('.' + literals.movableHeader);
            var mScrollBar = this.parent.getContent().querySelector('.e-movablescrollbar');
            if (this.parent.frozenRows) {
                EventHandler.add(frzCols ? mHdr : this.header, 'touchstart pointerdown', this.setPageXY(), this);
                EventHandler.add(frzCols ? mHdr : this.header, 'touchmove pointermove', this.onTouchScroll(frzCols ? mCont : this.content), this);
            }
            if (this.parent.isFrozenGrid()) {
                EventHandler.add(mScrollBar, 'scroll', this.onCustomScrollbarScroll(mCont, mHdr), this);
                EventHandler.add(mCont, 'scroll', this.onCustomScrollbarScroll(mScrollBar, mHdr), this);
                EventHandler.add(mHdr, 'scroll', this.onCustomScrollbarScroll(mScrollBar, mCont), this);
                EventHandler.add(this.content, 'scroll', this.onFrozenContentScroll(), this);
                EventHandler.add(mHdr, 'touchstart pointerdown', this.setPageXY(), this);
                EventHandler.add(mHdr, 'touchmove pointermove', this.onTouchScroll(mCont), this);
                EventHandler.add(mCont, 'touchstart pointerdown', this.setPageXY(), this);
                if (!(/macintosh|ipad/.test(Browser.userAgent.toLowerCase()) && Browser.isDevice)) {
                    EventHandler.add(mCont, 'touchmove pointermove', this.onTouchScroll(mHdr), this);
                }
            }
            else {
                EventHandler.add(this.content, 'scroll', this.onContentScroll(this.header), this);
                EventHandler.add(this.header, 'scroll', this.onContentScroll(this.content), this);
            }
            if (this.parent.aggregates.length) {
                EventHandler.add(this.parent.getFooterContent().firstChild, 'scroll', this.onContentScroll(this.content), this);
            }
            if (this.parent.enableStickyHeader) {
                this.addStickyListener(true);
            }
            this.refresh();
            this.oneTimeReady = false;
        }
        var table = this.parent.getContentTable();
        var sLeft;
        var sHeight;
        var clientHeight;
        getUpdateUsingRaf(function () {
            sLeft = _this.header.scrollLeft;
            sHeight = table.scrollHeight;
            clientHeight = _this.parent.getContent().clientHeight;
        }, function () {
            var args = { cancel: false };
            _this.parent.notify(checkScrollReset, args);
            if (!_this.parent.enableVirtualization && !_this.parent.enableInfiniteScrolling) {
                if (sHeight < clientHeight) {
                    addClass(table.querySelectorAll('tr:last-child td'), 'e-lastrowcell');
                    if (_this.parent.isFrozenGrid()) {
                        addClass(_this.parent.getContent().querySelector('.' + literals.movableContent).querySelectorAll('tr:last-child td'), 'e-lastrowcell');
                        if (_this.parent.getFrozenRightColumnsCount()) {
                            addClass(_this.parent.getContent().querySelector('.e-frozen-right-content').querySelectorAll('tr:last-child td'), 'e-lastrowcell');
                        }
                    }
                }
                if (!args.cancel) {
                    if ((_this.parent.frozenRows > 0 || _this.parent.isFrozenGrid()) && _this.header.querySelector('.' + literals.movableHeader)) {
                        _this.header.querySelector('.' + literals.movableHeader).scrollLeft = _this.previousValues.left;
                    }
                    else {
                        _this.header.scrollLeft = _this.previousValues.left;
                    }
                    _this.content.scrollLeft = _this.previousValues.left;
                    _this.content.scrollTop = _this.previousValues.top;
                }
            }
            if (!_this.parent.enableColumnVirtualization) {
                _this.content.scrollLeft = sLeft;
            }
            if (_this.parent.isFrozenGrid() && _this.header.querySelector('.' + literals.movableHeader)) {
                _this.header.querySelector('.' + literals.movableHeader).scrollLeft =
                    _this.content.querySelector('.' + literals.movableContent).scrollLeft;
            }
        });
        this.parent.isPreventScrollEvent = false;
    };
    /**
     * @param {boolean} rtl - specifies the rtl
     * @returns {ScrollCss} returns the ScrollCss
     * @hidden
     */
    Scroll.prototype.getCssProperties = function (rtl) {
        var css = {};
        var enableRtl = isNullOrUndefined(rtl) ? this.parent.enableRtl : rtl;
        css.border = enableRtl ? 'borderLeftWidth' : 'borderRightWidth';
        css.padding = enableRtl ? 'paddingLeft' : 'paddingRight';
        return css;
    };
    Scroll.prototype.ensureOverflow = function (content) {
        content.style.overflowY = this.parent.height === 'auto' ? 'auto' : 'scroll';
    };
    Scroll.prototype.onPropertyChanged = function (e) {
        if (e.module !== this.getModuleName()) {
            return;
        }
        this.setPadding();
        this.oneTimeReady = true;
        if (this.parent.height === 'auto') {
            this.removePadding();
        }
        this.wireEvents();
        this.setHeight();
        var width = 'width';
        this.setWidth(!isNullOrUndefined(e.properties[width]));
    };
    Scroll.prototype.makeStickyHeader = function () {
        if (this.parent.enableStickyHeader && this.parent.element && this.parent.getContent()) {
            var contentRect = this.parent.getContent().getClientRects()[0];
            if (contentRect) {
                var headerEle = this.parent.getHeaderContent();
                var toolbarEle = this.parent.element.querySelector('.e-toolbar');
                var groupHeaderEle = this.parent.element.querySelector('.e-groupdroparea');
                var height = headerEle.offsetHeight + (toolbarEle ? toolbarEle.offsetHeight : 0) +
                    (groupHeaderEle ? groupHeaderEle.offsetHeight : 0);
                var parentTop = this.parentElement.getClientRects()[0].top;
                var top_1 = contentRect.top - (parentTop < 0 ? 0 : parentTop);
                var left = contentRect.left;
                if (top_1 < height && contentRect.bottom > 0) {
                    headerEle.classList.add('e-sticky');
                    var elemTop = 0;
                    if (groupHeaderEle && this.parent.groupSettings.showDropArea) {
                        this.setSticky(groupHeaderEle, elemTop, contentRect.width, left, true);
                        elemTop += groupHeaderEle.getClientRects()[0].height;
                    }
                    if (toolbarEle) {
                        this.setSticky(toolbarEle, elemTop, contentRect.width, left, true);
                        elemTop += toolbarEle.getClientRects()[0].height;
                    }
                    this.setSticky(headerEle, elemTop, contentRect.width, left, true);
                }
                else {
                    if (headerEle.classList.contains('e-sticky')) {
                        this.setSticky(headerEle, null, null, null, false);
                        if (toolbarEle) {
                            this.setSticky(toolbarEle, null, null, null, false);
                        }
                        if (groupHeaderEle) {
                            this.setSticky(groupHeaderEle, null, null, null, false);
                        }
                        var ccDlg = this.parent.element.querySelector('.e-ccdlg');
                        if (ccDlg) {
                            ccDlg.classList.remove('e-sticky');
                        }
                    }
                }
                this.parent.notify(events.stickyScrollComplete, {});
            }
        }
    };
    Scroll.prototype.setSticky = function (ele, top, width, left, isAdd) {
        if (isAdd) {
            ele.style.width = width + 'px';
            ele.classList.add('e-sticky');
        }
        else {
            ele.classList.remove('e-sticky');
        }
        ele.style.top = top != null ? top + 'px' : '';
        ele.style.left = left !== null ? parseInt(ele.style.left, 10) !== left ? left + 'px' : ele.style.left : '';
    };
    /**
     * @returns {void}
     * @hidden
     */
    Scroll.prototype.destroy = function () {
        var gridElement = this.parent.element;
        if (!gridElement || (!gridElement.querySelector('.' + literals.gridHeader) && !gridElement.querySelector('.' + literals.gridContent))) {
            return;
        }
        this.removeEventListener();
        //Remove Dom event
        var cont = this.parent.getContent().querySelector('.' + literals.content);
        EventHandler.remove(cont, 'scroll', this.onContentScroll);
        if (this.parent.enableStickyHeader) {
            this.addStickyListener(false);
        }
        //Remove padding
        this.removePadding();
        removeClass([this.parent.getHeaderContent().querySelector('.' + literals.headerContent)], literals.headerContent);
        removeClass([cont], literals.content);
        //Remove height
        cont.style.height = '';
        //Remove width
        this.parent.element.style.width = '';
    };
    /**
     * Function to get the scrollbar width of the browser.
     *
     * @returns {number} return the width
     * @hidden
     */
    Scroll.getScrollBarWidth = function () {
        return getScrollBarWidth();
    };
    return Scroll;
}());
export { Scroll };
