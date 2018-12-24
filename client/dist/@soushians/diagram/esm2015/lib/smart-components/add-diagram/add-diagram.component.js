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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBYSxXQUFXLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFTLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUNOLGtCQUFrQixFQUNsQiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGdCQUFnQixFQUNoQixNQUFNLG1DQUFtQyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUF3Sy9CLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFzQi9CLFlBQ1MsZ0JBQ0EsYUFDQSxPQUNBO1FBSEEsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7UUFDTCxVQUFLLEdBQUwsS0FBSztRQXpCZCxtQkFBYyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2xDLGlCQUF1QixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBMEIzRCxJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWlLSjtnQkFDTixNQUFNLEVBQUUsQ0FBQywyUEFBMlAsQ0FBQzthQUNyUTs7OztZQXBMUSxjQUFjO1lBVmlDLFdBQVc7WUFFMUQsS0FBSztZQUNFLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwicnhqcy9vcGVyYXRvci9wdWJsaXNoXCI7XHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5pbXBvcnQgeyBhZGREaWFncmFtUmVkdWNlciB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9hZGQtZGlhZ3JhbS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc291cmNlLm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0SGF2ZUVuZHBvaW50QWN0aW9uLFxyXG5cdENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbixcclxuXHREaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbixcclxuXHRBZGREaWFncmFtQWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYWRkLWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tYWRkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0Lmx0LW1kPVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiNjBcIj5cclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtin2YHYstmI2K/ZhiDZhtmF2YjYr9in2LEg2KzYr9uM2K88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYudmG2YjYp9mGINmG2YXZiNiv2KfYsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZhtin2YUg2YXYs9uM2LFcIiBmb3JtQ29udHJvbE5hbWU9XCJTb3VyY2VcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cInJvdXRlRW50ZXJlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5FbmRwb2ludH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInN5bmMgdGltZVwiIGZvcm1Db250cm9sTmFtZT1cIlN5bmNcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD7ZhtmI2Lkg2YbZhdmI2K/Yp9ixIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcm91cHNcIiBmb3JtQ29udHJvbE5hbWU9XCJHcm91cHNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAge3tmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlID8gZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZVswXSA6ICcnfX1cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAoK3t7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZS5sZW5ndGggLSAxfX0gb3RoZXJzKVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+2YjYtti524zYqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yIChDb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoKVwiIFtkYXRhXT1cImRpYWdyYW1QYXJ0aWFsQ29uZmlnXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGlkPVwibW9kaWZ5LWRpYWdyYW1cIiBmeEZsZXg9XCI0MFwiIFtkYXRhXT1cImRpYWdyYW1Nb2RlbFwiPjwvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPiDYs9in2K7Yqtin2LEg2K/bjNiq2KcgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7Zhtqv2KfYtNiqINiv2KfYr9mHPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNNYXBwaW5nczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbHVtbnNNYXBwaW5nc1tpXVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI0NVwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cItmG2KfZhSDZhdiz24zYsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVQYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI0NVwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cItmF2YLYr9in2LEg2YXYs9uM2LFcIiBmb3JtQ29udHJvbE5hbWU9XCJWYWx1ZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUNvbHVtbihpKVwiIGZ4RmxleCBtYXQtaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZENvbHVtbigpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7Yp9mB2LLZiNiv2YYg2LPYqtmI2YY8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7Zhtiq2KfbjNisINiv2KfYr9mHINmH2Kc8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgZnhMYXlvdXQ9XCJyb3dcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZTsgbGV0IGk9aW5kZXhcIlxyXG4gICAgICAgICAgICBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gZnhGbGV4PVwiNDBcIj57e2l0ZW1bMF19fSA6IHt7aXRlbVsxXX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBmeEZsZXggW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi2LHZhtqvINmG2YXZiNiv2KfYsVwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjMwXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuVHlwZXNcIiAqbmdJZj1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzKS5jb250cm9sc1tpdGVtWzBdXVwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gPGlucHV0IHBsYWNlaG9sZGVyPVwidGlwb1wiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgPiAtLT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInRpcG9cIiBbZm9ybUNvbnRyb2xOYW1lXT1cIml0ZW1bMF1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlhZ3JhbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtiq2YbYuNuM2YXYp9iqINi42KfZh9ix24w8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYqti52K/Yp9ivINiz2LfYsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbHNcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItiq2LnYr9in2K8g2LPYqtmI2YZcIiBmb3JtQ29udHJvbE5hbWU9XCJSb3dzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgICAgICA8bGFiZWwgZnhGbGV4PVwiNTBcIj7YsdmG2q8g2YXYqtmGIDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlRleHRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgICAgIDxsYWJlbCBmeEZsZXg9XCI1MFwiPtix2YbaryDZvtizINiy2YXbjNmG2YcgOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cIkJhY2tncm91bmRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQoJGV2ZW50KVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+2KvYqNiqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPtin2YbYtdix2KfZgTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY2hhcnR7d2lkdGg6MzAwcHg7ZGlyZWN0aW9uOmx0cn0uZm9ybS1lbGVtZW50LW1hcmdpbnttYXJnaW46NXB4IDEwcHh9Lml0ZW0tbWFyZ2lue21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja31tYXQtb3B0aW9uLmRlcHRoXzJ7cGFkZGluZy1yaWdodDozMHB4fW1hdC1vcHRpb24uZGVwdGhfM3twYWRkaW5nLXJpZ2h0OjUwcHh9bWF0LW9wdGlvbi5kZXB0aF80e3BhZGRpbmctcmlnaHQ6NzBweH0ubWF0LWNhcmR7bWFyZ2luOjEyLjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0ZGF0YTogYW55O1xyXG5cdGNvbHVtbnM6IGFueTtcclxuXHRjaGFydDtcclxuXHRkaWFncmFtVHlwZXM6IHN0cmluZ1tdO1xyXG5cdHBhdGhPcHRpb25zOiB7XHJcblx0XHRwYXRoOiBzdHJpbmc7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0XHR0eXBlOiBzdHJpbmc7XHJcblx0XHRjb2xvcjogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRjb2x1bW5zTWFwcGluZ3M6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkaWFncmFtTW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRjb21wb25lbnRNb2RlbDogeyBjb21wb25lbnQ6IGFueTsgaW5wdXRzOiBvYmplY3QgfTtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHRkaWFncmFtUGFydGlhbENvbmZpZzogeyB0eXBlOiBzdHJpbmc7IGlucHV0czogeyBmb3JtR3JvdXA6IEZvcm1Hcm91cDsgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlIH0gfTtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0c291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtTW9kZWwgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0aGlzLmNvbHVtbnNNYXBwaW5ncyA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0XHRkaWFncmFtSWQgJiZcclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdFx0X2lkOiBkYXRhLl9pZCxcclxuXHRcdFx0XHRcdFx0TmFtZTogZGF0YS5OYW1lLFxyXG5cdFx0XHRcdFx0XHRJc0FjdGl2ZTogZGF0YS5Jc0FjdGl2ZSxcclxuXHRcdFx0XHRcdFx0R3JvdXBzOiBkYXRhLkdyb3VwcyxcclxuXHRcdFx0XHRcdFx0VHlwZTogZGF0YS5DaGFydC5kYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdExlZ2VuZDogZGF0YS5DaGFydC5sZWdlbmQuc2hvdyxcclxuXHRcdFx0XHRcdFx0U3ViY2hhcnQ6IGRhdGEuQ2hhcnQuc3ViY2hhcnQuc2hvdyxcclxuXHRcdFx0XHRcdFx0Wm9vbTogZGF0YS5DaGFydC56b29tLmVuYWJsZWQsXHJcblx0XHRcdFx0XHRcdFRvb2x0aXA6IGRhdGEuQ2hhcnQudG9vbHRpcC5ncm91cGVkLFxyXG5cdFx0XHRcdFx0XHRTeW5jOiBkYXRhLlNvdXJjZS5JbnRlcnZhbCxcclxuXHRcdFx0XHRcdFx0U291cmNlOiBkYXRhLlNvdXJjZSxcclxuXHRcdFx0XHRcdFx0Y29sdW1uczogZGF0YS5DaGFydC5kYXRhLmNvbHVtbnMsXHJcblx0XHRcdFx0XHRcdENvbHVtbk1hcHBpbmdzOiBkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRcdFx0XHRDb2xzOiBkYXRhLkJveC5Db2xzLFxyXG5cdFx0XHRcdFx0XHRGbG93OiBkYXRhLkNoYXJ0LkZsb3csXHJcblx0XHRcdFx0XHRcdFJvd3M6IGRhdGEuQm94LlJvd3MsXHJcblx0XHRcdFx0XHRcdEJhY2tncm91bmRDb2xvcjogZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yLFxyXG5cdFx0XHRcdFx0XHRUZXh0Q29sb3I6IGRhdGEuQm94LlRleHRDb2xvclxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY29sb3JzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2xvcnNcIl07XHJcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLkNoYXJ0LmRhdGEuY29sb3JzIHx8IHt9KS5mb3JFYWNoKGNvbHVtbktleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woZGF0YS5DaGFydC5kYXRhLmNvbG9yc1tjb2x1bW5LZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLkNoYXJ0LmRhdGEudHlwZXMgfHwge30pLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0dHlwZXNDb250cm9sLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2woZGF0YS5DaGFydC5kYXRhLnR5cGVzW2tleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncy5mb3JFYWNoKG1hcHBpbmcgPT4gdGhpcy5hZGRDb2x1bW4obWFwcGluZy5OYW1lUGF0aCwgbWFwcGluZy5WYWx1ZVBhdGgpKTtcclxuXHRcdFx0XHRcdHRoaXMuc291cmNlID0gZGF0YS5Tb3VyY2U7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIYXZlRW5kcG9pbnRBY3Rpb24odGhpcykpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5kaWFncmFtVHlwZXMgPSBbXHJcblx0XHRcdFwiYmFyXCIsXHJcblx0XHRcdFwiZG9udXRcIixcclxuXHRcdFx0XCJwaWVcIixcclxuXHRcdFx0XCJzY2F0dGVyXCIsXHJcblx0XHRcdFwibGluZVwiLFxyXG5cdFx0XHRcImFyZWFcIixcclxuXHRcdFx0XCJhcmVhLXNwbGluZVwiLFxyXG5cdFx0XHRcIm51bWVyb1wiLFxyXG5cdFx0XHRcImJvb2xlYW5vXCIsXHJcblx0XHRcdFwidGVtcG9cIlxyXG5cdFx0XTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncy5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhdHVzID09IFwiVkFMSURcIiAmJlxyXG5cdFx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmxlbmd0aCA+IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRhdGFcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhU3Vic2NyaXB0aW9uKSB0aGlzLmRhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHQvLyBnZXREYXRhKCkge1xyXG5cdC8vICAgY29uc3QgbyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5zb3VyY2UpO1xyXG5cdC8vICAgdGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gbyQuc3Vic2NyaWJlKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24odGhpcykpXHJcblx0Ly8gICByZXR1cm4gbyQ7XHJcblx0Ly8gfVxyXG5cdGdldERhdGFTdHJ1Y3R1cmUoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHsgLi4udGhpcy5zb3VyY2UsIEludGVydmFsOiAwIH0sIHRoaXMudW5zdWJzY3JpYmUsIERhdGUubm93KCkgLSAxMDAwMCk7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvYnNlcnZlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdFx0dGhpcy5wYXRoT3B0aW9ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0X2RhdGFfcmVwb3J0KGRhdGEuRGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlcjtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0dHlwZUNoYW5nZWQoKSB7XHJcblx0XHRjb25zdCB0eXBlc0Zvcm1Hcm91cCA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5UeXBlcyBhcyBGb3JtR3JvdXApLmNvbnRyb2xzO1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcblx0XHRmb3IgKGNvbnN0IGNiIGluIHR5cGVzRm9ybUdyb3VwKSB7XHJcblx0XHRcdHR5cGVzRm9ybUdyb3VwW2NiXS5zZXRWYWx1ZSh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0YWRkQ29sdW1uKE5hbWVQYXRoOiBzdHJpbmcgPSBcIlwiLCBWYWx1ZVBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnB1c2goXHJcblx0XHRcdHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0XHRcdE5hbWVQYXRoOiBbTmFtZVBhdGhdLFxyXG5cdFx0XHRcdFZhbHVlUGF0aDogW1ZhbHVlUGF0aCwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJvdXRlRW50ZXJlZChldmVudCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLnNvdXJjZSA9IGV2ZW50LnZhbHVlO1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFNvdXJjZTogZXZlbnQudmFsdWUgfSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIYXZlRW5kcG9pbnRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRyZW1vdmVDb2x1bW4oaTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbHVtbk1hcHBpbmdzXCJdO1xyXG5cdFx0Y29udHJvbC5yZW1vdmVBdChpKTtcclxuXHR9XHJcblx0Y2FsY3VsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlciA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbHVtbnNNQXBwaW5nID0ge1xyXG5cdFx0XHRcdC8vIE5hbWVWQWx1ZTogICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLnZhbHVlc1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdHRoaXMuZGF0YSxcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS52YWx1ZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnNldFZhbHVlKGNvbHVtbnMpO1xyXG5cdFx0XHQvLyBhZGQgbmV3IGl0ZW0gdG8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sb3JzIGZvcm0gY29udHJvbFxyXG5cdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY29sdW1uS2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChcIiMxMjM0NTZcIikpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Y29uc3Qga2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0dHlwZXNDb250cm9sLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0b2JzZXIubmV4dCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdlbmVyYXRlRGlhZ3JhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgdGVtcCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRlbXAuX2lkID0gXCJ0ZW1wbGF0ZV9pZFwiO1xyXG5cdFx0dGVtcC5OYW1lID0gdGhpcy5mb3JtR3JvdXAudmFsdWUuTmFtZTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGVtcC5Tb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuXHRcdHRlbXAuQm94ID0ge1xyXG5cdFx0XHROdW1iZXJPZkNvbHVtbnM6IDEsXHJcblx0XHRcdE9yZGVyOiAxLFxyXG5cdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkJhY2tncm91bmRDb2xvclxyXG5cdFx0fTtcclxuXHRcdHRlbXAuV2lkZ2V0ID0ge1xyXG5cdFx0XHRib29sZWFubzogdGhpcy5mb3JtR3JvdXAudmFsdWUuYm9vbGVhbm9cclxuXHRcdH07XHJcblx0XHR0ZW1wLkNoYXJ0ID0ge1xyXG5cdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5mb3JtR3JvdXAudmFsdWUuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnZhbHVlLFxyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0dHlwZXM6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGVzLFxyXG5cdFx0XHRcdGNvbG9yczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzLnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdEZsb3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkZsb3csXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkxlZ2VuZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlN1YmNoYXJ0XHJcblx0XHRcdH0sXHJcblx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRlbmFibGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ab29tXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRncm91cGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Ub29sdGlwXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdG9vbHRpcDoge1xyXG5cdFx0XHQvLyAgICAgICAgIGZvcm1hdDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiVcIjtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIGNvbG9yOiB7XHJcblx0XHRcdC8vICAgICAgICAgcGF0dGVybjogWycjNjBCMDQ0JywgJyNGNkM2MDAnLCAnI0Y5NzYwMCcsICcjRkYwMDAwJ10sXHJcblx0XHRcdC8vICAgICAgICAgdGhyZXNob2xkOiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAvLyAgdW5pdDogJ3ZhbHVlJywgLy8gcGVyY2VudGFnZSBpcyBkZWZhdWx0XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZXM6IFszMCwgNjAsIDkwLCAxMDBdXHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0fTtcclxuXHRcdC8vIHRoaXMuY29tcG9uZW50TW9kZWwgPSB7XHJcblx0XHQvLyAgIGNvbXBvbmVudDogdGhpcy50eXBlTWFwVG9EaWFncmFtW3RlbXAuQ2hhcnQuZGF0YS50eXBlXSxcclxuXHRcdC8vICAgaW5wdXRzOiB7IGRhdGE6IHRlbXAgfVxyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5kaWFncmFtTW9kZWwgPSB0ZW1wO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHR9XHJcblx0YWRkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGREaWFncmFtQWN0aW9uKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==