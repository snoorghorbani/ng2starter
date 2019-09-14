/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
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
                    Object.keys(data.Chart.data.colors || {}).forEach((/**
                     * @param {?} columnKey
                     * @return {?}
                     */
                    columnKey => {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    }));
                    /** @type {?} */
                    const typesControl = (/** @type {?} */ (this.formGroup.controls["Types"]));
                    Object.keys(data.Chart.data.types || {}).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    }));
                    data.Chart.ColumnMappings.forEach((/**
                     * @param {?} mapping
                     * @return {?}
                     */
                    mapping => this.addColumn(mapping.NamePath, mapping.ValuePath)));
                    this.source = data.Source;
                    this.store.dispatch(new HaveEndpointAction(this));
                    this.diagramPartialConfig = {
                        type: this.formGroup.value.Type,
                        inputs: {
                            formGroup: this.formGroup,
                            diagramService: this.diagramService
                        }
                    };
                }));
            this.diagramPartialConfig = {
                type: this.formGroup.value.Type,
                inputs: {
                    formGroup: this.formGroup,
                    diagramService: this.diagramService
                }
            };
        }));
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
        this.formGroup.controls.ColumnMappings.statusChanges.subscribe((/**
         * @param {?} status
         * @return {?}
         */
        status => {
            if (status == "VALID" &&
                ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).controls.length > 0 &&
                this.data)
                this.store.dispatch(new ColumnsMappingChangedAction(this));
        }));
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
        this.dataSubscription = observer.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data.Data;
            this.pathOptions = this.diagramService.get_data_report(data.Data);
        }));
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
        return Observable.create((/**
         * @param {?} obser
         * @return {?}
         */
        obser => {
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
            columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                /** @type {?} */
                const columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            }));
            /** @type {?} */
            const typesControl = (/** @type {?} */ (this.formGroup.controls["Types"]));
            columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                /** @type {?} */
                const key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new FormControl(this.formGroup.value.Type));
            }));
            obser.next();
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBYSxXQUFXLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFTLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUNOLGtCQUFrQixFQUNsQiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGdCQUFnQixFQUNoQixNQUFNLG1DQUFtQyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0IsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQXNCL0IsWUFDUyxjQUE4QixFQUM5QixXQUF3QixFQUN4QixLQUEwQixFQUMxQixLQUFxQjtRQUhyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUF6QjlCLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVEs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QUNwQixZQUFZO1lBQ1osS0FBSztZQUNMLFdBQVc7WUFDWCxpRUFBaUU7WUFDakUsdUJBQXVCO1lBQ3ZCLDhEQUE4RDtZQUM5RCw0Q0FBNEM7WUFDNUMsWUFBWTtZQUNaLEtBQUs7U0FDTCxDQUFDO1FBQ0YsMEJBQTBCO1FBQzFCLDREQUE0RDtRQUM1RCwyQkFBMkI7UUFDM0IsSUFBSTtRQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsR0FBRyxDQUFDLEtBQUs7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUFwUUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw4eFJBQTJDOzthQUUzQzs7OztZQW5CUSxjQUFjO1lBVmlDLFdBQVc7WUFFMUQsS0FBSztZQUNFLGNBQWM7Ozs7SUE0QjdCLDBDQUFrQzs7SUFDbEMsd0NBQTREOztJQUM1RCxtQ0FBVTs7SUFDVixzQ0FBYTs7SUFDYixvQ0FBTTs7SUFDTiwyQ0FBdUI7O0lBQ3ZCLDBDQUtJOztJQUNKLDhDQUFtQzs7SUFDbkMsK0NBQStCOztJQUMvQiwyQ0FBMkI7O0lBQzNCLDZDQUFtRDs7SUFDbkQsK0NBQTBDOztJQUMxQyxtREFBeUc7O0lBQ3pHLHNDQUFtQzs7SUFDbkMscUNBQTZCOztJQUM3QixxQ0FBb0I7Ozs7O0lBRW5CLDZDQUFzQzs7Ozs7SUFDdEMsMENBQWdDOzs7OztJQUNoQyxvQ0FBa0M7Ozs7O0lBQ2xDLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGUsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCJyeGpzL29wZXJhdG9yL3B1Ymxpc2hcIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IGFkZERpYWdyYW1SZWR1Y2VyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2FkZC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zb3VyY2UubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRIYXZlRW5kcG9pbnRBY3Rpb24sXHJcblx0Q29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uLFxyXG5cdERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1hZGRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2FkZC1kaWFncmFtLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL2FkZC1kaWFncmFtLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRkYXRhOiBhbnk7XHJcblx0Y29sdW1uczogYW55O1xyXG5cdGNoYXJ0O1xyXG5cdGRpYWdyYW1UeXBlczogc3RyaW5nW107XHJcblx0cGF0aE9wdGlvbnM6IHtcclxuXHRcdHBhdGg6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdHR5cGU6IHN0cmluZztcclxuXHRcdGNvbG9yOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdGNvbHVtbnNNYXBwaW5nczogQWJzdHJhY3RDb250cm9sW107XHJcblx0ZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRpYWdyYW1Nb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdGNvbXBvbmVudE1vZGVsOiB7IGNvbXBvbmVudDogYW55OyBpbnB1dHM6IG9iamVjdCB9O1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cdGRpYWdyYW1QYXJ0aWFsQ29uZmlnOiB7IHR5cGU6IHN0cmluZzsgaW5wdXRzOiB7IGZvcm1Hcm91cDogRm9ybUdyb3VwOyBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UgfSB9O1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT47XHJcblx0Z3JvdXBzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRzb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zb3VyY2VzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLmdyb3VwcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0R3JvdXBzKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1Nb2RlbCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRoaXMuY29sdW1uc01hcHBpbmdzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHROYW1lOiBkYXRhLk5hbWUsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRHcm91cHM6IGRhdGEuR3JvdXBzLFxyXG5cdFx0XHRcdFx0XHRUeXBlOiBkYXRhLkNoYXJ0LmRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0TGVnZW5kOiBkYXRhLkNoYXJ0LmxlZ2VuZC5zaG93LFxyXG5cdFx0XHRcdFx0XHRTdWJjaGFydDogZGF0YS5DaGFydC5zdWJjaGFydC5zaG93LFxyXG5cdFx0XHRcdFx0XHRab29tOiBkYXRhLkNoYXJ0Lnpvb20uZW5hYmxlZCxcclxuXHRcdFx0XHRcdFx0VG9vbHRpcDogZGF0YS5DaGFydC50b29sdGlwLmdyb3VwZWQsXHJcblx0XHRcdFx0XHRcdFN5bmM6IGRhdGEuU291cmNlLkludGVydmFsLFxyXG5cdFx0XHRcdFx0XHRTb3VyY2U6IGRhdGEuU291cmNlLFxyXG5cdFx0XHRcdFx0XHRjb2x1bW5zOiBkYXRhLkNoYXJ0LmRhdGEuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdFx0XHRcdENvbHM6IGRhdGEuQm94LkNvbHMsXHJcblx0XHRcdFx0XHRcdEZsb3c6IGRhdGEuQ2hhcnQuRmxvdyxcclxuXHRcdFx0XHRcdFx0Um93czogZGF0YS5Cb3guUm93cyxcclxuXHRcdFx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBkYXRhLkJveC5CYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdFx0XHRcdFRleHRDb2xvcjogZGF0YS5Cb3guVGV4dENvbG9yXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnMgfHwge30pLmZvckVhY2goY29sdW1uS2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEuY29sb3JzW2NvbHVtbktleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS50eXBlcyB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEudHlwZXNba2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLmZvckVhY2gobWFwcGluZyA9PiB0aGlzLmFkZENvbHVtbihtYXBwaW5nLk5hbWVQYXRoLCBtYXBwaW5nLlZhbHVlUGF0aCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3VyY2UgPSBkYXRhLlNvdXJjZTtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmRpYWdyYW1UeXBlcyA9IFtcclxuXHRcdFx0XCJiYXJcIixcclxuXHRcdFx0XCJkb251dFwiLFxyXG5cdFx0XHRcInBpZVwiLFxyXG5cdFx0XHRcInNjYXR0ZXJcIixcclxuXHRcdFx0XCJsaW5lXCIsXHJcblx0XHRcdFwiYXJlYVwiLFxyXG5cdFx0XHRcImFyZWEtc3BsaW5lXCIsXHJcblx0XHRcdFwibnVtZXJvXCIsXHJcblx0XHRcdFwiYm9vbGVhbm9cIixcclxuXHRcdFx0XCJ0ZW1wb1wiXHJcblx0XHRdO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGF0dXMgPT0gXCJWQUxJRFwiICYmXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdHRoaXMuZGF0YVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGFTdWJzY3JpcHRpb24pIHRoaXMuZGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdC8vIGdldERhdGEoKSB7XHJcblx0Ly8gICBjb25zdCBvJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLnNvdXJjZSk7XHJcblx0Ly8gICB0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvJC5zdWJzY3JpYmUoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbih0aGlzKSlcclxuXHQvLyAgIHJldHVybiBvJDtcclxuXHQvLyB9XHJcblx0Z2V0RGF0YVN0cnVjdHVyZSgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEoeyAuLi50aGlzLnNvdXJjZSwgSW50ZXJ2YWw6IDAgfSwgdGhpcy51bnN1YnNjcmliZSwgRGF0ZS5ub3coKSAtIDEwMDAwKTtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlwdGlvbiA9IG9ic2VydmVyLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZGF0YS5EYXRhO1xyXG5cdFx0XHR0aGlzLnBhdGhPcHRpb25zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRfZGF0YV9yZXBvcnQoZGF0YS5EYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVyO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHR0eXBlQ2hhbmdlZCgpIHtcclxuXHRcdGNvbnN0IHR5cGVzRm9ybUdyb3VwID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzIGFzIEZvcm1Hcm91cCkuY29udHJvbHM7XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuXHRcdGZvciAoY29uc3QgY2IgaW4gdHlwZXNGb3JtR3JvdXApIHtcclxuXHRcdFx0dHlwZXNGb3JtR3JvdXBbY2JdLnNldFZhbHVlKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRhZGRDb2x1bW4oTmFtZVBhdGg6IHN0cmluZyA9IFwiXCIsIFZhbHVlUGF0aDogc3RyaW5nID0gXCJcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0dGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHRcdFx0TmFtZVBhdGg6IFtOYW1lUGF0aF0sXHJcblx0XHRcdFx0VmFsdWVQYXRoOiBbVmFsdWVQYXRoLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0cm91dGVFbnRlcmVkKGV2ZW50KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuc291cmNlID0gZXZlbnQudmFsdWU7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgU291cmNlOiBldmVudC52YWx1ZSB9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHJlbW92ZUNvbHVtbihpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnJlbW92ZUF0KGkpO1xyXG5cdH1cclxuXHRjYWxjdWxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VyID0+IHtcclxuXHRcdFx0Y29uc3QgY29sdW1uc01BcHBpbmcgPSB7XHJcblx0XHRcdFx0Ly8gTmFtZVZBbHVlOiAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMudmFsdWVzXHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0dGhpcy5kYXRhLFxyXG5cdFx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLnZhbHVlXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMuc2V0VmFsdWUoY29sdW1ucyk7XHJcblx0XHRcdC8vIGFkZCBuZXcgaXRlbSB0byB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2xvcnMgZm9ybSBjb250cm9sXHJcblx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb2x1bW5LZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKFwiIzEyMzQ1NlwiKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRjb25zdCBrZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRvYnNlci5uZXh0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2VuZXJhdGVEaWFncmFtKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCB0ZW1wID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGVtcC5faWQgPSBcInRlbXBsYXRlX2lkXCI7XHJcblx0XHR0ZW1wLk5hbWUgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZS5OYW1lO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0ZW1wLlNvdXJjZSA9IHRoaXMuc291cmNlO1xyXG5cdFx0dGVtcC5Cb3ggPSB7XHJcblx0XHRcdE51bWJlck9mQ29sdW1uczogMSxcclxuXHRcdFx0T3JkZXI6IDEsXHJcblx0XHRcdEJhY2tncm91bmRDb2xvcjogdGhpcy5mb3JtR3JvdXAudmFsdWUuQmFja2dyb3VuZENvbG9yXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5XaWRnZXQgPSB7XHJcblx0XHRcdGJvb2xlYW5vOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ib29sZWFub1xyXG5cdFx0fTtcclxuXHRcdHRlbXAuQ2hhcnQgPSB7XHJcblx0XHRcdENvbHVtbk1hcHBpbmdzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNvbHVtbnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMudmFsdWUsXHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHR0eXBlczogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZXMsXHJcblx0XHRcdFx0Y29sb3JzOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMudmFsdWVcclxuXHRcdFx0fSxcclxuXHRcdFx0RmxvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuRmxvdyxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0c2hvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuTGVnZW5kXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0c2hvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuU3ViY2hhcnRcclxuXHRcdFx0fSxcclxuXHRcdFx0em9vbToge1xyXG5cdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlpvb21cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRcdGdyb3VwZWQ6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlRvb2x0aXBcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0b29sdGlwOiB7XHJcblx0XHRcdC8vICAgICAgICAgZm9ybWF0OiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwiJVwiO1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0Ly8gY29sb3I6IHtcclxuXHRcdFx0Ly8gICAgICAgICBwYXR0ZXJuOiBbJyM2MEIwNDQnLCAnI0Y2QzYwMCcsICcjRjk3NjAwJywgJyNGRjAwMDAnXSxcclxuXHRcdFx0Ly8gICAgICAgICB0aHJlc2hvbGQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIC8vICB1bml0OiAndmFsdWUnLCAvLyBwZXJjZW50YWdlIGlzIGRlZmF1bHRcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlczogWzMwLCA2MCwgOTAsIDEwMF1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHR9O1xyXG5cdFx0Ly8gdGhpcy5jb21wb25lbnRNb2RlbCA9IHtcclxuXHRcdC8vICAgY29tcG9uZW50OiB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bdGVtcC5DaGFydC5kYXRhLnR5cGVdLFxyXG5cdFx0Ly8gICBpbnB1dHM6IHsgZGF0YTogdGVtcCB9XHJcblx0XHQvLyB9XHJcblx0XHR0aGlzLmRpYWdyYW1Nb2RlbCA9IHRlbXA7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdH1cclxuXHRhZGQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIl19