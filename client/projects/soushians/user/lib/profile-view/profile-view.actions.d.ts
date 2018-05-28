import { Action } from "@ngrx/store";
import { ProfileViewModel } from "../models";
export declare enum ProfileViewActionTypes {
    GET_PROFILE = "[USER][PROFILE] GET_PROFILE",
    GET_PROFILE_START = "[USER][PROFILE] GET_PROFILE_START",
    GET_PROFILE_SUCCEED = "[USER][PROFILE] GET_PROFILE_SUCCEED",
    GET_PROFILE_FAILED = "[USER][PROFILE] GET_PROFILE_FAILED",
}
export declare class GetProfile implements Action {
    readonly type: ProfileViewActionTypes;
}
export declare class GetProfileStart implements Action {
    readonly type: ProfileViewActionTypes;
}
export declare class GetProfileSucceed implements Action {
    payload: ProfileViewModel.Response;
    readonly type: ProfileViewActionTypes;
    constructor(payload: ProfileViewModel.Response);
}
export declare class GetProfileFailed implements Action {
    readonly type: ProfileViewActionTypes;
}
export declare type ProfileViewAction = GetProfile | GetProfileStart | GetProfileSucceed | GetProfileFailed;
