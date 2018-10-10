/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
import { map } from "rxjs/operators";
export class DiagramSelectorComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map(res => res.Result));
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.config.diagramId != undefined;
    }
    /**
     * @return {?}
     */
    get config() {
        return {
            diagramId: this.selectedDiagramId
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DiagramSelectorComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="column wrap" fxLayoutGap="15px">
<h4>لیست نمودارها</h4>
      <mat-form-field fxFlex="100">
  <mat-select placeholder="نمودار ها" [(ngModel)]="selectedDiagramId" name="selectedDiagramId">
  <mat-option *ngFor="let item of (diagrams$ | async)" [value]="item._id">
    {{item.Name}}
  </mat-option>
</mat-select>
</mat-form-field>
</div>`
            },] },
];
/** @nocollapse */
DiagramSelectorComponent.ctorParameters = () => [
    { type: DiagramService }
];
if (false) {
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagrams$;
    /** @type {?} */
    DiagramSelectorComponent.prototype.selectedDiagramId;
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFjckMsTUFBTTs7OztJQVdMLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ2hGOzs7O0lBVkQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7S0FDMUM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDVCxPQUFPO1lBQ04sU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDakMsQ0FBQztLQUNGOzs7O0lBSUQsUUFBUSxNQUFLOzs7WUExQmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7O09BU0o7YUFDTjs7OztZQWRRLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uIHdyYXBcIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuPGg0PtmE24zYs9iqINmG2YXZiNiv2KfYsdmH2Kc8L2g0PlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMTAwXCI+XHJcbiAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZhtmF2YjYr9in2LEg2YfYp1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWREaWFncmFtSWRcIiBuYW1lPVwic2VsZWN0ZWREaWFncmFtSWRcIj5cclxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoZGlhZ3JhbXMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0uTmFtZX19XHJcbiAgPC9tYXQtb3B0aW9uPlxyXG48L21hdC1zZWxlY3Q+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1TZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdyaWRJdGVtQ29tcG9uZW50PHsgZGlhZ3JhbUlkOiBzdHJpbmcgfT4ge1xyXG5cdGRpYWdyYW1zJDogT2JzZXJ2YWJsZTxEaWFncmFtTW9kZWxbXT47XHJcblx0c2VsZWN0ZWREaWFncmFtSWQ6IHN0cmluZztcclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGlhZ3JhbUlkICE9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRpYWdyYW1JZDogdGhpcy5zZWxlY3RlZERpYWdyYW1JZFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMkID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpLnBpcGUobWFwKHJlcyA9PiByZXMuUmVzdWx0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=