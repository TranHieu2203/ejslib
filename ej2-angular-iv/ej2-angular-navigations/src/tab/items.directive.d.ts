import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-tabitem' directive represent a item of the Angular Tab.
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem [header]='Header 1' [content]='Content 1'></e-tabitem>
 *   <e-tabitem [header]='Header 2' [content]='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
export declare class TabItemDirective extends ComplexBase<TabItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets the CSS classes to the Tab item to customize its styles.
     * @default ''
     */
    cssClass: any;
    /**
     * Sets true to disable user interactions of the Tab item.
     * @default false
     */
    disabled: any;
    /**
     * The object used for configuring the Tab item header properties.
     * @default {}
     */
    header: any;
    /**
     * Sets unique ID to Tab item.
     * @default null
     */
    id: any;
    /**
     * Sets false to hide the Tab item.
     * @default true
     */
    visible: any;
    /**
     * Specifies the content of Tab item, that is displayed when concern item header is selected.
     * @default ''
     */
    content: any;
    header_text: any;
    /**
     * Specifies the header text of Tab item.
     * @default null
     */
    headerTemplate: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<TabItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabItemDirective, "e-tabitems>e-tabitem", never, { "content": "content"; "cssClass": "cssClass"; "disabled": "disabled"; "header": "header"; "headerTemplate": "headerTemplate"; "id": "id"; "visible": "visible"; }, {}, ["content", "header_text", "headerTemplate"]>;
}
/**
 * TabItem Array Directive
 * @private
 */
export declare class TabItemsDirective extends ArrayBase<TabItemsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TabItemsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabItemsDirective, "ejs-tab>e-tabitems", never, {}, {}, ["children"]>;
}
