import { Component, OnInit, Input, Output, EventEmitter, Injector } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject, Subscription } from "rxjs";

import { DiagramModel } from "../../models/diagram.model";

@Component({
	selector: "diagram-server-status",
	templateUrl: "./server-status-diagram.component.html",
	styleUrls: [ "./server-status-diagram.component.scss" ]
})
export class ServerStatusDiagramComponent implements OnInit {
	dataSubscribtion: Subscription;
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
	}

	timeChange(e) {
		// this.dataSubscribtion.unsubscribe();
		// this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
		//   .subscribe(data => {
		//     debugger
		//     this.chart.load({
		//       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
		//     });
		//   })
	}
	ngOnInit() {}
}
