import { OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { MainContainerState } from "../../main-container/main-container.reducers";
import { FormSchemaModel } from "../../models";
import { FormService } from "../../services/form.service";
export declare class AddFormContainerComponent implements OnInit {
    store: Store<MainContainerState>;
    service: FormService;
    schema: FormSchemaModel;
    constructor(store: Store<MainContainerState>, service: FormService);
    ngOnInit(): void;
    add(form: FormSchemaModel): void;
    update_schema(form: FormSchemaModel): void;
}
