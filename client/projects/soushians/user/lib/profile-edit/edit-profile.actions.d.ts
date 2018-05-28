import { Action } from "@ngrx/store";
import { EditProfile_ApiModel, UserModel } from "../models";
export declare enum EditProfileActionTypes {
    EDIT_PROFILE = "[USER][PASSWORD] EDIT_PROFILE",
    EDIT_PROFILE_START = "[USER][PASSWORD] EDIT_PROFILE_START",
    EDIT_PROFILE_SUCCEED = "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
    EDIT_PROFILE_FAILED = "[USER][PASSWORD] EDIT_PROFILE_FAILED",
}
export declare class EditProfile implements Action {
    payload: EditProfile_ApiModel.Request;
    readonly type: EditProfileActionTypes;
    constructor(payload: EditProfile_ApiModel.Request);
}
export declare class EditProfileStart implements Action {
    payload: EditProfile_ApiModel.Request;
    readonly type: EditProfileActionTypes;
    constructor(payload: EditProfile_ApiModel.Request);
}
export declare class EditProfileSucceed implements Action {
    payload: UserModel;
    readonly type: EditProfileActionTypes;
    constructor(payload: UserModel);
}
export declare class EditProfileFailed implements Action {
    readonly type: EditProfileActionTypes;
}
export declare type EditProfileAction = EditProfile | EditProfileStart | EditProfileSucceed | EditProfileFailed;
