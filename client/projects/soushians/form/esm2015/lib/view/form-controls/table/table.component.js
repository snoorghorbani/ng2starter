/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
export class TableComponent {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.selection = new SelectionModel(true, []);
        this.ready = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.http.get(this.schema.dataEndpoint).subscribe((data) => {
            debugger;
            this.ready = true;
            this.displayedColumns = data.displayedColumns;
            this.filedDisplayedColumns = data.filedDisplayedColumns;
            this.dataSource = new MatTableDataSource(data.dataSource);
        });
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        const /** @type {?} */ numSelected = this.selection.selected.length;
        this.form.patchValue({
            [this.schema.name]: this.selection.selected
        });
        const /** @type {?} */ numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-table",
                template: `<div class="example-container mat-elevation-z8" *ngIf="ready">
    <mat-table #table [dataSource]="dataSource">
  
      <ng-container matColumnDef="select">
        <mat-header-cell *matHeaderCellDef>
          <mat-checkbox (change)="$event ? masterToggle() : null"
            [checked]="selection.hasValue() && isAllSelected()"
            [indeterminate]="selection.hasValue() && !isAllSelected()">
          </mat-checkbox>
        </mat-header-cell>
        <mat-cell *matCellDef="let row">
          <mat-checkbox (click)="$event.stopPropagation()"
            (change)="$event ? selection.toggle(row) : null"
            [checked]="selection.isSelected(row)">
          </mat-checkbox>
        </mat-cell>
      </ng-container>

      <div *ngFor="let col of filedDisplayedColumns">
        <ng-container  [matColumnDef]="col">
          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element[col]}} </mat-cell>
        </ng-container>
      </div>
        
      <ng-container matColumnDef="actions">
        <mat-header-cell *matHeaderCellDef></mat-header-cell>
        <mat-cell class='left-align' *matCellDef="let row">
          <button mat-icon-button>
            <mat-icon aria-label="انتخاب">arrow_back</mat-icon>
          </button>
        </mat-cell>
      </ng-container>
    
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;" (click)="selection.toggle(row)"></mat-row>

    </mat-table>
  </div>


<!-- <mat-form-field fxFlexFill [formGroup]="form">
  
  <input matInput [id]="schema.name" [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">
  
  <mat-error *ngIf="form.get(schema.name).errors?.required">
    {{schema.validator.required.message}}
  </mat-error>
  <mat-error *ngIf="form.get(schema.name).errors?.minlength">
    {{schema.validator.minlength.message}}
  </mat-error>
  <mat-error *ngIf="form.get(schema.name).email?.minlength">
    {{schema.validator.email.message}}
  </mat-error>
</mat-form-field> -->
  
  <!-- <div *ngIf="form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)" class="alert alert-danger">
  </div> -->`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: HttpClient }
];
TableComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};
function TableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TableComponent.prototype.config;
    /** @type {?} */
    TableComponent.prototype.group;
    /** @type {?} */
    TableComponent.prototype.form;
    /** @type {?} */
    TableComponent.prototype.schema;
    /** @type {?} */
    TableComponent.prototype.ready;
    /** @type {?} */
    TableComponent.prototype.displayedColumns;
    /** @type {?} */
    TableComponent.prototype.filedDisplayedColumns;
    /** @type {?} */
    TableComponent.prototype.dataSource;
    /** @type {?} */
    TableComponent.prototype.selection;
    /** @type {?} */
    TableComponent.prototype.http;
}
//# sourceMappingURL=table.component.js.map
