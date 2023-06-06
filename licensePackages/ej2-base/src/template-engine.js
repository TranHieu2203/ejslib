/**
 * Template Engine Bridge
 */
import { compile as render } from './template';
import { createElement } from './dom';
import { isNullOrUndefined, isBlazor } from './util';
var HAS_ROW = /^[\n\r.]+<tr|^<tr/;
var HAS_SVG = /^[\n\r.]+<svg|^<path|^<g/;
export var blazorTemplates = {};
/**
 *
 * @returns {string} ?
 */
export function getRandomId() {
    return '-' + Math.random().toString(36).substr(2, 5);
}
/**
 * Compile the template string into template function.
 *
 * @param {string} templateString - The template string which is going to convert.
 * @param {Object} helper - Helper functions as an object.
 * @param {boolean} ignorePrefix ?
 * @returns {NodeList} ?
 * @private
 */
// eslint-disable-next-line
export function compile(templateString, helper, ignorePrefix) {
    var compiler = engineObj.compile(templateString, helper, ignorePrefix);
    // eslint-disable-next-line
    return function (data, component, propName, templateId, isStringTemplate, index, element, root) {
        var result = compiler(data, component, propName, element, root);
        var blazorTemplateId = 'BlazorTemplateId';
        if (isBlazor() && !isStringTemplate) {
            var randomId = getRandomId();
            var blazorId = templateId + randomId;
            if (!blazorTemplates[templateId]) {
                blazorTemplates[templateId] = [];
            }
            if (!isNullOrUndefined(index)) {
                var keys = Object.keys(blazorTemplates[templateId][index]);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (key !== blazorTemplateId && data[key]) {
                        blazorTemplates[templateId][index][key] = data[key];
                    }
                    if (key === blazorTemplateId) {
                        blazorId = blazorTemplates[templateId][index][key];
                    }
                }
            }
            else {
                data[blazorTemplateId] = blazorId;
                blazorTemplates[templateId].push(data);
            }
            // eslint-disable-next-line
            return propName === 'rowTemplate' ? [createElement('tr', { id: blazorId, className: 'e-blazor-template' })] :
                // eslint-disable-next-line
                [createElement('div', { id: blazorId, className: 'e-blazor-template' })];
        }
        if (typeof result === 'string') {
            if (HAS_SVG.test(result)) {
                var ele = createElement('svg', { innerHTML: result });
                return ele.childNodes;
            }
            else {
                var ele = createElement((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
                return ele.childNodes;
            }
        }
        else {
            return result;
        }
    };
}
/**
 *
 * @param {string} templateId ?
 * @param {string} templateName ?
 * @param {string} comp ?
 * @param {boolean} isEmpty ?
 * @param {Function} callBack ?
 * @returns {void} ?
 */
export function updateBlazorTemplate(templateId, templateName, comp, isEmpty, callBack) {
    if (isBlazor()) {
        var ejsIntrop = 'sfBlazor';
        window[ejsIntrop].updateTemplate(templateName, blazorTemplates[templateId], templateId, comp, callBack);
        if (isEmpty !== false) {
            blazorTemplates[templateId] = [];
        }
    }
}
/**
 *
 * @param {string} templateId ?
 * @param {string} templateName ?
 * @param {number} index ?
 * @returns {void} ?
 */
export function resetBlazorTemplate(templateId, templateName, index) {
    var templateDiv = document.getElementById(templateId);
    if (templateDiv) {
        // eslint-disable-next-line
        var innerTemplates = templateDiv.getElementsByClassName('blazor-inner-template');
        for (var i = 0; i < innerTemplates.length; i++) {
            var tempId = ' ';
            if (!isNullOrUndefined(index)) {
                tempId = innerTemplates[index].getAttribute('data-templateId');
            }
            else {
                tempId = innerTemplates[i].getAttribute('data-templateId');
            }
            var tempElement = document.getElementById(tempId);
            if (tempElement) {
                var length_1 = tempElement.childNodes.length;
                for (var j = 0; j < length_1; j++) {
                    if (!isNullOrUndefined(index)) {
                        innerTemplates[index].appendChild(tempElement.childNodes[0]);
                        i = innerTemplates.length;
                    }
                    else {
                        innerTemplates[i].appendChild(tempElement.childNodes[0]);
                    }
                }
            }
        }
    }
}
/**
 * Set your custom template engine for template rendering.
 *
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @returns {void} ?
 * @private
 */
export function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
/**
 * Get current template engine for template rendering
 *
 * @returns {string} ?
 * @private
 */
export function getTemplateEngine() {
    return engineObj.compile;
}
//Default Engine Class
var Engine = /** @class */ (function () {
    function Engine() {
    }
    // eslint-disable-next-line
    Engine.prototype.compile = function (templateString, helper, ignorePrefix) {
        if (helper === void 0) { helper = {}; }
        return render(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };
