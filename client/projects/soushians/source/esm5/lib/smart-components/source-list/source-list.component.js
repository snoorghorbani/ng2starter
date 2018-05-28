/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { SourceService } from "../../services/source.service";
var SourceListComponent = /** @class */ (function () {
    /**
     * @param {?} sourceService
     */
    function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
    ) {
        this.sourceService = sourceService;
        debugger;
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
    SourceListComponent.prototype.ngOnInit = function () { };
    return SourceListComponent;
}());
export { SourceListComponent };
SourceListComponent.decorators = [
    { type: Component, args: [{
                selector: "source-list",
                template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\n        \n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\n        </a>\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\n      </mat-card-title>\n    \n  </mat-card>\n\n  <div fxLayoutAlign='end center'>\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n</div>\n\n\n",
                styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            },] },
];
/** @nocollapse */
SourceListComponent.ctorParameters = function () { return [
    { type: SourceService }
]; };
function SourceListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceListComponent.prototype.sources;
    /** @type {?} */
    SourceListComponent.prototype.sourceService;
}
//# sourceMappingURL=source-list.component.js.map
