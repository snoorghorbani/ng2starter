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
export class DiagramEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    constructor(actions$, router, diagramService) {
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.ofType().pipe(map(action => action.payload), map(data => new GetDiagramsStart()));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(map(action => action.payload), switchMap((data) => this.diagramService
            .getDiagrams()
            .pipe(map(res => new GetDiagramsSucceed(res)), catchError(() => Observable.of(new GetDiagramsFailed())))));
    }
}
DiagramEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2RpYWdyYW1zLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFvQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJN0QsTUFBTTs7Ozs7O0lBQ0wsWUFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsY0FBOEI7UUFBdEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7K0JBR3hGLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQzsyQkFHbkcsSUFBSSxDQUFDLFFBQVE7YUFDekIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLENBQUMsSUFBaUMsRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxjQUFjO2FBQ2pCLFdBQVcsRUFBRTthQUNiLElBQUksQ0FDSixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3ZDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQ3hELENBQ0YsQ0FDRDtLQWxCNEc7OztZQUY5RyxVQUFVOzs7O1lBUkYsT0FBTztZQUhQLE1BQU07WUFRTixjQUFjOzs7SUFPckIsTUFBTSxFQUFFOzs7O0lBR1IsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtc0FjdGlvblR5cGVzLCBHZXREaWFncmFtcywgR2V0RGlhZ3JhbXNTdGFydCwgR2V0RGlhZ3JhbXNTdWNjZWVkLCBHZXREaWFncmFtc0ZhaWxlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwsIEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoKS5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2V0RGlhZ3JhbXNTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldERpYWdyYW0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZSgpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXREaWFncmFtcygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgR2V0RGlhZ3JhbXNTdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEdldERpYWdyYW1zRmFpbGVkKCkpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==