import { createElement, isNullOrUndefined, Browser } from '@syncfusion/ej2-base';
import { PdfPageOrientation, PdfDocument, PdfBitmap } from '@syncfusion/ej2-pdf-export';
/**
 * Represent the Pdf export for gauge
 *
 * @hidden
 */
var PdfExport = /** @class */ (function () {
    /**
     * Constructor for gauge
     *
     * @param {CircularGauge} control - Specfies the instance of the gauge.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    function PdfExport(control) {
        this.control = control;
    }
    /**
     * To export the file as image/svg format
     *
     * @param {ExportType} type - Specifies the type of the document.
     * @param {string} fileName Specfies the file name of the document.
     * @param {PdfPageOrientation} orientation - Specfies the orientation of the PDF document to export the component.
     * @param {boolean} allowDownload - Specfies whether to download the document or not.
     * @returns {Promise<string>} - Returns the promise string
     * @private
     */
    PdfExport.prototype.export = function (type, fileName, orientation, allowDownload) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var promise = new Promise(function (resolve, reject) {
            var element = createElement('canvas', {
                id: 'ej2-canvas',
                attrs: {
                    'width': _this.control.availableSize.width.toString(),
                    'height': _this.control.availableSize.height.toString()
                }
            });
            var isDownload = !(Browser.userAgent.toString().indexOf('HeadlessChrome') > -1);
            orientation = isNullOrUndefined(orientation) ? PdfPageOrientation.Landscape : orientation;
            var exportElement = _this.control.svgObject.cloneNode(true);
            var backgroundElement = exportElement.childNodes[0];
            var backgroundColor = backgroundElement.getAttribute('fill');
            if ((_this.control.theme === 'Tailwind' || _this.control.theme === 'TailwindDark' || _this.control.theme === 'Bootstrap5' || _this.control.theme === 'Bootstrap5Dark'
                || _this.control.theme === 'Fluent' || _this.control.theme === 'FluentDark') && (backgroundColor === 'rgba(255,255,255, 0.0)' || backgroundColor === 'transparent')) {
                exportElement.childNodes[0].setAttribute('fill', 'rgba(255,255,255, 1)');
            }
            var url = window.URL.createObjectURL(new Blob([(new XMLSerializer()).serializeToString(exportElement)], { type: 'image/svg+xml' }));
            var image = new Image();
            var context = element.getContext('2d');
            image.onload = (function () {
                context.drawImage(image, 0, 0);
                window.URL.revokeObjectURL(url);
                var document = new PdfDocument();
                var imageString = element.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                document.pageSettings.orientation = orientation;
                imageString = imageString.slice(imageString.indexOf(',') + 1);
                document.pages.add().graphics.
                    drawImage(new PdfBitmap(imageString), 0, 0, _this.control.availableSize.width, _this.control.availableSize.height);
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
    PdfExport.prototype.getModuleName = function () {
        // Returns te module name
        return 'PdfExport';
    };
    /**
     * To destroy the PdfExport.
     *
     * @param {CircularGauge} gauge - Specfies the instance of the gauge
     * @returns {void}
     * @private
     */
    PdfExport.prototype.destroy = function (gauge) {
        // Destroy method performed here
    };
    return PdfExport;
}());
export { PdfExport };
