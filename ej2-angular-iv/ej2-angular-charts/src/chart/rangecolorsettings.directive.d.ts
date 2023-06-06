import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * RangeColorSetting Directive
 * ```html
 * <e-rangeColorSettings><e-rangeColorSetting></e-rangeColorSetting><e-rangeColorSettings>
 * ```
 */
export declare class RangeColorSettingDirective extends ComplexBase<RangeColorSettingDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specify the fill colors of point those lies on the given range, if multiple colors mentioned, then we need to fill gradient
     */
    colors: any;
    /**
     * Specify the end value of color mapping range
     */
    end: any;
    /**
     * Specify name for the range mapping item.
     */
    label: any;
    /**
     * Specify the start value of color mapping range
     */
    start: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeColorSettingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeColorSettingDirective, "e-rangecolorsettings>e-rangecolorsetting", never, { "colors": "colors"; "end": "end"; "label": "label"; "start": "start"; }, {}, never>;
}
/**
 * RangeColorSetting Array Directive
 * @private
 */
export declare class RangeColorSettingsDirective extends ArrayBase<RangeColorSettingsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeColorSettingsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeColorSettingsDirective, "ejs-chart>e-rangecolorsettings", never, {}, {}, ["children"]>;
}
