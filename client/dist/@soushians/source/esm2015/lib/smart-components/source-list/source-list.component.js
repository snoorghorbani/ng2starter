/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function SourceListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceListComponent.prototype.sources;
    /** @type {?} */
    SourceListComponent.prototype.sourceService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zb3VyY2UvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBaUM5RCxNQUFNOzs7O0lBR0wsWUFDUzs7UUFBQSxrQkFBYSxHQUFiLGFBQWE7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7S0FNL0M7Ozs7SUFFRCxRQUFRLE1BQUs7OztZQXZDYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQlY7Z0JBQ0EsTUFBTSxFQUFFLENBQUMscUlBQXFJLENBQUM7YUFDL0k7Ozs7WUFoQ1EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHZXRTb3VyY2VzQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuLy9pbXBvcnQgeyBTb3VyY2VVcHNlcnRBY3Rpb24gfSBmcm9tICdhcHAvYWN0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2UtbGlzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gIDxtYXQtY2FyZCBjbGFzcz1cInNvdXJjZS1ib3hcIiAqbmdGb3I9XCJsZXQgc291cmNlIG9mIChzb3VyY2VzIHwgYXN5bmMpPy5SZXN1bHRcIiBbZnhGbGV4XT1cIjMyXCI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZSBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmbGV4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgc291cmNlLl9pZF1cIiBmeEZsZXg9XCI0MHB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiIGFyaWEtbGFiZWw9XCJlZGl0IHNvdXJjZVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3BhbiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeEZsZXhBbGlnbj1cImNlbnRlclwiPnt7c291cmNlLkVuZHBvaW50fX08L3NwYW4+XHJcbiAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICBcclxuICA8L21hdC1jYXJkPlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249J2VuZCBjZW50ZXInPlxyXG4gICAgPGJ1dHRvbiBtYXQtZmFiIHJvdXRlckxpbms9XCIuLi9zb3VyY2UvYWRkXCIgY2xhc3M9XCJhZGQtYnRuXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LnNvdXJjZS1ib3h7bWFyZ2luOjVweH0uc291cmNlLWJveCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hZGQtYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTo1MHB4O2xlZnQ6MjVweDt6LWluZGV4OjF9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UgLy8gcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0dGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdC8vIHRoaXMuc291cmNlcy5zdWJzY3JpYmUoZGF0YSA9PiB7IGRlYnVnZ2VyfSlcclxuXHRcdC8vdGhpcy5jb25maWdzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDb25maWdMb2FkZWQoZGF0YS5SZXN1bHQpKTtcclxuXHRcdC8vfSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19