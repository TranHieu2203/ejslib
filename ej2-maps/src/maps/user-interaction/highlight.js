import { itemHighlight } from '../index';
import { Browser, isNullOrUndefined } from '@syncfusion/ej2-base';
import { getElementsByClassName, getElement, removeClass, createStyle, customizeStyle, getTargetElement } from '../utils/helper';
/**
 * Highlight module class
 */
var Highlight = /** @class */ (function () {
    function Highlight(maps) {
        this.maps = maps;
        this.addEventListener();
    }
    /**
     * To bind events for highlight module
     *
     * @returns {void}
     */
    Highlight.prototype.addEventListener = function () {
        if (this.maps.isDestroyed) {
            return;
        }
        this.maps.on(Browser.touchMoveEvent, this.mouseMove, this);
        this.maps.on(Browser.touchStartEvent, this.mouseMove, this);
    };
    /**
     * To unbind events for highlight module
     *
     * @returns {void}
     */
    Highlight.prototype.removeEventListener = function () {
        if (this.maps.isDestroyed) {
            return;
        }
        this.maps.off(Browser.touchMoveEvent, this.mouseMove);
        this.maps.off(Browser.touchStartEvent, this.mouseMove);
    };
    // eslint-disable-next-line valid-jsdoc
    /**
     * Public method for highlight module
     */
    Highlight.prototype.addHighlight = function (layerIndex, name, enable) {
        var targetEle = getTargetElement(layerIndex, name, enable, this.maps);
        if (enable) {
            this.mapHighlight(targetEle, null, null);
        }
        else {
            removeClass(targetEle);
        }
    };
    Highlight.prototype.mouseMove = function (e) {
        var targetEle = e.target;
        var layerIndex;
        var isTouch = e.pointerType === 'touch' || e.pointerType === '2' || (e.type.indexOf('touch') > -1);
        if ((targetEle.id.indexOf('LayerIndex') !== -1 || targetEle.id.indexOf('NavigationIndex') > -1) &&
            targetEle.getAttribute('class') !== 'ShapeselectionMapStyle' && !isTouch &&
            targetEle.getAttribute('class') !== 'MarkerselectionMapStyle' &&
            targetEle.getAttribute('class') !== 'BubbleselectionMapStyle' &&
            targetEle.getAttribute('class') !== 'navigationlineselectionMapStyle' &&
            targetEle.getAttribute('class') !== 'LineselectionMapStyle') {
            layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var shapeData = void 0;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var data = void 0;
            var shapeIn = void 0;
            var dataIndex = void 0;
            if (targetEle.id.indexOf('shapeIndex') > -1) {
                shapeIn = parseInt(targetEle.id.split('_shapeIndex_')[1].split('_')[0], 10);
                shapeData = this.maps.layers[layerIndex].shapeData['features'] &&
                    !isNullOrUndefined(this.maps.layersCollection[layerIndex].layerData[shapeIn]) ?
                    this.maps.layersCollection[layerIndex].layerData[shapeIn]['property'] : null;
                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                data = isNullOrUndefined(dataIndex) ? null : this.maps.layers[layerIndex].dataSource[dataIndex];
                this.highlightSettings = this.maps.layers[layerIndex].highlightSettings;
            }
            else if (targetEle.id.indexOf('BubbleIndex') > -1) {
                var bubble = parseInt(targetEle.id.split('_BubbleIndex_')[1].split('_')[0], 10);
                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                data = this.maps.layers[layerIndex].bubbleSettings[bubble].dataSource[dataIndex];
                this.highlightSettings = this.maps.layers[layerIndex].bubbleSettings[bubble].highlightSettings;
            }
            else if (targetEle.id.indexOf('MarkerIndex') > -1) {
                var marker = parseInt(targetEle.id.split('_MarkerIndex_')[1].split('_')[0], 10);
                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                data = this.maps.layers[layerIndex].markerSettings[marker].dataSource[dataIndex];
                this.highlightSettings = this.maps.layers[layerIndex].markerSettings[marker].highlightSettings;
            }
            else {
                var index = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
                shapeData = null;
                data = {
                    latitude: this.maps.layers[layerIndex].navigationLineSettings[index].latitude,
                    longitude: this.maps.layers[layerIndex].navigationLineSettings[index].longitude
                };
                this.highlightSettings = this.maps.layers[layerIndex].navigationLineSettings[index].highlightSettings;
            }
            if (this.highlightSettings.enable) {
                this.handleHighlight(targetEle, layerIndex, data, shapeData);
            }
            else {
                var element = document.getElementsByClassName('highlightMapStyle')[0];
                if (!isNullOrUndefined(element)) {
                    removeClass(element);
                    if (element.id.indexOf('NavigationIndex') > -1) {
                        var index = parseInt(element.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                        var layerIndex_1 = parseInt(element.parentElement.id.split('_LayerIndex_')[1].split('_')[0], 10);
                        element.setAttribute('stroke-width', this.maps.layers[layerIndex_1].navigationLineSettings[index].width.toString());
                        element.setAttribute('stroke', this.maps.layers[layerIndex_1].navigationLineSettings[index].color);
                    }
                }
            }
        }
        else if (getElementsByClassName('highlightMapStyle').length > 0) {
            targetEle = getElementsByClassName('highlightMapStyle')[0];
            if (targetEle.id.indexOf('NavigationIndex') > -1) {
                var index = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                layerIndex = parseInt(targetEle.parentElement.id.split('_LayerIndex_')[1].split('_')[0], 10);
                targetEle.setAttribute('stroke-width', this.maps.layers[layerIndex].navigationLineSettings[index].width.toString());
                targetEle.setAttribute('stroke', this.maps.layers[layerIndex].navigationLineSettings[index].color);
            }
            removeClass(targetEle);
            if (this.maps.legendSettings.visible && this.maps.legendModule) {
                this.maps.legendModule.removeShapeHighlightCollection();
            }
        }
        else if ((targetEle.id.indexOf(this.maps.element.id + '_Legend_Shape_Index') !== -1 ||
            targetEle.id.indexOf(this.maps.element.id + '_Legend_Index') !== -1) && this.maps.legendModule &&
            this.maps.legendSettings.visible && targetEle.id.indexOf('_Text') === -1) {
            this.maps.legendModule.legendHighLightAndSelection(targetEle, 'highlight');
        }
        else {
            if (this.maps.legendSettings.visible && this.maps.legendModule) {
                this.maps.legendModule.removeLegendHighlightCollection();
            }
        }
    };
    /**
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Highlight.prototype.handleHighlight = function (targetElement, layerIndex, data, shapeData) {
        if (this.maps.legendSettings.visible && targetElement.id.indexOf('_MarkerIndex_') === -1 && this.maps.legendModule
            && this.maps.legendSettings.type === 'Layers') {
            this.maps.legendModule.shapeHighLightAndSelection(targetElement, data, this.highlightSettings, 'highlight', layerIndex);
        }
        var selectHighLight = targetElement.id.indexOf('shapeIndex') > -1 && (this.maps.legendSettings.visible && this.maps.legendModule) ?
            this.maps.legendModule.shapeToggled : true;
        if (selectHighLight) {
            this.mapHighlight(targetElement, shapeData, data);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Highlight.prototype.mapHighlight = function (targetEle, shapeData, data) {
        var _this = this;
        var layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
        var isMarkerSelect = false;
        if (targetEle.id.indexOf('MarkerIndex') > -1) {
            var marker = parseInt(targetEle.id.split('_MarkerIndex_')[1].split('_')[0], 10);
            isMarkerSelect = this.maps.layers[layerIndex].markerSettings[marker].highlightSettings.enable;
        }
        var border = {
            color: (targetEle.parentElement.id.indexOf('LineString') === -1) ? this.highlightSettings.border.color : (this.highlightSettings.fill || this.highlightSettings.border.color),
            width: (targetEle.parentElement.id.indexOf('LineString') === -1) ? (this.highlightSettings.border.width / (isMarkerSelect ? 1 : this.maps.scale)) : (this.highlightSettings.border.width / this.maps.scale),
            opacity: this.highlightSettings.border.opacity
        };
        var eventArgs = {
            opacity: this.highlightSettings.opacity,
            fill: (targetEle.parentElement.id.indexOf('LineString') === -1) ? (targetEle.id.indexOf('NavigationIndex') === -1 ? !isNullOrUndefined(this.highlightSettings.fill)
                ? this.highlightSettings.fill : targetEle.getAttribute('fill') : 'none') : 'transparent',
            border: border,
            name: itemHighlight,
            target: targetEle.id,
            cancel: false,
            shapeData: shapeData,
            data: data,
            maps: this.maps
        };
        this.maps.trigger(itemHighlight, eventArgs, function () {
            eventArgs.border.opacity = isNullOrUndefined(_this.highlightSettings.border.opacity) ? _this.highlightSettings.opacity : _this.highlightSettings.border.opacity;
            _this.highlightMap(targetEle, eventArgs);
        });
    };
    Highlight.prototype.highlightMap = function (targetEle, eventArgs) {
        var parentElement;
        var children;
        if (targetEle.getAttribute('class') === 'highlightMapStyle') {
            return;
        }
        else {
            if (getElementsByClassName('highlightMapStyle').length > 0) {
                var elem = getElementsByClassName('highlightMapStyle')[0];
                removeClass(elem);
                if (elem.id.indexOf('NavigationIndex') > -1) {
                    var index = parseInt(elem.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                    var layerIndex = parseInt(elem.parentElement.id.split('_LayerIndex_')[1].split('_')[0], 10);
                    elem.setAttribute('stroke-width', this.maps.layers[layerIndex].navigationLineSettings[index].width.toString());
                    elem.setAttribute('stroke', this.maps.layers[layerIndex].navigationLineSettings[index].color);
                }
            }
            if (!getElement('highlightMap')) {
                document.body.appendChild(createStyle('highlightMap', 'highlightMapStyle', eventArgs));
            }
            else {
                customizeStyle('highlightMap', 'highlightMapStyle', eventArgs);
            }
            targetEle.setAttribute('class', 'highlightMapStyle');
        }
    };
    /**
     * Get module name.
     *
     * @returns {string} - Specifies the module name
     */
    Highlight.prototype.getModuleName = function () {
        return 'Highlight';
    };
    /**
     * To destroy the highlight.
     *
     * @param {Maps} maps - Specifies the maps instance
     * @returns {void}
     * @private
     */
    Highlight.prototype.destroy = function (maps) {
        /**
         * Destroy method performed here
         */
        this.removeEventListener();
    };
    return Highlight;
}());
export { Highlight };
