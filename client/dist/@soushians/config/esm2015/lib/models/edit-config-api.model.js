/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditConfigApiModel;
(function (EditConfigApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (/** @type {?} */ (this))[key] = (/** @type {?} */ (initValue))[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            debugger;
            return {
                Name: this.Name,
                Config: this.Config
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl('', [Validators.required]),
                Config: new FormGroup({}),
            });
        }
    }
    EditConfigApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Name;
        /** @type {?} */
        Request.prototype.Config;
    }
    class Response {
        constructor() {
        }
    }
    EditConfigApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditConfigApiModel || (EditConfigApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb25maWctYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEUsTUFBTSxLQUFRLGtCQUFrQjtBQUFoQyxXQUFjLGtCQUFrQjtJQUU1Qjs7OztRQUdJLFlBQVksU0FBUyxxQkFBRyxFQUFnQyxDQUFBO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQUMsSUFBVyxFQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQUMsU0FBZ0IsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkY7Ozs7UUFFRCxjQUFjO1lBQ1YsUUFBUSxDQUFDO1lBQ1QsTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDdEIsQ0FBQTtTQUNKOzs7O1FBQ0QsTUFBTSxLQUFLLFNBQVM7WUFDaEIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDO2dCQUNqQixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2FBQzVCLENBQUMsQ0FBQTtTQUNMO0tBRUo7SUFyQlksMEJBQU87Ozs7Ozs7SUF1QnBCO1FBRUk7U0FDQztLQUNKO0lBSlksMkJBQVE7Ozs7O0dBekJYLGtCQUFrQixLQUFsQixrQkFBa0IsUUErQi9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIEVkaXRDb25maWdBcGlNb2RlbCB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PntcclxuICAgICAgICBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlnOiB7fTtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzIGFzIGFueSlba2V5XSA9IChpbml0VmFsdWUgYXMgYW55KVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIE5hbWU6IHRoaXMuTmFtZSxcclxuICAgICAgICAgICAgICAgIENvbmZpZzogdGhpcy5Db25maWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgTmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgQ29uZmlnOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcbiAgICAgICAgUmVzdWx0OiBDb25maWdNb2RlbDxhbnk+O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19