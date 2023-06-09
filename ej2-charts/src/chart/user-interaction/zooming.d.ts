import { Chart } from '../chart';
import { Rect } from '@syncfusion/ej2-svg-base';
import { Toolkit } from './zooming-toolkit';
import { AxisModel } from '../axis/axis-model';
import { ITouches, IZoomAxisRange } from '../../chart/model/chart-interface';
/**
 * `Zooming` module handles the zooming for chart.
 */
export declare class Zoom {
    private chart;
    private zooming;
    private elementId;
    /** @private */
    zoomingRect: Rect;
    /** @private */
    toolkit: Toolkit;
    /** @private */
    toolkitElements: Element;
    /** @private */
    isPanning: boolean;
    /** @private */
    isZoomed: boolean;
    /** @private */
    isPointer: Boolean;
    /** @private */
    pinchTarget: Element;
    /** @private */
    isDevice: Boolean;
    /** @private */
    browserName: string;
    /** @private */
    touchStartList: ITouches[] | TouchList;
    /** @private */
    touchMoveList: ITouches[] | TouchList;
    /** @private */
    offset: Rect;
    /** @private */
    zoomAxes: IZoomAxisRange[];
    /** @private */
    isIOS: Boolean;
    /** @private */
    performedUI: boolean;
    private zoomkitOpacity;
    private wheelEvent;
    private cancelEvent;
    private zoomCompleteEvtCollection;
    /**
     * Constructor for Zooming module.
     *
     * @private
     */
    constructor(chart: Chart);
    /**
     * Function that handles the Rectangular zooming.
     *
     * @returns {void}
     */
    renderZooming(e: PointerEvent | TouchEvent, chart: Chart, isTouch: boolean): void;
    private drawZoomingRectangle;
    doPan(chart: Chart, axes: AxisModel[], xDifference?: number, yDifference?: number): void;
    private performDefferedZoom;
    /**
     * Redraw the chart on zooming.
     *
     * @returns {void}
     * @private
     */
    performZoomRedraw(chart: Chart): void;
    private refreshAxis;
    private doZoom;
    /** It is used to redraw the chart and trigger zoomComplete event */
    private redrawOnZooming;
    /**
     * Function that handles the Mouse wheel zooming.
     *
     * @returns {void}
     * @private
     */
    performMouseWheelZooming(e: WheelEvent, mouseX: number, mouseY: number, chart: Chart, axes: AxisModel[]): void;
    /**
     * Function that handles the Pinch zooming.
     *
     * @returns {void}
     * @private
     */
    performPinchZooming(e: TouchEvent, chart: Chart): boolean;
    private calculatePinchZoomFactor;
    private setTransform;
    private calculateZoomAxesRange;
    private showZoomingToolkit;
    /**
     * To the show the zooming toolkit.
     *
     * @returns {void}
     * @private
     */
    applyZoomToolkit(chart: Chart, axes: AxisModel[]): void;
    /**
     * Return boolean property to show zooming toolkit.
     *
     * @returns {void}
     * @private
     */
    isAxisZoomed(axes: AxisModel[]): boolean;
    private zoomToolkitMove;
    private zoomToolkitLeave;
    /**
     * @hidden
     */
    addEventListener(): void;
    /**
     * @hidden
     */
    removeEventListener(): void;
    /**
     * Handles the mouse wheel on chart.
     *
     * @returns {boolean} false
     * @private
     */
    chartMouseWheel(e: WheelEvent): boolean;
    /**
     * @hidden
     */
    private mouseMoveHandler;
    /**
     * @hidden
     */
    private mouseDownHandler;
    /**
     * @hidden
     */
    private mouseUpHandler;
    /**
     * @hidden
     */
    private mouseCancelHandler;
    /**
     * Handles the touch pointer.
     *
     * @returns {ITouches[]} touchList collection
     * @private
     */
    addTouchPointer(touchList: ITouches[], e: PointerEvent, touches: TouchList): ITouches[];
    /**
     * Get module name.
     */
    protected getModuleName(): string;
    /**
     * To destroy the zooming.
     *
     * @returns {void}
     * @private
     */
    destroy(): void;
}
