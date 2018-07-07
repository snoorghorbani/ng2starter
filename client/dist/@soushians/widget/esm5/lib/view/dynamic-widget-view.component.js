/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewContainerRef, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map, startWith } from "rxjs/operators";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";
var DynamicWidgetViewComponent = /** @class */ (function () {
    function DynamicWidgetViewComponent(store, service, configurationService, resolver, container) {
        this.store = store;
        this.service = service;
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this._fill_component_map();
    }
    Object.defineProperty(DynamicWidgetViewComponent.prototype, "oid", {
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
    DynamicWidgetViewComponent.prototype.ngOnInit = /**
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
    DynamicWidgetViewComponent.prototype._fill_component_map = /**
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
    DynamicWidgetViewComponent.prototype._selectWidget = /**
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
    DynamicWidgetViewComponent.prototype._resolve_correct_component_base_on_widget_type = /**
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        var _this = this;
        if (!this.mapTypeToComponent[widget.type]) {
            debugger;
            var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
    };
    DynamicWidgetViewComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                },] },
    ];
    /** @nocollapse */
    DynamicWidgetViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: WidgetService },
        { type: WidgetConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicWidgetViewComponent.propDecorators = {
        oid: [{ type: Input }]
    };
    return DynamicWidgetViewComponent;
}());
export { DynamicWidgetViewComponent };
function DynamicWidgetViewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.widget$;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.component;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.store;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.service;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.configurationService;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.resolver;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUdULHdCQUF3QixFQUN4QixnQkFBZ0IsRUFFaEIsS0FBSyxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFTLE1BQU0sRUFBYSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztJQWFyRixvQ0FDUSxPQUNDLFNBQ0Esc0JBQ0EsVUFDQTtRQUpELFVBQUssR0FBTCxLQUFLO1FBQ0osWUFBTyxHQUFQLE9BQU87UUFDUCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLGFBQVEsR0FBUixRQUFRO1FBQ1IsY0FBUyxHQUFULFNBQVM7UUFFakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDM0I7SUFmRCxzQkFDSSwyQ0FBRzs7Ozs7UUFEUCxVQUNRLEVBQVU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2Qjs7O09BQUE7Ozs7SUFhRCw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sSUFBSSxTQUFTLEVBQW5CLENBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDM0UsS0FBSSxDQUFDLDhDQUE4QyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNIOzs7O0lBQ0Qsd0RBQW1COzs7SUFBbkI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosQ0FBWSxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNwRyxRQUFRLENBQUM7WUFDVCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELGtEQUFhOzs7O0lBQWIsVUFBYyxFQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQU0sRUFBRSxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBQ0QsbUZBQThDOzs7O0lBQTlDLFVBQStDLE1BQU07UUFBckQsaUJBWUM7UUFYQSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLFFBQVEsQ0FBQztZQUNULHFCQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RSxNQUFNLElBQUksS0FBSyxDQUNkLHdDQUFzQyxNQUFNLENBQUMsSUFBSSx3Q0FDM0IsY0FBZ0IsQ0FDdEMsQ0FBQztTQUNGO1FBQ0QscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztLQUNwRTs7Z0JBOUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsRUFBRTtpQkFDWjs7OztnQkFYUSxLQUFLO2dCQU1MLGFBQWE7Z0JBQ2IsMEJBQTBCO2dCQWJsQyx3QkFBd0I7Z0JBQ3hCLGdCQUFnQjs7O3NCQWtCZixLQUFLOztxQ0F2QlA7O1NBc0JhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBvaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc2VsZWN0V2lkZ2V0KGlkKTtcclxuXHR9XHJcblx0d2lkZ2V0JDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIoKHdpZGdldCkgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSgod2lkZ2V0KSA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKCh3KSA9PiAodGhpcy5jb21wb25lbnQuaW5zdGFuY2Uud2lkZ2V0ID0gdykpO1xyXG5cdH1cclxufVxyXG4iXX0=