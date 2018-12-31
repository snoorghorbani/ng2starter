/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";
import { DiagramService } from "../services/diagram.service";
import { AddDiagramActionTypes, AddDiagramActionStart, AddDiagramActionSucceed, AddDiagramActionFailed, DataLoadedAction, StructureDefinitionStartAction, GenerateDiagramAction, StructureDefinitionFinishedAction } from "../actions/add-diagram.actions";
export class AddDiagramEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    constructor(actions$, router, diagramService) {
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.addDiagramRequest$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM)
            .pipe(map(action => action.payload), map(data => new AddDiagramActionStart(data)));
        this.addDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
            .pipe(map(action => action.payload), switchMap((data) => this.diagramService
            .addDiagram(data)
            .pipe(map(res => new AddDiagramActionSucceed(res)), catchError(() => of(new AddDiagramActionFailed())))));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED).pipe(map(action => action.payload), map(data => {
            this.router.navigate(["diagrams"]);
            return Observable.empty();
        }));
        this.HAVE_ENDPOINT$ = this.actions$
            .ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
            .pipe(map(action => action.payload), map(data => new DataLoadedAction(data)));
        this.DATA_LOADED$ = this.actions$
            .ofType(AddDiagramActionTypes.DATA_LOADED)
            .pipe(map(action => action.payload), map(data => new StructureDefinitionStartAction(data)));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
            .pipe(map(action => action.payload), map(data => new GenerateDiagramAction(data)));
        this.STRUCTURE_DEFINITION_START$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
            .pipe(map(action => action.payload), switchMap(data => data.getDataStructure().map(() => new StructureDefinitionFinishedAction(data))));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
            .pipe(map(action => action.payload), switchMap(data => data.calculateColumns().map(() => new StructureDefinitionFinishedAction(data))));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
            // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
            .pipe(map(action => action.payload), switchMap(data => data.calculateColumns().map(() => new GenerateDiagramAction(data))));
        this.GenerateDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
            .pipe(map(action => action.payload), map(data => data.generateDiagram()));
    }
}
AddDiagramEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddDiagramEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
];
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
    /** @type {?} */
    AddDiagramEffects.prototype.actions$;
    /** @type {?} */
    AddDiagramEffects.prototype.router;
    /** @type {?} */
    AddDiagramEffects.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RCxPQUFPLEVBQ04scUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQiw4QkFBOEIsRUFDOUIscUJBQXFCLEVBQ3JCLGlDQUFpQyxFQUNqQyxNQUFNLGdDQUFnQyxDQUFDO0FBR3hDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM3QixZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUF0RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUUxRywwQkFDcUIsSUFBSSxDQUFDLFFBQVE7YUFDaEMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQzthQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FB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b250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEFkZERpYWdyYW1BY3Rpb25UeXBlcyxcclxuXHRBZGREaWFncmFtQWN0aW9uU3RhcnQsXHJcblx0QWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQsXHJcblx0QWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCxcclxuXHREYXRhTG9hZGVkQWN0aW9uLFxyXG5cdFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbixcclxuXHRHZW5lcmF0ZURpYWdyYW1BY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWRkLWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFkZERpYWdyYW1SZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBBZGREaWFncmFtQWN0aW9uU3RhcnQoZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHQuYWRkRGlhZ3JhbShkYXRhKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBBZGREaWFncmFtQWN0aW9uRmFpbGVkKCkpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0QUREX0RJQUdSQU1fU1VDQ0VFRCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0bWFwKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiZGlhZ3JhbXNcIiBdKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0SEFWRV9FTkRQT0lOVCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5IQVZFX0VORFBPSU5UKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBEYXRhTG9hZGVkQWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERBVEFfTE9BREVEJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5ESUFHUkFNX0NPTkZJR19DSEFOR0VEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuZ2V0RGF0YVN0cnVjdHVyZSgpLm1hcCgoKSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTlNfTUFQUElOR19DSEFOR0VEKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmNhbGN1bGF0ZUNvbHVtbnMoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EKVxyXG5cdFx0Ly8gLnNraXBVbnRpbCh0aGlzLmFjdGlvbnMkLm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQpKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmNhbGN1bGF0ZUNvbHVtbnMoKS5tYXAoKCkgPT4gbmV3IEdlbmVyYXRlRGlhZ3JhbUFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0R2VuZXJhdGVEaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gZGF0YS5nZW5lcmF0ZURpYWdyYW0oKSkpO1xyXG59XHJcbiJdfQ==