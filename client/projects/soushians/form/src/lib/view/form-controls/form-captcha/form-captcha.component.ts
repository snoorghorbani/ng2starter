import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Field, FieldConfig } from "../../../models";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
import { GetCaptchaAction } from "../../../add/captcha.actions";
import { MainContainerState } from "../../../main-container";
import { Refresh } from "@ngrx/store-devtools/src/actions";

@Component({
	selector: "lib-form-captcha",
	templateUrl: "./form-captcha.component.html"
})
export class FormCaptchaComponent implements OnInit, Field {
	config: FieldConfig;
	group: FormGroup;

	captcha: CaptchaModel;
	captchaSrc: string;
	constructor(private service: FormCaptchaService, private store: Store<MainContainerState>) {
		this.captcha = new CaptchaModel({
			captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
		});
		// this.captcha = new CaptchaModel;
	}
	ngOnInit() {
		debugger;
		// this.store.dispatch(new GetCaptchaAction());
	}
	refresh() {
		this.captcha.captchaImg = `http://172.22.34.28:8001/api/authentication/captcha?${Math.random()}`
	}

}
