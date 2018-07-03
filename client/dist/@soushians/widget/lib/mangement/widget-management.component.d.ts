import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { WidgetModel } from "../models";
import { AppState } from "../widget.reducer";
export declare class WidgetsManagementComponent implements OnInit {
    store: Store<AppState>;
    widgets$: Observable<WidgetModel<any>[]>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
}
