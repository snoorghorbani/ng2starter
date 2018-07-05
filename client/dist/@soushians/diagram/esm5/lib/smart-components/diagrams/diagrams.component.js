/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
var DiagramsComponent = /** @class */ (function () {
    function DiagramsComponent(diagramService) {
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
    DiagramsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
    DiagramsComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagrams",
                    template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \n  [colspan]=\"diagram.Box.Cols\" \n  [rowspan]=\"diagram.Box.Rows\" \n  [style.color]=\"diagram.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\n  </mat-grid-tile>\n</mat-grid-list>\n<br />\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n</div>\n<div fxLayoutAlign='end center'>\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n  </button>\n</div>\n",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                },] },
    ];
    /** @nocollapse */
    DiagramsComponent.ctorParameters = function () { return [
        { type: DiagramService }
    ]; };
    return DiagramsComponent;
}());
export { DiagramsComponent };
function DiagramsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramsComponent.prototype.diagrams;
    /** @type {?} */
    DiagramsComponent.prototype.width;
    /** @type {?} */
    DiagramsComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUF5Qi9ELDJCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7cUJBRDFDLEdBQUc7UUFFVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7OztLQU9sRDs7OztJQUVELG9DQUFROzs7SUFBUjs7Ozs7O0tBTUM7O2dCQXhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwrcEJBZ0JWO29CQUNBLE1BQU0sRUFBRSxDQUFDLG9HQUFvRyxDQUFDO2lCQUM5Rzs7OztnQkFyQlEsY0FBYzs7NEJBSnZCOztTQTBCYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtc1wiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1ncmlkLWxpc3QgY29scz1cIjEyXCIgcm93SGVpZ2h0PVwiMTAwcHhcIj5cclxuICA8bWF0LWdyaWQtdGlsZSAqbmdGb3I9XCJsZXQgZGlhZ3JhbSBvZiAoZGlhZ3JhbXMgfCBhc3luYyk/LlJlc3VsdFwiIFxyXG4gIFtjb2xzcGFuXT1cImRpYWdyYW0uQm94LkNvbHNcIiBcclxuICBbcm93c3Bhbl09XCJkaWFncmFtLkJveC5Sb3dzXCIgXHJcbiAgW3N0eWxlLmNvbG9yXT1cImRpYWdyYW0uQm94LkNvbG9yXCI+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtkYXRhXT1cImRpYWdyYW1cIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvbWF0LWdyaWQtdGlsZT5cclxuPC9tYXQtZ3JpZC1saXN0PlxyXG48YnIgLz5cclxuPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuPC9kaXY+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj0nZW5kIGNlbnRlcic+XHJcbiAgPGJ1dHRvbiBtYXQtZmFiIHJvdXRlckxpbms9XCIuLi9kaWFncmFtcy9hZGRcIiBjbGFzcz1cImFkZC1idG5cIj5cclxuICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uYWRkLWJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206NTBweDtsZWZ0OjI1cHg7ei1pbmRleDoxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kaWFncmFtc1xyXG5cdFx0Ly8gICAgICAgICAuZGVsYXkoMTAwKVxyXG5cdFx0Ly8gICAgICAgICAuc3Vic2NyaWJlKGRpYWdyYW1zID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgZGlhZ3JhbXMuUmVzdWx0LmZvckVhY2goZGlhZ3JhbSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oZGlhZ3JhbS5DaGFydCwgZGlhZ3JhbS5faWQsIGRpYWdyYW0uU291cmNlLlJvdXRlLCBkaWFncmFtLlNvdXJjZS5TeW5jKSkpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2UuaW5pdFNvY2tldCgpO1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLnNlbmQoXCJhZGQtbWVzc2FnZVwiKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5vbk1lc3NhZ2UoKS5zdWJzY3JpYmUobXNnPT57XHJcblx0XHQvLyAgICAgICAgIGRlYnVnZ2VyXHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIl19