import { Point, getElementByID, PathOption, Rect, convertGeoToPoint, CircleOption, convertTileLatLongToPoint } from '../utils/helper';
import { RectOption, createTooltip, calculateScale, getTouchCenter, getTouches, targetTouches } from '../utils/helper';
import { MapLocation, zoomAnimate, smoothTranslate, measureText, textTrim, clusterTemplate, marker } from '../utils/helper';
import { markerTemplate, removeElement, getElement, clusterSeparate, markerColorChoose } from '../utils/helper';
import { markerShapeChoose } from '../utils/helper';
import { isNullOrUndefined, EventHandler, Browser, remove, createElement } from '@syncfusion/ej2-base';
import { changeBorderWidth, markerRendering } from '../index';
import { pan } from '../model/constants';
import { getValueFromObject } from '../utils/helper';
/**
 * Zoom module used to process the zoom for maps
 */
var Zoom = /** @class */ (function () {
    function Zoom(maps) {
        this.isPanning = false;
        this.mouseEnter = false;
        this.isTouch = false;
        this.rectZoomingStart = false;
        this.pinchRect = new Rect(0, 0, 0, 0);
        this.browserName = Browser.info.name;
        // eslint-disable-next-line @typescript-eslint/ban-types
        this.isPointer = Browser.isPointer;
        this.handled = false;
        this.pinchFactor = 1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.startTouches = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.intersect = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.mouseDownLatLong = { x: 0, y: 0 };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.mouseMoveLatLong = { x: 0, y: 0 };
        /**
         * @private
         */
        this.isSingleClick = false;
        this.maps = maps;
        this.wheelEvent = this.browserName === 'mozilla' ? (this.isPointer ? 'mousewheel' : 'DOMMouseScroll') : 'mousewheel';
        this.cancelEvent = this.isPointer ? 'pointerleave' : 'mouseleave';
        this.selectionColor = this.maps.zoomSettings.selectionColor;
        this.fillColor = this.maps.zoomSettings.color;
        this.addEventListener();
        this.groupElements = [];
    }
    /**
     * To perform zooming for maps
     *
     * @param {Point} position - Specifies the position.
     * @param {number} newZoomFactor - Specifies the zoom factor.
     * @param {string} type - Specifies the type.
     * @returns {void}
     */
    Zoom.prototype.performZooming = function (position, newZoomFactor, type) {
        var _this = this;
        var map = this.maps;
        map.previousProjection = map.projectionType;
        map.defaultState = false;
        map.initialCheck = false;
        map.markerZoomedState = false;
        map.zoomPersistence = map.enablePersistence;
        var prevLevel = map.tileZoomLevel;
        var scale = map.previousScale = map.scale;
        var maxZoom = map.zoomSettings.maxZoom;
        var minZoom = map.zoomSettings.minZoom;
        newZoomFactor = (minZoom > newZoomFactor && type === 'ZoomIn') ? minZoom + 1 : newZoomFactor;
        var prevTilePoint = map.tileTranslatePoint;
        if ((!map.isTileMap) && ((type === 'ZoomIn' ? newZoomFactor >= minZoom && newZoomFactor <= maxZoom : newZoomFactor >= minZoom)
            || map.isReset)) {
            var availSize = map.mapAreaRect;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var minBounds = map.baseMapRectBounds['min'];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var maxBounds = map.baseMapRectBounds['max'];
            var mapTotalWidth = Math.abs(minBounds['x'] - maxBounds['x']);
            var mapTotalHeight = Math.abs(minBounds['y'] - maxBounds['y']);
            var translatePointX = void 0;
            var translatePointY = void 0;
            if (newZoomFactor < 1.2 && map.projectionType !== 'Eckert5') {
                if (mapTotalWidth === 0 || mapTotalHeight === 0 || mapTotalWidth === mapTotalHeight) {
                    mapTotalWidth = availSize.width / 2;
                    mapTotalHeight = availSize.height;
                }
                newZoomFactor = parseFloat(Math.min(availSize.width / mapTotalWidth, availSize.height / mapTotalHeight).toFixed(2));
                map.translatePoint = this.calculateInitalZoomTranslatePoint(newZoomFactor, mapTotalWidth, mapTotalHeight, availSize, minBounds, map);
            }
            else {
                var point = map.translatePoint;
                translatePointX = point.x - (((availSize.width / scale) - (availSize.width / newZoomFactor)) / (availSize.width / position.x));
                translatePointY = point.y - (((availSize.height / scale) - (availSize.height / newZoomFactor)) / (availSize.height / position.y));
                var currentHeight = Math.abs(map.baseMapRectBounds['max']['y'] - map.baseMapRectBounds['min']['y']) * newZoomFactor;
                translatePointX = (currentHeight < map.mapAreaRect.height) ? (availSize.x + ((-(minBounds['x'])) + ((availSize.width / 2) - (mapTotalWidth / 2)))) : translatePointX;
                translatePointY = (currentHeight < map.mapAreaRect.height) ? (availSize.y + ((-(minBounds['y'])) + ((availSize.height / 2) - (mapTotalHeight / 2)))) : translatePointY;
                map.translatePoint = new Point(translatePointX, translatePointY);
            }
            map.scale = newZoomFactor;
            if (this.triggerZoomEvent(prevTilePoint, prevLevel, type)) {
                map.translatePoint = map.previousPoint;
                map.scale = map.mapScaleValue = map.previousScale;
            }
            else {
                this.applyTransform();
            }
        }
        else if ((map.isTileMap) && (newZoomFactor >= minZoom && newZoomFactor <= maxZoom)) {
            this.getTileTranslatePosition(prevLevel, newZoomFactor, position, type);
            map.tileZoomLevel = newZoomFactor;
            map.zoomSettings.zoomFactor = newZoomFactor;
            map.scale = Math.pow(2, newZoomFactor - 1);
            if (type === 'ZoomOut' && map.zoomSettings.resetToInitial && map.applyZoomReset && newZoomFactor <= map.initialZoomLevel) {
                map.initialCheck = true;
                map.zoomPersistence = false;
                map.tileTranslatePoint.x = map.initialTileTranslate.x;
                map.tileTranslatePoint.y = map.initialTileTranslate.y;
                newZoomFactor = map.tileZoomLevel = map.mapScaleValue = map.initialZoomLevel;
                map.scale = Math.pow(2, newZoomFactor - 1);
            }
            map.translatePoint.y = (map.tileTranslatePoint.y - (0.01 * map.mapScaleValue)) / map.scale;
            map.translatePoint.x = (map.tileTranslatePoint.x - (0.01 * map.mapScaleValue)) / map.scale;
            if (this.triggerZoomEvent(prevTilePoint, prevLevel, type)) {
                map.translatePoint = map.tileTranslatePoint = new Point(0, 0);
                map.scale = map.previousScale;
                map.tileZoomLevel = prevLevel;
                map.zoomSettings.zoomFactor = map.previousScale;
            }
            else {
                if (document.querySelector('.GroupElement')) {
                    document.querySelector('.GroupElement').style.display = 'none';
                }
                if (document.getElementById(this.maps.element.id + '_LayerIndex_1')) {
                    document.getElementById(this.maps.element.id + '_LayerIndex_1').style.display = 'none';
                }
                this.markerLineAnimation(map);
                map.mapLayerPanel.generateTiles(newZoomFactor, map.tileTranslatePoint, type + 'wheel', null, position);
                var element1 = document.getElementById(this.maps.element.id + '_tiles');
                var animationDuration = this.maps.layersCollection[0].animationDuration;
                setTimeout(function () {
                    // if (type === 'ZoomOut') {
                    //     element1.removeChild(element1.children[element1.childElementCount - 1]);
                    //     if (element1.childElementCount) {
                    //         element1.removeChild(element1.children[element1.childElementCount - 1]);
                    //     } else {
                    //         element1 = element1;
                    //     }
                    // }
                    _this.applyTransform();
                    if (document.getElementById(_this.maps.element.id + '_LayerIndex_1')) {
                        document.getElementById(_this.maps.element.id + '_LayerIndex_1').style.display = 'block';
                    }
                }, animationDuration);
            }
        }
        this.maps.zoomNotApplied = false;
    };
    Zoom.prototype.calculateInitalZoomTranslatePoint = function (newZoomFactor, mapTotalWidth, mapTotalHeight, availSize, minBounds, map) {
        mapTotalWidth *= newZoomFactor;
        mapTotalHeight *= newZoomFactor;
        var widthDiff = minBounds['x'] !== 0 && map.translateType === 'layers' ? map.availableSize.width - availSize.width : 0;
        var translatePointX = availSize.x + ((-(minBounds['x'])) + ((availSize.width / 2) - (mapTotalWidth / 2))) - widthDiff;
        var translatePointY = availSize.y + ((-(minBounds['y'])) + ((availSize.height / 2) - (mapTotalHeight / 2)));
        return new Point(translatePointX, translatePointY);
    };
    Zoom.prototype.triggerZoomEvent = function (prevTilePoint, prevLevel, type) {
        var map = this.maps;
        var zoomArgs;
        if (!map.isTileMap) {
            zoomArgs = {
                cancel: false, name: 'zoom', type: type, maps: map,
                tileTranslatePoint: {}, translatePoint: { previous: map.previousPoint, current: map.translatePoint },
                tileZoomLevel: {}, scale: { previous: map.previousScale, current: map.scale }
            };
        }
        else {
            zoomArgs = {
                cancel: false, name: 'zoom', type: type, maps: map,
                tileTranslatePoint: { previous: prevTilePoint, current: map.tileTranslatePoint }, translatePoint: { previous: map.previousPoint, current: map.translatePoint },
                tileZoomLevel: { previous: prevLevel, current: map.tileZoomLevel }, scale: { previous: map.previousScale, current: map.scale }
            };
        }
        map.trigger('zoom', zoomArgs);
        return zoomArgs.cancel;
    };
    Zoom.prototype.getTileTranslatePosition = function (prevLevel, currentLevel, position, type) {
        var map = this.maps;
        var tileDefaultSize = 256;
        var padding = type === 'ZoomOut' ? 10 : (type === 'Reset' && currentLevel > 1) ? 0 : 10;
        var bounds = map.availableSize;
        var prevSize = Math.pow(2, prevLevel) * 256;
        var totalSize = Math.pow(2, currentLevel) * 256;
        var x = ((position.x - map.tileTranslatePoint.x) / prevSize) * 100;
        var y = ((position.y - map.tileTranslatePoint.y) / prevSize) * 100;
        map.tileTranslatePoint.x = (currentLevel === 1) ? (bounds.width / 2) - ((tileDefaultSize * 2) / 2) :
            position.x - ((x * totalSize) / 100);
        map.tileTranslatePoint.y = (currentLevel === 1) ? ((bounds.height / 2) - ((tileDefaultSize * 2) / 2) + (padding * 2)) :
            position.y - ((y * totalSize) / 100);
    };
    Zoom.prototype.performRectZooming = function () {
        this.isDragZoom = true;
        var map = this.maps;
        var size = map.availableSize;
        map.previousProjection = map.projectionType;
        var prevLevel = map.tileZoomLevel;
        var prevTilePoint = map.tileTranslatePoint;
        var zoomRect = this.zoomingRect;
        var maxZoom = map.zoomSettings.maxZoom;
        var minZoom = map.zoomSettings.minZoom;
        var isZoomCancelled;
        if (zoomRect.height > 0 && zoomRect.width > 0) {
            var x = this.zoomingRect.x + (this.zoomingRect.width / 2);
            var y = this.zoomingRect.y + (this.zoomingRect.height / 2);
            var zoomCalculationFactor = void 0;
            if (!map.isTileMap) {
                var scale = map.previousScale = map.scale;
                zoomCalculationFactor = scale + Math.round((((size.width / zoomRect.width) + (size.height / zoomRect.height)) / 2));
                var translatePoint = map.previousPoint = map.translatePoint;
                var translatePointX = translatePoint.x - (((size.width / scale) - (size.width / zoomCalculationFactor)) / (size.width / x));
                var translatePointY = translatePoint.y - (((size.height / scale) - (size.height / zoomCalculationFactor)) / (size.height / y));
                map.translatePoint = new Point(translatePointX, translatePointY);
                map.scale = zoomCalculationFactor;
                isZoomCancelled = this.triggerZoomEvent(prevTilePoint, prevLevel, '');
                if (isZoomCancelled) {
                    map.translatePoint = map.previousPoint;
                    map.scale = map.previousScale;
                }
            }
            else {
                zoomCalculationFactor = prevLevel + (Math.round(prevLevel + (((size.width / zoomRect.width) + (size.height / zoomRect.height)) / 2)));
                zoomCalculationFactor = (zoomCalculationFactor >= minZoom && zoomCalculationFactor <= maxZoom) ? zoomCalculationFactor : maxZoom;
                map.zoomSettings.zoomFactor = zoomCalculationFactor;
                this.getTileTranslatePosition(prevLevel, zoomCalculationFactor, { x: x, y: y });
                map.tileZoomLevel = zoomCalculationFactor;
                map.translatePoint.x = (map.tileTranslatePoint.x - (0.5 * Math.pow(2, zoomCalculationFactor))) /
                    (Math.pow(2, zoomCalculationFactor));
                map.translatePoint.y = (map.tileTranslatePoint.y - (0.5 * Math.pow(2, zoomCalculationFactor))) /
                    (Math.pow(2, zoomCalculationFactor));
                map.scale = (Math.pow(2, zoomCalculationFactor));
                isZoomCancelled = this.triggerZoomEvent(prevTilePoint, prevLevel, '');
                if (isZoomCancelled) {
                    map.translatePoint = map.tileTranslatePoint = new Point(0, 0);
                    map.scale = map.tileZoomLevel = map.zoomSettings.zoomFactor = prevLevel;
                }
                else {
                    map.mapLayerPanel.generateTiles(zoomCalculationFactor, map.tileTranslatePoint);
                }
            }
            if (!isZoomCancelled) {
                map.mapScaleValue = zoomCalculationFactor;
                this.applyTransform(true);
                this.maps.zoomNotApplied = false;
                this.zoomingRect = null;
            }
        }
    };
    Zoom.prototype.setInteraction = function (newInteraction) {
        this.lastScale = 1;
        this.interaction = newInteraction;
    };
    Zoom.prototype.updateInteraction = function () {
        if (this.fingers === 2) {
            this.setInteraction('zoom');
        }
        else {
            this.setInteraction(null);
        }
    };
    Zoom.prototype.performPinchZooming = function (e) {
        var map = this.maps;
        var prevLevel = map.tileZoomLevel;
        var availSize = map.mapAreaRect;
        map.previousScale = map.scale;
        map.previousPoint = map.translatePoint;
        var prevTilePoint = map.tileTranslatePoint;
        var scale = calculateScale(this.touchStartList, this.touchMoveList);
        var touchCenter = getTouchCenter(getTouches(this.touchMoveList, this.maps));
        var newScale = scale / this.lastScale;
        this.lastScale = scale;
        this.pinchFactor *= newScale;
        this.pinchFactor = Math.min(this.maps.zoomSettings.maxZoom, Math.max(this.pinchFactor, this.maps.zoomSettings.minZoom));
        var zoomCalculationFactor = this.pinchFactor;
        var zoomArgs;
        var isZoomCancelled;
        if (!map.isTileMap) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var minBounds = map.baseMapRectBounds['min'];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var maxBounds = map.baseMapRectBounds['max'];
            var mapTotalHeight = Math.abs(minBounds['y'] - maxBounds['y']);
            var mapTotalWidth = Math.abs(minBounds['x'] - maxBounds['x']);
            var translatePoint = map.translatePoint;
            var translatePointX = void 0;
            var translatePointY = void 0;
            if (zoomCalculationFactor < 1.2 && map.projectionType !== 'Eckert5') {
                if (mapTotalWidth === 0 || mapTotalHeight === 0 || mapTotalWidth === mapTotalHeight) {
                    mapTotalWidth = availSize.width / 2;
                    mapTotalHeight = availSize.height;
                }
                zoomCalculationFactor = parseFloat(Math.min(availSize.width / mapTotalWidth, availSize.height / mapTotalHeight).toFixed(2));
                map.translatePoint = this.calculateInitalZoomTranslatePoint(zoomCalculationFactor, mapTotalWidth, mapTotalHeight, availSize, minBounds, map);
            }
            else {
                var currentHeight = Math.abs(map.baseMapRectBounds['max']['y'] - map.baseMapRectBounds['min']['y']) * zoomCalculationFactor;
                translatePointX = translatePoint.x - (((availSize.width / map.scale) - (availSize.width / zoomCalculationFactor)) / (availSize.width / touchCenter.x));
                translatePointY = translatePoint.y - (((availSize.height / map.scale) - (availSize.height / zoomCalculationFactor)) / (availSize.height / touchCenter.y));
                translatePointX = (currentHeight < map.mapAreaRect.height) ? (availSize.x + ((-(minBounds['x'])) + ((availSize.width / 2) - (mapTotalWidth / 2)))) : translatePointX;
                translatePointY = (currentHeight < map.mapAreaRect.height) ? (availSize.y + ((-(minBounds['y'])) + ((availSize.height / 2) - (mapTotalHeight / 2)))) : translatePointY;
                map.translatePoint = new Point(translatePointX, translatePointY);
            }
            map.scale = zoomCalculationFactor;
            isZoomCancelled = this.triggerZoomEvent(prevTilePoint, prevLevel, '');
            if (isZoomCancelled) {
                map.translatePoint = map.previousPoint;
                map.scale = map.previousScale;
            }
        }
        else {
            var newTileFactor = zoomCalculationFactor;
            this.getTileTranslatePosition(prevLevel, newTileFactor, { x: touchCenter.x, y: touchCenter.y });
            map.tileZoomLevel = newTileFactor;
            map.translatePoint.x = (map.tileTranslatePoint.x - (0.5 * Math.pow(2, newTileFactor))) /
                (Math.pow(2, newTileFactor));
            map.translatePoint.y = (map.tileTranslatePoint.y - (0.5 * Math.pow(2, newTileFactor))) /
                (Math.pow(2, newTileFactor));
            map.scale = (Math.pow(2, newTileFactor));
            isZoomCancelled = this.triggerZoomEvent(prevTilePoint, prevLevel, '');
            if (isZoomCancelled) {
                map.translatePoint = map.tileTranslatePoint = new Point(0, 0);
                map.scale = map.previousScale;
                map.tileZoomLevel = prevLevel;
                map.zoomSettings.zoomFactor = map.previousScale;
            }
            else {
                map.mapLayerPanel.generateTiles(newTileFactor, map.tileTranslatePoint);
            }
        }
        if (!isZoomCancelled) {
            this.applyTransform();
        }
    };
    Zoom.prototype.drawZoomRectangle = function () {
        var map = this.maps;
        var down = this.mouseDownPoints;
        var move = this.mouseMovePoints;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var border = { width: 1, color: '#009900' };
        var width = Math.abs(move.x - down.x);
        var height = Math.abs(move.y - down.y);
        var x = ((move.x > down.x) ? down.x : down.x - width);
        var y = ((move.y > down.y) ? down.y : down.y - height);
        var elementRect = getElementByID(map.element.id).getBoundingClientRect();
        if ((x > map.mapAreaRect.x && x < (map.mapAreaRect.x + map.mapAreaRect.width)) &&
            (y > map.mapAreaRect.y) && (y < map.mapAreaRect.y + map.mapAreaRect.height)) {
            this.zoomingRect = new Rect(x, y, width, height);
            var rectSVGObject = map.renderer.createSvg({
                id: map.element.id + '_Selection_Rect_Zooming',
                width: map.availableSize.width,
                height: map.availableSize.height
            });
            var rectOption = new RectOption(map.element.id + '_ZoomRect', '#d3d3d3', border, 0.5, this.zoomingRect, 0, 0, '', '3');
            rectSVGObject.appendChild(map.renderer.drawRectangle(rectOption));
            getElementByID(map.element.id + '_Secondary_Element').appendChild(rectSVGObject);
        }
    };
    /**
     * To animate the zooming process
     *
     * @param {Element} element - Specifies the element
     * @param {boolean} animate - Specifies the boolean value
     * @param {number} x - Specifies the x value
     * @param {number} y - Specifies the y value
     * @param {number} scale - Specifies the scale value
     * @returns {void}
     */
    Zoom.prototype.animateTransform = function (element, animate, x, y, scale) {
        var duration = this.currentLayer.animationDuration;
        if (!animate || duration === 0 || this.maps.isTileMap) {
            element.setAttribute('transform', 'scale(' + (scale) + ') translate( ' + x + ' ' + y + ' )');
            return;
        }
        if (!this.maps.isTileMap) {
            zoomAnimate(element, 0, duration, new MapLocation(x, y), scale, this.maps.mapAreaRect, this.maps);
        }
    };
    Zoom.prototype.applyTransform = function (animate) {
        var layerIndex;
        this.templateCount = 0;
        var layer;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var zoomshapelocation;
        var i;
        var markerStyle;
        var scale = this.maps.scale;
        var x = this.maps.translatePoint.x;
        var y = this.maps.translatePoint.y;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var collection = [];
        this.maps.zoomShapeCollection = [];
        if (document.getElementById(this.maps.element.id + '_mapsTooltip')) {
            removeElement(this.maps.element.id + '_mapsTooltip');
        }
        if (this.layerCollectionEle) {
            for (var i_1 = 0; i_1 < this.layerCollectionEle.childElementCount; i_1++) {
                var layerElement = this.layerCollectionEle.childNodes[i_1];
                if (layerElement.tagName === 'g') {
                    this.templateCount++;
                    this.index = layerElement.id.indexOf('_LayerIndex_') > -1 && parseFloat(layerElement.id.split('_LayerIndex_')[1].split('_')[0]);
                    this.currentLayer = this.maps.layersCollection[this.index];
                    var factor = this.maps.mapLayerPanel.calculateFactor(this.currentLayer);
                    for (var j = 0; j < layerElement.childElementCount; j++) {
                        var currentEle = layerElement.childNodes[j];
                        if (!(currentEle.id.indexOf('_Markers_Group') > -1) && (!(currentEle.id.indexOf('_bubble_Group') > -1))
                            && (!(currentEle.id.indexOf('_dataLableIndex_Group') > -1))) {
                            if (this.maps.isTileMap && (currentEle.id.indexOf('_line_Group') > -1)) {
                                currentEle.remove();
                                if (layerElement.children.length > 0 && layerElement.children[0]) {
                                    layerElement.insertBefore(this.maps.navigationLineModule.renderNavigation(this.currentLayer, this.maps.tileZoomLevel, this.index), layerElement.children[1]);
                                }
                                else {
                                    layerElement.appendChild(this.maps.navigationLineModule.renderNavigation(this.currentLayer, this.maps.tileZoomLevel, this.index));
                                }
                            }
                            else if (currentEle.id.indexOf('Legend') == -1) {
                                changeBorderWidth(currentEle, this.index, scale, this.maps);
                                this.maps.zoomTranslatePoint = this.maps.translatePoint;
                                this.animateTransform(currentEle, animate, x, y, scale);
                            }
                        }
                        else if (currentEle.id.indexOf('_Markers_Group') > -1) {
                            if (!this.isPanning) {
                                this.markerTranslates(currentEle.childNodes[0], factor, x, y, scale, 'Marker', layerElement, animate);
                            }
                            currentEle = layerElement.childNodes[j];
                            var markerAnimation = void 0;
                            if (!isNullOrUndefined(currentEle) && currentEle.id.indexOf('Markers') !== -1) {
                                for (var k = 0; k < currentEle.childElementCount; k++) {
                                    this.markerTranslate(currentEle.childNodes[k], factor, x, y, scale, 'Marker', animate);
                                    var layerIndex_1 = parseInt(currentEle.childNodes[k]['id'].split('_LayerIndex_')[1].split('_')[0], 10);
                                    var dataIndex = parseInt(currentEle.childNodes[k]['id'].split('_dataIndex_')[1].split('_')[0], 10);
                                    var markerIndex = parseInt(currentEle.childNodes[k]['id'].split('_MarkerIndex_')[1].split('_')[0], 10);
                                    markerAnimation = this.currentLayer.markerSettings[markerIndex].animationDuration > 0;
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    var markerSelectionValues = this.currentLayer.markerSettings[markerIndex].dataSource[dataIndex];
                                    for (var x_1 = 0; x_1 < this.currentLayer.markerSettings[markerIndex].initialMarkerSelection.length; x_1++) {
                                        if (this.currentLayer.markerSettings[markerIndex].initialMarkerSelection[x_1]['latitude'] ===
                                            markerSelectionValues['latitude'] ||
                                            this.currentLayer.markerSettings[markerIndex].initialMarkerSelection[x_1]['longitude'] ===
                                                markerSelectionValues['longitude']) {
                                            this.maps.markerSelection(this.currentLayer.markerSettings[markerIndex].selectionSettings, this.maps, currentEle.children[k], this.currentLayer.markerSettings[markerIndex].dataSource[dataIndex]);
                                        }
                                    }
                                    if ((this.currentLayer.animationDuration > 0 || (this.maps.layersCollection[0].animationDuration > 0 && this.currentLayer.type === 'SubLayer')) && !this.isPanning) {
                                        if (this.maps.isTileMap) {
                                            var groupElement = document.querySelector('.GroupElement');
                                            if (groupElement && !(document.querySelector('.ClusterGroupElement')) && markerAnimation) {
                                                groupElement.style.display = 'none';
                                            }
                                        }
                                        else {
                                            markerStyle = 'visibility:hidden';
                                            currentEle.setAttribute('style', markerStyle);
                                        }
                                    }
                                }
                                if (this.isPanning && this.maps.markerModule.sameMarkerData.length > 0) {
                                    clusterSeparate(this.maps.markerModule.sameMarkerData, this.maps, currentEle, true);
                                }
                                else if (this.maps.markerModule.sameMarkerData.length > 0) {
                                    this.maps.markerModule.sameMarkerData = [];
                                    if (document.getElementById(this.maps.element.id + '_mapsTooltip')) {
                                        removeElement(this.maps.element.id + '_mapsTooltip');
                                    }
                                }
                                if (document.getElementById(this.maps.element.id + '_mapsTooltip') && this.maps.mapsTooltipModule.tooltipTargetID.indexOf('_MarkerIndex_')
                                    && !this.isPanning) {
                                    var mapsTooltip = this.maps.mapsTooltipModule;
                                    var tooltipElement = currentEle.querySelector('#' + mapsTooltip.tooltipTargetID);
                                    if (!isNullOrUndefined(tooltipElement)) {
                                        if (tooltipElement['style']['visibility'] === 'hidden') {
                                            removeElement(this.maps.element.id + '_mapsTooltip');
                                        }
                                        else {
                                            var x_2 = parseFloat(tooltipElement.getAttribute('transform').split('(')[1].split(')')[0].split(' ')[1]);
                                            var y_1 = parseFloat(tooltipElement.getAttribute('transform').split('(')[1].split(')')[0].split(' ')[2]);
                                            if (this.maps.isTileMap) {
                                                x_2 += +getElement(this.maps.element.id + '_tile_parent')['style']['left'].split('px')[0];
                                                y_1 += +getElement(this.maps.element.id + '_tile_parent')['style']['top'].split('px')[0];
                                            }
                                            mapsTooltip.svgTooltip.location.x = x_2;
                                            mapsTooltip.svgTooltip.location.y = y_1;
                                            mapsTooltip.svgTooltip.enableAnimation = false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (currentEle.id.indexOf('_bubble_Group') > -1) {
                            var childElement = void 0;
                            for (var k = 0; k < currentEle.childElementCount; k++) {
                                childElement = currentEle.childNodes[k];
                                var bubbleTransform = childElement.getAttribute('transform');
                                layerIndex = parseFloat(childElement.id.split('_LayerIndex_')[1].split('_')[0]);
                                var bubleIndex = parseFloat(childElement.id.split('_BubbleIndex_')[1].split('_')[0]);
                                var dataIndex = parseFloat(childElement.id.split('_BubbleIndex_')[1].split('_')[2]);
                                for (var l = 0; l < this.maps.bubbleModule.bubbleCollection.length; l++) {
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    var bubbleCollection = this.maps.bubbleModule.bubbleCollection[l];
                                    if (bubbleCollection['LayerIndex'] === layerIndex && bubbleCollection['BubbleIndex'] === bubleIndex &&
                                        bubbleCollection['DataIndex'] === dataIndex) {
                                        var centerX = bubbleCollection['center']['x'];
                                        var centerY = bubbleCollection['center']['y'];
                                        var currentX = ((centerX + x) * scale);
                                        var currentY = ((centerY + y) * scale);
                                        var duration = this.currentLayer.animationDuration;
                                        if (!animate || duration === 0) {
                                            childElement.setAttribute('transform', 'translate( ' + currentX + ' ' + currentY + ' )');
                                        }
                                        else {
                                            smoothTranslate(childElement, 0, duration, new MapLocation(currentX, currentY));
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        else if (currentEle.id.indexOf('_dataLableIndex_Group') > -1 && !isNullOrUndefined(this.maps.layers[this.index])) {
                            this.intersect = [];
                            this.maps.zoomLabelPositions = [];
                            this.maps.zoomLabelPositions = this.maps.dataLabelModule.dataLabelCollections;
                            var labelAnimate = !this.maps.isTileMap && animate;
                            for (var k = 0; k < currentEle.childElementCount; k++) {
                                if (currentEle.childNodes[k]['id'].indexOf('_LabelIndex_') > -1) {
                                    var labelIndex = parseFloat(currentEle.childNodes[k]['id'].split('_LabelIndex_')[1].split('_')[0]);
                                    this.zoomshapewidth = currentEle.childNodes[k].getBoundingClientRect();
                                    this.maps.zoomShapeCollection.push(this.zoomshapewidth);
                                    this.dataLabelTranslate(currentEle.childNodes[k], factor, x, y, scale, 'DataLabel', labelAnimate);
                                    var dataLabel = this.maps.layers[this.index].dataLabelSettings;
                                    var border = dataLabel.border;
                                    if (k > 0 && border['width'] > 1) {
                                        if (currentEle.childNodes[k - 1]['id'].indexOf('_rectIndex_') > -1) {
                                            var labelX = ((this.maps.zoomLabelPositions[labelIndex]['location']['x'] + x) * scale);
                                            var labelY = ((this.maps.zoomLabelPositions[labelIndex]['location']['y'] + y) * scale);
                                            var zoomtext = currentEle.childNodes[k]['innerHTML'];
                                            var style = this.maps.layers[this.index].dataLabelSettings.textStyle;
                                            var zoomtextSize = measureText(zoomtext, style);
                                            var padding = 5;
                                            var rectElement = currentEle.childNodes[k - 1];
                                            var rectX = labelX - zoomtextSize['width'] / 2;
                                            var rectY = labelY - zoomtextSize['height'] / 2 - padding;
                                            rectElement['setAttribute']('x', rectX);
                                            rectElement['setAttribute']('y', rectY);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.maps.arrangeTemplate();
            }
            if (!isNullOrUndefined(this.currentLayer)) {
                if (!animate || this.currentLayer.animationDuration === 0 || this.maps.isTileMap) {
                    this.processTemplate(x, y, scale, this.maps);
                }
            }
        }
    };
    Zoom.prototype.markerTranslates = function (element, factor, x, y, scale, type, layerElement, animate) {
        var _this = this;
        if (animate === void 0) { animate = false; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var templateFn;
        var nullCount = 0;
        var markerCounts = 0;
        var markerTemplateCounts = 0;
        var layerIndex = parseInt((element ? element : layerElement).id.split('_LayerIndex_')[1].split('_')[0], 10);
        var markerSVGObject = this.maps.renderer.createGroup({
            id: this.maps.element.id + '_Markers_Group',
            class: 'GroupElement',
            style: 'pointer-events: auto;'
        });
        if (document.getElementById(markerSVGObject.id)) {
            removeElement(markerSVGObject.id);
        }
        var mapsAreaRect = this.maps.mapAreaRect;
        var markerTemplateElements = createElement('div', {
            id: this.maps.element.id + '_LayerIndex_' + layerIndex + '_Markers_Template_Group',
            className: 'template',
            styles: 'overflow: hidden; position: absolute;pointer-events: none;' +
                'top:' + mapsAreaRect.y + 'px;' +
                'left:' + mapsAreaRect.x + 'px;' +
                'height:' + mapsAreaRect.height + 'px;' +
                'width:' + mapsAreaRect.width + 'px;'
        });
        if (document.getElementById(markerTemplateElements.id)) {
            removeElement(markerTemplateElements.id);
        }
        var currentLayers = this.maps.layersCollection[layerIndex];
        currentLayers.markerSettings.map(function (markerSettings, markerIndex) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var markerDatas = markerSettings.dataSource;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Array.prototype.forEach.call(markerDatas, function (data, dataIndex) {
                _this.maps.markerNullCount = markerIndex >= 0 && dataIndex === 0 ? 0 : _this.maps.markerNullCount;
                var eventArgs = {
                    template: markerSettings.template, data: data, maps: _this.maps, marker: markerSettings,
                    cancel: false, name: markerRendering, fill: markerSettings.fill, colorValuePath: markerSettings.colorValuePath,
                    shapeValuePath: markerSettings.shapeValuePath, height: markerSettings.height,
                    width: markerSettings.width, imageUrl: markerSettings.imageUrl, imageUrlValuePath: markerSettings.imageUrlValuePath, shape: markerSettings.shape,
                    border: markerSettings.border
                };
                eventArgs = markerShapeChoose(eventArgs, data);
                eventArgs = markerColorChoose(eventArgs, data);
                _this.maps.trigger('markerRendering', eventArgs, function (MarkerArgs) {
                    if (markerSettings.shapeValuePath !== eventArgs.shapeValuePath) {
                        eventArgs = markerShapeChoose(eventArgs, data);
                    }
                    if (markerSettings.colorValuePath !== eventArgs.colorValuePath) {
                        eventArgs = markerColorChoose(eventArgs, data);
                    }
                    var lati = (!isNullOrUndefined(markerSettings.latitudeValuePath)) ?
                        Number(getValueFromObject(data, markerSettings.latitudeValuePath)) : !isNullOrUndefined(data['latitude']) ?
                        parseFloat(data['latitude']) : !isNullOrUndefined(data['Latitude']) ? data['Latitude'] : null;
                    var long = (!isNullOrUndefined(markerSettings.longitudeValuePath)) ?
                        Number(getValueFromObject(data, markerSettings.longitudeValuePath)) : !isNullOrUndefined(data['longitude']) ?
                        parseFloat(data['longitude']) : !isNullOrUndefined(data['Longitude']) ? data['Longitude'] : null;
                    var offset = markerSettings.offset;
                    if (!eventArgs.cancel && markerSettings.visible && !isNullOrUndefined(long) && !isNullOrUndefined(lati)) {
                        var markerID = _this.maps.element.id + '_LayerIndex_' + layerIndex + '_MarkerIndex_'
                            + markerIndex + '_dataIndex_' + dataIndex;
                        var location_1 = (_this.maps.isTileMap) ? convertTileLatLongToPoint(new MapLocation(long, lati), _this.maps.tileZoomLevel, _this.maps.tileTranslatePoint, true) : convertGeoToPoint(lati, long, factor, currentLayers, _this.maps);
                        var animate_1 = currentLayers.animationDuration !== 0 || isNullOrUndefined(_this.maps.zoomModule);
                        var transPoint = { x: x, y: y };
                        if (eventArgs.template && (!isNaN(location_1.x) && !isNaN(location_1.y))) {
                            markerTemplateCounts++;
                            markerTemplate(eventArgs, templateFn, markerID, data, markerIndex, markerTemplateElements, location_1, transPoint, scale, offset, _this.maps);
                        }
                        else if (!eventArgs.template && (!isNaN(location_1.x) && !isNaN(location_1.y))) {
                            markerCounts++;
                            marker(eventArgs, markerSettings, markerDatas, dataIndex, location_1, transPoint, markerID, offset, scale, _this.maps, markerSVGObject);
                        }
                    }
                    nullCount += (!isNaN(lati) && !isNaN(long)) ? 0 : 1;
                    markerTemplateCounts += (eventArgs.cancel) ? 1 : 0;
                    markerCounts += (eventArgs.cancel) ? 1 : 0;
                    _this.maps.markerNullCount = (isNullOrUndefined(lati) || isNullOrUndefined(long))
                        ? _this.maps.markerNullCount + 1 : _this.maps.markerNullCount;
                    var markerDataLength = markerDatas.length - _this.maps.markerNullCount;
                    if (markerSVGObject.childElementCount === (markerDataLength - markerTemplateCounts - nullCount) && (type !== 'Template')) {
                        layerElement.appendChild(markerSVGObject);
                        if (currentLayers.markerClusterSettings.allowClustering) {
                            _this.maps.svgObject.appendChild(markerSVGObject);
                            _this.maps.element.appendChild(_this.maps.svgObject);
                            clusterTemplate(currentLayers, markerSVGObject, _this.maps, layerIndex, markerSVGObject, layerElement, true, true);
                        }
                    }
                    if (markerTemplateElements.childElementCount === (markerDataLength - markerCounts - nullCount) && getElementByID(_this.maps.element.id + '_Secondary_Element')) {
                        getElementByID(_this.maps.element.id + '_Secondary_Element').appendChild(markerTemplateElements);
                        if (scale >= 1) {
                            if (currentLayers.markerClusterSettings.allowClustering) {
                                clusterTemplate(currentLayers, markerTemplateElements, _this.maps, layerIndex, markerSVGObject, layerElement, false, true);
                            }
                        }
                    }
                });
            });
        });
    };
    /**
     * To translate the layer template elements
     *
     * @param {number} x - Specifies the x value
     * @param {number} y - Specifies the y value
     * @param {number} scale - Specifies the scale value
     * @param {Maps} maps - Specifies the maps value
     * @returns {void}
     * @private
     */
    Zoom.prototype.processTemplate = function (x, y, scale, maps) {
        for (var i = 0; i < this.templateCount; i++) {
            var factor = maps.mapLayerPanel.calculateFactor(this.currentLayer);
            var markerTemplateElement = getElementByID(maps.element.id + '_LayerIndex_' +
                i + '_Markers_Template_Group');
            var datalabelTemplateElemement = getElementByID(maps.element.id + '_LayerIndex_'
                + i + '_Label_Template_Group');
            if ((!isNullOrUndefined(markerTemplateElement)) && markerTemplateElement.childElementCount > 0) {
                for (var k = 0; k < markerTemplateElement.childElementCount; k++) {
                    this.markerTranslate(markerTemplateElement.childNodes[k], factor, x, y, scale, 'Template');
                }
            }
            if ((!isNullOrUndefined(datalabelTemplateElemement)) && datalabelTemplateElemement.childElementCount > 0) {
                for (var k = 0; k < datalabelTemplateElemement.childElementCount; k++) {
                    this.dataLabelTranslate(datalabelTemplateElemement.childNodes[k], factor, x, y, scale, 'Template');
                }
            }
        }
    };
    Zoom.prototype.dataLabelTranslate = function (element, factor, x, y, scale, type, animate) {
        if (animate === void 0) { animate = false; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var labelCollection = this.maps.dataLabelModule.dataLabelCollections;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var zoomelement = element.getBoundingClientRect();
        var text;
        var trimmedLable;
        var style = this.maps.layers[this.index].dataLabelSettings.textStyle;
        var zoomtext;
        var zoomtextSize;
        var zoomtrimLabel;
        var labelPath = this.maps.layers[this.index].dataLabelSettings.labelPath;
        var layerIndex = parseFloat(element.id.split('_LayerIndex_')[1].split('_')[0]);
        var shapeIndex = parseFloat(element.id.split('_shapeIndex_')[1].split('_')[0]);
        var labelIndex;
        if (element.id.indexOf('_LabelIndex_') > -1) {
            labelIndex = parseFloat(element.id.split('_LabelIndex_')[1].split('_')[0]);
        }
        var duration = this.currentLayer.animationDuration;
        for (var l = 0; l < labelCollection.length; l++) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var label = labelCollection[l];
            if (label['layerIndex'] === layerIndex && label['shapeIndex'] === shapeIndex
                && label['labelIndex'] === labelIndex) {
                var labelX = label['location']['x'];
                var labelY = label['location']['y'];
                if (type === 'Template') {
                    var layerEle = getElementByID(this.maps.element.id + '_Layer_Collections');
                    labelX = ((Math.abs(this.maps.baseMapRectBounds['min']['x'] - labelX)) * scale);
                    labelY = ((Math.abs(this.maps.baseMapRectBounds['min']['y'] - labelY)) * scale);
                    var templateOffset = element.getBoundingClientRect();
                    var layerOffset = layerEle.getBoundingClientRect();
                    var elementOffset = element.parentElement.getBoundingClientRect();
                    var x_3 = ((labelX) + (layerOffset.left - elementOffset.left) - (templateOffset.width / 2));
                    var y_2 = ((labelY) + (layerOffset.top - elementOffset.top) - (templateOffset.height / 2));
                    element.style.left = x_3 + 'px';
                    element.style.top = y_2 + 'px';
                }
                else {
                    labelX = ((labelX + x) * scale);
                    labelY = ((labelY + y) * scale);
                    zoomtext = label['dataLabelText'];
                    zoomtextSize = measureText(zoomtext, style);
                    var start = labelY - zoomtextSize['height'] / 4;
                    var end = labelY + zoomtextSize['height'] / 4;
                    var xpositionEnds = labelX + zoomtextSize['width'] / 2;
                    var xpositionStart = labelX - zoomtextSize['width'] / 2;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var textLocations = { rightWidth: xpositionEnds, leftWidth: xpositionStart, heightTop: start, heightBottom: end };
                    if (!animate || duration === 0) {
                        element.setAttribute('transform', 'translate( ' + labelX + ' ' + labelY + ' )');
                    }
                    if (this.maps.layers[this.index].dataLabelSettings.smartLabelMode === 'Hide') {
                        if (scale > 1) {
                            text = ((this.maps.dataLabelShape[l] * scale) >= zoomtextSize['width']) ? zoomtext : '';
                            element.innerHTML = text;
                        }
                        else {
                            text = (this.maps.dataLabelShape[l] >= zoomtextSize['width']) ? zoomtext : '';
                            element.innerHTML = text;
                        }
                    }
                    if (this.maps.layers[this.index].dataLabelSettings.smartLabelMode === 'Trim') {
                        if (scale > 1) {
                            zoomtrimLabel = textTrim((this.maps.dataLabelShape[l] * scale), zoomtext, style);
                            text = zoomtrimLabel;
                            element.innerHTML = text;
                        }
                        else {
                            zoomtrimLabel = textTrim(this.maps.dataLabelShape[l], zoomtext, style);
                            text = zoomtrimLabel;
                            element.innerHTML = text;
                        }
                    }
                    if (this.maps.layers[this.index].dataLabelSettings.intersectionAction === 'Hide') {
                        for (var m = 0; m < this.intersect.length; m++) {
                            if (!isNullOrUndefined(this.intersect[m])) {
                                if (textLocations['leftWidth'] > this.intersect[m]['rightWidth']
                                    || textLocations['rightWidth'] < this.intersect[m]['leftWidth']
                                    || textLocations['heightTop'] > this.intersect[m]['heightBottom']
                                    || textLocations['heightBottom'] < this.intersect[m]['heightTop']) {
                                    text = !isNullOrUndefined(text) ? text : zoomtext;
                                    element.innerHTML = text;
                                }
                                else {
                                    text = '';
                                    element.innerHTML = text;
                                    break;
                                }
                            }
                        }
                        this.intersect.push(textLocations);
                    }
                    if (this.maps.layers[this.index].dataLabelSettings.intersectionAction === 'Trim') {
                        for (var j = 0; j < this.intersect.length; j++) {
                            if (!isNullOrUndefined(this.intersect[j])) {
                                if (textLocations['rightWidth'] < this.intersect[j]['leftWidth']
                                    || textLocations['leftWidth'] > this.intersect[j]['rightWidth']
                                    || textLocations['heightBottom'] < this.intersect[j]['heightTop']
                                    || textLocations['heightTop'] > this.intersect[j]['heightBottom']) {
                                    trimmedLable = !isNullOrUndefined(text) ? text : zoomtext;
                                    if (scale > 1) {
                                        trimmedLable = textTrim((this.maps.dataLabelShape[l] * scale), trimmedLable, style);
                                    }
                                    element.innerHTML = trimmedLable;
                                }
                                else {
                                    if (textLocations['leftWidth'] > this.intersect[j]['leftWidth']) {
                                        var width = this.intersect[j]['rightWidth'] - textLocations['leftWidth'];
                                        var difference = width - (textLocations['rightWidth'] - textLocations['leftWidth']);
                                        text = !isNullOrUndefined(text) ? text : zoomtext;
                                        trimmedLable = textTrim(difference, text, style);
                                        element.innerHTML = trimmedLable;
                                        break;
                                    }
                                    if (textLocations['leftWidth'] < this.intersect[j]['leftWidth']) {
                                        var width = textLocations['rightWidth'] - this.intersect[j]['leftWidth'];
                                        var difference = Math.abs(width - (textLocations['rightWidth'] - textLocations['leftWidth']));
                                        text = !isNullOrUndefined(text) ? text : zoomtext;
                                        trimmedLable = textTrim(difference, text, style);
                                        element.innerHTML = trimmedLable;
                                        break;
                                    }
                                }
                            }
                        }
                        this.intersect.push(textLocations);
                        if (isNullOrUndefined(trimmedLable)) {
                            trimmedLable = textTrim((this.maps.dataLabelShape[l] * scale), zoomtext, style);
                            element.innerHTML = trimmedLable;
                        }
                    }
                    if (animate || duration > 0) {
                        smoothTranslate(element, 0, duration, new MapLocation(labelX, labelY));
                    }
                }
            }
        }
    };
    Zoom.prototype.markerTranslate = function (element, factor, x, y, scale, type, animate) {
        if (animate === void 0) { animate = false; }
        var layerIndex = parseInt(element.id.split('_LayerIndex_')[1].split('_')[0], 10);
        var markerIndex = parseInt(element.id.split('_MarkerIndex_')[1].split('_')[0], 10);
        var dataIndex = parseInt(element.id.split('_dataIndex_')[1].split('_')[0], 10);
        var layer = this.maps.layersCollection[layerIndex];
        var marker = layer.markerSettings[markerIndex];
        if (!isNullOrUndefined(marker) && !isNullOrUndefined(marker.dataSource) && !isNullOrUndefined(marker.dataSource[dataIndex])) {
            var lng = (!isNullOrUndefined(marker.longitudeValuePath)) ?
                Number(getValueFromObject(marker.dataSource[dataIndex], marker.longitudeValuePath)) :
                !isNullOrUndefined(marker.dataSource[dataIndex]['longitude']) ? parseFloat(marker.dataSource[dataIndex]['longitude']) :
                    !isNullOrUndefined(marker.dataSource[dataIndex]['Latitude']) ? parseFloat(marker.dataSource[dataIndex]['Latitude']) : 0;
            var lat = (!isNullOrUndefined(marker.latitudeValuePath)) ?
                Number(getValueFromObject(marker.dataSource[dataIndex], marker.latitudeValuePath)) :
                !isNullOrUndefined(marker.dataSource[dataIndex]['latitude']) ? parseFloat(marker.dataSource[dataIndex]['latitude']) :
                    !isNullOrUndefined(marker.dataSource[dataIndex]['Latitude']) ? parseFloat(marker.dataSource[dataIndex]['Latitude']) : 0;
            var duration = this.currentLayer.animationDuration;
            var location_2 = (this.maps.isTileMap) ? convertTileLatLongToPoint(new Point(lng, lat), this.maps.tileZoomLevel, this.maps.tileTranslatePoint, true) : convertGeoToPoint(lat, lng, factor, layer, this.maps);
            if (this.maps.isTileMap) {
                if (type === 'Template') {
                    var templateOffset = element.getBoundingClientRect();
                    element.style.left = ((location_2.x - (templateOffset.width / 2)) + marker.offset.x) + 'px';
                    element.style.top = ((location_2.y - (templateOffset.height / 2)) + marker.offset.y) + 'px';
                    if (this.maps.layers[this.maps.baseLayerIndex].layerType === 'GoogleStaticMap') {
                        var staticMapOffset = getElementByID(this.maps.element.id + '_StaticGoogleMap').getBoundingClientRect();
                        var staticMapOffsetWidth = 640;
                        if (element['style']['display'] !== 'none') {
                            if ((staticMapOffset['x'] > templateOffset['x'] || staticMapOffset['x'] + staticMapOffsetWidth < templateOffset['x'] + templateOffset['width'])
                                && (staticMapOffset['y'] > templateOffset['y'] || staticMapOffset['y'] + staticMapOffset['height'] < templateOffset['y'] + templateOffset['height'])) {
                                element['style']['display'] = 'none';
                            }
                            else if ((staticMapOffset['x'] > templateOffset['x'] || staticMapOffset['x'] + staticMapOffsetWidth < templateOffset['x'] + templateOffset['width'])) {
                                element['style']['display'] = 'none';
                            }
                        }
                    }
                }
                else {
                    location_2.x += marker.offset.x;
                    location_2.y += marker.offset.y;
                    element.setAttribute('transform', 'translate( ' + location_2.x + ' ' + location_2.y + ' )');
                }
            }
            else {
                if (type === 'Template') {
                    if (duration > 0) {
                        location_2.x = ((Math.abs(this.maps.baseMapRectBounds['min']['x'] - location_2.x)) * scale);
                        location_2.y = ((Math.abs(this.maps.baseMapRectBounds['min']['y'] - location_2.y)) * scale);
                        var layerOffset = getElementByID(this.maps.element.id + '_Layer_Collections').getBoundingClientRect();
                        var elementOffset = element.parentElement.getBoundingClientRect();
                        element.style.left = (((location_2.x) + (layerOffset.left - elementOffset.left)) + marker.offset.x) + 'px';
                        element.style.top = (((location_2.y) + (layerOffset.top - elementOffset.top)) + marker.offset.y) + 'px';
                        element.style.transform = 'translate(-50%, -50%)';
                    }
                    else {
                        var elementOffset = element.getBoundingClientRect();
                        element.style.left = ((location_2.x + x) * scale) + marker.offset.x - this.maps.mapAreaRect.x - (elementOffset.width / 2) + 'px';
                        element.style.top = ((location_2.y + y) * scale) + marker.offset.y - this.maps.mapAreaRect.y - (elementOffset.height / 2) + 'px';
                    }
                }
                else {
                    location_2.x = (((location_2.x + x) * scale) + marker.offset.x);
                    location_2.y = (((location_2.y + y) * scale) + marker.offset.y);
                    if (!animate || duration === 0) {
                        element.setAttribute('transform', 'translate( ' + location_2.x + ' ' + location_2.y + ' )');
                    }
                    else {
                        smoothTranslate(element, 0, duration, location_2);
                    }
                }
            }
        }
    };
    Zoom.prototype.markerLineAnimation = function (map) {
        if (map.isTileMap) {
            for (var i = 0; i < map.layersCollection.length; i++) {
                var markerTemplateElement = getElementByID(this.maps.element.id + '_LayerIndex_' + i + '_Markers_Template_Group');
                var lineElement = getElementByID(this.maps.element.id + '_LayerIndex_' + i + '_line_Group');
                if (!isNullOrUndefined(markerTemplateElement)) {
                    markerTemplateElement.style.visibility = 'hidden';
                }
                if (!isNullOrUndefined(lineElement)) {
                    lineElement.style.visibility = 'hidden';
                }
            }
        }
    };
    /**
     * @private
     */
    Zoom.prototype.panning = function (direction, xDifference, yDifference, mouseLocation) {
        var map = this.maps;
        var panArgs;
        var down = this.mouseDownPoints;
        var move = this.mouseMovePoints;
        var scale = map.scale;
        map.markerZoomedState = false;
        map.zoomPersistence = map.enablePersistence;
        map.defaultState = false;
        map.initialCheck = false;
        var translatePoint = map.translatePoint;
        var prevTilePoint = map.tileTranslatePoint;
        var x;
        var y;
        xDifference = !isNullOrUndefined(xDifference) ? xDifference : (down.x - move.x);
        yDifference = !isNullOrUndefined(yDifference) ? yDifference : (down.y - move.y);
        this.maps.mergeCluster();
        if (!map.isTileMap) {
            var legendElement = document.getElementById(map.element.id + '_Legend_Group');
            var legendHeight = !isNullOrUndefined(legendElement) ? legendElement.getClientRects()[0].height : 0;
            x = translatePoint.x - xDifference / scale;
            y = translatePoint.y - yDifference / scale;
            var layerRect = getElementByID(map.element.id + '_Layer_Collections').getBoundingClientRect();
            var elementRect = getElementByID(map.element.id + '_svg').getBoundingClientRect();
            var panningXDirection = ((xDifference < 0 ? layerRect.left <= (elementRect.left + map.mapAreaRect.x) :
                ((layerRect.left + layerRect.width + map.mapAreaRect.x) >= (elementRect.width))));
            var panningYDirection = ((yDifference < 0 ? layerRect.top <= (elementRect.top + map.mapAreaRect.y) :
                ((layerRect.top + layerRect.height + legendHeight + map.margin.top) >= (elementRect.top + elementRect.height))));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var location_3 = this.maps.getGeoLocation(this.maps.layersCollection.length - 1, mouseLocation['layerX'], mouseLocation['layerY']);
            panArgs = {
                cancel: false, name: pan, maps: map,
                tileTranslatePoint: {}, translatePoint: { previous: translatePoint, current: new Point(x, y) },
                scale: map.scale, tileZoomLevel: map.tileZoomLevel, latitude: location_3['latitude'], longitude: location_3['longitude']
            };
            map.trigger(pan, panArgs);
            if (!panArgs.cancel) {
                if (panningXDirection && panningYDirection) {
                    map.translatePoint = new Point(x, y);
                    this.applyTransform();
                }
                else if (panningXDirection) {
                    map.translatePoint = new Point(x, map.translatePoint.y);
                    this.applyTransform();
                }
                else if (panningYDirection) {
                    map.translatePoint = new Point(map.translatePoint.x, y);
                    this.applyTransform();
                }
            }
            this.maps.zoomNotApplied = false;
        }
        else if (this.maps.tileZoomLevel > 1) {
            x = map.tileTranslatePoint.x - xDifference;
            y = map.tileTranslatePoint.y - yDifference;
            this.distanceX = x - map.tileTranslatePoint.x;
            this.distanceY = y - map.tileTranslatePoint.y;
            map.tileTranslatePoint.x = x;
            map.tileTranslatePoint.y = y;
            if ((map.tileTranslatePoint.y > -10 && yDifference < 0) || ((map.tileTranslatePoint.y < -((Math.pow(2, this.maps.tileZoomLevel) - 2) * 256) && yDifference > 0))) {
                map.tileTranslatePoint.x = x + xDifference;
                map.tileTranslatePoint.y = y + yDifference;
            }
            map.translatePoint.x = (map.tileTranslatePoint.x - xDifference) / map.scale;
            map.translatePoint.y = (map.tileTranslatePoint.y - yDifference) / map.scale;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var location_4 = this.maps.getTileGeoLocation(mouseLocation['layerX'], mouseLocation['layerY']);
            panArgs = {
                cancel: false, name: pan, maps: map,
                tileTranslatePoint: { previous: prevTilePoint, current: map.tileTranslatePoint },
                translatePoint: { previous: translatePoint, current: map.translatePoint }, scale: map.scale,
                tileZoomLevel: map.tileZoomLevel, latitude: location_4['latitude'], longitude: location_4['longitude']
            };
            map.trigger(pan, panArgs);
            map.mapLayerPanel.generateTiles(map.tileZoomLevel, map.tileTranslatePoint, 'Pan');
            this.applyTransform();
        }
        map.zoomTranslatePoint = map.translatePoint;
        this.mouseDownPoints = this.mouseMovePoints;
        this.maps.zoomNotApplied = false;
        this.isSingleClick = false;
    };
    Zoom.prototype.toAlignSublayer = function () {
        this.maps.translatePoint.x = !isNullOrUndefined(this.distanceX) ? (this.maps.translatePoint.x -
            (this.distanceX / this.maps.scale)) : this.maps.translatePoint.x;
        this.maps.translatePoint.y = !isNullOrUndefined(this.distanceY) ? this.maps.translatePoint.y -
            (this.distanceY / this.maps.scale) : this.maps.translatePoint.y;
        this.applyTransform(false);
    };
    Zoom.prototype.toolBarZooming = function (zoomFactor, type) {
        var _this = this;
        var map = this.maps;
        map.initialCheck = false;
        map.defaultState = ((type === 'Reset' && zoomFactor === 1 && !(map.zoomSettings.resetToInitial && map.applyZoomReset))
            || (type === 'ZoomOut' && zoomFactor === 1));
        var prevLevel = map.tileZoomLevel;
        var scale = map.previousScale = map.scale;
        map.markerZoomedState = false;
        map.zoomPersistence = map.enablePersistence;
        map.mapScaleValue = zoomFactor;
        var maxZoom = map.zoomSettings.maxZoom;
        var minZoom = map.zoomSettings.minZoom;
        var size = map.mapAreaRect;
        var translatePoint = map.previousPoint = map.translatePoint;
        var prevTilePoint = map.tileTranslatePoint;
        map.previousProjection = map.projectionType;
        zoomFactor = (type === 'ZoomOut') ? (Math.round(zoomFactor) === 1 ? 1 : zoomFactor) : zoomFactor;
        zoomFactor = (type === 'Reset') ? 1 : (Math.round(zoomFactor) === 0) ? 1 : zoomFactor;
        zoomFactor = (minZoom > zoomFactor && type === 'ZoomIn') ? minZoom + 1 : zoomFactor;
        var zoomArgs;
        if ((!map.isTileMap) && (type === 'ZoomIn' ? zoomFactor >= minZoom && zoomFactor <= maxZoom : zoomFactor >= minZoom
            || map.isReset)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var min = map.baseMapRectBounds['min'];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var max = map.baseMapRectBounds['max'];
            var mapWidth = Math.abs(max['x'] - min['x']);
            var mapHeight = Math.abs(min['y'] - max['y']);
            var translatePointX = void 0;
            var translatePointY = void 0;
            if (zoomFactor < 1.2 && map.projectionType !== 'Eckert5') {
                if (mapHeight === 0 || mapWidth === 0 || mapHeight === mapWidth) {
                    mapWidth = size.width / 2;
                    mapHeight = size.height;
                }
                zoomFactor = parseFloat(Math.min(size.width / mapWidth, size.height / mapHeight).toFixed(2));
                map.translatePoint = this.calculateInitalZoomTranslatePoint(zoomFactor, mapWidth, mapHeight, size, min, map);
            }
            else {
                translatePointX = translatePoint.x - (((size.width / scale) - (size.width / zoomFactor)) / 2);
                translatePointY = translatePoint.y - (((size.height / scale) - (size.height / zoomFactor)) / 2);
                var currentHeight = Math.abs(map.baseMapRectBounds['max']['y'] - map.baseMapRectBounds['min']['y']) * zoomFactor;
                translatePointX = (currentHeight < map.mapAreaRect.height) ? (size.x + ((-(min['x'])) + ((size.width / 2) - (mapWidth / 2))))
                    : translatePointX;
                translatePointY = (currentHeight < map.mapAreaRect.height) ? (size.y + ((-(min['y'])) + ((size.height / 2) - (mapHeight / 2))))
                    : translatePointY;
                map.translatePoint = new Point(translatePointX, translatePointY);
            }
            map.zoomTranslatePoint = map.translatePoint;
            map.scale = zoomFactor;
            if (this.triggerZoomEvent(prevTilePoint, prevLevel, type)) {
                map.translatePoint = map.zoomTranslatePoint = map.previousPoint;
                map.scale = map.previousScale;
            }
            else {
                this.applyTransform(true);
            }
        }
        else if ((map.isTileMap) && ((zoomFactor >= minZoom && zoomFactor <= maxZoom) || map.isReset)) {
            var tileZoomFactor = prevLevel < minZoom && !map.isReset ? minZoom : zoomFactor;
            map.scale = Math.pow(2, tileZoomFactor - 1);
            map.tileZoomLevel = tileZoomFactor;
            if (map.previousScale !== map.scale || map.isReset) {
                map.zoomSettings.zoomFactor = zoomFactor;
                var position = { x: map.availableSize.width / 2, y: map.availableSize.height / 2 };
                this.getTileTranslatePosition(prevLevel, tileZoomFactor, position, type);
                if (map.zoomSettings.resetToInitial && map.applyZoomReset && type === 'Reset' || (type === 'ZoomOut' && map.zoomSettings.resetToInitial && map.applyZoomReset && tileZoomFactor <= map.initialZoomLevel)) {
                    map.initialCheck = true;
                    map.zoomPersistence = false;
                    map.tileTranslatePoint.x = map.initialTileTranslate.x;
                    map.tileTranslatePoint.y = map.initialTileTranslate.y;
                    tileZoomFactor = map.tileZoomLevel = map.mapScaleValue = map.initialZoomLevel;
                }
                if (this.triggerZoomEvent(prevTilePoint, prevLevel, type)) {
                    map.translatePoint = map.tileTranslatePoint = new Point(0, 0);
                    map.scale = map.previousScale;
                    map.tileZoomLevel = prevLevel;
                    map.zoomSettings.zoomFactor = map.previousScale;
                }
                else {
                    map.translatePoint.y = (map.tileTranslatePoint.y - (0.01 * map.mapScaleValue)) / map.scale;
                    map.translatePoint.x = (map.tileTranslatePoint.x - (0.01 * map.mapScaleValue)) / map.scale;
                    if (document.getElementById(this.maps.element.id + '_LayerIndex_1')) {
                        document.getElementById(this.maps.element.id + '_LayerIndex_1').style.display = 'none';
                    }
                    if (document.querySelector('.GroupElement')) {
                        document.querySelector('.GroupElement').style.display = 'none';
                    }
                    this.markerLineAnimation(map);
                    map.mapLayerPanel.generateTiles(tileZoomFactor, map.tileTranslatePoint, type);
                    var element1 = document.getElementById(this.maps.element.id + '_tiles');
                    var animationDuration = this.maps.layersCollection[0].animationDuration;
                    setTimeout(function () {
                        if (type === 'ZoomOut' || type === 'Reset') {
                            // element1.removeChild(element1.children[element1.childElementCount - 1]);
                            // element1.childElementCount ? element1.removeChild(element1.children[element1.childElementCount - 1]) : element1;
                        }
                        _this.applyTransform(true);
                        if (document.getElementById(_this.maps.element.id + '_LayerIndex_1')) {
                            document.getElementById(_this.maps.element.id + '_LayerIndex_1').style.display = 'block';
                        }
                        _this.maps.isAddLayer = false;
                    }, animationDuration);
                }
            }
            this.maps.zoomNotApplied = false;
        }
    };
    Zoom.prototype.createZoomingToolbars = function () {
        var map = this.maps;
        this.toolBarGroup = map.renderer.createGroup({
            id: map.element.id + '_Zooming_KitCollection',
            opacity: map.theme.toLowerCase() === 'fluentdark' ? 0.6 : 0.3
        });
        var kitHeight = 16;
        var kitWidth = 16;
        var xSpacing = 15;
        var ySpacing = 15;
        var padding = 20;
        var orientation = map.zoomSettings.toolBarOrientation;
        var toolbarsCollection = map.zoomSettings.toolbars;
        var shadowElement = '<filter id="chart_shadow" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/>';
        shadowElement += '<feOffset dx="-3" dy="4" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="1"/>';
        shadowElement += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
        var toolBarLength = map.zoomSettings.toolbars.length;
        var toolWidth = (map.zoomSettings.toolBarOrientation === 'Horizontal') ? (toolBarLength * kitWidth) + (toolBarLength * padding) : (kitWidth * 2);
        var toolHeight = (map.zoomSettings.toolBarOrientation === 'Horizontal') ? (kitHeight * 2) : (toolBarLength * kitHeight) + (toolBarLength * padding);
        this.toolBarGroup.appendChild(map.renderer.drawRectangle(new RectOption(map.element.id + '_Zooming_Rect', 'transparent', { color: 'transparent', width: 1 }, 1, new Rect(0, 0, toolWidth, toolHeight), 0, 0)));
        var defElement = map.renderer.createDefs();
        defElement.innerHTML = shadowElement;
        this.toolBarGroup.appendChild(defElement);
        var outerElement = map.renderer.drawRectangle(new RectOption(map.element.id + '_Zooming_Rect', 'transparent', { color: 'transparent', width: 1 }, 0.1, new Rect(0, 0, toolWidth, toolHeight), 0, 0));
        outerElement.setAttribute('filter', 'url(#chart_shadow)');
        this.toolBarGroup.appendChild(outerElement);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var performFunction;
        for (var i = 0; i < toolbarsCollection.length; i++) {
            var toolbar_1 = toolbarsCollection[i];
            var pathOptions = void 0;
            var polyOptions = void 0;
            this.currentToolbarEle = map.renderer.createGroup({
                id: map.element.id + '_Zooming_ToolBar_' + toolbar_1 + '_Group',
                transform: 'translate( ' + xSpacing + ' ' + ySpacing + ' ) '
            });
            this.currentToolbarEle.setAttribute('class', 'e-maps-toolbar');
            var fillColor = '';
            var fill = 'transparent';
            var direction = '';
            var polygonDirection = '';
            this.selectionColor = this.maps.zoomSettings.selectionColor || this.maps.themeStyle.zoomSelectionColor;
            switch (toolbar_1.toLowerCase()) {
                case 'zoom': {
                    var fillColor_1 = void 0;
                    var strokeColor = void 0;
                    direction = 'M0.001,14.629L1.372,16l4.571-4.571v-0.685l0.228-0.274c1.051,0.868,2.423,1.417,3.885,1.417c3.291,0,';
                    direction += '5.943-2.651,5.943-5.943S13.395,0,10.103,0S4.16,2.651,4.16,5.943c0,1.508,0.503,2.834,1.417,3.885l-0.274,0.228H4.571';
                    direction = direction + 'L0.001,14.629L0.001,14.629z M5.943,5.943c0-2.285,1.828-4.114,4.114-4.114s4.114,1.828,4.114,';
                    if (this.maps.zoomSettings.enablePanning && !this.maps.zoomSettings.enableSelectionZooming) {
                        fillColor_1 = fill;
                        strokeColor = this.maps.themeStyle.zoomFillColor;
                    }
                    else if (this.maps.zoomSettings.enablePanning && this.maps.zoomSettings.enableSelectionZooming) {
                        fillColor_1 = fill;
                        strokeColor = this.maps.themeStyle.zoomFillColor;
                    }
                    else if (!this.maps.zoomSettings.enablePanning && !this.maps.zoomSettings.enableSelectionZooming) {
                        fillColor_1 = fill;
                        strokeColor = this.maps.themeStyle.zoomFillColor;
                    }
                    else {
                        fillColor_1 = this.selectionColor;
                        strokeColor = this.selectionColor;
                    }
                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar_1, fillColor_1, 1, strokeColor, 1, 1, null, direction + '4.114s-1.828,4.114-4.114,4.114S5.943,8.229,5.943,5.943z')));
                    this.zoomElements = this.currentToolbarEle;
                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                    break;
                }
                case 'zoomin':
                    direction = 'M 8, 0 L 8, 16 M 0, 8 L 16, 8';
                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar_1 + '_Path', fill, 3, this.maps.themeStyle.zoomFillColor, 1, 1, null, direction)));
                    this.zoomInElements = this.currentToolbarEle;
                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                    break;
                case 'zoomout':
                    direction = 'M 0, 8 L 16, 8';
                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar_1, fill, 3, this.maps.themeStyle.zoomFillColor, 1, 1, null, direction)));
                    this.zoomOutElements = this.currentToolbarEle;
                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                    break;
                case 'pan': {
                    var color = void 0;
                    direction = 'M5,3h2.3L7.275,5.875h1.4L8.65,3H11L8,0L5,3z M3,11V8.7l2.875,0.025v-1.4L3,7.35V5L0,8L3,';
                    direction += '11z M11,13H8.7l0.025-2.875h-1.4L7.35,13H5l3,3L11,13z M13,5v2.3l-2.875-0.025v1.4L13,8.65V11l3-3L13,5z';
                    if (this.maps.zoomSettings.enablePanning && this.maps.zoomModule.isDragZoom) {
                        color = '#737373';
                    }
                    else if (!this.maps.zoomSettings.enablePanning) {
                        color = '#737373';
                        this.currentToolbarEle.setAttribute('class', '');
                    }
                    else {
                        color = this.selectionColor;
                    }
                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar_1, color, 1, color, 1, 1, null, direction)));
                    this.panColor = color;
                    this.panElements = this.currentToolbarEle;
                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                    break;
                }
                case 'reset':
                    direction = 'M12.364,8h-2.182l2.909,3.25L16,8h-2.182c0-3.575-2.618-6.5-5.818-6.5c-1.128,0-2.218,0.366-3.091,';
                    direction += '1.016l1.055,1.178C6.581,3.328,7.272,3.125,8,3.125C10.4,3.125,12.363,5.319,12.364,8L12.364,8z M11.091,';
                    direction += '13.484l-1.055-1.178C9.419,12.672,8.728,12.875,8,12.875c-2.4,0-4.364-2.194-4.364-4.875h2.182L2.909,4.75L0,8h2.182c0,';
                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar_1, this.fillColor, null, this.maps.themeStyle.zoomFillColor, 1, 1, null, direction + '3.575,2.618,6.5,5.818,6.5C9.128,14.5,10.219,14.134,11.091,13.484L11.091,13.484z')));
                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                    break;
            }
            this.currentToolbarEle.appendChild(map.renderer.drawCircle(new CircleOption(map.element.id + '_Zooming_ToolBar_' + toolbar_1 + '_Rect', fill, { color: this.maps.themeStyle.zoomFillColor, width: 1 }, 1, 8, 8, 16, '')));
            xSpacing = (orientation === 'Horizontal') ? (xSpacing + (kitWidth + padding)) : xSpacing;
            ySpacing = (orientation === 'Horizontal') ? ySpacing : (ySpacing + (kitHeight + padding));
            this.toolBarGroup.appendChild(this.currentToolbarEle);
        }
    };
    Zoom.prototype.performToolBarAction = function (e) {
        var target = e.target;
        e.stopImmediatePropagation();
        var isTouch = e.pointerType === 'touch' || e.pointerType === '2' || (e.type.indexOf('touch') > -1);
        var toolbar = target.id.split('_Zooming_ToolBar_')[1].split('_')[0];
        if (isTouch) {
            this.handled = true;
            this.performZoomingByToolBar(toolbar);
        }
        else if ((e.type === 'mousedown' || e.type === 'pointerdown') && !this.handled) {
            this.handled = false;
            this.performZoomingByToolBar(toolbar);
        }
        else {
            this.handled = false;
        }
    };
    /**
     * @param {string} type - Specifies the type.
     * @returns {void}
     * @private
     */
    Zoom.prototype.performZoomingByToolBar = function (type) {
        var map = this.maps;
        map.isReset = false;
        switch (type.toLowerCase()) {
            case 'zoom':
                this.panColor = this.fillColor;
                this.zoomColor = this.selectionColor;
                this.applySelection(this.zoomElements, this.selectionColor);
                this.applySelection(this.panElements, this.fillColor);
                break;
            case 'pan':
                if (!this.maps.zoomSettings.enablePanning) {
                    this.panColor = '#737373';
                }
                else {
                    this.panColor = this.selectionColor;
                }
                this.zoomColor = this.fillColor;
                if (!this.maps.zoomSettings.enablePanning) {
                    this.applySelection(this.zoomElements, this.selectionColor);
                    this.applySelection(this.panElements, this.panColor);
                }
                else {
                    this.applySelection(this.zoomElements, this.fillColor);
                    this.applySelection(this.panElements, this.panColor);
                }
                break;
            case 'zoomin':
                map.staticMapZoom = map.tileZoomLevel;
                if (map.staticMapZoom > 0 && map.staticMapZoom < 22) {
                    map.staticMapZoom += 1;
                }
                this.toolBarZooming((map.isTileMap ? map.tileZoomLevel : map.scale) + 1, 'ZoomIn');
                break;
            case 'zoomout':
                map.staticMapZoom = map.tileZoomLevel;
                map.markerCenterLatitude = null;
                map.markerCenterLongitude = null;
                this.toolBarZooming((map.isTileMap ? map.tileZoomLevel : map.scale) - 1, 'ZoomOut');
                break;
            case 'reset':
                map.staticMapZoom = map.zoomSettings.enable ? map.zoomSettings.zoomFactor : 0;
                map.markerCenterLatitude = null;
                map.markerCenterLongitude = null;
                this.toolBarZooming(1, 'Reset');
                if (!this.maps.zoomSettings.enablePanning) {
                    this.applySelection(this.zoomElements, this.selectionColor);
                    this.applySelection(this.panElements, '#737373');
                }
                else {
                    this.applySelection(this.zoomElements, this.fillColor);
                    this.applySelection(this.panElements, this.selectionColor);
                }
        }
        this.panningStyle(type.toLowerCase());
    };
    Zoom.prototype.panningStyle = function (toolbar) {
        var svg = getElementByID(this.maps.element.id + '_svg');
        if (toolbar === 'pan' || this.isPanning) {
            svg.setAttribute('class', 'e-maps-panning');
        }
        else {
            svg.setAttribute('class', '');
        }
    };
    Zoom.prototype.applySelection = function (elements, color) {
        if (!elements) {
            return;
        }
        var childElement;
        for (var i = 0; i < elements.childElementCount; i++) {
            childElement = elements.childNodes[i];
            if (childElement.tagName !== 'circle') {
                childElement.setAttribute('fill', color);
                childElement.setAttribute('stroke', color);
            }
        }
    };
    Zoom.prototype.showTooltip = function (e) {
        var text = e.target.id.split('_Zooming_ToolBar_')[1].split('_')[0];
        if (!this.isTouch) {
            createTooltip('EJ2_Map_Toolbar_Tip', this.maps.getLocalizedLabel(text), (e.pageY + 10), (e.pageX + 10), '10px');
        }
    };
    Zoom.prototype.removeTooltip = function () {
        if (getElementByID('EJ2_Map_Toolbar_Tip')) {
            remove(getElementByID('EJ2_Map_Toolbar_Tip'));
        }
    };
    Zoom.prototype.alignToolBar = function () {
        var map = this.maps;
        var padding = 10;
        var element = createElement('div', { id: map.element.id + '_ToolBar', styles: 'position:absolute;z-index:2' });
        var rectSVGObject = map.renderer.createSvg({
            id: map.element.id + '_Zooming_ToolBar', width: 10, height: 10
        });
        rectSVGObject.appendChild(this.toolBarGroup);
        element.appendChild(rectSVGObject);
        if (getElementByID(map.element.id + '_Secondary_Element')) {
            getElementByID(map.element.id + '_Secondary_Element').appendChild(element);
        }
        var toolBarSize = this.toolBarGroup.getBoundingClientRect();
        rectSVGObject.setAttribute('height', (toolBarSize.height + padding / 2).toString());
        rectSVGObject.setAttribute('width', (toolBarSize.width + padding / 2).toString());
        var size = !isNullOrUndefined(map.totalRect) ? map.totalRect : map.mapAreaRect;
        var x = 0;
        var y = 0;
        switch (map.zoomSettings.verticalAlignment) {
            case 'Near':
                y = size.y;
                break;
            case 'Center':
                y = (size.height / 2) - (toolBarSize.height / 2);
                break;
            case 'Far':
                y = (size.height - toolBarSize.height) - padding;
                break;
        }
        switch (map.zoomSettings.horizontalAlignment) {
            case 'Near':
                x = size.x;
                break;
            case 'Center':
                x = (size.width / 2) - (toolBarSize.width / 2);
                break;
            case 'Far':
                if (!isNullOrUndefined(map.legendModule) && map.legendSettings.position === 'Left') {
                    x = size.width + size.x - toolBarSize.width - padding;
                }
                else {
                    x = (size.width - toolBarSize.width) - padding;
                }
                break;
        }
        var extraPosition = map.getExtraPosition();
        element.style.left = x + extraPosition.x + 'px';
        element.style.top = y + extraPosition.y + 'px';
        var color = this.maps.zoomSettings.highlightColor || this.maps.themeStyle.zoomSelectionColor;
        var css = ' .e-maps-toolbar:hover > circle { stroke:' + color + '; } .e-maps-toolbar:hover > path { fill: ' + color + ' ;  stroke: ' + color + '; }' +
            '.e-maps-toolbar:hover { cursor: pointer; } .e-maps-cursor-disable:hover { cursor: not-allowed; } .e-maps-panning:hover { cursor: pointer; } ' +
            '.e-maps-popup-close { display: block; opacity: 0; }';
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        element.appendChild(style);
    };
    /**
     * To bind events.
     *
     * @param {Element} element - Specifies the element.
     * @param {any} process - Specifies the process.
     * @returns {void}
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Zoom.prototype.wireEvents = function (element, process) {
        EventHandler.add(element, Browser.touchStartEvent, process, this);
        EventHandler.add(element, 'mouseover', this.showTooltip, this);
        EventHandler.add(element, 'mouseout', this.removeTooltip, this);
    };
    Zoom.prototype.mapMouseWheel = function (e) {
        if (this.maps.zoomSettings.enable && this.maps.zoomSettings.mouseWheelZoom) {
            var map = this.maps;
            var size = map.availableSize;
            map.markerZoomedState = false;
            map.zoomPersistence = map.enablePersistence;
            var position = this.getMousePosition(e.pageX, e.pageY);
            var prevLevel = map.tileZoomLevel;
            var prevScale = map.scale;
            var delta = 1;
            var staticMaxZoomLevel = 22; // google map maximum zoom level value
            var value = (map.isTileMap) ? prevLevel : prevScale;
            if (((position.x > map.mapAreaRect.x) && (position.x < (map.mapAreaRect.x + map.mapAreaRect.width))) &&
                (position.y > map.mapAreaRect.y) && position.y < (map.mapAreaRect.y + map.mapAreaRect.height)) {
                e.preventDefault();
                var direction = (this.browserName === 'mozilla' && !this.isPointer) ?
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    -(e.detail) / 3 > 0 ? 'ZoomIn' : 'ZoomOut' : (e.wheelDelta / 120) > 0 ? 'ZoomIn' : 'ZoomOut';
                if (direction === 'ZoomIn') {
                    map.mapScaleValue = value + delta;
                    map.staticMapZoom = map.tileZoomLevel;
                    if (map.staticMapZoom > 0 && map.staticMapZoom < staticMaxZoomLevel) {
                        map.staticMapZoom += 1;
                    }
                    this.performZooming(position, (value + delta), direction);
                }
                else {
                    map.mapScaleValue = value - delta;
                    map.isReset = (map.mapScaleValue < 1) ? true : false;
                    map.staticMapZoom = map.tileZoomLevel;
                    if (map.mapScaleValue === 1) {
                        map.markerCenterLatitude = null;
                        map.markerCenterLongitude = null;
                    }
                    if (map.staticMapZoom > 1 && map.staticMapZoom < staticMaxZoomLevel) {
                        map.staticMapZoom -= 1;
                    }
                    this.performZooming(position, (value - delta), direction);
                }
            }
        }
    };
    Zoom.prototype.doubleClick = function (e) {
        var pageX = e.pageX;
        var pageY = e.pageY;
        var target = e.target;
        if (this.maps.zoomSettings.enable && this.maps.zoomSettings.doubleClickZoom
            && !(e.target['id'].indexOf('_Zooming_') > -1)) {
            var position = this.getMousePosition(pageX, pageY);
            var map = this.maps;
            var size = map.availableSize;
            var prevLevel = map.tileZoomLevel;
            var prevScale = map.scale;
            map.mapScaleValue = map.mapScaleValue + 1;
            var value = (map.isTileMap) ? prevLevel : prevScale;
            if (((position.x > map.mapAreaRect.x) && (position.x < (map.mapAreaRect.x + map.mapAreaRect.width))) &&
                (position.y > map.mapAreaRect.y) && position.y < (map.mapAreaRect.y + map.mapAreaRect.height)) {
                this.performZooming(position, (value + 1), 'ZoomIn');
            }
        }
    };
    Zoom.prototype.mouseDownHandler = function (e) {
        var pageX;
        var pageY;
        var target;
        var touches = null;
        var element = e.target;
        if (e.type === 'touchstart') {
            this.isTouch = true;
            touches = e.touches;
            target = e.target;
            pageX = touches[0].clientX;
            pageY = touches[0].clientY;
        }
        else {
            pageX = e.pageX;
            pageY = e.pageY;
            target = e.target;
        }
        if (!this.maps.zoomSettings.enablePanning) {
            this.isPanning = this.panColor !== this.selectionColor ? this.maps.zoomSettings.enablePanning
                : this.zoomColor === this.selectionColor;
        }
        else {
            this.isPanning = this.panColor === this.selectionColor ? this.maps.zoomSettings.enablePanning
                : this.zoomColor !== this.selectionColor;
        }
        this.mouseDownLatLong = { x: pageX, y: pageY };
        this.rectZoomingStart = ((!this.isPanning) && this.maps.zoomSettings.enable);
        this.mouseDownPoints = this.getMousePosition(pageX, pageY);
        if (this.isTouch) {
            this.firstMove = true;
            this.pinchFactor = this.maps.scale;
            this.fingers = touches.length;
        }
        this.isSingleClick = true;
    };
    Zoom.prototype.mouseMoveHandler = function (e) {
        var pageX;
        var pageY;
        var map = this.maps;
        var touchArg;
        var target;
        var touches = null;
        var zoom = this.maps.zoomSettings;
        if (e.type === 'touchmove') {
            this.isTouch = true;
            target = e.target;
            touches = e.touches;
            pageX = touches[0].clientX;
            pageY = touches[0].clientY;
        }
        else {
            pageX = e.pageX;
            pageY = e.pageY;
            target = e.target;
        }
        if (getElementByID(map.element.id + '_Zooming_KitCollection')) {
            if (target.id.indexOf('_Zooming_') > -1) {
                getElementByID(map.element.id + '_Zooming_KitCollection').setAttribute('opacity', '1');
                if (document.getElementById(map.element.id + '_Zooming_ToolBar_Pan_Group')) {
                    if (!this.maps.zoomSettings.enablePanning) {
                        if (target.id.indexOf('_Zooming_ToolBar') > -1 || target.id.indexOf('_Zooming_Rect') > -1) {
                            getElementByID(map.element.id + '_Zooming_ToolBar_Pan_Rect').setAttribute('opacity', map.theme.toLowerCase() === 'fluentdark' ? '0.6' : '0.3');
                            getElementByID(map.element.id + '_Zooming_ToolBar_Pan').setAttribute('opacity', map.theme.toLowerCase() === 'fluentdark' ? '0.6' : '0.3');
                        }
                    }
                }
            }
            else {
                getElementByID(map.element.id + '_Zooming_KitCollection').setAttribute('opacity', map.theme.toLowerCase() === 'fluentdark' ? '0.6' : '0.3');
                if (!this.maps.zoomSettings.enablePanning && document.getElementById(map.element.id + '_Zooming_ToolBar_Pan_Group')) {
                    getElementByID(map.element.id + '_Zooming_ToolBar_Pan_Rect').setAttribute('opacity', '1');
                    getElementByID(map.element.id + '_Zooming_ToolBar_Pan').setAttribute('opacity', '1');
                }
            }
        }
        if (this.isTouch) {
            if (this.maps.zoomSettings.pinchZooming) {
                if (this.firstMove && touches.length === 2) {
                    this.rectZoomingStart = false;
                    this.updateInteraction();
                    this.touchStartList = targetTouches(e);
                }
                else if (touches.length === 2 && this.touchStartList.length === 2) {
                    this.touchMoveList = targetTouches(e);
                    e.preventDefault();
                    this.rectZoomingStart = false;
                    this.performPinchZooming(e);
                }
                this.firstMove = false;
            }
        }
        this.mouseMovePoints = this.getMousePosition(pageX, pageY);
        var targetId = e.target['id'];
        var targetEle = e.target;
        if (zoom.enable && this.isPanning && ((Browser.isDevice && touches.length >= 1) || !Browser.isDevice)) {
            e.preventDefault();
            this.maps.element.style.cursor = 'pointer';
            this.mouseMoveLatLong = { x: pageX, y: pageY };
            if ((this.mouseDownLatLong['x'] !== this.mouseMoveLatLong['x']) && (this.mouseDownLatLong['y'] !== this.mouseMoveLatLong['y'])) {
                if (this.maps.zoomSettings.enablePanning) {
                    this.panning('None', null, null, e);
                }
                this.mouseDownLatLong['x'] = pageX;
                this.mouseDownLatLong['y'] = pageY;
            }
        }
        if (this.isTouch ? (touches.length === 1 && this.rectZoomingStart) : this.rectZoomingStart) {
            e.preventDefault();
            if (this.maps.zoomSettings.enableSelectionZooming) {
                this.drawZoomRectangle();
            }
        }
    };
    Zoom.prototype.mouseUpHandler = function (e) {
        var isDragZoom;
        var map = this.maps;
        this.rectZoomingStart = false;
        this.isPanning = false;
        this.isSingleClick = this.isSingleClick ? true : false;
        this.isTouch = false;
        this.touchStartList = [];
        this.touchMoveList = [];
        this.lastScale = 1;
        this.maps.element.style.cursor = 'auto';
        if ((!isNullOrUndefined(this.distanceX) || !isNullOrUndefined(this.distanceY)) && (!isNullOrUndefined(this.currentLayer) && this.currentLayer.type === 'SubLayer')) {
            this.toAlignSublayer();
            this.distanceX = this.distanceY = null;
        }
        var zoomRectElement = getElementByID(this.maps.element.id + '_Selection_Rect_Zooming');
        if (zoomRectElement && this.maps.zoomSettings.enable && this.maps.zoomSettings.enableSelectionZooming) {
            isDragZoom = true;
            remove(zoomRectElement);
            this.performRectZooming();
        }
        this.mouseMoveLatLong = { x: 0, y: 0 };
        this.mouseDownLatLong = { x: 0, y: 0 };
    };
    Zoom.prototype.mouseCancelHandler = function (e) {
        this.isPanning = false;
        this.isTouch = false;
        this.rectZoomingStart = false;
        var zoomRectElement = getElementByID(this.maps.element.id + '_Selection_Rect_Zooming');
        if (zoomRectElement && this.maps.zoomSettings.enable) {
            remove(zoomRectElement);
            this.performRectZooming();
        }
    };
    /**
     * To handle the click event for maps.
     *
     * @param {PointerEvent} e - Specifies the pointer event.
     * @returns {void}
     */
    Zoom.prototype.click = function (e) {
        var map = this.maps;
        if ((map.markerModule && map.markerModule.sameMarkerData.length > 0) ||
            (e.target['id'].indexOf('MarkerIndex') > -1 && e.target['id'].indexOf('cluster') === -1)) {
            return null;
        }
        if (this.isSingleClick && map.zoomSettings.zoomOnClick && !(e.target['id'].indexOf('_Zooming_') > -1) && !map.zoomSettings.doubleClickZoom
            && (this.zoomColor !== this.selectionColor)) {
            var pageX = e.pageX;
            var pageY = e.pageY;
            var position = this.getMousePosition(pageX, pageY);
            var prevLevel = map.tileZoomLevel;
            var prevScale = map.scale;
            map.mapScaleValue = map.mapScaleValue + 1;
            var value = (map.isTileMap) ? prevLevel : prevScale;
            if (((position.x > map.mapAreaRect.x) && (position.x < (map.mapAreaRect.x + map.mapAreaRect.width))) &&
                (position.y > map.mapAreaRect.y) && position.y < (map.mapAreaRect.y + map.mapAreaRect.height)) {
                this.performZooming(position, (value + 1), 'ZoomIn');
            }
        }
    };
    Zoom.prototype.getMousePosition = function (pageX, pageY) {
        var map = this.maps;
        var elementRect = map.element.getBoundingClientRect();
        var pageXOffset = map.element.ownerDocument.defaultView.pageXOffset;
        var pageYOffset = map.element.ownerDocument.defaultView.pageYOffset;
        var clientTop = map.element.ownerDocument.documentElement.clientTop;
        var clientLeft = map.element.ownerDocument.documentElement.clientLeft;
        var positionX = elementRect.left + pageXOffset - clientLeft;
        var positionY = elementRect.top + pageYOffset - clientTop;
        return new Point(Math.abs(pageX - positionX), Math.abs(pageY - positionY));
    };
    Zoom.prototype.addEventListener = function () {
        if (this.maps.isDestroyed) {
            return;
        }
        EventHandler.add(this.maps.element, this.wheelEvent, this.mapMouseWheel, this);
        EventHandler.add(this.maps.element, 'click', this.click, this);
        EventHandler.add(this.maps.element, 'dblclick', this.doubleClick, this);
        this.maps.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
        this.maps.on(Browser.touchStartEvent, this.mouseDownHandler, this);
        this.maps.on(Browser.touchEndEvent, this.mouseUpHandler, this);
        EventHandler.add(this.maps.element, this.cancelEvent, this.mouseCancelHandler, this);
    };
    Zoom.prototype.removeEventListener = function () {
        if (this.maps.isDestroyed) {
            return;
        }
        EventHandler.remove(this.maps.element, this.wheelEvent, this.mapMouseWheel);
        EventHandler.remove(this.maps.element, 'click', this.click);
        EventHandler.remove(this.maps.element, 'dblclick', this.doubleClick);
        this.maps.off(Browser.touchMoveEvent, this.mouseMoveHandler);
        this.maps.off(Browser.touchStartEvent, this.mouseDownHandler);
        this.maps.off(Browser.touchEndEvent, this.mouseUpHandler);
        this.maps.off(this.cancelEvent, this.mouseCancelHandler);
    };
    /**
     * Get module name.
     *
     * @returns {string} - Returns the module name.
     */
    Zoom.prototype.getModuleName = function () {
        return 'Zoom';
    };
    /**
     * To destroy the zoom.
     *
     * @param {Maps} maps - Specifies the instance of the maps.
     * @returns {void}
     * @private
     */
    Zoom.prototype.destroy = function (maps) {
        this.removeEventListener();
        /**
         * Destroy method performed here
         */
    };
    return Zoom;
}());
export { Zoom };
