/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { map, switchMap, take, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import { WhoAmIAction } from "../actions";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./authentication-configuration.service";
import * as i4 from "@angular/material/snack-bar";
export class SigninService {
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
        setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signup(model) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signIn != ""), take(1), switchMap(config => this.http.post(config.env[config.server] + config.endpoints.signUp, model)), map(response => {
            const /** @type {?} */ user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signin(model) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signIn != ""), take(1), switchMap(config => this.http.post(config.env[config.server] + config.endpoints.signIn, model)), map(response => {
            const /** @type {?} */ user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
        // .catch(err => {
        // 	if (err.status == 400) {
        // 		this.snackBar.open("کد امنیتی اشتباه است", null, {
        // 			duration: 5000
        // 		});
        // 	} else if (err.status == 403) {
        // 		this.snackBar.open(" شماره موبایل و یا کلمه عبور اشتباه است", null, {
        // 			duration: 5000
        // 		});
        // 	}
        // 	return Observable.throw(err);
        // });
    }
    /**
     * @return {?}
     */
    signout() {
        return this.http
            .get(this.configurationService.config.env[this.configurationService.config.server] + this.configurationService.config.endpoints.signOut)
            .map(response => response);
    }
    /**
     * @return {?}
     */
    whoAmI() {
        return this.http.get(this.configurationService.config.endpoints.whoAmI).map(response => response);
    }
}
SigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: AuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ SigninService.ngInjectableDef = i0.defineInjectable({ factory: function SigninService_Factory() { return new SigninService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.AuthenticationConfigurationService), i0.inject(i4.MatSnackBar)); }, token: SigninService, providedIn: "root" });
function SigninService_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninService.prototype.http;
    /** @type {?} */
    SigninService.prototype.store;
    /** @type {?} */
    SigninService.prototype.configurationService;
    /** @type {?} */
    SigninService.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBTyxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBSzFDLE1BQU07Ozs7Ozs7SUFDTCxZQUNTLE1BQ0EsT0FDQSxzQkFDQTtRQUhBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLGFBQVEsR0FBUixRQUFRO1FBRWhCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0Q7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBMkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3BHLEVBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2QsdUJBQU0sSUFBSSxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaLENBQUMsQ0FDRixDQUFDO0tBQ0Y7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBMkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3BHLEVBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2QsdUJBQU0sSUFBSSxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaLENBQUMsQ0FDRixDQUFDOzs7Ozs7Ozs7Ozs7O0tBYUY7Ozs7SUFHRCxPQUFPO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO2FBQ3ZJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBR0QsTUFBTTtRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNsRzs7O1lBckVELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWhCUSxVQUFVO1lBS1YsS0FBSztZQUtMLGtDQUFrQztZQVJsQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZSwgZmlsdGVyLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIi4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluX0FwaU1vZGVsLCBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFdob0FtSUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBXaG9BbUlBY3Rpb24oKSksIDMwMCk7XHJcblx0fVxyXG5cclxuXHRzaWdudXAobW9kZWw6IGFueSk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5zaWduSW4gIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdDxTaWduaW5fQXBpTW9kZWwuUmVzcG9uc2U+KGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnNpZ25VcCwgbW9kZWwpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UuUmVzdWx0KTtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gW3VzZXIuUm9sZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHNpZ25pbihtb2RlbDogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnNpZ25JbiAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0PFNpZ25pbl9BcGlNb2RlbC5SZXNwb25zZT4oY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMuc2lnbkluLCBtb2RlbClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5SZXN1bHQpO1xyXG5cdFx0XHRcdGlmICh1c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbdXNlci5Sb2xlXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0Ly8gLmNhdGNoKGVyciA9PiB7XHJcblx0XHQvLyBcdGlmIChlcnIuc3RhdHVzID09IDQwMCkge1xyXG5cdFx0Ly8gXHRcdHRoaXMuc25hY2tCYXIub3BlbihcItqp2K8g2KfZhdmG24zYqtuMINin2LTYqtio2KfZhyDYp9iz2KpcIiwgbnVsbCwge1xyXG5cdFx0Ly8gXHRcdFx0ZHVyYXRpb246IDUwMDBcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fSBlbHNlIGlmIChlcnIuc3RhdHVzID09IDQwMykge1xyXG5cdFx0Ly8gXHRcdHRoaXMuc25hY2tCYXIub3BlbihcIiDYtNmF2KfYsdmHINmF2YjYqNin24zZhCDZiCDbjNinINqp2YTZhdmHINi52KjZiNixINin2LTYqtio2KfZhyDYp9iz2KpcIiwgbnVsbCwge1xyXG5cdFx0Ly8gXHRcdFx0ZHVyYXRpb246IDUwMDBcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPOlxyXG5cdHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnZbdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuc2VydmVyXSArIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5zaWduT3V0KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cdHdob0FtSSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLndob0FtSSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcbn1cclxuIl19