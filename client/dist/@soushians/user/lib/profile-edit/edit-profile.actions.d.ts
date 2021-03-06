import { Action } from "@ngrx/store";
import { UserModel } from "../models/user.model";
import { EditProfile_ApiModel } from "../models/profile-edit.model";
export declare enum EditProfileActionTypes {
    EDIT_PROFILE = "[USER][PASSWORD] EDIT_PROFILE",
    EDIT_PROFILE_START = "[USER][PASSWORD] EDIT_PROFILE_START",
    EDIT_PROFILE_SUCCEED = "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
    EDIT_PROFILE_FAILED = "[USER][PASSWORD] EDIT_PROFILE_FAILED"
}
export declare class EditProfile implements Action {
    payload: EditProfile_ApiModel.Request;
    readonly type = EditProfileActionTypes.EDIT_PROFILE;
    constructor(payload: EditProfile_ApiModel.Request);
}
export declare class EditProfileStart implements Action {
    payload: EditProfile_ApiModel.Request;
    readonly type = EditProfileActionTypes.EDIT_PROFILE_START;
    constructor(payload: EditProfile_ApiModel.Request);
}
export declare class EditProfileSucceed implements Action {
    payload: UserModel;
    readonly type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    constructor(payload: UserModel);
}
export declare class EditProfileFailed implements Action {
    readonly type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
}
export declare type EditProfileAction = EditProfile | EditProfileStart | EditProfileSucceed | EditProfileFailed;
