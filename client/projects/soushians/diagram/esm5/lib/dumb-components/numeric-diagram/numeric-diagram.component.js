/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services/diagram.service";
var NumericDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    Object.defineProperty(NumericDiagramComponent.prototype, "data", {
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
    NumericDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(function (data) {
            var /** @type {?} */ counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
            _this.counter = counter[0][1];
        });
    };
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnDestroy = function () {
        this.dataSubscribtion.unsubscribe();
    };
    return NumericDiagramComponent;
}());
export { NumericDiagramComponent };
NumericDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-numeric",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
            },] },
];
/** @nocollapse */
NumericDiagramComponent.ctorParameters = function () { return [
    { type: Injector },
    { type: DiagramService }
]; };
NumericDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
function NumericDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NumericDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericDiagramComponent.prototype._data;
    /** @type {?} */
    NumericDiagramComponent.prototype.counter;
    /** @type {?} */
    NumericDiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    NumericDiagramComponent.prototype.injector;
    /** @type {?} */
    NumericDiagramComponent.prototype.diagramService;
}
//# sourceMappingURL=numeric-diagram.component.js.map
