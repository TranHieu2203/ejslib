/**
 * Maps Component file
 */
import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { L10n, Internationalization } from '@syncfusion/ej2-base';
import { ModuleDeclaration } from '@syncfusion/ej2-base';
import { SvgRenderer } from '@syncfusion/ej2-svg-base';
import { Size, Point } from './utils/helper';
import { LayerSettings } from './model/base';
import { ZoomSettingsModel, LegendSettingsModel, LayerSettingsModel } from './model/base-model';
import { MarkerSettingsModel, SelectionSettingsModel } from './model/base-model';
import { TitleSettingsModel, BorderModel, MarginModel, CenterPositionModel } from './model/base-model';
import { MapsAreaSettingsModel, AnnotationModel } from './model/base-model';
import { Bubble } from './layers/bubble';
import { Legend } from './layers/legend';
import { Marker } from './layers/marker';
import { Highlight } from './user-interaction/highlight';
import { Selection } from './user-interaction/selection';
import { MapsTooltip } from './user-interaction/tooltip';
import { Zoom } from './user-interaction/zoom';
import { ProjectionType, MapsTheme, PanDirection, TooltipGesture } from './utils/enum';
import { MapsModel } from './maps-model';
import { ILoadEventArgs, ILoadedEventArgs, IMouseEventArgs, IResizeEventArgs, ITooltipRenderEventArgs } from './model/interface';
import { GeoPosition, ITooltipRenderCompleteEventArgs, ILegendRenderingEventArgs } from './model/interface';
import { ILayerRenderingEventArgs, IShapeRenderingEventArgs, IMarkerRenderingEventArgs, IMarkerClickEventArgs } from './model/interface';
import { IMarkerMoveEventArgs, ILabelRenderingEventArgs, IBubbleMoveEventArgs, IBubbleClickEventArgs } from './model/interface';
import { IMarkerClusterClickEventArgs, IMarkerClusterMoveEventArgs, IMarkerClusterRenderingEventArgs } from './model/interface';
import { ISelectionEventArgs, IShapeSelectedEventArgs, IMapPanEventArgs, IMapZoomEventArgs } from './model/interface';
import { IBubbleRenderingEventArgs, IAnimationCompleteEventArgs, IPrintEventArgs, IThemeStyle } from './model/interface';
import { LayerPanel } from './layers/layer-panel';
import { GeoLocation, Rect } from '../maps/utils/helper';
import { Annotations } from '../maps/user-interaction/annotation';
import { DataLabel, IAnnotationRenderingEventArgs } from './index';
import { NavigationLine } from './layers/navigation-selected-line';
import { ExportType } from '../maps/utils/enum';
import { PdfPageOrientation } from '@syncfusion/ej2-pdf-export';
import { Print } from './model/print';
import { PdfExport } from './model/export-pdf';
import { ImageExport } from './model/export-image';
/**
 * Represents the Maps control.
 * ```html
 * <div id="maps"/>
 * <script>
 *   var maps = new Maps();
 *   maps.appendTo("#maps");
 * </script>
 * ```
 */
export declare class Maps extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Sets and gets the module to add bubbles in the maps component.
     */
    bubbleModule: Bubble;
    /**
     * Sets and get the module to add the marker in the maps component.
     */
    markerModule: Marker;
    /**
     * Sets and gets the module to add the data-label in the maps component.
     */
    dataLabelModule: DataLabel;
    /**
     * Sets and gets the module to highlight the element when mouse has hovered on it in maps.
     */
    highlightModule: Highlight;
    /**
     * Sets and gets the module to add the navigation lines in the maps component.
     */
    navigationLineModule: NavigationLine;
    /**
     * Sets and gets the module to add the legend in maps.
     */
    legendModule: Legend;
    /**
     * Sets and gets the module to select the geometric shapes when clicking in maps.
     */
    selectionModule: Selection;
    /**
     * Sets and gets the module to add the tooltip when mouse has hovered on an element in maps.
     */
    mapsTooltipModule: MapsTooltip;
    /**
     * Sets and gets the module to add the zooming operations in maps.
     */
    zoomModule: Zoom;
    /**
     * Sets and gets the module to add annotation elements in maps.
     */
    annotationsModule: Annotations;
    /**
     * This module enables the print functionality in Maps control.
     *
     * @private
     */
    printModule: Print;
    /**
     * This module enables the export to PDF functionality in Maps control.
     *
     * @private
     */
    pdfExportModule: PdfExport;
    /**
     * This module enables the export to image functionality in Maps control.
     *
     * @private
     */
    imageExportModule: ImageExport;
    /**
     * Sets and gets the background color of the maps container.
     *
     * @default null
     */
    background: string;
    /**
     * Enables or disables the visibility state of the separator for grouping.
     *
     * @default false
     */
    useGroupingSeparator: boolean;
    /**
     * Sets and gets the format in which the text in the maps are to be rendered.
     *
     * @default null
     */
    format: string;
    /**
     * Sets and gets the width in which the maps is to be rendered.
     *
     * @default null
     */
    width: string;
    /**
     * Sets and gets the height in which the maps is to be rendered.
     *
     * @default null
     */
    height: string;
    /**
     * Sets and gets the mode in which the tooltip is to be displayed.
     * The tooltip can be rendered on mouse move, click or double clicking on the
     * element on the map.
     *
     * @default 'MouseMove'
     */
    tooltipDisplayMode: TooltipGesture;
    /**
     * Enables or disables the print functionality in map.
     *
     * @default false
     */
    allowPrint: boolean;
    /**
     * Enables or disables the export to image functionality in map.
     *
     * @default false
     */
    allowImageExport: boolean;
    /**
     * Enables or disables the export to PDF functionality in map.
     *
     * @default false
     */
    allowPdfExport: boolean;
    /**
     * Sets and gets the title to be displayed for maps.
     */
    titleSettings: TitleSettingsModel;
    /**
     * Sets and gets the options to customize the zooming operations in maps.
     */
    zoomSettings: ZoomSettingsModel;
    /**
     * Sets and gets the options to customize the legend of the maps.
     */
    legendSettings: LegendSettingsModel;
    /**
     * Sets and gets the options to customize the layers of the maps.
     */
    layers: LayerSettingsModel[];
    /**
     * Sets and gets the options for customizing the annotation of maps.
     */
    annotations: AnnotationModel[];
    /**
     * Sets and gets the options to customize the margins of the maps.
     */
    margin: MarginModel;
    /**
     * Sets and gets the options for customizing the color and width of the maps border.
     */
    border: BorderModel;
    /**
     * Set and gets the theme supported for the maps.
     *
     * @default Material
     */
    theme: MapsTheme;
    /**
     * Sets and gets the projection type for the maps.
     *
     * @default Mercator
     */
    projectionType: ProjectionType;
    /**
     * Sets and gets the base map index of maps. It provides the option to select which layer to be visible in the maps.
     *
     * @default 0
     */
    baseLayerIndex: number;
    /**
     * Sets and gets the description for maps.
     *
     * @default null
     */
    description: string;
    /**
     * Sets and gets the tab index value for the maps.
     *
     * @default 1
     */
    tabIndex: number;
    /**
     * Sets and gets the center position of the maps.
     */
    centerPosition: CenterPositionModel;
    /**
     * Sets and gets the options to customize the area around the map.
     */
    mapsArea: MapsAreaSettingsModel;
    /**
     * Triggers when the map is on load.
     *
     * @event load
     */
    load: EmitType<ILoadEventArgs>;
    /**
     * Triggers before the print gets started.
     *
     * @event beforePrint
     */
    beforePrint: EmitType<IPrintEventArgs>;
    /**
     * Triggers after the maps gets rendered.
     *
     * @event loaded
     */
    loaded: EmitType<ILoadedEventArgs>;
    /**
     * Triggers when a user clicks on an element in Maps.
     *
     * @event click
     * @deprecated
     */
    click: EmitType<IMouseEventArgs>;
    /**
     * Triggers when a user clicks on an element in Maps.
     *
     * @event onclick
     */
    onclick: EmitType<IMouseEventArgs>;
    /**
     * Triggers when performing the double click operation on an element in maps.
     *
     * @event doubleClick
     */
    doubleClick: EmitType<IMouseEventArgs>;
    /**
     * Triggers when performing the right click operation on an element in maps.
     *
     * @event rightClick
     */
    rightClick: EmitType<IMouseEventArgs>;
    /**
     * Triggers when resizing the maps.
     *
     * @event resize
     */
    resize: EmitType<IResizeEventArgs>;
    /**
     * Triggers before the maps tooltip gets rendered.
     *
     * @event tooltipRender
     */
    tooltipRender: EmitType<ITooltipRenderEventArgs>;
    /**
     * Triggers before the legend gets rendered.
     *
     * @event legendRendering
     * @deprecated
     */
    legendRendering: EmitType<ILegendRenderingEventArgs>;
    /**
     * Triggers after the maps tooltip gets rendered.
     *
     * @deprecated
     * @event tooltipRenderComplete
     */
    tooltipRenderComplete: EmitType<ITooltipRenderCompleteEventArgs>;
    /**
     * Triggers when clicking a shape in maps.
     *
     * @event shapeSelected
     */
    shapeSelected: EmitType<IShapeSelectedEventArgs>;
    /**
     * Triggers when clicking the shape on maps and before the selection is applied.
     *
     * @event itemSelection
     */
    itemSelection: EmitType<ISelectionEventArgs>;
    /**
     * Trigger when mouse move on the shape in maps and before the shape gets highlighted.
     *
     * @event itemHighlight
     */
    itemHighlight: EmitType<ISelectionEventArgs>;
    /**
     * Triggers when mouse move on the shape in maps and before the shape gets highlighted.
     *
     * @event shapeHighlight
     */
    shapeHighlight: EmitType<IShapeSelectedEventArgs>;
    /**
     * Triggers before the maps layer gets rendered.
     *
     * @event layerRendering
     */
    layerRendering: EmitType<ILayerRenderingEventArgs>;
    /**
     * Triggers before the maps shape gets rendered.
     *
     * @event shapeRendering
     */
    shapeRendering: EmitType<IShapeRenderingEventArgs>;
    /**
     * Triggers before the maps marker gets rendered.
     *
     * @event markerRendering
     */
    markerRendering: EmitType<IMarkerRenderingEventArgs>;
    /**
     * Triggers before the maps marker cluster gets rendered.
     *
     * @event markerClusterRendering
     */
    markerClusterRendering: EmitType<IMarkerClusterRenderingEventArgs>;
    /**
     * Triggers when clicking on the maps marker element.
     *
     * @event markerClick
     */
    markerClick: EmitType<IMarkerClickEventArgs>;
    /**
     * Triggers when clicking the marker cluster in maps.
     *
     * @event markerClusterClick
     */
    markerClusterClick: EmitType<IMarkerClusterClickEventArgs>;
    /**
     * Triggers when moving the mouse over the marker cluster element in maps.
     *
     * @event markerClusterMouseMove
     */
    markerClusterMouseMove: EmitType<IMarkerClusterMoveEventArgs>;
    /**
     * Triggers when moving the mouse over the marker element in maps.
     *
     * @event markerMouseMove
     */
    markerMouseMove: EmitType<IMarkerMoveEventArgs>;
    /**
     * Triggers before the data-label gets rendered.
     *
     * @event dataLabelRendering
     */
    dataLabelRendering: EmitType<ILabelRenderingEventArgs>;
    /**
     * Triggers before the bubble element gets rendered on the map.
     *
     * @event bubbleRendering
     */
    bubbleRendering: EmitType<IBubbleRenderingEventArgs>;
    /**
     * Triggers when performing the click operation on the bubble element in maps.
     *
     * @event bubbleClick
     */
    bubbleClick: EmitType<IBubbleClickEventArgs>;
    /**
     * Triggers when hovering the mouse on the bubble element in maps.
     *
     * @event bubbleMouseMove
     */
    bubbleMouseMove: EmitType<IBubbleMoveEventArgs>;
    /**
     * Triggers after the animation completed in the maps component.
     *
     * @event animationComplete
     */
    animationComplete: EmitType<IAnimationCompleteEventArgs>;
    /**
     * Triggers before rendering the annotation in maps.
     *
     * @event annotationRendering
     */
    annotationRendering: EmitType<IAnnotationRenderingEventArgs>;
    /**
     * Triggers before the zoom operations in the maps such as zoom in and zoom out.
     *
     * @event zoom
     */
    zoom: EmitType<IMapZoomEventArgs>;
    /**
     * Triggers before performing the panning operation.
     *
     * @event pan
     */
    pan: EmitType<IMapPanEventArgs>;
    /**
     * Specifies the function to format the text contents in the maps.
     *
     * @private
     */
    formatFunction: any;
    /**
     * Specifies the svg renderer object.
     *
     * @private
     */
    renderer: SvgRenderer;
    /**
     * Specifies the svg element's object of maps.
     *
     * @private
     */
    svgObject: Element;
    /** @public */
    mapScaleValue: number;
    /**
     * Specifies the available height and width of maps.
     *
     * @private
     */
    availableSize: Size;
    /**
     * whether it is layer add or not.
     *
     * @private
     */
    isAddLayer: boolean;
    /**
     * Specifies the localization object.
     *
     * @private
     */
    localeObject: L10n;
    /**
     * Specifies the default values of localization values.
     */
    private defaultLocalConstants;
    /**
     * Internal use of internationalization instance.
     *
     * @private
     */
    intl: Internationalization;
    /**
     * Check layer whether is geometry or tile
     *
     * @private
     */
    isTileMap: boolean;
    /**
     * Resize the map
     */
    private resizeTo;
    /**
     * Resize the map
     */
    private isResize;
    /**
     * @private
     */
    mapAreaRect: Rect;
    /**
     * @private
     */
    layersCollection: LayerSettings[];
    /**
     * @private
     * @hidden
     */
    mapLayerPanel: LayerPanel;
    /**
     * @private
     * @hidden
     */
    /**
     * @private
     */
    themeStyle: IThemeStyle;
    /**
     * @private
     */
    isReset: boolean;
    /**
     * @private
     */
    totalRect: Rect;
    /**
     *
     * Specifies whether the shape is selected in the maps or not.
     *
     * @returns {boolean} - Returns the boolean value.
     */
    readonly isShapeSelected: boolean;
    dataLabel: DataLabel;
    /** @private */
    isTouch: boolean;
    /** @private */
    baseSize: Size;
    /** @private */
    scale: number;
    /** @private */
    baseScale: number;
    /** @private */
    mapSelect: boolean;
    /** @private */
    baseMapBounds: GeoLocation;
    /** @private */
    baseMapRectBounds: any;
    /** @public */
    translatePoint: Point;
    /** @private */
    baseTranslatePoint: Point;
    /** @public */
    zoomTranslatePoint: Point;
    /** @private */
    markerZoomFactor: number;
    /** @private */
    markerZoomCenterPoint: CenterPositionModel;
    /** @private */
    markerZoomedState: boolean;
    /** @private */
    zoomPersistence: boolean;
    /** @private */
    defaultState: boolean;
    /** @private */
    markerCenterLatitude: number;
    /** @private */
    markerCenterLongitude: number;
    /** @private */
    previousCenterLatitude: number;
    /** @private */
    previousCenterLongitude: number;
    /** @private */
    centerPositionChanged: boolean;
    /** @private */
    previousZoomFactor: number;
    /** @private */
    isTileMapSubLayer: boolean;
    /** @private */
    shouldZoomCurrentFactor: number;
    /** @private */
    shouldZoomPreviousFactor: number;
    /** @private */
    markerNullCount: number;
    /** @private */
    translateType: string;
    /** @public */
    previousProjection: String;
    /** @private */
    currentShapeDataLength: number;
    /** @private */
    tileTranslatePoint: Point;
    /** @private */
    baseTileTranslatePoint: Point;
    /** @private */
    isDevice: Boolean;
    /** @private */
    tileZoomLevel: number;
    /** @private */
    tileZoomScale: number;
    /** @private */
    staticMapZoom: number;
    /** @private */
    serverProcess: any;
    /** @private */
    previousScale: number;
    /** @private */
    previousPoint: Point;
    /** @private */
    centerLatOfGivenLocation: number;
    /** @private */
    centerLongOfGivenLocation: number;
    /** @private */
    minLatOfGivenLocation: number;
    /** @private */
    minLongOfGivenLocation: number;
    /** @private */
    maxLatOfGivenLocation: number;
    /** @private */
    maxLongOfGivenLocation: number;
    /** @private */
    scaleOfGivenLocation: number;
    /** @private */
    zoomNotApplied: boolean;
    /** @public */
    dataLabelShape: number[];
    zoomShapeCollection: object[];
    zoomLabelPositions: object[];
    mouseDownEvent: Object;
    mouseClickEvent: Object;
    /** @private */
    shapeSelectionClass: Element;
    /** @private */
    selectedElementId: string[];
    /** @private */
    markerSelectionClass: Element;
    /** @private */
    selectedMarkerElementId: string[];
    /** @private */
    bubbleSelectionClass: Element;
    /** @private */
    selectedBubbleElementId: string[];
    /** @private */
    navigationSelectionClass: Element;
    /** @private */
    selectedNavigationElementId: string[];
    /** @private */
    legendSelectionClass: SelectionSettingsModel;
    /** @private */
    selectedLegendElementId: number[];
    /** @private */
    legendSelectionCollection: any[];
    /** @private */
    shapeSelections: boolean;
    /** @private */
    legendSelection: boolean;
    /** @private */
    toggledLegendId: number[];
    /** @private */
    toggledShapeElementId: string[];
    /** @private */
    checkInitialRender: boolean;
    /** @private */
    widthBeforeRefresh: number;
    /** @private */
    heightBeforeRefresh: number;
    /** @private */
    previousTranslate: Point;
    /** @private */
    initialTileTranslate: Point;
    /** @private */
    previousTileWidth: number;
    /** @private */
    previousTileHeight: number;
    /** @private */
    initialZoomLevel: number;
    /** @private */
    initialCheck: boolean;
    /** @private */
    applyZoomReset: boolean;
    /** @private */
    markerClusterExpandCheck: boolean;
    /** @private */
    markerClusterExpand: boolean;
    /** @private */
    shapeSelectionItem: any[];
    /**
     * Constructor for creating the widget
     *
     * @param {MapsModel} options Specifies the options
     * @param {string | HTMLElement} element Specifies the element
     */
    constructor(options?: MapsModel, element?: string | HTMLElement);
    /**
     * To manage persist maps data
     *
     * @returns {void}
     */
    private mergePersistMapsData;
    /**
     * Gets the localized label by locale keyword.
     *
     * @param  {string} key - Specifies the key
     * @returns {string} - Returns the string value
     */
    getLocalizedLabel(key: string): string;
    /**
     * Initializing pre-required values.
     *
     * @returns {void}
     */
    protected preRender(): void;
    private renderElements;
    /**
     * To Initialize the control rendering.
     *
     * @returns {void}
     */
    protected render(): void;
    protected processRequestJsonData(): void;
    private processAjaxRequest;
    /**
     * This method is used to process the JSON data to render the maps.
     *
     * @param {string} processType - Specifies the process type in maps.
     * @param {any | string} data - Specifies the data for maps.
     * @param {LayerSettings} layer - Specifies the layer for the maps.
     * @param {string} dataType - Specifies the data type for maps.
     * @returns {void}
     */
    processResponseJsonData(processType: string, data?: any | string, layer?: LayerSettings, dataType?: string): void;
    private renderMap;
    /**
     * To apply color to the initial selected marker
     *
     * @param {SelectionSettingsModel} selectionSettings - Specifies the selection settings
     * @param {Maps} map - Specifies the instance of the maps
     * @param {Element} targetElement - Specifies the target element
     * @param {any} data - Specifies the data
     * @returns {void}
     * @private
     */
    markerSelection(selectionSettings: SelectionSettingsModel, map: Maps, targetElement: Element, data: any): void;
    /**
     * initial selection of marker
     *
     * @param {number} layerIndex - Specifies the layer index
     * @param {number} markerIndex - Specifies the marker index
     * @param {MarkerSettingsModel} markerSettings - Specifies the marker settings
     * @param {number} latitude - Specifies hte latitude
     * @param {number} longitude - Specifies the longitude
     * @returns {void}
     * @private
     */
    markerInitialSelection(layerIndex: number, markerIndex: number, markerSettings: MarkerSettingsModel, latitude: number, longitude: number): void;
    /**
     * Render the map area border
     *
     * @returns {void}
     */
    private renderArea;
    /**
     * To add tab index for map element
     *
     * @returns {void}
     */
    private addTabIndex;
    private zoomingChange;
    private createSecondaryElement;
    /**
     * @returns {void}
     * @private
     */
    arrangeTemplate(): void;
    private createTile;
    /**
     * To initilize the private varibales of maps.
     *
     * @returns {void}
     */
    private initPrivateVariable;
    private findBaseAndSubLayers;
    /**
     * Render the map border
     *
     * @private
     * @returns {void}
     */
    private renderBorder;
    /**
     * Render the title and subtitle
     *
     * @param {TitleSettingsModel} title - Specifies the title
     * @param {string} type - Specifies the type
     * @param {Rect} bounds - Specifies the bounds
     * @param {Element} groupEle - Specifies the group element
     * @returns {void}
     * @private
     */
    private renderTitle;
    /**
     * To create svg element for maps
     *
     * @returns {void}
     */
    private createSVG;
    /**
     * To Remove the SVG
     *
     * @returns {void}
     */
    private removeSvg;
    /**
     * To bind event handlers for maps.
     *
     * @returns {void}
     */
    private wireEVents;
    /**
     * To unbind event handlers from maps.
     *
     * @returns {void}
     */
    private unWireEVents;
    /**
     * This method is used to perform operations when mouse pointer leave from maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event on maps.
     * @returns {void}
     */
    mouseLeaveOnMap(e: PointerEvent): void;
    private keyUpHandler;
    private keyboardHighlightSelection;
    private keyDownHandler;
    /**
     * Gets the selected element to be maintained or not.
     *
     * @param {Element} targetEle - Specifies the target element
     * @returns {boolean} - Returns the boolean value
     * @private
     */
    SelectedElement(targetEle: Element): boolean;
    /**
     * This method is used to perform the operations when a click operation is performed on maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event on maps.
     */
    mapsOnClick(e: PointerEvent): void;
    private clickHandler;
    private triggerShapeSelection;
    private getClickLocation;
    /**
     * This method is used to perform operations when mouse click on maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event on maps.
     * @returns {boolean} - Returns the boolean value
     */
    mouseEndOnMap(e: PointerEvent): boolean;
    /**
     * This method is used to perform operations when mouse is clicked down on maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event on maps
     * @returns {void}
     */
    mouseDownOnMap(e: PointerEvent): void;
    /**
     * Merges the marker clusters.
     *
     * @returns {void}
     * @private
     */
    mergeCluster(): void;
    /**
     * This method is used to perform operations when performing the double click operation on maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event.
     */
    mapsOnDoubleClick(e: PointerEvent): void;
    /**
     * This method is used to perform operations while performing mouse over on maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event on maps.
     * @returns {void}
     */
    mouseMoveOnMap(e: PointerEvent): void;
    /**
     * This method is used to perform operations when mouse move event is performed on maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event on maps.
     * @returns {void}
     */
    onMouseMove(e: PointerEvent): boolean;
    private legendTooltip;
    private titleTooltip;
    mapsOnResize(e: Event): boolean;
    /**
     * This method is used to zoom the map by specifying the center position.
     *
     * @param {number} centerPosition - Specifies the center position
     * @param {number} centerPosition.latitude - Specifies the latitude value for the center position
     * @param {number} centerPosition.longitude - Specifies the longitude value for the center position
     * @param {number} zoomFactor - Specifies the zoom factor for maps.
     * @returns {void}
     */
    zoomByPosition(centerPosition: {
        latitude: number;
        longitude: number;
    }, zoomFactor: number): void;
    /**
     * This method is used to perform panning by specifying the direction.
     *
     * @param {PanDirection} direction - Specifies the direction in which the panning is performed.
     * @param {PointerEvent | TouchEvent} mouseLocation - Specifies the location of the mouse pointer in maps.
     */
    panByDirection(direction: PanDirection, mouseLocation?: PointerEvent | TouchEvent): void;
    /**
     * This method is used to add the layers dynamically to the maps.
     *
     * @param {Object} layer - Specifies the layer for the maps.
     */
    addLayer(layer: Object): void;
    /**
     * This method is used to remove a layer from map.
     *
     * @param {number} index - Specifies the index number of the layer to be removed.
     * @returns {void}
     */
    removeLayer(index: number): void;
    /**
     * This method is used to add markers dynamically in the maps.
     * If we provide the index value of the layer in which the marker to be added and the coordinates
     * of the marker as parameters, the marker will be added in the location.
     *
     * @param {number} layerIndex - Specifies the index number of the layer.
     * @param {MarkerSettingsModel[]} markerCollection - Specifies the settings of the marker to be added.
     * @returns {void}
     */
    addMarker(layerIndex: number, markerCollection: MarkerSettingsModel[]): void;
    /**
     * This method is used to select the geometric shape element in the maps component.
     *
     * @param {number} layerIndex - Specifies the index of the layer in maps.
     * @param {string | string[]} propertyName - Specifies the property name from the data source.
     * @param {string} name - Specifies the name of the shape that is selected.
     * @param {boolean} enable - Specifies the shape selection to be enabled.
     * @returns {void}
     */
    shapeSelection(layerIndex: number, propertyName: string | string[], name: string, enable?: boolean): void;
    /**
     * This method is used to zoom the maps component based on the provided coordinates.
     *
     * @param {number} minLatitude - Specifies the minimum latitude to be zoomed.
     * @param {number} minLongitude - Specifies the minimum latitude to be zoomed.
     * @param {number} maxLatitude - Specifies the maximum latitude to be zoomed.
     * @param {number} maxLongitude - Specifies the maximum longitude to be zoomed.
     * @returns {void}
     */
    zoomToCoordinates(minLatitude: number, minLongitude: number, maxLatitude: number, maxLongitude: number): void;
    /**
     * This method is used to remove multiple selected shapes in the maps.
     *
     * @returns {void}
     */
    private removeShapeSelection;
    /**
     * This method is used to set culture for maps component.
     *
     * @returns {void}
     */
    private setCulture;
    /**
     * This method to set locale constants to the maps component.
     *
     * @returns {void}
     */
    private setLocaleConstants;
    /**
     * This method disposes the maps component.
     */
    destroy(): void;
    /**
     * Gets component name
     *
     * @returns {string} - Returns the string value
     */
    getModuleName(): string;
    /**
     * Gets the properties to be maintained in the persisted state.
     *
     * @returns {string} - Returns the string value
     * @private
     */
    getPersistData(): string;
    /**
     * Called internally if any of the property value changed.
     *
     * @param {MapsModel} newProp - Specifies the new property
     * @param {MapsModel} oldProp - Specifies the old property
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: MapsModel, oldProp: MapsModel): void;
    /**
     * To provide the array of modules needed for maps rendering
     *
     * @returns {ModuleDeclaration[]} - Returns the modules
     * @private
     */
    requiredModules(): ModuleDeclaration[];
    /**
     * To find marker visibility
     */
    private isMarkersVisible;
    /**
     * To find DataLabel visibility
     */
    private isDataLabelVisible;
    /**
     * To find navigation line visibility
     */
    private isNavigationVisible;
    /**
     * To find space between the secondary element and svg element.
     * @private
     */
    getExtraPosition(): Point;
    /**
     * To find marker visibility
     */
    private isBubbleVisible;
    /**
     * To find the bubble visibility from layer
     *
     * @param {LayerSettingsModel} layer - Spcifies the layer settings model
     * @returns {boolean} - Returns the boolean value
     * @private
     */
    getBubbleVisible(layer: LayerSettingsModel): boolean;
    /**
     * This method handles the printing functionality for the maps component.
     *
     * @param {string[] | string | Element} id - Specifies the element to be printed.
     * @returns {void}
     */
    print(id?: string[] | string | Element): void;
    /**
     * This method handles the export functionality for the maps component.
     *
     * @param {ExportType} type - Specifies the type of the exported file.
     * @param {string} fileName - Specifies the name of the file with which the rendered maps need to be exported.
     * @param {PdfPageOrientation} orientation - Specifies the orientation of the pdf document in exporting.
     * @param {boolean} allowDownload - Specifies whether to download as a file or get as base64 string for the file
     * @returns {Promise<string>} - Returns the string value.
     */
    export(type: ExportType, fileName: string, orientation?: PdfPageOrientation, allowDownload?: boolean): Promise<string>;
    /**
     * This method is used to get the Bing maps URL.
     *
     * @param {string} url - Specifies the URL of the maps.
     * @returns {Promise<string>} - Returns the processed Bing URL as Promise.
     */
    getBingUrlTemplate(url: string): Promise<string>;
    /**
     * To find visibility of layers and markers for required modules load.
     *
     * @param {LayerSettingsModel[]} layers - Specifies the layers.
     * @param {boolean} isLayerVisible - Specifies whether the layer is visible or not.
     * @param {boolean} isBubblevisible - Specifies whether the bubble is visible or not.
     * @param {boolean} istooltipVisible - Specifies whether the tooltip is visible or not.
     * @param {boolean} isSelection - Specifies whether the shape is selectd or not.
     * @param {boolean} isHighlight - Specfies whether the shape is highlighted or not.
     * @returns {boolean} - Returns the boolean value
     */
    private findVisibleLayers;
    /**
     * This method is used to get the geo location points.
     *
     * @param {number} layerIndex - Specifies the index number of the layer of the map.
     * @param {number} x - Specifies the x value.
     * @param {number} y - Specifies the y value.
     * @returns {GeoPosition}- Returns the geo position
     */
    getGeoLocation(layerIndex: number, x: number, y: number): GeoPosition;
    private clip;
    /**
     * This method is used to get the geo location points when tile maps is rendered in the maps component.
     *
     * @param {number} x - Specifies the x value
     * @param {number} y - Specifies the y value
     * @returns {GeoPosition} - Returns the position
     */
    getTileGeoLocation(x: number, y: number): GeoPosition;
    /**
     * This method is used to convert the point to latitude and longitude in maps.
     *
     * @param {number} pageX - Specifies the x value for the page.
     * @param {number} pageY - Specifies the y value for the page.
     * @returns {Object} - Returns the object.
     */
    pointToLatLong(pageX: number, pageY: number): Object;
}
