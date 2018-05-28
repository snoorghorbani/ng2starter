export interface validation {
    active: boolean;
    message: string;
    value?: any;
}
export declare class Validator {
    required: validation;
    minlength: validation;
    email: validation;
    constructor();
}
