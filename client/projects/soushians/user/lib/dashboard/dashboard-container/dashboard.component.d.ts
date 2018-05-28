import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserModel } from "../../models";
import { Store } from "@ngrx/store";
import * as appReducer from "../../feature/feature.reducers";
export declare class DashboardContainerComponent implements OnInit {
    private store;
    user$: Observable<UserModel>;
    constructor(store: Store<appReducer.UserState>);
    ngOnInit(): void;
}
