/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PageService } from "../../page.service";
import { UpsertPageSucceedAction, UpsertPageFailedAction } from "./upsert-page.actions";
var UpsertPageApiEffects = /** @class */ (function () {
    function UpsertPageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return _this.service.upsert(payload); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return new UpsertPageSucceedAction(res); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return of(new UpsertPageFailedAction(err)); })));
    }
    UpsertPageApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpsertPageApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UpsertPageApiEffects.prototype, "start$", void 0);
    return UpsertPageApiEffects;
}());
export { UpsertPageApiEffects };
if (false) {
    /** @type {?} */
    UpsertPageApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    UpsertPageApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpsertPageApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXBhZ2UuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFHTix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0I7SUFFQyw4QkFBb0IsUUFBb0MsRUFBVSxPQUFvQjtRQUF0RixpQkFBMEY7UUFBdEUsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR3RGLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSxvREFBcUMsRUFDM0MsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDN0IsU0FBUzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsRUFDbEQsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQyxFQUM1QyxVQUFVOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQ3RELENBQUM7SUFUdUYsQ0FBQzs7Z0JBRjFGLFVBQVU7Ozs7Z0JBWkYsT0FBTztnQkFJUCxXQUFXOztJQWFuQjtRQURDLE1BQU0sRUFBRTs7d0RBT1A7SUFDSCwyQkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLG9CQUFvQjs7O0lBR2hDLHNDQU9FOzs7OztJQVRVLHdDQUE0Qzs7Ozs7SUFBRSx1Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0UGFnZUFjdGlvbnMsXHJcblx0VXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24sXHJcblx0VXBzZXJ0UGFnZUZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC1wYWdlLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPFVwc2VydFBhZ2VBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRtYXAocmVzID0+IG5ldyBVcHNlcnRQYWdlU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdCk7XHJcbn1cclxuIl19