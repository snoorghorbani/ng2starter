import { NgModule, Component, OnInit, Output, EventEmitter, Input, ViewChild, ViewContainerRef } from "@angular/core";

import { FormGroup, FormBuilder, FormControl, AbstractControl, FormArray, Validators } from "@angular/forms";
import { UpsertSourceApiModel, SourceModel } from "../../models";
import { SourceService } from "../../services/source.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { SourceSubmit } from "../../actions";
import * as FeatureReducer from "../../reducers";
import { Subscription } from "rxjs/Rx";

@Component({
	selector: "source-source-upsert",
	templateUrl: "./source-upsert.component.html",
	styleUrls: [ "./source-upsert.component.scss" ]
})
export class SourceUpsertComponent implements OnInit {
	//configInforamation;
	formGroup: FormGroup = UpsertSourceApiModel.Request.formGroup;
	sources: Observable<SourceModel[]>;
	thresholds: AbstractControl[];
	data: any;
	types = [ "critical", "goal" ];
	constructor(
		private sourceService: SourceService,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private store: Store<FeatureReducer.FeatureState>
	) {
		// this.sources = this.sourceService.getSources();
		this.thresholds = (this.formGroup.controls.Thresholds as FormArray).controls;
		this.route.params.subscribe(params => {
			const sourceId: string = params["id"];
			sourceId &&
				this.sourceService.getSourceById(sourceId).subscribe(data => {
					this.formGroup.patchValue({
						_id: data._id,
						Endpoint: data.Endpoint,
						Interval: data.Interval,
						IsActive: data.IsActive || false,
						Thresholds: data.Thresholds
					});

					data.Thresholds.forEach(mapping =>
						this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type)
					);
				});
		});
	}

	ngOnInit() {}

	addItem(Name: string = "", Formula: string = "", Message: string = "", Type: string = "critical") {
		const control = <FormArray>this.formGroup.controls["Thresholds"];
		control.push(
			new FormGroup({
				Name: new FormControl(Name, [ Validators.required ]),
				Formula: new FormControl(Formula, [ Validators.required ]),
				Message: new FormControl(Message, [ Validators.required ]),
				Type: new FormControl(Type, [ Validators.required ])
			})
		);
		//    control.push(this.formBuilder.group({
		//      Name: [Name],
		//      Formula: [Formula],
		//      Message: [Message]
		//    }));
	}

	removeItem(i: number) {
		const control = <FormArray>this.formGroup.controls["Thresholds"];
		control.removeAt(i);
	}

	getData() {
		const o$ = this.sourceService.getData(this.formGroup.value);
		o$.subscribe(data => {
			debugger;
			this.data = data.Data;
		});
		return o$;
	}

	add(data) {
		//if (!this.formGroup.valid) return;
		this.store.dispatch(new SourceSubmit(this.formGroup.value));
	}
}
