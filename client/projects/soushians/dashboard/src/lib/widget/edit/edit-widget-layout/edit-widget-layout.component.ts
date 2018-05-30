import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "edit-widget-layout",
	templateUrl: "./edit-widget-layout.component.html"
})
export class EditWidgetLayoutComponent {
	@Input() data: any;
}
