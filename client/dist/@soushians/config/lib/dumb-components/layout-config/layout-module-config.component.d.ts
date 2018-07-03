import { EventEmitter, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { FeatureState } from "../../reducers";
export declare class LayoutModuleConfigComponent {
    private injector;
    private store;
    configChanged: EventEmitter<{}>;
    _configFormGroup: FormGroup;
    configFormGroup: FormGroup;
    sideNavModes: string[];
    layoutModes: string[];
    formGroup: FormGroup;
    roleItems$: Observable<string[]>;
    constructor(injector: Injector, store: Store<FeatureState>);
    addMenu(): void;
}
