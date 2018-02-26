import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as MainContainerReducer from "../../main-container/main-container.reducers";
import { FormService } from "app/form/services";
import { FormSchemaModel } from "../../models";

@Component({
	template: `<form-list
				[data]="data$">
				</form-list>`
})
export class FormListContainerComponent {
	data$: Observable<FormSchemaModel[]>;
	constructor(private service: FormService, private store: Store<MainContainerReducer.MainContainerState>) {}
	ngOnInit() {
		this.data$ = this.service.getList();
	}
}
