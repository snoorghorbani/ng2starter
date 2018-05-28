/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProfileViewModel } from "../../models";
import * as FeatureReducer from "../../feature/feature.reducers";
import { BehaviorSubject } from "rxjs";
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
        this.user = this.store.select(FeatureReducer.getUserInfo);
        this.userStatus$ = this.store.select(FeatureReducer.getSearchStatus);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userStatus$.subscribe((value) => this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)));
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
          {{(user | async).LastName }}، {{(user | async).FirstName }}
        </div>
        <div fxFlex="nogrow">
          {{(user | async).Email}}
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
        <p fxFlex='60' fxLayoutAlign="end">{{(user | async)._id }}</p>
      </div>
      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>
        <mat-icon fxFlex='nogrow'>email</mat-icon>
        <div fxFlex='15px'></div>
        <p fxFlex='40'>پست الکترونیکی</p>
        <p fxFlex='60' fxLayoutAlign="end">{{(user | async).Email }}</p>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxLQUFLLGNBQWMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQXFDM0MsTUFBTTs7OztJQU1MLFlBQW9CLEtBQXlDO1FBQXpDLFVBQUssR0FBTCxLQUFLLENBQW9DO3lCQUhqRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUzsrQkFDRixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUM7NkJBQzVCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNyRTs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVHOzs7O0lBQ0QsTUFBTTtRQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3REOzs7WUFwREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQTFDUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9mZWF0dXJlL2ZlYXR1cmUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleD1cIjQ1MHB4XCIgKm5nSWY9XCIodXNlclN0YXR1cyQgfCBhc3luYykgPT0gJ3N1Y2NlZWQnXCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIHt7KHVzZXIgfCBhc3luYykuTGFzdE5hbWUgfX3YjCB7eyh1c2VyIHwgYXN5bmMpLkZpcnN0TmFtZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICB7eyh1c2VyIHwgYXN5bmMpLkVtYWlsfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5sb2NhbF9ncm9jZXJ5X3N0b3JlPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+2LTZhtin2LPZhzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5faWQgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICA8bWF0LWljb24gZnhGbGV4PSdub2dyb3cnPmVtYWlsPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+2b7Ys9iqINin2YTaqdiq2LHZiNmG24zaqduMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnIGZ4TGF5b3V0QWxpZ249XCJlbmRcIj57eyh1c2VyIHwgYXN5bmMpLkVtYWlsIH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcjogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPjtcclxuXHR1c2VyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRmb3JtR3JvdXAgPSBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHVzZXJEYXRhTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0dXNlck5vdEZvdW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm8pO1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gdGhpcy51c2VyRGF0YUxvYWRlZCQubmV4dCghXCJwcmlzdGluZXxkaXJ0eXxwZW5kaW5nXCIuaW5jbHVkZXModmFsdWUpKSk7XHJcblx0fVxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=