import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Carousel } from '@syncfusion/ej2-navigations';
import { CarouselItemsDirective } from './items.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular Carousel Component.
 * ```html
 * <ejs-carousel [items]='carouselItems'></ejs-carousel>
 * ```
 */
export declare class CarouselComponent extends Carousel implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    slideChanged: any;
    slideChanging: any;
    selectedIndexChange: any;
    childItems: QueryList<CarouselItemsDirective>;
    tags: string[];
    /**
     * Accepts the template for indicator buttons.
     * @default null
     */
    indicatorsTemplate: any;
    /**
     * Accepts the template for next navigation button.
     * @default null
     */
    nextButtonTemplate: any;
    /**
     * Accepts the template for previous navigation button.
     * @default null
     */
    previousButtonTemplate: any;
    /**
     * Accepts the template for play/pause button.
     * @default null
     */
    playButtonTemplate: any;
    /**
     * Specifies the template option for carousel items.
     * @default null
     */
    itemTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
