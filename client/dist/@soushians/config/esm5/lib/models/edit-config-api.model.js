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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb25maWctYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEUsTUFBTSxLQUFRLGtCQUFrQjtBQUFoQyxXQUFjLGtCQUFrQjtJQUU1QixJQUFBO1FBR0ksaUJBQVksU0FBNEM7WUFBNUMsMEJBQUEsRUFBQSw4QkFBWSxFQUFnQyxDQUFBO1lBQXhELGlCQUVDO1lBREcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxtQkFBQyxLQUFXLEVBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBQyxTQUFnQixFQUFDLENBQUMsR0FBRyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztTQUN2Rjs7OztRQUVELGdDQUFjOzs7UUFBZDtZQUNJLFFBQVEsQ0FBQztZQUNULE1BQU0sQ0FBQztnQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3RCLENBQUE7U0FDSjtRQUNELHNCQUFXLG9CQUFTOzs7O1lBQXBCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFDakIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEQsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztpQkFDNUIsQ0FBQyxDQUFBO2FBQ0w7OztXQUFBO3NCQTFCVDtRQTRCSyxDQUFBO0lBckJZLDBCQUFPOzs7Ozs7O0lBdUJwQixJQUFBO1FBRUk7U0FDQzt1QkFqQ1Q7UUFrQ0ssQ0FBQTtJQUpZLDJCQUFROzs7OztHQXpCWCxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBK0IvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBFZGl0Q29uZmlnQXBpTW9kZWwge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcbiAgICAgICAgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpZzoge307XHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiB0aGlzLk5hbWUsXHJcbiAgICAgICAgICAgICAgICBDb25maWc6IHRoaXMuQ29uZmlnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICAgIE5hbWU6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIENvbmZpZzogbmV3IEZvcm1Hcm91cCh7fSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgICAgIFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PjtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==