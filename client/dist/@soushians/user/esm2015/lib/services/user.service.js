/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EditProfile_ApiModel, ProfileViewModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { GetProfile } from "../profile-view/profile-view.actions";
import { getUser } from "../dashboard/user.reducer";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./user-configuration.service";
export class UserService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(() => {
            this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    getAccountInfo() {
        return this.configurationService.config$
            .filter(config => config.endpoints.profileInformation != "")
            .take(1)
            .switchMap(config => this.http
            .get(config.endpoints.profileInformation)
            .let(config.responseToUserInfo)
            .pipe(map((response) => response)));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editProfile(data) {
        var /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
            .map((response) => new EditProfile_ApiModel.Response(response).extractData());
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getInfo(data) {
        const /** @type {?} */ model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
            .map(response => response);
    }
    /**
     * @param {?} role
     * @return {?}
     */
    is_role(role) {
        return this.store
            .select(getUser)
            .filter(user => user && user.Roles != undefined)
            .take(1)
            .map(user => user.Roles.indexOf(role) > -1);
    }
}
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserConfigurationService)); }, token: UserService, providedIn: "root" });
function UserService_tsickle_Closure_declarations() {
    /** @type {?} */
    UserService.prototype.http;
    /** @type {?} */
    UserService.prototype.store;
    /** @type {?} */
    UserService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFhLG9CQUFvQixFQUFFLGdCQUFnQixFQUEwQixNQUFNLFdBQVcsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFLckMsTUFBTTs7Ozs7O0lBQ0wsWUFDUyxNQUNBLE9BQ0E7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUU1QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDUjs7OztJQUVELGNBQWM7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87YUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7YUFDM0QsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNuQixJQUFJLENBQUMsSUFBSTthQUNQLEdBQUcsQ0FBTSxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO2FBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7YUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQW1CLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQzlDLENBQUM7S0FDSDs7Ozs7SUFDRCxXQUFXLENBQUMsSUFBa0M7UUFDN0MscUJBQUksS0FBSyxHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMxRyxHQUFHLENBQUMsQ0FBQyxRQUF1QyxFQUFFLEVBQUUsQ0FDaEQsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQ3pELENBQUM7S0FDSDs7Ozs7SUFDRCxPQUFPLENBQUMsSUFBOEI7UUFDckMsdUJBQU0sS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FDSCxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUM3RTthQUNBLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7YUFDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0M7OztZQWpERCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFmUSxVQUFVO1lBS1YsS0FBSztZQURMLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBFZGl0UHJvZmlsZV9BcGlNb2RlbCwgUHJvZmlsZVZpZXdNb2RlbCwgRmFpbGVkTG9naW5SZXBvcnRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC91c2VyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQcm9maWxlKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldEFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldDxhbnk+KGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uKVxyXG5cdFx0XHRcdFx0LmxldChjb25maWcucmVzcG9uc2VUb1VzZXJJbmZvKVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKChyZXNwb25zZTogVXNlck1vZGVsKSA9PiByZXNwb25zZSkpXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoc3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmVkaXRQcm9maWxlLCBtb2RlbCksIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZSkgPT5cclxuXHRcdFx0XHRuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVzcG9uc2UocmVzcG9uc2UpLmV4dHJhY3REYXRhKClcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Z2V0SW5mbyhkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPihcclxuXHRcdFx0XHRzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuZ2V0VXNlckluZm8sIG1vZGVsKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0aXNfcm9sZShyb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0VXNlcilcclxuXHRcdFx0LmZpbHRlcih1c2VyID0+IHVzZXIgJiYgdXNlci5Sb2xlcyAhPSB1bmRlZmluZWQpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5tYXAodXNlciA9PiB1c2VyLlJvbGVzLmluZGV4T2Yocm9sZSkgPiAtMSk7XHJcblx0fVxyXG59XHJcbiJdfQ==