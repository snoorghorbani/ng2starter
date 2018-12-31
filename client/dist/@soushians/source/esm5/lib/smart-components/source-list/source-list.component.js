/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { SourceService } from "../../services/source.service";
var SourceListComponent = /** @class */ (function () {
    function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
    ) {
        this.sourceService = sourceService;
        this.sources = this.sourceService.getSources();
        // this.sources.subscribe(data => { debugger})
        //this.configs.subscribe(data => {
        //        debugger;
        //        this.store.dispatch(new ConfigLoaded(data.Result));
        //});
    }
    /**
     * @return {?}
     */
    SourceListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SourceListComponent.decorators = [
        { type: Component, args: [{
                    selector: "source-list",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\r\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\r\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\r\n        \r\n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\r\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\r\n        </a>\r\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\r\n      </mat-card-title>\r\n    \r\n  </mat-card>\r\n\r\n  <div fxLayoutAlign='end center'>\r\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                    styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    SourceListComponent.ctorParameters = function () { return [
        { type: SourceService }
    ]; };
    return SourceListComponent;
}());
export { SourceListComponent };
if (false) {
    /** @type {?} */
    SourceListComponent.prototype.sources;
    /** @type {?} */
    SourceListComponent.prototype.sourceService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zb3VyY2UvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWdCN0QsNkJBQ1M7O1FBQUEsa0JBQWEsR0FBYixhQUFhO1FBRXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7O0tBTS9DOzs7O0lBRUQsc0NBQVE7OztJQUFSLGVBQWE7O2dCQW5CYixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHV6QkFBMkM7O2lCQUUzQzs7OztnQkFaUSxhQUFhOzs4QkFEdEI7O1NBY2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEdldFNvdXJjZXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG4vL2ltcG9ydCB7IFNvdXJjZVVwc2VydEFjdGlvbiB9IGZyb20gJ2FwcC9hY3Rpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNvdXJjZS1saXN0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9zb3VyY2UtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vc291cmNlLWxpc3QuY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlIC8vIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMuc3Vic2NyaWJlKGRhdGEgPT4geyBkZWJ1Z2dlcn0pXHJcblx0XHQvL3RoaXMuY29uZmlncy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29uZmlnTG9hZGVkKGRhdGEuUmVzdWx0KSk7XHJcblx0XHQvL30pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==