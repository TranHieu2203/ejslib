var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { SymbolPalette } from '@syncfusion/ej2-diagrams';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * Represents react SymbolPalette Component
 * ```tsx
 * <SymbolPaletteComponent></SymbolPaletteComponent>
 * ```
 */
var SymbolPaletteComponent = /** @class */ (function (_super) {
    __extends(SymbolPaletteComponent, _super);
    function SymbolPaletteComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'palettes': 'palette' };
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    SymbolPaletteComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SymbolPaletteComponent;
}(SymbolPalette));
export { SymbolPaletteComponent };
applyMixins(SymbolPaletteComponent, [ComponentBase, React.Component]);
