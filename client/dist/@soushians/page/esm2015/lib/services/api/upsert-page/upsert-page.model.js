/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PageModel } from "../../../models/page.model";
export var UpsertPageApiModel;
(function (UpsertPageApiModel) {
    class Request {
        /**
         * @param {?=} page
         */
        constructor(page = {}) {
            debugger;
            this.page = new PageModel(page);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.page;
        }
    }
    UpsertPageApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.page;
    }
    class Response {
        constructor() { }
    }
    UpsertPageApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertPageApiModel || (UpsertPageApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXBhZ2UubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdkQsTUFBTSxLQUFXLGtCQUFrQjtBQUFuQyxXQUFpQixrQkFBa0I7SUFDbEM7Ozs7UUFFQyxZQUFZLElBQUksR0FBRyxFQUFFO1lBQ3BCLFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7Ozs7UUFFRCxjQUFjO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDakI7S0FDRDtJQVZZLDBCQUFPOzs7OztJQVlwQjtRQUVDLGlCQUFnQjtLQUNoQjtJQUhZLDJCQUFROzs7OztHQWJMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFpQmxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydFBhZ2VBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0cGFnZTogUGFnZU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IocGFnZSA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLnBhZ2UgPSBuZXcgUGFnZU1vZGVsKHBhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYWdlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogUGFnZU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=