/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    class Request {
        /**
         * @param {?} params
         */
        constructor(params) { }
        /**
         * @return {?}
         */
        getRequestQueryParams() {
            return {};
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl("", [Validators.required]),
                IsActive: new FormControl("true", [Validators.required]),
                Route: new FormControl("", [Validators.required])
            });
        }
    }
    EditDiagramApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    EditDiagramApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditDiagramApiModel || (EditDiagramApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLWFwaS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPcEUsTUFBTSxLQUFXLG1CQUFtQjtBQUFwQyxXQUFpQixtQkFBbUI7SUFDbkMsTUFBYSxPQUFPOzs7O1FBQ25CLFlBQVksTUFBZSxLQUFJOzs7O1FBQy9CLHFCQUFxQjtZQUNwQixPQUFPLEVBQUUsQ0FBQztTQUNWOzs7O1FBRUQsTUFBTSxLQUFLLFNBQVM7WUFDbkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbEQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUNuRCxDQUFDLENBQUM7U0FDSDtLQUNEO0lBYlksMkJBQU87SUFlcEIsTUFBYSxRQUFRO1FBRXBCLGlCQUFnQjtLQUNoQjtJQUhZLDRCQUFROzs7OztHQWhCTCxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBb0JuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0RGlhZ3JhbUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFJlcXVlc3QpIHt9XHJcblx0XHRnZXRSZXF1ZXN0UXVlcnlQYXJhbXMoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHRcdC8vIFRPRE86XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SXNBY3RpdmU6IG5ldyBGb3JtQ29udHJvbChcInRydWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogRGlhZ3JhbU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=