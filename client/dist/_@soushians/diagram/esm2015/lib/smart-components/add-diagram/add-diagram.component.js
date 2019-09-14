/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { DiagramService } from "../../services/diagram.service";
import { AddDiagramApiModel } from "../../models/add-diagram-api.model";
import { DiagramModel } from "../../models/diagram.model";
import { HaveEndpointAction, ColumnsMappingChangedAction, DiagramConfigChangedAction, AddDiagramAction } from "../../actions/add-diagram.actions";
import { Subject } from "rxjs";
export class AddDiagramComponent {
    /**
     * @param {?} diagramService
     * @param {?} formBuilder
     * @param {?} store
     * @param {?} route
     */
    constructor(diagramService, formBuilder, store, route) {
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.unsubscribe = new Subject();
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).controls;
        this.route.params.subscribe(params => {
            /** @type {?} */
            const diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe(data => {
                    this.formGroup.patchValue({
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
                    /** @type {?} */
                    const colorsControl = (/** @type {?} */ (this.formGroup.controls["Colors"]));
                    Object.keys(data.Chart.data.colors || {}).forEach(columnKey => {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    /** @type {?} */
                    const typesControl = (/** @type {?} */ (this.formGroup.controls["Types"]));
                    Object.keys(data.Chart.data.types || {}).forEach(key => {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    });
                    data.Chart.ColumnMappings.forEach(mapping => this.addColumn(mapping.NamePath, mapping.ValuePath));
                    this.source = data.Source;
                    this.store.dispatch(new HaveEndpointAction(this));
                    this.diagramPartialConfig = {
                        type: this.formGroup.value.Type,
                        inputs: {
                            formGroup: this.formGroup,
                            diagramService: this.diagramService
                        }
                    };
                });
            this.diagramPartialConfig = {
                type: this.formGroup.value.Type,
                inputs: {
                    formGroup: this.formGroup,
                    diagramService: this.diagramService
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
    ngOnInit() {
        this.formGroup.controls.ColumnMappings.statusChanges.subscribe(status => {
            if (status == "VALID" &&
                ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).controls.length > 0 &&
                this.data)
                this.store.dispatch(new ColumnsMappingChangedAction(this));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    /**
     * @return {?}
     */
    getDataStructure() {
        debugger;
        /** @type {?} */
        const observer = this.diagramService.getData(Object.assign({}, this.source, { Interval: 0 }), this.unsubscribe, Date.now() - 10000);
        this.dataSubscription = observer.subscribe(data => {
            this.data = data.Data;
            this.pathOptions = this.diagramService.get_data_report(data.Data);
        });
        return observer;
    }
    /**
     * @return {?}
     */
    configChanged() {
        this.store.dispatch(new DiagramConfigChangedAction(this));
    }
    /**
     * @return {?}
     */
    typeChanged() {
        /** @type {?} */
        const typesFormGroup = ((/** @type {?} */ (this.formGroup.controls.Types))).controls;
        // tslint:disable-next-line:forin
        for (const cb in typesFormGroup) {
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
    }
    /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    addColumn(NamePath = "", ValuePath = "") {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"]));
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, Validators.required]
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    routeEntered(event) {
        debugger;
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeColumn(i) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"]));
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    calculateColumns() {
        return Observable.create(obser => {
            /** @type {?} */
            const columnsMApping = {
            // NameVAlue:  (this.formGroup.controls.ColumnMappings as FormArray).controls.values
            };
            /** @type {?} */
            const columns = this.diagramService.extract_columns_from_data(this.data, ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).value);
            this.formGroup.controls.columns.setValue(columns);
            // add new item to this.formGroup.controls.colors form control
            /** @type {?} */
            const colorsControl = (/** @type {?} */ (this.formGroup.controls["Colors"]));
            columns.forEach(column => {
                /** @type {?} */
                const columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            /** @type {?} */
            const typesControl = (/** @type {?} */ (this.formGroup.controls["Types"]));
            columns.forEach(column => {
                /** @type {?} */
                const key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new FormControl(this.formGroup.value.Type));
            });
            obser.next();
        });
    }
    /**
     * @return {?}
     */
    generateDiagram() {
        /** @type {?} */
        const temp = new DiagramModel();
        temp._id = "template_id";
        temp.Name = this.formGroup.value.Name;
        debugger;
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
                columns: this.formGroup.controls.columns.value,
                type: this.formGroup.value.Type,
                types: this.formGroup.value.Types,
                colors: this.formGroup.controls.Colors.value
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
            // tooltip: {
            //         format: {
            //                 value: function (value) {
            //                         return value + "%";
            //                 }
            //         }
            // },
            // color: {
            //         pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'],
            //         threshold: {
            //                 //  unit: 'value', // percentage is default
            //                 values: [30, 60, 90, 100]
            //         }
            // },
        };
        // this.componentModel = {
        //   component: this.typeMapToDiagram[temp.Chart.data.type],
        //   inputs: { data: temp }
        // }
        this.diagramModel = temp;
        return Observable.empty();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        this.store.dispatch(new AddDiagramAction(this.formGroup.value));
    }
}
AddDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-add",
                template: "<div fxLayout=\"column\" fxFlex=\"100\">\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <mat-card fxFlex=\"60\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlexFill>\r\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (selectionChange)=\"routeEntered($event)\">\r\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\r\n                {{item.Endpoint}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\r\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\r\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\r\n                {{item}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\r\n              <mat-select-trigger>\r\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\r\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\r\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\r\n                </span>\r\n              </mat-select-trigger>\r\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <mat-card fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"item-margin\">\r\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\r\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\r\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\r\n                      {{item.path}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\r\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\r\n                    <mat-option>--</mat-option>\r\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\r\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\r\n                      {{item.path}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <button (click)=\"removeColumn(i)\" fxFlex mat-icon-button>\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"item-margin\">\r\n          <div class=\"list-item\" fxLayout=\"row\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\"\r\n            fxLayoutAlign=\"space-between center\">\r\n            <span fxFlex=\"40\">{{item[0]}} : {{item[1]}}</span>\r\n            <span fxFlex [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\r\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\r\n            </span>\r\n            <mat-form-field fxFlex=\"30\" [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\r\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\r\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\r\n                <mat-option>--</mat-option>\r\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\r\n                  {{item}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content [formGroup]=\"formGroup\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\r\n        </mat-form-field>\r\n        <div fxLayout=\"row\">\r\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\r\n          <span>\r\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\r\n          </span>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\r\n          <span>\r\n            <input formControlName=\"BackgroundColor\" type=\"color\">\r\n          </span>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div>\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\r\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
            }] }
];
/** @nocollapse */
AddDiagramComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: FormBuilder },
    { type: Store },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    AddDiagramComponent.prototype.unsubscribe;
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
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBYSxXQUFXLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFTLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUNOLGtCQUFrQixFQUNsQiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGdCQUFnQixFQUNoQixNQUFNLG1DQUFtQyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0IsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQXNCL0IsWUFDUyxjQUE4QixFQUM5QixXQUF3QixFQUN4QixLQUEwQixFQUMxQixLQUFxQjtRQUhyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUF6QjlCLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNsQyxjQUFTLEdBQWMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQTBCM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3RGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7a0JBQzlCLFNBQVMsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDLGdEQUFnRDtZQUNoRCxTQUFTO2dCQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7d0JBQ3pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO3dCQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTt3QkFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7d0JBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzt3QkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDaEMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYzt3QkFDekMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTt3QkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTt3QkFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZTt3QkFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztxQkFDN0IsQ0FBQyxDQUFDOzswQkFFRyxhQUFhLEdBQUcsbUJBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUE7b0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDN0QsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUM7NEJBQ3pDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFGLENBQUMsQ0FBQyxDQUFDOzswQkFFRyxZQUFZLEdBQUcsbUJBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUE7b0JBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDdEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ2xDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRWxELElBQUksQ0FBQyxvQkFBb0IsR0FBRzt3QkFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7d0JBQy9CLE1BQU0sRUFBRTs0QkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7NEJBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYzt5QkFDbkM7cUJBQ0QsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxvQkFBb0IsR0FBRztnQkFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQy9CLE1BQU0sRUFBRTtvQkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztpQkFDbkM7YUFDRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ25CLEtBQUs7WUFDTCxPQUFPO1lBQ1AsS0FBSztZQUNMLFNBQVM7WUFDVCxNQUFNO1lBQ04sTUFBTTtZQUNOLGFBQWE7WUFDYixRQUFRO1lBQ1IsVUFBVTtZQUNWLE9BQU87U0FDUCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2RSxJQUNDLE1BQU0sSUFBSSxPQUFPO2dCQUNqQixDQUFDLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsSUFBSTtnQkFFVCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBQ0QsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2YsUUFBUSxDQUFDOztjQUNILFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sbUJBQU0sSUFBSSxDQUFDLE1BQU0sSUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNuSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDOzs7O0lBQ0QsYUFBYTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsV0FBVzs7Y0FDSixjQUFjLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQWEsQ0FBQyxDQUFDLFFBQVE7UUFDNUUsaUNBQWlDO1FBQ2pDLEtBQUssTUFBTSxFQUFFLElBQUksY0FBYyxFQUFFO1lBQ2hDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUc7WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDL0IsTUFBTSxFQUFFO2dCQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQ25DO1NBQ0QsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFDRCxTQUFTLENBQUMsV0FBbUIsRUFBRSxFQUFFLFlBQW9CLEVBQUU7O2NBQ2hELE9BQU8sR0FBRyxtQkFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFBO1FBQ3BFLE9BQU8sQ0FBQyxJQUFJLENBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEIsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzNDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsS0FBSztRQUNqQixRQUFRLENBQUM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBQ0QsWUFBWSxDQUFDLENBQVM7O2NBQ2YsT0FBTyxHQUFHLG1CQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUE7UUFDcEUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFOztrQkFDMUIsY0FBYyxHQUFHO1lBQ3RCLG9GQUFvRjthQUNwRjs7a0JBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQzVELElBQUksQ0FBQyxJQUFJLEVBQ1QsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQWEsQ0FBQyxDQUFDLEtBQUssQ0FDM0Q7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7a0JBRTVDLGFBQWEsR0FBRyxtQkFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQTtZQUNsRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztzQkFDbEIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDO29CQUN6QyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDOztrQkFFRyxZQUFZLEdBQUcsbUJBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUE7WUFDaEUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs7c0JBQ2xCLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDbEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUNELGVBQWU7O2NBQ1IsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3RDLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHO1lBQ1YsZUFBZSxFQUFFLENBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUM7WUFDUixlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZTtTQUNyRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQ3ZDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1osY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFDbkQsSUFBSSxFQUFFO2dCQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDOUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDNUM7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUMvQixNQUFNLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDakM7WUFDRCxRQUFRLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDbkM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDbEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU87YUFDckM7WUFDRCxhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLDRDQUE0QztZQUM1Qyw4Q0FBOEM7WUFDOUMsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixLQUFLO1lBQ0wsV0FBVztZQUNYLGlFQUFpRTtZQUNqRSx1QkFBdUI7WUFDdkIsOERBQThEO1lBQzlELDRDQUE0QztZQUM1QyxZQUFZO1lBQ1osS0FBSztTQUNMLENBQUM7UUFDRiwwQkFBMEI7UUFDMUIsNERBQTREO1FBQzVELDJCQUEyQjtRQUMzQixJQUFJO1FBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxHQUFHLENBQUMsS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OztZQXBRRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDh4UkFBMkM7O2FBRTNDOzs7O1lBbkJRLGNBQWM7WUFWaUMsV0FBVztZQUUxRCxLQUFLO1lBQ0UsY0FBYzs7OztJQTRCN0IsMENBQWtDOztJQUNsQyx3Q0FBNEQ7O0lBQzVELG1DQUFVOztJQUNWLHNDQUFhOztJQUNiLG9DQUFNOztJQUNOLDJDQUF1Qjs7SUFDdkIsMENBS0k7O0lBQ0osOENBQW1DOztJQUNuQywrQ0FBK0I7O0lBQy9CLDJDQUEyQjs7SUFDM0IsNkNBQW1EOztJQUNuRCwrQ0FBMEM7O0lBQzFDLG1EQUF5Rzs7SUFDekcsc0NBQW1DOztJQUNuQyxxQ0FBNkI7O0lBQzdCLHFDQUFvQjs7Ozs7SUFFbkIsNkNBQXNDOzs7OztJQUN0QywwQ0FBZ0M7Ozs7O0lBQ2hDLG9DQUFrQzs7Ozs7SUFDbEMsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3IvcHVibGlzaFwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgYWRkRGlhZ3JhbVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYWRkLWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEhhdmVFbmRwb2ludEFjdGlvbixcclxuXHRDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24sXHJcblx0RGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24sXHJcblx0QWRkRGlhZ3JhbUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWFkZFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWRkLWRpYWdyYW0uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vYWRkLWRpYWdyYW0uY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGRhdGE6IGFueTtcclxuXHRjb2x1bW5zOiBhbnk7XHJcblx0Y2hhcnQ7XHJcblx0ZGlhZ3JhbVR5cGVzOiBzdHJpbmdbXTtcclxuXHRwYXRoT3B0aW9uczoge1xyXG5cdFx0cGF0aDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0dHlwZTogc3RyaW5nO1xyXG5cdFx0Y29sb3I6IHN0cmluZztcclxuXHR9W107XHJcblx0Y29sdW1uc01hcHBpbmdzOiBBYnN0cmFjdENvbnRyb2xbXTtcclxuXHRkYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGlhZ3JhbU1vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0Y29tcG9uZW50TW9kZWw6IHsgY29tcG9uZW50OiBhbnk7IGlucHV0czogb2JqZWN0IH07XHJcblx0dHlwZU1hcFRvRGlhZ3JhbTogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XHJcblx0ZGlhZ3JhbVBhcnRpYWxDb25maWc6IHsgdHlwZTogc3RyaW5nOyBpbnB1dHM6IHsgZm9ybUdyb3VwOiBGb3JtR3JvdXA7IGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSB9IH07XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdHNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHR0aGlzLnNvdXJjZXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbU1vZGVsID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGhpcy5jb2x1bW5zTWFwcGluZ3MgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scztcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdE5hbWU6IGRhdGEuTmFtZSxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUsXHJcblx0XHRcdFx0XHRcdEdyb3VwczogZGF0YS5Hcm91cHMsXHJcblx0XHRcdFx0XHRcdFR5cGU6IGRhdGEuQ2hhcnQuZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRMZWdlbmQ6IGRhdGEuQ2hhcnQubGVnZW5kLnNob3csXHJcblx0XHRcdFx0XHRcdFN1YmNoYXJ0OiBkYXRhLkNoYXJ0LnN1YmNoYXJ0LnNob3csXHJcblx0XHRcdFx0XHRcdFpvb206IGRhdGEuQ2hhcnQuem9vbS5lbmFibGVkLFxyXG5cdFx0XHRcdFx0XHRUb29sdGlwOiBkYXRhLkNoYXJ0LnRvb2x0aXAuZ3JvdXBlZCxcclxuXHRcdFx0XHRcdFx0U3luYzogZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdFNvdXJjZTogZGF0YS5Tb3VyY2UsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IGRhdGEuQ2hhcnQuZGF0YS5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdFx0Q29sczogZGF0YS5Cb3guQ29scyxcclxuXHRcdFx0XHRcdFx0RmxvdzogZGF0YS5DaGFydC5GbG93LFxyXG5cdFx0XHRcdFx0XHRSb3dzOiBkYXRhLkJveC5Sb3dzLFxyXG5cdFx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcixcclxuXHRcdFx0XHRcdFx0VGV4dENvbG9yOiBkYXRhLkJveC5UZXh0Q29sb3JcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLmNvbG9ycyB8fCB7fSkuZm9yRWFjaChjb2x1bW5LZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnNbY29sdW1uS2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLnR5cGVzIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS50eXBlc1trZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHRoaXMuYWRkQ29sdW1uKG1hcHBpbmcuTmFtZVBhdGgsIG1hcHBpbmcuVmFsdWVQYXRoKSk7XHJcblx0XHRcdFx0XHR0aGlzLnNvdXJjZSA9IGRhdGEuU291cmNlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGlhZ3JhbVR5cGVzID0gW1xyXG5cdFx0XHRcImJhclwiLFxyXG5cdFx0XHRcImRvbnV0XCIsXHJcblx0XHRcdFwicGllXCIsXHJcblx0XHRcdFwic2NhdHRlclwiLFxyXG5cdFx0XHRcImxpbmVcIixcclxuXHRcdFx0XCJhcmVhXCIsXHJcblx0XHRcdFwiYXJlYS1zcGxpbmVcIixcclxuXHRcdFx0XCJudW1lcm9cIixcclxuXHRcdFx0XCJib29sZWFub1wiLFxyXG5cdFx0XHRcInRlbXBvXCJcclxuXHRcdF07XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3Muc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXR1cyA9PSBcIlZBTElEXCIgJiZcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0dGhpcy5kYXRhXHJcblx0XHRcdClcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YVN1YnNjcmlwdGlvbikgdGhpcy5kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0Ly8gZ2V0RGF0YSgpIHtcclxuXHQvLyAgIGNvbnN0IG8kID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuc291cmNlKTtcclxuXHQvLyAgIHRoaXMuZGF0YVN1YnNjcmlwdGlvbiA9IG8kLnN1YnNjcmliZShkYXRhID0+IG5ldyBEYXRhTG9hZGVkQWN0aW9uKHRoaXMpKVxyXG5cdC8vICAgcmV0dXJuIG8kO1xyXG5cdC8vIH1cclxuXHRnZXREYXRhU3RydWN0dXJlKCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBvYnNlcnZlciA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh7IC4uLnRoaXMuc291cmNlLCBJbnRlcnZhbDogMCB9LCB0aGlzLnVuc3Vic2NyaWJlLCBEYXRlLm5vdygpIC0gMTAwMDApO1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhLkRhdGE7XHJcblx0XHRcdHRoaXMucGF0aE9wdGlvbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldF9kYXRhX3JlcG9ydChkYXRhLkRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXI7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHR5cGVDaGFuZ2VkKCkge1xyXG5cdFx0Y29uc3QgdHlwZXNGb3JtR3JvdXAgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVHlwZXMgYXMgRm9ybUdyb3VwKS5jb250cm9scztcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG5cdFx0Zm9yIChjb25zdCBjYiBpbiB0eXBlc0Zvcm1Hcm91cCkge1xyXG5cdFx0XHR0eXBlc0Zvcm1Hcm91cFtjYl0uc2V0VmFsdWUodGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdGFkZENvbHVtbihOYW1lUGF0aDogc3RyaW5nID0gXCJcIiwgVmFsdWVQYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbHVtbk1hcHBpbmdzXCJdO1xyXG5cdFx0Y29udHJvbC5wdXNoKFxyXG5cdFx0XHR0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdFx0XHROYW1lUGF0aDogW05hbWVQYXRoXSxcclxuXHRcdFx0XHRWYWx1ZVBhdGg6IFtWYWx1ZVBhdGgsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRyb3V0ZUVudGVyZWQoZXZlbnQpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBldmVudC52YWx1ZTtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBTb3VyY2U6IGV2ZW50LnZhbHVlIH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0cmVtb3ZlQ29sdW1uKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cdGNhbGN1bGF0ZUNvbHVtbnMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXIgPT4ge1xyXG5cdFx0XHRjb25zdCBjb2x1bW5zTUFwcGluZyA9IHtcclxuXHRcdFx0XHQvLyBOYW1lVkFsdWU6ICAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy52YWx1ZXNcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc3QgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHR0aGlzLmRhdGEsXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkudmFsdWVcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy5zZXRWYWx1ZShjb2x1bW5zKTtcclxuXHRcdFx0Ly8gYWRkIG5ldyBpdGVtIHRvIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbG9ycyBmb3JtIGNvbnRyb2xcclxuXHRcdFx0Y29uc3QgY29sb3JzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2xvcnNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvbHVtbktleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woXCIjMTIzNDU2XCIpKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGtleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG9ic2VyLm5leHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZW5lcmF0ZURpYWdyYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IHRlbXAgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0ZW1wLl9pZCA9IFwidGVtcGxhdGVfaWRcIjtcclxuXHRcdHRlbXAuTmFtZSA9IHRoaXMuZm9ybUdyb3VwLnZhbHVlLk5hbWU7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRlbXAuU291cmNlID0gdGhpcy5zb3VyY2U7XHJcblx0XHR0ZW1wLkJveCA9IHtcclxuXHRcdFx0TnVtYmVyT2ZDb2x1bW5zOiAxLFxyXG5cdFx0XHRPcmRlcjogMSxcclxuXHRcdFx0QmFja2dyb3VuZENvbG9yOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdH07XHJcblx0XHR0ZW1wLldpZGdldCA9IHtcclxuXHRcdFx0Ym9vbGVhbm86IHRoaXMuZm9ybUdyb3VwLnZhbHVlLmJvb2xlYW5vXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5DaGFydCA9IHtcclxuXHRcdFx0Q29sdW1uTWFwcGluZ3M6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZSxcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdHR5cGVzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlcyxcclxuXHRcdFx0XHRjb2xvcnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9ycy52YWx1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRGbG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5GbG93LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5MZWdlbmRcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5TdWJjaGFydFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0ZW5hYmxlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuWm9vbVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0Z3JvdXBlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuVG9vbHRpcFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHRvb2x0aXA6IHtcclxuXHRcdFx0Ly8gICAgICAgICBmb3JtYXQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyBjb2xvcjoge1xyXG5cdFx0XHQvLyAgICAgICAgIHBhdHRlcm46IFsnIzYwQjA0NCcsICcjRjZDNjAwJywgJyNGOTc2MDAnLCAnI0ZGMDAwMCddLFxyXG5cdFx0XHQvLyAgICAgICAgIHRocmVzaG9sZDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgLy8gIHVuaXQ6ICd2YWx1ZScsIC8vIHBlcmNlbnRhZ2UgaXMgZGVmYXVsdFxyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWVzOiBbMzAsIDYwLCA5MCwgMTAwXVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdH07XHJcblx0XHQvLyB0aGlzLmNvbXBvbmVudE1vZGVsID0ge1xyXG5cdFx0Ly8gICBjb21wb25lbnQ6IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVt0ZW1wLkNoYXJ0LmRhdGEudHlwZV0sXHJcblx0XHQvLyAgIGlucHV0czogeyBkYXRhOiB0ZW1wIH1cclxuXHRcdC8vIH1cclxuXHRcdHRoaXMuZGlhZ3JhbU1vZGVsID0gdGVtcDtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0fVxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRGlhZ3JhbUFjdGlvbih0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=