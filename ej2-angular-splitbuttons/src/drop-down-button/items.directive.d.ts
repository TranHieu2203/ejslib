import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
export declare class DropDownButtonItemDirective extends ComplexBase<DropDownButtonItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Used to enable or disable the item.
     * @default false
     */
    disabled: any;
    /**
     * Defines class/multiple classes separated by a space for the item that is used to include an icon.
     * Action item can include font icon and sprite image.
     * @default ''
     */
    iconCss: any;
    /**
     * Specifies the id for item.
     * @default ''
     */
    id: any;
    /**
     * Specifies separator between the items. Separator are horizontal lines used to group action items.
     * @default false
     */
    separator: any;
    /**
     * Specifies text for item.
     * @default ''
     */
    text: any;
    /**
     * Specifies url for item that creates the anchor link to navigate to the url provided.
     * @default ''
     */
    url: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * DropDownButtonItem Array Directive
 * @private
 */
export declare class DropDownButtonItemsDirective extends ArrayBase<DropDownButtonItemsDirective> {
    constructor();
}
