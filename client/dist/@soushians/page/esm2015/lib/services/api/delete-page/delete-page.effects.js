/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PageService } from "../../page.service";
import { DeletePageSucceedAction, DeletePageFailedAction } from "./delete-page.actions";
export class DeletePageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[PAGE][API][DELETE] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.delete(payload)), map((res) => new DeletePageSucceedAction(res)), catchError((err) => of(new DeletePageFailedAction(err))));
    }
}
DeletePageApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeletePageApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DeletePageApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    DeletePageApiEffects.prototype.start$;
    /** @type {?} */
    DeletePageApiEffects.prototype.actions$;
    /** @type {?} */
    DeletePageApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBhZ2UuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUdOLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsTUFBTSx1QkFBdUIsQ0FBQztBQUcvQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUNoQyxZQUFvQixRQUFvQyxFQUFVLE9BQW9CO1FBQWxFLGFBQVEsR0FBUixRQUFRLENBQTRCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUV0RixjQUNTLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0seUNBQWdDO2FBQ3RDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDL0IsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNwRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ3hELENBQUM7S0FWdUY7OztZQUYxRixVQUFVOzs7O1lBWkYsT0FBTztZQUlQLFdBQVc7OztJQVlsQixNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0REVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLFxyXG5cdERlbGV0ZVBhZ2VBY3Rpb25zLFxyXG5cdERlbGV0ZVBhZ2VTdWNjZWVkQWN0aW9uLFxyXG5cdERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9kZWxldGUtcGFnZS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxEZWxldGVQYWdlQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmRlbGV0ZShwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==