import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Field, FieldConfig } from "../../../models";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
import { MainContainerState } from "../../../main-container";
import { FormConfigurationService } from "../../../services/form-configuration.service";
export declare class FormCaptchaComponent implements OnInit, Field {
    private service;
    private store;
    private configurationService;
    config: FieldConfig;
    group: FormGroup;
    captcha: CaptchaModel;
    captchaSrc: string;
    constructor(service: FormCaptchaService, store: Store<MainContainerState>, configurationService: FormConfigurationService);
    ngOnInit(): void;
    refresh(): void;
    _captcha_generate(): void;
}
