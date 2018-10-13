/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var ResetPasswordRequestModel;
(function (ResetPasswordRequestModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Username: new FormControl("", [Validators.minLength(8), Validators.required]),
                Captcha: new FormControl(null, [Validators.required]),
                Token: new FormControl(null, [Validators.required]),
                Type: new FormControl("sms")
            });
        }
    }
    ResetPasswordRequestModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Username;
        /** @type {?} */
        Request.prototype.Token;
        /** @type {?} */
        Request.prototype.Captcha;
        /** @type {?} */
        Request.prototype.Type;
    }
    class Response {
        constructor() { }
    }
    ResetPasswordRequestModel.Response = Response;
})(ResetPasswordRequestModel || (ResetPasswordRequestModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsTUFBTSxLQUFXLHlCQUF5QjtBQUExQyxXQUFpQix5QkFBeUI7SUFDekM7Ozs7UUFhQyxZQUFZLFNBQTZDO1lBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUVELGNBQWM7WUFDYixNQUFNLENBQUM7Z0JBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUNyQixDQUFDO1NBQ0Y7Ozs7UUFFRCxNQUFNLEtBQUssU0FBUztZQUNuQixNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDL0UsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDdkQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDckQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQzthQUM1QixDQUFDLENBQUM7U0FDSDtLQUNEO0lBakNZLGlDQUFPOzs7Ozs7Ozs7OztJQW1DcEI7UUFDQyxpQkFBZ0I7S0FDaEI7SUFGWSxrQ0FBUTtHQXBDTCx5QkFBeUIsS0FBekIseUJBQXlCLFFBdUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRVc2VybmFtZTogc3RyaW5nO1xyXG5cclxuXHRcdC8vQFJlcXVlc3RCb2R5KFwicGVnYWhcIilcclxuXHRcdFRva2VuOiBzdHJpbmc7XHJcblxyXG5cdFx0Ly9AVXNlSW4oJ2JvZHknKVxyXG5cdFx0Q2FwdGNoYTogc3RyaW5nO1xyXG5cclxuXHRcdC8vQFVzZUluKCd1cmwnKVxyXG5cdFx0Ly9AVmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHRUeXBlOiBcInNtc1wiIHwgXCJlbWFpbFwiO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFVzZXJuYW1lOiB0aGlzLlVzZXJuYW1lLFxyXG5cdFx0XHRcdFRva2VuOiB0aGlzLlRva2VuLFxyXG5cdFx0XHRcdENhcHRjaGE6IHRoaXMuQ2FwdGNoYVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENhcHRjaGE6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFwic21zXCIpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19