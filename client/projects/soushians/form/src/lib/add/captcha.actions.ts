import { Action } from "@ngrx/store";

import { FormSchemaModel } from "../models";
import { CaptchaModel } from "../models/captcha.model";

export enum CaptchaActionTypes {
	GET_CAPTCHA = "[CAPTCHA][GET] GET_CAPTCHA",
	GET_CAPTCHA_START = "[CAPTCHA][GET] GET_CAPTCHA_START",
	GET_CAPTCHA_SUCCEED = "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
	GET_CAPTCHA_FAILED = "[CAPTCHA][GET] GET_CAPTCHA_FAILED"
}

export class GetCaptchaAction implements Action {
	readonly type = CaptchaActionTypes.GET_CAPTCHA;
	// constructor(public payload: CaptchaModel) { }
}
export class GetCaptchaStartAction implements Action {
	readonly type = CaptchaActionTypes.GET_CAPTCHA_START;
	constructor(public payload: CaptchaModel) { }
}
export class GetCaptchaSucceedAction implements Action {
	readonly type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
}
export class GetCaptchaFailedAction implements Action {
	readonly type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
}

export type CaptchaActions = GetCaptchaAction | GetCaptchaStartAction | GetCaptchaSucceedAction | GetCaptchaFailedAction;
