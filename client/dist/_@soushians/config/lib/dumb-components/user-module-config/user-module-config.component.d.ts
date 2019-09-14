import { EventEmitter, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class UserModuleConfigComponent {
    private injector;
    formGroup: FormGroup;
    _configFormGroup: FormGroup;
    configFormGroup: FormGroup;
    configChanged: EventEmitter<{}>;
    constructor(injector: Injector);
    addMenu(): void;
}
