/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.EditForm$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM), map(action => action.payload), map(data => new EditFormStartAction(data)));
        this.EditFormStart$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM_START), map(action => action.payload), switchMap((data) => this.service.update(data)), map(formSchema => new EditFormSucceedAction(formSchema)), catchError(() => of(new EditFormFailedAction())));
        this.UpdateFormsListStart$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM_SUCCEED), map(action => action.payload), map(formSchema => new UpdateFormSchemaAction(formSchema)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMzQixZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUE1RSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHaEcsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QixNQUFNLENBQU0sbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUMxQyxDQUFDO1FBR0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFNLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxFQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxDQUFDLElBQThCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hFLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDeEQsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUNoRCxDQUFDO1FBR0YsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3pDLE1BQU0sQ0FBTSxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDekQsQ0FBQztJQXZCaUcsQ0FBQzs7O1lBRnBHLFVBQVU7Ozs7WUFmRixPQUFPO1lBSFAsTUFBTTtZQU9OLFdBQVc7O0FBZ0JuQjtJQURDLE1BQU0sRUFBRTs7a0RBS1A7QUFHRjtJQURDLE1BQU0sRUFBRTs7dURBT1A7QUFHRjtJQURDLE1BQU0sRUFBRTs7OERBS1A7OztJQXJCRixvQ0FLRTs7SUFFRix5Q0FPRTs7SUFFRixnREFLRTs7Ozs7SUF2QlUsbUNBQThCOzs7OztJQUFFLGlDQUFzQjs7Ozs7SUFBRSxrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRGb3JtQWN0aW9uVHlwZXMsXHJcblx0RWRpdEZvcm1TdGFydEFjdGlvbixcclxuXHRFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24sXHJcblx0RWRpdEZvcm1GYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uL2xpc3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STSksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBFZGl0Rm9ybVN0YXJ0QWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1RBUlQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLnVwZGF0ZShkYXRhKSksXHJcblx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRWRpdEZvcm1TdWNjZWVkQWN0aW9uKGZvcm1TY2hlbWEpKSxcclxuXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRGb3JtRmFpbGVkQWN0aW9uKCkpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwZGF0ZUZvcm1zTGlzdFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtU2NoZW1hKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==