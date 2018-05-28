import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { MainContainerState } from "../../main-container";
import { FormSchemaModel } from "../../models";
export declare class FormListContainerComponent implements OnInit {
    store: Store<MainContainerState>;
    data$: Observable<FormSchemaModel[]>;
    constructor(store: Store<MainContainerState>);
    ngOnInit(): void;
}
