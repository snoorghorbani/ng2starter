/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    function Request_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sS0FBVyxrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDOzs7O1FBSUMsWUFBWSxTQUFzQztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxjQUFjO1lBQ2IsTUFBTSxDQUFDO2dCQUNOLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUV2QixDQUFDO1NBQ0Y7Ozs7UUFFRCxNQUFNLEtBQUssU0FBUztZQUNuQixNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3JELFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDL0UsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFFLENBQUM7YUFDbkYsQ0FBQyxDQUFDO1NBQ0g7S0FDRDtJQXRCWSwwQkFBTzs7Ozs7OztJQXVCcEI7UUFDQyxpQkFBZ0I7S0FDaEI7SUFGWSwyQkFBUTtHQXhCTCxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBMkJsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmRNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cdFx0VG9rZW46IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFBhc3N3b3JkOiB0aGlzLlBhc3N3b3JkXHJcblx0XHRcdFx0Ly9Ub2tlbjogdGhpcy5Ub2tlbixcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFRva2VuOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=