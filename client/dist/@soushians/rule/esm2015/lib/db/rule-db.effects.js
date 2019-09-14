/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { RulesListActionTypes, RulesListStartAction } from "./rule-db.actions";
import { map } from "rxjs/operators";
export class RulesListEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(RulesListActionTypes.RULES_LIST), map((/**
         * @return {?}
         */
        () => new RulesListStartAction())));
    }
}
RulesListEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RulesListEffects.ctorParameters = () => [
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], RulesListEffects.prototype, "EditProfileRequest$", void 0);
if (false) {
    /** @type {?} */
    RulesListEffects.prototype.EditProfileRequest$;
    /**
     * @type {?}
     * @private
     */
    RulesListEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzVCLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHMUMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFDdkMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxFQUFDLENBQ3JDLENBQUM7SUFOMkMsQ0FBQzs7O1lBRjlDLFVBQVU7Ozs7WUFORixPQUFPOztBQVdmO0lBREMsTUFBTSxFQUFFOzs2REFJUDs7O0lBSkYsK0NBSUU7Ozs7O0lBTlUsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlc0xpc3RBY3Rpb25UeXBlcywgUnVsZXNMaXN0U3RhcnRBY3Rpb24gfSBmcm9tIFwiLi9ydWxlLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVCksXHJcblx0XHRtYXAoKCkgPT4gbmV3IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uKCkpXHJcblx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0UnVsZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgUnVsZUZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFJ1bGVzTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIl19