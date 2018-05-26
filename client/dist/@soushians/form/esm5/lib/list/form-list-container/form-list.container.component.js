/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormsListAction } from "../../list/list.actions";
var FormListContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function FormListContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(function (state) { return state.form.list.data; });
    }
    /**
     * @return {?}
     */
    FormListContainerComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new FormsListAction());
    };
    return FormListContainerComponent;
}());
export { FormListContainerComponent };
FormListContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
            },] },
];
/** @nocollapse */
FormListContainerComponent.ctorParameters = function () { return [
    { type: Store }
]; };
function FormListContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormListContainerComponent.prototype.data$;
    /** @type {?} */
    FormListContainerComponent.prototype.store;
}
//# sourceMappingURL=form-list.container.component.js.map
