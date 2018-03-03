import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { MainContainerState } from "../../main-container";
import { FormSchemaModel, EditFormApiModel } from "../../models";
import { FormService } from "../../services";
import { AddFormAction } from "../../add/add-form.actions";
import { EditFormAction } from "../../edit/edit-form.actions";
import { AddFormContainerComponent } from "../../add";
import { GetFormSchemaAction } from "../../list";

@Component({
	template: `<edit-form
					[formGroup]="formGroup"
					[schema]="schema"
					(changes)="update_schema($event)"
					(submited)="update($event)">
				</edit-form>`
})
export class EditFormContainerComponent extends AddFormContainerComponent {
	formGroup = EditFormApiModel.Request.formGroup;
	constructor(public service: FormService, private route: ActivatedRoute, public store: Store<MainContainerState>) {
		super(store, service);
	}

	ngOnInit() {
		this.route.params
			.map(params => params["_id"])
			.subscribe(id => this.store.dispatch(new GetFormSchemaAction(id)));

		this.route.params
			.map(params => params["_id"])
			.switchMap(id => this.service.selectFormById(id))
			.filter(data => data != null)
			.take(1)
			.subscribe(formSchema => {
				debugger;
				this.schema = formSchema;
				this.formGroup.patchValue(formSchema);
			});
	}

	update(data) {
		this.store.dispatch(new EditFormAction(data));
	}
}
