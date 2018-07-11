/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { UpsertGridStartAction } from "../services/api/upsert-grid/upsert-grid.actions";
export class GridConfigComponent {
    /**
     * @param {?} store
     * @param {?} data
     */
    constructor(store, data) {
        this.store = store;
        this.data = data;
        this.grid = this.data.grid;
        this.oid = this.data.oid;
        this._init_properties();
        this._init_form_group();
    }
    /**
     * @return {?}
     */
    save() {
        const /** @type {?} */ grid = Object.assign({}, this.grid, this.gridFormGroup.value, { config: Object.assign({}, this.configFormGroup.value) });
        this.store.dispatch(new UpsertGridStartAction(grid));
    }
    /**
     * @return {?}
     */
    _init_form_group() {
        this.configFormGroup = new FormGroup({
            gridType: new FormControl("fit"),
            compactType: new FormControl("none"),
            displayGrid: new FormControl("onDrag&Resize"),
            // empty cell
            enableEmptyCellDrag: new FormControl(true),
            enableEmptyCellClick: new FormControl(false),
            enableEmptyCellContextMenu: new FormControl(false),
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
    /**
     * @return {?}
     */
    _init_properties() {
        this.gridTypes = ["fit", "scrollVertical", "scrollHorizontal", "fixed", "verticalFixed", "horizontalFixed"];
        this.compactType = ["none", "compactUp", "compactLeft", "compactUp&Left", "compactLeft&Up"];
        this.displayGridTypes = ["always", "onDrag&Resize", "none"];
    }
}
GridConfigComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row wrap" fxLayoutAlign="center center">
    <div fxFlex="100" [formGroup]="gridFormGroup">
        <mat-form-field>
            <input matInput placeholder="name" formControlName="name">
        </mat-form-field>
    </div>

    <div  fxFlex="100" [formGroup]="configFormGroup">
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <mat-form-field>
                <mat-select placeholder="Grid Type" formControlName="gridType">
                    <mat-option *ngFor="let item of gridTypes" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field>
                <mat-select placeholder="Compact Type" formControlName="compactType">
                    <mat-option *ngFor="let item of compactType" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field>
                <mat-select placeholder="Display Grid" formControlName="displayGrid">
                    <mat-option *ngFor="let item of displayGridTypes" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <div>
                <mat-checkbox formControlName="enableEmptyCellDrag">enableEmptyCellDrag</mat-checkbox>
                <!-- <mat-checkbox formControlName="enableEmptyCellClick">enableEmptyCellClick</mat-checkbox> -->
            </div>
            <div [formGroup]="configFormGroup.get('draggable')">
                <mat-checkbox formControlName="enabled">enable draggable</mat-checkbox>
            </div>
            <div [formGroup]="configFormGroup.get('resizable')">
                <mat-checkbox formControlName="enabled">enable resizable</mat-checkbox>
            </div>
        </div>
        <!-- Margins -->
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <h3 fxFlex="100">حاشیه</h3>
            <div fxFlex="100">
                <mat-checkbox fxFlex formControlName="outerMargin">outerMargin</mat-checkbox>
            </div>
            <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="margin" formControlName="margin" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginTop" formControlName="outerMarginTop" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginRight" formControlName="outerMarginRight" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginBottom" formControlName="outerMarginBottom" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginLeft" formControlName="outerMarginLeft" />
                </mat-form-field>
            </div>
        </div>

        <!-- Grid Size -->
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <h3 fxFlex="100">گرید</h3>
            <mat-form-field fxFlex>
                <input matInput type="number" placeholder="minCols" formControlName="minCols" />
            </mat-form-field>
            <mat-form-field fxFlex>
                <input matInput type="number" placeholder="maxCols" formControlName="maxCols" />
            </mat-form-field>
        </div>
        <button fxFlex="100" color="primary" mat-raised-button (click)="save()">Save</button>
    </div>
</div>`
            },] },
];
/** @nocollapse */
GridConfigComponent.ctorParameters = () => [
    { type: Store },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
function GridConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    GridConfigComponent.prototype.gridTypes;
    /** @type {?} */
    GridConfigComponent.prototype.compactType;
    /** @type {?} */
    GridConfigComponent.prototype.displayGridTypes;
    /** @type {?} */
    GridConfigComponent.prototype.grid;
    /** @type {?} */
    GridConfigComponent.prototype.oid;
    /** @type {?} */
    GridConfigComponent.prototype.configFormGroup;
    /** @type {?} */
    GridConfigComponent.prototype.gridFormGroup;
    /** @type {?} */
    GridConfigComponent.prototype.store;
    /** @type {?} */
    GridConfigComponent.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBWSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBcUZ4RixNQUFNOzs7OztJQVFMLFlBQW9CLEtBQXNCLEVBQXlDLElBQVM7UUFBeEUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBeUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMzRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7Ozs7SUFDRCxJQUFJO1FBQ0gsdUJBQU0sSUFBSSxxQkFDTixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUMzQixNQUFNLG9CQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUN2QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEMsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQzs7WUFFN0MsbUJBQW1CLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFDLG9CQUFvQixFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUM1QywwQkFBMEIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRWxELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQzs7WUFFdkMsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLGlCQUFpQixFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztZQUN4QyxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDOztZQUV0QyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDO2FBRWhDLENBQUM7WUFDRixTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRTthQUMxQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNsQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFFLENBQUM7UUFDOUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFFLENBQUM7UUFDOUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FBQztLQUM5RDs7O1lBbkpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0ZKO2FBQ047Ozs7WUExRlEsS0FBSzs0Q0FtR2dDLE1BQU0sU0FBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIFtmb3JtR3JvdXBdPVwiZ3JpZEZvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAgZnhGbGV4PVwiMTAwXCIgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIFR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJncmlkVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRUeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhY3QgVHlwZVwiIGZvcm1Db250cm9sTmFtZT1cImNvbXBhY3RUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29tcGFjdFR5cGVcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJEaXNwbGF5IEdyaWRcIiBmb3JtQ29udHJvbE5hbWU9XCJkaXNwbGF5R3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpc3BsYXlHcmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsRHJhZ1wiPmVuYWJsZUVtcHR5Q2VsbERyYWc8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxDbGlja1wiPmVuYWJsZUVtcHR5Q2VsbENsaWNrPC9tYXQtY2hlY2tib3g+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ2RyYWdnYWJsZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZWRcIj5lbmFibGUgZHJhZ2dhYmxlPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgncmVzaXphYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPmVuYWJsZSByZXNpemFibGU8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBNYXJnaW5zIC0tPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8aDMgZnhGbGV4PVwiMTAwXCI+2K3Yp9i024zZhzwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblwiPm91dGVyTWFyZ2luPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIm1hcmdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5Ub3BcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblRvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5SaWdodFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luUmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luQm90dG9tXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5Cb3R0b21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luTGVmdFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luTGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBHcmlkIFNpemUgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoMyBmeEZsZXg9XCIxMDBcIj7ar9ix24zYrzwvaDM+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWluQ29sc1wiIGZvcm1Db250cm9sTmFtZT1cIm1pbkNvbHNcIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1heENvbHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtYXhDb2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIjEwMFwiIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlKClcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Z3JpZFR5cGVzOiBhbnlbXTtcclxuXHRjb21wYWN0VHlwZTogYW55W107XHJcblx0ZGlzcGxheUdyaWRUeXBlczogYW55W107XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdG9pZDogc3RyaW5nO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGdyaWRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwcml2YXRlIGRhdGE6IGFueSkge1xyXG5cdFx0dGhpcy5ncmlkID0gdGhpcy5kYXRhLmdyaWQ7XHJcblx0XHR0aGlzLm9pZCA9IHRoaXMuZGF0YS5vaWQ7XHJcblx0XHR0aGlzLl9pbml0X3Byb3BlcnRpZXMoKTtcclxuXHRcdHRoaXMuX2luaXRfZm9ybV9ncm91cCgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3QgZ3JpZCA9IHtcclxuXHRcdFx0Li4udGhpcy5ncmlkLFxyXG5cdFx0XHQuLi50aGlzLmdyaWRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdGNvbmZpZzogeyAuLi50aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSB9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uKGdyaWQpKTtcclxuXHR9XHJcblx0X2luaXRfZm9ybV9ncm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGdyaWRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJmaXRcIiksXHJcblx0XHRcdGNvbXBhY3RUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJub25lXCIpLFxyXG5cdFx0XHRkaXNwbGF5R3JpZDogbmV3IEZvcm1Db250cm9sKFwib25EcmFnJlJlc2l6ZVwiKSxcclxuXHRcdFx0Ly8gZW1wdHkgY2VsbFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxEcmFnOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbENsaWNrOiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudTogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0c2Nyb2xsVG9OZXdJdGVtczogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHQvLyBtYXJnaW5zXHJcblx0XHRcdG1hcmdpbjogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdG91dGVyTWFyZ2luVG9wOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5SaWdodDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luQm90dG9tOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5MZWZ0OiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0Ly8gZ3JpZCBzaXplXHJcblx0XHRcdG1pbkNvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0bWF4Q29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRkcmFnZ2FibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdGRlbGF5U3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgzMzMpXHJcblx0XHRcdFx0Ly8gaWdub3JlQ29udGVudDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIilcclxuXHRcdFx0fSksXHJcblx0XHRcdHJlc2l6YWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG9pZDogbmV3IEZvcm1Db250cm9sKHRoaXMub2lkKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZCk7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZC5jb25maWcpO1xyXG5cdH1cclxuXHRfaW5pdF9wcm9wZXJ0aWVzKCkge1xyXG5cdFx0dGhpcy5ncmlkVHlwZXMgPSBbIFwiZml0XCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwiZml4ZWRcIiwgXCJ2ZXJ0aWNhbEZpeGVkXCIsIFwiaG9yaXpvbnRhbEZpeGVkXCIgXTtcclxuXHRcdHRoaXMuY29tcGFjdFR5cGUgPSBbIFwibm9uZVwiLCBcImNvbXBhY3RVcFwiLCBcImNvbXBhY3RMZWZ0XCIsIFwiY29tcGFjdFVwJkxlZnRcIiwgXCJjb21wYWN0TGVmdCZVcFwiIF07XHJcblx0XHR0aGlzLmRpc3BsYXlHcmlkVHlwZXMgPSBbIFwiYWx3YXlzXCIsIFwib25EcmFnJlJlc2l6ZVwiLCBcIm5vbmVcIiBdO1xyXG5cdH1cclxufVxyXG4iXX0=