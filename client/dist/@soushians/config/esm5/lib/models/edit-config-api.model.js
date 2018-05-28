/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditConfigApiModel;
(function (EditConfigApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            debugger;
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
                    Name: new FormControl('', [Validators.required]),
                    Config: new FormGroup({}),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditConfigApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
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
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditConfigApiModel || (EditConfigApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb25maWctYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEUsTUFBTSxLQUFRLGtCQUFrQixDQStCL0I7QUEvQkQsV0FBYyxrQkFBa0I7SUFFNUIsSUFBQTtRQUdJLGlCQUFZLFNBQTRDO1lBQTVDLDBCQUFBLEVBQUEsOEJBQVksRUFBZ0MsQ0FBQTtZQUF4RCxpQkFFQztZQURHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsbUJBQUMsS0FBVyxFQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQUMsU0FBZ0IsRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7U0FDdkY7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDSSxRQUFRLENBQUM7WUFDVCxNQUFNLENBQUM7Z0JBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFBO1NBQ0o7UUFDRCxzQkFBVyxvQkFBUzs7OztZQUFwQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7b0JBQ2pCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7aUJBQzVCLENBQUMsQ0FBQTthQUNMOzs7V0FBQTtzQkExQlQ7UUE0QkssQ0FBQTtJQXJCWSwwQkFBTzs7Ozs7OztJQXVCcEIsSUFBQTtRQUVJO1NBQ0M7dUJBakNUO1FBa0NLLENBQUE7SUFKWSwyQkFBUTs7Ozs7R0F6Qlgsa0JBQWtCLEtBQWxCLGtCQUFrQixRQStCL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgRWRpdENvbmZpZ0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIE5hbWU6IHN0cmluZztcclxuICAgICAgICBDb25maWc6IHt9O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXMgYXMgYW55KVtrZXldID0gKGluaXRWYWx1ZSBhcyBhbnkpW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogdGhpcy5OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ29uZmlnOiB0aGlzLkNvbmZpZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuICAgICAgICBSZXN1bHQ6IENvbmZpZ01vZGVsPGFueT47XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=