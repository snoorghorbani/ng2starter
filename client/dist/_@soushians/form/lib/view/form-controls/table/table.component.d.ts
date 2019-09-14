import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig, Field } from "../../../models";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
export declare class TableComponent implements OnInit, Field {
    private http;
    config: FieldConfig;
    group: FormGroup;
    form: FormGroup;
    schema: FieldConfig;
    ready: boolean;
    displayedColumns: string[];
    filedDisplayedColumns: string[];
    dataSource: MatTableDataSource<any>;
    selection: SelectionModel<any>;
    constructor(http: HttpClient);
    ngOnInit(): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
}
