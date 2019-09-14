/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
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
        this.EditForm$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new EditFormStartAction(data))));
        this.EditFormStart$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM_START), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.service.update(data))), map((/**
         * @param {?} formSchema
         * @return {?}
         */
        formSchema => new EditFormSucceedAction(formSchema))), catchError((/**
         * @return {?}
         */
        () => of(new EditFormFailedAction()))));
        this.UpdateFormsListStart$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM_SUCCEED), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), map((/**
         * @param {?} formSchema
         * @return {?}
         */
        formSchema => new UpdateFormSchemaAction(formSchema))));
    }
}
EditFormEffects.decorators = [
    { type: Injectable }
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
if (false) {
    /** @type {?} */
    EditFormEffects.prototype.EditForm$;
    /** @type {?} */
    EditFormEffects.prototype.EditFormStart$;
    /** @type {?} */
    EditFormEffects.prototype.UpdateFormsListStart$;
    /**
     * @type {?}
     * @private
     */
    EditFormEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    EditFormEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    EditFormEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMzQixZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUE1RSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHaEcsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QixNQUFNLENBQU0sbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0IsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUMxQyxDQUFDO1FBR0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFNLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxFQUNoRCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdCLFNBQVM7Ozs7UUFBQyxDQUFDLElBQThCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3hFLEdBQUc7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFDeEQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxFQUFDLENBQ2hELENBQUM7UUFHRiwwQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekMsTUFBTSxDQUFNLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEVBQ2xELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0IsR0FBRzs7OztRQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUN6RCxDQUFDO0lBdkJpRyxDQUFDOzs7WUFGcEcsVUFBVTs7OztZQWZGLE9BQU87WUFIUCxNQUFNO1lBT04sV0FBVzs7QUFnQm5CO0lBREMsTUFBTSxFQUFFOztrREFLUDtBQUdGO0lBREMsTUFBTSxFQUFFOzt1REFPUDtBQUdGO0lBREMsTUFBTSxFQUFFOzs4REFLUDs7O0lBckJGLG9DQUtFOztJQUVGLHlDQU9FOztJQUVGLGdEQUtFOzs7OztJQXZCVSxtQ0FBOEI7Ozs7O0lBQUUsaUNBQXNCOzs7OztJQUFFLGtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdEZvcm1BY3Rpb25UeXBlcyxcclxuXHRFZGl0Rm9ybVN0YXJ0QWN0aW9uLFxyXG5cdEVkaXRGb3JtU3VjY2VlZEFjdGlvbixcclxuXHRFZGl0Rm9ybUZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2VkaXQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vbGlzdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IEVkaXRGb3JtU3RhcnRBY3Rpb24oZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVCksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UudXBkYXRlKGRhdGEpKSxcclxuXHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24oZm9ybVNjaGVtYSkpLFxyXG5cdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdEZvcm1GYWlsZWRBY3Rpb24oKSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBkYXRlRm9ybXNMaXN0U3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRCksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uKGZvcm1TY2hlbWEpKVxyXG5cdCk7XHJcbn1cclxuIl19