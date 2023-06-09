import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Sparkline } from '@syncfusion/ej2-charts';
import { RangeBandSettingsDirective } from './rangebandsettings.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
export declare class SparklineComponent extends Sparkline implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    axisRendering: any;
    dataLabelRendering: any;
    load: any;
    loaded: any;
    markerRendering: any;
    pointRegionMouseClick: any;
    pointRegionMouseMove: any;
    pointRendering: any;
    resize: any;
    seriesRendering: any;
    sparklineMouseClick: any;
    sparklineMouseMove: any;
    tooltipInitialize: any;
    childRangeBandSettings: QueryList<RangeBandSettingsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
