/**
 * Vue Component Base
 */
export declare const aVue: any;
export declare function _interopRequireWildcard(obj: any): any;
export declare const allVue: any;
export declare const gh: any;
export declare const isExecute: any;
declare let vueImport: any;
export declare class ComponentBase extends vueImport {
    protected ej2Instances: any;
    protected tagMapper: any;
    protected tagNameMapper: any;
    protected hasInjectedModules: boolean;
    protected hasChildDirective: boolean;
    protected childDirObjects: string;
    protected propKeys: any;
    protected isDecorator: boolean;
    constructor();
    created(): void;
    mounted(): void;
    getInjectedServices(): Object[];
    updated(): void;
    beforeDestroy(): void;
    bindProperties(): void;
    assignValueToWrapper(option: Object, silent?: boolean): void;
    fetchChildPropValues(childOption: Object): void;
    resolveArrayDirectives(slots: any, tagName: any): any;
    resolveComplexDirs(slots: any, tagObject: any, tagName: string): any;
    resolveComplexInnerDirs(slots: any, tagObject: any, tagName: string): any;
    resolveMultilevelComplexInnerDirs(slots: any, tagObject: any, tagName: string): any;
    getDirectiveValues(tagDirectives: any, tagMapper: {
        [key: string]: Object;
    }, tagNameMapper: Object): Object;
    getMultiLevelDirValue(tagDirectories: any, tagKey: string | Object, tagNameMapper: Object): Object;
    getVNodeValue(tagDirective: any, tagKey: string | Object, tagNameMapper: Object): Object;
    /**
     * convert kebab case directive props to camel case
     */
    getCamelCaseProps(props: Object): Object;
    dataBind(): void;
    setProperties(arg: Object, muteOnChange?: boolean): void;
}
export {};
