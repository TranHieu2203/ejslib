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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { Smithchart } from '@syncfusion/ej2-charts';
import { SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin } from './series.directive';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0];
export var watch = testProp[1];
export var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
export var isExecute = gh ? false : true;
/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
var SmithchartComponent = /** @class */ (function (_super) {
    __extends(SmithchartComponent, _super);
    function SmithchartComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-seriesCollection": "e-series" };
        _this.tagNameMapper = { "e-seriesCollection": "e-series" };
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new Smithchart({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SmithchartComponent.prototype.clearTemplate = function (templateNames) {
        if (!templateNames) {
            templateNames = Object.keys(this.templateCollection || {});
        }
        if (templateNames.length && this.templateCollection) {
            for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                var tempName = templateNames_1[_i];
                var elementCollection = this.templateCollection[tempName];
                if (elementCollection && elementCollection.length) {
                    for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                        var ele = elementCollection_1[_a];
                        var destroy = getValue('__vue__.$destroy', ele);
                        if (destroy) {
                            ele.__vue__.$destroy();
                        }
                        if (ele.innerHTML) {
                            ele.innerHTML = '';
                        }
                    }
                    delete this.templateCollection[tempName];
                }
            }
        }
    };
    SmithchartComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (_this.isVue3) {
                            _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        }
                        else {
                            _this.$emit('update:' + key, prop[key]);
                            _this.$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    };
    SmithchartComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    SmithchartComponent.prototype.custom = function () {
        this.updated();
    };
    SmithchartComponent.prototype.export = function (type, fileName, orientation) {
        return this.ej2Instances.export(type, fileName, orientation);
    };
    SmithchartComponent.prototype.mouseEnd = function (e) {
        return this.ej2Instances.mouseEnd(e);
    };
    SmithchartComponent.prototype.mouseMove = function (e) {
        return this.ej2Instances.mouseMove(e);
    };
    SmithchartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    SmithchartComponent.prototype.smithchartOnClick = function (e) {
        return this.ej2Instances.smithchartOnClick(e);
    };
    SmithchartComponent.prototype.smithchartOnResize = function () {
        return this.ej2Instances.smithchartOnResize();
    };
    SmithchartComponent = __decorate([
        EJComponentDecorator({
            props: properties
        }, isExecute)
        /* Start Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        }) End */
    ], SmithchartComponent);
    return SmithchartComponent;
}(ComponentBase));
export { SmithchartComponent };
export var SmithchartPlugin = {
    name: 'ejs-smithchart',
    install: function (Vue) {
        Vue.component(SmithchartPlugin.name, SmithchartComponent);
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};
