import { Component, Injector, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../grid.reducer";
import { GridModel } from "../models";
import { GridsterConfig } from "angular-gridster2";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { UpsertGridStartAction } from "../services/api/upsert-grid/upsert-grid.actions";

@Component({
	templateUrl: "./grid-config.component.html"
})
export class GridConfigComponent {
	gridTypes: any[];
	compactType: any[];
	displayGridTypes: any[];
	grid: GridModel;
	oid: string;
	configFormGroup: FormGroup;
	gridFormGroup: FormGroup;
	constructor(
		private store: Store<AppState>,
		@Inject(MAT_BOTTOM_SHEET_DATA) private data: { grid: GridModel; oid: string }
	) {
		this.grid = data.grid;
		this.oid = data.oid;
		this._init_properties();
		this._init_form_group();
	}
	save() {
		const grid = {
			...this.grid,
			...this.gridFormGroup.value,
			config: { ...this.configFormGroup.value }
		};
		this.store.dispatch(new UpsertGridStartAction(grid));
	}
	_init_form_group() {
		this.configFormGroup = new FormGroup({
			gridType: new FormControl("fit"),
			compactType: new FormControl("none"),
			displayGrid: new FormControl("onDrag&Resize"),
			// empty cell
			enableEmptyCellDrag: new FormControl(true),
			// enableEmptyCellClick: new FormControl(true),
			//
			scrollToNewItems: new FormControl(true),
			// margins
			margin: new FormControl("10"),
			outerMargin: new FormControl(true),
			outerMarginTop: new FormControl("10"),
			outerMarginRight: new FormControl("10"),
			outerMarginBottom: new FormControl("10"),
			outerMarginLeft: new FormControl("10"),
			// grid size
			minCols: new FormControl(3),
			maxCols: new FormControl(3),
			//
			draggable: new FormGroup({
				enabled: new FormControl(),
				delayStart: new FormControl(333)
				// ignoreContent: new FormControl("false")
			}),
			resizable: new FormGroup({
				enabled: new FormControl()
			})
		});
		this.gridFormGroup = new FormGroup({
			oid: new FormControl(this.oid),
			name: new FormControl("")
		});
		this.gridFormGroup.patchValue(this.grid);
		this.configFormGroup.patchValue(this.grid.config);
	}
	_init_properties() {
		this.gridTypes = [ "fit", "scrollVertical", "scrollHorizontal", "fixed", "verticalFixed", "horizontalFixed" ];
		this.compactType = [ "none", "compactUp", "compactLeft", "compactUp&Left", "compactLeft&Up" ];
		this.displayGridTypes = [ "always", "onDrag&Resize", "none" ];
	}
}
