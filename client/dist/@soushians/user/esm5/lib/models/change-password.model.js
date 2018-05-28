/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatchValidator } from "@soushians/shared";
export var ChangePasswordModel;
(function (ChangePasswordModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Password: this.Password
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    Password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
                    Confirm: new FormControl(null, [Validators.required, MatchValidator("Password")])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ChangePasswordModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Username;
        /** @type {?} */
        Request.prototype.Password;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ChangePasswordModel.Response = Response;
})(ChangePasswordModel || (ChangePasswordModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsTUFBTSxLQUFXLG1CQUFtQjtBQUFwQyxXQUFpQixtQkFBbUI7SUFDbkMsSUFBQTtRQUlDLGlCQUFZLFNBQTBFO1lBQTFFLDBCQUFBLEVBQUEsOEJBQXlDLEVBQWlDLENBQUE7WUFBdEYsaUJBRUM7WUFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDQyxNQUFNLENBQUM7Z0JBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3ZCLENBQUM7U0FDRjtRQUVELHNCQUFXLG9CQUFTOzs7O1lBQXBCO2dCQUNDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFDcEIsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO29CQUNqRixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQztpQkFDbkYsQ0FBQyxDQUFDO2FBQ0g7OztXQUFBO3NCQXpCSDtRQTBCRSxDQUFBO0lBcEJZLDJCQUFPOzs7Ozs7O0lBc0JwQixJQUFBO1FBQ0M7U0FBZ0I7dUJBN0JsQjtRQThCRSxDQUFBO0lBRlksNEJBQVE7R0F2QkwsbUJBQW1CLEtBQW5CLG1CQUFtQixRQTBCbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0ID0ge30gYXMgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg3KSBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19