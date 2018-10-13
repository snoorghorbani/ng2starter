import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { FieldConfig } from "../../../models/field-config.model";
import { Field } from "../../../models/field.interface";
import { CaptchaModel } from "../../../models/captcha.model";
import { FormCaptchaService } from "../../../services/form-captcha.service";
export declare class FormCaptchaComponent implements OnInit, Field {
    private service;
    private store;
    config: FieldConfig;
    group: FormGroup;
    captcha: CaptchaModel;
    captchaSrc: string;
    constructor(service: FormCaptchaService, store: Store<any>);
    ngOnInit(): void;
    refresh(): void;
}
