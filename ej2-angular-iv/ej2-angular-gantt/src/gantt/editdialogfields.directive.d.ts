import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-edit-dialog-field` directive represent a edit dialog fields collection in Gantt task add dialog.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'></e-edit-dialog-field>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'></e-edit-dialog-field>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export declare class EditDialogFieldDirective extends ComplexBase<EditDialogFieldDirective> {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<EditDialogFieldDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditDialogFieldDirective, "ejs-gantt>e-edit-dialog-fields>e-edit-dialog-field", never, { "fields": "fields"; "headerText": "headerText"; "type": "type"; }, {}, never>;
}
/**
 * EditDialogField Array Directive
 * @private
 */
export declare class EditDialogFieldsDirective extends ArrayBase<EditDialogFieldsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EditDialogFieldsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditDialogFieldsDirective, "ejs-gantt>e-edit-dialog-fields", never, {}, {}, ["children"]>;
}
