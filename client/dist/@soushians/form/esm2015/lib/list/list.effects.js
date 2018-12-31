/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
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
        this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(data => new FormsListStartAction());
        this.GetForm$ = this.actions$
            .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
            .pipe(map(action => action.payload), switchMap(id => this.service.get(id)), map(formSchema => new FormSchemaFechedAction(formSchema)));
        this.get_forms_list$ = this.actions$
            .ofType(FormsListActionTypes.FORMS_LIST_START)
            .pipe(switchMap((data) => this.service.getList()), map(res => new FormsListSucceedAction(res)), catchError(() => of(new FormsListFailedAction())));
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
    /** @type {?} */
    FormsListEffects.prototype.actions$;
    /** @type {?} */
    FormsListEffects.prototype.router;
    /** @type {?} */
    FormsListEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBRU4sb0JBQW9CLEVBRXBCLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUM1QixZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUE1RSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFFaEcsMkJBQ3NCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBRXBILGdCQUNXLElBQUksQ0FBQyxRQUFRO2FBQ3RCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7YUFDNUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUN6RCxDQUFDO1FBRUgsdUJBQ2tCLElBQUksQ0FBQyxRQUFRO2FBQzdCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM3QyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0tBckJpRzs7O1lBRnBHLFVBQVU7Ozs7WUFqQkYsT0FBTztZQUhQLE1BQU07WUFRTixXQUFXOzs7SUFnQmxCLE1BQU0sRUFBRTs7OztJQUdSLE1BQU0sRUFBRTs7OztJQVNSLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0Rm9ybXNMaXN0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdEFjdGlvblR5cGVzLFxyXG5cdEZvcm1zTGlzdEFjdGlvbnMsXHJcblx0Rm9ybXNMaXN0RmFpbGVkQWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN0YXJ0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24sXHJcblx0Rm9ybVNjaGVtYUZlY2hlZEFjdGlvblxyXG59IGZyb20gXCIuL2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVCkubWFwKGRhdGEgPT4gbmV3IEZvcm1zTGlzdFN0YXJ0QWN0aW9uKCkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRHZXRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdFx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbihmb3JtU2NoZW1hKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldF9mb3Jtc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEZvcm1zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIl19