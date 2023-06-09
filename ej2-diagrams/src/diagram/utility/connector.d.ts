import { PointModel } from './../primitives/point-model';
import { Connector } from '../objects/connector';
import { Rect } from './../primitives/rect';
import { DiagramElement, Corners } from './../core/elements/diagram-element';
import { Direction, LayoutOrientation } from '../enum/enum';
import { MarginModel } from '../core/appearance-model';
import { Segment } from '../interaction/scroller';
/**
 * Connector modules are used to dock and update the connectors
 */
/**
 * intermeditatePoints method\
 *
 * @returns {  Function }    getFunction method .\
 * @param {PointModel} element - provide the angle value.
 * @param {PointModel} layoutOrientation - provide the angle value.
 * @param {PointModel} lineDistribution - provide the angle value.
 * @private
 */
export declare function findConnectorPoints(element: Connector, layoutOrientation?: LayoutOrientation, lineDistribution?: boolean): PointModel[];
/**
 * swapBounds method \
 *
 * @returns { Corners }     swapBounds method .\
 * @param {PointModel} object - provide the sourceWrapper value.
 * @param {PointModel} bounds - provide the padding value.
 * @param {Rect} outerBounds - provide the padding value.
 *
 * @private
 */
export declare function swapBounds(object: DiagramElement, bounds: Corners, outerBounds: Rect): Corners;
/**
 * Returns the margin of source node and the target node
 *
 * @returns { number } - findMargin method .\
 * @param { Connector } element - provide the element value
 * @private
 */
export declare function findMargin(element: Connector): number;
/**
 * findAngle method \
 *
 * @returns { number } findAngle method .\
 * @param {DiagramElement} s - provide the s value.
 * @param {End} e - provide the e value.
 * @private
 */
export declare function findAngle(s: PointModel, e: PointModel): number;
/**
 * findPoint method \
 *
 * @returns { number } findPoint method .\
 * @param {Corners} cor - provide the cor value.
 * @param {string} direction - provide the direction value.
 * @private
 */
export declare function findPoint(cor: Corners, direction: string): PointModel;
/**
 * getIntersection method \
 *
 * @returns { PointModel } getIntersection method .\
 * @param {PointModel} ele - provide the ele value.
 * @param {number} bounds - provide the bounds value.
 * @param {number} sPt - provide the sPt value.
 * @param {number} tPt - provide the tPt value.
 * @param {number} isTar - provide the isTar value.
 * @private
 */
export declare function getIntersection(ele: Connector, bounds: DiagramElement, sPt: PointModel, tPt: PointModel, isTar: boolean): PointModel;
/**
 * getIntersectionPoints method \
 *
 * @returns { PointModel } getIntersectionPoints method .\
 * @param {Segment} thisSegment - provide the ele value.
 * @param {Object[]} pts - provide the bounds value.
 * @param {boolean} minimal - provide the sPt value.
 * @param {PointModel} point - provide the sPt value.
 * @private
 */
export declare function getIntersectionPoints(thisSegment: Segment, pts: Object[], minimal: boolean, point: PointModel): PointModel;
/**
 * orthoConnection2Segment method \
 *
 * @returns {  PointModel[] } orthoConnection2Segment method .\
 * @param {Rect | Corners} source - provide the source value.
 * @param {End} target - provide the target  value.
 * @private
 */
export declare function orthoConnection2Segment(source: End, target: End): PointModel[];
/**
 * getPortDirection method \
 *
 * @returns {  boolean } getPortDirection method .\
 * @param {PointModel} point - provide the point  value.
 * @param {Corners} corner - provide the corner  value.
 * @param {Rect} bounds - provide the bounds  value.
 * @param {boolean} closeEdge - provide the closeEdge  value.
 * @private
 */
export declare function getPortDirection(point: PointModel, corner: Corners, bounds: Rect, closeEdge: boolean): Direction;
/**
 * getOuterBounds method \
 *
 * @returns {  Rect } getOuterBounds method .\
 * @param {Connector} obj - provide the point  value.
 * @private
 */
export declare function getOuterBounds(obj: Connector): Rect;
/**
 * getOppositeDirection method \
 *
 * @returns {  string } getOppositeDirection method .\
 * @param {string} direction - provide the direction  value.
 * @private
 */
export declare function getOppositeDirection(direction: string): string;
/** @private */
export interface Intersection {
    enabled: boolean;
    intersectPt: PointModel;
}
/** @private */
export interface LengthFraction {
    lengthFractionIndex: number;
    fullLength: number;
    segmentIndex: number;
    pointIndex: number;
}
/** @private */
export interface BridgeSegment {
    bridgeStartPoint: PointModel[];
    bridges: Bridge[];
    segmentIndex: number;
}
/** @private */
export interface ArcSegment {
    angle: number;
    endPoint: PointModel;
    path: string;
    segmentPointIndex: number;
    startPoint: PointModel;
    sweep: number;
    target: string;
    rendered: boolean;
}
/** @private */
export interface Bridge {
    angle: number;
    endPoint: PointModel;
    path: string;
    segmentPointIndex: number;
    startPoint: PointModel;
    sweep: number;
    target: string;
    rendered: boolean;
}
/** @private */
export interface End {
    corners: Corners;
    point: PointModel;
    direction: Direction;
    margin: MarginModel;
}
