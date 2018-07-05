/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<mat-select placeholder="Diagrams" [(ngModel)]="selectedDiagramId" name="selectedDiagramId">
  <mat-option *ngFor="let item of (diagrams$ | async)" [value]="item._id">
    {{item._id}}
  </mat-option>
</mat-select>`
            },] },
];
/** @nocollapse */
DiagramSelectorComponent.ctorParameters = () => [
    { type: DiagramService }
];
function DiagramSelectorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagrams$;
    /** @type {?} */
    DiagramSelectorComponent.prototype.selectedDiagramId;
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTckMsTUFBTTs7OztJQVdMLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ2hGOzs7O0lBVkQsSUFBSSxLQUFLO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQztLQUMxQzs7OztJQUNELElBQUksTUFBTTtRQUNULE1BQU0sQ0FBQztZQUNOLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ2pDLENBQUM7S0FDRjs7OztJQUlELFFBQVEsTUFBSzs7O1lBckJiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Y0FJRzthQUNiOzs7O1lBVFEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiRGlhZ3JhbXNcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRGlhZ3JhbUlkXCIgbmFtZT1cInNlbGVjdGVkRGlhZ3JhbUlkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGRpYWdyYW1zJCB8IGFzeW5jKVwiIFt2YWx1ZV09XCJpdGVtLl9pZFwiPlxyXG4gICAge3tpdGVtLl9pZH19XHJcbiAgPC9tYXQtb3B0aW9uPlxyXG48L21hdC1zZWxlY3Q+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8eyBkaWFncmFtSWQ6IHN0cmluZyB9PiB7XHJcblx0ZGlhZ3JhbXMkOiBPYnNlcnZhYmxlPERpYWdyYW1Nb2RlbFtdPjtcclxuXHRzZWxlY3RlZERpYWdyYW1JZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kaWFncmFtSWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGlhZ3JhbUlkOiB0aGlzLnNlbGVjdGVkRGlhZ3JhbUlkXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCkucGlwZShtYXAocmVzID0+IHJlcy5SZXN1bHQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==