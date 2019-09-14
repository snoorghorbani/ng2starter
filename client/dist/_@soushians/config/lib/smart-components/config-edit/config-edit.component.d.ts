import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PartialConfig } from "../../models";
import { ConfigService } from "../../services/config.service";
import { DynamicConfigComponentSelectorComponent } from "../dynamic-config-component-selector";
export declare class ConfigEditComponent implements OnInit {
    private configService;
    private formBuilder;
    private route;
    configInforamation: any;
    formGroup: FormGroup;
    partialConfigModel: PartialConfig;
    dynConfig: DynamicConfigComponentSelectorComponent;
    constructor(configService: ConfigService, formBuilder: FormBuilder, route: ActivatedRoute);
    addControl(formGroup: FormGroup, key: string, value: any): void;
    ngOnInit(): void;
    configChanged(event: any): void;
    edit(): void;
}
