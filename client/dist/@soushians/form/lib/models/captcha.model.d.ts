export declare class CaptchaModel {
    captchaImg: string;
    captchaCode: string;
    constructor({ captchaImg, captchaCode }?: {
        captchaImg?: string;
        captchaCode?: string;
    });
}
export declare namespace UpsertCaptchaApiModel {
    class Request {
        Captcha: CaptchaModel;
        constructor(initValue?: Partial<UpsertCaptchaApiModel.Request>);
        getRequestBody(): string;
    }
    class Response {
        Result: CaptchaModel;
        constructor();
    }
}
