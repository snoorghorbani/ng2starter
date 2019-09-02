/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
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
        this.EditProfileRequest$ = this.actions$.pipe(ofType(ScenariosListActionTypes.SCENARIOS_LIST), map(() => new ScenariosListStartAction()));
        this.UpsertScenario$ = this.actions$.pipe(ofType(ScenariosListActionTypes.UPSERT), map(action => action.payload), switchMap(scenario => this.service.upsert(scenario)), map(scenario => new ScenarioFechedAction(scenario)));
    }
}
ScenariosDbEffects.decorators = [
    { type: Injectable }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHL0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDOUIsWUFBb0IsUUFBc0IsRUFBVSxPQUF3QjtRQUF4RCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFHNUUsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsRUFDL0MsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksd0JBQXdCLEVBQUUsQ0FBQyxDQUN6QyxDQUFDO1FBR0Ysb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFNLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxFQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDbkQsQ0FBQztJQWQ2RSxDQUFDOzs7WUFGaEYsVUFBVTs7OztZQVBGLE9BQU87WUFLUCxlQUFlOztBQU92QjtJQURDLE1BQU0sRUFBRTs7K0RBSVA7QUFHRjtJQURDLE1BQU0sRUFBRTs7MkRBTVA7OztJQVpGLGlEQUlFOztJQUVGLDZDQU1FOzs7OztJQWRVLHNDQUE4Qjs7Ozs7SUFBRSxxQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcywgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uLCBTY2VuYXJpb0ZlY2hlZEFjdGlvbiB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0RiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1QpLFxyXG5cdFx0bWFwKCgpID0+IG5ldyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24oKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKHNjZW5hcmlvID0+IHRoaXMuc2VydmljZS51cHNlcnQoc2NlbmFyaW8pKSxcclxuXHRcdG1hcChzY2VuYXJpbyA9PiBuZXcgU2NlbmFyaW9GZWNoZWRBY3Rpb24oc2NlbmFyaW8pKVxyXG5cdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIEdldFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLkdFVF9TQ0VOQVJJTylcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHQvLyBcdFx0bWFwKHJ1bGUgPT4gbmV3IFNjZW5hcmlvRmVjaGVkQWN0aW9uKHJ1bGUpKVxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gZ2V0X3J1bGVzX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdC8vIFx0XHRtYXAocmVzID0+IG5ldyBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHQvLyBcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIl19