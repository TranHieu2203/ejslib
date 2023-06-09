import { Maps, ITouches } from '../../index';
import { Point, Rect } from '../utils/helper';
import { LayerSettings } from '../index';
import { PanDirection } from '../utils/enum';
/**
 * Zoom module used to process the zoom for maps
 */
export declare class Zoom {
    private maps;
    toolBarGroup: Element;
    private groupElements;
    private currentToolbarEle;
    zoomingRect: Rect;
    selectionColor: string;
    private fillColor;
    private zoomInElements;
    private zoomOutElements;
    private zoomElements;
    private panElements;
    isPanning: boolean;
    mouseEnter: boolean;
    baseTranslatePoint: Point;
    private wheelEvent;
    private cancelEvent;
    currentScale: number;
    isTouch: boolean;
    rectZoomingStart: boolean;
    touchStartList: ITouches[] | TouchList;
    touchMoveList: ITouches[] | TouchList;
    previousTouchMoveList: ITouches[] | TouchList;
    private pinchRect;
    mouseDownPoints: Point;
    mouseMovePoints: Point;
    isDragZoom: boolean;
    currentLayer: LayerSettings;
    private panColor;
    zoomColor: string;
    browserName: string;
    isPointer: Boolean;
    private handled;
    private fingers;
    firstMove: boolean;
    private interaction;
    private lastScale;
    private pinchFactor;
    private startTouches;
    private zoomshapewidth;
    private index;
    intersect: any[];
    private templateCount;
    private distanceX;
    private distanceY;
    mouseDownLatLong: any;
    mouseMoveLatLong: any;
    /**
     * @private
     */
    isSingleClick: boolean;
    /** @private */
    layerCollectionEle: Element;
    constructor(maps: Maps);
    /**
     * To perform zooming for maps
     *
     * @param {Point} position - Specifies the position.
     * @param {number} newZoomFactor - Specifies the zoom factor.
     * @param {string} type - Specifies the type.
     * @returns {void}
     */
    performZooming(position: Point, newZoomFactor: number, type: string): void;
    private calculateInitalZoomTranslatePoint;
    private triggerZoomEvent;
    private getTileTranslatePosition;
    performRectZooming(): void;
    private setInteraction;
    private updateInteraction;
    performPinchZooming(e: PointerEvent | TouchEvent): void;
    drawZoomRectangle(): void;
    /**
     * To animate the zooming process
     *
     * @param {Element} element - Specifies the element
     * @param {boolean} animate - Specifies the boolean value
     * @param {number} x - Specifies the x value
     * @param {number} y - Specifies the y value
     * @param {number} scale - Specifies the scale value
     * @returns {void}
     */
    private animateTransform;
    applyTransform(animate?: boolean): void;
    private markerTranslates;
    /**
     * To translate the layer template elements
     *
     * @param {number} x - Specifies the x value
     * @param {number} y - Specifies the y value
     * @param {number} scale - Specifies the scale value
     * @param {Maps} maps - Specifies the maps value
     * @returns {void}
     * @private
     */
    processTemplate(x: number, y: number, scale: number, maps: Maps): void;
    private dataLabelTranslate;
    private markerTranslate;
    private markerLineAnimation;
    /**
     * @private
     */
    panning(direction: PanDirection, xDifference: number, yDifference: number, mouseLocation?: PointerEvent | TouchEvent | KeyboardEvent): void;
    private toAlignSublayer;
    toolBarZooming(zoomFactor: number, type: string): void;
    createZoomingToolbars(): void;
    performToolBarAction(e: PointerEvent): void;
    /**
     * @param {string} type - Specifies the type.
     * @returns {void}
     * @private
     */
    performZoomingByToolBar(type: string): void;
    private panningStyle;
    private applySelection;
    showTooltip(e: PointerEvent): void;
    removeTooltip(): void;
    alignToolBar(): void;
    /**
     * To bind events.
     *
     * @param {Element} element - Specifies the element.
     * @param {any} process - Specifies the process.
     * @returns {void}
     * @private
     */
    wireEvents(element: Element, process: any): void;
    mapMouseWheel(e: WheelEvent): void;
    doubleClick(e: PointerEvent): void;
    mouseDownHandler(e: PointerEvent | TouchEvent): void;
    mouseMoveHandler(e: PointerEvent | TouchEvent): void;
    mouseUpHandler(e: PointerEvent | TouchEvent): void;
    mouseCancelHandler(e: PointerEvent): void;
    /**
     * To handle the click event for maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event.
     * @returns {void}
     */
    click(e: PointerEvent): void;
    getMousePosition(pageX: number, pageY: number): Point;
    addEventListener(): void;
    removeEventListener(): void;
    /**
     * Get module name.
     *
     * @returns {string} - Returns the module name.
     */
    protected getModuleName(): string;
    /**
     * To destroy the zoom.
     *
     * @param {Maps} maps - Specifies the instance of the maps.
     * @returns {void}
     * @private
     */
    destroy(maps: Maps): void;
}
