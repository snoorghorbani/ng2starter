/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatchValidator } from "@soushians/shared";
export var ResetPasswordModel;
(function (ResetPasswordModel) {
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
                Password: this.Password
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Token: new FormControl(null, [Validators.required]),
                Password: new FormControl("", [Validators.minLength(8), Validators.required]),
                Confirm: new FormControl(null, [Validators.required, MatchValidator("Password")])
            });
        }
    }
    ResetPasswordModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Password;
        /** @type {?} */
        Request.prototype.Token;
    }
    class Response {
        constructor() { }
    }
    ResetPasswordModel.Response = Response;
})(ResetPasswordModel || (ResetPasswordModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sS0FBVyxrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDOzs7O1FBSUMsWUFBWSxTQUFzQztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxjQUFjO1lBQ2IsT0FBTztnQkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFFdkIsQ0FBQztTQUNGOzs7O1FBRUQsTUFBTSxLQUFLLFNBQVM7WUFDbkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDckQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMvRSxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQzthQUNuRixDQUFDLENBQUM7U0FDSDtLQUNEO0lBdEJZLDBCQUFPOzs7Ozs7O0lBdUJwQjtRQUNDLGlCQUFnQjtLQUNoQjtJQUZZLDJCQUFRO0dBeEJMLGtCQUFrQixLQUFsQixrQkFBa0IsUUEyQmxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0XHRUb2tlbjogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0XHQvL1Rva2VuOiB0aGlzLlRva2VuLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==