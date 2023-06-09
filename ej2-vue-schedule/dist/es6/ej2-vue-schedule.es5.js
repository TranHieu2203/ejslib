import { RecurrenceEditor, Schedule } from '@syncfusion/ej2-schedule';
import { ComponentBase, EJComponentDecorator, allVue, getProps, gh } from '@syncfusion/ej2-vue-base';
import { Vue } from 'vue-class-component';
import { getValue, isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';
import Vue$1 from 'vue';

var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue;
}
else {
    vueImport = Vue$1;
}
var ViewsDirective = /** @class */ (function (_super) {
    __extends(ViewsDirective, _super);
    function ViewsDirective() {
        return _super.call(this, arguments) || this;
    }
    ViewsDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    ViewsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ViewsDirective.prototype.getTag = function () {
        return 'e-views';
    };
    ViewsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ViewsDirective);
    return ViewsDirective;
}(vueImport));
var ViewsPlugin = {
    name: 'e-views',
    install: function (Vue$$1) {
        Vue$$1.component(ViewsPlugin.name, ViewsDirective);
    }
};
/**
 * `e-views` directive represent a view of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
var ViewDirective = /** @class */ (function (_super) {
    __extends(ViewDirective, _super);
    function ViewDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDirective.prototype.render = function () {
        return;
    };
    ViewDirective.prototype.getTag = function () {
        return 'e-view';
    };
    ViewDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ViewDirective);
    return ViewDirective;
}(vueImport));
var ViewPlugin = {
    name: 'e-view',
    install: function (Vue$$1) {
        Vue$$1.component(ViewPlugin.name, ViewDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
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
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$1 = gh ? false : true;
var vueImport$1;
if (!isExecute$1 || parseInt(allVue.version) < 3) {
    vueImport$1 = Vue;
}
else {
    vueImport$1 = Vue$1;
}
var ResourcesDirective = /** @class */ (function (_super) {
    __extends$1(ResourcesDirective, _super);
    function ResourcesDirective() {
        return _super.call(this, arguments) || this;
    }
    ResourcesDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    ResourcesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ResourcesDirective.prototype.getTag = function () {
        return 'e-resources';
    };
    ResourcesDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ResourcesDirective);
    return ResourcesDirective;
}(vueImport$1));
var ResourcesPlugin = {
    name: 'e-resources',
    install: function (Vue$$1) {
        Vue$$1.component(ResourcesPlugin.name, ResourcesDirective);
    }
};
/**
 * `e-resources` directive represent a resources of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
var ResourceDirective = /** @class */ (function (_super) {
    __extends$1(ResourceDirective, _super);
    function ResourceDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceDirective.prototype.render = function () {
        return;
    };
    ResourceDirective.prototype.getTag = function () {
        return 'e-resource';
    };
    ResourceDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], ResourceDirective);
    return ResourceDirective;
}(vueImport$1));
var ResourcePlugin = {
    name: 'e-resource',
    install: function (Vue$$1) {
        Vue$$1.component(ResourcePlugin.name, ResourceDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$2 = gh ? false : true;
var vueImport$2;
if (!isExecute$2 || parseInt(allVue.version) < 3) {
    vueImport$2 = Vue;
}
else {
    vueImport$2 = Vue$1;
}
var HeaderRowsDirective = /** @class */ (function (_super) {
    __extends$2(HeaderRowsDirective, _super);
    function HeaderRowsDirective() {
        return _super.call(this, arguments) || this;
    }
    HeaderRowsDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    HeaderRowsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    HeaderRowsDirective.prototype.getTag = function () {
        return 'e-header-rows';
    };
    HeaderRowsDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], HeaderRowsDirective);
    return HeaderRowsDirective;
}(vueImport$2));
var HeaderRowsPlugin = {
    name: 'e-header-rows',
    install: function (Vue$$1) {
        Vue$$1.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
};
/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
var HeaderRowDirective = /** @class */ (function (_super) {
    __extends$2(HeaderRowDirective, _super);
    function HeaderRowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowDirective.prototype.render = function () {
        return;
    };
    HeaderRowDirective.prototype.getTag = function () {
        return 'e-header-row';
    };
    HeaderRowDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], HeaderRowDirective);
    return HeaderRowDirective;
}(vueImport$2));
var HeaderRowPlugin = {
    name: 'e-header-row',
    install: function (Vue$$1) {
        Vue$$1.component(HeaderRowPlugin.name, HeaderRowDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'agendaDaysCount', 'allowDragAndDrop', 'allowInline', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiDrag', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'dayHeaderTemplate', 'editorTemplate', 'enableAdaptiveUI', 'enableAllDayScroll', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'monthHeaderTemplate', 'monthsCount', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'timezone', 'timezoneDataSource', 'views', 'weekRule', 'width', 'workDays', 'workHours', 'actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select'];
var modelProps = ['currentView', 'selectedDate'];
var testProp = getProps({ props: properties });
var props = testProp[0];
var watch = testProp[1];
var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
var isExecute$3 = gh ? false : true;
/**
 * `ej-schedule` represents the VueJS Schedule Component.
 * ```vue
 * <ejs-schedule></ejs-schedule>
 * ```
 */
var ScheduleComponent = /** @class */ (function (_super) {
    __extends$3(ScheduleComponent, _super);
    function ScheduleComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-views": "e-view", "e-resources": "e-resource", "e-header-rows": "e-header-row" };
        _this.tagNameMapper = { "e-header-rows": "e-headerRows" };
        _this.isVue3 = !isExecute$3;
        _this.ej2Instances = new Schedule({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ScheduleComponent.prototype.clearTemplate = function (templateNames) {
        if (!templateNames) {
            templateNames = Object.keys(this.templateCollection || {});
        }
        if (templateNames.length && this.templateCollection) {
            for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                var tempName = templateNames_1[_i];
                var elementCollection = this.templateCollection[tempName];
                if (elementCollection && elementCollection.length) {
                    for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                        var ele = elementCollection_1[_a];
                        var destroy = getValue('__vue__.$destroy', ele);
                        if (destroy) {
                            ele.__vue__.$destroy();
                        }
                        if (ele.innerHTML) {
                            ele.innerHTML = '';
                        }
                    }
                    delete this.templateCollection[tempName];
                }
            }
        }
    };
    ScheduleComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (_this.isVue3) {
                            _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        }
                        else {
                            _this.$emit('update:' + key, prop[key]);
                            _this.$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    };
    ScheduleComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$3) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$3) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    ScheduleComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    ScheduleComponent.prototype.custom = function () {
        this.updated();
    };
    ScheduleComponent.prototype.addEvent = function (data) {
        return this.ej2Instances.addEvent(data);
    };
    ScheduleComponent.prototype.addResource = function (resources, name, index) {
        return this.ej2Instances.addResource(resources, name, index);
    };
    ScheduleComponent.prototype.changeCurrentView = function (viewName, viewIndex) {
        return this.ej2Instances.changeCurrentView(viewName, viewIndex);
    };
    ScheduleComponent.prototype.closeEditor = function () {
        return this.ej2Instances.closeEditor();
    };
    ScheduleComponent.prototype.closeQuickInfoPopup = function () {
        return this.ej2Instances.closeQuickInfoPopup();
    };
    ScheduleComponent.prototype.collapseResource = function (resourceId, name) {
        return this.ej2Instances.collapseResource(resourceId, name);
    };
    ScheduleComponent.prototype.deleteEvent = function (id, currentAction) {
        return this.ej2Instances.deleteEvent(id, currentAction);
    };
    ScheduleComponent.prototype.expandResource = function (resourceId, name) {
        return this.ej2Instances.expandResource(resourceId, name);
    };
    ScheduleComponent.prototype.exportToExcel = function (excelExportOptions) {
        return this.ej2Instances.exportToExcel(excelExportOptions);
    };
    ScheduleComponent.prototype.exportToICalendar = function (fileName, customData) {
        return this.ej2Instances.exportToICalendar(fileName, customData);
    };
    ScheduleComponent.prototype.getBlockEvents = function (startDate, endDate, includeOccurrences) {
        return this.ej2Instances.getBlockEvents(startDate, endDate, includeOccurrences);
    };
    ScheduleComponent.prototype.getCellDetails = function (tdCol) {
        return this.ej2Instances.getCellDetails(tdCol);
    };
    ScheduleComponent.prototype.getCurrentViewDates = function () {
        return this.ej2Instances.getCurrentViewDates();
    };
    ScheduleComponent.prototype.getCurrentViewEvents = function () {
        return this.ej2Instances.getCurrentViewEvents();
    };
    ScheduleComponent.prototype.getCurrentViewIndex = function () {
        return this.ej2Instances.getCurrentViewIndex();
    };
    ScheduleComponent.prototype.getDeletedOccurrences = function (recurrenceData) {
        return this.ej2Instances.getDeletedOccurrences(recurrenceData);
    };
    ScheduleComponent.prototype.getEventDetails = function (element) {
        return this.ej2Instances.getEventDetails(element);
    };
    ScheduleComponent.prototype.getEventMaxID = function () {
        return this.ej2Instances.getEventMaxID();
    };
    ScheduleComponent.prototype.getEvents = function (startDate, endDate, includeOccurrences) {
        return this.ej2Instances.getEvents(startDate, endDate, includeOccurrences);
    };
    ScheduleComponent.prototype.getIndexFromResourceId = function (id, name) {
        return this.ej2Instances.getIndexFromResourceId(id, name);
    };
    ScheduleComponent.prototype.getOccurrencesByID = function (eventID) {
        return this.ej2Instances.getOccurrencesByID(eventID);
    };
    ScheduleComponent.prototype.getOccurrencesByRange = function (startTime, endTime) {
        return this.ej2Instances.getOccurrencesByRange(startTime, endTime);
    };
    ScheduleComponent.prototype.getResourceCollections = function () {
        return this.ej2Instances.getResourceCollections();
    };
    ScheduleComponent.prototype.getResourcesByIndex = function (index) {
        return this.ej2Instances.getResourcesByIndex(index);
    };
    ScheduleComponent.prototype.getSelectedElements = function () {
        return this.ej2Instances.getSelectedElements();
    };
    ScheduleComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    ScheduleComponent.prototype.importICalendar = function (fileContent) {
        return this.ej2Instances.importICalendar(fileContent);
    };
    ScheduleComponent.prototype.isSlotAvailable = function (startTime, endTime, groupIndex) {
        return this.ej2Instances.isSlotAvailable(startTime, endTime, groupIndex);
    };
    ScheduleComponent.prototype.openEditor = function (data, action, isEventData, repeatType) {
        return this.ej2Instances.openEditor(data, action, isEventData, repeatType);
    };
    ScheduleComponent.prototype.openQuickInfoPopup = function (data) {
        return this.ej2Instances.openQuickInfoPopup(data);
    };
    ScheduleComponent.prototype.print = function (printOptions) {
        return this.ej2Instances.print(printOptions);
    };
    ScheduleComponent.prototype.refreshEvents = function (isRemoteRefresh) {
        return this.ej2Instances.refreshEvents(isRemoteRefresh);
    };
    ScheduleComponent.prototype.refreshLayout = function () {
        return this.ej2Instances.refreshLayout();
    };
    ScheduleComponent.prototype.refreshTemplates = function (templateName) {
        return this.ej2Instances.refreshTemplates(templateName);
    };
    ScheduleComponent.prototype.removeResource = function (resourceId, name) {
        return this.ej2Instances.removeResource(resourceId, name);
    };
    ScheduleComponent.prototype.resetWorkHours = function (dates, start, end, groupIndex) {
        return this.ej2Instances.resetWorkHours(dates, start, end, groupIndex);
    };
    ScheduleComponent.prototype.saveEvent = function (data, currentAction) {
        return this.ej2Instances.saveEvent(data, currentAction);
    };
    ScheduleComponent.prototype.scrollTo = function (hour, scrollDate) {
        return this.ej2Instances.scrollTo(hour, scrollDate);
    };
    ScheduleComponent.prototype.scrollToResource = function (resourceId, groupName) {
        return this.ej2Instances.scrollToResource(resourceId, groupName);
    };
    ScheduleComponent.prototype.selectResourceByIndex = function (groupIndex) {
        return this.ej2Instances.selectResourceByIndex(groupIndex);
    };
    ScheduleComponent.prototype.setRecurrenceEditor = function (recurrenceEditor) {
        return this.ej2Instances.setRecurrenceEditor(recurrenceEditor);
    };
    ScheduleComponent.prototype.setResourceCollections = function (resourceCol) {
        return this.ej2Instances.setResourceCollections(resourceCol);
    };
    ScheduleComponent.prototype.setWorkHours = function (dates, start, end, groupIndex) {
        return this.ej2Instances.setWorkHours(dates, start, end, groupIndex);
    };
    ScheduleComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    ScheduleComponent = __decorate$3([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$3)
        /* Start Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        }) End */
    ], ScheduleComponent);
    return ScheduleComponent;
}(ComponentBase));
var SchedulePlugin = {
    name: 'ejs-schedule',
    install: function (Vue$$1) {
        Vue$$1.component(SchedulePlugin.name, ScheduleComponent);
        Vue$$1.component(ViewPlugin.name, ViewDirective);
        Vue$$1.component(ViewsPlugin.name, ViewsDirective);
        Vue$$1.component(ResourcePlugin.name, ResourceDirective);
        Vue$$1.component(ResourcesPlugin.name, ResourcesDirective);
        Vue$$1.component(HeaderRowPlugin.name, HeaderRowDirective);
        Vue$$1.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$1 = ['isLazyUpdate', 'plugins', 'calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value', 'change'];
var modelProps$1 = [];
var testProp$1 = getProps({ props: properties$1 });
var props$1 = testProp$1[0];
var watch$1 = testProp$1[1];
var emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (var _i$1 = 0, modelProps_1$1 = modelProps$1; _i$1 < modelProps_1$1.length; _i$1++) {
    var props_1$1 = modelProps_1$1[_i$1];
    emitProbs$1.push('update:' + props_1$1);
}
var isExecute$4 = gh ? false : true;
/**
 * `ejs-recurrenceeditor` represents the VueJS RecurrenceEditor Component.
 * ```vue
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
var RecurrenceEditorComponent = /** @class */ (function (_super) {
    __extends$4(RecurrenceEditorComponent, _super);
    function RecurrenceEditorComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$4;
        _this.ej2Instances = new RecurrenceEditor({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    RecurrenceEditorComponent.prototype.clearTemplate = function (templateNames) {
        if (!templateNames) {
            templateNames = Object.keys(this.templateCollection || {});
        }
        if (templateNames.length && this.templateCollection) {
            for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                var tempName = templateNames_1[_i];
                var elementCollection = this.templateCollection[tempName];
                if (elementCollection && elementCollection.length) {
                    for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                        var ele = elementCollection_1[_a];
                        var destroy = getValue('__vue__.$destroy', ele);
                        if (destroy) {
                            ele.__vue__.$destroy();
                        }
                        if (ele.innerHTML) {
                            ele.innerHTML = '';
                        }
                    }
                    delete this.templateCollection[tempName];
                }
            }
        }
    };
    RecurrenceEditorComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (_this.isVue3) {
                            _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        }
                        else {
                            _this.$emit('update:' + key, prop[key]);
                            _this.$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    };
    RecurrenceEditorComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    RecurrenceEditorComponent.prototype.custom = function () {
        this.updated();
    };
    RecurrenceEditorComponent.prototype.getRecurrenceDates = function (startDate, rule, excludeDate, maximumCount, viewDate) {
        return this.ej2Instances.getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate);
    };
    RecurrenceEditorComponent.prototype.getRecurrenceRule = function () {
        return this.ej2Instances.getRecurrenceRule();
    };
    RecurrenceEditorComponent.prototype.getRuleSummary = function (rule) {
        return this.ej2Instances.getRuleSummary(rule);
    };
    RecurrenceEditorComponent.prototype.resetFields = function () {
        return this.ej2Instances.resetFields();
    };
    RecurrenceEditorComponent.prototype.setRecurrenceRule = function (rule, startDate) {
        return this.ej2Instances.setRecurrenceRule(rule, startDate);
    };
    RecurrenceEditorComponent.prototype.updateRuleUntilDate = function (startDate) {
        return this.ej2Instances.updateRuleUntilDate(startDate);
    };
    RecurrenceEditorComponent = __decorate$4([
        EJComponentDecorator({
            props: properties$1
        }, isExecute$4)
        /* Start Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        }) End */
    ], RecurrenceEditorComponent);
    return RecurrenceEditorComponent;
}(ComponentBase));
var RecurrenceEditorPlugin = {
    name: 'ejs-recurrenceeditor',
    install: function (Vue$$1) {
        Vue$$1.component(RecurrenceEditorPlugin.name, RecurrenceEditorComponent);
    }
};

export { ViewsDirective, ViewDirective, ViewsPlugin, ViewPlugin, ResourcesDirective, ResourceDirective, ResourcesPlugin, ResourcePlugin, HeaderRowsDirective, HeaderRowDirective, HeaderRowsPlugin, HeaderRowPlugin, ScheduleComponent, SchedulePlugin, RecurrenceEditorComponent, RecurrenceEditorPlugin };
export * from '@syncfusion/ej2-schedule';
//# sourceMappingURL=ej2-vue-schedule.es5.js.map
