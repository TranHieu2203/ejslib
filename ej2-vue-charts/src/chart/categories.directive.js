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
var CategoriesDirective = /** @class */ (function (_super) {
    __extends(CategoriesDirective, _super);
    function CategoriesDirective() {
        return _super.call(this, arguments) || this;
    }
    CategoriesDirective.prototype.render = function (createElement) {
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
    CategoriesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    CategoriesDirective.prototype.getTag = function () {
        return 'e-categories';
    };
    CategoriesDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], CategoriesDirective);
    return CategoriesDirective;
}(vueImport));
export { CategoriesDirective };
export var CategoriesPlugin = {
    name: 'e-categories',
    install: function (Vue) {
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
    }
};
var CategoryDirective = /** @class */ (function (_super) {
    __extends(CategoryDirective, _super);
    function CategoryDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryDirective.prototype.render = function () {
        return;
    };
    CategoryDirective.prototype.getTag = function () {
        return 'e-category';
    };
    CategoryDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], CategoryDirective);
    return CategoryDirective;
}(vueImport));
export { CategoryDirective };
export var CategoryPlugin = {
    name: 'e-category',
    install: function (Vue) {
        Vue.component(CategoryPlugin.name, CategoryDirective);
    }
};
