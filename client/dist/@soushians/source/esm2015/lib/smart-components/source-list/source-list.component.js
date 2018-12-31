/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { SourceService } from "../../services/source.service";
export class SourceListComponent {
    /**
     * @param {?} sourceService
     */
    constructor(sourceService // private store: Store<FeatureReducer.FeatureState>
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
    ngOnInit() { }
}
SourceListComponent.decorators = [
    { type: Component, args: [{
                selector: "source-list",
                template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\r\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\r\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\r\n        \r\n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\r\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\r\n        </a>\r\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\r\n      </mat-card-title>\r\n    \r\n  </mat-card>\r\n\r\n  <div fxLayoutAlign='end center'>\r\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            }] }
];
/** @nocollapse */
SourceListComponent.ctorParameters = () => [
    { type: SourceService }
];
if (false) {
    /** @type {?} */
    SourceListComponent.prototype.sources;
    /** @type {?} */
    SourceListComponent.prototype.sourceService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zb3VyY2UvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBYTlELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFHL0IsWUFDUzs7UUFBQSxrQkFBYSxHQUFiLGFBQWE7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7S0FNL0M7Ozs7SUFFRCxRQUFRLE1BQUs7OztZQW5CYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHV6QkFBMkM7O2FBRTNDOzs7O1lBWlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHZXRTb3VyY2VzQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuLy9pbXBvcnQgeyBTb3VyY2VVcHNlcnRBY3Rpb24gfSBmcm9tICdhcHAvYWN0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2UtbGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3NvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxHZXRTb3VyY2VzQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSAvLyBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLnNvdXJjZXMgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0Ly8gdGhpcy5zb3VyY2VzLnN1YnNjcmliZShkYXRhID0+IHsgZGVidWdnZXJ9KVxyXG5cdFx0Ly90aGlzLmNvbmZpZ3Muc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENvbmZpZ0xvYWRlZChkYXRhLlJlc3VsdCkpO1xyXG5cdFx0Ly99KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=