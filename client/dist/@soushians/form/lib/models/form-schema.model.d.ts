import { FieldConfig } from "./field-config.model";
export declare class FormSchemaModel {
    _id: string;
    name: string;
    description: string;
    form: FieldConfig;
    events: {
        accept: {
            show: boolean;
            text: string;
        };
        cancel: {
            show: boolean;
            text: string;
        };
    };
    constructor();
    init(): void;
}
