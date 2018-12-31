/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { EditConfigApiModel } from "../models";
import { GetConfigAction } from "../actions";
import { ConfigurationService } from "./configuration.service";
import { take, map, catchError } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./configuration.service";
var ConfigService = /** @class */ (function () {
    function ConfigService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(function () {
            _this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.getConfigs = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.configurationService.config.env.frontend_server + "/api/config")
            .pipe(take(1), map(function (response) { return response.Result; }), catchError(function (err) { return Observable.throw(err); }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ConfigService.prototype.getConfigByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.http.get(this.configurationService.config.env.frontend_server + "/api/config/" + name).pipe(map(function (response) { return response; }), catchError(function (err) {
            return Observable.throw(err);
        }));
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ConfigService.prototype.editConfig = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var model = new EditConfigApiModel.Request(body);
        return this.http
            .put(this.configurationService.config.env.frontend_server + "/api/config/" + model.Name, model.getRequestBody())
            .pipe(map(function (response) { return response; }), catchError(function (err) {
            return Observable.throw(err);
        }));
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getLayoutConfigs = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.configurationService.config.env.frontend_server + "/api/layout-config").pipe(map(function (response) { return response; }), catchError(function (err) {
            return Observable.throw(err);
        }));
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.ConfigurationService)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /** @type {?} */
    ConfigService.prototype.responseCache;
    /** @type {?} */
    ConfigService.prototype.http;
    /** @type {?} */
    ConfigService.prototype.store;
    /** @type {?} */
    ConfigService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxrQkFBa0IsRUFBbUMsTUFBTSxXQUFXLENBQUM7QUFHaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lBUXRELHVCQUNTLE1BQ0EsT0FDQTtRQUhULGlCQVFDO1FBUFEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7UUFFNUIsVUFBVSxDQUFDO1lBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1NBQzNDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDUjs7OztJQUVELGtDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxnQkFBYSxDQUFDO2FBQ3pFLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLFVBQUMsUUFBcUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLEVBQy9ELFVBQVUsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FDeEMsQ0FBQztLQUNIOzs7OztJQUNELHVDQUFlOzs7O0lBQWYsVUFBZ0IsSUFBWTtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsb0JBQWUsSUFBTSxDQUFDLENBQUMsSUFBSSxDQUN0RyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUSxDQUFDLEVBQ3pCLFVBQVUsQ0FBQyxVQUFBLEdBQUc7WUFDYixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUNGLENBQUM7S0FDRjs7Ozs7SUFDRCxrQ0FBVTs7OztJQUFWLFVBQVcsSUFBZ0M7O1FBQzFDLElBQU0sS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxvQkFBZSxLQUFLLENBQUMsSUFBTSxFQUNsRixLQUFLLENBQUMsY0FBYyxFQUFFLENBQ3RCO2FBQ0EsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsRUFDekIsVUFBVSxDQUFDLFVBQUEsR0FBRztZQUNiLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQ0YsQ0FBQztLQUNIOzs7O0lBRUQsd0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsdUJBQW9CLENBQUMsQ0FBQyxJQUFJLENBQ3JHLEdBQUcsQ0FBQyxVQUFDLFFBQWEsSUFBSyxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsRUFDaEMsVUFBVSxDQUFDLFVBQUEsR0FBRztZQUNiLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQ0YsQ0FBQztLQUNGOztnQkF4REQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFiUSxVQUFVO2dCQUVWLEtBQUs7Z0JBTUwsb0JBQW9COzs7d0JBVDdCOztTQWVhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsLCBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHRha2UsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHRyZXNwb25zZUNhY2hlOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8Q29uZmlnU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRDb25maWdBY3Rpb24oKSk7XHJcblx0XHR9LCA5OTkpO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29uZmlncygpOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9jb25maWdgKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKGVyciA9PiBPYnNlcnZhYmxlLnRocm93KGVycikpXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZy8ke25hbWV9YCkucGlwZShcclxuXHRcdFx0bWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRlZGl0Q29uZmlnKGJvZHk6IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KGJvZHkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dChcclxuXHRcdFx0XHRgJHt0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvY29uZmlnLyR7bW9kZWwuTmFtZX1gLFxyXG5cdFx0XHRcdG1vZGVsLmdldFJlcXVlc3RCb2R5KClcclxuXHRcdFx0KVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldExheW91dENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9sYXlvdXQtY29uZmlnYCkucGlwZShcclxuXHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXHJcblx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19