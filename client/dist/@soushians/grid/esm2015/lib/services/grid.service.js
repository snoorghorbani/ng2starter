/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
export class GridService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userFacadeService
     * @param {?} configurationService
     */
    constructor(http, store, userFacadeService, configurationService) {
        this.http = http;
        this.store = store;
        this.userFacadeService = userFacadeService;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.get !== ""), take(1), skipUntil(this.store.select(getFrontendUser)), switchMap(config => {
            return this.http
                .get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id }), {})
                .pipe(map((response) => response.Result));
        }));
    }
    /**
     * @return {?}
     */
    getGrids() {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.find != ""), switchMap(config => this.http.get(config.env.frontend_server + config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update_item(item) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.update_item != ""), switchMap(config => this.http.patch(config.env.frontend_server + config.endpoints.update_item, item)), map((response) => response.Result));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update_item_access(item) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.update_item_access != ""), switchMap(config => this.http.patch(config.env.frontend_server + config.endpoints.update_item_access, item)), map((response) => response.Result));
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    upsert(grid) {
        const /** @type {?} */ model = new UpsertGridApiModel.Request(grid);
        return this.configurationService.config$.pipe(filter(config => config.endpoints.upsert != ""), take(1), switchMap(config => {
            return this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
        }), map((response) => response.Result));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.grids.db.data)
            .pipe(filter(grids => grids != null), map(grids => grids.find(grid => grid._id == _id)), tap(grid => {
            if (grid == null) {
                this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe(FormSchemaModel => subject.next(FormSchemaModel));
        return subject.asObservable();
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectByOid(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.grids.db.data)
            .pipe(filter(grids => grids != null), map(grids => grids.find(grid => grid._id == _id)), tap(grid => {
            if (grid == null) {
                this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe(FormSchemaModel => subject.next(FormSchemaModel));
        return subject.asObservable();
    }
}
GridService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
GridService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: UserFacadeService },
    { type: GridConfigurationService }
];
/** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserFacadeService), i0.inject(i4.GridConfigurationService)); }, token: GridService, providedIn: "root" });
function GridService_tsickle_Closure_declarations() {
    /** @type {?} */
    GridService.prototype.http;
    /** @type {?} */
    GridService.prototype.store;
    /** @type {?} */
    GridService.prototype.userFacadeService;
    /** @type {?} */
    GridService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7QUFRckUsTUFBTTs7Ozs7OztJQUNMLFlBQ1MsTUFDQSxPQUNBLG1CQUNBO1FBSEEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQjtLQUN6Qjs7Ozs7SUFFSixHQUFHLENBQUMsR0FBVztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFB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OUI7Ozs7O0lBQ0QsV0FBVyxDQUFDLEdBQVc7UUFDdEIsdUJBQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFZLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ3BDLElBQUksQ0FDSixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakQ7U0FDRCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM5Qjs7O1lBOUZELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWpCUSxVQUFVO1lBRVYsS0FBSztZQUdMLGlCQUFpQjtZQUlqQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QsIHNraXBXaGlsZSwgc2tpcFVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRGcm9udGVuZFVzZXIgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsLCBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c2tpcFVudGlsKHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kVXNlcikpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pLCB7fSlcclxuXHRcdFx0XHRcdC5waXBlKG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JpZHMoKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwZGF0ZV9pdGVtKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pOiBPYnNlcnZhYmxlPEdyaWRNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy51cGRhdGVfaXRlbSAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucGF0Y2goY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwZGF0ZV9pdGVtLCBpdGVtKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwZGF0ZV9pdGVtX2FjY2VzcyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMudXBkYXRlX2l0ZW1fYWNjZXNzICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBhdGNoKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy51cGRhdGVfaXRlbV9hY2Nlc3MsIGl0ZW0pXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydChncmlkOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdChncmlkKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHt9KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ly8gZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKGdyaWRzID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChncmlkcyA9PiBncmlkcy5maW5kKGdyaWQgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKGdyaWQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKEZvcm1TY2hlbWFNb2RlbCA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblx0c2VsZWN0QnlPaWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihncmlkcyA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoZ3JpZHMgPT4gZ3JpZHMuZmluZChncmlkID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcChncmlkID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShGb3JtU2NoZW1hTW9kZWwgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==