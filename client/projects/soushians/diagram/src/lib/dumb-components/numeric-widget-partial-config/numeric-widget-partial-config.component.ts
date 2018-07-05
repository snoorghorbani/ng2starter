import { Component, OnInit, Input, Output, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";

import { DiagramService } from "../../services/diagram.service";

@Component({
	selector: "numeric-widget-partial-config",
	templateUrl: "./numeric-widget-partial-config.component.html",
	styleUrls: [ "./numeric-widget-partial-config.component.scss" ]
})
export class NumericWidgetPartialConfigComponent implements OnInit, OnDestroy {
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
}
