/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, pluck } from "rxjs/operators";
import { ScenariosListActionTypes, ScenariosListStartAction, ScenarioFechedAction } from "./scenario-db.actions";
import { ScenarioService } from "../services/scenario.service";
var ScenariosDbEffects = /** @class */ (function () {
    function ScenariosDbEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(ScenariosListActionTypes.SCENARIOS_LIST), map(function () { return new ScenariosListStartAction(); }));
        this.UpsertScenario$ = this.actions$.pipe(ofType(ScenariosListActionTypes.UPSERT), pluck("payload"), switchMap(function (scenario) { return _this.service.upsert(scenario); }), map(function (scenario) { return new ScenarioFechedAction(scenario); }));
    }
    ScenariosDbEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ScenariosDbEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ScenarioService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ScenariosDbEffects.prototype, "EditProfileRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ScenariosDbEffects.prototype, "UpsertScenario$", void 0);
    return ScenariosDbEffects;
}());
export { ScenariosDbEffects };
if (false) {
    /** @type {?} */
    ScenariosDbEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    ScenariosDbEffects.prototype.UpsertScenario$;
    /**
     * @type {?}
     * @private
     */
    ScenariosDbEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ScenariosDbEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRy9EO0lBRUMsNEJBQW9CLFFBQXNCLEVBQVUsT0FBd0I7UUFBNUUsaUJBQWdGO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUc1RSx3QkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxFQUMvQyxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksd0JBQXdCLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUN6QyxDQUFDO1FBR0Ysb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxFQUN2QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFNBQVMsQ0FBQyxVQUFDLFFBQTBCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxFQUN4RSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQ25ELENBQUM7SUFkNkUsQ0FBQzs7Z0JBRmhGLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFLUCxlQUFlOztJQVF2QjtRQURDLE1BQU0sRUFBRTs7bUVBSVA7SUFHRjtRQURDLE1BQU0sRUFBRTs7K0RBTVA7SUFtQkgseUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSxrQkFBa0I7OztJQUc5QixpREFJRTs7SUFFRiw2Q0FNRTs7Ozs7SUFkVSxzQ0FBOEI7Ozs7O0lBQUUscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24sIFNjZW5hcmlvRmVjaGVkQWN0aW9uIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0RiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1QpLFxyXG5cdFx0bWFwKCgpID0+IG5ldyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24oKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHNjZW5hcmlvKSksXHJcblx0XHRtYXAoc2NlbmFyaW8gPT4gbmV3IFNjZW5hcmlvRmVjaGVkQWN0aW9uKHNjZW5hcmlvKSlcclxuXHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU8pXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiJdfQ==