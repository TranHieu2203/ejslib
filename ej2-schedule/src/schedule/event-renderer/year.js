var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* eslint-disable @typescript-eslint/no-explicit-any */
import { addClass, append, createElement, extend, remove, isNullOrUndefined } from '@syncfusion/ej2-base';
import { setStyleAttribute, EventHandler } from '@syncfusion/ej2-base';
import { TimelineEvent } from './timeline-view';
import * as util from '../base/util';
import * as events from '../base/constant';
import * as cls from '../base/css-constant';
var EVENT_GAP = 2;
/**
 * Year view events render
 */
var YearEvent = /** @class */ (function (_super) {
    __extends(YearEvent, _super);
    function YearEvent(parent) {
        var _this = _super.call(this, parent, 'day') || this;
        _this.isResource = false;
        return _this;
    }
    YearEvent.prototype.renderAppointments = function () {
        if (this.parent.dragAndDropModule) {
            this.parent.dragAndDropModule.setDragArea();
        }
        this.fields = this.parent.eventFields;
        var elementSelector = (this.parent.currentView === 'Year') ? '.' + cls.APPOINTMENT_CLASS :
            '.' + cls.APPOINTMENT_WRAPPER_CLASS + ',.' + cls.MORE_INDICATOR_CLASS;
        var eventWrappers = [].slice.call(this.parent.element.querySelectorAll(elementSelector));
        for (var _i = 0, eventWrappers_1 = eventWrappers; _i < eventWrappers_1.length; _i++) {
            var wrapper = eventWrappers_1[_i];
            remove(wrapper);
        }
        this.renderedEvents = [];
        if (this.parent.currentView === 'Year') {
            this.yearViewEvents();
        }
        else {
            this.removeCellHeight();
            if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
                this.isResource = true;
                this.timelineResourceEvents();
            }
            else {
                this.timelineYearViewEvents();
            }
        }
        this.parent.renderTemplates();
        this.parent.notify(events.contentReady, {});
    };
    YearEvent.prototype.yearViewEvents = function () {
        var months = this.getMonths();
        for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
            var month = months_1[_i];
            var queryString = ".e-month-calendar:nth-child(" + (months.indexOf(month) + 1) + ") td.e-work-cells";
            var workCells = [].slice.call(this.parent.element.querySelectorAll(queryString));
            var monthDate = new Date(this.parent.selectedDate.getFullYear(), month, 1);
            var monthStart = this.parent.calendarUtil.getMonthStartDate(new Date(monthDate.getTime()));
            var monthEnd = this.parent.calendarUtil.getMonthEndDate(new Date(monthDate.getTime()));
            var startDate = util.getWeekFirstDate(monthStart, this.parent.firstDayOfWeek);
            var endDate = util.addDays(util.getWeekLastDate(monthEnd, this.parent.firstDayOfWeek), 1);
            for (var index = 0; startDate.getTime() < endDate.getTime(); index++) {
                var start = util.resetTime(new Date(startDate.getTime()));
                var end = util.addDays(new Date(start.getTime()), 1);
                var filterEvents = this.parent.eventBase.filterEvents(start, end);
                if (filterEvents.length > 0) {
                    var workCell = workCells[index];
                    if (workCell) {
                        workCell.appendChild(createElement('div', { className: cls.APPOINTMENT_CLASS }));
                    }
                }
                startDate = util.addDays(new Date(startDate.getTime()), 1);
            }
        }
    };
    YearEvent.prototype.timelineYearViewEvents = function () {
        var workCell = this.parent.element.querySelector('.' + cls.WORK_CELLS_CLASS + ':not(.' + cls.OTHERMONTH_CLASS + ')');
        this.cellWidth = workCell.offsetWidth;
        this.cellHeader = util.getOuterHeight(workCell.querySelector('.' + cls.DATE_HEADER_CLASS));
        var eventTable = this.parent.element.querySelector('.' + cls.EVENT_TABLE_CLASS);
        this.eventHeight = util.getElementHeightFromClass(eventTable, cls.APPOINTMENT_CLASS);
        var wrapperCollection = [].slice.call(this.parent.element.querySelectorAll('.' + cls.APPOINTMENT_CONTAINER_CLASS));
        var months = this.getMonths();
        for (var row = 0; row < months.length; row++) {
            var wrapper = wrapperCollection[row];
            var td = row + 1;
            var eventWrapper = createElement('div', { className: cls.APPOINTMENT_WRAPPER_CLASS });
            wrapper.appendChild(eventWrapper);
            var monthStart = new Date(this.parent.selectedDate.getFullYear(), months[row], 1);
            var monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
            var dayIndex = monthStart.getDay();
            var isSpannedCollection = [];
            if (this.parent.activeViewOptions.orientation === 'Horizontal') {
                this.renderedEvents = [];
            }
            while (monthStart.getTime() <= monthEnd.getTime()) {
                var leftValue = void 0;
                var rightValue = void 0;
                if (this.parent.activeViewOptions.orientation === 'Vertical') {
                    var wrapper_1 = wrapperCollection[dayIndex];
                    td = dayIndex + 1;
                    var eventWrapper_1 = wrapper_1.querySelector('.' + cls.APPOINTMENT_WRAPPER_CLASS);
                    if (!eventWrapper_1) {
                        eventWrapper_1 = createElement('div', { className: cls.APPOINTMENT_WRAPPER_CLASS });
                        wrapper_1.appendChild(eventWrapper_1);
                    }
                    if (this.parent.enableRtl) {
                        rightValue = row * this.cellWidth;
                    }
                    else {
                        leftValue = row * this.cellWidth;
                    }
                }
                else {
                    if (this.parent.enableRtl) {
                        rightValue = ((dayIndex + monthStart.getDate()) - 1) * this.cellWidth;
                    }
                    else {
                        leftValue = ((dayIndex + monthStart.getDate()) - 1) * this.cellWidth;
                    }
                }
                var rowTd = this.parent.element.querySelector(".e-content-wrap tr:nth-child(" + td + ") td");
                this.cellHeight = rowTd.offsetHeight;
                var dayStart = util.resetTime(new Date(monthStart.getTime()));
                var dayEnd = util.addDays(new Date(dayStart.getTime()), 1);
                var resource = void 0;
                if (this.parent.uiStateValues.isGroupAdaptive) {
                    resource = this.parent.resourceBase.lastResourceLevel[this.parent.uiStateValues.groupIndex];
                }
                var dayEvents = this.parent.eventBase.filterEvents(dayStart, dayEnd, undefined, resource);
                dayEvents = this.parent.eventBase.sortByDateTime(dayEvents);
                var _loop_1 = function (index, count) {
                    var eventData = extend({}, dayEvents[index], null, true);
                    this_1.updateSpannedEvents(eventData, dayStart, dayEnd);
                    var overlapIndex = this_1.getIndex(dayStart);
                    eventData.Index = overlapIndex;
                    var availedHeight = this_1.cellHeader + (this_1.eventHeight * (overlapIndex + 1)) + EVENT_GAP +
                        this_1.moreIndicatorHeight;
                    var appArea = this_1.cellHeight - this_1.cellHeader - this_1.moreIndicatorHeight;
                    var renderedAppCount = Math.floor(appArea / (this_1.eventHeight + EVENT_GAP));
                    var moreIndicatorCount = (count - renderedAppCount) <= 0 ? 1 : (count - renderedAppCount);
                    if (this_1.parent.activeViewOptions.orientation === 'Horizontal') {
                        var isRendered = this_1.renderedEvents.filter(function (eventObj) {
                            return eventObj.Guid === eventData.Guid;
                        });
                        var isSpanned = isSpannedCollection.filter(function (eventObj) {
                            return eventObj.Guid === eventData.Guid;
                        });
                        if (isRendered.length > 0 && isRendered[0].MoreIndicator || isSpanned.length > 0 && isSpanned[0].MoreIndicator) {
                            var moreIndex = this_1.parent.activeViewOptions.orientation === 'Horizontal' ? row : dayIndex;
                            this_1.renderMoreIndicator(eventWrapper, moreIndicatorCount, dayStart, moreIndex, leftValue, rightValue);
                            return "continue";
                        }
                        else if (isRendered.length > 0 || isSpanned.length > 0) {
                            return "continue";
                        }
                    }
                    var isRowAutoHeight = this_1.parent.rowAutoHeight && this_1.parent.activeViewOptions.orientation === 'Horizontal';
                    if (isRowAutoHeight || this_1.cellHeight > availedHeight) {
                        this_1.renderEvent(eventWrapper, eventData, row, leftValue, rightValue, monthStart, dayIndex);
                        this_1.updateCellHeight(rowTd, availedHeight);
                        isSpannedCollection.push(eventData);
                    }
                    else {
                        var moreIndex = this_1.parent.activeViewOptions.orientation === 'Horizontal' ? row : dayIndex;
                        this_1.renderMoreIndicator(eventWrapper, moreIndicatorCount, dayStart, moreIndex, leftValue, rightValue);
                        if (this_1.parent.activeViewOptions.orientation === 'Horizontal') {
                            eventData.MoreIndicator = true;
                            this_1.renderedEvents.push(eventData);
                            isSpannedCollection.push(eventData);
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0, count = dayEvents.length; index < count; index++) {
                    _loop_1(index, count);
                }
                monthStart = util.addDays(new Date(monthStart.getTime()), 1);
                if (this.parent.activeViewOptions.orientation === 'Vertical') {
                    dayIndex++;
                    this.renderedEvents = [];
                }
            }
        }
    };
    YearEvent.prototype.updateSpannedEvents = function (eventObj, dayStart, dayEnd) {
        var isLeftRightResize = (this.isResource && this.parent.activeViewOptions.orientation === 'Vertical') ||
            (!this.isResource && this.parent.activeViewOptions.orientation === 'Horizontal');
        var data = { isLeft: true, isRight: true, isBottom: true, isTop: true };
        if (dayStart.getTime() <= eventObj[this.fields.startTime].getTime()) {
            if (isLeftRightResize) {
                data.isLeft = false;
            }
            else {
                data.isTop = false;
            }
        }
        if ((dayEnd.getTime() >= eventObj[this.fields.endTime].getTime()) || (isLeftRightResize && !this.isResource &&
            util.addDays(dayEnd, -1).getMonth() === eventObj[this.fields.endTime].getMonth())) {
            if (isLeftRightResize) {
                data.isRight = false;
            }
            else {
                data.isBottom = false;
            }
        }
        eventObj.data = data;
    };
    YearEvent.prototype.timelineResourceEvents = function () {
        var workCell = this.parent.element.querySelector('.' + cls.WORK_CELLS_CLASS);
        this.cellWidth = workCell.offsetWidth;
        this.cellHeader = 0;
        var eventTable = this.parent.element.querySelector('.' + cls.EVENT_TABLE_CLASS);
        this.eventHeight = util.getElementHeightFromClass(eventTable, cls.APPOINTMENT_CLASS);
        var wrapperCollection = [].slice.call(this.parent.element.querySelectorAll('.' + cls.APPOINTMENT_CONTAINER_CLASS));
        var resources = this.parent.uiStateValues.isGroupAdaptive ?
            [this.parent.resourceBase.lastResourceLevel[this.parent.uiStateValues.groupIndex]] :
            this.parent.activeViewOptions.allowVirtualScrolling ? this.parent.resourceBase.renderedResources :
                this.parent.resourceBase.lastResourceLevel;
        var months = this.getMonths();
        if (this.parent.activeViewOptions.orientation === 'Horizontal') {
            for (var month = 0; month < months.length; month++) {
                var monthStart = new Date(this.parent.selectedDate.getFullYear(), months[month], 1);
                for (var i = 0, len = resources.length; i < len; i++) {
                    this.renderedEvents = [];
                    this.renderResourceEvent(wrapperCollection[month], resources[i], month, i, monthStart);
                }
            }
        }
        else {
            for (var i = 0, len = resources.length; i < len; i++) {
                this.renderedEvents = [];
                for (var month = 0; month < months.length; month++) {
                    var monthStart = new Date(this.parent.selectedDate.getFullYear(), months[month], 1);
                    this.renderResourceEvent(wrapperCollection[i], resources[i], month, i, monthStart);
                }
            }
        }
    };
    YearEvent.prototype.renderResourceEvent = function (wrapper, resource, month, index, monthStart) {
        var eventWrapper = createElement('div', { className: cls.APPOINTMENT_WRAPPER_CLASS });
        wrapper.appendChild(eventWrapper);
        var monthEnd = util.addDays(util.lastDateOfMonth(new Date(monthStart.getTime())), 1);
        var eventDatas = this.parent.eventBase.filterEvents(monthStart, monthEnd, undefined, resource);
        var rowIndex = this.parent.activeViewOptions.orientation === 'Vertical' ? index : month;
        var td = this.parent.element.querySelector(".e-content-wrap tr:nth-child(" + (rowIndex + 1) + ") td");
        this.cellHeight = td.offsetHeight;
        this.groupOrder = resource.groupOrder;
        for (var a = 0; a < eventDatas.length; a++) {
            var data = eventDatas[a];
            var overlapIndex = void 0;
            var eventData = extend({}, data, null, true);
            if (this.parent.activeViewOptions.group.resources.length > 0) {
                var eventObj = this.isSpannedEvent(eventData, monthStart);
                overlapIndex = this.getIndex(eventObj[this.fields.startTime]);
                eventData.Index = overlapIndex;
            }
            else {
                overlapIndex = this.getIndex(eventData[this.fields.startTime]);
                eventData.Index = overlapIndex;
            }
            var availedHeight = this.cellHeader + (this.eventHeight * (a + 1)) + EVENT_GAP + this.moreIndicatorHeight;
            var leftValue = (this.parent.activeViewOptions.orientation === 'Vertical') ?
                month * this.cellWidth : index * this.cellWidth;
            if (this.parent.rowAutoHeight || this.cellHeight > availedHeight) {
                this.renderEvent(eventWrapper, eventData, month, leftValue, leftValue, monthStart, index);
                this.updateCellHeight(td, availedHeight);
            }
            else {
                var moreIndex = this.parent.activeViewOptions.orientation === 'Horizontal' ? month : index;
                this.renderMoreIndicator(eventWrapper, eventDatas.length - a, monthStart, moreIndex, leftValue, leftValue, index);
                if (this.parent.activeViewOptions.orientation === 'Horizontal') {
                    for (var i = index; i < eventDatas.length; i++) {
                        this.renderedEvents.push(extend({}, eventDatas[i], { Index: overlapIndex + i }, true));
                    }
                }
                break;
            }
        }
    };
    // eslint-disable-next-line max-len
    YearEvent.prototype.renderEvent = function (wrapper, eventData, row, left, right, monthDate, rowIndex) {
        var _this = this;
        var eventObj = this.isSpannedEvent(eventData, monthDate);
        var wrap = this.createEventElement(eventObj);
        var width;
        var index;
        if (eventObj.isSpanned.count === 1) {
            var endTime = util.addDays(eventObj[this.fields.endTime], -1);
            eventObj[this.fields.endTime] = (endTime > eventObj[this.fields.startTime]) ? endTime : eventObj[this.fields.endTime];
        }
        if (eventObj[this.fields.startTime] > eventObj[this.fields.endTime]) {
            return;
        }
        if (this.parent.activeViewOptions.orientation === 'Horizontal') {
            index = row + 1;
            if (eventObj[this.fields.startTime].getTime() === eventObj[this.fields.endTime].getTime()) {
                eventObj.isSpanned.count = 1;
            }
            width = eventObj.isSpanned.count * this.cellWidth;
        }
        else {
            index = rowIndex + 1;
            width = this.cellWidth;
        }
        var rowTd = this.parent.element.querySelector(".e-content-wrap tr:nth-child(" + index + ") td");
        var top = rowTd.offsetTop + this.cellHeader + (this.eventHeight * eventObj.Index) + EVENT_GAP;
        setStyleAttribute(wrap, {
            'width': width + 'px', 'height': this.eventHeight + 'px', 'left': left + 'px', 'right': right + 'px', 'top': top + 'px'
        });
        var args = { data: eventObj, element: wrap, cancel: false, type: 'event' };
        this.parent.trigger(events.eventRendered, args, function (eventArgs) {
            if (!eventArgs.cancel) {
                wrapper.appendChild(wrap);
                _this.wireAppointmentEvents(wrap, eventObj);
                if (_this.parent.activeViewOptions.group.resources.length > 0) {
                    _this.renderedEvents.push(extend({}, eventObj, null, true));
                }
                else if (_this.parent.activeViewOptions.orientation === 'Vertical') {
                    _this.renderedEvents.push(extend({}, eventObj, null, true));
                }
                else if ((eventObj.isSpanned.isRight || eventObj.isSpanned.isLeft) && _this.parent.activeViewOptions.orientation === 'Horizontal'
                    || !eventObj.isSpanned.isRight) {
                    _this.renderedEvents.push(extend({}, eventObj, null, true));
                }
            }
        });
    };
    // eslint-disable-next-line max-len
    YearEvent.prototype.renderMoreIndicator = function (wrapper, count, startDate, row, left, right, index) {
        if (this.parent.activeViewOptions.group.resources.length === 0 && wrapper.querySelector('[data-start-date="' + startDate.getTime() + '"]')) {
            return;
        }
        var endDate;
        if (this.parent.activeViewOptions.group.resources.length > 0) {
            endDate = util.addDays(util.lastDateOfMonth(new Date(startDate.getTime())), 1);
        }
        else {
            endDate = util.addDays(new Date(startDate.getTime()), 1);
        }
        var moreIndicator = this.getMoreIndicatorElement(count, startDate, endDate);
        var rowTr = this.parent.element.querySelector(".e-content-wrap tr:nth-child(" + (row + 1) + ")");
        var top = rowTr.offsetTop + (this.cellHeight - this.moreIndicatorHeight);
        left = (Math.floor(left / this.cellWidth) * this.cellWidth);
        right = (Math.floor(right / this.cellWidth) * this.cellWidth);
        setStyleAttribute(moreIndicator, { 'width': this.cellWidth + 'px', 'left': left + 'px', 'right': right + 'px', 'top': top + 'px' });
        if (!isNullOrUndefined(index)) {
            moreIndicator.setAttribute('data-group-index', index.toString());
        }
        wrapper.appendChild(moreIndicator);
        EventHandler.add(moreIndicator, 'click', this.moreIndicatorClick, this);
    };
    YearEvent.prototype.createEventElement = function (record) {
        var eventSubject = (record[this.fields.subject] || this.parent.eventSettings.fields.subject.default
            || this.parent.localeObj.getConstant('addTitle'));
        var eventWrapper = createElement('div', {
            className: cls.APPOINTMENT_CLASS,
            attrs: {
                'data-id': 'Appointment_' + record[this.fields.id],
                'data-guid': record.Guid,
                'role': 'button', 'tabindex': '0',
                'aria-disabled': this.parent.eventBase.getReadonlyAttribute(record), 'aria-pressed': 'false', 'aria-grabbed': 'true',
                'aria-label': this.parent.getAnnouncementString(record)
            }
        });
        if (this.cssClass) {
            addClass([eventWrapper], this.cssClass);
        }
        if (record[this.fields.isReadonly]) {
            addClass([eventWrapper], cls.READ_ONLY);
        }
        if (this.parent.activeViewOptions.group.resources.length > 0) {
            var resIndex = this.getGroupIndexFromEvent(record);
            eventWrapper.setAttribute('data-group-index', resIndex.toString());
        }
        var templateElement = [];
        var eventObj = extend({}, record, null, true);
        if (this.parent.activeViewOptions.eventTemplate) {
            var templateId = this.parent.element.id + '_' + this.parent.activeViewOptions.eventTemplateName + 'eventTemplate';
            templateElement = this.parent.getAppointmentTemplate()(eventObj, this.parent, 'eventTemplate', templateId, false);
        }
        else {
            var locationEle = (record[this.fields.location] || this.parent.eventSettings.fields.location.default || '');
            var subjectEle = createElement('div', {
                className: cls.SUBJECT_CLASS,
                innerHTML: (eventSubject + (locationEle ? ';&nbsp' + locationEle : ''))
            });
            var startTimeEle = createElement('div', {
                className: cls.APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + cls.DISABLE_CLASS : ''),
                innerHTML: this.parent.getTimeString(eventObj[this.fields.startTime])
            });
            var endTimeEle = createElement('div', {
                className: cls.APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + cls.DISABLE_CLASS : ''),
                innerHTML: this.parent.getTimeString(eventObj[this.fields.endTime])
            });
            addClass([subjectEle], 'e-text-center');
            if (record[this.fields.isAllDay]) {
                templateElement = [subjectEle];
            }
            else if (!eventObj.isLeft && !eventObj.isRight) {
                templateElement = [startTimeEle, subjectEle, endTimeEle];
            }
            else {
                if (!eventObj.isLeft) {
                    templateElement.push(startTimeEle);
                }
                templateElement.push(subjectEle);
                if (!eventObj.isRight) {
                    templateElement.push(endTimeEle);
                }
            }
        }
        var appointmentDetails = createElement('div', { className: cls.APPOINTMENT_DETAILS });
        append(templateElement, appointmentDetails);
        eventWrapper.appendChild(appointmentDetails);
        this.renderResizeHandler(eventWrapper, record.data, record[this.fields.isReadonly]);
        this.applyResourceColor(eventWrapper, eventObj, 'backgroundColor', this.groupOrder);
        return eventWrapper;
    };
    YearEvent.prototype.isSpannedEvent = function (eventObj, monthDate) {
        var monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
        var monthEnd = util.addDays(new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0), 1);
        var eventData = extend({}, eventObj, null, true);
        var eventStart = eventData[this.fields.startTime];
        var eventEnd = eventData[this.fields.endTime];
        var isSpanned = { isLeft: false, isRight: false, count: 1 };
        if (this.isResource) {
            this.updateSpannedEvents(eventObj, monthStart, monthEnd);
        }
        if (eventStart.getTime() < monthStart.getTime()) {
            eventData[this.fields.startTime] = monthStart;
            isSpanned.isLeft = true;
        }
        if (eventEnd.getTime() > monthEnd.getTime()) {
            eventData[this.fields.endTime] = monthEnd;
            isSpanned.isRight = true;
        }
        if (this.parent.activeViewOptions.group.resources.length === 0) {
            var end = util.resetTime(eventData[this.fields.endTime]).getTime();
            var start = util.resetTime(eventData[this.fields.startTime]).getTime();
            if (eventObj[this.fields.isAllDay] && end === eventObj[this.fields.endTime].getTime() || isSpanned.isRight) {
                end = util.addDays(new Date(end), -1).getTime();
            }
            isSpanned.count = Math.ceil((end - start) / util.MS_PER_DAY) + 1;
        }
        eventData.isSpanned = isSpanned;
        if (util.resetTime(eventStart).getTime() < util.resetTime(this.parent.minDate).getTime()) {
            eventData[this.fields.startTime] = this.parent.minDate;
        }
        if (util.resetTime(eventEnd).getTime() > util.resetTime(this.parent.maxDate).getTime()) {
            eventData[this.fields.endTime] = this.parent.maxDate;
        }
        return eventData;
    };
    YearEvent.prototype.getOverlapEvents = function (date, appointments) {
        var appointmentsList = [];
        var dateStart;
        var dateEnd;
        if (this.parent.activeViewOptions.group.resources.length > 0) {
            var monthStart = this.parent.calendarUtil.getMonthStartDate(new Date(date.getTime()));
            var monthEnd = util.addDays(this.parent.calendarUtil.getMonthEndDate(new Date(date.getTime())), -1);
            dateStart = util.resetTime(new Date(monthStart.getTime())).getTime();
            dateEnd = util.resetTime(new Date(monthEnd.getTime())).getTime();
        }
        else {
            if (this.parent.rowAutoHeight) {
                dateStart = util.resetTime(new Date(date.getTime())).getTime();
                dateEnd = util.addDays(util.resetTime(new Date(date.getTime())), 1).getTime();
            }
            else {
                dateStart = dateEnd = util.resetTime(new Date(date.getTime())).getTime();
            }
        }
        for (var _i = 0, appointments_1 = appointments; _i < appointments_1.length; _i++) {
            var app = appointments_1[_i];
            var appStart = new Date(app[this.fields.startTime].getTime());
            var appEnd = new Date(app[this.fields.endTime].getTime());
            if (this.parent.activeViewOptions.orientation === 'Vertical' &&
                this.parent.activeViewOptions.group.resources.length > 0) {
                if ((util.resetTime(appStart).getTime() >= dateStart) && (util.resetTime(appEnd).getTime() <= dateEnd)) {
                    appointmentsList.push(app);
                }
            }
            else {
                var timeCondition = app[this.fields.isAllDay] ? util.resetTime(appEnd).getTime() > dateStart :
                    util.resetTime(appEnd).getTime() >= dateStart;
                if (((util.resetTime(appStart).getTime() <= dateStart) && (timeCondition)) ||
                    (util.resetTime(appStart).getTime() >= dateStart) && (util.resetTime(appEnd).getTime() <= dateEnd)) {
                    appointmentsList.push(app);
                }
            }
        }
        return appointmentsList;
    };
    YearEvent.prototype.getMonths = function () {
        var _this = this;
        // eslint-disable-next-line prefer-spread
        return Array.apply(null, { length: this.parent.monthsCount }).map(function (value, index) {
            return _this.parent.firstMonthOfYear + index;
        });
    };
    YearEvent.prototype.removeCellHeight = function () {
        var elementSelector = "." + cls.MONTH_HEADER_WRAPPER + " tbody tr,." + cls.RESOURCE_COLUMN_TABLE_CLASS + " tbody tr,." + cls.CONTENT_TABLE_CLASS + " tbody tr";
        var rows = [].slice.call(this.element.querySelectorAll(elementSelector));
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            row.firstElementChild.style.height = '';
        }
    };
    YearEvent.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.parent = null;
    };
    return YearEvent;
}(TimelineEvent));
export { YearEvent };
