import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";
import { FlowModel } from "../../models";
import { UpsertBpmnAction } from "../upsert.actions";
import { AddBpmnSchemaAction, UpdateBpmnSchemaAction, GetBpmnSchemaAction } from "../../list";
import { BpmnService } from "../../services";
import { BehaviorSubject } from "rxjs";

@Component({
	template: `<ngs-bpmn-upsert 
					[flow]="flow$" 
					(changes)="update_schema($event)" 
					(submited)=upsert($event)
				></ngs-bpmn-upsert>`
})
export class UpsertContainerComponent implements OnInit {
	flow$: Observable<FlowModel>;
	upsertMode: boolean;
	constructor(public store: Store<MainContainerState>, private route: ActivatedRoute, public service: BpmnService) {
		this.upsertMode = false;
		this.route.params
			.map(params => params["_id"])
			.filter(id => id != undefined)
			.subscribe(id => this.store.dispatch(new GetBpmnSchemaAction(id)));
		this.flow$ = this.route.params.map(params => params["_id"]).switchMap(id => this.service.selectById(id));
	}
	ngOnInit() {}
	upsert(form: FlowModel) {
		this.store.dispatch(new UpsertBpmnAction(form));
	}
}
