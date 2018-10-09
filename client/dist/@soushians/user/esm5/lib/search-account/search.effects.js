/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { map, switchMap, catchError } from "rxjs/operators";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { UserService } from "../services/user.service";
import { SearchStartAction, SearchFailed, SearchActionTypes, SearchSucceed } from "./search.actions";
var SearchEffects = /** @class */ (function () {
    function SearchEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.canSearch$ = this.actions$
            .ofType(SearchActionTypes.SEARCH)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new SearchStartAction(data); }));
        this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.userService.getInfo(data).pipe(map(function (res) {
                return res == null ? new SearchFailed() : new SearchSucceed(res);
            }), catchError(function () { return of(new SearchFailed()); }));
        }));
    }
    SearchEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SearchEffects.prototype, "canSearch$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SearchEffects.prototype, "search$", void 0);
    return SearchEffects;
}());
export { SearchEffects };
if (false) {
    /** @type {?} */
    SearchEffects.prototype.canSearch$;
    /** @type {?} */
    SearchEffects.prototype.search$;
    /** @type {?} */
    SearchEffects.prototype.actions$;
    /** @type {?} */
    SearchEffects.prototype.userService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFJcEcsdUJBQW9CLFFBQXNCLEVBQVUsV0FBd0I7UUFBNUUsaUJBQWdGO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTswQkFHL0QsSUFBSSxDQUFDLFFBQVE7YUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzthQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7dUJBR3JFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDbEUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsU0FBUyxDQUFDLFVBQUMsSUFBOEI7WUFDeEMsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqRSxDQUFDLEVBQ0YsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQ3hDLENBQUM7U0FDRixDQUFDLENBQ0Y7S0FsQitFOztnQkFGaEYsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLFdBQVc7OztRQU9sQixNQUFNLEVBQUU7Ozs7UUFLUixNQUFNLEVBQUU7Ozt3QkFuQlY7O1NBV2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL29ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdGFydEFjdGlvbiwgU2VhcmNoRmFpbGVkLCBTZWFyY2hBY3Rpb25UeXBlcywgU2VhcmNoU3VjY2VlZCB9IGZyb20gXCIuL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRjYW5TZWFyY2gkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0gpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFNlYXJjaFN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHNlYXJjaCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEluZm8oZGF0YSkucGlwZShcclxuXHRcdFx0XHRtYXAocmVzID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiByZXMgPT0gbnVsbCA/IG5ldyBTZWFyY2hGYWlsZWQoKSA6IG5ldyBTZWFyY2hTdWNjZWVkKHJlcyk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU2VhcmNoRmFpbGVkKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==