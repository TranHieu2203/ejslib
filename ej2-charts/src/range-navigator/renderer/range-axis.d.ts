import { RangeNavigator } from '../range-navigator';
import { DateTime } from '../../chart/axis/date-time-axis';
import { RangeIntervalType } from '../../common/utils/enum';
import { VisibleLabels } from '../../chart/axis/axis';
/**
 * class for axis
 */
export declare class RangeNavigatorAxis extends DateTime {
    constructor(range: RangeNavigator);
    actualIntervalType: RangeIntervalType;
    rangeNavigator: RangeNavigator;
    firstLevelLabels: VisibleLabels[];
    secondLevelLabels: VisibleLabels[];
    lowerValues: number[];
    gridLines: Element;
    /**
     * To render grid lines of axis
     */
    renderGridLines(): void;
    /**
     * To render of axis labels
     */
    renderAxisLabels(): void;
    /**
     * To find secondary level label type
     *
     * @param {RangeIntervalType} type type of range interval
     */
    private getSecondaryLabelType;
    /**
     * To find labels for date time axis
     *
     * @param {Axis} axis range axis
     */
    private findAxisLabels;
    /**
     * To find date time formats for Quarter and week interval type
     *
     * @param {string} text text
     * @param {Axis} axis axis
     * @param {number} index index
     */
    private dateFormats;
    /**
     * To find the y co-ordinate for axis labels
     *
     * @param {RangeNavigator} control - rangeNavigator
     * @param {boolean} isSecondary sets true if the axis is secondary axis
     */
    private findLabelY;
    /**
     * It places the axis labels and returns border for secondary axis labels
     *
     * @param {Axis} axis axis for the lables placed
     * @param {number} pointY y co-ordinate for axis labels
     * @param {string} id id for the axis elements
     * @param {RangeNavigator} control range navigator
     * @param {Element} labelElement parent element in which axis labels appended
     */
    private placeAxisLabels;
    /**
     * To check label is intersected with successive label or not
     */
    private isIntersect;
    /**
     * To find suitable label format for Quarter and week Interval types
     *
     * @param {Axis} axis RangeNavigator axis
     * @param {RangeNavigator} control RangeNavigator instance
     */
    private findSuitableFormat;
    /**
     * Alignment position for secondary level labels in date time axis
     *
     * @param {Axis} axis axis
     * @param {number} index label index
     */
    private findAlignment;
}
