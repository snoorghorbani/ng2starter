import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "config-user-module-config",
	templateUrl: "./user-module-config.component.html"
})
export class UserModuleConfigComponent {
	formGroup: FormGroup = new FormGroup({
		endpoints: new FormGroup({
			changePassword: new FormControl("", [Validators.required]),
			editProfile: new FormControl("", [Validators.required]),
			getUserInfo: new FormControl("", [Validators.required]),
			whoAmI: new FormControl("", [Validators.required]),
			// captchaUrl: new FormControl("", [Validators.required])
		}),
		forms: new FormGroup({
			profile_edit: new FormControl("", [Validators.required])
		}),
		dashboardLinks: new FormArray([])
	});
	_configFormGroup: FormGroup;
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		this._configFormGroup = configFormGroup;
		(configFormGroup.controls.dashboardLinks as FormArray).controls.forEach(control => {
			(this.formGroup.controls.dashboardLinks as FormArray).push(
				new FormGroup({
					route: new FormControl("", [Validators.required]),
					icon: new FormControl("", [Validators.required]),
					title: new FormControl("", [Validators.required])
				})
			);
		});

		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe(data => {
			this.formGroup.patchValue(data);
		});
	}
	get configFormGroup() {
		return this._configFormGroup;
	}
	@Output() configChanged = new EventEmitter();
	constructor(private injector: Injector) {
		this.configFormGroup = this.injector.get("configFormGroup");
	}
	addMenu() {
		const menuItem = new FormGroup({
			route: new FormControl("", [Validators.required]),
			icon: new FormControl("", [Validators.required]),
			title: new FormControl("", [Validators.required])
		});

		(this.formGroup.get("dashboardLinks") as FormArray).push(menuItem);
		(this.configFormGroup.get("dashboardLinks") as FormArray).push(menuItem);
	}
}
