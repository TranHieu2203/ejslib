import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Layers Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
export declare class LayerDirective extends ComplexBase<LayerDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the description of the layer
     *
     * @aspdefaultvalueignore
     * @default undefined
     */
    addInfo: any;
    /**
     * Defines the id of a diagram layer
     * @default ''
     */
    id: any;
    /**
     * Enables or disables editing objects in a particular layer
     * @default false
     */
    lock: any;
    /**
     * Defines the collection of the objects that are added to a particular layer
     * @aspdefaultvalueignore
     * @default undefined
     */
    objects: any;
    /**
     * Enables or disables the visibility of objects in a particular layer
     * @default true
     */
    visible: any;
    /**
     * Defines the zOrder of the layer
     * @default -1
     */
    zIndex: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Layer Array Directive
 * @private
 */
export declare class LayersDirective extends ArrayBase<LayersDirective> {
    constructor();
}
