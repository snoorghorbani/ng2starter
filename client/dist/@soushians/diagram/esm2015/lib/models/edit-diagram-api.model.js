/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    class Request {
        /**
         * @param {?} params
         */
        constructor(params) { }
        /**
         * @return {?}
         */
        getRequestQueryParams() {
            return {};
        }
        // TODO:
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl("", [Validators.required]),
                IsActive: new FormControl("true", [Validators.required]),
                Route: new FormControl("", [Validators.required])
            });
        }
    }
    EditDiagramApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    EditDiagramApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditDiagramApiModel || (EditDiagramApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLWFwaS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPcEUsTUFBTSxLQUFXLG1CQUFtQixDQW9CbkM7QUFwQkQsV0FBaUIsbUJBQW1CO0lBQ25DLE1BQWEsT0FBTzs7OztRQUNuQixZQUFZLE1BQWUsSUFBRyxDQUFDOzs7O1FBQy9CLHFCQUFxQjtZQUNwQixPQUFPLEVBQUUsQ0FBQztRQUNYLENBQUM7Ozs7O1FBRUQsTUFBTSxLQUFLLFNBQVM7WUFDbkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbEQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUNuRCxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0Q7SUFiWSwyQkFBTyxVQWFuQixDQUFBO0lBRUQsTUFBYSxRQUFRO1FBRXBCLGdCQUFlLENBQUM7S0FDaEI7SUFIWSw0QkFBUSxXQUdwQixDQUFBOzs7UUFGQSwwQkFBcUI7O0FBR3ZCLENBQUMsRUFwQmdCLG1CQUFtQixLQUFuQixtQkFBbUIsUUFvQm5DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEVkaXREaWFncmFtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUmVxdWVzdCkge31cclxuXHRcdGdldFJlcXVlc3RRdWVyeVBhcmFtcygpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==