import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Field, FieldConfig } from "../../../models";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
import { MainContainerState } from "../../../main-container";
export declare class FormCaptchaComponent implements OnInit, Field {
    private service;
    private store;
    config: FieldConfig;
    group: FormGroup;
    captcha: CaptchaModel;
    captchaSrc: string;
    constructor(service: FormCaptchaService, store: Store<MainContainerState>);
    ngOnInit(): void;
    refresh(): void;
}
