import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Menu } from '@syncfusion/ej2-navigations';
import { MenuItemsDirective } from './items.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular Menu Component.
 * ```html
 * <ejs-menu [items]='menuItems'></ejs-menu>
 * ```
 */
export declare class MenuComponent extends Menu implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforeClose: any;
    beforeItemRender: any;
    beforeOpen: any;
    created: any;
    onClose: any;
    onOpen: any;
    select: any;
    childItems: QueryList<MenuItemsDirective>;
    tags: string[];
    /**
     * Specifies the template for Menu item.
     * @default null
     */
    template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
