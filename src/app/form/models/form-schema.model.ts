import { FormControlSchema } from "./form-field-schema.model";

export class Validators {
	readonly: boolean;
}

export class FormSchemaModel {
	_id: string;
	name: string;
	description: string;
	form: FormControlSchema;

	constructor() {
		this.form = new FormControlSchema("group");
	}
	init() {
		this._id = (Math.random() * 10).toString();
	}
}
