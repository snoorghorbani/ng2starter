import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
	selector: "ngs-form-control-table",
	templateUrl: "./table.component.html",
	styleUrls: [ "./table.component.scss" ]
})
export class TableComponent implements OnInit, Field {
	config: FieldConfig;
	group: FormGroup;
	@Input() form: FormGroup;
	@Input() schema: FieldConfig;
	ready: boolean;
	displayedColumns: string[];
	filedDisplayedColumns: string[];
	dataSource: MatTableDataSource<any>;

	selection = new SelectionModel<any>(true, []);
	constructor(private http: HttpClient) {
		this.ready = false;
	}
	ngOnInit() {
		this.http.get(this.schema.dataEndpoint).subscribe((data: any) => {
			debugger;
			this.ready = true;
			this.displayedColumns = data.displayedColumns;
			this.filedDisplayedColumns = data.filedDisplayedColumns;
			this.dataSource = new MatTableDataSource<any>(data.dataSource);
		});
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		this.form.patchValue({
			[this.schema.name]: this.selection.selected
		});
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
	}
}
