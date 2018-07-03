import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Route, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { publish } from "rxjs/operator/publish";
import { Effect } from "@ngrx/effects";
declare var c3: any;

import { addDiagramReducer } from "../../reducers/add-diagram.reducer";
import { DiagramService } from "../../services/diagram.service";
import { AddDiagramApiModel, DiagramModel, SourceModel } from "../../models";
import {
	AddDiagramAction,
	ColumnAdded,
	DiagramConfigChangedAction,
	HaveEndpointAction,
	ColumnsMappingChangedAction,
	DataLoadedAction
} from "../../actions";

import { FeatureState } from "../../reducers";

@Component({
	selector: "diagram-add",
	templateUrl: "./add-diagram.component.html",
	styleUrls: [ "./add-diagram.component.scss" ]
})
export class AddDiagramComponent implements OnInit, OnDestroy {
	formGroup: FormGroup = AddDiagramApiModel.Request.formGroup;
	data: any;
	columns: any;
	chart;
	diagramTypes: string[];
	pathOptions: {
		path: string;
		name: string;
		type: string;
		color: string;
	}[];
	columnsMappings: AbstractControl[];
	dataSubscription: Subscription;
	diagramModel: DiagramModel;
	componentModel: { component: any; inputs: object };
	typeMapToDiagram: { [type: string]: any };
	diagramPartialConfig: { type: string; inputs: { formGroup: FormGroup; diagramService: DiagramService } };
	sources: Observable<SourceModel[]>;
	groups: Observable<string[]>;
	source: SourceModel;
	constructor(
		private diagramService: DiagramService,
		private formBuilder: FormBuilder,
		private store: Store<FeatureState>,
		private route: ActivatedRoute
	) {
		this.sources = this.diagramService.getSources();
		this.groups = this.diagramService.getGroups();
		// this.diagramModel = new DiagramModel();
		this.columnsMappings = (this.formGroup.controls.ColumnMappings as FormArray).controls;
		this.route.params.subscribe(params => {
			const diagramId: string = params["id"];
			diagramId &&
				this.diagramService.getDiagram(diagramId).subscribe(data => {
					this.formGroup.patchValue({
						_id: data._id,
						Name: data.Name,
						IsActive: data.IsActive,
						Groups: data.Groups,
						Type: data.Chart.data.type,
						Legend: data.Chart.legend.show,
						Subchart: data.Chart.subchart.show,
						Zoom: data.Chart.zoom.enabled,
						Tooltip: data.Chart.tooltip.grouped,
						Sync: data.Source.Interval,
						Source: data.Source,
						columns: data.Chart.data.columns,
						ColumnMappings: data.Chart.ColumnMappings,
						Cols: data.Box.Cols,
						Flow: data.Chart.Flow,
						Rows: data.Box.Rows,
						BackgroundColor: data.Box.BackgroundColor,
						TextColor: data.Box.TextColor
					});

					const colorsControl = <FormGroup>this.formGroup.controls["Colors"];
					Object.keys(data.Chart.data.colors || {}).forEach(columnKey => {
						if (!(columnKey in colorsControl.controls))
							colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
					});

					const typesControl = <FormGroup>this.formGroup.controls["Types"];
					Object.keys(data.Chart.data.types || {}).forEach(key => {
						if (!(key in typesControl.controls))
							typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
					});
					data.Chart.ColumnMappings.forEach(mapping => this.addColumn(mapping.NamePath, mapping.ValuePath));
					this.source = data.Source;
					this.store.dispatch(new HaveEndpointAction(this));

					this.diagramPartialConfig = {
						type: this.formGroup.value.Type,
						inputs: {
							formGroup: this.formGroup,
							diagramService: this.diagramService
						}
					};
				});
			this.diagramPartialConfig = {
				type: this.formGroup.value.Type,
				inputs: {
					formGroup: this.formGroup,
					diagramService: this.diagramService
				}
			};
		});

		this.diagramTypes = [
			"bar",
			"donut",
			"pie",
			"scatter",
			"line",
			"area",
			"area-spline",
			"numero",
			"booleano",
			"tempo"
		];
	}
	ngOnInit() {
		this.formGroup.controls.ColumnMappings.statusChanges.subscribe(status => {
			if (
				status == "VALID" &&
				(this.formGroup.controls.ColumnMappings as FormArray).controls.length > 0 &&
				this.data
			)
				this.store.dispatch(new ColumnsMappingChangedAction(this));
		});
	}
	ngOnDestroy() {
		if (this.dataSubscription) this.dataSubscription.unsubscribe();
	}
	// getData() {
	//   const o$ = this.diagramService.getData(this.source);
	//   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
	//   return o$;
	// }
	getDataStructure() {
		const observer = this.diagramService.getData({ ...this.source, Interval: 0 }, Date.now() - 10000);
		this.dataSubscription = observer.subscribe(data => {
			this.data = data.Data;
			this.pathOptions = this.diagramService.get_data_report(data.Data);
		});
		return observer;
	}
	configChanged() {
		this.store.dispatch(new DiagramConfigChangedAction(this));
	}
	typeChanged() {
		const typesFormGroup = (this.formGroup.controls.Types as FormGroup).controls;
		for (let cb in typesFormGroup) {
			typesFormGroup[cb].setValue(this.formGroup.value.Type);
		}
		this.diagramPartialConfig = {
			type: this.formGroup.value.Type,
			inputs: {
				formGroup: this.formGroup,
				diagramService: this.diagramService
			}
		};
		this.store.dispatch(new DiagramConfigChangedAction(this));
	}
	addColumn(NamePath: string = "", ValuePath: string = "") {
		const control = <FormArray>this.formGroup.controls["ColumnMappings"];
		control.push(
			this.formBuilder.group({
				NamePath: [ NamePath ],
				ValuePath: [ ValuePath, Validators.required ]
			})
		);
	}
	routeEntered(event) {
		this.source = event.value;
		this.formGroup.patchValue({ Source: event.value });
		this.store.dispatch(new HaveEndpointAction(this));
	}
	removeColumn(i: number) {
		const control = <FormArray>this.formGroup.controls["ColumnMappings"];
		control.removeAt(i);
	}
	calculateColumns(): Observable<void> {
		return Observable.create(obser => {
			var columnsMApping = {
				// NameVAlue:  (this.formGroup.controls.ColumnMappings as FormArray).controls.values
			};
			let columns = this.diagramService.extract_columns_from_data(
				this.data,
				(this.formGroup.controls.ColumnMappings as FormArray).value
			);
			this.formGroup.controls.columns.setValue(columns);
			//add new item to this.formGroup.controls.colors form control
			const colorsControl = <FormGroup>this.formGroup.controls["Colors"];
			columns.forEach(column => {
				let columnKey = column[0];
				if (!(columnKey in colorsControl.controls))
					colorsControl.addControl(columnKey, new FormControl("#123456"));
			});

			const typesControl = <FormGroup>this.formGroup.controls["Types"];
			columns.forEach(column => {
				let key = column[0];
				if (!(key in typesControl.controls))
					typesControl.addControl(key, new FormControl(this.formGroup.value.Type));
			});
			obser.next();
		});
	}
	generateDiagram(): Observable<any> {
		var temp = new DiagramModel();
		temp._id = "template_id";
		temp.Name = this.formGroup.value.Name;
		temp.Source = this.source;
		temp.Box = {
			NumberOfColumns: 1,
			Order: 1,
			BackgroundColor: this.formGroup.value.BackgroundColor
		};
		temp.Widget = {
			booleano: this.formGroup.value.booleano
		};
		temp.Chart = {
			ColumnMappings: this.formGroup.value.ColumnMappings,
			data: {
				columns: this.formGroup.controls.columns.value,
				type: this.formGroup.value.Type,
				types: this.formGroup.value.Types,
				colors: this.formGroup.controls.Colors.value
			},
			Flow: this.formGroup.value.Flow,
			legend: {
				show: this.formGroup.value.Legend
			},
			subchart: {
				show: this.formGroup.value.Subchart
			},
			zoom: {
				enabled: this.formGroup.value.Zoom
			},
			tooltip: {
				grouped: this.formGroup.value.Tooltip
			}
			// tooltip: {
			//         format: {
			//                 value: function (value) {
			//                         return value + "%";
			//                 }
			//         }
			// },
			// color: {
			//         pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'],
			//         threshold: {
			//                 //  unit: 'value', // percentage is default
			//                 values: [30, 60, 90, 100]
			//         }
			// },
		};
		// this.componentModel = {
		//   component: this.typeMapToDiagram[temp.Chart.data.type],
		//   inputs: { data: temp }
		// }
		this.diagramModel = temp;
		return Observable.empty();
	}
	add(event) {
		this.store.dispatch(new AddDiagramAction(this.formGroup.value));
	}
}
