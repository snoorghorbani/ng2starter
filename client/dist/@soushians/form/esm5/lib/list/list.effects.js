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
var FormsListEffects = /** @class */ (function () {
    function FormsListEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(function (data) { return new FormsListStartAction(); });
        this.GetForm$ = this.actions$
            .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (id) { return _this.service.get(id); }), map(function (formSchema) { return new FormSchemaFechedAction(formSchema); }));
        this.get_forms_list$ = this.actions$
            .ofType(FormsListActionTypes.FORMS_LIST_START)
            .pipe(switchMap(function (data) { return _this.service.getList(); }), map(function (res) { return new FormsListSucceedAction(res); }), catchError(function () { return of(new FormsListFailedAction()); }));
    }
    FormsListEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormsListEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormService }
    ]; };
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
    return FormsListEffects;
}());
export { FormsListEffects };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBRU4sb0JBQW9CLEVBRXBCLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QixNQUFNLGdCQUFnQixDQUFDOztJQUl2QiwwQkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsT0FBb0I7UUFBaEcsaUJBQW9HO1FBQWhGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUVoRywyQkFDc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxvQkFBb0IsRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUM7UUFFcEgsZ0JBQ1csSUFBSSxDQUFDLFFBQVE7YUFDdEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsU0FBUyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUMsRUFDckMsR0FBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUN6RCxDQUFDO1FBRUgsdUJBQ2tCLElBQUksQ0FBQyxRQUFRO2FBQzdCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM3QyxJQUFJLENBQ0osU0FBUyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxFQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLEVBQzNDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQ2pELENBQUM7S0FyQmlHOztnQkFGcEcsVUFBVTs7OztnQkFqQkYsT0FBTztnQkFIUCxNQUFNO2dCQVFOLFdBQVc7OztRQWdCbEIsTUFBTSxFQUFFOzs7O1FBR1IsTUFBTSxFQUFFOzs7O1FBU1IsTUFBTSxFQUFFOzs7MkJBckNWOztTQXNCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEZvcm1zTGlzdEFjdGlvbixcclxuXHRGb3Jtc0xpc3RBY3Rpb25UeXBlcyxcclxuXHRGb3Jtc0xpc3RBY3Rpb25zLFxyXG5cdEZvcm1zTGlzdEZhaWxlZEFjdGlvbixcclxuXHRGb3Jtc0xpc3RTdGFydEFjdGlvbixcclxuXHRGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uLFxyXG5cdEZvcm1TY2hlbWFGZWNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1QpLm1hcChkYXRhID0+IG5ldyBGb3Jtc0xpc3RTdGFydEFjdGlvbigpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0R2V0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkdFVF9GT1JNX1NDSEVNQSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHRcdFx0bWFwKGZvcm1TY2hlbWEgPT4gbmV3IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24oZm9ybVNjaGVtYSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRfZm9ybXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==