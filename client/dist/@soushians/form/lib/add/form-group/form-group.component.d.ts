import { EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
export declare class FormGroupComponent {
    schema: FieldConfig;
    noHeader: boolean;
    changes: EventEmitter<any>;
    delete: EventEmitter<any>;
    constructor();
    changed(): void;
    addFormGroup(root: FieldConfig): FieldConfig;
    addFormArray(root: FieldConfig): FieldConfig;
    addFormControl(root: FieldConfig): FieldConfig;
    deleteFormGroup(idx: number): void;
}
