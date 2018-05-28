/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { EditFormApiModel } from "../../models";
import { FormService } from "../../services/form.service";
import { EditFormAction } from "../../edit/edit-form.actions";
import { AddFormContainerComponent } from "../../add/add-form-container";
import { GetFormSchemaAction } from "../../list/list.actions";
export class EditFormContainerComponent extends AddFormContainerComponent {
    /**
     * @param {?} service
     * @param {?} route
     * @param {?} store
     */
    constructor(service, route, store) {
        super(store, service);
        this.service = service;
        this.route = route;
        this.store = store;
        this.formGroup = EditFormApiModel.Request.formGroup;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.route.params
            .map(params => params["_id"])
            .subscribe(id => this.store.dispatch(new GetFormSchemaAction(id)));
        this.route.params
            .map(params => params["_id"])
            .switchMap(id => this.service.selectFormById(id))
            .filter(data => data != null)
            .take(1)
            .subscribe(formSchema => {
            debugger;
            this.schema = formSchema;
            this.formGroup.patchValue(formSchema);
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        this.store.dispatch(new EditFormAction(data));
    }
}
EditFormContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<edit-form
					[formGroup]="formGroup"
					[schema]="schema"
					(changes)="update_schema($event)"
					(submited)="update($event)">
				</edit-form>`
            },] },
];
/** @nocollapse */
EditFormContainerComponent.ctorParameters = () => [
    { type: FormService },
    { type: ActivatedRoute },
    { type: Store }
];
function EditFormContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormContainerComponent.prototype.formGroup;
    /** @type {?} */
    EditFormContainerComponent.prototype.service;
    /** @type {?} */
    EditFormContainerComponent.prototype.route;
    /** @type {?} */
    EditFormContainerComponent.prototype.store;
}
//# sourceMappingURL=edit-form-container.component.js.map
