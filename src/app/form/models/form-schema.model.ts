import { FormFieldSchema } from "app/form/models/form-field-schema.model";

export class Validators {
	readonly: boolean;
}

export class FormSchema {
	_id: string;
	name: string;
	description: string;
	// type: "group" | "array";
	form: FormFieldSchema;

	constructor() {}
}
