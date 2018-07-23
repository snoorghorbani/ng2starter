import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { UpsertPageStartAction } from "../services/api";
import { AppState } from "../page.reducer";
import { ActivatedRoute } from "@angular/router";
import { PageModel } from "../models/page.model";
import { pluck, switchMap, filter } from "rxjs/operators";
import { PageService } from "../services/page.service";

@Component({
	templateUrl: "./upsert.component.html"
})
export class UpsertComponent implements OnInit {
	formGroup: FormGroup;
	page$: Observable<PageModel>;
	constructor(private store: Store<AppState>, private route: ActivatedRoute, private service: PageService) {
		this._init_formgroup();
	}

	/**
	 * view methods
	 */
	upsert() {
		debugger;
		const page = {
			...this.formGroup.value
		};
		this.store.dispatch(new UpsertPageStartAction(page));
	}
	ngOnInit() {
		this._select_page();
		this._update_formgroup_base_on_page();
	}

	/**
	 * private methods
	 */
	_init_formgroup() {
		this.formGroup = new FormGroup({
			_id: new FormControl(""),
			name: new FormControl(""),
			grid: new FormControl("")
		});
	}

	_select_page() {
		this.page$ = this.route.params.pipe(
			pluck("name"),
			filter((name) => name != undefined),
			switchMap((name: string) => this.service.selectByName(name)),
			filter((page) => page != undefined)
		);
	}
	_update_formgroup_base_on_page() {
		this.page$.subscribe((page) => {
			this.formGroup.patchValue(page);
		});
	}
}
