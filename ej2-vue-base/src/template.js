import Vue from "vue";
import { setTemplateEngine, getTemplateEngine, getUniqueID, createElement, detach, extend, getValue, } from "@syncfusion/ej2-base";
import { allVue, gh } from "./component-base";
// tslint:disable:no-any
var stringCompiler = getTemplateEngine();
export function compile(templateElement, helper) {
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
                    var vueTemplate = new Vue({
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
                    templateFunction = Vue.extend(templateFunction);
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
