/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { ScenariosListActionTypes, ScenariosListStartAction, ScenarioFechedAction } from "./scenario-db.actions";
import { ScenarioService } from "../services/scenario.service";
export class ScenariosDbEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(ScenariosListActionTypes.SCENARIOS_LIST)
            .pipe(map(() => new ScenariosListStartAction()));
        this.UpsertScenario$ = this.actions$
            .ofType(ScenariosListActionTypes.UPSERT)
            .pipe(map(action => action.payload), switchMap(scenario => this.service.upsert(scenario)), map(scenario => new ScenarioFechedAction(scenario)));
    }
}
ScenariosDbEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ScenariosDbEffects.ctorParameters = () => [
    { type: Actions },
    { type: ScenarioService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ScenariosDbEffects.prototype, "EditProfileRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ScenariosDbEffects.prototype, "UpsertScenario$", void 0);
if (false) {
    /** @type {?} */
    ScenariosDbEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    ScenariosDbEffects.prototype.UpsertScenario$;
    /** @type {?} */
    ScenariosDbEffects.prototype.actions$;
    /** @type {?} */
    ScenariosDbEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM5QixZQUFvQixRQUFzQixFQUFVLE9BQXdCO1FBQXhELGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUU1RSwyQkFDc0IsSUFBSSxDQUFDLFFBQVE7YUFDakMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQzthQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEQsdUJBQ2tCLElBQUksQ0FBQyxRQUFRO2FBQzdCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUM7YUFDdkMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNuRCxDQUFDO0tBZDZFOzs7WUFGaEYsVUFBVTs7OztZQVBGLE9BQU87WUFLUCxlQUFlOzs7SUFNdEIsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24sIFNjZW5hcmlvRmVjaGVkQWN0aW9uIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1QpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKHNjZW5hcmlvID0+IHRoaXMuc2VydmljZS51cHNlcnQoc2NlbmFyaW8pKSxcclxuXHRcdFx0bWFwKHNjZW5hcmlvID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihzY2VuYXJpbykpXHJcblx0XHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU8pXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiJdfQ==