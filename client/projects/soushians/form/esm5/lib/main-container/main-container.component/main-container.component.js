/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
var MainContainerComponent = /** @class */ (function () {
    /**
     * @param {?} route
     * @param {?} store
     */
    function MainContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    return MainContainerComponent;
}());
export { MainContainerComponent };
MainContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<router-outlet></router-outlet>"
            },] },
];
/** @nocollapse */
MainContainerComponent.ctorParameters = function () { return [
    { type: ActivatedRoute },
    { type: Store }
]; };
function MainContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MainContainerComponent.prototype.route;
    /** @type {?} */
    MainContainerComponent.prototype.store;
}
//# sourceMappingURL=main-container.component.js.map
