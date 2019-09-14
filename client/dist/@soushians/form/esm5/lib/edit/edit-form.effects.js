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
var EditFormEffects = /** @class */ (function () {
    function EditFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditForm$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new EditFormStartAction(data); })));
        this.EditFormStart$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM_START), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.service.update(data); })), map((/**
         * @param {?} formSchema
         * @return {?}
         */
        function (formSchema) { return new EditFormSucceedAction(formSchema); })), catchError((/**
         * @return {?}
         */
        function () { return of(new EditFormFailedAction()); })));
        this.UpdateFormsListStart$ = this.actions$.pipe(ofType(EditFormActionTypes.EDIT_FORM_SUCCEED), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} formSchema
         * @return {?}
         */
        function (formSchema) { return new UpdateFormSchemaAction(formSchema); })));
    }
    EditFormEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EditFormEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormService }
    ]; };
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
    return EditFormEffects;
}());
export { EditFormEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQ7SUFFQyx5QkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsT0FBb0I7UUFBaEcsaUJBQW9HO1FBQWhGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdoRyxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdCLE1BQU0sQ0FBTSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFDMUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDN0IsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUMxQyxDQUFDO1FBR0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFNLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxFQUNoRCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3QixTQUFTOzs7O1FBQUMsVUFBQyxJQUE4QixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQUMsRUFDeEUsR0FBRzs7OztRQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFBckMsQ0FBcUMsRUFBQyxFQUN4RCxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ2hELENBQUM7UUFHRiwwQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekMsTUFBTSxDQUFNLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEVBQ2xELEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdCLEdBQUc7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLEVBQXRDLENBQXNDLEVBQUMsQ0FDekQsQ0FBQztJQXZCaUcsQ0FBQzs7Z0JBRnBHLFVBQVU7Ozs7Z0JBZkYsT0FBTztnQkFIUCxNQUFNO2dCQU9OLFdBQVc7O0lBZ0JuQjtRQURDLE1BQU0sRUFBRTs7c0RBS1A7SUFHRjtRQURDLE1BQU0sRUFBRTs7MkRBT1A7SUFHRjtRQURDLE1BQU0sRUFBRTs7a0VBS1A7SUFDSCxzQkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGVBQWU7OztJQUczQixvQ0FLRTs7SUFFRix5Q0FPRTs7SUFFRixnREFLRTs7Ozs7SUF2QlUsbUNBQThCOzs7OztJQUFFLGlDQUFzQjs7Ozs7SUFBRSxrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRGb3JtQWN0aW9uVHlwZXMsXHJcblx0RWRpdEZvcm1TdGFydEFjdGlvbixcclxuXHRFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24sXHJcblx0RWRpdEZvcm1GYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uL2xpc3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STSksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBFZGl0Rm9ybVN0YXJ0QWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1RBUlQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLnVwZGF0ZShkYXRhKSksXHJcblx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRWRpdEZvcm1TdWNjZWVkQWN0aW9uKGZvcm1TY2hlbWEpKSxcclxuXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRGb3JtRmFpbGVkQWN0aW9uKCkpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwZGF0ZUZvcm1zTGlzdFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtU2NoZW1hKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==