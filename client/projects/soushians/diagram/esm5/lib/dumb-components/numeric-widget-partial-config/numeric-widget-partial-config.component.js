/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var NumericWidgetPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function NumericWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    return NumericWidgetPartialConfigComponent;
}());
export { NumericWidgetPartialConfigComponent };
NumericWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
NumericWidgetPartialConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
NumericWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};
function NumericWidgetPartialConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.donutFormGroup;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.injector;
}
//# sourceMappingURL=numeric-widget-partial-config.component.js.map
