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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1jb25maWcuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBSTNELDJCQUFvQixRQUFzQixFQUFVLGFBQTRCO1FBQWhGLGlCQUFvRjtRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7MkJBR2xFLElBQUksQ0FBQyxRQUFRO2FBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDckMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQWdDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUEvQixDQUErQixDQUFDLEVBQ2hGLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLEVBQXRDLENBQXNDLENBQUMsRUFDdEQsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSx3QkFBd0IsRUFBRSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FDcEQ7S0FWa0Y7O2dCQUZwRixVQUFVOzs7O2dCQVJGLE9BQU87Z0JBSVAsYUFBYTs7O1FBUXBCLE1BQU0sRUFBRTs7OzRCQWZWOztTQVlhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdBY3Rpb25UeXBlcywgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkQ29uZmlnRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldENvbmZpZ3MkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUylcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3MoKSksXHJcblx0XHRcdG1hcChjb25maWdzID0+IG5ldyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uKGNvbmZpZ3MpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iXX0=