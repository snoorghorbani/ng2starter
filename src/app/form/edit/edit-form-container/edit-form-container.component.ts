import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import * as MainContainerReducer from "../../main-container/main-container.reducers";
import { FormSchemaModel, EditFormApiModel } from "../../models";
import { FormService } from "app/form/services";
import { AddFormAction } from "app/form/add/add-form.actions";
import { EditFormAction } from "app/form/edit/edit-form.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
	template: `<edit-form
					[formGroup]="formGroup">
				</edit-form>`
})
export class EditFormContainerComponent implements OnInit {
	formGroup = EditFormApiModel.Request.formGroup;
	constructor(
		private service: FormService,
		private route: ActivatedRoute,
		private store: Store<MainContainerReducer.MainContainerState>
	) {}

	ngOnInit() {
		// this.route.params.subscribe((params) => {
		// 	const name: string = params["name"];
		// 	this.service.get(name).subscribe((data) => {
		// 		if (data == null) return;
		// 		this.formGroup.patchValue({
		// 			Name: data.Name,
		// 			Controls: data.Controls
		// 		});
		// 	});
		// });

		this.route.params
			.map((params) => params["name"])
			.switchMap((name) => this.service.get(name))
			.filter((data) => data != null)
			.take(1)
			.subscribe((data) => {
				this.formGroup.patchValue({
					name: data.name,
					form: data.form
				});
			});
	}

	update(data) {
		this.store.dispatch(new EditFormAction(data));
	}
}
