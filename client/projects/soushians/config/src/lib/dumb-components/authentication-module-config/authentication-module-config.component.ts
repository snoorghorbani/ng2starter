import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";

@Component({
	selector: "config-authentication-module-config",
	templateUrl: "./authentication-module-config.component.html"
})
export class AuthenticationModuleConfigComponent {
	formGroup: FormGroup = new FormGroup({
		endpoints: new FormGroup({
			signIn: new FormControl("", [Validators.required]),
			signOut: new FormControl("", [Validators.required]),
			whoAmI: new FormControl("", [Validators.required]),
			captchaUrl: new FormControl("", [Validators.required])
		}),
		forms: new FormGroup({
			signIn: new FormControl("", [Validators.required])
		})
	});
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe(data => {
			this.formGroup.patchValue(data);
		});
	}
	@Output() configChanged = new EventEmitter();
	constructor(private injector: Injector) {
		this.configFormGroup = this.injector.get("configFormGroup");
	}
	setFormId(formId: string, formName: string) {
		this.formGroup.patchValue({ [formName]: formId });
	}
}
