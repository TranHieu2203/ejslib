import { getSheetIndex, isHiddenRow, getCell, setCell, getSheet } from '../../workbook/index';
import { initiateChart, getRangeIndexes, isNumber, isDateTime, dateToInt, getSheetIndexFromAddress } from '../../workbook/common/index';
import { overlay, locale, refreshChartCellObj, getRowIdxFromClientY, getColIdxFromClientX, deleteChart, dialog, overlayEleSize, undoRedoForChartDesign } from '../common/index';
import { completeAction, clearChartBorder, focusBorder } from '../common/index';
import { Chart, ColumnSeries, Category, StackingColumnSeries, BarSeries } from '@syncfusion/ej2-charts';
import { AreaSeries, StackingAreaSeries, AccumulationChart } from '@syncfusion/ej2-charts';
import { Legend, StackingBarSeries, LineSeries, StackingLineSeries, ScatterSeries } from '@syncfusion/ej2-charts';
import { AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-charts';
import { isNullOrUndefined, getComponent, closest, detach, isUndefined } from '@syncfusion/ej2-base';
import { Tooltip } from '@syncfusion/ej2-popups';
import { getTypeFromFormat } from '../../workbook/integrations/index';
import { updateChart, deleteChartColl, getFormattedCellObject, setChart, getCellAddress } from '../../workbook/common/index';
import { insertChart, chartRangeSelection, addChartEle, chartDesignTab, removeDesignChart, insertDesignChart } from '../common/index';
import { DataLabel } from '@syncfusion/ej2-charts';
import { isHiddenCol, beginAction } from '../../workbook/index';
Chart.Inject(ColumnSeries, LineSeries, BarSeries, AreaSeries, StackingColumnSeries, StackingLineSeries, StackingBarSeries, ScatterSeries);
Chart.Inject(StackingAreaSeries, Category, Legend, Tooltip, DataLabel);
AccumulationChart.Inject(PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationLegend);
/**
 * Represents Chart support for Spreadsheet.
 */
var SpreadsheetChart = /** @class */ (function () {
    /**
     * Constructor for the Spreadsheet Chart module.
     *
     * @param {Spreadsheet} parent - Constructor for the Spreadsheet Chart module.
     */
    function SpreadsheetChart(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * Adding event listener for success and failure
     *
     * @returns {void} - Adding event listener for success and failure
     */
    SpreadsheetChart.prototype.addEventListener = function () {
        this.parent.on(initiateChart, this.initiateChartHandler, this);
        this.parent.on(refreshChartCellObj, this.refreshChartCellObj, this);
        this.parent.on(updateChart, this.updateChartHandler, this);
        this.parent.on(deleteChart, this.deleteChart, this);
        this.parent.on(clearChartBorder, this.clearBorder, this);
        this.parent.on(insertChart, this.insertChartHandler, this);
        this.parent.on(chartRangeSelection, this.chartRangeHandler, this);
        this.parent.on(chartDesignTab, this.chartDesignTabHandler, this);
        this.parent.on(addChartEle, this.updateChartElement, this);
        this.parent.on(undoRedoForChartDesign, this.undoRedoForChartDesign, this);
    };
    SpreadsheetChart.prototype.insertChartHandler = function (args) {
        var chartType = 'Column';
        switch (args.id) {
            case 'clusteredColumn':
                chartType = 'Column';
                break;
            case 'stackedColumn':
                chartType = 'StackingColumn';
                break;
            case 'stackedColumn100':
                chartType = 'StackingColumn100';
                break;
            case 'clusteredBar':
                chartType = 'Bar';
                break;
            case 'stackedBar':
                chartType = 'StackingBar';
                break;
            case 'stackedBar100':
                chartType = 'StackingBar100';
                break;
            case 'area':
                chartType = 'Area';
                break;
            case 'stackedArea':
                chartType = 'StackingArea';
                break;
            case 'stackedArea100':
                chartType = 'StackingArea100';
                break;
            case 'line':
                chartType = 'Line';
                break;
            case 'stackedLine':
                chartType = 'StackingLine';
                break;
            case 'stackedLine100':
                chartType = 'StackingLine100';
                break;
            case 'pie':
                chartType = 'Pie';
                break;
            case 'doughnut':
                chartType = 'Doughnut';
                break;
            //  case 'radar':
            //     chartType = ;
            //     break;
            //  case 'radar_markers':
            //     chartType = 'Column';
            //     break;
            case 'scatter':
                chartType = 'Scatter';
                break;
        }
        var chart = [{ type: chartType }];
        if (args.isChart) {
            this.parent.notify(setChart, { chart: chart });
        }
        else {
            this.parent.notify(chartDesignTab, { chartType: chartType, triggerEvent: true });
        }
    };
    SpreadsheetChart.prototype.chartRangeHandler = function () {
        var overlayEle = document.querySelector('.e-datavisualization-chart.e-ss-overlay-active');
        if (overlayEle) {
            var chartId = overlayEle.getElementsByClassName('e-control')[0].id;
            var chartColl = this.parent.chartColl;
            var chartCollLen = chartColl.length;
            for (var idx = 0; idx < chartCollLen; idx++) {
                var chartEle = document.getElementById(chartColl[idx].id);
                if (overlayEle && chartEle && chartColl[idx].id === chartId) {
                    this.parent.notify(initiateChart, {
                        option: chartColl[idx], chartCount: this.parent.chartCount, isRefresh: true
                    });
                }
            }
        }
    };
    SpreadsheetChart.prototype.getPropertyValue = function (rIdx, cIdx, sheetIndex) {
        var cell = getCell(rIdx, cIdx, getSheet(this.parent, sheetIndex));
        if (cell) {
            var value = void 0;
            if (cell.format) {
                var formatObj = { value: cell.value, format: cell.format, onLoad: true,
                    formattedText: cell.value, isRightAlign: false, cell: cell, rowIndex: rIdx.toString(), colIndex: cIdx.toString() };
                this.parent.notify(getFormattedCellObject, formatObj);
                if (typeof (formatObj.value) === 'number') {
                    // eslint-disable-next-line no-useless-escape
                    var escapeRegx = new RegExp('[!@#$%^&()+=\';,{}|\":<>~_-]', 'g');
                    formatObj.formattedText = (formatObj.formattedText.toString()).replace(escapeRegx, '');
                    value = parseInt(formatObj.formattedText.toString(), 10);
                }
                else {
                    value = formatObj.formattedText && formatObj.formattedText.toString();
                }
            }
            else {
                value = cell.value;
            }
            return isNullOrUndefined(value) ? '' : value;
        }
        else {
            return '';
        }
    };
    SpreadsheetChart.prototype.updateChartHandler = function (args) {
        var series = this.initiateChartHandler({ option: args.chart, isRefresh: true });
        var chartObj = this.parent.element.querySelector('.' + args.chart.id);
        if (chartObj) {
            var chartComp = getComponent(chartObj, 'chart');
            if (isNullOrUndefined(chartComp)) {
                chartComp = getComponent(chartObj, 'accumulationchart');
            }
            chartComp.series = series;
            chartComp.refresh();
        }
    };
    SpreadsheetChart.prototype.refreshChartCellObj = function (args) {
        var sheetIndex = isUndefined(args.sheetIdx) ? this.parent.activeSheetIndex : args.sheetIdx;
        var sheet = getSheet(this.parent, sheetIndex);
        var prevCellObj = getCell(args.prevRowIdx, args.prevColIdx, sheet);
        var currCellObj = getCell(args.currentRowIdx, args.currentColIdx, sheet);
        var prevCellChart = prevCellObj ? prevCellObj.chart : [];
        var prevChartObj;
        var currChartObj;
        var prevCellChartLen = (prevCellChart && prevCellChart.length) ? prevCellChart.length : 0;
        if (prevCellChartLen) {
            for (var i = 0; i < prevCellChartLen; i++) {
                if (prevCellChart[i].id === args.id.split('_overlay')[0]) {
                    prevChartObj = prevCellChart[i];
                    prevChartObj.height = args.currentHeight;
                    prevChartObj.width = args.currentWidth;
                    prevChartObj.top = args.currentTop;
                    prevChartObj.left = args.currentLeft;
                    prevCellChart.splice(i, 1);
                    for (var idx = 0, chartCollLen = this.parent.chartColl.length; idx < chartCollLen; idx++) {
                        if (prevChartObj.id === this.parent.chartColl[idx].id) {
                            prevChartObj.height = args.currentHeight;
                            this.parent.chartColl[idx].width = args.currentWidth;
                            this.parent.chartColl[idx].top = args.currentTop;
                            this.parent.chartColl[idx].left = args.currentLeft;
                        }
                    }
                }
            }
            if (currCellObj && currCellObj.chart) {
                currChartObj = currCellObj.chart;
                if (prevChartObj) {
                    currChartObj.push(prevChartObj);
                }
            }
            if (currChartObj) {
                setCell(args.currentRowIdx, args.currentColIdx, sheet, { chart: currChartObj }, true);
            }
            else {
                setCell(args.currentRowIdx, args.currentColIdx, sheet, { chart: [prevChartObj] }, true);
            }
            if (args.requestType === 'chartRefresh' && !args.isUndoRedo) {
                var eventArgs = {
                    requestType: 'chartRefresh', currentRowIdx: args.currentRowIdx, currentColIdx: args.currentColIdx,
                    currentWidth: args.currentWidth, prevHeight: args.prevHeight, prevWidth: args.prevWidth,
                    prevRowIdx: args.prevRowIdx, prevColIdx: args.prevColIdx, prevTop: args.prevTop, prevLeft: args.prevLeft,
                    currentTop: args.currentTop, currentLeft: args.currentLeft, currentHeight: args.currentHeight,
                    id: args.id, sheetIdx: sheetIndex
                };
                this.parent.notify('actionComplete', { eventArgs: eventArgs, action: 'chartRefresh' });
            }
        }
    };
    SpreadsheetChart.prototype.processChartRange = function (range, dataSheetIdx, opt) {
        var xRange;
        var yRange;
        var lRange;
        var minr = range[0];
        var minc = range[1];
        var isStringSeries = false;
        var maxr = range[2];
        var maxc = range[3];
        var isSingleRow = minr === maxr;
        var isSingleCol = minc === maxc;
        var trVal = this.getPropertyValue(minr, maxc, dataSheetIdx);
        // trVal = this.getParseValue(trVal);
        var blVal = this.getPropertyValue(maxr, minc, dataSheetIdx);
        // blVal = this.getParseValue(blVal);
        var tlVal = this.getPropertyValue(minr, minc, dataSheetIdx);
        // tlVal = this.getParseValue(tlVal);
        if (!isNumber(blVal) || !tlVal) {
            isStringSeries = true;
        }
        if (isNullOrUndefined(tlVal) && !isSingleRow && !isSingleCol || (opt.type === 'Scatter' && range[3] - range[1] === 1)) {
            xRange = [minr + 1, minc, maxr, minc];
            yRange = [minr + 1, minc + 1, maxr, maxc];
            lRange = [minr, minc + 1, minr, maxc];
        }
        else if ((!isNullOrUndefined(blVal) && isStringSeries && !isSingleRow && !isSingleCol)) {
            if (!isNullOrUndefined(trVal) && (!isNumber(trVal) || !tlVal)) {
                xRange = [minr + 1, minc, maxr, minc];
                yRange = [minr + 1, minc + 1, maxr, maxc];
                lRange = [minr, minc + 1, minr, maxc];
            }
            else {
                xRange = [minr, minc, maxr, minc];
                yRange = [minr, minc + 1, maxr, maxc];
            }
        }
        else {
            yRange = [minr, minc, maxr, maxc];
            if ((!isNullOrUndefined(trVal) && !isNumber(trVal) && !isDateTime(trVal))) {
                lRange = [minr, minc, minr, maxc];
                yRange[0] = yRange[0] + 1;
            }
            else if (isNullOrUndefined(tlVal) && (isSingleRow || isSingleCol)) {
                lRange = [minr, minc, minr, maxc];
                if (isSingleRow) {
                    yRange[1] = yRange[1] + 1;
                    lRange[3] = lRange[1];
                }
                else {
                    yRange[0] = yRange[0] + 1;
                }
            }
        }
        return { xRange: xRange, yRange: yRange, lRange: lRange };
    };
    SpreadsheetChart.prototype.toIntrnlRange = function (range, sheetIdx) {
        if (!range) {
            range = getRangeIndexes[this.parent.sheets[sheetIdx].selectedRange];
        }
        else if (typeof (range) === 'string') {
            range = getRangeIndexes[range];
        }
        return range;
    };
    SpreadsheetChart.prototype.getRangeData = function (options) {
        options.range = this.toIntrnlRange(options.range, options.sheetIdx);
        var rowIdx = [];
        var arr = [];
        this.pushRowData(options, options.range[0], options.range[1], options.range[2], options.range[3], arr, rowIdx, true, options.isYvalue);
        return arr;
    };
    SpreadsheetChart.prototype.pushRowData = function (options, minr, minc, maxr, maxc, arr, rowIdx, isDataSrcEnsured, isYvalue) {
        var minCol = minc;
        var sheet = this.parent.sheets[options.sheetIdx];
        var value;
        while (minr <= maxr) {
            if (isHiddenRow(sheet, minr)) {
                minr++;
                continue;
            }
            minc = minCol;
            while (minc <= maxc) {
                if (isHiddenCol(sheet, minc)) {
                    minc++;
                    continue;
                }
                var cell = getCell(minr, minc, sheet, false, true);
                if (cell.format && !isYvalue) {
                    var forArgs = { value: cell.value, format: cell.format, onLoad: true,
                        formattedText: cell.value, rowIndex: minr.toString(), colIndex: minc.toString(), isRightAlign: false, cell: cell };
                    this.parent.notify(getFormattedCellObject, forArgs);
                    value = forArgs.formattedText ? forArgs.formattedText.toString() : '';
                }
                else {
                    value = cell.value || (cell.value === 0 ? 0 : '');
                }
                arr.push({ value: value });
                minc++;
            }
            minr++;
        }
        rowIdx.push(minr);
    };
    SpreadsheetChart.prototype.toArrayData = function (args) {
        var prop = 'value';
        var obj;
        var i = 0;
        var temp = [];
        var len = args.length;
        while (i < len) {
            obj = args[i];
            if (Object.keys(obj).length) {
                if (prop in obj) {
                    temp.push(obj[prop]);
                }
            }
            else {
                temp.push('');
            }
            i++;
        }
        return temp;
    };
    SpreadsheetChart.prototype.getVirtualXValues = function (limit) {
        var i = 1;
        var arr = [];
        while (i < limit) {
            arr.push(i.toString());
            i++;
        }
        return arr;
    };
    SpreadsheetChart.prototype.processChartSeries = function (options, sheetIndex, xRange, yRange, lRange) {
        options = options || {};
        var seriesName = '';
        var dataLabel = {};
        var val;
        var xValue;
        var lValue;
        var diff;
        var pArr;
        var pObj = {};
        var j;
        var i = 0;
        var yInc = 0;
        var sArr = [];
        var dtVal;
        sheetIndex = isNullOrUndefined(sheetIndex) ? this.parent.getActiveSheet().index : sheetIndex;
        var sheet = this.parent.sheets[sheetIndex];
        var yValue = this.getRangeData({ range: yRange, sheetIdx: sheetIndex, skipFormula: true, isYvalue: true });
        var rDiff = ((yRange[2] - yRange[0]) + 1) - this.parent.hiddenCount(yRange[0], yRange[2], 'rows', sheet);
        var cDiff = ((yRange[3] - yRange[1]) + 1) - this.parent.hiddenCount(yRange[0], yRange[2], 'columns', sheet);
        if (options.isSeriesInRows) {
            xValue = lRange ? this.toArrayData(this.getRangeData({ range: lRange, sheetIdx: sheetIndex, skipFormula: false, isYvalue: false })) :
                this.getVirtualXValues(cDiff + 1);
            if (xRange) {
                lValue = this.toArrayData(this.getRangeData({ range: xRange, sheetIdx: sheetIndex, skipFormula: false, isYvalue: false }));
            }
            diff = rDiff;
        }
        else {
            xValue = xRange ? this.toArrayData(this.getRangeData({ range: xRange, sheetIdx: sheetIndex, skipFormula: false, isYvalue: false })) :
                this.getVirtualXValues(rDiff + 1);
            if (lRange) {
                lValue = this.toArrayData(this.getRangeData({ range: lRange, sheetIdx: sheetIndex, skipFormula: false, isYvalue: false }));
            }
            diff = cDiff;
        }
        var len = xValue.length;
        var inc = options.isSeriesInRows ? 1 : diff;
        if (!isNullOrUndefined(options.dataLabelSettings)) {
            dataLabel.visible = options.dataLabelSettings.visible;
            dataLabel.position = options.dataLabelSettings.position;
        }
        while (i < diff) {
            j = 0;
            pArr = [];
            yInc = options.isSeriesInRows ? yInc : i;
            while (j < len) {
                if (yValue[yInc]) {
                    val = yValue[yInc].value;
                    if (isNumber(val)) {
                        val = Number(val);
                    }
                    else {
                        dtVal = dateToInt(val);
                        val = isNaN(dtVal) ? 0 : dtVal;
                    }
                    pArr.push({ x: xValue[j], y: val });
                }
                yInc += inc;
                j++;
            }
            if (lValue && lValue.length > 0) {
                seriesName = lValue[i];
            }
            else {
                seriesName = 'series' + i;
            }
            if (options.type) {
                var type = options.type;
                if (type === 'Line' || type === 'StackingLine' || type === 'StackingLine100') {
                    pObj = {
                        dataSource: pArr, type: options.type, xName: 'x', yName: 'y', name: seriesName.toString(), marker: {
                            visible: true,
                            width: 10,
                            height: 10,
                            dataLabel: dataLabel
                        }
                    };
                }
                else if (type === 'Scatter') {
                    pObj = {
                        dataSource: pArr, type: options.type, xName: 'x', yName: 'y', name: seriesName.toString(), marker: {
                            visible: false,
                            width: 12,
                            height: 12,
                            shape: 'Circle',
                            dataLabel: dataLabel
                        }
                    };
                }
                else if (type === 'Pie' || type === 'Doughnut') {
                    var innerRadius = options.type === 'Pie' ? '0%' : '40%';
                    var visible = dataLabel.visible;
                    var position = isNullOrUndefined(dataLabel.position) ? 'Inside' : dataLabel.position === 'Outer' ? 'Outside' : 'Inside';
                    pObj = {
                        dataSource: pArr,
                        dataLabel: {
                            visible: !isNullOrUndefined(visible) ? visible : false, position: position, name: 'text', font: { fontWeight: '600' }
                        },
                        radius: '100%', xName: 'x', yName: 'y', innerRadius: innerRadius
                    };
                }
                else {
                    pObj = {
                        dataSource: pArr, type: options.type, xName: 'x', yName: 'y',
                        name: seriesName.toString(), marker: { dataLabel: dataLabel }
                    };
                }
            }
            sArr.push(pObj);
            i++;
        }
        var retVal;
        if (options.type) {
            retVal = {
                series: sArr, xRange: options.isSeriesInRows ? lRange : xRange,
                yRange: yRange, lRange: options.isSeriesInRows ? xRange : lRange
            };
        }
        return retVal;
    };
    SpreadsheetChart.prototype.primaryYAxisFormat = function (yRange) {
        if (isNullOrUndefined(yRange)) {
            return '{value}';
        }
        var type;
        var cell = getCell(yRange[0], yRange[1], this.parent.getActiveSheet());
        if (cell && cell.format) {
            type = getTypeFromFormat(cell.format);
            if (type === 'Accounting') {
                return '${value}';
            }
            else if (type === 'Currency') {
                return '${value}';
            }
            else if (type === 'Percentage') {
                return '{value}%';
            }
        }
        return '{value}';
    };
    SpreadsheetChart.prototype.focusChartRange = function (xRange, yRange, lRange) {
        var border = ['e-rcborderright', 'e-rcborderbottom', 'e-vcborderright', 'e-vcborderbottom', 'e-bcborderright', 'e-bcborderbottom'];
        this.clearBorder();
        var range;
        var sheet = this.parent.getActiveSheet();
        var isFreezePane = !!(sheet.frozenRows || sheet.frozenColumns);
        if (lRange) {
            if (isFreezePane) {
                range = lRange;
            }
            else {
                this.parent.notify(focusBorder, {
                    startcell: { rowIndex: lRange[0], colIndex: lRange[1] },
                    endcell: { rowIndex: lRange[2], colIndex: lRange[3] }, classes: [border[0], border[1]]
                });
            }
        }
        if (xRange) {
            if (isFreezePane) {
                if (range) {
                    range[0] = Math.min(lRange[0], xRange[0]);
                    range[1] = Math.min(lRange[1], xRange[1]);
                    range[2] = Math.max(lRange[2], xRange[2]);
                    range[3] = Math.max(lRange[3], xRange[3]);
                }
                else {
                    range = xRange;
                }
            }
            else {
                this.parent.notify(focusBorder, {
                    startcell: { rowIndex: xRange[0], colIndex: xRange[1] },
                    endcell: { rowIndex: xRange[2], colIndex: xRange[3] }, classes: [border[2], border[3]]
                });
            }
        }
        if (isFreezePane && range) {
            this.parent.notify(focusBorder, {
                startcell: { rowIndex: Math.min(range[0], yRange[0]), colIndex: Math.min(range[1], yRange[1]) },
                endcell: {
                    rowIndex: Math.max(range[2], yRange[2]), colIndex: Math.max(range[3], yRange[3])
                }, classes: [border[4], border[5]]
            });
        }
        else {
            this.parent.notify(focusBorder, {
                startcell: { rowIndex: yRange[0], colIndex: yRange[1] },
                endcell: { rowIndex: yRange[2], colIndex: yRange[3] }, classes: [border[4], border[5]]
            });
        }
    };
    SpreadsheetChart.prototype.clearBorder = function () {
        var sheet = this.parent.getActiveSheet();
        if (sheet.frozenColumns || sheet.frozenRows) {
            var chartIndicator = [].slice.call(this.parent.element.getElementsByClassName('e-chart-range'));
            chartIndicator.forEach(function (indicator) { detach(indicator); });
            return;
        }
        var mainCont = this.parent.getMainContent();
        var border = ['e-rcborderright', 'e-rcborderbottom', 'e-vcborderright', 'e-vcborderbottom', 'e-bcborderright', 'e-bcborderbottom'];
        for (var borderIdx = 0, borderLen = border.length; borderIdx < borderLen; borderIdx++) {
            var eleColl = mainCont.querySelectorAll('.' + border[borderIdx]);
            for (var tdIdx = 0, eleCollLen = eleColl.length; tdIdx < eleCollLen; tdIdx++) {
                var td = eleColl[tdIdx];
                td.classList.remove(border[borderIdx]);
            }
        }
    };
    SpreadsheetChart.prototype.initiateChartHandler = function (argsOpt) {
        var chart = argsOpt.option;
        var isRangeSelect = true;
        isRangeSelect = isNullOrUndefined(argsOpt.isInitCell) ? true : !argsOpt.isInitCell;
        argsOpt.triggerEvent = isNullOrUndefined(argsOpt.triggerEvent) ? true : argsOpt.triggerEvent;
        var seriesModel;
        argsOpt.isRefresh = isNullOrUndefined(argsOpt.isRefresh) ? false : argsOpt.isRefresh;
        var sheetIdx = (chart.range && chart.range.indexOf('!') > 0) ?
            getSheetIndex(this.parent, chart.range.split('!')[0]) : this.parent.activeSheetIndex;
        var sheet = getSheet(this.parent, sheetIdx);
        var range = chart.range ? chart.range : this.parent.getActiveSheet().selectedRange;
        var rangeIdx = getRangeIndexes(range);
        var options = {};
        var isRowLesser;
        var eventArgs;
        if (!this.parent.allowChart && sheet.isProtected) {
            return seriesModel;
        }
        var args = {
            sheetIndex: sheetIdx, reqType: 'shape', type: 'actionBegin', shapeType: 'chart',
            action: 'create', options: chart, range: range, operation: 'create'
        };
        options = args.options;
        range = args.range;
        options = options || {};
        if (rangeIdx.length > 0) {
            var rDiff = rangeIdx[2] - rangeIdx[0];
            var cDiff = rangeIdx[3] - rangeIdx[1];
            if (rDiff < cDiff) {
                isRowLesser = true;
            }
        }
        options.isSeriesInRows = isRowLesser ? true : options.isSeriesInRows ? options.isSeriesInRows : false;
        argsOpt.dataSheetIdx = isNullOrUndefined(argsOpt.dataSheetIdx) ? sheetIdx : argsOpt.dataSheetIdx;
        var chartRange = this.processChartRange(rangeIdx, argsOpt.dataSheetIdx, options);
        var xRange = chartRange.xRange;
        var yRange = chartRange.yRange;
        var lRange = chartRange.lRange;
        if (sheetIdx === this.parent.activeSheetIndex && isRangeSelect) {
            this.focusChartRange(xRange, yRange, lRange);
        }
        var chartOptions = this.processChartSeries(options, argsOpt.dataSheetIdx, xRange, yRange, lRange);
        var primaryXAxis = {
            majorGridLines: chart.primaryXAxis && chart.primaryXAxis.majorGridLines &&
                !isNullOrUndefined(chart.primaryXAxis.majorGridLines.width) ?
                { width: chart.primaryXAxis.majorGridLines.width } : { width: 0 },
            minorGridLines: chart.primaryXAxis && chart.primaryXAxis.minorGridLines &&
                !isNullOrUndefined(chart.primaryXAxis.minorGridLines.width) ?
                { width: chart.primaryXAxis.minorGridLines.width } : { width: 0 },
            minorTicksPerInterval: chart.primaryXAxis && chart.primaryXAxis.minorGridLines && chart.primaryXAxis.minorGridLines.width > 0 ?
                5 : 0,
            lineStyle: { width: 0 },
            valueType: 'Category',
            visible: chart.primaryXAxis ? chart.primaryXAxis.visible : true,
            title: chart.primaryXAxis ? chart.primaryXAxis.title : ''
        };
        var primaryYAxis = {
            lineStyle: { width: 0 },
            majorGridLines: chart.primaryYAxis && chart.primaryYAxis.majorGridLines &&
                !isNullOrUndefined(chart.primaryYAxis.majorGridLines.width) ?
                { width: chart.primaryYAxis.majorGridLines.width } : { width: 1 },
            minorGridLines: chart.primaryYAxis && chart.primaryYAxis.minorGridLines &&
                !isNullOrUndefined(chart.primaryYAxis.minorGridLines.width) ?
                { width: chart.primaryYAxis.minorGridLines.width } : { width: 0 },
            minorTicksPerInterval: chart.primaryYAxis && chart.primaryYAxis.minorGridLines && chart.primaryYAxis.minorGridLines.width > 0 ?
                5 : 0,
            labelFormat: this.primaryYAxisFormat(yRange),
            visible: chart.primaryYAxis ? chart.primaryYAxis.visible : true,
            title: chart.primaryYAxis ? chart.primaryYAxis.title : ''
        };
        if (argsOpt.isRefresh) {
            return chartOptions.series;
        }
        if (argsOpt.triggerEvent) {
            eventArgs = {
                type: chart.type, theme: chart.theme, isSeriesInRows: chart.isSeriesInRows, range: chart.range, id: chart.id,
                height: chart.height, width: chart.width, posRange: argsOpt.range, isInitCell: argsOpt.isInitCell, cancel: false
            };
            this.parent.notify(beginAction, { eventArgs: eventArgs, action: 'beforeInsertChart' });
            if (eventArgs.cancel) {
                return [];
            }
            chart.type = eventArgs.type;
            chart.theme = eventArgs.theme;
            chart.isSeriesInRows = eventArgs.isSeriesInRows;
            chart.range = eventArgs.range;
            chart.id = eventArgs.id;
            chart.height = eventArgs.height;
            chart.width = eventArgs.width;
        }
        var id = chart.id + '_overlay';
        var overlayObj = this.parent.serviceLocator.getService(overlay);
        var eleRange = !isNullOrUndefined(argsOpt.isInitCell) && argsOpt.isInitCell ? argsOpt.range : range;
        var element = overlayObj.insertOverlayElement(id, eleRange, getSheetIndexFromAddress(this.parent, eleRange));
        element.classList.add('e-datavisualization-chart');
        element.style.width = chart.width + 'px';
        element.style.height = chart.height + 'px';
        if (sheet.frozenRows || sheet.frozenColumns) {
            overlayObj.adjustFreezePaneSize(chart, element, eleRange);
        }
        else {
            element.style.top = isNullOrUndefined(chart.top) ? element.style.top : (chart.top + 'px');
            element.style.left = isNullOrUndefined(chart.left) ? element.style.left : (chart.left + 'px');
            chart.top = parseInt(element.style.top.replace('px', ''), 10);
            chart.left = parseInt(element.style.left.replace('px', ''), 10);
        }
        this.parent.notify(overlayEleSize, { height: chart.height, width: chart.width });
        var legendSettings = (chart.type === 'Pie' || chart.type === 'Doughnut') ? { position: 'Bottom', visible: true } : {};
        if (!isNullOrUndefined(chart.legendSettings)) {
            legendSettings.visible = chart.legendSettings.visible;
            legendSettings.position = chart.legendSettings.position;
        }
        var chartContent = this.parent.createElement('div', {
            id: chart.id, className: chart.id
        });
        var theme = chart.theme || 'Material';
        if (chart.type !== 'Pie' && chart.type !== 'Doughnut') {
            this.chart = new Chart({
                primaryXAxis: primaryXAxis,
                primaryYAxis: primaryYAxis,
                background: this.getThemeBgColor(theme),
                chartArea: {
                    border: {
                        width: 0
                    }
                },
                title: chart.title,
                legendSettings: legendSettings,
                theme: theme,
                series: chartOptions.series,
                tooltip: {
                    enable: true
                },
                width: element.style.width,
                height: element.style.height,
                load: function (args) {
                    args.chart.theme = chart.theme || 'Material';
                },
                beforeResize: function (args) {
                    args.cancelResizedEvent = true; // This is for cancel the resized event.
                }
            });
            this.chart.appendTo(chartContent);
        }
        else {
            this.chart = new AccumulationChart({
                title: chart.title,
                legendSettings: legendSettings,
                theme: theme,
                background: this.getThemeBgColor(theme),
                series: chartOptions.series,
                width: element.style.width,
                height: element.style.height,
                center: { x: '50%', y: '50%' },
                enableSmartLabels: true,
                enableAnimation: true,
                load: function (args) {
                    args.chart.theme = chart.theme || 'Material';
                },
                beforeResize: function (args) {
                    args.cancelResizedEvent = true; // This is for cancel the resized event.
                }
            });
            this.chart.appendTo(chartContent);
        }
        element.appendChild(chartContent);
        if (element.classList.contains('e-ss-overlay-active')) {
            this.parent.notify(insertDesignChart, { id: element.id });
        }
        if (argsOpt.triggerEvent) {
            this.parent.notify(completeAction, { eventArgs: eventArgs, action: 'insertChart' });
        }
        return seriesModel;
    };
    SpreadsheetChart.prototype.deleteChart = function (args) {
        this.clearBorder();
        var chartElements = null;
        var sheet = this.parent.getActiveSheet();
        if (isNullOrUndefined(args.id)) {
            chartElements = document.querySelector('.e-datavisualization-chart.e-ss-overlay-active');
            args.id = chartElements ? chartElements.getElementsByClassName('e-control')[0].id : null;
        }
        else {
            args.id = args.id.includes('overlay') ? args.id : args.id + '_overlay';
            chartElements = document.getElementById(args.id);
        }
        if (isNullOrUndefined(args.id)) {
            return;
        }
        else {
            args.id = args.id.includes('overlay') ? args.id : args.id + '_overlay';
        }
        var rowIdx;
        var colIdx;
        var prevCellChart;
        var isRemoveEle = false;
        var chartObj;
        for (var i = 0, chartCollLen = this.parent.chartColl.length; i < chartCollLen; i++) {
            if (this.parent.chartColl[i].id === args.id.split('_overlay')[0]) {
                chartObj = this.parent.chartColl[i];
                break;
            }
        }
        var eventArgs = {
            id: chartObj.id, range: chartObj.range, type: chartObj.type, theme: chartObj.theme, height: chartObj.height,
            width: chartObj.width, isSeriesInRows: chartObj.isSeriesInRows, isInitCell: true, posRange: null,
            top: chartObj.top, left: chartObj.left, cancel: false
        };
        if (chartElements) {
            var chartTop = void 0;
            var chartleft = void 0;
            if (sheet.frozenRows || sheet.frozenColumns) {
                var clientRect = chartElements.getBoundingClientRect();
                chartTop = { clientY: clientRect.top };
                chartleft = { clientX: clientRect.left };
                if (clientRect.top < this.parent.getColumnHeaderContent().getBoundingClientRect().bottom) {
                    chartTop.target = this.parent.getColumnHeaderContent();
                }
                if (clientRect.left < this.parent.getRowHeaderContent().getBoundingClientRect().right) {
                    chartleft.target = this.parent.getRowHeaderTable();
                }
            }
            else {
                chartTop = { clientY: chartElements.offsetTop, isImage: true };
                chartleft = { clientX: chartElements.offsetLeft, isImage: true };
            }
            this.parent.notify(deleteChartColl, { id: args.id });
            this.parent.notify(getRowIdxFromClientY, chartTop);
            this.parent.notify(getColIdxFromClientX, chartleft);
            isRemoveEle = true;
            rowIdx = chartTop.clientY;
            colIdx = chartleft.clientX;
            sheet = this.parent.sheets[this.parent.activeSheetIndex];
        }
        else {
            this.parent.notify(deleteChartColl, { id: args.id });
            var sheetIndex = args.range && args.range.indexOf('!') > 0 ? getSheetIndex(this.parent, args.range.split('!')[0]) :
                this.parent.activeSheetIndex;
            var rangeVal = args.range ? args.range.indexOf('!') > 0 ? args.range.split('!')[1] : args.range.split('!')[0] :
                this.parent.getActiveSheet().selectedRange;
            var index = getRangeIndexes(rangeVal);
            rowIdx = index[0];
            colIdx = index[1];
            sheet = this.parent.sheets[sheetIndex];
        }
        var cellObj = getCell(rowIdx, colIdx, sheet);
        if (cellObj) {
            prevCellChart = cellObj.chart;
        }
        var chartLength = prevCellChart ? prevCellChart.length : null;
        for (var i = 0; i < chartLength; i++) {
            if (args.id === prevCellChart[i].id + '_overlay') {
                prevCellChart.splice(i, 1);
            }
        }
        if (isRemoveEle) {
            document.getElementById(args.id).remove();
            this.parent.notify(removeDesignChart, {});
        }
        setCell(rowIdx, colIdx, sheet, { chart: prevCellChart }, true);
        eventArgs.posRange = getCellAddress(rowIdx, colIdx);
        if (!args.isUndoRedo) {
            this.parent.notify(completeAction, { eventArgs: eventArgs, action: 'deleteChart' });
        }
    };
    SpreadsheetChart.prototype.updateChartModel = function (eleId, chartComp, currCellObj, chartCollId, isAccumulationChart) {
        var accumulationChartComp = chartComp;
        chartComp = chartComp;
        var chartId = this.parent.chartColl[chartCollId].id;
        if (isAccumulationChart &&
            ['PHAxes', 'PVAxes', 'PHAxisTitle', 'PVAxisTitle', 'GLMajorHorizontal',
                'GLMajorVertical', 'GLMinorHorizontal', 'GLMinorVertical'].indexOf(eleId) > -1) {
            return;
        }
        for (var idx = 0, chartsCount = currCellObj.chart.length; idx < chartsCount; idx++) {
            if (currCellObj.chart[idx].id === chartId) {
                switch (eleId) {
                    case 'PHAxes':
                    case 'PHAxisTitle':
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryXAxis)) {
                            currCellObj.chart[idx].primaryXAxis = {};
                            this.parent.chartColl[chartCollId].primaryXAxis = {};
                        }
                        if (eleId === 'PHAxes') {
                            currCellObj.chart[idx].primaryXAxis.visible = chartComp.primaryXAxis.visible;
                            this.parent.chartColl[chartCollId].primaryXAxis.visible = chartComp.primaryXAxis.visible;
                        }
                        else if (eleId === 'PHAxisTitle') {
                            currCellObj.chart[idx].primaryXAxis.title = chartComp.primaryXAxis.title;
                            this.parent.chartColl[chartCollId].primaryXAxis.title = chartComp.primaryXAxis.title;
                        }
                        break;
                    case 'PVAxes':
                    case 'PVAxisTitle':
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryYAxis)) {
                            currCellObj.chart[idx].primaryYAxis = {};
                            this.parent.chartColl[chartCollId].primaryYAxis = {};
                        }
                        if (eleId === 'PVAxes') {
                            currCellObj.chart[idx].primaryYAxis.visible = chartComp.primaryYAxis.visible;
                            this.parent.chartColl[chartCollId].primaryYAxis.visible = chartComp.primaryYAxis.visible;
                        }
                        else if (eleId === 'PVAxisTitle') {
                            currCellObj.chart[idx].primaryYAxis.title = chartComp.primaryYAxis.title;
                            this.parent.chartColl[chartCollId].primaryYAxis.title = chartComp.primaryYAxis.title;
                        }
                        break;
                    case 'ChartTitleNone':
                    case 'ChartTitleAbove':
                        currCellObj.chart[idx].title = chartComp.title;
                        this.parent.chartColl[chartCollId].title = chartComp.title;
                        break;
                    case 'DLNone':
                    case 'DLCenter':
                    case 'DLInsideend':
                    case 'DLInsidebase':
                    case 'DLOutsideend':
                        if (isNullOrUndefined(currCellObj.chart[idx].dataLabelSettings)) {
                            currCellObj.chart[idx].dataLabelSettings = {};
                            this.parent.chartColl[chartCollId].dataLabelSettings = {};
                        }
                        if (eleId === 'DLNone') {
                            currCellObj.chart[idx].dataLabelSettings.visible = false;
                            this.parent.chartColl[chartCollId].dataLabelSettings.visible = false;
                        }
                        else {
                            currCellObj.chart[idx].dataLabelSettings.visible = true;
                            this.parent.chartColl[chartCollId].dataLabelSettings.visible = true;
                            var position = void 0;
                            if (isAccumulationChart) {
                                position = accumulationChartComp.series[0].dataLabel.position === 'Outside' ? 'Outer' : 'Middle';
                            }
                            else {
                                position = chartComp.series[0].marker.dataLabel.position;
                            }
                            currCellObj.chart[idx].dataLabelSettings.position = position;
                            this.parent.chartColl[chartCollId].dataLabelSettings.position = position;
                        }
                        break;
                    case 'GLMajorHorizontal':
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryYAxis)) {
                            currCellObj.chart[idx].primaryYAxis = {};
                            this.parent.chartColl[chartCollId].primaryYAxis = {};
                        }
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryYAxis.majorGridLines)) {
                            currCellObj.chart[idx].primaryYAxis.majorGridLines = {};
                            this.parent.chartColl[chartCollId].primaryYAxis.majorGridLines = {};
                        }
                        currCellObj.chart[idx].primaryYAxis.majorGridLines.width = chartComp.primaryYAxis.majorGridLines.width;
                        this.parent.chartColl[chartCollId].primaryYAxis.majorGridLines.width = chartComp.primaryYAxis.majorGridLines.width;
                        break;
                    case 'GLMajorVertical':
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryXAxis)) {
                            currCellObj.chart[idx].primaryXAxis = {};
                            this.parent.chartColl[chartCollId].primaryXAxis = {};
                        }
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryXAxis.majorGridLines)) {
                            currCellObj.chart[idx].primaryXAxis.majorGridLines = {};
                            this.parent.chartColl[chartCollId].primaryXAxis.majorGridLines = {};
                        }
                        currCellObj.chart[idx].primaryXAxis.majorGridLines.width = chartComp.primaryXAxis.majorGridLines.width;
                        this.parent.chartColl[chartCollId].primaryXAxis.majorGridLines.width = chartComp.primaryXAxis.majorGridLines.width;
                        break;
                    case 'GLMinorHorizontal':
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryYAxis)) {
                            currCellObj.chart[idx].primaryYAxis = {};
                            this.parent.chartColl[chartCollId].primaryYAxis = {};
                        }
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryYAxis.minorGridLines)) {
                            currCellObj.chart[idx].primaryYAxis.minorGridLines = {};
                            this.parent.chartColl[chartCollId].primaryYAxis.minorGridLines = {};
                        }
                        currCellObj.chart[idx].primaryYAxis.minorGridLines.width = chartComp.primaryYAxis.minorGridLines.width;
                        this.parent.chartColl[chartCollId].primaryYAxis.minorGridLines.width = chartComp.primaryYAxis.minorGridLines.width;
                        break;
                    case 'GLMinorVertical':
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryXAxis)) {
                            currCellObj.chart[idx].primaryXAxis = {};
                            this.parent.chartColl[chartCollId].primaryXAxis = {};
                        }
                        if (isNullOrUndefined(currCellObj.chart[idx].primaryXAxis.minorGridLines)) {
                            currCellObj.chart[idx].primaryXAxis.minorGridLines = {};
                            this.parent.chartColl[chartCollId].primaryXAxis.minorGridLines = {};
                        }
                        currCellObj.chart[idx].primaryXAxis.minorGridLines.width = chartComp.primaryXAxis.minorGridLines.width;
                        this.parent.chartColl[chartCollId].primaryXAxis.minorGridLines.width = chartComp.primaryXAxis.minorGridLines.width;
                        break;
                    case 'LegendNone':
                    case 'LegendsRight':
                    case 'LegendsLeft':
                    case 'LegendsBottom':
                    case 'LegendsTop':
                        if (isNullOrUndefined(currCellObj.chart[idx].legendSettings)) {
                            currCellObj.chart[idx].legendSettings = {};
                            this.parent.chartColl[chartCollId].legendSettings = {};
                        }
                        currCellObj.chart[idx].legendSettings.visible = chartComp.legendSettings.visible;
                        this.parent.chartColl[chartCollId].legendSettings.visible = chartComp.legendSettings.visible;
                        if (eleId !== 'LegendNone') {
                            currCellObj.chart[idx].legendSettings.position = chartComp.legendSettings.position;
                            this.parent.chartColl[chartCollId].legendSettings.position =
                                chartComp.legendSettings.position;
                            break;
                        }
                }
            }
        }
    };
    SpreadsheetChart.prototype.updateChartElement = function (value, chartComp, currCellObj, chartCollId, title, isAccumulationChart, address, triggerEvent) {
        if (isAccumulationChart &&
            ['PHAxes', 'PVAxes', 'PHAxisTitle', 'PVAxisTitle', 'GLMajorHorizontal',
                'GLMajorVertical', 'GLMinorHorizontal', 'GLMinorVertical'].indexOf(value) > -1) {
            return;
        }
        var chartSeries;
        switch (value) {
            case 'PHAxes':
                chartComp = chartComp;
                chartComp.primaryXAxis.visible = !chartComp.primaryXAxis.visible;
                break;
            case 'PVAxes':
                chartComp = chartComp;
                chartComp.primaryYAxis.visible = !chartComp.primaryYAxis.visible;
                break;
            case 'PHAxisTitle':
                chartComp = chartComp;
                chartComp.primaryXAxis.title = title;
                break;
            case 'PVAxisTitle':
                chartComp = chartComp;
                chartComp.primaryYAxis.title = title;
                break;
            case 'ChartTitleNone':
                chartComp.title = '';
                break;
            case 'ChartTitleAbove':
                chartComp.title = title;
                break;
            case 'DLNone':
            case 'DLCenter':
            case 'DLInsideend':
            case 'DLInsidebase':
            case 'DLOutsideend':
                chartComp = isAccumulationChart ? chartComp : chartComp;
                chartSeries = chartComp.series;
                if (value === 'DLNone') {
                    for (var idx = 0, len = chartSeries.length; idx < len; idx++) {
                        if (isAccumulationChart) {
                            chartSeries[idx].dataLabel.visible = false;
                        }
                        else {
                            chartSeries[idx].marker.dataLabel.visible = false;
                        }
                    }
                }
                else {
                    for (var idx = 0, len = chartSeries.length; idx < len; idx++) {
                        if (isAccumulationChart) {
                            var position = value === 'DLOutsideend' ? 'Outside' : 'Inside';
                            chartSeries[idx].dataLabel.visible = true;
                            chartSeries[idx].dataLabel.position = position;
                        }
                        else {
                            var position = value === 'DLCenter' ? 'Middle' : value === 'DLInsideend' ? 'Top' : value === 'DLInsidebase' ?
                                'Bottom' : value === 'DLOutsideend' ? 'Outer' : chartSeries[0].marker.dataLabel.position;
                            chartSeries[idx].marker.dataLabel.visible = true;
                            chartSeries[idx].marker.dataLabel.position = position;
                        }
                    }
                }
                chartComp.series = chartSeries;
                if (isAccumulationChart) {
                    chartComp.refresh();
                }
                break;
            case 'GLMajorHorizontal':
                chartComp = chartComp;
                chartComp.primaryYAxis.majorGridLines.width = chartComp.primaryYAxis.majorGridLines.width === 0 ? 1 : 0;
                break;
            case 'GLMajorVertical':
                chartComp = chartComp;
                chartComp.primaryXAxis.majorGridLines.width = chartComp.primaryXAxis.majorGridLines.width === 0 ? 1 : 0;
                break;
            case 'GLMinorHorizontal':
                chartComp = chartComp;
                chartComp.primaryYAxis.minorTicksPerInterval = chartComp.primaryYAxis.minorGridLines.width === 0 ? 5 : 0;
                chartComp.primaryYAxis.minorGridLines.width = chartComp.primaryYAxis.minorGridLines.width === 0 ? 1 : 0;
                break;
            case 'GLMinorVertical':
                chartComp = chartComp;
                chartComp.primaryXAxis.minorTicksPerInterval = chartComp.primaryXAxis.minorGridLines.width === 0 ? 5 : 0;
                chartComp.primaryXAxis.minorGridLines.width = chartComp.primaryXAxis.minorGridLines.width === 0 ? 1 : 0;
                break;
            case 'LegendNone':
                chartComp.legendSettings.visible = false;
                break;
            case 'LegendsRight':
            case 'LegendsLeft':
            case 'LegendsBottom':
            case 'LegendsTop':
                chartComp.legendSettings.visible = true;
                chartComp.legendSettings.position = value === 'LegendsRight' ? 'Right' : value === 'LegendsLeft' ? 'Left' : value ===
                    'LegendsBottom' ? 'Bottom' : value === 'LegendsTop' ? 'Top' : chartComp.legendSettings.position;
                break;
        }
        this.updateChartModel(value, chartComp, currCellObj, chartCollId, isAccumulationChart);
        if (triggerEvent) {
            var eventArgs = { addChartEle: value, id: chartComp.element.id + '_overlay', title: title, address: address };
            this.parent.notify(completeAction, { action: 'chartDesign', eventArgs: eventArgs });
        }
    };
    SpreadsheetChart.prototype.undoRedoForChartDesign = function (args) {
        var overlayElem = document.getElementById(args.id);
        if (!overlayElem) {
            return;
        }
        var chartElem = this.getChartElement(overlayElem);
        var chartComp = getComponent(chartElem, 'chart');
        if (isNullOrUndefined(chartComp)) {
            chartComp = getComponent(chartElem, 'accumulationchart');
        }
        var addressInfo = this.parent.getAddressInfo(args.address);
        var cell = getCell(addressInfo.indices[0], addressInfo.indices[1], getSheet(this.parent, addressInfo.sheetIndex));
        var chartCollectionId = this.getChartCollectionId(chartElem.id);
        var chart;
        var property = args.addChartEle;
        var title = args.title;
        for (var i = 0; i < args.beforeActionData.cellDetails[0].chart.length; i++) {
            if (chartElem.id === args.beforeActionData.cellDetails[0].chart[i].id) {
                chart = args.beforeActionData.cellDetails[0].chart[i];
                break;
            }
        }
        if (args.switchRowColumn) {
            this.switchRowColumn(chartCollectionId, chartElem.id, chartComp, cell);
        }
        else if (args.chartTheme) {
            this.switchChartTheme(chartCollectionId, chartElem.id, args.isUndo ? chart.theme : args.chartTheme, chartComp, cell);
        }
        else if (args.chartType) {
            this.switchChartType(chartCollectionId, chartElem.id, args.isUndo ? chart.type : args.chartType, chartComp, cell);
        }
        else if (args.addChartEle) {
            if (args.isUndo) {
                var position = void 0;
                switch (property) {
                    case 'DLNone':
                    case 'DLCenter':
                    case 'DLInsideend':
                    case 'DLInsidebase':
                    case 'DLOutsideend':
                        position = chart.dataLabelSettings && chart.dataLabelSettings.position;
                        property = position === 'Middle' ? 'DLCenter' : position === 'Top' ? 'DLInsideend' : position === 'Bottom' ?
                            'DLInsidebase' : position === 'Outer' ? 'DLOutsideend' : 'DLNone';
                        break;
                    case 'LegendNone':
                    case 'LegendsRight':
                    case 'LegendsLeft':
                    case 'LegendsBottom':
                    case 'LegendsTop':
                        if (chart.legendSettings && !chart.legendSettings.visible) {
                            position = 'LegendNone';
                        }
                        else {
                            position = chart.legendSettings && chart.legendSettings.position;
                            property = position === 'Right' ? 'LegendsRight' : position === 'Left' ? 'LegendsLeft' : position ===
                                'Bottom' ? 'LegendsBottom' : position === 'Top' ? 'LegendsTop' : 'LegendsBottom';
                        }
                        break;
                    case 'PVAxisTitle':
                        title = chart.primaryYAxis && chart.primaryYAxis.title;
                        break;
                    case 'PHAxisTitle':
                        title = chart.primaryXAxis && chart.primaryXAxis.title;
                        break;
                    case 'ChartTitleNone':
                    case 'ChartTitleAbove':
                        title = chart.title;
                        break;
                }
            }
            this.updateChartElement(property, chartComp, cell, chartCollectionId, title, null, args.address);
        }
    };
    SpreadsheetChart.prototype.chartDesignTabHandler = function (args) {
        var isAccumulationChart = false;
        var sheet = this.parent.sheets[this.parent.activeSheetIndex];
        var switchRowColumn = args.switchRowColumn;
        var chartType = args.chartType;
        var chartTheme = args.chartTheme;
        var addChartEle = args.addChartEle;
        var chartComp = null;
        var chartCollId;
        var overlayElem = args.id ? document.getElementById(args.id) : document.querySelector('.e-datavisualization-chart.e-ss-overlay-active');
        if (!overlayElem) {
            return;
        }
        var opensTitleDialog = addChartEle === 'ChartTitleAbove' || addChartEle === 'PHAxisTitle' || addChartEle === 'PVAxisTitle';
        var chartTop;
        var chartleft;
        if (sheet.frozenRows || sheet.frozenColumns) {
            var clientRect = overlayElem.getBoundingClientRect();
            chartTop = { clientY: clientRect.top };
            chartleft = { clientX: clientRect.left };
            if (clientRect.top < this.parent.getColumnHeaderContent().getBoundingClientRect().bottom) {
                chartTop.target = this.parent.getColumnHeaderContent();
            }
            if (clientRect.left < this.parent.getRowHeaderContent().getBoundingClientRect().right) {
                chartleft.target = this.parent.getRowHeaderTable();
            }
        }
        else {
            chartTop = { clientY: overlayElem.offsetTop, isImage: true };
            chartleft = { clientX: overlayElem.offsetLeft, isImage: true };
        }
        this.parent.notify(getRowIdxFromClientY, chartTop);
        this.parent.notify(getColIdxFromClientX, chartleft);
        var currCellObj = getCell(chartTop.clientY, chartleft.clientX, sheet);
        var address = sheet.name + '!' + getCellAddress(chartTop.clientY, chartleft.clientX);
        if (args.triggerEvent) {
            var eventArgs = { switchRowColumn: args.switchRowColumn, chartType: args.chartType, chartTheme: args.chartTheme, addChartEle: args.addChartEle, id: overlayElem.id, address: address, cancel: false };
            this.parent.notify(beginAction, { action: 'chartDesign', eventArgs: eventArgs });
            if (eventArgs.cancel) {
                return;
            }
        }
        var chartObj = this.getChartElement(overlayElem);
        var chartId = chartObj.getAttribute('id');
        chartCollId = this.getChartCollectionId(chartId);
        if (chartObj) {
            chartComp = getComponent(chartObj, 'chart');
            if (isNullOrUndefined(chartComp)) {
                chartComp = getComponent(chartObj, 'accumulationchart');
                isAccumulationChart = true;
            }
        }
        if (switchRowColumn && !isAccumulationChart) {
            this.switchRowColumn(chartCollId, chartId, chartComp, currCellObj);
        }
        if (chartType) {
            this.switchChartType(chartCollId, chartId, chartType, chartComp, currCellObj);
        }
        if (chartTheme) {
            this.switchChartTheme(chartCollId, chartId, chartTheme, chartComp, currCellObj);
        }
        if (addChartEle) {
            if (opensTitleDialog && !args.title) {
                if (this.parent.element.getElementsByClassName('e-title-dlg').length > 0) {
                    return;
                }
                else {
                    this.titleDlgHandler(addChartEle, chartComp, currCellObj, chartCollId, isAccumulationChart, address, args.triggerEvent);
                }
            }
            else {
                this.updateChartElement(addChartEle, chartComp, currCellObj, chartCollId, args.title, isAccumulationChart);
            }
        }
        if (args.triggerEvent && !opensTitleDialog) {
            var eventArgs = { switchRowColumn: args.switchRowColumn, chartType: args.chartType, chartTheme: args.chartTheme, addChartEle: args.addChartEle, id: overlayElem.id, address: address };
            this.parent.notify(completeAction, { action: 'chartDesign', eventArgs: eventArgs });
        }
    };
    SpreadsheetChart.prototype.switchRowColumn = function (chartCollId, chartId, chartComp, cell) {
        this.parent.chartColl[chartCollId].isSeriesInRows =
            isNullOrUndefined(this.parent.chartColl[chartCollId].isSeriesInRows) ?
                true : !this.parent.chartColl[chartCollId].isSeriesInRows;
        for (var idx = 0, chartCount = cell.chart.length; idx < chartCount; idx++) {
            if (cell.chart[idx].id === chartId) {
                cell.chart[idx].isSeriesInRows =
                    isNullOrUndefined(cell.chart[idx].isSeriesInRows) ? true : !cell.chart[idx].isSeriesInRows;
            }
        }
        var chartSeries = this.initiateChartHandler({ option: this.parent.chartColl[chartCollId], isRefresh: true });
        chartComp.series = chartSeries;
    };
    SpreadsheetChart.prototype.switchChartTheme = function (chartCollId, chartId, theme, chartComp, cell) {
        this.parent.chartColl[chartCollId].theme = theme;
        for (var idx = 0, chartCount = cell.chart.length; idx < chartCount; idx++) {
            if (cell.chart[idx].id === chartId) {
                cell.chart[idx].theme = theme;
            }
        }
        chartComp.setProperties({ theme: theme, background: this.getThemeBgColor(theme) }, true);
        chartComp.refresh();
    };
    SpreadsheetChart.prototype.getThemeBgColor = function (theme) {
        var bg;
        if (theme.includes('Dark')) {
            switch (theme) {
                case 'MaterialDark':
                    bg = '#383838';
                    break;
                case 'FabricDark':
                    bg = '#242424';
                    break;
                case 'BootstrapDark':
                    bg = '#1b1b1b';
                    break;
                case 'Bootstrap5Dark':
                    bg = '#212529';
                    break;
                case 'TailwindDark':
                    bg = '#1f2937';
                    break;
                case 'FluentDark':
                    bg = '#1b1a19';
                    break;
            }
        }
        else if (theme.includes('HighContrast')) {
            bg = '#000000';
        }
        else {
            bg = '#FFFFFF';
        }
        return bg;
    };
    SpreadsheetChart.prototype.switchChartType = function (chartCollId, chartId, chartType, chartComp, cell) {
        var type = this.parent.chartColl[chartCollId].type;
        this.parent.chartColl[chartCollId].type = chartType;
        for (var idx = 0, chartCount = cell.chart.length; idx < chartCount; idx++) {
            if (cell.chart[idx].id === chartId) {
                cell.chart[idx].type = chartType;
            }
        }
        if (chartType !== 'Pie' && chartType !== 'Doughnut') {
            if (type === 'Pie' || type === 'Doughnut') {
                this.changeCharType(chartCollId);
            }
            else {
                var chartSeries = chartComp.series;
                for (var idx = 0, len = chartSeries.length; idx < len; idx++) {
                    chartSeries[idx].type = chartType;
                }
                chartComp.series = chartSeries;
                chartComp.refresh();
            }
        }
        else {
            if (type === 'Pie' || type === 'Doughnut') {
                var chartSeries = chartComp.series;
                for (var idx = 0, len = chartSeries.length; idx < len; idx++) {
                    chartSeries[idx].innerRadius = chartType === 'Pie' ? '0%' : '40%';
                }
                chartComp.series = chartSeries;
                chartComp.refresh();
            }
            else {
                this.changeCharType(chartCollId);
            }
        }
    };
    SpreadsheetChart.prototype.getChartElement = function (overlayElem) {
        var chartObj = overlayElem.querySelector('.e-chart');
        if (isNullOrUndefined(chartObj)) {
            chartObj = overlayElem.querySelector('.e-accumulationchart');
        }
        return chartObj;
    };
    SpreadsheetChart.prototype.getChartCollectionId = function (id) {
        var chartCollectionId;
        for (var i = 0, len = this.parent.chartColl.length; i < len; i++) {
            if (id === this.parent.chartColl[i].id) {
                chartCollectionId = i;
            }
        }
        return chartCollectionId;
    };
    SpreadsheetChart.prototype.changeCharType = function (chartCollId) {
        var chartEle = document.getElementById(this.parent.chartColl[chartCollId].id);
        var chartParEle = closest(chartEle, '.e-datavisualization-chart');
        chartParEle.remove();
        this.parent.notify(initiateChart, {
            option: this.parent.chartColl[chartCollId], isInitCell: false, triggerEvent: false,
            isPaste: false
        });
        chartEle = document.getElementById(this.parent.chartColl[chartCollId].id);
        chartParEle = closest(chartEle, '.e-datavisualization-chart');
        if (!chartParEle.classList.contains('e-ss-overlay-active')) {
            chartParEle.classList.add('e-ss-overlay-active');
        }
    };
    SpreadsheetChart.prototype.titleDlgHandler = function (addChartEle, chartComp, currCellObj, chartCollId, isAccumulationChart, address, triggerEvent) {
        var _this = this;
        var title = '';
        if (isAccumulationChart && (addChartEle === 'PHAxisTitle' || addChartEle === 'PVAxisTitle')) {
            return;
        }
        var l10n = this.parent.serviceLocator.getService(locale);
        var dialogInst = this.parent.serviceLocator.getService(dialog);
        dialogInst.show({
            width: 375, showCloseIcon: true, isModal: true, cssClass: 'e-title-dlg',
            header: addChartEle === 'chart_abovechart' ? l10n.getConstant('ChartTitle') : addChartEle ===
                'PHAxisTitle' ? l10n.getConstant('HorizontalAxisTitle') : l10n.getConstant('VerticalAxisTitle'),
            target: document.querySelector('.e-control.e-spreadsheet'),
            beforeOpen: function () {
                dialogInst.dialogInstance.content = _this.titleDlgContent(addChartEle, chartComp);
                dialogInst.dialogInstance.dataBind();
                _this.parent.element.focus();
            },
            buttons: [{
                    buttonModel: {
                        content: l10n.getConstant('Ok'),
                        isPrimary: true,
                        cssClass: 'e-btn e-clearall-btn e-flat'
                    },
                    click: function () {
                        var dlgCont = _this.parent.element.querySelector('.e-title-dlg').
                            getElementsByClassName('e-title-dlg-content')[0];
                        title = dlgCont.getElementsByTagName('input')[0].value;
                        dialogInst.hide();
                        _this.updateChartElement(addChartEle, chartComp, currCellObj, chartCollId, title, null, address, triggerEvent);
                    }
                }]
        });
        dialogInst.dialogInstance.refresh();
    };
    SpreadsheetChart.prototype.titleDlgContent = function (addChartEle, chartComp) {
        var l10n = this.parent.serviceLocator.getService(locale);
        var dlgText = l10n.getConstant('EnterTitle');
        var dlgContent = this.parent.createElement('div', { className: 'e-title-dlg-content' });
        var value1Text = this.parent.createElement('span', { className: 'e-header e-top-header', innerHTML: dlgText });
        var value1Inp = this.parent.createElement('input', { className: 'e-input', id: 'titleInput', attrs: { type: 'text' } });
        dlgContent.appendChild(value1Text);
        dlgContent.appendChild(value1Inp);
        if (chartComp) {
            if (addChartEle === 'PHAxisTitle') {
                value1Inp.value = chartComp.primaryXAxis.title ? chartComp.primaryXAxis.title : value1Inp.value;
            }
            else if (addChartEle === 'PVAxisTitle') {
                value1Inp.value = chartComp.primaryYAxis.title ? chartComp.primaryYAxis.title : value1Inp.value;
            }
            else {
                value1Inp.value = chartComp.title ? chartComp.title : value1Inp.value;
            }
        }
        return dlgContent;
    };
    /**
     * Removing event listener for success and failure
     *
     * @returns {void} - Removing event listener for success and failure
     */
    SpreadsheetChart.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(initiateChart, this.initiateChartHandler);
            this.parent.off(refreshChartCellObj, this.refreshChartCellObj);
            this.parent.off(updateChart, this.updateChartHandler);
            this.parent.off(deleteChart, this.deleteChart);
            this.parent.off(clearChartBorder, this.clearBorder);
            this.parent.off(insertChart, this.insertChartHandler);
            this.parent.off(chartRangeSelection, this.chartRangeHandler);
            this.parent.off(chartDesignTab, this.chartDesignTabHandler);
            this.parent.off(addChartEle, this.updateChartElement);
            this.parent.off(undoRedoForChartDesign, this.undoRedoForChartDesign);
        }
    };
    /**
     * To Remove the event listeners.
     *
     * @returns {void} - To Remove the event listeners.
     */
    SpreadsheetChart.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
        var chartEle = null;
        if (this.chart) {
            chartEle = this.chart.element;
            this.chart.destroy();
        }
        if (chartEle) {
            detach(chartEle);
        }
        this.chart = null;
    };
    /**
     * Get the sheet chart module name.
     *
     * @returns {string} - Get the module name.
     */
    SpreadsheetChart.prototype.getModuleName = function () {
        return 'spreadsheetChart';
    };
    return SpreadsheetChart;
}());
export { SpreadsheetChart };
