/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { DiagramService } from "../services/diagram.service";
import { GetDiagramsSucceed, GetDiagramsFailed, GetDiagramsStart } from "../actions/diagrams.actions";
import { of } from "rxjs";
var DiagramEffects = /** @class */ (function () {
    function DiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.pipe(ofType(), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new GetDiagramsStart(); })));
        this.getDiagram$ = this.actions$.pipe(ofType(), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this.diagramService
                .getDiagrams()
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new GetDiagramsSucceed(res); })), catchError((/**
             * @return {?}
             */
            function () { return of(new GetDiagramsFailed()); })));
        })));
    }
    DiagramEffects.decorators = [
        { type: Injectable }
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
    return DiagramEffects;
}());
export { DiagramEffects };
if (false) {
    /** @type {?} */
    DiagramEffects.prototype.DiagramRequest$;
    /** @type {?} */
    DiagramEffects.prototype.getDiagram$;
    /**
     * @type {?}
     * @private
     */
    DiagramEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DiagramEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DiagramEffects.prototype.diagramService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2RpYWdyYW1zLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUI7SUFFQyx3QkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsY0FBOEI7UUFBMUcsaUJBQThHO1FBQTFGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRzFHLG9CQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ25DLE1BQU0sRUFBTyxFQUNiLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdCLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksZ0JBQWdCLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUNuQyxDQUFDO1FBR0YsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSxFQUFPLEVBQ2IsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDN0IsU0FBUzs7OztRQUFDLFVBQUMsSUFBaUM7WUFDM0MsT0FBQSxLQUFJLENBQUMsY0FBYztpQkFDakIsV0FBVyxFQUFFO2lCQUNiLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixFQUFDLEVBQUUsVUFBVTs7O1lBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBRjlGLENBRThGLEVBQzlGLENBQ0QsQ0FBQztJQWxCMkcsQ0FBQzs7Z0JBRjlHLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFIUCxNQUFNO2dCQU9OLGNBQWM7O0lBVXRCO1FBREMsTUFBTSxFQUFFOzsyREFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOzt1REFTUDtJQUNILHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksY0FBYzs7O0lBRzFCLHlDQUtFOztJQUVGLHFDQVNFOzs7OztJQWxCVSxrQ0FBOEI7Ozs7O0lBQUUsZ0NBQXNCOzs7OztJQUFFLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc1N1Y2NlZWQsIEdldERpYWdyYW1zRmFpbGVkLCBHZXREaWFncmFtc1N0YXJ0IH0gZnJvbSBcIi4uL2FjdGlvbnMvZGlhZ3JhbXMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IEdldERpYWdyYW1zU3RhcnQoKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KCksXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0LmdldERpYWdyYW1zKClcclxuXHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBHZXREaWFncmFtc1N1Y2NlZWQocmVzKSksIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEdldERpYWdyYW1zRmFpbGVkKCkpKSlcclxuXHRcdClcclxuXHQpO1xyXG59XHJcbiJdfQ==