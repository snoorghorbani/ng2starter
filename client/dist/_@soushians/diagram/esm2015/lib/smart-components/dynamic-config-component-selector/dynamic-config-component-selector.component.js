/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, Output, EventEmitter } from "@angular/core";
import { DiagramPartialConfigEditComponent } from "../../dumb-components/diagram-partial-config-edit/diagram-partial-config-edit.component";
import { PieDiagramPartialConfigComponent } from "../../dumb-components/pie-diagram-partial-config/pie-diagram-partial-config.component";
import { BooleanoWidgetPartialConfigComponent } from "../../dumb-components/booleano-widget-partial-config/booleano-widget-partial-config.component";
import { LinearDiagramPartialConfigComponent } from "../../dumb-components/linear-diagram-partial-config/linear-diagram-partial-config.component";
export class DynamicConfigComponentSelectorComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
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
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        if (!(data.type in this.typeMapToDiagram)) {
            if (this.currentComponent)
                this.currentComponent.destroy();
            return;
        }
        /** @type {?} */
        let _component = this.typeMapToDiagram[data.type];
        /** @type {?} */
        let inputProviders = Object.keys(data.inputs).map(inputName => {
            return { provide: inputName, useValue: data.inputs[inputName] };
        });
        /** @type {?} */
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        /** @type {?} */
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(_component);
        /** @type {?} */
        let component = factory.create(injector);
        if (((/** @type {?} */ (component.instance))).ConfigChanged)
            ((/** @type {?} */ (component.instance))).ConfigChanged.subscribe(() => {
                this.ConfigChanged.emit();
            });
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
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
DynamicConfigComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    ConfigChanged: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.dynamicComponentContainer;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.ConfigChanged;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.currentComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicConfigComponentSelectorComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUVULEtBQUssRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUM1SSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUN6SSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUNySixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQWVsSixNQUFNLE9BQU8sdUNBQXVDOzs7O0lBK0NuRCxZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQTlDdEQscUJBQWdCLEdBQUc7WUFDbEIsR0FBRyxFQUFFLGlDQUFpQztZQUN0QyxJQUFJLEVBQUUsbUNBQW1DO1lBQ3pDLGFBQWEsRUFBRSxtQ0FBbUM7WUFDbEQsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxHQUFHLEVBQUUsZ0NBQWdDO1lBQ3JDLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsSUFBSSxFQUFFLG1DQUFtQztZQUN6QyxRQUFRLEVBQUUsb0NBQW9DO1NBQzlDLENBQUM7UUFHUSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MscUJBQWdCLEdBQVEsSUFBSSxDQUFDO0lBaUM0QixDQUFDOzs7OztJQWhDMUQsSUFDSSxJQUFJLENBQUMsSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ25ELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzRCxPQUFPO1NBQ1A7O1lBQ0csVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztZQUM3QyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDakUsQ0FBQyxDQUFDOztZQUNFLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDOztZQUUzRCxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQ3RELGNBQWMsRUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUM3Qzs7WUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUM7O1lBQzNELFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsbUJBQUssU0FBUyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsYUFBYTtZQUMxQyxDQUFDLG1CQUFLLFNBQVMsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZUFBZSxLQUFJLENBQUM7OztZQTNEcEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLGtEQUFpRTtnQkFFakUsZUFBZSxFQUFFO29CQUNoQixpQ0FBaUM7b0JBQ2pDLGdDQUFnQztvQkFDaEMsbUNBQW1DO29CQUNuQyxvQ0FBb0M7aUJBQ3BDOzthQUNEOzs7O1lBOUJBLHdCQUF3Qjs7O3dDQTBDdkIsU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzRCQUVqRSxNQUFNO21CQUVOLEtBQUs7Ozs7SUFkTixtRUFTRTs7SUFDRiw0RUFDNEM7O0lBQzVDLGdFQUE2Qzs7SUFDN0MsbUVBQTZCOzs7OztJQWlDakIsMkRBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1wiIF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHREaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Qm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0dHlwZU1hcFRvRGlhZ3JhbSA9IHtcclxuXHRcdGJhcjogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0YXJlYTogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRcImFyZWEtc3BsaW5lXCI6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0ZG9udXQ6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdHBpZTogUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRzY2F0dGVyOiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRsaW5lOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGJvb2xlYW5vOiBCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnRcclxuXHR9O1xyXG5cdEBWaWV3Q2hpbGQoXCJkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdGR5bmFtaWNDb21wb25lbnRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QE91dHB1dCgpIENvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHRpZiAoIShkYXRhLnR5cGUgaW4gdGhpcy50eXBlTWFwVG9EaWFncmFtKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgX2NvbXBvbmVudCA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLnR5cGVdO1xyXG5cdFx0bGV0IGlucHV0UHJvdmlkZXJzID0gT2JqZWN0LmtleXMoZGF0YS5pbnB1dHMpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiBkYXRhLmlucHV0c1tpbnB1dE5hbWVdIH07XHJcblx0XHR9KTtcclxuXHRcdGxldCByZXNvbHZlZElucHV0cyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKGlucHV0UHJvdmlkZXJzKTtcclxuXHJcblx0XHRsZXQgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFxyXG5cdFx0XHRyZXNvbHZlZElucHV0cyxcclxuXHRcdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcblx0XHQpO1xyXG5cdFx0bGV0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KF9jb21wb25lbnQpO1xyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHRcdGlmICgoPGFueT5jb21wb25lbnQuaW5zdGFuY2UpLkNvbmZpZ0NoYW5nZWQpXHJcblx0XHRcdCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuQ29uZmlnQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuQ29uZmlnQ2hhbmdlZC5lbWl0KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxufVxyXG4iXX0=