import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
import { GetWidgetsStartAction } from "../services/api/get-widgets/get-widgets.actions";

@Component({
	templateUrl: "widget-management.component.html"
})
export class WidgetsManagementComponent implements OnInit {
	widgets$: Observable<WidgetModel<any>[]>;
	constructor(public store: Store<AppState>) {
		this.widgets$ = this.store.select((state) => state.widgets.db.data);
	}
	ngOnInit() {
		this.store.dispatch(new GetWidgetsStartAction());
	}
}
