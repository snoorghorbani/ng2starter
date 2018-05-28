/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
export class DiagramModuleContainerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DiagramModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-module-container",
                template: `<div fxflex="100" fxLayout="column">
    <router-outlet></router-outlet>
</div>
`
            },] },
];
/** @nocollapse */
DiagramModuleContainerComponent.ctorParameters = () => [
    { type: DiagramService }
];
function DiagramModuleContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramModuleContainerComponent.prototype.service;
}
//# sourceMappingURL=diagram-module-container.component.js.map
