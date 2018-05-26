import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { HttpRequestBaseModel } from "@soushians/shared";

import { DiagramModel } from "./diagram.model";
import { SourceModel } from "./source.model";

export namespace AddDiagramApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		_id: string;
		Name: string;
		IsActive: Boolean;
		Type: string;
		Types: { [columnLabel: string]: string };
		Legend: Boolean;
		Subchart: Boolean;
		Zoom: Boolean;
		Tooltip: Boolean;
		Route: string;
		Sync: number;
		Colors: string[];
		ColumnMappings: { NamePath: string; ValuePath: string }[];
		Flow: string;
		columns: any[];
		Cols: number;
		Rows: number;
		TextColor: String;
		BackgroundColor: string;
		booleano: any;
		Source: SourceModel;
		Groups: string[];
		constructor(initValue: AddDiagramApiModel.Request = {} as AddDiagramApiModel.Request) {
			debugger;
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}
		getRequestBody() {
			return {
				_id: this._id,
				Name: this.Name,
				IsActive: this.IsActive,
				Source: this.Source,
				Type: this.Type,
				Groups: this.Groups,
				Widget: {
					booleano: this.booleano
				},
				Chart: {
					data: {
						type: this.Type,
						columns: this.columns,
						colors: this.Colors,
						types: this.Types
					},
					ColumnMappings: this.ColumnMappings,
					Flow: this.Flow,
					legend: {
						show: this.Legend
					},
					subchart: {
						show: this.Subchart
					},
					zoom: {
						enabled: this.Zoom
					},
					tooltip: {
						grouped: this.Tooltip
					}
				},
				Box: {
					Cols: this.Cols,
					Rows: this.Rows,
					TextColor: this.TextColor,
					BackgroundColor: this.BackgroundColor
				}
			};
		}

		static get formGroup() {
			return new FormGroup({
				_id: new FormControl("", []),
				Name: new FormControl("", [ Validators.required ]),
				Sync: new FormControl(0, [ Validators.required ]),
				IsActive: new FormControl("true", [ Validators.required ]),
				Type: new FormControl("pie", [ Validators.required ]),
				Groups: new FormControl("", [ Validators.required ]),
				Legend: new FormControl("true", [ Validators.required ]),
				Subchart: new FormControl("false", [ Validators.required ]),
				Zoom: new FormControl("false", [ Validators.required ]),
				Tooltip: new FormControl("false", [ Validators.required ]),
				Route: new FormControl("", [ Validators.required ]),
				Source: new FormControl({}, [ Validators.required ]),
				columns: new FormControl("", [ Validators.required ]),
				Cols: new FormControl(1, [ Validators.required ]),
				Rows: new FormControl(1, [ Validators.required ]),
				TextColor: new FormControl("#000000", [ Validators.required ]),
				BackgroundColor: new FormControl("#ffffff", [ Validators.required ]),
				Colors: new FormGroup({}),
				Types: new FormGroup({}),
				ColumnMappings: new FormArray([]),
				Flow: new FormControl(true),
				donut: new FormGroup({
					title: new FormControl("Default Title")
				}),
				booleano: new FormGroup({
					SuccessMessage: new FormControl("SuccessMessage"),
					FailureMessage: new FormControl("FailureMessage")
				})
			});
		}
	}
	export class Response {
		Result: DiagramModel;
		constructor() {}
	}
}
