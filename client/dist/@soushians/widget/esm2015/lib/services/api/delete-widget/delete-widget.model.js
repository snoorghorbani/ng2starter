/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { WidgetModel } from "../../../models/widget.model";
export var DeleteWidgetApiModel;
(function (DeleteWidgetApiModel) {
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
    DeleteWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.widget;
    }
    class Response {
        constructor() { }
    }
    DeleteWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(DeleteWidgetApiModel || (DeleteWidgetApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0L2RlbGV0ZS13aWRnZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxNQUFNLEtBQVcsb0JBQW9CLENBaUJwQztBQWpCRCxXQUFpQixvQkFBb0I7SUFDcEMsTUFBYSxPQUFPOzs7O1FBRW5CLFlBQVksTUFBTSxHQUFHLEVBQUU7WUFDdEIsUUFBUSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQixDQUFDO0tBQ0Q7SUFWWSw0QkFBTyxVQVVuQixDQUFBOzs7UUFUQSx5QkFBeUI7O0lBVzFCLE1BQWEsUUFBUTtRQUVwQixnQkFBZ0IsQ0FBQztLQUNqQjtJQUhZLDZCQUFRLFdBR3BCLENBQUE7OztRQUZBLDBCQUF5Qjs7QUFHM0IsQ0FBQyxFQWpCZ0Isb0JBQW9CLEtBQXBCLG9CQUFvQixRQWlCcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIERlbGV0ZVdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0fVxyXG59XHJcbiJdfQ==