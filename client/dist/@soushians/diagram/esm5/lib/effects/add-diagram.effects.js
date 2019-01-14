/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.addDiagramRequest$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM), pluck("payload"), map(function (data) { return new AddDiagramActionStart(data); }));
        this.addDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_START), pluck("payload"), switchMap(function (data) {
            return _this.diagramService
                .addDiagram(data)
                .pipe(map(function (res) { return new AddDiagramActionSucceed(res); }), catchError(function () { return of(new AddDiagramActionFailed()); }));
        }));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED), pluck("payload"), map(function (data) {
            _this.router.navigate(["diagrams"]);
            return Observable.empty();
        }));
        this.HAVE_ENDPOINT$ = this.actions$.pipe(ofType(AddDiagramActionTypes.HAVE_ENDPOINT), pluck("payload"), map(function (data) { return new DataLoadedAction(data); }));
        this.DATA_LOADED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DATA_LOADED), pluck("payload"), map(function (data) { return new StructureDefinitionStartAction(data); }));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED), pluck("payload"), map(function (data) { return new GenerateDiagramAction(data); }));
        this.STRUCTURE_DEFINITION_START$ = this.actions$.pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START), pluck("payload"), switchMap(function (data) { return data.getDataStructure().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED), pluck("payload"), switchMap(function (data) { return data.calculateColumns().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
            .pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END), pluck("payload"), switchMap(function (data) { return data.calculateColumns().map(function () { return new GenerateDiagramAction(data); }); }));
        this.GenerateDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.GENERATE_DIAGRAM), pluck("payload"), map(function (data) { return data.generateDiagram(); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFDTixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUM5QixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEM7SUFFQywyQkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsY0FBOEI7UUFBMUcsaUJBQThHO1FBQTFGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRzFHLHVCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ3pDLEtBQUssQ0FBVyxTQUFTLENBQUMsRUFDMUIsR0FBRyxD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QjtJQUNILHdCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FqRlksaUJBQWlCOzs7SUFHN0IsK0NBS0U7O0lBRUYsd0NBU0U7O0lBRUYsaURBUUU7O0lBRUYsMkNBS0U7O0lBRUYseUNBS0U7O0lBRUYsb0RBS0U7O0lBRUYsd0RBS0U7O0lBRUYscURBS0U7O0lBRUYsc0RBT0c7O0lBRUgsNkNBS0U7Ozs7O0lBL0VVLHFDQUE4Qjs7Ozs7SUFBRSxtQ0FBc0I7Ozs7O0lBQUUsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0QWRkRGlhZ3JhbUFjdGlvblR5cGVzLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdGFydCxcclxuXHRBZGREaWFncmFtQWN0aW9uU3VjY2VlZCxcclxuXHRBZGREaWFncmFtQWN0aW9uRmFpbGVkLFxyXG5cdERhdGFMb2FkZWRBY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uLFxyXG5cdEdlbmVyYXRlRGlhZ3JhbUFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTSksXHJcblx0XHRwbHVjazxhbnksIGFueT4oXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdGFydChkYXRhKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQpLFxyXG5cdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQuYWRkRGlhZ3JhbShkYXRhKVxyXG5cdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkKHJlcykpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBBZGREaWFncmFtQWN0aW9uRmFpbGVkKCkpKSlcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0QUREX0RJQUdSQU1fU1VDQ0VFRCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiZGlhZ3JhbXNcIiBdKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0SEFWRV9FTkRQT0lOVCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24oZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0REFUQV9MT0FERUQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERJQUdSQU1fQ09ORklHX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5ESUFHUkFNX0NPTkZJR19DSEFOR0VEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCksXHJcblx0XHRwbHVjazxhbnksIGFueT4oXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5nZXREYXRhU3RydWN0dXJlKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQpLFxyXG5cdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuY2FsY3VsYXRlQ29sdW1ucygpLm1hcCgoKSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uKGRhdGEpKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Ly8gLnNraXBVbnRpbCh0aGlzLmFjdGlvbnMkLm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQpKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EKSxcclxuXHRcdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEdlbmVyYXRlRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU0pLFxyXG5cdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IGRhdGEuZ2VuZXJhdGVEaWFncmFtKCkpXHJcblx0KTtcclxufVxyXG4iXX0=