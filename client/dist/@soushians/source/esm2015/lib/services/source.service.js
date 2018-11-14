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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQW1DLE1BQU0sV0FBVyxDQUFDOzs7QUFLbEYsTUFBTSxPQUFPLGFBQWE7Ozs7SUFHekIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtLQUFJOzs7O0lBRXhDLFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUE4QixrQ0FBa0MsQ0FBQzthQUNwRSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDZixPQUFPLFFBQVEsQ0FBQztTQUNoQixDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOzs7OztJQUNELGFBQWEsQ0FBQyxFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsb0NBQW9DLEVBQUUsRUFBRSxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxDQUFDLFFBQXVDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDakUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOzs7OztJQUNELFlBQVksQ0FBQyxJQUFrQzs7UUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDM0YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQW1CLEVBQUUsT0FBZSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsZ0NBQWdDLEVBQUU7WUFDdEMsTUFBTSxFQUFFO2dCQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRztnQkFDcEIsSUFBSSxFQUFFLElBQUk7YUFDVjtTQUNELENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQzs7O1lBN0NELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVBRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBHZXRTb3VyY2VzQXBpTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTZXJ2aWNlIHtcclxuXHRyZXNwb25zZUNhY2hlOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcblx0Z2V0U291cmNlcygpOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NvdXJjZVwiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cHNlcnRTb3VyY2UoYm9keTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHsgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSB9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdGltZTogbnVtYmVyID0gMCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdH1cclxufVxyXG4iXX0=