import { EventEmitter, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class LayoutModuleConfigComponent {
    private injector;
    sideNavModes: string[];
    layoutModes: string[];
    formGroup: any;
    _configFormGroup: FormGroup;
    configFormGroup: FormGroup;
    configChanged: EventEmitter<{}>;
    roleItems: string[];
    constructor(injector: Injector);
    addMenu(): void;
}
