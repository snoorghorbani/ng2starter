/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
export var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            debugger;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
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
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
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
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddDiagramApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(AddDiagramApiModel || (AddDiagramApiModel = {}));
//# sourceMappingURL=add-diagram-api.model.js.map
