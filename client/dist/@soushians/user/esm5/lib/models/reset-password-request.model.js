/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var ResetPasswordRequestModel;
(function (ResetPasswordRequestModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
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
                    Username: new FormControl('', [Validators.minLength(8), Validators.required]),
                    Captcha: new FormControl(null, [Validators.required]),
                    Token: new FormControl(null, [Validators.required]),
                    Type: new FormControl('sms'),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
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
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ResetPasswordRequestModel.Response = Response;
})(ResetPasswordRequestModel || (ResetPasswordRequestModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsTUFBTSxLQUFRLHlCQUF5QjtBQUF2QyxXQUFjLHlCQUF5QjtJQUVuQyxJQUFBO1FBY0ksaUJBQVksU0FBNkM7WUFBekQsaUJBRUM7WUFERyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztTQUNyRTs7OztRQUVELGdDQUFjOzs7UUFBZDtZQUNJLE1BQU0sQ0FBQztnQkFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3hCLENBQUE7U0FDSjtRQUVELHNCQUFXLG9CQUFTOzs7O1lBQXBCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFDakIsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RSxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO2lCQUMvQixDQUFDLENBQUE7YUFDTDs7O1dBQUE7c0JBdkNUO1FBd0NLLENBQUE7SUFsQ1ksaUNBQU87Ozs7Ozs7Ozs7O0lBb0NwQixJQUFBO1FBRUk7U0FDQzt1QkE3Q1Q7UUE4Q0ssQ0FBQTtJQUpZLGtDQUFRO0dBdENYLHlCQUF5QixLQUF6Qix5QkFBeUIsUUE0Q3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PntcclxuXHJcbiAgICAgICAgVXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy9AUmVxdWVzdEJvZHkoXCJwZWdhaFwiKVxyXG4gICAgICAgIFRva2VuOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFVzZUluKCdib2R5JylcclxuICAgICAgICBDYXB0Y2hhOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFVzZUluKCd1cmwnKVxyXG4gICAgICAgIC8vQFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG4gICAgICAgIFR5cGU6ICdzbXMnIHwgJ2VtYWlsJztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlPzogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogdGhpcy5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgIFRva2VuOiB0aGlzLlRva2VuLFxyXG4gICAgICAgICAgICAgICAgQ2FwdGNoYTogdGhpcy5DYXB0Y2hhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksIFZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIENhcHRjaGE6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgVG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgVHlwZTogbmV3IEZvcm1Db250cm9sKCdzbXMnKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=