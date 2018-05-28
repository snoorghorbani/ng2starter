/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { UpsertSourceApiModel } from "../../models";
import { SourceService } from "../../services/source.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { SourceSubmit } from "../../actions";
export class SourceUpsertComponent {
    /**
     * @param {?} sourceService
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} store
     */
    constructor(sourceService, formBuilder, route, store) {
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = (/** @type {?} */ (this.formGroup.controls["Thresholds"])).controls;
        this.route.params.subscribe(params => {
            const /** @type {?} */ sourceId = params["id"];
            sourceId &&
                this.sourceService.getSourceById(sourceId).subscribe(data => {
                    this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(mapping => this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type));
                });
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    addItem(Name = "", Formula = "", Message = "", Type = "critical") {
        const /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
        control.push(new FormGroup({
            Name: new FormControl(Name, [Validators.required]),
            Formula: new FormControl(Formula, [Validators.required]),
            Message: new FormControl(Message, [Validators.required]),
            Type: new FormControl(Type, [Validators.required])
        }));
        //    control.push(this.formBuilder.group({
        //      Name: [Name],
        //      Formula: [Formula],
        //      Message: [Message]
        //    }));
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeItem(i) {
        const /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    getData() {
        const /** @type {?} */ o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe(data => {
            debugger;
            this.data = data.Data;
        });
        return o$;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    }
}
SourceUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "source-source-upsert",
                template: `<div fxLayout="column">
  <div fxFlex="100">
    <mat-card fxLayout="column" fxFlex="50">
      <form [formGroup]="formGroup" fxLayout='column'>

        <mat-card-header>
          <mat-card-title>افزودن نمودار جدید</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field fxFlexFill>
            <input matInput placeholder="آدرس" formControlName="Endpoint">
          </mat-form-field>

          <mat-form-field fxFlexFill>
            <input matInput placeholder="مدت زمان به روز رسانی داده" formControlName="Interval">
          </mat-form-field>
          <div>
            <mat-checkbox formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
          </div>
        </mat-card-content>
      </form>
    </mat-card>

    <mat-card fxLayout="column" fxFlex="20">
      <mat-card-content fxLayout="column">
        <div>
          <button fxFlex mat-raised-button color="primary" (click)="getData()">ساختار دیتا</button>
        </div>
        <div class="item-margin">
          <!-- TODO: -->
          <!-- <data-mapper destination="value" [data]="data"></data-mapper> -->
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card fxLayout="column" fxFlex="30">
      <mat-card-content fxLayout="column">
        <div fxLayout="column" fxLayoutGap="5px">
          <div *ngFor="let threshold of thresholds; let i=index" fxFlex="100" class="add-item">
            <div fxLayout="column">
              <div [formGroup]="thresholds[i]" fxLayout="column">
                <mat-form-field fxFlexFill>
                  <input matInput placeholder="نام" formControlName="Name">
                </mat-form-field>
                <mat-form-field fxFlexFill>
                  <input class="ltr" matInput placeholder="فرمول" formControlName="Formula">
                </mat-form-field>
                <mat-form-field fxFlexFill>
                  <input matInput placeholder="توضیح" formControlName="Message">
                </mat-form-field>
                <mat-radio-group formControlName="Type" fxFlexFill>
                  <label>نوع :</label>
                  <mat-radio-button *ngFor="let item of types" [value]="item" class="form-element-margin">
                    {{item}}
                  </mat-radio-button>
                </mat-radio-group>

                <button (click)="removeItem(i)" fxFlex mat-button color="primary" type="button">پاک کردن</button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div class="item-margin">
          <button (click)="addItem()" fxFlex mat-raised-button color="primary" type="button">افزودن آستانه</button>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  <div fxFlex="100">
    <mat-card fxLayoutAlign="end center" fxLayout="row" fxFlex="100">
      <mat-card-content>
        <button mat-raised-button fxFlex color="primary" (click)="add($event)">ثبت</button>
        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap="5px">انصراف</button>
      </mat-card-content>
    </mat-card>
  </div>
</div>
`,
                styles: [`mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}`]
            },] },
];
/** @nocollapse */
SourceUpsertComponent.ctorParameters = () => [
    { type: SourceService },
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Store }
];
function SourceUpsertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceUpsertComponent.prototype.formGroup;
    /** @type {?} */
    SourceUpsertComponent.prototype.sources;
    /** @type {?} */
    SourceUpsertComponent.prototype.thresholds;
    /** @type {?} */
    SourceUpsertComponent.prototype.data;
    /** @type {?} */
    SourceUpsertComponent.prototype.types;
    /** @type {?} */
    SourceUpsertComponent.prototype.sourceService;
    /** @type {?} */
    SourceUpsertComponent.prototype.formBuilder;
    /** @type {?} */
    SourceUpsertComponent.prototype.route;
    /** @type {?} */
    SourceUpsertComponent.prototype.store;
}
//# sourceMappingURL=source-upsert.component.js.map
