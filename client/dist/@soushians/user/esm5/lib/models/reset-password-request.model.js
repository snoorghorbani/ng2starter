/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var ResetPasswordRequestModel;
(function (ResetPasswordRequestModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
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
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    Username: new FormControl("", [Validators.minLength(8), Validators.required]),
                    Captcha: new FormControl(null, [Validators.required]),
                    Token: new FormControl(null, [Validators.required]),
                    Type: new FormControl("sms")
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ResetPasswordRequestModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Username;
        /** @type {?} */
        Request.prototype.Token;
        /** @type {?} */
        Request.prototype.Captcha;
        /** @type {?} */
        Request.prototype.Type;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ResetPasswordRequestModel.Response = Response;
})(ResetPasswordRequestModel || (ResetPasswordRequestModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsTUFBTSxLQUFXLHlCQUF5QjtBQUExQyxXQUFpQix5QkFBeUI7SUFDekMsSUFBQTtRQWFDLGlCQUFZLFNBQTZDO1lBQXpELGlCQUVDO1lBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1NBQ3BFOzs7O1FBRUQsZ0NBQWM7OztRQUFkO1lBQ0MsT0FBTztnQkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3JCLENBQUM7U0FDRjtRQUVELHNCQUFXLG9CQUFTOzs7O1lBQXBCO2dCQUNDLE9BQU8sSUFBSSxTQUFTLENBQUM7b0JBQ3BCLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDL0UsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDdkQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDckQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztpQkFDNUIsQ0FBQyxDQUFDO2FBQ0g7OztXQUFBO3NCQXBDSDtRQXFDRSxDQUFBO0lBakNZLGlDQUFPOzs7Ozs7Ozs7OztJQW1DcEIsSUFBQTtRQUNDO1NBQWdCO3VCQXhDbEI7UUF5Q0UsQ0FBQTtJQUZZLGtDQUFRO0dBcENMLHlCQUF5QixLQUF6Qix5QkFBeUIsUUF1Q3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG5cdFx0Ly9AUmVxdWVzdEJvZHkoXCJwZWdhaFwiKVxyXG5cdFx0VG9rZW46IHN0cmluZztcclxuXHJcblx0XHQvL0BVc2VJbignYm9keScpXHJcblx0XHRDYXB0Y2hhOiBzdHJpbmc7XHJcblxyXG5cdFx0Ly9AVXNlSW4oJ3VybCcpXHJcblx0XHQvL0BWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdFR5cGU6IFwic21zXCIgfCBcImVtYWlsXCI7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0VXNlcm5hbWU6IHRoaXMuVXNlcm5hbWUsXHJcblx0XHRcdFx0VG9rZW46IHRoaXMuVG9rZW4sXHJcblx0XHRcdFx0Q2FwdGNoYTogdGhpcy5DYXB0Y2hhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRVc2VybmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q2FwdGNoYTogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUb2tlbjogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJzbXNcIilcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=