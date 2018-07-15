/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { map, filter, tap, take, switchMap, combineLatest } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { UserFacadeService } from "@soushians/user";
import { GridConfigurationService } from "./grid-configuration.service";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
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
        this.userId$ = this.userFacadeService.getDisplayName().filter(function (i) { return i != undefined; });
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], userId = _b[1];
            debugger;
            return _this.http
                .get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {
                params: {
                    userId: userId
                }
            })
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
     * @param {?} grid
     * @return {?}
     */
    GridService.prototype.upsert = /**
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        var _this = this;
        var /** @type {?} */ model = new UpsertGridApiModel.Request(grid);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {
                params: {
                    userId: userId
                }
            });
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
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
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
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
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
function GridService_tsickle_Closure_declarations() {
    /** @type {?} */
    GridService.prototype.userId$;
    /** @type {?} */
    GridService.prototype.http;
    /** @type {?} */
    GridService.prototype.store;
    /** @type {?} */
    GridService.prototype.userFacadeService;
    /** @type {?} */
    GridService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7SUFVcEUscUJBQ1MsTUFDQSxPQUNBLG1CQUNBO1FBSEEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUU1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksU0FBUyxFQUFkLENBQWMsQ0FBQyxDQUFDO0tBQ25GOzs7OztJQUVELHlCQUFH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LE9BQUEsS0FBSyxJQUFJLElBQUksRUFBYixDQUFhLENBQUMsRUFDOUIsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFmLENBQWUsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0QsQ0FBQyxDQUNGO2FBQ0EsU0FBUyxDQUFDLFVBQUEsZUFBZSxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7O2dCQTNGRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQWhCUSxVQUFVO2dCQUVWLEtBQUs7Z0JBR0wsaUJBQWlCO2dCQUVqQix3QkFBd0I7OztzQkFUakM7O1NBbUJhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdldEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkU2VydmljZSB7XHJcblx0dXNlcklkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlcklkJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKS5maWx0ZXIoaSA9PiBpICE9IHVuZGVmaW5lZCk7XHJcblx0fVxyXG5cclxuXHRnZXQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHRcdC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSksIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5waXBlKG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JpZHMoKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydChncmlkOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdChncmlkKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ly8gZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKGdyaWRzID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChncmlkcyA9PiBncmlkcy5maW5kKGdyaWQgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKGdyaWQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKEZvcm1TY2hlbWFNb2RlbCA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblx0c2VsZWN0QnlPaWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihncmlkcyA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoZ3JpZHMgPT4gZ3JpZHMuZmluZChncmlkID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcChncmlkID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShGb3JtU2NoZW1hTW9kZWwgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==