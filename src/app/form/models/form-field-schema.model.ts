import { Validators } from "app/form/models/form-schema.model";

export class FormControlSchema {
	type: "group" | "array" | "control";
	name: string;
	parentType?: "array" | "group";
	formGroupPath?: string;
	path?: string;
	placeholder: string;
	inputType: "select" | "text" | "number" | "email" | "color" | "checkbox";
	value?: any;
	order?: number;
	options: { [key: string]: string };
	optionsEndpoint: string;
	fields?: FormControlSchema[];
	validators: Validators;
	constructor(type: "group" | "array" | "control") {
		this.type = type;
		if (type != "control") this.fields = [];
	}
}
