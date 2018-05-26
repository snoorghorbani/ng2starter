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
import { FormService } from "../services";
import { AddFormActionTypes, AddFormStartAction, AddFormSucceedAction, AddFormFailedAction } from "./add-form.actions";
import { map, switchMap, catchError } from "rxjs/operators";
var AddFormEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    function AddFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.AddForm$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new AddFormStartAction(data); }));
        this.AddFormStart$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.add(data); }), map(function (res) { return new AddFormSucceedAction(); }), catchError(function () { return Observable.of(new AddFormFailedAction()); }));
    }
    return AddFormEffects;
}());
export { AddFormEffects };
AddFormEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AddFormEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: FormService }
]; };
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
