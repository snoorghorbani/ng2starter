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
var TableComponent = /** @class */ (function () {
    function TableComponent(http) {
        this.http = http;
        this.selection = new SelectionModel(true, []);
        this.ready = false;
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.get(this.schema.dataEndpoint).subscribe(function (data) {
            _this.ready = true;
            _this.displayedColumns = data.displayedColumns;
            _this.filedDisplayedColumns = data.filedDisplayedColumns;
            _this.dataSource = new MatTableDataSource(data.dataSource);
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    TableComponent.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        this.form.patchValue((_a = {},
            _a[this.schema.name] = this.selection.selected,
            _a));
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    TableComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-form-control-table",
                    template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <div *ngFor=\"let col of filedDisplayedColumns\">\n        <ng-container  [matColumnDef]=\"col\">\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n        </ng-container>\n      </div>\n        \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell class='left-align' *matCellDef=\"let row\">\n          <button mat-icon-button>\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n\n    </mat-table>\n  </div>\n\n\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\n  \n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n  \n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\n    {{schema.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\n    {{schema.validator.minlength.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\n    {{schema.validator.email.message}}\n  </mat-error>\n</mat-form-field> -->\n  \n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\n  </div> -->",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    TableComponent.propDecorators = {
        form: [{ type: Input }],
        schema: [{ type: Input }]
    };
    return TableComponent;
}());
export { TableComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvZm9ybS1jb250cm9scy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUEyRXpELHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRHBDLGlCQUFZLElBQUksY0FBYyxDQUFNLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUNELGlDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQzNELEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUN4RCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztLQUNIO0lBRUQsZ0ZBQWdGOzs7OztJQUNoRixzQ0FBYTs7OztJQUFiOzs7UUFDQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ25CLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUMxQyxDQUFDOztRQUNILElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7S0FDL0I7SUFFRCxnRkFBZ0Y7Ozs7O0lBQ2hGLHFDQUFZOzs7O0lBQVo7UUFBQSxpQkFFQztRQURBLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztLQUNoSDs7Z0JBbEdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsMDRFQXlERTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztpQkFDM0Q7Ozs7Z0JBakVRLFVBQVU7Ozt1QkFxRWpCLEtBQUs7eUJBQ0wsS0FBSzs7eUJBMUVQOztTQXNFYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC10YWJsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIiAqbmdJZj1cInJlYWR5XCI+XHJcbiAgICA8bWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XHJcbiAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxyXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbCBvZiBmaWxlZERpc3BsYXllZENvbHVtbnNcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICBbbWF0Q29sdW1uRGVmXT1cImNvbFwiPlxyXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x9fSA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2xdfX0gPC9tYXQtY2VsbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC9tYXQtaGVhZGVyLWNlbGw+XHJcbiAgICAgICAgPG1hdC1jZWxsIGNsYXNzPSdsZWZ0LWFsaWduJyAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cItin2YbYqtiu2KfYqFwiPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2VsbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cclxuICAgICAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgKGNsaWNrKT1cInNlbGVjdGlvbi50b2dnbGUocm93KVwiPjwvbWF0LXJvdz5cclxuXHJcbiAgICA8L21hdC10YWJsZT5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48IS0tIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gIFxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwic2NoZW1hLm5hbWVcIiBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICBcclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZW1haWw/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG48L21hdC1mb3JtLWZpZWxkPiAtLT5cclxuICBcclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KHNjaGVtYS5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdHJlYWR5OiBib29sZWFuO1xyXG5cdGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cdGZpbGVkRGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcblxyXG5cdHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsIFtdKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hLmRhdGFFbmRwb2ludCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5maWxlZERpc3BsYXllZENvbHVtbnMgPSBkYXRhLmZpbGVkRGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KGRhdGEuZGF0YVNvdXJjZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXHJcblx0aXNBbGxTZWxlY3RlZCgpIHtcclxuXHRcdGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xyXG5cdFx0dGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRbdGhpcy5zY2hlbWEubmFtZV06IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XHJcblx0XHRyZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XHJcblx0fVxyXG5cclxuXHQvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xyXG5cdG1hc3RlclRvZ2dsZSgpIHtcclxuXHRcdHRoaXMuaXNBbGxTZWxlY3RlZCgpID8gdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcclxuXHR9XHJcbn1cclxuIl19