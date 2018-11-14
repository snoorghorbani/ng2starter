/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services/config.service";
import { map, switchMap, catchError } from "rxjs/operators";
var LoadConfigEffects = /** @class */ (function () {
    function LoadConfigEffects(actions$, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.configService.getConfigs(); }), map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), catchError(function () { return of(new ConfigLoadedFailedAction()); }));
    }
    LoadConfigEffects.decorators = [
        { type: Injectable },
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
    /** @type {?} */
    LoadConfigEffects.prototype.actions$;
    /** @type {?} */
    LoadConfigEffects.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1jb25maWcuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBSTNELDJCQUFvQixRQUFzQixFQUFVLGFBQTRCO1FBQWhGLGlCQUFvRjtRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFaEYsbUJBQ2MsSUFBSSxDQUFDLFFBQVE7YUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQzthQUNyQyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsU0FBUyxDQUFDLFVBQUMsSUFBZ0MsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQS9CLENBQStCLENBQUMsRUFDaEYsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsSUFBSSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxFQUN0RCxVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixFQUFFLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUNwRCxDQUFDO0tBVmlGOztnQkFGcEYsVUFBVTs7OztnQkFSRixPQUFPO2dCQUlQLGFBQWE7OztRQVFwQixNQUFNLEVBQUU7Ozs0QkFmVjs7U0FZYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnQWN0aW9uVHlwZXMsIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24sIENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZENvbmZpZ0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRDb25maWdzJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1MpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdzKCkpLFxyXG5cdFx0XHRtYXAoY29uZmlncyA9PiBuZXcgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbihjb25maWdzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIl19