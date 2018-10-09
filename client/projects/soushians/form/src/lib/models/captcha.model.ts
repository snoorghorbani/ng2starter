
export class CaptchaModel {
	captchaImg: string;
	captchaCode: string;
	constructor({ captchaImg, captchaCode }: { captchaImg?: string; captchaCode?: string; } = {}) {
		this.captchaImg = `${captchaImg}?${Math.random()}`;
		this.captchaCode = captchaCode || "";
	}
}

export namespace UpsertCaptchaApiModel {
	export class Request {
		Captcha: CaptchaModel;
		constructor(initValue: Partial<UpsertCaptchaApiModel.Request> = {}) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}
		getRequestBody() {
			return this.Captcha.captchaCode;
		}
	}
	export class Response {
		Result: CaptchaModel;
		constructor() { }
	}
}
