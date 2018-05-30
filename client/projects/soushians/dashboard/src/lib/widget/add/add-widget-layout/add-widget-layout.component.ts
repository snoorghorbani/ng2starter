import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AddWidgetApiModel } from "../../../models/add-widget-api.model";
import { WidgetModel } from "../../../models/widget.model";

@Component({
	selector: "add-widget-layout",
	templateUrl: "./add-widget-layout.component.html",
	styleUrls: [ "./add-widget-layout.component.css" ]
})
export class AddWidgetLayoutComponent {
	@Input() formGroup = AddWidgetApiModel.Request.formGroup;
	@Output() submited = new EventEmitter();
	@Input() data: string;

	emit() {
		//this.formGroup.patchValue({ model: this.formGroup });
		var model = new WidgetModel();
		model.typeId = this.data;
		model.text = this.data;
		model.height = 3;
		model.width = 1;
		model.x = 1;
		model.y = 1;
		model._id = Math.random().toString();
		this.submited.emit(model);
	}
}
