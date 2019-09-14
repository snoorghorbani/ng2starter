/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var AddFormApiModel;
(function (AddFormApiModel) {
    var Request = /** @class */ (function () {
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
                name: this.name,
                form: this.form,
                events: this.events
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    _id: new FormControl("", [Validators.required]),
                    name: new FormControl("", [Validators.required]),
                    title: new FormControl("", [Validators.required]),
                    form: new FormControl({}),
                    events: new FormGroup({
                        accept: new FormGroup({
                            show: new FormControl(false),
                            text: new FormControl("ثبت")
                        }),
                        cancel: new FormGroup({
                            show: new FormControl(false),
                            text: new FormControl("انصراف")
                        })
                    })
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    AddFormApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype._id;
        /** @type {?} */
        Request.prototype.name;
        /** @type {?} */
        Request.prototype.form;
        /** @type {?} */
        Request.prototype.events;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddFormApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(AddFormApiModel || (AddFormApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0uYXBpLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9hZGQtZm9ybS5hcGktbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BFLE1BQU0sS0FBVyxlQUFlLENBeUMvQjtBQXpDRCxXQUFpQixlQUFlO0lBQy9CO1FBS0MsaUJBQVksU0FBeUM7WUFBckQsaUJBRUM7WUFGVywwQkFBQSxFQUFBLCtCQUFZLEVBQUUsRUFBMkI7WUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1FBQ3JFLENBQUM7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDQyxPQUFPO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0Qsc0JBQVcsb0JBQVM7Ozs7WUFBcEI7Z0JBQ0MsT0FBTyxJQUFJLFNBQVMsQ0FBQztvQkFDcEIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDakQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDbEQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDbkQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztvQkFDekIsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDO3dCQUNyQixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUM7NEJBQ3JCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7NEJBQzVCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7eUJBQzVCLENBQUM7d0JBQ0YsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDOzRCQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO3lCQUMvQixDQUFDO3FCQUNGLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0osQ0FBQzs7O1dBQUE7UUFDRixjQUFDO0lBQUQsQ0FBQyxBQWxDRCxJQWtDQztJQWxDWSx1QkFBTyxVQWtDbkIsQ0FBQTs7O1FBakNBLHNCQUFZOztRQUNaLHVCQUFhOztRQUNiLHVCQUFZOztRQUNaLHlCQUFjOztJQWdDZjtRQUVDO1FBQWUsQ0FBQztRQUNqQixlQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFIWSx3QkFBUSxXQUdwQixDQUFBOzs7UUFGQSwwQkFBd0I7O0FBRzFCLENBQUMsRUF6Q2dCLGVBQWUsS0FBZixlQUFlLFFBeUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWRkRm9ybUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Zm9ybTogYW55W107XHJcblx0XHRldmVudHM6IGFueVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLFxyXG5cdFx0XHRcdGV2ZW50czogdGhpcy5ldmVudHNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Zm9ybTogbmV3IEZvcm1Db250cm9sKHt9KSxcclxuXHRcdFx0XHRldmVudHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0YWNjZXB0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwi2KvYqNiqXCIpXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhbmNlbDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcItin2YbYtdix2KfZgVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19