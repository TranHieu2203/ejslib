import { Component } from '@syncfusion/ej2-base';
import { ModuleDeclaration, Internationalization } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { RangeNavigatorModel } from './range-navigator-model';
import { Rect, Size, SvgRenderer } from '@syncfusion/ej2-svg-base';
import { RangeTooltip } from '../range-navigator/user-interaction/tooltip';
import { BorderModel, MarginModel, PeriodSelectorSettingsModel } from '../common/model/base-model';
import { RangeSeries } from './renderer/chart-render';
import { RangeNavigatorAxis } from './renderer/range-axis';
import { RangeNavigatorSeriesModel, StyleSettingsModel } from './model/range-base-model';
import { RangeTooltipSettingsModel } from './model/range-base-model';
import { RangeSlider } from './renderer/slider';
import { LineSeries } from '../chart/series/line-series';
import { AreaSeries } from '../chart/series/area-series';
import { StepLineSeries } from '../chart/series/step-line-series';
import { Chart } from '../chart/chart';
import { IResizeRangeNavigatorEventArgs } from '../range-navigator/model/range-navigator-interface';
import { DateTime } from '../chart/axis/date-time-axis';
import { Logarithmic } from '../chart/axis/logarithmic-axis';
import { ILabelRenderEventsArgs, IRangeTooltipRenderEventArgs } from './model/range-navigator-interface';
import { IRangeLoadedEventArgs, IRangeStyle, IChangedEventArgs, IRangeBeforeResizeEventArgs } from './model/range-navigator-interface';
import { RangeValueType, LabelAlignment, RangeLabelIntersectAction } from './utils/enum';
import { FontModel } from '../common/model/base-model';
import { MajorGridLinesModel, MajorTickLinesModel } from '../chart/axis/axis-model';
import { SkeletonType, AxisPosition, ChartTheme } from '../chart/utils/enum';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Double } from '../chart/axis/double-axis';
import { Data } from '../common/model/data';
import { RangeIntervalType, ExportType } from '../common/utils/enum';
import { PdfPageOrientation } from '@syncfusion/ej2-pdf-export';
import { PeriodSelector } from '../common/period-selector/period-selector';
import { AccumulationChart } from '../accumulation-chart/accumulation';
import { IRangeSelectorRenderEventArgs, IPrintEventArgs } from '../chart/model/chart-interface';
import { StockChart } from '../stock-chart/stock-chart';
/**
 * Range Navigator
 */
export declare class RangeNavigator extends Component<HTMLElement> {
    /**
     * `lineSeriesModule` is used to add line series to the chart.
     */
    lineSeriesModule: LineSeries;
    /**
     * `areaSeriesModule` is used to add area series in the chart.
     */
    areaSeriesModule: AreaSeries;
    /**
     * `stepLineSeriesModule` is used to add stepLine series in the chart.
     */
    stepLineSeriesModule: StepLineSeries;
    /**
     * `datetimeModule` is used to manipulate and add dateTime axis to the chart.
     */
    dateTimeModule: DateTime;
    /**
     * `doubleModule` is used to manipulate and add double axis to the chart.
     */
    doubleModule: Double;
    /**
     * `logarithmicModule` is used to manipulate and add log axis to the chart.
     */
    logarithmicModule: Logarithmic;
    /**
     * `tooltipModule` is used to manipulate and add tooltip to the series.
     */
    rangeTooltipModule: RangeTooltip;
    /**
     * `periodSelectorModule` is used to add period selector un range navigator
     */
    periodSelectorModule: PeriodSelector;
    /**
     * The width of the range navigator as a string accepts input as both like '100px' or '100%'.
     * If specified as '100%, range navigator renders to the full width of its parent element.
     *
     * @default null
     * @aspDefaultValueIgnore
     */
    width: string;
    /**
     * The height of the chart as a string accepts input both as '100px' or '100%'.
     * If specified as '100%, range navigator renders to the full height of its parent element.
     *
     * @default null
     * @aspDefaultValueIgnore
     */
    height: string;
    /**
     * It defines the data source for a range navigator.
     *
     * @default null
     */
    dataSource: Object | DataManager;
    /**
     * It defines the xName for the range navigator.
     *
     * @default null
     */
    xName: string;
    /**
     * It defines the yName for the range navigator.
     *
     * @default null
     */
    yName: string;
    /**
     * It defines the query for the data source.
     *
     * @default null
     */
    query: Query;
    /**
     * It defines the configuration of series in the range navigator
     */
    series: RangeNavigatorSeriesModel[];
    /**
     * Options for customizing the tooltip of the chart.
     */
    tooltip: RangeTooltipSettingsModel;
    /**
     * Minimum value for the axis
     *
     * @default null
     * @aspDefaultValueIgnore
     */
    minimum: number | Date;
    /**
     * Maximum value for the axis
     *
     * @default null
     * @aspDefaultValueIgnore
     */
    maximum: number | Date;
    /**
     * interval value for the axis
     *
     * @default null
     * @aspDefaultValueIgnore
     */
    interval: number;
    /**
     * IntervalType for the dateTime axis
     *
     * @default 'Auto'
     */
    intervalType: RangeIntervalType;
    /**
     * Specifies, when the axis labels intersect with each other.They are,
     * * None: Shows all the labels.
     * * Hide: Hides the label when it intersects.
     *
     * @default Hide
     */
    labelIntersectAction: RangeLabelIntersectAction;
    /**
     * base value for log axis
     *
     * @default 10
     */
    logBase: number;
    /**
     * ValueType for the axis
     *
     * @default 'Double'
     */
    valueType: RangeValueType;
    /**
     * Label positions for the axis
     *
     * @default 'Outside'
     */
    labelPosition: AxisPosition;
    /**
     * Duration of the animation
     *
     * @default 500
     */
    animationDuration: number;
    /**
     * Enable grouping for the labels
     *
     * @default false
     */
    enableGrouping: boolean;
    /**
     * Enable deferred update for the range navigator
     *
     * @default false
     */
    enableDeferredUpdate: boolean;
    /**
     * To render the period selector with out range navigator.
     *
     * @default false
     */
    disableRangeSelector: boolean;
    /**
     * Enable snapping for range navigator sliders
     *
     * @default false
     */
    allowSnapping: boolean;
    /**
     * Allow the data to be selected for that particular interval while clicking the particular label
     */
    allowIntervalData: boolean;
    /**
     * Specifies whether a grouping separator should be used for a number.
     *
     * @default false
     */
    useGroupingSeparator: boolean;
    /**
     * GroupBy property for the axis
     *
     * @default `Auto`
     */
    groupBy: RangeIntervalType;
    /**
     * Tick Position for the axis
     *
     * @default 'Outside'
     */
    tickPosition: AxisPosition;
    /**
     * Label style for the labels
     */
    labelStyle: FontModel;
    /**
     * MajorGridLines
     */
    majorGridLines: MajorGridLinesModel;
    /**
     * MajorTickLines
     */
    majorTickLines: MajorTickLinesModel;
    /**
     * Navigator style settings
     */
    navigatorStyleSettings: StyleSettingsModel;
    /**
     * Period selector settings
     */
    periodSelectorSettings: PeriodSelectorSettingsModel;
    /**
     * Options for customizing the color and width of the chart border.
     */
    navigatorBorder: BorderModel;
    /**
     * Specifies the theme for the range navigator.
     *
     * @default 'Material'
     */
    theme: ChartTheme;
    /**
     * Selected range for range navigator.
     *
     * @default []
     */
    value: number[] | Date[];
    /**
     * The background color of the chart that accepts value in hex and rgba as a valid CSS color string.
     *
     * @default null
     */
    background: string;
    /**
     * Used to format the axis label that accepts any global string format like 'C', 'n1', 'P' etc.
     * It also accepts placeholder like '{value}°C' in which value represent the axis label, e.g, 20°C.
     *
     * @default ''
     */
    labelFormat: string;
    /**
     * Specifies the skeleton format in which the dateTime format will process.
     *
     * @default ''
     */
    skeleton: string;
    /**
     * It specifies the type of format to be used in dateTime format process.
     *
     * @default 'DateTime'
     */
    skeletonType: SkeletonType;
    /**
     * It specifies the label alignment for secondary axis labels
     *
     * @default 'Middle'
     */
    secondaryLabelAlignment: LabelAlignment;
    /**
     * Margin for the range navigator
     *
     * @default
     */
    margin: MarginModel;
    /** @private */
    themeStyle: IRangeStyle;
    /**
     * Triggers before the range navigator rendering
     *
     * @event load
     */
    load: EmitType<IRangeLoadedEventArgs>;
    /**
     * Triggers after the range navigator rendering
     *
     * @event loaded
     * @blazorProperty 'Loaded'
     */
    loaded: EmitType<IRangeLoadedEventArgs>;
    /**
     * Triggers after the range navigator resized
     *
     * @event resized
     * @blazorProperty 'Resized'
     */
    resized: EmitType<IResizeRangeNavigatorEventArgs>;
    /**
     * Triggers before window resize.
     * @event
     * @blazorProperty 'BeforeResize'
     */
    beforeResize: EmitType<IRangeBeforeResizeEventArgs>;
    /**
     * Triggers before the label rendering
     *
     * @event labelRender
     * @deprecated
     */
    labelRender: EmitType<ILabelRenderEventsArgs>;
    /**
     * Triggers after change the slider.
     *
     * @event changed
     * @blazorProperty 'Changed'
     */
    changed: EmitType<IChangedEventArgs>;
    /**
     * Triggers before the tooltip for series is rendered.
     *
     * @event tooltipRender
     * @deprecated
     */
    tooltipRender: EmitType<IRangeTooltipRenderEventArgs>;
    /**
     * Triggers before the range navigator selector rendering
     *
     * @event selectorRender
     * @deprecated
     */
    selectorRender: EmitType<IRangeSelectorRenderEventArgs>;
    /**
     * Triggers before the prints gets started.
     *
     * @event beforePrint
     * @blazorProperty 'OnPrint'
     */
    beforePrint: EmitType<IPrintEventArgs>;
    /** @private */
    renderer: SvgRenderer;
    /** @private */
    svgObject: HTMLElement;
    /** @private */
    intl: Internationalization;
    /** @private */
    bounds: Rect;
    /** @private */
    availableSize: Size;
    /** @private */
    startValue: number;
    /** @private */
    endValue: number;
    /** @private */
    mouseX: number;
    /** @private */
    mouseDownX: number;
    /** @private */
    rangeSlider: RangeSlider;
    /** @private */
    chartSeries: RangeSeries;
    /** @private */
    rangeAxis: RangeNavigatorAxis;
    /** @private */
    private resizeTo;
    /** @private */
    dataModule: Data;
    /** @private */
    labels: ILabelRenderEventsArgs[];
    /** @private */
    animateSeries: boolean;
    /** @private */
    format: Function;
    private chartid;
    /** @private */
    stockChart: StockChart;
    /**
     * Constructor for creating the widget
     *
     * @hidden
     */
    constructor(options?: RangeNavigatorModel, element?: string | HTMLElement);
    /**
     * Starting point of the control initialization
     */
    preRender(): void;
    /**
     * To initialize the private variables
     */
    private initPrivateVariables;
    /**
     * Method to set culture for chart
     */
    private setCulture;
    /**
     * to initialize the slider
     */
    private setSliderValue;
    /**
     * To render the range navigator
     */
    render(): void;
    /**
     * Theming for rangeNavigator
     */
    private setTheme;
    /**
     * Method to create SVG for Range Navigator
     */
    private createRangeSvg;
    /**
     * Bounds calculation for widget performed.
     */
    private calculateBounds;
    /**
     * Creating Chart for range navigator
     */
    renderChart(resize?: boolean): void;
    /**
     * To render period selector value
     */
    private renderPeriodSelector;
    /**
     * Creating secondary range navigator
     */
    createSecondaryElement(): void;
    /**
     * Slider Calculation ane rendering performed here
     */
    private renderSlider;
    /**
     * To Remove the SVG.
     *
     * @returns {void}
     * @private
     */
    removeSvg(): void;
    /** Wire, UnWire and Event releated calculation Started here */
    /**
     * Method to un-bind events for range navigator
     */
    private unWireEvents;
    /**
     * Method to bind events for range navigator
     */
    private wireEvents;
    /**
     * Handles the widget resize.
     *
     * @private
     */
    rangeResize(): boolean;
    /**
     * Bug task ID: EJ2-30797
     * while resizing tooltip shows in wrong position
     * Cause: Due to time lag in resize, tooltip did not remove until the component calculation
     * Fix: Removed the tooltip element on resize
     */
    private removeAllTooltip;
    /**
     * Handles the mouse move.
     *
     * @private
     */
    mouseMove(e: PointerEvent): boolean;
    /**
     * Handles the mouse leave.
     *
     * @private
     */
    mouseLeave(e: PointerEvent): boolean;
    /**
     * Handles the mouse click on range navigator.
     *
     * @private
     */
    rangeOnMouseClick(e: PointerEvent | TouchEvent): boolean;
    /**
     * Handles the print method for range navigator control.
     */
    print(id?: string[] | string | Element): void;
    /**
     * Handles the export method for range navigator control.
     */
    export(type: ExportType, fileName: string, orientation?: PdfPageOrientation, controls?: (Chart | AccumulationChart | RangeNavigator)[], width?: number, height?: number, isVertical?: boolean): void;
    /**
     * Creating a background element to the svg object
     */
    private renderChartBackground;
    /**
     * Handles the mouse down on range navigator.
     *
     * @private
     */
    rangeOnMouseDown(e: PointerEvent): boolean;
    /**
     * Handles the mouse up.
     *
     * @private
     */
    mouseEnd(e: PointerEvent): boolean;
    /**
     * To find mouse x, y for aligned range navigator element svg position
     */
    private setMouseX;
    /** Wire, UnWire and Event releated calculation End here */
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @private
     */
    getPersistData(): string;
    /**
     * OnProperty change method calling here
     *
     * @param {RangeNavigatorModel} newProp new RangeNavigatorModel
     * @param {RangeNavigatorModel} oldProp old RangeNavigatorModel
     */
    onPropertyChanged(newProp: RangeNavigatorModel, oldProp: RangeNavigatorModel): void;
    /**
     * To provide the array of modules needed for control rendering
     *
     * @returns {ModuleDeclaration[]} requiredModules
     * @private
     */
    requiredModules(): ModuleDeclaration[];
    /**
     * To get the module name of the widget
     */
    getModuleName(): string;
    /**
     * To destroy the widget
     *
     * @function destroy
     * @returns {void}.
     * @member of rangeNavigator
     */
    destroy(): void;
}
