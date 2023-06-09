import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * StripLine Directive
 * ```html
 * <e-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-axis>
 * ```
 */
export declare class StripLineDirective extends ComplexBase<StripLineDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Border of the strip line.
     */
    border: any;
    /**
     * Color of the strip line.
     * @default '#808080'
     */
    color: any;
    /**
     * Dash Array of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    dashArray: any;
    /**
     * End value of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    end: any;
    /**
     * Defines the position of the strip line text horizontally. They are,
     * * Start: Places the strip line text at the start.
     * * Middle: Places the strip line text in the middle.
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    horizontalAlignment: any;
    /**
     * isRepeat value of the strip line.
     * @default false
     * @aspdefaultvalueignore
     */
    isRepeat: any;
    /**
     * isSegmented value of the strip line
     * @default false
     * @aspdefaultvalueignore
     */
    isSegmented: any;
    /**
     * Strip line Opacity
     * @default 1
     */
    opacity: any;
    /**
     * repeatEvery value of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    repeatEvery: any;
    /**
     * repeatUntil value of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    repeatUntil: any;
    /**
     * The angle to which the strip line text gets rotated.
     * @default null
     * @aspdefaultvalueignore
     */
    rotation: any;
    /**
     * segmentAxisName of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    segmentAxisName: any;
    /**
     * segmentEnd value of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    segmentEnd: any;
    /**
     * segmentStart value of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    segmentStart: any;
    /**
     * Size of the strip line, when it starts from the origin.
     * @default null
     * @aspdefaultvalueignore
     */
    size: any;
    /**
     * Size type of the strip line
     * @default Auto
     */
    sizeType: any;
    /**
     * Start value of the strip line.
     * @default null
     * @aspdefaultvalueignore
     */
    start: any;
    /**
     *  If set true, strip line get render from axis origin.
     *
     *  @default false
     *
     */
    startFromAxis: any;
    /**
     * Strip line text.
     * @default ''
     */
    text: any;
    /**
     * Options to customize the strip line text.
     */
    textStyle: any;
    /**
     * Defines the position of the strip line text vertically. They are,
     * * Start: Places the strip line text at the start.
     * * Middle: Places the strip line text in the middle.
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    verticalAlignment: any;
    /**
     * If set true, strip line for axis renders.
     * @default true
     */
    visible: any;
    /**
     * Specifies the order of the strip line. They are,
     * * Behind: Places the strip line behind the series elements.
     * * Over: Places the strip line over the series elements.
     * @default 'Behind'
     */
    zIndex: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StripLineDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StripLineDirective, "e-axis>e-striplines>e-stripline", never, { "border": "border"; "color": "color"; "dashArray": "dashArray"; "end": "end"; "horizontalAlignment": "horizontalAlignment"; "isRepeat": "isRepeat"; "isSegmented": "isSegmented"; "opacity": "opacity"; "repeatEvery": "repeatEvery"; "repeatUntil": "repeatUntil"; "rotation": "rotation"; "segmentAxisName": "segmentAxisName"; "segmentEnd": "segmentEnd"; "segmentStart": "segmentStart"; "size": "size"; "sizeType": "sizeType"; "start": "start"; "startFromAxis": "startFromAxis"; "text": "text"; "textStyle": "textStyle"; "verticalAlignment": "verticalAlignment"; "visible": "visible"; "zIndex": "zIndex"; }, {}, never>;
}
/**
 * StripLine Array Directive
 * @private
 */
export declare class StripLinesDirective extends ArrayBase<StripLinesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StripLinesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StripLinesDirective, "e-axis>e-striplines", never, {}, {}, ["children"]>;
}
