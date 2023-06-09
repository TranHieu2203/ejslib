import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Smithchart } from '@syncfusion/ej2-charts';
import { SmithchartSeriesCollectionDirective } from './series.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Smithchart Component
 * ```html
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
export declare class SmithchartComponent extends Smithchart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    animationComplete: any;
    axisLabelRender: any;
    beforePrint: any;
    legendRender: any;
    load: any;
    loaded: any;
    seriesRender: any;
    subtitleRender: any;
    textRender: any;
    titleRender: any;
    tooltipRender: any;
    childSeries: QueryList<SmithchartSeriesCollectionDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
