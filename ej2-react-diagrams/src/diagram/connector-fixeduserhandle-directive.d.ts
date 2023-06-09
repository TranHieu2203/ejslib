import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ConnectorFixedUserHandleModel } from '@syncfusion/ej2-diagrams';
/**
 * `Connector` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective>
 * <ConnectorFixedUserHandlesDirective>
 * <ConnectorFixedUserHandleDirective>
 * </ConnectorFixedUserHandleDirective>
 * </ConnectorFixedUserHandlesDirective>
 * </ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
export declare class ConnectorFixedUserHandleDirective extends ComplexBase<ConnectorFixedUserHandleModel & {
    children?: React.ReactNode;
}, ConnectorFixedUserHandleModel> {
    static moduleName: string;
}
export declare class ConnectorFixedUserHandlesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
