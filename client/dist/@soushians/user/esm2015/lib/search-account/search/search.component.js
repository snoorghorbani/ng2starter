/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { ProfileViewModel } from "../../models/profile-view.model";
import * as FeatureReducer from "../../user.reducers";
import { Search } from "../search.actions";
export class SearchComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.formGroup = ProfileViewModel.Request.formGroup;
        this.userDataLoaded$ = new BehaviorSubject(false);
        this.userNotFound$ = new BehaviorSubject(false);
        this.user = this.store.select(FeatureReducer.getAccountInfo);
        this.userStatus$ = this.store.select(FeatureReducer.getSearchStatus);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userStatus$.subscribe(value => this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)));
    }
    /**
     * @return {?}
     */
    search() {
        if (!this.formGroup.valid)
            return;
        this.store.dispatch(new Search(this.formGroup.value));
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: "search",
                template: `<mat-card fxFlex="450px" *ngIf="(userStatus$ | async) == 'succeed'">
  <mat-card-header>
    <mat-card-title>
      <div fxLayout="row" fxLayoutAlign="space-between">
        <div fxFlex="nogrow">
          <!-- {{(user | async).LastName }}، {{(user | async).FirstName }} -->
        </div>
        <div fxFlex="nogrow">
          <!-- {{(user | async).Email}} -->
        </div>
      </div>
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <div>
      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>
        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>
        <div fxFlex='15px'></div>
        <p fxFlex='40'>شناسه</p>
        <!-- <p fxFlex='60' fxLayoutAlign="end">{{(user | async)._id }}</p> -->
      </div>
      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>
        <mat-icon fxFlex='nogrow'>email</mat-icon>
        <div fxFlex='15px'></div>
        <p fxFlex='40'>پست الکترونیکی</p>
        <!-- <p fxFlex='60' fxLayoutAlign="end">{{(user | async).Email }}</p> -->
      </div>
    </div>

  </mat-card-content>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: Store }
];
function SearchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchComponent.prototype.user;
    /** @type {?} */
    SearchComponent.prototype.userStatus$;
    /** @type {?} */
    SearchComponent.prototype.formGroup;
    /** @type {?} */
    SearchComponent.prototype.userDataLoaded$;
    /** @type {?} */
    SearchComponent.prototype.userNotFound$;
    /** @type {?} */
    SearchComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBcUMzQyxNQUFNOzs7O0lBTUwsWUFBb0IsS0FBcUM7UUFBckMsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7eUJBSDdDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTOytCQUNGLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQzs2QkFDNUIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBRW5FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3JFOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFHOzs7O0lBQ0QsTUFBTTtRQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3REOzs7WUFwREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQTFDUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4PVwiNDUwcHhcIiAqbmdJZj1cIih1c2VyU3RhdHVzJCB8IGFzeW5jKSA9PSAnc3VjY2VlZCdcIj5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkxhc3ROYW1lIH192Iwge3sodXNlciB8IGFzeW5jKS5GaXJzdE5hbWUgfX0gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIDwhLS0ge3sodXNlciB8IGFzeW5jKS5FbWFpbH19IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICA8bWF0LWljb24gZnhGbGV4PSdub2dyb3cnPmxvY2FsX2dyb2Nlcnlfc3RvcmU8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7YtNmG2KfYs9mHPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuX2lkIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+ZW1haWw8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Zvtiz2Kog2KfZhNqp2KrYsdmI2YbbjNqp24w8L3A+XHJcbiAgICAgICAgPCEtLSA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5FbWFpbCB9fTwvcD4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyOiBPYnNlcnZhYmxlPFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+O1xyXG5cdHVzZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdGZvcm1Hcm91cCA9IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0dXNlckRhdGFMb2FkZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHR1c2VyTm90Rm91bmQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMudXNlciA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRTZWFyY2hTdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLnVzZXJEYXRhTG9hZGVkJC5uZXh0KCFcInByaXN0aW5lfGRpcnR5fHBlbmRpbmdcIi5pbmNsdWRlcyh2YWx1ZSkpKTtcclxuXHR9XHJcblx0c2VhcmNoKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==