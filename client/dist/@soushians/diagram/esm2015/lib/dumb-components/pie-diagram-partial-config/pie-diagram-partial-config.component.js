/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
export class PieDiagramPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.ConfigChanged = new EventEmitter();
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set formGroup(data) {
        if (!data)
            return;
        this._dataLoaded = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._dataLoaded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
    /**
     * @return {?}
     */
    configChanged() {
        this.ConfigChanged.emit();
    }
}
PieDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "pie-diagram-partial-config",
                template: `<div *ngIf="dataLoaded | async" class="diagram-box">
  <form [formGroup]="formGroup" fxLayout='column'>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
    </div>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
    </div>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
    </div>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
    </div>
  </form>
  <form [formGroup]="donutFormGroup">
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="title">
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
PieDiagramPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
PieDiagramPartialConfigComponent.propDecorators = {
    ConfigChanged: [{ type: Output }],
    formGroup: [{ type: Input }]
};
function PieDiagramPartialConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.ConfigChanged;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.donutFormGroup;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.injector;
}
//# sourceMappingURL=pie-diagram-partial-config.component.js.map
