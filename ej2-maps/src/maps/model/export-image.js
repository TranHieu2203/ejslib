/* eslint-disable @typescript-eslint/no-unused-vars */
import { createElement, Browser, isNullOrUndefined } from '@syncfusion/ej2-base';
import { triggerDownload, getElementByID } from '../utils/helper';
/**
 * This module enables the export to Image functionality in Maps control.
 *
 * @hidden
 */
var ImageExport = /** @class */ (function () {
    /**
     * Constructor for Maps
     *
     * @param {Maps} control - Specifies the instance of the map
     */
    function ImageExport(control) {
        this.control = control;
    }
    /**
     * To export the file as image/svg format
     *
     * @param {ExportType} type - Specifies the type of the image file
     * @param {string} fileName - Specifies the file name of the image file
     * @param {boolean} allowDownload - Specifies whether to download image as a file or not.
     * @returns {Promise<string>} - Returns the promise string.
     * @private
     */
    ImageExport.prototype.export = function (type, fileName, allowDownload) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var promise = new Promise(function (resolve, reject) {
            var imageCanvasElement = createElement('canvas', {
                id: 'ej2-canvas',
                attrs: {
                    'width': _this.control.availableSize.width.toString(),
                    'height': _this.control.availableSize.height.toString()
                }
            });
            var isDownload = !(Browser.userAgent.toString().indexOf('HeadlessChrome') > -1);
            var toolbarEle = document.getElementById(_this.control.element.id + '_ToolBar');
            var svgParent = document.getElementById(_this.control.element.id + '_Tile_SVG_Parent');
            var svgDataElement;
            var tileSvg;
            var svgObject = getElementByID(_this.control.element.id + '_svg').cloneNode(true);
            if (!_this.control.isTileMap) {
                svgDataElement = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    _this.control.svgObject.outerHTML + '</svg>';
            }
            else {
                tileSvg = getElementByID(_this.control.element.id + '_Tile_SVG').cloneNode(true);
                svgDataElement = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    svgObject.outerHTML + tileSvg.outerHTML + '</svg>';
            }
            var url = window.URL.createObjectURL(new Blob(type === 'SVG' ? [svgDataElement] :
                [(new XMLSerializer()).serializeToString(svgObject)], { type: 'image/svg+xml' }));
            if (type === 'SVG') {
                if (allowDownload) {
                    triggerDownload(fileName, type, url, isDownload);
                }
                else {
                    resolve(null);
                }
            }
            else {
                var image_1 = new Image();
                var ctxt_1 = imageCanvasElement.getContext('2d');
                if (!_this.control.isTileMap) {
                    image_1.onload = (function () {
                        ctxt_1.drawImage(image_1, 0, 0);
                        window.URL.revokeObjectURL(url);
                        if (allowDownload) {
                            triggerDownload(fileName, type, imageCanvasElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'), isDownload);
                        }
                        else {
                            if (type === 'PNG') {
                                resolve(imageCanvasElement.toDataURL('image/png'));
                            }
                            else if (type === 'JPEG') {
                                resolve(imageCanvasElement.toDataURL('image/jpeg'));
                            }
                        }
                    });
                    image_1.src = url;
                }
                else {
                    var svgParentElement = document.getElementById(_this.control.element.id + '_MapAreaBorder');
                    var top_1 = parseFloat(svgParentElement.getAttribute('y'));
                    var left_1 = parseFloat(svgParentElement.getAttribute('x'));
                    var imgxHttp = new XMLHttpRequest();
                    var imgTileLength_1 = _this.control.mapLayerPanel.tiles.length;
                    var _loop_1 = function (i) {
                        var tile = document.getElementById(_this.control.element.id + '_tile_' + (i - 1));
                        var exportTileImg = new Image();
                        exportTileImg.crossOrigin = 'Anonymous';
                        ctxt_1.fillStyle = _this.control.background ? _this.control.background : '#FFFFFF';
                        ctxt_1.fillRect(0, 0, _this.control.availableSize.width, _this.control.availableSize.height);
                        ctxt_1.font = _this.control.titleSettings.textStyle.size + ' Arial';
                        var titleElement = document.getElementById(_this.control.element.id + '_Map_title');
                        if (!isNullOrUndefined(titleElement)) {
                            ctxt_1.fillStyle = titleElement.getAttribute('fill');
                            ctxt_1.fillText(_this.control.titleSettings.text, parseFloat(titleElement.getAttribute('x')), parseFloat(titleElement.getAttribute('y')));
                        }
                        exportTileImg.onload = (function () {
                            if (i === 0 || i === imgTileLength_1 + 1) {
                                if (i === 0) {
                                    ctxt_1.setTransform(1, 0, 0, 1, 0, 0);
                                    ctxt_1.rect(0, top_1, parseFloat(svgParent.style.width), parseFloat(svgParent.style.height));
                                    ctxt_1.clip();
                                }
                                else {
                                    ctxt_1.setTransform(1, 0, 0, 1, left_1, top_1);
                                }
                            }
                            else {
                                var tileParent = document.getElementById(_this.control.element.id + '_tile_parent');
                                ctxt_1.setTransform(1, 0, 0, 1, parseFloat(tile.style.left) + left_1, parseFloat(tile.style.top) +
                                    top_1);
                            }
                            ctxt_1.drawImage(exportTileImg, 0, 0);
                            if (i === imgTileLength_1 + 1) {
                                localStorage.setItem('local-canvasImage', imageCanvasElement.toDataURL('image/png'));
                                var localBase64 = localStorage.getItem('local-canvasImage');
                                if (allowDownload) {
                                    triggerDownload(fileName, type, localBase64, isDownload);
                                    localStorage.removeItem('local-canvasImage');
                                }
                                else {
                                    if (type === 'PNG') {
                                        resolve(localBase64);
                                    }
                                    else if (type === 'JPEG') {
                                        resolve(imageCanvasElement.toDataURL('image/jpeg'));
                                    }
                                }
                            }
                        });
                        if (i === 0 || i === imgTileLength_1 + 1) {
                            if (i === 0) {
                                exportTileImg.src = url;
                            }
                            else {
                                setTimeout(function () {
                                    exportTileImg.src = window.URL.createObjectURL(new Blob([(new XMLSerializer()).serializeToString(tileSvg)], { type: 'image/svg+xml' }));
                                }, 300);
                            }
                        }
                        else {
                            imgxHttp.open('GET', tile.children[0].getAttribute('src'), true);
                            imgxHttp.send();
                            exportTileImg.src = tile.children[0].getAttribute('src');
                        }
                    };
                    for (var i = 0; i <= imgTileLength_1 + 1; i++) {
                        _loop_1(i);
                    }
                }
            }
        });
        return promise;
    };
    /**
     * Get module name.
     *
     * @returns {string} - Returns the module name
     */
    ImageExport.prototype.getModuleName = function () {
        return 'ImageExport';
    };
    /**
     * To destroy the ImageExport.
     *
     * @param {Maps} maps - Specifies the instance of the maps.
     * @returns {void}
     * @private
     */
    ImageExport.prototype.destroy = function (maps) {
        /**
         * Destroy method performed here
         */
    };
    return ImageExport;
}());
export { ImageExport };
