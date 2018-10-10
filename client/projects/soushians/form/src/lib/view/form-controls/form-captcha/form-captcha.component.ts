import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { FieldConfig } from "../../../models/field-config.model";
import { Field } from "../../../models/field.interface";
import { CaptchaModel } from "../../../models/captcha.model";
import { FormCaptchaService } from "../../../services/form-captcha.service";

@Component({
	selector: "lib-form-captcha",
	templateUrl: "./form-captcha.component.html"
})
export class FormCaptchaComponent implements OnInit, Field {
	config: FieldConfig;
	group: FormGroup;

	captcha: CaptchaModel;
	captchaSrc: string;
	constructor(private service: FormCaptchaService, private store: Store<any>) {
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
		this.captcha.captchaImg = `http://172.22.34.28:8001/api/authentication/captcha?${Math.random()}`;
	}
}
