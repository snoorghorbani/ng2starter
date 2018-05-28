/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { SourceActionTypes, SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceService } from "../services/source.service";
var SourceEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} sourceService
     */
    function SourceEffects(actions$, router, sourceService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.sourceService
                .upsertSource(data)
                .pipe(map(function (res) { return new SourceSubmitSucceed(); }), catchError(function () { return Observable.of(new SourceSubmitFailed()); }));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(switchMap(function () {
            _this.router.navigate(["source"]);
            return Observable.empty();
        }));
    }
    return SourceEffects;
}());
export { SourceEffects };
SourceEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SourceEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: SourceService }
]; };
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SourceEffects.prototype, "afterSubmitSource$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SourceEffects.prototype, "SigninSucceed$", void 0);
function SourceEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceEffects.prototype.afterSubmitSource$;
    /** @type {?} */
    SourceEffects.prototype.SigninSucceed$;
    /** @type {?} */
    SourceEffects.prototype.actions$;
    /** @type {?} */
    SourceEffects.prototype.router;
    /** @type {?} */
    SourceEffects.prototype.sourceService;
}
//# sourceMappingURL=source.effects.js.map
