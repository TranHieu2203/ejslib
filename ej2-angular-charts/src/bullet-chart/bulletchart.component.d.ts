import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { BulletChart } from '@syncfusion/ej2-charts';
import { BulletRangeCollectionDirective } from './ranges.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * BulletChart Component
 * ```html
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
export declare class BulletChartComponent extends BulletChart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforePrint: any;
    bulletChartMouseClick: any;
    legendRender: any;
    load: any;
    loaded: any;
    tooltipRender: any;
    dataSourceChange: any;
    childRanges: QueryList<BulletRangeCollectionDirective>;
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
