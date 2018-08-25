import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { FrontendAuthenticationConfigurationService } from "../../services/frontend-authentication-configuration.service";
import { Signin } from "../../actions/signin.actions";
import { FeatureState } from "../../reducers";

@Component({
	template: `
        <auth-signin 
                [formId]='(formId$ | async)'
                (signedin)="signIn($event)"
        ></auth-signin>
  `
})
export class SigninContainerComponent {
	formId$: Observable<string>;
	@Output() signedIn$ = new EventEmitter<boolean>();
	constructor(
		private configurationService: FrontendAuthenticationConfigurationService,
		private store: Store<FeatureState>
	) {
		this.formId$ = this.configurationService.config$.map(config => config.forms.signIn);
	}

	signIn(formValue: any) {
		this.store.dispatch(new Signin(formValue));
		this.signedIn$.emit(true);
	}
}
