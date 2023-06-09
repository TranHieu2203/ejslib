import * as React from 'react';
import { PdfViewer, PdfViewerModel } from '@syncfusion/ej2-pdfviewer';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * `Represents the react PdfViewer Component.
 * ```tsx
 * <PdfViewerComponent />
 * ```
 */
export declare class PdfViewerComponent extends PdfViewer {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<PdfViewerModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<PdfViewerModel & DefaultHtmlAttributes>;
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
