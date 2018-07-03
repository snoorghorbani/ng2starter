import { GridModel } from "../../../models";

export namespace GetGridsApiModel {
	export class Request {
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: GridModel[];
		constructor() {}
	}
}
