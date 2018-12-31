/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\r\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \r\n  [colspan]=\"diagram.Box.Cols\" \r\n  [rowspan]=\"diagram.Box.Rows\" \r\n  [style.color]=\"diagram.Box.Color\">\r\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n<br />\r\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\r\n</div>\r\n<div fxLayoutAlign='end center'>\r\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\r\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n  </button>\r\n</div>\r\n",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    DiagramsComponent.ctorParameters = function () { return [
        { type: DiagramService }
    ]; };
    return DiagramsComponent;
}());
export { DiagramsComponent };
if (false) {
    /** @type {?} */
    DiagramsComponent.prototype.diagrams;
    /** @type {?} */
    DiagramsComponent.prototype.width;
    /** @type {?} */
    DiagramsComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFTL0QsMkJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQURsRCxhQUFRLEdBQUcsQ0FBQztRQUVYLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7O0tBT2xEOzs7O0lBRUQsb0NBQVE7OztJQUFSOzs7Ozs7S0FNQzs7Z0JBeEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIseXNCQUF3Qzs7aUJBRXhDOzs7O2dCQUxRLGNBQWM7OzRCQUp2Qjs7U0FVYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtc1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGlhZ3JhbXMuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vZGlhZ3JhbXMuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkaWFncmFtczogT2JzZXJ2YWJsZTxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHJcblx0XHQvLyB0aGlzLmRpYWdyYW1zXHJcblx0XHQvLyAgICAgICAgIC5kZWxheSgxMDApXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGlhZ3JhbXMgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICBkaWFncmFtcy5SZXN1bHQuZm9yRWFjaChkaWFncmFtID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdlbmVyYXRlRGlhZ3JhbShkaWFncmFtLkNoYXJ0LCBkaWFncmFtLl9pZCwgZGlhZ3JhbS5Tb3VyY2UuUm91dGUsIGRpYWdyYW0uU291cmNlLlN5bmMpKSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5pbml0U29ja2V0KCk7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uuc2VuZChcImFkZC1tZXNzYWdlXCIpO1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLm9uTWVzc2FnZSgpLnN1YnNjcmliZShtc2c9PntcclxuXHRcdC8vICAgICAgICAgZGVidWdnZXJcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iXX0=