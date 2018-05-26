import { FieldConfig } from "./field-config.model";

export class FormSchemaModel {
	_id: string;
	name: string;
	description: string;
	form: FieldConfig;
	events = {
		accept: {
			show: false,
			text: "ثبت"
		},
		cancel: {
			show: false,
			text: "انصراف"
		}
	};

	constructor() {
		this.form = new FieldConfig("group");
	}
	init() {
		this._id = (Math.random() * 10).toString();
	}
}
