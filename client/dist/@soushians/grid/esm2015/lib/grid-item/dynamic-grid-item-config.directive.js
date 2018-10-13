/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewContainerRef, Directive, Input, ViewChild, Inject } from "@angular/core";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
export class DynamicGridItremConfigDirective {
    /**
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(configurationService, resolver, container) {
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this.mapTypeToComponent = this.configurationService.config$.getValue().types;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        if (!type)
            return;
        this._resolve_correct_component_base_on_widget_type(type);
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.component.instance.valid;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.component.instance.config;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} type
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(type) {
        if (!this.mapTypeToComponent[type]) {
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
    }
}
DynamicGridItremConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicGridItemConfig]"
            },] },
];
/** @nocollapse */
DynamicGridItremConfigDirective.ctorParameters = () => [
    { type: GridConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicGridItremConfigDirective.propDecorators = {
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.component;
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.configurationService;
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.resolver;
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.container;
}
export class DynamicGridItemConfigComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.DynamicWidgetRef.config;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.DynamicWidgetRef.valid;
    }
}
DynamicGridItemConfigComponent.decorators = [
    { type: Component, args: [{
                template: `
	<div ngsDynamicGridItemConfig [type]="data.type"></div>
	`
            },] },
];
/** @nocollapse */
DynamicGridItemConfigComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
DynamicGridItemConfigComponent.propDecorators = {
    DynamicWidgetRef: [{ type: ViewChild, args: [DynamicGridItremConfigDirective,] }]
};
if (false) {
    /** @type {?} */
    DynamicGridItemConfigComponent.prototype.DynamicWidgetRef;
    /** @type {?} */
    DynamicGridItemConfigComponent.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFHVCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUsxRCxNQUFNOzs7Ozs7SUFjTCxZQUNTLHNCQUNBLFVBQ0E7UUFGQSx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLGFBQVEsR0FBUixRQUFRO1FBQ1IsY0FBUyxHQUFULFNBQVM7UUFFakIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDO0tBQzdFOzs7OztJQW5CRCxJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsOENBQThDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUQ7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztLQUNyQzs7OztJQUNELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0tBQ3RDOzs7O0lBVUQsUUFBUSxNQUFLOzs7OztJQUNiLDhDQUE4QyxDQUFDLElBQUk7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTs7WUFDbkMsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FDZCxzQ0FBc0MsSUFBSTswQkFDcEIsY0FBYyxFQUFFLENBQ3RDLENBQUM7U0FDRjs7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztLQUUzRDs7O1lBcENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2FBQ3RDOzs7O1lBTFEsd0JBQXdCO1lBUGhDLHdCQUF3QjtZQUN4QixnQkFBZ0I7OzttQkFhZixLQUFLOzs7Ozs7Ozs7Ozs7OztBQXdDUCxNQUFNOzs7O0lBRUwsWUFBa0QsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7S0FBSTs7OztJQUMvRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7S0FDcEM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7S0FDbkM7OztZQWJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7O0VBRVQ7YUFDRDs7Ozs0Q0FHYSxNQUFNLFNBQUMscUJBQXFCOzs7K0JBRHhDLFNBQVMsU0FBQywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q2hpbGQsXHJcblx0SW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuXHRcdGlmICghdHlwZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UudmFsaWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS5jb25maWdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnIFt0eXBlXT1cImRhdGEudHlwZVwiPjwvZGl2PlxyXG5cdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0QFZpZXdDaGlsZChEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlKSBEeW5hbWljV2lkZ2V0UmVmOiBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLmNvbmZpZztcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi52YWxpZDtcclxuXHR9XHJcbn1cclxuIl19