import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { PageModel } from "../models/page.model";
import { AppState } from "../page.reducer";
import { GetPagesStartAction } from "../services/api/get-pages/get-pages.actions";
import { DeletePageStartAction } from "../services/api";

@Component({
	templateUrl: "page-management.component.html"
})
export class PagesManagementComponent implements OnInit {
	pages$: Observable<PageModel[]>;
	constructor(public store: Store<AppState>) {
		this.pages$ = this.store.select((state) => state.pages.db.data);
	}
	ngOnInit() {
		this.store.dispatch(new GetPagesStartAction());
	}
	/**
	 * view methods
	 */
	delete(page: PageModel) {
		this.store.dispatch(new DeletePageStartAction(page._id));
	}
}
