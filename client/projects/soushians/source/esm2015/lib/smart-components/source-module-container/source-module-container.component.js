/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { SourceService } from "../../services/source.service";
export class SourceModuleContainerComponent {
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
SourceModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "source-module-container",
                template: `<div fxLayoutAlign="" fxflex="100" fxLayout="column">
    <router-outlet></router-outlet>
</div>
`
            },] },
];
/** @nocollapse */
SourceModuleContainerComponent.ctorParameters = () => [
    { type: SourceService }
];
function SourceModuleContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceModuleContainerComponent.prototype.service;
}
//# sourceMappingURL=source-module-container.component.js.map
