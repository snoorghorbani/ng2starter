/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
var DiagramModuleContainerComponent = /** @class */ (function () {
    /**
     * @param {?} service
     */
    function DiagramModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    DiagramModuleContainerComponent.prototype.ngOnInit = function () { };
    return DiagramModuleContainerComponent;
}());
export { DiagramModuleContainerComponent };
DiagramModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-module-container",
                template: "<div fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
            },] },
];
/** @nocollapse */
DiagramModuleContainerComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };
function DiagramModuleContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramModuleContainerComponent.prototype.service;
}
//# sourceMappingURL=diagram-module-container.component.js.map
