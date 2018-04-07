import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { MainContainerState, BpmnReducers } from "../../main-container";
import { BpmnService } from "../../services";
import { ProcessModel } from "../../models";
import { BpmnsListAction } from "../../list/list.actions";

@Component({
	templateUrl: "./list-container.html"
})
export class BpmnListContainerComponent implements OnInit {
	data$: Observable<ProcessModel[]>;
	constructor(public store: Store<MainContainerState>) {
		this.data$ = this.store.select(state => state.bpmn.list.data);
		debugger;
	}
	ngOnInit() {
		this.store.dispatch(new BpmnsListAction());
	}
}
