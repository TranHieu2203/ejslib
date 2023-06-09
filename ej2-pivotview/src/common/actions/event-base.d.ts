import { PivotCommon } from '../base/pivot-common';
import { IFilter } from '../../base/engine';
import { MaskChangeEventArgs } from '@syncfusion/ej2-inputs';
import { TreeView } from '@syncfusion/ej2-navigations';
import { IOlapField } from '../../base/olap/engine';
/**
 * `EventBase` for active fields action.
 */
/** @hidden */
export declare class EventBase {
    parent: PivotCommon;
    /** @hidden */
    searchListItem: HTMLElement[];
    /**
     * Constructor for the dialog action.
     * @param {PivotCommon} parent - parent.
     * @hidden
     */
    constructor(parent?: PivotCommon);
    /**
     * Updates sorting order for the selected field.
     * @function updateSorting
     * @param  {Event} args - Contains clicked element information to update dataSource.
     * @returns {void}
     * @hidden
     */
    updateSorting(args: Event): void;
    /**
     * Updates sorting order for the selected field.
     * @function updateFiltering
     * @param {Event} args - Contains clicked element information to update dataSource.
     * @returns {void}
     * @hidden
     */
    updateFiltering(args: Event): void;
    /**
     * Returns boolean by checing the valid filter members from the selected filter settings.
     * @function isValidFilterItemsAvail
     * @param {string} fieldName - Gets filter members for the given field name.
     * @param {IFilter} filterObj - filterObj.
     * @returns {boolean} - boolean.
     * @hidden
     */
    isValidFilterItemsAvail(fieldName: string, filterObj: IFilter): boolean;
    private getOlapData;
    /**
     * Gets sorted filter members for the selected field.
     * @function sortOlapFilterData
     * @param {{ [key: string]: Object }[]} treeData - Gets filter members for the given field name.
     * @param {string} order - order.
     * @returns {{ [key: string]: Object }[]} - return.
     * @hidden
     */
    sortOlapFilterData(treeData: {
        [key: string]: Object;
    }[], order: string): {
        [key: string]: Object;
    }[];
    private applyFilterCustomSort;
    getParentIDs(treeObj: TreeView, id: string, parent: string[]): string[];
    getChildIDs(treeObj: TreeView, id: string, children: string[]): string[];
    /**
     * show tree nodes using search text.
     * @hidden
     */
    searchTreeNodes(args: MaskChangeEventArgs, treeObj: TreeView, isFieldCollection: boolean, isHierarchy?: boolean): void;
    private updateOlapSearchTree;
    private getTreeData;
    private getOlapTreeData;
    private getOlapSearchTreeData;
    updateChildNodeStates(members: IOlapField[], fieldName: string, node: string, state: boolean): void;
    /**
     * get the parent node of particular filter members.
     * @hidden
     */
    getParentNode(fieldName: string, item: string, filterObj: {
        [key: string]: string;
    }): {
        [key: string]: string;
    };
    private getFilteredTreeNodes;
}
