import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";
import { BpmnModel } from "../../models";
import { ViewBpmnAction } from "../view.actions";
import { AddBpmnSchemaAction, UpdateBpmnSchemaAction, GetBpmnSchemaAction } from "../../list";
import { BpmnService } from "../../services";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "ngs-flow-view",
	template: `<flow-view #formView
					[flow]="flow$ | async"
				></flow-view>
				`
})
export class FlowViewContainerComponent implements OnInit {
	@Input() id: string;
	flow$: Observable<BpmnModel>;
	constructor(public store: Store<MainContainerState>, private route: ActivatedRoute, public service: BpmnService) {}
	ngOnInit() {
		this.store.dispatch(new GetBpmnSchemaAction(this.id));
		this.flow$ = this.service.selectById(this.id);
	}
}
