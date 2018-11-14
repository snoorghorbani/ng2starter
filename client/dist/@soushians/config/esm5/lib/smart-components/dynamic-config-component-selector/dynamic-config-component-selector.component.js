/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, Output, EventEmitter } from "@angular/core";
import { AuthenticationModuleConfigComponent } from "../../dumb-components/authentication-module-config/authentication-module-config.component";
import { ConfigAppConfigComponent } from "../../dumb-components/app-config/app-config.component";
import { UserModuleConfigComponent } from "../../dumb-components/user-module-config/user-module-config.component";
import { LayoutModuleConfigComponent } from "../../dumb-components/layout-config/layout-module-config.component";
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            authentication_module_config: AuthenticationModuleConfigComponent,
            app_config: ConfigAppConfigComponent,
            user_module_config: UserModuleConfigComponent,
            layout_config: LayoutModuleConfigComponent
        };
        this.configChanged = new EventEmitter();
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.currentComponent)
                return {};
            return this.currentComponent.instance.formGroup.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            /** @type {?} */
            var _component = this.typeMapToDiagram[data.type];
            /** @type {?} */
            var inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: (/** @type {?} */ (data.inputs))[inputName] };
            });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(_component);
            /** @type {?} */
            var component = factory.create(injector);
            // (<any>component.instance).configChanged.add.subscribe((data: any) => {
            // 	this.configChanged.emit(data);
            // });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-config-component-selector",
                    template: "<div #dynamicComponentContainer></div>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"],
                    entryComponents: [
                        AuthenticationModuleConfigComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
        configChanged: [{ type: Output }],
        data: [{ type: Input }]
    };
    return DynamicConfigComponentSelectorComponent;
}());
export { DynamicConfigComponentSelectorComponent };
if (false) {
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.dynamicComponentContainer;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.configChanged;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.currentComponent;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsS0FBSyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUVsQixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ2hKLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDOztJQTJEaEgsaURBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO2dDQTdDOUI7WUFDdkIsNEJBQTRCLEVBQUUsbUNBQW1DO1lBQ2pFLFVBQVUsRUFBRSx3QkFBd0I7WUFDcEMsa0JBQWtCLEVBQUUseUJBQXlCO1lBQzdDLGFBQWEsRUFBRSwyQkFBMkI7U0FDMUM7NkJBR3lCLElBQUksWUFBWSxFQUFFO2dDQUtwQixJQUFJO0tBZ0M4QjtJQXBDMUQsc0JBQUksMkRBQU07Ozs7UUFBVjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3REOzs7T0FBQTtJQUVELHNCQUNJLHlEQUFJOzs7OztRQURSLFVBQ1MsSUFBbUI7WUFDM0IsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDbkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO29CQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0QsT0FBTzthQUNQOztZQUNELElBQUksVUFBVSxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ3ZELElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7Z0JBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxtQkFBQyxJQUFJLENBQUMsTUFBYSxFQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzthQUN6RSxDQUFDLENBQUM7O1lBQ0gsSUFBSSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUVoRSxJQUFJLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FDdEQsY0FBYyxFQUNkLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQzdDLENBQUM7O1lBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFFaEUsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztZQUl6QyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztTQUNsQzs7O09BQUE7Ozs7SUFFRCxpRUFBZTs7O0lBQWYsZUFBb0I7O2dCQTFEcEIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLFFBQVEsRUFBRSx3Q0FBd0M7b0JBQ2xELE1BQU0sRUFBRSxDQUFDLDJFQUEyRSxDQUFDO29CQUNyRixlQUFlLEVBQUU7d0JBQ2hCLG1DQUFtQzt3QkFDbkMsd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLDJCQUEyQjtxQkFDM0I7aUJBQ0Q7Ozs7Z0JBMUJBLHdCQUF3Qjs7OzRDQWtDdkIsU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO2dDQUVqRSxNQUFNO3VCQU1OLEtBQUs7O2tEQS9DUDs7U0FnQ2EsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJ0aWFsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0VXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IGFueSA9IHtcclxuXHRcdGF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0YXBwX2NvbmZpZzogQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0dXNlcl9tb2R1bGVfY29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0bGF5b3V0X2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRpZiAoIXRoaXMuY3VycmVudENvbXBvbmVudCkgcmV0dXJuIHt9O1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudENvbXBvbmVudC5pbnN0YW5jZS5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBQYXJ0aWFsQ29uZmlnKSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50OiBhbnkgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogKGRhdGEuaW5wdXRzIGFzIGFueSlbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0Ly8gKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5jb25maWdDaGFuZ2VkLmFkZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiJdfQ==