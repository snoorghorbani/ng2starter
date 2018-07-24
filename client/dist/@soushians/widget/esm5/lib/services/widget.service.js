/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map, filter, tap, take, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { WidgetConfigurationService } from "./widget-configuration.service";
import { stringTemplate } from "@soushians/shared";
import { GetWidgetStartAction, UpsertWidgetApiModel } from "./api";
import { Location } from "@angular/common";
var WidgetService = /** @class */ (function () {
    function WidgetService(http, store, configurationService, _location) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this._location = _location;
    }
    /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    WidgetService.prototype.get = /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), switchMap(function (config) {
            return _this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }));
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @return {?}
     */
    WidgetService.prototype.getWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ""; }), switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), map(function (response) { return response.Result; }));
    };
    /**
     * @template T
     * @param {?} widget
     * @return {?}
     */
    WidgetService.prototype.upsert = /**
     * @template T
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        var _this = this;
        var /** @type {?} */ model = new UpsertWidgetApiModel.Request(widget);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
        }), map(function (response) { return response.Result; }), tap(function () { return _this._location.back(); }));
    };
    // delete(_id: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    WidgetService.prototype.selectById = /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.widgets.db.data; })
            .pipe(filter(function (widgets) { return widgets != null; }), map(function (widgets) { return widgets.find(function (widget) { return widget._id == _id; }); }), tap(function (widget) {
            if (widget == null) {
                _this.store.dispatch(new GetWidgetStartAction(_id));
            }
        }))
            .subscribe(function (widget) { return subject.next(widget); });
        return subject.asObservable();
    };
    WidgetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WidgetService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: WidgetConfigurationService },
        { type: Location }
    ]; };
    return WidgetService;
}());
export { WidgetService };
function WidgetService_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetService.prototype.http;
    /** @type {?} */
    WidgetService.prototype.store;
    /** @type {?} */
    WidgetService.prototype.configurationService;
    /** @type {?} */
    WidgetService.prototype._location;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBc0Isb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUkxQyx1QkFDUyxNQUNBLE9BQ0Esc0JBQ0E7UUFIQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixjQUFTLEdBQVQsU0FBUztLQUNkOzs7Ozs7SUFFSiwyQkFBRzs7Ozs7SUFBSCxVQUFPLEdBQVc7UUFBbEIsaUJBU0M7UUFSQSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQyxFQUMvQyxJ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LENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0QsQ0FBQyxDQUNGO2FBQ0EsU0FBUyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7O2dCQTNERCxVQUFVOzs7O2dCQVRGLFVBQVU7Z0JBRFYsS0FBSztnQkFJTCwwQkFBMEI7Z0JBSTFCLFFBQVE7O3dCQVhqQjs7U0FjYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpTW9kZWwsIEdldFdpZGdldFN0YXJ0QWN0aW9uLCBVcHNlcnRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25cclxuXHQpIHt9XHJcblxyXG5cdGdldDxUPihfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IF9pZCB9KSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRXaWRnZXRzKCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmZpbmQgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFdpZGdldHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHdpZGdldDogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3Qod2lkZ2V0KTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdFx0dGFwKCgpID0+IHRoaXMuX2xvY2F0aW9uLmJhY2soKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxXaWRnZXRNb2RlbDxUPj4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh3aWRnZXRzKSA9PiB3aWRnZXRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgod2lkZ2V0cykgPT4gd2lkZ2V0cy5maW5kKCh3aWRnZXQpID0+IHdpZGdldC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh3aWRnZXQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKHdpZGdldCkgPT4gc3ViamVjdC5uZXh0KHdpZGdldCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==