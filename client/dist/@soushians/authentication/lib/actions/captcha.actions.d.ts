import { Action } from '@ngrx/store';
import { TokenModel } from '../models';
export declare const NEW_CAPTCHA = "[captcha] new captcha";
export declare const TOKEN_REQUESTED = "[captcha] token_requested";
export declare const TOKEN_RECEIVED = "[captcha] token_received";
export declare const CAPTCHA_IMAGE_REQUESTED = "[captcha] captcha_image_requested";
export declare const CAPTCHA_IMAGE_LOADED = "[captcha] captcha_image_loaded";
export declare const CAPTCHA_ENTERED = "[captcha] CAPTCHA_ENTERED";
export declare const CLEAR_CAPTCHA = "[captcha] CLEAR_CAPTCHA";
export declare class NewCaptcha implements Action {
    readonly type = "[captcha] new captcha";
}
export declare class TokenRequested implements Action {
    readonly type = "[captcha] token_requested";
}
export declare class TokenReceived implements Action {
    payload: TokenModel;
    readonly type = "[captcha] token_received";
    constructor(payload: TokenModel);
}
export declare class CaptchaImageRequested implements Action {
    readonly type = "[captcha] captcha_image_requested";
}
export declare class CaptchaImageLoaded implements Action {
    readonly type = "[captcha] captcha_image_loaded";
}
export declare class CaptchaEntered implements Action {
    payload: string;
    readonly type = "[captcha] CAPTCHA_ENTERED";
    constructor(payload: string);
}
export declare class ClearCaptcha implements Action {
    readonly type = "[captcha] CLEAR_CAPTCHA";
}
export declare type CaptchaAction = NewCaptcha | TokenRequested | TokenReceived | CaptchaImageRequested | CaptchaImageLoaded | CaptchaEntered | ClearCaptcha;
