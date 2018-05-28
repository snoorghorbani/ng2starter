/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { map, switchMap, catchError } from "rxjs/operators";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { UserService } from "../services/user.service";
import { SearchStartAction, SearchFailed, SearchActionTypes, SearchSucceed } from "./search.actions";
export class SearchEffects {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.canSearch$ = this.actions$
            .ofType(SearchActionTypes.SEARCH)
            .pipe(map(action => action.payload), map(data => new SearchStartAction(data)));
        this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(map(action => action.payload), switchMap((data) => {
            return this.userService.getInfo(data).pipe(map(res => {
                return res == null ? new SearchFailed() : new SearchSucceed(res);
            }), catchError(() => of(new SearchFailed())));
        }));
    }
}
SearchEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SearchEffects.prototype, "canSearch$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SearchEffects.prototype, "search$", void 0);
function SearchEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchEffects.prototype.canSearch$;
    /** @type {?} */
    SearchEffects.prototype.search$;
    /** @type {?} */
    SearchEffects.prototype.actions$;
    /** @type {?} */
    SearchEffects.prototype.userService;
}
//# sourceMappingURL=search.effects.js.map
