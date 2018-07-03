import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../user.reducers";
import { UserModel } from "../../models";
export declare class ProfileContainerComponent implements OnInit {
    private store;
    data$: Observable<UserModel>;
    dataStatus$: Observable<boolean>;
    constructor(store: Store<FeatureReducer.AppState>);
    ngOnInit(): void;
}
