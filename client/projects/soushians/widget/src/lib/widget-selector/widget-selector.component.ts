import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

// import { IGridItemComponent } from "@soushians/grid";

import { WidgetModel } from "../models/widget.model";
import { IWidgetViewInputInterface } from "../models/widget-view-input.interface";
import { AppState } from "../widget.reducer";
import { GetWidgetsStartAction } from "../services/api";

@Component({
	templateUrl: "widget-selector.component.html"
})
export class WidgetSelectorComponent implements OnInit {
	widgets$: Observable<WidgetModel<any>[]>;
	selectedWidgetId: string;
	get valid() {
		return this.config.oid != undefined;
	}
	get config() {
		return {
			oid: this.selectedWidgetId
		};
	}
	constructor(public store: Store<AppState>) {
		this.widgets$ = this.store.select(state => state.widgets.db.data);
	}
	ngOnInit() {
		this.store.dispatch(new GetWidgetsStartAction());
	}
}
