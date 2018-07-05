import { Component, OnInit, Input, Output, EventEmitter, Injector } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { DiagramService } from "../../services/diagram.service";

@Component({
	selector: "numeric-edit-diagram",
	templateUrl: "./numeric-edit-diagram.component.html",
	styleUrls: [ "./numeric-edit-diagram.component.scss" ]
})
export class NumericEditDiagramComponent implements OnInit {
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
	constructor(private injector: Injector, private diagramService: DiagramService) {
		this.data = this.injector.get("data");
	}

	ngOnInit() {
		// this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
		this.diagramService.getData(this.data.Source).subscribe(data => {
			debugger;
		});
	}
}
