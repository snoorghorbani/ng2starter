import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { Signup } from "../../actions";
import { CaptchaModel } from "../../models";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
import { FeatureState } from "../../reducers";
import { MatSnackBar } from "@angular/material";
import { take, switchMap, filter, tap } from "rxjs/operators";

@Component({
	template: `
        <auth-signup 
                [formId]='(formId$ | async)'
                (signedup)="signup($event)"
        ></auth-signup>
  `
})
export class SignupContainerComponent {
	formId$: Observable<string>;
	@Output() signedUp$ = new EventEmitter<boolean>();
	constructor(
		private configurationService: AuthenticationConfigurationService,
		private store: Store<FeatureState>,
		private snackBar: MatSnackBar
	) {
		this.formId$ = this.configurationService.config$.map(config => config.forms.signUp);
	}

	signup(formValue: any) {
		this.configurationService.config$
			.pipe(take(1), switchMap(config => config.signupValidator(formValue)))
			.subscribe(validation => {
				if (validation) {
					this.store.dispatch(new Signup(formValue));
					this.signedUp$.emit(true);
				} else {
					this.snackBar.open("رمز عبور یکسان نیست", null, {
						duration: 2222
					});
				}
			});
	}
}
