/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { DiagramService } from "../../services/diagram.service";
import { AddDiagramApiModel } from "../../models/add-diagram-api.model";
import { DiagramModel } from "../../models/diagram.model";
import { HaveEndpointAction, ColumnsMappingChangedAction, DiagramConfigChangedAction, AddDiagramAction } from "../../actions/add-diagram.actions";
var AddDiagramComponent = /** @class */ (function () {
    function AddDiagramComponent(diagramService, formBuilder, store, route) {
        var _this = this;
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Name: data.Name,
                        IsActive: data.IsActive,
                        Groups: data.Groups,
                        Type: data.Chart.data.type,
                        Legend: data.Chart.legend.show,
                        Subchart: data.Chart.subchart.show,
                        Zoom: data.Chart.zoom.enabled,
                        Tooltip: data.Chart.tooltip.grouped,
                        Sync: data.Source.Interval,
                        Source: data.Source,
                        columns: data.Chart.data.columns,
                        ColumnMappings: data.Chart.ColumnMappings,
                        Cols: data.Box.Cols,
                        Flow: data.Chart.Flow,
                        Rows: data.Box.Rows,
                        BackgroundColor: data.Box.BackgroundColor,
                        TextColor: data.Box.TextColor
                    });
                    var /** @type {?} */ colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(function (columnKey) {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    var /** @type {?} */ typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
                    Object.keys(data.Chart.data.types || {}).forEach(function (key) {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    });
                    data.Chart.ColumnMappings.forEach(function (mapping) { return _this.addColumn(mapping.NamePath, mapping.ValuePath); });
                    _this.source = data.Source;
                    _this.store.dispatch(new HaveEndpointAction(_this));
                    _this.diagramPartialConfig = {
                        type: _this.formGroup.value.Type,
                        inputs: {
                            formGroup: _this.formGroup,
                            diagramService: _this.diagramService
                        }
                    };
                });
            _this.diagramPartialConfig = {
                type: _this.formGroup.value.Type,
                inputs: {
                    formGroup: _this.formGroup,
                    diagramService: _this.diagramService
                }
            };
        });
        this.diagramTypes = [
            "bar",
            "donut",
            "pie",
            "scatter",
            "line",
            "area",
            "area-spline",
            "numero",
            "booleano",
            "tempo"
        ];
    }
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroup.controls["ColumnMappings"].statusChanges.subscribe(function (status) {
            if (status == "VALID" &&
                (/** @type {?} */ (_this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
                _this.data)
                _this.store.dispatch(new ColumnsMappingChangedAction(_this));
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
    };
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.getDataStructure = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ observer = this.diagramService.getData(tslib_1.__assign({}, this.source, { Interval: 0 }), Date.now() - 10000);
        this.dataSubscription = observer.subscribe(function (data) {
            _this.data = data.Data;
            _this.pathOptions = _this.diagramService.get_data_report(data.Data);
        });
        return observer;
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DiagramConfigChangedAction(this));
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.typeChanged = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ typesFormGroup = (/** @type {?} */ (this.formGroup.controls["Types"])).controls;
        for (var /** @type {?} */ cb in typesFormGroup) {
            typesFormGroup[cb].setValue(this.formGroup.value.Type);
        }
        this.diagramPartialConfig = {
            type: this.formGroup.value.Type,
            inputs: {
                formGroup: this.formGroup,
                diagramService: this.diagramService
            }
        };
        this.store.dispatch(new DiagramConfigChangedAction(this));
    };
    /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    AddDiagramComponent.prototype.addColumn = /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    function (NamePath, ValuePath) {
        if (NamePath === void 0) { NamePath = ""; }
        if (ValuePath === void 0) { ValuePath = ""; }
        var /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, Validators.required]
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.routeEntered = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    AddDiagramComponent.prototype.removeColumn = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.calculateColumns = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create(function (obser) {
            var /** @type {?} */ columnsMApping = {};
            var /** @type {?} */ columns = _this.diagramService.extract_columns_from_data(_this.data, (/** @type {?} */ (_this.formGroup.controls["ColumnMappings"])).value);
            _this.formGroup.controls["columns"].setValue(columns);
            //add new item to this.formGroup.controls.colors form control
            var /** @type {?} */ colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
            columns.forEach(function (column) {
                var /** @type {?} */ columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            var /** @type {?} */ typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
            columns.forEach(function (column) {
                var /** @type {?} */ key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new FormControl(_this.formGroup.value.Type));
            });
            obser.next();
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.generateDiagram = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ temp = new DiagramModel();
        temp._id = "template_id";
        temp.Name = this.formGroup.value.Name;
        temp.Source = this.source;
        temp.Box = {
            NumberOfColumns: 1,
            Order: 1,
            BackgroundColor: this.formGroup.value.BackgroundColor
        };
        temp.Widget = {
            booleano: this.formGroup.value.booleano
        };
        temp.Chart = {
            ColumnMappings: this.formGroup.value.ColumnMappings,
            data: {
                columns: this.formGroup.controls["columns"].value,
                type: this.formGroup.value.Type,
                types: this.formGroup.value.Types,
                colors: this.formGroup.controls["Colors"].value
            },
            Flow: this.formGroup.value.Flow,
            legend: {
                show: this.formGroup.value.Legend
            },
            subchart: {
                show: this.formGroup.value.Subchart
            },
            zoom: {
                enabled: this.formGroup.value.Zoom
            },
            tooltip: {
                grouped: this.formGroup.value.Tooltip
            }
        };
        // this.componentModel = {
        //   component: this.typeMapToDiagram[temp.Chart.data.type],
        //   inputs: { data: temp }
        // }
        this.diagramModel = temp;
        return Observable.empty();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.store.dispatch(new AddDiagramAction(this.formGroup.value));
    };
    AddDiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram-add",
                    template: "<div fxLayout=\"column\" fxFlex=\"100\">\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"60\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (change)=\"routeEntered($event)\">\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\n                {{item.Endpoint}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\n          </mat-form-field>\n          <div>\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\n                {{item}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <mat-form-field>\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\n              <mat-select-trigger>\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\n        </mat-card-content>\n      </form>\n    </mat-card>\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\n                    <mat-option>--</mat-option>\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"removeColumn(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <div class=\"list-item\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\" fxLayoutAlign=\"space-between center\">\n            <span>{{item[0]}} : {{item[1]}}</span>\n            <span [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\n            </span>\n            <mat-form-field [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\n      </mat-card-header>\n      <mat-card-content [formGroup]=\"formGroup\">\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\n        </mat-form-field>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\n          <span>\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\n          </span>\n        </div>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\n          <span>\n            <input formControlName=\"BackgroundColor\" type=\"color\">\n          </span>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>",
                    styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
                },] },
    ];
    /** @nocollapse */
    AddDiagramComponent.ctorParameters = function () { return [
        { type: DiagramService },
        { type: FormBuilder },
        { type: Store },
        { type: ActivatedRoute }
    ]; };
    return AddDiagramComponent;
}());
export { AddDiagramComponent };
function AddDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AddDiagramComponent.prototype.formGroup;
    /** @type {?} */
    AddDiagramComponent.prototype.data;
    /** @type {?} */
    AddDiagramComponent.prototype.columns;
    /** @type {?} */
    AddDiagramComponent.prototype.chart;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramTypes;
    /** @type {?} */
    AddDiagramComponent.prototype.pathOptions;
    /** @type {?} */
    AddDiagramComponent.prototype.columnsMappings;
    /** @type {?} */
    AddDiagramComponent.prototype.dataSubscription;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramModel;
    /** @type {?} */
    AddDiagramComponent.prototype.componentModel;
    /** @type {?} */
    AddDiagramComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramPartialConfig;
    /** @type {?} */
    AddDiagramComponent.prototype.sources;
    /** @type {?} */
    AddDiagramComponent.prototype.groups;
    /** @type {?} */
    AddDiagramComponent.prototype.source;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramService;
    /** @type {?} */
    AddDiagramComponent.prototype.formBuilder;
    /** @type {?} */
    AddDiagramComponent.prototype.store;
    /** @type {?} */
    AddDiagramComponent.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQWEsV0FBVyxFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBUyxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU94RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsMkJBQTJCLEVBQzNCLDBCQUEwQixFQUMxQixnQkFBZ0IsRUFDaEIsTUFBTSxtQ0FBbUMsQ0FBQzs7SUEwTDFDLDZCQUNTLGdCQUNBLGFBQ0EsT0FDQTtRQUpULGlCQStFQztRQTlFUSxtQkFBYyxHQUFkLGNBQWM7UUFDZCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxVQUFLLEdBQUwsS0FBSztRQUNMLFVBQUssR0FBTCxLQUFLO3lCQXhCUyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUztRQTBCMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FB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U0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDYyUUE4Sko7b0JBQ04sTUFBTSxFQUFFLENBQUMsMlBBQTJQLENBQUM7aUJBQ3JROzs7O2dCQS9LUSxjQUFjO2dCQVZpQyxXQUFXO2dCQUUxRCxLQUFLO2dCQUNFLGNBQWM7OzhCQUo5Qjs7U0EyTGEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3IvcHVibGlzaFwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgYWRkRGlhZ3JhbVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYWRkLWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEhhdmVFbmRwb2ludEFjdGlvbixcclxuXHRDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24sXHJcblx0RGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24sXHJcblx0QWRkRGlhZ3JhbUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tYWRkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0Lmx0LW1kPVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiNjBcIj5cclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtin2YHYstmI2K/ZhiDZhtmF2YjYr9in2LEg2KzYr9uM2K88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYudmG2YjYp9mGINmG2YXZiNiv2KfYsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZhtin2YUg2YXYs9uM2LFcIiBmb3JtQ29udHJvbE5hbWU9XCJTb3VyY2VcIiAoY2hhbmdlKT1cInJvdXRlRW50ZXJlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5FbmRwb2ludH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInN5bmMgdGltZVwiIGZvcm1Db250cm9sTmFtZT1cIlN5bmNcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD7ZhtmI2Lkg2YbZhdmI2K/Yp9ixIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcm91cHNcIiBmb3JtQ29udHJvbE5hbWU9XCJHcm91cHNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAge3tmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlID8gZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZVswXSA6ICcnfX1cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAoK3t7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZS5sZW5ndGggLSAxfX0gb3RoZXJzKVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+2YjYtti524zYqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yIChDb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoKVwiIFtkYXRhXT1cImRpYWdyYW1QYXJ0aWFsQ29uZmlnXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGlkPVwibW9kaWZ5LWRpYWdyYW1cIiBmeEZsZXg9XCI0MFwiIFtkYXRhXT1cImRpYWdyYW1Nb2RlbFwiPjwvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPiDYs9in2K7Yqtin2LEg2K/bjNiq2KcgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7Zhtqv2KfYtNiqINiv2KfYr9mHPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNNYXBwaW5nczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbHVtbnNNYXBwaW5nc1tpXVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cItmG2KfZhSDZhdiz24zYsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVQYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cItmF2YLYr9in2LEg2YXYs9uM2LFcIiBmb3JtQ29udHJvbE5hbWU9XCJWYWx1ZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUNvbHVtbihpKVwiIGZ4RmxleCBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7Zvtin2qkg2qnYsdiv2YY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkQ29sdW1uKClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPtin2YHYstmI2K/ZhiDYs9iq2YjZhjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtmG2KrYp9uM2Kwg2K/Yp9iv2Ycg2YfYpzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZTsgbGV0IGk9aW5kZXhcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtWzBdfX0gOiB7e2l0ZW1bMV19fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi2LHZhtqvINmG2YXZiNiv2KfYsVwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5UeXBlcykuY29udHJvbHNbaXRlbVswXV1cIj5cclxuICAgICAgICAgICAgICA8IS0tIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRpcG9cIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiID4gLS0+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ0aXBvXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7YqtmG2LjbjNmF2KfYqiDYuNin2YfYsduMPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2KrYudiv2KfYryDYs9i32LFcIiBmb3JtQ29udHJvbE5hbWU9XCJDb2xzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYqti52K/Yp9ivINiz2KrZiNmGXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm93c1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmeEZsZXg9XCI1MFwiPtix2YbaryDZhdiq2YYgOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVGV4dENvbG9yXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmeEZsZXg9XCI1MFwiPtix2YbaryDZvtizINiy2YXbjNmG2YcgOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cIkJhY2tncm91bmRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQoJGV2ZW50KVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+2KvYqNiqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPtin2YbYtdix2KfZgTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY2hhcnR7d2lkdGg6MzAwcHg7ZGlyZWN0aW9uOmx0cn0uZm9ybS1lbGVtZW50LW1hcmdpbnttYXJnaW46NXB4IDEwcHh9Lml0ZW0tbWFyZ2lue21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja31tYXQtb3B0aW9uLmRlcHRoXzJ7cGFkZGluZy1yaWdodDozMHB4fW1hdC1vcHRpb24uZGVwdGhfM3twYWRkaW5nLXJpZ2h0OjUwcHh9bWF0LW9wdGlvbi5kZXB0aF80e3BhZGRpbmctcmlnaHQ6NzBweH0ubWF0LWNhcmR7bWFyZ2luOjEyLjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRkYXRhOiBhbnk7XHJcblx0Y29sdW1uczogYW55O1xyXG5cdGNoYXJ0O1xyXG5cdGRpYWdyYW1UeXBlczogc3RyaW5nW107XHJcblx0cGF0aE9wdGlvbnM6IHtcclxuXHRcdHBhdGg6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdHR5cGU6IHN0cmluZztcclxuXHRcdGNvbG9yOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdGNvbHVtbnNNYXBwaW5nczogQWJzdHJhY3RDb250cm9sW107XHJcblx0ZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRpYWdyYW1Nb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdGNvbXBvbmVudE1vZGVsOiB7IGNvbXBvbmVudDogYW55OyBpbnB1dHM6IG9iamVjdCB9O1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cdGRpYWdyYW1QYXJ0aWFsQ29uZmlnOiB7IHR5cGU6IHN0cmluZzsgaW5wdXRzOiB7IGZvcm1Hcm91cDogRm9ybUdyb3VwOyBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UgfSB9O1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT47XHJcblx0Z3JvdXBzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRzb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zb3VyY2VzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLmdyb3VwcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0R3JvdXBzKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1Nb2RlbCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRoaXMuY29sdW1uc01hcHBpbmdzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdE5hbWU6IGRhdGEuTmFtZSxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUsXHJcblx0XHRcdFx0XHRcdEdyb3VwczogZGF0YS5Hcm91cHMsXHJcblx0XHRcdFx0XHRcdFR5cGU6IGRhdGEuQ2hhcnQuZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRMZWdlbmQ6IGRhdGEuQ2hhcnQubGVnZW5kLnNob3csXHJcblx0XHRcdFx0XHRcdFN1YmNoYXJ0OiBkYXRhLkNoYXJ0LnN1YmNoYXJ0LnNob3csXHJcblx0XHRcdFx0XHRcdFpvb206IGRhdGEuQ2hhcnQuem9vbS5lbmFibGVkLFxyXG5cdFx0XHRcdFx0XHRUb29sdGlwOiBkYXRhLkNoYXJ0LnRvb2x0aXAuZ3JvdXBlZCxcclxuXHRcdFx0XHRcdFx0U3luYzogZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdFNvdXJjZTogZGF0YS5Tb3VyY2UsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IGRhdGEuQ2hhcnQuZGF0YS5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdFx0Q29sczogZGF0YS5Cb3guQ29scyxcclxuXHRcdFx0XHRcdFx0RmxvdzogZGF0YS5DaGFydC5GbG93LFxyXG5cdFx0XHRcdFx0XHRSb3dzOiBkYXRhLkJveC5Sb3dzLFxyXG5cdFx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcixcclxuXHRcdFx0XHRcdFx0VGV4dENvbG9yOiBkYXRhLkJveC5UZXh0Q29sb3JcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLmNvbG9ycyB8fCB7fSkuZm9yRWFjaChjb2x1bW5LZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnNbY29sdW1uS2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLnR5cGVzIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS50eXBlc1trZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHRoaXMuYWRkQ29sdW1uKG1hcHBpbmcuTmFtZVBhdGgsIG1hcHBpbmcuVmFsdWVQYXRoKSk7XHJcblx0XHRcdFx0XHR0aGlzLnNvdXJjZSA9IGRhdGEuU291cmNlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGlhZ3JhbVR5cGVzID0gW1xyXG5cdFx0XHRcImJhclwiLFxyXG5cdFx0XHRcImRvbnV0XCIsXHJcblx0XHRcdFwicGllXCIsXHJcblx0XHRcdFwic2NhdHRlclwiLFxyXG5cdFx0XHRcImxpbmVcIixcclxuXHRcdFx0XCJhcmVhXCIsXHJcblx0XHRcdFwiYXJlYS1zcGxpbmVcIixcclxuXHRcdFx0XCJudW1lcm9cIixcclxuXHRcdFx0XCJib29sZWFub1wiLFxyXG5cdFx0XHRcInRlbXBvXCJcclxuXHRcdF07XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3Muc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXR1cyA9PSBcIlZBTElEXCIgJiZcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0dGhpcy5kYXRhXHJcblx0XHRcdClcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YVN1YnNjcmlwdGlvbikgdGhpcy5kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdC8vIGdldERhdGEoKSB7XHJcblx0Ly8gICBjb25zdCBvJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLnNvdXJjZSk7XHJcblx0Ly8gICB0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvJC5zdWJzY3JpYmUoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbih0aGlzKSlcclxuXHQvLyAgIHJldHVybiBvJDtcclxuXHQvLyB9XHJcblx0Z2V0RGF0YVN0cnVjdHVyZSgpIHtcclxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHsgLi4udGhpcy5zb3VyY2UsIEludGVydmFsOiAwIH0sIERhdGUubm93KCkgLSAxMDAwMCk7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvYnNlcnZlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdFx0dGhpcy5wYXRoT3B0aW9ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0X2RhdGFfcmVwb3J0KGRhdGEuRGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlcjtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0dHlwZUNoYW5nZWQoKSB7XHJcblx0XHRjb25zdCB0eXBlc0Zvcm1Hcm91cCA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5UeXBlcyBhcyBGb3JtR3JvdXApLmNvbnRyb2xzO1xyXG5cdFx0Zm9yIChsZXQgY2IgaW4gdHlwZXNGb3JtR3JvdXApIHtcclxuXHRcdFx0dHlwZXNGb3JtR3JvdXBbY2JdLnNldFZhbHVlKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRhZGRDb2x1bW4oTmFtZVBhdGg6IHN0cmluZyA9IFwiXCIsIFZhbHVlUGF0aDogc3RyaW5nID0gXCJcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0dGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHRcdFx0TmFtZVBhdGg6IFsgTmFtZVBhdGggXSxcclxuXHRcdFx0XHRWYWx1ZVBhdGg6IFsgVmFsdWVQYXRoLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF1cclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJvdXRlRW50ZXJlZChldmVudCkge1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBldmVudC52YWx1ZTtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBTb3VyY2U6IGV2ZW50LnZhbHVlIH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0cmVtb3ZlQ29sdW1uKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cdGNhbGN1bGF0ZUNvbHVtbnMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXIgPT4ge1xyXG5cdFx0XHR2YXIgY29sdW1uc01BcHBpbmcgPSB7XHJcblx0XHRcdFx0Ly8gTmFtZVZBbHVlOiAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMudmFsdWVzXHJcblx0XHRcdH07XHJcblx0XHRcdGxldCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdHRoaXMuZGF0YSxcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS52YWx1ZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnNldFZhbHVlKGNvbHVtbnMpO1xyXG5cdFx0XHQvL2FkZCBuZXcgaXRlbSB0byB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2xvcnMgZm9ybSBjb250cm9sXHJcblx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRsZXQgY29sdW1uS2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChcIiMxMjM0NTZcIikpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0bGV0IGtleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG9ic2VyLm5leHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZW5lcmF0ZURpYWdyYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciB0ZW1wID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGVtcC5faWQgPSBcInRlbXBsYXRlX2lkXCI7XHJcblx0XHR0ZW1wLk5hbWUgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZS5OYW1lO1xyXG5cdFx0dGVtcC5Tb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuXHRcdHRlbXAuQm94ID0ge1xyXG5cdFx0XHROdW1iZXJPZkNvbHVtbnM6IDEsXHJcblx0XHRcdE9yZGVyOiAxLFxyXG5cdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkJhY2tncm91bmRDb2xvclxyXG5cdFx0fTtcclxuXHRcdHRlbXAuV2lkZ2V0ID0ge1xyXG5cdFx0XHRib29sZWFubzogdGhpcy5mb3JtR3JvdXAudmFsdWUuYm9vbGVhbm9cclxuXHRcdH07XHJcblx0XHR0ZW1wLkNoYXJ0ID0ge1xyXG5cdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5mb3JtR3JvdXAudmFsdWUuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnZhbHVlLFxyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0dHlwZXM6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGVzLFxyXG5cdFx0XHRcdGNvbG9yczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzLnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdEZsb3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkZsb3csXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkxlZ2VuZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlN1YmNoYXJ0XHJcblx0XHRcdH0sXHJcblx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRlbmFibGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ab29tXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRncm91cGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Ub29sdGlwXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdG9vbHRpcDoge1xyXG5cdFx0XHQvLyAgICAgICAgIGZvcm1hdDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiVcIjtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIGNvbG9yOiB7XHJcblx0XHRcdC8vICAgICAgICAgcGF0dGVybjogWycjNjBCMDQ0JywgJyNGNkM2MDAnLCAnI0Y5NzYwMCcsICcjRkYwMDAwJ10sXHJcblx0XHRcdC8vICAgICAgICAgdGhyZXNob2xkOiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAvLyAgdW5pdDogJ3ZhbHVlJywgLy8gcGVyY2VudGFnZSBpcyBkZWZhdWx0XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZXM6IFszMCwgNjAsIDkwLCAxMDBdXHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0fTtcclxuXHRcdC8vIHRoaXMuY29tcG9uZW50TW9kZWwgPSB7XHJcblx0XHQvLyAgIGNvbXBvbmVudDogdGhpcy50eXBlTWFwVG9EaWFncmFtW3RlbXAuQ2hhcnQuZGF0YS50eXBlXSxcclxuXHRcdC8vICAgaW5wdXRzOiB7IGRhdGE6IHRlbXAgfVxyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5kaWFncmFtTW9kZWwgPSB0ZW1wO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHR9XHJcblx0YWRkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGREaWFncmFtQWN0aW9uKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==