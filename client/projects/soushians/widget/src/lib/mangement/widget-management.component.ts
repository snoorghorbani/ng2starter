import { Component, OnInit, Directive } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
import { GetWidgetsStartAction } from "../services/api/get-widgets/get-widgets.actions";

@Component({
	templateUrl: "widget-management.component.html",
	styleUrls: ["widget-management.component.scss"]
})
export class WidgetsManagementComponent implements OnInit {
	anghazi: { [type: string]: { color: string; icon: string } };
	widgets$: Observable<WidgetModel<any>[]>;
	constructor(public store: Store<AppState>) {
		this.widgets$ = this.store.select((state) => state.widgets.db.data);
		this._fill_anghazi();
	}
	ngOnInit() {
		this.store.dispatch(new GetWidgetsStartAction());
	}
	_fill_anghazi() {
		this.anghazi = {
			article: {
				color: "green",
				icon: "description"
			},
			links: {
				color: "orange",
				icon: "link"
			}
		};
	}
}


