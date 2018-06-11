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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNCaEUsTUFBTTs7OztJQUdMLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtxQkFEMUMsR0FBRztRQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7O0tBT2xEOzs7O0lBRUQsUUFBUTs7Ozs7O0tBTVA7OztZQXhDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCVjtnQkFDQSxNQUFNLEVBQUUsQ0FBQyxvR0FBb0csQ0FBQzthQUM5Rzs7OztZQXJCUSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1zXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMTJcIiByb3dIZWlnaHQ9XCIxMDBweFwiPlxyXG4gIDxtYXQtZ3JpZC10aWxlICpuZ0Zvcj1cImxldCBkaWFncmFtIG9mIChkaWFncmFtcyB8IGFzeW5jKT8uUmVzdWx0XCIgXHJcbiAgW2NvbHNwYW5dPVwiZGlhZ3JhbS5Cb3guQ29sc1wiIFxyXG4gIFtyb3dzcGFuXT1cImRpYWdyYW0uQm94LlJvd3NcIiBcclxuICBbc3R5bGUuY29sb3JdPVwiZGlhZ3JhbS5Cb3guQ29sb3JcIj5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBjbGFzcz1cImRpYWdyYW0tYm94XCIgW2RhdGFdPVwiZGlhZ3JhbVwiPjwvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgPC9tYXQtZ3JpZC10aWxlPlxyXG48L21hdC1ncmlkLWxpc3Q+XHJcbjxiciAvPlxyXG48ZGl2IGZ4RmxleExheW91dD1cInJvd1wiIGZ4TGF5b3V0V3JhcCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG48L2Rpdj5cclxuPGRpdiBmeExheW91dEFsaWduPSdlbmQgY2VudGVyJz5cclxuICA8YnV0dG9uIG1hdC1mYWIgcm91dGVyTGluaz1cIi4uL2RpYWdyYW1zL2FkZFwiIGNsYXNzPVwiYWRkLWJ0blwiPlxyXG4gICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5hZGQtYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTo1MHB4O2xlZnQ6MjVweDt6LWluZGV4OjF9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkaWFncmFtczogT2JzZXJ2YWJsZTxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHJcblx0XHQvLyB0aGlzLmRpYWdyYW1zXHJcblx0XHQvLyAgICAgICAgIC5kZWxheSgxMDApXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGlhZ3JhbXMgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICBkaWFncmFtcy5SZXN1bHQuZm9yRWFjaChkaWFncmFtID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdlbmVyYXRlRGlhZ3JhbShkaWFncmFtLkNoYXJ0LCBkaWFncmFtLl9pZCwgZGlhZ3JhbS5Tb3VyY2UuUm91dGUsIGRpYWdyYW0uU291cmNlLlN5bmMpKSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5pbml0U29ja2V0KCk7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uuc2VuZChcImFkZC1tZXNzYWdlXCIpO1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLm9uTWVzc2FnZSgpLnN1YnNjcmliZShtc2c9PntcclxuXHRcdC8vICAgICAgICAgZGVidWdnZXJcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iXX0=