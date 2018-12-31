import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormSchemaModel, FieldConfig } from "../../models";
export declare class AddFormComponent {
    schema: FormSchemaModel;
    formGroup: FormGroup;
    submited: EventEmitter<{}>;
    changes: EventEmitter<{}>;
    emit(): void;
    changed(): void;
    changeOrder($event: any): void;
    addFormGroup(root: FieldConfig): FieldConfig;
    addFormArray(root: FieldConfig): FieldConfig;
    addFormControl(root: FieldConfig): FieldConfig;
}
