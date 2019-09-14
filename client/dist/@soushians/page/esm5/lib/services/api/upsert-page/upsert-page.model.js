/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageModel } from "../../../models/page.model";
export var UpsertPageApiModel;
(function (UpsertPageApiModel) {
    var Request = /** @class */ (function () {
        function Request(page) {
            if (page === void 0) { page = {}; }
            debugger;
            this.page = new PageModel(page);
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return this.page;
        };
        return Request;
    }());
    UpsertPageApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.page;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertPageApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertPageApiModel || (UpsertPageApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXBhZ2UubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdkQsTUFBTSxLQUFXLGtCQUFrQixDQWlCbEM7QUFqQkQsV0FBaUIsa0JBQWtCO0lBQ2xDO1FBRUMsaUJBQVksSUFBUztZQUFULHFCQUFBLEVBQUEsU0FBUztZQUNwQixRQUFRLENBQUM7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQztRQUNGLGNBQUM7SUFBRCxDQUFDLEFBVkQsSUFVQztJQVZZLDBCQUFPLFVBVW5CLENBQUE7OztRQVRBLHVCQUFnQjs7SUFXakI7UUFFQztRQUFlLENBQUM7UUFDakIsZUFBQztJQUFELENBQUMsQUFIRCxJQUdDO0lBSFksMkJBQVEsV0FHcEIsQ0FBQTs7O1FBRkEsMEJBQWtCOztBQUdwQixDQUFDLEVBakJnQixrQkFBa0IsS0FBbEIsa0JBQWtCLFFBaUJsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRQYWdlQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdHBhZ2U6IFBhZ2VNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKHBhZ2UgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5wYWdlID0gbmV3IFBhZ2VNb2RlbChwYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFnZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFBhZ2VNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19