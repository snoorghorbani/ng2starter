/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
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
            return this;
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
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BFLE1BQU0sS0FBVyxvQkFBb0I7QUFBckMsV0FBaUIsb0JBQW9CO0lBQ3BDOzs7O1FBS0MsWUFBWSw4QkFBOEIsRUFBYSxDQUFBO1lBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUVELGNBQWM7WUFDYixPQUFPLElBQUksQ0FBQztTQUNaOzs7O1FBRUQsTUFBTSxLQUFLLFNBQVM7WUFDbkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDckQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDckQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUN0RCxDQUFDLENBQUM7U0FDSDtLQUNEO0lBcEJZLDRCQUFPOzs7Ozs7Ozs7SUFzQnBCOzs7O1FBRUMsWUFBWSw4QkFBc0IsRUFBYyxDQUFBO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUNELFdBQVc7WUFDVixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0tBQ0Q7SUFSWSw2QkFBUTs7Ozs7R0F2Qkwsb0JBQW9CLEtBQXBCLG9CQUFvQixRQWdDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCwgSHR0cFJlc3BvbnNlQmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0UHJvZmlsZV9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRFbWFpbDogc3RyaW5nO1xyXG5cdFx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8UmVxdWVzdD4gPSB7fSBhcyBSZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0RW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um9sZXM6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0R3JvdXBzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGltcGxlbWVudHMgSHR0cFJlc3BvbnNlQmFzZU1vZGVsPFJlc3BvbnNlPiB7XHJcblx0XHRSZXN1bHQ6IHsgVXNlcjogVXNlck1vZGVsIH07XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFJlc3BvbnNlID0ge30gYXMgUmVzcG9uc2UpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGV4dHJhY3REYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5SZXN1bHQuVXNlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19