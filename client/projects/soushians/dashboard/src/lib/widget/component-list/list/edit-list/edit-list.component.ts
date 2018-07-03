import { Store } from "@ngrx/store";
import { Component, OnInit, Inject } from "@angular/core";
import { MainContainerState, WidgetReducers } from "../../../../../main-container";
import { WidgetService } from "app/dashboard/services/widget.service.ts";
import { Observable } from "rxjs/Observable";
import { ListConfigModel } from "app/dashboard/models/component-configs/list-config.model.ts";
import { EditListConfigApiModel } from "app/dashboard/models/component-configs/edit-list-config-api.model.ts";
import { EditWidgetAction } from "app/dashboard/widget/widget.actions";
import { WidgetModel } from "app/dashboard/models";

@Component({
	selector: "app-edit-list",
	templateUrl: "./edit-list.component.html"
})
export class EditListComponent {
	widget: WidgetModel<ListConfigModel>;
	formGroup = EditListConfigApiModel.Request.FormGroup;
	constructor(private store: Store<MainContainerState>, @Inject("widget") widget: WidgetModel<ListConfigModel>) {
		debugger;
		this.widget = widget || new WidgetModel<ListConfigModel>(ListConfigModel);
		this.formGroup.patchValue(widget.configs);
	}

	emit() {
		this.widget.configs = this.formGroup.value;
		this.store.dispatch(new EditWidgetAction(this.widget));
	}
}
