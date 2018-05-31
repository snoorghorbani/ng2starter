import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState, WidgetReducers } from "../../../../main-container";
import { WidgetModel } from "../../../models";
import { AddWidgetAction } from "../../widget.actions";
import { WidgetService } from "../../../services";

@Component({
	selector: "add-widget",
	template: `<add-widget-layout 
				[data]="data$" (submited)=add($event)></add-widget-layout>`
})
export class AddWidgetContainerComponent implements OnInit {
	@Input("data") data$: string;
	constructor(public store: Store<MainContainerState>, public service: WidgetService) {}
	ngOnInit() {}
	add(model: WidgetModel) {
		this.store.dispatch(new AddWidgetAction(model));
	}
}
