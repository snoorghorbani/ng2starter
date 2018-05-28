/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
import { EditDiagramApiModel } from "../../models";
import { EditDiagramAction } from "../../actions";
var EditDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} route
     * @param {?} store
     */
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        var /** @type {?} */ Route = this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            _this.diagramService.getDiagram(diagramId).subscribe(function (data) { return _this.formGroup.patchValue(data); });
        });
    }
    /**
     * @return {?}
     */
    EditDiagramComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    EditDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    };
    return EditDiagramComponent;
}());
export { EditDiagramComponent };
EditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-edit",
                template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\n\n        <mat-card-header>\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n            </mat-form-field>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\n            </mat-form-field>\n\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n        </mat-card-actions>\n    </form>\n</mat-card>\n",
                styles: [""]
            },] },
];
/** @nocollapse */
EditDiagramComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: ActivatedRoute },
    { type: Store }
]; };
function EditDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramComponent.prototype.formGroup;
    /** @type {?} */
    EditDiagramComponent.prototype.diagramService;
    /** @type {?} */
    EditDiagramComponent.prototype.route;
    /** @type {?} */
    EditDiagramComponent.prototype.store;
}
//# sourceMappingURL=edit-diagram.component.js.map
