/**
 * Tree Map Components
 */
import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { ModuleDeclaration } from '@syncfusion/ej2-base';
import { EmitType, Internationalization } from '@syncfusion/ej2-base';
import { SvgRenderer } from '@syncfusion/ej2-svg-base';
import { BorderModel, TitleSettingsModel, MarginModel, LevelSettingsModel } from './model/base-model';
import { LeafItemSettingsModel, TooltipSettingsModel, LegendSettingsModel, InitialDrillSettingsModel } from './model/base-model';
import { HighlightSettingsModel, SelectionSettingsModel } from './model/base-model';
import { TreeMapModel } from './treemap-model';
import { LayoutMode, TreeMapTheme, RenderingMode } from './utils/enum';
import { ILoadEventArgs, ILoadedEventArgs, IPrintEventArgs } from '../treemap/model/interface';
import { ILegendItemRenderingEventArgs, ILegendRenderingEventArgs } from '../treemap/model/interface';
import { IItemRenderingEventArgs, IResizeEventArgs, IDoubleClickEventArgs } from '../treemap/model/interface';
import { IItemClickEventArgs, IItemMoveEventArgs, IMouseMoveEventArgs } from '../treemap/model/interface';
import { IDrillStartEventArgs, IItemSelectedEventArgs, ITreeMapTooltipRenderEventArgs } from '../treemap/model/interface';
import { IItemHighlightEventArgs, IDrillEndEventArgs, IThemeStyle } from '../treemap/model/interface';
import { Size, Rect } from '../treemap/utils/helper';
import { TreeMapAjax } from '../treemap/utils/helper';
import { LayoutPanel } from './layout/render-panel';
import { TreeMapTooltip } from './user-interaction/tooltip';
import { ExportType } from '../treemap/utils/enum';
import { PdfPageOrientation } from '@syncfusion/ej2-pdf-export';
import { TreeMapHighlight, TreeMapSelection } from './user-interaction/highlight-selection';
import { TreeMapLegend } from './layout/legend';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Print } from './model/print';
import { ImageExport } from './model/image-export';
import { PdfExport } from './model/pdf-export';
/**
 * Represents the treemap component.
 * ```html
 * <div id="container"/>
 * <script>
 *   var treemap = new TreeMap();
 *   treemap.appendTo("#container");
 * </script>
 * ```
 */
export declare class TreeMap extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Sets and gets the module that is used to add tooltip in the treemap.
     */
    treeMapTooltipModule: TreeMapTooltip;
    /**
     * Sets and gets the module that is used to add highlight functionality in the treemap.
     */
    treeMapHighlightModule: TreeMapHighlight;
    /**
     * Sets and gets the module that is used to add selection functionality in the treemap.
     */
    treeMapSelectionModule: TreeMapSelection;
    /**
     * Sets and gets the module that is used to add legend in the treemap.
     */
    treeMapLegendModule: TreeMapLegend;
    /**
     * Sets and gets the module that is used to add print functionality in the treemap.
     *
     * @private
     */
    printModule: Print;
    /**
     * Sets and gets the module that is used to add imageExport functionality in the treemap.
     *
     * @private
     */
    imageExportModule: ImageExport;
    /**
     * Sets and gets the module that is used to add pdf export functionality in the treemap.
     *
     * @private
     */
    pdfExportModule: PdfExport;
    /**
     * Enables and disables the print functionality in treemap.
     *
     * @default false
     */
    allowPrint: boolean;
    /**
     * Enables and disables the export to image functionality in treemap.
     *
     * @default false
     */
    allowImageExport: boolean;
    /**
     * Enables and disables the export to pdf functionality in treemap.
     *
     * @default false
     */
    allowPdfExport: boolean;
    /**
     * Sets and gets the width of the treemap component.
     *
     * @default null
     */
    width: string;
    /**
     * Sets and gets the height of the treemap component.
     *
     * @default null
     */
    height: string;
    /**
     * Sets and gets the options for customizing the color and width of the treemap border.
     */
    border: BorderModel;
    /**
     * Sets and gets the options for customizing the margin in the treemap component.
     */
    margin: MarginModel;
    /**
     * Sets and gets the background color of the treemap.
     */
    background: string;
    /**
     * Sets and gets the options for customizing the theme of the treemap component.
     */
    theme: TreeMapTheme;
    /**
     * Sets and gets the options for customizing the title of the treemap component.
     */
    titleSettings: TitleSettingsModel;
    /**
     * Specifies the rendering type of layout of the treemap component.
     */
    layoutType: LayoutMode;
    /**
     * Sets and gets the data source for the treemap component.
     *
     * @isGenericType true
     * @isObservable true
     * @default null
     */
    dataSource: DataManager | TreeMapAjax | Object[];
    /**
     * Sets and gets the query to select particular data from the shape data.
     * This property is applicable only when the data source is created by data manager.
     *
     * @default null
     */
    query: Query;
    /**
     * Sets and gets the value path of the weight from the data source, based on which the map item is rendered.
     */
    weightValuePath: string;
    /**
     * Sets and gets the value path from the data source, based on it color is filled in treemap.
     */
    rangeColorValuePath: string;
    /**
     * Sets and gets the value path from the data source, based on it color is filled in treemap.
     */
    equalColorValuePath: string;
    /**
     * Sets and gets the value path from the data source, based on it color is filled in treemap.
     */
    colorValuePath: string;
    /**
     * Sets and gets the set of colors to apply in the treemap items.
     */
    palette: string[];
    /**
     * Specifies the rendering direction of layout of the treemap items.
     *
     * @default TopLeftBottomRight
     */
    renderDirection: RenderingMode;
    /**
     * Enables or disables the drill down functionality in treemap.
     */
    enableDrillDown: boolean;
    /**
     * Enables or disables the connection text in the header of the treemap.
     */
    enableBreadcrumb: boolean;
    /**
     * Specifies the connection between the two words.
     */
    breadcrumbConnector: string;
    /**
     * Enables or disables the initial drill in the treemap.
     */
    drillDownView: boolean;
    /**
     * Specifies the options for customizing the initial drill down in treemap.
     */
    initialDrillDown: InitialDrillSettingsModel;
    /**
     * Sets and gets the options for customizing the leaf item of the treemap.
     */
    leafItemSettings: LeafItemSettingsModel;
    /**
     * Sets and gets the options for customizing the levels of the treemap.
     */
    levels: LevelSettingsModel[];
    /**
     * Sets and gets the options for customizing the highlight of the treemap item on mouse over on the treemap component.
     */
    highlightSettings: HighlightSettingsModel;
    /**
     * Sets and gets the options for customizing the selection of the treemap item on click event on the treemap component.
     */
    selectionSettings: SelectionSettingsModel;
    /**
     * Sets and gets the options for customizing the tooltip of the treemap.
     */
    tooltipSettings: TooltipSettingsModel;
    /**
     * Sets and gets the options for customizing the legend of the treemap.
     */
    legendSettings: LegendSettingsModel;
    /**
     * Enables or disables the visibility state of the separator for grouping.
     *
     * @default false
     */
    useGroupingSeparator: boolean;
    /**
     * Sets and gets the description for treemap.
     *
     * @default null
     */
    description: string;
    /**
     * Sets and gets the tab index value for treemap.
     *
     * @default 1
     */
    tabIndex: number;
    /**
     * Sets and gets format for the texts in the treemap.
     *
     * @default null
     */
    format: string;
    /**
     * Triggers when the treemap is on load.
     *
     * @event
     */
    load: EmitType<ILoadEventArgs>;
    /**
     * Triggers before the prints gets started.
     *
     * @event
     */
    beforePrint: EmitType<IPrintEventArgs>;
    /**
     * Triggers after treemap is rendered.
     *
     * @event
     */
    loaded: EmitType<ILoadedEventArgs>;
    /**
     * Triggers before item rendering in the treemap component.
     *
     * @event
     */
    itemRendering: EmitType<IItemRenderingEventArgs>;
    /**
     * Triggers on performing drill down functionality in the treemap.
     *
     * @event
     */
    drillStart: EmitType<IDrillStartEventArgs>;
    /**
     * Triggers after drill down functionality gets completed in the treemap.
     *
     * @event
     */
    drillEnd: EmitType<IDrillEndEventArgs>;
    /**
     * Triggers after selecting a treemap item.
     *
     * @event
     */
    itemSelected: EmitType<IItemSelectedEventArgs>;
    /**
     * Triggers after highlighting on the treemap item.
     *
     * @event
     */
    itemHighlight: EmitType<IItemHighlightEventArgs>;
    /**
     * Triggers on rendering of the tooltip in the treemap component.
     *
     * @event
     */
    tooltipRendering: EmitType<ITreeMapTooltipRenderEventArgs>;
    /**
     * Triggers after clicking an item in the treemap.
     *
     * @event
     */
    itemClick: EmitType<IItemClickEventArgs>;
    /**
     * Triggers after mouse hover on the treemap item.
     *
     * @event
     */
    itemMove: EmitType<IItemMoveEventArgs>;
    /**
     * Triggers after clicking on the treemap.
     *
     * @event
     */
    click: EmitType<IItemClickEventArgs>;
    /**
     * Triggers after double clicking on the treemap.
     *
     * @event
     */
    doubleClick: EmitType<IDoubleClickEventArgs>;
    /**
     * Triggers after right clicking on the treemap.
     *
     * @event
     */
    rightClick: EmitType<IMouseMoveEventArgs>;
    /**
     * Triggers after mouse hover on the treemap.
     *
     * @event
     */
    mouseMove: EmitType<IMouseMoveEventArgs>;
    /**
     * Triggers after resizing the treemap component.
     *
     * @event
     */
    resize: EmitType<IResizeEventArgs>;
    /**
     * Triggers before rendering each legend item in the treemap.
     *
     * @event
     */
    legendItemRendering: EmitType<ILegendItemRenderingEventArgs>;
    /**
     * Triggers before rendering the legend items in the treemap.
     *
     * @event
     * @deprecated
     */
    legendRendering: EmitType<ILegendRenderingEventArgs>;
    /**
     * resize the treemap
     */
    private isResize;
    /**
     * svg renderer object.
     *
     * @private
     */
    renderer: SvgRenderer;
    /**
     * treemap svg element object
     *
     * @private
     */
    svgObject: Element;
    /**
     * Stores the exact size of treemap.
     *
     * @private
     */
    availableSize: Size;
    /**
     * Internal use of internationalization instance.
     *
     * @private
     */
    intl: Internationalization;
    /**
     * @private
     * Stores the area bounds.
     */
    areaRect: Rect;
    /**
     * Define the theme style for treemap components
     *
     * @private
     */
    themeStyle: IThemeStyle;
    /**
     * @private
     * Stores the legend bounds.
     */
    totalRect: Rect;
    /** @private */
    layout: LayoutPanel;
    /** @private */
    orientation: string;
    /** @private */
    drilledItems: any[];
    /** @private */
    drilledLegendItems: any;
    /** @private */
    currentLevel: number;
    /** @private */
    isHierarchicalData: boolean;
    /** @private */
    private resizeTo;
    /** @private */
    private mouseDown;
    /** @private */
    private drillMouseMove;
    /** @private */
    doubleTapTimer: any;
    /** @private */
    levelSelection: string[];
    /** @private */
    legendId: string[];
    /** @private */
    selectionId: string;
    /**s
     * Constructor for TreeMap component.
     */
    constructor(options?: TreeMapModel, element?: string | HTMLElement);
    protected preRender(): void;
    protected render(): void;
    private renderElements;
    private processDataManager;
    private renderTreeMapElements;
    protected createSvg(): void;
    /**
     * To initilize the private varibales of treemap.
     *
     * @returns {void}
     */
    private initPrivateVariable;
    private createSecondaryElement;
    private elementChange;
    /**
     * @private
     * Render the treemap border
     *
     * @returns {void}
     */
    private renderBorder;
    private renderTitle;
    protected processingData(): void;
    private checkIsHierarchicalData;
    private processHierarchicalData;
    /**
     * This method is used to perform the print functionality in treemap.
     *
     * @param id - Specifies the element to print the treemap.
     */
    print(id?: string[] | string | Element): void;
    /**
     * This method is used to perform the export functionality for the rendered treemap.
     *
     * @param type - Specifies the index of the axis.
     * @param fileName - Specifies file name for exporting the rendered treemap.
     * @param orientation - Specifies the orientation of the pdf document.
     */
    export(type: ExportType, fileName: string, orientation?: PdfPageOrientation, allowDownload?: boolean): Promise<string>;
    private processFlatJsonData;
    /**
     * This method orders the treemap level data.
     *
     * @param start - Specifies the start value of the treemap level.
     */
    reOrderLevelData(start: number): void;
    private IsChildHierarchy;
    /**
     * This method finds the weight value of the treemap level.
     *
     * @param processData - Specifies the treemap data.
     * @param type - Specifies the type of the data.
     */
    findTotalWeight(processData: any[], type: string): void;
    /**
     * To unbind event handlers for treemap.
     *
     * @returns {void}
     */
    private unWireEVents;
    /**
     * To bind event handlers for treemap.
     *
     * @returns {void}
     */
    private wireEVents;
    /**
     * Method to set culture for maps
     *
     * @returns {void}
     */
    private setCulture;
    /**
     * To add tab index for treemap element
     *
     * @returns {void}
     */
    private addTabIndex;
    /**
     * This method handles the window resize event on treemap.
     *
     * @param e - Specifies the pointer event.
     */
    resizeOnTreeMap(e: Event): void;
    /**
     * This method handles the click event on the treemap.
     *
     * @param e - Specifies the mouse click event in the treemap.
     */
    clickOnTreeMap(e: PointerEvent): void;
    /**
     * This method handles the double click event in the treemap.
     *
     * @param e - Specifies the pointer event of mouse click.
     */
    doubleClickOnTreeMap(e: PointerEvent): void;
    /**
     * This method handles the right click event in the treemap.
     *
     * @param e - Specifies the pointer event of mouse click.
     */
    rightClickOnTreeMap(e: PointerEvent): void;
    /**
     * This method handles the mouse down event in the treemap.
     *
     * @param e - Specifies the pointer event of mouse click.
     */
    mouseDownOnTreeMap(e: PointerEvent): void;
    /**
     * This method handles the mouse move event in the treemap.
     *
     * @param e - Specifies the pointer event of mouse click.
     */
    mouseMoveOnTreeMap(e: PointerEvent): void;
    /**
     * This method calculates the selected treemap levels.
     *
     * @param labelText - Specifies the label text.
     * @param item - Specifies the treemap item.
     */
    calculateSelectedTextLevels(labelText: string, item: any): any;
    /**
     * This method calculates the previous level of child items in treemap.
     *
     * @param labelText - Specifies the label text in treemap
     * @param drillLevelValues - Specifies the values of drill level.
     * @param item - Specifies the treemap item.
     * @param directLevel - Specifies the current level.
     */
    calculatePreviousLevelChildItems(labelText: string, drillLevelValues: any, item: any, directLevel: boolean): boolean;
    /**
     * This method compares the selected labels with the drill down items.
     *
     * @param drillLevelValues - Specifies the values of drill level.
     * @param item - Specifies the treemap item.
     * @param i - Specifies the treemap item.
     */
    compareSelectedLabelWithDrillDownItems(drillLevelValues: any, item: any, i: number): any;
    /**
     * This method handles mouse end event in treemap.
     *
     * @param e - Specifies the pointer event of mouse.
     */
    mouseEndOnTreeMap(e: PointerEvent): void;
    /**
     * This method handles mouse leave event in treemap.
     *
     * @param e - Specifies the pointer event of mouse.
     */
    mouseLeaveOnTreeMap(e: PointerEvent): void;
    /**
     * This method is used to select or remove the selection of treemap item based on the provided selection settings.
     */
    selectItem(levelOrder: string[], isSelected?: boolean): void;
    /**
     * To provide the array of modules needed for maps rendering
     *
     * @returns {ModuleDeclaration[]} Returns the modules
     * @private
     */
    requiredModules(): ModuleDeclaration[];
    /**
     * Called internally if any of the property value changed.
     *
     * @param {TreeMapModel} newProp - Specifies the new property
     * @param {TreeMapModel} oldProp - Specifies the old property
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: TreeMapModel, oldProp: TreeMapModel): void;
    /**
     * Gets component name.
     */
    getModuleName(): string;
    /**
     * This method is used to dispose the treemap component.
     */
    destroy(): void;
    private removeSvg;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Returns the string value.
     * @private
     */
    getPersistData(): string;
}
/**
 * @private
 */
export declare class LevelsData {
    static levelsData: any[];
    static defaultLevelsData: any[];
    static hierarchyData: any[];
}
