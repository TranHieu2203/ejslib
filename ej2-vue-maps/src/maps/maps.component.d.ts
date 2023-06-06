import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents Vuejs Maps Component
 * ```vue
 * <ejs-maps></ejs-maps>
 * ```
 */
export declare class MapsComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    isVue3: boolean;
    templateCollection: any;
    constructor();
    clearTemplate(templateNames?: string[]): any;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    custom(): void;
    addLayer(layer: Object): void;
    addMarker(layerIndex: number, markerCollection: Object[]): void;
    export(type: Object, fileName: string, orientation?: Object, allowDownload?: boolean): Object;
    getBingUrlTemplate(url: string): Object;
    getGeoLocation(layerIndex: number, x: number, y: number): Object;
    getLocalizedLabel(key: string): string;
    getTileGeoLocation(x: number, y: number): Object;
    mapsOnClick(e: Object): void;
    mapsOnDoubleClick(e: Object): void;
    mapsOnResize(e: Object): boolean;
    mouseDownOnMap(e: Object): void;
    mouseEndOnMap(e: Object): boolean;
    mouseLeaveOnMap(e: Object): void;
    mouseMoveOnMap(e: Object): void;
    onMouseMove(e: Object): boolean;
    panByDirection(direction: Object, mouseLocation?: Object | Object): void;
    pointToLatLong(pageX: number, pageY: number): Object;
    print(id?: string[] | string | Object): void;
    processResponseJsonData(processType: string, data?: any | string, layer?: Object, dataType?: string): void;
    removeLayer(index: number): void;
    shapeSelection(layerIndex: number, propertyName: string | string[], name: string, enable?: boolean): void;
    zoomByPosition(centerPosition: undefined, zoomFactor: number): void;
    zoomToCoordinates(minLatitude: number, minLongitude: number, maxLatitude: number, maxLongitude: number): void;
}
export declare const MapsPlugin: {
    name: string;
    install(Vue: any): void;
};
