/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormSchemaModel } from "../../models";
import { AddFormAction } from "../add-form.actions";
import { AddFormSchemaAction, UpdateFormSchemaAction } from "../../list/list.actions";
import { FormService } from "../../services/form.service";
export class AddFormContainerComponent {
    /**
     * @param {?} store
     * @param {?} service
     */
    constructor(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        debugger;
        this.schema = new FormSchemaModel();
        this.schema.init();
        this.store.dispatch(new AddFormSchemaAction(this.schema));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    add(form) {
        this.store.dispatch(new AddFormAction(form));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    update_schema(form) {
        this.store.dispatch(new UpdateFormSchemaAction(form));
    }
}
AddFormContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<ngs-form-add 
					[schema]="schema" 
					(changes)="update_schema($event)" 
					(submited)=add($event)
				></ngs-form-add>`
            },] },
];
/** @nocollapse */
AddFormContainerComponent.ctorParameters = () => [
    { type: Store },
    { type: FormService }
];
function AddFormContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormContainerComponent.prototype.schema;
    /** @type {?} */
    AddFormContainerComponent.prototype.store;
    /** @type {?} */
    AddFormContainerComponent.prototype.service;
}
//# sourceMappingURL=add-form-container.component.js.map
