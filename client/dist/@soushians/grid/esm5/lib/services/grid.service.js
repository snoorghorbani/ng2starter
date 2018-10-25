/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { map, filter, tap, take, switchMap, skipUntil } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendUser } from "@soushians/frontend-authentication";
import { UserFacadeService } from "@soushians/user";
import { stringTemplate } from "@soushians/shared";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
import { GridConfigurationService } from "./grid-configuration.service";
import { GetGridStartAction } from "./api/get-grid/get-grid.actions";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "@soushians/user";
import * as i4 from "./grid-configuration.service";
var GridService = /** @class */ (function () {
    function GridService(http, store, userFacadeService, configurationService) {
        this.http = http;
        this.store = store;
        this.userFacadeService = userFacadeService;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    GridService.prototype.get = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), skipUntil(this.store.select(getFrontendUser)), switchMap(function (config) {
            return _this.http
                .get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {})
                .pipe(map(function (response) { return response.Result; }));
        }));
    };
    /**
     * @return {?}
     */
    GridService.prototype.getGrids = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ""; }), switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), map(function (response) { return response.Result; }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridService.prototype.update_item = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.update_item != ""; }), switchMap(function (config) { return _this.http.patch(config.env.frontend_server + config.endpoints.update_item, item); }), map(function (response) { return response.Result; }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridService.prototype.update_item_access = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.update_item_access != ""; }), switchMap(function (config) {
            return _this.http.patch(config.env.frontend_server + config.endpoints.update_item_access, item);
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @param {?} grid
     * @return {?}
     */
    GridService.prototype.upsert = /**
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        var _this = this;
        /** @type {?} */
        var model = new UpsertGridApiModel.Request(grid);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
        }), map(function (response) { return response.Result; }));
    };
    // delete(_id: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} _id
     * @return {?}
     */
    GridService.prototype.selectById = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        /** @type {?} */
        var subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.grids.db.data; })
            .pipe(filter(function (grids) { return grids != null; }), map(function (grids) { return grids.find(function (grid) { return grid._id == _id; }); }), tap(function (grid) {
            if (grid == null) {
                _this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
        return subject.asObservable();
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    GridService.prototype.selectByOid = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        /** @type {?} */
        var subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.grids.db.data; })
            .pipe(filter(function (grids) { return grids != null; }), map(function (grids) { return grids.find(function (grid) { return grid._id == _id; }); }), tap(function (grid) {
            if (grid == null) {
                _this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
        return subject.asObservable();
    };
    GridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    GridService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserFacadeService },
        { type: GridConfigurationService }
    ]; };
    /** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserFacadeService), i0.inject(i4.GridConfigurationService)); }, token: GridService, providedIn: "root" });
    return GridService;
}());
export { GridService };
if (false) {
    /** @type {?} */
    GridService.prototype.http;
    /** @type {?} */
    GridService.prototype.store;
    /** @type {?} */
    GridService.prototype.userFacadeService;
    /** @type {?} */
    GridService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0lBVXBFLHFCQUNTLE1BQ0EsT0FDQSxtQkFDQTtRQUhBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0I7S0FDekI7Ozs7O0lBRUoseUJBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFBZixpQkFXQztRQVZBLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1B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QUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUM5RCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBOUZELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBbEJRLFVBQVU7Z0JBRVYsS0FBSztnQkFHTCxpQkFBaUI7Z0JBSWpCLHdCQUF3Qjs7O3NCQVhqQzs7U0FxQmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCwgc2tpcFdoaWxlLCBza2lwVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IGdldEZyb250ZW5kVXNlciB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRza2lwVW50aWwodGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRVc2VyKSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHRcdC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSksIHt9KVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRHcmlkcygpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmZpbmQpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBkYXRlX2l0ZW0oaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pik6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwZGF0ZV9pdGVtICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wYXRjaChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBkYXRlX2l0ZW0sIGl0ZW0pKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBkYXRlX2l0ZW1fYWNjZXNzKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pOiBPYnNlcnZhYmxlPEdyaWRNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy51cGRhdGVfaXRlbV9hY2Nlc3MgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucGF0Y2goY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwZGF0ZV9pdGVtX2FjY2VzcywgaXRlbSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0KGdyaWQ6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KGdyaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwge30pO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoZ3JpZHMgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKGdyaWRzID0+IGdyaWRzLmZpbmQoZ3JpZCA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoZ3JpZCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoRm9ybVNjaGVtYU1vZGVsID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RCeU9pZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKGdyaWRzID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChncmlkcyA9PiBncmlkcy5maW5kKGdyaWQgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKGdyaWQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKEZvcm1TY2hlbWFNb2RlbCA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIl19