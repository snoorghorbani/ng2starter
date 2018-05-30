import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { MainContainerState, WidgetReducers } from "../../../../main-container";
import { DashboardService } from "../../../services/dashboard.service";
import { WidgetModel } from "../../../models/widget.model";
import { AddWidgetAction, DeleteWidgetAction, GetWidgetListAction, BulkEditWidgetsAction } from "../../widget.actions";
import { WidgetListApiModel } from "app/dashboard/models/widget-list-api.model";

export interface ngGridItem {
	x: number;
	y: number;
	width: number;
	height: number;
	customid: string;
}

@Component({
	template: `<widget-list-layout 
					[data]="data$ | async" 
					(submited)=saveGrid($event)
					(deleted)=delete($event)>
				</widget-list-layout>`
})
export class WidgetListContainerComponent implements OnInit {
	data$: Observable<WidgetModel[]>;
	data: WidgetModel[];
	constructor(public store: Store<MainContainerState>) {}

	add(model: WidgetModel) {
		this.store.dispatch(new AddWidgetAction(model));
	}
	delete(_id: string) {
		this.store.dispatch(new DeleteWidgetAction(_id));
	}
	saveGrid(gridItems: ngGridItem[]) {
		var requestBody = new WidgetListApiModel.Request();
		requestBody.body = this.data.map(item => {
			return {
				...item,
				...gridItems.find(girdItem => girdItem.customid == item._id)
			};
		});
		this.store.dispatch(new BulkEditWidgetsAction(requestBody));
	}
	ngOnInit() {
		this.data$ = this.store.select(state => state.widget.list.data);
		this.data$.subscribe(data => (this.data = data));
		this.store.dispatch(new GetWidgetListAction());
	}
}
