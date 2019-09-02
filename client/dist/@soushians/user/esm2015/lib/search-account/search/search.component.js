/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).LastName }}\u060C {{(user | async).FirstName }} -->\r\n        </div>\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).Email}} -->\r\n        </div>\r\n      </div>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p> -->\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p> -->\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: Store }
];
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
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxlQUFlOzs7O0lBTTNCLFlBQW9CLEtBQXFDO1FBQXJDLFVBQUssR0FBTCxLQUFLLENBQWdDO1FBSHpELGNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQy9DLG9CQUFlLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLGtCQUFhLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUNELE1BQU07UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBdEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsa3pDQUFzQzs7YUFFdEM7Ozs7WUFaUSxLQUFLOzs7O0lBY2IsK0JBQTRDOztJQUM1QyxzQ0FBNkM7O0lBQzdDLG9DQUErQzs7SUFDL0MsMENBQXVFOztJQUN2RSx3Q0FBcUU7Ozs7O0lBQ3pELGdDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9zZWFyY2guY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXI6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT47XHJcblx0dXNlclN0YXR1cyQ6IE9ic2VydmFibGU8cmVzcG9uc2VTdGF0dXNUeXBlcz47XHJcblx0Zm9ybUdyb3VwID0gUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHR1c2VyRGF0YUxvYWRlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdHVzZXJOb3RGb3VuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMudXNlckRhdGFMb2FkZWQkLm5leHQoIVwicHJpc3RpbmV8ZGlydHl8cGVuZGluZ1wiLmluY2x1ZGVzKHZhbHVlKSkpO1xyXG5cdH1cclxuXHRzZWFyY2goKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2godGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIl19