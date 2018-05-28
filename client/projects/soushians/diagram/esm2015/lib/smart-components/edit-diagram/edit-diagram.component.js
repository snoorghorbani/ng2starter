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
export class EditDiagramComponent {
    /**
     * @param {?} diagramService
     * @param {?} route
     * @param {?} store
     */
    constructor(diagramService, route, store) {
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        let /** @type {?} */ Route = this.route.params.subscribe(params => {
            const /** @type {?} */ diagramId = params["id"];
            this.diagramService.getDiagram(diagramId).subscribe(data => this.formGroup.patchValue(data));
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    }
}
EditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-edit",
                template: `<mat-card fxLayout="column" fxFlex="400px">
    <form [formGroup]="formGroup" fxLayout='column' (ngSubmit)="add($event)">

        <mat-card-header>
            <mat-card-title>افزودن نمودار جدید</mat-card-title>
        </mat-card-header>

        <mat-card-content>
            <mat-form-field fxFlexFill>
                <input matInput placeholder="عنوان نمودار" formControlName="Name">
            </mat-form-field>
            <mat-form-field fxFlexFill>
                <input matInput placeholder="آدرس نمودار" formControlName="Route">
            </mat-form-field>

            <mat-checkbox formControlName="IsActive">وضعیت</mat-checkbox>

        </mat-card-content>
        <mat-card-actions>
            <button fxFlex mat-raised-button color="primary" type="submit">ثبت</button>
            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>انصراف</button>
        </mat-card-actions>
    </form>
</mat-card>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
EditDiagramComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: ActivatedRoute },
    { type: Store }
];
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
