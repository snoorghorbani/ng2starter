import { PageModel } from "../../../models/page.model";

export namespace GetPageApiModel {
	export class Request {
		_id: string;
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: PageModel<any>;
		constructor() {}
	}
}
