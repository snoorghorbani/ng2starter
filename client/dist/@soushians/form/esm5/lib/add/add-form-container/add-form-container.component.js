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
var AddFormContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} service
     */
    function AddFormContainerComponent(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    AddFormContainerComponent.prototype.ngOnInit = function () {
        debugger;
        this.schema = new FormSchemaModel();
        this.schema.init();
        this.store.dispatch(new AddFormSchemaAction(this.schema));
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AddFormContainerComponent.prototype.add = function (form) {
        this.store.dispatch(new AddFormAction(form));
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AddFormContainerComponent.prototype.update_schema = function (form) {
        this.store.dispatch(new UpdateFormSchemaAction(form));
    };
    return AddFormContainerComponent;
}());
export { AddFormContainerComponent };
AddFormContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
            },] },
];
/** @nocollapse */
AddFormContainerComponent.ctorParameters = function () { return [
    { type: Store },
    { type: FormService }
]; };
function AddFormContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormContainerComponent.prototype.schema;
    /** @type {?} */
    AddFormContainerComponent.prototype.store;
    /** @type {?} */
    AddFormContainerComponent.prototype.service;
}
//# sourceMappingURL=add-form-container.component.js.map
