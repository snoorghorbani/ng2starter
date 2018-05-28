import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models";
export declare class NumberComponent implements OnInit {
    form: FormGroup;
    schema: FieldConfig;
    constructor();
    ngOnInit(): void;
}
