import { EventEmitter, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class ConfigAppConfigComponent {
    private injector;
    formGroup: FormGroup;
    configFormGroup: FormGroup;
    configChanged: EventEmitter<any>;
    constructor(injector: Injector);
}
