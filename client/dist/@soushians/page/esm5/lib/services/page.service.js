/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map, filter, tap, take, switchMap, combineLatest } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { UserFacadeService } from "@soushians/user";
import { PageConfigurationService } from "./page-configuration.service";
import { stringTemplate } from "@soushians/shared";
import { GetPageStartAction, UpsertPageApiModel } from "./api";
import { Location } from "@angular/common";
var PageService = /** @class */ (function () {
    function PageService(http, store, configurationService, _location, userFacadeService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this._location = _location;
        this.userFacadeService = userFacadeService;
        this.userId$ = this.userFacadeService.getDisplayName().pipe(filter(function (i) { return i != undefined; }));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    PageService.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name: name }));
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    PageService.prototype.delete = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.delete !== ""; }), take(1), switchMap(function (config) {
            return _this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id: _id }));
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @return {?}
     */
    PageService.prototype.getPages = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ""; }), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.get(config.env.frontend_server + config.endpoints.find);
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.upsert = /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    function (page) {
        var _this = this;
        /** @type {?} */
        var model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
        }), map(function (response) { return response.Result; }), tap(function () { return _this._location.back(); }));
    };
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} name
     * @return {?}
     */
    PageService.prototype.selectByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        /** @type {?} */
        var subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.pages.db.data; })
            .pipe(filter(function (pages) { return pages != null; }), map(function (pages) { return pages.find(function (page) { return page.name == name; }); }), tap(function (page) {
            if (page == null) {
                debugger;
                _this.store.dispatch(new GetPageStartAction(name));
            }
        }))
            .subscribe(function (page) { return subject.next(page); });
        return subject.asObservable();
    };
    PageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PageService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: PageConfigurationService },
        { type: Location },
        { type: UserFacadeService }
    ]; };
    return PageService;
}());
export { PageService };
if (false) {
    /** @type {?} */
    PageService.prototype.userId$;
    /** @type {?} */
    PageService.prototype.http;
    /** @type {?} */
    PageService.prototype.store;
    /** @type {?} */
    PageService.prototype.configurationService;
    /** @type {?} */
    PageService.prototype._location;
    /** @type {?} */
    PageService.prototype.userFacadeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9wYWdlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFvQixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxPQUFPLENBQUM7QUFDckcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUsxQyxxQkFDUyxNQUNBLE9BQ0Esc0JBQ0EsV0FDQTtRQUpBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLGNBQVMsR0FBVCxTQUFTO1FBQ1Qsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLFNBQVMsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDO0tBQ3pGOzs7OztJQUVELHlCQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQWhCLGlCQVVDO1FBVEEsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUEzQixDQUEyQixDQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUMzQixTQUFTLENBQUMsVUFBQyxFQUFrQjtnQkFBbEIsMEJBQWtCLEVBQWhCLGNBQU0sRUFBRSxjQUFNO1lBQzFCLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQTFGLENBQTBGLENBQzFGLEVBQ0QsR0FBRyxDQUFDLFVBQUMsUUFBcUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQy9ELENBQUM7S0FDRjs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sR0FBVztRQUFsQixpQkFTQztRQVJBLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQS9GLENBQStGLENBQy9GLEVBQ0QsR0FBRyxDQUFDLFVBQUMsUUFBcUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQy9ELENBQUM7S0FDRjs7OztJQUVELDhCQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkEsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUEzQixDQUEyQixDQUFDLEVBQzdDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQzNCLFNBQVMsQ0FBQyxVQUFDLEVBQWtCO2dCQUFsQiwwQkFBa0IsRUFBaEIsY0FBTSxFQUFFLGNBQU07WUFBTyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQWpFLENBQWlFLENBQUMsRUFDcEcsR0FBRyxDQUFDLFVBQUMsUUFBbUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQzdELENBQUM7S0FDRjs7Ozs7O0lBQ0QsNEJBQU07Ozs7O0lBQU4sVUFBVSxJQUFnQztRQUExQyxpQkFZQzs7UUFYQSxJQUFNLEtBQUssR0FBRyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQTdCLENBQTZCLENBQUMsRUFDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQzNCLFNBQVMsQ0FBQyxVQUFDLEVBQWtCO2dCQUFsQiwwQkFBa0IsRUFBaEIsY0FBTSxFQUFFLGNBQU07WUFDMUIsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFBNUYsQ0FBNEYsQ0FDNUYsRUFDRCxHQUFHLENBQUMsVUFBQyxRQUFxQyxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUMsRUFDL0QsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQ2hDLENBQUM7S0FDRjtJQUNELHlCQUF5QjtJQUN6Qiw0Q0FBNEM7SUFDNUMsMkRBQTJEO0lBQzNELHdFQUF3RTtJQUN4RSxJQUFJOzs7OztJQUNKLGtDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQXpCLGlCQWdCQzs7UUFmQSxJQUFNLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBWSxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSzthQUNSLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBbkIsQ0FBbUIsQ0FBQzthQUNwQyxJQUFJLENBQ0osTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxJQUFJLElBQUksRUFBYixDQUFhLENBQUMsRUFDOUIsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFqQixDQUFpQixDQUFDLEVBQXJDLENBQXFDLENBQUMsRUFDbkQsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDakIsUUFBUSxDQUFDO2dCQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNsRDtTQUNELENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBOUVELFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFEVixLQUFLO2dCQU1MLHdCQUF3QjtnQkFJeEIsUUFBUTtnQkFQUixpQkFBaUI7O3NCQU4xQjs7U0FnQmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEdldFBhZ2VzQXBpTW9kZWwsIEdldFBhZ2VTdGFydEFjdGlvbiwgVXBzZXJ0UGFnZUFwaU1vZGVsLCBEZWxldGVQYWdlQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSB7XHJcblx0dXNlcklkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlcklkJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKS5waXBlKGZpbHRlcihpID0+IGkgIT0gdW5kZWZpbmVkKSk7XHJcblx0fVxyXG5cclxuXHRnZXQobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IG5hbWUgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZShfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGUgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmRlbGV0ZShzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlLCB7IF9pZCB9KSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogRGVsZXRlUGFnZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGFnZXMoKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRQYWdlc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cHNlcnQ8VD4ocGFnZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgVXBzZXJ0UGFnZUFwaU1vZGVsLlJlcXVlc3QocGFnZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy51cHNlcnQgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpLFxyXG5cdFx0XHR0YXAoKCkgPT4gdGhpcy5fbG9jYXRpb24uYmFjaygpKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ly8gZGVsZXRlKG5hbWU6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGFnZU1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihwYWdlcyA9PiBwYWdlcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAocGFnZXMgPT4gcGFnZXMuZmluZChwYWdlID0+IHBhZ2UubmFtZSA9PSBuYW1lKSksXHJcblx0XHRcdFx0dGFwKHBhZ2UgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UGFnZVN0YXJ0QWN0aW9uKG5hbWUpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUocGFnZSA9PiBzdWJqZWN0Lm5leHQocGFnZSkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==