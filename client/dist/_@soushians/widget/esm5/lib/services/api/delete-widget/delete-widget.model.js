/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { WidgetModel } from "../../../models/widget.model";
export var DeleteWidgetApiModel;
(function (DeleteWidgetApiModel) {
    var Request = /** @class */ (function () {
        function Request(widget) {
            if (widget === void 0) { widget = {}; }
            debugger;
            this.widget = new WidgetModel(widget);
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return this.widget;
        };
        return Request;
    }());
    DeleteWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.widget;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    DeleteWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(DeleteWidgetApiModel || (DeleteWidgetApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0L2RlbGV0ZS13aWRnZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxNQUFNLEtBQVcsb0JBQW9CLENBaUJwQztBQWpCRCxXQUFpQixvQkFBb0I7SUFDcEM7UUFFQyxpQkFBWSxNQUFXO1lBQVgsdUJBQUEsRUFBQSxXQUFXO1lBQ3RCLFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7OztRQUVELGdDQUFjOzs7UUFBZDtZQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQixDQUFDO1FBQ0YsY0FBQztJQUFELENBQUMsQUFWRCxJQVVDO0lBVlksNEJBQU8sVUFVbkIsQ0FBQTs7O1FBVEEseUJBQXlCOztJQVcxQjtRQUVDO1FBQWdCLENBQUM7UUFDbEIsZUFBQztJQUFELENBQUMsQUFIRCxJQUdDO0lBSFksNkJBQVEsV0FHcEIsQ0FBQTs7O1FBRkEsMEJBQXlCOztBQUczQixDQUFDLEVBakJnQixvQkFBb0IsS0FBcEIsb0JBQW9CLFFBaUJwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRGVsZXRlV2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKHdpZGdldCA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbCh3aWRnZXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy53aWRnZXQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHR9XHJcbn1cclxuIl19