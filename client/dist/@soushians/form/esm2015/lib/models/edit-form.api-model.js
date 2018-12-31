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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmFwaS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZWRpdC1mb3JtLmFwaS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEUsTUFBTSxLQUFXLGdCQUFnQjtBQUFqQyxXQUFpQixnQkFBZ0I7SUFDaEMsTUFBYSxPQUFPOzs7O1FBS25CLFlBQVksU0FBUyxxQkFBRyxFQUE4QixDQUFBO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUVELGNBQWM7WUFDYixPQUFPO2dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNuQixDQUFDO1NBQ0Y7Ozs7UUFDRCxNQUFNLEtBQUssU0FBUztZQUNuQixPQUFPLElBQUksU0FBUyxDQUFDO2dCQUNwQixHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNsRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUN6QixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQzt3QkFDckIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztxQkFDNUIsQ0FBQztvQkFDRixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUM7d0JBQ3JCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7cUJBQy9CLENBQUM7aUJBQ0YsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNIO0tBQ0Q7SUFsQ1ksd0JBQU87Ozs7Ozs7Ozs7O0lBb0NwQixNQUFhLFFBQVE7UUFFcEIsaUJBQWdCO0tBQ2hCO0lBSFkseUJBQVE7Ozs7O0dBckNMLGdCQUFnQixLQUFoQixnQkFBZ0IsUUF5Q2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Rm9ybUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Zm9ybTogYW55W107XHJcblx0XHRldmVudHM6IGFueVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLFxyXG5cdFx0XHRcdGV2ZW50czogdGhpcy5ldmVudHNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Zm9ybTogbmV3IEZvcm1Db250cm9sKHt9KSxcclxuXHRcdFx0XHRldmVudHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0YWNjZXB0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwi2KvYqNiqXCIpXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhbmNlbDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcItin2YbYtdix2KfZgVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19