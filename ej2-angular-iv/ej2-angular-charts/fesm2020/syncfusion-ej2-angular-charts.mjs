import * as i0 from '@angular/core';
import { Directive, ContentChildren, ContentChild, Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, Template, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { Chart, LineSeries, ScatterSeries, ColumnSeries, SplineSeries, SplineAreaSeries, StripLine, AreaSeries, ScrollBar, StepLineSeries, StepAreaSeries, StackingColumnSeries, StackingLineSeries, StackingAreaSeries, StackingStepAreaSeries, BarSeries, StackingBarSeries, RangeColumnSeries, BubbleSeries, Tooltip, Crosshair, Category, DateTime, Logarithmic, Legend, Zoom, DataLabel, Selection, ChartAnnotation, HiloSeries, HiloOpenCloseSeries, WaterfallSeries, RangeAreaSeries, SplineRangeAreaSeries, CandleSeries, PolarSeries, RadarSeries, SmaIndicator, TmaIndicator, EmaIndicator, AccumulationDistributionIndicator, MacdIndicator, AtrIndicator, RsiIndicator, MomentumIndicator, StochasticIndicator, BollingerBands, BoxAndWhiskerSeries, HistogramSeries, ErrorBar, Trendlines, DateTimeCategory, MultiColoredLineSeries, MultiColoredAreaSeries, MultiLevelLabel, ParetoSeries, Export, DataEditing, Highlight, AccumulationChart, PieSeries, FunnelSeries, PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationSelection, AccumulationDataLabel, AccumulationAnnotation, RangeNavigator, RangeTooltip, PeriodSelector, Sparkline, SparklineTooltip, Smithchart, SmithchartLegend, TooltipRender, StockChart, StockLegend, BulletChart, BulletTooltip, BulletChartLegend } from '@syncfusion/ej2-charts';
export * from '@syncfusion/ej2-charts';
import { CommonModule } from '@angular/common';

let input$r = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs$y = [];
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
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$y);
        this.directivePropList = input$r;
    }
}
TrendlineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
TrendlineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TrendlineDirective, selector: "e-series>e-trendlines>e-trendline", inputs: { animation: "animation", backwardForecast: "backwardForecast", dashArray: "dashArray", enableTooltip: "enableTooltip", fill: "fill", forwardForecast: "forwardForecast", intercept: "intercept", legendShape: "legendShape", marker: "marker", name: "name", period: "period", polynomialOrder: "polynomialOrder", type: "type", visible: "visible", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series>e-trendlines>e-trendline',
                    inputs: input$r,
                    outputs: outputs$y,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Trendline Array Directive
 * @private
 */
class TrendlinesDirective extends ArrayBase {
    constructor() {
        super('trendlines');
    }
}
TrendlinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TrendlinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TrendlinesDirective, selector: "e-series>e-trendlines", queries: [{ propertyName: "children", predicate: TrendlineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series>e-trendlines',
                    queries: {
                        children: new ContentChildren(TrendlineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$q = ['color', 'dashArray', 'value'];
let outputs$x = [];
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
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$x);
        this.directivePropList = input$q;
    }
}
SegmentDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SegmentDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SegmentDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SegmentDirective, selector: "e-series>e-segments>e-segment", inputs: { color: "color", dashArray: "dashArray", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SegmentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series>e-segments>e-segment',
                    inputs: input$q,
                    outputs: outputs$x,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Segment Array Directive
 * @private
 */
class SegmentsDirective extends ArrayBase {
    constructor() {
        super('segments');
    }
}
SegmentsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SegmentsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SegmentsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SegmentsDirective, selector: "e-series>e-segments", queries: [{ propertyName: "children", predicate: SegmentDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SegmentsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series>e-segments',
                    queries: {
                        children: new ContentChildren(SegmentDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$p = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'colorName', 'columnSpacing', 'columnWidth', 'columnWidthInPixel', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'groupName', 'high', 'intermediateSumIndexes', 'isClosed', 'legendImageUrl', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'nonHighlightStyle', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'unSelectedStyle', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
let outputs$w = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series></e-series>
 * </e-series-collection>
 * ```
 */
class SeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['trendlines', 'segments'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$w);
        this.directivePropList = input$p;
    }
}
SeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SeriesDirective, selector: "e-series-collection>e-series", inputs: { animation: "animation", bearFillColor: "bearFillColor", binInterval: "binInterval", border: "border", boxPlotMode: "boxPlotMode", bullFillColor: "bullFillColor", cardinalSplineTension: "cardinalSplineTension", close: "close", colorName: "colorName", columnSpacing: "columnSpacing", columnWidth: "columnWidth", columnWidthInPixel: "columnWidthInPixel", connector: "connector", cornerRadius: "cornerRadius", dashArray: "dashArray", dataSource: "dataSource", dragSettings: "dragSettings", drawType: "drawType", emptyPointSettings: "emptyPointSettings", enableComplexProperty: "enableComplexProperty", enableSolidCandles: "enableSolidCandles", enableTooltip: "enableTooltip", errorBar: "errorBar", fill: "fill", groupName: "groupName", high: "high", intermediateSumIndexes: "intermediateSumIndexes", isClosed: "isClosed", legendImageUrl: "legendImageUrl", legendShape: "legendShape", low: "low", marker: "marker", maxRadius: "maxRadius", minRadius: "minRadius", name: "name", negativeFillColor: "negativeFillColor", nonHighlightStyle: "nonHighlightStyle", opacity: "opacity", open: "open", pointColorMapping: "pointColorMapping", query: "query", segmentAxis: "segmentAxis", segments: "segments", selectionStyle: "selectionStyle", showMean: "showMean", showNormalDistribution: "showNormalDistribution", size: "size", splineType: "splineType", stackingGroup: "stackingGroup", sumIndexes: "sumIndexes", summaryFillColor: "summaryFillColor", tooltipFormat: "tooltipFormat", tooltipMappingName: "tooltipMappingName", trendlines: "trendlines", type: "type", unSelectedStyle: "unSelectedStyle", visible: "visible", volume: "volume", width: "width", xAxisName: "xAxisName", xName: "xName", yAxisName: "yAxisName", yName: "yName", zOrder: "zOrder" }, queries: [{ propertyName: "dataLabel_template", first: true, predicate: ["dataLabelTemplate"], descendants: true }, { propertyName: "childTrendlines", first: true, predicate: TrendlinesDirective, descendants: true }, { propertyName: "childSegments", first: true, predicate: SegmentsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], SeriesDirective.prototype, "dataLabel_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series-collection>e-series',
                    inputs: input$p,
                    outputs: outputs$w,
                    queries: {
                        childTrendlines: new ContentChild(TrendlinesDirective),
                        childSegments: new ContentChild(SegmentsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { dataLabel_template: [{
                type: ContentChild,
                args: ['dataLabelTemplate']
            }] } });
/**
 * Series Array Directive
 * @private
 */
class SeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
SeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SeriesCollectionDirective, selector: "ej-chart>e-series-collection", queries: [{ propertyName: "children", predicate: SeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-chart>e-series-collection',
                    queries: {
                        children: new ContentChildren(SeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$o = ['border', 'color', 'dashArray', 'end', 'horizontalAlignment', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
let outputs$v = [];
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
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$v);
        this.directivePropList = input$o;
    }
}
StripLineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StripLineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StripLineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StripLineDirective, selector: "e-axis>e-striplines>e-stripline", inputs: { border: "border", color: "color", dashArray: "dashArray", end: "end", horizontalAlignment: "horizontalAlignment", isRepeat: "isRepeat", isSegmented: "isSegmented", opacity: "opacity", repeatEvery: "repeatEvery", repeatUntil: "repeatUntil", rotation: "rotation", segmentAxisName: "segmentAxisName", segmentEnd: "segmentEnd", segmentStart: "segmentStart", size: "size", sizeType: "sizeType", start: "start", startFromAxis: "startFromAxis", text: "text", textStyle: "textStyle", verticalAlignment: "verticalAlignment", visible: "visible", zIndex: "zIndex" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StripLineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axis>e-striplines>e-stripline',
                    inputs: input$o,
                    outputs: outputs$v,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StripLine Array Directive
 * @private
 */
class StripLinesDirective extends ArrayBase {
    constructor() {
        super('striplines');
    }
}
StripLinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StripLinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StripLinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StripLinesDirective, selector: "e-axis>e-striplines", queries: [{ propertyName: "children", predicate: StripLineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StripLinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axis>e-striplines',
                    queries: {
                        children: new ContentChildren(StripLineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$n = ['customAttributes', 'end', 'maximumTextWidth', 'start', 'text', 'type'];
let outputs$u = [];
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
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$u);
        this.directivePropList = input$n;
    }
}
CategoryDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CategoryDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CategoryDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CategoryDirective, selector: "e-multilevellabel>e-categories>e-category", inputs: { customAttributes: "customAttributes", end: "end", maximumTextWidth: "maximumTextWidth", start: "start", text: "text", type: "type" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CategoryDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-multilevellabel>e-categories>e-category',
                    inputs: input$n,
                    outputs: outputs$u,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Category Array Directive
 * @private
 */
class CategoriesDirective extends ArrayBase {
    constructor() {
        super('categories');
    }
}
CategoriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CategoriesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CategoriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CategoriesDirective, selector: "e-multilevellabel>e-categories", queries: [{ propertyName: "children", predicate: CategoryDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CategoriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-multilevellabel>e-categories',
                    queries: {
                        children: new ContentChildren(CategoryDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$m = ['alignment', 'border', 'categories', 'overflow', 'textStyle'];
let outputs$t = [];
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
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['categories'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$t);
        this.directivePropList = input$m;
    }
}
MultiLevelLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
MultiLevelLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MultiLevelLabelDirective, selector: "e-axis>e-multilevellabels>e-multilevellabel", inputs: { alignment: "alignment", border: "border", categories: "categories", overflow: "overflow", textStyle: "textStyle" }, queries: [{ propertyName: "childCategories", first: true, predicate: CategoriesDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axis>e-multilevellabels>e-multilevellabel',
                    inputs: input$m,
                    outputs: outputs$t,
                    queries: {
                        childCategories: new ContentChild(CategoriesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * MultiLevelLabel Array Directive
 * @private
 */
class MultiLevelLabelsDirective extends ArrayBase {
    constructor() {
        super('multilevellabels');
    }
}
MultiLevelLabelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MultiLevelLabelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MultiLevelLabelsDirective, selector: "e-axis>e-multilevellabels", queries: [{ propertyName: "children", predicate: MultiLevelLabelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axis>e-multilevellabels',
                    queries: {
                        children: new ContentChildren(MultiLevelLabelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$l = ['border', 'coefficient', 'columnIndex', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableScrollbarOnZooming', 'enableTrim', 'interval', 'intervalType', 'isIndexed', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPadding', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineBreakAlignment', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'multiLevelLabels', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'plotOffsetBottom', 'plotOffsetLeft', 'plotOffsetRight', 'plotOffsetTop', 'rangePadding', 'rowIndex', 'scrollbarSettings', 'skeleton', 'skeletonType', 'span', 'startAngle', 'startFromZero', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titlePadding', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
let outputs$s = [];
/**
 * Axis Directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
class AxisDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['stripLines', 'multiLevelLabels'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$s);
        this.directivePropList = input$l;
    }
}
AxisDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AxisDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxisDirective, selector: "e-axes>e-axis", inputs: { border: "border", coefficient: "coefficient", columnIndex: "columnIndex", crossesAt: "crossesAt", crossesInAxis: "crossesInAxis", crosshairTooltip: "crosshairTooltip", description: "description", desiredIntervals: "desiredIntervals", edgeLabelPlacement: "edgeLabelPlacement", enableAutoIntervalOnZooming: "enableAutoIntervalOnZooming", enableScrollbarOnZooming: "enableScrollbarOnZooming", enableTrim: "enableTrim", interval: "interval", intervalType: "intervalType", isIndexed: "isIndexed", isInversed: "isInversed", labelFormat: "labelFormat", labelIntersectAction: "labelIntersectAction", labelPadding: "labelPadding", labelPlacement: "labelPlacement", labelPosition: "labelPosition", labelRotation: "labelRotation", labelStyle: "labelStyle", lineBreakAlignment: "lineBreakAlignment", lineStyle: "lineStyle", logBase: "logBase", majorGridLines: "majorGridLines", majorTickLines: "majorTickLines", maximum: "maximum", maximumLabelWidth: "maximumLabelWidth", maximumLabels: "maximumLabels", minimum: "minimum", minorGridLines: "minorGridLines", minorTickLines: "minorTickLines", minorTicksPerInterval: "minorTicksPerInterval", multiLevelLabels: "multiLevelLabels", name: "name", opposedPosition: "opposedPosition", placeNextToAxisLine: "placeNextToAxisLine", plotOffset: "plotOffset", plotOffsetBottom: "plotOffsetBottom", plotOffsetLeft: "plotOffsetLeft", plotOffsetRight: "plotOffsetRight", plotOffsetTop: "plotOffsetTop", rangePadding: "rangePadding", rowIndex: "rowIndex", scrollbarSettings: "scrollbarSettings", skeleton: "skeleton", skeletonType: "skeletonType", span: "span", startAngle: "startAngle", startFromZero: "startFromZero", stripLines: "stripLines", tabIndex: "tabIndex", tickPosition: "tickPosition", title: "title", titlePadding: "titlePadding", titleStyle: "titleStyle", valueType: "valueType", visible: "visible", zoomFactor: "zoomFactor", zoomPosition: "zoomPosition" }, queries: [{ propertyName: "childStripLines", first: true, predicate: StripLinesDirective, descendants: true }, { propertyName: "childMultiLevelLabels", first: true, predicate: MultiLevelLabelsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axes>e-axis',
                    inputs: input$l,
                    outputs: outputs$s,
                    queries: {
                        childStripLines: new ContentChild(StripLinesDirective),
                        childMultiLevelLabels: new ContentChild(MultiLevelLabelsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Axis Array Directive
 * @private
 */
class AxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
AxesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AxesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxesDirective, selector: "ejs-chart>e-axes", queries: [{ propertyName: "children", predicate: AxisDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-axes',
                    queries: {
                        children: new ContentChildren(AxisDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$k = ['border', 'height'];
let outputs$r = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
class RowDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$r);
        this.directivePropList = input$k;
    }
}
RowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RowDirective, selector: "e-rows>e-row", inputs: { border: "border", height: "height" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rows>e-row',
                    inputs: input$k,
                    outputs: outputs$r,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Row Array Directive
 * @private
 */
class RowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
RowsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RowsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RowsDirective, selector: "ejs-chart>e-rows", queries: [{ propertyName: "children", predicate: RowDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-rows',
                    queries: {
                        children: new ContentChildren(RowDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$j = ['border', 'width'];
let outputs$q = [];
/**
 * Column Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
 * ```
 */
class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$q);
        this.directivePropList = input$j;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "e-columns>e-column", inputs: { border: "border", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-columns>e-column',
                    inputs: input$j,
                    outputs: outputs$q,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Column Array Directive
 * @private
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-chart>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$i = ['colors', 'end', 'label', 'start'];
let outputs$p = [];
/**
 * RangeColorSetting Directive
 * ```html
 * <e-rangeColorSettings><e-rangeColorSetting></e-rangeColorSetting><e-rangeColorSettings>
 * ```
 */
class RangeColorSettingDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$p);
        this.directivePropList = input$i;
    }
}
RangeColorSettingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeColorSettingDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangeColorSettingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeColorSettingDirective, selector: "e-rangecolorsettings>e-rangecolorsetting", inputs: { colors: "colors", end: "end", label: "label", start: "start" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeColorSettingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rangecolorsettings>e-rangecolorsetting',
                    inputs: input$i,
                    outputs: outputs$p,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * RangeColorSetting Array Directive
 * @private
 */
class RangeColorSettingsDirective extends ArrayBase {
    constructor() {
        super('rangecolorsettings');
    }
}
RangeColorSettingsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeColorSettingsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangeColorSettingsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeColorSettingsDirective, selector: "ejs-chart>e-rangecolorsettings", queries: [{ propertyName: "children", predicate: RangeColorSettingDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeColorSettingsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-rangecolorsettings',
                    queries: {
                        children: new ContentChildren(RangeColorSettingDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$h = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
let outputs$o = [];
/**
 * Annotation Directive
 * ```html
 * <e-annotations><e-annotation></e-annotation><e-annotations>
 * ```
 */
class AnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$o);
        this.directivePropList = input$h;
    }
}
AnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationDirective, selector: "e-annotations>e-annotation", inputs: { content: "content", coordinateUnits: "coordinateUnits", description: "description", horizontalAlignment: "horizontalAlignment", region: "region", verticalAlignment: "verticalAlignment", x: "x", xAxisName: "xAxisName", y: "y", yAxisName: "yAxisName" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-annotations>e-annotation',
                    inputs: input$h,
                    outputs: outputs$o,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Annotation Array Directive
 * @private
 */
class AnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationsDirective, selector: "ejs-chart>e-annotations", queries: [{ propertyName: "children", predicate: AnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-annotations',
                    queries: {
                        children: new ContentChildren(AnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$g = ['point', 'series'];
let outputs$n = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
class SelectedDataIndexDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$n);
        this.directivePropList = input$g;
    }
}
SelectedDataIndexDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SelectedDataIndexDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SelectedDataIndexDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SelectedDataIndexDirective, selector: "e-selecteddataindexes>e-selecteddataindex", inputs: { point: "point", series: "series" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SelectedDataIndexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-selecteddataindexes>e-selecteddataindex',
                    inputs: input$g,
                    outputs: outputs$n,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * SelectedDataIndex Array Directive
 * @private
 */
class SelectedDataIndexesDirective extends ArrayBase {
    constructor() {
        super('selecteddataindexes');
    }
}
SelectedDataIndexesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SelectedDataIndexesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SelectedDataIndexesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SelectedDataIndexesDirective, selector: "ejs-chart>e-selecteddataindexes", queries: [{ propertyName: "children", predicate: SelectedDataIndexDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SelectedDataIndexesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-selecteddataindexes',
                    queries: {
                        children: new ContentChildren(SelectedDataIndexDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$f = ['animation', 'bandColor', 'close', 'colorName', 'dPeriod', 'dashArray', 'dataSource', 'enableComplexProperty', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
let outputs$m = [];
/**
 * Indicator Directive
 * ```html
 * <e-indicators>
 * <e-indicator></e-indicator>
 * </e-indicators>
 * ```
 */
class IndicatorDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$m);
        this.directivePropList = input$f;
    }
}
IndicatorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: IndicatorDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
IndicatorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: IndicatorDirective, selector: "e-indicators>e-indicator", inputs: { animation: "animation", bandColor: "bandColor", close: "close", colorName: "colorName", dPeriod: "dPeriod", dashArray: "dashArray", dataSource: "dataSource", enableComplexProperty: "enableComplexProperty", fastPeriod: "fastPeriod", field: "field", fill: "fill", high: "high", kPeriod: "kPeriod", low: "low", lowerLine: "lowerLine", macdLine: "macdLine", macdNegativeColor: "macdNegativeColor", macdPositiveColor: "macdPositiveColor", macdType: "macdType", open: "open", overBought: "overBought", overSold: "overSold", period: "period", periodLine: "periodLine", pointColorMapping: "pointColorMapping", query: "query", segmentAxis: "segmentAxis", segments: "segments", seriesName: "seriesName", showZones: "showZones", slowPeriod: "slowPeriod", standardDeviation: "standardDeviation", type: "type", upperLine: "upperLine", visible: "visible", volume: "volume", width: "width", xAxisName: "xAxisName", xName: "xName", yAxisName: "yAxisName" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: IndicatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-indicators>e-indicator',
                    inputs: input$f,
                    outputs: outputs$m,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Indicator Array Directive
 * @private
 */
class IndicatorsDirective extends ArrayBase {
    constructor() {
        super('indicators');
    }
}
IndicatorsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: IndicatorsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IndicatorsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: IndicatorsDirective, selector: "ej-chart>e-indicators", queries: [{ propertyName: "children", predicate: IndicatorDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: IndicatorsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-chart>e-indicators',
                    queries: {
                        children: new ContentChildren(IndicatorDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$6 = ['allowExport', 'allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableAutoIntervalOnBothAxis', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rangeColorSettings', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
const outputs$l = ['afterExport', 'animationComplete', 'annotationRender', 'axisLabelClick', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointDoubleClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'sharedTooltipRender', 'textRender', 'tooltipRender', 'zoomComplete', 'dataSourceChange'];
const twoWays$6 = ['dataSource'];
/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
let ChartComponent = class ChartComponent extends Chart {
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
        catch { }
        try {
            let mod = this.injector.get('ChartsScatterSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSplineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSplineAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStripLine');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsScrollBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStepLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStepAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStackingColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStackingLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStackingAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStackingStepAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsBarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStackingBarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRangeColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsBubbleSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCrosshair');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCategory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsLogarithmic');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsZoom');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsChartAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsHiloSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsHiloOpenCloseSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsWaterfallSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRangeAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSplineRangeAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCandleSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsPolarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRadarSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsTmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsEmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationDistributionIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMacdIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAtrIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRsiIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMomentumIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStochasticIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsBollingerBands');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsBoxAndWhiskerSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsHistogramSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsErrorBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsTrendlines');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDateTimeCategory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMultiColoredLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMultiColoredAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMultiLevelLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsParetoSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDataEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsHighlight');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$l);
        this.addTwoWay.call(this, twoWays$6);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
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
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChartComponent, selector: "ejs-chart", inputs: { allowExport: "allowExport", allowMultiSelection: "allowMultiSelection", annotations: "annotations", axes: "axes", background: "background", backgroundImage: "backgroundImage", border: "border", chartArea: "chartArea", columns: "columns", crosshair: "crosshair", currencyCode: "currencyCode", dataSource: "dataSource", description: "description", enableAnimation: "enableAnimation", enableAutoIntervalOnBothAxis: "enableAutoIntervalOnBothAxis", enableCanvas: "enableCanvas", enableExport: "enableExport", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSideBySidePlacement: "enableSideBySidePlacement", height: "height", highlightColor: "highlightColor", highlightMode: "highlightMode", highlightPattern: "highlightPattern", indicators: "indicators", isMultiSelect: "isMultiSelect", isTransposed: "isTransposed", legendSettings: "legendSettings", locale: "locale", margin: "margin", palettes: "palettes", primaryXAxis: "primaryXAxis", primaryYAxis: "primaryYAxis", rangeColorSettings: "rangeColorSettings", rows: "rows", selectedDataIndexes: "selectedDataIndexes", selectionMode: "selectionMode", selectionPattern: "selectionPattern", series: "series", subTitle: "subTitle", subTitleStyle: "subTitleStyle", tabIndex: "tabIndex", theme: "theme", title: "title", titleStyle: "titleStyle", tooltip: "tooltip", useGroupingSeparator: "useGroupingSeparator", width: "width", zoomSettings: "zoomSettings" }, outputs: { afterExport: "afterExport", animationComplete: "animationComplete", annotationRender: "annotationRender", axisLabelClick: "axisLabelClick", axisLabelRender: "axisLabelRender", axisMultiLabelRender: "axisMultiLabelRender", axisRangeCalculated: "axisRangeCalculated", beforeExport: "beforeExport", beforePrint: "beforePrint", beforeResize: "beforeResize", chartDoubleClick: "chartDoubleClick", chartMouseClick: "chartMouseClick", chartMouseDown: "chartMouseDown", chartMouseLeave: "chartMouseLeave", chartMouseMove: "chartMouseMove", chartMouseUp: "chartMouseUp", drag: "drag", dragComplete: "dragComplete", dragEnd: "dragEnd", dragStart: "dragStart", legendClick: "legendClick", legendRender: "legendRender", load: "load", loaded: "loaded", multiLevelLabelClick: "multiLevelLabelClick", onZooming: "onZooming", pointClick: "pointClick", pointDoubleClick: "pointDoubleClick", pointMove: "pointMove", pointRender: "pointRender", resized: "resized", scrollChanged: "scrollChanged", scrollEnd: "scrollEnd", scrollStart: "scrollStart", selectionComplete: "selectionComplete", seriesRender: "seriesRender", sharedTooltipRender: "sharedTooltipRender", textRender: "textRender", tooltipRender: "tooltipRender", zoomComplete: "zoomComplete", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childSeries", first: true, predicate: SeriesCollectionDirective, descendants: true }, { propertyName: "childAxes", first: true, predicate: AxesDirective, descendants: true }, { propertyName: "childRows", first: true, predicate: RowsDirective, descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childRangeColorSettings", first: true, predicate: RangeColorSettingsDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: AnnotationsDirective, descendants: true }, { propertyName: "childSelectedDataIndexes", first: true, predicate: SelectedDataIndexesDirective, descendants: true }, { propertyName: "childIndicators", first: true, predicate: IndicatorsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true });
__decorate([
    Template()
], ChartComponent.prototype, "tooltip_template", void 0);
ChartComponent = __decorate([
    ComponentMixins([ComponentBase])
], ChartComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-chart',
                    inputs: inputs$6,
                    outputs: outputs$l,
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
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the Chart component.
 */
class ChartModule {
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartModule, declarations: [ChartComponent,
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
        IndicatorsDirective], imports: [CommonModule], exports: [ChartComponent,
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
        IndicatorsDirective] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

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
ChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, imports: [CommonModule, ChartModule], exports: [ChartModule] });
ChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, providers: [
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
    ], imports: [[CommonModule, ChartModule], ChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

let input$e = ['animation', 'border', 'dataLabel', 'dataSource', 'emptyPointSettings', 'enableTooltip', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'gapRatio', 'groupMode', 'groupTo', 'height', 'innerRadius', 'legendImageUrl', 'legendShape', 'name', 'neckHeight', 'neckWidth', 'opacity', 'palettes', 'pointColorMapping', 'pyramidMode', 'query', 'radius', 'selectionStyle', 'startAngle', 'tooltipMappingName', 'type', 'visible', 'width', 'xName', 'yName'];
let outputs$k = [];
/**
 * AccumulationSeries Directive
 * ```html
 * <e-accumulation-series-collection>
 * <e-accumulation-series></e-accumulation-series>
 * </e-accumulation-series-collection>
 * ```
 */
class AccumulationSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$k);
        this.directivePropList = input$e;
    }
}
AccumulationSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AccumulationSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AccumulationSeriesDirective, selector: "e-accumulation-series-collection>e-accumulation-series", inputs: { animation: "animation", border: "border", dataLabel: "dataLabel", dataSource: "dataSource", emptyPointSettings: "emptyPointSettings", enableTooltip: "enableTooltip", endAngle: "endAngle", explode: "explode", explodeAll: "explodeAll", explodeIndex: "explodeIndex", explodeOffset: "explodeOffset", gapRatio: "gapRatio", groupMode: "groupMode", groupTo: "groupTo", height: "height", innerRadius: "innerRadius", legendImageUrl: "legendImageUrl", legendShape: "legendShape", name: "name", neckHeight: "neckHeight", neckWidth: "neckWidth", opacity: "opacity", palettes: "palettes", pointColorMapping: "pointColorMapping", pyramidMode: "pyramidMode", query: "query", radius: "radius", selectionStyle: "selectionStyle", startAngle: "startAngle", tooltipMappingName: "tooltipMappingName", type: "type", visible: "visible", width: "width", xName: "xName", yName: "yName" }, queries: [{ propertyName: "dataLabel_template", first: true, predicate: ["dataLabelTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AccumulationSeriesDirective.prototype, "dataLabel_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-accumulation-series-collection>e-accumulation-series',
                    inputs: input$e,
                    outputs: outputs$k,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { dataLabel_template: [{
                type: ContentChild,
                args: ['dataLabelTemplate']
            }] } });
/**
 * AccumulationSeries Array Directive
 * @private
 */
class AccumulationSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
AccumulationSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AccumulationSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AccumulationSeriesCollectionDirective, selector: "ej-accumulationchart>e-accumulation-series-collection", queries: [{ propertyName: "children", predicate: AccumulationSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-accumulationchart>e-accumulation-series-collection',
                    queries: {
                        children: new ContentChildren(AccumulationSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$d = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'y'];
let outputs$j = [];
/**
 * AccumulationAnnotations Directive
 * ```html
 * <e-accumulation-annotations>
 * <e-accumulation-annotation></e-accumulation-annotation>
 * </e-accumulation-annotations>
 * ```
 */
class AccumulationAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$j);
        this.directivePropList = input$d;
    }
}
AccumulationAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AccumulationAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AccumulationAnnotationDirective, selector: "e-accumulation-annotations>e-accumulation-annotation", inputs: { content: "content", coordinateUnits: "coordinateUnits", description: "description", horizontalAlignment: "horizontalAlignment", region: "region", verticalAlignment: "verticalAlignment", x: "x", y: "y" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AccumulationAnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-accumulation-annotations>e-accumulation-annotation',
                    inputs: input$d,
                    outputs: outputs$j,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * AccumulationAnnotation Array Directive
 * @private
 */
class AccumulationAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AccumulationAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AccumulationAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AccumulationAnnotationsDirective, selector: "ej-accumulationchart>e-accumulation-annotations", queries: [{ propertyName: "children", predicate: AccumulationAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-accumulationchart>e-accumulation-annotations',
                    queries: {
                        children: new ContentChildren(AccumulationAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$5 = ['allowExport', 'annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
const outputs$i = ['afterExport', 'animationComplete', 'annotationRender', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'dataSourceChange'];
const twoWays$5 = ['dataSource'];
/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
let AccumulationChartComponent = class AccumulationChartComponent extends AccumulationChart {
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
        catch { }
        try {
            let mod = this.injector.get('ChartsFunnelSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsPyramidSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$i);
        this.addTwoWay.call(this, twoWays$5);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        if (this.childAnnotations) {
            this.tagObjects[1].instance = this.childAnnotations;
        }
        this.context.ngAfterContentChecked(this);
    }
};
AccumulationChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
AccumulationChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AccumulationChartComponent, selector: "ejs-accumulationchart", inputs: { allowExport: "allowExport", annotations: "annotations", background: "background", backgroundImage: "backgroundImage", border: "border", center: "center", currencyCode: "currencyCode", dataSource: "dataSource", enableAnimation: "enableAnimation", enableBorderOnMouseMove: "enableBorderOnMouseMove", enableExport: "enableExport", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSmartLabels: "enableSmartLabels", height: "height", highlightMode: "highlightMode", highlightPattern: "highlightPattern", isMultiSelect: "isMultiSelect", legendSettings: "legendSettings", locale: "locale", margin: "margin", selectedDataIndexes: "selectedDataIndexes", selectionMode: "selectionMode", selectionPattern: "selectionPattern", series: "series", subTitle: "subTitle", subTitleStyle: "subTitleStyle", theme: "theme", title: "title", titleStyle: "titleStyle", tooltip: "tooltip", useGroupingSeparator: "useGroupingSeparator", width: "width" }, outputs: { afterExport: "afterExport", animationComplete: "animationComplete", annotationRender: "annotationRender", beforePrint: "beforePrint", beforeResize: "beforeResize", chartDoubleClick: "chartDoubleClick", chartMouseClick: "chartMouseClick", chartMouseDown: "chartMouseDown", chartMouseLeave: "chartMouseLeave", chartMouseMove: "chartMouseMove", chartMouseUp: "chartMouseUp", legendRender: "legendRender", load: "load", loaded: "loaded", pointClick: "pointClick", pointMove: "pointMove", pointRender: "pointRender", resized: "resized", selectionComplete: "selectionComplete", seriesRender: "seriesRender", textRender: "textRender", tooltipRender: "tooltipRender", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childSeries", first: true, predicate: AccumulationSeriesCollectionDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: AccumulationAnnotationsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], AccumulationChartComponent.prototype, "tooltip_template", void 0);
AccumulationChartComponent = __decorate([
    ComponentMixins([ComponentBase])
], AccumulationChartComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-accumulationchart',
                    inputs: inputs$5,
                    outputs: outputs$i,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childSeries: new ContentChild(AccumulationSeriesCollectionDirective),
                        childAnnotations: new ContentChild(AccumulationAnnotationsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the AccumulationChart component.
 */
class AccumulationChartModule {
}
AccumulationChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccumulationChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, declarations: [AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective,
        AccumulationAnnotationDirective,
        AccumulationAnnotationsDirective], imports: [CommonModule], exports: [AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective,
        AccumulationAnnotationDirective,
        AccumulationAnnotationsDirective] });
AccumulationChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

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
AccumulationChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccumulationChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, imports: [CommonModule, AccumulationChartModule], exports: [AccumulationChartModule] });
AccumulationChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, providers: [
        PieSeriesService,
        FunnelSeriesService,
        PyramidSeriesService,
        AccumulationTooltipService,
        AccumulationLegendService,
        AccumulationSelectionService,
        AccumulationDataLabelService,
        AccumulationAnnotationService
    ], imports: [[CommonModule, AccumulationChartModule], AccumulationChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

let input$c = ['animation', 'border', 'dashArray', 'dataSource', 'fill', 'opacity', 'query', 'type', 'width', 'xName', 'yName'];
let outputs$h = [];
/**
 * RangenavigatorSeries Directive
 * ```html
 * <e-rangenavigator-series-collection>
 * <e-rangenavigator-series></e-rangenavigator-series>
 * </e-rangenavigator-series-collection>
 * ```
 */
class RangenavigatorSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$h);
        this.directivePropList = input$c;
    }
}
RangenavigatorSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangenavigatorSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangenavigatorSeriesDirective, selector: "e-rangenavigator-series-collection>e-rangenavigator-series", inputs: { animation: "animation", border: "border", dashArray: "dashArray", dataSource: "dataSource", fill: "fill", opacity: "opacity", query: "query", type: "type", width: "width", xName: "xName", yName: "yName" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rangenavigator-series-collection>e-rangenavigator-series',
                    inputs: input$c,
                    outputs: outputs$h,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * RangenavigatorSeries Array Directive
 * @private
 */
class RangenavigatorSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
RangenavigatorSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangenavigatorSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangenavigatorSeriesCollectionDirective, selector: "ej-rangenavigator>e-rangenavigator-series-collection", queries: [{ propertyName: "children", predicate: RangenavigatorSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
                    queries: {
                        children: new ContentChildren(RangenavigatorSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$4 = ['allowIntervalData', 'allowSnapping', 'animationDuration', 'background', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName'];
const outputs$g = ['beforePrint', 'beforeResize', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender', 'dataSourceChange'];
const twoWays$4 = ['dataSource'];
/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
let RangeNavigatorComponent = class RangeNavigatorComponent extends RangeNavigator {
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
        catch { }
        try {
            let mod = this.injector.get('ChartsPeriodSelector');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStepLineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsLogarithmic');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$g);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        this.context.ngAfterContentChecked(this);
    }
};
RangeNavigatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
RangeNavigatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: RangeNavigatorComponent, selector: "ejs-rangenavigator", inputs: { allowIntervalData: "allowIntervalData", allowSnapping: "allowSnapping", animationDuration: "animationDuration", background: "background", dataSource: "dataSource", disableRangeSelector: "disableRangeSelector", enableDeferredUpdate: "enableDeferredUpdate", enableGrouping: "enableGrouping", enablePersistence: "enablePersistence", enableRtl: "enableRtl", groupBy: "groupBy", height: "height", interval: "interval", intervalType: "intervalType", labelFormat: "labelFormat", labelIntersectAction: "labelIntersectAction", labelPosition: "labelPosition", labelStyle: "labelStyle", locale: "locale", logBase: "logBase", majorGridLines: "majorGridLines", majorTickLines: "majorTickLines", margin: "margin", maximum: "maximum", minimum: "minimum", navigatorBorder: "navigatorBorder", navigatorStyleSettings: "navigatorStyleSettings", periodSelectorSettings: "periodSelectorSettings", query: "query", secondaryLabelAlignment: "secondaryLabelAlignment", series: "series", skeleton: "skeleton", skeletonType: "skeletonType", theme: "theme", tickPosition: "tickPosition", tooltip: "tooltip", useGroupingSeparator: "useGroupingSeparator", value: "value", valueType: "valueType", width: "width", xName: "xName", yName: "yName" }, outputs: { beforePrint: "beforePrint", beforeResize: "beforeResize", changed: "changed", labelRender: "labelRender", load: "load", loaded: "loaded", resized: "resized", selectorRender: "selectorRender", tooltipRender: "tooltipRender", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childSeries", first: true, predicate: RangenavigatorSeriesCollectionDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], RangeNavigatorComponent.prototype, "tooltip_template", void 0);
RangeNavigatorComponent = __decorate([
    ComponentMixins([ComponentBase])
], RangeNavigatorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-rangenavigator',
                    inputs: inputs$4,
                    outputs: outputs$g,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childSeries: new ContentChild(RangenavigatorSeriesCollectionDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the RangeNavigator component.
 */
class RangeNavigatorModule {
}
RangeNavigatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RangeNavigatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, declarations: [RangeNavigatorComponent,
        RangenavigatorSeriesDirective,
        RangenavigatorSeriesCollectionDirective], imports: [CommonModule], exports: [RangeNavigatorComponent,
        RangenavigatorSeriesDirective,
        RangenavigatorSeriesCollectionDirective] });
RangeNavigatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

const RangeTooltipService = { provide: 'ChartsRangeTooltip', useValue: RangeTooltip };
const PeriodSelectorService = { provide: 'ChartsPeriodSelector', useValue: PeriodSelector };
/**
 * NgModule definition for the RangeNavigator component with providers.
 */
class RangeNavigatorAllModule {
}
RangeNavigatorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RangeNavigatorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, imports: [CommonModule, RangeNavigatorModule], exports: [RangeNavigatorModule] });
RangeNavigatorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, providers: [
        RangeTooltipService,
        PeriodSelectorService
    ], imports: [[CommonModule, RangeNavigatorModule], RangeNavigatorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RangeNavigatorModule],
                    exports: [
                        RangeNavigatorModule
                    ],
                    providers: [
                        RangeTooltipService,
                        PeriodSelectorService
                    ]
                }]
        }] });

let input$b = ['color', 'endRange', 'opacity', 'startRange'];
let outputs$f = [];
class RangeBandSettingDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$f);
        this.directivePropList = input$b;
    }
}
RangeBandSettingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeBandSettingDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangeBandSettingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeBandSettingDirective, selector: "e-rangeBandSettings>e-rangeBandSetting", inputs: { color: "color", endRange: "endRange", opacity: "opacity", startRange: "startRange" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeBandSettingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rangeBandSettings>e-rangeBandSetting',
                    inputs: input$b,
                    outputs: outputs$f,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * RangeBandSetting Array Directive
 * @private
 */
class RangeBandSettingsDirective extends ArrayBase {
    constructor() {
        super('rangebandsettings');
    }
}
RangeBandSettingsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeBandSettingsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangeBandSettingsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeBandSettingsDirective, selector: "ejs-sparkline>e-rangeBandSettings", queries: [{ propertyName: "children", predicate: RangeBandSettingDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeBandSettingsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-sparkline>e-rangeBandSettings',
                    queries: {
                        children: new ContentChildren(RangeBandSettingDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$3 = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'rangePadding', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName'];
const outputs$e = ['axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
const twoWays$3 = [''];
/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
let SparklineComponent = class SparklineComponent extends Sparkline {
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
        catch { }
        this.registerEvents(outputs$e);
        this.addTwoWay.call(this, twoWays$3);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childRangeBandSettings;
        this.context.ngAfterContentChecked(this);
    }
};
SparklineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SparklineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SparklineComponent, selector: "ejs-sparkline", inputs: { axisSettings: "axisSettings", border: "border", containerArea: "containerArea", dataLabelSettings: "dataLabelSettings", dataSource: "dataSource", enablePersistence: "enablePersistence", enableRtl: "enableRtl", endPointColor: "endPointColor", fill: "fill", format: "format", height: "height", highPointColor: "highPointColor", lineWidth: "lineWidth", locale: "locale", lowPointColor: "lowPointColor", markerSettings: "markerSettings", negativePointColor: "negativePointColor", opacity: "opacity", padding: "padding", palette: "palette", query: "query", rangeBandSettings: "rangeBandSettings", rangePadding: "rangePadding", startPointColor: "startPointColor", theme: "theme", tiePointColor: "tiePointColor", tooltipSettings: "tooltipSettings", type: "type", useGroupingSeparator: "useGroupingSeparator", valueType: "valueType", width: "width", xName: "xName", yName: "yName" }, outputs: { axisRendering: "axisRendering", dataLabelRendering: "dataLabelRendering", load: "load", loaded: "loaded", markerRendering: "markerRendering", pointRegionMouseClick: "pointRegionMouseClick", pointRegionMouseMove: "pointRegionMouseMove", pointRendering: "pointRendering", resize: "resize", seriesRendering: "seriesRendering", sparklineMouseClick: "sparklineMouseClick", sparklineMouseMove: "sparklineMouseMove", tooltipInitialize: "tooltipInitialize" }, queries: [{ propertyName: "childRangeBandSettings", first: true, predicate: RangeBandSettingsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SparklineComponent = __decorate([
    ComponentMixins([ComponentBase])
], SparklineComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-sparkline',
                    inputs: inputs$3,
                    outputs: outputs$e,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childRangeBandSettings: new ContentChild(RangeBandSettingsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Sparkline component.
 */
class SparklineModule {
}
SparklineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SparklineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, declarations: [SparklineComponent,
        RangeBandSettingDirective,
        RangeBandSettingsDirective], imports: [CommonModule], exports: [SparklineComponent,
        RangeBandSettingDirective,
        RangeBandSettingsDirective] });
SparklineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

const SparklineTooltipService = { provide: 'ChartsSparklineTooltip', useValue: SparklineTooltip };
/**
 * NgModule definition for the Sparkline component with providers.
 */
class SparklineAllModule {
}
SparklineAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SparklineAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, imports: [CommonModule, SparklineModule], exports: [SparklineModule] });
SparklineAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, providers: [
        SparklineTooltipService
    ], imports: [[CommonModule, SparklineModule], SparklineModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SparklineModule],
                    exports: [
                        SparklineModule
                    ],
                    providers: [
                        SparklineTooltipService
                    ]
                }]
        }] });

let input$a = ['animationDuration', 'dataSource', 'enableAnimation', 'enableSmartLabels', 'fill', 'marker', 'name', 'opacity', 'points', 'reactance', 'resistance', 'tooltip', 'tooltipMappingName', 'visibility', 'width'];
let outputs$d = [];
class SmithchartSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$d);
        this.directivePropList = input$a;
    }
}
SmithchartSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SmithchartSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SmithchartSeriesDirective, selector: "e-seriesCollection>e-series", inputs: { animationDuration: "animationDuration", dataSource: "dataSource", enableAnimation: "enableAnimation", enableSmartLabels: "enableSmartLabels", fill: "fill", marker: "marker", name: "name", opacity: "opacity", points: "points", reactance: "reactance", resistance: "resistance", tooltip: "tooltip", tooltipMappingName: "tooltipMappingName", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-seriesCollection>e-series',
                    inputs: input$a,
                    outputs: outputs$d,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * SmithchartSeries Array Directive
 * @private
 */
class SmithchartSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
SmithchartSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SmithchartSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SmithchartSeriesCollectionDirective, selector: "ejs-smithchart>e-seriesCollection", queries: [{ propertyName: "children", predicate: SmithchartSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-smithchart>e-seriesCollection',
                    queries: {
                        children: new ContentChildren(SmithchartSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$2 = ['background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width'];
const outputs$c = ['animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
const twoWays$2 = [''];
/**
 * Smithchart Component
 * ```html
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
let SmithchartComponent = class SmithchartComponent extends Smithchart {
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
        catch { }
        try {
            let mod = this.injector.get('ChartsTooltipRender');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$c);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        this.context.ngAfterContentChecked(this);
    }
};
SmithchartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SmithchartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SmithchartComponent, selector: "ejs-smithchart", inputs: { background: "background", border: "border", elementSpacing: "elementSpacing", enablePersistence: "enablePersistence", enableRtl: "enableRtl", font: "font", height: "height", horizontalAxis: "horizontalAxis", legendSettings: "legendSettings", locale: "locale", margin: "margin", radialAxis: "radialAxis", radius: "radius", renderType: "renderType", series: "series", theme: "theme", title: "title", width: "width" }, outputs: { animationComplete: "animationComplete", axisLabelRender: "axisLabelRender", beforePrint: "beforePrint", legendRender: "legendRender", load: "load", loaded: "loaded", seriesRender: "seriesRender", subtitleRender: "subtitleRender", textRender: "textRender", titleRender: "titleRender", tooltipRender: "tooltipRender" }, queries: [{ propertyName: "childSeries", first: true, predicate: SmithchartSeriesCollectionDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SmithchartComponent = __decorate([
    ComponentMixins([ComponentBase])
], SmithchartComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-smithchart',
                    inputs: inputs$2,
                    outputs: outputs$c,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childSeries: new ContentChild(SmithchartSeriesCollectionDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Smithchart component.
 */
class SmithchartModule {
}
SmithchartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SmithchartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, declarations: [SmithchartComponent,
        SmithchartSeriesDirective,
        SmithchartSeriesCollectionDirective], imports: [CommonModule], exports: [SmithchartComponent,
        SmithchartSeriesDirective,
        SmithchartSeriesCollectionDirective] });
SmithchartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

const SmithchartLegendService = { provide: 'ChartsSmithchartLegend', useValue: SmithchartLegend };
const TooltipRenderService = { provide: 'ChartsTooltipRender', useValue: TooltipRender };
/**
 * NgModule definition for the Smithchart component with providers.
 */
class SmithchartAllModule {
}
SmithchartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SmithchartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, imports: [CommonModule, SmithchartModule], exports: [SmithchartModule] });
SmithchartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, providers: [
        SmithchartLegendService,
        TooltipRenderService
    ], imports: [[CommonModule, SmithchartModule], SmithchartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SmithchartModule],
                    exports: [
                        SmithchartModule
                    ],
                    providers: [
                        SmithchartLegendService,
                        TooltipRenderService
                    ]
                }]
        }] });

let input$9 = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs$b = [];
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
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$b);
        this.directivePropList = input$9;
    }
}
StockChartTrendlineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartTrendlineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartTrendlineDirective, selector: "e-stockchart-series>e-trendlines>e-trendline", inputs: { animation: "animation", backwardForecast: "backwardForecast", dashArray: "dashArray", enableTooltip: "enableTooltip", fill: "fill", forwardForecast: "forwardForecast", intercept: "intercept", legendShape: "legendShape", marker: "marker", name: "name", period: "period", polynomialOrder: "polynomialOrder", type: "type", visible: "visible", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-series>e-trendlines>e-trendline',
                    inputs: input$9,
                    outputs: outputs$b,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartTrendline Array Directive
 * @private
 */
class StockChartTrendlinesDirective extends ArrayBase {
    constructor() {
        super('trendlines');
    }
}
StockChartTrendlinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartTrendlinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartTrendlinesDirective, selector: "e-stockchart-series>e-trendlines", queries: [{ propertyName: "children", predicate: StockChartTrendlineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-series>e-trendlines',
                    queries: {
                        children: new ContentChildren(StockChartTrendlineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$8 = ['animation', 'bearFillColor', 'border', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'cornerRadius', 'dashArray', 'dataSource', 'emptyPointSettings', 'enableSolidCandles', 'enableTooltip', 'fill', 'high', 'legendImageUrl', 'legendShape', 'low', 'marker', 'name', 'opacity', 'open', 'pointColorMapping', 'query', 'selectionStyle', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];
let outputs$a = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series></e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
class StockChartSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['trendlines'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$a);
        this.directivePropList = input$8;
    }
}
StockChartSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartSeriesDirective, selector: "e-stockchart-series-collection>e-stockchart-series", inputs: { animation: "animation", bearFillColor: "bearFillColor", border: "border", bullFillColor: "bullFillColor", cardinalSplineTension: "cardinalSplineTension", close: "close", columnSpacing: "columnSpacing", columnWidth: "columnWidth", cornerRadius: "cornerRadius", dashArray: "dashArray", dataSource: "dataSource", emptyPointSettings: "emptyPointSettings", enableSolidCandles: "enableSolidCandles", enableTooltip: "enableTooltip", fill: "fill", high: "high", legendImageUrl: "legendImageUrl", legendShape: "legendShape", low: "low", marker: "marker", name: "name", opacity: "opacity", open: "open", pointColorMapping: "pointColorMapping", query: "query", selectionStyle: "selectionStyle", tooltipMappingName: "tooltipMappingName", trendlines: "trendlines", type: "type", visible: "visible", volume: "volume", width: "width", xAxisName: "xAxisName", xName: "xName", yAxisName: "yAxisName", yName: "yName" }, queries: [{ propertyName: "childTrendlines", first: true, predicate: StockChartTrendlinesDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-series-collection>e-stockchart-series',
                    inputs: input$8,
                    outputs: outputs$a,
                    queries: {
                        childTrendlines: new ContentChild(StockChartTrendlinesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartSeries Array Directive
 * @private
 */
class StockChartSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
StockChartSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartSeriesCollectionDirective, selector: "ejs-stockchart>e-stockchart-series-collection", queries: [{ propertyName: "children", predicate: StockChartSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-series-collection',
                    queries: {
                        children: new ContentChildren(StockChartSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$7 = ['coefficient', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableTrim', 'interval', 'intervalType', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'rangePadding', 'rowIndex', 'skeleton', 'skeletonType', 'span', 'startAngle', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
let outputs$9 = [];
/**
 * Axis Directive
 * ```html
 * <e-stockchart-axes><e-stockchart-axis></e-stockchart-axis></e-stockchart-axes>
 * ```
 */
class StockChartAxisDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$9);
        this.directivePropList = input$7;
    }
}
StockChartAxisDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAxisDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartAxisDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartAxisDirective, selector: "e-stockchart-axes>e-stockchart-axis", inputs: { coefficient: "coefficient", crossesAt: "crossesAt", crossesInAxis: "crossesInAxis", crosshairTooltip: "crosshairTooltip", description: "description", desiredIntervals: "desiredIntervals", edgeLabelPlacement: "edgeLabelPlacement", enableAutoIntervalOnZooming: "enableAutoIntervalOnZooming", enableTrim: "enableTrim", interval: "interval", intervalType: "intervalType", isInversed: "isInversed", labelFormat: "labelFormat", labelIntersectAction: "labelIntersectAction", labelPlacement: "labelPlacement", labelPosition: "labelPosition", labelRotation: "labelRotation", labelStyle: "labelStyle", lineStyle: "lineStyle", logBase: "logBase", majorGridLines: "majorGridLines", majorTickLines: "majorTickLines", maximum: "maximum", maximumLabelWidth: "maximumLabelWidth", maximumLabels: "maximumLabels", minimum: "minimum", minorGridLines: "minorGridLines", minorTickLines: "minorTickLines", minorTicksPerInterval: "minorTicksPerInterval", name: "name", opposedPosition: "opposedPosition", placeNextToAxisLine: "placeNextToAxisLine", plotOffset: "plotOffset", rangePadding: "rangePadding", rowIndex: "rowIndex", skeleton: "skeleton", skeletonType: "skeletonType", span: "span", startAngle: "startAngle", stripLines: "stripLines", tabIndex: "tabIndex", tickPosition: "tickPosition", title: "title", titleStyle: "titleStyle", valueType: "valueType", visible: "visible", zoomFactor: "zoomFactor", zoomPosition: "zoomPosition" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAxisDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-axes>e-stockchart-axis',
                    inputs: input$7,
                    outputs: outputs$9,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartAxis Array Directive
 * @private
 */
class StockChartAxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
StockChartAxesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAxesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartAxesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartAxesDirective, selector: "ejs-stockchart>e-stockchart-axes", queries: [{ propertyName: "children", predicate: StockChartAxisDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAxesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-axes',
                    queries: {
                        children: new ContentChildren(StockChartAxisDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$6 = ['border', 'height'];
let outputs$8 = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
class StockChartRowDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$8);
        this.directivePropList = input$6;
    }
}
StockChartRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartRowDirective, selector: "e-stockchart-rows>e-striplines>e-stockchart-row", inputs: { border: "border", height: "height" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-rows>e-striplines>e-stockchart-row',
                    inputs: input$6,
                    outputs: outputs$8,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartRow Array Directive
 * @private
 */
class StockChartRowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
StockChartRowsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartRowsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartRowsDirective, selector: "ejs-stockchart>e-stockchart-rows", queries: [{ propertyName: "children", predicate: StockChartRowDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-rows',
                    queries: {
                        children: new ContentChildren(StockChartRowDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$5 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
let outputs$7 = [];
/**
 * Annotation Directive
 * ```html
 * <e-stockchart-annotations><e-stockchart-annotation></e-stockchart-annotation><e-stockchart-annotations>
 * ```
 */
class StockChartAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$7);
        this.directivePropList = input$5;
    }
}
StockChartAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartAnnotationDirective, selector: "ejs-stockchart-annotations>e-stockchart-annotation", inputs: { content: "content", coordinateUnits: "coordinateUnits", description: "description", horizontalAlignment: "horizontalAlignment", region: "region", verticalAlignment: "verticalAlignment", x: "x", xAxisName: "xAxisName", y: "y", yAxisName: "yAxisName" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], StockChartAnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart-annotations>e-stockchart-annotation',
                    inputs: input$5,
                    outputs: outputs$7,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * StockChartAnnotation Array Directive
 * @private
 */
class StockChartAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
StockChartAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartAnnotationsDirective, selector: "ejs-stockchart>e-stockchart-annotations", queries: [{ propertyName: "children", predicate: StockChartAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-annotations',
                    queries: {
                        children: new ContentChildren(StockChartAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$4 = ['point', 'series'];
let outputs$6 = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
class StockChartSelectedDataIndexDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
        this.directivePropList = input$4;
    }
}
StockChartSelectedDataIndexDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartSelectedDataIndexDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartSelectedDataIndexDirective, selector: "ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex", inputs: { point: "point", series: "series" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex',
                    inputs: input$4,
                    outputs: outputs$6,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartSelectedDataIndex Array Directive
 * @private
 */
class StockChartSelectedDataIndexesDirective extends ArrayBase {
    constructor() {
        super('selecteddataindexes');
    }
}
StockChartSelectedDataIndexesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartSelectedDataIndexesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartSelectedDataIndexesDirective, selector: "ejs-stockchart>e-stockchart-selectedDataIndexes", queries: [{ propertyName: "children", predicate: StockChartSelectedDataIndexDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-selectedDataIndexes',
                    queries: {
                        children: new ContentChildren(StockChartSelectedDataIndexDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$3 = ['interval', 'intervalType', 'selected', 'text'];
let outputs$5 = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-periods>
 * <e-stockchart-period></e-stockchart-period>
 * </e-stockchart-periods>
 * ```
 */
class StockChartPeriodDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$3;
    }
}
StockChartPeriodDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartPeriodDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartPeriodDirective, selector: "e-stockchart-indicators>e-stockchart-period", inputs: { interval: "interval", intervalType: "intervalType", selected: "selected", text: "text" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-indicators>e-stockchart-period',
                    inputs: input$3,
                    outputs: outputs$5,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartPeriod Array Directive
 * @private
 */
class StockChartPeriodsDirective extends ArrayBase {
    constructor() {
        super('periods');
    }
}
StockChartPeriodsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartPeriodsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartPeriodsDirective, selector: "ejs-stockchart>e-stockchart-periods", queries: [{ propertyName: "children", predicate: StockChartPeriodDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-periods',
                    queries: {
                        children: new ContentChildren(StockChartPeriodDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['background', 'border', 'date', 'description', 'placeAt', 'seriesIndexes', 'showOnSeries', 'text', 'textStyle', 'type'];
let outputs$4 = [];
/**
 * StockEvents
 * ```html
 * <e-stockchart-stockevents>
 * <e-stockchart-stockevent></e-stockchart-stockevent>
 * </e-stockchart-stockevents>
 * ```
 */
class StockEventDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$2;
    }
}
StockEventDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockEventDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockEventDirective, selector: "e-stockchart-indicators>e-stockchart-stockevent", inputs: { background: "background", border: "border", date: "date", description: "description", placeAt: "placeAt", seriesIndexes: "seriesIndexes", showOnSeries: "showOnSeries", text: "text", textStyle: "textStyle", type: "type" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-indicators>e-stockchart-stockevent',
                    inputs: input$2,
                    outputs: outputs$4,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockEvent Array Directive
 * @private
 */
class StockEventsDirective extends ArrayBase {
    constructor() {
        super('stockevents');
    }
}
StockEventsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockEventsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockEventsDirective, selector: "ejs-stockchart>e-stockchart-stockevents", queries: [{ propertyName: "children", predicate: StockEventDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-stockevents',
                    queries: {
                        children: new ContentChildren(StockEventDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['animation', 'bandColor', 'close', 'dPeriod', 'dashArray', 'dataSource', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
let outputs$3 = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-indicators>
 * <e-stockchart-indicator></e-stockchart-indicator>
 * </e-stockchart-indicators>
 * ```
 */
class StockChartIndicatorDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$1;
    }
}
StockChartIndicatorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartIndicatorDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartIndicatorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartIndicatorDirective, selector: "e-stockchart-indicators>e-stockchart-indicator", inputs: { animation: "animation", bandColor: "bandColor", close: "close", dPeriod: "dPeriod", dashArray: "dashArray", dataSource: "dataSource", fastPeriod: "fastPeriod", field: "field", fill: "fill", high: "high", kPeriod: "kPeriod", low: "low", lowerLine: "lowerLine", macdLine: "macdLine", macdNegativeColor: "macdNegativeColor", macdPositiveColor: "macdPositiveColor", macdType: "macdType", open: "open", overBought: "overBought", overSold: "overSold", period: "period", periodLine: "periodLine", pointColorMapping: "pointColorMapping", query: "query", seriesName: "seriesName", showZones: "showZones", slowPeriod: "slowPeriod", standardDeviation: "standardDeviation", type: "type", upperLine: "upperLine", volume: "volume", width: "width", xAxisName: "xAxisName", xName: "xName", yAxisName: "yAxisName" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartIndicatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-indicators>e-stockchart-indicator',
                    inputs: input$1,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartIndicator Array Directive
 * @private
 */
class StockChartIndicatorsDirective extends ArrayBase {
    constructor() {
        super('indicators');
    }
}
StockChartIndicatorsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartIndicatorsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartIndicatorsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartIndicatorsDirective, selector: "ejs-stockchart>e-stockchart-indicators", queries: [{ propertyName: "children", predicate: StockChartIndicatorDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartIndicatorsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-indicators',
                    queries: {
                        children: new ContentChildren(StockChartIndicatorDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings'];
const outputs$2 = ['axisLabelRender', 'legendClick', 'legendRender', 'load', 'loaded', 'onZooming', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender', 'dataSourceChange'];
const twoWays$1 = ['dataSource'];
/**
 * Stock Chart Component
 * ```html
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
let StockChartComponent = class StockChartComponent extends StockChart {
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
        catch { }
        try {
            let mod = this.injector.get('ChartsColumnSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSplineSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSplineAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStripLine');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRangeAreaSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCrosshair');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsZoom');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsChartAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsHiloSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsHiloOpenCloseSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCandleSeries');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsSmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsTmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsEmaIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAccumulationDistributionIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMacdIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsAtrIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRsiIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsMomentumIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStochasticIndicator');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsBollingerBands');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsTrendlines');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsRangeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsStockLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childSeries;
        if (this.childAxes) {
            this.tagObjects[1].instance = this.childAxes;
        }
        if (this.childRows) {
            this.tagObjects[2].instance = this.childRows;
        }
        if (this.childAnnotations) {
            this.tagObjects[3].instance = this.childAnnotations;
        }
        if (this.childSelectedDataIndexes) {
            this.tagObjects[4].instance = this.childSelectedDataIndexes;
        }
        if (this.childPeriods) {
            this.tagObjects[5].instance = this.childPeriods;
        }
        if (this.childStockEvents) {
            this.tagObjects[6].instance = this.childStockEvents;
        }
        if (this.childIndicators) {
            this.tagObjects[7].instance = this.childIndicators;
        }
        this.context.ngAfterContentChecked(this);
    }
};
StockChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
StockChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: StockChartComponent, selector: "ejs-stockchart", inputs: { annotations: "annotations", axes: "axes", background: "background", border: "border", chartArea: "chartArea", crosshair: "crosshair", dataSource: "dataSource", enableCustomRange: "enableCustomRange", enablePeriodSelector: "enablePeriodSelector", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSelector: "enableSelector", exportType: "exportType", height: "height", indicatorType: "indicatorType", indicators: "indicators", isMultiSelect: "isMultiSelect", isSelect: "isSelect", isTransposed: "isTransposed", legendSettings: "legendSettings", locale: "locale", margin: "margin", periods: "periods", primaryXAxis: "primaryXAxis", primaryYAxis: "primaryYAxis", rows: "rows", selectedDataIndexes: "selectedDataIndexes", selectionMode: "selectionMode", series: "series", seriesType: "seriesType", stockEvents: "stockEvents", theme: "theme", title: "title", titleStyle: "titleStyle", tooltip: "tooltip", trendlineType: "trendlineType", width: "width", zoomSettings: "zoomSettings" }, outputs: { axisLabelRender: "axisLabelRender", legendClick: "legendClick", legendRender: "legendRender", load: "load", loaded: "loaded", onZooming: "onZooming", pointClick: "pointClick", pointMove: "pointMove", rangeChange: "rangeChange", selectorRender: "selectorRender", seriesRender: "seriesRender", stockChartMouseClick: "stockChartMouseClick", stockChartMouseDown: "stockChartMouseDown", stockChartMouseLeave: "stockChartMouseLeave", stockChartMouseMove: "stockChartMouseMove", stockChartMouseUp: "stockChartMouseUp", stockEventRender: "stockEventRender", tooltipRender: "tooltipRender", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childSeries", first: true, predicate: StockChartSeriesCollectionDirective, descendants: true }, { propertyName: "childAxes", first: true, predicate: StockChartAxesDirective, descendants: true }, { propertyName: "childRows", first: true, predicate: StockChartRowsDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: StockChartAnnotationsDirective, descendants: true }, { propertyName: "childSelectedDataIndexes", first: true, predicate: StockChartSelectedDataIndexesDirective, descendants: true }, { propertyName: "childPeriods", first: true, predicate: StockChartPeriodsDirective, descendants: true }, { propertyName: "childStockEvents", first: true, predicate: StockEventsDirective, descendants: true }, { propertyName: "childIndicators", first: true, predicate: StockChartIndicatorsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], StockChartComponent.prototype, "tooltip_template", void 0);
StockChartComponent = __decorate([
    ComponentMixins([ComponentBase])
], StockChartComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-stockchart',
                    inputs: inputs$1,
                    outputs: outputs$2,
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
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the StockChart component.
 */
class StockChartModule {
}
StockChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StockChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, declarations: [StockChartComponent,
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
        StockChartIndicatorsDirective], imports: [CommonModule], exports: [StockChartComponent,
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
        StockChartIndicatorsDirective] });
StockChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

const StockLegendService = { provide: 'ChartsStockLegend', useValue: StockLegend };
/**
 * NgModule definition for the StockChart component with providers.
 */
class StockChartAllModule {
}
StockChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StockChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, imports: [CommonModule, StockChartModule], exports: [StockChartModule] });
StockChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, providers: [
        StockLegendService
    ], imports: [[CommonModule, StockChartModule], StockChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, StockChartModule],
                    exports: [
                        StockChartModule
                    ],
                    providers: [
                        StockLegendService
                    ]
                }]
        }] });

let input = ['color', 'end', 'index', 'legendImageUrl', 'name', 'opacity', 'shape'];
let outputs$1 = [];
/**
 * BulletRange Directive
 * ```html
 * <e-bullet-range-collection>
 * <e-bullet-range></e-bullet-range>
 * </e-bullet-range-collection>
 * ```
 */
class BulletRangeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
BulletRangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BulletRangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BulletRangeDirective, selector: "e-bullet-range-collection>e-bullet-range", inputs: { color: "color", end: "end", index: "index", legendImageUrl: "legendImageUrl", name: "name", opacity: "opacity", shape: "shape" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-bullet-range-collection>e-bullet-range',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * BulletRange Array Directive
 * @private
 */
class BulletRangeCollectionDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
BulletRangeCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BulletRangeCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BulletRangeCollectionDirective, selector: "ej-bulletchart>e-bullet-range-collection", queries: [{ propertyName: "children", predicate: BulletRangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-bulletchart>e-bullet-range-collection',
                    queries: {
                        children: new ContentChildren(BulletRangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'legendSettings', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width'];
const outputs = ['beforePrint', 'bulletChartMouseClick', 'legendRender', 'load', 'loaded', 'tooltipRender', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * BulletChart Component
 * ```html
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
let BulletChartComponent = class BulletChartComponent extends BulletChart {
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
        catch { }
        try {
            let mod = this.injector.get('ChartsBulletChartLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childRanges;
        this.context.ngAfterContentChecked(this);
    }
};
BulletChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
BulletChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BulletChartComponent, selector: "ejs-bulletchart", inputs: { animation: "animation", border: "border", categoryField: "categoryField", categoryLabelStyle: "categoryLabelStyle", dataLabel: "dataLabel", dataSource: "dataSource", enableGroupSeparator: "enableGroupSeparator", enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", interval: "interval", labelFormat: "labelFormat", labelPosition: "labelPosition", labelStyle: "labelStyle", legendSettings: "legendSettings", locale: "locale", majorTickLines: "majorTickLines", margin: "margin", maximum: "maximum", minimum: "minimum", minorTickLines: "minorTickLines", minorTicksPerInterval: "minorTicksPerInterval", opposedPosition: "opposedPosition", orientation: "orientation", query: "query", ranges: "ranges", subtitle: "subtitle", subtitleStyle: "subtitleStyle", tabIndex: "tabIndex", targetColor: "targetColor", targetField: "targetField", targetTypes: "targetTypes", targetWidth: "targetWidth", theme: "theme", tickPosition: "tickPosition", title: "title", titlePosition: "titlePosition", titleStyle: "titleStyle", tooltip: "tooltip", type: "type", valueBorder: "valueBorder", valueField: "valueField", valueFill: "valueFill", valueHeight: "valueHeight", width: "width" }, outputs: { beforePrint: "beforePrint", bulletChartMouseClick: "bulletChartMouseClick", legendRender: "legendRender", load: "load", loaded: "loaded", tooltipRender: "tooltipRender", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childRanges", first: true, predicate: BulletRangeCollectionDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], BulletChartComponent.prototype, "tooltip_template", void 0);
BulletChartComponent = __decorate([
    ComponentMixins([ComponentBase])
], BulletChartComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-bulletchart',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childRanges: new ContentChild(BulletRangeCollectionDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the BulletChart component.
 */
class BulletChartModule {
}
BulletChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BulletChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, declarations: [BulletChartComponent,
        BulletRangeDirective,
        BulletRangeCollectionDirective], imports: [CommonModule], exports: [BulletChartComponent,
        BulletRangeDirective,
        BulletRangeCollectionDirective] });
BulletChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

const BulletTooltipService = { provide: 'ChartsBulletTooltip', useValue: BulletTooltip };
const BulletChartLegendService = { provide: 'ChartsBulletChartLegend', useValue: BulletChartLegend };
/**
 * NgModule definition for the BulletChart component with providers.
 */
class BulletChartAllModule {
}
BulletChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BulletChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, imports: [CommonModule, BulletChartModule], exports: [BulletChartModule] });
BulletChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, providers: [
        BulletTooltipService,
        BulletChartLegendService
    ], imports: [[CommonModule, BulletChartModule], BulletChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, BulletChartModule],
                    exports: [
                        BulletChartModule
                    ],
                    providers: [
                        BulletTooltipService,
                        BulletChartLegendService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AccumulationAnnotationDirective, AccumulationAnnotationService, AccumulationAnnotationsDirective, AccumulationChartAllModule, AccumulationChartComponent, AccumulationChartModule, AccumulationDataLabelService, AccumulationDistributionIndicatorService, AccumulationLegendService, AccumulationSelectionService, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltipService, AnnotationDirective, AnnotationsDirective, AreaSeriesService, AtrIndicatorService, AxesDirective, AxisDirective, BarSeriesService, BollingerBandsService, BoxAndWhiskerSeriesService, BubbleSeriesService, BulletChartAllModule, BulletChartComponent, BulletChartLegendService, BulletChartModule, BulletRangeCollectionDirective, BulletRangeDirective, BulletTooltipService, CandleSeriesService, CategoriesDirective, CategoryDirective, CategoryService, ChartAllModule, ChartAnnotationService, ChartComponent, ChartModule, ColumnDirective, ColumnSeriesService, ColumnsDirective, CrosshairService, DataEditingService, DataLabelService, DateTimeCategoryService, DateTimeService, EmaIndicatorService, ErrorBarService, ExportService, FunnelSeriesService, HighlightService, HiloOpenCloseSeriesService, HiloSeriesService, HistogramSeriesService, IndicatorDirective, IndicatorsDirective, LegendService, LineSeriesService, LogarithmicService, MacdIndicatorService, MomentumIndicatorService, MultiColoredAreaSeriesService, MultiColoredLineSeriesService, MultiLevelLabelDirective, MultiLevelLabelService, MultiLevelLabelsDirective, ParetoSeriesService, PeriodSelectorService, PieSeriesService, PolarSeriesService, PyramidSeriesService, RadarSeriesService, RangeAreaSeriesService, RangeBandSettingDirective, RangeBandSettingsDirective, RangeColorSettingDirective, RangeColorSettingsDirective, RangeColumnSeriesService, RangeNavigatorAllModule, RangeNavigatorComponent, RangeNavigatorModule, RangeTooltipService, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RowDirective, RowsDirective, RsiIndicatorService, ScatterSeriesService, ScrollBarService, SegmentDirective, SegmentsDirective, SelectedDataIndexDirective, SelectedDataIndexesDirective, SelectionService, SeriesCollectionDirective, SeriesDirective, SmaIndicatorService, SmithchartAllModule, SmithchartComponent, SmithchartLegendService, SmithchartModule, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SparklineAllModule, SparklineComponent, SparklineModule, SparklineTooltipService, SplineAreaSeriesService, SplineRangeAreaSeriesService, SplineSeriesService, StackingAreaSeriesService, StackingBarSeriesService, StackingColumnSeriesService, StackingLineSeriesService, StackingStepAreaSeriesService, StepAreaSeriesService, StepLineSeriesService, StochasticIndicatorService, StockChartAllModule, StockChartAnnotationDirective, StockChartAnnotationsDirective, StockChartAxesDirective, StockChartAxisDirective, StockChartComponent, StockChartIndicatorDirective, StockChartIndicatorsDirective, StockChartModule, StockChartPeriodDirective, StockChartPeriodsDirective, StockChartRowDirective, StockChartRowsDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective, StockChartSeriesCollectionDirective, StockChartSeriesDirective, StockChartTrendlineDirective, StockChartTrendlinesDirective, StockEventDirective, StockEventsDirective, StockLegendService, StripLineDirective, StripLineService, StripLinesDirective, TmaIndicatorService, TooltipRenderService, TooltipService, TrendlineDirective, TrendlinesDirective, TrendlinesService, WaterfallSeriesService, ZoomService };
//# sourceMappingURL=syncfusion-ej2-angular-charts.mjs.map
