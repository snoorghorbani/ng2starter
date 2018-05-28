/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { EditConfigApiModel } from "../models";
import { GetConfigAction } from "../actions";
import { ConfigurationService } from "./configuration.service";
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
        this.configsEndpoint = this.configurationService.config.env.production
            ? this.configurationService.config.prod_api_host
            : this.configurationService.config.dev_api_host;
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
        var _this = this;
        return (this.http
            .get(this.configsEndpoint + "/api/config")
            .take(1)
            .map(function (response) {
            if (_this.configurationService.config.env.production) {
                var /** @type {?} */ dev_api_host = _this.configurationService.config.dev_api_host;
                var /** @type {?} */ prod_api_host = _this.configurationService.config.prod_api_host;
                return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
            }
            else {
                return response.Result;
            }
        })
            .catch(function (err) {
            return Observable.throw(err);
        }));
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
        return this.http.get(this.configsEndpoint + "/api/config/" + name).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
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
        var /** @type {?} */ model = new EditConfigApiModel.Request(body);
        return this.http
            .put(this.configsEndpoint + "/api/config/" + model.Name, model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getLayoutConfigs = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.configsEndpoint + "/api/layout-config")
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: HttpClient, },
        { type: Store, },
        { type: ConfigurationService, },
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.ConfigurationService)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
function ConfigService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfigService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfigService.ctorParameters;
    /** @type {?} */
    ConfigService.prototype.responseCache;
    /** @type {?} */
    ConfigService.prototype.configsEndpoint;
    /** @type {?} */
    ConfigService.prototype.http;
    /** @type {?} */
    ConfigService.prototype.store;
    /** @type {?} */
    ConfigService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0QsTUFBTSxXQUFXLENBQUM7QUFFbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0lBUzlELHVCQUNTLE1BQ0EsT0FDQTtRQUhULGlCQVlDO1FBWFEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7UUFFNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRWpELFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztTQUMzQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1I7Ozs7SUFFRCxrQ0FBVTs7O0lBQVY7UUFBQSxpQkFxQkM7UUFwQkEsTUFBTSxDQUFDLENBQ04sSUFBSSxDQUFDLElBQUk7YUFDUCxHQUFHLENBQUksSUFBSSxDQUFDLGVBQWUsZ0JBQWEsQ0FBQzthQUV6QyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsR0FBRyxDQUFDLFVBQUMsUUFBcUM7WUFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDckQscUJBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUNuRSxxQkFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQzlFLENBQUMsTUFBTSxDQUFDO2FBQ1Q7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUN2QjtTQUNELENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUNILENBQUM7S0FDRjs7Ozs7SUFDRCx1Q0FBZTs7OztJQUFmLFVBQWdCLElBQVk7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxlQUFlLG9CQUFlLElBQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ3JHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELGtDQUFVOzs7O0lBQVYsVUFBVyxJQUFnQztRQUMxQyxxQkFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFJLElBQUksQ0FBQyxlQUFlLG9CQUFlLEtBQUssQ0FBQyxJQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUM7YUFDekIsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNULE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsd0NBQWdCOzs7SUFBaEI7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUksSUFBSSxDQUFDLGVBQWUsdUJBQW9CLENBQUM7YUFDaEQsR0FBRyxDQUFDLFVBQUMsUUFBMkIsSUFBSyxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUM7YUFDOUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNULE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOztnQkFsRUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFaUSxVQUFVO2dCQUdWLEtBQUs7Z0JBS0wsb0JBQW9COzs7d0JBVDdCOztTQWNhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsLCBDb25maWdNb2RlbCwgTGF5b3V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHRyZXNwb25zZUNhY2hlOiBhbnk7XHJcblx0Y29uZmlnc0VuZHBvaW50OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8Q29uZmlnU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnc0VuZHBvaW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LnByb2R1Y3Rpb25cclxuXHRcdFx0PyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5wcm9kX2FwaV9ob3N0XHJcblx0XHRcdDogdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZGV2X2FwaV9ob3N0O1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRDb25maWdBY3Rpb24oKSk7XHJcblx0XHR9LCA5OTkpO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29uZmlncygpOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0dGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZ3NFbmRwb2ludH0vYXBpL2NvbmZpZ2ApXHJcblx0XHRcdFx0Ly8gLmZpbHRlcigoKSA9PiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5kZXZfYXBpX2hvc3QgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdC50YWtlKDEpXHJcblx0XHRcdFx0Lm1hcCgocmVzcG9uc2U6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5wcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRldl9hcGlfaG9zdCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmRldl9hcGlfaG9zdDtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcHJvZF9hcGlfaG9zdCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLnByb2RfYXBpX2hvc3Q7XHJcblx0XHRcdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKFxyXG5cdFx0XHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKS5yZXBsYWNlKG5ldyBSZWdFeHAoZGV2X2FwaV9ob3N0LCBcImdcIiksIHByb2RfYXBpX2hvc3QpXHJcblx0XHRcdFx0XHRcdCkuUmVzdWx0O1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLlJlc3VsdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Z2V0Q29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmNvbmZpZ3NFbmRwb2ludH0vYXBpL2NvbmZpZy8ke25hbWV9YCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGVkaXRDb25maWcoYm9keTogRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KGJvZHkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dChgJHt0aGlzLmNvbmZpZ3NFbmRwb2ludH0vYXBpL2NvbmZpZy8ke21vZGVsLk5hbWV9YCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRMYXlvdXRDb25maWdzKCk6IE9ic2VydmFibGU8TGF5b3V0Q29uZmlnTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZ3NFbmRwb2ludH0vYXBpL2xheW91dC1jb25maWdgKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogTGF5b3V0Q29uZmlnTW9kZWwpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19