/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { FormService } from "../services/form.service";
import { AddFormActionTypes, AddFormStartAction, AddFormSucceedAction, AddFormFailedAction } from "./add-form.actions";
import { map, switchMap, catchError } from "rxjs/operators";
export class AddFormEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.AddForm$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM)
            .pipe(map(action => action.payload), map(data => new AddFormStartAction(data)));
        this.AddFormStart$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.add(data)), map(res => new AddFormSucceedAction()), catchError(() => Observable.of(new AddFormFailedAction())));
    }
}
AddFormEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AddFormEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AddFormEffects.prototype, "AddForm$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AddFormEffects.prototype, "AddFormStart$", void 0);
function AddFormEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormEffects.prototype.AddForm$;
    /** @type {?} */
    AddFormEffects.prototype.AddFormStart$;
    /** @type {?} */
    AddFormEffects.prototype.actions$;
    /** @type {?} */
    AddFormEffects.prototype.router;
    /** @type {?} */
    AddFormEffects.prototype.service;
}
//# sourceMappingURL=add-form.effects.js.map
