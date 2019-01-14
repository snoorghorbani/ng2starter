/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        const grid = Object.assign({}, this.grid, this.gridFormGroup.value, { config: Object.assign({}, this.configFormGroup.value) });
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
                template: "<h4> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F</h4>\r\n<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" [formGroup]=\"gridFormGroup\">\r\n        <mat-form-field fxFlex=\"20\">\r\n            <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"column wrap\" fxLayoutGap=\"15px\"  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\r\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u06AF\u06CC\u0631\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"gridType\">\r\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0641\u0634\u0631\u062F\u0647 \u0634\u062F\u0646 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"compactType\">\r\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0633\u0644\u0648\u0644\u200C\u0647\u0627\u06CC \u06AF\u0631\u06CC\u062F\" formControlName=\"displayGrid\">\r\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <div fxFlex=\"20\">\r\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">\u0627\u06CC\u062C\u0627\u062F \u06AF\u0631\u06CC\u062F \u0628\u0627 \u062F\u0631\u06AF \u06A9\u0631\u062F\u0646</mat-checkbox>\r\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('draggable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('resizable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0633\u0627\u06CC\u0632 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <!-- Margins -->\r\n        <div fxFlex=\"100\" fxLayout=\"column wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647:</h4>\r\n            <div fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">\u0627\u0645\u06A9\u0627\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"100\"  fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0647\u0645\" formControlName=\"margin\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginTop\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0631\u0627\u0633\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginRight\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginBottom\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0686\u067E \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginLeft\" />\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <!-- Grid Size -->\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\u200C\u0647\u0627:</h4>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"minCols\" />\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"maxCols\" />\r\n            </mat-form-field>\r\n        </div> \r\n        <div fxFlex=\"20\" fxLayoutAlign=\"flex-end center\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n         <button color=\"primary\" mat-raised-button (click)=\"save()\">\u0630\u062E\u06CC\u0631\u0647</button>\r\n    </div>\r\n</div>\r\n</div>"
            }] }
];
/** @nocollapse */
GridConfigComponent.ctorParameters = () => [
    { type: Store },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
if (false) {
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
    /**
     * @type {?}
     * @private
     */
    GridConfigComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GridConfigComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBWSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBS3hGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUS9CLFlBQW9CLEtBQXNCLEVBQXlDLElBQVM7UUFBeEUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBeUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMzRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELElBQUk7O2NBQ0csSUFBSSxxQkFDTixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUMzQixNQUFNLG9CQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUN2QztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEMsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQzs7WUFFN0MsbUJBQW1CLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFDLG9CQUFvQixFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUM1QywwQkFBMEIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRWxELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQzs7WUFFdkMsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUMzQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDbkMsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3JDLGlCQUFpQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN0QyxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDOztZQUVwQyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDO2dCQUNoQywwQ0FBMEM7YUFDMUMsQ0FBQztZQUNGLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFO2FBQzFCLENBQUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO1FBQzlHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBRSxDQUFDO1FBQzlGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDL0QsQ0FBQzs7O1lBbkVELFNBQVMsU0FBQztnQkFDViw4dE1BQTJDO2FBQzNDOzs7O1lBVlEsS0FBSzs0Q0FtQmdDLE1BQU0sU0FBQyxxQkFBcUI7Ozs7SUFQekUsd0NBQWlCOztJQUNqQiwwQ0FBbUI7O0lBQ25CLCtDQUF3Qjs7SUFDeEIsbUNBQWdCOztJQUNoQixrQ0FBWTs7SUFDWiw4Q0FBMkI7O0lBQzNCLDRDQUF5Qjs7Ozs7SUFDYixvQ0FBOEI7Ozs7O0lBQUUsbUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2dyaWQtY29uZmlnLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb25maWdDb21wb25lbnQge1xyXG5cdGdyaWRUeXBlczogYW55W107XHJcblx0Y29tcGFjdFR5cGU6IGFueVtdO1xyXG5cdGRpc3BsYXlHcmlkVHlwZXM6IGFueVtdO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRvaWQ6IHN0cmluZztcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRncmlkRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnkpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuZGF0YS5ncmlkO1xyXG5cdFx0dGhpcy5vaWQgPSB0aGlzLmRhdGEub2lkO1xyXG5cdFx0dGhpcy5faW5pdF9wcm9wZXJ0aWVzKCk7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1fZ3JvdXAoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IGdyaWQgPSB7XHJcblx0XHRcdC4uLnRoaXMuZ3JpZCxcclxuXHRcdFx0Li4udGhpcy5ncmlkRm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRjb25maWc6IHsgLi4udGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWUgfVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbihncmlkKSk7XHJcblx0fVxyXG5cdF9pbml0X2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRncmlkVHlwZTogbmV3IEZvcm1Db250cm9sKFwiZml0XCIpLFxyXG5cdFx0XHRjb21wYWN0VHlwZTogbmV3IEZvcm1Db250cm9sKFwibm9uZVwiKSxcclxuXHRcdFx0ZGlzcGxheUdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIm9uRHJhZyZSZXNpemVcIiksXHJcblx0XHRcdC8vIGVtcHR5IGNlbGxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsRHJhZzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDbGljazogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdC8vXHJcblx0XHRcdHNjcm9sbFRvTmV3SXRlbXM6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gbWFyZ2luc1xyXG5cdFx0XHRtYXJnaW46IG5ldyBGb3JtQ29udHJvbCgxMCksXHJcblx0XHRcdG91dGVyTWFyZ2luOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdG91dGVyTWFyZ2luVG9wOiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHRvdXRlck1hcmdpblJpZ2h0OiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHRvdXRlck1hcmdpbkJvdHRvbTogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5MZWZ0OiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHQvLyBncmlkIHNpemVcclxuXHRcdFx0bWluQ29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHRtYXhDb2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdC8vXHJcblx0XHRcdGRyYWdnYWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0ZGVsYXlTdGFydDogbmV3IEZvcm1Db250cm9sKDMzMylcclxuXHRcdFx0XHQvLyBpZ25vcmVDb250ZW50OiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiKVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0cmVzaXphYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0b2lkOiBuZXcgRm9ybUNvbnRyb2wodGhpcy5vaWQpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5ncmlkKTtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5ncmlkLmNvbmZpZyk7XHJcblx0fVxyXG5cdF9pbml0X3Byb3BlcnRpZXMoKSB7XHJcblx0XHR0aGlzLmdyaWRUeXBlcyA9IFsgXCJmaXRcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJmaXhlZFwiLCBcInZlcnRpY2FsRml4ZWRcIiwgXCJob3Jpem9udGFsRml4ZWRcIiBdO1xyXG5cdFx0dGhpcy5jb21wYWN0VHlwZSA9IFsgXCJub25lXCIsIFwiY29tcGFjdFVwXCIsIFwiY29tcGFjdExlZnRcIiwgXCJjb21wYWN0VXAmTGVmdFwiLCBcImNvbXBhY3RMZWZ0JlVwXCIgXTtcclxuXHRcdHRoaXMuZGlzcGxheUdyaWRUeXBlcyA9IFsgXCJhbHdheXNcIiwgXCJvbkRyYWcmUmVzaXplXCIsIFwibm9uZVwiIF07XHJcblx0fVxyXG59XHJcbiJdfQ==