import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
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
export declare class StockChartTrendlineDirective extends ComplexBase<StockChartTrendlineDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the type of the trendline
     * @default 'Linear'
     */
    type: any;
    /**
     * Options to customize the animation for trendlines
     */
    animation: any;
    /**
     * Defines the period, by which the trend has to backward forecast
     * @default 0
     */
    backwardForecast: any;
    /**
     * Defines the pattern of dashes and gaps to stroke.
     * @default '0'
     */
    dashArray: any;
    /**
     * Enables/disables tooltip for trendlines
     * @default true
     */
    enableTooltip: any;
    /**
     * Defines the fill color of trendline
     * @default ''
     */
    fill: any;
    /**
     * Defines the period, by which the trend has to forward forecast
     * @default 0
     */
    forwardForecast: any;
    /**
     * Defines the intercept of the trendline
     * @default null
     * @aspdefaultvalueignore
     */
    intercept: any;
    /**
     * Sets the legend shape of the trendline
     * @default 'SeriesType'
     */
    legendShape: any;
    /**
     * Options to customize the marker for trendlines
     * @deprecated
     */
    marker: any;
    /**
     * Defines the name of trendline
     * @default ''
     */
    name: any;
    /**
     * Defines the period, the price changes over which will be considered to predict moving average trend line
     * @default 2
     */
    period: any;
    /**
     * Defines the polynomial order of the polynomial trendline
     * @default 2
     */
    polynomialOrder: any;
    /**
     * Specifies the visibility of trendline.
     * @default true
     */
    visible: any;
    /**
     * Defines the width of the trendline
     * @default 1
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartTrendlineDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartTrendlineDirective, "e-stockchart-series>e-trendlines>e-trendline", never, { "animation": "animation"; "backwardForecast": "backwardForecast"; "dashArray": "dashArray"; "enableTooltip": "enableTooltip"; "fill": "fill"; "forwardForecast": "forwardForecast"; "intercept": "intercept"; "legendShape": "legendShape"; "marker": "marker"; "name": "name"; "period": "period"; "polynomialOrder": "polynomialOrder"; "type": "type"; "visible": "visible"; "width": "width"; }, {}, never>;
}
/**
 * StockChartTrendline Array Directive
 * @private
 */
export declare class StockChartTrendlinesDirective extends ArrayBase<StockChartTrendlinesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartTrendlinesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartTrendlinesDirective, "e-stockchart-series>e-trendlines", never, {}, {}, ["children"]>;
}
