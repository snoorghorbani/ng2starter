import { Action } from "@ngrx/store";
import { CaptchaModel } from "../models/captcha.model";
export declare enum CaptchaActionTypes {
    GET_CAPTCHA = "[CAPTCHA][GET] GET_CAPTCHA",
    GET_CAPTCHA_START = "[CAPTCHA][GET] GET_CAPTCHA_START",
    GET_CAPTCHA_SUCCEED = "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
    GET_CAPTCHA_FAILED = "[CAPTCHA][GET] GET_CAPTCHA_FAILED",
}
export declare class GetCaptchaAction implements Action {
    readonly type: CaptchaActionTypes;
}
export declare class GetCaptchaStartAction implements Action {
    payload: CaptchaModel;
    readonly type: CaptchaActionTypes;
    constructor(payload: CaptchaModel);
}
export declare class GetCaptchaSucceedAction implements Action {
    readonly type: CaptchaActionTypes;
}
export declare class GetCaptchaFailedAction implements Action {
    readonly type: CaptchaActionTypes;
}
export declare type CaptchaActions = GetCaptchaAction | GetCaptchaStartAction | GetCaptchaSucceedAction | GetCaptchaFailedAction;
