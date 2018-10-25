import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { WidgetModel, IWidgetView } from "@soushians/widget";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";

import { ListWidgetConfigModel } from "../list-widget-config.model";

@Component({
	selector: "widget-list-view",
	templateUrl: "./list-view.component.html",
	styleUrls: ["./list-view.component.css"]
})
export class ListViewComponent implements OnInit, IWidgetView<ListWidgetConfigModel> {
	widget: WidgetModel<ListWidgetConfigModel>;
	havePermission$: Observable<boolean>;
	constructor(private store: Store<any>) { }

	ngOnInit() {
		this.havePermission$ = this.store.select(getFrontendAuthenticationState);
	}
}
