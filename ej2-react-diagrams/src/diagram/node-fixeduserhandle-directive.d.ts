import { ComplexBase } from '@syncfusion/ej2-react-base';
import { NodeFixedUserHandleModel } from '@syncfusion/ej2-diagrams';
/**
 * `Node` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <NodeFixedUserHandlesDirective>
 * <NodeFixedUserHandleDirective>
 * </NodeFixedUserHandleDirective>
 * </NodeFixedUserHandlesDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
export declare class NodeFixedUserHandleDirective extends ComplexBase<NodeFixedUserHandleModel & {
    children?: React.ReactNode;
}, NodeFixedUserHandleModel> {
    static moduleName: string;
}
export declare class NodeFixedUserHandlesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
