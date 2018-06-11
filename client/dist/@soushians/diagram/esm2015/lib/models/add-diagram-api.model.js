/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
export var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                _id: this._id,
                Name: this.Name,
                IsActive: this.IsActive,
                Source: this.Source,
                Type: this.Type,
                Groups: this.Groups,
                Widget: {
                    booleano: this.booleano
                },
                Chart: {
                    data: {
                        type: this.Type,
                        columns: this.columns,
                        colors: this.Colors,
                        types: this.Types
                    },
                    ColumnMappings: this.ColumnMappings,
                    Flow: this.Flow,
                    legend: {
                        show: this.Legend
                    },
                    subchart: {
                        show: this.Subchart
                    },
                    zoom: {
                        enabled: this.Zoom
                    },
                    tooltip: {
                        grouped: this.Tooltip
                    }
                },
                Box: {
                    Cols: this.Cols,
                    Rows: this.Rows,
                    TextColor: this.TextColor,
                    BackgroundColor: this.BackgroundColor
                }
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                _id: new FormControl("", []),
                Name: new FormControl("", [Validators.required]),
                Sync: new FormControl(0, [Validators.required]),
                IsActive: new FormControl("true", [Validators.required]),
                Type: new FormControl("pie", [Validators.required]),
                Groups: new FormControl("", [Validators.required]),
                Legend: new FormControl("true", [Validators.required]),
                Subchart: new FormControl("false", [Validators.required]),
                Zoom: new FormControl("false", [Validators.required]),
                Tooltip: new FormControl("false", [Validators.required]),
                Route: new FormControl("", [Validators.required]),
                Source: new FormControl({}, [Validators.required]),
                columns: new FormControl("", [Validators.required]),
                Cols: new FormControl(1, [Validators.required]),
                Rows: new FormControl(1, [Validators.required]),
                TextColor: new FormControl("#000000", [Validators.required]),
                BackgroundColor: new FormControl("#ffffff", [Validators.required]),
                Colors: new FormGroup({}),
                Types: new FormGroup({}),
                ColumnMappings: new FormArray([]),
                Flow: new FormControl(true),
                donut: new FormGroup({
                    title: new FormControl("Default Title")
                }),
                booleano: new FormGroup({
                    SuccessMessage: new FormControl("SuccessMessage"),
                    FailureMessage: new FormControl("FailureMessage")
                })
            });
        }
    }
    AddDiagramApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype._id;
        /** @type {?} */
        Request.prototype.Name;
        /** @type {?} */
        Request.prototype.IsActive;
        /** @type {?} */
        Request.prototype.Type;
        /** @type {?} */
        Request.prototype.Types;
        /** @type {?} */
        Request.prototype.Legend;
        /** @type {?} */
        Request.prototype.Subchart;
        /** @type {?} */
        Request.prototype.Zoom;
        /** @type {?} */
        Request.prototype.Tooltip;
        /** @type {?} */
        Request.prototype.Route;
        /** @type {?} */
        Request.prototype.Sync;
        /** @type {?} */
        Request.prototype.Colors;
        /** @type {?} */
        Request.prototype.ColumnMappings;
        /** @type {?} */
        Request.prototype.Flow;
        /** @type {?} */
        Request.prototype.columns;
        /** @type {?} */
        Request.prototype.Cols;
        /** @type {?} */
        Request.prototype.Rows;
        /** @type {?} */
        Request.prototype.TextColor;
        /** @type {?} */
        Request.prototype.BackgroundColor;
        /** @type {?} */
        Request.prototype.booleano;
        /** @type {?} */
        Request.prototype.Source;
        /** @type {?} */
        Request.prototype.Groups;
    }
    class Response {
        constructor() { }
    }
    AddDiagramApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(AddDiagramApiModel || (AddDiagramApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0tYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vRSxNQUFNLEtBQVcsa0JBQWtCO0FBQW5DLFdBQWlCLGtCQUFrQjtJQUNsQzs7OztRQXVCQyxZQUFZLDhCQUF3QyxFQUFnQyxDQUFBO1lBQ25GLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUNELGNBQWM7WUFDYixNQUFNLENBQUM7Z0JBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFO29CQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDdkI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNOLElBQUksRUFBRTt3QkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO3dCQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztxQkFDakI7b0JBQ0QsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO29CQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsTUFBTSxFQUFFO3dCQUNQLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtxQkFDakI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNULElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtxQkFDbkI7b0JBQ0QsSUFBSSxFQUFFO3dCQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztxQkFDckI7aUJBQ0Q7Z0JBQ0QsR0FBRyxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7aUJBQ3JDO2FBQ0QsQ0FBQztTQUNGOzs7O1FBRUQsTUFBTSxLQUFLLFNBQVM7WUFDbkIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDO2dCQUNwQixHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbEQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDakQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDMUQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDckQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDcEQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDeEQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDM0QsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbkQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDcEQsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDckQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDakQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDakQsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDOUQsZUFBZSxFQUFFLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDcEUsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsY0FBYyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDM0IsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDO29CQUNwQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDO2lCQUN2QyxDQUFDO2dCQUNGLFFBQVEsRUFBRSxJQUFJLFNBQVMsQ0FBQztvQkFDdkIsY0FBYyxFQUFFLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDO29CQUNqRCxjQUFjLEVBQUUsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pELENBQUM7YUFDRixDQUFDLENBQUM7U0FDSDtLQUNEO0lBcEdZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFHcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSwyQkFBUTs7Ozs7R0F0R0wsa0JBQWtCLEtBQWxCLGtCQUFrQixRQTBHbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4vc291cmNlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdElzQWN0aXZlOiBCb29sZWFuO1xyXG5cdFx0VHlwZTogc3RyaW5nO1xyXG5cdFx0VHlwZXM6IHsgW2NvbHVtbkxhYmVsOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRcdExlZ2VuZDogQm9vbGVhbjtcclxuXHRcdFN1YmNoYXJ0OiBCb29sZWFuO1xyXG5cdFx0Wm9vbTogQm9vbGVhbjtcclxuXHRcdFRvb2x0aXA6IEJvb2xlYW47XHJcblx0XHRSb3V0ZTogc3RyaW5nO1xyXG5cdFx0U3luYzogbnVtYmVyO1xyXG5cdFx0Q29sb3JzOiBzdHJpbmdbXTtcclxuXHRcdENvbHVtbk1hcHBpbmdzOiB7IE5hbWVQYXRoOiBzdHJpbmc7IFZhbHVlUGF0aDogc3RyaW5nIH1bXTtcclxuXHRcdEZsb3c6IHN0cmluZztcclxuXHRcdGNvbHVtbnM6IGFueVtdO1xyXG5cdFx0Q29sczogbnVtYmVyO1xyXG5cdFx0Um93czogbnVtYmVyO1xyXG5cdFx0VGV4dENvbG9yOiBTdHJpbmc7XHJcblx0XHRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHRcdGJvb2xlYW5vOiBhbnk7XHJcblx0XHRTb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHROYW1lOiB0aGlzLk5hbWUsXHJcblx0XHRcdFx0SXNBY3RpdmU6IHRoaXMuSXNBY3RpdmUsXHJcblx0XHRcdFx0U291cmNlOiB0aGlzLlNvdXJjZSxcclxuXHRcdFx0XHRUeXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0R3JvdXBzOiB0aGlzLkdyb3VwcyxcclxuXHRcdFx0XHRXaWRnZXQ6IHtcclxuXHRcdFx0XHRcdGJvb2xlYW5vOiB0aGlzLmJvb2xlYW5vXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRDaGFydDoge1xyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Y29sb3JzOiB0aGlzLkNvbG9ycyxcclxuXHRcdFx0XHRcdFx0dHlwZXM6IHRoaXMuVHlwZXNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdEZsb3c6IHRoaXMuRmxvdyxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0aGlzLkxlZ2VuZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuU3ViY2hhcnRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuWm9vbVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRcdFx0Z3JvdXBlZDogdGhpcy5Ub29sdGlwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRCb3g6IHtcclxuXHRcdFx0XHRcdENvbHM6IHRoaXMuQ29scyxcclxuXHRcdFx0XHRcdFJvd3M6IHRoaXMuUm93cyxcclxuXHRcdFx0XHRcdFRleHRDb2xvcjogdGhpcy5UZXh0Q29sb3IsXHJcblx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuQmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW10pLFxyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U3luYzogbmV3IEZvcm1Db250cm9sKDAsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFwicGllXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRHcm91cHM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TGVnZW5kOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTdWJjaGFydDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFpvb206IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUb29sdGlwOiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U291cmNlOiBuZXcgRm9ybUNvbnRyb2woe30sIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRjb2x1bW5zOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbHM6IG5ldyBGb3JtQ29udHJvbCgxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um93czogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUZXh0Q29sb3I6IG5ldyBGb3JtQ29udHJvbChcIiMwMDAwMDBcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEJhY2tncm91bmRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiI2ZmZmZmZlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sb3JzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRUeXBlczogbmV3IEZvcm1Hcm91cCh7fSksXHJcblx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IG5ldyBGb3JtQXJyYXkoW10pLFxyXG5cdFx0XHRcdEZsb3c6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0XHRkb251dDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiRGVmYXVsdCBUaXRsZVwiKVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGJvb2xlYW5vOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFN1Y2Nlc3NNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJTdWNjZXNzTWVzc2FnZVwiKSxcclxuXHRcdFx0XHRcdEZhaWx1cmVNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJGYWlsdXJlTWVzc2FnZVwiKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiJdfQ==