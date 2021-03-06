import { Store } from "@ngrx/store";
import { FormGroup } from "@angular/forms";
import { AppState } from "../grid.reducer";
import { GridModel } from "../models/grid.model";
export declare class GridConfigComponent {
    private store;
    private data;
    gridTypes: any[];
    compactType: any[];
    displayGridTypes: any[];
    grid: GridModel;
    oid: string;
    configFormGroup: FormGroup;
    gridFormGroup: FormGroup;
    constructor(store: Store<AppState>, data: any);
    save(): void;
    _init_form_group(): void;
    _init_properties(): void;
}
