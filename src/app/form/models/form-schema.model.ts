import { FormControlSchema } from "app/form/models/form-field-schema.model";

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
}
