import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { MainContainerState, BpmnReducers } from "../../main-container";
import { BpmnService } from "../../services";
import { BpmnModel } from "../../models";
import { BpmnsListAction } from "../../list/list.actions";

@Component({
	templateUrl: "./list-container.html"
})
export class BpmnListContainerComponent implements OnInit {
	data$: Observable<BpmnModel[]>;
	constructor(public store: Store<MainContainerState>) {
		this.data$ = this.store.select(state => state.bpmn.list.data);
	}
	ngOnInit() {
		this.store.dispatch(new BpmnsListAction());
	}
}
