import { createElement, detach, extend, getTemplateEngine, getUniqueID, getValue, isNullOrUndefined, setTemplateEngine } from '@syncfusion/ej2-base';
import { Vue } from 'vue-class-component';
import * as Vue$1 from 'vue';
import Vue$1__default from 'vue';

/**
 * Vue Component Base
 */
const aVue = _interopRequireWildcard(Vue$1);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    else {
        let newObj = {};
        if (obj != null) {
            for (let key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
const allVue = aVue;
const gh = allVue.h;
const isExecute = gh ? false : true;
let vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue;
}
else {
    vueImport = Vue$1__default;
}
class ComponentBase extends vueImport {
    constructor() {
        super(arguments);
        this.hasInjectedModules = false;
        this.hasChildDirective = false;
        this.childDirObjects = '';
        this.isDecorator = false;
    }
    created() {
        if (!this.propKeys) {
            return;
        }
        for (let prop of this.propKeys) {
            this.ej2Instances.addEventListener(prop, (args) => {
                this.$emit(prop, args);
            });
        }
        let injectables = getValue('$root.$options.provide', this);
        let vueInjectables = getValue('$parent.$options.provide', this);
        if (this.hasInjectedModules && !isExecute) {
            let prevModule = [];
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
            let curModule = this.ej2Instances.getInjectedModules() || [];
            for (let mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
    }
    mounted() {
        let cusEle = this.$el ? this.$el.querySelectorAll("div.e-directive") : null;
        if (gh && cusEle) {
            for (let i = 0; i < cusEle.length; i++) {
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
    }
    getInjectedServices() {
        let ret = [];
        let provide;
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
            let injectables = provide;
            if (typeof provide === 'function') {
                if (provide.managed) {
                    let provideKey = provide.managed;
                    let provideValue = Object.keys(provideKey);
                    let key;
                    if (this.$root && this.isDecorator) {
                        key = Object.keys(this.$root);
                    }
                    else if (this.$vnode) {
                        key = Object.keys(this.$vnode.context);
                    }
                    else if (this.$parent) {
                        key = Object.keys(this.$parent);
                    }
                    for (let i = 0; i < provideValue.length; i++) {
                        for (let j = 0; j < key.length; j++) {
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
    }
    updated() {
        if (this.hasChildDirective) {
            let childKey = {};
            this.fetchChildPropValues(childKey);
            let curChildDir = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
    }
    beforeDestroy() {
        let tempBeforeDestroyThis = this;
        tempBeforeDestroyThis.ej2Instances.destroy();
        tempBeforeDestroyThis.$el.style.visibility = 'hidden';
        tempBeforeDestroyThis = null;
    }
    bindProperties() {
        let options = {};
        for (let prop of this.propKeys) {
            if ((!isNullOrUndefined(this[prop]) && !this.isVue3) || (this[0] && !isNullOrUndefined(this[0][0]) && !isNullOrUndefined(this[0][0][prop]))) {
                options[prop] = !this.isVue3 ? this[prop] : this[0][0][prop];
            }
        }
        if (this.hasChildDirective) {
            this.fetchChildPropValues(options);
        }
        if (this.hasInjectedModules) {
            let prevModule = this.getInjectedServices() || [];
            let curModule = this.ej2Instances.getInjectedModules() || [];
            for (let mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
        this.assignValueToWrapper(options);
    }
    assignValueToWrapper(option, silent) {
        this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent) ? true : silent);
    }
    fetchChildPropValues(childOption) {
        let dirProps = {};
        if (!this.isVue3) {
            dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
        }
        else {
            let propRef;
            if (this[0] && this[0][1].slots.default) {
                propRef = this[0][1].slots.default();
            }
            else if (this && this.$ && this.$.slots && this.$.slots.default) {
                propRef = this.$.slots.default();
            }
            if (propRef) {
                for (let i = 0; i < propRef.length; i++) {
                    if (propRef[i].type.methods) {
                        let key = propRef[i].type.methods.getTag().replace("e-", "");
                        let ref = this.resolveArrayDirectives(propRef[i].children, key);
                        let splitKeys = key.split('-');
                        let controlName = this.ej2Instances.getModuleName().toLowerCase();
                        let keyRef = (splitKeys.length > 1 && controlName.indexOf(splitKeys[0]) > -1) ? splitKeys[1] : splitKeys[0];
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
        for (let dirProp of Object.keys(dirProps)) {
            childOption[dirProp] = dirProps[dirProp];
        }
    }
    resolveArrayDirectives(slots, tagName) {
        let slot = [];
        let innerDirValues;
        slot = slots.default ? slots.default() : slots;
        let items = {};
        items[tagName] = [];
        for (const childSlot of slot) {
            let tempObj = {};
            let tagRef = childSlot.type.methods ? childSlot.type.methods.getTag() : tagName;
            if (childSlot.children) {
                let key;
                innerDirValues = this.resolveComplexDirs(childSlot.children, this.tagMapper["e-" + tagName], tagRef);
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
                Object.keys(childSlot.props).forEach((key) => {
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
        }
        return items;
    }
    resolveComplexDirs(slots, tagObject, tagName) {
        let slot = [];
        let innerDirValues;
        slot = slots.default ? slots.default() : slots;
        let items = {};
        for (const childSlot of slot) {
            let tagRef;
            let tag;
            if (tagObject[tagName]) {
                tagRef = Object.keys(tagObject[tagName]);
                tag = tagRef.find((key) => tagObject[tagName][key] ===
                    childSlot.type.methods.getTag().replace(/[s]\b/, ""));
                tag = tag
                    ? tag.replace("e-", "")
                    : childSlot.type.methods.getTag().replace("e-", "");
                if (this.ej2Instances.getModuleName().toLowerCase() == "diagram" && tag.indexOf('annotations') != -1) {
                    tag = 'annotations';
                }
            }
            if (childSlot.children) {
                innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[tagName], childSlot.type.methods.getTag());
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
        }
        return items;
    }
    resolveComplexInnerDirs(slots, tagObject, tagName) {
        let slot = [];
        let innerDirValues;
        slot = slots.default ? slots.default() : slots;
        let items = slot.length > 1 ? [] : {};
        for (const childSlot of slot) {
            let tag = childSlot.type.methods.getTag().replace("e-", "");
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
    }
    resolveMultilevelComplexInnerDirs(slots, tagObject, tagName) {
        let slot = [];
        let innerDirValues;
        slot = slots.default ? slots.default() : slots;
        let items = slot.length > 1 ? [] : {};
        for (const childSlot of slot) {
            let tag = childSlot.type.methods.getTag().replace("e-", "");
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
    }
    getDirectiveValues(tagDirectives, tagMapper, tagNameMapper) {
        let keyTags = Object.keys(tagMapper);
        let dir = {};
        if (tagDirectives) {
            for (let tagDirective of tagDirectives) {
                if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag) {
                    let dirTag = tagDirective.componentOptions.tag;
                    if (keyTags.indexOf(dirTag) !== -1) {
                        let tagName = tagNameMapper[dirTag] ? tagNameMapper[dirTag] : dirTag;
                        dir[tagName.replace('e-', '')] = [];
                        for (let tagDirChild of tagDirective.componentOptions.children) {
                            let retObj = this.getVNodeValue(tagDirChild, tagMapper[dirTag], tagNameMapper);
                            if (Object.keys(retObj).length !== 0) {
                                dir[tagName.replace('e-', '')].push(retObj);
                            }
                        }
                    }
                }
            }
        }
        return dir;
    }
    getMultiLevelDirValue(tagDirectories, tagKey, tagNameMapper) {
        let mulObj = {};
        for (let tagDir of tagDirectories) {
            if (tagDir.componentOptions) {
                let key = tagDir.componentOptions.tag;
                let tagName = tagNameMapper[key] ? tagNameMapper[key] : key;
                mulObj[tagName.replace('e-', '')] = [];
                if (tagDir.componentOptions && tagDir.componentOptions.children) {
                    for (let tagDirChild of tagDir.componentOptions.children) {
                        let mulLevObj = this.getVNodeValue(tagDirChild, tagKey[key], tagNameMapper);
                        if (Object.keys(mulLevObj).length !== 0) {
                            mulObj[tagName.replace('e-', '')].push(mulLevObj);
                        }
                    }
                }
            }
        }
        return mulObj;
    }
    getVNodeValue(tagDirective, tagKey, tagNameMapper) {
        let ret = {};
        if (tagDirective.componentOptions) {
            let dirTag = tagDirective.componentOptions.tag;
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
    }
    /**
     * convert kebab case directive props to camel case
     */
    getCamelCaseProps(props) {
        let retProps = {};
        for (let prop of Object.keys(props)) {
            retProps[prop.replace(/-[a-z]/g, (e) => { return e[1].toUpperCase(); })] = props[prop];
        }
        return retProps;
    }
    dataBind() {
        this.ej2Instances.dataBind();
    }
    setProperties(arg, muteOnChange) {
        return this.ej2Instances.setProperties(arg, muteOnChange);
    }
}

/**
 * Vue Component Base
 */
// import { Base, Component as EJ2Component, isNullOrUndefined } from '@syncfusion/ej2-base';
let $internalHooks = [
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
function getProps(options = {}) {
    if (options.props) {
        for (let prop of options.props) {
            (options.newprops || (options.newprops = {}))[prop] = {};
            (options.watch || (options.watch = {}))[prop] = function (newVal) {
                this.ej2Instances[prop] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
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
function EJcomponentFactory(Component, options = {}) {
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    const proto = Component.prototype;
    if (options.props) {
        for (let prop of options.props) {
            (options.props || (options.props = {}))[prop] = {};
            (options.watch || (options.watch = {}))[prop] = function (newVal) {
                this.ej2Instances[prop] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
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
        const descriptor = Object.getOwnPropertyDescriptor(proto, key);
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
        data() {
            return collectDataFromConstructor(this, Component);
        }
    });
    //  decorate options
    const decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(Function(options));
        delete Component.__decorators__;
    }
    // find super
    const superProto = Object.getPrototypeOf(Component.prototype);
    const Super = superProto instanceof Vue$1__default
        ? superProto.constructor
        : Vue$1__default;
    const Extended = Super.extend(options);
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
let stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    let that = this;
    return (data, context, propName, element, root) => {
        let returnEle;
        if (context) {
            let plugins = context.vueInstance ? context.vueInstance.plugins : null;
            let pid = getUniqueID("templateParentDiv");
            let id = getUniqueID("templateDiv");
            let ele = createElement("div", {
                id: pid,
                innerHTML: '<div id="' + id + '"></div>',
            });
            document.body.appendChild(ele);
            if (gh && typeof templateElement === "string") {
                let vueSlot = getCurrentVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Compilation for Vue 3 slot template
                    let app = allVue.createApp({
                        render() {
                            return vueSlot[templateElement]({ data: data });
                        }
                    });
                    if (plugins) {
                        for (let i = 0; i < plugins.length; i++) {
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
                let tempObj = templateElement.call(that, {});
                let object = tempObj;
                let propsData = getValue("template.propsData", tempObj);
                let dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance,
                };
                if (!object.template) {
                    object.template = object[Object.keys(object)[0]];
                }
                let templateCompRef;
                if (object.template.extends) {
                    templateCompRef = object.template.extends._context.components.template;
                }
                else {
                    templateCompRef = object.template._context.components[templateElement.name];
                    if (!templateCompRef) {
                        let key = Object.keys(object.template._context.components)[0];
                        templateCompRef = object.template._context.components[key];
                    }
                }
                let tempRef;
                if (propsData) {
                    tempRef = Object.assign(templateCompRef.data(), propsData);
                }
                else {
                    tempRef = Object.assign(templateCompRef.data(), dataObj.data);
                    if (templateCompRef.components) {
                        let objkeys = Object.keys(templateCompRef.components) || [];
                        for (let objstring of objkeys) {
                            let intComponent = templateCompRef.components[objstring];
                            if (intComponent && intComponent.data) {
                                let tempRef2 = Object.assign(intComponent.data(), dataObj.data);
                                intComponent.data = function () { return tempRef2; };
                            }
                        }
                    }
                }
                templateCompRef.data = function () { return tempRef; };
                let app = allVue.createApp(templateCompRef);
                if (plugins) {
                    for (let i = 0; i < plugins.length; i++) {
                        app.use(plugins[i]);
                    }
                }
                app.mount((context.getModuleName() === 'grid') ? ("#" + pid) : ("#" + id));
                returnEle = ele.childNodes;
                detach(ele);
            }
            else if (typeof templateElement === "string") {
                let vueSlot = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Compilation for Vue 2 slot template
                    let vueTemplate = new Vue$1__default({
                        render() {
                            return vueSlot[templateElement]({ data: data });
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
                let tempObj = templateElement.call(that, {});
                let templateFunction = tempObj.template;
                let propsData = getValue("template.propsData", tempObj);
                let dataObj = {
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
                let templateVue = new templateFunction(dataObj);
                // let templateVue = new Vue(tempObj.template);
                // templateVue.$data.data = extend(tempObj.data, data);
                templateVue.$mount("#" + id);
                returnEle = ele.childNodes;
                if (context.vueInstance) {
                    let templateInstance = context.vueInstance.templateCollection;
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
    let instance = (root && root.vueInstance) ? root.vueInstance : vueInstance;
    return getVueChildSlot(instance, templateElement);
}
function getVueChildSlot(vueInstance, templateElement) {
    if (!vueInstance) {
        return undefined;
    }
    let slots = vueInstance.$slots;
    let scopedSlots = vueInstance.$scopedSlots;
    let vSlots = vueInstance.scopedSlots;
    let children = vueInstance.children;
    if (scopedSlots && scopedSlots[templateElement]) {
        return scopedSlots;
    }
    else if (slots && slots.default) {
        let childSlots = slots.default;
        for (let i = 0; i < childSlots.length; i++) {
            let slot = getVueChildSlot(getSlot(childSlots[i]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    else if (vSlots && vSlots[templateElement]) {
        return vSlots;
    }
    else if (children) {
        for (let i = 0; i < children.length; i++) {
            let slot = getVueChildSlot(getSlot(children[i]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}
function getSlot(vnode) {
    let slot = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions : vnode.data;
    return vnode.componentInstance ? vnode.componentInstance : slot;
}
// Get the Vue3 slot template from the root or current Vue component.
function getCurrentVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    let slots = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
    return getChildVueSlot(slots, templateElement);
}
function getChildVueSlot(slots, templateElement) {
    if (slots && slots[templateElement]) {
        return slots;
    }
    else if (slots && slots.default) {
        let childSlots = slots.default();
        for (let i = 0; i < childSlots.length; i++) {
            let slot = getChildVueSlot(childSlots[i].children, templateElement);
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
//# sourceMappingURL=ej2-vue-base.es2015.js.map
