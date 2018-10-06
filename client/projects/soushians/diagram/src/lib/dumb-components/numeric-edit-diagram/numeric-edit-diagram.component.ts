import { Component, OnInit, Input, Output, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { DiagramService } from "../../services/diagram.service";
import { takeUntil, filter } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
	selector: "numeric-edit-diagram",
	templateUrl: "./numeric-edit-diagram.component.html",
	styleUrls: ["./numeric-edit-diagram.component.scss"]
})
export class NumericEditDiagramComponent implements OnInit, OnDestroy {
	unsubscribe = new Subject<void>();
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
		this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(
			filter(data => data != undefined),
			takeUntil(this.unsubscribe)
		).subscribe(data => {
			debugger;
		});
	}
	ngOnDestroy() {
		// this.dataSubscribtion.unsubscribe();
		debugger;
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
