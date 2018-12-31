/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { ProfileViewModel } from "../../models/profile-view.model";
import * as FeatureReducer from "../../user.reducers";
import { Search } from "../search.actions";
var SearchComponent = /** @class */ (function () {
    function SearchComponent(store) {
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
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userStatus$.subscribe(function (value) { return _this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)); });
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        if (!this.formGroup.valid)
            return;
        this.store.dispatch(new Search(this.formGroup.value));
    };
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: "search",
                    template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).LastName }}\u060C {{(user | async).FirstName }} -->\r\n        </div>\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).Email}} -->\r\n        </div>\r\n      </div>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p> -->\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p> -->\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return SearchComponent;
}());
export { SearchComponent };
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQWExQyx5QkFBb0IsS0FBcUM7UUFBckMsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7UUFIekQsaUJBQVksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUMvQyx1QkFBNEMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUscUJBQTBDLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3JFOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXBFLENBQW9FLENBQUMsQ0FBQztLQUMxRzs7OztJQUNELGdDQUFNOzs7SUFBTjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN0RDs7Z0JBdEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsa3pDQUFzQzs7aUJBRXRDOzs7O2dCQVpRLEtBQUs7OzBCQUpkOztTQWlCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3NlYXJjaC5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcjogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPjtcclxuXHR1c2VyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRmb3JtR3JvdXAgPSBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHVzZXJEYXRhTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0dXNlck5vdEZvdW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnVzZXIgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy51c2VyRGF0YUxvYWRlZCQubmV4dCghXCJwcmlzdGluZXxkaXJ0eXxwZW5kaW5nXCIuaW5jbHVkZXModmFsdWUpKSk7XHJcblx0fVxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=