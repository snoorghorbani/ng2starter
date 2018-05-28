/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { PasswordService } from "../services/password.service";
import { ChangePasswordActionTypes, ChangePasswordStart, ChangePasswordSucceed, ChangePasswordFailed } from "./change-password.actions";
var ChangePasswordEffects = /** @class */ (function () {
    function ChangePasswordEffects(actions$, router, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ChangePasswordRequest$ = this.actions$
            .ofType(ChangePasswordActionTypes.CHANGE_PASSWORD)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new ChangePasswordStart(data); }));
        this.RequestChangePasswordLink$ = this.actions$.ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.passwordService
                .changePassword(data)
                .map(function (res) { return new ChangePasswordSucceed(res); })
                .catch(function () { return Observable.of(new ChangePasswordFailed()); });
        }));
    }
    ChangePasswordEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChangePasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: PasswordService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ChangePasswordEffects.prototype, "RequestChangePasswordLink$", void 0);
    return ChangePasswordEffects;
}());
export { ChangePasswordEffects };
function ChangePasswordEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordEffects.prototype.ChangePasswordRequest$;
    /** @type {?} */
    ChangePasswordEffects.prototype.RequestChangePasswordLink$;
    /** @type {?} */
    ChangePasswordEffects.prototype.actions$;
    /** @type {?} */
    ChangePasswordEffects.prototype.router;
    /** @type {?} */
    ChangePasswordEffects.prototype.passwordService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFDTix5QkFBeUIsRUFDekIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsTUFBTSwyQkFBMkIsQ0FBQzs7SUFJbEMsK0JBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLGVBQWdDO1FBQTVHLGlCQUFnSDtRQUE1RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtzQ0FHbkYsSUFBSSxDQUFDLFFBQVE7YUFDcEMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQzthQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7MENBR3BELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUN2RyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUM3QixTQUFTLENBQUMsVUFBQyxJQUFpQztZQUMzQyxNQUFNLENBQUMsS0FBSSxDQUFDLGVBQWU7aUJBQ3pCLGNBQWMsQ0FBQyxJQUFJLENBQUM7aUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLENBQUM7aUJBQzFDLEtBQUssQ0FBQyxjQUFNLE9BQUEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixFQUFFLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1NBQ3pELENBQUMsQ0FDRjtLQWhCK0c7O2dCQUZoSCxVQUFVOzs7O2dCQWZGLE9BQU87Z0JBSFAsTUFBTTtnQkFVTixlQUFlOzs7UUFZdEIsTUFBTSxFQUFFOzs7O1FBS1IsTUFBTSxFQUFFOzs7Z0NBNUJWOztTQW9CYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Bhc3N3b3JkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLFxyXG5cdENoYW5nZVBhc3N3b3JkU3RhcnQsXHJcblx0Q2hhbmdlUGFzc3dvcmRTdWNjZWVkLFxyXG5cdENoYW5nZVBhc3N3b3JkRmFpbGVkXHJcbn0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRDaGFuZ2VQYXNzd29yZFJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgQ2hhbmdlUGFzc3dvcmRTdGFydChkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRSZXF1ZXN0Q2hhbmdlUGFzc3dvcmRMaW5rJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFzc3dvcmRTZXJ2aWNlXHJcblx0XHRcdFx0LmNoYW5nZVBhc3N3b3JkKGRhdGEpXHJcblx0XHRcdFx0Lm1hcChyZXMgPT4gbmV3IENoYW5nZVBhc3N3b3JkU3VjY2VlZChyZXMpKVxyXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBDaGFuZ2VQYXNzd29yZEZhaWxlZCgpKSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdC8vQEVmZmVjdCgpXHJcblx0Ly8gICAgUmVzZXRQYXNzd29yZCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gICAgICAgIC5vZlR5cGUoUmVzZXRQYXNzd29yZEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEKVxyXG5cdC8vICAgICAgICAubWFwKHRvUGF5bG9hZClcclxuXHQvLyAgICAgICAgLm1hcCgoZGF0YSkgPT4gbmV3IFJlc2V0UGFzc3dvcmRTdGFydChkYXRhKSk7XHJcblx0Ly9cclxuXHQvLyAgICBARWZmZWN0KClcclxuXHQvLyAgICBSZXNldFBhc3N3b3JkTGluayQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gICAgICAgIC5vZlR5cGUoUmVzZXRQYXNzd29yZEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX1NUQVJUKVxyXG5cdC8vICAgICAgICAubWFwKHRvUGF5bG9hZClcclxuXHQvLyAgICAgICAgLnN3aXRjaE1hcCgoZGF0YTogUmVzZXRQYXNzd29yZE1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHQvLyAgICAgICAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEpXHJcblx0Ly8gICAgICAgICAgICAgICAgLm1hcCgoKSA9PiBuZXcgUmVzZXRQYXNzd29yZFN1Y2NlZWQoKSlcclxuXHQvLyAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgUmVzZXRQYXNzd29yZEZhaWxlZCgpKSlcclxuXHQvLyAgICAgICAgfSk7XHJcbn1cclxuIl19