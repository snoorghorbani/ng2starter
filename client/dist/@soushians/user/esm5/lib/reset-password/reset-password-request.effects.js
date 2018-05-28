/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { switchMap, map, takeUntil, delay, catchError } from "rxjs/operators";
import { ResetPasswordRequestActionTypes, DisableGetLink, EnableGetLink, ResetPasswordLinkRequestStart, ResetPasswordLinkRequestSucceed, ResetPasswordLinkRequestFailed } from "./reset-password-request.actions";
import { PasswordService } from "../services/password.service";
var ResetPasswordRequestEffects = /** @class */ (function () {
    function ResetPasswordRequestEffects(actions$, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.passwordService = passwordService;
        this.ResetPasswordRequest$ = this.actions$.ofType(ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK).pipe(map(function (action) { return action.payload; }), 
        // switchMap((data: ResetPasswordRequestModel.Request) => this.passwordService.isValidResetPasswordRequest()),
        // map((isValid: boolean) => isValid ? new ResetPasswordLinkRequestStart(data) : new MaximumTryHappend())
        map(function (data) { return new ResetPasswordLinkRequestStart(data); }));
        this.MaximumTryHappend$ = this.actions$
            .ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND, ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
            .pipe(map(function () { return new DisableGetLink(); }));
        this.enableAfterTime$ = this.actions$
            .ofType(ResetPasswordRequestActionTypes.DISABLE_GET_LINK)
            .pipe(takeUntil(this.actions$.ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND)), delay(3 * 1000), map(function () { return new EnableGetLink(); }));
        this.RequestResetPasswordLink$ = this.actions$
            .ofType(ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.passwordService.requestResetPasswordLink(data); }), map(function () { return new ResetPasswordLinkRequestSucceed(); }), catchError(function () { return Observable.of(new ResetPasswordLinkRequestFailed()); }));
    }
    ResetPasswordRequestEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ResetPasswordRequestEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PasswordService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "ResetPasswordRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "MaximumTryHappend$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "enableAfterTime$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "RequestResetPasswordLink$", void 0);
    return ResetPasswordRequestEffects;
}());
export { ResetPasswordRequestEffects };
function ResetPasswordRequestEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.ResetPasswordRequest$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.MaximumTryHappend$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.enableAfterTime$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.RequestResetPasswordLink$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.actions$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.passwordService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJOUUsT0FBTyxFQUNOLCtCQUErQixFQUMvQixjQUFjLEVBQ2QsYUFBYSxFQUViLDZCQUE2QixFQUM3QiwrQkFBK0IsRUFDL0IsOEJBQThCLEVBQzlCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQUk5RCxxQ0FBb0IsUUFBc0IsRUFBVSxlQUFnQztRQUFwRixpQkFBd0Y7UUFBcEUsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtxQ0FHNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQ3pHLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDOzs7UUFHN0IsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUNwRDtrQ0FHb0IsSUFBSSxDQUFDLFFBQVE7YUFDaEMsTUFBTSxDQUNOLCtCQUErQixDQUFDLG1CQUFtQixFQUNuRCwrQkFBK0IsQ0FBQyxpQ0FBaUMsQ0FDakU7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLGNBQWMsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0NBR3BCLElBQUksQ0FBQyxRQUFRO2FBQzlCLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUN4RCxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFDcEYsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksYUFBYSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FDOUI7eUNBRzBCLElBQUksQ0FBQyxRQUFRO2FBQ3ZDLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxpQ0FBaUMsQ0FBQzthQUN6RSxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsU0FBUyxDQUFDLFVBQUMsSUFBdUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQW5ELENBQW1ELENBQUMsRUFDM0csR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLCtCQUErQixFQUFFLEVBQXJDLENBQXFDLENBQUMsRUFDaEQsVUFBVSxDQUFDLGNBQU0sT0FBQSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksOEJBQThCLEVBQUUsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDLENBQ3JFO0tBbkNzRjs7Z0JBRnhGLFVBQVU7Ozs7Z0JBbEJGLE9BQU87Z0JBZ0JQLGVBQWU7OztRQU10QixNQUFNLEVBQUU7Ozs7UUFRUixNQUFNLEVBQUU7Ozs7UUFRUixNQUFNLEVBQUU7Ozs7UUFTUixNQUFNLEVBQUU7OztzQ0FsRFY7O1NBc0JhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlVW50aWwsIGRlbGF5LCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLFxyXG5cdERpc2FibGVHZXRMaW5rLFxyXG5cdEVuYWJsZUdldExpbmssXHJcblx0TWF4aW11bVRyeUhhcHBlbmQsXHJcblx0UmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQsXHJcblx0UmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZCxcclxuXHRSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWRcclxufSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Bhc3N3b3JkLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRSZXF1ZXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRSZXNldFBhc3N3b3JkUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHQvLyBzd2l0Y2hNYXAoKGRhdGE6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5wYXNzd29yZFNlcnZpY2UuaXNWYWxpZFJlc2V0UGFzc3dvcmRSZXF1ZXN0KCkpLFxyXG5cdFx0Ly8gbWFwKChpc1ZhbGlkOiBib29sZWFuKSA9PiBpc1ZhbGlkID8gbmV3IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0KGRhdGEpIDogbmV3IE1heGltdW1UcnlIYXBwZW5kKCkpXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQoZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0TWF4aW11bVRyeUhhcHBlbmQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShcclxuXHRcdFx0UmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5NQVhJTVVNX1RSWV9IQVBQRU5ELFxyXG5cdFx0XHRSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVFxyXG5cdFx0KVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBEaXNhYmxlR2V0TGluaygpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGVuYWJsZUFmdGVyVGltZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSylcclxuXHRcdC5waXBlKFxyXG5cdFx0XHR0YWtlVW50aWwodGhpcy5hY3Rpb25zJC5vZlR5cGUoUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5NQVhJTVVNX1RSWV9IQVBQRU5EKSksXHJcblx0XHRcdGRlbGF5KDMgKiAxMDAwKSxcclxuXHRcdFx0bWFwKCgpID0+IG5ldyBFbmFibGVHZXRMaW5rKCkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRSZXF1ZXN0UmVzZXRQYXNzd29yZExpbmskID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpID0+IHRoaXMucGFzc3dvcmRTZXJ2aWNlLnJlcXVlc3RSZXNldFBhc3N3b3JkTGluayhkYXRhKSksXHJcblx0XHRcdG1hcCgoKSA9PiBuZXcgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZCgpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWQoKSkpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==