/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UpsertSourceApiModel } from "../models";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SourceService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(response => {
            return response;
        })
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSourceById(id) {
        return this.http
            .get(`http://localhost:3000/api/source/${id}`)
            .map((response) => response.Result)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} body
     * @return {?}
     */
    upsertSource(body) {
        var /** @type {?} */ model = new UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    getData(source, time = 0) {
        return this.http
            .get(`http://localhost:3000/api/data`, {
            params: {
                sourceId: source._id,
                time: null
            }
        })
            .map((res) => res.Result);
    }
}
SourceService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SourceService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SourceService.ngInjectableDef = i0.defineInjectable({ factory: function SourceService_Factory() { return new SourceService(i0.inject(i1.HttpClient)); }, token: SourceService, providedIn: "root" });
function SourceService_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceService.prototype.responseCache;
    /** @type {?} */
    SourceService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQW1DLE1BQU0sV0FBVyxDQUFDOzs7QUFLbEYsTUFBTTs7OztJQUdMLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7S0FBSTs7OztJQUV4QyxVQUFVO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUE4QixrQ0FBa0MsQ0FBQzthQUNwRSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDZixNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2hCLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDWixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFDRCxhQUFhLENBQUMsRUFBVTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsb0NBQW9DLEVBQUUsRUFBRSxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxDQUFDLFFBQXVDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDakUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBQ0QsWUFBWSxDQUFDLElBQWtDO1FBQzlDLHFCQUFJLEtBQUssR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzNGLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDWixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQW1CLEVBQUUsT0FBZSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN0QyxNQUFNLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2dCQUNwQixJQUFJLEVBQUUsSUFBSTthQUNWO1NBQ0QsQ0FBQzthQUNELEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDOzs7WUE3Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0U291cmNlQXBpTW9kZWwsIEdldFNvdXJjZXNBcGlNb2RlbCwgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVNlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldFNvdXJjZUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U291cmNlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2UvJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHVwc2VydFNvdXJjZShib2R5OiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KGJvZHkpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2VcIiwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwgeyB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlIH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YShzb3VyY2U6IFNvdXJjZU1vZGVsLCB0aW1lOiBudW1iZXIgPSAwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHR0aW1lOiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==