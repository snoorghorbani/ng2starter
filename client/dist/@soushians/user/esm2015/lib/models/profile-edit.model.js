/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
        }
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        getRequestBody() {
            return (/** @type {?} */ (this));
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Email: new FormControl(null, [Validators.required]),
                Roles: new FormControl(null, [Validators.required]),
                Groups: new FormControl(null, [Validators.required])
            });
        }
    }
    EditProfile_ApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Email;
        /** @type {?} */
        Request.prototype.Roles;
        /** @type {?} */
        Request.prototype.Groups;
    }
    class Response {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        extractData() {
            return this.Result.User;
        }
    }
    EditProfile_ApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditProfile_ApiModel || (EditProfile_ApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BFLE1BQU0sS0FBVyxvQkFBb0IsQ0FnQ3BDO0FBaENELFdBQWlCLG9CQUFvQjtJQUNwQyxNQUFhLE9BQU87Ozs7UUFLbkIsWUFBWSxZQUE4QixtQkFBQSxFQUFFLEVBQVc7WUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JFLENBQUM7Ozs7OztRQUVELGNBQWM7WUFDYixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1FBQ2IsQ0FBQzs7OztRQUVELE1BQU0sS0FBSyxTQUFTO1lBQ25CLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3JELEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3JELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7YUFDdEQsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUNEO0lBcEJZLDRCQUFPLFVBb0JuQixDQUFBOzs7UUFuQkEsd0JBQWM7O1FBQ2Qsd0JBQWdCOztRQUNoQix5QkFBaUI7O0lBbUJsQixNQUFhLFFBQVE7Ozs7UUFFcEIsWUFBWSxZQUFzQixtQkFBQSxFQUFFLEVBQVk7WUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JFLENBQUM7Ozs7UUFDRCxXQUFXO1lBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO0tBQ0Q7SUFSWSw2QkFBUSxXQVFwQixDQUFBOzs7UUFQQSwwQkFBNEI7O0FBUTlCLENBQUMsRUFoQ2dCLG9CQUFvQixLQUFwQixvQkFBb0IsUUFnQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwsIEh0dHBSZXNwb25zZUJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdFByb2ZpbGVfQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHRcdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFJlcXVlc3Q+ID0ge30gYXMgUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdEVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvbGVzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxSZXNwb25zZT4ge1xyXG5cdFx0UmVzdWx0OiB7IFVzZXI6IFVzZXJNb2RlbCB9O1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXNwb25zZSA9IHt9IGFzIFJlc3BvbnNlKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRleHRyYWN0RGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuUmVzdWx0LlVzZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==