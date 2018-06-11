/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services/diagram.service";
export class NumericEditDiagramComponent {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    constructor(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source).subscribe(data => {
            debugger;
        });
    }
}
NumericEditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-edit-diagram",
                template: `<mat-card *ngIf="dataLoaded | async" class="diagram-box">
  <mat-card-header>
    <mat-card-title fxLayoutAlign="space-between center">
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  </mat-card-content>
</mat-card>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
NumericEditDiagramComponent.ctorParameters = () => [
    { type: Injector },
    { type: DiagramService }
];
NumericEditDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
function NumericEditDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NumericEditDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericEditDiagramComponent.prototype._data;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.injector;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy1lZGl0LWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLWVkaXQtZGlhZ3JhbS9udW1lcmljLWVkaXQtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWVoRSxNQUFNOzs7OztJQVdMLFlBQW9CLFFBQWtCLEVBQVUsY0FBOEI7UUFBMUQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjswQkFWakUsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBV3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBVkQsSUFDSSxJQUFJLENBQUMsSUFBSTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNCOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbEI7Ozs7SUFLRCxRQUFROztRQUVQLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELFFBQVEsQ0FBQztTQUNULENBQUMsQ0FBQztLQUNIOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7OztZQU9DO2dCQUNYLE1BQU0sRUFBRSxDQUFDLG9KQUFvSixDQUFDO2FBQzlKOzs7O1lBbEJ3RCxRQUFRO1lBSXhELGNBQWM7OzttQkFrQnJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtZWRpdC1kaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19