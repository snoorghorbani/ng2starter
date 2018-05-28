/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
var DataMapperComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} store
     */
    function DataMapperComponent(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    Object.defineProperty(DataMapperComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this.dataReport = _.report(data);
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataMapperComponent.prototype.ngOnInit = function () { };
    return DataMapperComponent;
}());
export { DataMapperComponent };
DataMapperComponent.decorators = [
    { type: Component, args: [{
                selector: "data-mapper",
                template: "<div fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        <b>\n            Key\n        </b>\n    </div>\n    <div fxFlex=\"nogrow\">\n        <b>\n            Type\n        </b>\n    </div>\n</div>\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        {{item.name}}\n    </div>\n    <div fxFlex=\"nogrow\">\n        {{item.type}}\n    </div>\n</div>\n",
                styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
            },] },
];
/** @nocollapse */
DataMapperComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: Store }
]; };
DataMapperComponent.propDecorators = {
    destination: [{ type: Input }],
    data: [{ type: Input }]
};
function DataMapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DataMapperComponent.prototype.destination;
    /** @type {?} */
    DataMapperComponent.prototype._data;
    /** @type {?} */
    DataMapperComponent.prototype.dataReport;
    /** @type {?} */
    DataMapperComponent.prototype.diagramService;
    /** @type {?} */
    DataMapperComponent.prototype.store;
}
//# sourceMappingURL=data-mapper.component.js.map
