/*!
*  filename: ej2-angular-charts.js
*  version : 20.2.43
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AccumulationAnnotation, AccumulationChart, AccumulationDataLabel, AccumulationDistributionIndicator, AccumulationLegend, AccumulationSelection, AccumulationTooltip, AreaSeries, AtrIndicator, BarSeries, BollingerBands, BoxAndWhiskerSeries, BubbleSeries, BulletChart, BulletChartLegend, BulletTooltip, CandleSeries, Category, Chart, ChartAnnotation, ColumnSeries, Crosshair, DataEditing, DataLabel, DateTime, DateTimeCategory, EmaIndicator, ErrorBar, Export, FunnelSeries, Highlight, HiloOpenCloseSeries, HiloSeries, HistogramSeries, Legend, LineSeries, Logarithmic, MacdIndicator, MomentumIndicator, MultiColoredAreaSeries, MultiColoredLineSeries, MultiLevelLabel, ParetoSeries, PeriodSelector, PieSeries, PolarSeries, PyramidSeries, RadarSeries, RangeAreaSeries, RangeColumnSeries, RangeNavigator, RangeTooltip, RsiIndicator, ScatterSeries, ScrollBar, Selection, SmaIndicator, Smithchart, SmithchartLegend, Sparkline, SparklineTooltip, SplineAreaSeries, SplineRangeAreaSeries, SplineSeries, StackingAreaSeries, StackingBarSeries, StackingColumnSeries, StackingLineSeries, StackingStepAreaSeries, StepAreaSeries, StepLineSeries, StochasticIndicator, StockChart, StockLegend, StripLine, TmaIndicator, Tooltip, TooltipRender, Trendlines, WaterfallSeries, Zoom } from '@syncfusion/ej2-charts';
import { CommonModule } from '@angular/common';

let input = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-trendlines>
 * <e-trendline>
 * </e-trendline>
 * </e-trendlines>
 * </e-series-collection>
 * ```
 */
class TrendlineDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
TrendlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-trendlines>e-trendline',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TrendlineDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Trendline Array Directive
 */
class TrendlinesDirective extends ArrayBase {
    constructor() {
        super('trendlines');
    }
}
TrendlinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-trendlines',
                queries: {
                    children: new ContentChildren(TrendlineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
TrendlinesDirective.ctorParameters = () => [];

let input$1 = ['color', 'dashArray', 'value'];
let outputs$1 = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-segments>
 * <e-segment>
 * </e-segment>
 * </e-segments>
 * </e-series-collection>
 * ```
 */
class SegmentDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input$1;
    }
}
SegmentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-segments>e-segment',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SegmentDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Segment Array Directive
 */
class SegmentsDirective extends ArrayBase {
    constructor() {
        super('segments');
    }
}
SegmentsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-segments',
                queries: {
                    children: new ContentChildren(SegmentDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SegmentsDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$2 = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'colorName', 'columnSpacing', 'columnWidth', 'columnWidthInPixel', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'groupName', 'high', 'intermediateSumIndexes', 'isClosed', 'legendImageUrl', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'nonHighlightStyle', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'unSelectedStyle', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
let outputs$2 = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series></e-series>
 * </e-series-collection>
 * ```
 */
class SeriesDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['trendlines', 'segments'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$2;
    }
}
SeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series-collection>e-series',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childTrendlines: new ContentChild(TrendlinesDirective),
                    childSegments: new ContentChild(SegmentsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SeriesDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
SeriesDirective.propDecorators = {
    'dataLabel_template': [{ type: ContentChild, args: ['dataLabelTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], SeriesDirective.prototype, "dataLabel_template", void 0);
/**
 * Series Array Directive
 */
class SeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
SeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-series-collection',
                queries: {
                    children: new ContentChildren(SeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SeriesCollectionDirective.ctorParameters = () => [];

let input$3 = ['border', 'color', 'dashArray', 'end', 'horizontalAlignment', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
let outputs$3 = [];
/**
 * StripLine Directive
 * ```html
 * <e-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-axis>
 * ```
 */
class StripLineDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$3;
    }
}
StripLineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-striplines>e-stripline',
                inputs: input$3,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StripLineDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StripLine Array Directive
 */
class StripLinesDirective extends ArrayBase {
    constructor() {
        super('striplines');
    }
}
StripLinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-striplines',
                queries: {
                    children: new ContentChildren(StripLineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StripLinesDirective.ctorParameters = () => [];

let input$4 = ['customAttributes', 'end', 'maximumTextWidth', 'start', 'text', 'type'];
let outputs$4 = [];
/**
 * MultiLevelLabels Directive
 * ```html
 * <e-multilevellabels>
 * <e-multilevellabel>
 * <e-Categories>
 * <e-Category>
 * </e-Category>
 * </e-Categories>
 * </e-multilevellabel>
 * </e-multilevellabels>
 * ```
 */
class CategoryDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$4;
    }
}
CategoryDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-multilevellabel>e-categories>e-category',
                inputs: input$4,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CategoryDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Category Array Directive
 */
class CategoriesDirective extends ArrayBase {
    constructor() {
        super('categories');
    }
}
CategoriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-multilevellabel>e-categories',
                queries: {
                    children: new ContentChildren(CategoryDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CategoriesDirective.ctorParameters = () => [];

let input$5 = ['alignment', 'border', 'categories', 'overflow', 'textStyle'];
let outputs$5 = [];
/**
 * MultiLevelLabel Directive
 * ```html
 * <e-axis>
 * <e-multilevellabels>
 * <e-multilevellabel></e-multilevellabel>
 * </e-multilevellabels>
 * </e-axis>
 * ```
 */
class MultiLevelLabelDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['categories'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$5;
    }
}
MultiLevelLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-multilevellabels>e-multilevellabel',
                inputs: input$5,
                outputs: outputs$5,
                queries: {
                    childCategories: new ContentChild(CategoriesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
MultiLevelLabelDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * MultiLevelLabel Array Directive
 */
class MultiLevelLabelsDirective extends ArrayBase {
    constructor() {
        super('multilevellabels');
    }
}
MultiLevelLabelsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-multilevellabels',
                queries: {
                    children: new ContentChildren(MultiLevelLabelDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
MultiLevelLabelsDirective.ctorParameters = () => [];

let input$6 = ['border', 'coefficient', 'columnIndex', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableScrollbarOnZooming', 'enableTrim', 'interval', 'intervalType', 'isIndexed', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPadding', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineBreakAlignment', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'multiLevelLabels', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'plotOffsetBottom', 'plotOffsetLeft', 'plotOffsetRight', 'plotOffsetTop', 'rangePadding', 'rowIndex', 'scrollbarSettings', 'skeleton', 'skeletonType', 'span', 'startAngle', 'startFromZero', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titlePadding', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
let outputs$6 = [];
/**
 * Axis Directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
class AxisDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['stripLines', 'multiLevelLabels'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
        this.directivePropList = input$6;
    }
}
AxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$6,
                outputs: outputs$6,
                queries: {
                    childStripLines: new ContentChild(StripLinesDirective),
                    childMultiLevelLabels: new ContentChild(MultiLevelLabelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AxisDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Axis Array Directive
 */
class AxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
AxesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-axes',
                queries: {
                    children: new ContentChildren(AxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AxesDirective.ctorParameters = () => [];

let input$7 = ['border', 'height'];
let outputs$7 = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
class RowDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$7);
        this.directivePropList = input$7;
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input$7,
                outputs: outputs$7,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RowDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Row Array Directive
 */
class RowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
RowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-rows',
                queries: {
                    children: new ContentChildren(RowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RowsDirective.ctorParameters = () => [];

let input$8 = ['border', 'width'];
let outputs$8 = [];
/**
 * Column Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
 * ```
 */
class ColumnDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$8);
        this.directivePropList = input$8;
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input$8,
                outputs: outputs$8,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Column Array Directive
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = () => [];

let input$9 = ['colors', 'end', 'label', 'start'];
let outputs$9 = [];
/**
 * RangeColorSetting Directive
 * ```html
 * <e-rangeColorSettings><e-rangeColorSetting></e-rangeColorSetting><e-rangeColorSettings>
 * ```
 */
class RangeColorSettingDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$9);
        this.directivePropList = input$9;
    }
}
RangeColorSettingDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rangecolorsettings>e-rangecolorsetting',
                inputs: input$9,
                outputs: outputs$9,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeColorSettingDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * RangeColorSetting Array Directive
 */
class RangeColorSettingsDirective extends ArrayBase {
    constructor() {
        super('rangecolorsettings');
    }
}
RangeColorSettingsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-rangecolorsettings',
                queries: {
                    children: new ContentChildren(RangeColorSettingDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangeColorSettingsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$10 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
let outputs$10 = [];
/**
 * Annotation Directive
 * ```html
 * <e-annotations><e-annotation></e-annotation><e-annotations>
 * ```
 */
class AnnotationDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$10);
        this.directivePropList = input$10;
    }
}
AnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-annotations>e-annotation',
                inputs: input$10,
                outputs: outputs$10,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
AnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AnnotationDirective.prototype, "content", void 0);
/**
 * Annotation Array Directive
 */
class AnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-annotations',
                queries: {
                    children: new ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = () => [];

let input$11 = ['point', 'series'];
let outputs$11 = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
class SelectedDataIndexDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$11);
        this.directivePropList = input$11;
    }
}
SelectedDataIndexDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-selecteddataindexes>e-selecteddataindex',
                inputs: input$11,
                outputs: outputs$11,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SelectedDataIndexDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * SelectedDataIndex Array Directive
 */
class SelectedDataIndexesDirective extends ArrayBase {
    constructor() {
        super('selecteddataindexes');
    }
}
SelectedDataIndexesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-selecteddataindexes',
                queries: {
                    children: new ContentChildren(SelectedDataIndexDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SelectedDataIndexesDirective.ctorParameters = () => [];

let input$12 = ['animation', 'bandColor', 'close', 'colorName', 'dPeriod', 'dashArray', 'dataSource', 'enableComplexProperty', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
let outputs$12 = [];
/**
 * Indicator Directive
 * ```html
 * <e-indicators>
 * <e-indicator></e-indicator>
 * </e-indicators>
 * ```
 */
class IndicatorDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$12);
        this.directivePropList = input$12;
    }
}
IndicatorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-indicators>e-indicator',
                inputs: input$12,
                outputs: outputs$12,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
IndicatorDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Indicator Array Directive
 */
class IndicatorsDirective extends ArrayBase {
    constructor() {
        super('indicators');
    }
}
IndicatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-indicators',
                queries: {
                    children: new ContentChildren(IndicatorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
IndicatorsDirective.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['allowExport', 'allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableAutoIntervalOnBothAxis', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rangeColorSettings', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
const outputs$13 = ['afterExport', 'animationComplete', 'annotationRender', 'axisLabelClick', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointDoubleClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'sharedTooltipRender', 'textRender', 'tooltipRender', 'zoomComplete', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
let ChartComponent = class ChartComponent extends Chart {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['series', 'axes', 'rows', 'columns', 'rangeColorSettings', 'annotations', 'selectedDataIndexes', 'indicators'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ChartsScatterSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('ChartsColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('ChartsSplineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('ChartsSplineAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('ChartsStripLine');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('ChartsAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('ChartsScrollBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('ChartsStepLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('ChartsStepAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('ChartsStackingColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('ChartsStackingLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('ChartsStackingAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('ChartsStackingStepAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('ChartsBarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('ChartsStackingBarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('ChartsRangeColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('ChartsBubbleSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            let mod = this.injector.get('ChartsTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            let mod = this.injector.get('ChartsCrosshair');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            let mod = this.injector.get('ChartsCategory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            let mod = this.injector.get('ChartsDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            let mod = this.injector.get('ChartsLogarithmic');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            let mod = this.injector.get('ChartsLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            let mod = this.injector.get('ChartsZoom');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            let mod = this.injector.get('ChartsDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            let mod = this.injector.get('ChartsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            let mod = this.injector.get('ChartsChartAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        try {
            let mod = this.injector.get('ChartsHiloSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_4) { }
        try {
            let mod = this.injector.get('ChartsHiloOpenCloseSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_5) { }
        try {
            let mod = this.injector.get('ChartsWaterfallSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_6) { }
        try {
            let mod = this.injector.get('ChartsRangeAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_7) { }
        try {
            let mod = this.injector.get('ChartsSplineRangeAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_8) { }
        try {
            let mod = this.injector.get('ChartsCandleSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_9) { }
        try {
            let mod = this.injector.get('ChartsPolarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_10) { }
        try {
            let mod = this.injector.get('ChartsRadarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_11) { }
        try {
            let mod = this.injector.get('ChartsSmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_12) { }
        try {
            let mod = this.injector.get('ChartsTmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_13) { }
        try {
            let mod = this.injector.get('ChartsEmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_14) { }
        try {
            let mod = this.injector.get('ChartsAccumulationDistributionIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_15) { }
        try {
            let mod = this.injector.get('ChartsMacdIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_16) { }
        try {
            let mod = this.injector.get('ChartsAtrIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_17) { }
        try {
            let mod = this.injector.get('ChartsRsiIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_18) { }
        try {
            let mod = this.injector.get('ChartsMomentumIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_19) { }
        try {
            let mod = this.injector.get('ChartsStochasticIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_20) { }
        try {
            let mod = this.injector.get('ChartsBollingerBands');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_21) { }
        try {
            let mod = this.injector.get('ChartsBoxAndWhiskerSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_22) { }
        try {
            let mod = this.injector.get('ChartsHistogramSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_23) { }
        try {
            let mod = this.injector.get('ChartsErrorBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_24) { }
        try {
            let mod = this.injector.get('ChartsTrendlines');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_25) { }
        try {
            let mod = this.injector.get('ChartsDateTimeCategory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_26) { }
        try {
            let mod = this.injector.get('ChartsMultiColoredLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_27) { }
        try {
            let mod = this.injector.get('ChartsMultiColoredAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_28) { }
        try {
            let mod = this.injector.get('ChartsMultiLevelLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_29) { }
        try {
            let mod = this.injector.get('ChartsParetoSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_30) { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_31) { }
        try {
            let mod = this.injector.get('ChartsDataEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_32) { }
        try {
            let mod = this.injector.get('ChartsHighlight');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_33) { }
        this.registerEvents(outputs$13);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        if (this.childAxes) {
            this.tagObjects[1].instance = this.childAxes;
        }
        if (this.childRows) {
            this.tagObjects[2].instance = this.childRows;
        }
        if (this.childColumns) {
            this.tagObjects[3].instance = this.childColumns;
        }
        if (this.childRangeColorSettings) {
            this.tagObjects[4].instance = this.childRangeColorSettings;
        }
        if (this.childAnnotations) {
            this.tagObjects[5].instance = this.childAnnotations;
        }
        if (this.childSelectedDataIndexes) {
            this.tagObjects[6].instance = this.childSelectedDataIndexes;
        }
        if (this.childIndicators) {
            this.tagObjects[7].instance = this.childIndicators;
        }
        this.context.ngAfterContentChecked(this);
    }
};
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-chart',
                inputs: inputs,
                outputs: outputs$13,
                template: '',
                queries: {
                    childSeries: new ContentChild(SeriesCollectionDirective),
                    childAxes: new ContentChild(AxesDirective),
                    childRows: new ContentChild(RowsDirective),
                    childColumns: new ContentChild(ColumnsDirective),
                    childRangeColorSettings: new ContentChild(RangeColorSettingsDirective),
                    childAnnotations: new ContentChild(AnnotationsDirective),
                    childSelectedDataIndexes: new ContentChild(SelectedDataIndexesDirective),
                    childIndicators: new ContentChild(IndicatorsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ChartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ChartComponent.prototype, "tooltip_template", void 0);
ChartComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ChartComponent);

/**
 * NgModule definition for the Chart component.
 */
class ChartModule {
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ChartComponent,
                    TrendlineDirective,
                    TrendlinesDirective,
                    SegmentDirective,
                    SegmentsDirective,
                    SeriesDirective,
                    SeriesCollectionDirective,
                    StripLineDirective,
                    StripLinesDirective,
                    CategoryDirective,
                    CategoriesDirective,
                    MultiLevelLabelDirective,
                    MultiLevelLabelsDirective,
                    AxisDirective,
                    AxesDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeColorSettingDirective,
                    RangeColorSettingsDirective,
                    AnnotationDirective,
                    AnnotationsDirective,
                    SelectedDataIndexDirective,
                    SelectedDataIndexesDirective,
                    IndicatorDirective,
                    IndicatorsDirective
                ],
                exports: [
                    ChartComponent,
                    TrendlineDirective,
                    TrendlinesDirective,
                    SegmentDirective,
                    SegmentsDirective,
                    SeriesDirective,
                    SeriesCollectionDirective,
                    StripLineDirective,
                    StripLinesDirective,
                    CategoryDirective,
                    CategoriesDirective,
                    MultiLevelLabelDirective,
                    MultiLevelLabelsDirective,
                    AxisDirective,
                    AxesDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeColorSettingDirective,
                    RangeColorSettingsDirective,
                    AnnotationDirective,
                    AnnotationsDirective,
                    SelectedDataIndexDirective,
                    SelectedDataIndexesDirective,
                    IndicatorDirective,
                    IndicatorsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ChartModule.ctorParameters = () => [];

const LineSeriesService = { provide: 'ChartsLineSeries', useValue: LineSeries };
const ScatterSeriesService = { provide: 'ChartsScatterSeries', useValue: ScatterSeries };
const ColumnSeriesService = { provide: 'ChartsColumnSeries', useValue: ColumnSeries };
const SplineSeriesService = { provide: 'ChartsSplineSeries', useValue: SplineSeries };
const SplineAreaSeriesService = { provide: 'ChartsSplineAreaSeries', useValue: SplineAreaSeries };
const StripLineService = { provide: 'ChartsStripLine', useValue: StripLine };
const AreaSeriesService = { provide: 'ChartsAreaSeries', useValue: AreaSeries };
const ScrollBarService = { provide: 'ChartsScrollBar', useValue: ScrollBar };
const StepLineSeriesService = { provide: 'ChartsStepLineSeries', useValue: StepLineSeries };
const StepAreaSeriesService = { provide: 'ChartsStepAreaSeries', useValue: StepAreaSeries };
const StackingColumnSeriesService = { provide: 'ChartsStackingColumnSeries', useValue: StackingColumnSeries };
const StackingLineSeriesService = { provide: 'ChartsStackingLineSeries', useValue: StackingLineSeries };
const StackingAreaSeriesService = { provide: 'ChartsStackingAreaSeries', useValue: StackingAreaSeries };
const StackingStepAreaSeriesService = { provide: 'ChartsStackingStepAreaSeries', useValue: StackingStepAreaSeries };
const BarSeriesService = { provide: 'ChartsBarSeries', useValue: BarSeries };
const StackingBarSeriesService = { provide: 'ChartsStackingBarSeries', useValue: StackingBarSeries };
const RangeColumnSeriesService = { provide: 'ChartsRangeColumnSeries', useValue: RangeColumnSeries };
const BubbleSeriesService = { provide: 'ChartsBubbleSeries', useValue: BubbleSeries };
const TooltipService = { provide: 'ChartsTooltip', useValue: Tooltip };
const CrosshairService = { provide: 'ChartsCrosshair', useValue: Crosshair };
const CategoryService = { provide: 'ChartsCategory', useValue: Category };
const DateTimeService = { provide: 'ChartsDateTime', useValue: DateTime };
const LogarithmicService = { provide: 'ChartsLogarithmic', useValue: Logarithmic };
const LegendService = { provide: 'ChartsLegend', useValue: Legend };
const ZoomService = { provide: 'ChartsZoom', useValue: Zoom };
const DataLabelService = { provide: 'ChartsDataLabel', useValue: DataLabel };
const SelectionService = { provide: 'ChartsSelection', useValue: Selection };
const ChartAnnotationService = { provide: 'ChartsChartAnnotation', useValue: ChartAnnotation };
const HiloSeriesService = { provide: 'ChartsHiloSeries', useValue: HiloSeries };
const HiloOpenCloseSeriesService = { provide: 'ChartsHiloOpenCloseSeries', useValue: HiloOpenCloseSeries };
const WaterfallSeriesService = { provide: 'ChartsWaterfallSeries', useValue: WaterfallSeries };
const RangeAreaSeriesService = { provide: 'ChartsRangeAreaSeries', useValue: RangeAreaSeries };
const SplineRangeAreaSeriesService = { provide: 'ChartsSplineRangeAreaSeries', useValue: SplineRangeAreaSeries };
const CandleSeriesService = { provide: 'ChartsCandleSeries', useValue: CandleSeries };
const PolarSeriesService = { provide: 'ChartsPolarSeries', useValue: PolarSeries };
const RadarSeriesService = { provide: 'ChartsRadarSeries', useValue: RadarSeries };
const SmaIndicatorService = { provide: 'ChartsSmaIndicator', useValue: SmaIndicator };
const TmaIndicatorService = { provide: 'ChartsTmaIndicator', useValue: TmaIndicator };
const EmaIndicatorService = { provide: 'ChartsEmaIndicator', useValue: EmaIndicator };
const AccumulationDistributionIndicatorService = { provide: 'ChartsAccumulationDistributionIndicator', useValue: AccumulationDistributionIndicator };
const MacdIndicatorService = { provide: 'ChartsMacdIndicator', useValue: MacdIndicator };
const AtrIndicatorService = { provide: 'ChartsAtrIndicator', useValue: AtrIndicator };
const RsiIndicatorService = { provide: 'ChartsRsiIndicator', useValue: RsiIndicator };
const MomentumIndicatorService = { provide: 'ChartsMomentumIndicator', useValue: MomentumIndicator };
const StochasticIndicatorService = { provide: 'ChartsStochasticIndicator', useValue: StochasticIndicator };
const BollingerBandsService = { provide: 'ChartsBollingerBands', useValue: BollingerBands };
const BoxAndWhiskerSeriesService = { provide: 'ChartsBoxAndWhiskerSeries', useValue: BoxAndWhiskerSeries };
const HistogramSeriesService = { provide: 'ChartsHistogramSeries', useValue: HistogramSeries };
const ErrorBarService = { provide: 'ChartsErrorBar', useValue: ErrorBar };
const TrendlinesService = { provide: 'ChartsTrendlines', useValue: Trendlines };
const DateTimeCategoryService = { provide: 'ChartsDateTimeCategory', useValue: DateTimeCategory };
const MultiColoredLineSeriesService = { provide: 'ChartsMultiColoredLineSeries', useValue: MultiColoredLineSeries };
const MultiColoredAreaSeriesService = { provide: 'ChartsMultiColoredAreaSeries', useValue: MultiColoredAreaSeries };
const MultiLevelLabelService = { provide: 'ChartsMultiLevelLabel', useValue: MultiLevelLabel };
const ParetoSeriesService = { provide: 'ChartsParetoSeries', useValue: ParetoSeries };
const ExportService = { provide: 'ChartsExport', useValue: Export };
const DataEditingService = { provide: 'ChartsDataEditing', useValue: DataEditing };
const HighlightService = { provide: 'ChartsHighlight', useValue: Highlight };
/**
 * NgModule definition for the Chart component with providers.
 */
class ChartAllModule {
}
ChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ChartModule],
                exports: [
                    ChartModule
                ],
                providers: [
                    LineSeriesService,
                    ScatterSeriesService,
                    ColumnSeriesService,
                    SplineSeriesService,
                    SplineAreaSeriesService,
                    StripLineService,
                    AreaSeriesService,
                    ScrollBarService,
                    StepLineSeriesService,
                    StepAreaSeriesService,
                    StackingColumnSeriesService,
                    StackingLineSeriesService,
                    StackingAreaSeriesService,
                    StackingStepAreaSeriesService,
                    BarSeriesService,
                    StackingBarSeriesService,
                    RangeColumnSeriesService,
                    BubbleSeriesService,
                    TooltipService,
                    CrosshairService,
                    CategoryService,
                    DateTimeService,
                    LogarithmicService,
                    LegendService,
                    ZoomService,
                    DataLabelService,
                    SelectionService,
                    ChartAnnotationService,
                    HiloSeriesService,
                    HiloOpenCloseSeriesService,
                    WaterfallSeriesService,
                    RangeAreaSeriesService,
                    SplineRangeAreaSeriesService,
                    CandleSeriesService,
                    PolarSeriesService,
                    RadarSeriesService,
                    SmaIndicatorService,
                    TmaIndicatorService,
                    EmaIndicatorService,
                    AccumulationDistributionIndicatorService,
                    MacdIndicatorService,
                    AtrIndicatorService,
                    RsiIndicatorService,
                    MomentumIndicatorService,
                    StochasticIndicatorService,
                    BollingerBandsService,
                    BoxAndWhiskerSeriesService,
                    HistogramSeriesService,
                    ErrorBarService,
                    TrendlinesService,
                    DateTimeCategoryService,
                    MultiColoredLineSeriesService,
                    MultiColoredAreaSeriesService,
                    MultiLevelLabelService,
                    ParetoSeriesService,
                    ExportService,
                    DataEditingService,
                    HighlightService
                ]
            },] },
];
/**
 * @nocollapse
 */
ChartAllModule.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$13 = ['animation', 'border', 'dataLabel', 'dataSource', 'emptyPointSettings', 'enableTooltip', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'gapRatio', 'groupMode', 'groupTo', 'height', 'innerRadius', 'legendImageUrl', 'legendShape', 'name', 'neckHeight', 'neckWidth', 'opacity', 'palettes', 'pointColorMapping', 'pyramidMode', 'query', 'radius', 'selectionStyle', 'startAngle', 'tooltipMappingName', 'type', 'visible', 'width', 'xName', 'yName'];
let outputs$14 = [];
/**
 * AccumulationSeries Directive
 * ```html
 * <e-accumulation-series-collection>
 * <e-accumulation-series></e-accumulation-series>
 * </e-accumulation-series-collection>
 * ```
 */
class AccumulationSeriesDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$14);
        this.directivePropList = input$13;
    }
}
AccumulationSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-accumulation-series-collection>e-accumulation-series',
                inputs: input$13,
                outputs: outputs$14,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AccumulationSeriesDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
AccumulationSeriesDirective.propDecorators = {
    'dataLabel_template': [{ type: ContentChild, args: ['dataLabelTemplate',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], AccumulationSeriesDirective.prototype, "dataLabel_template", void 0);
/**
 * AccumulationSeries Array Directive
 */
class AccumulationSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
AccumulationSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-accumulationchart>e-accumulation-series-collection',
                queries: {
                    children: new ContentChildren(AccumulationSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AccumulationSeriesCollectionDirective.ctorParameters = () => [];

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$14 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'y'];
let outputs$15 = [];
/**
 * AccumulationAnnotations Directive
 * ```html
 * <e-accumulation-annotations>
 * <e-accumulation-annotation></e-accumulation-annotation>
 * </e-accumulation-annotations>
 * ```
 */
class AccumulationAnnotationDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$15);
        this.directivePropList = input$14;
    }
}
AccumulationAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-accumulation-annotations>e-accumulation-annotation',
                inputs: input$14,
                outputs: outputs$15,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AccumulationAnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
AccumulationAnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$4([
    Template(),
    __metadata$4("design:type", Object)
], AccumulationAnnotationDirective.prototype, "content", void 0);
/**
 * AccumulationAnnotation Array Directive
 */
class AccumulationAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AccumulationAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-accumulationchart>e-accumulation-annotations',
                queries: {
                    children: new ContentChildren(AccumulationAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AccumulationAnnotationsDirective.ctorParameters = () => [];

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['allowExport', 'annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
const outputs$16 = ['afterExport', 'animationComplete', 'annotationRender', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'dataSourceChange'];
const twoWays$1 = ['dataSource'];
/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
let AccumulationChartComponent = class AccumulationChartComponent extends AccumulationChart {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['series', 'annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsPieSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ChartsFunnelSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('ChartsPyramidSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('ChartsAccumulationTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('ChartsAccumulationLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('ChartsAccumulationSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('ChartsAccumulationDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('ChartsAccumulationAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        this.registerEvents(outputs$16);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        if (this.childAnnotations) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childAnnotations);
        }
        this.context.ngAfterContentChecked(this);
    }
};
AccumulationChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-accumulationchart',
                inputs: inputs$1,
                outputs: outputs$16,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(AccumulationSeriesCollectionDirective),
                    childAnnotations: new ContentChild(AccumulationAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AccumulationChartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
AccumulationChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$5([
    Template(),
    __metadata$5("design:type", Object)
], AccumulationChartComponent.prototype, "tooltip_template", void 0);
AccumulationChartComponent = __decorate$5([
    ComponentMixins([ComponentBase]),
    __metadata$5("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], AccumulationChartComponent);

/**
 * NgModule definition for the AccumulationChart component.
 */
class AccumulationChartModule {
}
AccumulationChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    AccumulationChartComponent,
                    AccumulationSeriesDirective,
                    AccumulationSeriesCollectionDirective,
                    AccumulationAnnotationDirective,
                    AccumulationAnnotationsDirective
                ],
                exports: [
                    AccumulationChartComponent,
                    AccumulationSeriesDirective,
                    AccumulationSeriesCollectionDirective,
                    AccumulationAnnotationDirective,
                    AccumulationAnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
AccumulationChartModule.ctorParameters = () => [];

const PieSeriesService = { provide: 'ChartsPieSeries', useValue: PieSeries };
const FunnelSeriesService = { provide: 'ChartsFunnelSeries', useValue: FunnelSeries };
const PyramidSeriesService = { provide: 'ChartsPyramidSeries', useValue: PyramidSeries };
const AccumulationTooltipService = { provide: 'ChartsAccumulationTooltip', useValue: AccumulationTooltip };
const AccumulationLegendService = { provide: 'ChartsAccumulationLegend', useValue: AccumulationLegend };
const AccumulationSelectionService = { provide: 'ChartsAccumulationSelection', useValue: AccumulationSelection };
const AccumulationDataLabelService = { provide: 'ChartsAccumulationDataLabel', useValue: AccumulationDataLabel };
const AccumulationAnnotationService = { provide: 'ChartsAccumulationAnnotation', useValue: AccumulationAnnotation };
/**
 * NgModule definition for the AccumulationChart component with providers.
 */
class AccumulationChartAllModule {
}
AccumulationChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AccumulationChartModule],
                exports: [
                    AccumulationChartModule
                ],
                providers: [
                    PieSeriesService,
                    FunnelSeriesService,
                    PyramidSeriesService,
                    AccumulationTooltipService,
                    AccumulationLegendService,
                    AccumulationSelectionService,
                    AccumulationDataLabelService,
                    AccumulationAnnotationService
                ]
            },] },
];
/**
 * @nocollapse
 */
AccumulationChartAllModule.ctorParameters = () => [];

let input$15 = ['animation', 'border', 'dashArray', 'dataSource', 'fill', 'opacity', 'query', 'type', 'width', 'xName', 'yName'];
let outputs$17 = [];
/**
 * RangenavigatorSeries Directive
 * ```html
 * <e-rangenavigator-series-collection>
 * <e-rangenavigator-series></e-rangenavigator-series>
 * </e-rangenavigator-series-collection>
 * ```
 */
class RangenavigatorSeriesDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$17);
        this.directivePropList = input$15;
    }
}
RangenavigatorSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rangenavigator-series-collection>e-rangenavigator-series',
                inputs: input$15,
                outputs: outputs$17,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangenavigatorSeriesDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * RangenavigatorSeries Array Directive
 */
class RangenavigatorSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
RangenavigatorSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
                queries: {
                    children: new ContentChildren(RangenavigatorSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangenavigatorSeriesCollectionDirective.ctorParameters = () => [];

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['allowIntervalData', 'allowSnapping', 'animationDuration', 'background', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName'];
const outputs$18 = ['beforePrint', 'beforeResize', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender', 'dataSourceChange'];
const twoWays$2 = ['dataSource'];
/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
let RangeNavigatorComponent = class RangeNavigatorComponent extends RangeNavigator {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['series'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsRangeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ChartsPeriodSelector');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('ChartsAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('ChartsStepLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('ChartsDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('ChartsLogarithmic');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        this.registerEvents(outputs$18);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        this.context.ngAfterContentChecked(this);
    }
};
RangeNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-rangenavigator',
                inputs: inputs$2,
                outputs: outputs$18,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(RangenavigatorSeriesCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
RangeNavigatorComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$6([
    Template(),
    __metadata$6("design:type", Object)
], RangeNavigatorComponent.prototype, "tooltip_template", void 0);
RangeNavigatorComponent = __decorate$6([
    ComponentMixins([ComponentBase]),
    __metadata$6("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], RangeNavigatorComponent);

/**
 * NgModule definition for the RangeNavigator component.
 */
class RangeNavigatorModule {
}
RangeNavigatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    RangeNavigatorComponent,
                    RangenavigatorSeriesDirective,
                    RangenavigatorSeriesCollectionDirective
                ],
                exports: [
                    RangeNavigatorComponent,
                    RangenavigatorSeriesDirective,
                    RangenavigatorSeriesCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorModule.ctorParameters = () => [];

const RangeTooltipService = { provide: 'ChartsRangeTooltip', useValue: RangeTooltip };
const PeriodSelectorService = { provide: 'ChartsPeriodSelector', useValue: PeriodSelector };
/**
 * NgModule definition for the RangeNavigator component with providers.
 */
class RangeNavigatorAllModule {
}
RangeNavigatorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RangeNavigatorModule],
                exports: [
                    RangeNavigatorModule
                ],
                providers: [
                    RangeTooltipService,
                    PeriodSelectorService
                ]
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorAllModule.ctorParameters = () => [];

let input$16 = ['color', 'endRange', 'opacity', 'startRange'];
let outputs$19 = [];
class RangeBandSettingDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$19);
        this.directivePropList = input$16;
    }
}
RangeBandSettingDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rangeBandSettings>e-rangeBandSetting',
                inputs: input$16,
                outputs: outputs$19,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeBandSettingDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * RangeBandSetting Array Directive
 */
class RangeBandSettingsDirective extends ArrayBase {
    constructor() {
        super('rangebandsettings');
    }
}
RangeBandSettingsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-sparkline>e-rangeBandSettings',
                queries: {
                    children: new ContentChildren(RangeBandSettingDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangeBandSettingsDirective.ctorParameters = () => [];

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$3 = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'rangePadding', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName'];
const outputs$20 = ['axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
const twoWays$3 = [''];
/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
let SparklineComponent = class SparklineComponent extends Sparkline {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['rangeBandSettings'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsSparklineTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$20);
        this.addTwoWay.call(this, twoWays$3);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childRangeBandSettings;
        this.context.ngAfterContentChecked(this);
    }
};
SparklineComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-sparkline',
                inputs: inputs$3,
                outputs: outputs$20,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childRangeBandSettings: new ContentChild(RangeBandSettingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SparklineComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SparklineComponent = __decorate$7([
    ComponentMixins([ComponentBase]),
    __metadata$7("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SparklineComponent);

/**
 * NgModule definition for the Sparkline component.
 */
class SparklineModule {
}
SparklineModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SparklineComponent,
                    RangeBandSettingDirective,
                    RangeBandSettingsDirective
                ],
                exports: [
                    SparklineComponent,
                    RangeBandSettingDirective,
                    RangeBandSettingsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SparklineModule.ctorParameters = () => [];

const SparklineTooltipService = { provide: 'ChartsSparklineTooltip', useValue: SparklineTooltip };
/**
 * NgModule definition for the Sparkline component with providers.
 */
class SparklineAllModule {
}
SparklineAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SparklineModule],
                exports: [
                    SparklineModule
                ],
                providers: [
                    SparklineTooltipService
                ]
            },] },
];
/**
 * @nocollapse
 */
SparklineAllModule.ctorParameters = () => [];

let input$17 = ['animationDuration', 'dataSource', 'enableAnimation', 'enableSmartLabels', 'fill', 'marker', 'name', 'opacity', 'points', 'reactance', 'resistance', 'tooltip', 'tooltipMappingName', 'visibility', 'width'];
let outputs$21 = [];
class SmithchartSeriesDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$21);
        this.directivePropList = input$17;
    }
}
SmithchartSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-seriesCollection>e-series',
                inputs: input$17,
                outputs: outputs$21,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SmithchartSeriesDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * SmithchartSeries Array Directive
 */
class SmithchartSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
SmithchartSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-smithchart>e-seriesCollection',
                queries: {
                    children: new ContentChildren(SmithchartSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SmithchartSeriesCollectionDirective.ctorParameters = () => [];

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$4 = ['background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width'];
const outputs$22 = ['animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
const twoWays$4 = [''];
/**
 * Smithchart Component
 * ```html
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
let SmithchartComponent = class SmithchartComponent extends Smithchart {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['series'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsSmithchartLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ChartsTooltipRender');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        this.registerEvents(outputs$22);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        this.context.ngAfterContentChecked(this);
    }
};
SmithchartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-smithchart',
                inputs: inputs$4,
                outputs: outputs$22,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(SmithchartSeriesCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SmithchartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SmithchartComponent = __decorate$8([
    ComponentMixins([ComponentBase]),
    __metadata$8("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SmithchartComponent);

/**
 * NgModule definition for the Smithchart component.
 */
class SmithchartModule {
}
SmithchartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SmithchartComponent,
                    SmithchartSeriesDirective,
                    SmithchartSeriesCollectionDirective
                ],
                exports: [
                    SmithchartComponent,
                    SmithchartSeriesDirective,
                    SmithchartSeriesCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SmithchartModule.ctorParameters = () => [];

const SmithchartLegendService = { provide: 'ChartsSmithchartLegend', useValue: SmithchartLegend };
const TooltipRenderService = { provide: 'ChartsTooltipRender', useValue: TooltipRender };
/**
 * NgModule definition for the Smithchart component with providers.
 */
class SmithchartAllModule {
}
SmithchartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SmithchartModule],
                exports: [
                    SmithchartModule
                ],
                providers: [
                    SmithchartLegendService,
                    TooltipRenderService
                ]
            },] },
];
/**
 * @nocollapse
 */
SmithchartAllModule.ctorParameters = () => [];

let input$18 = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs$23 = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series>
 * <e-trendlines>
 * </e-trendline>
 * <e-trendline>
 * </e-trendlines>
 * </e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
class StockChartTrendlineDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$23);
        this.directivePropList = input$18;
    }
}
StockChartTrendlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-series>e-trendlines>e-trendline',
                inputs: input$18,
                outputs: outputs$23,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartTrendlineDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartTrendline Array Directive
 */
class StockChartTrendlinesDirective extends ArrayBase {
    constructor() {
        super('trendlines');
    }
}
StockChartTrendlinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-series>e-trendlines',
                queries: {
                    children: new ContentChildren(StockChartTrendlineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartTrendlinesDirective.ctorParameters = () => [];

let input$19 = ['animation', 'bearFillColor', 'border', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'cornerRadius', 'dashArray', 'dataSource', 'emptyPointSettings', 'enableSolidCandles', 'enableTooltip', 'fill', 'high', 'legendImageUrl', 'legendShape', 'low', 'marker', 'name', 'opacity', 'open', 'pointColorMapping', 'query', 'selectionStyle', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];
let outputs$24 = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series></e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
class StockChartSeriesDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['trendlines'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$24);
        this.directivePropList = input$19;
    }
}
StockChartSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-series-collection>e-stockchart-series',
                inputs: input$19,
                outputs: outputs$24,
                queries: {
                    childTrendlines: new ContentChild(StockChartTrendlinesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartSeriesDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartSeries Array Directive
 */
class StockChartSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
StockChartSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-series-collection',
                queries: {
                    children: new ContentChildren(StockChartSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartSeriesCollectionDirective.ctorParameters = () => [];

let input$20 = ['coefficient', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableTrim', 'interval', 'intervalType', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'rangePadding', 'rowIndex', 'skeleton', 'skeletonType', 'span', 'startAngle', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
let outputs$25 = [];
/**
 * Axis Directive
 * ```html
 * <e-stockchart-axes><e-stockchart-axis></e-stockchart-axis></e-stockchart-axes>
 * ```
 */
class StockChartAxisDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$25);
        this.directivePropList = input$20;
    }
}
StockChartAxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-axes>e-stockchart-axis',
                inputs: input$20,
                outputs: outputs$25,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartAxisDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartAxis Array Directive
 */
class StockChartAxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
StockChartAxesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-axes',
                queries: {
                    children: new ContentChildren(StockChartAxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartAxesDirective.ctorParameters = () => [];

let input$21 = ['border', 'height'];
let outputs$26 = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
class StockChartRowDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$26);
        this.directivePropList = input$21;
    }
}
StockChartRowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-rows>e-striplines>e-stockchart-row',
                inputs: input$21,
                outputs: outputs$26,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartRowDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartRow Array Directive
 */
class StockChartRowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
StockChartRowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-rows',
                queries: {
                    children: new ContentChildren(StockChartRowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartRowsDirective.ctorParameters = () => [];

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$22 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
let outputs$27 = [];
/**
 * Annotation Directive
 * ```html
 * <e-stockchart-annotations><e-stockchart-annotation></e-stockchart-annotation><e-stockchart-annotations>
 * ```
 */
class StockChartAnnotationDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$27);
        this.directivePropList = input$22;
    }
}
StockChartAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart-annotations>e-stockchart-annotation',
                inputs: input$22,
                outputs: outputs$27,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartAnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
StockChartAnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$9([
    Template(),
    __metadata$9("design:type", Object)
], StockChartAnnotationDirective.prototype, "content", void 0);
/**
 * StockChartAnnotation Array Directive
 */
class StockChartAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
StockChartAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-annotations',
                queries: {
                    children: new ContentChildren(StockChartAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartAnnotationsDirective.ctorParameters = () => [];

let input$23 = ['point', 'series'];
let outputs$28 = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
class StockChartSelectedDataIndexDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$28);
        this.directivePropList = input$23;
    }
}
StockChartSelectedDataIndexDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex',
                inputs: input$23,
                outputs: outputs$28,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartSelectedDataIndexDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartSelectedDataIndex Array Directive
 */
class StockChartSelectedDataIndexesDirective extends ArrayBase {
    constructor() {
        super('selecteddataindexes');
    }
}
StockChartSelectedDataIndexesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-selectedDataIndexes',
                queries: {
                    children: new ContentChildren(StockChartSelectedDataIndexDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartSelectedDataIndexesDirective.ctorParameters = () => [];

let input$24 = ['interval', 'intervalType', 'selected', 'text'];
let outputs$29 = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-periods>
 * <e-stockchart-period></e-stockchart-period>
 * </e-stockchart-periods>
 * ```
 */
class StockChartPeriodDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$29);
        this.directivePropList = input$24;
    }
}
StockChartPeriodDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-indicators>e-stockchart-period',
                inputs: input$24,
                outputs: outputs$29,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartPeriodDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartPeriod Array Directive
 */
class StockChartPeriodsDirective extends ArrayBase {
    constructor() {
        super('periods');
    }
}
StockChartPeriodsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-periods',
                queries: {
                    children: new ContentChildren(StockChartPeriodDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartPeriodsDirective.ctorParameters = () => [];

let input$25 = ['background', 'border', 'date', 'description', 'placeAt', 'seriesIndexes', 'showOnSeries', 'text', 'textStyle', 'type'];
let outputs$30 = [];
/**
 * StockEvents
 * ```html
 * <e-stockchart-stockevents>
 * <e-stockchart-stockevent></e-stockchart-stockevent>
 * </e-stockchart-stockevents>
 * ```
 */
class StockEventDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$30);
        this.directivePropList = input$25;
    }
}
StockEventDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-indicators>e-stockchart-stockevent',
                inputs: input$25,
                outputs: outputs$30,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockEventDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockEvent Array Directive
 */
class StockEventsDirective extends ArrayBase {
    constructor() {
        super('stockevents');
    }
}
StockEventsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-stockevents',
                queries: {
                    children: new ContentChildren(StockEventDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockEventsDirective.ctorParameters = () => [];

let input$26 = ['animation', 'bandColor', 'close', 'dPeriod', 'dashArray', 'dataSource', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
let outputs$31 = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-indicators>
 * <e-stockchart-indicator></e-stockchart-indicator>
 * </e-stockchart-indicators>
 * ```
 */
class StockChartIndicatorDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$31);
        this.directivePropList = input$26;
    }
}
StockChartIndicatorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-indicators>e-stockchart-indicator',
                inputs: input$26,
                outputs: outputs$31,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartIndicatorDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * StockChartIndicator Array Directive
 */
class StockChartIndicatorsDirective extends ArrayBase {
    constructor() {
        super('indicators');
    }
}
StockChartIndicatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-indicators',
                queries: {
                    children: new ContentChildren(StockChartIndicatorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartIndicatorsDirective.ctorParameters = () => [];

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$5 = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings'];
const outputs$32 = ['axisLabelRender', 'legendClick', 'legendRender', 'load', 'loaded', 'onZooming', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender', 'dataSourceChange'];
const twoWays$5 = ['dataSource'];
/**
 * Stock Chart Component
 * ```html
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
let StockChartComponent = class StockChartComponent extends StockChart {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['series', 'axes', 'rows', 'annotations', 'selectedDataIndexes', 'periods', 'stockEvents', 'indicators'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ChartsColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('ChartsSplineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('ChartsSplineAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('ChartsStripLine');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('ChartsAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('ChartsRangeAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('ChartsTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('ChartsCrosshair');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('ChartsDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('ChartsZoom');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('ChartsDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('ChartsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('ChartsChartAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('ChartsHiloSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('ChartsHiloOpenCloseSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('ChartsCandleSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('ChartsSmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            let mod = this.injector.get('ChartsTmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            let mod = this.injector.get('ChartsEmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            let mod = this.injector.get('ChartsAccumulationDistributionIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            let mod = this.injector.get('ChartsMacdIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            let mod = this.injector.get('ChartsAtrIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            let mod = this.injector.get('ChartsRsiIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            let mod = this.injector.get('ChartsMomentumIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            let mod = this.injector.get('ChartsStochasticIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            let mod = this.injector.get('ChartsBollingerBands');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            let mod = this.injector.get('ChartsTrendlines');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        try {
            let mod = this.injector.get('ChartsRangeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_4) { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_5) { }
        try {
            let mod = this.injector.get('ChartsStockLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_6) { }
        this.registerEvents(outputs$32);
        this.addTwoWay.call(this, twoWays$5);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        if (this.childAxes) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childAxes);
        }
        if (this.childRows) {
            this.tagObjects[2].instance = /** @type {?} */ (this.childRows);
        }
        if (this.childAnnotations) {
            this.tagObjects[3].instance = /** @type {?} */ (this.childAnnotations);
        }
        if (this.childSelectedDataIndexes) {
            this.tagObjects[4].instance = /** @type {?} */ (this.childSelectedDataIndexes);
        }
        if (this.childPeriods) {
            this.tagObjects[5].instance = /** @type {?} */ (this.childPeriods);
        }
        if (this.childStockEvents) {
            this.tagObjects[6].instance = /** @type {?} */ (this.childStockEvents);
        }
        if (this.childIndicators) {
            this.tagObjects[7].instance = /** @type {?} */ (this.childIndicators);
        }
        this.context.ngAfterContentChecked(this);
    }
};
StockChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-stockchart',
                inputs: inputs$5,
                outputs: outputs$32,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(StockChartSeriesCollectionDirective),
                    childAxes: new ContentChild(StockChartAxesDirective),
                    childRows: new ContentChild(StockChartRowsDirective),
                    childAnnotations: new ContentChild(StockChartAnnotationsDirective),
                    childSelectedDataIndexes: new ContentChild(StockChartSelectedDataIndexesDirective),
                    childPeriods: new ContentChild(StockChartPeriodsDirective),
                    childStockEvents: new ContentChild(StockEventsDirective),
                    childIndicators: new ContentChild(StockChartIndicatorsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
StockChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$10([
    Template(),
    __metadata$10("design:type", Object)
], StockChartComponent.prototype, "tooltip_template", void 0);
StockChartComponent = __decorate$10([
    ComponentMixins([ComponentBase]),
    __metadata$10("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], StockChartComponent);

/**
 * NgModule definition for the StockChart component.
 */
class StockChartModule {
}
StockChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    StockChartComponent,
                    StockChartTrendlineDirective,
                    StockChartTrendlinesDirective,
                    StockChartSeriesDirective,
                    StockChartSeriesCollectionDirective,
                    StockChartAxisDirective,
                    StockChartAxesDirective,
                    StockChartRowDirective,
                    StockChartRowsDirective,
                    StockChartAnnotationDirective,
                    StockChartAnnotationsDirective,
                    StockChartSelectedDataIndexDirective,
                    StockChartSelectedDataIndexesDirective,
                    StockChartPeriodDirective,
                    StockChartPeriodsDirective,
                    StockEventDirective,
                    StockEventsDirective,
                    StockChartIndicatorDirective,
                    StockChartIndicatorsDirective
                ],
                exports: [
                    StockChartComponent,
                    StockChartTrendlineDirective,
                    StockChartTrendlinesDirective,
                    StockChartSeriesDirective,
                    StockChartSeriesCollectionDirective,
                    StockChartAxisDirective,
                    StockChartAxesDirective,
                    StockChartRowDirective,
                    StockChartRowsDirective,
                    StockChartAnnotationDirective,
                    StockChartAnnotationsDirective,
                    StockChartSelectedDataIndexDirective,
                    StockChartSelectedDataIndexesDirective,
                    StockChartPeriodDirective,
                    StockChartPeriodsDirective,
                    StockEventDirective,
                    StockEventsDirective,
                    StockChartIndicatorDirective,
                    StockChartIndicatorsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
StockChartModule.ctorParameters = () => [];

const StockLegendService = { provide: 'ChartsStockLegend', useValue: StockLegend };
/**
 * NgModule definition for the StockChart component with providers.
 */
class StockChartAllModule {
}
StockChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StockChartModule],
                exports: [
                    StockChartModule
                ],
                providers: [
                    StockLegendService
                ]
            },] },
];
/**
 * @nocollapse
 */
StockChartAllModule.ctorParameters = () => [];

let input$27 = ['color', 'end', 'index', 'legendImageUrl', 'name', 'opacity', 'shape'];
let outputs$33 = [];
/**
 * BulletRange Directive
 * ```html
 * <e-bullet-range-collection>
 * <e-bullet-range></e-bullet-range>
 * </e-bullet-range-collection>
 * ```
 */
class BulletRangeDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$33);
        this.directivePropList = input$27;
    }
}
BulletRangeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-bullet-range-collection>e-bullet-range',
                inputs: input$27,
                outputs: outputs$33,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
BulletRangeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * BulletRange Array Directive
 */
class BulletRangeCollectionDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
BulletRangeCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-bulletchart>e-bullet-range-collection',
                queries: {
                    children: new ContentChildren(BulletRangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
BulletRangeCollectionDirective.ctorParameters = () => [];

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$6 = ['animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'legendSettings', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width'];
const outputs$34 = ['beforePrint', 'bulletChartMouseClick', 'legendRender', 'load', 'loaded', 'tooltipRender', 'dataSourceChange'];
const twoWays$6 = ['dataSource'];
/**
 * BulletChart Component
 * ```html
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
let BulletChartComponent = class BulletChartComponent extends BulletChart {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['ranges'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsBulletTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ChartsBulletChartLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        this.registerEvents(outputs$34);
        this.addTwoWay.call(this, twoWays$6);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childRanges;
        this.context.ngAfterContentChecked(this);
    }
};
BulletChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-bulletchart',
                inputs: inputs$6,
                outputs: outputs$34,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childRanges: new ContentChild(BulletRangeCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
BulletChartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
BulletChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$11([
    Template(),
    __metadata$11("design:type", Object)
], BulletChartComponent.prototype, "tooltip_template", void 0);
BulletChartComponent = __decorate$11([
    ComponentMixins([ComponentBase]),
    __metadata$11("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], BulletChartComponent);

/**
 * NgModule definition for the BulletChart component.
 */
class BulletChartModule {
}
BulletChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    BulletChartComponent,
                    BulletRangeDirective,
                    BulletRangeCollectionDirective
                ],
                exports: [
                    BulletChartComponent,
                    BulletRangeDirective,
                    BulletRangeCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
BulletChartModule.ctorParameters = () => [];

const BulletTooltipService = { provide: 'ChartsBulletTooltip', useValue: BulletTooltip };
const BulletChartLegendService = { provide: 'ChartsBulletChartLegend', useValue: BulletChartLegend };
/**
 * NgModule definition for the BulletChart component with providers.
 */
class BulletChartAllModule {
}
BulletChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, BulletChartModule],
                exports: [
                    BulletChartModule
                ],
                providers: [
                    BulletTooltipService,
                    BulletChartLegendService
                ]
            },] },
];
/**
 * @nocollapse
 */
BulletChartAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { TrendlineDirective, TrendlinesDirective, SegmentDirective, SegmentsDirective, SeriesDirective, SeriesCollectionDirective, StripLineDirective, StripLinesDirective, CategoryDirective, CategoriesDirective, MultiLevelLabelDirective, MultiLevelLabelsDirective, AxisDirective, AxesDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, RangeColorSettingDirective, RangeColorSettingsDirective, AnnotationDirective, AnnotationsDirective, SelectedDataIndexDirective, SelectedDataIndexesDirective, IndicatorDirective, IndicatorsDirective, ChartComponent, ChartModule, ChartAllModule, LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, SplineAreaSeriesService, StripLineService, AreaSeriesService, ScrollBarService, StepLineSeriesService, StepAreaSeriesService, StackingColumnSeriesService, StackingLineSeriesService, StackingAreaSeriesService, StackingStepAreaSeriesService, BarSeriesService, StackingBarSeriesService, RangeColumnSeriesService, BubbleSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, LegendService, ZoomService, DataLabelService, SelectionService, ChartAnnotationService, HiloSeriesService, HiloOpenCloseSeriesService, WaterfallSeriesService, RangeAreaSeriesService, SplineRangeAreaSeriesService, CandleSeriesService, PolarSeriesService, RadarSeriesService, SmaIndicatorService, TmaIndicatorService, EmaIndicatorService, AccumulationDistributionIndicatorService, MacdIndicatorService, AtrIndicatorService, RsiIndicatorService, MomentumIndicatorService, StochasticIndicatorService, BollingerBandsService, BoxAndWhiskerSeriesService, HistogramSeriesService, ErrorBarService, TrendlinesService, DateTimeCategoryService, MultiColoredLineSeriesService, MultiColoredAreaSeriesService, MultiLevelLabelService, ParetoSeriesService, ExportService, DataEditingService, HighlightService, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationAnnotationDirective, AccumulationAnnotationsDirective, AccumulationChartComponent, AccumulationChartModule, AccumulationChartAllModule, PieSeriesService, FunnelSeriesService, PyramidSeriesService, AccumulationTooltipService, AccumulationLegendService, AccumulationSelectionService, AccumulationDataLabelService, AccumulationAnnotationService, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, RangeNavigatorComponent, RangeNavigatorModule, RangeNavigatorAllModule, RangeTooltipService, PeriodSelectorService, RangeBandSettingDirective, RangeBandSettingsDirective, SparklineComponent, SparklineModule, SparklineAllModule, SparklineTooltipService, SmithchartSeriesDirective, SmithchartSeriesCollectionDirective, SmithchartComponent, SmithchartModule, SmithchartAllModule, SmithchartLegendService, TooltipRenderService, StockChartTrendlineDirective, StockChartTrendlinesDirective, StockChartSeriesDirective, StockChartSeriesCollectionDirective, StockChartAxisDirective, StockChartAxesDirective, StockChartRowDirective, StockChartRowsDirective, StockChartAnnotationDirective, StockChartAnnotationsDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective, StockChartPeriodDirective, StockChartPeriodsDirective, StockEventDirective, StockEventsDirective, StockChartIndicatorDirective, StockChartIndicatorsDirective, StockChartComponent, StockChartModule, StockChartAllModule, StockLegendService, BulletRangeDirective, BulletRangeCollectionDirective, BulletChartComponent, BulletChartModule, BulletChartAllModule, BulletTooltipService, BulletChartLegendService, inputs$1 as ɵc, outputs$16 as ɵd, inputs$6 as ɵm, outputs$34 as ɵn, inputs as ɵa, outputs$13 as ɵb, inputs$2 as ɵe, outputs$18 as ɵf, inputs$4 as ɵi, outputs$22 as ɵj, inputs$3 as ɵg, outputs$20 as ɵh, inputs$5 as ɵk, outputs$32 as ɵl };
export { RangeColorSetting, CrosshairSettings, ZoomSettings, Chart, Row, Column, MajorGridLines, MinorGridLines, AxisLine, MajorTickLines, MinorTickLines, CrosshairTooltip, Axis, VisibleLabels, Double, DateTime, Category, Logarithmic, DateTimeCategory, NiceInterval, StripLine, Connector, Font, Border, Offset, ChartArea, Margin, ContainerPadding, Animation, Indexes, CornerRadius, Index, EmptyPointSettings, DragSettings, TooltipSettings, Periods, PeriodSelectorSettings, LineSeries, ColumnSeries, AreaSeries, BarSeries, PolarSeries, RadarSeries, StackingBarSeries, CandleSeries, StackingColumnSeries, StepLineSeries, StepAreaSeries, StackingAreaSeries, StackingStepAreaSeries, StackingLineSeries, ScatterSeries, RangeColumnSeries, WaterfallSeries, HiloSeries, HiloOpenCloseSeries, RangeAreaSeries, SplineRangeAreaSeries, BubbleSeries, SplineSeries, HistogramSeries, SplineAreaSeries, TechnicalIndicator, SmaIndicator, EmaIndicator, TmaIndicator, AccumulationDistributionIndicator, AtrIndicator, MomentumIndicator, RsiIndicator, StochasticIndicator, BollingerBands, MacdIndicator, Trendlines, sort, isBreakLabel, getVisiblePoints, rotateTextSize, removeElement, logBase, showTooltip, inside, withIn, logWithIn, withInRange, sum, subArraySum, subtractThickness, subtractRect, degreeToLocation, degreeToRadian, getRotatedRectangleCoordinates, isRotatedRectIntersect, getAngle, subArray, valueToCoefficient, TransformToVisible, indexFinder, CoefficientToVector, valueToPolarCoefficient, Mean, PolarArc, createTooltip, createZoomingLabels, findCrosshairDirection, withInBounds, getValueXByPoint, getValueYByPoint, findClipRect, firstToLowerCase, getTransform, getMinPointsDelta, getAnimationFunction, linear, markerAnimate, animateRectElement, pathAnimation, appendClipElement, triggerLabelRender, setRange, isZoomSet, getActualDesiredIntervalsCount, templateAnimate, drawSymbol, calculateShapes, getRectLocation, minMax, getElement, getTemplateFunction, accReactTemplate, chartReactTemplate, createTemplate, getFontStyle, measureElementRect, findlElement, getPoint, appendElement, appendChildElement, getDraggedRectLocation, checkBounds, getLabelText, stopTimer, isCollide, isOverlap, containsRect, calculateRect, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, getSaturationColor, getMedian, calculateLegendShapes, textTrim, lineBreakLabelTrim, stringToNumber, redrawElement, animateRedrawElement, textElement, calculateSize, createSvg, getTitle, titlePositionX, textWrap, getUnicodeText, blazorTemplatesReset, CustomizeOption, StackValues, RectOption, ImageOption, CircleOption, PolygonOption, ChartLocation, LabelLocation, Thickness, ColorValue, PointData, AccPointData, ControlPoints, getColorByValue, getGradientColor, getPercentageColor, getPercentage, getTextAnchor, Crosshair, Tooltip, Zoom, Selection, DataEditing, Highlight, DataLabel, ErrorBar, DataLabelSettings, MarkerSettings, Points, Trendline, ErrorBarCapSettings, ChartSegment, ErrorBarSettings, SeriesBase, Series, Legend, ChartAnnotation, ChartAnnotationSettings, LabelBorder, MultiLevelCategories, StripLineSettings, MultiLevelLabels, ScrollbarSettingsRange, ScrollbarSettings, BoxAndWhiskerSeries, MultiColoredAreaSeries, MultiColoredLineSeries, MultiColoredSeries, MultiLevelLabel, ScrollBar, ParetoSeries, Export, AccumulationChart, AccumulationAnnotationSettings, AccumulationDataLabelSettings, PieCenter, AccPoints, AccumulationSeries, getSeriesFromIndex, pointByIndex, PieSeries, FunnelSeries, PyramidSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, AccumulationHighlight, AccumulationAnnotation, StockChart, StockChartFont, StockChartBorder, StockChartArea, StockMargin, StockChartStripLineSettings, StockEmptyPointSettings, StockChartConnector, StockSeries, StockChartIndicator, StockChartAxis, StockChartRow, StockChartTrendline, StockChartAnnotationSettings, StockChartIndexes, StockEventsSettings, StockChartLegendSettings, StockLegend, loaded, legendClick, load, animationComplete, legendRender, textRender, pointRender, sharedTooltipRender, seriesRender, axisLabelRender, axisLabelClick, axisRangeCalculated, axisMultiLabelRender, tooltipRender, chartMouseMove, chartMouseClick, chartDoubleClick, pointClick, pointDoubleClick, pointMove, chartMouseLeave, chartMouseDown, chartMouseUp, zoomComplete, dragComplete, selectionComplete, resized, beforeResize, beforePrint, annotationRender, scrollStart, scrollEnd, scrollChanged, stockEventRender, multiLevelLabelClick, dragStart, drag, dragEnd, regSub, regSup, beforeExport, afterExport, bulletChartMouseClick, onZooming, Theme, getSeriesColor, getThemeColor, getScrollbarThemeColor, PeriodSelector, RangeNavigator, rangeValueToCoefficient, getXLocation, getRangeValueXByPoint, getExactData, getNearestValue, DataPoint, RangeNavigatorTheme, getRangeThemeColor, RangeNavigatorAxis, RangeSeries, RangeSlider, RangeNavigatorSeries, ThumbSettings, StyleSettings, RangeTooltipSettings, RangeTooltip, BulletChart, Range, MajorTickLinesSettings, MinorTickLinesSettings, BulletLabelStyle, BulletTooltipSettings, BulletDataLabel, BulletChartLegendSettings, BulletChartTheme, getBulletThemeColor, BulletTooltip, BulletChartLegend, Smithchart, SmithchartMajorGridLines, SmithchartMinorGridLines, SmithchartAxisLine, SmithchartAxis, LegendTitle, LegendLocation, LegendItemStyleBorder, LegendItemStyle, LegendBorder, SmithchartLegendSettings, SeriesTooltipBorder, SeriesTooltip, SeriesMarkerBorder, SeriesMarkerDataLabelBorder, SeriesMarkerDataLabelConnectorLine, SeriesMarkerDataLabel, SeriesMarker, SmithchartSeries, TooltipRender, Subtitle, Title, SmithchartFont, SmithchartMargin, SmithchartBorder, SmithchartRect, LabelCollection, LegendSeries, LabelRegion, HorizontalLabelCollection, RadialLabelCollections, LineSegment, PointRegion, Point, ClosestPoint, MarkerOptions, SmithchartLabelPosition, Direction, DataLabelTextOptions, LabelOption, SmithchartSize, GridArcPoints, smithchartBeforePrint, SmithchartLegend, Sparkline, SparklineTooltip, SparklineBorder, SparklineFont, TrackLineSettings, SparklineTooltipSettings, ContainerArea, LineSettings, RangeBandSettings, AxisSettings, Padding, SparklineMarkerSettings, LabelOffset, SparklineDataLabelSettings } from '@syncfusion/ej2-charts';
//# sourceMappingURL=ej2-angular-charts.js.map
