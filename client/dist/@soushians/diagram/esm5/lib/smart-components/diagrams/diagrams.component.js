/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
    DiagramsComponent.prototype.diagramService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRTtJQVFDLDJCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFEbEQsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUVYLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsRCxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGlDQUFpQztRQUNqQyxxREFBcUQ7UUFDckQsd0lBQXdJO0lBQ3pJLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDQyxtQ0FBbUM7UUFDbkMsMENBQTBDO1FBQzFDLGtEQUFrRDtRQUNsRCxtQkFBbUI7UUFDbkIsTUFBTTtJQUNQLENBQUM7O2dCQXhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHlzQkFBd0M7O2lCQUV4Qzs7OztnQkFMUSxjQUFjOztJQTBCdkIsd0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSxpQkFBaUI7OztJQUM3QixxQ0FBbUQ7O0lBQ25ELGtDQUFZOzs7OztJQUNBLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1zXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9kaWFncmFtcy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9kaWFncmFtcy5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpO1xyXG5cclxuXHRcdC8vIHRoaXMuZGlhZ3JhbXNcclxuXHRcdC8vICAgICAgICAgLmRlbGF5KDEwMClcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkaWFncmFtcyA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIGRpYWdyYW1zLlJlc3VsdC5mb3JFYWNoKGRpYWdyYW0gPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKGRpYWdyYW0uQ2hhcnQsIGRpYWdyYW0uX2lkLCBkaWFncmFtLlNvdXJjZS5Sb3V0ZSwgZGlhZ3JhbS5Tb3VyY2UuU3luYykpKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5zZW5kKFwiYWRkLW1lc3NhZ2VcIik7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uub25NZXNzYWdlKCkuc3Vic2NyaWJlKG1zZz0+e1xyXG5cdFx0Ly8gICAgICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==