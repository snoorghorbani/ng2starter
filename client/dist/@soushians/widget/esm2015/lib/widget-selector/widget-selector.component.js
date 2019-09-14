/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.widgets$ = this.store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.widgets.db.data));
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
                template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\r\n        <mat-form-field fxFlex=\"100\">\r\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\r\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\r\n    {{item.type}} : <b>{{item.name}}</b>\r\n  </mat-option>\r\n</mat-select> \r\n</mat-form-field>\r\n</div>"
            }] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLeEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVduQyxZQUFtQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQVZELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDVCxPQUFPO1lBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDMUIsQ0FBQztJQUNILENBQUM7Ozs7SUFJRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBbkJELFNBQVMsU0FBQztnQkFDVixvZ0JBQTZDO2FBQzdDOzs7O1lBVFEsS0FBSzs7OztJQVdiLDJDQUF5Qzs7SUFDekMsbURBQXlCOztJQVNiLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgSVdpZGdldFZpZXdJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0LXZpZXctaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiBcIndpZGdldC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0d2lkZ2V0cyQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPjtcclxuXHRzZWxlY3RlZFdpZGdldElkOiBzdHJpbmc7XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLm9pZCAhPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRvaWQ6IHRoaXMuc2VsZWN0ZWRXaWRnZXRJZFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcbn1cclxuIl19