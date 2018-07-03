import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { responseStatusTypes } from "@soushians/shared";
import { ProfileViewModel } from "../../models";
import * as FeatureReducer from "../../user.reducers";
export declare class SearchComponent implements OnInit {
    private store;
    user: Observable<ProfileViewModel.Response>;
    userStatus$: Observable<responseStatusTypes>;
    formGroup: FormGroup;
    userDataLoaded$: BehaviorSubject<boolean>;
    userNotFound$: BehaviorSubject<boolean>;
    constructor(store: Store<FeatureReducer.AppState>);
    ngOnInit(): void;
    search(): void;
}
