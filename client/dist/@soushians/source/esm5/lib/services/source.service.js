/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UpsertSourceApiModel } from "../models";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SourceService = /** @class */ (function () {
    function SourceService(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    SourceService.prototype.getSources = /**
     * @return {?}
     */
    function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SourceService.prototype.getSourceById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.http
            .get("http://localhost:3000/api/source/" + id)
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    SourceService.prototype.upsertSource = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var model = new UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    SourceService.prototype.getData = /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    function (source, time) {
        if (time === void 0) { time = 0; }
        return this.http
            .get("http://localhost:3000/api/data", {
            params: {
                sourceId: source._id,
                time: null
            }
        })
            .map(function (res) { return res.Result; });
    };
    SourceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    SourceService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SourceService.ngInjectableDef = i0.defineInjectable({ factory: function SourceService_Factory() { return new SourceService(i0.inject(i1.HttpClient)); }, token: SourceService, providedIn: "root" });
    return SourceService;
}());
export { SourceService };
if (false) {
    /** @type {?} */
    SourceService.prototype.responseCache;
    /** @type {?} */
    SourceService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQW1DLE1BQU0sV0FBVyxDQUFDOzs7O0lBUWpGLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0tBQUk7Ozs7SUFFeEMsa0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBOEIsa0NBQWtDLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNaLE9BQU8sUUFBUSxDQUFDO1NBQ2hCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOzs7OztJQUNELHFDQUFhOzs7O0lBQWIsVUFBYyxFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsc0NBQW9DLEVBQUksQ0FBQzthQUM3QyxHQUFHLENBQUMsVUFBQyxRQUF1QyxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUM7YUFDakUsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNULE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFDRCxvQ0FBWTs7OztJQUFaLFVBQWEsSUFBa0M7O1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzNGLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUM7YUFDekIsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNULE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRUQsK0JBQU87Ozs7O0lBQVAsVUFBUSxNQUFtQixFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsUUFBZ0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN0QyxNQUFNLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2dCQUNwQixJQUFJLEVBQUUsSUFBSTthQUNWO1NBQ0QsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxNQUFNLEVBQVYsQ0FBVSxDQUFDLENBQUM7S0FDaEM7O2dCQTdDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVBRLFVBQVU7Ozt3QkFEbkI7O1NBU2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0U291cmNlQXBpTW9kZWwsIEdldFNvdXJjZXNBcGlNb2RlbCwgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVNlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldFNvdXJjZUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U291cmNlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2UvJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHVwc2VydFNvdXJjZShib2R5OiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KGJvZHkpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2VcIiwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwgeyB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlIH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YShzb3VyY2U6IFNvdXJjZU1vZGVsLCB0aW1lOiBudW1iZXIgPSAwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHR0aW1lOiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==