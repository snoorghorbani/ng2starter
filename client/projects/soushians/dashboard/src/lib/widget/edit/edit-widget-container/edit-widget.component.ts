import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { WidgetService } from "../../../services";
import { MainContainerState, WidgetReducers } from "../../../../main-container";
import { EditWidgetAction } from "app/dashboard/widget/widget.actions";

@Component({
	selector: "edit-widget",
	template: `<edit-widget-layout 
				[data]="data"></edit-widget-layout>`
})
export class EditWidgetContainerComponent implements OnInit {
	@Input() data: any;
	constructor(public store: Store<MainContainerState>, public service: WidgetService) {}
	ngOnInit() {}
}
