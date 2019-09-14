/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                return { provide: inputName, useValue: ((/** @type {?} */ (data.inputs)))[inputName] };
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
                    entryComponents: [
                        AuthenticationModuleConfigComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent
                    ],
                    styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"]
                }] }
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
    /**
     * @type {?}
     * @private
     */
    DynamicConfigComponentSelectorComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsiY29uZmlnL3NyYy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBRWxCLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDaEosT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDbEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFFakg7SUF5REMsaURBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBN0N0RCxxQkFBZ0IsR0FBUTtZQUN2Qiw0QkFBNEIsRUFBRSxtQ0FBbUM7WUFDakUsVUFBVSxFQUFFLHdCQUF3QjtZQUNwQyxrQkFBa0IsRUFBRSx5QkFBeUI7WUFDN0MsYUFBYSxFQUFFLDJCQUEyQjtTQUMxQyxDQUFDO1FBR1Esa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzdDLHFCQUFnQixHQUFRLElBQUksQ0FBQztJQWdDNEIsQ0FBQztJQXBDMUQsc0JBQUksMkRBQU07Ozs7UUFBVjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsc0JBQ0kseURBQUk7Ozs7O1FBRFIsVUFDUyxJQUFtQjtZQUMzQixJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNuRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7b0JBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMzRCxPQUFPO2FBQ1A7O2dCQUNHLFVBQVUsR0FBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Z0JBQ2xELGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTO2dCQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzFFLENBQUMsQ0FBQzs7Z0JBQ0UsY0FBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7O2dCQUUzRCxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQ3RELGNBQWMsRUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUM3Qzs7Z0JBQ0csT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDOztnQkFFM0QsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3hDLHlFQUF5RTtZQUN6RSxrQ0FBa0M7WUFDbEMsTUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7O0lBRUQsaUVBQWU7OztJQUFmLGNBQW1CLENBQUM7O2dCQTFEcEIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLGtEQUFpRTtvQkFFakUsZUFBZSxFQUFFO3dCQUNoQixtQ0FBbUM7d0JBQ25DLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QiwyQkFBMkI7cUJBQzNCOztpQkFDRDs7OztnQkExQkEsd0JBQXdCOzs7NENBa0N2QixTQUFTLFNBQUMsMkJBQTJCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0NBRWpFLE1BQU07dUJBTU4sS0FBSzs7SUFpQ1AsOENBQUM7Q0FBQSxBQTNERCxJQTJEQztTQWhEWSx1Q0FBdUM7OztJQUNuRCxtRUFLRTs7SUFDRiw0RUFDNEM7O0lBQzVDLGdFQUE2Qzs7SUFLN0MsbUVBQTZCOzs7OztJQWdDakIsMkRBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJ0aWFsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1wiIF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiBhbnkgPSB7XHJcblx0XHRhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGFwcF9jb25maWc6IENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHVzZXJfbW9kdWxlX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGxheW91dF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0aWYgKCF0aGlzLmN1cnJlbnRDb21wb25lbnQpIHJldHVybiB7fTtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRDb21wb25lbnQuaW5zdGFuY2UuZm9ybUdyb3VwLnZhbHVlO1xyXG5cdH1cclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogUGFydGlhbENvbmZpZykge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHRpZiAoIShkYXRhLnR5cGUgaW4gdGhpcy50eXBlTWFwVG9EaWFncmFtKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgX2NvbXBvbmVudDogYW55ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IChkYXRhLmlucHV0cyBhcyBhbnkpW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHRcdC8vICg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuY29uZmlnQ2hhbmdlZC5hZGQuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdC8vIFx0dGhpcy5jb25maWdDaGFuZ2VkLmVtaXQoZGF0YSk7XHJcblx0XHQvLyB9KTtcclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxufVxyXG4iXX0=