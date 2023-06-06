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
var BulletRangeCollectionDirective = /** @class */ (function (_super) {
    __extends(BulletRangeCollectionDirective, _super);
    function BulletRangeCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    BulletRangeCollectionDirective.prototype.render = function (createElement) {
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
    BulletRangeCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    BulletRangeCollectionDirective.prototype.getTag = function () {
        return 'e-bullet-range-collection';
    };
    BulletRangeCollectionDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], BulletRangeCollectionDirective);
    return BulletRangeCollectionDirective;
}(vueImport));
export { BulletRangeCollectionDirective };
export var BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install: function (Vue) {
        Vue.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};
var BulletRangeDirective = /** @class */ (function (_super) {
    __extends(BulletRangeDirective, _super);
    function BulletRangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulletRangeDirective.prototype.render = function () {
        return;
    };
    BulletRangeDirective.prototype.getTag = function () {
        return 'e-bullet-range';
    };
    BulletRangeDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], BulletRangeDirective);
    return BulletRangeDirective;
}(vueImport));
export { BulletRangeDirective };
export var BulletRangePlugin = {
    name: 'e-bullet-range',
    install: function (Vue) {
        Vue.component(BulletRangePlugin.name, BulletRangeDirective);
    }
};
