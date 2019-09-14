/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
export var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0tYXBpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vRSxNQUFNLEtBQVcsa0JBQWtCLENBMEdsQztBQTFHRCxXQUFpQixrQkFBa0I7SUFDbEMsTUFBYSxPQUFPOzs7O1FBdUJuQixZQUFZLFlBQXdDLG1CQUFBLEVBQUUsRUFBOEI7WUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7Ozs7UUFDRCxjQUFjO1lBQ2IsT0FBTztnQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixNQUFNLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN2QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ04sSUFBSSxFQUFFO3dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87d0JBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTt3QkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3FCQUNqQjtvQkFDRCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixNQUFNLEVBQUU7d0JBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNO3FCQUNqQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO3FCQUNuQjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO3FCQUNyQjtpQkFDRDtnQkFDRCxHQUFHLEVBQUU7b0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDckM7YUFDRCxDQUFDO1FBQ0gsQ0FBQzs7OztRQUVELE1BQU0sS0FBSyxTQUFTO1lBQ25CLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNsRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMxRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNyRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUN4RCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMzRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUN2RCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNuRCxNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNyRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNqRCxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUM5RCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRSxNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN6QixLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN4QixjQUFjLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUMzQixLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7aUJBQ3ZDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLElBQUksU0FBUyxDQUFDO29CQUN2QixjQUFjLEVBQUUsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2pELGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDakQsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNKLENBQUM7S0FDRDtJQXBHWSwwQkFBTyxVQW9HbkIsQ0FBQTs7O1FBbkdBLHNCQUFZOztRQUNaLHVCQUFhOztRQUNiLDJCQUFrQjs7UUFDbEIsdUJBQWE7O1FBQ2Isd0JBQXlDOztRQUN6Qyx5QkFBZ0I7O1FBQ2hCLDJCQUFrQjs7UUFDbEIsdUJBQWM7O1FBQ2QsMEJBQWlCOztRQUNqQix3QkFBYzs7UUFDZCx1QkFBYTs7UUFDYix5QkFBaUI7O1FBQ2pCLGlDQUEwRDs7UUFDMUQsdUJBQWE7O1FBQ2IsMEJBQWU7O1FBQ2YsdUJBQWE7O1FBQ2IsdUJBQWE7O1FBQ2IsNEJBQWtCOztRQUNsQixrQ0FBd0I7O1FBQ3hCLDJCQUFjOztRQUNkLHlCQUFvQjs7UUFDcEIseUJBQWlCOztJQStFbEIsTUFBYSxRQUFRO1FBRXBCLGdCQUFlLENBQUM7S0FDaEI7SUFIWSwyQkFBUSxXQUdwQixDQUFBOzs7UUFGQSwwQkFBcUI7O0FBR3ZCLENBQUMsRUExR2dCLGtCQUFrQixLQUFsQixrQkFBa0IsUUEwR2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuL3NvdXJjZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBBZGREaWFncmFtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0X2lkOiBzdHJpbmc7XHJcblx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRJc0FjdGl2ZTogQm9vbGVhbjtcclxuXHRcdFR5cGU6IHN0cmluZztcclxuXHRcdFR5cGVzOiB7IFtjb2x1bW5MYWJlbDogc3RyaW5nXTogc3RyaW5nIH07XHJcblx0XHRMZWdlbmQ6IEJvb2xlYW47XHJcblx0XHRTdWJjaGFydDogQm9vbGVhbjtcclxuXHRcdFpvb206IEJvb2xlYW47XHJcblx0XHRUb29sdGlwOiBCb29sZWFuO1xyXG5cdFx0Um91dGU6IHN0cmluZztcclxuXHRcdFN5bmM6IG51bWJlcjtcclxuXHRcdENvbG9yczogc3RyaW5nW107XHJcblx0XHRDb2x1bW5NYXBwaW5nczogeyBOYW1lUGF0aDogc3RyaW5nOyBWYWx1ZVBhdGg6IHN0cmluZyB9W107XHJcblx0XHRGbG93OiBzdHJpbmc7XHJcblx0XHRjb2x1bW5zOiBhbnlbXTtcclxuXHRcdENvbHM6IG51bWJlcjtcclxuXHRcdFJvd3M6IG51bWJlcjtcclxuXHRcdFRleHRDb2xvcjogU3RyaW5nO1xyXG5cdFx0QmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblx0XHRib29sZWFubzogYW55O1xyXG5cdFx0U291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdElzQWN0aXZlOiB0aGlzLklzQWN0aXZlLFxyXG5cdFx0XHRcdFNvdXJjZTogdGhpcy5Tb3VyY2UsXHJcblx0XHRcdFx0VHlwZTogdGhpcy5UeXBlLFxyXG5cdFx0XHRcdEdyb3VwczogdGhpcy5Hcm91cHMsXHJcblx0XHRcdFx0V2lkZ2V0OiB7XHJcblx0XHRcdFx0XHRib29sZWFubzogdGhpcy5ib29sZWFub1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Q2hhcnQ6IHtcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5UeXBlLFxyXG5cdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmNvbHVtbnMsXHJcblx0XHRcdFx0XHRcdGNvbG9yczogdGhpcy5Db2xvcnMsXHJcblx0XHRcdFx0XHRcdHR5cGVzOiB0aGlzLlR5cGVzXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IHRoaXMuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdFx0XHRGbG93OiB0aGlzLkZsb3csXHJcblx0XHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdGhpcy5MZWdlbmRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0aGlzLlN1YmNoYXJ0XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0em9vbToge1xyXG5cdFx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLlpvb21cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0XHRcdGdyb3VwZWQ6IHRoaXMuVG9vbHRpcFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Qm94OiB7XHJcblx0XHRcdFx0XHRDb2xzOiB0aGlzLkNvbHMsXHJcblx0XHRcdFx0XHRSb3dzOiB0aGlzLlJvd3MsXHJcblx0XHRcdFx0XHRUZXh0Q29sb3I6IHRoaXMuVGV4dENvbG9yLFxyXG5cdFx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiB0aGlzLkJhY2tncm91bmRDb2xvclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtdKSxcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFN5bmM6IG5ldyBGb3JtQ29udHJvbCgwLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SXNBY3RpdmU6IG5ldyBGb3JtQ29udHJvbChcInRydWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFR5cGU6IG5ldyBGb3JtQ29udHJvbChcInBpZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0R3JvdXBzOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdExlZ2VuZDogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U3ViY2hhcnQ6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRab29tOiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VG9vbHRpcDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFNvdXJjZTogbmV3IEZvcm1Db250cm9sKHt9LCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Y29sdW1uczogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb2xzOiBuZXcgRm9ybUNvbnRyb2woMSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvd3M6IG5ldyBGb3JtQ29udHJvbCgxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VGV4dENvbG9yOiBuZXcgRm9ybUNvbnRyb2woXCIjMDAwMDAwXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IG5ldyBGb3JtQ29udHJvbChcIiNmZmZmZmZcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbG9yczogbmV3IEZvcm1Hcm91cCh7fSksXHJcblx0XHRcdFx0VHlwZXM6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG5cdFx0XHRcdENvbHVtbk1hcHBpbmdzOiBuZXcgRm9ybUFycmF5KFtdKSxcclxuXHRcdFx0XHRGbG93OiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdFx0ZG9udXQ6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIkRlZmF1bHQgVGl0bGVcIilcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRib29sZWFubzogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRTdWNjZXNzTWVzc2FnZTogbmV3IEZvcm1Db250cm9sKFwiU3VjY2Vzc01lc3NhZ2VcIiksXHJcblx0XHRcdFx0XHRGYWlsdXJlTWVzc2FnZTogbmV3IEZvcm1Db250cm9sKFwiRmFpbHVyZU1lc3NhZ2VcIilcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogRGlhZ3JhbU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iXX0=