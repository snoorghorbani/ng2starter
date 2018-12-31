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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxNQUFNLEtBQVcsb0JBQW9CO0FBQXJDLFdBQWlCLG9CQUFvQjtJQUNwQyxNQUFhLE9BQU87Ozs7UUFFbkIsWUFBWSxNQUFNLEdBQUcsRUFBRTtZQUN0QixRQUFRLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNuQjtLQUNEO0lBVlksNEJBQU87Ozs7O0lBWXBCLE1BQWEsUUFBUTtRQUVwQixpQkFBZ0I7S0FDaEI7SUFIWSw2QkFBUTs7Ozs7R0FiTCxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBaUJwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKHdpZGdldCA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbCh3aWRnZXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy53aWRnZXQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=