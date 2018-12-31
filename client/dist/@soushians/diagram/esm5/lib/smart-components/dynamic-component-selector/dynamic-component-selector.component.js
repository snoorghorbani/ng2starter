/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector } from "@angular/core";
import { NumericDiagramComponent } from "../../dumb-components/numeric-diagram/numeric-diagram.component";
import { ServerStatusDiagramComponent } from "../../dumb-components/server-status-diagram/server-status-diagram.component";
import { ServerConnectingTimeDiagramComponent } from "../../dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { DiagramComponent } from "../../smart-components/diagram/diagram.component";
var DynamicComponentSelectorComponent = /** @class */ (function () {
    function DynamicComponentSelectorComponent(resolver) {
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
    Object.defineProperty(DynamicComponentSelectorComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || Object.keys(data).length == 0)
                return;
            this.backgroundColor = data.Box.BackgroundColor;
            this._data = data;
            /** @type {?} */
            var raw = { data: data };
            /** @type {?} */
            var _component = this.typeMapToDiagram[data.Chart.data.type];
            /** @type {?} */
            var inputProviders = Object.keys(raw).map(function (inputName) {
                return { provide: inputName, useValue: raw[inputName] };
            });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(_component);
            /** @type {?} */
            var component = factory.create(injector);
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
    DynamicComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    DynamicComponentSelectorComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.currentComponent._component.timeChange(e);
    };
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
    DynamicComponentSelectorComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    DynamicComponentSelectorComponent.propDecorators = {
        dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
        widgetComponent: [{ type: ViewChild, args: [DiagramComponent,] }],
        data: [{ type: Input }]
    };
    return DynamicComponentSelectorComponent;
}());
export { DynamicComponentSelectorComponent };
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
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFDckosT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0lBNERuRiwyQ0FBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUE5Q3RELHdCQUFtQjtZQUNsQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixhQUFhLEVBQUUsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsS0FBSyxFQUFFLG9DQUFvQztZQUMzQyxRQUFRLEVBQUUsNEJBQTRCO1NBQ3RDLENBQUM7UUFJRix3QkFBd0IsSUFBSSxDQUFDO1FBOEI3Qix1QkFBMEIsRUFBRSxDQUFDO0tBQzZCO0lBN0IxRCxzQkFDSSxtREFBSTs7Ozs7UUFEUixVQUNTLElBQVM7WUFDakIsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7WUFDbEIsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDOztZQUNuQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQzdELElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsU0FBUztnQkFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2FBQ3hELENBQUMsQ0FBQzs7WUFDSCxJQUFJLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O1lBRWhFLElBQUksUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUN0RCxjQUFjLEVBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FDN0MsQ0FBQzs7WUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDOztZQUVoRSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1NBQ2xDOzs7T0FBQTs7OztJQUdELDJEQUFlOzs7SUFBZixlQUFvQjs7Ozs7SUFDcEIsc0RBQVU7Ozs7SUFBVixVQUFXLENBQUM7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvQzs7Z0JBOURELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyw0Z0NBQTBEO29CQUUxRCxlQUFlLEVBQUU7d0JBQ2hCLHVCQUF1Qjt3QkFDdkIsb0NBQW9DO3dCQUNwQyw0QkFBNEI7d0JBQzVCLGdCQUFnQjtxQkFDaEI7O2lCQUNEOzs7O2dCQXhCQSx3QkFBd0I7Ozs0Q0FzQ3ZCLFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtrQ0FFakUsU0FBUyxTQUFDLGdCQUFnQjt1QkFHMUIsS0FBSzs7NENBL0NQOztTQTZCYSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnNjc3NcIiBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHBpZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRsaW5lOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0YXJlYTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdG51bWVybzogTnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHR0ZW1wbzogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnRcclxuXHR9O1xyXG5cdEBWaWV3Q2hpbGQoXCJkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdGR5bmFtaWNDb21wb25lbnRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QFZpZXdDaGlsZChEaWFncmFtQ29tcG9uZW50KSB3aWRnZXRDb21wb25lbnQ6IERpYWdyYW1Db21wb25lbnQ7XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHRsZXQgcmF3ID0geyBkYXRhIH07XHJcblx0XHRsZXQgX2NvbXBvbmVudCA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLkNoYXJ0LmRhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhyYXcpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiByYXdbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZyA9IFwiXCI7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuX2NvbXBvbmVudC50aW1lQ2hhbmdlKGUpO1xyXG5cdH1cclxufVxyXG4iXX0=