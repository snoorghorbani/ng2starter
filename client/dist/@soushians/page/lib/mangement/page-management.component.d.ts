import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { PageModel } from "../models/page.model";
import { AppState } from "../page.reducer";
export declare class PagesManagementComponent implements OnInit {
    store: Store<AppState>;
    pages$: Observable<PageModel<any>[]>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
}
