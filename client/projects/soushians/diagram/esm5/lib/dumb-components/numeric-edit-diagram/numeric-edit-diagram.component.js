/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services/diagram.service";
var NumericEditDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
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
    NumericEditDiagramComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source).subscribe(function (data) {
            debugger;
        });
    };
    return NumericEditDiagramComponent;
}());
export { NumericEditDiagramComponent };
NumericEditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-edit-diagram",
                template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <mat-card-header>\n    <mat-card-title fxLayoutAlign=\"space-between center\">\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n  </mat-card-content>\n</mat-card>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
NumericEditDiagramComponent.ctorParameters = function () { return [
    { type: Injector },
    { type: DiagramService }
]; };
NumericEditDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
function NumericEditDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NumericEditDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericEditDiagramComponent.prototype._data;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.injector;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.diagramService;
}
//# sourceMappingURL=numeric-edit-diagram.component.js.map
