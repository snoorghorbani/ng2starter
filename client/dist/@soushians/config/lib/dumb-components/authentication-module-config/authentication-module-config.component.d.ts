import { EventEmitter, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class AuthenticationModuleConfigComponent {
    private injector;
    formGroup: FormGroup;
    configFormGroup: FormGroup;
    configChanged: EventEmitter<{}>;
    constructor(injector: Injector);
    setFormId(formId: string, formName: string): void;
}
