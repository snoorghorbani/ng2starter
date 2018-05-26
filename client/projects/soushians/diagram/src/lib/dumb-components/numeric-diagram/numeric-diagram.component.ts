import { Component, OnInit, Input, Output, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";

import { DiagramModel } from "../../models";
import { DiagramService } from "../../services/diagram.service";

@Component({
	selector: "diagram-numeric",
	templateUrl: "./numeric-diagram.component.html",
	styleUrls: [ "./numeric-diagram.component.scss" ]
})
export class NumericDiagramComponent implements OnInit, OnDestroy {
	dataLoaded = new BehaviorSubject(false);
	_data;
	counter: number;
	@Input()
	set data(data) {
		this._data = data;
		this.dataLoaded.next(true);
	}
	get data() {
		return this._data;
	}
	dataSubscribtion: Subscription;
	constructor(private injector: Injector, private diagramService: DiagramService) {
		this.data = this.injector.get("data");
		this.counter = 0;
	}

	ngOnInit() {
		this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(data => {
			let counter = this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings);
			this.counter = counter[0][1];
		});
	}
	ngOnDestroy() {
		this.dataSubscribtion.unsubscribe();
	}
}
