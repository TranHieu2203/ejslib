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
import { EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}
export var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue3.Vue;
}
else {
    vueImport = Vue;
}
var ColorMappingsDirective = /** @class */ (function (_super) {
    __extends(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super.call(this, arguments) || this;
    }
    ColorMappingsDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    ColorMappingsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ColorMappingsDirective.prototype.getTag = function () {
        return 'e-colorMappings';
    };
    ColorMappingsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColorMappingsDirective);
    return ColorMappingsDirective;
}(vueImport));
export { ColorMappingsDirective };
export var ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install: function (Vue) {
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var ColorMappingDirective = /** @class */ (function (_super) {
    __extends(ColorMappingDirective, _super);
    function ColorMappingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingDirective.prototype.render = function () {
        return;
    };
    ColorMappingDirective.prototype.getTag = function () {
        return 'e-colorMapping';
    };
    ColorMappingDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ColorMappingDirective);
    return ColorMappingDirective;
}(vueImport));
export { ColorMappingDirective };
export var ColorMappingPlugin = {
    name: 'e-colorMapping',
    install: function (Vue) {
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
};
