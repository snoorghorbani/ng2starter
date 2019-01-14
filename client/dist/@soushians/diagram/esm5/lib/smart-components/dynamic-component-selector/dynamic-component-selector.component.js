/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
    DynamicComponentSelectorComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFDckosT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFcEY7SUEwREMsMkNBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBOUN0RCxxQkFBZ0IsR0FBRztZQUNsQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixhQUFhLEVBQUUsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsS0FBSyxFQUFFLG9DQUFvQztZQUMzQyxRQUFRLEVBQUUsNEJBQTRCO1NBQ3RDLENBQUM7UUFJRixxQkFBZ0IsR0FBUSxJQUFJLENBQUM7UUE4QjdCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO0lBQzRCLENBQUM7SUE3QjFELHNCQUNJLG1EQUFJOzs7OztRQURSLFVBQ1MsSUFBUztZQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztnQkFDZCxHQUFHLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRTs7Z0JBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2dCQUN4RCxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTO2dCQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDekQsQ0FBQyxDQUFDOztnQkFDRSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzs7Z0JBRTNELFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FDdEQsY0FBYyxFQUNkLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQzdDOztnQkFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUM7O2dCQUUzRCxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFFeEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQztZQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7SUFHRCwyREFBZTs7O0lBQWYsY0FBbUIsQ0FBQzs7Ozs7SUFDcEIsc0RBQVU7Ozs7SUFBVixVQUFXLENBQUM7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkE5REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDRnQ0FBMEQ7b0JBRTFELGVBQWUsRUFBRTt3QkFDaEIsdUJBQXVCO3dCQUN2QixvQ0FBb0M7d0JBQ3BDLDRCQUE0Qjt3QkFDNUIsZ0JBQWdCO3FCQUNoQjs7aUJBQ0Q7Ozs7Z0JBeEJBLHdCQUF3Qjs7OzRDQXNDdkIsU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO2tDQUVqRSxTQUFTLFNBQUMsZ0JBQWdCO3VCQUcxQixLQUFLOztJQWtDUCx3Q0FBQztDQUFBLEFBL0RELElBK0RDO1NBcERZLGlDQUFpQzs7O0lBQzdDLDZEQVdFOztJQUNGLHNFQUM0Qzs7SUFDNUMsNERBQStEOztJQUMvRCw2REFBNkI7O0lBQzdCLGtEQUFXOztJQTZCWCw0REFBNkI7Ozs7O0lBQ2pCLHFEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1wiIF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHROdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0dHlwZU1hcFRvRGlhZ3JhbSA9IHtcclxuXHRcdGJhcjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGRvbnV0OiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0cGllOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0c2NhdHRlcjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGxpbmU6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRhcmVhOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0XCJhcmVhLXNwbGluZVwiOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0bnVtZXJvOiBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHRlbXBvOiBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRib29sZWFubzogU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAVmlld0NoaWxkKERpYWdyYW1Db21wb25lbnQpIHdpZGdldENvbXBvbmVudDogRGlhZ3JhbUNvbXBvbmVudDtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdF9kYXRhOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBhbnkpIHtcclxuXHRcdGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhLkJveC5CYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdGxldCByYXcgPSB7IGRhdGEgfTtcclxuXHRcdGxldCBfY29tcG9uZW50ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEuQ2hhcnQuZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKHJhdykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IHJhd1tpbnB1dE5hbWVdIH07XHJcblx0XHR9KTtcclxuXHRcdGxldCByZXNvbHZlZElucHV0cyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKGlucHV0UHJvdmlkZXJzKTtcclxuXHJcblx0XHRsZXQgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFxyXG5cdFx0XHRyZXNvbHZlZElucHV0cyxcclxuXHRcdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcblx0XHQpO1xyXG5cdFx0bGV0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KF9jb21wb25lbnQpO1xyXG5cclxuXHRcdGxldCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XHJcblxyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGJhY2tncm91bmRDb2xvcjogU3RyaW5nID0gXCJcIjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5fY29tcG9uZW50LnRpbWVDaGFuZ2UoZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==