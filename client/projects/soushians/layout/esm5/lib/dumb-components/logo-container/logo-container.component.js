/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
var LogoContainerComponent = /** @class */ (function () {
    /**
     * @param {?} sdf
     */
    function LogoContainerComponent(sdf) {
        this.sdf = sdf;
    }
    return LogoContainerComponent;
}());
export { LogoContainerComponent };
LogoContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "app-logo-container",
                template: "<div id=\"background\"></div>\n  <img class=\"shatelLogoAnimation\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                styles: [".shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
            },] },
];
/** @nocollapse */
LogoContainerComponent.ctorParameters = function () { return [
    { type: LayoutConfigurationService }
]; };
function LogoContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LogoContainerComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    LogoContainerComponent.prototype.sdf;
}
//# sourceMappingURL=logo-container.component.js.map
