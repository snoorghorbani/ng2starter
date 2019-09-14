/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Actions } from "@ngrx/effects";
import { FormService } from "../services/form.service";
var FormEffects = /** @class */ (function () {
    function FormEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
    }
    FormEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormService }
    ]; };
    return FormEffects;
}());
export { FormEffects };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FormEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    FormEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1jb250YWluZXIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFFLE9BQU8sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQ7SUFFQyxxQkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsT0FBb0I7UUFBNUUsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQzs7Z0JBRnBHLFVBQVU7Ozs7Z0JBSkYsT0FBTztnQkFOUCxNQUFNO2dCQVFOLFdBQVc7O0lBS3BCLGtCQUFDO0NBQUEsQUFIRCxJQUdDO1NBRlksV0FBVzs7Ozs7O0lBQ1gsK0JBQThCOzs7OztJQUFFLDZCQUFzQjs7Ozs7SUFBRSw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG59XHJcbiJdfQ==