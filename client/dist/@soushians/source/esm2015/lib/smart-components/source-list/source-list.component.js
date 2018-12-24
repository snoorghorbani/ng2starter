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
                template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="start center">
  <mat-card class="source-box" *ngFor="let source of (sources | async)?.Result" [fxFlex]="32">
      <mat-card-title fxFlexLayout="row" flexLayoutAlign="space-between center">
        
        <a [routerLink]="['edit' ,  source._id]" fxFlex="40px">
          <mat-icon fxLayoutAlign="start center" aria-label="edit source">edit</mat-icon>
        </a>
        <span fxFlex fxLayoutAlign="end center" fxFlexAlign="center">{{source.Endpoint}}</span>
      </mat-card-title>
    
  </mat-card>

  <div fxLayoutAlign='end center'>
    <button mat-fab routerLink="../source/add" class="add-btn">
      <mat-icon>add</mat-icon>
    </button>
  </div>
</div>


`,
                styles: [`:host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}`]
            },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zb3VyY2UvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBaUM5RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRy9CLFlBQ1M7O1FBQUEsa0JBQWEsR0FBYixhQUFhO1FBRXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7O0tBTS9DOzs7O0lBRUQsUUFBUSxNQUFLOzs7WUF2Q2IsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JWO2dCQUNBLE1BQU0sRUFBRSxDQUFDLHFJQUFxSSxDQUFDO2FBQy9JOzs7O1lBaENRLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR2V0U291cmNlc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbi8vaW1wb3J0IHsgU291cmNlVXBzZXJ0QWN0aW9uIH0gZnJvbSAnYXBwL2FjdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic291cmNlLWxpc3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICA8bWF0LWNhcmQgY2xhc3M9XCJzb3VyY2UtYm94XCIgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiAoc291cmNlcyB8IGFzeW5jKT8uUmVzdWx0XCIgW2Z4RmxleF09XCIzMlwiPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGUgZnhGbGV4TGF5b3V0PVwicm93XCIgZmxleExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIHNvdXJjZS5faWRdXCIgZnhGbGV4PVwiNDBweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBhcmlhLWxhYmVsPVwiZWRpdCBzb3VyY2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHNwYW4gZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIj57e3NvdXJjZS5FbmRwb2ludH19PC9zcGFuPlxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgXHJcbiAgPC9tYXQtY2FyZD5cclxuXHJcbiAgPGRpdiBmeExheW91dEFsaWduPSdlbmQgY2VudGVyJz5cclxuICAgIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vc291cmNlL2FkZFwiIGNsYXNzPVwiYWRkLWJ0blwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5zb3VyY2UtYm94e21hcmdpbjo1cHh9LnNvdXJjZS1ib3ggYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWRkLWJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206NTBweDtsZWZ0OjI1cHg7ei1pbmRleDoxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlIC8vIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMuc3Vic2NyaWJlKGRhdGEgPT4geyBkZWJ1Z2dlcn0pXHJcblx0XHQvL3RoaXMuY29uZmlncy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29uZmlnTG9hZGVkKGRhdGEuUmVzdWx0KSk7XHJcblx0XHQvL30pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==