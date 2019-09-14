/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditConfigApiModel;
(function (EditConfigApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (((/** @type {?} */ (_this)))[key] = ((/** @type {?} */ (initValue)))[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Name: this.Name,
                Config: this.Config
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    Name: new FormControl("", [Validators.required]),
                    Config: new FormGroup({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditConfigApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Name;
        /** @type {?} */
        Request.prototype.Config;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditConfigApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditConfigApiModel || (EditConfigApiModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb25maWctYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJjb25maWcvc3JjL2xpYi9tb2RlbHMvZWRpdC1jb25maWctYXBpLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxNQUFNLEtBQVcsa0JBQWtCLENBMEJsQztBQTFCRCxXQUFpQixrQkFBa0I7SUFDbEM7UUFHQyxpQkFBWSxTQUE0QztZQUE1QywwQkFBQSxFQUFBLCtCQUFZLEVBQUUsRUFBOEI7WUFBeEQsaUJBRUM7WUFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxtQkFBQSxLQUFJLEVBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7UUFDdkYsQ0FBQzs7OztRQUVELGdDQUFjOzs7UUFBZDtZQUNDLE9BQU87Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUNELHNCQUFXLG9CQUFTOzs7O1lBQXBCO2dCQUNDLE9BQU8sSUFBSSxTQUFTLENBQUM7b0JBQ3BCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7aUJBQ3pCLENBQUMsQ0FBQztZQUNKLENBQUM7OztXQUFBO1FBQ0YsY0FBQztJQUFELENBQUMsQUFuQkQsSUFtQkM7SUFuQlksMEJBQU8sVUFtQm5CLENBQUE7OztRQWxCQSx1QkFBYTs7UUFDYix5QkFBVzs7SUFtQlo7UUFFQztRQUFnQixDQUFDO1FBQ2xCLGVBQUM7SUFBRCxDQUFDLEFBSEQsSUFHQztJQUhZLDJCQUFRLFdBR3BCLENBQUE7OztRQUZBLDBCQUF5Qjs7QUFHM0IsQ0FBQyxFQTFCZ0Isa0JBQWtCLEtBQWxCLGtCQUFrQixRQTBCbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Q29uZmlnQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0Q29uZmlnOiB7fTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKCh0aGlzIGFzIGFueSlba2V5XSA9IChpbml0VmFsdWUgYXMgYW55KVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbmZpZzogdGhpcy5Db25maWdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdFx0Q29uZmlnOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IENvbmZpZ01vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdH1cclxufVxyXG4iXX0=