/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { getAppConfig } from "@soushians/config";
import * as FeatureReducer from "../../user.reducers";
import { EditProfile } from "../edit-profile.actions";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { map, filter } from "rxjs/operators";
export class ProfileEditContainerComponent {
    /**
     * @param {?} store
     * @param {?} configService
     */
    constructor(store, configService) {
        this.store = store;
        this.configService = configService;
        this.userInforamation$ = this.store.select(FeatureReducer.getAccountInfo);
        this.roles$ = this.store
            .select(getAppConfig)
            .pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config != undefined)), map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.Config.Roles)));
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = of(["test1", "test2"]);
        this.config$ = this.configService.config$;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} data
     * @return {?}
     */
    updateProfile(data) {
        this.store.dispatch(new EditProfile(data));
    }
}
ProfileEditContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit-contianer",
                template: `<profile-edit
                (submited)='updateProfile($event)'
                [userInfo]="userInforamation$ | async"
                [roles]="roles$"
				[groups]="groups | async"
				[formId]="(config$|async)?.forms.profile_edit"
              ></profile-edit>`
            }] }
];
/** @nocollapse */
ProfileEditContainerComponent.ctorParameters = () => [
    { type: Store },
    { type: UserConfigurationService }
];
if (false) {
    /** @type {?} */
    ProfileEditContainerComponent.prototype.userInforamation$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.groups;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    ProfileEditContainerComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ProfileEditContainerComponent.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxPQUFPLEtBQUssY0FBYyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVyRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWTdDLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBTXpDLFlBQW9CLEtBQXFDLEVBQVUsYUFBdUM7UUFBdEYsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDekcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDcEIsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDbEYsUUFBUTtRQUNSLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFFLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFFBQVEsS0FBSSxDQUFDOzs7OztJQUViLGFBQWEsQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7OzsrQkFNb0I7YUFDOUI7Ozs7WUFyQlEsS0FBSztZQVFMLHdCQUF3Qjs7OztJQWVoQywwREFBeUM7O0lBQ3pDLCtDQUE2Qjs7SUFDN0IsK0NBQTZCOztJQUM3QixnREFBc0M7Ozs7O0lBRTFCLDhDQUE2Qzs7Ozs7SUFBRSxzREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGUgfSBmcm9tIFwiLi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vLi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdC1jb250aWFuZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxwcm9maWxlLWVkaXRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J3VwZGF0ZVByb2ZpbGUoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFt1c2VySW5mb109XCJ1c2VySW5mb3JhbWF0aW9uJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgIFtyb2xlc109XCJyb2xlcyRcIlxyXG5cdFx0XHRcdFtncm91cHNdPVwiZ3JvdXBzIHwgYXN5bmNcIlxyXG5cdFx0XHRcdFtmb3JtSWRdPVwiKGNvbmZpZyR8YXN5bmMpPy5mb3Jtcy5wcm9maWxlX2VkaXRcIlxyXG4gICAgICAgICAgICAgID48L3Byb2ZpbGUtZWRpdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlckluZm9yYW1hdGlvbiQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRyb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTxVc2VyTW9kdWxlQ29uZmlnPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge1xyXG5cdFx0dGhpcy51c2VySW5mb3JhbWF0aW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMucm9sZXMkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFwcENvbmZpZylcclxuXHRcdFx0LnBpcGUoZmlsdGVyKGNvbmZpZyA9PiBjb25maWcgIT0gdW5kZWZpbmVkKSwgbWFwKGNvbmZpZyA9PiBjb25maWcuQ29uZmlnLlJvbGVzKSk7XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0Ly8gdGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSBvZihbIFwidGVzdDFcIiwgXCJ0ZXN0MlwiIF0pO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGVQcm9maWxlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRQcm9maWxlKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIl19