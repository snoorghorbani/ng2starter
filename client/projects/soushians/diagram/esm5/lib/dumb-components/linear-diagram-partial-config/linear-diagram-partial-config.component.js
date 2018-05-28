/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var LinearDiagramPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function LinearDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.ConfigChanged = new EventEmitter();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.configChanged = function () {
        this.ConfigChanged.emit();
    };
    return LinearDiagramPartialConfigComponent;
}());
export { LinearDiagramPartialConfigComponent };
LinearDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "linear-diagram-partial-config",
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\n  </div>\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
LinearDiagramPartialConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
LinearDiagramPartialConfigComponent.propDecorators = {
    data: [{ type: Input }],
    ConfigChanged: [{ type: Output }]
};
function LinearDiagramPartialConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype._data;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.ConfigChanged;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.formGroup;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.injector;
}
//# sourceMappingURL=linear-diagram-partial-config.component.js.map
