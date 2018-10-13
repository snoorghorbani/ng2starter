import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ChangePasswordModel } from "../../models/change-password.model";
import * as FeatureReducer from "../../user.reducers";
export declare class ChangePasswordContainerComponent implements OnInit {
    private route;
    private store;
    formGroup: FormGroup;
    ChangePasswordModel: ChangePasswordModel.Request;
    constructor(route: ActivatedRoute, store: Store<FeatureReducer.AppState>);
    ngOnInit(): void;
    changePassword(event: any): void;
}
