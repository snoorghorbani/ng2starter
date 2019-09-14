/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.types)), startWith({})).subscribe((/**
         * @param {?} types
         * @return {?}
         */
        (types) => {
            debugger;
            this.mapTypeToComponent = types;
        }));
    }
    /**
     * @return {?}
     */
    _react_base_on_params() {
        this.route.params.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, _id }) => {
            if (_id) {
                this.service.selectById(_id).subscribe((/**
                 * @param {?} widget
                 * @return {?}
                 */
                (widget) => {
                    this._resolve_correct_component_base_on_widget_type(type, widget);
                }));
            }
            else {
                this._resolve_correct_component_base_on_widget_type(type);
            }
        }));
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
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
        if (widget)
            this.component.instance.widget = widget;
    }
}
DynamicWidgetConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicWidgetConfig]"
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy13aWRnZXQtY29uZmlnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1DLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQTRCLEdBQUcsRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUkvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFNdEYsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7Ozs7O0lBR3hDLFlBQ1EsS0FBc0IsRUFDckIsS0FBcUIsRUFDckIsT0FBc0IsRUFDdEIsb0JBQWdELEVBQ2hELFFBQWtDLEVBQ2xDLFNBQTJCO1FBTDVCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE0QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUVuQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEcsUUFBUSxDQUFDO1lBQ1QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFDRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUM3QyxJQUFJLEdBQUcsRUFBRTtnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBTSxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ3RELElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ25FLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFDRCw4Q0FBOEMsQ0FBQyxJQUFZLEVBQUUsTUFBeUI7UUFDckYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFOztrQkFDN0IsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0RSxNQUFNLElBQUksS0FBSyxDQUNkLHNDQUFzQyxJQUFJOzBCQUNwQixjQUFjLEVBQUUsQ0FDdEMsQ0FBQztTQUNGOztjQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCx1RUFBdUU7UUFDdkUsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7WUFwREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7Ozs7WUFaUSxLQUFLO1lBQ0wsY0FBYztZQUtkLGFBQWE7WUFDYiwwQkFBMEI7WUFUTyx3QkFBd0I7WUFBRSxnQkFBZ0I7Ozs7SUFnQm5GLGlEQUE2Qjs7SUFDN0IsMERBQTBDOztJQUV6Qyw2Q0FBNkI7Ozs7O0lBQzdCLDZDQUE2Qjs7Ozs7SUFDN0IsK0NBQThCOzs7OztJQUM5Qiw0REFBd0Q7Ozs7O0lBQ3hELGdEQUEwQzs7Ozs7SUFDMUMsaURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY1dpZGdldENvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9yZWFjdF9iYXNlX29uX3BhcmFtcygpO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKChjb25maWcpID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSgodHlwZXMpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCh7IHR5cGUsIF9pZCB9KSA9PiB7XHJcblx0XHRcdGlmIChfaWQpIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KF9pZCkuc3Vic2NyaWJlKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlLCB3aWRnZXQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZTogc3RyaW5nLCB3aWRnZXQ/OiBXaWRnZXRNb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS51cHNlcnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0XHRpZiAod2lkZ2V0KSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3aWRnZXQ7XHJcblx0fVxyXG59XHJcbiJdfQ==