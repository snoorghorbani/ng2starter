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
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map((res) => res.Result));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTckMsTUFBTTs7OztJQVdMLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDbEY7Ozs7SUFWRCxJQUFJLEtBQUs7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO0tBQzFDOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1QsTUFBTSxDQUFDO1lBQ04sU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDakMsQ0FBQztLQUNGOzs7O0lBSUQsUUFBUSxNQUFLOzs7WUFyQmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7OztjQUlHO2FBQ2I7Ozs7WUFUUSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgSUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJEaWFncmFtc1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWREaWFncmFtSWRcIiBuYW1lPVwic2VsZWN0ZWREaWFncmFtSWRcIj5cclxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoZGlhZ3JhbXMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0uX2lkfX1cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHcmlkSXRlbUNvbXBvbmVudDx7IGRpYWdyYW1JZDogc3RyaW5nIH0+IHtcclxuXHRkaWFncmFtcyQ6IE9ic2VydmFibGU8RGlhZ3JhbU1vZGVsW10+O1xyXG5cdHNlbGVjdGVkRGlhZ3JhbUlkOiBzdHJpbmc7XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRpYWdyYW1JZCAhPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkaWFncmFtSWQ6IHRoaXMuc2VsZWN0ZWREaWFncmFtSWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKS5waXBlKG1hcCgocmVzKSA9PiByZXMuUmVzdWx0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=