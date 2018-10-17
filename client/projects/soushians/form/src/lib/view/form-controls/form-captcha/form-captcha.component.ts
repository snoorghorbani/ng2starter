import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Field, FieldConfig } from "../../../models";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
import { MainContainerState } from "../../../main-container";
import { FormConfigurationService } from "../../../services/form-configuration.service";
import { map } from "rxjs/operators";
import { generate } from "rxjs";

@Component({
	selector: "lib-form-captcha",
	templateUrl: "./form-captcha.component.html",
	styleUrls: ["./form-captcha.component.scss"]
})
export class FormCaptchaComponent implements OnInit, Field {
	config: FieldConfig;
	group: FormGroup;

	captcha: CaptchaModel;
	captchaSrc: string;
	constructor(
		private service: FormCaptchaService,
		private store: Store<MainContainerState>,
		private configurationService: FormConfigurationService
	) {
		// this.captcha = new CaptchaModel({
		// 	captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
		// });

		this._captcha_generate();
	}
	ngOnInit() {
		debugger;
	}
	refresh() {
		this.captcha.captchaImg = this._captcha_generate() + `?${Math.random()}`;
	}
	_captcha_generate() {
		this.configurationService.config$.pipe(
			map(config => config.env.server + config.endpoints.captchaUrl)).subscribe(captcha => {
				this.captcha = new CaptchaModel({
					captchaImg: captcha
				});
			});
	}

}
