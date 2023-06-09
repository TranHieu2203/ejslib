/* eslint-disable valid-jsdoc */
import { createElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import { PdfPageOrientation, PdfDocument, PdfBitmap } from '@syncfusion/ej2-pdf-export';
/**
 * Represent the print and export for gauge.
 *
 * @hidden
 */
var PdfExport = /** @class */ (function () {
    /**
     * Constructor for gauge
     *
     * @param control
     */
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    function PdfExport(control) {
        this.control = control;
    }
    /**
     * To export the file as pdf format
     *
     * @param type
     * @param fileName
     * @private
     */
    PdfExport.prototype.export = function (type, fileName, orientation, allowDownload) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var promise = new Promise(function (resolve, reject) {
            var canvasElement = createElement('canvas', {
                id: 'ej2-canvas',
                attrs: {
                    'width': _this.control.availableSize.width.toString(),
                    'height': _this.control.availableSize.height.toString()
                }
            });
            orientation = isNullOrUndefined(orientation) ? PdfPageOrientation.Landscape : orientation;
            var svgData = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                _this.control.svgObject.outerHTML +
                '</svg>';
            var exportElement = _this.control.svgObject.cloneNode(true);
            var backgroundElement = exportElement.childNodes[0];
            var backgroundColor = backgroundElement.getAttribute('fill');
            if ((_this.control.theme === 'Tailwind' || _this.control.theme === 'TailwindDark' || _this.control.theme === 'Bootstrap5' || _this.control.theme === 'Bootstrap5Dark'
                || _this.control.theme === 'Fluent' || _this.control.theme === 'FluentDark') && (backgroundColor === 'rgba(255,255,255, 0.0)' || backgroundColor === 'transparent')) {
                exportElement.childNodes[0].setAttribute('fill', 'rgba(255,255,255, 1)');
            }
            var url = window.URL.createObjectURL(new Blob(type === 'SVG' ? [svgData] :
                [(new XMLSerializer()).serializeToString(exportElement)], { type: 'image/svg+xml' }));
            var image = new Image();
            var context = canvasElement.getContext('2d');
            image.onload = (function () {
                context.drawImage(image, 0, 0);
                window.URL.revokeObjectURL(url);
                var document = new PdfDocument();
                var imageString = canvasElement.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                document.pageSettings.orientation = orientation;
                imageString = imageString.slice(imageString.indexOf(',') + 1);
                document.pages.add().graphics.drawImage(new PdfBitmap(imageString), 0, 0, (_this.control.availableSize.width - 60), _this.control.availableSize.height);
                if (allowDownload) {
                    document.save(fileName + '.pdf');
                    document.destroy();
                }
                else {
                    resolve(null);
                }
            });
            image.src = url;
        });
        return promise;
    };
    /**
     * Get module name.
     */
    PdfExport.prototype.getModuleName = function () {
        return 'PdfExport';
    };
    /**
     * To destroy the PdfExport.
     *
     * @return {void}
     * @private
     */
    PdfExport.prototype.destroy = function (control) {
        /**
         * Destroy method performed here
         */
    };
    return PdfExport;
}());
export { PdfExport };
