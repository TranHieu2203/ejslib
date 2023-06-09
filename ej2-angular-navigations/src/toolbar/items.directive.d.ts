import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * 'e-item' directive represent a item of the Angular Toolbar.
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
export declare class ItemDirective extends ComplexBase<ItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    click: any;
    /**
     * Specifies the types of command to be rendered in the Toolbar.
     * Supported types are:
     * - Button: Creates the Button control with its given properties like text, prefixIcon, etc.
     * - Separator: Adds a horizontal line that separates the Toolbar commands.
     * - Input: Creates an input element that is applicable to template rendering with Syncfusion controls like DropDownList,
     * AutoComplete, etc.
     * @default 'Button'
     */
    type: any;
    /**
     * Specifies the location for aligning Toolbar items on the Toolbar. Each command will be aligned according to the `align` property.
     * Possible values are:
     * - Left: To align commands to the left side of the Toolbar.
     * - Center: To align commands at the center of the Toolbar.
     * - Right: To align commands to the right side of the Toolbar.
     *
     * @default "Left"
     */
    align: any;
    /**
     * Defines single/multiple classes (separated by space) to be used for customization of commands.
     * @default ""
     */
    cssClass: any;
    /**
     * Specifies whether an item should be disabled or not.
     * @default false
     */
    disabled: any;
    /**
     * Defines htmlAttributes used to add custom attributes to Toolbar command.
     * Supports HTML attributes such as style, class, etc.
     * @default null
     */
    htmlAttributes: any;
    /**
     * Specifies the unique ID to be used with button or input element of Toolbar items.
     * @default ""
     */
    id: any;
    /**
     * Specifies the Toolbar command display area when an element's content is too large to fit available space.
     * This is applicable only to `popup` mode. Possible values are:
     * - Show:  Always shows the item as the primary priority on the *Toolbar*.
     * - Hide: Always shows the item as the secondary priority on the *popup*.
     * - None: No priority for display, and as per normal order moves to popup when content exceeds.
     * @default 'None'
     */
    overflow: any;
    /**
     * Defines single/multiple classes separated by space used to specify an icon for the button.
     * The icon will be positioned before the text content if text is available, otherwise the icon alone will be rendered.
     * @default ""
     */
    prefixIcon: any;
    /**
     * Defines the priority of items to display it in popup always.
     * It allows to maintain toolbar item on popup always but it does not work for toolbar priority items.
     * @default false
     */
    showAlwaysInPopup: any;
    /**
     * Specifies where the button text will be displayed on *popup mode* of the Toolbar.
     * Possible values are:
     * - Toolbar:  Text will be displayed on *Toolbar* only.
     * - Overflow: Text will be displayed only when content overflows to *popup*.
     * - Both: Text will be displayed on *popup* and *Toolbar*.
     * @default 'Both'
     */
    showTextOn: any;
    /**
     * Defines single/multiple classes separated by space used to specify an icon for the button.
     * The icon will be positioned after the text content if text is available.
     * @default ""
     */
    suffixIcon: any;
    /**
     * Specifies the text to be displayed on the Toolbar button.
     * @default ""
     */
    text: any;
    /**
     * Specifies the text to be displayed on hovering the Toolbar button.
     * @default ""
     */
    tooltipText: any;
    /**
     * Specifies whether an item should be hidden or not.
     * @default true
     */
    visible: any;
    /**
     * Specifies the width of the Toolbar button commands.
     * @default 'auto'
     */
    width: any;
    /**
     * Specifies the HTML element/element ID as a string that can be added as a Toolbar command.
     *
     * @default ""
     */
    template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Item Array Directive
 * @private
 */
export declare class ItemsDirective extends ArrayBase<ItemsDirective> {
    constructor();
}
