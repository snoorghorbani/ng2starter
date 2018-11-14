/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        let inputProviders = Object.keys(raw).map(inputName => {
            return { provide: inputName, useValue: raw[inputName] };
        });
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
                template: `<mat-card class="diagram-box" [style.background]="backgroundColor" fxLayout="column" fxLayoutAlign="space-between stretch">
    <div fxFlex="0 0 auto" *ngIf="_data" fxLayoutAlign="space-between center">
        <span fxLayoutAlign="start center" class="widget-title">
            {{_data.Name}}
        </span>
        <a [routerLink]="['../diagrams/edit' ,  _data._id]" fxLayoutAlign="center center" mat-icon-button color="primary">
            <mat-icon aria-label="edit diagram">edit</mat-icon>
        </a>
    </div>
    <!-- <mat-card-content> -->
    <!-- <mat-slider invert [(ngModel)]="time" (change)="timeChange($event)"></mat-slider> -->
    <mat-slider class="over" fxFlex="0 0 auto" invert min='1' max='1000' value="1000" (change)="timeChange($event)"></mat-slider>
    <div fxFlex="1 1 auto" class="widget-container">
        <div #dynamicComponentContainer></div>
    </div>
    <!-- </mat-card-content> -->
</mat-card>`,
                styles: [`:host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}`],
                entryComponents: [
                    NumericDiagramComponent,
                    ServerConnectingTimeDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramComponent
                ]
            },] },
];
/** @nocollapse */
DynamicComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    widgetComponent: [{ type: ViewChild, args: [DiagramComponent,] }],
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
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFDckosT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUE2QnBGLE1BQU07Ozs7SUErQ0wsWUFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7Z0NBOUNuQztZQUNsQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixhQUFhLEVBQUUsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsS0FBSyxFQUFFLG9DQUFvQztZQUMzQyxRQUFRLEVBQUUsNEJBQTRCO1NBQ3RDO2dDQUl1QixJQUFJOytCQThCRixFQUFFO0tBQzhCOzs7OztJQTdCMUQsSUFDSSxJQUFJLENBQUMsSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1FBQ2xCLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7O1FBQ25CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFDN0QsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3hELENBQUMsQ0FBQzs7UUFDSCxJQUFJLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O1FBRWhFLElBQUksUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUN0RCxjQUFjLEVBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FDN0MsQ0FBQzs7UUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUVoRSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7S0FDbEM7Ozs7SUFHRCxlQUFlLE1BQUs7Ozs7O0lBQ3BCLFVBQVUsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0M7OztZQTlFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLG1RQUFtUSxDQUFDO2dCQUM3USxlQUFlLEVBQUU7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsb0NBQW9DO29CQUNwQyw0QkFBNEI7b0JBQzVCLGdCQUFnQjtpQkFDaEI7YUFDRDs7OztZQXhDQSx3QkFBd0I7Ozt3Q0FzRHZCLFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs4QkFFakUsU0FBUyxTQUFDLGdCQUFnQjttQkFHMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cImRpYWdyYW0tYm94XCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZENvbG9yXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBzdHJldGNoXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgKm5nSWY9XCJfZGF0YVwiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBjbGFzcz1cIndpZGdldC10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e19kYXRhLk5hbWV9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL2RpYWdyYW1zL2VkaXQnICwgIF9kYXRhLl9pZF1cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGRpYWdyYW1cIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPG1hdC1jYXJkLWNvbnRlbnQ+IC0tPlxyXG4gICAgPCEtLSA8bWF0LXNsaWRlciBpbnZlcnQgWyhuZ01vZGVsKV09XCJ0aW1lXCIgKGNoYW5nZSk9XCJ0aW1lQ2hhbmdlKCRldmVudClcIj48L21hdC1zbGlkZXI+IC0tPlxyXG4gICAgPG1hdC1zbGlkZXIgY2xhc3M9XCJvdmVyXCIgZnhGbGV4PVwiMCAwIGF1dG9cIiBpbnZlcnQgbWluPScxJyBtYXg9JzEwMDAnIHZhbHVlPVwiMTAwMFwiIChjaGFuZ2UpPVwidGltZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxIDEgYXV0b1wiIGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPC9tYXQtY2FyZC1jb250ZW50PiAtLT5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NjBweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246LjRzIGVhc2UtaW4tb3V0fWBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHBpZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRsaW5lOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0YXJlYTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdG51bWVybzogTnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHR0ZW1wbzogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnRcclxuXHR9O1xyXG5cdEBWaWV3Q2hpbGQoXCJkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdGR5bmFtaWNDb21wb25lbnRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QFZpZXdDaGlsZChEaWFncmFtQ29tcG9uZW50KSB3aWRnZXRDb21wb25lbnQ6IERpYWdyYW1Db21wb25lbnQ7XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHRsZXQgcmF3ID0geyBkYXRhIH07XHJcblx0XHRsZXQgX2NvbXBvbmVudCA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLkNoYXJ0LmRhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhyYXcpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiByYXdbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZyA9IFwiXCI7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuX2NvbXBvbmVudC50aW1lQ2hhbmdlKGUpO1xyXG5cdH1cclxufVxyXG4iXX0=