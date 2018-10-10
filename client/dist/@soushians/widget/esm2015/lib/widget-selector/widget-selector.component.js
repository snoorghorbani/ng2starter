/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.widgets$ = this.store.select(state => state.widgets.db.data);
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
                template: `<div fxLayout="column wrap" fxLayoutGap="15px">
  <h4>لیست ویجت‌ها</h4>
        <mat-form-field fxFlex="100">
<mat-select placeholder="نوع ویجت" [(ngModel)]="selectedWidgetId" name="selectedWidgetId">
  <mat-option *ngFor="let item of (widgets$ | async)" [value]="item._id">
    {{item.type}} : <b>{{item.name}}</b>
  </mat-option>
</mat-select> 
</mat-form-field>
</div>`
            },] },
];
/** @nocollapse */
WidgetSelectorComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    WidgetSelectorComponent.prototype.widgets$;
    /** @type {?} */
    WidgetSelectorComponent.prototype.selectedWidgetId;
    /** @type {?} */
    WidgetSelectorComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFjeEQsTUFBTTs7OztJQVdMLFlBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRTs7OztJQVZELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDO0tBQ3BDOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1QsT0FBTztZQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFCLENBQUM7S0FDRjs7OztJQUlELFFBQVE7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztLQUNqRDs7O1lBNUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7OztPQVNKO2FBQ047Ozs7WUFwQlEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgSVdpZGdldFZpZXdJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0LXZpZXctaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgPGg0PtmE24zYs9iqINmI24zYrNiq4oCM2YfYpzwvaDQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjEwMFwiPlxyXG48bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cItmG2YjYuSDZiNuM2KzYqlwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRXaWRnZXRJZFwiIG5hbWU9XCJzZWxlY3RlZFdpZGdldElkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0udHlwZX19IDogPGI+e3tpdGVtLm5hbWV9fTwvYj5cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD4gXHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8SVdpZGdldFZpZXdJbnB1dEludGVyZmFjZT4ge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==