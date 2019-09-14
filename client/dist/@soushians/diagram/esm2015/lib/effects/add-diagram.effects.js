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
        this.addDiagramRequest$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new AddDiagramActionStart(data))));
        this.addDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.diagramService
            .addDiagram(data)
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new AddDiagramActionSucceed(res))), catchError((/**
         * @return {?}
         */
        () => of(new AddDiagramActionFailed())))))));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.router.navigate(["diagrams"]);
            return Observable.empty();
        })));
        this.HAVE_ENDPOINT$ = this.actions$.pipe(ofType(AddDiagramActionTypes.HAVE_ENDPOINT), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new DataLoadedAction(data))));
        this.DATA_LOADED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DATA_LOADED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new StructureDefinitionStartAction(data))));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new GenerateDiagramAction(data))));
        this.STRUCTURE_DEFINITION_START$ = this.actions$.pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => data.getDataStructure().map((/**
         * @return {?}
         */
        () => new StructureDefinitionFinishedAction(data))))));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => data.calculateColumns().map((/**
         * @return {?}
         */
        () => new StructureDefinitionFinishedAction(data))))));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
            .pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => data.calculateColumns().map((/**
         * @return {?}
         */
        () => new GenerateDiagramAction(data))))));
        this.GenerateDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.GENERATE_DIAGRAM), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.generateDiagram())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFDTixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUM5QixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBQzdCLFlBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLGNBQThCO1FBQXRGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRzFHLHVCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ3pDLEtBQUssQ0FBVyxTQUFTLENBQUMsRUFD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LHFEQUtFOztJQUVGLHNEQU9HOztJQUVILDZDQUtFOzs7OztJQS9FVSxxQ0FBOEI7Ozs7O0lBQUUsbUNBQXNCOzs7OztJQUFFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEFkZERpYWdyYW1BY3Rpb25UeXBlcyxcclxuXHRBZGREaWFncmFtQWN0aW9uU3RhcnQsXHJcblx0QWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQsXHJcblx0QWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCxcclxuXHREYXRhTG9hZGVkQWN0aW9uLFxyXG5cdFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbixcclxuXHRHZW5lcmF0ZURpYWdyYW1BY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWRkLWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFkZERpYWdyYW1SZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU0pLFxyXG5cdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBBZGREaWFncmFtQWN0aW9uU3RhcnQoZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUKSxcclxuXHRcdHBsdWNrPGFueSwgYW55PihcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0LmFkZERpYWdyYW0oZGF0YSlcclxuXHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBBZGREaWFncmFtQWN0aW9uU3VjY2VlZChyZXMpKSwgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCgpKSkpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImRpYWdyYW1zXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEhBVkVfRU5EUE9JTlQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5IQVZFX0VORFBPSU5UKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBEYXRhTG9hZGVkQWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERBVEFfTE9BREVEJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbihkYXRhKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRESUFHUkFNX0NPTkZJR19DSEFOR0VEJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQpLFxyXG5cdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuZ2V0RGF0YVN0cnVjdHVyZSgpLm1hcCgoKSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uKGRhdGEpKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTlNfTUFQUElOR19DSEFOR0VEKSxcclxuXHRcdHBsdWNrPGFueSwgYW55PihcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmNhbGN1bGF0ZUNvbHVtbnMoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fRU5EJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC8vIC5za2lwVW50aWwodGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRvZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCksXHJcblx0XHRcdHBsdWNrPGFueSwgYW55PihcInBheWxvYWRcIiksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuY2FsY3VsYXRlQ29sdW1ucygpLm1hcCgoKSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRHZW5lcmF0ZURpYWdyYW0kID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNKSxcclxuXHRcdHBsdWNrPGFueSwgYW55PihcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiBkYXRhLmdlbmVyYXRlRGlhZ3JhbSgpKVxyXG5cdCk7XHJcbn1cclxuIl19