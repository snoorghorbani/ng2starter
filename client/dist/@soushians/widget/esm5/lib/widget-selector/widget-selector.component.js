/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetWidgetsStartAction } from "../services/api";
var WidgetSelectorComponent = /** @class */ (function () {
    function WidgetSelectorComponent(store) {
        this.store = store;
        this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
    }
    Object.defineProperty(WidgetSelectorComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.oid != undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetSelectorComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                oid: this.selectedWidgetId
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WidgetSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new GetWidgetsStartAction());
    };
    WidgetSelectorComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\r\n        <mat-form-field fxFlex=\"100\">\r\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\r\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\r\n    {{item.type}} : <b>{{item.name}}</b>\r\n  </mat-option>\r\n</mat-select> \r\n</mat-form-field>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    WidgetSelectorComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return WidgetSelectorComponent;
}());
export { WidgetSelectorComponent };
if (false) {
    /** @type {?} */
    WidgetSelectorComponent.prototype.widgets$;
    /** @type {?} */
    WidgetSelectorComponent.prototype.selectedWidgetId;
    /** @type {?} */
    WidgetSelectorComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBZ0J2RCxpQ0FBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0tBQ2xFO0lBVkQsc0JBQUksMENBQUs7Ozs7UUFBVDtZQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDO1NBQ3BDOzs7T0FBQTtJQUNELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxPQUFPO2dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQzFCLENBQUM7U0FDRjs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztLQUNqRDs7Z0JBbkJELFNBQVMsU0FBQztvQkFDVixvZ0JBQTZDO2lCQUM3Qzs7OztnQkFUUSxLQUFLOztrQ0FGZDs7U0FZYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IElXaWRnZXRWaWV3SW5wdXRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC12aWV3LWlucHV0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogXCJ3aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==