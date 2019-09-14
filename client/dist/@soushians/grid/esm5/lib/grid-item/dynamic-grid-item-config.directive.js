/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewContainerRef, Directive, Input, ViewChild, Inject } from "@angular/core";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
var DynamicGridItremConfigDirective = /** @class */ (function () {
    function DynamicGridItremConfigDirective(configurationService, resolver, container) {
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this.mapTypeToComponent = this.configurationService.config$.getValue().types;
    }
    Object.defineProperty(DynamicGridItremConfigDirective.prototype, "type", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            if (!type)
                return;
            this._resolve_correct_component_base_on_widget_type(type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicGridItremConfigDirective.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.component.instance.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicGridItremConfigDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this.component.instance.config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicGridItremConfigDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} type
     * @return {?}
     */
    DynamicGridItremConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (!this.mapTypeToComponent[type]) {
            /** @type {?} */
            var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
    };
    DynamicGridItremConfigDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ngsDynamicGridItemConfig]"
                },] }
    ];
    /** @nocollapse */
    DynamicGridItremConfigDirective.ctorParameters = function () { return [
        { type: GridConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicGridItremConfigDirective.propDecorators = {
        type: [{ type: Input }]
    };
    return DynamicGridItremConfigDirective;
}());
export { DynamicGridItremConfigDirective };
if (false) {
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.component;
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.mapTypeToComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItremConfigDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItremConfigDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItremConfigDirective.prototype.container;
}
var DynamicGridItemConfigComponent = /** @class */ (function () {
    function DynamicGridItemConfigComponent(data) {
        this.data = data;
    }
    Object.defineProperty(DynamicGridItemConfigComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this.DynamicWidgetRef.config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicGridItemConfigComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.DynamicWidgetRef.valid;
        },
        enumerable: true,
        configurable: true
    });
    DynamicGridItemConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t<div ngsDynamicGridItemConfig [type]=\"data.type\"></div>\n\t"
                }] }
    ];
    /** @nocollapse */
    DynamicGridItemConfigComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    DynamicGridItemConfigComponent.propDecorators = {
        DynamicWidgetRef: [{ type: ViewChild, args: [DynamicGridItremConfigDirective, { static: false },] }]
    };
    return DynamicGridItemConfigComponent;
}());
export { DynamicGridItemConfigComponent };
if (false) {
    /** @type {?} */
    DynamicGridItemConfigComponent.prototype.DynamicWidgetRef;
    /** @type {?} */
    DynamicGridItemConfigComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFHVCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUxRDtJQWlCQyx5Q0FDUyxvQkFBOEMsRUFDOUMsUUFBa0MsRUFDbEMsU0FBMkI7UUFGM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUEwQjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUVuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDOUUsQ0FBQztJQW5CRCxzQkFDSSxpREFBSTs7Ozs7UUFEUixVQUNTLElBQVk7WUFDcEIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUNsQixJQUFJLENBQUMsOENBQThDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxrREFBSzs7OztRQUFUO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtREFBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7Ozs7SUFVRCxrREFBUTs7O0lBQVIsY0FBYSxDQUFDOzs7OztJQUNkLHdGQUE4Qzs7OztJQUE5QyxVQUErQyxJQUFJO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUM3QixjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RFLE1BQU0sSUFBSSxLQUFLLENBQ2Qsd0NBQXNDLElBQUksd0NBQ3BCLGNBQWdCLENBQ3RDLENBQUM7U0FDRjs7WUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQzNHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsdUVBQXVFO0lBQ3hFLENBQUM7O2dCQXBDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtpQkFDdEM7Ozs7Z0JBTFEsd0JBQXdCO2dCQVBoQyx3QkFBd0I7Z0JBQ3hCLGdCQUFnQjs7O3VCQWFmLEtBQUs7O0lBaUNQLHNDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FsQ1ksK0JBQStCOzs7SUFZM0Msb0RBQTZCOztJQUM3Qiw2REFBd0I7Ozs7O0lBRXZCLCtEQUFzRDs7Ozs7SUFDdEQsbURBQTBDOzs7OztJQUMxQyxvREFBbUM7O0FBbUJyQztJQU9DLHdDQUFrRCxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7SUFDaEUsc0JBQUksa0RBQU07Ozs7UUFBVjtZQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlEQUFLOzs7O1FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7O2dCQWJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUVBRVQ7aUJBQ0Q7Ozs7Z0RBR2EsTUFBTSxTQUFDLHFCQUFxQjs7O21DQUR4QyxTQUFTLFNBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQVE5RCxxQ0FBQztDQUFBLEFBZEQsSUFjQztTQVRZLDhCQUE4Qjs7O0lBQzFDLDBEQUFpSDs7SUFDckcsOENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdEluamVjdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXR5cGUpIHJldHVybjtcclxuXHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnZhbGlkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZztcclxuXHR9XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IGFueTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHsgfVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLmNvbmZpZ0NvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWcgW3R5cGVdPVwiZGF0YS50eXBlXCI+PC9kaXY+XHJcblx0YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IHtcclxuXHRAVmlld0NoaWxkKER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBEeW5hbWljV2lkZ2V0UmVmOiBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi5jb25maWc7XHJcblx0fVxyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLkR5bmFtaWNXaWRnZXRSZWYudmFsaWQ7XHJcblx0fVxyXG59XHJcbiJdfQ==