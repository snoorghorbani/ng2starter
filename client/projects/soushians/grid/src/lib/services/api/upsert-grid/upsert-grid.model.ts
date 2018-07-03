import { GridModel } from "../../../models";

export namespace UpsertGridApiModel {
	export class Request {
		grid: GridModel;
		constructor(grid = {}) {
			debugger;
			this.grid = new GridModel(grid);
		}

		getRequestBody() {
			return this.grid;
		}
	}

	export class Response {
		Result: GridModel;
		constructor() {}
	}
}
