import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-add-dialog-field` directive represent a add dialog fields collection in Gantt task add dialog.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'></e-add-dialog-field>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'></e-add-dialog-field>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export declare class AddDialogFieldDirective extends ComplexBase<AddDialogFieldDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines types of tab which contains editor for columns.
     * * `General` - Defines tab container type as general.
     * * `Dependency` - Defines tab as dependency editor.
     * * `Resources` - Defines tab as resources editor.
     * * `Notes` - Defines tab as notes editor.
     * * `Custom` - Defines tab as custom column editor.
     * @default null
     */
    type: any;
    /**
     * Defines edited column fields placed inside the tab.
     * @default null
     */
    fields: any;
    /**
     * Defines header text of tab item.
     * @default null
     */
    headerText: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<AddDialogFieldDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AddDialogFieldDirective, "ejs-gantt>e-add-dialog-fields>e-add-dialog-field", never, { "fields": "fields"; "headerText": "headerText"; "type": "type"; }, {}, never>;
}
/**
 * AddDialogField Array Directive
 * @private
 */
export declare class AddDialogFieldsDirective extends ArrayBase<AddDialogFieldsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AddDialogFieldsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AddDialogFieldsDirective, "ejs-gantt>e-add-dialog-fields", never, {}, {}, ["children"]>;
}
