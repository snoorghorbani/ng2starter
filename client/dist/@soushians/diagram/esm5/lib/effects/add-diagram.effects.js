/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { DiagramService } from "../services/diagram.service";
import { AddDiagramActionTypes, AddDiagramActionStart, AddDiagramActionSucceed, AddDiagramActionFailed, DataLoadedAction, StructureDefinitionStartAction, GenerateDiagramAction, StructureDefinitionFinishedAction } from "../actions/add-diagram.actions";
var AddDiagramEffects = /** @class */ (function () {
    function AddDiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.addDiagramRequest$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new AddDiagramActionStart(data); })));
        this.addDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this.diagramService
                .addDiagram(data)
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new AddDiagramActionSucceed(res); })), catchError((/**
             * @return {?}
             */
            function () { return of(new AddDiagramActionFailed()); })));
        })));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.router.navigate(["diagrams"]);
            return Observable.empty();
        })));
        this.HAVE_ENDPOINT$ = this.actions$.pipe(ofType(AddDiagramActionTypes.HAVE_ENDPOINT), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new DataLoadedAction(data); })));
        this.DATA_LOADED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DATA_LOADED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new StructureDefinitionStartAction(data); })));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new GenerateDiagramAction(data); })));
        this.STRUCTURE_DEFINITION_START$ = this.actions$.pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.getDataStructure().map((/**
         * @return {?}
         */
        function () { return new StructureDefinitionFinishedAction(data); })); })));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.calculateColumns().map((/**
         * @return {?}
         */
        function () { return new StructureDefinitionFinishedAction(data); })); })));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
            .pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.calculateColumns().map((/**
         * @return {?}
         */
        function () { return new GenerateDiagramAction(data); })); })));
        this.GenerateDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.GENERATE_DIAGRAM), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.generateDiagram(); })));
    }
    AddDiagramEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddDiagramEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: DiagramService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "addDiagramRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "addDiagram$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "ADD_DIAGRAM_SUCCEED$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "HAVE_ENDPOINT$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "DATA_LOADED$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "DIAGRAM_CONFIG_CHANGED$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_START$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "COLUMNS_MAPPING_CHANGED$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_END$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "GenerateDiagram$", void 0);
    return AddDiagramEffects;
}());
export { AddDiagramEffects };
if (false) {
    /** @type {?} */
    AddDiagramEffects.prototype.addDiagramRequest$;
    /** @type {?} */
    AddDiagramEffects.prototype.addDiagram$;
    /** @type {?} */
    AddDiagramEffects.prototype.ADD_DIAGRAM_SUCCEED$;
    /** @type {?} */
    AddDiagramEffects.prototype.HAVE_ENDPOINT$;
    /** @type {?} */
    AddDiagramEffects.prototype.DATA_LOADED$;
    /** @type {?} */
    AddDiagramEffects.prototype.DIAGRAM_CONFIG_CHANGED$;
    /** @type {?} */
    AddDiagramEffects.prototype.STRUCTURE_DEFINITION_START$;
    /** @type {?} */
    AddDiagramEffects.prototype.COLUMNS_MAPPING_CHANGED$;
    /** @type {?} */
    AddDiagramEffects.prototype.STRUCTURE_DEFINITION_END$;
    /** @type {?} */
    AddDiagramEffects.prototype.GenerateDiagram$;
    /**
     * @type {?}
     * @private
     */
    AddDiagramEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AddDiagramEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddDiagramEffects.prototype.diagramService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFDTixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUM5QixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEM7SUFFQywyQkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsY0FBOEI7UUFBMUcsaUJBQThHO1FBQTFGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRzFHLHVCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ3pDLEtBQUssQ0FBVyxTQUFTLENBQUMsRUFDMUIsR0FBRzs7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Q0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7K0RBSzFCO0lBQ0gsd0JBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQWpGWSxpQkFBaUI7OztJQUc3QiwrQ0FLRTs7SUFFRix3Q0FTRTs7SUFFRixpREFRRTs7SUFFRiwyQ0FLRTs7SUFFRix5Q0FLRTs7SUFFRixvREFLRTs7SUFFRix3REFLRTs7SUFFRixxREFLRTs7SUFFRixzREFPRzs7SUFFSCw2Q0FLRTs7Ozs7SUEvRVUscUNBQThCOzs7OztJQUFFLG1DQUFzQjs7Ozs7SUFBRSwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRBZGREaWFncmFtQWN0aW9uVHlwZXMsXHJcblx0QWRkRGlhZ3JhbUFjdGlvblN0YXJ0LFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25GYWlsZWQsXHJcblx0RGF0YUxvYWRlZEFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24sXHJcblx0R2VuZXJhdGVEaWFncmFtQWN0aW9uLFxyXG5cdFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNKSxcclxuXHRcdHBsdWNrPGFueSwgYW55PihcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0KGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFkZERpYWdyYW0kID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVCksXHJcblx0XHRwbHVjazxhbnksIGFueT4oXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0dGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC5hZGREaWFncmFtKGRhdGEpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQocmVzKSksIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEFkZERpYWdyYW1BY3Rpb25GYWlsZWQoKSkpKVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJkaWFncmFtc1wiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRIQVZFX0VORFBPSU5UJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbihkYXRhKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREQVRBX0xPQURFRCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24oZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IEdlbmVyYXRlRGlhZ3JhbUFjdGlvbihkYXRhKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUKSxcclxuXHRcdHBsdWNrPGFueSwgYW55PihcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmdldERhdGFTdHJ1Y3R1cmUoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Q09MVU1OU19NQVBQSU5HX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCksXHJcblx0XHRwbHVjazxhbnksIGFueT4oXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQvLyAuc2tpcFVudGlsKHRoaXMuYWN0aW9ucyQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRCkpXHJcblx0XHQucGlwZShcclxuXHRcdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQpLFxyXG5cdFx0XHRwbHVjazxhbnksIGFueT4oXCJwYXlsb2FkXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmNhbGN1bGF0ZUNvbHVtbnMoKS5tYXAoKCkgPT4gbmV3IEdlbmVyYXRlRGlhZ3JhbUFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0R2VuZXJhdGVEaWFncmFtJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuR0VORVJBVEVfRElBR1JBTSksXHJcblx0XHRwbHVjazxhbnksIGFueT4oXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKGRhdGEgPT4gZGF0YS5nZW5lcmF0ZURpYWdyYW0oKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==