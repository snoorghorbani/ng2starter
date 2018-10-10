/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    if (false) {
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
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(AddDiagramApiModel || (AddDiagramApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0tYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vRSxNQUFNLEtBQVcsa0JBQWtCO0FBQW5DLFdBQWlCLGtCQUFrQjtJQUNsQzs7OztRQXVCQyxZQUFZLDhCQUF3QyxFQUFnQyxDQUFBO1lBQ25GLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUNELGNBQWM7WUFDYixPQUFPO2dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRTtvQkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3ZCO2dCQUNELEtBQUssRUFBRTtvQkFDTixJQUFJLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzt3QkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7cUJBQ2pCO29CQUNELGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztvQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE1BQU0sRUFBRTt3QkFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ2pCO29CQUNELFFBQVEsRUFBRTt3QkFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ25CO29CQUNELElBQUksRUFBRTt3QkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87cUJBQ3JCO2lCQUNEO2dCQUNELEdBQUcsRUFBRTtvQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2lCQUNyQzthQUNELENBQUM7U0FDRjs7OztRQUVELE1BQU0sS0FBSyxTQUFTO1lBQ25CLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNsRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMxRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNyRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUN4RCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMzRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUN2RCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNuRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNyRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUM5RCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRSxNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN6QixLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN4QixjQUFjLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUMzQixLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7aUJBQ3ZDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLElBQUksU0FBUyxDQUFDO29CQUN2QixjQUFjLEVBQUUsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2pELGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDakQsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNIO0tBQ0Q7SUFwR1ksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUdwQjtRQUVDLGlCQUFnQjtLQUNoQjtJQUhZLDJCQUFROzs7OztHQXRHTCxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBMEdsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi9zb3VyY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWRkRGlhZ3JhbUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0SXNBY3RpdmU6IEJvb2xlYW47XHJcblx0XHRUeXBlOiBzdHJpbmc7XHJcblx0XHRUeXBlczogeyBbY29sdW1uTGFiZWw6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdFx0TGVnZW5kOiBCb29sZWFuO1xyXG5cdFx0U3ViY2hhcnQ6IEJvb2xlYW47XHJcblx0XHRab29tOiBCb29sZWFuO1xyXG5cdFx0VG9vbHRpcDogQm9vbGVhbjtcclxuXHRcdFJvdXRlOiBzdHJpbmc7XHJcblx0XHRTeW5jOiBudW1iZXI7XHJcblx0XHRDb2xvcnM6IHN0cmluZ1tdO1xyXG5cdFx0Q29sdW1uTWFwcGluZ3M6IHsgTmFtZVBhdGg6IHN0cmluZzsgVmFsdWVQYXRoOiBzdHJpbmcgfVtdO1xyXG5cdFx0Rmxvdzogc3RyaW5nO1xyXG5cdFx0Y29sdW1uczogYW55W107XHJcblx0XHRDb2xzOiBudW1iZXI7XHJcblx0XHRSb3dzOiBudW1iZXI7XHJcblx0XHRUZXh0Q29sb3I6IFN0cmluZztcclxuXHRcdEJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdFx0Ym9vbGVhbm86IGFueTtcclxuXHRcdFNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0XHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCA9IHt9IGFzIEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogdGhpcy5Jc0FjdGl2ZSxcclxuXHRcdFx0XHRTb3VyY2U6IHRoaXMuU291cmNlLFxyXG5cdFx0XHRcdFR5cGU6IHRoaXMuVHlwZSxcclxuXHRcdFx0XHRHcm91cHM6IHRoaXMuR3JvdXBzLFxyXG5cdFx0XHRcdFdpZGdldDoge1xyXG5cdFx0XHRcdFx0Ym9vbGVhbm86IHRoaXMuYm9vbGVhbm9cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdENoYXJ0OiB7XHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuVHlwZSxcclxuXHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRjb2xvcnM6IHRoaXMuQ29sb3JzLFxyXG5cdFx0XHRcdFx0XHR0eXBlczogdGhpcy5UeXBlc1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdENvbHVtbk1hcHBpbmdzOiB0aGlzLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRcdFx0RmxvdzogdGhpcy5GbG93LFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuTGVnZW5kXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdGhpcy5TdWJjaGFydFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5ab29tXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRcdFx0XHRncm91cGVkOiB0aGlzLlRvb2x0aXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdEJveDoge1xyXG5cdFx0XHRcdFx0Q29sczogdGhpcy5Db2xzLFxyXG5cdFx0XHRcdFx0Um93czogdGhpcy5Sb3dzLFxyXG5cdFx0XHRcdFx0VGV4dENvbG9yOiB0aGlzLlRleHRDb2xvcixcclxuXHRcdFx0XHRcdEJhY2tncm91bmRDb2xvcjogdGhpcy5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXSksXHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTeW5jOiBuZXcgRm9ybUNvbnRyb2woMCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdElzQWN0aXZlOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJwaWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRMZWdlbmQ6IG5ldyBGb3JtQ29udHJvbChcInRydWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFN1YmNoYXJ0OiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Wm9vbTogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRvb2x0aXA6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTb3VyY2U6IG5ldyBGb3JtQ29udHJvbCh7fSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGNvbHVtbnM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sczogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3dzOiBuZXcgRm9ybUNvbnRyb2woMSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRleHRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiIzAwMDAwMFwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBuZXcgRm9ybUNvbnRyb2woXCIjZmZmZmZmXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb2xvcnM6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG5cdFx0XHRcdFR5cGVzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRDb2x1bW5NYXBwaW5nczogbmV3IEZvcm1BcnJheShbXSksXHJcblx0XHRcdFx0RmxvdzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRcdGRvbnV0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJEZWZhdWx0IFRpdGxlXCIpXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Ym9vbGVhbm86IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0U3VjY2Vzc01lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChcIlN1Y2Nlc3NNZXNzYWdlXCIpLFxyXG5cdFx0XHRcdFx0RmFpbHVyZU1lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChcIkZhaWx1cmVNZXNzYWdlXCIpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19