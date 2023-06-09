import { attributes, createElement, getTemplateEngine, getValue, isNullOrUndefined, isObject, isUndefined, setTemplateEngine, setValue } from '@syncfusion/ej2-base';
import { EventEmitter } from '@angular/core';

/**
 * Angular Utility Module
 */
/* tslint:disable */
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            if (!derivedClass.prototype.hasOwnProperty(name) || baseClass.isFormBase) {
                derivedClass.prototype[name] = baseClass.prototype[name];
            }
        });
    });
}
/* tslint:disable */
function ComponentMixins(baseClass) {
    return function (derivedClass) {
        applyMixins(derivedClass, baseClass);
    };
}
/**
 * @private
 */
function registerEvents(eventList, obj, direct) {
    let ngEventsEmitter = {};
    if (eventList && eventList.length) {
        for (let event of eventList) {
            if (direct === true) {
                obj.propCollection[event] = new EventEmitter(false);
                obj[event] = obj.propCollection[event];
            }
            else {
                ngEventsEmitter[event] = new EventEmitter(false);
            }
        }
        if (direct !== true) {
            obj.setProperties(ngEventsEmitter, true);
        }
    }
}
/**
 * @private
 */
function clearTemplate(_this, templateNames, index) {
    let regTemplates = Object.keys(_this.registeredTemplate);
    if (regTemplates.length) {
        /* istanbul ignore next */
        let regProperties = templateNames && templateNames.filter((val) => {
            return (/\./g.test(val) ? false : true);
        });
        for (let registeredTemplate of (regProperties && regProperties || regTemplates)) {
            /* istanbul ignore next */
            if (index && index.length) {
                for (let e = 0; e < index.length; e++) {
                    for (let m = 0; m < _this.registeredTemplate.template.length; m++) {
                        let value = _this.registeredTemplate.template[m].rootNodes[0];
                        if (value === index[e]) {
                            let rt = _this.registeredTemplate[registeredTemplate];
                            rt[m].destroy();
                        }
                    }
                }
            }
            else {
                if (_this.registeredTemplate[registeredTemplate]) {
                    for (let rt of _this.registeredTemplate[registeredTemplate]) {
                        if (!rt.destroyed) {
                            if (rt._view) {
                                let pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                                if (!isNullOrUndefined(pNode)) {
                                    for (let m = 0; m < rt.rootNodes.length; m++) {
                                        pNode.appendChild(rt.rootNodes[m]);
                                    }
                                }
                            }
                            rt.destroy();
                        }
                    }
                }
            }
            delete _this.registeredTemplate[registeredTemplate];
        }
    }
    for (let tagObject of _this.tagObjects) {
        if (tagObject.instance) {
            /* istanbul ignore next */
            tagObject.instance.clearTemplate((templateNames && templateNames.filter((val) => {
                return (new RegExp(tagObject.name).test(val) ? true : false);
            })));
        }
    }
}
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
function setValue$1(nameSpace, value, object) {
    let keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    /* istanbul ignore next */
    let fromObj = object || {};
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (i + 1 === keys.length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (fromObj[key] === undefined) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return fromObj;
}

const refRegex = /Ref$/;
class ComplexBase {
    constructor() {
        this.hasChanges = false;
        this.propCollection = {};
        this.dataSource = {};
        this.tags = [];
        this.tagObjects = [];
    }
    ngOnInit() {
        this.registeredTemplate = {};
        for (let tag of this.tags) {
            let objInstance = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), this);
            if (objInstance) {
                this.tagObjects.push({ instance: objInstance, name: tag });
            }
        }
        let templateProperties = Object.keys(this);
        for (let i = 0; i < templateProperties.length; i++) {
            var tempProp = getValue(templateProperties[i], this);
            if (typeof tempProp === 'object' && tempProp.elementRef && !getValue(templateProperties[i] + 'Ref', this)) {
                setValue(templateProperties[i] + 'Ref', tempProp, this);
            }
        }
        templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter((val) => {
            return /Ref$/i.test(val);
        });
        for (let tempName of templateProperties) {
            let propName = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName, this), this.propCollection);
        }
        // Angular 9 compatibility to overcome ngOnchange not get triggered issue
        // To Update properties to "this.propCollection"
        let propList = Object.keys(this);
        /* istanbul ignore next */
        if (this.directivePropList) {
            for (let k = 0; k < this.directivePropList.length; k++) {
                let dirPropName = this.directivePropList[k];
                if (propList.indexOf(dirPropName) !== -1 && getValue(dirPropName, this)) {
                    setValue(dirPropName, getValue(dirPropName, this), this.propCollection);
                }
            }
            this.hasChanges = true;
        }
        this.isInitChanges = true;
    }
    registerEvents(eventList) {
        registerEvents(eventList, this, true);
    }
    ngOnChanges(changes) {
        for (let propName of Object.keys(changes)) {
            let changedVal = changes[propName];
            this.propCollection[propName] = changedVal.currentValue;
        }
        this.isUpdated = false;
        this.hasChanges = true;
    }
    /* istanbul ignore next */
    clearTemplate(templateNames) {
        clearTemplate(this, templateNames);
    }
    getProperties() {
        /* istanbul ignore next */
        for (let tagObject of this.tagObjects) {
            this.propCollection[tagObject.name] = tagObject.instance.getProperties();
        }
        return this.propCollection;
    }
    isChanged() {
        let result = this.hasChanges;
        if (!isNullOrUndefined(this.propCollection[this.property])) {
            let tempProps = this.propCollection[this.property];
            let props = Object.keys(tempProps[0]);
            for (let d = 0; d < props.length; d++) {
                if (!isNullOrUndefined(this.propCollection[props[d]])) {
                    let val = getValue(props[d], this);
                    let propVal = this.propCollection[this.property][0][props[d]];
                    if (!isNullOrUndefined(val) && this.propCollection[props[d]] !== val
                        && propVal !== val) {
                        setValue(props[d], val, this.propCollection[this.property][0]);
                        setValue(props[d], val, this.propCollection);
                        this.hasChanges = true;
                        this.isUpdated = false;
                    }
                }
            }
        }
        /* istanbul ignore next */
        for (let item of this.tagObjects) {
            result = result || item.instance.hasChanges;
        }
        return result || this.hasChanges;
    }
    ngAfterContentChecked() {
        this.hasChanges = this.isChanged();
        if (this.isInitChanges || this.hasChanges) {
            let templateProperties = Object.keys(this);
            templateProperties = templateProperties.filter((val) => {
                return refRegex.test(val);
            });
            for (let tempName of templateProperties) {
                let propName = tempName.replace('Ref', '');
                setValue(propName.replace('_', '.'), getValue(propName, this), this.propCollection);
            }
        }
    }
    ngAfterViewChecked() {
        /* istanbul ignore next */
        if (this.isUpdated) {
            this.hasChanges = false;
        }
    }
    ngAfterViewInit() {
        /* istanbul ignore next */
        this.isInitChanges = false;
    }
    ngOnDestroy() {
        /* istanbul ignore next */
        this.directivePropList = [];
    }
}
class ArrayBase {
    constructor(propertyName) {
        this.list = [];
        this.hasChanges = false;
        this.propertyName = propertyName;
    }
    ngOnInit() {
        this.isInitChanges = true;
    }
    ngAfterContentInit() {
        let index = 0;
        /* istanbul ignore next */
        this.list = this.children.map((child) => {
            child.dirIndex = index++;
            child.property = this.propertyName;
            return child;
        });
        this.hasChanges = true;
    }
    getProperties() {
        let onlyProp = [];
        for (let item of this.list) {
            onlyProp.push(item.getProperties());
        }
        return onlyProp;
    }
    isChanged() {
        let result = false;
        let index = 0;
        let isSourceChanged = false;
        // tslint:disable-next-line
        let childrenDataSource = this.children.map((child) => {
            return child;
        });
        /* istanbul ignore next */
        if (this.list.length === this.children.length) {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].propCollection.dataSource) {
                    if (this.list[i].dataSource && this.list[i].propCollection.dataSource !== this.list[i].dataSource) {
                        this.list[i].propCollection.dataSource = this.list[i].dataSource;
                        this.list[i].hasChanges = true;
                    }
                    isSourceChanged = (JSON.stringify(this.list[i].propCollection.dataSource) !==
                        JSON.stringify(childrenDataSource[i].propCollection.dataSource));
                }
            }
        }
        this.hasNewChildren = (this.list.length !== this.children.length || isSourceChanged) ? true : null;
        if (this.hasNewChildren) {
            this.list = this.children.map((child) => {
                child.dirIndex = index++;
                child.property = this.propertyName;
                return child;
            });
        }
        /* istanbul ignore end */
        for (let item of this.list) {
            result = result || item.hasChanges;
        }
        return !!this.list.length && result;
    }
    clearTemplate(templateNames) {
        /* istanbul ignore next */
        for (let item of this.list) {
            item.clearTemplate(templateNames && templateNames.map((val) => {
                return new RegExp(this.propertyName).test(val) ? val.replace(this.propertyName + '.', '') : val;
            }));
        }
    }
    ngAfterContentChecked() {
        this.hasChanges = this.isChanged();
        for (let i = 0; i < this.list.length; i++) {
            if (getValue('childColumns', this.list[i]) && getValue('property', this.list[i]) === 'columns') {
                setValue('columns', getValue('childColumns', this.list[i]).getProperties(), this.list[i].propCollection);
            }
            this.list[i].isUpdated = true;
        }
    }
    ngAfterViewInit() {
        this.isInitChanges = false;
    }
    ngOnDestroy() {
        this.list = [];
    }
}

/**
 * Angular Component Base Module
 */
class ComponentBase {
    constructor() {
        this.isProtectedOnChange = true;
        this.isFormInit = true;
    }
    saveChanges(key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        // tslint:disable-next-line:no-any
        let changeTime = setTimeout(this.dataBind.bind(this));
        let clearUpdate = () => {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    }
    ;
    // tslint:disable-next-line:no-any
    ngOnInit(isTempRef) {
        // tslint:disable-next-line:no-any
        let tempOnThis = isTempRef || this;
        tempOnThis.registeredTemplate = {};
        tempOnThis.ngBoundedEvents = {};
        tempOnThis.isAngular = true;
        tempOnThis.isFormInit = true;
        /* istanbul ignore next */
        if (isTempRef) {
            this.tags = isTempRef.tags;
        }
        tempOnThis.tags = this.tags || [];
        tempOnThis.complexTemplate = this.complexTemplate || [];
        tempOnThis.tagObjects = [];
        tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
        /* istanbul ignore next */
        tempOnThis.createElement = (tagName, prop) => {
            //tslint:disable-next-line
            let ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
            if (typeof (prop) === 'undefined') {
                return ele;
            }
            ele.innerHTML = (prop.innerHTML ? prop.innerHTML : '');
            if (prop.className !== undefined) {
                ele.className = prop.className;
            }
            if (prop.id !== undefined) {
                ele.id = prop.id;
            }
            if (prop.styles !== undefined) {
                ele.setAttribute('style', prop.styles);
            }
            if (tempOnThis.ngAttr !== undefined) {
                ele.setAttribute(tempOnThis.ngAttr, '');
            }
            if (prop.attrs !== undefined) {
                attributes(ele, prop.attrs);
            }
            return ele;
        };
        for (let tag of tempOnThis.tags) {
            let tagObject = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
                name: tag
            };
            tempOnThis.tagObjects.push(tagObject);
        }
        let complexTemplates = Object.keys(tempOnThis);
        complexTemplates = complexTemplates.filter((val) => {
            return /Ref$/i.test(val) && /\_/i.test(val);
        });
        for (let tempName of complexTemplates) {
            let propName = tempName.replace('Ref', '');
            let val = {};
            setValue(propName.replace('_', '.'), getValue(propName, tempOnThis), val);
            tempOnThis.setProperties(val, true);
        }
    }
    getAngularAttr(ele) {
        let attributes$$1 = ele.attributes;
        let length = attributes$$1.length;
        let ngAr;
        for (let i = 0; i < length; i++) {
            /* istanbul ignore next */
            if (/_ngcontent/g.test(attributes$$1[i].name)) {
                ngAr = attributes$$1[i].name;
            }
        }
        return ngAr;
    }
    ;
    // tslint:disable-next-line:no-any
    ngAfterViewInit(isTempRef) {
        // tslint:disable-next-line:no-any
        let tempAfterViewThis = isTempRef || this;
        let regExp = /ejs-tab|ejs-accordion/g;
        /* istanbul ignore next */
        if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
            tempAfterViewThis.ngEle.nativeElement.style.visibility = 'hidden';
        }
        /**
         * Root level template properties are not getting rendered,
         * Due to ngonchanges not get triggered.
         * so that we have set template value for root level template properties,
         * for example: refer below syntax
         * ```html
         * <ejs-grid>
         * <e-column></e-column>
         * <ng-template #editSettingsTemplate></ng-template>
         * </ejs-grid>
         * ```
         */
        let templateProperties = Object.keys(tempAfterViewThis);
        templateProperties = templateProperties.filter((val) => {
            return /Ref$/i.test(val);
        });
        for (let tempName of templateProperties) {
            let propName = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName + 'Ref', tempAfterViewThis), tempAfterViewThis);
        }
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        setTimeout(() => {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined' && document.body.contains(tempAfterViewThis.element)) {
                tempAfterViewThis.appendTo(tempAfterViewThis.element);
                tempAfterViewThis.ngEle.nativeElement.style.visibility = '';
            }
        });
    }
    // tslint:disable-next-line:no-any
    ngOnDestroy(isTempRef) {
        // tslint:disable-next-line:no-any
        let tempOnDestroyThis = isTempRef || this;
        /* istanbul ignore else  */
        setTimeout(() => {
            if (typeof window !== 'undefined' && document.body.contains(tempOnDestroyThis.element) && tempOnDestroyThis.element.classList.contains('e-control')) {
                tempOnDestroyThis.destroy();
                tempOnDestroyThis.clearTemplate(null);
                // removing bounded events and tagobjects from component after destroy
                tempOnDestroyThis.ngBoundedEvents = {};
                tempOnDestroyThis.tagObjects = {};
                tempOnDestroyThis.ngEle = null;
            }
        });
    }
    //tslint:disable-next-line
    clearTemplate(templateNames, index) {
        clearTemplate(this, templateNames, index);
    }
    ;
    // tslint:disable-next-line:no-any
    ngAfterContentChecked(isTempRef) {
        // tslint:disable-next-line:no-any
        let tempAfterContentThis = isTempRef || this;
        for (let tagObject of tempAfterContentThis.tagObjects) {
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                if (tagObject.instance.isInitChanges) {
                    let propObj = {};
                    // For angular 9 compatibility
                    // Not able to get complex directive properties reference ni Onint hook
                    // So we have constructed property here and used
                    let complexDirProps;
                    let list = getValue('instance.list', tagObject);
                    if (list && list.length) {
                        complexDirProps = list[0].directivePropList;
                    }
                    let skip = true;
                    if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === 'gantt') {
                        skip = false;
                    }
                    if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
                        let compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
                        for (let h = 0; h < tagObject.instance.list.length; h++) {
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName] = [];
                            let obj = {};
                            for (let k = 0; k < compDirPropList.length; k++) {
                                let complexPropName = compDirPropList[k];
                                obj[complexPropName] = tagObject.instance.list[h].propCollection[complexPropName];
                            }
                            for (let i = 0; i < tagObject.instance.list[h].tags.length; i++) {
                                let tag = tagObject.instance.list[h].tags[i];
                                let childObj = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tagObject.instance.list[h]);
                                if (childObj) {
                                    let innerchildObj = tagObject.instance.list[h]['child' + tag.substring(0, 1).toUpperCase() + tag.substring(1)];
                                    if (innerchildObj) {
                                        for (let j = 0; j < innerchildObj.list.length; j++) {
                                            let innerTag = innerchildObj.list[0].tags[0];
                                            if (innerTag) {
                                                let innerchildTag = getValue('child' + innerTag.substring(0, 1).toUpperCase() + innerTag.substring(1), innerchildObj.list[j]);
                                                if (innerchildTag) {
                                                    innerchildObj.list[j].tagObjects.push({ instance: innerchildTag, name: innerTag });
                                                }
                                            }
                                        }
                                    }
                                    tagObject.instance.list[h].tagObjects.push({ instance: childObj, name: tag });
                                }
                            }
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName].push(obj);
                        }
                    }
                    // End angular 9 compatibility
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
                }
                else {
                    /* istanbul ignore next */
                    if ((tempAfterContentThis[tagObject.name].length !== tagObject.instance.list.length) || (tempAfterContentThis.getModuleName() === 'diagram')) {
                        tempAfterContentThis[tagObject.name] = tagObject.instance.list;
                    }
                    for (let list of tagObject.instance.list) {
                        let curIndex = tagObject.instance.list.indexOf(list);
                        let curChild = getValue(tagObject.name, tempAfterContentThis)[curIndex];
                        let complexTemplates = Object.keys(curChild);
                        complexTemplates = complexTemplates.filter((val) => {
                            return /Ref$/i.test(val);
                        });
                        if (curChild.properties && Object.keys(curChild.properties).length !== 0 && /chart/.test(tempAfterContentThis.getModuleName())) {
                            for (let complexPropName of complexTemplates) {
                                complexPropName = complexPropName.replace(/Ref/, '');
                                curChild.properties[complexPropName] = !curChild.properties[complexPropName] ?
                                    curChild.propCollection[complexPropName] : curChild.properties[complexPropName];
                            }
                        }
                        if (!isUndefined(curChild) && !isUndefined(curChild.setProperties)) {
                            if (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
                                curChild.setProperties(list.getProperties(), true);
                            }
                            else {
                                curChild.setProperties(list.getProperties());
                            }
                        }
                        list.isUpdated = true;
                    }
                }
            }
        }
    }
    registerEvents(eventList) {
        registerEvents(eventList, this);
    }
    twoWaySetter(newVal, prop) {
        let oldVal = getValue(prop, this.properties);
        if (oldVal === newVal) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    }
    addTwoWay(propList) {
        for (let prop of propList) {
            getValue(prop, this);
            Object.defineProperty(this, prop, {
                get: () => {
                    return getValue(prop, this.properties);
                },
                set: (newVal) => this.twoWaySetter(newVal, prop)
            });
            setValue(prop + 'Change', new EventEmitter(), this);
        }
    }
    addEventListener(eventName, handler) {
        let eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            if (!this.ngBoundedEvents[eventName]) {
                this.ngBoundedEvents[eventName] = new Map();
            }
            this.ngBoundedEvents[eventName].set(handler, eventObj.subscribe(handler));
        }
    }
    removeEventListener(eventName, handler) {
        let eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            this.ngBoundedEvents[eventName].get(handler).unsubscribe();
        }
    }
    trigger(eventName, eventArgs, success) {
        let eventObj = getValue(eventName, this);
        let prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = false;
        if (eventArgs) {
            eventArgs.name = eventName;
        }
        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }
        let localEventObj = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }
        this.isProtectedOnChange = prevDetection;
        /* istanbul ignore else  */
        if (success) {
            this.preventChange = this.isPreventChange;
            success.call(this, eventArgs);
        }
        this.isPreventChange = false;
    }
}

/**
 * Angular Form Base Module
 */
class FormBase {
    propagateChange(_) { return; }
    propagateTouch() { return; }
    localChange(e) {
        //tslint:disable-next-line
        let value = (e.checked === undefined ? e.value : e.checked);
        this.objCheck = isObject(value);
        if (this.isUpdated === true) {
            this.angularValue = this.oldValue;
        }
        if (this.objCheck === true) {
            this.duplicateValue = JSON.stringify(value);
            this.duplicateAngularValue = JSON.stringify(this.angularValue);
            if (this.duplicateValue !== this.duplicateAngularValue && this.propagateChange !== undefined && value !== undefined) {
                // Update angular from our control
                this.propagateChange(value);
                this.angularValue = value;
            }
        }
        else {
            if (value !== this.angularValue && this.propagateChange !== undefined && value !== undefined) {
                // While reset form using reset() method ng-dirty not get updated, so while value is empty just update angularValue only
                if (value !== '' && value !== null) {
                    // Update angular from our control
                    this.propagateChange(value);
                    this.angularValue = value;
                }
                else {
                    //tslint:disable-next-line
                    let optionalValue = value;
                    this.propagateChange(optionalValue);
                    this.angularValue = value;
                }
            }
        }
    }
    registerOnChange(registerFunction) {
        this.propagateChange = registerFunction;
    }
    registerOnTouched(registerFunction) {
        this.propagateTouch = registerFunction;
    }
    twoWaySetter(newVal, prop) {
        let oldVal = this.oldValue || getValue(prop, this.properties);
        let ele = this.inputElement || this.element;
        if (ele && oldVal === newVal &&
            (ele.value === undefined || ele.value === '')) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    }
    // tslint:disable-next-line:no-any
    ngAfterViewInit(isTempRef) {
        // tslint:disable-next-line:no-any
        let tempFormAfterViewThis = isTempRef || this;
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        // Removed setTimeout, Because we have called markForCheck() method in Angular Template Compiler
        // setTimeout(() => {
        /* istanbul ignore else */
        if (typeof window !== 'undefined') {
            tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
            let ele = tempFormAfterViewThis.inputElement || tempFormAfterViewThis.element;
            ele.addEventListener('focus', tempFormAfterViewThis.ngOnFocus.bind(tempFormAfterViewThis));
            ele.addEventListener('blur', tempFormAfterViewThis.ngOnBlur.bind(tempFormAfterViewThis));
        }
        this.isFormInit = false;
        // });
    }
    setDisabledState(disabled) {
        this.enabled = !disabled;
        this.disabled = disabled;
    }
    writeValue(value) {
        let regExp = /ejs-radiobutton/g;
        //update control value from angular
        if (this.checked === undefined) {
            this.value = value;
        }
        else {
            // To resolve boolean type formControl value is not working for radio button control.
            /* istanbul ignore next */
            if (this.ngEle) {
                if (typeof value === 'boolean') {
                    if (regExp.test(this.ngEle.nativeElement.outerHTML)) {
                        this.checked = value === this.value;
                    }
                    else {
                        this.checked = value;
                    }
                }
                else {
                    this.checked = value === this.value;
                }
            }
        }
        this.angularValue = value;
        this.isUpdated = true;
        // When binding Html textbox value to syncfusion textbox, change event triggered dynamically.
        // To prevent change event, trigger change in component side based on `preventChange` value
        this.preventChange = this.isFormInit ? false : true;
        if (value === null) {
            return;
        }
    }
    ngOnFocus(e) {
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.focus.emit(e);
        }
    }
    ngOnBlur(e) {
        this.propagateTouch();
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.blur.emit(e);
        }
    }
}
FormBase.isFormBase = true;

let stringCompiler = getTemplateEngine();
/**
 * Angular Template Compiler
 */
function compile(templateEle, helper) {
    if (typeof templateEle === 'string') {
        return stringCompiler(templateEle, helper);
    }
    else {
        let contRef = templateEle.elementRef.nativeElement._viewContainerRef;
        let pName = templateEle.elementRef.nativeElement.propName;
        //tslint:disable-next-line        
        return (data, component, propName) => {
            let context = { $implicit: data };
            /* istanbul ignore next */
            let conRef = contRef ? contRef : component.viewContainerRef;
            let viewRef = conRef.createEmbeddedView(templateEle, context);
            viewRef.markForCheck();
            viewRef.detectChanges();
            /* istanbul ignore next */
            let viewCollection = (component && component.registeredTemplate) ?
                component.registeredTemplate : getValue('currentInstance.registeredTemplate', conRef);
            propName = (propName && component.registeredTemplate) ? propName : pName;
            if (typeof viewCollection[propName] === 'undefined') {
                viewCollection[propName] = [];
            }
            viewCollection[propName].push(viewRef);
            return viewRef.rootNodes;
        };
    }
}
/**
 * Property decorator for angular.
 */
function Template(defaultValue) {
    return (target, key) => {
        let propertyDescriptor = {
            set: setter(key),
            get: getter(key, defaultValue),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
    };
}
function setter(key) {
    return function (val) {
        if (val === undefined) {
            return;
        }
        setValue(key + 'Ref', val, this);
        if (typeof val !== 'string') {
            val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
            val.elementRef.nativeElement.propName = key;
        }
        else {
            if (this.saveChanges) {
                this.saveChanges(key, val, undefined);
                this.dataBind();
            }
        }
    };
}
function getter(key, defaultValue) {
    return function () {
        /* istanbul ignore next */
        return getValue(key + 'Ref', this) || defaultValue;
    };
}
//tslint:disable-next-line
setTemplateEngine({ compile: compile });

/**
 * Index
 */

export { ComplexBase, ArrayBase, ComponentBase, FormBase, applyMixins, ComponentMixins, registerEvents, clearTemplate, setValue$1 as setValue, compile, Template };
//# sourceMappingURL=ej2-angular-base.es2015.js.map
