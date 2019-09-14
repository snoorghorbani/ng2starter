/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { switchMap, map, catchError } from "rxjs/operators";
import { FormService } from "../services/form.service";
import { FormsListActionTypes, FormsListFailedAction, FormsListStartAction, FormsListSucceedAction, FormSchemaFechedAction } from "./list.actions";
export class FormsListEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(FormsListActionTypes.FORMS_LIST), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new FormsListStartAction())));
        this.GetForm$ = this.actions$.pipe(ofType(FormsListActionTypes.GET_FORM_SCHEMA), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} id
         * @return {?}
         */
        id => this.service.get(id))), map((/**
         * @param {?} formSchema
         * @return {?}
         */
        formSchema => new FormSchemaFechedAction(formSchema))));
        this.get_forms_list$ = this.actions$.pipe(ofType(FormsListActionTypes.FORMS_LIST_START), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.service.getList())), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new FormsListSucceedAction(res))), catchError((/**
         * @return {?}
         */
        () => of(new FormsListFailedAction()))));
    }
}
FormsListEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormsListEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], FormsListEffects.prototype, "EditProfileRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], FormsListEffects.prototype, "GetForm$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], FormsListEffects.prototype, "get_forms_list$", void 0);
if (false) {
    /** @type {?} */
    FormsListEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    FormsListEffects.prototype.GetForm$;
    /** @type {?} */
    FormsListEffects.prototype.get_forms_list$;
    /**
     * @type {?}
     * @private
     */
    FormsListEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FormsListEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    FormsListEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUVOLG9CQUFvQixFQUVwQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDNUIsWUFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsT0FBb0I7UUFBNUUsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR2hHLHdCQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QyxNQUFNLENBQU0sb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQzVDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsRUFBQyxDQUN2QyxDQUFDO1FBR0YsYUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQU0sb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0IsU0FBUzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFDckMsR0FBRzs7OztRQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUN6RCxDQUFDO1FBR0Ysb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEVBQzdDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQyxFQUNoRCxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQzNDLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsRUFBQyxDQUNqRCxDQUFDO0lBdEJpRyxDQUFDOzs7WUFGcEcsVUFBVTs7OztZQWpCRixPQUFPO1lBSFAsTUFBTTtZQVFOLFdBQVc7O0FBaUJuQjtJQURDLE1BQU0sRUFBRTs7NkRBSVA7QUFHRjtJQURDLE1BQU0sRUFBRTs7a0RBTVA7QUFHRjtJQURDLE1BQU0sRUFBRTs7eURBTVA7OztJQXBCRiwrQ0FJRTs7SUFFRixvQ0FNRTs7SUFFRiwyQ0FNRTs7Ozs7SUF0QlUsb0NBQThCOzs7OztJQUFFLGtDQUFzQjs7Ozs7SUFBRSxtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0Rm9ybXNMaXN0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdEFjdGlvblR5cGVzLFxyXG5cdEZvcm1zTGlzdEFjdGlvbnMsXHJcblx0Rm9ybXNMaXN0RmFpbGVkQWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN0YXJ0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24sXHJcblx0Rm9ybVNjaGVtYUZlY2hlZEFjdGlvblxyXG59IGZyb20gXCIuL2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVCksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgRm9ybXNMaXN0U3RhcnRBY3Rpb24oKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRHZXRGb3JtJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KEZvcm1zTGlzdEFjdGlvblR5cGVzLkdFVF9GT1JNX1NDSEVNQSksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbihmb3JtU2NoZW1hKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRfZm9ybXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVEFSVCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0XHRtYXAocmVzID0+IG5ldyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRm9ybXNMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdCk7XHJcbn1cclxuIl19