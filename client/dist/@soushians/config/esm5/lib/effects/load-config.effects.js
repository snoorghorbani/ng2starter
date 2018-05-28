/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services/config.service";
import { map, switchMap, catchError } from "rxjs/operators";
var LoadConfigEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} configService
     */
    function LoadConfigEffects(actions$, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.configService.getConfigs(); }), map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), catchError(function () { return Observable.of(new ConfigLoadedFailedAction()); }));
    }
    return LoadConfigEffects;
}());
export { LoadConfigEffects };
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
function LoadConfigEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    LoadConfigEffects.prototype.getConfigs$;
    /** @type {?} */
    LoadConfigEffects.prototype.actions$;
    /** @type {?} */
    LoadConfigEffects.prototype.configService;
}
//# sourceMappingURL=load-config.effects.js.map
