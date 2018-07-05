/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
export class DiagramsComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
        // this.diagrams
        //         .delay(100)
        //         .subscribe(diagrams =>
        //                 diagrams.Result.forEach(diagram =>
        //                         this.diagramService.generateDiagram(diagram.Chart, diagram._id, diagram.Source.Route, diagram.Source.Sync)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    }
}
DiagramsComponent.decorators = [
    { type: Component, args: [{
                selector: "diagrams",
                template: `<mat-grid-list cols="12" rowHeight="100px">
  <mat-grid-tile *ngFor="let diagram of (diagrams | async)?.Result" 
  [colspan]="diagram.Box.Cols" 
  [rowspan]="diagram.Box.Rows" 
  [style.color]="diagram.Box.Color">
    <dynamic-component-selector class="diagram-box" [data]="diagram"></dynamic-component-selector>
  </mat-grid-tile>
</mat-grid-list>
<br />
<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center">
</div>
<div fxLayoutAlign='end center'>
  <button mat-fab routerLink="../diagrams/add" class="add-btn">
    <mat-icon aria-label="Example icon-button with a heart icon">add</mat-icon>
  </button>
</div>
`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}`]
            },] },
];
/** @nocollapse */
DiagramsComponent.ctorParameters = () => [
    { type: DiagramService }
];
function DiagramsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramsComponent.prototype.diagrams;
    /** @type {?} */
    DiagramsComponent.prototype.width;
    /** @type {?} */
    DiagramsComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNCaEUsTUFBTTs7OztJQUdMLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtxQkFEMUMsR0FBRztRQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7O0tBT2xEOzs7O0lBRUQsUUFBUTs7Ozs7O0tBTVA7OztZQXhDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCVjtnQkFDQSxNQUFNLEVBQUUsQ0FBQyxvR0FBb0csQ0FBQzthQUM5Rzs7OztZQXJCUSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbXNcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxMlwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XHJcbiAgPG1hdC1ncmlkLXRpbGUgKm5nRm9yPVwibGV0IGRpYWdyYW0gb2YgKGRpYWdyYW1zIHwgYXN5bmMpPy5SZXN1bHRcIiBcclxuICBbY29sc3Bhbl09XCJkaWFncmFtLkJveC5Db2xzXCIgXHJcbiAgW3Jvd3NwYW5dPVwiZGlhZ3JhbS5Cb3guUm93c1wiIFxyXG4gIFtzdHlsZS5jb2xvcl09XCJkaWFncmFtLkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCJkaWFncmFtXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICA8L21hdC1ncmlkLXRpbGU+XHJcbjwvbWF0LWdyaWQtbGlzdD5cclxuPGJyIC8+XHJcbjxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249J2VuZCBjZW50ZXInPlxyXG4gIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vZGlhZ3JhbXMvYWRkXCIgY2xhc3M9XCJhZGQtYnRuXCI+XHJcbiAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmFkZC1idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjUwcHg7bGVmdDoyNXB4O3otaW5kZXg6MX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpO1xyXG5cclxuXHRcdC8vIHRoaXMuZGlhZ3JhbXNcclxuXHRcdC8vICAgICAgICAgLmRlbGF5KDEwMClcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkaWFncmFtcyA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIGRpYWdyYW1zLlJlc3VsdC5mb3JFYWNoKGRpYWdyYW0gPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKGRpYWdyYW0uQ2hhcnQsIGRpYWdyYW0uX2lkLCBkaWFncmFtLlNvdXJjZS5Sb3V0ZSwgZGlhZ3JhbS5Tb3VyY2UuU3luYykpKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5zZW5kKFwiYWRkLW1lc3NhZ2VcIik7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uub25NZXNzYWdlKCkuc3Vic2NyaWJlKG1zZz0+e1xyXG5cdFx0Ly8gICAgICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==