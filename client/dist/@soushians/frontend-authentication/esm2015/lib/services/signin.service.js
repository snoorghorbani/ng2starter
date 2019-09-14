/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { map, switchMap, take, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { FrontendAuthenticationConfigurationService } from "./frontend-authentication-configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./frontend-authentication-configuration.service";
import * as i4 from "@angular/material/snack-bar";
// import { WhoAmIAction } from "../actions";
export class FrontendSigninService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} snackBar
     */
    constructor(http, store, configurationService, snackBar) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
        // setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    signin(token) {
        this.configurationService.config$.subscribe((/**
         * @param {?} c
         * @return {?}
         */
        c => {
            debugger;
        }));
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.signIn != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.post(config.env.frontend_server + config.endpoints.signIn, { token }))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            const user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })));
    }
    /**
     * @return {?}
     */
    signout() {
        return this.http
            .get(this.configurationService.config.env.frontend_server +
            this.configurationService.config.endpoints.signOut)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        response => response));
    }
    /**
     * @return {?}
     */
    whoAmI() {
        return this.http
            .get(this.configurationService.config.env.frontend_server + this.configurationService.config.endpoints.whoAmI)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        response => response));
    }
}
FrontendSigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FrontendSigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FrontendAuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ FrontendSigninService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FrontendSigninService_Factory() { return new FrontendSigninService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.FrontendAuthenticationConfigurationService), i0.ɵɵinject(i4.MatSnackBar)); }, token: FrontendSigninService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.snackBar;
}
/** @type {?} */
export let FrontendSigninServiceStub = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBTyxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7QUFPN0csTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQUNqQyxZQUNTLElBQWdCLEVBQ2hCLEtBQTBCLEVBQzFCLG9CQUFnRSxFQUNoRSxRQUFxQjtRQUhyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNEM7UUFDaEUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUU3QixrRUFBa0U7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUMvQyxRQUFRLENBQUM7UUFDVixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1BQU07Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBQyxFQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQ3BHLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFOztrQkFDZixJQUFJLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQzthQUMzQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlO1lBQ25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDbkQ7YUFDQSxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQ0gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDeEc7YUFDQSxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUE5Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBaEJRLFVBQVU7WUFLVixLQUFLO1lBS0wsMENBQTBDO1lBUjFDLFdBQVc7Ozs7Ozs7O0lBaUJsQixxQ0FBd0I7Ozs7O0lBQ3hCLHNDQUFrQzs7Ozs7SUFDbEMscURBQXdFOzs7OztJQUN4RSx5Q0FBNkI7OztBQXlDL0IsTUFBTSxLQUFLLHlCQUF5QixHQUFHLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCBmaWx0ZXIsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG4vLyBpbXBvcnQgeyBXaG9BbUlBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZFNpZ25pblNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFdob0FtSUFjdGlvbigpKSwgMzAwKTtcclxuXHR9XHJcblxyXG5cdHNpZ25pbih0b2tlbjogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoYyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5zaWduSW4gIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnNpZ25JbiwgeyB0b2tlbiB9KSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHVzZXI6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFsgdXNlci5Sb2xlIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICtcclxuXHRcdFx0XHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5zaWduT3V0XHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLndob0FtSVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBGcm9udGVuZFNpZ25pblNlcnZpY2VTdHViID0ge307XHJcbiJdfQ==