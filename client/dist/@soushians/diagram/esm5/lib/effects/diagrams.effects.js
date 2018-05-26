/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { GetDiagramsStart, GetDiagramsSucceed, GetDiagramsFailed } from "../actions";
import { DiagramService } from "../services/diagram.service";
var DiagramEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    function DiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.ofType().pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetDiagramsStart(); }));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.diagramService
            .getDiagrams()
            .pipe(map(function (res) { return new GetDiagramsSucceed(res); }), catchError(function () { return Observable.of(new GetDiagramsFailed()); })); }));
    }
    return DiagramEffects;
}());
export { DiagramEffects };
DiagramEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
]; };
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DiagramEffects.prototype, "DiagramRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DiagramEffects.prototype, "getDiagram$", void 0);
function DiagramEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramEffects.prototype.DiagramRequest$;
    /** @type {?} */
    DiagramEffects.prototype.getDiagram$;
    /** @type {?} */
    DiagramEffects.prototype.actions$;
    /** @type {?} */
    DiagramEffects.prototype.router;
    /** @type {?} */
    DiagramEffects.prototype.diagramService;
}
//# sourceMappingURL=diagrams.effects.js.map
