/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class PageService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} _location
     * @param {?} userFacadeService
     */
    constructor(http, store, configurationService, _location, userFacadeService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this._location = _location;
        this.userFacadeService = userFacadeService;
        this.userId$ = this.userFacadeService.getDisplayName().pipe(filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i != undefined)));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.get !== "")), take(1), combineLatest(this.userId$), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([config, userId]) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name })))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.delete !== "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id })))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @return {?}
     */
    getPages() {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.find != "")), combineLatest(this.userId$), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([config, userId]) => this.http.get(config.env.frontend_server + config.endpoints.find))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    upsert(page) {
        /** @type {?} */
        const model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.upsert != "")), take(1), combineLatest(this.userId$), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([config, userId]) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody()))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)), tap((/**
         * @return {?}
         */
        () => this._location.back())));
    }
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} name
     * @return {?}
     */
    selectByName(name) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.pages.db.data))
            .pipe(filter((/**
         * @param {?} pages
         * @return {?}
         */
        pages => pages != null)), map((/**
         * @param {?} pages
         * @return {?}
         */
        pages => pages.find((/**
         * @param {?} page
         * @return {?}
         */
        page => page.name == name)))), tap((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            if (page == null) {
                debugger;
                this.store.dispatch(new GetPageStartAction(name));
            }
        })))
            .subscribe((/**
         * @param {?} page
         * @return {?}
         */
        page => subject.next(page)));
        return subject.asObservable();
    }
}
PageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: PageConfigurationService },
    { type: Location },
    { type: UserFacadeService }
];
if (false) {
    /** @type {?} */
    PageService.prototype.userId$;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype._location;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.userFacadeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9wYWdlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLGtCQUFrQixFQUFzQixNQUFNLE9BQU8sQ0FBQztBQUNyRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBRXZCLFlBQ1MsSUFBZ0IsRUFDaEIsS0FBc0IsRUFDdEIsb0JBQThDLEVBQzlDLFNBQW1CLEVBQ25CLGlCQUFvQztRQUpwQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMEI7UUFDOUMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcs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TyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQTlFRCxVQUFVOzs7O1lBWEYsVUFBVTtZQURWLEtBQUs7WUFNTCx3QkFBd0I7WUFJeEIsUUFBUTtZQVBSLGlCQUFpQjs7OztJQVd6Qiw4QkFBNEI7Ozs7O0lBRTNCLDJCQUF3Qjs7Ozs7SUFDeEIsNEJBQThCOzs7OztJQUM5QiwyQ0FBc0Q7Ozs7O0lBQ3RELGdDQUEyQjs7Ozs7SUFDM0Isd0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCwgR2V0UGFnZVN0YXJ0QWN0aW9uLCBVcHNlcnRQYWdlQXBpTW9kZWwsIERlbGV0ZVBhZ2VBcGlNb2RlbCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIHtcclxuXHR1c2VySWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VySWQkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpLnBpcGUoZmlsdGVyKGkgPT4gaSAhPSB1bmRlZmluZWQpKTtcclxuXHR9XHJcblxyXG5cdGdldChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgbmFtZSB9KSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZGVsZXRlKHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5kZWxldGUsIHsgX2lkIH0pKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBEZWxldGVQYWdlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRQYWdlcygpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFBhZ2VzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydDxUPihwYWdlOiBVcHNlcnRQYWdlQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRQYWdlQXBpTW9kZWwuUmVxdWVzdChwYWdlKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRQYWdlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHRcdHRhcCgoKSA9PiB0aGlzLl9sb2NhdGlvbi5iYWNrKCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUobmFtZTogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucGFnZXMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKHBhZ2VzID0+IHBhZ2VzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChwYWdlcyA9PiBwYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5uYW1lID09IG5hbWUpKSxcclxuXHRcdFx0XHR0YXAocGFnZSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlU3RhcnRBY3Rpb24obmFtZSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShwYWdlID0+IHN1YmplY3QubmV4dChwYWdlKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIl19