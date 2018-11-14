/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { WidgetModel } from "../../../models/widget.model";
export var UpsertWidgetApiModel;
(function (UpsertWidgetApiModel) {
    class Request {
        /**
         * @param {?=} widget
         */
        constructor(widget = {}) {
            debugger;
            this.widget = new WidgetModel(widget);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.widget;
        }
    }
    UpsertWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.widget;
    }
    class Response {
        constructor() { }
    }
    UpsertWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxNQUFNLEtBQVcsb0JBQW9CO0FBQXJDLFdBQWlCLG9CQUFvQjtJQUNwQzs7OztRQUVDLFlBQVksTUFBTSxHQUFHLEVBQUU7WUFDdEIsUUFBUSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0Qzs7OztRQUVELGNBQWM7WUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkI7S0FDRDtJQVZZLDRCQUFPOzs7OztJQVlwQjtRQUVDLGlCQUFnQjtLQUNoQjtJQUhZLDZCQUFROzs7OztHQWJMLG9CQUFvQixLQUFwQixvQkFBb0IsUUFpQnBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRXaWRnZXRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3Iod2lkZ2V0ID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsKHdpZGdldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLndpZGdldDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==