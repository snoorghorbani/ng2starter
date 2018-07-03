/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetWidgetsStartAction } from "../services/api";
export class WidgetSelectorComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((state) => state.widgets.db.data);
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.config.oid != undefined;
    }
    /**
     * @return {?}
     */
    get config() {
        return {
            oid: this.selectedWidgetId
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetWidgetsStartAction());
    }
}
WidgetSelectorComponent.decorators = [
    { type: Component, args: [{
                template: `<mat-select placeholder="Grid Type" [(ngModel)]="selectedWidgetId" name="selectedWidgetId">
  <mat-option *ngFor="let item of (widgets$ | async)" [value]="item._id">
    {{item.type}} : <b>{{item.name}}</b>
  </mat-option>
</mat-select>`
            },] },
];
/** @nocollapse */
WidgetSelectorComponent.ctorParameters = () => [
    { type: Store }
];
function WidgetSelectorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetSelectorComponent.prototype.widgets$;
    /** @type {?} */
    WidgetSelectorComponent.prototype.selectedWidgetId;
    /** @type {?} */
    WidgetSelectorComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEQsTUFBTTs7OztJQVdMLFlBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BFOzs7O0lBVkQsSUFBSSxLQUFLO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQztLQUNwQzs7OztJQUNELElBQUksTUFBTTtRQUNULE1BQU0sQ0FBQztZQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFCLENBQUM7S0FDRjs7OztJQUlELFFBQVE7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztLQUNqRDs7O1lBdkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Y0FJRzthQUNiOzs7O1lBZFEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0Vmlld0lucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBUeXBlXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFdpZGdldElkXCIgbmFtZT1cInNlbGVjdGVkV2lkZ2V0SWRcIj5cclxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBbdmFsdWVdPVwiaXRlbS5faWRcIj5cclxuICAgIHt7aXRlbS50eXBlfX0gOiA8Yj57e2l0ZW0ubmFtZX19PC9iPlxyXG4gIDwvbWF0LW9wdGlvbj5cclxuPC9tYXQtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8SVdpZGdldFZpZXdJbnB1dEludGVyZmFjZT4ge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcbn1cclxuIl19