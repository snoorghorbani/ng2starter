/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { take, map, catchError } from "rxjs/operators";
import { EditConfigApiModel } from "../models";
import { GetConfigAction } from "../actions";
import { ConfigurationService } from "./configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./configuration.service";
export class ConfigService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.store.dispatch(new GetConfigAction());
        }), 999);
    }
    /**
     * @return {?}
     */
    getConfigs() {
        return this.http
            .get(`${this.configurationService.config.env.frontend_server}/api/config`)
            .pipe(take(1), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => Observable.throw(err))));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getConfigByName(name) {
        return this.http.get(`${this.configurationService.config.env.frontend_server}/api/config/${name}`).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        })));
    }
    /**
     * @param {?} body
     * @return {?}
     */
    editConfig(body) {
        /** @type {?} */
        const model = new EditConfigApiModel.Request(body);
        return this.http
            .put(`${this.configurationService.config.env.frontend_server}/api/config/${model.Name}`, model.getRequestBody())
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        })));
    }
    /**
     * @return {?}
     */
    getLayoutConfigs() {
        return this.http.get(`${this.configurationService.config.env.frontend_server}/api/layout-config`).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        })));
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: ConfigurationService }
];
/** @nocollapse */ ConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.ConfigurationService)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigService.prototype.responseCache;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.configurationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxrQkFBa0IsRUFBbUMsTUFBTSxXQUFXLENBQUM7QUFHaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFLL0QsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUd6QixZQUNTLElBQWdCLEVBQ2hCLEtBQXlCLEVBQ3pCLG9CQUEwQztRQUYxQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFbEQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsYUFBYSxDQUFDO2FBQ3pFLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRzs7OztRQUFDLENBQUMsUUFBcUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUMvRCxVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDOzs7OztJQUNELGVBQWUsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3RHLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxFQUN6QixVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxJQUFnQzs7Y0FDcEMsS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUVsRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUNILEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxlQUFlLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFDbEYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUN0QjthQUNBLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsRUFDekIsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUNyRyxHQUFHOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBQyxFQUNoQyxVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7WUF4REQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBYlEsVUFBVTtZQUVWLEtBQUs7WUFPTCxvQkFBb0I7Ozs7O0lBTTVCLHNDQUFtQjs7Ozs7SUFHbEIsNkJBQXdCOzs7OztJQUN4Qiw4QkFBaUM7Ozs7O0lBQ2pDLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyB0YWtlLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsLCBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxDb25maWdTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldENvbmZpZ0FjdGlvbigpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb25maWdzKCk6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZ2ApXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRha2UoMSksXHJcblx0XHRcdFx0bWFwKChyZXNwb25zZTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IE9ic2VydmFibGUudGhyb3coZXJyKSlcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Z2V0Q29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvY29uZmlnLyR7bmFtZX1gKS5waXBlKFxyXG5cdFx0XHRtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLFxyXG5cdFx0XHRjYXRjaEVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGVkaXRDb25maWcoYm9keTogRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QoYm9keSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KFxyXG5cdFx0XHRcdGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsXHJcblx0XHRcdFx0bW9kZWwuZ2V0UmVxdWVzdEJvZHkoKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdG1hcChyZXNwb25zZSA9PiByZXNwb25zZSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2xheW91dC1jb25maWdgKS5waXBlKFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=