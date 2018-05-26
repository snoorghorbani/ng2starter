import { Component, OnInit } from "@angular/core";
import { SourceService } from "../../services/source.service";
import { Observable } from "rxjs/Observable";
import { GetSourcesApiModel } from "../../models";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../../reducers";
//import { SourceUpsertAction } from 'app/actions';

@Component({
	selector: "source-list",
	templateUrl: "./source-list.component.html",
	styleUrls: [ "./source-list.component.scss" ]
})
export class SourceListComponent implements OnInit {
	sources: Observable<GetSourcesApiModel.Response>;

	constructor(
		private sourceService: SourceService // private store: Store<FeatureReducer.FeatureState>
	) {
		debugger;
		this.sources = this.sourceService.getSources();
		// this.sources.subscribe(data => { debugger})
		//this.configs.subscribe(data => {
		//        debugger;
		//        this.store.dispatch(new ConfigLoaded(data.Result));
		//});
	}

	ngOnInit() {}
}
