import { createElement, detach, extend, getTemplateEngine, getUniqueID, getValue, isNullOrUndefined, setTemplateEngine } from '@syncfusion/ej2-base';
import { Vue } from 'vue-class-component';
import * as Vue$1 from 'vue';
import Vue$1__default from 'vue';

/**
 * Vue Component Base
 */
var __extends = (undefined && undefined.__extends) || (function () {
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
var aVue = _interopRequireWildcard(Vue$1);
function _interopRequireWildcard(obj) {
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
var allVue = aVue;
var gh = allVue.h;
var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue;
}
else {
    vueImport = Vue$1__default;
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

/**
 * Vue Component Base
 */
// import { Base, Component as EJ2Component, isNullOrUndefined } from '@syncfusion/ej2-base';
var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function getProps(options) {
    if (options === void 0) { options = {}; }
    if (options.props) {
        var _loop_1 = function (prop) {
            (options.newprops || (options.newprops = {}))[prop] = {};
            (options.watch || (options.watch = {}))[prop] = function (newVal) {
                this.ej2Instances[prop] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
        };
        for (var _i = 0, _a = options.props; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
        }
    }
    return [options.newprops, options.watch];
}
function EJComponentDecorator(options, isExecute$$1) {
    if (!isExecute$$1) {
        return;
    }
    return function (Component) {
        return EJcomponentFactory(Component, options);
    };
}
function EJcomponentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    if (options.props) {
        var _loop_2 = function (prop) {
            (options.props || (options.props = {}))[prop] = {};
            (options.watch || (options.watch = {}))[prop] = function (newVal) {
                this.ej2Instances[prop] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
        };
        for (var _i = 0, _a = options.props; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_2(prop);
        }
    }
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        // hooks
        if (key === 'constructor') {
            return;
        }
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    Object.getOwnPropertyNames(ComponentBase.prototype).forEach(function (key) {
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    //  decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(Function(options));
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue$1__default
        ? superProto.constructor
        : Vue$1__default;
    var Extended = Super.extend(options);
    return Extended;
}
function collectDataFromConstructor(vm, Component) {
    Component.prototype._init = function () {
        var _this = this;
        var keys = Object.getOwnPropertyNames(vm);
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; }
                });
            }
        });
    };
    var data = new Component();
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    return plainData;
}

// tslint:disable:no-any
var stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    var that = this;
    return function (data, context, propName, element, root) {
        var returnEle;
        if (context) {
            var plugins = context.vueInstance ? context.vueInstance.plugins : null;
            var pid = getUniqueID("templateParentDiv");
            var id = getUniqueID("templateDiv");
            var ele = createElement("div", {
                id: pid,
                innerHTML: '<div id="' + id + '"></div>',
            });
            document.body.appendChild(ele);
            if (gh && typeof templateElement === "string") {
                var vueSlot_1 = getCurrentVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot_1) {
                    // Compilation for Vue 3 slot template
                    var app = allVue.createApp({
                        render: function () {
                            return vueSlot_1[templateElement]({ data: data });
                        }
                    });
                    if (plugins) {
                        for (var i = 0; i < plugins.length; i++) {
                            app.use(plugins[i]);
                        }
                    }
                    app.mount((context.getModuleName() === 'grid') ? ("#" + pid) : ("#" + id));
                    returnEle = ele.childNodes;
                    detach(ele);
                }
                else {
                    // Compilation for Vue 3 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            }
            else if (gh) {
                // Compilation for Vue 3 functional template
                var tempObj = templateElement.call(that, {});
                var object = tempObj;
                var propsData = getValue("template.propsData", tempObj);
                var dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance,
                };
                if (!object.template) {
                    object.template = object[Object.keys(object)[0]];
                }
                var templateCompRef = void 0;
                if (object.template.extends) {
                    templateCompRef = object.template.extends._context.components.template;
                }
                else {
                    templateCompRef = object.template._context.components[templateElement.name];
                    if (!templateCompRef) {
                        var key = Object.keys(object.template._context.components)[0];
                        templateCompRef = object.template._context.components[key];
                    }
                }
                var tempRef_1;
                if (propsData) {
                    tempRef_1 = Object.assign(templateCompRef.data(), propsData);
                }
                else {
                    tempRef_1 = Object.assign(templateCompRef.data(), dataObj.data);
                    if (templateCompRef.components) {
                        var objkeys = Object.keys(templateCompRef.components) || [];
                        var _loop_1 = function (objstring) {
                            var intComponent = templateCompRef.components[objstring];
                            if (intComponent && intComponent.data) {
                                var tempRef2_1 = Object.assign(intComponent.data(), dataObj.data);
                                intComponent.data = function () { return tempRef2_1; };
                            }
                        };
                        for (var _i = 0, objkeys_1 = objkeys; _i < objkeys_1.length; _i++) {
                            var objstring = objkeys_1[_i];
                            _loop_1(objstring);
                        }
                    }
                }
                templateCompRef.data = function () { return tempRef_1; };
                var app = allVue.createApp(templateCompRef);
                if (plugins) {
                    for (var i = 0; i < plugins.length; i++) {
                        app.use(plugins[i]);
                    }
                }
                app.mount((context.getModuleName() === 'grid') ? ("#" + pid) : ("#" + id));
                returnEle = ele.childNodes;
                detach(ele);
            }
            else if (typeof templateElement === "string") {
                var vueSlot_2 = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot_2) {
                    // Compilation for Vue 2 slot template
                    var vueTemplate = new Vue$1__default({
                        render: function () {
                            return vueSlot_2[templateElement]({ data: data });
                        }
                    });
                    vueTemplate.$mount("#" + id);
                    returnEle = ele.childNodes;
                    detach(ele);
                }
                else {
                    // Compilation for Vue 2 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            }
            else {
                // Compilation for Vue 2 functional template
                var tempObj = templateElement.call(that, {});
                var templateFunction = tempObj.template;
                var propsData = getValue("template.propsData", tempObj);
                var dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance,
                };
                if (propsData) {
                    templateFunction = tempObj.template.extends;
                    dataObj.propsData = propsData;
                }
                if (typeof templateFunction !== "function") {
                    templateFunction = Vue$1__default.extend(templateFunction);
                }
                var templateVue = new templateFunction(dataObj);
                // let templateVue = new Vue(tempObj.template);
                // templateVue.$data.data = extend(tempObj.data, data);
                templateVue.$mount("#" + id);
                returnEle = ele.childNodes;
                if (context.vueInstance) {
                    var templateInstance = context.vueInstance.templateCollection;
                    if (!templateInstance) {
                        context.vueInstance.templateCollection = {};
                        templateInstance = context.vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance[propName]) {
                            templateInstance[propName] = [];
                        }
                        templateInstance[propName].push(returnEle[0]);
                    }
                }
                detach(ele);
            }
        }
        return returnEle || [];
    };
}
setTemplateEngine({ compile: compile });
// Get the Vue2 slot template from the root or current Vue component.
function getVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    var instance = (root && root.vueInstance) ? root.vueInstance : vueInstance;
    return getVueChildSlot(instance, templateElement);
}
function getVueChildSlot(vueInstance, templateElement) {
    if (!vueInstance) {
        return undefined;
    }
    var slots = vueInstance.$slots;
    var scopedSlots = vueInstance.$scopedSlots;
    var vSlots = vueInstance.scopedSlots;
    var children = vueInstance.children;
    if (scopedSlots && scopedSlots[templateElement]) {
        return scopedSlots;
    }
    else if (slots && slots.default) {
        var childSlots = slots.default;
        for (var i = 0; i < childSlots.length; i++) {
            var slot = getVueChildSlot(getSlot(childSlots[i]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    else if (vSlots && vSlots[templateElement]) {
        return vSlots;
    }
    else if (children) {
        for (var i = 0; i < children.length; i++) {
            var slot = getVueChildSlot(getSlot(children[i]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}
function getSlot(vnode) {
    var slot = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions : vnode.data;
    return vnode.componentInstance ? vnode.componentInstance : slot;
}
// Get the Vue3 slot template from the root or current Vue component.
function getCurrentVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    var slots = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
    return getChildVueSlot(slots, templateElement);
}
function getChildVueSlot(slots, templateElement) {
    if (slots && slots[templateElement]) {
        return slots;
    }
    else if (slots && slots.default) {
        var childSlots = slots.default();
        for (var i = 0; i < childSlots.length; i++) {
            var slot = getChildVueSlot(childSlots[i].children, templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}

/**
 * index for component base
 */

export { aVue, _interopRequireWildcard, allVue, gh, isExecute, ComponentBase, $internalHooks, getProps, EJComponentDecorator, EJcomponentFactory, compile };
//# sourceMappingURL=ej2-vue-base.es5.js.map
