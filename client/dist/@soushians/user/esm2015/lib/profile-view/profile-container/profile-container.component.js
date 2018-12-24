/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../user.reducers";
export class ProfileContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.data$ = this.store.select(FeatureReducer.getAccountInfo);
        this.dataStatus$ = this.store.select(FeatureReducer.getUserInforamtionStatus);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProfileContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<user-profile
                [information]="data$ | async"
                [dataStatus$]='dataStatus$'
            ></user-profile>`
            },] },
];
/** @nocollapse */
ProfileContainerComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    ProfileContainerComponent.prototype.data$;
    /** @type {?} */
    ProfileContainerComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEtBQUssY0FBYyxNQUFNLHFCQUFxQixDQUFDO0FBU3RELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFJckMsWUFBb0IsS0FBcUM7UUFBckMsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM5RTs7OztJQUVELFFBQVEsTUFBSzs7O1lBZmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7OzZCQUdrQjthQUM1Qjs7OztZQVZRLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1wcm9maWxlXHJcbiAgICAgICAgICAgICAgICBbaW5mb3JtYXRpb25dPVwiZGF0YSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbZGF0YVN0YXR1cyRdPSdkYXRhU3RhdHVzJCdcclxuICAgICAgICAgICAgPjwvdXNlci1wcm9maWxlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGF0YVN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuZGF0YVN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRVc2VySW5mb3JhbXRpb25TdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==