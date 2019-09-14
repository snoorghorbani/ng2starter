/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector } from "@angular/core";
import { NumericDiagramComponent } from "../../dumb-components/numeric-diagram/numeric-diagram.component";
import { ServerStatusDiagramComponent } from "../../dumb-components/server-status-diagram/server-status-diagram.component";
import { ServerConnectingTimeDiagramComponent } from "../../dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { DiagramComponent } from "../../smart-components/diagram/diagram.component";
export class DynamicComponentSelectorComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: DiagramComponent,
            donut: DiagramComponent,
            pie: DiagramComponent,
            scatter: DiagramComponent,
            line: DiagramComponent,
            area: DiagramComponent,
            "area-spline": DiagramComponent,
            numero: NumericDiagramComponent,
            tempo: ServerConnectingTimeDiagramComponent,
            booleano: ServerStatusDiagramComponent
        };
        this.currentComponent = null;
        this.backgroundColor = "";
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        this.backgroundColor = data.Box.BackgroundColor;
        this._data = data;
        /** @type {?} */
        let raw = { data };
        /** @type {?} */
        let _component = this.typeMapToDiagram[data.Chart.data.type];
        /** @type {?} */
        let inputProviders = Object.keys(raw).map((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            return { provide: inputName, useValue: raw[inputName] };
        }));
        /** @type {?} */
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        /** @type {?} */
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(_component);
        /** @type {?} */
        let component = factory.create(injector);
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
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        this.currentComponent._component.timeChange(e);
    }
}
DynamicComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-component-selector",
                template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\r\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\r\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\r\n            {{_data.Name}}\r\n        </span>\r\n        <a [routerLink]=\"['../diagrams/edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\r\n        </a>\r\n    </div>\r\n    <!-- <mat-card-content> -->\r\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\r\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\r\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\r\n        <div #dynamicComponentContainer></div>\r\n    </div>\r\n    <!-- </mat-card-content> -->\r\n</mat-card>",
                entryComponents: [
                    NumericDiagramComponent,
                    ServerConnectingTimeDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramComponent
                ],
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
            }] }
];
/** @nocollapse */
DynamicComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef, static: false },] }],
    widgetComponent: [{ type: ViewChild, args: [DiagramComponent, { static: false },] }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.dynamicComponentContainer;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.widgetComponent;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.currentComponent;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype._data;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.backgroundColor;
    /**
     * @type {?}
     * @private
     */
    DynamicComponentSelectorComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFDckosT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFhcEYsTUFBTSxPQUFPLGlDQUFpQzs7OztJQStDN0MsWUFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUE5Q3RELHFCQUFnQixHQUFHO1lBQ2xCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsTUFBTSxFQUFFLHVCQUF1QjtZQUMvQixLQUFLLEVBQUUsb0NBQW9DO1lBQzNDLFFBQVEsRUFBRSw0QkFBNEI7U0FDdEMsQ0FBQztRQUlGLHFCQUFnQixHQUFRLElBQUksQ0FBQztRQThCN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7SUFDNkIsQ0FBQzs7Ozs7SUE3QjNELElBQ0ksSUFBSSxDQUFDLElBQVM7UUFDakIsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztZQUNkLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRTs7WUFDZCxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDeEQsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUN6RCxDQUFDLEVBQUM7O1lBQ0UsY0FBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7O1lBRTNELFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FDdEQsY0FBYyxFQUNkLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQzdDOztZQUNHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQzs7WUFFM0QsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRXhDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQzs7OztJQUdELGVBQWUsS0FBSyxDQUFDOzs7OztJQUNyQixVQUFVLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTlERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsNGdDQUEwRDtnQkFFMUQsZUFBZSxFQUFFO29CQUNoQix1QkFBdUI7b0JBQ3ZCLG9DQUFvQztvQkFDcEMsNEJBQTRCO29CQUM1QixnQkFBZ0I7aUJBQ2hCOzthQUNEOzs7O1lBeEJBLHdCQUF3Qjs7O3dDQXNDdkIsU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBRWhGLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7bUJBRzdDLEtBQUs7Ozs7SUFqQk4sNkRBV0U7O0lBQ0Ysc0VBQzRDOztJQUM1Qyw0REFBa0Y7O0lBQ2xGLDZEQUE2Qjs7SUFDN0Isa0RBQVc7O0lBNkJYLDREQUE2Qjs7Ozs7SUFDakIscURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0SW5wdXQsXHJcblx0QWZ0ZXJWaWV3SW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0UmVmbGVjdGl2ZUluamVjdG9yLFxyXG5cdE9uRGVzdHJveVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvclwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnNjc3NcIl0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHROdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0dHlwZU1hcFRvRGlhZ3JhbSA9IHtcclxuXHRcdGJhcjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGRvbnV0OiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0cGllOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0c2NhdHRlcjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGxpbmU6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRhcmVhOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0XCJhcmVhLXNwbGluZVwiOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0bnVtZXJvOiBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHRlbXBvOiBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRib29sZWFubzogU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAVmlld0NoaWxkKERpYWdyYW1Db21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB3aWRnZXRDb21wb25lbnQ6IERpYWdyYW1Db21wb25lbnQ7XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHRsZXQgcmF3ID0geyBkYXRhIH07XHJcblx0XHRsZXQgX2NvbXBvbmVudCA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLkNoYXJ0LmRhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhyYXcpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiByYXdbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZyA9IFwiXCI7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7IH1cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5fY29tcG9uZW50LnRpbWVDaGFuZ2UoZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==