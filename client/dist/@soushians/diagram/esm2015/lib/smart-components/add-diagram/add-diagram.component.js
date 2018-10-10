/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.columnsMappings = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls;
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
                    const colorsControl = /** @type {?} */ (this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(columnKey => {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    /** @type {?} */
                    const typesControl = /** @type {?} */ (this.formGroup.controls["Types"]);
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
        this.formGroup.controls["ColumnMappings"].statusChanges.subscribe(status => {
            if (status == "VALID" &&
                (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
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
        const typesFormGroup = (/** @type {?} */ (this.formGroup.controls["Types"])).controls;
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
        const control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
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
        const control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    calculateColumns() {
        return Observable.create(obser => {
            /** @type {?} */
            const columnsMApping = {};
            /** @type {?} */
            const columns = this.diagramService.extract_columns_from_data(this.data, (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).value);
            this.formGroup.controls["columns"].setValue(columns);
            /** @type {?} */
            const colorsControl = /** @type {?} */ (this.formGroup.controls["Colors"]);
            columns.forEach(column => {
                /** @type {?} */
                const columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            /** @type {?} */
            const typesControl = /** @type {?} */ (this.formGroup.controls["Types"]);
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
                template: `<div fxLayout="column" fxFlex="100">
  <div fxLayout="row" fxLayout.lt-md="column">
    <mat-card fxFlex="60">
      <form [formGroup]="formGroup" fxLayout='column'>
        <mat-card-header>
          <mat-card-title>افزودن نمودار جدید</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field>
            <input matInput placeholder="عنوان نمودار" formControlName="Name">
          </mat-form-field>
          <mat-form-field fxFlexFill>
            <mat-select placeholder="نام مسیر" formControlName="Source" (selectionChange)="routeEntered($event)">
              <mat-option *ngFor="let item of sources | async" [value]="item">
                {{item.Endpoint}}
              </mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field fxFlexFill>
            <input matInput placeholder="sync time" formControlName="Sync">
          </mat-form-field>
          <div>
            <mat-radio-group (change)="typeChanged()" formControlName="Type" fxFlexFill>
              <label>نوع نمودار :</label>
              <mat-radio-button (change)="typeChanged()" *ngFor="let item of diagramTypes" [value]="item" class="form-element-margin">
                {{item}}
              </mat-radio-button>
            </mat-radio-group>
          </div>
          <mat-form-field>
            <mat-select placeholder="Groups" formControlName="Groups" multiple>
              <mat-select-trigger>
                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}
                <span *ngIf="formGroup.controls.Groups.value?.length > 1">
                  (+{{formGroup.controls.Groups.value.length - 1}} others)
                </span>
              </mat-select-trigger>
              <mat-option *ngFor="let item of groups | async" [value]="item">{{item}}</mat-option>
            </mat-select>
          </mat-form-field>
          <div>
            <mat-checkbox (change)="configChanged()" formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
          </div>
          <dynamic-config-component-selector (ConfigChanged)="configChanged()" [data]="diagramPartialConfig"></dynamic-config-component-selector>
        </mat-card-content>
      </form>
    </mat-card>
    <dynamic-component-selector id="modify-diagram" fxFlex="40" [data]="diagramModel"></dynamic-component-selector>
  </div>

  <div fxLayout="row" fxLayout.lt-md="column">
    <mat-card fxFlex="25">
      <mat-card-header>
        <mat-card-title> ساختار دیتا </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="item-margin">
          <data-mapper destination="value" [data]="data"></data-mapper>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card fxLayout="column" fxFlex="25">
      <mat-card-header>
        <mat-card-title>نگاشت داده</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div fxLayout="column" fxLayoutGap="5px">
          <div *ngFor="let column of columnsMappings; let i=index" fxFlex="100" fxLayout="column">
            <div fxLayout="column">
              <div [formGroup]="columnsMappings[i]" fxLayout="row" fxLayout.xs="column">
                <mat-form-field fxFlex="45" fxFlex.xs="100">
                  <mat-select placeholder="نام مسیر" formControlName="NamePath">
                    <mat-option>--</mat-option>
                    <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts">
                      <!-- <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts" [disabled]="!item.isLastNode"> -->
                      {{item.path}}
                    </mat-option>
                  </mat-select>
                </mat-form-field>
                <mat-form-field fxFlex="45" fxFlex.xs="100">
                  <mat-select placeholder="مقدار مسیر" formControlName="ValuePath">
                    <mat-option>--</mat-option>
                    <!-- <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts" [disabled]="!item.isLastNode"> -->
                    <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts">
                      {{item.path}}
                    </mat-option>
                  </mat-select>
                </mat-form-field>
                <button (click)="removeColumn(i)" fxFlex mat-icon-button>
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div>
          <button (click)="addColumn()" fxFlex mat-raised-button color="primary" type="button">افزودن ستون</button>
        </div>
      </mat-card-content>
    </mat-card>
    <mat-card fxFlex="25">
      <mat-card-header>
        <mat-card-title>نتایج داده ها</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="item-margin">
          <div class="list-item" fxLayout="row" *ngFor="let item of formGroup.controls.columns.value; let i=index"
            fxLayoutAlign="space-between center">
            <span fxFlex="40">{{item[0]}} : {{item[1]}}</span>
            <span fxFlex [formGroup]="formGroup.controls.Colors" *ngIf="$any(formGroup.controls.Colors).controls[item[0]]">
              <input placeholder="رنگ نمودار" (change)="configChanged()" [formControlName]="item[0]" type="color">
            </span>
            <mat-form-field fxFlex="30" [formGroup]="formGroup.controls.Types" *ngIf="$any(formGroup.controls.Types).controls[item[0]]">
              <!-- <input placeholder="tipo" (change)="configChanged()" > -->
              <mat-select placeholder="tipo" [formControlName]="item[0]">
                <mat-option>--</mat-option>
                <mat-option *ngFor="let item of diagramTypes" [value]="item">
                  {{item}}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
    <mat-card fxLayout="column" fxFlex="25">
      <mat-card-header>
        <mat-card-title>تنظیمات ظاهری</mat-card-title>
      </mat-card-header>
      <mat-card-content [formGroup]="formGroup">
        <mat-form-field>
          <input matInput placeholder="تعداد سطر" formControlName="Cols">
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="تعداد ستون" formControlName="Rows">
        </mat-form-field>
        <div fxLayout="row">
          <label fxFlex="50">رنگ متن :</label>
          <span>
            <input (change)="configChanged()" formControlName="TextColor" type="color">
          </span>
        </div>
        <div fxLayout="row">
          <label fxFlex="50">رنگ پس زمینه :</label>
          <span>
            <input formControlName="BackgroundColor" type="color">
          </span>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  <div>
    <mat-card fxLayoutAlign="end center" fxLayout="row" fxFlex="100">
      <mat-card-content>
        <button (click)="add($event)" fxFlex mat-raised-button color="primary" type="submit">ثبت</button>
        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>انصراف</button>
      </mat-card-content>
    </mat-card>
  </div>
</div>`,
                styles: [`#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}`]
            },] },
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
    /** @type {?} */
    AddDiagramComponent.prototype.diagramService;
    /** @type {?} */
    AddDiagramComponent.prototype.formBuilder;
    /** @type {?} */
    AddDiagramComponent.prototype.store;
    /** @type {?} */
    AddDiagramComponent.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBYSxXQUFXLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFTLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUNOLGtCQUFrQixFQUNsQiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGdCQUFnQixFQUNoQixNQUFNLG1DQUFtQyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUF3Sy9CLE1BQU07Ozs7Ozs7SUFzQkwsWUFDUyxnQkFDQSxhQUNBLE9BQ0E7UUFIQSxtQkFBYyxHQUFkLGNBQWM7UUFDZCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxVQUFLLEdBQUwsS0FBSztRQUNMLFVBQUssR0FBTCxLQUFLOzJCQXpCQSxJQUFJLE9BQU8sRUFBUTt5QkFDVixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUztRQTBCMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpS0o7Z0JBQ04sTUFBTSxFQUFFLENBQUMsMlBBQTJQLENBQUM7YUFDclE7Ozs7WUFwTFEsY0FBYztZQVZpQyxXQUFXO1lBRTFELEtBQUs7WUFDRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3IvcHVibGlzaFwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgYWRkRGlhZ3JhbVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYWRkLWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEhhdmVFbmRwb2ludEFjdGlvbixcclxuXHRDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24sXHJcblx0RGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24sXHJcblx0QWRkRGlhZ3JhbUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWFkZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjYwXCI+XHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7Yp9mB2LLZiNiv2YYg2YbZhdmI2K/Yp9ixINis2K/bjNivPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2LnZhtmI2KfZhiDZhtmF2YjYr9in2LFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwi2YbYp9mFINmF2LPbjNixXCIgZm9ybUNvbnRyb2xOYW1lPVwiU291cmNlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJyb3V0ZUVudGVyZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvdXJjZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW0uRW5kcG9pbnR9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzeW5jIHRpbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJTeW5jXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCAoY2hhbmdlKT1cInR5cGVDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCIgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+2YbZiNi5INmG2YXZiNiv2KfYsSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAoY2hhbmdlKT1cInR5cGVDaGFuZ2VkKClcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaWFncmFtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiIGNsYXNzPVwiZm9ybS1lbGVtZW50LW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JvdXBzXCIgZm9ybUNvbnRyb2xOYW1lPVwiR3JvdXBzXCIgbXVsdGlwbGU+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgIHt7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZSA/IGZvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWVbMF0gOiAnJ319XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImZvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWU/Lmxlbmd0aCA+IDFcIj5cclxuICAgICAgICAgICAgICAgICAgKCt7e2Zvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWUubGVuZ3RoIC0gMX19IG90aGVycylcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cHMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIiBmeEZsZXhGaWxsPtmI2LbYuduM2Ko8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAoQ29uZmlnQ2hhbmdlZCk9XCJjb25maWdDaGFuZ2VkKClcIiBbZGF0YV09XCJkaWFncmFtUGFydGlhbENvbmZpZ1wiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBpZD1cIm1vZGlmeS1kaWFncmFtXCIgZnhGbGV4PVwiNDBcIiBbZGF0YV09XCJkaWFncmFtTW9kZWxcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT4g2LPYp9iu2KrYp9ixINiv24zYqtinIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxkYXRhLW1hcHBlciBkZXN0aW5hdGlvbj1cInZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiPjwvZGF0YS1tYXBwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+2Ybar9in2LTYqiDYr9in2K/ZhzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zTWFwcGluZ3M7IGxldCBpPWluZGV4XCIgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb2x1bW5zTWFwcGluZ3NbaV1cIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0LnhzPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNDVcIiBmeEZsZXgueHM9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZhtin2YUg2YXYs9uM2LFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lUGF0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIiBbZGlzYWJsZWRdPVwiIWl0ZW0uaXNMYXN0Tm9kZVwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5wYXRofX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNDVcIiBmeEZsZXgueHM9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZhdmC2K/Yp9ixINmF2LPbjNixXCIgZm9ybUNvbnRyb2xOYW1lPVwiVmFsdWVQYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIiBbZGlzYWJsZWRdPVwiIWl0ZW0uaXNMYXN0Tm9kZVwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5wYXRofX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmVDb2x1bW4oaSlcIiBmeEZsZXggbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRDb2x1bW4oKVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+2KfZgdiy2YjYr9mGINiz2KrZiNmGPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+2YbYqtin24zYrCDYr9in2K/ZhyDZh9inPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiIGZ4TGF5b3V0PVwicm93XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMudmFsdWU7IGxldCBpPWluZGV4XCJcclxuICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGZ4RmxleD1cIjQwXCI+e3tpdGVtWzBdfX0gOiB7e2l0ZW1bMV19fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gZnhGbGV4IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9yc1wiICpuZ0lmPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzKS5jb250cm9sc1tpdGVtWzBdXVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cItix2YbaryDZhtmF2YjYr9in2LFcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbVswXVwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCIzMFwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5UeXBlcykuY29udHJvbHNbaXRlbVswXV1cIj5cclxuICAgICAgICAgICAgICA8IS0tIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRpcG9cIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiID4gLS0+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ0aXBvXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7YqtmG2LjbjNmF2KfYqiDYuNin2YfYsduMPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2KrYudiv2KfYryDYs9i32LFcIiBmb3JtQ29udHJvbE5hbWU9XCJDb2xzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYqti52K/Yp9ivINiz2KrZiNmGXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm93c1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGZ4RmxleD1cIjUwXCI+2LHZhtqvINmF2KrZhiA6PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUZXh0Q29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgICAgICA8bGFiZWwgZnhGbGV4PVwiNTBcIj7YsdmG2q8g2b7YsyDYstmF24zZhtmHIDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJCYWNrZ3JvdW5kQ29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKCRldmVudClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPtir2KjYqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PSdub2dyb3cnIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2RpYWdyYW1zJz7Yp9mG2LXYsdin2YE8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2NoYXJ0e3dpZHRoOjMwMHB4O2RpcmVjdGlvbjpsdHJ9LmZvcm0tZWxlbWVudC1tYXJnaW57bWFyZ2luOjVweCAxMHB4fS5pdGVtLW1hcmdpbnttYXJnaW46MTBweCAwO2Rpc3BsYXk6YmxvY2t9bWF0LW9wdGlvbi5kZXB0aF8ye3BhZGRpbmctcmlnaHQ6MzBweH1tYXQtb3B0aW9uLmRlcHRoXzN7cGFkZGluZy1yaWdodDo1MHB4fW1hdC1vcHRpb24uZGVwdGhfNHtwYWRkaW5nLXJpZ2h0OjcwcHh9Lm1hdC1jYXJke21hcmdpbjoxMi41cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGRhdGE6IGFueTtcclxuXHRjb2x1bW5zOiBhbnk7XHJcblx0Y2hhcnQ7XHJcblx0ZGlhZ3JhbVR5cGVzOiBzdHJpbmdbXTtcclxuXHRwYXRoT3B0aW9uczoge1xyXG5cdFx0cGF0aDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0dHlwZTogc3RyaW5nO1xyXG5cdFx0Y29sb3I6IHN0cmluZztcclxuXHR9W107XHJcblx0Y29sdW1uc01hcHBpbmdzOiBBYnN0cmFjdENvbnRyb2xbXTtcclxuXHRkYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGlhZ3JhbU1vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0Y29tcG9uZW50TW9kZWw6IHsgY29tcG9uZW50OiBhbnk7IGlucHV0czogb2JqZWN0IH07XHJcblx0dHlwZU1hcFRvRGlhZ3JhbTogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XHJcblx0ZGlhZ3JhbVBhcnRpYWxDb25maWc6IHsgdHlwZTogc3RyaW5nOyBpbnB1dHM6IHsgZm9ybUdyb3VwOiBGb3JtR3JvdXA7IGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSB9IH07XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdHNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHR0aGlzLnNvdXJjZXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbU1vZGVsID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGhpcy5jb2x1bW5zTWFwcGluZ3MgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scztcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdE5hbWU6IGRhdGEuTmFtZSxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUsXHJcblx0XHRcdFx0XHRcdEdyb3VwczogZGF0YS5Hcm91cHMsXHJcblx0XHRcdFx0XHRcdFR5cGU6IGRhdGEuQ2hhcnQuZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRMZWdlbmQ6IGRhdGEuQ2hhcnQubGVnZW5kLnNob3csXHJcblx0XHRcdFx0XHRcdFN1YmNoYXJ0OiBkYXRhLkNoYXJ0LnN1YmNoYXJ0LnNob3csXHJcblx0XHRcdFx0XHRcdFpvb206IGRhdGEuQ2hhcnQuem9vbS5lbmFibGVkLFxyXG5cdFx0XHRcdFx0XHRUb29sdGlwOiBkYXRhLkNoYXJ0LnRvb2x0aXAuZ3JvdXBlZCxcclxuXHRcdFx0XHRcdFx0U3luYzogZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdFNvdXJjZTogZGF0YS5Tb3VyY2UsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IGRhdGEuQ2hhcnQuZGF0YS5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdFx0Q29sczogZGF0YS5Cb3guQ29scyxcclxuXHRcdFx0XHRcdFx0RmxvdzogZGF0YS5DaGFydC5GbG93LFxyXG5cdFx0XHRcdFx0XHRSb3dzOiBkYXRhLkJveC5Sb3dzLFxyXG5cdFx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcixcclxuXHRcdFx0XHRcdFx0VGV4dENvbG9yOiBkYXRhLkJveC5UZXh0Q29sb3JcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLmNvbG9ycyB8fCB7fSkuZm9yRWFjaChjb2x1bW5LZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnNbY29sdW1uS2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLnR5cGVzIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS50eXBlc1trZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHRoaXMuYWRkQ29sdW1uKG1hcHBpbmcuTmFtZVBhdGgsIG1hcHBpbmcuVmFsdWVQYXRoKSk7XHJcblx0XHRcdFx0XHR0aGlzLnNvdXJjZSA9IGRhdGEuU291cmNlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGlhZ3JhbVR5cGVzID0gW1xyXG5cdFx0XHRcImJhclwiLFxyXG5cdFx0XHRcImRvbnV0XCIsXHJcblx0XHRcdFwicGllXCIsXHJcblx0XHRcdFwic2NhdHRlclwiLFxyXG5cdFx0XHRcImxpbmVcIixcclxuXHRcdFx0XCJhcmVhXCIsXHJcblx0XHRcdFwiYXJlYS1zcGxpbmVcIixcclxuXHRcdFx0XCJudW1lcm9cIixcclxuXHRcdFx0XCJib29sZWFub1wiLFxyXG5cdFx0XHRcInRlbXBvXCJcclxuXHRcdF07XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3Muc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXR1cyA9PSBcIlZBTElEXCIgJiZcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0dGhpcy5kYXRhXHJcblx0XHRcdClcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YVN1YnNjcmlwdGlvbikgdGhpcy5kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0Ly8gZ2V0RGF0YSgpIHtcclxuXHQvLyAgIGNvbnN0IG8kID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuc291cmNlKTtcclxuXHQvLyAgIHRoaXMuZGF0YVN1YnNjcmlwdGlvbiA9IG8kLnN1YnNjcmliZShkYXRhID0+IG5ldyBEYXRhTG9hZGVkQWN0aW9uKHRoaXMpKVxyXG5cdC8vICAgcmV0dXJuIG8kO1xyXG5cdC8vIH1cclxuXHRnZXREYXRhU3RydWN0dXJlKCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBvYnNlcnZlciA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh7IC4uLnRoaXMuc291cmNlLCBJbnRlcnZhbDogMCB9LCB0aGlzLnVuc3Vic2NyaWJlLCBEYXRlLm5vdygpIC0gMTAwMDApO1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhLkRhdGE7XHJcblx0XHRcdHRoaXMucGF0aE9wdGlvbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldF9kYXRhX3JlcG9ydChkYXRhLkRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXI7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHR5cGVDaGFuZ2VkKCkge1xyXG5cdFx0Y29uc3QgdHlwZXNGb3JtR3JvdXAgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVHlwZXMgYXMgRm9ybUdyb3VwKS5jb250cm9scztcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG5cdFx0Zm9yIChjb25zdCBjYiBpbiB0eXBlc0Zvcm1Hcm91cCkge1xyXG5cdFx0XHR0eXBlc0Zvcm1Hcm91cFtjYl0uc2V0VmFsdWUodGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdGFkZENvbHVtbihOYW1lUGF0aDogc3RyaW5nID0gXCJcIiwgVmFsdWVQYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbHVtbk1hcHBpbmdzXCJdO1xyXG5cdFx0Y29udHJvbC5wdXNoKFxyXG5cdFx0XHR0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdFx0XHROYW1lUGF0aDogW05hbWVQYXRoXSxcclxuXHRcdFx0XHRWYWx1ZVBhdGg6IFtWYWx1ZVBhdGgsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRyb3V0ZUVudGVyZWQoZXZlbnQpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBldmVudC52YWx1ZTtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBTb3VyY2U6IGV2ZW50LnZhbHVlIH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0cmVtb3ZlQ29sdW1uKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cdGNhbGN1bGF0ZUNvbHVtbnMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXIgPT4ge1xyXG5cdFx0XHRjb25zdCBjb2x1bW5zTUFwcGluZyA9IHtcclxuXHRcdFx0XHQvLyBOYW1lVkFsdWU6ICAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy52YWx1ZXNcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc3QgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHR0aGlzLmRhdGEsXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkudmFsdWVcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy5zZXRWYWx1ZShjb2x1bW5zKTtcclxuXHRcdFx0Ly8gYWRkIG5ldyBpdGVtIHRvIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbG9ycyBmb3JtIGNvbnRyb2xcclxuXHRcdFx0Y29uc3QgY29sb3JzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2xvcnNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvbHVtbktleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woXCIjMTIzNDU2XCIpKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGtleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG9ic2VyLm5leHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZW5lcmF0ZURpYWdyYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IHRlbXAgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0ZW1wLl9pZCA9IFwidGVtcGxhdGVfaWRcIjtcclxuXHRcdHRlbXAuTmFtZSA9IHRoaXMuZm9ybUdyb3VwLnZhbHVlLk5hbWU7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRlbXAuU291cmNlID0gdGhpcy5zb3VyY2U7XHJcblx0XHR0ZW1wLkJveCA9IHtcclxuXHRcdFx0TnVtYmVyT2ZDb2x1bW5zOiAxLFxyXG5cdFx0XHRPcmRlcjogMSxcclxuXHRcdFx0QmFja2dyb3VuZENvbG9yOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdH07XHJcblx0XHR0ZW1wLldpZGdldCA9IHtcclxuXHRcdFx0Ym9vbGVhbm86IHRoaXMuZm9ybUdyb3VwLnZhbHVlLmJvb2xlYW5vXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5DaGFydCA9IHtcclxuXHRcdFx0Q29sdW1uTWFwcGluZ3M6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZSxcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdHR5cGVzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlcyxcclxuXHRcdFx0XHRjb2xvcnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9ycy52YWx1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRGbG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5GbG93LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5MZWdlbmRcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5TdWJjaGFydFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0ZW5hYmxlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuWm9vbVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0Z3JvdXBlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuVG9vbHRpcFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHRvb2x0aXA6IHtcclxuXHRcdFx0Ly8gICAgICAgICBmb3JtYXQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyBjb2xvcjoge1xyXG5cdFx0XHQvLyAgICAgICAgIHBhdHRlcm46IFsnIzYwQjA0NCcsICcjRjZDNjAwJywgJyNGOTc2MDAnLCAnI0ZGMDAwMCddLFxyXG5cdFx0XHQvLyAgICAgICAgIHRocmVzaG9sZDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgLy8gIHVuaXQ6ICd2YWx1ZScsIC8vIHBlcmNlbnRhZ2UgaXMgZGVmYXVsdFxyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWVzOiBbMzAsIDYwLCA5MCwgMTAwXVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdH07XHJcblx0XHQvLyB0aGlzLmNvbXBvbmVudE1vZGVsID0ge1xyXG5cdFx0Ly8gICBjb21wb25lbnQ6IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVt0ZW1wLkNoYXJ0LmRhdGEudHlwZV0sXHJcblx0XHQvLyAgIGlucHV0czogeyBkYXRhOiB0ZW1wIH1cclxuXHRcdC8vIH1cclxuXHRcdHRoaXMuZGlhZ3JhbU1vZGVsID0gdGVtcDtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0fVxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRGlhZ3JhbUFjdGlvbih0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=