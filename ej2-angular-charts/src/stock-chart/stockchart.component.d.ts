import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { StockChart } from '@syncfusion/ej2-charts';
import { StockChartSeriesCollectionDirective } from './series.directive';
import { StockChartAxesDirective } from './axes.directive';
import { StockChartRowsDirective } from './rows.directive';
import { StockChartAnnotationsDirective } from './annotations.directive';
import { StockChartSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { StockChartPeriodsDirective } from './periods.directive';
import { StockEventsDirective } from './stockevents.directive';
import { StockChartIndicatorsDirective } from './indicators.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Stock Chart Component
 * ```html
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
export declare class StockChartComponent extends StockChart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    axisLabelRender: any;
    legendClick: any;
    legendRender: any;
    load: any;
    loaded: any;
    onZooming: any;
    pointClick: any;
    pointMove: any;
    rangeChange: any;
    selectorRender: any;
    seriesRender: any;
    stockChartMouseClick: any;
    stockChartMouseDown: any;
    stockChartMouseLeave: any;
    stockChartMouseMove: any;
    stockChartMouseUp: any;
    stockEventRender: any;
    tooltipRender: any;
    dataSourceChange: any;
    childSeries: QueryList<StockChartSeriesCollectionDirective>;
    childAxes: QueryList<StockChartAxesDirective>;
    childRows: QueryList<StockChartRowsDirective>;
    childAnnotations: QueryList<StockChartAnnotationsDirective>;
    childSelectedDataIndexes: QueryList<StockChartSelectedDataIndexesDirective>;
    childPeriods: QueryList<StockChartPeriodsDirective>;
    childStockEvents: QueryList<StockEventsDirective>;
    childIndicators: QueryList<StockChartIndicatorsDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
