import * as React from 'react';
import { Sidebar, SidebarModel } from '@syncfusion/ej2-navigations';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * `SidebarComponent` represents the Essential JS 2 React Sidebar Component.
 * ```ts
 * <SidebarComponent></SidebarComponent>
 * ```
 */
export declare class SidebarComponent extends Sidebar {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<SidebarModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<SidebarModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    portals: any;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
