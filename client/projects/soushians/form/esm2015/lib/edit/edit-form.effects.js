/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { FormService } from "../services/form.service";
import { EditFormActionTypes, EditFormStartAction, EditFormSucceedAction, EditFormFailedAction } from "./edit-form.actions";
import { UpdateFormSchemaAction } from "../list";
import { map, switchMap, catchError } from "rxjs/operators";
export class EditFormEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditForm$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM)
            .pipe(map(action => action.payload), map(data => new EditFormStartAction(data)));
        this.EditFormStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.update(data)), map(formSchema => new EditFormSucceedAction(formSchema)), catchError(() => Observable.of(new EditFormFailedAction())));
        this.UpdateFormsListStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_SUCCEED)
            .pipe(map(action => action.payload), map(formSchema => new UpdateFormSchemaAction(formSchema)));
    }
}
EditFormEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EditFormEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], EditFormEffects.prototype, "EditForm$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], EditFormEffects.prototype, "EditFormStart$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);
function EditFormEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormEffects.prototype.EditForm$;
    /** @type {?} */
    EditFormEffects.prototype.EditFormStart$;
    /** @type {?} */
    EditFormEffects.prototype.UpdateFormsListStart$;
    /** @type {?} */
    EditFormEffects.prototype.actions$;
    /** @type {?} */
    EditFormEffects.prototype.router;
    /** @type {?} */
    EditFormEffects.prototype.service;
}
//# sourceMappingURL=edit-form.effects.js.map
