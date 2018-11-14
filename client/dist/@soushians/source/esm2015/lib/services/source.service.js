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
        /** @type {?} */
        var model = new UpsertSourceApiModel.Request(body);
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
if (false) {
    /** @type {?} */
    SourceService.prototype.responseCache;
    /** @type {?} */
    SourceService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQW1DLE1BQU0sV0FBVyxDQUFDOzs7QUFLbEYsTUFBTTs7OztJQUdMLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7S0FBSTs7OztJQUV4QyxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBOEIsa0NBQWtDLENBQUM7YUFDcEUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxRQUFRLENBQUM7U0FDaEIsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFDRCxhQUFhLENBQUMsRUFBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsQ0FBQzthQUM3QyxHQUFHLENBQUMsQ0FBQyxRQUF1QyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2pFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFDRCxZQUFZLENBQUMsSUFBa0M7O1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzNGLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0tBQ0o7Ozs7OztJQUVELE9BQU8sQ0FBQyxNQUFtQixFQUFFLE9BQWUsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFDLGdDQUFnQyxFQUFFO1lBQ3RDLE1BQU0sRUFBRTtnQkFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ3BCLElBQUksRUFBRSxJQUFJO2FBQ1Y7U0FDRCxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEM7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFQUSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRTb3VyY2VBcGlNb2RlbCwgR2V0U291cmNlc0FwaU1vZGVsLCBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG5cdGdldFNvdXJjZXMoKTogT2JzZXJ2YWJsZTxHZXRTb3VyY2VzQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxHZXRTb3VyY2VzQXBpTW9kZWwuUmVzcG9uc2U+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2VcIilcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0U291cmNlQnlJZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NvdXJjZS8ke2lkfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0dXBzZXJ0U291cmNlKGJvZHk6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QoYm9keSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NvdXJjZVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7IHdpdGhDcmVkZW50aWFsczogZmFsc2UgfSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKHNvdXJjZTogU291cmNlTW9kZWwsIHRpbWU6IG51bWJlciA9IDApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdHRpbWU6IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHR9XHJcbn1cclxuIl19