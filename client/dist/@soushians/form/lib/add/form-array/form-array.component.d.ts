import { EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
export declare class FormArrayComponent {
    schema: FieldConfig;
    changes: EventEmitter<{}>;
    constructor();
    changed(): void;
    addFormGroup(root: FieldConfig): FieldConfig;
    addFormArray(root: FieldConfig): FieldConfig;
    addFormControl(root: FieldConfig): FieldConfig;
}
