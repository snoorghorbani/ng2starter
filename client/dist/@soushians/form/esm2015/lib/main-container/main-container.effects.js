/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Actions } from "@ngrx/effects";
import { FormService } from "../services";
export class FormEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
    }
}
FormEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FormEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
function FormEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    FormEffects.prototype.actions$;
    /** @type {?} */
    FormEffects.prototype.router;
    /** @type {?} */
    FormEffects.prototype.service;
}
//# sourceMappingURL=main-container.effects.js.map
