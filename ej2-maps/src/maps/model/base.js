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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Maps base document
 */
import { Property, ChildProperty, Complex, Collection } from '@syncfusion/ej2-base';
import { Theme } from './theme';
import { Point } from '../utils/helper';
/**
 * Sets and gets the options for customizing the annotation element in maps.
 */
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('')
    ], Annotation.prototype, "content", void 0);
    __decorate([
        Property('0px')
    ], Annotation.prototype, "x", void 0);
    __decorate([
        Property('0px')
    ], Annotation.prototype, "y", void 0);
    __decorate([
        Property('None')
    ], Annotation.prototype, "verticalAlignment", void 0);
    __decorate([
        Property('None')
    ], Annotation.prototype, "horizontalAlignment", void 0);
    __decorate([
        Property('-1')
    ], Annotation.prototype, "zIndex", void 0);
    return Annotation;
}(ChildProperty));
export { Annotation };
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('Start')
    ], Arrow.prototype, "position", void 0);
    __decorate([
        Property('false')
    ], Arrow.prototype, "showArrow", void 0);
    __decorate([
        Property(2)
    ], Arrow.prototype, "size", void 0);
    __decorate([
        Property('black')
    ], Arrow.prototype, "color", void 0);
    __decorate([
        Property(0)
    ], Arrow.prototype, "offSet", void 0);
    return Arrow;
}(ChildProperty));
export { Arrow };
/**
 * Sets and gets the options to customize the style of the text in data label, legend and other texts.
 */
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('12px')
    ], Font.prototype, "size", void 0);
    __decorate([
        Property(null)
    ], Font.prototype, "color", void 0);
    __decorate([
        Property('Roboto, Noto, Sans-serif')
    ], Font.prototype, "fontFamily", void 0);
    __decorate([
        Property('Medium')
    ], Font.prototype, "fontWeight", void 0);
    __decorate([
        Property('Medium')
    ], Font.prototype, "fontStyle", void 0);
    __decorate([
        Property(1)
    ], Font.prototype, "opacity", void 0);
    return Font;
}(ChildProperty));
export { Font };
/**
 * Sets and gets the options to customize the border for the maps.
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
        Property(0)
    ], Border.prototype, "width", void 0);
    __decorate([
        Property(null)
    ], Border.prototype, "opacity", void 0);
    return Border;
}(ChildProperty));
export { Border };
/**
 * Sets and gets the center position in maps.
 */
var CenterPosition = /** @class */ (function (_super) {
    __extends(CenterPosition, _super);
    function CenterPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], CenterPosition.prototype, "latitude", void 0);
    __decorate([
        Property(null)
    ], CenterPosition.prototype, "longitude", void 0);
    return CenterPosition;
}(ChildProperty));
export { CenterPosition };
/**
 * Sets and gets the options to customize the tooltip for layers, markers, and bubble in maps.
 */
var TooltipSettings = /** @class */ (function (_super) {
    __extends(TooltipSettings, _super);
    function TooltipSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], TooltipSettings.prototype, "visible", void 0);
    __decorate([
        Property('')
    ], TooltipSettings.prototype, "template", void 0);
    __decorate([
        Property('')
    ], TooltipSettings.prototype, "fill", void 0);
    __decorate([
        Complex({ color: 'transparent', width: 1 }, Border)
    ], TooltipSettings.prototype, "border", void 0);
    __decorate([
        Complex(Theme.tooltipLabelFont, Font)
    ], TooltipSettings.prototype, "textStyle", void 0);
    __decorate([
        Property(null)
    ], TooltipSettings.prototype, "format", void 0);
    __decorate([
        Property(null)
    ], TooltipSettings.prototype, "valuePath", void 0);
    return TooltipSettings;
}(ChildProperty));
export { TooltipSettings };
/**
 * Sets and gets the margin for the maps component.
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
/*
 * Sets and gets the options to customize the line that connects the markers in marker cluster in maps.
 */
var ConnectorLineSettings = /** @class */ (function (_super) {
    __extends(ConnectorLineSettings, _super);
    function ConnectorLineSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('#000000')
    ], ConnectorLineSettings.prototype, "color", void 0);
    __decorate([
        Property(1)
    ], ConnectorLineSettings.prototype, "width", void 0);
    __decorate([
        Property(1)
    ], ConnectorLineSettings.prototype, "opacity", void 0);
    return ConnectorLineSettings;
}(ChildProperty));
export { ConnectorLineSettings };
/**
 * Sets and gets the options to customize the cluster of markers in Maps.
 */
var MarkerClusterSettings = /** @class */ (function (_super) {
    __extends(MarkerClusterSettings, _super);
    function MarkerClusterSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], MarkerClusterSettings.prototype, "allowClustering", void 0);
    __decorate([
        Complex({ color: 'transparent', width: 1 }, Border)
    ], MarkerClusterSettings.prototype, "border", void 0);
    __decorate([
        Property('#D2691E')
    ], MarkerClusterSettings.prototype, "fill", void 0);
    __decorate([
        Property(1)
    ], MarkerClusterSettings.prototype, "opacity", void 0);
    __decorate([
        Property('Rectangle')
    ], MarkerClusterSettings.prototype, "shape", void 0);
    __decorate([
        Property(12)
    ], MarkerClusterSettings.prototype, "width", void 0);
    __decorate([
        Property(12)
    ], MarkerClusterSettings.prototype, "height", void 0);
    __decorate([
        Property(new Point(0, 0))
    ], MarkerClusterSettings.prototype, "offset", void 0);
    __decorate([
        Property('')
    ], MarkerClusterSettings.prototype, "imageUrl", void 0);
    __decorate([
        Property('')
    ], MarkerClusterSettings.prototype, "dashArray", void 0);
    __decorate([
        Complex({}, Font)
    ], MarkerClusterSettings.prototype, "labelStyle", void 0);
    __decorate([
        Property(false)
    ], MarkerClusterSettings.prototype, "allowClusterExpand", void 0);
    __decorate([
        Complex({}, ConnectorLineSettings)
    ], MarkerClusterSettings.prototype, "connectorLineSettings", void 0);
    return MarkerClusterSettings;
}(ChildProperty));
export { MarkerClusterSettings };
/**
 * Sets and gets the data in the marker cluster.
 */
var MarkerClusterData = /** @class */ (function (_super) {
    __extends(MarkerClusterData, _super);
    function MarkerClusterData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarkerClusterData;
}(ChildProperty));
export { MarkerClusterData };
/**
 * Sets and gets the options to customize the color-mapping in maps.
 */
var ColorMappingSettings = /** @class */ (function (_super) {
    __extends(ColorMappingSettings, _super);
    function ColorMappingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "from", void 0);
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "to", void 0);
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "value", void 0);
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "color", void 0);
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "minOpacity", void 0);
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "maxOpacity", void 0);
    __decorate([
        Property(null)
    ], ColorMappingSettings.prototype, "label", void 0);
    __decorate([
        Property(true)
    ], ColorMappingSettings.prototype, "showLegend", void 0);
    return ColorMappingSettings;
}(ChildProperty));
export { ColorMappingSettings };
/**
 * To configure the initial marker shape selection settings
 */
var InitialMarkerSelectionSettings = /** @class */ (function (_super) {
    __extends(InitialMarkerSelectionSettings, _super);
    function InitialMarkerSelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], InitialMarkerSelectionSettings.prototype, "latitude", void 0);
    __decorate([
        Property(null)
    ], InitialMarkerSelectionSettings.prototype, "longitude", void 0);
    return InitialMarkerSelectionSettings;
}(ChildProperty));
export { InitialMarkerSelectionSettings };
/**
 * Sets and gets the shapes that is selected initially on rendering the maps.
 */
var InitialShapeSelectionSettings = /** @class */ (function (_super) {
    __extends(InitialShapeSelectionSettings, _super);
    function InitialShapeSelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], InitialShapeSelectionSettings.prototype, "shapePath", void 0);
    __decorate([
        Property(null)
    ], InitialShapeSelectionSettings.prototype, "shapeValue", void 0);
    return InitialShapeSelectionSettings;
}(ChildProperty));
export { InitialShapeSelectionSettings };
/**
 * Sets and gets the options to customize the maps on selecting the shapes.
 */
var SelectionSettings = /** @class */ (function (_super) {
    __extends(SelectionSettings, _super);
    function SelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], SelectionSettings.prototype, "enable", void 0);
    __decorate([
        Property(null)
    ], SelectionSettings.prototype, "fill", void 0);
    __decorate([
        Property(1)
    ], SelectionSettings.prototype, "opacity", void 0);
    __decorate([
        Property(false)
    ], SelectionSettings.prototype, "enableMultiSelect", void 0);
    __decorate([
        Complex({ color: 'transparent', width: 0 }, Border)
    ], SelectionSettings.prototype, "border", void 0);
    return SelectionSettings;
}(ChildProperty));
export { SelectionSettings };
/**
 * Sets and gets the options to customize the shapes on which the mouse has hovered in maps.
 */
var HighlightSettings = /** @class */ (function (_super) {
    __extends(HighlightSettings, _super);
    function HighlightSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], HighlightSettings.prototype, "fill", void 0);
    __decorate([
        Property(false)
    ], HighlightSettings.prototype, "enable", void 0);
    __decorate([
        Property(1)
    ], HighlightSettings.prototype, "opacity", void 0);
    __decorate([
        Complex({ color: 'transparent', width: 0 }, Border)
    ], HighlightSettings.prototype, "border", void 0);
    return HighlightSettings;
}(ChildProperty));
export { HighlightSettings };
/**
 * Sets and gets the options to customize the navigation line in maps.
 */
var NavigationLineSettings = /** @class */ (function (_super) {
    __extends(NavigationLineSettings, _super);
    function NavigationLineSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], NavigationLineSettings.prototype, "visible", void 0);
    __decorate([
        Property(1)
    ], NavigationLineSettings.prototype, "width", void 0);
    __decorate([
        Property(null)
    ], NavigationLineSettings.prototype, "longitude", void 0);
    __decorate([
        Property(null)
    ], NavigationLineSettings.prototype, "latitude", void 0);
    __decorate([
        Property('')
    ], NavigationLineSettings.prototype, "dashArray", void 0);
    __decorate([
        Property('black')
    ], NavigationLineSettings.prototype, "color", void 0);
    __decorate([
        Property(0)
    ], NavigationLineSettings.prototype, "angle", void 0);
    __decorate([
        Complex({ showArrow: false, position: 'Start', size: 5, color: 'black' }, Arrow)
    ], NavigationLineSettings.prototype, "arrowSettings", void 0);
    __decorate([
        Complex({}, SelectionSettings)
    ], NavigationLineSettings.prototype, "selectionSettings", void 0);
    __decorate([
        Complex({}, HighlightSettings)
    ], NavigationLineSettings.prototype, "highlightSettings", void 0);
    return NavigationLineSettings;
}(ChildProperty));
export { NavigationLineSettings };
/**
 * Sets and gets the options to customize the bubble elements in maps.
 */
var BubbleSettings = /** @class */ (function (_super) {
    __extends(BubbleSettings, _super);
    function BubbleSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Complex({}, Border)
    ], BubbleSettings.prototype, "border", void 0);
    __decorate([
        Property(false)
    ], BubbleSettings.prototype, "visible", void 0);
    __decorate([
        Property([])
    ], BubbleSettings.prototype, "dataSource", void 0);
    __decorate([
        Property()
    ], BubbleSettings.prototype, "query", void 0);
    __decorate([
        Property(1000)
    ], BubbleSettings.prototype, "animationDuration", void 0);
    __decorate([
        Property(0)
    ], BubbleSettings.prototype, "animationDelay", void 0);
    __decorate([
        Property('')
    ], BubbleSettings.prototype, "fill", void 0);
    __decorate([
        Property(10)
    ], BubbleSettings.prototype, "minRadius", void 0);
    __decorate([
        Property(20)
    ], BubbleSettings.prototype, "maxRadius", void 0);
    __decorate([
        Property(1)
    ], BubbleSettings.prototype, "opacity", void 0);
    __decorate([
        Property(null)
    ], BubbleSettings.prototype, "valuePath", void 0);
    __decorate([
        Property('Circle')
    ], BubbleSettings.prototype, "bubbleType", void 0);
    __decorate([
        Property(null)
    ], BubbleSettings.prototype, "colorValuePath", void 0);
    __decorate([
        Collection([], ColorMappingSettings)
    ], BubbleSettings.prototype, "colorMapping", void 0);
    __decorate([
        Complex({}, TooltipSettings)
    ], BubbleSettings.prototype, "tooltipSettings", void 0);
    __decorate([
        Complex({}, SelectionSettings)
    ], BubbleSettings.prototype, "selectionSettings", void 0);
    __decorate([
        Complex({}, HighlightSettings)
    ], BubbleSettings.prototype, "highlightSettings", void 0);
    return BubbleSettings;
}(ChildProperty));
export { BubbleSettings };
/**
 * Sets and gets the title for the maps.
 */
var CommonTitleSettings = /** @class */ (function (_super) {
    __extends(CommonTitleSettings, _super);
    function CommonTitleSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('')
    ], CommonTitleSettings.prototype, "text", void 0);
    __decorate([
        Property('')
    ], CommonTitleSettings.prototype, "description", void 0);
    return CommonTitleSettings;
}(ChildProperty));
export { CommonTitleSettings };
/**
 * Sets and gets the subtitle for maps.
 */
var SubTitleSettings = /** @class */ (function (_super) {
    __extends(SubTitleSettings, _super);
    function SubTitleSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Complex({ size: null, fontWeight: null, fontFamily: null }, Font)
    ], SubTitleSettings.prototype, "textStyle", void 0);
    __decorate([
        Property('Center')
    ], SubTitleSettings.prototype, "alignment", void 0);
    return SubTitleSettings;
}(CommonTitleSettings));
export { SubTitleSettings };
/**
 * Sets and gets the title for the maps.
 */
var TitleSettings = /** @class */ (function (_super) {
    __extends(TitleSettings, _super);
    function TitleSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Complex({ size: null, fontWeight: null, fontFamily: null }, Font)
    ], TitleSettings.prototype, "textStyle", void 0);
    __decorate([
        Property('Center')
    ], TitleSettings.prototype, "alignment", void 0);
    __decorate([
        Complex({}, SubTitleSettings)
    ], TitleSettings.prototype, "subtitleSettings", void 0);
    return TitleSettings;
}(CommonTitleSettings));
export { TitleSettings };
/**
 * Sets and gets the options to configure maps zooming operations.
 */
var ZoomSettings = /** @class */ (function (_super) {
    __extends(ZoomSettings, _super);
    function ZoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], ZoomSettings.prototype, "enable", void 0);
    __decorate([
        Property(true)
    ], ZoomSettings.prototype, "enablePanning", void 0);
    __decorate([
        Property(true)
    ], ZoomSettings.prototype, "enableSelectionZooming", void 0);
    __decorate([
        Property('Horizontal')
    ], ZoomSettings.prototype, "toolBarOrientation", void 0);
    __decorate([
        Property(null)
    ], ZoomSettings.prototype, "color", void 0);
    __decorate([
        Property(null)
    ], ZoomSettings.prototype, "highlightColor", void 0);
    __decorate([
        Property(null)
    ], ZoomSettings.prototype, "selectionColor", void 0);
    __decorate([
        Property('Far')
    ], ZoomSettings.prototype, "horizontalAlignment", void 0);
    __decorate([
        Property('Near')
    ], ZoomSettings.prototype, "verticalAlignment", void 0);
    __decorate([
        Property(['ZoomIn', 'ZoomOut', 'Reset'])
    ], ZoomSettings.prototype, "toolbars", void 0);
    __decorate([
        Property(true)
    ], ZoomSettings.prototype, "mouseWheelZoom", void 0);
    __decorate([
        Property(false)
    ], ZoomSettings.prototype, "doubleClickZoom", void 0);
    __decorate([
        Property(false)
    ], ZoomSettings.prototype, "pinchZooming", void 0);
    __decorate([
        Property(false)
    ], ZoomSettings.prototype, "zoomOnClick", void 0);
    __decorate([
        Property(1)
    ], ZoomSettings.prototype, "zoomFactor", void 0);
    __decorate([
        Property(10)
    ], ZoomSettings.prototype, "maxZoom", void 0);
    __decorate([
        Property(1)
    ], ZoomSettings.prototype, "minZoom", void 0);
    __decorate([
        Property(false)
    ], ZoomSettings.prototype, "shouldZoomInitially", void 0);
    __decorate([
        Property(true)
    ], ZoomSettings.prototype, "resetToInitial", void 0);
    return ZoomSettings;
}(ChildProperty));
export { ZoomSettings };
/**
 * Sets and gets the settings to customize the color-mapping visibility based on the legend visibility.
 */
var ToggleLegendSettings = /** @class */ (function (_super) {
    __extends(ToggleLegendSettings, _super);
    function ToggleLegendSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], ToggleLegendSettings.prototype, "enable", void 0);
    __decorate([
        Property(true)
    ], ToggleLegendSettings.prototype, "applyShapeSettings", void 0);
    __decorate([
        Property(1)
    ], ToggleLegendSettings.prototype, "opacity", void 0);
    __decorate([
        Property('')
    ], ToggleLegendSettings.prototype, "fill", void 0);
    __decorate([
        Complex({ color: '', width: 0 }, Border)
    ], ToggleLegendSettings.prototype, "border", void 0);
    return ToggleLegendSettings;
}(ChildProperty));
export { ToggleLegendSettings };
/**
 * Sets and gets the options to customize the legend of the maps.
 */
var LegendSettings = /** @class */ (function (_super) {
    __extends(LegendSettings, _super);
    function LegendSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], LegendSettings.prototype, "useMarkerShape", void 0);
    __decorate([
        Property(false)
    ], LegendSettings.prototype, "toggleVisibility", void 0);
    __decorate([
        Property(false)
    ], LegendSettings.prototype, "visible", void 0);
    __decorate([
        Property('transparent')
    ], LegendSettings.prototype, "background", void 0);
    __decorate([
        Property('Layers')
    ], LegendSettings.prototype, "type", void 0);
    __decorate([
        Property(false)
    ], LegendSettings.prototype, "invertedPointer", void 0);
    __decorate([
        Property('After')
    ], LegendSettings.prototype, "labelPosition", void 0);
    __decorate([
        Property('None')
    ], LegendSettings.prototype, "labelDisplayMode", void 0);
    __decorate([
        Property('Circle')
    ], LegendSettings.prototype, "shape", void 0);
    __decorate([
        Property('')
    ], LegendSettings.prototype, "width", void 0);
    __decorate([
        Property('')
    ], LegendSettings.prototype, "height", void 0);
    __decorate([
        Complex({ fontFamily: null }, Font)
    ], LegendSettings.prototype, "textStyle", void 0);
    __decorate([
        Property(15)
    ], LegendSettings.prototype, "shapeWidth", void 0);
    __decorate([
        Property(15)
    ], LegendSettings.prototype, "shapeHeight", void 0);
    __decorate([
        Property(10)
    ], LegendSettings.prototype, "shapePadding", void 0);
    __decorate([
        Complex({ color: '#000000', width: 0 }, Border)
    ], LegendSettings.prototype, "border", void 0);
    __decorate([
        Complex({ color: '#000000', width: 0 }, Border)
    ], LegendSettings.prototype, "shapeBorder", void 0);
    __decorate([
        Complex({}, CommonTitleSettings)
    ], LegendSettings.prototype, "title", void 0);
    __decorate([
        Complex({ size: Theme.legendTitleFont.size, color: Theme.legendTitleFont.color, fontStyle: Theme.legendTitleFont.fontStyle, fontWeight: Theme.legendTitleFont.fontWeight, fontFamily: null }, Font)
    ], LegendSettings.prototype, "titleStyle", void 0);
    __decorate([
        Property('Bottom')
    ], LegendSettings.prototype, "position", void 0);
    __decorate([
        Property('Center')
    ], LegendSettings.prototype, "alignment", void 0);
    __decorate([
        Property('None')
    ], LegendSettings.prototype, "orientation", void 0);
    __decorate([
        Property({ x: 0, y: 0 })
    ], LegendSettings.prototype, "location", void 0);
    __decorate([
        Property(null)
    ], LegendSettings.prototype, "fill", void 0);
    __decorate([
        Property(1)
    ], LegendSettings.prototype, "opacity", void 0);
    __decorate([
        Property('Default')
    ], LegendSettings.prototype, "mode", void 0);
    __decorate([
        Property(null)
    ], LegendSettings.prototype, "showLegendPath", void 0);
    __decorate([
        Property(null)
    ], LegendSettings.prototype, "valuePath", void 0);
    __decorate([
        Property(false)
    ], LegendSettings.prototype, "removeDuplicateLegend", void 0);
    __decorate([
        Complex({}, ToggleLegendSettings)
    ], LegendSettings.prototype, "toggleLegendSettings", void 0);
    return LegendSettings;
}(ChildProperty));
export { LegendSettings };
/**
 * Sets and gets the options to customize the data-labels in maps.
 */
var DataLabelSettings = /** @class */ (function (_super) {
    __extends(DataLabelSettings, _super);
    function DataLabelSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], DataLabelSettings.prototype, "visible", void 0);
    __decorate([
        Complex({ width: 0, color: 'transparent' }, Border)
    ], DataLabelSettings.prototype, "border", void 0);
    __decorate([
        Property('black')
    ], DataLabelSettings.prototype, "fill", void 0);
    __decorate([
        Property(1)
    ], DataLabelSettings.prototype, "opacity", void 0);
    __decorate([
        Property(5)
    ], DataLabelSettings.prototype, "rx", void 0);
    __decorate([
        Property(5)
    ], DataLabelSettings.prototype, "ry", void 0);
    __decorate([
        Complex({}, Font)
    ], DataLabelSettings.prototype, "textStyle", void 0);
    __decorate([
        Property('')
    ], DataLabelSettings.prototype, "labelPath", void 0);
    __decorate([
        Property('None')
    ], DataLabelSettings.prototype, "smartLabelMode", void 0);
    __decorate([
        Property('None')
    ], DataLabelSettings.prototype, "intersectionAction", void 0);
    __decorate([
        Property('')
    ], DataLabelSettings.prototype, "template", void 0);
    return DataLabelSettings;
}(ChildProperty));
export { DataLabelSettings };
/**
 * Sets and gets the options to customize the shapes in the maps.
 */
var ShapeSettings = /** @class */ (function (_super) {
    __extends(ShapeSettings, _super);
    function ShapeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], ShapeSettings.prototype, "fill", void 0);
    __decorate([
        Property([])
    ], ShapeSettings.prototype, "palette", void 0);
    __decorate([
        Property(5)
    ], ShapeSettings.prototype, "circleRadius", void 0);
    __decorate([
        Complex({ width: null, color: '#000000' }, Border)
    ], ShapeSettings.prototype, "border", void 0);
    __decorate([
        Property('')
    ], ShapeSettings.prototype, "dashArray", void 0);
    __decorate([
        Property(1)
    ], ShapeSettings.prototype, "opacity", void 0);
    __decorate([
        Property(null)
    ], ShapeSettings.prototype, "colorValuePath", void 0);
    __decorate([
        Property(null)
    ], ShapeSettings.prototype, "borderColorValuePath", void 0);
    __decorate([
        Property(null)
    ], ShapeSettings.prototype, "borderWidthValuePath", void 0);
    __decorate([
        Property(null)
    ], ShapeSettings.prototype, "valuePath", void 0);
    __decorate([
        Collection([], ColorMappingSettings)
    ], ShapeSettings.prototype, "colorMapping", void 0);
    __decorate([
        Property(false)
    ], ShapeSettings.prototype, "autofill", void 0);
    return ShapeSettings;
}(ChildProperty));
export { ShapeSettings };
/**
 * Sets and gets the options to customize the marker in the maps.
 */
var MarkerBase = /** @class */ (function (_super) {
    __extends(MarkerBase, _super);
    function MarkerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Complex({ color: 'transparent', width: 1 }, Border)
    ], MarkerBase.prototype, "border", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "dashArray", void 0);
    __decorate([
        Property(false)
    ], MarkerBase.prototype, "visible", void 0);
    __decorate([
        Property('#FF471A')
    ], MarkerBase.prototype, "fill", void 0);
    __decorate([
        Property(10)
    ], MarkerBase.prototype, "height", void 0);
    __decorate([
        Property(10)
    ], MarkerBase.prototype, "width", void 0);
    __decorate([
        Property(1)
    ], MarkerBase.prototype, "opacity", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "colorValuePath", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "shapeValuePath", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "imageUrlValuePath", void 0);
    __decorate([
        Property('Balloon')
    ], MarkerBase.prototype, "shape", void 0);
    __decorate([
        Property('')
    ], MarkerBase.prototype, "legendText", void 0);
    __decorate([
        Property(new Point(0, 0))
    ], MarkerBase.prototype, "offset", void 0);
    __decorate([
        Property('')
    ], MarkerBase.prototype, "imageUrl", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "template", void 0);
    __decorate([
        Property([])
    ], MarkerBase.prototype, "dataSource", void 0);
    __decorate([
        Property()
    ], MarkerBase.prototype, "query", void 0);
    __decorate([
        Complex({}, TooltipSettings)
    ], MarkerBase.prototype, "tooltipSettings", void 0);
    __decorate([
        Property(1000)
    ], MarkerBase.prototype, "animationDuration", void 0);
    __decorate([
        Property(0)
    ], MarkerBase.prototype, "animationDelay", void 0);
    __decorate([
        Complex({}, SelectionSettings)
    ], MarkerBase.prototype, "selectionSettings", void 0);
    __decorate([
        Complex({}, HighlightSettings)
    ], MarkerBase.prototype, "highlightSettings", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "latitudeValuePath", void 0);
    __decorate([
        Property(null)
    ], MarkerBase.prototype, "longitudeValuePath", void 0);
    __decorate([
        Collection([], InitialMarkerSelectionSettings)
    ], MarkerBase.prototype, "initialMarkerSelection", void 0);
    return MarkerBase;
}(ChildProperty));
export { MarkerBase };
var MarkerSettings = /** @class */ (function (_super) {
    __extends(MarkerSettings, _super);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function MarkerSettings(parent, propName, defaultValue, isArray) {
        return _super.call(this, parent, propName, defaultValue, isArray) || this;
    }
    return MarkerSettings;
}(MarkerBase));
export { MarkerSettings };
/**
 * Sets and gets the options to customize the layers of the maps.
 */
var LayerSettings = /** @class */ (function (_super) {
    __extends(LayerSettings, _super);
    function LayerSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         */
        _this.isBaseLayer = false;
        return _this;
    }
    __decorate([
        Property(null)
    ], LayerSettings.prototype, "shapeData", void 0);
    __decorate([
        Property()
    ], LayerSettings.prototype, "query", void 0);
    __decorate([
        Complex({}, ShapeSettings)
    ], LayerSettings.prototype, "shapeSettings", void 0);
    __decorate([
        Property([])
    ], LayerSettings.prototype, "dataSource", void 0);
    __decorate([
        Property('Layer')
    ], LayerSettings.prototype, "type", void 0);
    __decorate([
        Property('Geographic')
    ], LayerSettings.prototype, "geometryType", void 0);
    __decorate([
        Property('Aerial')
    ], LayerSettings.prototype, "bingMapType", void 0);
    __decorate([
        Property('RoadMap')
    ], LayerSettings.prototype, "staticMapType", void 0);
    __decorate([
        Property('')
    ], LayerSettings.prototype, "key", void 0);
    __decorate([
        Property('Geometry')
    ], LayerSettings.prototype, "layerType", void 0);
    __decorate([
        Property('')
    ], LayerSettings.prototype, "urlTemplate", void 0);
    __decorate([
        Property(true)
    ], LayerSettings.prototype, "visible", void 0);
    __decorate([
        Property('name')
    ], LayerSettings.prototype, "shapeDataPath", void 0);
    __decorate([
        Property('name')
    ], LayerSettings.prototype, "shapePropertyPath", void 0);
    __decorate([
        Property(0)
    ], LayerSettings.prototype, "animationDuration", void 0);
    __decorate([
        Collection([], MarkerSettings)
    ], LayerSettings.prototype, "markerSettings", void 0);
    __decorate([
        Complex({}, MarkerClusterSettings)
    ], LayerSettings.prototype, "markerClusterSettings", void 0);
    __decorate([
        Complex({}, DataLabelSettings)
    ], LayerSettings.prototype, "dataLabelSettings", void 0);
    __decorate([
        Collection([], BubbleSettings)
    ], LayerSettings.prototype, "bubbleSettings", void 0);
    __decorate([
        Collection([], NavigationLineSettings)
    ], LayerSettings.prototype, "navigationLineSettings", void 0);
    __decorate([
        Complex({}, TooltipSettings)
    ], LayerSettings.prototype, "tooltipSettings", void 0);
    __decorate([
        Complex({}, SelectionSettings)
    ], LayerSettings.prototype, "selectionSettings", void 0);
    __decorate([
        Complex({}, HighlightSettings)
    ], LayerSettings.prototype, "highlightSettings", void 0);
    __decorate([
        Complex({}, ToggleLegendSettings)
    ], LayerSettings.prototype, "toggleLegendSettings", void 0);
    __decorate([
        Collection([], InitialShapeSelectionSettings)
    ], LayerSettings.prototype, "initialShapeSelection", void 0);
    return LayerSettings;
}(ChildProperty));
export { LayerSettings };
/**
 * Internal use for bing type layer rendering
 */
var Tile = /** @class */ (function () {
    function Tile(x, y, height, width, top, left, src) {
        if (height === void 0) { height = 256; }
        if (width === void 0) { width = 256; }
        if (top === void 0) { top = 0; }
        if (left === void 0) { left = 0; }
        if (src === void 0) { src = null; }
        this.x = x;
        this.y = y;
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
        this.src = src;
    }
    return Tile;
}());
export { Tile };
/**
 * Sets and gets the maps area settings
 */
var MapsAreaSettings = /** @class */ (function (_super) {
    __extends(MapsAreaSettings, _super);
    function MapsAreaSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], MapsAreaSettings.prototype, "background", void 0);
    __decorate([
        Complex({ color: 'transparent', width: 1 }, Border)
    ], MapsAreaSettings.prototype, "border", void 0);
    return MapsAreaSettings;
}(ChildProperty));
export { MapsAreaSettings };
