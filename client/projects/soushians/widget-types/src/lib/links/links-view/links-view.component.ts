import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { WidgetModel, IWidgetView } from "@soushians/widget";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";

import { LinksWidgetConfigModel } from "../links-widget-config.model";

@Component({
	selector: "widget-links-view",
	templateUrl: "./links-view.component.html",
	styleUrls: [ "./links-view.component.css" ]
})
export class LinksViewComponent implements OnInit, IWidgetView<LinksWidgetConfigModel> {
	// tslint:disable-next-line:no-input-rename
	widget: WidgetModel<LinksWidgetConfigModel>;
	havePermission$: Observable<boolean>;
	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.havePermission$ = this.store.select(getFrontendAuthenticationState);
	}
}
