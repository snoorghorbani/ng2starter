import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { Signin } from "../../actions";
import { CaptchaModel } from "../../models";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
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
	constructor(private configurationService: AuthenticationConfigurationService, private store: Store<FeatureState>) {
		this.formId$ = this.configurationService.config$.map(config => config.forms.signIn);
	}

	signIn(formValue: any) {
		this.store.dispatch(new Signin(formValue));
	}
}
