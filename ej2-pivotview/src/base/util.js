import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
/**
 * This is a file to perform common utility for OLAP and Relational datasource
 * @hidden
 */
var PivotUtil = /** @class */ (function () {
    function PivotUtil() {
    }
    PivotUtil.getType = function (value) {
        var val;
        var dateValue = new Date(value);
        if (typeof value === 'boolean') {
            val = 'boolean';
        }
        else if (!isNaN(Number(value))) {
            val = 'number';
        }
        else if (dateValue instanceof Date && !isNaN(dateValue.valueOf())) {
            val = (dateValue && dateValue.getDay() && (dateValue.getHours() > 0 || dateValue.getMinutes() > 0 ||
                dateValue.getSeconds() > 0 || dateValue.getMilliseconds() > 0) ? 'datetime' : 'date');
        }
        else {
            val = typeof (value);
            ;
        }
        return val;
    };
    PivotUtil.resetTime = function (date) {
        date.setHours(0, 0, 0, 0);
        return date;
    };
    /* eslint-disable */
    PivotUtil.getClonedData = function (data) {
        var clonedData = [];
        if (data) {
            for (var _i = 0, _a = data; _i < _a.length; _i++) {
                var item = _a[_i];
                var fields = Object.keys(item);
                /* eslint-enable */
                var keyPos = 0;
                /* eslint-disable @typescript-eslint/no-explicit-any */
                var framedSet = {};
                /* eslint-enable @typescript-eslint/no-explicit-any */
                while (keyPos < fields.length) {
                    framedSet[fields[keyPos]] = item[fields[keyPos]];
                    keyPos++;
                }
                clonedData.push(framedSet);
            }
        }
        return clonedData;
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    PivotUtil.getDefinedObj = function (data) {
        var keyPos = 0;
        var framedSet = {};
        /* eslint-enable @typescript-eslint/no-explicit-any */
        if (!(data === null || data === undefined)) {
            var fields = Object.keys(data);
            while (keyPos < fields.length) {
                if (!(data[fields[keyPos]] === null || data[fields[keyPos]] === undefined)) {
                    framedSet[fields[keyPos]] = data[fields[keyPos]];
                }
                keyPos++;
            }
        }
        else {
            framedSet = data;
        }
        return framedSet;
    };
    /* eslint-disable */
    PivotUtil.inArray = function (value, collection) {
        /* eslint-enable */
        if (collection) {
            for (var i = 0, cnt = collection.length; i < cnt; i++) {
                if (collection[i] === value) {
                    return i;
                }
            }
        }
        return -1;
    };
    /* eslint-disable */
    PivotUtil.setPivotProperties = function (control, properties) {
        /* eslint-enable */
        control.allowServerDataBinding = false;
        if (control.pivotGridModule) {
            control.pivotGridModule.allowServerDataBinding = false;
        }
        control.setProperties(properties, true);
        control.allowServerDataBinding = true;
        if (control.pivotGridModule) {
            control.pivotGridModule.allowServerDataBinding = true;
        }
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    PivotUtil.getClonedDataSourceSettings = function (dataSourceSettings) {
        var clonesDataSource = this.getDefinedObj({
            type: dataSourceSettings.type,
            catalog: dataSourceSettings.catalog,
            cube: dataSourceSettings.cube,
            providerType: dataSourceSettings.providerType,
            url: dataSourceSettings.url,
            localeIdentifier: dataSourceSettings.localeIdentifier,
            excludeFields: isNullOrUndefined(dataSourceSettings.excludeFields) ? [] : dataSourceSettings.excludeFields.slice(),
            expandAll: dataSourceSettings.expandAll,
            allowLabelFilter: dataSourceSettings.allowLabelFilter,
            allowValueFilter: dataSourceSettings.allowValueFilter,
            allowMemberFilter: dataSourceSettings.allowMemberFilter,
            enableSorting: dataSourceSettings.enableSorting ? true : false,
            rows: this.cloneFieldSettings(dataSourceSettings.rows),
            columns: this.cloneFieldSettings(dataSourceSettings.columns),
            filters: this.cloneFieldSettings(dataSourceSettings.filters),
            values: this.cloneFieldSettings(dataSourceSettings.values),
            filterSettings: this.cloneFilterSettings(dataSourceSettings.filterSettings),
            sortSettings: this.cloneSortSettings(dataSourceSettings.sortSettings),
            drilledMembers: this.cloneDrillMemberSettings(dataSourceSettings.drilledMembers),
            valueSortSettings: this.CloneValueSortObject(dataSourceSettings.valueSortSettings),
            valueAxis: dataSourceSettings.valueAxis,
            grandTotalsPosition: dataSourceSettings.grandTotalsPosition,
            formatSettings: this.cloneFormatSettings(dataSourceSettings.formatSettings),
            calculatedFieldSettings: this.cloneCalculatedFieldSettings(dataSourceSettings.calculatedFieldSettings),
            fieldMapping: this.cloneFieldSettings(dataSourceSettings.fieldMapping),
            showSubTotals: dataSourceSettings.showSubTotals,
            showRowSubTotals: dataSourceSettings.showRowSubTotals,
            showColumnSubTotals: dataSourceSettings.showColumnSubTotals,
            showGrandTotals: dataSourceSettings.showGrandTotals,
            showRowGrandTotals: dataSourceSettings.showRowGrandTotals,
            showColumnGrandTotals: dataSourceSettings.showColumnGrandTotals,
            showHeaderWhenEmpty: dataSourceSettings.showHeaderWhenEmpty,
            alwaysShowValueHeader: dataSourceSettings.alwaysShowValueHeader,
            conditionalFormatSettings: this.cloneConditionalFormattingSettings(dataSourceSettings.conditionalFormatSettings),
            emptyCellsTextContent: dataSourceSettings.emptyCellsTextContent,
            groupSettings: this.cloneGroupSettings(dataSourceSettings.groupSettings),
            showAggregationOnValueField: dataSourceSettings.showAggregationOnValueField,
            authentication: this.CloneAuthenticationObject(dataSourceSettings.authentication)
            /* eslint-disable @typescript-eslint/no-explicit-any */
        });
        /* eslint-enable @typescript-eslint/no-explicit-any */
        return clonesDataSource;
    };
    PivotUtil.updateDataSourceSettings = function (control, dataSourceSettings) {
        if (control) {
            this.setPivotProperties(control, {
                dataSourceSettings: this.getDefinedObj({
                    type: dataSourceSettings.type,
                    catalog: dataSourceSettings.catalog,
                    cube: dataSourceSettings.cube,
                    providerType: dataSourceSettings.providerType,
                    url: dataSourceSettings.url,
                    localeIdentifier: dataSourceSettings.localeIdentifier,
                    excludeFields: isNullOrUndefined(dataSourceSettings.excludeFields) ? [] : dataSourceSettings.excludeFields,
                    expandAll: dataSourceSettings.expandAll,
                    allowLabelFilter: dataSourceSettings.allowLabelFilter,
                    allowValueFilter: dataSourceSettings.allowValueFilter,
                    allowMemberFilter: dataSourceSettings.allowMemberFilter,
                    enableSorting: dataSourceSettings.enableSorting ? true : false,
                    rows: dataSourceSettings.rows,
                    columns: dataSourceSettings.columns,
                    filters: dataSourceSettings.filters,
                    values: dataSourceSettings.values,
                    filterSettings: dataSourceSettings.filterSettings,
                    sortSettings: dataSourceSettings.sortSettings,
                    drilledMembers: dataSourceSettings.drilledMembers,
                    valueSortSettings: dataSourceSettings.valueSortSettings,
                    valueAxis: dataSourceSettings.valueAxis,
                    grandTotalsPosition: dataSourceSettings.grandTotalsPosition,
                    formatSettings: dataSourceSettings.formatSettings,
                    calculatedFieldSettings: dataSourceSettings.calculatedFieldSettings,
                    fieldMapping: dataSourceSettings.fieldMapping,
                    showSubTotals: dataSourceSettings.showSubTotals,
                    showRowSubTotals: dataSourceSettings.showRowSubTotals,
                    showColumnSubTotals: dataSourceSettings.showColumnSubTotals,
                    showGrandTotals: dataSourceSettings.showGrandTotals,
                    showRowGrandTotals: dataSourceSettings.showRowGrandTotals,
                    showColumnGrandTotals: dataSourceSettings.showColumnGrandTotals,
                    showHeaderWhenEmpty: dataSourceSettings.showHeaderWhenEmpty,
                    alwaysShowValueHeader: dataSourceSettings.alwaysShowValueHeader,
                    conditionalFormatSettings: dataSourceSettings.conditionalFormatSettings,
                    emptyCellsTextContent: dataSourceSettings.emptyCellsTextContent,
                    groupSettings: dataSourceSettings.groupSettings,
                    showAggregationOnValueField: dataSourceSettings.showAggregationOnValueField,
                    authentication: this.CloneAuthenticationObject(dataSourceSettings.authentication)
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                })
                /* eslint-enable @typescript-eslint/no-explicit-any */
            });
        }
    };
    PivotUtil.cloneFieldSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                var set = collection_1[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    caption: set.caption,
                    axis: set.axis,
                    baseField: set.baseField,
                    baseItem: set.baseItem,
                    isCalculatedField: set.isCalculatedField,
                    isNamedSet: set.isNamedSet,
                    showNoDataItems: set.showNoDataItems,
                    showSubTotals: set.showSubTotals,
                    type: set.type,
                    dataType: set.dataType,
                    showFilterIcon: set.showFilterIcon,
                    showSortIcon: set.showSortIcon,
                    showRemoveIcon: set.showRemoveIcon,
                    showValueTypeIcon: set.showValueTypeIcon,
                    showEditIcon: set.showEditIcon,
                    allowDragAndDrop: set.allowDragAndDrop,
                    expandAll: set.expandAll
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneOlapFieldSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_2 = collection; _i < collection_2.length; _i++) {
                var set = collection_2[_i];
                clonedCollection.push(this.getDefinedObj({
                    caption: set.caption,
                    hasChildren: set.hasChildren,
                    id: set.id,
                    isSelected: set.isSelected,
                    name: set.name,
                    spriteCssClass: set.spriteCssClass,
                    tag: set.tag,
                    type: set.type,
                    pid: set.pid,
                    expanded: set.expanded,
                    defaultHierarchy: set.defaultHierarchy,
                    hasAllMember: set.hasAllMember,
                    allMember: set.allMember,
                    isChecked: set.isChecked,
                    filterMembers: set.filterMembers,
                    childMembers: set.childMembers,
                    searchMembers: set.searchMembers,
                    htmlAttributes: set.htmlAttributes,
                    currrentMembers: set.currrentMembers,
                    isHierarchy: set.isHierarchy,
                    isNamedSets: set.isNamedSets,
                    formatString: set.formatString,
                    actualFilter: set.actualFilter,
                    levels: set.levels,
                    levelCount: set.levelCount,
                    memberType: set.memberType,
                    fieldType: set.fieldType,
                    parentHierarchy: set.parentHierarchy
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneFilterSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_3 = collection; _i < collection_3.length; _i++) {
                var set = collection_3[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    type: set.type,
                    condition: set.condition,
                    items: set.items ? set.items.slice() : set.items,
                    levelCount: set.levelCount,
                    measure: set.measure,
                    selectedField: set.selectedField,
                    showDateFilter: set.showDateFilter,
                    showLabelFilter: set.showLabelFilter,
                    showNumberFilter: set.showNumberFilter,
                    value1: set.value1,
                    value2: set.value2
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneSortSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_4 = collection; _i < collection_4.length; _i++) {
                var set = collection_4[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    order: set.order,
                    membersOrder: set.membersOrder ? set.membersOrder.slice() : set.membersOrder
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneDrillMemberSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_5 = collection; _i < collection_5.length; _i++) {
                var set = collection_5[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    delimiter: set.delimiter,
                    items: set.items ? set.items.slice() : set.items
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneFormatSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_6 = collection; _i < collection_6.length; _i++) {
                var set = collection_6[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    calendar: set.calendar,
                    currency: set.currency,
                    format: set.format,
                    maximumFractionDigits: set.maximumFractionDigits,
                    maximumSignificantDigits: set.maximumSignificantDigits,
                    minimumFractionDigits: set.minimumFractionDigits,
                    minimumIntegerDigits: set.minimumIntegerDigits,
                    minimumSignificantDigits: set.minimumSignificantDigits,
                    skeleton: set.skeleton,
                    type: set.type,
                    useGrouping: set.useGrouping
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    /* eslint-disable */
    PivotUtil.CloneValueSortObject = function (collection) {
        /* eslint-enable */
        if (collection) {
            var clonedCollection = {
                columnIndex: collection.columnIndex,
                headerDelimiter: collection.headerDelimiter,
                headerText: collection.headerText,
                measure: collection.measure,
                sortOrder: collection.sortOrder
            };
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    /* eslint-disable */
    PivotUtil.CloneAuthenticationObject = function (collection) {
        /* eslint-enable */
        if (collection) {
            var clonedCollection = {
                userName: collection.userName,
                password: collection.password
            };
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneCalculatedFieldSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_7 = collection; _i < collection_7.length; _i++) {
                var set = collection_7[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    formatString: set.formatString,
                    formula: set.formula,
                    hierarchyUniqueName: set.hierarchyUniqueName
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneConditionalFormattingSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_8 = collection; _i < collection_8.length; _i++) {
                var set = collection_8[_i];
                clonedCollection.push(this.getDefinedObj({
                    applyGrandTotals: set.applyGrandTotals,
                    conditions: set.conditions,
                    label: set.label,
                    measure: set.measure,
                    style: set.style ? {
                        backgroundColor: set.style.backgroundColor,
                        color: set.style.color,
                        fontFamily: set.style.fontFamily,
                        fontSize: set.style.fontSize
                    } : set.style,
                    value1: set.value1,
                    value2: set.value2
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneGroupSettings = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_9 = collection; _i < collection_9.length; _i++) {
                var set = collection_9[_i];
                clonedCollection.push(this.getDefinedObj({
                    name: set.name,
                    caption: set.caption,
                    customGroups: this.cloneCustomGroups(set.customGroups),
                    endingAt: set.endingAt,
                    startingAt: set.startingAt,
                    groupInterval: set.groupInterval,
                    rangeInterval: set.rangeInterval,
                    type: set.type
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.cloneCustomGroups = function (collection) {
        if (collection) {
            var clonedCollection = [];
            for (var _i = 0, collection_10 = collection; _i < collection_10.length; _i++) {
                var set = collection_10[_i];
                clonedCollection.push(this.getDefinedObj({
                    groupName: set.groupName,
                    items: set.items ? set.items.slice() : set.items
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                }));
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            return clonedCollection;
        }
        else {
            return collection;
        }
    };
    PivotUtil.getFilterItemByName = function (fieldName, fields) {
        var filterItems = new DataManager({ json: fields }).executeLocal(new Query().where('name', 'equal', fieldName));
        if (filterItems && filterItems.length > 0) {
            return filterItems[filterItems.length - 1];
        }
        return undefined;
    };
    PivotUtil.getFieldByName = function (fieldName, fields) {
        return new DataManager({ json: fields }).executeLocal(new Query().where('name', 'equal', fieldName))[0];
    };
    PivotUtil.getFieldInfo = function (fieldName, control, hasAllField) {
        if (!hasAllField) {
            var rows = this.cloneFieldSettings(control.dataSourceSettings.rows);
            var columns = this.cloneFieldSettings(control.dataSourceSettings.columns);
            var values = this.cloneFieldSettings(control.dataSourceSettings.values);
            var filters = this.cloneFieldSettings(control.dataSourceSettings.filters);
            var fields = [rows, columns, values, filters];
            for (var i = 0, len = fields.length; i < len; i++) {
                for (var j = 0, cnt = (fields[i] ? fields[i].length : 0); j < cnt; j++) {
                    if (fields[i][j] && fields[i][j].name === fieldName) {
                        return { fieldName: fieldName, fieldItem: fields[i][j], axis: i === 0 ? 'rows' : i === 1 ? 'columns' : i === 2 ? 'values' : 'filters', position: j };
                    }
                }
            }
        }
        var fieldList = control.dataType === 'olap' ?
            control.olapEngineModule.fieldList[fieldName] : control.engineModule.fieldList[fieldName];
        var fieldItem = (fieldList ? {
            name: fieldName,
            caption: fieldList.caption,
            baseField: fieldList.baseField,
            baseItem: fieldList.baseItem,
            isCalculatedField: fieldList.isCalculatedField,
            isNamedSet: fieldList.isNamedSets,
            showNoDataItems: fieldList.showNoDataItems,
            showSubTotals: fieldList.showSubTotals,
            type: fieldList.aggregateType,
            showFilterIcon: fieldList.showFilterIcon,
            showSortIcon: fieldList.showSortIcon,
            showRemoveIcon: fieldList.showRemoveIcon,
            showValueTypeIcon: fieldList.showValueTypeIcon,
            showEditIcon: fieldList.showEditIcon,
            allowDragAndDrop: fieldList.allowDragAndDrop,
            expandAll: fieldList.expandAll
        } : undefined);
        return { fieldName: fieldName, fieldItem: fieldItem, axis: 'fieldlist', position: -1 };
    };
    PivotUtil.isButtonIconRefesh = function (prop, oldProp, newProp) {
        var isButtonRefresh = false;
        try {
            if (prop === 'dataSourceSettings' && oldProp.dataSourceSettings && newProp.dataSourceSettings) {
                var propValidation = ['notAvail', 'notAvail', 'notAvail', 'notAvail'];
                var oldAxesProp = Object.keys(oldProp.dataSourceSettings);
                var newAxesProp = Object.keys(newProp.dataSourceSettings);
                if (oldAxesProp && newAxesProp && newAxesProp.length > 0 && oldAxesProp.length === newAxesProp.length) {
                    var axes = ['rows', 'columns', 'values', 'filters'];
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                    for (var i = 0; i < newAxesProp.length; i++) {
                        var oldAxis = (newAxesProp[i] in oldProp.dataSourceSettings && !isNullOrUndefined(oldProp.dataSourceSettings[newAxesProp[i]])) ? Object.keys(oldProp.dataSourceSettings[newAxesProp[i]]) : []; /* eslint-disable-line */
                        var newAxis = (newAxesProp[i] in newProp.dataSourceSettings && !isNullOrUndefined(newProp.dataSourceSettings[newAxesProp[i]])) ? /* eslint-disable-line */
                            Object.keys(newProp.dataSourceSettings[newAxesProp[i]]) : [];
                        if (axes.indexOf(newAxesProp[i]) !== -1 && axes.indexOf(oldAxesProp[i]) !== -1 &&
                            oldAxis && newAxis && newAxis.length > 0 && oldAxis.length === newAxis.length) {
                            var options = ['showFilterIcon', 'showSortIcon', 'showRemoveIcon', 'showValueTypeIcon', 'showEditIcon', 'allowDragAndDrop', 'expandAll'];
                            for (var j = 0; j < newAxis.length; j++) {
                                var oldAxisProp = Object.keys(oldProp.dataSourceSettings[newAxesProp[i]][newAxis[j]]);
                                var newAxisProp = Object.keys(newProp.dataSourceSettings[newAxesProp[i]][newAxis[j]]);
                                for (var k = 0; k < newAxisProp.length; k++) {
                                    if (options.indexOf(newAxisProp[k]) !== -1 && options.indexOf(oldAxisProp[k]) !== -1) {
                                        propValidation[i] = 'update';
                                    }
                                    else {
                                        propValidation[i] = 'break';
                                        break;
                                    }
                                }
                                if (propValidation[i] === 'break') {
                                    break;
                                }
                            }
                        }
                        else {
                            propValidation[i] = 'break';
                        }
                        if (propValidation[i] === 'break') {
                            break;
                        }
                    }
                    /* eslint-enable @typescript-eslint/no-explicit-any */
                }
                var a = 0;
                var b = 0;
                var c = 0;
                for (var _i = 0, propValidation_1 = propValidation; _i < propValidation_1.length; _i++) {
                    var validation = propValidation_1[_i];
                    if (validation === 'break') {
                        a++;
                    }
                    if (validation === 'notAvail') {
                        b++;
                    }
                    if (validation === 'update') {
                        c++;
                    }
                }
                isButtonRefresh = (a > 0 || b === 4) ? false : (a === 0 && b < 4 && c > 0);
            }
        }
        catch (exception) {
            isButtonRefresh = false;
        }
        return isButtonRefresh;
    };
    /* eslint-disable */
    PivotUtil.formatPivotValues = function (pivotValues) {
        var values = [];
        /* eslint-enable */
        for (var i = 0; i < pivotValues.length; i++) {
            if (pivotValues[i]) {
                values[i] = [];
                for (var j = 0; j < pivotValues[i].length; j++) {
                    if (pivotValues[i][j]) {
                        values[i][j] = {
                            axis: pivotValues[i][j].Axis,
                            actualText: pivotValues[i][j].ActualText,
                            indexObject: pivotValues[i][j].IndexObject,
                            index: pivotValues[i][j].Index,
                            rowHeaders: pivotValues[i][j].RowHeaders,
                            columnHeaders: pivotValues[i][j].ColumnHeaders,
                            formattedText: pivotValues[i][j].FormattedText,
                            actualValue: pivotValues[i][j].ActualValue,
                            rowIndex: pivotValues[i][j].RowIndex,
                            colIndex: pivotValues[i][j].ColIndex,
                            colSpan: pivotValues[i][j].ColSpan,
                            level: pivotValues[i][j].Level,
                            rowSpan: pivotValues[i][j].RowSpan,
                            isSum: pivotValues[i][j].IsSum,
                            isGrandSum: pivotValues[i][j].IsGrandSum,
                            valueSort: pivotValues[i][j].ValueSort,
                            ordinal: pivotValues[i][j].Ordinal,
                            hasChild: pivotValues[i][j].HasChild,
                            isDrilled: pivotValues[i][j].IsDrilled,
                            value: pivotValues[i][j].Value,
                            type: pivotValues[i][j].Type,
                            members: pivotValues[i][j].Members
                        };
                    }
                }
            }
        }
        return values;
    };
    /* eslint-disable */
    PivotUtil.formatFieldList = function (fieldList) {
        var keys = Object.keys(fieldList);
        var fList = {};
        for (var i = 0; i < keys.length; i++) {
            /* eslint-enable */
            if (fieldList[keys[i]]) {
                fList[keys[i]] = {
                    id: fieldList[keys[i]].Id,
                    caption: fieldList[keys[i]].Caption,
                    type: fieldList[keys[i]].Type,
                    formatString: fieldList[keys[i]].FormatString,
                    index: fieldList[keys[i]].Index,
                    members: fieldList[keys[i]].Members,
                    formattedMembers: fieldList[keys[i]].FormattedMembers,
                    dateMember: fieldList[keys[i]].DateMember,
                    filter: fieldList[keys[i]].Filter,
                    sort: fieldList[keys[i]].Sort,
                    aggregateType: fieldList[keys[i]].AggregateType,
                    baseField: fieldList[keys[i]].BaseField,
                    baseItem: fieldList[keys[i]].BaseItem,
                    filterType: fieldList[keys[i]].FilterType,
                    format: fieldList[keys[i]].Format,
                    formula: fieldList[keys[i]].Formula,
                    isSelected: fieldList[keys[i]].IsSelected,
                    isExcelFilter: fieldList[keys[i]].IsExcelFilter,
                    showNoDataItems: fieldList[keys[i]].ShowNoDataItems,
                    isCustomField: fieldList[keys[i]].IsCustomField,
                    showFilterIcon: fieldList[keys[i]].ShowFilterIcon,
                    showSortIcon: fieldList[keys[i]].ShowSortIcon,
                    showRemoveIcon: fieldList[keys[i]].ShowRemoveIcon,
                    showEditIcon: fieldList[keys[i]].ShowEditIcon,
                    showValueTypeIcon: fieldList[keys[i]].ShowValueTypeIcon,
                    allowDragAndDrop: fieldList[keys[i]].AllowDragAndDrop,
                    isCalculatedField: fieldList[keys[i]].IsCalculatedField,
                    showSubTotals: fieldList[keys[i]].ShowSubTotals,
                    expandAll: fieldList[keys[i]].expandAll
                };
            }
        }
        return fList;
    };
    /* eslint-disable */
    PivotUtil.frameContent = function (pivotValues, type, rowPosition, control) {
        var dataContent = [];
        var pivot = control;
        if (pivot.dataSourceSettings.values.length > 0 && !pivot.engineModule.isEmptyData) {
            if ((pivot.enableValueSorting) || !pivot.engineModule.isEngineUpdated) {
                var rowCnt = 0;
                var start = type === 'value' ? rowPosition : 0;
                var end = type === 'value' ? pivotValues.length : rowPosition;
                for (var rCnt = start; rCnt < end; rCnt++) {
                    if (pivotValues[rCnt]) {
                        rowCnt = type === 'header' ? rCnt : rowCnt;
                        dataContent[rowCnt] = {};
                        for (var cCnt = 0; cCnt < pivotValues[rCnt].length; cCnt++) {
                            if (pivotValues[rCnt][cCnt]) {
                                dataContent[rowCnt][cCnt] = pivotValues[rCnt][cCnt];
                            }
                        }
                        rowCnt++;
                    }
                }
            }
        }
        return dataContent;
    };
    PivotUtil.getLocalizedObject = function (control) {
        var locale = new Object();
        locale["Null"] = control.localeObj.getConstant('null');
        locale["Years"] = control.localeObj.getConstant('Years');
        locale["Quarters"] = control.localeObj.getConstant('Quarters');
        locale["Months"] = control.localeObj.getConstant('Months');
        locale["Days"] = control.localeObj.getConstant('Days');
        locale["Hours"] = control.localeObj.getConstant('Hours');
        locale["Minutes"] = control.localeObj.getConstant('Minutes');
        locale["Seconds"] = control.localeObj.getConstant('Seconds');
        locale["QuarterYear"] = control.localeObj.getConstant('QuarterYear');
        locale["Of"] = control.localeObj.getConstant('of');
        locale["Qtr"] = control.localeObj.getConstant('qtr');
        locale["Undefined"] = control.localeObj.getConstant('undefined');
        locale["GroupOutOfRange"] = control.localeObj.getConstant('groupOutOfRange');
        locale["Group"] = control.localeObj.getConstant('group');
        return locale;
    };
    PivotUtil.updateReport = function (control, report) {
        /* eslint-enable */
        control.setProperties({ dataSourceSettings: { rows: [] } }, true);
        control.setProperties({ dataSourceSettings: { columns: [] } }, true);
        control.setProperties({ dataSourceSettings: { formatSettings: [] } }, true);
        for (var i = 0; i < report.Rows.length; i++) {
            control.dataSourceSettings.rows.push({
                name: report.Rows[i].Name,
                caption: report.Rows[i].Caption,
                showNoDataItems: report.Rows[i].ShowNoDataItems,
                baseField: report.Rows[i].BaseField,
                baseItem: report.Rows[i].BaseItem,
                showFilterIcon: report.Rows[i].ShowFilterIcon,
                showSortIcon: report.Rows[i].ShowSortIcon,
                showEditIcon: report.Rows[i].ShowEditIcon,
                showRemoveIcon: report.Rows[i].ShowRemoveIcon,
                showSubTotals: report.Rows[i].ShowValueTypeIcon,
                allowDragAndDrop: report.Rows[i].AllowDragAndDrop,
                axis: report.Rows[i].Axis,
                dataType: report.Rows[i].DataType,
                isCalculatedField: report.Rows[i].IsCalculatedField,
                showValueTypeIcon: report.Rows[i].ShowValueTypeIcon,
                type: report.Rows[i].Type,
                expandAll: report.Rows[i].expandAll
            });
        }
        for (var i = 0; i < report.Columns.length; i++) {
            control.dataSourceSettings.columns.push({
                name: report.Columns[i].Name,
                caption: report.Columns[i].Caption,
                showNoDataItems: report.Columns[i].ShowNoDataItems,
                baseField: report.Columns[i].BaseField,
                baseItem: report.Columns[i].BaseItem,
                showFilterIcon: report.Columns[i].ShowFilterIcon,
                showSortIcon: report.Columns[i].ShowSortIcon,
                showEditIcon: report.Columns[i].ShowEditIcon,
                showRemoveIcon: report.Columns[i].ShowRemoveIcon,
                showSubTotals: report.Columns[i].ShowValueTypeIcon,
                allowDragAndDrop: report.Columns[i].AllowDragAndDrop,
                axis: report.Columns[i].Axis,
                dataType: report.Columns[i].DataType,
                isCalculatedField: report.Columns[i].IsCalculatedField,
                showValueTypeIcon: report.Columns[i].ShowValueTypeIcon,
                type: report.Columns[i].Type,
                expandAll: report.columns[i].expandAll
            });
        }
        for (var i = 0; i < report.FormatSettings.length; i++) {
            control.dataSourceSettings.formatSettings.push({
                name: report.FormatSettings[i].Name,
                format: report.FormatSettings[i].Format,
                type: report.FormatSettings[i].Type,
                currency: report.FormatSettings[i].Currency,
                maximumFractionDigits: report.FormatSettings[i].MaximumFractionDigits,
                maximumSignificantDigits: report.FormatSettings[i].MaximumSignificantDigits,
                minimumFractionDigits: report.FormatSettings[i].MinimumFractionDigits,
                minimumIntegerDigits: report.FormatSettings[i].MinimumIntegerDigits,
                minimumSignificantDigits: report.FormatSettings[i].MinimumSignificantDigits,
                skeleton: report.FormatSettings[i].Skeleton,
                useGrouping: report.FormatSettings[i].UseGrouping
            });
        }
    };
    PivotUtil.generateUUID = function () {
        /* eslint-disable */
        var d = new Date().getTime();
        var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            }
            else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        /* eslint-enable */
    };
    /** @hidden */
    PivotUtil.applyCustomSort = function (sortDetails, sortMembersOrder, type, hasMembersOrder, isOlap) {
        var grandTotal;
        var order = [];
        if (sortDetails.IsOrderChanged) {
            order = sortDetails.members;
        }
        else {
            order = (sortDetails.sortOrder === 'Ascending' || sortDetails.sortOrder === 'None' || sortDetails.sortOrder === undefined) ? [].concat(sortDetails.members) : [].concat(sortDetails.members).reverse();
        }
        var updatedMembers = [];
        var isNormalType = type === undefined || type === 'string' || type === 'number';
        if (sortMembersOrder[0].actualText === 'Grand Total') {
            grandTotal = sortMembersOrder[0];
            sortMembersOrder.shift();
        }
        for (var i = 0, j = 0; i < sortMembersOrder.length; i++) {
            var member = sortMembersOrder[i];
            var sortText = isOlap ? member.formattedText : isNormalType ? member.actualText :
                type === true ? member.actualText.toString() : member.dateText;
            if (order[j] === sortText) {
                sortMembersOrder.splice(j++, 0, member);
                sortMembersOrder.splice(++i, 1);
                if (j < order.length) {
                    i = -1;
                }
                else {
                    if (!hasMembersOrder) {
                        updatedMembers.splice(--j, 0, sortText);
                    }
                    break;
                }
            }
            if (i >= 0 && !hasMembersOrder) {
                updatedMembers[i] = sortText;
            }
        }
        if (!hasMembersOrder) {
            for (var i = updatedMembers.length; i < sortMembersOrder.length; i++) {
                var member = sortMembersOrder[i];
                var sortText = isOlap ? member.formattedText : isNormalType ? member.actualText : type === true ? member.actualText.toString() : member.dateText;
                updatedMembers[i] = sortText;
            }
            if (updatedMembers[updatedMembers.length - 1] === 'Grand Total') {
                updatedMembers.pop();
            }
            sortDetails.members = updatedMembers;
        }
        if (grandTotal) {
            sortMembersOrder.splice(0, 0, grandTotal);
        }
        return sortMembersOrder;
    };
    /** @hidden */
    PivotUtil.applyHeadersSort = function (sortMembersOrder, sortOrder, type) {
        if (type === 'datetime' || type === 'date' || type === 'time') {
            sortOrder === 'Ascending' ?
                (sortMembersOrder.sort(function (a, b) { return (a.dateText > b.dateText) ? 1 : ((b.dateText > a.dateText) ? -1 : 0); })) :
                sortOrder === 'Descending' ?
                    (sortMembersOrder.sort(function (a, b) { return (a.dateText < b.dateText) ? 1 : ((b.dateText < a.dateText) ? -1 : 0); })) :
                    sortMembersOrder;
        }
        else if (type === true) {
            sortOrder === 'Ascending' ?
                (sortMembersOrder.sort(function (a, b) { return (a.actualText === 'Grand Total' || b.actualText === 'Grand Total') ? 0 : (a.actualText === 'Out of Range') ? 1 : (b.actualText === 'Out of Range') ? -1 : (Number(a.actualText.toString().match(/\d+/)) > Number(b.actualText.toString().match(/\d+/))) ? 1 : ((Number(b.actualText.toString().match(/\d+/)) > Number(a.actualText.toString().match(/\d+/))) ? -1 : 0); })) :
                sortOrder === 'Descending' ?
                    (sortMembersOrder.sort(function (a, b) { return (a.actualText === 'Grand Total' || b.actualText === 'Grand Total') ? 0 : (a.actualText === 'Out of Range') ? -1 : (b.actualText === 'Out of Range') ? 1 : (Number(a.actualText.toString().match(/\d+/)) < Number(b.actualText.toString().match(/\d+/))) ? 1 : ((Number(b.actualText.toString().match(/\d+/)) < Number(a.actualText.toString().match(/\d+/))) ? -1 : 0); })) :
                    sortMembersOrder;
        }
        else {
            sortOrder === 'Ascending' ?
                (sortMembersOrder.sort(function (a, b) { return (a.actualText === 'Grand Total' || b.actualText === 'Grand Total') ? 0 : ((a.actualText > b.actualText) ? 1 : ((b.actualText > a.actualText) ? -1 : 0)); })) :
                sortOrder === 'Descending' ?
                    (sortMembersOrder.sort(function (a, b) { return (a.actualText === 'Grand Total' || b.actualText === 'Grand Total') ? 0 : ((a.actualText < b.actualText) ? 1 : ((b.actualText < a.actualText) ? -1 : 0)); })) :
                    sortMembersOrder;
        }
        return sortMembersOrder;
    };
    return PivotUtil;
}());
export { PivotUtil };
