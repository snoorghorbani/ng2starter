export class TokenModel {
        Token: string;
        LifeTime: string;
}

export class CaptchaModel {
        Token: TokenModel;
        Captcha: string;
        CaptchaImageUrl: string = "";
}