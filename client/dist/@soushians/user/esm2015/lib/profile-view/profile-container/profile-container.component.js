/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                [information]="data$"
                [dataStatus$]='dataStatus$'
            ></user-profile>`
            },] },
];
/** @nocollapse */
ProfileContainerComponent.ctorParameters = () => [
    { type: Store }
];
function ProfileContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileContainerComponent.prototype.data$;
    /** @type {?} */
    ProfileContainerComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEtBQUssY0FBYyxNQUFNLHFCQUFxQixDQUFDO0FBU3RELE1BQU07Ozs7SUFJTCxZQUFvQixLQUFxQztRQUFyQyxVQUFLLEdBQUwsS0FBSyxDQUFnQztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzlFOzs7O0lBRUQsUUFBUSxNQUFLOzs7WUFmYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7NkJBR2tCO2FBQzVCOzs7O1lBVlEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1wcm9maWxlXHJcbiAgICAgICAgICAgICAgICBbaW5mb3JtYXRpb25dPVwiZGF0YSRcIlxyXG4gICAgICAgICAgICAgICAgW2RhdGFTdGF0dXMkXT0nZGF0YVN0YXR1cyQnXHJcbiAgICAgICAgICAgID48L3VzZXItcHJvZmlsZT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRhdGFTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLmRhdGFTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=