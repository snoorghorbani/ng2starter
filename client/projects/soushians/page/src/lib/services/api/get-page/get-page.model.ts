import { PageModel } from "../../../models/page.model";

export namespace GetPageApiModel {
	export class Request {
		name: string;
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: PageModel;
		constructor() {}
	}
}
