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
import { Property, ChildProperty, Complex } from '@syncfusion/ej2-base';
/**
 * Sets and gets the options to customize the color and width of the borders in circular gauge.
 */
var Border = /** @class */ (function (_super) {
    __extends(Border, _super);
    function Border() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('')
    ], Border.prototype, "color", void 0);
    __decorate([
        Property(1)
    ], Border.prototype, "width", void 0);
    __decorate([
        Property('')
    ], Border.prototype, "dashArray", void 0);
    return Border;
}(ChildProperty));
export { Border };
/**
 * Sets and gets the font style for the circular gauge.
 */
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('16px')
    ], Font.prototype, "size", void 0);
    __decorate([
        Property('')
    ], Font.prototype, "color", void 0);
    __decorate([
        Property('segoe UI')
    ], Font.prototype, "fontFamily", void 0);
    __decorate([
        Property('Normal')
    ], Font.prototype, "fontWeight", void 0);
    __decorate([
        Property('Normal')
    ], Font.prototype, "fontStyle", void 0);
    __decorate([
        Property(1)
    ], Font.prototype, "opacity", void 0);
    return Font;
}(ChildProperty));
export { Font };
/**
 * Sets and gets the options to customize the tooltip properties for range tooltip.
 */
var RangeTooltip = /** @class */ (function (_super) {
    __extends(RangeTooltip, _super);
    function RangeTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], RangeTooltip.prototype, "fill", void 0);
    __decorate([
        Complex({ size: '13px' }, Font)
    ], RangeTooltip.prototype, "textStyle", void 0);
    __decorate([
        Property(null)
    ], RangeTooltip.prototype, "format", void 0);
    __decorate([
        Property(null)
    ], RangeTooltip.prototype, "template", void 0);
    __decorate([
        Property(true)
    ], RangeTooltip.prototype, "enableAnimation", void 0);
    __decorate([
        Complex({}, Border)
    ], RangeTooltip.prototype, "border", void 0);
    __decorate([
        Property(false)
    ], RangeTooltip.prototype, "showAtMousePosition", void 0);
    return RangeTooltip;
}(ChildProperty));
export { RangeTooltip };
/**
 * Sets and gets the options to customize the tooltip for annotation in circular gauge.
 */
var AnnotationTooltip = /** @class */ (function (_super) {
    __extends(AnnotationTooltip, _super);
    function AnnotationTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], AnnotationTooltip.prototype, "fill", void 0);
    __decorate([
        Complex({ size: '13px' }, Font)
    ], AnnotationTooltip.prototype, "textStyle", void 0);
    __decorate([
        Property(null)
    ], AnnotationTooltip.prototype, "format", void 0);
    __decorate([
        Property(null)
    ], AnnotationTooltip.prototype, "template", void 0);
    __decorate([
        Property(true)
    ], AnnotationTooltip.prototype, "enableAnimation", void 0);
    __decorate([
        Complex({}, Border)
    ], AnnotationTooltip.prototype, "border", void 0);
    return AnnotationTooltip;
}(ChildProperty));
export { AnnotationTooltip };
/**
 * Sets and gets the margin of circular gauge.
 */
var Margin = /** @class */ (function (_super) {
    __extends(Margin, _super);
    function Margin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(10)
    ], Margin.prototype, "left", void 0);
    __decorate([
        Property(10)
    ], Margin.prototype, "right", void 0);
    __decorate([
        Property(10)
    ], Margin.prototype, "top", void 0);
    __decorate([
        Property(10)
    ], Margin.prototype, "bottom", void 0);
    return Margin;
}(ChildProperty));
export { Margin };
/**
 * Sets and gets the options to customize the tooltip of the circular gauge.
 */
var TooltipSettings = /** @class */ (function (_super) {
    __extends(TooltipSettings, _super);
    function TooltipSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], TooltipSettings.prototype, "enable", void 0);
    __decorate([
        Property(null)
    ], TooltipSettings.prototype, "fill", void 0);
    __decorate([
        Complex({ size: '13px' }, Font)
    ], TooltipSettings.prototype, "textStyle", void 0);
    __decorate([
        Complex({}, RangeTooltip)
    ], TooltipSettings.prototype, "rangeSettings", void 0);
    __decorate([
        Complex({}, AnnotationTooltip)
    ], TooltipSettings.prototype, "annotationSettings", void 0);
    __decorate([
        Property(null)
    ], TooltipSettings.prototype, "format", void 0);
    __decorate([
        Property(null)
    ], TooltipSettings.prototype, "template", void 0);
    __decorate([
        Property(true)
    ], TooltipSettings.prototype, "enableAnimation", void 0);
    __decorate([
        Complex({}, Border)
    ], TooltipSettings.prototype, "border", void 0);
    __decorate([
        Property(false)
    ], TooltipSettings.prototype, "showAtMousePosition", void 0);
    __decorate([
        Property('Pointer')
    ], TooltipSettings.prototype, "type", void 0);
    return TooltipSettings;
}(ChildProperty));
export { TooltipSettings };
