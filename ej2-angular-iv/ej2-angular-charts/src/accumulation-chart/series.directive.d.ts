import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * AccumulationSeries Directive
 * ```html
 * <e-accumulation-series-collection>
 * <e-accumulation-series></e-accumulation-series>
 * </e-accumulation-series-collection>
 * ```
 */
export declare class AccumulationSeriesDirective extends ComplexBase<AccumulationSeriesDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specify the type of the series in accumulation chart.
     * @default 'Pie'
     */
    type: any;
    /**
     * Options for customizing the animation for series.
     */
    animation: any;
    /**
     * Options for customizing the border of the series.
     */
    border: any;
    /**
     * The data label for the series.
     */
    dataLabel: any;
    /**
     * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager.
     *
     * @default ''
     */
    dataSource: any;
    /**
     * options to customize the empty points in series
     */
    emptyPointSettings: any;
    /**
     * To enable or disable tooltip for a series.
     * @default true
     */
    enableTooltip: any;
    /**
     * End angle for a series.
     * @default null
     */
    endAngle: any;
    /**
     * If set true, series points will be exploded on mouse click or touch.
     * @default false
     */
    explode: any;
    /**
     * If set true, all the points in the series will get exploded on load.
     * @default false
     */
    explodeAll: any;
    /**
     * Index of the point, to be exploded on load.
     * @default null
     * @aspdefaultvalueignore
     * @blazordefaultvalue Double.NaN
     */
    explodeIndex: any;
    /**
     * Distance of the point from the center, which takes values in both pixels and percentage.
     * @default '30%'
     */
    explodeOffset: any;
    /**
     * Defines the distance between the segments of a funnel/pyramid series. The range will be from 0 to 1
     * @default 0
     */
    gapRatio: any;
    /**
     * AccumulationSeries y values less than groupMode are combined into single slice named others
     * @default Value
     */
    groupMode: any;
    /**
     * AccumulationSeries y values less than groupTo are combined into single slice named others
     * @default null
     */
    groupTo: any;
    /**
     * Defines the height of the funnel/pyramid with respect to the chart area
     * @default '80%'
     */
    height: any;
    /**
     * When the innerRadius value is greater than 0 percentage, a donut will appear in pie series. It takes values only in percentage.
     * @default '0'
     */
    innerRadius: any;
    /**
     * The URL for the Image that is to be displayed as a Legend icon.  It requires  `legendShape` value to be an `Image`.
     * @default ''
     */
    legendImageUrl: any;
    /**
     * The shape of the legend. Each series has its own legend shape. They are
     * * Circle - Renders a circle.
     * * Rectangle - Renders a rectangle.
     * * Triangle - Renders a triangle.
     * * Diamond - Renders a diamond.
     * * Cross - Renders a cross.
     * * HorizontalLine - Renders a horizontalLine.
     * * VerticalLine - Renders a verticalLine.
     * * Pentagon - Renders a pentagon.
     * * InvertedTriangle - Renders a invertedTriangle.
     * * SeriesType -Render a legend shape based on series type.
     * * Image -Render a image.     *
     * @default 'SeriesType'
     */
    legendShape: any;
    /**
     * Specifies the series name
     * @default ''
     */
    name: any;
    /**
     * Defines the height of the funnel neck with respect to the chart area
     * @default '20%'
     */
    neckHeight: any;
    /**
     * Defines the width of the funnel neck with respect to the chart area
     * @default '20%'
     */
    neckWidth: any;
    /**
     * The opacity of the series.
     * @default 1.
     */
    opacity: any;
    /**
     * Palette for series points.
     * @default []
     */
    palettes: any;
    /**
     * The DataSource field that contains the color value of point
     * It is applicable for series
     * @default ''
     */
    pointColorMapping: any;
    /**
     * Defines how the values have to be reflected, whether through height/surface of the segments
     * @default 'Linear'
     */
    pyramidMode: any;
    /**
     * Specifies Query to select data from dataSource. This property is applicable only when the dataSource is `ej.DataManager`.
     * @default null
     */
    query: any;
    /**
     * Radius of the pie series and its values in percentage.
     * @default '80%'
     */
    radius: any;
    /**
     * Custom style for the selected series or points.
     * @default null
     */
    selectionStyle: any;
    /**
     * Start angle for a series.
     * @default 0
     */
    startAngle: any;
    /**
     * The provided value will be considered as a Tooltip Mapping name
     * @default ''
     */
    tooltipMappingName: any;
    /**
     * Specifies the series visibility.
     * @default true
     */
    visible: any;
    /**
     * Defines the width of the funnel/pyramid with respect to the chart area
     * @default '80%'
     */
    width: any;
    /**
     * The DataSource field which contains the x value.
     * @default ''
     */
    xName: any;
    /**
     * The DataSource field which contains the y value.
     * @default ''
     */
    yName: any;
    dataLabel_template: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<AccumulationSeriesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccumulationSeriesDirective, "e-accumulation-series-collection>e-accumulation-series", never, { "animation": "animation"; "border": "border"; "dataLabel": "dataLabel"; "dataSource": "dataSource"; "emptyPointSettings": "emptyPointSettings"; "enableTooltip": "enableTooltip"; "endAngle": "endAngle"; "explode": "explode"; "explodeAll": "explodeAll"; "explodeIndex": "explodeIndex"; "explodeOffset": "explodeOffset"; "gapRatio": "gapRatio"; "groupMode": "groupMode"; "groupTo": "groupTo"; "height": "height"; "innerRadius": "innerRadius"; "legendImageUrl": "legendImageUrl"; "legendShape": "legendShape"; "name": "name"; "neckHeight": "neckHeight"; "neckWidth": "neckWidth"; "opacity": "opacity"; "palettes": "palettes"; "pointColorMapping": "pointColorMapping"; "pyramidMode": "pyramidMode"; "query": "query"; "radius": "radius"; "selectionStyle": "selectionStyle"; "startAngle": "startAngle"; "tooltipMappingName": "tooltipMappingName"; "type": "type"; "visible": "visible"; "width": "width"; "xName": "xName"; "yName": "yName"; }, {}, ["dataLabel_template"]>;
}
/**
 * AccumulationSeries Array Directive
 * @private
 */
export declare class AccumulationSeriesCollectionDirective extends ArrayBase<AccumulationSeriesCollectionDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AccumulationSeriesCollectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccumulationSeriesCollectionDirective, "ej-accumulationchart>e-accumulation-series-collection", never, {}, {}, ["children"]>;
}
