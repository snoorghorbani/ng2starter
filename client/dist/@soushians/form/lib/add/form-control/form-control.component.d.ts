import { EventEmitter } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";
import { FieldConfig } from "../../models";
export declare class FormControlComponent {
    schema: FieldConfig;
    changes: EventEmitter<any>;
    delete: EventEmitter<any>;
    width: number[];
    options: FormArray;
    tableOptions: FormGroup;
    constructor();
    changed(): boolean;
    addOption(): void;
    removeOption(i: any): void;
    insertOptions(): void;
}
