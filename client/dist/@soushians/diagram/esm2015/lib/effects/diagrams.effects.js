/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { DiagramService } from "../services/diagram.service";
import { GetDiagramsSucceed, GetDiagramsFailed, GetDiagramsStart } from "../actions/diagrams.actions";
import { of } from "rxjs";
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
            .pipe(map(res => new GetDiagramsSucceed(res)), catchError(() => of(new GetDiagramsFailed())))));
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
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL2RpYWdyYW1zLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEcsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcxQixNQUFNOzs7Ozs7SUFDTCxZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUF0RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjsrQkFHeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOzJCQUduRyxJQUFJLENBQUMsUUFBUTthQUN6QixNQUFNLEVBQUU7YUFDUixJQUFJLENBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixTQUFTLENBQUMsQ0FBQyxJQUFpQyxFQUFFLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLGNBQWM7YUFDakIsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDOUYsQ0FDRDtLQWY0Rzs7O1lBRjlHLFVBQVU7Ozs7WUFURixPQUFPO1lBSFAsTUFBTTtZQU9OLGNBQWM7OztJQVNyQixNQUFNLEVBQUU7Ozs7SUFHUixNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zU3VjY2VlZCwgR2V0RGlhZ3JhbXNGYWlsZWQsIEdldERpYWdyYW1zU3RhcnQgfSBmcm9tIFwiLi4vYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHREaWFncmFtUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZSgpLnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXREaWFncmFtc1N0YXJ0KCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0RGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldERpYWdyYW1zKClcclxuXHRcdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IEdldERpYWdyYW1zU3VjY2VlZChyZXMpKSwgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgR2V0RGlhZ3JhbXNGYWlsZWQoKSkpKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==