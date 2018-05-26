/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
export class BooleanoWidgetPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
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
}
BooleanoWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "booleano-widget-partial-config",
                template: `<div *ngIf="dataLoaded | async" class="diagram-box">
  <form [formGroup]="booleanoFormGroup">
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="SuccessMessage">
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="FailureMessage">
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
BooleanoWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
BooleanoWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};
function BooleanoWidgetPartialConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.booleanoFormGroup;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.injector;
}
//# sourceMappingURL=booleano-widget-partial-config.component.js.map
