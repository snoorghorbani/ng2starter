import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DiagramService } from "../../services/diagram.service";
import { AddDiagramApiModel } from "../../models";
import * as FeatureReducer from "../../reducers";
import { AddDiagramAction } from "../../actions";

declare var _: any;

@Component({
	selector: "data-mapper",
	templateUrl: "./data-mapper.component.html",
	styleUrls: [ "./data-mapper.component.scss" ]
})
export class DataMapperComponent implements OnInit {
	@Input() destination: string;
	_data: any;
	@Input()
	set data(data) {
		if (!data) return;
		this.dataReport = _.report(data);
		this._data = data;
	}
	dataReport: any[] = [];
	constructor(private diagramService: DiagramService, private store: Store<FeatureReducer.FeatureState>) {}

	ngOnInit() {}
}
