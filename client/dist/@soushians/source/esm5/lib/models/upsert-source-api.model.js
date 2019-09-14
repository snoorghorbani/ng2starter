/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
export var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
    // export class Request implements HttpRequestBaseModel<Request> {
    var 
    // export class Request implements HttpRequestBaseModel<Request> {
    Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (_this[key] = initValue[key]); }));
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                _id: this._id,
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    _id: new FormControl("", [Validators.required]),
                    Endpoint: new FormControl("", [Validators.required]),
                    Interval: new FormControl("", [Validators.required]),
                    IsActive: new FormControl("false", [Validators.required]),
                    Thresholds: new FormArray([])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    UpsertSourceApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype._id;
        /** @type {?} */
        Request.prototype.Endpoint;
        /** @type {?} */
        Request.prototype.Interval;
        /** @type {?} */
        Request.prototype.IsActive;
        /** @type {?} */
        Request.prototype.Thresholds;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertSourceApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXNvdXJjZS1hcGkubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvdXBzZXJ0LXNvdXJjZS1hcGkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0UsTUFBTSxLQUFXLG9CQUFvQixDQXlDcEM7QUF6Q0QsV0FBaUIsb0JBQW9COztJQUVwQzs7O1FBV0MsaUJBQVksU0FBOEM7WUFBMUQsaUJBRUM7WUFGVywwQkFBQSxFQUFBLCtCQUFZLEVBQUUsRUFBZ0M7WUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1FBQ3JFLENBQUM7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDQyxPQUFPO2dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDM0IsQ0FBQztRQUNILENBQUM7UUFDRCxzQkFBVyxvQkFBUzs7OztZQUFwQjtnQkFDQyxPQUFPLElBQUksU0FBUyxDQUFDO29CQUNwQixHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO29CQUNqRCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO29CQUN0RCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO29CQUN0RCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO29CQUMzRCxVQUFVLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2lCQUM3QixDQUFDLENBQUM7WUFDSixDQUFDOzs7V0FBQTtRQUNGLGNBQUM7SUFBRCxDQUFDLEFBakNELElBaUNDO0lBakNZLDRCQUFPLFVBaUNuQixDQUFBOzs7UUFoQ0Esc0JBQVk7O1FBQ1osMkJBQWlCOztRQUNqQiwyQkFBaUI7O1FBQ2pCLDJCQUFrQjs7UUFDbEIsNkJBS0k7O0lBeUJMO1FBRUM7UUFBZSxDQUFDO1FBQ2pCLGVBQUM7SUFBRCxDQUFDLEFBSEQsSUFHQztJQUhZLDZCQUFRLFdBR3BCLENBQUE7OztRQUZBLDBCQUFvQjs7QUFHdEIsQ0FBQyxFQXpDZ0Isb0JBQW9CLEtBQXBCLG9CQUFvQixRQXlDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRTb3VyY2VBcGlNb2RlbCB7XHJcblx0Ly8gZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0X2lkOiBzdHJpbmc7XHJcblx0XHRFbmRwb2ludDogc3RyaW5nO1xyXG5cdFx0SW50ZXJ2YWw6IG51bWJlcjtcclxuXHRcdElzQWN0aXZlOiBib29sZWFuO1xyXG5cdFx0VGhyZXNob2xkczoge1xyXG5cdFx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRcdEZvcm11bGE6IHN0cmluZztcclxuXHRcdFx0TWVzc2FnZTogc3RyaW5nO1xyXG5cdFx0XHRUeXBlOiBib29sZWFuO1xyXG5cdFx0fVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0RW5kcG9pbnQ6IHRoaXMuRW5kcG9pbnQsXHJcblx0XHRcdFx0SW50ZXJ2YWw6IHRoaXMuSW50ZXJ2YWwsXHJcblx0XHRcdFx0SXNBY3RpdmU6IHRoaXMuSXNBY3RpdmUsXHJcblx0XHRcdFx0VGhyZXNob2xkczogdGhpcy5UaHJlc2hvbGRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRFbmRwb2ludDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJbnRlcnZhbDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRocmVzaG9sZHM6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogU291cmNlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==