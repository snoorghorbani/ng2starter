import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ProfileViewModel } from "../../models";
import * as FeatureReducer from "../../feature/feature.reducers";
import { responseStatusTypes } from "@soushians/shared";
import { BehaviorSubject } from "rxjs";
export declare class SearchComponent implements OnInit {
    private store;
    user: Observable<ProfileViewModel.Response>;
    userStatus$: Observable<responseStatusTypes>;
    formGroup: FormGroup;
    userDataLoaded$: BehaviorSubject<boolean>;
    userNotFound$: BehaviorSubject<boolean>;
    constructor(store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    search(): void;
}
