import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { StackedColumnsDirective } from './stacked-column.directive';
import * as i0 from "@angular/core";
let input = ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'freeze', 'headerTemplate', 'headerText', 'headerTextAlign', 'headerValueAccessor', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
let outputs = [];
/**
 * `e-column` directive represent a column of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-grid>
 * ```
 */
export class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['columns'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "ejs-grid>e-columns>e-column", inputs: { allowEditing: "allowEditing", allowFiltering: "allowFiltering", allowGrouping: "allowGrouping", allowReordering: "allowReordering", allowResizing: "allowResizing", allowSearching: "allowSearching", allowSorting: "allowSorting", autoFit: "autoFit", clipMode: "clipMode", columns: "columns", commands: "commands", customAttributes: "customAttributes", dataSource: "dataSource", defaultValue: "defaultValue", disableHtmlEncode: "disableHtmlEncode", displayAsCheckBox: "displayAsCheckBox", edit: "edit", editTemplate: "editTemplate", editType: "editType", enableGroupByFormat: "enableGroupByFormat", field: "field", filter: "filter", filterBarTemplate: "filterBarTemplate", filterTemplate: "filterTemplate", foreignKeyField: "foreignKeyField", foreignKeyValue: "foreignKeyValue", format: "format", formatter: "formatter", freeze: "freeze", headerTemplate: "headerTemplate", headerText: "headerText", headerTextAlign: "headerTextAlign", headerValueAccessor: "headerValueAccessor", hideAtMedia: "hideAtMedia", index: "index", isFrozen: "isFrozen", isIdentity: "isIdentity", isPrimaryKey: "isPrimaryKey", lockColumn: "lockColumn", maxWidth: "maxWidth", minWidth: "minWidth", showColumnMenu: "showColumnMenu", showInColumnChooser: "showInColumnChooser", sortComparer: "sortComparer", template: "template", textAlign: "textAlign", type: "type", uid: "uid", validationRules: "validationRules", valueAccessor: "valueAccessor", visible: "visible", width: "width" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "commandsTemplate", first: true, predicate: ["commandsTemplate"], descendants: true }, { propertyName: "filter_itemTemplate", first: true, predicate: ["filterItemTemplate"], descendants: true }, { propertyName: "editTemplate", first: true, predicate: ["editTemplate"], descendants: true }, { propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: StackedColumnsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ColumnDirective.prototype, "template", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "editTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "filterTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-grid>e-columns>e-column',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childColumns: new ContentChild(StackedColumnsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }], commandsTemplate: [{
                type: ContentChild,
                args: ['commandsTemplate']
            }], filter_itemTemplate: [{
                type: ContentChild,
                args: ['filterItemTemplate']
            }], editTemplate: [{
                type: ContentChild,
                args: ['editTemplate']
            }], filterTemplate: [{
                type: ContentChild,
                args: ['filterTemplate']
            }] } });
/**
 * Column Array Directive
 * @private
 */
export class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-grid>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-grid>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ3JpZC9jb2x1bW5zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRXJFLElBQUksS0FBSyxHQUFhLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2p5QixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxXQUE0QjtJQWljN0QsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQTdiOUMsU0FBSSxHQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUErYmhDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzRHQXRjUSxlQUFlO2dHQUFmLGVBQWUsb25FQUhXLHVCQUF1QjtBQXFhMUQ7SUFEQyxRQUFRLEVBQUU7aURBQ1U7QUFPckI7SUFEQyxRQUFRLEVBQUU7dURBQ2dCO0FBRzNCO0lBREMsUUFBUSxFQUFFO3lEQUNrQjtBQUc3QjtJQURDLFFBQVEsRUFBRTs0REFDcUI7QUFRaEM7SUFEQyxRQUFRLEVBQUU7cURBQ2M7QUFRekI7SUFEQyxRQUFRLEVBQUU7dURBQ2dCOzJGQS9ibEIsZUFBZTtrQkFSM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNMLFlBQVksRUFBRSxJQUFJLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQztxQkFDMUQ7aUJBQ0o7dUdBbWFVLFFBQVE7c0JBRmQsWUFBWTt1QkFBQyxVQUFVO2dCQVNqQixjQUFjO3NCQUZwQixZQUFZO3VCQUFDLGdCQUFnQjtnQkFLdkIsZ0JBQWdCO3NCQUZ0QixZQUFZO3VCQUFDLGtCQUFrQjtnQkFLekIsbUJBQW1CO3NCQUZ6QixZQUFZO3VCQUFDLG9CQUFvQjtnQkFVM0IsWUFBWTtzQkFGbEIsWUFBWTt1QkFBQyxjQUFjO2dCQVVyQixjQUFjO3NCQUZwQixZQUFZO3VCQUFDLGdCQUFnQjs7QUFZbEM7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQTJCO0lBQzdEO1FBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OzZHQUhRLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLG1GQUhTLGVBQWU7MkZBR3hDLGdCQUFnQjtrQkFONUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQztxQkFDakQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IFN0YWNrZWRDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGFja2VkLWNvbHVtbi5kaXJlY3RpdmUnO1xuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbGxvd0VkaXRpbmcnLCAnYWxsb3dGaWx0ZXJpbmcnLCAnYWxsb3dHcm91cGluZycsICdhbGxvd1Jlb3JkZXJpbmcnLCAnYWxsb3dSZXNpemluZycsICdhbGxvd1NlYXJjaGluZycsICdhbGxvd1NvcnRpbmcnLCAnYXV0b0ZpdCcsICdjbGlwTW9kZScsICdjb2x1bW5zJywgJ2NvbW1hbmRzJywgJ2N1c3RvbUF0dHJpYnV0ZXMnLCAnZGF0YVNvdXJjZScsICdkZWZhdWx0VmFsdWUnLCAnZGlzYWJsZUh0bWxFbmNvZGUnLCAnZGlzcGxheUFzQ2hlY2tCb3gnLCAnZWRpdCcsICdlZGl0VGVtcGxhdGUnLCAnZWRpdFR5cGUnLCAnZW5hYmxlR3JvdXBCeUZvcm1hdCcsICdmaWVsZCcsICdmaWx0ZXInLCAnZmlsdGVyQmFyVGVtcGxhdGUnLCAnZmlsdGVyVGVtcGxhdGUnLCAnZm9yZWlnbktleUZpZWxkJywgJ2ZvcmVpZ25LZXlWYWx1ZScsICdmb3JtYXQnLCAnZm9ybWF0dGVyJywgJ2ZyZWV6ZScsICdoZWFkZXJUZW1wbGF0ZScsICdoZWFkZXJUZXh0JywgJ2hlYWRlclRleHRBbGlnbicsICdoZWFkZXJWYWx1ZUFjY2Vzc29yJywgJ2hpZGVBdE1lZGlhJywgJ2luZGV4JywgJ2lzRnJvemVuJywgJ2lzSWRlbnRpdHknLCAnaXNQcmltYXJ5S2V5JywgJ2xvY2tDb2x1bW4nLCAnbWF4V2lkdGgnLCAnbWluV2lkdGgnLCAnc2hvd0NvbHVtbk1lbnUnLCAnc2hvd0luQ29sdW1uQ2hvb3NlcicsICdzb3J0Q29tcGFyZXInLCAndGVtcGxhdGUnLCAndGV4dEFsaWduJywgJ3R5cGUnLCAndWlkJywgJ3ZhbGlkYXRpb25SdWxlcycsICd2YWx1ZUFjY2Vzc29yJywgJ3Zpc2libGUnLCAnd2lkdGgnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1jb2x1bW5gIGRpcmVjdGl2ZSByZXByZXNlbnQgYSBjb2x1bW4gb2YgdGhlIEFuZ3VsYXIgR3JpZC4gXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIEdyaWQgY29tcG9uZW50KGBlanMtZ3JpZGApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMtZ3JpZCBbZGF0YVNvdXJjZV09J2RhdGEnIGFsbG93UGFnaW5nPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnPiBcbiAqICAgPGUtY29sdW1ucz5cbiAqICAgIDxlLWNvbHVtbiBmaWVsZD0nSUQnIHdpZHRoPScxMDAnPjwvZS1jb2x1bW4+XG4gKiAgICA8ZS1jb2x1bW4gZmllbGQ9J25hbWUnIGhlYWRlclRleHQ9J05hbWUnIHdpZHRoPScxMDAnPjwvZS1jb2x1bW4+XG4gKiAgIDwvZS1jb2x1bW5zPlxuICogPC9lanMtZ3JpZD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1ncmlkPmUtY29sdW1ucz5lLWNvbHVtbicsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkQ29sdW1uczogbmV3IENvbnRlbnRDaGlsZChTdGFja2VkQ29sdW1uc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbHVtbkRpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPENvbHVtbkRpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcbiAgICBwdWJsaWMgY2hpbGRDb2x1bW5zOiBhbnk7XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydjb2x1bW5zJ107XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGRhdGEgdHlwZSBvZiB0aGUgY29sdW1uLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgdHlwZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJZiBgYWxsb3dFZGl0aW5nYCBzZXQgdG8gZmFsc2UsIHRoZW4gaXQgZGlzYWJsZXMgZWRpdGluZyBvZiBhIHBhcnRpY3VsYXIgY29sdW1uLiBcbiAgICAgKiBCeSBkZWZhdWx0IGFsbCBjb2x1bW5zIGFyZSBlZGl0YWJsZS5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIGFsbG93RWRpdGluZzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJZiBgYWxsb3dGaWx0ZXJpbmdgIHNldCB0byBmYWxzZSwgdGhlbiBpdCBkaXNhYmxlcyBmaWx0ZXJpbmcgb3B0aW9uIGFuZCBmaWx0ZXIgYmFyIGVsZW1lbnQgb2YgYSBwYXJ0aWN1bGFyIGNvbHVtbi4gXG4gICAgICogQnkgZGVmYXVsdCBhbGwgY29sdW1ucyBhcmUgZmlsdGVyYWJsZS5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIGFsbG93RmlsdGVyaW5nOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIElmIGBhbGxvd0dyb3VwaW5nYCBzZXQgdG8gZmFsc2UsIHRoZW4gaXQgZGlzYWJsZXMgZ3JvdXBpbmcgb2YgYSBwYXJ0aWN1bGFyIGNvbHVtbi4gXG4gICAgICogQnkgZGVmYXVsdCBhbGwgY29sdW1ucyBhcmUgZ3JvdXBhYmxlLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dHcm91cGluZzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJZiBgYWxsb3dSZW9yZGVyaW5nYCBzZXQgdG8gZmFsc2UsIHRoZW4gaXQgZGlzYWJsZXMgcmVvcmRlciBvZiBhIHBhcnRpY3VsYXIgY29sdW1uLiBcbiAgICAgKiBCeSBkZWZhdWx0IGFsbCBjb2x1bW5zIGNhbiBiZSByZW9yZGVyLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dSZW9yZGVyaW5nOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIElmIGBhbGxvd1Jlc2l6aW5nYCBzZXQgdG8gZmFsc2UsIGl0IGRpc2FibGVzIHJlc2l6ZSBvcHRpb24gb2YgYSBwYXJ0aWN1bGFyIGNvbHVtbi5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIGFsbG93UmVzaXppbmc6IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGFsbG93U2VhcmNoaW5nYCBzZXQgdG8gZmFsc2UsIHRoZW4gaXQgZGlzYWJsZXMgU2VhcmNoaW5nIG9mIGEgcGFydGljdWxhciBjb2x1bW4uIFxuICAgICAqIEJ5IGRlZmF1bHQgYWxsIGNvbHVtbnMgYWxsb3cgU2VhcmNoaW5nLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dTZWFyY2hpbmc6IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGFsbG93U29ydGluZ2Agc2V0IHRvIGZhbHNlLCB0aGVuIGl0IGRpc2FibGVzIHNvcnRpbmcgb3B0aW9uIG9mIGEgcGFydGljdWxhciBjb2x1bW4uIFxuICAgICAqIEJ5IGRlZmF1bHQgYWxsIGNvbHVtbnMgYXJlIHNvcnRhYmxlLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dTb3J0aW5nOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIElmIGBhdXRvRml0YCBzZXQgdG8gdHJ1ZSwgdGhlbiB0aGUgcGFydGljdWxhciBjb2x1bW4gY29udGVudCB3aWR0aCB3aWxsIGJlIFxuICAgICAqIGFkanVzdGVkIGJhc2VkIG9uIGl0cyBjb250ZW50IGluIHRoZSBpbml0aWFsIHJlbmRlcmluZyBpdHNlbGYuIFxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSBhcyB0cnVlIGlzIGVxdWl2YWxlbnQgdG8gY2FsbGluZyBgYXV0b0ZpdENvbHVtbnNgIG1ldGhvZCBpbiB0aGUgYGRhdGFCb3VuZGAgZXZlbnQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0b0ZpdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBjZWxsIGNvbnRlbnQncyBvdmVyZmxvdyBtb2RlLiBUaGUgYXZhaWxhYmxlIG1vZGVzIGFyZSBcbiAgICAgKiAqIGBDbGlwYCAtICBUcnVuY2F0ZXMgdGhlIGNlbGwgY29udGVudCB3aGVuIGl0IG92ZXJmbG93cyBpdHMgYXJlYS4gXG4gICAgICogKiBgRWxsaXBzaXNgIC0gIERpc3BsYXlzIGVsbGlwc2lzIHdoZW4gdGhlIGNlbGwgY29udGVudCBvdmVyZmxvd3MgaXRzIGFyZWEuIFxuICAgICAqICogYEVsbGlwc2lzV2l0aFRvb2x0aXBgIC0gRGlzcGxheXMgZWxsaXBzaXMgd2hlbiB0aGUgY2VsbCBjb250ZW50IG92ZXJmbG93cyBpdHMgYXJlYSBcbiAgICAgKiBhbHNvIGl0IHdpbGwgZGlzcGxheSB0b29sdGlwIHdoaWxlIGhvdmVyIG9uIGVsbGlwc2lzIGFwcGxpZWQgY2VsbC5cbiAgICAgKiBAZGVmYXVsdCBFbGxpcHNpc1xuICAgICAqL1xuICAgIHB1YmxpYyBjbGlwTW9kZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBVc2VkIHRvIHJlbmRlciBtdWx0aXBsZSBoZWFkZXIgcm93cyhzdGFja2VkIGhlYWRlcnMpIG9uIHRoZSBHcmlkIGhlYWRlci5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbnM6IGFueTtcbiAgICAvKiogXG4gICAgICogYGNvbW1hbmRzYCBwcm92aWRlcyBhbiBvcHRpb24gdG8gZGlzcGxheSBjb21tYW5kIGJ1dHRvbnMgaW4gZXZlcnkgY2VsbC4gXG4gICAgICogVGhlIGF2YWlsYWJsZSBidWlsdC1pbiBjb21tYW5kIGJ1dHRvbnMgYXJlIFxuICAgICAqICogRWRpdCAtIEVkaXQgdGhlIHJlY29yZC4gXG4gICAgICogKiBEZWxldGUgLSBEZWxldGUgdGhlIHJlY29yZC4gXG4gICAgICogKiBTYXZlIC0gU2F2ZSB0aGUgcmVjb3JkLiBcbiAgICAgKiAqIENhbmNlbCAtIENhbmNlbCB0aGUgZWRpdCBzdGF0ZS5cbiAgICAgKiBcbiAgICAgKiBUaGUgZm9sbG93aW5nIGNvZGUgZXhhbXBsZSBpbXBsZW1lbnRzIHRoZSBjdXN0b20gY29tbWFuZCBjb2x1bW4uXG4gICAgICpgYGBodG1sXG4gICAgICo8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgY2xhc3M9XCJjc3NTdHlsZXNcIj5cbiAgICAgKi5kZXRhaWxzLWljb246YmVmb3JlXG4gICAgICp7XG4gICAgICogICBjb250ZW50OlwiXFxlNzRkXCI7XG4gICAgICp9XG4gICAgICo8L3N0eWxlPlxuICAgICAqPGRpdiBpZD1cIkdyaWRcIj48L2Rpdj5cbiAgICAgKmBgYFxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqdmFyIGdyaWRPYmogPSBuZXcgR3JpZCh7XG4gICAgICpkYXRhc291cmNlOiB3aW5kb3cuZ3JpZERhdGEsXG4gICAgICpjb2x1bW5zIDogW1xuICAgICAqIHsgZmllbGQ6ICdDdXN0b21lcklEJywgaGVhZGVyVGV4dDogJ0N1c3RvbWVyIElEJyB9LFxuICAgICAqIHsgZmllbGQ6ICdDdXN0b21lck5hbWUnLCBoZWFkZXJUZXh0OiAnQ3VzdG9tZXIgTmFtZScgfSxcbiAgICAgKiB7Y29tbWFuZHM6IFt7YnV0dG9uT3B0aW9uOntjb250ZW50OiAnRGV0YWlscycsIGNsaWNrOiBvbkNsaWNrLCBjc3NDbGFzczogZGV0YWlscy1pY29ufX1dLCBoZWFkZXJUZXh0OiAnQ3VzdG9tZXIgRGV0YWlscyd9XG4gICAgICpdXG4gICAgICpncmlkT2JqLmFwcGVuZFRvKFwiI0dyaWRcIik7XG4gICAgICpgYGBcbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBjb21tYW5kczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgQ1NTIHN0eWxlcyBhbmQgYXR0cmlidXRlcyBvZiB0aGUgY29udGVudCBjZWxscyBvZiBhIHBhcnRpY3VsYXIgY29sdW1uIGNhbiBiZSBjdXN0b21pemVkLlxuICAgICAqIFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxkaXYgaWQ9XCJHcmlkXCI+PC9kaXY+XG4gICAgICpgYGBcbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKmxldCBncmlkT2JqOiBHcmlkID0gbmV3IEdyaWQoe1xuICAgICAqZGF0YVNvdXJjZTogZmlsdGVyRGF0YSxcbiAgICAgKmNvbHVtbnM6IFtcbiAgICAgKiAgIHsgZmllbGQ6ICdPcmRlcklEJywgaGVhZGVyVGV4dDogJ09yZGVyIElEJyB9LFxuICAgICAqICAge1xuICAgICAqICAgICAgIGZpZWxkOiAnRW1wbG95ZWVJRCcsIGhlYWRlclRleHQ6ICdFbXBsb3llZSBJRCcsIGN1c3RvbUF0dHJpYnV0ZXM6IHtcbiAgICAgKiAgICAgICAgICBjbGFzczogJ2VtcGxveWVlaWQnLFxuICAgICAqICAgICAgICAgIHR5cGU6ICdlbXBsb3llZS1pZC1jZWxsJ1xuICAgICAqICAgICB9XG4gICAgICogIH1dXG4gICAgICp9KTtcbiAgICAgKmdyaWRPYmouYXBwZW5kVG8oJyNHcmlkJyk7XG4gICAgICpgYGBcbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21BdHRyaWJ1dGVzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGNvbHVtbiBkYXRhIHNvdXJjZSAgd2hpY2ggd2lsbCBhY3QgYXMgZm9yZWlnbiBkYXRhIHNvdXJjZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGRhdGFTb3VyY2U6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIGNvbXBvbmVudCB3aGVuIGFkZGluZyBhIG5ldyByZWNvcmQgdG8gdGhlIEdyaWQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGRpc2FibGVIdG1sRW5jb2RlYCBpcyBzZXQgdG8gdHJ1ZSwgaXQgZW5jb2RlcyB0aGUgSFRNTCBvZiB0aGUgaGVhZGVyIGFuZCBjb250ZW50IGNlbGxzLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzYWJsZUh0bWxFbmNvZGU6IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGRpc3BsYXlBc0NoZWNrQm94YCBpcyBzZXQgdG8gdHJ1ZSwgaXQgZGlzcGxheXMgdGhlIGNvbHVtbiB2YWx1ZSBhcyBhIGNoZWNrIGJveCBpbnN0ZWFkIG9mIEJvb2xlYW4gdmFsdWUuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcGxheUFzQ2hlY2tCb3g6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgYElFZGl0Q2VsbGAoLi4vLi4vZ3JpZC9lZGl0LyNjZWxsLWVkaXQtdGVtcGxhdGUpIG9iamVjdCB0byBjdXN0b21pemUgZGVmYXVsdCBlZGl0IGNlbGwuXG4gICAgICogQGRlZmF1bHQge31cbiAgICAgKi9cbiAgICBwdWJsaWMgZWRpdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB0eXBlIG9mIGNvbXBvbmVudCBmb3IgZWRpdGluZy5cbiAgICAgKiBAZGVmYXVsdCAnc3RyaW5nZWRpdCdcbiAgICAgKi9cbiAgICBwdWJsaWMgZWRpdFR5cGU6IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGVuYWJsZUdyb3VwQnlGb3JtYXRgIHNldCB0byB0cnVlLCB0aGVuIGl0IGdyb3VwcyB0aGUgcGFydGljdWxhciBjb2x1bW4gYnkgZm9ybWF0dGVkIHZhbHVlcy4gXG4gICAgICogQnkgZGVmYXVsdCBubyBjb2x1bW5zIGFyZSBncm91cCBieSBmb3JtYXQuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVHcm91cEJ5Rm9ybWF0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGZpZWxkIG5hbWUgb2YgY29sdW1uIHdoaWNoIGlzIG1hcHBlZCB3aXRoIG1hcHBpbmcgbmFtZSBvZiBEYXRhU291cmNlLiBcbiAgICAgKiBUaGUgYm91bmRlZCBjb2x1bW5zIGNhbiBiZSBzb3J0LCBmaWx0ZXIgYW5kIGdyb3VwIGV0Yy4sIFxuICAgICAqIElmIHRoZSBgZmllbGRgIG5hbWUgY29udGFpbnMg4oCcZG904oCdLCB0aGVuIGl0IGlzIGNvbnNpZGVyZWQgYXMgY29tcGxleCBiaW5kaW5nLiBcbiAgICAgKiBUaGUgYGZpZWxkYCBuYW1lIG11c3QgYmUgYSB2YWxpZCBKYXZhU2NyaXB0IGlkZW50aWZpZXIsIFxuICAgICAqIHRoZSBmaXJzdCBjaGFyYWN0ZXIgbXVzdCBiZSBhbiBhbHBoYWJldCBhbmQgc2hvdWxkIG5vdCBjb250YWluIHNwYWNlcyBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGZpZWxkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqICBEZWZpbmVzIHRoZSBmaWx0ZXIgb3B0aW9ucyB0byBjdXN0b21pemUgZmlsdGVyaW5nIGZvciB0aGUgcGFydGljdWxhciBjb2x1bW4uXG4gICAgICogXG4gICAgICogIEBkZWZhdWx0IG51bGxcbiAgICAgKiAgICAgXG4gICAgICovXG4gICAgcHVibGljIGZpbHRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgYGZpbHRlckJhclRlbXBsYXRlYCBpcyB1c2VkIHRvIGFkZCBhIGN1c3RvbSBjb21wb25lbnQgaW5zdGVhZCBvZiBkZWZhdWx0IGlucHV0IGNvbXBvbmVudCBmb3IgZmlsdGVyIGJhci4gXG4gICAgICogSXQgaGF2ZSBjcmVhdGUgYW5kIHJlYWQgZnVuY3Rpb25zLiBcbiAgICAgKiAqIGNyZWF0ZTogSXQgaXMgdXNlZCBmb3IgY3JlYXRpbmcgY3VzdG9tIGNvbXBvbmVudHMuIFxuICAgICAqICogcmVhZDogSXQgaXMgdXNlZCB0byBwZXJmb3JtIGN1c3RvbSBmaWx0ZXIgYWN0aW9uLlxuICAgICAqIFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxkaXYgaWQ9XCJHcmlkXCI+PC9kaXY+XG4gICAgICpgYGBcbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKmxldCBncmlkT2JqOiBHcmlkID0gbmV3IEdyaWQoe1xuICAgICAqZGF0YVNvdXJjZTogZmlsdGVyRGF0YSxcbiAgICAgKmNvbHVtbnM6IFtcbiAgICAgKiAgeyBmaWVsZDogJ09yZGVySUQnLCBoZWFkZXJUZXh0OiAnT3JkZXIgSUQnIH0sXG4gICAgICogIHtcbiAgICAgKiAgICAgZmllbGQ6ICdFbXBsb3llZUlEJywgZmlsdGVyQmFyVGVtcGxhdGU6IHtcbiAgICAgKiAgICAgICAgY3JlYXRlOiAoYXJnczogeyBlbGVtZW50OiBFbGVtZW50LCBjb2x1bW46IENvbHVtbiB9KSA9PiB7XG4gICAgICogICAgICAgICAgICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgKiAgICAgICAgICAgICBpbnB1dC5pZCA9ICdFbXBsb3llZUlEJztcbiAgICAgKiAgICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAqICAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgKiAgICAgICAgfSxcbiAgICAgKiAgICAgICAgd3JpdGU6IChhcmdzOiB7IGVsZW1lbnQ6IEVsZW1lbnQsIGNvbHVtbjogQ29sdW1uIH0pID0+IHtcbiAgICAgKiAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFyZ3MuY29sdW1uLmZpbHRlckJhclRlbXBsYXRlLnJlYWQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICogICAgICAgIH0sXG4gICAgICogICAgICAgIHJlYWQ6IChhcmdzOiB7IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNvbHVtbkluZGV4OiBudW1iZXIsIGNvbHVtbjogQ29sdW1uIH0pID0+IHtcbiAgICAgKiAgICAgICAgICAgIGdyaWRPYmouZmlsdGVyQnlDb2x1bW4oYXJncy5lbGVtZW50LmlkLCAnZXF1YWwnLCBhcmdzLmVsZW1lbnQudmFsdWUpO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgICB9XG4gICAgICogfV0sXG4gICAgICogIGFsbG93RmlsdGVyaW5nOiB0cnVlXG4gICAgICp9KTtcbiAgICAgKmdyaWRPYmouYXBwZW5kVG8oJyNHcmlkJyk7XG4gICAgICpgYGBcbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXJCYXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBtYXBwaW5nIGNvbHVtbiBuYW1lIG9mIHRoZSBmb3JlaWduIGRhdGEgc291cmNlLiBcbiAgICAgKiBJZiBpdCBpcyBub3QgZGVmaW5lZCB0aGVuIHRoZSBgY29sdW1ucy5maWVsZGAgd2lsbCBiZSBjb25zaWRlcmVkIGFzIG1hcHBpbmcgY29sdW1uIG5hbWVcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGZvcmVpZ25LZXlGaWVsZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBkaXNwbGF5IGNvbHVtbiBuYW1lIGZyb20gdGhlIGZvcmVpZ24gZGF0YSBzb3VyY2Ugd2hpY2ggd2lsbCBiZSBvYnRhaW5lZCBmcm9tIGNvbXBhcmluZyBsb2NhbCBhbmQgZm9yZWlnbiBkYXRhXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JlaWduS2V5VmFsdWU6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgaXMgdXNlZCB0byBjaGFuZ2UgZGlzcGxheSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBmb3JtYXQgYW5kIGRvZXMgbm90IGFmZmVjdCB0aGUgb3JpZ2luYWwgZGF0YS4gXG4gICAgICogR2V0cyB0aGUgZm9ybWF0IGZyb20gdGhlIHVzZXIgd2hpY2ggY2FuIGJlIHN0YW5kYXJkIG9yIGN1c3RvbSBcbiAgICAgKiBbYG51bWJlcmBdKC4uLy4uL2NvbW1vbi9pbnRlcm5hdGlvbmFsaXphdGlvbi8jbWFuaXB1bGF0aW5nLW51bWJlcnMpIFxuICAgICAqIGFuZCBbYGRhdGVgXSguLi8uLi9jb21tb24vaW50ZXJuYXRpb25hbGl6YXRpb24vI21hbmlwdWxhdGluZy1kYXRldGltZSkgZm9ybWF0cy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGZvcm1hdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBtZXRob2Qgd2hpY2ggaXMgdXNlZCB0byBhY2hpZXZlIGN1c3RvbSBmb3JtYXR0aW5nIGZyb20gYW4gZXh0ZXJuYWwgZnVuY3Rpb24uIFxuICAgICAqIFRoaXMgZnVuY3Rpb24gdHJpZ2dlcnMgYmVmb3JlIHJlbmRlcmluZyBvZiBlYWNoIGNlbGwuXG4gICAgICogXG4gICAgICogYGBgaHRtbFxuICAgICAqPGRpdiBpZD1cIkdyaWRcIj48L2Rpdj5cbiAgICAgKmBgYFxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqY2xhc3MgRXh0ZW5kZWRGb3JtYXR0ZXIgaW1wbGVtZW50cyBJQ2VsbEZvcm1hdHRlciB7XG4gICAgICpwdWJsaWMgZ2V0VmFsdWUoY29sdW1uOiBDb2x1bW4sIGRhdGE6IE9iamVjdCk6IE9iamVjdCB7XG4gICAgICogIHJldHVybiAnPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgKGRhdGFbJ1ZlcmlmaWVkJ10gPyAnZ3JlZW4nIDogJ3JlZCcpICsgJ1wiPjxpPicgKyBkYXRhWydWZXJpZmllZCddICsgJzwvaT48c3Bhbj4nO1xuICAgICAqfVxuICAgICAqfVxuICAgICAqbGV0IGdyaWRPYmo6IEdyaWQgPSBuZXcgR3JpZCh7XG4gICAgICogICAgZGF0YVNvdXJjZTogZmlsdGVyRGF0YSxcbiAgICAgKiAgICBjb2x1bW5zOiBbXG4gICAgICogICAgICAgIHsgZmllbGQ6ICdTaGlwTmFtZScsIGhlYWRlclRleHQ6ICdTaGlwIE5hbWUnIH0sXG4gICAgICogICAgICAgIHsgZmllbGQ6ICdWZXJpZmllZCcsIGhlYWRlclRleHQ6ICdWZXJpZmllZCBTdGF0dXMnLCBmb3JtYXR0ZXI6IEV4dGVuZGVkRm9ybWF0dGVyIH1dXG4gICAgICp9KTtcbiAgICAgKmdyaWRPYmouYXBwZW5kVG8oJyNHcmlkJyk7XG4gICAgICpgYGBcbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXR0ZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogZGVmaW5lcyB3aGljaCBzaWRlIHRoZSBjb2x1bW4gbmVlZCB0byBmcmVlemUgXG4gICAgICogVGhlIGF2YWlsYWJsZSBidWlsdC1pbiBmcmVlemUgZGlyZWN0aW9ucyBhcmUgXG4gICAgICogKiBMZWZ0IC0gRnJlZXplIHRoZSBjb2x1bW4gYXQgbGVmdCBzaWRlLiBcbiAgICAgKiAqIFJpZ2h0IC0gRnJlZXplIHRoZSBjb2x1bW4gYXQgcmlnaHQgc2lkZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGZyZWV6ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBoZWFkZXIgdGV4dCBvZiBjb2x1bW4gd2hpY2ggaXMgdXNlZCB0byBkaXNwbGF5IGluIGNvbHVtbiBoZWFkZXIuIFxuICAgICAqIElmIGBoZWFkZXJUZXh0YCBpcyBub3QgZGVmaW5lZCwgdGhlbiBmaWVsZCBuYW1lIHZhbHVlIHdpbGwgYmUgYXNzaWduZWQgdG8gaGVhZGVyIHRleHQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZSB0aGUgYWxpZ25tZW50IG9mIGNvbHVtbiBoZWFkZXIgd2hpY2ggaXMgdXNlZCB0byBhbGlnbiB0aGUgdGV4dCBvZiBjb2x1bW4gaGVhZGVyLlxuICAgICAqIEBhc3BkZWZhdWx0dmFsdWVpZ25vcmUgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJUZXh0QWxpZ246IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgbWV0aG9kIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGhlYWRlciBjZWxsIHZhbHVlcyBmcm9tIGV4dGVybmFsIGZ1bmN0aW9uIGFuZCBkaXNwbGF5IHRoaXMgb24gZWFjaCBjZWxsIHJlbmRlcmVkLlxuICAgICAqIFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxkaXYgaWQ9XCJHcmlkXCI+PC9kaXY+XG4gICAgICpgYGBcbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKmxldCBncmlkT2JqOiBHcmlkID0gbmV3IEdyaWQoe1xuICAgICAqZGF0YVNvdXJjZTogW3sgRW1wbG95ZWVJRDogMSwgRW1wbG95ZWVOYW1lOiBbJ0pvaG4nLCAnTSddIH0sIHsgRW1wbG95ZWVJRDogMiwgRW1wbG95ZWVOYW1lOiBbJ1BldGVyJywgJ0EnXSB9XSxcbiAgICAgKmNvbHVtbnM6IFtcbiAgICAgKiAgICB7IGZpZWxkOiAnRW1wbG95ZWVJRCcsIGhlYWRlclRleHQ6ICdFbXBsb3llZSBJRCcgfSxcbiAgICAgKiAgICB7IGZpZWxkOiAnRW1wbG95ZWVOYW1lJywgaGVhZGVyVGV4dDogJ0VtcGxveWVlIEZpcnN0IE5hbWUnLFxuICAgICAqICAgICAgaGVhZGVyVmFsdWVBY2Nlc3NvcjogKGZpZWxkOiBzdHJpbmcsY29sdW1uOiBDb2x1bW4pID0+IHtcbiAgICAgKiAgICAgICAgICAgIHJldHVybiBcIm5ld2hlYWRlcm5hbWVcIjtcbiAgICAgKiAgICAgICAgfSxcbiAgICAgKiAgICB9XVxuICAgICAqfSk7XG4gICAgICpgYGBcbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJWYWx1ZUFjY2Vzc29yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIGNvbHVtbiB2aXNpYmlsaXR5IGNhbiBjaGFuZ2UgYmFzZWQgb24gaXRzIFtgTWVkaWEgUXVlcmllc2BdKGh0dHA6Ly9jc3NtZWRpYXF1ZXJpZXMuY29tL3doYXQtYXJlLWNzcy1tZWRpYS1xdWVyaWVzLmh0bWwpLiBcbiAgICAgKiBgaGlkZUF0TWVkaWFgIGFjY2VwdHMgb25seSB2YWxpZCBNZWRpYSBRdWVyaWVzLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGhpZGVBdE1lZGlhOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEdldHMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIHZhbHVlIG9mIHRoZSBjb2x1bW4uIEl0IGlzIHVzZWQgdG8gZ2V0IHRoZSBvYmplY3QuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpbmRleDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBZb3UgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGZyZWV6ZSBzZWxlY3RlZCBjb2x1bW5zIGluIGdyaWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNGcm96ZW46IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGlzSWRlbnRpdHlgIGlzIHNldCB0byB0cnVlLCB0aGVuIHRoaXMgY29sdW1uIGlzIGNvbnNpZGVyZWQgYXMgaWRlbnRpdHkgY29sdW1uLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGlzSWRlbnRpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogSWYgYGlzUHJpbWFyeUtleWAgaXMgc2V0IHRvIHRydWUsIGNvbnNpZGVycyB0aGlzIGNvbHVtbiBhcyB0aGUgcHJpbWFyeSBrZXkgY29uc3RyYWludC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBpc1ByaW1hcnlLZXk6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgbWFwcGluZyBjb2x1bW4gbmFtZSBvZiB0aGUgZm9yZWlnbiBkYXRhIHNvdXJjZS4gXG4gICAgICogSWYgaXQgaXMgbm90IGRlZmluZWQgdGhlbiB0aGUgYGNvbHVtbnMuZmllbGRgIHdpbGwgYmUgY29uc2lkZXJlZCBhcyBtYXBwaW5nIGNvbHVtbiBuYW1lXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9ja0NvbHVtbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBjb2x1bW4gaW4gcGl4ZWwgb3IgcGVyY2VudGFnZSwgd2hpY2ggd2lsbCByZXN0cmljdCByZXNpemluZyBiZXlvbmQgdGhpcyBwaXhlbCBvciBwZXJjZW50YWdlLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIG1heFdpZHRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIG1pbmltdW0gd2lkdGggb2YgdGhlIGNvbHVtbiBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBtaW5XaWR0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJZiBgc2hvd0NvbHVtbk1lbnVgIHNldCB0byBmYWxzZSwgdGhlbiBpdCBkaXNhYmxlIHRoZSBjb2x1bW4gbWVudSBvZiBhIHBhcnRpY3VsYXIgY29sdW1uLiBcbiAgICAgKiBCeSBkZWZhdWx0IGNvbHVtbiBtZW51IHdpbGwgc2hvdyBmb3IgYWxsIGNvbHVtbnNcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIHNob3dDb2x1bW5NZW51OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIElmIGBzaG93SW5Db2x1bW5DaG9vc2VyYCBzZXQgdG8gZmFsc2UsIHRoZW4gaGlkZXMgdGhlIHBhcnRpY3VsYXIgY29sdW1uIGluIGNvbHVtbiBjaG9vc2VyLiBcbiAgICAgKiBCeSBkZWZhdWx0IGFsbCBjb2x1bW5zIGFyZSBkaXNwbGF5ZWQgaW4gY29sdW1uIENob29zZXIuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93SW5Db2x1bW5DaG9vc2VyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEl0IGRlZmluZXMgdGhlIGN1c3RvbSBzb3J0IGNvbXBhcmVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3J0Q29tcGFyZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgYWxpZ25tZW50IG9mIHRoZSBjb2x1bW4gaW4gYm90aCBoZWFkZXIgYW5kIGNvbnRlbnQgY2VsbHMuXG4gICAgICogQGRlZmF1bHQgTGVmdFxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0QWxpZ246IGFueTtcbiAgICAvKiogXG4gICAgICogR2V0cyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgdmFsdWUgb2YgdGhlIGNvbHVtbi4gSXQgaXMgdXNlZCB0byBnZXQgdGhlIG9iamVjdC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB1aWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogYGVkaXRUeXBlYCguLi8uLi9ncmlkL2VkaXQvI2NlbGwtZWRpdC10eXBlLWFuZC1pdHMtcGFyYW1zKSBEZWZpbmVzIHJ1bGVzIHRvIHZhbGlkYXRlIGRhdGEgYmVmb3JlIGNyZWF0aW5nIGFuZCB1cGRhdGluZy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHZhbGlkYXRpb25SdWxlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBtZXRob2QgdXNlZCB0byBhcHBseSBjdXN0b20gY2VsbCB2YWx1ZXMgZnJvbSBleHRlcm5hbCBmdW5jdGlvbiBhbmQgZGlzcGxheSB0aGlzIG9uIGVhY2ggY2VsbCByZW5kZXJlZC5cbiAgICAgKiBcbiAgICAgKiBgYGBodG1sXG4gICAgICo8ZGl2IGlkPVwiR3JpZFwiPjwvZGl2PlxuICAgICAqYGBgXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpsZXQgZ3JpZE9iajogR3JpZCA9IG5ldyBHcmlkKHtcbiAgICAgKmRhdGFTb3VyY2U6IFt7IEVtcGxveWVlSUQ6IDEsIEVtcGxveWVlTmFtZTogWydKb2huJywgJ00nXSB9LCB7IEVtcGxveWVlSUQ6IDIsIEVtcGxveWVlTmFtZTogWydQZXRlcicsICdBJ10gfV0sXG4gICAgICpjb2x1bW5zOiBbXG4gICAgICogICAgeyBmaWVsZDogJ0VtcGxveWVlSUQnLCBoZWFkZXJUZXh0OiAnRW1wbG95ZWUgSUQnIH0sXG4gICAgICogICAgeyBmaWVsZDogJ0VtcGxveWVlTmFtZScsIGhlYWRlclRleHQ6ICdFbXBsb3llZSBGaXJzdCBOYW1lJyxcbiAgICAgKiAgICAgIHZhbHVlQWNjZXNzb3I6IChmaWVsZDogc3RyaW5nLCBkYXRhOiBPYmplY3QsIGNvbHVtbjogQ29sdW1uKSA9PiB7XG4gICAgICogICAgICAgICAgICByZXR1cm4gZGF0YVsnRW1wbG95ZWVOYW1lJ11bMF07XG4gICAgICogICAgICAgIH0sXG4gICAgICogICAgfV1cbiAgICAgKn0pO1xuICAgICAqYGBgXG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsdWVBY2Nlc3NvcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJZiBgdmlzaWJsZWAgaXMgc2V0IHRvIGZhbHNlLCBoaWRlcyB0aGUgcGFydGljdWxhciBjb2x1bW4uIEJ5IGRlZmF1bHQsIGFsbCBjb2x1bW5zIGFyZSBkaXNwbGF5ZWQuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyB2aXNpYmxlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4gaW4gcGl4ZWxzIG9yIHBlcmNlbnRhZ2UuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgd2lkdGg6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgY29sdW1uIHRlbXBsYXRlIHRoYXQgcmVuZGVycyBjdXN0b21pemVkIGVsZW1lbnQgaW4gZWFjaCBjZWxsIG9mIHRoZSBjb2x1bW4uIFxuICAgICAqIEl0IGFjY2VwdHMgZWl0aGVyIFt0ZW1wbGF0ZSBzdHJpbmddKC4uLy4uL2NvbW1vbi90ZW1wbGF0ZS1lbmdpbmUvKSBvciBIVE1MIGVsZW1lbnQgSUQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3RlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0ZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBjb2x1bW4gdGVtcGxhdGUgYXMgc3RyaW5nIG9yIEhUTUwgZWxlbWVudCBJRCB3aGljaCBpcyB1c2VkIHRvIGFkZCBjdXN0b21pemVkIGVsZW1lbnQgaW4gdGhlIGNvbHVtbiBoZWFkZXIuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2hlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBoZWFkZXJUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2NvbW1hbmRzVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGNvbW1hbmRzVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdmaWx0ZXJJdGVtVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGZpbHRlcl9pdGVtVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgY2VsbCBlZGl0IHRlbXBsYXRlIHRoYXQgdXNlZCBhcyBlZGl0b3IgZm9yIGEgcGFydGljdWxhciBjb2x1bW4uIFxuICAgICAqIEl0IGFjY2VwdHMgZWl0aGVyIHRlbXBsYXRlIHN0cmluZyBvciBIVE1MIGVsZW1lbnQgSUQuXG4gICAgICogQGFzcGlnbm9yZSBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdlZGl0VGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGVkaXRUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBmaWx0ZXIgdGVtcGxhdGUvVUkgdGhhdCB1c2VkIGFzIGZpbHRlciBmb3IgYSBwYXJ0aWN1bGFyIGNvbHVtbi4gXG4gICAgICogSXQgYWNjZXB0cyBlaXRoZXIgdGVtcGxhdGUgc3RyaW5nIG9yIEhUTUwgZWxlbWVudCBJRC5cbiAgICAgKiBAYXNwaWdub3JlIFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2ZpbHRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBmaWx0ZXJUZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQ29sdW1uIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtZ3JpZD5lLWNvbHVtbnMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQ29sdW1uRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtbnNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8Q29sdW1uc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY29sdW1ucycpO1xuICAgIH1cbn0iXX0=