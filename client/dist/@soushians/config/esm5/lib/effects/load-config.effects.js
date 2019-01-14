/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services/config.service";
import { map, switchMap, catchError } from "rxjs/operators";
var LoadConfigEffects = /** @class */ (function () {
    function LoadConfigEffects(actions$, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$.pipe(ofType(ConfigActionTypes.GET_CONFIGS), map(function (action) { return action.payload; }), switchMap(function (data) { return _this.configService.getConfigs(); }), map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), catchError(function () { return of(new ConfigLoadedFailedAction()); }));
    }
    LoadConfigEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoadConfigEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ConfigService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LoadConfigEffects.prototype, "getConfigs$", void 0);
    return LoadConfigEffects;
}());
export { LoadConfigEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1jb25maWcuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVEO0lBRUMsMkJBQW9CLFFBQXNCLEVBQVUsYUFBNEI7UUFBaEYsaUJBQW9GO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUdoRixnQkFBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQixNQUFNLENBQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDLEVBQzFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQWdDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUEvQixDQUErQixDQUFDLEVBQ2hGLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLEVBQXRDLENBQXNDLENBQUMsRUFDdEQsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSx3QkFBd0IsRUFBRSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FDcEQsQ0FBQztJQVRpRixDQUFDOztnQkFGcEYsVUFBVTs7OztnQkFSRixPQUFPO2dCQUlQLGFBQWE7O0lBU3JCO1FBREMsTUFBTSxFQUFFOzswREFPUDtJQUNILHdCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksaUJBQWlCOzs7SUFHN0Isd0NBT0U7Ozs7O0lBVFUscUNBQThCOzs7OztJQUFFLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ0FjdGlvblR5cGVzLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uLCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldENvbmZpZ3NBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRDb25maWdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0Q29uZmlncyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUyksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdzKCkpLFxyXG5cdFx0bWFwKGNvbmZpZ3MgPT4gbmV3IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24oY29uZmlncykpLFxyXG5cdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uKCkpKVxyXG5cdCk7XHJcbn1cclxuIl19