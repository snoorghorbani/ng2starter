import { Component, OnInit, Input, Output, EventEmitter, Injector } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

import { DiagramModel } from "../../models";

@Component({
	selector: "diagram-server-connecting-time",
	templateUrl: "./server-connecting-time-diagram.component.html",
	styleUrls: [ "./server-connecting-time-diagram.component.scss" ]
})
export class ServerConnectingTimeDiagramComponent implements OnInit {
	@Input() time: number = 0;
	dataLoaded = new BehaviorSubject(false);
	_data;
	@Input()
	set data(data) {
		this._data = data;
		this.dataLoaded.next(true);
	}
	get data() {
		return this._data;
	}
	constructor(private injector: Injector) {
		this.data = this.injector.get("data");
		setInterval(() => {
			this.time = this.time + 1;
		}, 1000);
	}

	ngOnInit() {}
	timeChange(e) {
		// this.dataSubscribtion.unsubscribe();
		// this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
		//         .subscribe(data => {
		//                 this.chart.load({
		//                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
		//                 });
		//         })
	}
}
