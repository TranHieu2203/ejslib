/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
import { createElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import { getTemplateFunction, getElement, getElementOffset, getExtraWidth } from '../utils/helper';
import { getFontStyle, valueToCoefficient } from '../utils/helper';
import { annotationRender } from '../model/constant';
/**
 * Represent the Annotation rendering for gauge
 */
var Annotations = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    function Annotations(gauge) {
        this.gauge = gauge;
    }
    /**
     * To render annotation elements
     */
    Annotations.prototype.renderAnnotationElements = function () {
        var _this = this;
        var secondaryID = this.gauge.element.id + '_Secondary_Element';
        var annotationGroup = createElement('div', { id: this.gauge.element.id + '_AnnotationsGroup' });
        annotationGroup.style.position = 'absolute';
        annotationGroup.style.top = '0px';
        annotationGroup.style.left = '0px';
        this.gauge.annotations.map(function (annotation, index) {
            if (annotation.content !== null) {
                _this.createAnnotationTemplate(annotationGroup, index);
            }
        });
        if (annotationGroup.childElementCount > 0 && !(isNullOrUndefined(getElement(secondaryID)))) {
            getElement(secondaryID).appendChild(annotationGroup);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.gauge.renderReactTemplates();
    };
    /**
     * To create annotation elements
     */
    Annotations.prototype.createAnnotationTemplate = function (element, annotationIndex) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var left;
        var top;
        var templateFn;
        var renderAnnotation = false;
        var templateElement;
        var axis;
        var axisIndex;
        var axisValue;
        var id = this.gauge.element.id + '_Annotation_' + annotationIndex;
        var annotation = this.gauge.annotations[annotationIndex];
        var childElement = createElement('div', {
            id: this.gauge.element.id + '_Annotation_' + annotationIndex, styles: 'position: absolute; z-index:' + annotation.zIndex + ';'
        });
        var argsData = {
            cancel: false, name: annotationRender, content: annotation.content,
            annotation: annotation, textStyle: annotation.font
        };
        argsData.textStyle.color = annotation.font.color || this.gauge.themeStyle.labelColor;
        this.gauge.trigger(annotationRender, argsData, function (observerArgs) {
            if (!argsData.cancel) {
                templateFn = getTemplateFunction(argsData.content, _this.gauge);
                if (templateFn && templateFn(_this.gauge, _this.gauge, argsData.content, _this.gauge.element.id + '_ContentTemplate' + annotationIndex).length) {
                    templateElement = Array.prototype.slice.call(templateFn(_this.gauge, _this.gauge, argsData.content, _this.gauge.element.id + '_ContentTemplate' + annotationIndex));
                    var length_1 = templateElement.length;
                    for (var i = 0; i < length_1; i++) {
                        childElement.appendChild(templateElement[i]);
                    }
                }
                else {
                    childElement.appendChild(createElement('div', {
                        innerHTML: argsData.content,
                        styles: getFontStyle(argsData.textStyle)
                    }));
                }
                var offset = getElementOffset(childElement.cloneNode(true), _this.gauge.element);
                if (!(isNullOrUndefined(annotation.axisValue))) {
                    axisIndex = isNullOrUndefined(annotation.axisIndex) ? 0 : annotation.axisIndex;
                    axis = _this.gauge.axes[axisIndex];
                    var range = axis.visibleRange;
                    renderAnnotation = (annotation.axisValue >= range.min && annotation.axisValue <= range.max) ? true : false;
                    var line = axis.lineBounds;
                    var extraWidth = getExtraWidth(_this.gauge.element);
                    var axisCollection = getElement(_this.gauge.element.id + '_Axis_Collections');
                    if (!isNullOrUndefined(axisCollection)) {
                        var transformValue = axisCollection.getAttribute('transform').split("(")[1].split(")")[0];
                        var leftTransformValue = parseInt(transformValue.split(",")[0]);
                        var topTransformValue = parseInt(transformValue.split(",")[1]);
                        if (_this.gauge.orientation === 'Vertical') {
                            left = line.x + parseFloat(annotation.x.toString()) + leftTransformValue - extraWidth;
                            top = ((valueToCoefficient(parseFloat(annotation.axisValue.toString()), axis, _this.gauge.orientation, range) * line.height) + line.y);
                            top += parseFloat(annotation.y.toString());
                        }
                        else {
                            left = ((valueToCoefficient(parseFloat(annotation.axisValue.toString()), axis, _this.gauge.orientation, range) * line.width) + line.x - extraWidth);
                            left += parseFloat(annotation.x.toString());
                            top = line.y + parseFloat(annotation.y.toString()) + topTransformValue;
                        }
                        left -= (offset.width / 2);
                        top -= (offset.height / 2);
                    }
                }
                else {
                    var elementRect = _this.gauge.element.getBoundingClientRect();
                    var bounds = _this.gauge.svgObject.getBoundingClientRect();
                    renderAnnotation = true;
                    left = Math.abs(bounds.left - elementRect.left);
                    top = Math.abs(bounds.top - elementRect.top);
                    left = (annotation.horizontalAlignment === 'None') ? (left + annotation.x) : left;
                    top = (annotation.verticalAlignment === 'None') ? top + annotation.y : top;
                    switch (annotation.verticalAlignment) {
                        case 'Near':
                            top = top + annotation.y;
                            break;
                        case 'Center':
                            top = top + annotation.y + ((bounds.height / 2) - (offset.height / 2));
                            break;
                        case 'Far':
                            top = (top + bounds.height) + annotation.y - offset.height;
                            break;
                    }
                    switch (annotation.horizontalAlignment) {
                        case 'Near':
                            left = left + annotation.x;
                            break;
                        case 'Center':
                            left = left + annotation.x + ((bounds.width / 2) - (offset.width / 2));
                            break;
                        case 'Far':
                            left = (left + bounds.width) + annotation.x - offset.width;
                            break;
                    }
                }
                childElement.style.left = left + 'px';
                childElement.style.top = top + 'px';
                if (renderAnnotation) {
                    element.appendChild(childElement);
                }
            }
        });
    };
    /*
     * Get module name.
     */
    Annotations.prototype.getModuleName = function () {
        return 'Annotations';
    };
    /**
     * To destroy the annotation.
     *
     * @return {void}
     * @private
     */
    Annotations.prototype.destroy = function (gauge) {
        // Destroy method performed here
    };
    return Annotations;
}());
export { Annotations };
