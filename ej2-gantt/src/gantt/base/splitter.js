import { createElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import * as cls from '../base/css-constants';
import { Splitter as SplitterLayout } from '@syncfusion/ej2-layouts';
import { Deferred } from '@syncfusion/ej2-data';
/**
 * Splitter module is used to define the splitter position in Gantt layout.
 */
var Splitter = /** @class */ (function () {
    function Splitter(ganttObj) {
        this.parent = ganttObj;
        this.parent.on('destroy', this.destroy, this);
    }
    /**
     * @returns {void} .
     * @private
     */
    Splitter.prototype.renderSplitter = function () {
        var _this = this;
        var splitterPosition = this.calculateSplitterPosition(this.parent.splitterSettings);
        this.parent.splitterElement = createElement('div', { className: cls.splitter });
        this.parent.treeGridPane = createElement('div', { className: cls.treeGridPane });
        this.parent.chartPane = createElement('div', { className: cls.ganttChartPane });
        this.parent.splitterElement.appendChild(this.parent.treeGridPane);
        this.parent.splitterElement.appendChild(this.parent.chartPane);
        this.splitterObject = new SplitterLayout({
            height: null,
            width: this.parent.ganttWidth.toString(),
            enablePersistence: this.parent.enablePersistence,
            separatorSize: this.parent.splitterSettings.separatorSize,
            paneSettings: [
                {
                    resizable: true,
                    size: splitterPosition,
                    min: this.getSpliterPositionInPercentage(this.parent.splitterSettings.minimum)
                },
                {
                    resizable: true
                }
            ],
            orientation: 'Horizontal',
            resizeStart: function (args) {
                var leftPane = args.pane[0];
                var rightPane = args.pane[1];
                _this.splitterPreviousPositionGrid = leftPane.scrollWidth + 1 + 'px';
                _this.splitterPreviousPositionChart = rightPane.scrollWidth + 1 + 'px';
                var callBackPromise = new Deferred();
                _this.parent.trigger('splitterResizeStart', args, function (resizeStartArgs) {
                    callBackPromise.resolve(resizeStartArgs);
                });
                return callBackPromise;
            },
            resizing: function (args) {
                _this.parent.trigger('splitterResizing', args);
            },
            resizeStop: function (args) {
                var callBackPromise = new Deferred();
                _this.parent.trigger('splitterResized', args, function (splitterResizedArgs) {
                    if (splitterResizedArgs.cancel === true) {
                        _this.splitterObject.paneSettings[0].size = null;
                        _this.splitterObject.paneSettings[0].size = _this.getSpliterPositionInPercentage(_this.splitterPreviousPositionGrid);
                        _this.splitterObject.paneSettings[1].size = null;
                        _this.splitterObject.paneSettings[1].size = _this.getSpliterPositionInPercentage(_this.splitterPreviousPositionChart);
                    }
                    _this.parent.timelineModule.updateTimelineAfterZooming(_this.parent.timelineModule.timelineEndDate, true);
                    callBackPromise.resolve(splitterResizedArgs);
                });
                return callBackPromise;
            }
        });
        this.parent.element.appendChild(this.parent.splitterElement);
        this.splitterObject.appendTo(this.parent.splitterElement);
    };
    /**
     * @param {SplitterSettingsModel} splitter .
     * @param {boolean} isDynamic .
     * @returns {string} .
     * @private
     */
    Splitter.prototype.calculateSplitterPosition = function (splitter, isDynamic) {
        if (!isNullOrUndefined(this.splitterObject) && this.parent.enablePersistence) {
            return this.splitterObject.paneSettings[0].size;
        }
        if (splitter.view === 'Grid') {
            return '100%';
        }
        else if (splitter.view === 'Chart') {
            return '0%';
        }
        else {
            if (!isNullOrUndefined(splitter.position) && splitter.position !== '') {
                return this.getSpliterPositionInPercentage(splitter.position);
            }
            else if (!isNullOrUndefined(splitter.columnIndex) && splitter.columnIndex >= 0) {
                if ((splitter.columnIndex * 150) < this.parent.ganttWidth || !this.parent.element.classList.contains('e-device')) {
                    return isDynamic ? this.getSpliterPositionInPercentage(this.getTotalColumnWidthByIndex(splitter.columnIndex).toString() + 'px') :
                        this.getSpliterPositionInPercentage((splitter.columnIndex * 150) + 'px');
                }
                else {
                    return this.getSpliterPositionInPercentage((splitter.columnIndex * 130) + 'px');
                }
            }
            else {
                return this.getSpliterPositionInPercentage('250px');
            }
        }
    };
    /**
     * @param {string} position .
     * @returns {string} .
     */
    Splitter.prototype.getSpliterPositionInPercentage = function (position) {
        var value = !isNullOrUndefined(position) && position !== '' ? position : null;
        if (!isNullOrUndefined(value)) {
            if (position.indexOf('px') !== -1) {
                var intValue = parseInt(position, 10);
                value = (((intValue / this.parent.ganttWidth) * 100) <= 100 ? ((intValue / this.parent.ganttWidth) * 100) + '%' :
                    '25%');
            }
            else {
                value = position.indexOf('%') === -1 ?
                    position + '%' : position;
            }
        }
        return value;
    };
    /**
     * @param {number} index .
     * @returns {number} .
     */
    Splitter.prototype.getTotalColumnWidthByIndex = function (index) {
        var width = 0;
        var tr = this.parent.treeGrid.element.querySelectorAll('.e-headercell');
        index = tr.length > index ? index : tr.length;
        for (var column = 0; column < index; column++) {
            width = width + tr[column].offsetWidth;
        }
        return width;
    };
    /**
     * @returns {void} .
     * @private
     */
    Splitter.prototype.updateSplitterPosition = function () {
        this.splitterObject.separatorSize = this.parent.splitterSettings.separatorSize >= 4 ?
            this.parent.splitterSettings.separatorSize : 4;
        var splitterPosition = this.calculateSplitterPosition(this.parent.splitterSettings, true);
        this.splitterObject.paneSettings[0].min = this.getSpliterPositionInPercentage(this.parent.splitterSettings.minimum);
        this.splitterObject.dataBind();
        this.splitterObject.paneSettings[0].size = splitterPosition;
    };
    /**
     * @returns {void} .
     * @private
     */
    Splitter.prototype.triggerCustomResizedEvent = function () {
        var pane1 = this.splitterObject.element.querySelectorAll('.e-pane')[0];
        var pane2 = this.splitterObject.element.querySelectorAll('.e-pane')[1];
        var eventArgs = {
            event: null,
            element: this.splitterObject.element,
            pane: [pane1, pane2],
            index: [0, 1],
            separator: this.splitterObject.element.querySelector('.e-split-bar'),
            paneSize: [pane1.offsetWidth, pane2.offsetWidth]
        };
        this.parent.trigger('splitterResized', eventArgs);
        if (eventArgs.cancel === true) {
            this.splitterObject.paneSettings[0].size = this.getSpliterPositionInPercentage(this.splitterPreviousPositionGrid);
            this.splitterObject.paneSettings[1].size = this.getSpliterPositionInPercentage(this.splitterPreviousPositionChart);
        }
    };
    Splitter.prototype.destroy = function () {
        this.splitterObject.destroy();
        this.parent.off('destroy', this.destroy);
    };
    return Splitter;
}());
export { Splitter };
