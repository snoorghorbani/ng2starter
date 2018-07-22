import { PageModel } from "../../../models/page.model";

export namespace UpsertPageApiModel {
	export class Request {
		page: PageModel;
		constructor(page = {}) {
			debugger;
			this.page = new PageModel(page);
		}

		getRequestBody() {
			return this.page;
		}
	}

	export class Response {
		Result: PageModel;
		constructor() {}
	}
}
