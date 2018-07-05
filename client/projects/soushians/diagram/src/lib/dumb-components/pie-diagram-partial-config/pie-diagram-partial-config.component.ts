import { Component, OnInit, Input, Output, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { DiagramService } from "../../services/diagram.service";

@Component({
	selector: "pie-diagram-partial-config",
	templateUrl: "./pie-diagram-partial-config.component.html",
	styleUrls: [ "./pie-diagram-partial-config.component.scss" ]
})
export class PieDiagramPartialConfigComponent implements OnInit, OnDestroy {
	@Output() ConfigChanged = new EventEmitter();
	dataSubscribtion: Subscription;
	dataLoaded = new BehaviorSubject(false);
	_dataLoaded;
	@Input()
	set formGroup(data: FormGroup) {
		if (!data) return;
		this._dataLoaded = data;
		this.dataLoaded.next(true);
	}
	get formGroup() {
		return this._dataLoaded;
	}
	donutFormGroup: FormGroup;
	diagramService: DiagramService;
	constructor(private injector: Injector) {
		this.formGroup = this.injector.get("formGroup");
		this.diagramService = this.injector.get("diagramService");
		this.donutFormGroup = this.formGroup.controls.donut as FormGroup;
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
