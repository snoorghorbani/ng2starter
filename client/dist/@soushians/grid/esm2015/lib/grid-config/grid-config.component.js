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
            margin: new FormControl(10),
            outerMargin: new FormControl(true),
            outerMarginTop: new FormControl(10),
            outerMarginRight: new FormControl(10),
            outerMarginBottom: new FormControl(10),
            outerMarginLeft: new FormControl(10),
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
                template: `<h4> تنظیمات داشبورد</h4>
<div fxLayout="column wrap" fxLayoutGap="15px">
    <div fxFlex="100" fxLayout="row wrap" [formGroup]="gridFormGroup">
        <mat-form-field fxFlex="20">
            <input matInput placeholder="نام" formControlName="name">
        </mat-form-field>
    </div>
    <div fxLayout="column wrap" fxLayoutGap="15px"  fxFlex="100" [formGroup]="configFormGroup">
        <div fxLayout="row wrap" fxLayoutGap="25px">
            <mat-form-field fxFlex="20">
                <mat-select placeholder="نوع قرارگیری گریدها در صفحه" formControlName="gridType">
                    <mat-option *ngFor="let item of gridTypes" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field fxFlex="20">
                <mat-select placeholder="نوع فشرده شدن گریدها در صفحه" formControlName="compactType">
                    <mat-option *ngFor="let item of compactType" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field fxFlex="20">
                <mat-select placeholder="نشان دادن سلول‌های گرید" formControlName="displayGrid">
                    <mat-option *ngFor="let item of displayGridTypes" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <div fxFlex="20">
                <mat-checkbox formControlName="enableEmptyCellDrag">ایجاد گرید با درگ کردن</mat-checkbox>
                <!-- <mat-checkbox formControlName="enableEmptyCellClick">enableEmptyCellClick</mat-checkbox> -->
            </div>
            <div fxFlex="20" [formGroup]="configFormGroup.get('draggable')">
                <mat-checkbox formControlName="enabled">قابلیت جابجایی گریدها</mat-checkbox>
            </div>
            <div fxFlex="20" [formGroup]="configFormGroup.get('resizable')">
                <mat-checkbox formControlName="enabled">قابلیت تغییر سایز گریدها</mat-checkbox>
            </div>
        </div>
        <!-- Margins -->
        <div fxFlex="100" fxLayout="column wrap" fxLayoutGap="25px">
            <h4 fxFlex="100">حاشیه:</h4>
            <div fxFlex fxLayout="column" fxLayoutGap="25px">
                <mat-checkbox fxFlex formControlName="outerMargin">امکان تنظیم فاصله گریدها</mat-checkbox>
            </div>
            <div fxFlex="100"  fxLayout="row wrap" fxLayoutGap="25px">
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="فاصله گریدها از هم" formControlName="margin" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="فاصله گریدها ار بالا داشبورد" formControlName="outerMarginTop" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="فاصله گریدها از راست داشبورد" formControlName="outerMarginRight" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="فاصله گریدها از پایین داشبورد" formControlName="outerMarginBottom" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="فاصله گریدها از چپ داشبورد" formControlName="outerMarginLeft" />
                </mat-form-field>
            </div>
        </div>
        <!-- Grid Size -->
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <h4 fxFlex="100">تعداد ستون‌ها:</h4>
            <mat-form-field fxFlex="18">
                <input matInput type="number" placeholder="کمترین ستون" formControlName="minCols" />
            </mat-form-field>
            <mat-form-field fxFlex="18">
                <input matInput type="number" placeholder="بیشترین ستون" formControlName="maxCols" />
            </mat-form-field>
        </div> 
        <div fxFlex="20" fxLayoutAlign="flex-end center" fxLayout="row wrap" fxLayoutGap="25px">
         <button color="primary" mat-raised-button (click)="save()">ذخیره</button>
    </div>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBWSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBc0Z4RixNQUFNOzs7OztJQVFMLFlBQW9CLEtBQXNCLEVBQXlDLElBQVM7UUFBeEUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBeUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMzRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7Ozs7SUFDRCxJQUFJO1FBQ0gsdUJBQU0sSUFBSSxxQkFDTixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUMzQixNQUFNLG9CQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUN2QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEMsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQzs7WUFFN0MsbUJBQW1CLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFDLG9CQUFvQixFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUM1QywwQkFBMEIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRWxELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQzs7WUFFdkMsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUMzQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDbkMsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3JDLGlCQUFpQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN0QyxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDOztZQUVwQyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDO2FBRWhDLENBQUM7WUFDRixTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRTthQUMxQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNsQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFFLENBQUM7UUFDOUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFFLENBQUM7UUFDOUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FBQztLQUM5RDs7O1lBcEpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWlGSjthQUNOOzs7O1lBM0ZRLEtBQUs7NENBb0dnQyxNQUFNLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8aDQ+INiq2YbYuNuM2YXYp9iqINiv2KfYtNio2YjYsdivPC9oND5cclxuPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBbZm9ybUdyb3VwXT1cImdyaWRGb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW4gd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiICBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwi2YbZiNi5INmC2LHYp9ix2q/bjNix24wg2q/YsduM2K/Zh9inINiv2LEg2LXZgdit2YdcIiBmb3JtQ29udHJvbE5hbWU9XCJncmlkVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRUeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwi2YbZiNi5INmB2LTYsdiv2Ycg2LTYr9mGINqv2LHbjNiv2YfYpyDYr9ixINi12YHYrdmHXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29tcGFjdFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb21wYWN0VHlwZVwiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwi2YbYtNin2YYg2K/Yp9iv2YYg2LPZhNmI2YTigIzZh9in24wg2q/YsduM2K9cIiBmb3JtQ29udHJvbE5hbWU9XCJkaXNwbGF5R3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpc3BsYXlHcmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxEcmFnXCI+2KfbjNis2KfYryDar9ix24zYryDYqNinINiv2LHaryDaqdix2K/ZhjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZUVtcHR5Q2VsbENsaWNrXCI+ZW5hYmxlRW1wdHlDZWxsQ2xpY2s8L21hdC1jaGVja2JveD4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjIwXCIgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXAuZ2V0KCdkcmFnZ2FibGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVkXCI+2YLYp9io2YTbjNiqINis2KfYqNis2KfbjNuMINqv2LHbjNiv2YfYpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgncmVzaXphYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPtmC2KfYqNmE24zYqiDYqti624zbjNixINiz2KfbjNiyINqv2LHbjNiv2YfYpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIE1hcmdpbnMgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoNCBmeEZsZXg9XCIxMDBcIj7Yrdin2LTbjNmHOjwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblwiPtin2YXaqdin2YYg2KrZhti424zZhSDZgdin2LXZhNmHINqv2LHbjNiv2YfYpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiAgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi2YHYp9i12YTZhyDar9ix24zYr9mH2Kcg2KfYsiDZh9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFyZ2luXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLZgdin2LXZhNmHINqv2LHbjNiv2YfYpyDYp9ixINio2KfZhNinINiv2KfYtNio2YjYsdivXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5Ub3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cItmB2KfYtdmE2Ycg2q/YsduM2K/Zh9inINin2LIg2LHYp9iz2Kog2K/Yp9i02KjZiNix2K9cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLZgdin2LXZhNmHINqv2LHbjNiv2YfYpyDYp9iyINm+2KfbjNuM2YYg2K/Yp9i02KjZiNix2K9cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi2YHYp9i12YTZhyDar9ix24zYr9mH2Kcg2KfYsiDahtm+INiv2KfYtNio2YjYsdivXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5MZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gR3JpZCBTaXplIC0tPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8aDQgZnhGbGV4PVwiMTAwXCI+2KrYudiv2KfYryDYs9iq2YjZhuKAjNmH2Kc6PC9oND5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjE4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi2qnZhdiq2LHbjNmGINiz2KrZiNmGXCIgZm9ybUNvbnRyb2xOYW1lPVwibWluQ29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCIxOFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cItio24zYtNiq2LHbjNmGINiz2KrZiNmGXCIgZm9ybUNvbnRyb2xOYW1lPVwibWF4Q29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMjBcIiBmeExheW91dEFsaWduPVwiZmxleC1lbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlKClcIj7YsNiu24zYsdmHPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb25maWdDb21wb25lbnQge1xyXG5cdGdyaWRUeXBlczogYW55W107XHJcblx0Y29tcGFjdFR5cGU6IGFueVtdO1xyXG5cdGRpc3BsYXlHcmlkVHlwZXM6IGFueVtdO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRvaWQ6IHN0cmluZztcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRncmlkRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnkpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuZGF0YS5ncmlkO1xyXG5cdFx0dGhpcy5vaWQgPSB0aGlzLmRhdGEub2lkO1xyXG5cdFx0dGhpcy5faW5pdF9wcm9wZXJ0aWVzKCk7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1fZ3JvdXAoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IGdyaWQgPSB7XHJcblx0XHRcdC4uLnRoaXMuZ3JpZCxcclxuXHRcdFx0Li4udGhpcy5ncmlkRm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRjb25maWc6IHsgLi4udGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWUgfVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbihncmlkKSk7XHJcblx0fVxyXG5cdF9pbml0X2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRncmlkVHlwZTogbmV3IEZvcm1Db250cm9sKFwiZml0XCIpLFxyXG5cdFx0XHRjb21wYWN0VHlwZTogbmV3IEZvcm1Db250cm9sKFwibm9uZVwiKSxcclxuXHRcdFx0ZGlzcGxheUdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIm9uRHJhZyZSZXNpemVcIiksXHJcblx0XHRcdC8vIGVtcHR5IGNlbGxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsRHJhZzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDbGljazogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdC8vXHJcblx0XHRcdHNjcm9sbFRvTmV3SXRlbXM6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gbWFyZ2luc1xyXG5cdFx0XHRtYXJnaW46IG5ldyBGb3JtQ29udHJvbCgxMCksXHJcblx0XHRcdG91dGVyTWFyZ2luOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdG91dGVyTWFyZ2luVG9wOiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHRvdXRlck1hcmdpblJpZ2h0OiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHRvdXRlck1hcmdpbkJvdHRvbTogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5MZWZ0OiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHQvLyBncmlkIHNpemVcclxuXHRcdFx0bWluQ29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHRtYXhDb2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdC8vXHJcblx0XHRcdGRyYWdnYWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0ZGVsYXlTdGFydDogbmV3IEZvcm1Db250cm9sKDMzMylcclxuXHRcdFx0XHQvLyBpZ25vcmVDb250ZW50OiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiKVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0cmVzaXphYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0b2lkOiBuZXcgRm9ybUNvbnRyb2wodGhpcy5vaWQpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5ncmlkKTtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5ncmlkLmNvbmZpZyk7XHJcblx0fVxyXG5cdF9pbml0X3Byb3BlcnRpZXMoKSB7XHJcblx0XHR0aGlzLmdyaWRUeXBlcyA9IFsgXCJmaXRcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJmaXhlZFwiLCBcInZlcnRpY2FsRml4ZWRcIiwgXCJob3Jpem9udGFsRml4ZWRcIiBdO1xyXG5cdFx0dGhpcy5jb21wYWN0VHlwZSA9IFsgXCJub25lXCIsIFwiY29tcGFjdFVwXCIsIFwiY29tcGFjdExlZnRcIiwgXCJjb21wYWN0VXAmTGVmdFwiLCBcImNvbXBhY3RMZWZ0JlVwXCIgXTtcclxuXHRcdHRoaXMuZGlzcGxheUdyaWRUeXBlcyA9IFsgXCJhbHdheXNcIiwgXCJvbkRyYWcmUmVzaXplXCIsIFwibm9uZVwiIF07XHJcblx0fVxyXG59XHJcbiJdfQ==