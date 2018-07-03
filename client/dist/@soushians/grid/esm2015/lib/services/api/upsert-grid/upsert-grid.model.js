/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { GridModel } from "../../../models";
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
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.grid;
    }
    class Response {
        constructor() { }
    }
    UpsertGridApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertGridApiModel || (UpsertGridApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LWdyaWQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsTUFBTSxLQUFXLGtCQUFrQjtBQUFuQyxXQUFpQixrQkFBa0I7SUFDbEM7Ozs7UUFFQyxZQUFZLElBQUksR0FBRyxFQUFFO1lBQ3BCLFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7Ozs7UUFFRCxjQUFjO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDakI7S0FDRDtJQVZZLDBCQUFPOzs7OztJQVlwQjtRQUVDLGlCQUFnQjtLQUNoQjtJQUhZLDJCQUFROzs7OztHQWJMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFpQmxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRHcmlkQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGdyaWQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbChncmlkKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19