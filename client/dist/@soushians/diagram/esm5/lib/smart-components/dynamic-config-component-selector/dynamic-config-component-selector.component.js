/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, Output, EventEmitter } from "@angular/core";
import { DiagramPartialConfigEditComponent } from "../../dumb-components/diagram-partial-config-edit/diagram-partial-config-edit.component";
import { PieDiagramPartialConfigComponent } from "../../dumb-components/pie-diagram-partial-config/pie-diagram-partial-config.component";
import { BooleanoWidgetPartialConfigComponent } from "../../dumb-components/booleano-widget-partial-config/booleano-widget-partial-config.component";
import { LinearDiagramPartialConfigComponent } from "../../dumb-components/linear-diagram-partial-config/linear-diagram-partial-config.component";
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: DiagramPartialConfigEditComponent,
            area: LinearDiagramPartialConfigComponent,
            "area-spline": LinearDiagramPartialConfigComponent,
            donut: DiagramPartialConfigEditComponent,
            pie: PieDiagramPartialConfigComponent,
            scatter: DiagramPartialConfigEditComponent,
            line: LinearDiagramPartialConfigComponent,
            booleano: BooleanoWidgetPartialConfigComponent
        };
        this.ConfigChanged = new EventEmitter();
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
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
                return { provide: inputName, useValue: data.inputs[inputName] };
            });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(_component);
            /** @type {?} */
            var component = factory.create(injector);
            if ((/** @type {?} */ (component.instance)).ConfigChanged)
                (/** @type {?} */ (component.instance)).ConfigChanged.subscribe(function () {
                    _this.ConfigChanged.emit();
                });
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
                        DiagramPartialConfigEditComponent,
                        PieDiagramPartialConfigComponent,
                        LinearDiagramPartialConfigComponent,
                        BooleanoWidgetPartialConfigComponent
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
        ConfigChanged: [{ type: Output }],
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
    DynamicConfigComponentSelectorComponent.prototype.ConfigChanged;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.currentComponent;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUVULEtBQUssRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUM1SSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUN6SSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUNySixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQzs7SUE4RGpKLGlEQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQTlDdEQsd0JBQW1CO1lBQ2xCLEdBQUcsRUFBRSxpQ0FBaUM7WUFDdEMsSUFBSSxFQUFFLG1DQUFtQztZQUN6QyxhQUFhLEVBQUUsbUNBQW1DO1lBQ2xELEtBQUssRUFBRSxpQ0FBaUM7WUFDeEMsR0FBRyxFQUFFLGdDQUFnQztZQUNyQyxPQUFPLEVBQUUsaUNBQWlDO1lBQzFDLElBQUksRUFBRSxtQ0FBbUM7WUFDekMsUUFBUSxFQUFFLG9DQUFvQztTQUM5QyxDQUFDO1FBR0YscUJBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0Msd0JBQXdCLElBQUksQ0FBQztLQWlDNkI7SUFoQzFELHNCQUNJLHlEQUFJOzs7OztRQURSLFVBQ1MsSUFBUztZQURsQixpQkErQkM7WUE3QkEsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDbkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO29CQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0QsT0FBTzthQUNQOztZQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xELElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7Z0JBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7YUFDaEUsQ0FBQyxDQUFDOztZQUNILElBQUksY0FBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFFaEUsSUFBSSxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQ3RELGNBQWMsRUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUM3QyxDQUFDOztZQUNGLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBQ2hFLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxtQkFBTSxTQUFTLENBQUMsUUFBUSxFQUFDLENBQUMsYUFBYTtnQkFDMUMsbUJBQU0sU0FBUyxDQUFDLFFBQVEsRUFBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7b0JBQ2pELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQzFCLENBQUMsQ0FBQztZQUVKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1NBQ2xDOzs7T0FBQTs7OztJQUVELGlFQUFlOzs7SUFBZixlQUFvQjs7Z0JBM0RwQixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0Msa0RBQWlFO29CQUVqRSxlQUFlLEVBQUU7d0JBQ2hCLGlDQUFpQzt3QkFDakMsZ0NBQWdDO3dCQUNoQyxtQ0FBbUM7d0JBQ25DLG9DQUFvQztxQkFDcEM7O2lCQUNEOzs7O2dCQTlCQSx3QkFBd0I7Ozs0Q0EwQ3ZCLFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQ0FFakUsTUFBTTt1QkFFTixLQUFLOztrREFuRFA7O1NBb0NhLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvclwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnNjc3NcIiBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGFyZWE6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0XCJhcmVhLXNwbGluZVwiOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGRvbnV0OiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRwaWU6IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0c2NhdHRlcjogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0bGluZTogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRib29sZWFubzogQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBDb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBhbnkpIHtcclxuXHRcdGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0aWYgKCEoZGF0YS50eXBlIGluIHRoaXMudHlwZU1hcFRvRGlhZ3JhbSkpIHtcclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkgdGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IF9jb21wb25lbnQgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogZGF0YS5pbnB1dHNbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHRcdGxldCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XHJcblx0XHRpZiAoKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkKVxyXG5cdFx0XHQoPGFueT5jb21wb25lbnQuaW5zdGFuY2UpLkNvbmZpZ0NoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIl19