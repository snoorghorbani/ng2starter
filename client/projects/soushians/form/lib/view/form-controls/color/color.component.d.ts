import { FormGroup } from "@angular/forms";
import { FieldConfig, Field } from "../../../models";
export declare class ColorComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
    form: FormGroup;
    schema: FieldConfig;
    constructor();
    ngOnInit(): void;
}
