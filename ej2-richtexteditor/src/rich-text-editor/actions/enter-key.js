import { isNullOrUndefined as isNOU, detach, Browser } from '@syncfusion/ej2-base';
import * as events from '../base/constant';
/**
 * `EnterKey` module is used to handle enter key press actions.
 */
var EnterKeyAction = /** @class */ (function () {
    function EnterKeyAction(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    EnterKeyAction.prototype.addEventListener = function () {
        this.parent.on(events.enterHandler, this.enterHandler, this);
        this.parent.on(events.destroy, this.destroy, this);
        this.parent.on(events.moduleDestroy, this.moduleDestroy, this);
    };
    EnterKeyAction.prototype.destroy = function () {
        this.removeEventListener();
    };
    EnterKeyAction.prototype.moduleDestroy = function () {
        this.parent = null;
    };
    EnterKeyAction.prototype.removeEventListener = function () {
        this.parent.off(events.enterHandler, this.enterHandler);
        this.parent.off(events.destroy, this.destroy);
        this.parent.off(events.moduleDestroy, this.moduleDestroy);
    };
    EnterKeyAction.prototype.getRangeNode = function () {
        this.range = this.parent.getRange();
        this.startNode = this.range.startContainer.nodeName === '#text' ? this.range.startContainer.parentElement :
            this.range.startContainer;
        this.endNode = this.range.endContainer.nodeName === '#text' ? this.range.endContainer.parentElement :
            this.range.endContainer;
    };
    EnterKeyAction.prototype.enterHandler = function (e) {
        var _this = this;
        this.getRangeNode();
        var isTableEnter = true;
        if (!isNOU(this.startNode.closest('TABLE')) && !isNOU(this.endNode.closest('TABLE'))) {
            isTableEnter = false;
            var curElement = this.startNode;
            var blockElement = curElement;
            while (!this.parent.formatter.editorManager.domNode.isBlockNode(curElement)) {
                blockElement = curElement;
                curElement = curElement.parentElement;
            }
            isTableEnter = blockElement.tagName === 'TD' ? false : true;
        }
        if (e.args.which === 13 && e.args.code === 'Enter') {
            if (isNOU(this.startNode.closest('LI')) && isNOU(this.endNode.closest('LI')) && isTableEnter &&
                isNOU(this.startNode.closest('PRE')) && isNOU(this.endNode.closest('PRE'))) {
                var shiftKey_1 = e.args.shiftKey;
                var actionBeginArgs = {
                    cancel: false,
                    name: events.actionBegin,
                    requestType: shiftKey_1 ? 'ShiftEnterAction' : 'EnterAction',
                    originalEvent: e.args
                };
                this.parent.trigger(events.actionBegin, actionBeginArgs, function (actionBeginArgs) {
                    if (!actionBeginArgs.cancel) {
                        if (!(_this.range.startOffset === _this.range.endOffset && _this.range.startContainer === _this.range.endContainer)) {
                            _this.range.deleteContents();
                            if (_this.range.startContainer.nodeName === '#text' && _this.range.startContainer.textContent.length === 0 &&
                                _this.range.startContainer.parentElement !== _this.parent.inputElement) {
                                if (_this.parent.enterKey === 'BR') {
                                    _this.range.startContainer.parentElement.innerHTML = '&#8203;';
                                }
                                else {
                                    _this.range.startContainer.parentElement.innerHTML = '<br>';
                                }
                            }
                            else if (_this.range.startContainer === _this.parent.inputElement && _this.range.startContainer.innerHTML === '') {
                                _this.range.startContainer.innerHTML = '<br>';
                                var focusElem = _this.range.startContainer.childNodes[_this.range.startOffset];
                                _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), focusElem, 0);
                            }
                            else if (_this.parent.inputElement === _this.range.startContainer) {
                                var focusElem = _this.range.startContainer.childNodes[_this.range.startOffset];
                                if (focusElem.nodeName === '#text' && focusElem.textContent.length === 0) {
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), focusElem, focusElem.previousSibling.textContent.length);
                                }
                                else {
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), focusElem, focusElem.textContent.length >= 0 ? 0 : 1);
                                    if (focusElem.previousSibling.textContent.length === 0) {
                                        detach(focusElem.previousSibling);
                                    }
                                    else if (focusElem.textContent.length === 0) {
                                        var currentFocusElem = focusElem.previousSibling.lastChild;
                                        while (currentFocusElem.nodeName !== '#text') {
                                            currentFocusElem = currentFocusElem.lastChild;
                                        }
                                        _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), currentFocusElem, currentFocusElem.textContent.length);
                                        detach(focusElem);
                                    }
                                    else if (_this.parent.enterKey !== 'BR' &&
                                        focusElem.previousSibling.textContent.length !== 0 && focusElem.textContent.length !== 0) {
                                        e.args.preventDefault();
                                        return;
                                    }
                                }
                                _this.getRangeNode();
                            }
                        }
                        if (_this.range.startContainer === _this.range.endContainer &&
                            _this.range.startOffset === _this.range.endOffset && _this.range.startContainer === _this.parent.inputElement) {
                            _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), _this.range.startContainer.childNodes[_this.range.startOffset], 0);
                            _this.getRangeNode();
                        }
                        if ((_this.parent.enterKey === 'P' && !shiftKey_1) || (_this.parent.enterKey === 'DIV' && !shiftKey_1) ||
                            (_this.parent.shiftEnterKey === 'P' && shiftKey_1) ||
                            (_this.parent.shiftEnterKey === 'DIV' && shiftKey_1)) {
                            var nearBlockNode = void 0;
                            if (isTableEnter && _this.parent.formatter.editorManager.domNode.isBlockNode(_this.startNode)) {
                                nearBlockNode = _this.startNode;
                            }
                            else {
                                nearBlockNode = _this.parent.formatter.editorManager.domNode.blockParentNode(_this.startNode);
                            }
                            var isImageNode = false;
                            var isFocusedFirst = false;
                            if (_this.range.startOffset != 0 && _this.range.endOffset != 0 && _this.range.startContainer === _this.range.endContainer &&
                                !(!isNOU(nearBlockNode.childNodes[0]) && nearBlockNode.childNodes[0].nodeName === 'IMG')) {
                                var startNodeText = _this.range.startContainer.textContent;
                                var splitFirstText = startNodeText.substring(0, _this.range.startOffset);
                                if (splitFirstText.charCodeAt(_this.range.startOffset - 1) != 160 && splitFirstText.trim().length === 0) {
                                    isFocusedFirst = true;
                                }
                            }
                            else if (_this.range.startOffset === 0 && _this.range.endOffset === 0) {
                                isFocusedFirst = true;
                            }
                            _this.removeBRElement(nearBlockNode);
                            if (((_this.range.startOffset === 0 && _this.range.endOffset === 0) || isFocusedFirst) &&
                                !(!isNOU(_this.range.startContainer.previousSibling) &&
                                    (_this.range.startContainer.previousSibling.nodeName === 'IMG' || _this.range.startContainer.previousSibling.nodeName === 'BR'))) {
                                var isNearBlockLengthZero = void 0;
                                var newElem = void 0;
                                if (_this.range.startContainer.nodeName === 'IMG') {
                                    newElem = _this.createInsertElement(shiftKey_1);
                                    isImageNode = true;
                                    isNearBlockLengthZero = false;
                                }
                                else {
                                    if (nearBlockNode.textContent.trim().length !== 0) {
                                        newElem = _this.parent.formatter.editorManager.nodeCutter.SplitNode(_this.range, nearBlockNode, false).cloneNode(true);
                                        isNearBlockLengthZero = false;
                                    }
                                    else {
                                        newElem = _this.parent.formatter.editorManager.nodeCutter.SplitNode(_this.range, nearBlockNode, true).cloneNode(true);
                                        isNearBlockLengthZero = true;
                                    }
                                }
                                var insertElem = _this.createInsertElement(shiftKey_1);
                                while (newElem.firstChild) {
                                    insertElem.appendChild(newElem.firstChild);
                                }
                                nearBlockNode.parentElement.insertBefore(insertElem, nearBlockNode);
                                if (!isNearBlockLengthZero) {
                                    var currentFocusElem = insertElem;
                                    var finalFocusElem = void 0;
                                    while (!isNOU(currentFocusElem) && currentFocusElem.nodeName !== '#text') {
                                        finalFocusElem = currentFocusElem;
                                        currentFocusElem = currentFocusElem.lastChild;
                                    }
                                    finalFocusElem.innerHTML = '<br>';
                                    if (!isImageNode) {
                                        detach(nearBlockNode);
                                    }
                                }
                                _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), insertElem.nextElementSibling, 0);
                            }
                            else if (nearBlockNode.textContent.length === 0 && !(!isNOU(nearBlockNode.childNodes[0]) && nearBlockNode.childNodes[0].nodeName === 'IMG')) {
                                if (!isNOU(nearBlockNode.children[0]) && nearBlockNode.children[0].tagName !== 'BR') {
                                    var newElem = _this.parent.formatter.editorManager.nodeCutter.SplitNode(_this.range, nearBlockNode, false).cloneNode(true);
                                    _this.parent.formatter.editorManager.domNode.insertAfter(newElem, nearBlockNode);
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), newElem, newElem.textContent.length >= 0 ? 0 : 1);
                                }
                                else {
                                    var insertElem = _this.createInsertElement(shiftKey_1);
                                    insertElem.innerHTML = '<br>';
                                    _this.parent.formatter.editorManager.domNode.insertAfter(insertElem, nearBlockNode);
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), insertElem, 0);
                                }
                            }
                            else {
                                var newElem = _this.parent.formatter.editorManager.nodeCutter.SplitNode(_this.range, nearBlockNode, true);
                                if (!isNOU(newElem.childNodes[0]) && newElem.childNodes[0].nodeName === '#text' &&
                                    newElem.childNodes[0].textContent.length === 0) {
                                    detach(newElem.childNodes[0]);
                                }
                                if (newElem.textContent.trim().length === 0) {
                                    var brElm = _this.parent.createElement('br');
                                    if (_this.startNode.nodeName === 'A') {
                                        var startParentElem = _this.startNode.parentElement;
                                        _this.startNode.parentElement.insertBefore(brElm, _this.startNode);
                                        detach(_this.startNode);
                                        _this.startNode = startParentElem;
                                    }
                                    else {
                                        _this.startNode.appendChild(brElm);
                                    }
                                    if (newElem.childNodes[0].textContent === '\n') {
                                        detach(newElem.childNodes[0]);
                                    }
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), _this.startNode, 0);
                                }
                                if (((_this.parent.enterKey === 'P' || _this.parent.enterKey === 'DIV') && !shiftKey_1) || ((_this.parent.shiftEnterKey === 'DIV' ||
                                    _this.parent.shiftEnterKey === 'P') && shiftKey_1)) {
                                    var insertElm = _this.createInsertElement(shiftKey_1);
                                    while (newElem.firstChild) {
                                        insertElm.appendChild(newElem.firstChild);
                                    }
                                    _this.parent.formatter.editorManager.domNode.insertAfter(insertElm, newElem);
                                    detach(newElem);
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), _this.parent.formatter.editorManager.domNode.isBlockNode(_this.startNode) ?
                                        insertElm : _this.startNode, 0);
                                }
                            }
                            e.args.preventDefault();
                        }
                        if ((_this.parent.enterKey === 'BR' && !shiftKey_1) || (_this.parent.shiftEnterKey === 'BR' && shiftKey_1)) {
                            var currentParent = void 0;
                            if (!_this.parent.formatter.editorManager.domNode.isBlockNode(_this.startNode)) {
                                var currentNode = _this.startNode;
                                var previousNode = currentNode;
                                while (!_this.parent.formatter.editorManager.domNode.isBlockNode(currentNode)) {
                                    previousNode = currentNode;
                                    currentNode = currentNode.parentElement;
                                }
                                currentParent = currentNode === _this.parent.inputElement ?
                                    previousNode : currentNode;
                            }
                            else {
                                currentParent = _this.startNode;
                            }
                            _this.removeBRElement(currentParent);
                            var isEmptyBrInserted = false;
                            var currentParentLastChild = currentParent.lastChild;
                            while (!isNOU(currentParentLastChild) && !(currentParentLastChild.nodeName === '#text' || currentParentLastChild.nodeName === 'BR')) {
                                currentParentLastChild = currentParentLastChild.lastChild;
                            }
                            var isLastNodeLength = _this.range.startContainer === currentParentLastChild ?
                                _this.range.startContainer.textContent.length : currentParent.textContent.length;
                            if (currentParent !== _this.parent.inputElement &&
                                _this.parent.formatter.editorManager.domNode.isBlockNode(currentParent) &&
                                _this.range.startOffset === _this.range.endOffset &&
                                _this.range.startOffset === isLastNodeLength) {
                                var focusBRElem = _this.parent.createElement('br');
                                if (currentParentLastChild.nodeName === 'BR' && currentParent.textContent.length === 0) {
                                    _this.parent.formatter.editorManager.domNode.insertAfter(focusBRElem, currentParentLastChild);
                                }
                                else {
                                    var lineBreakBRElem = _this.parent.createElement('br');
                                    _this.parent.formatter.editorManager.domNode.insertAfter(focusBRElem, _this.range.startContainer);
                                    _this.parent.formatter.editorManager.domNode.insertAfter(lineBreakBRElem, _this.range.startContainer);
                                }
                                _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), focusBRElem, 0);
                            }
                            else if (!isNOU(currentParent) && currentParent !== _this.parent.inputElement && currentParent.nodeName !== 'BR') {
                                if (currentParent.textContent.trim().length === 0 || (currentParent.textContent.trim().length === 1 &&
                                    currentParent.textContent.charCodeAt(0) === 8203)) {
                                    var newElem = _this.parent.formatter.editorManager.nodeCutter.SplitNode(_this.range, currentParent, true).cloneNode(true);
                                    _this.parent.formatter.editorManager.domNode.insertAfter(newElem, currentParent);
                                    var outerBRElem = _this.parent.createElement('br');
                                    newElem.parentElement.insertBefore(outerBRElem, newElem);
                                    _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), newElem, 0);
                                }
                                else {
                                    var newElem = void 0;
                                    var outerBRElem = _this.parent.createElement('br');
                                    if (_this.range.startOffset === 0 && _this.range.endOffset === 0 &&
                                        !isNOU(currentParent.previousSibling) && currentParent.previousSibling.nodeName === 'BR') {
                                        newElem = _this.parent.formatter.editorManager.nodeCutter.SplitNode(_this.range, currentParent, false).cloneNode(true);
                                        _this.parent.formatter.editorManager.domNode.insertAfter(outerBRElem, currentParent);
                                        _this.insertFocusContent();
                                        var currentFocusElem = outerBRElem.nextSibling;
                                        while (!isNOU(currentFocusElem) && currentFocusElem.nodeName !== '#text') {
                                            currentFocusElem = currentFocusElem.lastChild;
                                        }
                                        _this.parent.formatter.editorManager.nodeSelection.setCursorPoint(_this.parent.contentModule.getDocument(), currentFocusElem, 0);
                                        isEmptyBrInserted = true;
                                    }
                                    else {
                                        _this.insertBRElement();
                                    }
                                }
                            }
                            else {
                                _this.insertBRElement();
                            }
                            e.args.preventDefault();
                        }
                        _this.parent.trigger(events.actionComplete, { requestType: shiftKey_1 ? 'ShiftEnterAction' : 'EnterAction', args: e.args });
                    }
                });
            }
        }
    };
    EnterKeyAction.prototype.removeBRElement = function (currentElement) {
        if (Browser.userAgent.indexOf('Firefox') != -1 &&
            this.range.endOffset === currentElement.textContent.length && (currentElement.textContent.length !== 0 ||
            currentElement.querySelectorAll('BR').length > 1) &&
            !isNOU(currentElement.lastChild) && currentElement.lastChild.nodeName === 'BR') {
            detach(currentElement.lastChild);
        }
    };
    EnterKeyAction.prototype.insertBRElement = function () {
        var isEmptyBrInserted = false;
        var brElm = this.parent.createElement('br');
        if (this.startNode.nodeName === 'BR' && this.endNode.nodeName === 'BR' && this.range.startOffset === 0 && this.range.startOffset === this.range.endOffset) {
            this.parent.formatter.editorManager.domNode.insertAfter(brElm, this.startNode);
            isEmptyBrInserted = true;
        }
        else {
            if (this.startNode === this.parent.inputElement && !isNOU(this.range.startContainer.previousSibling) &&
                this.range.startContainer.previousSibling.nodeName === 'BR' && this.range.startContainer.textContent.length === 0) {
                isEmptyBrInserted = true;
            }
            this.range.insertNode(brElm);
        }
        if (isEmptyBrInserted || (!isNOU(brElm.nextElementSibling) && brElm.nextElementSibling.tagName === 'BR') || (!isNOU(brElm.nextSibling) && brElm.nextSibling.textContent.length > 0)) {
            this.parent.formatter.editorManager.nodeSelection.setCursorPoint(this.parent.contentModule.getDocument(), !isNOU(brElm.nextSibling) ? brElm.nextSibling : brElm, 0);
            isEmptyBrInserted = false;
        }
        else {
            var brElm2 = this.parent.createElement('br');
            this.range.insertNode(brElm2);
            this.parent.formatter.editorManager.nodeSelection.setCursorPoint(this.parent.contentModule.getDocument(), brElm, 0);
        }
    };
    EnterKeyAction.prototype.insertFocusContent = function () {
        if (this.range.startContainer.textContent.length === 0) {
            if (this.range.startContainer.nodeName === '#text') {
                this.range.startContainer.parentElement.innerHTML = '&#8203;';
            }
            else {
                this.range.startContainer.innerHTML = '&#8203;';
            }
        }
    };
    EnterKeyAction.prototype.createInsertElement = function (shiftKey) {
        var insertElem;
        if ((this.parent.enterKey === 'DIV' && !shiftKey) || (this.parent.shiftEnterKey === 'DIV' && shiftKey)) {
            insertElem = this.parent.createElement('div');
        }
        else if ((this.parent.enterKey === 'P' && !shiftKey) || (this.parent.shiftEnterKey === 'P' && shiftKey)) {
            insertElem = this.parent.createElement('p');
        }
        return insertElem;
    };
    return EnterKeyAction;
}());
export { EnterKeyAction };
