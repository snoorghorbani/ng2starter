/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridModel } from "../../../models/grid.model";
export var UpsertGridApiModel;
(function (UpsertGridApiModel) {
    class Request {
        /**
         * @param {?=} grid
         */
        constructor(grid = {}) {
            debugger;
            this.grid = new GridModel(grid);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.grid;
        }
    }
    UpsertGridApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.grid;
    }
    class Response {
        constructor() { }
    }
    UpsertGridApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertGridApiModel || (UpsertGridApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LWdyaWQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdkQsTUFBTSxLQUFXLGtCQUFrQixDQWlCbEM7QUFqQkQsV0FBaUIsa0JBQWtCO0lBQ2xDLE1BQWEsT0FBTzs7OztRQUVuQixZQUFZLElBQUksR0FBRyxFQUFFO1lBQ3BCLFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzs7OztRQUVELGNBQWM7WUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQztLQUNEO0lBVlksMEJBQU8sVUFVbkIsQ0FBQTs7O1FBVEEsdUJBQWdCOztJQVdqQixNQUFhLFFBQVE7UUFFcEIsZ0JBQWUsQ0FBQztLQUNoQjtJQUhZLDJCQUFRLFdBR3BCLENBQUE7OztRQUZBLDBCQUFrQjs7QUFHcEIsQ0FBQyxFQWpCZ0Isa0JBQWtCLEtBQWxCLGtCQUFrQixRQWlCbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcihncmlkID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoZ3JpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdyaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==