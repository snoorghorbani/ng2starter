/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
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
                Groups: new FormControl(null, [Validators.required]),
            });
        }
    }
    EditProfile_ApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
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
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        /**
         * @return {?}
         */
        extractData() {
            return this.Result.User;
        }
    }
    EditProfile_ApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditProfile_ApiModel || (EditProfile_ApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BFLE1BQU0sS0FBUSxvQkFBb0I7QUFBbEMsV0FBYyxvQkFBb0I7SUFDOUI7Ozs7UUFLSSxZQUFZLDhCQUFxQixFQUFhLENBQUE7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckU7Ozs7UUFFRCxjQUFjO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNmOzs7O1FBRUQsTUFBTSxLQUFLLFNBQVM7WUFDaEIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZELENBQUMsQ0FBQTtTQUNMO0tBQ0o7SUFwQlksNEJBQU87Ozs7Ozs7OztJQXNCcEI7Ozs7UUFFSSxZQUFZLDhCQUFzQixFQUFjLENBQUE7WUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckU7Ozs7UUFDRCxXQUFXO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzNCO0tBQ0o7SUFSWSw2QkFBUTs7Ozs7R0F2Qlgsb0JBQW9CLEtBQXBCLG9CQUFvQixRQWdDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwsIEh0dHBSZXNwb25zZUJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgRWRpdFByb2ZpbGVfQXBpTW9kZWwge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PntcclxuICAgICAgICBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVzOiBzdHJpbmdbXTtcclxuICAgICAgICBHcm91cHM6IHN0cmluZ1tdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFJlcXVlc3QgPSB7fSBhcyBSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICAgIEVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFJvbGVzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIEdyb3VwczogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxSZXNwb25zZT57XHJcbiAgICAgICAgUmVzdWx0OiB7IFVzZXI6IFVzZXJNb2RlbCB9O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogUmVzcG9uc2UgPSB7fSBhcyBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXh0cmFjdERhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlJlc3VsdC5Vc2VyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==