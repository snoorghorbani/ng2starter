/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { SourceService } from "../../services/source.service";
var SourceModuleContainerComponent = /** @class */ (function () {
    /**
     * @param {?} service
     */
    function SourceModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    SourceModuleContainerComponent.prototype.ngOnInit = function () { };
    return SourceModuleContainerComponent;
}());
export { SourceModuleContainerComponent };
SourceModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "source-module-container",
                template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
            },] },
];
/** @nocollapse */
SourceModuleContainerComponent.ctorParameters = function () { return [
    { type: SourceService }
]; };
function SourceModuleContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceModuleContainerComponent.prototype.service;
}
//# sourceMappingURL=source-module-container.component.js.map
