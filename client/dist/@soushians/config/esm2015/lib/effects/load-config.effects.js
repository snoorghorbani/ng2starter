/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services/config.service";
import { map, switchMap, catchError } from "rxjs/operators";
export class LoadConfigEffects {
    /**
     * @param {?} actions$
     * @param {?} configService
     */
    constructor(actions$, configService) {
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$.pipe(ofType(ConfigActionTypes.GET_CONFIGS), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.configService.getConfigs())), map((/**
         * @param {?} configs
         * @return {?}
         */
        configs => new ConfigLoadedSucceedAction(configs))), catchError((/**
         * @return {?}
         */
        () => of(new ConfigLoadedFailedAction()))));
    }
}
LoadConfigEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoadConfigEffects.ctorParameters = () => [
    { type: Actions },
    { type: ConfigService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], LoadConfigEffects.prototype, "getConfigs$", void 0);
if (false) {
    /** @type {?} */
    LoadConfigEffects.prototype.getConfigs$;
    /**
     * @type {?}
     * @private
     */
    LoadConfigEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    LoadConfigEffects.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1jb25maWcuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzdCLFlBQW9CLFFBQXNCLEVBQVUsYUFBNEI7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBR2hGLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLE1BQU0sQ0FBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsRUFDMUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM3QixTQUFTOzs7O1FBQUMsQ0FBQyxJQUFnQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUFDLEVBQ2hGLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDdEQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksd0JBQXdCLEVBQUUsQ0FBQyxFQUFDLENBQ3BELENBQUM7SUFUaUYsQ0FBQzs7O1lBRnBGLFVBQVU7Ozs7WUFSRixPQUFPO1lBSVAsYUFBYTs7QUFTckI7SUFEQyxNQUFNLEVBQUU7O3NEQU9QOzs7SUFQRix3Q0FPRTs7Ozs7SUFUVSxxQ0FBOEI7Ozs7O0lBQUUsMENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnQWN0aW9uVHlwZXMsIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24sIENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZENvbmZpZ0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRDb25maWdzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KENvbmZpZ0FjdGlvblR5cGVzLkdFVF9DT05GSUdTKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3MoKSksXHJcblx0XHRtYXAoY29uZmlncyA9PiBuZXcgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbihjb25maWdzKSksXHJcblx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24oKSkpXHJcblx0KTtcclxufVxyXG4iXX0=