/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services/diagram.service";
export class NumericDiagramComponent {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    constructor(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(data => {
            let /** @type {?} */ counter = this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings);
            this.counter = counter[0][1];
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataSubscribtion.unsubscribe();
    }
}
NumericDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-numeric",
                template: `<div *ngIf="dataLoaded | async">
  <!-- <div fxLayoutAlign="center center" class="numeric">{{data.Source.Data | json}}</div> -->
  <div fxLayoutAlign="center center" class="numeric">{{counter}}</div>
  <div [id]="'diagram_' + data._id"></div>
</div>`,
                styles: [`:host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}`]
            },] },
];
/** @nocollapse */
NumericDiagramComponent.ctorParameters = () => [
    { type: Injector },
    { type: DiagramService }
];
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
