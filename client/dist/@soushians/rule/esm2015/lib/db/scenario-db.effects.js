/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { ScenariosListActionTypes, ScenariosListStartAction, ScenarioFechedAction } from "./scenario-db.actions";
import { ScenarioService } from "../services/scenario.service";
export class ScenariosDbEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(ScenariosListActionTypes.SCENARIOS_LIST), map((/**
         * @return {?}
         */
        () => new ScenariosListStartAction())));
        this.UpsertScenario$ = this.actions$.pipe(ofType(ScenariosListActionTypes.UPSERT), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => this.service.upsert(scenario))), map((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => new ScenarioFechedAction(scenario))));
    }
}
ScenariosDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScenariosDbEffects.ctorParameters = () => [
    { type: Actions },
    { type: ScenarioService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ScenariosDbEffects.prototype, "EditProfileRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ScenariosDbEffects.prototype, "UpsertScenario$", void 0);
if (false) {
    /** @type {?} */
    ScenariosDbEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    ScenariosDbEffects.prototype.UpsertScenario$;
    /**
     * @type {?}
     * @private
     */
    ScenariosDbEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ScenariosDbEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHL0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDOUIsWUFBb0IsUUFBc0IsRUFBVSxPQUF3QjtRQUF4RCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFHNUUsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsRUFDL0MsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx3QkFBd0IsRUFBRSxFQUFDLENBQ3pDLENBQUM7UUFHRixvQkFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQU0sd0JBQXdCLENBQUMsTUFBTSxDQUFDLEVBQzVDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0IsU0FBUzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFDcEQsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUNuRCxDQUFDO0lBZDZFLENBQUM7OztZQUZoRixVQUFVOzs7O1lBUEYsT0FBTztZQUtQLGVBQWU7O0FBT3ZCO0lBREMsTUFBTSxFQUFFOzsrREFJUDtBQUdGO0lBREMsTUFBTSxFQUFFOzsyREFNUDs7O0lBWkYsaURBSUU7O0lBRUYsNkNBTUU7Ozs7O0lBZFUsc0NBQThCOzs7OztJQUFFLHFDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24sIFNjZW5hcmlvRmVjaGVkQWN0aW9uIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVCksXHJcblx0XHRtYXAoKCkgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbigpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoc2NlbmFyaW8gPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChzY2VuYXJpbykpLFxyXG5cdFx0bWFwKHNjZW5hcmlvID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihzY2VuYXJpbykpXHJcblx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0U2NlbmFyaW8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuR0VUX1NDRU5BUklPKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgU2NlbmFyaW9GZWNoZWRBY3Rpb24ocnVsZSkpXHJcblx0Ly8gXHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBnZXRfcnVsZXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdC8vIFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdC8vIFx0KTtcclxufVxyXG4iXX0=