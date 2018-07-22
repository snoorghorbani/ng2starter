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

@Component({
	template: ""
})
export class PageViewComponent implements OnInit {
	@Input()
	set oid(id: string) {
		this._selectPage(id);
	}
	page$: Observable<PageModel>;
	component: ComponentRef<any>;
	constructor(
		public store: Store<AppState>,
		private service: PageService,
		private configurationService: PageConfigurationService,
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {}
	ngOnInit() {}
	_selectPage(id: string) {
		this.page$ = this.service.selectById(id);
	}
}
