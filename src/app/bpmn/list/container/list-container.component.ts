import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { MainContainerState, BpmnReducers } from "../../main-container";
import { BpmnService } from "../../services";
import { FlowModel } from "../../models";
import { BpmnsListAction } from "../../list/list.actions";

@Component({
	template: `<bpmn-list
					[data]="data$">
				</bpmn-list>`
})
export class BpmnListContainerComponent implements OnInit {
	data$: Observable<FlowModel[]>;
	constructor(public store: Store<MainContainerState>) {
		this.data$ = this.store.select(state => state.bpmn.list.data);
	}
	ngOnInit() {
		this.store.dispatch(new BpmnsListAction());
	}
}
