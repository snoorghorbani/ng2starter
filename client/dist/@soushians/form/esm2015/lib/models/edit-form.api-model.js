/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditFormApiModel;
(function (EditFormApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                _id: this._id,
                name: this.name,
                form: this.form,
                events: this.events
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                _id: new FormControl("", [Validators.required]),
                name: new FormControl("", [Validators.required]),
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
        }
    }
    EditFormApiModel.Request = Request;
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
    class Response {
        constructor() { }
    }
    EditFormApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditFormApiModel || (EditFormApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmFwaS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZWRpdC1mb3JtLmFwaS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEUsTUFBTSxLQUFXLGdCQUFnQjtBQUFqQyxXQUFpQixnQkFBZ0I7SUFDaEM7Ozs7UUFLQyxZQUFZLFNBQVMscUJBQUcsRUFBOEIsQ0FBQTtZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxjQUFjO1lBQ2IsT0FBTztnQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbkIsQ0FBQztTQUNGOzs7O1FBQ0QsTUFBTSxLQUFLLFNBQVM7WUFDbkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDakQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbEQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDO29CQUNyQixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUM7d0JBQ3JCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7cUJBQzVCLENBQUM7b0JBQ0YsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDO3dCQUNyQixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO3FCQUMvQixDQUFDO2lCQUNGLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSDtLQUNEO0lBbENZLHdCQUFPOzs7Ozs7Ozs7OztJQW9DcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSx5QkFBUTs7Ozs7R0FyQ0wsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXlDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEVkaXRGb3JtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0X2lkOiBzdHJpbmc7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0XHRmb3JtOiBhbnlbXTtcclxuXHRcdGV2ZW50czogYW55W107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0XHRmb3JtOiB0aGlzLmZvcm0sXHJcblx0XHRcdFx0ZXZlbnRzOiB0aGlzLmV2ZW50c1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRmb3JtOiBuZXcgRm9ybUNvbnRyb2woe30pLFxyXG5cdFx0XHRcdGV2ZW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRhY2NlcHQ6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLYq9io2KpcIilcclxuXHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFx0Y2FuY2VsOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwi2KfZhti12LHYp9mBXCIpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogRm9ybVNjaGVtYU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=