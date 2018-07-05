import { Component, OnInit, Input, Output, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { DiagramService } from "../../services/diagram.service";

@Component({
	selector: "linear-diagram-partial-config",
	templateUrl: "./linear-diagram-partial-config.component.html",
	styleUrls: [ "./linear-diagram-partial-config.component.scss" ]
})
export class LinearDiagramPartialConfigComponent implements OnInit, OnDestroy {
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
	@Output() ConfigChanged = new EventEmitter();
	diagramService: DiagramService;
	formGroup: FormGroup;
	constructor(private injector: Injector) {
		this.formGroup = this.injector.get("formGroup");
		this.diagramService = this.injector.get("diagramService");
	}
	ngOnInit() {
		// this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
		//   .subscribe(data => {
		//     debugger;
		//   });
	}
	ngOnDestroy() {
		// this.dataSubscribtion.unsubscribe();
	}
	configChanged() {
		this.ConfigChanged.emit();
	}
}
