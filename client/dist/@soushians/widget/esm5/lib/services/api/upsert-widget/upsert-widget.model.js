/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { WidgetModel } from "../../../models/widget.model";
export var UpsertWidgetApiModel;
(function (UpsertWidgetApiModel) {
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
    UpsertWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.widget;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxNQUFNLEtBQVcsb0JBQW9CLENBaUJwQztBQWpCRCxXQUFpQixvQkFBb0I7SUFDcEM7UUFFQyxpQkFBWSxNQUFXO1lBQVgsdUJBQUEsRUFBQSxXQUFXO1lBQ3RCLFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7OztRQUVELGdDQUFjOzs7UUFBZDtZQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQixDQUFDO1FBQ0YsY0FBQztJQUFELENBQUMsQUFWRCxJQVVDO0lBVlksNEJBQU8sVUFVbkIsQ0FBQTs7O1FBVEEseUJBQXlCOztJQVcxQjtRQUVDO1FBQWUsQ0FBQztRQUNqQixlQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFIWSw2QkFBUSxXQUdwQixDQUFBOzs7UUFGQSwwQkFBeUI7O0FBRzNCLENBQUMsRUFqQmdCLG9CQUFvQixLQUFwQixvQkFBb0IsUUFpQnBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRXaWRnZXRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3Iod2lkZ2V0ID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsKHdpZGdldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLndpZGdldDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==