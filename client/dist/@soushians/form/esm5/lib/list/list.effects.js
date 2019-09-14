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
var FormsListEffects = /** @class */ (function () {
    function FormsListEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(FormsListActionTypes.FORMS_LIST), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new FormsListStartAction(); })));
        this.GetForm$ = this.actions$.pipe(ofType(FormsListActionTypes.GET_FORM_SCHEMA), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} id
         * @return {?}
         */
        function (id) { return _this.service.get(id); })), map((/**
         * @param {?} formSchema
         * @return {?}
         */
        function (formSchema) { return new FormSchemaFechedAction(formSchema); })));
        this.get_forms_list$ = this.actions$.pipe(ofType(FormsListActionTypes.FORMS_LIST_START), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.service.getList(); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return new FormsListSucceedAction(res); })), catchError((/**
         * @return {?}
         */
        function () { return of(new FormsListFailedAction()); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUVOLG9CQUFvQixFQUVwQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQUVDLDBCQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUFoRyxpQkFBb0c7UUFBaEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR2hHLHdCQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QyxNQUFNLENBQU0sb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQzVDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksb0JBQW9CLEVBQUUsRUFBMUIsQ0FBMEIsRUFBQyxDQUN2QyxDQUFDO1FBR0YsYUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQU0sb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdCLFNBQVM7Ozs7UUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixFQUFDLEVBQ3JDLEdBQUc7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLEVBQXRDLENBQXNDLEVBQUMsQ0FDekQsQ0FBQztRQUdGLG9CQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM3QyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUF0QixDQUFzQixFQUFDLEVBQ2hELEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLEVBQS9CLENBQStCLEVBQUMsRUFDM0MsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUNqRCxDQUFDO0lBdEJpRyxDQUFDOztnQkFGcEcsVUFBVTs7OztnQkFqQkYsT0FBTztnQkFIUCxNQUFNO2dCQVFOLFdBQVc7O0lBaUJuQjtRQURDLE1BQU0sRUFBRTs7aUVBSVA7SUFHRjtRQURDLE1BQU0sRUFBRTs7c0RBTVA7SUFHRjtRQURDLE1BQU0sRUFBRTs7NkRBTVA7SUFDSCx1QkFBQztDQUFBLEFBekJELElBeUJDO1NBeEJZLGdCQUFnQjs7O0lBRzVCLCtDQUlFOztJQUVGLG9DQU1FOztJQUVGLDJDQU1FOzs7OztJQXRCVSxvQ0FBOEI7Ozs7O0lBQUUsa0NBQXNCOzs7OztJQUFFLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRGb3Jtc0xpc3RBY3Rpb24sXHJcblx0Rm9ybXNMaXN0QWN0aW9uVHlwZXMsXHJcblx0Rm9ybXNMaXN0QWN0aW9ucyxcclxuXHRGb3Jtc0xpc3RGYWlsZWRBY3Rpb24sXHJcblx0Rm9ybXNMaXN0U3RhcnRBY3Rpb24sXHJcblx0Rm9ybXNMaXN0U3VjY2VlZEFjdGlvbixcclxuXHRGb3JtU2NoZW1hRmVjaGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBGb3Jtc0xpc3RTdGFydEFjdGlvbigpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEdldEZvcm0kID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uKGZvcm1TY2hlbWEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldF9mb3Jtc19saXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHRcdG1hcChyZXMgPT4gbmV3IEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0KTtcclxufVxyXG4iXX0=