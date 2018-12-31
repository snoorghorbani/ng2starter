/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.userId$ = this.userFacadeService.getDisplayName().pipe(filter(i => i != undefined));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.get !== ""), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name }))), map((response) => response.Result));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.delete !== ""), take(1), switchMap(config => this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id }))), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    getPages() {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.find != ""), combineLatest(this.userId$), switchMap(([config, userId]) => this.http.get(config.env.frontend_server + config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    upsert(page) {
        /** @type {?} */
        const model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter(config => config.endpoints.upsert != ""), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody())), map((response) => response.Result), tap(() => this._location.back()));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    selectByName(name) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.pages.db.data)
            .pipe(filter(pages => pages != null), map(pages => pages.find(page => page.name == name)), tap(page => {
            if (page == null) {
                debugger;
                this.store.dispatch(new GetPageStartAction(name));
            }
        }))
            .subscribe(page => subject.next(page));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9wYWdlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLGtCQUFrQixFQUFzQixNQUFNLE9BQU8sQ0FBQztBQUNyRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBRXZCLFlBQ1MsTUFDQSxPQUNBLHNCQUNBLFdBQ0E7UUFKQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixjQUFTLEdBQVQsU0FBUztRQUNULHNCQUFpQixHQUFqQixpQkFBaUI7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMs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ZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc0FwaU1vZGVsLCBHZXRQYWdlU3RhcnRBY3Rpb24sIFVwc2VydFBhZ2VBcGlNb2RlbCwgRGVsZXRlUGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZVNlcnZpY2Uge1xyXG5cdHVzZXJJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXJJZCQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkucGlwZShmaWx0ZXIoaSA9PiBpICE9IHVuZGVmaW5lZCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0KG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBuYW1lIH0pKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRQYWdlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRkZWxldGUoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5kZWxldGUoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSwgeyBfaWQgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IERlbGV0ZVBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VzKCk6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmZpbmQgIT0gXCJcIiksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmZpbmQpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0UGFnZXNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHBhZ2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXF1ZXN0KHBhZ2UpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdFx0dGFwKCgpID0+IHRoaXMuX2xvY2F0aW9uLmJhY2soKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShuYW1lOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeU5hbWUobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIocGFnZXMgPT4gcGFnZXMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHBhZ2VzID0+IHBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLm5hbWUgPT0gbmFtZSkpLFxyXG5cdFx0XHRcdHRhcChwYWdlID0+IHtcclxuXHRcdFx0XHRcdGlmIChwYWdlID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBhZ2VTdGFydEFjdGlvbihuYW1lKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHBhZ2UgPT4gc3ViamVjdC5uZXh0KHBhZ2UpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=