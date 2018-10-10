import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
export declare class WidgetSelectorComponent implements OnInit {
    store: Store<AppState>;
    widgets$: Observable<WidgetModel<any>[]>;
    selectedWidgetId: string;
    readonly valid: boolean;
    readonly config: {
        oid: string;
    };
    constructor(store: Store<AppState>);
    ngOnInit(): void;
}
