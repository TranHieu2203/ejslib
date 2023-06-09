import { AccumulationChart, BulletChart, Chart, RangeNavigator, Smithchart, Sparkline, StockChart } from '@syncfusion/ej2-charts';
import { ComponentBase, EJComponentDecorator, allVue, getProps, gh } from '@syncfusion/ej2-vue-base';
import { Vue } from 'vue-class-component';
import { getValue, isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';
import Vue$1 from 'vue';

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue;
}
else {
    vueImport = Vue$1;
}
var TrendlinesDirective = /** @class */ (function (_super) {
    __extends(TrendlinesDirective, _super);
    function TrendlinesDirective() {
        return _super.call(this, arguments) || this;
    }
    TrendlinesDirective.prototype.render = function (createElement) {
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
    TrendlinesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    TrendlinesDirective.prototype.getTag = function () {
        return 'e-trendlines';
    };
    TrendlinesDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], TrendlinesDirective);
    return TrendlinesDirective;
}(vueImport));
var TrendlinesPlugin = {
    name: 'e-trendlines',
    install: function (Vue$$1) {
        Vue$$1.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
};
var TrendlineDirective = /** @class */ (function (_super) {
    __extends(TrendlineDirective, _super);
    function TrendlineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendlineDirective.prototype.render = function () {
        return;
    };
    TrendlineDirective.prototype.getTag = function () {
        return 'e-trendline';
    };
    TrendlineDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], TrendlineDirective);
    return TrendlineDirective;
}(vueImport));
var TrendlinePlugin = {
    name: 'e-trendline',
    install: function (Vue$$1) {
        Vue$$1.component(TrendlinePlugin.name, TrendlineDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
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
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$1 = gh ? false : true;
var vueImport$1;
if (!isExecute$1 || parseInt(allVue.version) < 3) {
    vueImport$1 = Vue;
}
else {
    vueImport$1 = Vue$1;
}
var SegmentsDirective = /** @class */ (function (_super) {
    __extends$1(SegmentsDirective, _super);
    function SegmentsDirective() {
        return _super.call(this, arguments) || this;
    }
    SegmentsDirective.prototype.render = function (createElement) {
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
    SegmentsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    SegmentsDirective.prototype.getTag = function () {
        return 'e-segments';
    };
    SegmentsDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], SegmentsDirective);
    return SegmentsDirective;
}(vueImport$1));
var SegmentsPlugin = {
    name: 'e-segments',
    install: function (Vue$$1) {
        Vue$$1.component(SegmentsPlugin.name, SegmentsDirective);
    }
};
var SegmentDirective = /** @class */ (function (_super) {
    __extends$1(SegmentDirective, _super);
    function SegmentDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentDirective.prototype.render = function () {
        return;
    };
    SegmentDirective.prototype.getTag = function () {
        return 'e-segment';
    };
    SegmentDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], SegmentDirective);
    return SegmentDirective;
}(vueImport$1));
var SegmentPlugin = {
    name: 'e-segment',
    install: function (Vue$$1) {
        Vue$$1.component(SegmentPlugin.name, SegmentDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$2 = gh ? false : true;
var vueImport$2;
if (!isExecute$2 || parseInt(allVue.version) < 3) {
    vueImport$2 = Vue;
}
else {
    vueImport$2 = Vue$1;
}
var SeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$2(SeriesCollectionDirective, _super);
    function SeriesCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    SeriesCollectionDirective.prototype.render = function (createElement) {
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
    SeriesCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    SeriesCollectionDirective.prototype.getTag = function () {
        return 'e-series-collection';
    };
    SeriesCollectionDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], SeriesCollectionDirective);
    return SeriesCollectionDirective;
}(vueImport$2));
var SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
};
var SeriesDirective = /** @class */ (function (_super) {
    __extends$2(SeriesDirective, _super);
    function SeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesDirective.prototype.render = function () {
        return;
    };
    SeriesDirective.prototype.getTag = function () {
        return 'e-series';
    };
    SeriesDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], SeriesDirective);
    return SeriesDirective;
}(vueImport$2));
var SeriesPlugin = {
    name: 'e-series',
    install: function (Vue$$1) {
        Vue$$1.component(SeriesPlugin.name, SeriesDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$3 = gh ? false : true;
var vueImport$3;
if (!isExecute$3 || parseInt(allVue.version) < 3) {
    vueImport$3 = Vue;
}
else {
    vueImport$3 = Vue$1;
}
var StripLinesDirective = /** @class */ (function (_super) {
    __extends$3(StripLinesDirective, _super);
    function StripLinesDirective() {
        return _super.call(this, arguments) || this;
    }
    StripLinesDirective.prototype.render = function (createElement) {
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
    StripLinesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StripLinesDirective.prototype.getTag = function () {
        return 'e-striplines';
    };
    StripLinesDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StripLinesDirective);
    return StripLinesDirective;
}(vueImport$3));
var StripLinesPlugin = {
    name: 'e-striplines',
    install: function (Vue$$1) {
        Vue$$1.component(StripLinesPlugin.name, StripLinesDirective);
    }
};
var StripLineDirective = /** @class */ (function (_super) {
    __extends$3(StripLineDirective, _super);
    function StripLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripLineDirective.prototype.render = function () {
        return;
    };
    StripLineDirective.prototype.getTag = function () {
        return 'e-stripline';
    };
    StripLineDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
    ], StripLineDirective);
    return StripLineDirective;
}(vueImport$3));
var StripLinePlugin = {
    name: 'e-stripline',
    install: function (Vue$$1) {
        Vue$$1.component(StripLinePlugin.name, StripLineDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$4 = gh ? false : true;
var vueImport$4;
if (!isExecute$4 || parseInt(allVue.version) < 3) {
    vueImport$4 = Vue;
}
else {
    vueImport$4 = Vue$1;
}
var CategoriesDirective = /** @class */ (function (_super) {
    __extends$4(CategoriesDirective, _super);
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
    CategoriesDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], CategoriesDirective);
    return CategoriesDirective;
}(vueImport$4));
var CategoriesPlugin = {
    name: 'e-categories',
    install: function (Vue$$1) {
        Vue$$1.component(CategoriesPlugin.name, CategoriesDirective);
    }
};
var CategoryDirective = /** @class */ (function (_super) {
    __extends$4(CategoryDirective, _super);
    function CategoryDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryDirective.prototype.render = function () {
        return;
    };
    CategoryDirective.prototype.getTag = function () {
        return 'e-category';
    };
    CategoryDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
    ], CategoryDirective);
    return CategoryDirective;
}(vueImport$4));
var CategoryPlugin = {
    name: 'e-category',
    install: function (Vue$$1) {
        Vue$$1.component(CategoryPlugin.name, CategoryDirective);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
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
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$5 = gh ? false : true;
var vueImport$5;
if (!isExecute$5 || parseInt(allVue.version) < 3) {
    vueImport$5 = Vue;
}
else {
    vueImport$5 = Vue$1;
}
var MultiLevelLabelsDirective = /** @class */ (function (_super) {
    __extends$5(MultiLevelLabelsDirective, _super);
    function MultiLevelLabelsDirective() {
        return _super.call(this, arguments) || this;
    }
    MultiLevelLabelsDirective.prototype.render = function (createElement) {
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
    MultiLevelLabelsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    MultiLevelLabelsDirective.prototype.getTag = function () {
        return 'e-multilevellabels';
    };
    MultiLevelLabelsDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], MultiLevelLabelsDirective);
    return MultiLevelLabelsDirective;
}(vueImport$5));
var MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install: function (Vue$$1) {
        Vue$$1.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
};
var MultiLevelLabelDirective = /** @class */ (function (_super) {
    __extends$5(MultiLevelLabelDirective, _super);
    function MultiLevelLabelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLevelLabelDirective.prototype.render = function () {
        return;
    };
    MultiLevelLabelDirective.prototype.getTag = function () {
        return 'e-multilevellabel';
    };
    MultiLevelLabelDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
    ], MultiLevelLabelDirective);
    return MultiLevelLabelDirective;
}(vueImport$5));
var MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install: function (Vue$$1) {
        Vue$$1.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$6 = gh ? false : true;
var vueImport$6;
if (!isExecute$6 || parseInt(allVue.version) < 3) {
    vueImport$6 = Vue;
}
else {
    vueImport$6 = Vue$1;
}
var AxesDirective = /** @class */ (function (_super) {
    __extends$6(AxesDirective, _super);
    function AxesDirective() {
        return _super.call(this, arguments) || this;
    }
    AxesDirective.prototype.render = function (createElement) {
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
    AxesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AxesDirective.prototype.getTag = function () {
        return 'e-axes';
    };
    AxesDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AxesDirective);
    return AxesDirective;
}(vueImport$6));
var AxesPlugin = {
    name: 'e-axes',
    install: function (Vue$$1) {
        Vue$$1.component(AxesPlugin.name, AxesDirective);
    }
};
var AxisDirective = /** @class */ (function (_super) {
    __extends$6(AxisDirective, _super);
    function AxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisDirective.prototype.render = function () {
        return;
    };
    AxisDirective.prototype.getTag = function () {
        return 'e-axis';
    };
    AxisDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
    ], AxisDirective);
    return AxisDirective;
}(vueImport$6));
var AxisPlugin = {
    name: 'e-axis',
    install: function (Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
    }
};

var __extends$7 = (undefined && undefined.__extends) || (function () {
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
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$7 = gh ? false : true;
var vueImport$7;
if (!isExecute$7 || parseInt(allVue.version) < 3) {
    vueImport$7 = Vue;
}
else {
    vueImport$7 = Vue$1;
}
var RowsDirective = /** @class */ (function (_super) {
    __extends$7(RowsDirective, _super);
    function RowsDirective() {
        return _super.call(this, arguments) || this;
    }
    RowsDirective.prototype.render = function (createElement) {
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
    RowsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RowsDirective.prototype.getTag = function () {
        return 'e-rows';
    };
    RowsDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RowsDirective);
    return RowsDirective;
}(vueImport$7));
var RowsPlugin = {
    name: 'e-rows',
    install: function (Vue$$1) {
        Vue$$1.component(RowsPlugin.name, RowsDirective);
    }
};
var RowDirective = /** @class */ (function (_super) {
    __extends$7(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.prototype.render = function () {
        return;
    };
    RowDirective.prototype.getTag = function () {
        return 'e-row';
    };
    RowDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
    ], RowDirective);
    return RowDirective;
}(vueImport$7));
var RowPlugin = {
    name: 'e-row',
    install: function (Vue$$1) {
        Vue$$1.component(RowPlugin.name, RowDirective);
    }
};

var __extends$8 = (undefined && undefined.__extends) || (function () {
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
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$8 = gh ? false : true;
var vueImport$8;
if (!isExecute$8 || parseInt(allVue.version) < 3) {
    vueImport$8 = Vue;
}
else {
    vueImport$8 = Vue$1;
}
var ColumnsDirective = /** @class */ (function (_super) {
    __extends$8(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function (createElement) {
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
    ColumnsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ColumnsDirective.prototype.getTag = function () {
        return 'e-columns';
    };
    ColumnsDirective = __decorate$8([
        EJComponentDecorator({}, isExecute$8)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColumnsDirective);
    return ColumnsDirective;
}(vueImport$8));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
var ColumnDirective = /** @class */ (function (_super) {
    __extends$8(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective.prototype.getTag = function () {
        return 'e-column';
    };
    ColumnDirective = __decorate$8([
        EJComponentDecorator({}, isExecute$8)
    ], ColumnDirective);
    return ColumnDirective;
}(vueImport$8));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __extends$9 = (undefined && undefined.__extends) || (function () {
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
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$9 = gh ? false : true;
var vueImport$9;
if (!isExecute$9 || parseInt(allVue.version) < 3) {
    vueImport$9 = Vue;
}
else {
    vueImport$9 = Vue$1;
}
var RangeColorSettingsDirective = /** @class */ (function (_super) {
    __extends$9(RangeColorSettingsDirective, _super);
    function RangeColorSettingsDirective() {
        return _super.call(this, arguments) || this;
    }
    RangeColorSettingsDirective.prototype.render = function (createElement) {
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
    RangeColorSettingsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RangeColorSettingsDirective.prototype.getTag = function () {
        return 'e-rangecolorsettings';
    };
    RangeColorSettingsDirective = __decorate$9([
        EJComponentDecorator({}, isExecute$9)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RangeColorSettingsDirective);
    return RangeColorSettingsDirective;
}(vueImport$9));
var RangeColorSettingsPlugin = {
    name: 'e-rangecolorsettings',
    install: function (Vue$$1) {
        Vue$$1.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
    }
};
var RangeColorSettingDirective = /** @class */ (function (_super) {
    __extends$9(RangeColorSettingDirective, _super);
    function RangeColorSettingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeColorSettingDirective.prototype.render = function () {
        return;
    };
    RangeColorSettingDirective.prototype.getTag = function () {
        return 'e-rangecolorsetting';
    };
    RangeColorSettingDirective = __decorate$9([
        EJComponentDecorator({}, isExecute$9)
    ], RangeColorSettingDirective);
    return RangeColorSettingDirective;
}(vueImport$9));
var RangeColorSettingPlugin = {
    name: 'e-rangecolorsetting',
    install: function (Vue$$1) {
        Vue$$1.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
    }
};

var __extends$10 = (undefined && undefined.__extends) || (function () {
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
var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$10 = gh ? false : true;
var vueImport$10;
if (!isExecute$10 || parseInt(allVue.version) < 3) {
    vueImport$10 = Vue;
}
else {
    vueImport$10 = Vue$1;
}
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends$10(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    AnnotationsDirective.prototype.render = function (createElement) {
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
    AnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AnnotationsDirective.prototype.getTag = function () {
        return 'e-annotations';
    };
    AnnotationsDirective = __decorate$10([
        EJComponentDecorator({}, isExecute$10)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AnnotationsDirective);
    return AnnotationsDirective;
}(vueImport$10));
var AnnotationsPlugin = {
    name: 'e-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-chart>
 *   <e-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends$10(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.prototype.render = function () {
        return;
    };
    AnnotationDirective.prototype.getTag = function () {
        return 'e-annotation';
    };
    AnnotationDirective = __decorate$10([
        EJComponentDecorator({}, isExecute$10)
    ], AnnotationDirective);
    return AnnotationDirective;
}(vueImport$10));
var AnnotationPlugin = {
    name: 'e-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

var __extends$11 = (undefined && undefined.__extends) || (function () {
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
var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$11 = gh ? false : true;
var vueImport$11;
if (!isExecute$11 || parseInt(allVue.version) < 3) {
    vueImport$11 = Vue;
}
else {
    vueImport$11 = Vue$1;
}
var SelectedDataIndexesDirective = /** @class */ (function (_super) {
    __extends$11(SelectedDataIndexesDirective, _super);
    function SelectedDataIndexesDirective() {
        return _super.call(this, arguments) || this;
    }
    SelectedDataIndexesDirective.prototype.render = function (createElement) {
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
    SelectedDataIndexesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    SelectedDataIndexesDirective.prototype.getTag = function () {
        return 'e-selecteddataindexes';
    };
    SelectedDataIndexesDirective = __decorate$11([
        EJComponentDecorator({}, isExecute$11)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], SelectedDataIndexesDirective);
    return SelectedDataIndexesDirective;
}(vueImport$11));
var SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install: function (Vue$$1) {
        Vue$$1.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
};
var SelectedDataIndexDirective = /** @class */ (function (_super) {
    __extends$11(SelectedDataIndexDirective, _super);
    function SelectedDataIndexDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedDataIndexDirective.prototype.render = function () {
        return;
    };
    SelectedDataIndexDirective.prototype.getTag = function () {
        return 'e-selecteddataindex';
    };
    SelectedDataIndexDirective = __decorate$11([
        EJComponentDecorator({}, isExecute$11)
    ], SelectedDataIndexDirective);
    return SelectedDataIndexDirective;
}(vueImport$11));
var SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install: function (Vue$$1) {
        Vue$$1.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
};

var __extends$12 = (undefined && undefined.__extends) || (function () {
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
var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$12 = gh ? false : true;
var vueImport$12;
if (!isExecute$12 || parseInt(allVue.version) < 3) {
    vueImport$12 = Vue;
}
else {
    vueImport$12 = Vue$1;
}
var IndicatorsDirective = /** @class */ (function (_super) {
    __extends$12(IndicatorsDirective, _super);
    function IndicatorsDirective() {
        return _super.call(this, arguments) || this;
    }
    IndicatorsDirective.prototype.render = function (createElement) {
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
    IndicatorsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    IndicatorsDirective.prototype.getTag = function () {
        return 'e-indicators';
    };
    IndicatorsDirective = __decorate$12([
        EJComponentDecorator({}, isExecute$12)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], IndicatorsDirective);
    return IndicatorsDirective;
}(vueImport$12));
var IndicatorsPlugin = {
    name: 'e-indicators',
    install: function (Vue$$1) {
        Vue$$1.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};
var IndicatorDirective = /** @class */ (function (_super) {
    __extends$12(IndicatorDirective, _super);
    function IndicatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorDirective.prototype.render = function () {
        return;
    };
    IndicatorDirective.prototype.getTag = function () {
        return 'e-indicator';
    };
    IndicatorDirective = __decorate$12([
        EJComponentDecorator({}, isExecute$12)
    ], IndicatorDirective);
    return IndicatorDirective;
}(vueImport$12));
var IndicatorPlugin = {
    name: 'e-indicator',
    install: function (Vue$$1) {
        Vue$$1.component(IndicatorPlugin.name, IndicatorDirective);
    }
};

var __extends$13 = (undefined && undefined.__extends) || (function () {
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
var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'allowExport', 'allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableAutoIntervalOnBothAxis', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rangeColorSettings', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'afterExport', 'animationComplete', 'annotationRender', 'axisLabelClick', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointDoubleClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'sharedTooltipRender', 'textRender', 'tooltipRender', 'zoomComplete'];
var modelProps = ['dataSource'];
var testProp = getProps({ props: properties });
var props = testProp[0];
var watch = testProp[1];
var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
var isExecute$13 = gh ? false : true;
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-chart></ejs-chart>
 * ```
 */
var ChartComponent = /** @class */ (function (_super) {
    __extends$13(ChartComponent, _super);
    function ChartComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-series-collection": { "e-series": { "e-trendlines": "e-trendline", "e-segments": "e-segment" } }, "e-axes": { "e-axis": { "e-striplines": "e-stripline", "e-multilevellabels": { "e-multilevellabel": { "e-categories": "e-category" } } } }, "e-rows": "e-row", "e-columns": "e-column", "e-rangecolorsettings": "e-rangecolorsetting", "e-annotations": "e-annotation", "e-selecteddataindexes": "e-selecteddataindex", "e-indicators": "e-indicator" };
        _this.tagNameMapper = { "e-series-collection": "e-series", "e-striplines": "e-stripLines", "e-multilevellabels": "e-multiLevelLabels", "e-rangecolorsettings": "e-rangeColorSettings", "e-selecteddataindexes": "e-selectedDataIndexes" };
        _this.isVue3 = !isExecute$13;
        _this.ej2Instances = new Chart({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ChartComponent.prototype.clearTemplate = function (templateNames) {
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
    ChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$13) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$13) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$13) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    ChartComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    ChartComponent.prototype.custom = function () {
        this.updated();
    };
    ChartComponent.prototype.addAxes = function (axisCollection) {
        return this.ej2Instances.addAxes(axisCollection);
    };
    ChartComponent.prototype.addSeries = function (seriesCollection) {
        return this.ej2Instances.addSeries(seriesCollection);
    };
    ChartComponent.prototype.clearSeries = function () {
        return this.ej2Instances.clearSeries();
    };
    ChartComponent.prototype.createChartSvg = function () {
        return this.ej2Instances.createChartSvg();
    };
    ChartComponent.prototype.export = function (type, fileName) {
        return this.ej2Instances.export(type, fileName);
    };
    ChartComponent.prototype.getLocalizedLabel = function (key) {
        return this.ej2Instances.getLocalizedLabel(key);
    };
    ChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    ChartComponent.prototype.processData = function (render) {
        return this.ej2Instances.processData(render);
    };
    ChartComponent.prototype.refreshLiveData = function () {
        return this.ej2Instances.refreshLiveData();
    };
    ChartComponent.prototype.removeAxis = function (index) {
        return this.ej2Instances.removeAxis(index);
    };
    ChartComponent.prototype.removeSeries = function (index) {
        return this.ej2Instances.removeSeries(index);
    };
    ChartComponent.prototype.setAnnotationValue = function (annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    };
    ChartComponent = __decorate$13([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$13)
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
    ], ChartComponent);
    return ChartComponent;
}(ComponentBase));
var ChartPlugin = {
    name: 'ejs-chart',
    install: function (Vue$$1) {
        Vue$$1.component(ChartPlugin.name, ChartComponent);
        Vue$$1.component(SeriesPlugin.name, SeriesDirective);
        Vue$$1.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
        Vue$$1.component(TrendlinePlugin.name, TrendlineDirective);
        Vue$$1.component(TrendlinesPlugin.name, TrendlinesDirective);
        Vue$$1.component(SegmentPlugin.name, SegmentDirective);
        Vue$$1.component(SegmentsPlugin.name, SegmentsDirective);
        Vue$$1.component(AxisPlugin.name, AxisDirective);
        Vue$$1.component(AxesPlugin.name, AxesDirective);
        Vue$$1.component(StripLinePlugin.name, StripLineDirective);
        Vue$$1.component(StripLinesPlugin.name, StripLinesDirective);
        Vue$$1.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
        Vue$$1.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
        Vue$$1.component(CategoryPlugin.name, CategoryDirective);
        Vue$$1.component(CategoriesPlugin.name, CategoriesDirective);
        Vue$$1.component(RowPlugin.name, RowDirective);
        Vue$$1.component(RowsPlugin.name, RowsDirective);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
        Vue$$1.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue$$1.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
        Vue$$1.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
        Vue$$1.component(IndicatorPlugin.name, IndicatorDirective);
        Vue$$1.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};

var __extends$14 = (undefined && undefined.__extends) || (function () {
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
var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$14 = gh ? false : true;
var vueImport$13;
if (!isExecute$14 || parseInt(allVue.version) < 3) {
    vueImport$13 = Vue;
}
else {
    vueImport$13 = Vue$1;
}
var AccumulationSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$14(AccumulationSeriesCollectionDirective, _super);
    function AccumulationSeriesCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    AccumulationSeriesCollectionDirective.prototype.render = function (createElement) {
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
    AccumulationSeriesCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AccumulationSeriesCollectionDirective.prototype.getTag = function () {
        return 'e-accumulation-series-collection';
    };
    AccumulationSeriesCollectionDirective = __decorate$14([
        EJComponentDecorator({}, isExecute$14)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AccumulationSeriesCollectionDirective);
    return AccumulationSeriesCollectionDirective;
}(vueImport$13));
var AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
};
var AccumulationSeriesDirective = /** @class */ (function (_super) {
    __extends$14(AccumulationSeriesDirective, _super);
    function AccumulationSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationSeriesDirective.prototype.render = function () {
        return;
    };
    AccumulationSeriesDirective.prototype.getTag = function () {
        return 'e-accumulation-series';
    };
    AccumulationSeriesDirective = __decorate$14([
        EJComponentDecorator({}, isExecute$14)
    ], AccumulationSeriesDirective);
    return AccumulationSeriesDirective;
}(vueImport$13));
var AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
};

var __extends$15 = (undefined && undefined.__extends) || (function () {
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
var __decorate$15 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$15 = gh ? false : true;
var vueImport$14;
if (!isExecute$15 || parseInt(allVue.version) < 3) {
    vueImport$14 = Vue;
}
else {
    vueImport$14 = Vue$1;
}
var AccumulationAnnotationsDirective = /** @class */ (function (_super) {
    __extends$15(AccumulationAnnotationsDirective, _super);
    function AccumulationAnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    AccumulationAnnotationsDirective.prototype.render = function (createElement) {
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
    AccumulationAnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AccumulationAnnotationsDirective.prototype.getTag = function () {
        return 'e-accumulation-annotations';
    };
    AccumulationAnnotationsDirective = __decorate$15([
        EJComponentDecorator({}, isExecute$15)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AccumulationAnnotationsDirective);
    return AccumulationAnnotationsDirective;
}(vueImport$14));
var AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};
var AccumulationAnnotationDirective = /** @class */ (function (_super) {
    __extends$15(AccumulationAnnotationDirective, _super);
    function AccumulationAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationAnnotationDirective.prototype.render = function () {
        return;
    };
    AccumulationAnnotationDirective.prototype.getTag = function () {
        return 'e-accumulation-annotation';
    };
    AccumulationAnnotationDirective = __decorate$15([
        EJComponentDecorator({}, isExecute$15)
    ], AccumulationAnnotationDirective);
    return AccumulationAnnotationDirective;
}(vueImport$14));
var AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
};

var __extends$16 = (undefined && undefined.__extends) || (function () {
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
var __decorate$16 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$1 = ['isLazyUpdate', 'plugins', 'allowExport', 'annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'afterExport', 'animationComplete', 'annotationRender', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender'];
var modelProps$1 = ['dataSource'];
var testProp$1 = getProps({ props: properties$1 });
var props$1 = testProp$1[0];
var watch$1 = testProp$1[1];
var emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (var _i$1 = 0, modelProps_1$1 = modelProps$1; _i$1 < modelProps_1$1.length; _i$1++) {
    var props_1$1 = modelProps_1$1[_i$1];
    emitProbs$1.push('update:' + props_1$1);
}
var isExecute$16 = gh ? false : true;
/**
 * Represents Vuejs AccumulationChart Component
 * ```vue
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
var AccumulationChartComponent = /** @class */ (function (_super) {
    __extends$16(AccumulationChartComponent, _super);
    function AccumulationChartComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-accumulation-series-collection": "e-accumulation-series", "e-accumulation-annotations": "e-accumulation-annotation" };
        _this.tagNameMapper = { "e-accumulation-series-collection": "e-series", "e-accumulation-annotations": "e-annotations" };
        _this.isVue3 = !isExecute$16;
        _this.ej2Instances = new AccumulationChart({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    AccumulationChartComponent.prototype.clearTemplate = function (templateNames) {
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
    AccumulationChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    AccumulationChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$16) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$16) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$16) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    AccumulationChartComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    AccumulationChartComponent.prototype.custom = function () {
        this.updated();
    };
    AccumulationChartComponent.prototype.export = function (type, fileName) {
        return this.ej2Instances.export(type, fileName);
    };
    AccumulationChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    AccumulationChartComponent.prototype.setAnnotationValue = function (annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    };
    AccumulationChartComponent.prototype.titleTooltip = function (event, x, y, isTouch) {
        return this.ej2Instances.titleTooltip(event, x, y, isTouch);
    };
    AccumulationChartComponent = __decorate$16([
        EJComponentDecorator({
            props: properties$1,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$16)
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
    ], AccumulationChartComponent);
    return AccumulationChartComponent;
}(ComponentBase));
var AccumulationChartPlugin = {
    name: 'ejs-accumulationchart',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationChartPlugin.name, AccumulationChartComponent);
        Vue$$1.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
        Vue$$1.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
        Vue$$1.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
        Vue$$1.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};

var __extends$17 = (undefined && undefined.__extends) || (function () {
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
var __decorate$17 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$17 = gh ? false : true;
var vueImport$15;
if (!isExecute$17 || parseInt(allVue.version) < 3) {
    vueImport$15 = Vue;
}
else {
    vueImport$15 = Vue$1;
}
var RangenavigatorSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$17(RangenavigatorSeriesCollectionDirective, _super);
    function RangenavigatorSeriesCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    RangenavigatorSeriesCollectionDirective.prototype.render = function (createElement) {
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
    RangenavigatorSeriesCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RangenavigatorSeriesCollectionDirective.prototype.getTag = function () {
        return 'e-rangenavigator-series-collection';
    };
    RangenavigatorSeriesCollectionDirective = __decorate$17([
        EJComponentDecorator({}, isExecute$17)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RangenavigatorSeriesCollectionDirective);
    return RangenavigatorSeriesCollectionDirective;
}(vueImport$15));
var RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};
var RangenavigatorSeriesDirective = /** @class */ (function (_super) {
    __extends$17(RangenavigatorSeriesDirective, _super);
    function RangenavigatorSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangenavigatorSeriesDirective.prototype.render = function () {
        return;
    };
    RangenavigatorSeriesDirective.prototype.getTag = function () {
        return 'e-rangenavigator-series';
    };
    RangenavigatorSeriesDirective = __decorate$17([
        EJComponentDecorator({}, isExecute$17)
    ], RangenavigatorSeriesDirective);
    return RangenavigatorSeriesDirective;
}(vueImport$15));
var RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install: function (Vue$$1) {
        Vue$$1.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
};

var __extends$18 = (undefined && undefined.__extends) || (function () {
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
var __decorate$18 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$2 = ['isLazyUpdate', 'plugins', 'allowIntervalData', 'allowSnapping', 'animationDuration', 'background', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName', 'beforePrint', 'beforeResize', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender'];
var modelProps$2 = ['dataSource'];
var testProp$2 = getProps({ props: properties$2 });
var props$2 = testProp$2[0];
var watch$2 = testProp$2[1];
var emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (var _i$2 = 0, modelProps_1$2 = modelProps$2; _i$2 < modelProps_1$2.length; _i$2++) {
    var props_1$2 = modelProps_1$2[_i$2];
    emitProbs$2.push('update:' + props_1$2);
}
var isExecute$18 = gh ? false : true;
/**
 * Represents Vuejs RangeNavigator Component
 * ```vue
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
var RangeNavigatorComponent = /** @class */ (function (_super) {
    __extends$18(RangeNavigatorComponent, _super);
    function RangeNavigatorComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-rangenavigator-series-collection": "e-rangenavigator-series" };
        _this.tagNameMapper = { "e-rangenavigator-series-collection": "e-series" };
        _this.isVue3 = !isExecute$18;
        _this.ej2Instances = new RangeNavigator({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    RangeNavigatorComponent.prototype.clearTemplate = function (templateNames) {
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
    RangeNavigatorComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    RangeNavigatorComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$18) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$18) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$18) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    RangeNavigatorComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    RangeNavigatorComponent.prototype.custom = function () {
        this.updated();
    };
    RangeNavigatorComponent.prototype.createSecondaryElement = function () {
        return this.ej2Instances.createSecondaryElement();
    };
    RangeNavigatorComponent.prototype.export = function (type, fileName, orientation, controls, width, height, isVertical) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
    };
    RangeNavigatorComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    RangeNavigatorComponent.prototype.renderChart = function (resize) {
        return this.ej2Instances.renderChart(resize);
    };
    RangeNavigatorComponent = __decorate$18([
        EJComponentDecorator({
            props: properties$2,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$18)
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
    ], RangeNavigatorComponent);
    return RangeNavigatorComponent;
}(ComponentBase));
var RangeNavigatorPlugin = {
    name: 'ejs-rangenavigator',
    install: function (Vue$$1) {
        Vue$$1.component(RangeNavigatorPlugin.name, RangeNavigatorComponent);
        Vue$$1.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
        Vue$$1.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};

var __extends$19 = (undefined && undefined.__extends) || (function () {
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
var __decorate$19 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$19 = gh ? false : true;
var vueImport$16;
if (!isExecute$19 || parseInt(allVue.version) < 3) {
    vueImport$16 = Vue;
}
else {
    vueImport$16 = Vue$1;
}
var RangeBandSettingsDirective = /** @class */ (function (_super) {
    __extends$19(RangeBandSettingsDirective, _super);
    function RangeBandSettingsDirective() {
        return _super.call(this, arguments) || this;
    }
    RangeBandSettingsDirective.prototype.render = function (createElement) {
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
    RangeBandSettingsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RangeBandSettingsDirective.prototype.getTag = function () {
        return 'e-rangeBandSettings';
    };
    RangeBandSettingsDirective = __decorate$19([
        EJComponentDecorator({}, isExecute$19)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RangeBandSettingsDirective);
    return RangeBandSettingsDirective;
}(vueImport$16));
var RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install: function (Vue$$1) {
        Vue$$1.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};
var RangeBandSettingDirective = /** @class */ (function (_super) {
    __extends$19(RangeBandSettingDirective, _super);
    function RangeBandSettingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeBandSettingDirective.prototype.render = function () {
        return;
    };
    RangeBandSettingDirective.prototype.getTag = function () {
        return 'e-rangeBandSetting';
    };
    RangeBandSettingDirective = __decorate$19([
        EJComponentDecorator({}, isExecute$19)
    ], RangeBandSettingDirective);
    return RangeBandSettingDirective;
}(vueImport$16));
var RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install: function (Vue$$1) {
        Vue$$1.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
};

var __extends$20 = (undefined && undefined.__extends) || (function () {
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
var __decorate$20 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$3 = ['isLazyUpdate', 'plugins', 'axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'rangePadding', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName', 'axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
var modelProps$3 = [];
var testProp$3 = getProps({ props: properties$3 });
var props$3 = testProp$3[0];
var watch$3 = testProp$3[1];
var emitProbs$3 = Object.keys(watch$3);
emitProbs$3.push('modelchanged', 'update:modelValue');
for (var _i$3 = 0, modelProps_1$3 = modelProps$3; _i$3 < modelProps_1$3.length; _i$3++) {
    var props_1$3 = modelProps_1$3[_i$3];
    emitProbs$3.push('update:' + props_1$3);
}
var isExecute$20 = gh ? false : true;
/**
 * Represents Vuejs Sparkline Component
 * ```vue
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
var SparklineComponent = /** @class */ (function (_super) {
    __extends$20(SparklineComponent, _super);
    function SparklineComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-rangeBandSettings": "e-rangeBandSetting" };
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$20;
        _this.ej2Instances = new Sparkline({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SparklineComponent.prototype.clearTemplate = function (templateNames) {
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
    SparklineComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SparklineComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    SparklineComponent.prototype.custom = function () {
        this.updated();
    };
    SparklineComponent.prototype.renderSparkline = function () {
        return this.ej2Instances.renderSparkline();
    };
    SparklineComponent = __decorate$20([
        EJComponentDecorator({
            props: properties$3
        }, isExecute$20)
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
    ], SparklineComponent);
    return SparklineComponent;
}(ComponentBase));
var SparklinePlugin = {
    name: 'ejs-sparkline',
    install: function (Vue$$1) {
        Vue$$1.component(SparklinePlugin.name, SparklineComponent);
        Vue$$1.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
        Vue$$1.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};

var __extends$21 = (undefined && undefined.__extends) || (function () {
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
var __decorate$21 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$21 = gh ? false : true;
var vueImport$17;
if (!isExecute$21 || parseInt(allVue.version) < 3) {
    vueImport$17 = Vue;
}
else {
    vueImport$17 = Vue$1;
}
var SmithchartSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$21(SmithchartSeriesCollectionDirective, _super);
    function SmithchartSeriesCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    SmithchartSeriesCollectionDirective.prototype.render = function (createElement) {
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
    SmithchartSeriesCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    SmithchartSeriesCollectionDirective.prototype.getTag = function () {
        return 'e-seriesCollection';
    };
    SmithchartSeriesCollectionDirective = __decorate$21([
        EJComponentDecorator({}, isExecute$21)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], SmithchartSeriesCollectionDirective);
    return SmithchartSeriesCollectionDirective;
}(vueImport$17));
var SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install: function (Vue$$1) {
        Vue$$1.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};
var SmithchartSeriesDirective = /** @class */ (function (_super) {
    __extends$21(SmithchartSeriesDirective, _super);
    function SmithchartSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmithchartSeriesDirective.prototype.render = function () {
        return;
    };
    SmithchartSeriesDirective.prototype.getTag = function () {
        return 'e-series';
    };
    SmithchartSeriesDirective = __decorate$21([
        EJComponentDecorator({}, isExecute$21)
    ], SmithchartSeriesDirective);
    return SmithchartSeriesDirective;
}(vueImport$17));
var SmithchartSeriesPlugin = {
    name: 'e-series',
    install: function (Vue$$1) {
        Vue$$1.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
};

var __extends$22 = (undefined && undefined.__extends) || (function () {
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
var __decorate$22 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$4 = ['isLazyUpdate', 'plugins', 'background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
var modelProps$4 = [];
var testProp$4 = getProps({ props: properties$4 });
var props$4 = testProp$4[0];
var watch$4 = testProp$4[1];
var emitProbs$4 = Object.keys(watch$4);
emitProbs$4.push('modelchanged', 'update:modelValue');
for (var _i$4 = 0, modelProps_1$4 = modelProps$4; _i$4 < modelProps_1$4.length; _i$4++) {
    var props_1$4 = modelProps_1$4[_i$4];
    emitProbs$4.push('update:' + props_1$4);
}
var isExecute$22 = gh ? false : true;
/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
var SmithchartComponent = /** @class */ (function (_super) {
    __extends$22(SmithchartComponent, _super);
    function SmithchartComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-seriesCollection": "e-series" };
        _this.tagNameMapper = { "e-seriesCollection": "e-series" };
        _this.isVue3 = !isExecute$22;
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
    SmithchartComponent = __decorate$22([
        EJComponentDecorator({
            props: properties$4
        }, isExecute$22)
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
var SmithchartPlugin = {
    name: 'ejs-smithchart',
    install: function (Vue$$1) {
        Vue$$1.component(SmithchartPlugin.name, SmithchartComponent);
        Vue$$1.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
        Vue$$1.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};

var __extends$23 = (undefined && undefined.__extends) || (function () {
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
var __decorate$23 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$23 = gh ? false : true;
var vueImport$18;
if (!isExecute$23 || parseInt(allVue.version) < 3) {
    vueImport$18 = Vue;
}
else {
    vueImport$18 = Vue$1;
}
var StockChartTrendlinesDirective = /** @class */ (function (_super) {
    __extends$23(StockChartTrendlinesDirective, _super);
    function StockChartTrendlinesDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartTrendlinesDirective.prototype.render = function (createElement) {
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
    StockChartTrendlinesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartTrendlinesDirective.prototype.getTag = function () {
        return 'e-trendlines';
    };
    StockChartTrendlinesDirective = __decorate$23([
        EJComponentDecorator({}, isExecute$23)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartTrendlinesDirective);
    return StockChartTrendlinesDirective;
}(vueImport$18));
var StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
};
var StockChartTrendlineDirective = /** @class */ (function (_super) {
    __extends$23(StockChartTrendlineDirective, _super);
    function StockChartTrendlineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartTrendlineDirective.prototype.render = function () {
        return;
    };
    StockChartTrendlineDirective.prototype.getTag = function () {
        return 'e-trendline';
    };
    StockChartTrendlineDirective = __decorate$23([
        EJComponentDecorator({}, isExecute$23)
    ], StockChartTrendlineDirective);
    return StockChartTrendlineDirective;
}(vueImport$18));
var StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
};

var __extends$24 = (undefined && undefined.__extends) || (function () {
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
var __decorate$24 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$24 = gh ? false : true;
var vueImport$19;
if (!isExecute$24 || parseInt(allVue.version) < 3) {
    vueImport$19 = Vue;
}
else {
    vueImport$19 = Vue$1;
}
var StockChartSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$24(StockChartSeriesCollectionDirective, _super);
    function StockChartSeriesCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartSeriesCollectionDirective.prototype.render = function (createElement) {
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
    StockChartSeriesCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartSeriesCollectionDirective.prototype.getTag = function () {
        return 'e-stockchart-series-collection';
    };
    StockChartSeriesCollectionDirective = __decorate$24([
        EJComponentDecorator({}, isExecute$24)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartSeriesCollectionDirective);
    return StockChartSeriesCollectionDirective;
}(vueImport$19));
var StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
};
var StockChartSeriesDirective = /** @class */ (function (_super) {
    __extends$24(StockChartSeriesDirective, _super);
    function StockChartSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSeriesDirective.prototype.render = function () {
        return;
    };
    StockChartSeriesDirective.prototype.getTag = function () {
        return 'e-stockchart-series';
    };
    StockChartSeriesDirective = __decorate$24([
        EJComponentDecorator({}, isExecute$24)
    ], StockChartSeriesDirective);
    return StockChartSeriesDirective;
}(vueImport$19));
var StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
};

var __extends$25 = (undefined && undefined.__extends) || (function () {
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
var __decorate$25 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$25 = gh ? false : true;
var vueImport$20;
if (!isExecute$25 || parseInt(allVue.version) < 3) {
    vueImport$20 = Vue;
}
else {
    vueImport$20 = Vue$1;
}
var StockChartAxesDirective = /** @class */ (function (_super) {
    __extends$25(StockChartAxesDirective, _super);
    function StockChartAxesDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartAxesDirective.prototype.render = function (createElement) {
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
    StockChartAxesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartAxesDirective.prototype.getTag = function () {
        return 'e-stockchart-axes';
    };
    StockChartAxesDirective = __decorate$25([
        EJComponentDecorator({}, isExecute$25)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartAxesDirective);
    return StockChartAxesDirective;
}(vueImport$20));
var StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
};
var StockChartAxisDirective = /** @class */ (function (_super) {
    __extends$25(StockChartAxisDirective, _super);
    function StockChartAxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAxisDirective.prototype.render = function () {
        return;
    };
    StockChartAxisDirective.prototype.getTag = function () {
        return 'e-stockchart-axis';
    };
    StockChartAxisDirective = __decorate$25([
        EJComponentDecorator({}, isExecute$25)
    ], StockChartAxisDirective);
    return StockChartAxisDirective;
}(vueImport$20));
var StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
};

var __extends$26 = (undefined && undefined.__extends) || (function () {
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
var __decorate$26 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$26 = gh ? false : true;
var vueImport$21;
if (!isExecute$26 || parseInt(allVue.version) < 3) {
    vueImport$21 = Vue;
}
else {
    vueImport$21 = Vue$1;
}
var StockChartRowsDirective = /** @class */ (function (_super) {
    __extends$26(StockChartRowsDirective, _super);
    function StockChartRowsDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartRowsDirective.prototype.render = function (createElement) {
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
    StockChartRowsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartRowsDirective.prototype.getTag = function () {
        return 'e-stockchart-rows';
    };
    StockChartRowsDirective = __decorate$26([
        EJComponentDecorator({}, isExecute$26)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartRowsDirective);
    return StockChartRowsDirective;
}(vueImport$21));
var StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
};
var StockChartRowDirective = /** @class */ (function (_super) {
    __extends$26(StockChartRowDirective, _super);
    function StockChartRowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartRowDirective.prototype.render = function () {
        return;
    };
    StockChartRowDirective.prototype.getTag = function () {
        return 'e-stockchart-row';
    };
    StockChartRowDirective = __decorate$26([
        EJComponentDecorator({}, isExecute$26)
    ], StockChartRowDirective);
    return StockChartRowDirective;
}(vueImport$21));
var StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
};

var __extends$27 = (undefined && undefined.__extends) || (function () {
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
var __decorate$27 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$27 = gh ? false : true;
var vueImport$22;
if (!isExecute$27 || parseInt(allVue.version) < 3) {
    vueImport$22 = Vue;
}
else {
    vueImport$22 = Vue$1;
}
var StockChartAnnotationsDirective = /** @class */ (function (_super) {
    __extends$27(StockChartAnnotationsDirective, _super);
    function StockChartAnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartAnnotationsDirective.prototype.render = function (createElement) {
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
    StockChartAnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartAnnotationsDirective.prototype.getTag = function () {
        return 'e-stockchart-annotations';
    };
    StockChartAnnotationsDirective = __decorate$27([
        EJComponentDecorator({}, isExecute$27)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartAnnotationsDirective);
    return StockChartAnnotationsDirective;
}(vueImport$22));
var StockChartAnnotationsPlugin = {
    name: 'e-stockchart-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-stockchart>
 *   <e-stockchart-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
var StockChartAnnotationDirective = /** @class */ (function (_super) {
    __extends$27(StockChartAnnotationDirective, _super);
    function StockChartAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAnnotationDirective.prototype.render = function () {
        return;
    };
    StockChartAnnotationDirective.prototype.getTag = function () {
        return 'e-stockchart-annotation';
    };
    StockChartAnnotationDirective = __decorate$27([
        EJComponentDecorator({}, isExecute$27)
    ], StockChartAnnotationDirective);
    return StockChartAnnotationDirective;
}(vueImport$22));
var StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
};

var __extends$28 = (undefined && undefined.__extends) || (function () {
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
var __decorate$28 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$28 = gh ? false : true;
var vueImport$23;
if (!isExecute$28 || parseInt(allVue.version) < 3) {
    vueImport$23 = Vue;
}
else {
    vueImport$23 = Vue$1;
}
var StockChartSelectedDataIndexesDirective = /** @class */ (function (_super) {
    __extends$28(StockChartSelectedDataIndexesDirective, _super);
    function StockChartSelectedDataIndexesDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartSelectedDataIndexesDirective.prototype.render = function (createElement) {
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
    StockChartSelectedDataIndexesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartSelectedDataIndexesDirective.prototype.getTag = function () {
        return 'e-stockchart-selectedDataIndexes';
    };
    StockChartSelectedDataIndexesDirective = __decorate$28([
        EJComponentDecorator({}, isExecute$28)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartSelectedDataIndexesDirective);
    return StockChartSelectedDataIndexesDirective;
}(vueImport$23));
var StockChartSelectedDataIndexesPlugin = {
    name: 'e-stockchart-selectedDataIndexes',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
    }
};
var StockChartSelectedDataIndexDirective = /** @class */ (function (_super) {
    __extends$28(StockChartSelectedDataIndexDirective, _super);
    function StockChartSelectedDataIndexDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSelectedDataIndexDirective.prototype.render = function () {
        return;
    };
    StockChartSelectedDataIndexDirective.prototype.getTag = function () {
        return 'e-stockchart-selectedDataIndex';
    };
    StockChartSelectedDataIndexDirective = __decorate$28([
        EJComponentDecorator({}, isExecute$28)
    ], StockChartSelectedDataIndexDirective);
    return StockChartSelectedDataIndexDirective;
}(vueImport$23));
var StockChartSelectedDataIndexPlugin = {
    name: 'e-stockchart-selectedDataIndex',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
    }
};

var __extends$29 = (undefined && undefined.__extends) || (function () {
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
var __decorate$29 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$29 = gh ? false : true;
var vueImport$24;
if (!isExecute$29 || parseInt(allVue.version) < 3) {
    vueImport$24 = Vue;
}
else {
    vueImport$24 = Vue$1;
}
var StockChartPeriodsDirective = /** @class */ (function (_super) {
    __extends$29(StockChartPeriodsDirective, _super);
    function StockChartPeriodsDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartPeriodsDirective.prototype.render = function (createElement) {
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
    StockChartPeriodsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartPeriodsDirective.prototype.getTag = function () {
        return 'e-stockchart-periods';
    };
    StockChartPeriodsDirective = __decorate$29([
        EJComponentDecorator({}, isExecute$29)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartPeriodsDirective);
    return StockChartPeriodsDirective;
}(vueImport$24));
var StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
};
var StockChartPeriodDirective = /** @class */ (function (_super) {
    __extends$29(StockChartPeriodDirective, _super);
    function StockChartPeriodDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartPeriodDirective.prototype.render = function () {
        return;
    };
    StockChartPeriodDirective.prototype.getTag = function () {
        return 'e-stockchart-period';
    };
    StockChartPeriodDirective = __decorate$29([
        EJComponentDecorator({}, isExecute$29)
    ], StockChartPeriodDirective);
    return StockChartPeriodDirective;
}(vueImport$24));
var StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
};

var __extends$30 = (undefined && undefined.__extends) || (function () {
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
var __decorate$30 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$30 = gh ? false : true;
var vueImport$25;
if (!isExecute$30 || parseInt(allVue.version) < 3) {
    vueImport$25 = Vue;
}
else {
    vueImport$25 = Vue$1;
}
var StockEventsDirective = /** @class */ (function (_super) {
    __extends$30(StockEventsDirective, _super);
    function StockEventsDirective() {
        return _super.call(this, arguments) || this;
    }
    StockEventsDirective.prototype.render = function (createElement) {
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
    StockEventsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockEventsDirective.prototype.getTag = function () {
        return 'e-stockchart-stockevents';
    };
    StockEventsDirective = __decorate$30([
        EJComponentDecorator({}, isExecute$30)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockEventsDirective);
    return StockEventsDirective;
}(vueImport$25));
var StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install: function (Vue$$1) {
        Vue$$1.component(StockEventsPlugin.name, StockEventsDirective);
    }
};
var StockEventDirective = /** @class */ (function (_super) {
    __extends$30(StockEventDirective, _super);
    function StockEventDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockEventDirective.prototype.render = function () {
        return;
    };
    StockEventDirective.prototype.getTag = function () {
        return 'e-stockchart-stockevent';
    };
    StockEventDirective = __decorate$30([
        EJComponentDecorator({}, isExecute$30)
    ], StockEventDirective);
    return StockEventDirective;
}(vueImport$25));
var StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install: function (Vue$$1) {
        Vue$$1.component(StockEventPlugin.name, StockEventDirective);
    }
};

var __extends$31 = (undefined && undefined.__extends) || (function () {
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
var __decorate$31 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$31 = gh ? false : true;
var vueImport$26;
if (!isExecute$31 || parseInt(allVue.version) < 3) {
    vueImport$26 = Vue;
}
else {
    vueImport$26 = Vue$1;
}
var StockChartIndicatorsDirective = /** @class */ (function (_super) {
    __extends$31(StockChartIndicatorsDirective, _super);
    function StockChartIndicatorsDirective() {
        return _super.call(this, arguments) || this;
    }
    StockChartIndicatorsDirective.prototype.render = function (createElement) {
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
    StockChartIndicatorsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StockChartIndicatorsDirective.prototype.getTag = function () {
        return 'e-stockchart-indicators';
    };
    StockChartIndicatorsDirective = __decorate$31([
        EJComponentDecorator({}, isExecute$31)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StockChartIndicatorsDirective);
    return StockChartIndicatorsDirective;
}(vueImport$26));
var StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};
var StockChartIndicatorDirective = /** @class */ (function (_super) {
    __extends$31(StockChartIndicatorDirective, _super);
    function StockChartIndicatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartIndicatorDirective.prototype.render = function () {
        return;
    };
    StockChartIndicatorDirective.prototype.getTag = function () {
        return 'e-stockchart-indicator';
    };
    StockChartIndicatorDirective = __decorate$31([
        EJComponentDecorator({}, isExecute$31)
    ], StockChartIndicatorDirective);
    return StockChartIndicatorDirective;
}(vueImport$26));
var StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
};

var __extends$32 = (undefined && undefined.__extends) || (function () {
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
var __decorate$32 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$5 = ['isLazyUpdate', 'plugins', 'annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings', 'axisLabelRender', 'legendClick', 'legendRender', 'load', 'loaded', 'onZooming', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender'];
var modelProps$5 = ['dataSource'];
var testProp$5 = getProps({ props: properties$5 });
var props$5 = testProp$5[0];
var watch$5 = testProp$5[1];
var emitProbs$5 = Object.keys(watch$5);
emitProbs$5.push('modelchanged', 'update:modelValue');
for (var _i$5 = 0, modelProps_1$5 = modelProps$5; _i$5 < modelProps_1$5.length; _i$5++) {
    var props_1$5 = modelProps_1$5[_i$5];
    emitProbs$5.push('update:' + props_1$5);
}
var isExecute$32 = gh ? false : true;
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
var StockChartComponent = /** @class */ (function (_super) {
    __extends$32(StockChartComponent, _super);
    function StockChartComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$5;
        _this.models = modelProps$5;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-stockchart-series-collection": { "e-stockchart-series": { "e-trendlines": "e-trendline" } }, "e-stockchart-axes": "e-stockchart-axis", "e-stockchart-rows": "e-stockchart-row", "e-stockchart-annotations": "e-stockchart-annotation", "e-stockchart-selectedDataIndexes": "e-stockchart-selectedDataIndex", "e-stockchart-periods": "e-stockchart-period", "e-stockchart-stockevents": "e-stockchart-stockevent", "e-stockchart-indicators": "e-stockchart-indicator" };
        _this.tagNameMapper = { "e-stockchart-series-collection": "e-series", "e-stockchart-axes": "e-axes", "e-stockchart-rows": "e-rows", "e-stockchart-annotations": "e-annotations", "e-stockchart-selectedDataIndexes": "e-selectedDataIndexes", "e-stockchart-periods": "e-periods", "e-stockchart-stockevents": "e-stockEvents", "e-stockchart-indicators": "e-indicators" };
        _this.isVue3 = !isExecute$32;
        _this.ej2Instances = new StockChart({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    StockChartComponent.prototype.clearTemplate = function (templateNames) {
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
    StockChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    StockChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$32) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$32) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$32) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    StockChartComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    StockChartComponent.prototype.custom = function () {
        this.updated();
    };
    StockChartComponent.prototype.chartModuleInjection = function () {
        return this.ej2Instances.chartModuleInjection();
    };
    StockChartComponent.prototype.findCurrentData = function (totalData, xName) {
        return this.ej2Instances.findCurrentData(totalData, xName);
    };
    StockChartComponent.prototype.rangeChanged = function (updatedStart, updatedEnd) {
        return this.ej2Instances.rangeChanged(updatedStart, updatedEnd);
    };
    StockChartComponent.prototype.renderPeriodSelector = function () {
        return this.ej2Instances.renderPeriodSelector();
    };
    StockChartComponent.prototype.stockChartDataManagerSuccess = function () {
        return this.ej2Instances.stockChartDataManagerSuccess();
    };
    StockChartComponent = __decorate$32([
        EJComponentDecorator({
            props: properties$5,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$32)
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
    ], StockChartComponent);
    return StockChartComponent;
}(ComponentBase));
var StockChartPlugin = {
    name: 'ejs-stockchart',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartPlugin.name, StockChartComponent);
        Vue$$1.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
        Vue$$1.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
        Vue$$1.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
        Vue$$1.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
        Vue$$1.component(StockChartAxisPlugin.name, StockChartAxisDirective);
        Vue$$1.component(StockChartAxesPlugin.name, StockChartAxesDirective);
        Vue$$1.component(StockChartRowPlugin.name, StockChartRowDirective);
        Vue$$1.component(StockChartRowsPlugin.name, StockChartRowsDirective);
        Vue$$1.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
        Vue$$1.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
        Vue$$1.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
        Vue$$1.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
        Vue$$1.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
        Vue$$1.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
        Vue$$1.component(StockEventPlugin.name, StockEventDirective);
        Vue$$1.component(StockEventsPlugin.name, StockEventsDirective);
        Vue$$1.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
        Vue$$1.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};

var __extends$33 = (undefined && undefined.__extends) || (function () {
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
var __decorate$33 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$33 = gh ? false : true;
var vueImport$27;
if (!isExecute$33 || parseInt(allVue.version) < 3) {
    vueImport$27 = Vue;
}
else {
    vueImport$27 = Vue$1;
}
var BulletRangeCollectionDirective = /** @class */ (function (_super) {
    __extends$33(BulletRangeCollectionDirective, _super);
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
    BulletRangeCollectionDirective = __decorate$33([
        EJComponentDecorator({}, isExecute$33)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], BulletRangeCollectionDirective);
    return BulletRangeCollectionDirective;
}(vueImport$27));
var BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install: function (Vue$$1) {
        Vue$$1.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};
var BulletRangeDirective = /** @class */ (function (_super) {
    __extends$33(BulletRangeDirective, _super);
    function BulletRangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulletRangeDirective.prototype.render = function () {
        return;
    };
    BulletRangeDirective.prototype.getTag = function () {
        return 'e-bullet-range';
    };
    BulletRangeDirective = __decorate$33([
        EJComponentDecorator({}, isExecute$33)
    ], BulletRangeDirective);
    return BulletRangeDirective;
}(vueImport$27));
var BulletRangePlugin = {
    name: 'e-bullet-range',
    install: function (Vue$$1) {
        Vue$$1.component(BulletRangePlugin.name, BulletRangeDirective);
    }
};

var __extends$34 = (undefined && undefined.__extends) || (function () {
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
var __decorate$34 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$6 = ['isLazyUpdate', 'plugins', 'animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'legendSettings', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width', 'beforePrint', 'bulletChartMouseClick', 'legendRender', 'load', 'loaded', 'tooltipRender'];
var modelProps$6 = ['dataSource'];
var testProp$6 = getProps({ props: properties$6 });
var props$6 = testProp$6[0];
var watch$6 = testProp$6[1];
var emitProbs$6 = Object.keys(watch$6);
emitProbs$6.push('modelchanged', 'update:modelValue');
for (var _i$6 = 0, modelProps_1$6 = modelProps$6; _i$6 < modelProps_1$6.length; _i$6++) {
    var props_1$6 = modelProps_1$6[_i$6];
    emitProbs$6.push('update:' + props_1$6);
}
var isExecute$34 = gh ? false : true;
/**
 * Represents Vuejs BulletChart Component
 * ```vue
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
var BulletChartComponent = /** @class */ (function (_super) {
    __extends$34(BulletChartComponent, _super);
    function BulletChartComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$6;
        _this.models = modelProps$6;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-bullet-range-collection": "e-bullet-range" };
        _this.tagNameMapper = { "e-bullet-range-collection": "e-ranges" };
        _this.isVue3 = !isExecute$34;
        _this.ej2Instances = new BulletChart({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    BulletChartComponent.prototype.clearTemplate = function (templateNames) {
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
    BulletChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    BulletChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$34) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$34) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$34) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    BulletChartComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    BulletChartComponent.prototype.custom = function () {
        this.updated();
    };
    BulletChartComponent.prototype.createSvg = function (chart) {
        return this.ej2Instances.createSvg(chart);
    };
    BulletChartComponent.prototype.export = function (type, fileName, orientation, controls, width, height, isVertical) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
    };
    BulletChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    BulletChartComponent.prototype.removeSvg = function () {
        return this.ej2Instances.removeSvg();
    };
    BulletChartComponent = __decorate$34([
        EJComponentDecorator({
            props: properties$6,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$34)
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
    ], BulletChartComponent);
    return BulletChartComponent;
}(ComponentBase));
var BulletChartPlugin = {
    name: 'ejs-bulletchart',
    install: function (Vue$$1) {
        Vue$$1.component(BulletChartPlugin.name, BulletChartComponent);
        Vue$$1.component(BulletRangePlugin.name, BulletRangeDirective);
        Vue$$1.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};

export { TrendlinesDirective, TrendlineDirective, TrendlinesPlugin, TrendlinePlugin, SegmentsDirective, SegmentDirective, SegmentsPlugin, SegmentPlugin, SeriesCollectionDirective, SeriesDirective, SeriesCollectionPlugin, SeriesPlugin, StripLinesDirective, StripLineDirective, StripLinesPlugin, StripLinePlugin, CategoriesDirective, CategoryDirective, CategoriesPlugin, CategoryPlugin, MultiLevelLabelsDirective, MultiLevelLabelDirective, MultiLevelLabelsPlugin, MultiLevelLabelPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, RangeColorSettingsDirective, RangeColorSettingDirective, RangeColorSettingsPlugin, RangeColorSettingPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, SelectedDataIndexesDirective, SelectedDataIndexDirective, SelectedDataIndexesPlugin, SelectedDataIndexPlugin, IndicatorsDirective, IndicatorDirective, IndicatorsPlugin, IndicatorPlugin, ChartComponent, ChartPlugin, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesPlugin, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationAnnotationsPlugin, AccumulationAnnotationPlugin, AccumulationChartComponent, AccumulationChartPlugin, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesPlugin, RangeNavigatorComponent, RangeNavigatorPlugin, RangeBandSettingsDirective, RangeBandSettingDirective, RangeBandSettingsPlugin, RangeBandSettingPlugin, SparklineComponent, SparklinePlugin, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin, SmithchartComponent, SmithchartPlugin, StockChartTrendlinesDirective, StockChartTrendlineDirective, StockChartTrendlinesPlugin, StockChartTrendlinePlugin, StockChartSeriesCollectionDirective, StockChartSeriesDirective, StockChartSeriesCollectionPlugin, StockChartSeriesPlugin, StockChartAxesDirective, StockChartAxisDirective, StockChartAxesPlugin, StockChartAxisPlugin, StockChartRowsDirective, StockChartRowDirective, StockChartRowsPlugin, StockChartRowPlugin, StockChartAnnotationsDirective, StockChartAnnotationDirective, StockChartAnnotationsPlugin, StockChartAnnotationPlugin, StockChartSelectedDataIndexesDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesPlugin, StockChartSelectedDataIndexPlugin, StockChartPeriodsDirective, StockChartPeriodDirective, StockChartPeriodsPlugin, StockChartPeriodPlugin, StockEventsDirective, StockEventDirective, StockEventsPlugin, StockEventPlugin, StockChartIndicatorsDirective, StockChartIndicatorDirective, StockChartIndicatorsPlugin, StockChartIndicatorPlugin, StockChartComponent, StockChartPlugin, BulletRangeCollectionDirective, BulletRangeDirective, BulletRangeCollectionPlugin, BulletRangePlugin, BulletChartComponent, BulletChartPlugin };
export * from '@syncfusion/ej2-charts';
//# sourceMappingURL=ej2-vue-charts.es5.js.map
