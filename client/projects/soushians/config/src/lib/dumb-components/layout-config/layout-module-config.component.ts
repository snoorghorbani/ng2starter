import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";

@Component({
	templateUrl: "./layout-module-config.component.html"
})
export class LayoutModuleConfigComponent {
	sideNavModes: string[];
	layoutModes: string[];
	formGroup: any = new FormGroup({
		layoutMode: new FormControl("", [ Validators.required ]),
		showLeftNavBar: new FormControl("", [ Validators.required ]),
		mainSideNavMode: new FormControl("", [ Validators.required ]),
		showMainSidenav: new FormControl("", [ Validators.required ]),
		stickyLeftNavBar: new FormControl("", [ Validators.required ]),
		showSecondSideNav: new FormControl("", [ Validators.required ]),
		secondSideNavMode: new FormControl("", [ Validators.required ]),
		menuItems: new FormArray([])
	});
	_configFormGroup: FormGroup;
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		this._configFormGroup = configFormGroup;
		(configFormGroup.controls.menuItems as FormArray).controls.forEach((control) => {
			(this.formGroup.controls.menuItems as FormArray).push(
				new FormGroup({
					route: new FormControl("", [ Validators.required ]),
					icon: new FormControl("", [ Validators.required ]),
					// roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
					roles: new FormControl(),
					title: new FormControl("", [ Validators.required ])
				})
			);
		});

		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe((data) => this.formGroup.patchValue(data));
	}
	get configFormGroup() {
		return this._configFormGroup;
	}
	@Output() configChanged = new EventEmitter();

	roleItems: string[] = [ "Admin", "User" ];

	constructor(private injector: Injector) {
		this.sideNavModes = [ "over", "push", "side" ];
		this.layoutModes = [ "with-margin", "without-margin", "default" ];
		this.configFormGroup = this.injector.get("configFormGroup");
	}
	addMenu() {
		var menuItem = new FormGroup({
			route: new FormControl("", [ Validators.required ]),
			icon: new FormControl("", [ Validators.required ]),
			roles: new FormControl(),
			title: new FormControl("", [ Validators.required ])
		});

		(this.formGroup.get("menuItems") as FormArray).push(menuItem);
		(this.configFormGroup.get("menuItems") as FormArray).push(menuItem);
	}
}
