import { GridModel } from "../../../models";

export namespace GetGridApiModel {
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
		Result: GridModel;
		constructor() {}
	}
}
