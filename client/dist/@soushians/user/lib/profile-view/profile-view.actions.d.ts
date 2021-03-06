import { Action } from "@ngrx/store";
import { ProfileViewModel } from "../models/profile-view.model";
export declare enum ProfileViewActionTypes {
    GET_PROFILE = "[USER][PROFILE] GET_PROFILE",
    GET_PROFILE_START = "[USER][PROFILE] GET_PROFILE_START",
    GET_PROFILE_SUCCEED = "[USER][PROFILE] GET_PROFILE_SUCCEED",
    GET_PROFILE_FAILED = "[USER][PROFILE] GET_PROFILE_FAILED"
}
export declare class GetProfile implements Action {
    readonly type = ProfileViewActionTypes.GET_PROFILE;
}
export declare class GetProfileStart implements Action {
    readonly type = ProfileViewActionTypes.GET_PROFILE_START;
}
export declare class GetProfileSucceed implements Action {
    payload: ProfileViewModel.Response;
    readonly type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    constructor(payload: ProfileViewModel.Response);
}
export declare class GetProfileFailed implements Action {
    readonly type = ProfileViewActionTypes.GET_PROFILE_FAILED;
}
export declare type ProfileViewAction = GetProfile | GetProfileStart | GetProfileSucceed | GetProfileFailed;
