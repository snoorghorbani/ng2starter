/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, Directive } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { map, startWith } from "rxjs/operators";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";
export class DynamicWidgetConfigDirective {
    /**
     * @param {?} store
     * @param {?} route
     * @param {?} service
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(store, route, service, configurationService, resolver, container) {
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
    ngOnInit() {
        this._react_base_on_params();
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((config) => config.types), startWith({})).subscribe((types) => {
            debugger;
            this.mapTypeToComponent = types;
        });
    }
    /**
     * @return {?}
     */
    _react_base_on_params() {
        this.route.params.subscribe(({ type, _id }) => {
            if (_id) {
                this.service.selectById(_id).subscribe((widget) => {
                    this._resolve_correct_component_base_on_widget_type(type, widget);
                });
            }
            else {
                this._resolve_correct_component_base_on_widget_type(type);
            }
        });
    }
    /**
     * @param {?} type
     * @param {?=} widget
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(type, widget) {
        if (this.component) {
            this.component.destroy();
        }
        if (!this.mapTypeToComponent[type]) {
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
        if (widget)
            this.component.instance.widget = widget;
    }
}
DynamicWidgetConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicWidgetConfig]"
            },] },
];
/** @nocollapse */
DynamicWidgetConfigDirective.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: WidgetService },
    { type: WidgetConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
function DynamicWidgetConfigDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.component;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.store;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.route;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.service;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.configurationService;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.resolver;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy13aWRnZXQtY29uZmlnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1DLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQTRCLEdBQUcsRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUkvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFNdEYsTUFBTTs7Ozs7Ozs7O0lBR0wsWUFDUSxPQUNDLE9BQ0EsU0FDQSxzQkFDQSxVQUNBO1FBTEQsVUFBSyxHQUFMLEtBQUs7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLFlBQU8sR0FBUCxPQUFPO1FBQ1AseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixhQUFRLEdBQVIsUUFBUTtRQUNSLGNBQVMsR0FBVCxTQUFTO1FBRWpCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzNCOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQzdCOzs7O0lBQ0QsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3hHLFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUM3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUN0RCxJQUFJLENBQUMsOENBQThDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNsRSxDQUFDLENBQUM7YUFDSDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxRDtTQUNELENBQUMsQ0FBQztLQUNIOzs7Ozs7SUFDRCw4Q0FBOEMsQ0FBQyxJQUFZLEVBQUUsTUFBeUI7UUFDckYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyx1QkFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FDZCxzQ0FBc0MsSUFBSTswQkFDcEIsY0FBYyxFQUFFLENBQ3RDLENBQUM7U0FDRjtRQUNELHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUUzRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3BEOzs7WUFwREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7Ozs7WUFaUSxLQUFLO1lBQ0wsY0FBYztZQUtkLGFBQWE7WUFDYiwwQkFBMEI7WUFUTyx3QkFBd0I7WUFBRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljV2lkZ2V0Q29uZmlnXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVhY3RfYmFzZV9vbl9wYXJhbXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHsgdHlwZSwgX2lkIH0pID0+IHtcclxuXHRcdFx0aWYgKF9pZCkge1xyXG5cdFx0XHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oX2lkKS5zdWJzY3JpYmUoKHdpZGdldCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUsIHdpZGdldCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlOiBzdHJpbmcsIHdpZGdldD86IFdpZGdldE1vZGVsPGFueT4pIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLnVwc2VydCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHRcdGlmICh3aWRnZXQpIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcbn1cclxuIl19