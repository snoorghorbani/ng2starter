import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { FeatureState, getAppConfig } from "../../reducers";

@Component({
	templateUrl: "./layout-module-config.component.html"
})
export class LayoutModuleConfigComponent {
	@Output("configChanged") configChanged = new EventEmitter();
	_configFormGroup: FormGroup;
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		this._configFormGroup = configFormGroup;
		(configFormGroup.controls.menuItems as FormArray).controls.forEach(control => {
			(this.formGroup.controls.menuItems as FormArray).push(
				new FormGroup({
					route: new FormControl("", [Validators.required]),
					icon: new FormControl("", [Validators.required]),
					// roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
					roles: new FormControl(),
					title: new FormControl("", [Validators.required])
				})
			);
		});

		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe(data => this.formGroup.patchValue(data));
	}
	get configFormGroup() {
		return this._configFormGroup;
	}

	sideNavModes: string[];
	layoutModes: string[];
	formGroup = new FormGroup({
		layoutMode: new FormControl("", [Validators.required]),
		showLeftNavBar: new FormControl("", [Validators.required]),
		mainSideNavMode: new FormControl("", [Validators.required]),
		showMainSidenav: new FormControl("", [Validators.required]),
		stickyLeftNavBar: new FormControl("", [Validators.required]),
		showSecondSideNav: new FormControl("", [Validators.required]),
		secondSideNavMode: new FormControl("", [Validators.required]),
		menuItems: new FormArray([])
	});
	roleItems$: Observable<string[]>;

	constructor(private injector: Injector, private store: Store<FeatureState>) {
		this.sideNavModes = ["over", "push", "side"];
		this.layoutModes = ["with-margin", "without-margin", "default"];
		this.configFormGroup = this.injector.get("configFormGroup");
		this.roleItems$ = this.store
			.select(getAppConfig)
			.pipe(filter(config => config != null), map(appconfig => appconfig.Config.Roles));
		// this.configChanged.
		// this.formGroup.valueChanges.subscribe(value => {
		// 	debugger;
		// 	this.configChanged.emit(value);
		// });
	}
	addMenu() {
		const menuItem = new FormGroup({
			route: new FormControl("", [Validators.required]),
			icon: new FormControl("", [Validators.required]),
			roles: new FormControl(),
			title: new FormControl("", [Validators.required])
		});

		(this.formGroup.get("menuItems") as FormArray).push(menuItem);
		(this.configFormGroup.get("menuItems") as FormArray).push(menuItem);
	}
	removeMenu(item: any) {
		debugger;
		const index = (this.formGroup.get("menuItems") as FormArray).controls.indexOf(item);
		(this.formGroup.get("menuItems") as FormArray).removeAt(index);
	}
}
