import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
export declare class WidgetsManagementComponent implements OnInit {
    store: Store<AppState>;
    anghazi: {
        [type: string]: {
            color: string;
            icon: string;
        };
    };
    widgets$: Observable<WidgetModel<any>[]>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    _fill_anghazi(): void;
}
