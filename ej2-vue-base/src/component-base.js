/**
 * Vue Component Base
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { isNullOrUndefined, extend, getValue } from '@syncfusion/ej2-base';
import * as Vue3 from 'vue-class-component';
import * as Vue2 from 'vue';
import Vue from 'vue';
export var aVue = _interopRequireWildcard(Vue2);
export function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
export var allVue = aVue;
export var gh = allVue.h;
export var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue3.Vue;
}
else {
    vueImport = Vue;
}
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super.call(this, arguments) || this;
        _this.hasInjectedModules = false;
        _this.hasChildDirective = false;
        _this.childDirObjects = '';
        _this.isDecorator = false;
        return _this;
    }
    ComponentBase.prototype.created = function () {
        var _this = this;
        if (!this.propKeys) {
            return;
        }
        var _loop_1 = function (prop) {
            this_1.ej2Instances.addEventListener(prop, function (args) {
                _this.$emit(prop, args);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.propKeys; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
        }
        var injectables = getValue('$root.$options.provide', this);
        var vueInjectables = getValue('$parent.$options.provide', this);
        if (this.hasInjectedModules && !isExecute) {
            var prevModule = [];
            if (injectables && injectables.managed) {
                this.isDecorator = true;
                prevModule = this.getInjectedServices() || [];
            }
            else if (injectables) {
                prevModule = injectables[this.ej2Instances.getModuleName()] || [];
            }
            else if (vueInjectables) {
                prevModule = this.getInjectedServices() || [];
            }
            var curModule = this.ej2Instances.getInjectedModules() || [];
            for (var _b = 0, curModule_1 = curModule; _b < curModule_1.length; _b++) {
                var mod = curModule_1[_b];
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
    };
    ComponentBase.prototype.mounted = function () {
        var cusEle = this.$el ? this.$el.querySelectorAll("div.e-directive") : null;
        if (gh && cusEle) {
            for (var i = 0; i < cusEle.length; i++) {
                cusEle[i].parentElement && cusEle[i].parentElement.removeChild(cusEle[i]);
            }
        }
        this.ej2Instances.isVue = true;
        this.ej2Instances.isVue3 = this.isVue3;
        this.ej2Instances.vueInstance = this;
        if (this.isVue3) {
            this.ej2Instances.ej2Instances = this.ej2Instances;
            this.ej2Instances.referModels = this.models;
        }
        this.ej2Instances.appendTo(this.$el);
    };
    ComponentBase.prototype.getInjectedServices = function () {
        var ret = [];
        var provide;
        if (this.$root && this.isDecorator) {
            provide = getValue('$root.$options.provide', this);
        }
        else if (this.$vnode) {
            provide = getValue('$vnode.context.$options.provide', this);
        }
        else if (this.$parent) {
            provide = getValue('$parent.$options.provide', this);
        }
        if (provide) {
            // tslint:disable:no-any
            var injectables = provide;
            if (typeof provide === 'function') {
                if (provide.managed) {
                    var provideKey = provide.managed;
                    var provideValue = Object.keys(provideKey);
                    var key = void 0;
                    if (this.$root && this.isDecorator) {
                        key = Object.keys(this.$root);
                    }
                    else if (this.$vnode) {
                        key = Object.keys(this.$vnode.context);
                    }
                    else if (this.$parent) {
                        key = Object.keys(this.$parent);
                    }
                    for (var i = 0; i < provideValue.length; i++) {
                        for (var j = 0; j < key.length; j++) {
                            if ((key[j].indexOf(provideValue[i])) !== -1) {
                                if (this.$root && this.isDecorator) {
                                    provideKey[provideValue[j]] = this.$root[key[i]];
                                }
                                else if (this.$vnode) {
                                    provideKey[provideValue[i]] = this.$vnode.context[key[j]];
                                }
                                else if (this.$parent) {
                                    provideKey[provideValue[i]] = this.$parent[key[j]];
                                }
                                injectables = provideKey;
                            }
                        }
                    }
                }
                // tslint:disable:no-any
                else if (this.$vnode) {
                    injectables = this.$vnode.context.$options.provide();
                }
                else if (this.$parent) {
                    injectables = this.$parent.$options.provide();
                }
            }
            ret = injectables[this.ej2Instances.getModuleName()] || [];
        }
        this.isDecorator = false;
        return ret;
    };
    ComponentBase.prototype.updated = function () {
        if (this.hasChildDirective) {
            var childKey = {};
            this.fetchChildPropValues(childKey);
            var curChildDir = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
    };
    ComponentBase.prototype.beforeDestroy = function () {
        var tempBeforeDestroyThis = this;
        tempBeforeDestroyThis.ej2Instances.destroy();
        tempBeforeDestroyThis.$el.style.visibility = 'hidden';
        tempBeforeDestroyThis = null;
    };
    ComponentBase.prototype.bindProperties = function () {
        var options = {};
        for (var _i = 0, _a = this.propKeys; _i < _a.length; _i++) {
            var prop = _a[_i];
            if ((!isNullOrUndefined(this[prop]) && !this.isVue3) || (this[0] && !isNullOrUndefined(this[0][0]) && !isNullOrUndefined(this[0][0][prop]))) {
                options[prop] = !this.isVue3 ? this[prop] : this[0][0][prop];
            }
        }
        if (this.hasChildDirective) {
            this.fetchChildPropValues(options);
        }
        if (this.hasInjectedModules) {
            var prevModule = this.getInjectedServices() || [];
            var curModule = this.ej2Instances.getInjectedModules() || [];
            for (var _b = 0, curModule_2 = curModule; _b < curModule_2.length; _b++) {
                var mod = curModule_2[_b];
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
        this.assignValueToWrapper(options);
    };
    ComponentBase.prototype.assignValueToWrapper = function (option, silent) {
        this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent) ? true : silent);
    };
    ComponentBase.prototype.fetchChildPropValues = function (childOption) {
        var dirProps = {};
        if (!this.isVue3) {
            dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
        }
        else {
            var propRef = void 0;
            if (this[0] && this[0][1].slots.default) {
                propRef = this[0][1].slots.default();
            }
            else if (this && this.$ && this.$.slots && this.$.slots.default) {
                propRef = this.$.slots.default();
            }
            if (propRef) {
                for (var i = 0; i < propRef.length; i++) {
                    if (propRef[i].type.methods) {
                        var key = propRef[i].type.methods.getTag().replace("e-", "");
                        var ref = this.resolveArrayDirectives(propRef[i].children, key);
                        var splitKeys = key.split('-');
                        var controlName = this.ej2Instances.getModuleName().toLowerCase();
                        var keyRef = (splitKeys.length > 1 && controlName.indexOf(splitKeys[0]) > -1) ? splitKeys[1] : splitKeys[0];
                        keyRef = keyRef.replace(controlName, '');
                        if (controlName == "splitter" && keyRef == "panes") {
                            keyRef = "paneSettings";
                        }
                        else if (controlName == "bulletchart" && keyRef == "range") {
                            keyRef = "ranges";
                        }
                        else if (controlName == "schedule" && keyRef == "header") {
                            keyRef = "headerRows";
                        }
                        dirProps[keyRef] = ref[key];
                    }
                }
            }
            else {
                return;
            }
        }
        if (!this.childDirObjects) {
            this.childDirObjects = JSON.stringify(dirProps);
        }
        for (var _i = 0, _a = Object.keys(dirProps); _i < _a.length; _i++) {
            var dirProp = _a[_i];
            childOption[dirProp] = dirProps[dirProp];
        }
    };
    ComponentBase.prototype.resolveArrayDirectives = function (slots, tagName) {
        var slot = [];
        var innerDirValues;
        slot = slots.default ? slots.default() : slots;
        var items = {};
        items[tagName] = [];
        var _loop_2 = function (childSlot) {
            var tempObj = {};
            var tagRef = childSlot.type.methods ? childSlot.type.methods.getTag() : tagName;
            if (childSlot.children) {
                var key = void 0;
                innerDirValues = this_2.resolveComplexDirs(childSlot.children, this_2.tagMapper["e-" + tagName], tagRef);
                if (innerDirValues.length) {
                    tempObj = innerDirValues;
                }
                else {
                    for (var i = 0; i < Object.keys(innerDirValues).length; i++) {
                        key = Object.keys(innerDirValues)[i];
                        tempObj[key] = innerDirValues[key];
                    }
                    ;
                }
            }
            if (childSlot.props) {
                Object.keys(childSlot.props).forEach(function (key) {
                    tempObj[key] = childSlot.props[key];
                });
            }
            if ((/[s]\b/).test(tagRef) && innerDirValues) {
                if (!(/[s]\b/).test(tagName) || innerDirValues.length) {
                    items[tagName] = tempObj;
                }
                else {
                    items[tagName].push(tempObj);
                }
            }
            else {
                items[tagName].push(tempObj);
            }
        };
        var this_2 = this;
        for (var _i = 0, slot_1 = slot; _i < slot_1.length; _i++) {
            var childSlot = slot_1[_i];
            _loop_2(childSlot);
        }
        return items;
    };
    ComponentBase.prototype.resolveComplexDirs = function (slots, tagObject, tagName) {
        var slot = [];
        var innerDirValues;
        slot = slots.default ? slots.default() : slots;
        var items = {};
        var _loop_3 = function (childSlot) {
            var tagRef = void 0;
            var tag = void 0;
            if (tagObject[tagName]) {
                tagRef = Object.keys(tagObject[tagName]);
                tag = tagRef.find(function (key) {
                    return tagObject[tagName][key] ===
                        childSlot.type.methods.getTag().replace(/[s]\b/, "");
                });
                tag = tag
                    ? tag.replace("e-", "")
                    : childSlot.type.methods.getTag().replace("e-", "");
                if (this_3.ej2Instances.getModuleName().toLowerCase() == "diagram" && tag.indexOf('annotations') != -1) {
                    tag = 'annotations';
                }
            }
            if (childSlot.children) {
                innerDirValues = this_3.resolveComplexInnerDirs(childSlot.children, tagObject[tagName], childSlot.type.methods.getTag());
                if (!items[tag]) {
                    items[tag] = [];
                }
                if (innerDirValues.length > 1) {
                    items[tag] = innerDirValues;
                }
                else {
                    items[tag].push(innerDirValues);
                }
            }
            if (slot.length > 1) {
                items = Object.keys(items).length == 0 && !items.length ? [] : items;
                if (childSlot.props) {
                    items.push(childSlot.props);
                }
            }
            else {
                items = childSlot.props ? Object.assign(items, childSlot.props) : items;
            }
        };
        var this_3 = this;
        for (var _i = 0, slot_2 = slot; _i < slot_2.length; _i++) {
            var childSlot = slot_2[_i];
            _loop_3(childSlot);
        }
        return items;
    };
    ComponentBase.prototype.resolveComplexInnerDirs = function (slots, tagObject, tagName) {
        var slot = [];
        var innerDirValues;
        slot = slots.default ? slots.default() : slots;
        var items = slot.length > 1 ? [] : {};
        for (var _i = 0, slot_3 = slot; _i < slot_3.length; _i++) {
            var childSlot = slot_3[_i];
            var tag = childSlot.type.methods.getTag().replace("e-", "");
            if (childSlot.children) {
                innerDirValues = this.resolveMultilevelComplexInnerDirs(childSlot.children, tagObject[tagName], childSlot.type.methods.getTag());
                if ((/[s]\b/).test(tag) || slot.length > 1) {
                    if ((/[s]\b/).test(tag)) {
                        items[tag] = !items[tag] ? [] : items[tag];
                        if (innerDirValues.length) {
                            items[tag] = innerDirValues;
                        }
                        else {
                            items[tag].push(innerDirValues);
                        }
                    }
                    else if (innerDirValues) {
                        items.push(innerDirValues);
                    }
                }
                else {
                    items = innerDirValues ? innerDirValues : items;
                }
            }
            if (slot.length > 1 && childSlot.props) {
                if (items.length >= 0) {
                    items.push(childSlot.props);
                }
                else {
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            }
            else {
                items = childSlot.props ? Object.assign(items, childSlot.props) : items;
            }
        }
        return items;
    };
    ComponentBase.prototype.resolveMultilevelComplexInnerDirs = function (slots, tagObject, tagName) {
        var slot = [];
        var innerDirValues;
        slot = slots.default ? slots.default() : slots;
        var items = slot.length > 1 ? [] : {};
        for (var _i = 0, slot_4 = slot; _i < slot_4.length; _i++) {
            var childSlot = slot_4[_i];
            var tag = childSlot.type.methods.getTag().replace("e-", "");
            if (childSlot.children) {
                innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[tagName], childSlot.type.methods.getTag());
            }
            if ((/[s]\b/).test(tag)) {
                items[tag] = !items[tag] ? [] : items[tag];
                if (innerDirValues.length) {
                    items[tag] = innerDirValues;
                }
                else {
                    items[tag].push(innerDirValues);
                }
                if (childSlot.props) {
                    items[tag].push(childSlot.props);
                }
            }
            else {
                items = innerDirValues;
                items = childSlot.props ? Object.assign(items, childSlot.props) : items;
            }
        }
        return items;
    };
    ComponentBase.prototype.getDirectiveValues = function (tagDirectives, tagMapper, tagNameMapper) {
        var keyTags = Object.keys(tagMapper);
        var dir = {};
        if (tagDirectives) {
            for (var _i = 0, tagDirectives_1 = tagDirectives; _i < tagDirectives_1.length; _i++) {
                var tagDirective = tagDirectives_1[_i];
                if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag) {
                    var dirTag = tagDirective.componentOptions.tag;
                    if (keyTags.indexOf(dirTag) !== -1) {
                        var tagName = tagNameMapper[dirTag] ? tagNameMapper[dirTag] : dirTag;
                        dir[tagName.replace('e-', '')] = [];
                        for (var _a = 0, _b = tagDirective.componentOptions.children; _a < _b.length; _a++) {
                            var tagDirChild = _b[_a];
                            var retObj = this.getVNodeValue(tagDirChild, tagMapper[dirTag], tagNameMapper);
                            if (Object.keys(retObj).length !== 0) {
                                dir[tagName.replace('e-', '')].push(retObj);
                            }
                        }
                    }
                }
            }
        }
        return dir;
    };
    ComponentBase.prototype.getMultiLevelDirValue = function (tagDirectories, tagKey, tagNameMapper) {
        var mulObj = {};
        for (var _i = 0, tagDirectories_1 = tagDirectories; _i < tagDirectories_1.length; _i++) {
            var tagDir = tagDirectories_1[_i];
            if (tagDir.componentOptions) {
                var key = tagDir.componentOptions.tag;
                var tagName = tagNameMapper[key] ? tagNameMapper[key] : key;
                mulObj[tagName.replace('e-', '')] = [];
                if (tagDir.componentOptions && tagDir.componentOptions.children) {
                    for (var _a = 0, _b = tagDir.componentOptions.children; _a < _b.length; _a++) {
                        var tagDirChild = _b[_a];
                        var mulLevObj = this.getVNodeValue(tagDirChild, tagKey[key], tagNameMapper);
                        if (Object.keys(mulLevObj).length !== 0) {
                            mulObj[tagName.replace('e-', '')].push(mulLevObj);
                        }
                    }
                }
            }
        }
        return mulObj;
    };
    ComponentBase.prototype.getVNodeValue = function (tagDirective, tagKey, tagNameMapper) {
        var ret = {};
        if (tagDirective.componentOptions) {
            var dirTag = tagDirective.componentOptions.tag;
            if (typeof tagKey === 'string' && dirTag === tagKey && tagDirective.data) {
                ret = tagDirective.data.attrs ? this.getCamelCaseProps(tagDirective.data.attrs) : this.getCamelCaseProps(tagDirective.data);
            }
            else if (typeof tagKey === 'object') {
                if (tagDirective.componentOptions.children && (Object.keys(tagKey).indexOf(dirTag) !== -1)) {
                    ret = this.getMultiLevelDirValue(tagDirective.componentOptions.children, tagKey[dirTag], tagNameMapper);
                }
                if (tagDirective.data && tagDirective.data.attrs) {
                    ret = extend(ret, this.getCamelCaseProps(tagDirective.data.attrs));
                }
            }
        }
        return ret;
    };
    /**
     * convert kebab case directive props to camel case
     */
    ComponentBase.prototype.getCamelCaseProps = function (props) {
        var retProps = {};
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var prop = _a[_i];
            retProps[prop.replace(/-[a-z]/g, function (e) { return e[1].toUpperCase(); })] = props[prop];
        }
        return retProps;
    };
    ComponentBase.prototype.dataBind = function () {
        this.ej2Instances.dataBind();
    };
    ComponentBase.prototype.setProperties = function (arg, muteOnChange) {
        return this.ej2Instances.setProperties(arg, muteOnChange);
    };
    return ComponentBase;
}(vueImport));
export { ComponentBase };
