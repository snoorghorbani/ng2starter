import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class SignupComponent {
    signedup: EventEmitter<any>;
    formId: string;
    signup(formGroup: FormGroup): void;
    constructor();
}
