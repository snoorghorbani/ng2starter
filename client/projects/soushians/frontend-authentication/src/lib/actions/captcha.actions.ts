import { Action } from '@ngrx/store';

import { TokenModel } from '../models';

export const NEW_CAPTCHA = '[captcha] new captcha';
export const TOKEN_REQUESTED = '[captcha] token_requested';
export const TOKEN_RECEIVED = '[captcha] token_received';
export const CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
export const CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
export const CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
export const CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';

export class NewCaptcha implements Action {
        readonly type = NEW_CAPTCHA;
}
export class TokenRequested implements Action {
        readonly type = TOKEN_REQUESTED;
}
export class TokenReceived implements Action {
        readonly type = TOKEN_RECEIVED;
        constructor(public payload: TokenModel) { }
}
export class CaptchaImageRequested implements Action {
        readonly type = CAPTCHA_IMAGE_REQUESTED;
}
export class CaptchaImageLoaded implements Action {
        readonly type = CAPTCHA_IMAGE_LOADED;
}
export class CaptchaEntered implements Action {
        readonly type = CAPTCHA_ENTERED;
        constructor(public payload: string) { }
}
export class ClearCaptcha implements Action {
        readonly type = CLEAR_CAPTCHA;
}
export type CaptchaAction =
        | NewCaptcha
        | TokenRequested
        | TokenReceived
        | CaptchaImageRequested
        | CaptchaImageLoaded
        | CaptchaEntered
        | ClearCaptcha;