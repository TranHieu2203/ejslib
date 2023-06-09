import { PointModel } from '../primitives/point-model';
import { NodeModel } from './node-model';
import { Rect } from '../primitives/rect';
import { Diagram } from '../diagram';
import { DiagramElement } from '../core/elements/diagram-element';
import { SelectorModel } from '../objects/node-model';
/**
 * Snapping
 */
export declare class Snapping {
    private line;
    private diagram;
    private render;
    constructor(diagram: Diagram);
    /** @private */
    canSnap(): boolean;
    private getWrapperObject;
    setSnapLineColor(): string;
    /**
     * Snap to object
     *
     * @private
     */
    snapPoint(diagram: Diagram, selectedObject: SelectorModel, towardsLeft: boolean, towardsTop: boolean, delta: PointModel, startPoint: PointModel, endPoint: PointModel): PointModel;
    /**
     * @private
     */
    round(value: number, snapIntervals: number[], scale: number): number;
    private snapObject;
    /**
     * @private
     */
    snapConnectorEnd(point: PointModel): PointModel;
    private canBeTarget;
    private snapSize;
    /**
     * Snap to object on top
     *
     * @private
     */
    snapTop(horizontalSnap: Snap, verticalSnap: Snap, snapLine: SVGElement, deltaX: number, deltaY: number, shape: SelectorModel, ended: boolean, initialBoundsT: Rect): number;
    /**
     * Snap to object on right
     *
     * @private
     */
    snapRight(horizontalSnap: Snap, verticalSnap: Snap, snapLine: SVGElement, deltaX: number, deltaY: number, shape: SelectorModel, ended: boolean, initialBound: Rect): number;
    /**
     * Snap to object on left
     *
     * @private
     */
    snapLeft(horizontalSnap: Snap, verticalSnap: Snap, snapLine: SVGElement, deltaX: number, deltaY: number, shape: SelectorModel, ended: boolean, initialBoundsB: Rect): number;
    /**
     * Snap to object on bottom
     *
     * @private
     */
    snapBottom(horizontalSnap: Snap, verticalSnap: Snap, snapLine: SVGElement, deltaX: number, deltaY: number, shape: SelectorModel | DiagramElement, ended: boolean, initialRect: Rect): number;
    private createGuidelines;
    private renderAlignmentLines;
    private createHSpacingLines;
    private createVSpacingLines;
    private addHSpacingLines;
    private addVSpacingLines;
    private addSameWidthLines;
    private addSameHeightLines;
    private renderSpacingLines;
    /**
     * To Create Snap object with position, initial bounds, and final bounds \
     *
     * @returns {  void }  To Create Snap object with position, initial bounds, and final bounds .\
     * @param {Diagram} targetBounds - provide the targetBounds value.
     * @param {Rect} bounds - provide the angle value.
     * @param {string} snap - provide the angle value.
     * @private
     */
    createSnapObject(targetBounds: Rect, bounds: Rect, snap: string): SnapObject;
    /**
     *  Calculate the snap angle \
     *
     * @returns {  void }  Calculate the snap angle .\
     * @param {Diagram} diagram - provide the diagram value.
     * @param {number} angle - provide the angle value.
     * @private
     */
    snapAngle(diagram: Diagram, angle: number): number;
    private canConsider;
    private findNodes;
    private intersectsRect;
    private getAdornerLayerSvg;
    /**
     *  To remove grid lines on mouse move and mouse up \
     *
     * @returns {  void }  To remove grid lines on mouse move and mouse up .\
     * @param {Diagram} diagram - provide the source value.
     * @private
     */
    removeGuidelines(diagram: Diagram): void;
    private sortByDistance;
    private findEquallySpacedNodesAtLeft;
    private findEquallySpacedNodesAtRight;
    private findEquallySpacedNodesAtTop;
    private findEquallySpacedNodesAtBottom;
    /**
     * To get Adoner layer to draw snapLine
     *
     * @private
     */
    getLayer(): SVGElement;
    /**
     * Constructor for the snapping module
     *
     * @private
     */
    /**
     *To destroy the ruler
     *
     * @returns {void} To destroy the ruler
     */
    destroy(): void;
    /**
     * Core method to return the component name.
     *
     * @returns {string}  Core method to return the component name.
     * @private
     */
    protected getModuleName(): string;
}
export interface Snap {
    snapped: boolean;
    offset: number;
    left?: boolean;
    bottom?: boolean;
    right?: boolean;
    top?: boolean;
}
/**
 * @private
 */
export interface SnapObject {
    start: PointModel;
    end: PointModel;
    offsetX: number;
    offsetY: number;
    type: string;
}
/**
 * @private
 */
export interface Objects {
    obj: DiagramElement;
    distance: number;
}
/**
 * @private
 */
export interface SnapSize {
    source: NodeModel;
    difference: number;
    offset: number;
}
