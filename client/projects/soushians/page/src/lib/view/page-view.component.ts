import {
	Component,
	OnInit,
	ComponentRef,
	ComponentFactoryResolver,
	ViewContainerRef,
	Directive,
	Input
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { pluck, filter, switchMap, map, startWith } from "rxjs/operators";

import { PageModel } from "../models/page.model";
import { AppState } from "../page.reducer";
import { PageService } from "../services/page.service";
import { PageConfigurationService } from "../services/page-configuration.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	templateUrl: "./page-view.component.html"
})
export class PageViewComponent implements OnInit {
	page$: Observable<PageModel>;
	constructor(
		public store: Store<AppState>,
		private service: PageService,
		private route: ActivatedRoute,
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {}
	ngOnInit() {
		this._selectPage();
	}
	_selectPage() {
		this.page$ = this.route.params.pipe(
			pluck("name"),
			switchMap((name: string) => this.service.selectByName(name)),
			filter((page) => page != undefined)
		);
	}
}
