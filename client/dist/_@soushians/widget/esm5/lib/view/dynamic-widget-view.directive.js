/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, Directive, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map, startWith } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";
var DynamicWidgetViewDirective = /** @class */ (function () {
    function DynamicWidgetViewDirective(store, route, service, configurationService, resolver, container) {
        this.store = store;
        this.route = route;
        this.service = service;
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this._fill_component_map();
    }
    Object.defineProperty(DynamicWidgetViewDirective.prototype, "oid", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._selectWidget(id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicWidgetViewDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.widget$.pipe(filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
            _this._resolve_correct_component_base_on_widget_type(widget);
        });
    };
    /**
     * @return {?}
     */
    DynamicWidgetViewDirective.prototype._fill_component_map = /**
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
     * @param {?} id
     * @return {?}
     */
    DynamicWidgetViewDirective.prototype._selectWidget = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.widget$ = this.service.selectById(id);
    };
    /**
     * @param {?} widget
     * @return {?}
     */
    DynamicWidgetViewDirective.prototype._resolve_correct_component_base_on_widget_type = /**
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        var _this = this;
        if (!this.mapTypeToComponent[widget.type]) {
            /** @type {?} */
            var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
    };
    DynamicWidgetViewDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ngsDynamicWidgetView]"
                },] }
    ];
    /** @nocollapse */
    DynamicWidgetViewDirective.ctorParameters = function () { return [
        { type: Store },
        { type: ActivatedRoute },
        { type: WidgetService },
        { type: WidgetConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicWidgetViewDirective.propDecorators = {
        oid: [{ type: Input }]
    };
    return DynamicWidgetViewDirective;
}());
export { DynamicWidgetViewDirective };
if (false) {
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.widget$;
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.component;
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.service;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy13aWRnZXQtdmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBSU4sd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFTLE1BQU0sRUFBYSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUd0RjtJQVdDLG9DQUNRLEtBQXNCLEVBQ3JCLEtBQXFCLEVBQ3JCLE9BQXNCLEVBQ3RCLG9CQUFnRCxFQUNoRCxRQUFrQyxFQUNsQyxTQUEyQjtRQUw1QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNEI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFbkMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWhCRCxzQkFDSSwyQ0FBRzs7Ozs7UUFEUCxVQUNRLEVBQVU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7OztJQWNELDZDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxJQUFJLFNBQVMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN4RSxLQUFJLENBQUMsOENBQThDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBQ0Qsd0RBQW1COzs7SUFBbkI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosQ0FBWSxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqRyxRQUFRLENBQUM7WUFDVCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCxrREFBYTs7OztJQUFiLFVBQWMsRUFBVTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBQ0QsbUZBQThDOzs7O0lBQTlDLFVBQStDLE1BQU07UUFBckQsaUJBV0M7UUFWQSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ3BDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FDZCx3Q0FBc0MsTUFBTSxDQUFDLElBQUksd0NBQzNCLGNBQWdCLENBQ3RDLENBQUM7U0FDRjs7WUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkE5Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ2xDOzs7O2dCQVpRLEtBQUs7Z0JBRUwsY0FBYztnQkFJZCxhQUFhO2dCQUNiLDBCQUEwQjtnQkFibEMsd0JBQXdCO2dCQUN4QixnQkFBZ0I7OztzQkFtQmYsS0FBSzs7SUEyQ1AsaUNBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTVDWSwwQkFBMEI7OztJQUt0Qyw2Q0FBc0M7O0lBQ3RDLCtDQUE2Qjs7SUFDN0Isd0RBQTBDOztJQUV6QywyQ0FBNkI7Ozs7O0lBQzdCLDJDQUE2Qjs7Ozs7SUFDN0IsNkNBQThCOzs7OztJQUM5QiwwREFBd0Q7Ozs7O0lBQ3hELDhDQUEwQzs7Ozs7SUFDMUMsK0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNXaWRnZXRWaWV3XVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgb2lkKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldChpZCk7XHJcblx0fVxyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIod2lkZ2V0ID0+IHdpZGdldCAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUod2lkZ2V0ID0+IHtcclxuXHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2ZpbGxfY29tcG9uZW50X21hcCgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKHR5cGVzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3NlbGVjdFdpZGdldChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKHcgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIl19