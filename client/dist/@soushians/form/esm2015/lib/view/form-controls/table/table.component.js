/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        this.form.patchValue({
            [this.schema.name]: this.selection.selected
        });
        /** @type {?} */
        const numRows = this.dataSource.data.length;
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
                template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n  \r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row) : null\"\r\n            [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <div *ngFor=\"let col of filedDisplayedColumns\">\r\n        <ng-container  [matColumnDef]=\"col\">\r\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\r\n        </ng-container>\r\n      </div>\r\n        \r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n        <mat-cell class='left-align' *matCellDef=\"let row\">\r\n          <button mat-icon-button>\r\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n    \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\r\n\r\n    </mat-table>\r\n  </div>\r\n\r\n\r\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\r\n  \r\n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n  \r\n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\r\n    {{schema.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\r\n    {{schema.validator.minlength.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\r\n    {{schema.validator.email.message}}\r\n  </mat-error>\r\n</mat-form-field> -->\r\n  \r\n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: HttpClient }
];
TableComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvZm9ybS1jb250cm9scy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sY0FBYzs7OztJQVcxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRHBDLGlCQUFZLElBQUksY0FBYyxDQUFNLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztLQUNIOzs7OztJQUdELGFBQWE7O1FBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7U0FDM0MsQ0FBQyxDQUFDOztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7S0FDL0I7Ozs7O0lBR0QsWUFBWTtRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoSDs7O1lBekNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxzZ0ZBQXFDOzthQUVyQzs7OztZQVJRLFVBQVU7OzttQkFZakIsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC10YWJsZVwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vdGFibGUuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3RhYmxlLmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0cmVhZHk6IGJvb2xlYW47XHJcblx0ZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZmlsZWREaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHRkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PjtcclxuXHJcblx0c2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odHJ1ZSwgW10pO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaHR0cC5nZXQodGhpcy5zY2hlbWEuZGF0YUVuZHBvaW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGF0YS5kaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmZpbGVkRGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZmlsZWREaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oZGF0YS5kYXRhU291cmNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cclxuXHRpc0FsbFNlbGVjdGVkKCkge1xyXG5cdFx0Y29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XHJcblx0XHR0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFt0aGlzLnNjaGVtYS5uYW1lXTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcclxuXHRcdHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcclxuXHR9XHJcblxyXG5cdC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXHJcblx0bWFzdGVyVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDogdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xyXG5cdH1cclxufVxyXG4iXX0=