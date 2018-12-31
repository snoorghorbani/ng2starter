import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class SigninComponent {
    signedin: EventEmitter<{}>;
    formId: string;
    signin(formGroup: FormGroup): void;
    constructor();
}
