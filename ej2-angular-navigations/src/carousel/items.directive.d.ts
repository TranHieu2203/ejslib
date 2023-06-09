import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * `e-carousel-item` directive represent a item of the Angular Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='#item1'></e-carousel-item>
 *    <e-carousel-item template='#item2'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
export declare class CarouselItemDirective extends ComplexBase<CarouselItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Accepts single/multiple classes (separated by a space) to be used for individual carousel item customization.
     * @default null
     */
    cssClass: any;
    /**
     * Accepts HTML attributes/custom attributes to add in individual carousel item.
     * @default null
     */
    htmlAttributes: any;
    /**
     * Accepts the interval duration in milliseconds for individual carousel item transition.
     * @default null
     */
    interval: any;
    /**
     * Accepts the template for individual carousel item.
     * @default null
     */
    template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * CarouselItem Array Directive
 * @private
 */
export declare class CarouselItemsDirective extends ArrayBase<CarouselItemsDirective> {
    constructor();
}
