import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-chip` directive represent a chip of the Angular ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
export declare class ChipDirective extends ComplexBase<ChipDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the icon CSS class for the avatar in the chip.
     * @default ''
     */
    avatarIconCss: any;
    /**
     * Specifies the customized text value for the avatar in the chip.
     * @default ''
     */
    avatarText: any;
    /**
     * Specifies the custom classes to be added to the chip element used to customize the ChipList component.
     * @default ''
     */
    cssClass: any;
    /**
     * Specifies a value that indicates whether the chip component is enabled or not.
     * @default true
     */
    enabled: any;
    /**
     * Specifies the leading icon CSS class for the chip.
     * @default ''
     */
    leadingIconCss: any;
    /**
     * Specifies the leading icon url for the chip.
     * @default ''
     */
    leadingIconUrl: any;
    /**
     * Specifies the text content for the chip.
     * @default ''
     */
    text: any;
    /**
     * Specifies the trailing icon CSS class for the chip.
     * @default ''
     */
    trailingIconCss: any;
    /**
     * Specifies the trailing icon url for the chip.
     * @default ''
     */
    trailingIconUrl: any;
    /**
     * Defines the value of the chip.
     * @default ''
     */
    value: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChipDirective, "e-chips>e-chip", never, { "avatarIconCss": "avatarIconCss"; "avatarText": "avatarText"; "cssClass": "cssClass"; "enabled": "enabled"; "leadingIconCss": "leadingIconCss"; "leadingIconUrl": "leadingIconUrl"; "text": "text"; "trailingIconCss": "trailingIconCss"; "trailingIconUrl": "trailingIconUrl"; "value": "value"; }, {}, never>;
}
/**
 * Chip Array Directive
 * @private
 */
export declare class ChipsDirective extends ArrayBase<ChipsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChipsDirective, "ejs-chiplist>e-chips", never, {}, {}, ["children"]>;
}
