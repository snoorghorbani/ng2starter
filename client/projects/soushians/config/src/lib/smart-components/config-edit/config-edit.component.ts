import { NgModule, Component, OnInit, Output, EventEmitter, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

import { EditConfigApiModel, PartialConfig } from "../../models";
import { ConfigService } from "../../services/config.service";

@Component({
	selector: "config-config-edit",
	templateUrl: "./config-edit.component.html"
})
export class ConfigEditComponent implements OnInit {
	configInforamation: any;
	formGroup: FormGroup = EditConfigApiModel.Request.formGroup;
	partialConfigModel: PartialConfig;

	constructor(private configService: ConfigService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			const configName: string = params["name"];
			this.configService.getConfigByName(configName).subscribe(data => {
				this.partialConfigModel = {
					type: data.Result.Name,
					inputs: {
						configFormGroup: this.formGroup.controls.Config as FormGroup
					}
				};
				this.formGroup.patchValue({
					_id: data.Result._id,
					Name: data.Result.Name
				});
				Object.keys(data.Result.Config).forEach(key => {
					this.addControl(this.formGroup.controls.Config as FormGroup, key, data.Result.Config[key]);
				});
			});
		});
	}

	addControl(formGroup: FormGroup, key: string, value: any) {
		if (value instanceof Array) {
			formGroup.addControl(key, this.formBuilder.array(value));
		} else if (value instanceof Object) {
			formGroup.addControl(key, this.formBuilder.group(value));
		} else {
			formGroup.addControl(key, new FormControl(value));
		}
	}

	ngOnInit() {}
	configChanged(event: any) {
		debugger;
		this.formGroup.controls.Config.patchValue(event);
	}
	edit() {
		debugger;
		if (!this.formGroup.valid) return;
		this.configService.editConfig(this.formGroup.value).subscribe(config => {
			debugger;
		});
	}
}
