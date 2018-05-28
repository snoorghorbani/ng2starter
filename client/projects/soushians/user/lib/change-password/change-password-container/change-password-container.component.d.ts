import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ChangePasswordModel } from "../../models";
import * as FeatureReducer from "../../feature/feature.reducers";
export declare class ChangePasswordContainerComponent implements OnInit {
    private route;
    private store;
    formGroup: FormGroup;
    ChangePasswordModel: ChangePasswordModel.Request;
    constructor(route: ActivatedRoute, store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    changePassword(event: any): void;
}
