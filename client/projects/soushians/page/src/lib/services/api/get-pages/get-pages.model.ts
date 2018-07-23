import { PageModel } from "../../../models/page.model";

export namespace GetPagesApiModel {
	export class Request {
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: PageModel[];
		constructor() {}
	}
}
