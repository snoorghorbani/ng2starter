/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class WidgetService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} _location
     */
    constructor(http, store, configurationService, _location) {
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
    get(_id) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.get !== "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id })))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @return {?}
     */
    getWidgets() {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.find != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.get(config.env.frontend_server + config.endpoints.find))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @template T
     * @param {?} widget
     * @return {?}
     */
    upsert(widget) {
        /** @type {?} */
        const model = new UpsertWidgetApiModel.Request(widget);
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.upsert != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody()))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)), tap((/**
         * @return {?}
         */
        () => this._location.back())));
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    delete(widget) {
        debugger;
        /** @type {?} */
        const widgetId = widget._id;
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.deleteItem != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.deleteItem, { widgetId })).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result))))));
    }
    /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    selectById(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.widgets.db.data))
            .pipe(filter((/**
         * @param {?} widgets
         * @return {?}
         */
        (widgets) => widgets != null)), map((/**
         * @param {?} widgets
         * @return {?}
         */
        (widgets) => widgets.find((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => widget._id == _id)))), tap((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => {
            if (widget == null) {
                this.store.dispatch(new GetWidgetStartAction(_id));
            }
        })))
            .subscribe((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => subject.next(widget)));
        return subject.asObservable();
    }
}
WidgetService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: WidgetConfigurationService },
    { type: Location }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBc0Isb0JBQW9CLEVBQUUsb0JBQW9CLEVBQXdCLE1BQU0sT0FBTyxDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTs7Ozs7OztJQUN6QixZQUNTLElBQWdCLEVBQ2hCLEtBQXNCLEVBQ3RCLG9CQUFnRCxFQUNoRCxTQUFtQjtRQUhuQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNEI7UUFDaEQsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUN4QixDQUFDOzs7Ozs7SUFFTCxHQUFHLENBQUksR0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxNQUFNOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFB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Q0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSzthQUNSLE1BQU07Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFDO2FBQ3hDLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUMsRUFDcEMsR0FBRzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBQyxFQUFDLEVBQzdELEdBQUc7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7UUFDRixDQUFDLEVBQUMsQ0FDRjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQzlDLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQWpFRCxVQUFVOzs7O1lBVEYsVUFBVTtZQURWLEtBQUs7WUFJTCwwQkFBMEI7WUFJMUIsUUFBUTs7Ozs7OztJQUtmLDZCQUF3Qjs7Ozs7SUFDeEIsOEJBQThCOzs7OztJQUM5Qiw2Q0FBd0Q7Ozs7O0lBQ3hELGtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaU1vZGVsLCBHZXRXaWRnZXRTdGFydEFjdGlvbiwgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwsIERlbGV0ZVdpZGdldEFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0U2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvblxyXG5cdCkgeyB9XHJcblxyXG5cdGdldDxUPihfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IF9pZCB9KSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRXaWRnZXRzKCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmZpbmQgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFdpZGdldHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHdpZGdldDogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3Qod2lkZ2V0KTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdFx0dGFwKCgpID0+IHRoaXMuX2xvY2F0aW9uLmJhY2soKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGRlbGV0ZSh3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3Qgd2lkZ2V0SWQgPSB3aWRnZXQuX2lkO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVJdGVtICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmRlbGV0ZTxEZWxldGVXaWRnZXRBcGlNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUl0ZW0sIHsgd2lkZ2V0SWQgfSkpLnBpcGUoXHJcblx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHRcdFx0KSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHRzZWxlY3RCeUlkPFQ+KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxUPj4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8V2lkZ2V0TW9kZWw8VD4+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigod2lkZ2V0cykgPT4gd2lkZ2V0cyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKHdpZGdldHMpID0+IHdpZGdldHMuZmluZCgod2lkZ2V0KSA9PiB3aWRnZXQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcCgod2lkZ2V0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAod2lkZ2V0ID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0U3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWRnZXQpID0+IHN1YmplY3QubmV4dCh3aWRnZXQpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=