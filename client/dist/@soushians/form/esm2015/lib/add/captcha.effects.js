/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { CaptchaActionTypes, GetCaptchaSucceedAction, GetCaptchaFailedAction, GetCaptchaStartAction } from "./captcha.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { FormCaptchaService } from "../services/form-captcha.service";
export class CaptchaEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.GetCaptcha$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA)
            .pipe(map(action => action.payload), map(data => new GetCaptchaStartAction(data)));
        this.AddFormStart$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.getCaptcha()), map(res => new GetCaptchaSucceedAction()), catchError(() => of(new GetCaptchaFailedAction())));
    }
}
CaptchaEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CaptchaEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormCaptchaService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CaptchaEffects.prototype, "GetCaptcha$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CaptchaEffects.prototype, "AddFormStart$", void 0);
if (false) {
    /** @type {?} */
    CaptchaEffects.prototype.GetCaptcha$;
    /** @type {?} */
    CaptchaEffects.prototype.AddFormStart$;
    /** @type {?} */
    CaptchaEffects.prototype.actions$;
    /** @type {?} */
    CaptchaEffects.prototype.router;
    /** @type {?} */
    CaptchaEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLeEMsT0FBTyxFQUNOLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3RFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDMUIsWUFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsT0FBMkI7UUFBbkYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUV2RyxtQkFDYyxJQUFJLENBQUMsUUFBUTthQUN6QixNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEYscUJBQ2dCLElBQUksQ0FBQyxRQUFRO2FBQzNCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUM1QyxJQUFJLENBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixTQUFTLENBQUMsQ0FBQyxJQUE2QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQ3ZFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksdUJBQXVCLEVBQUUsQ0FBQyxFQUN6QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQ2xELENBQUM7S0Fmd0c7OztZQUYzRyxVQUFVOzs7O1lBZkYsT0FBTztZQUhQLE1BQU07WUFnQk4sa0JBQWtCOzs7SUFNekIsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRDYXB0Y2hhQWN0aW9uVHlwZXMsXHJcblx0R2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24sXHJcblx0R2V0Q2FwdGNoYUZhaWxlZEFjdGlvbixcclxuXHRHZXRDYXB0Y2hhU3RhcnRBY3Rpb25cclxufSBmcm9tIFwiLi9jYXB0Y2hhLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1DYXB0Y2hhU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0R2V0Q2FwdGNoYSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFkZEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmdldENhcHRjaGEoKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEdldENhcHRjaGFTdWNjZWVkQWN0aW9uKCkpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iXX0=