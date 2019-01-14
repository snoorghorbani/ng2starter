/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, Directive } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { map, startWith } from "rxjs/operators";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";
var DynamicWidgetConfigDirective = /** @class */ (function () {
    function DynamicWidgetConfigDirective(store, route, service, configurationService, resolver, container) {
        this.store = store;
        this.route = route;
        this.service = service;
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this._fill_component_map();
    }
    /**
     * @return {?}
     */
    DynamicWidgetConfigDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._react_base_on_params();
    };
    /**
     * @return {?}
     */
    DynamicWidgetConfigDirective.prototype._fill_component_map = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.configurationService.config$.pipe(map(function (config) { return config.types; }), startWith({})).subscribe(function (types) {
            debugger;
            _this.mapTypeToComponent = types;
        });
    };
    /**
     * @return {?}
     */
    DynamicWidgetConfigDirective.prototype._react_base_on_params = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.params.subscribe(function (_a) {
            var type = _a.type, _id = _a._id;
            if (_id) {
                _this.service.selectById(_id).subscribe(function (widget) {
                    _this._resolve_correct_component_base_on_widget_type(type, widget);
                });
            }
            else {
                _this._resolve_correct_component_base_on_widget_type(type);
            }
        });
    };
    /**
     * @param {?} type
     * @param {?=} widget
     * @return {?}
     */
    DynamicWidgetConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
     * @param {?} type
     * @param {?=} widget
     * @return {?}
     */
    function (type, widget) {
        if (this.component) {
            this.component.destroy();
        }
        if (!this.mapTypeToComponent[type]) {
            /** @type {?} */
            var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
        if (widget)
            this.component.instance.widget = widget;
    };
    DynamicWidgetConfigDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ngsDynamicWidgetConfig]"
                },] }
    ];
    /** @nocollapse */
    DynamicWidgetConfigDirective.ctorParameters = function () { return [
        { type: Store },
        { type: ActivatedRoute },
        { type: WidgetService },
        { type: WidgetConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    return DynamicWidgetConfigDirective;
}());
export { DynamicWidgetConfigDirective };
if (false) {
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.component;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.service;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy13aWRnZXQtY29uZmlnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1DLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQTRCLEdBQUcsRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUkvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHdEY7SUFNQyxzQ0FDUSxLQUFzQixFQUNyQixLQUFxQixFQUNyQixPQUFzQixFQUN0QixvQkFBZ0QsRUFDaEQsUUFBa0MsRUFDbEMsU0FBMkI7UUFMNUIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRW5DLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDRCwrQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ0QsMERBQW1COzs7SUFBbkI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosQ0FBWSxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNwRyxRQUFRLENBQUM7WUFDVCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUNELDREQUFxQjs7O0lBQXJCO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFhO2dCQUFYLGNBQUksRUFBRSxZQUFHO1lBQ3ZDLElBQUksR0FBRyxFQUFFO2dCQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07b0JBQ2xELEtBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ25FLENBQUMsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sS0FBSSxDQUFDLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFDRCxxRkFBOEM7Ozs7O0lBQTlDLFVBQStDLElBQVksRUFBRSxNQUF5QjtRQUNyRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUM3QixjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RFLE1BQU0sSUFBSSxLQUFLLENBQ2Qsd0NBQXNDLElBQUksd0NBQ3BCLGNBQWdCLENBQ3RDLENBQUM7U0FDRjs7WUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsdUVBQXVFO1FBQ3ZFLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDckQsQ0FBQzs7Z0JBcERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO2lCQUNwQzs7OztnQkFaUSxLQUFLO2dCQUNMLGNBQWM7Z0JBS2QsYUFBYTtnQkFDYiwwQkFBMEI7Z0JBVE8sd0JBQXdCO2dCQUFFLGdCQUFnQjs7SUFpRXBGLG1DQUFDO0NBQUEsQUFyREQsSUFxREM7U0FsRFksNEJBQTRCOzs7SUFDeEMsaURBQTZCOztJQUM3QiwwREFBMEM7O0lBRXpDLDZDQUE2Qjs7Ozs7SUFDN0IsNkNBQTZCOzs7OztJQUM3QiwrQ0FBOEI7Ozs7O0lBQzlCLDREQUF3RDs7Ozs7SUFDeEQsZ0RBQTBDOzs7OztJQUMxQyxpREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljV2lkZ2V0Q29uZmlnXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVhY3RfYmFzZV9vbl9wYXJhbXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHsgdHlwZSwgX2lkIH0pID0+IHtcclxuXHRcdFx0aWYgKF9pZCkge1xyXG5cdFx0XHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oX2lkKS5zdWJzY3JpYmUoKHdpZGdldCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUsIHdpZGdldCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlOiBzdHJpbmcsIHdpZGdldD86IFdpZGdldE1vZGVsPGFueT4pIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLnVwc2VydCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHRcdGlmICh3aWRnZXQpIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcbn1cclxuIl19