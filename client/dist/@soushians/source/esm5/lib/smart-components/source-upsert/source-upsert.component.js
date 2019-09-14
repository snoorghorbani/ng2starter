/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { UpsertSourceApiModel } from "../../models";
import { SourceService } from "../../services/source.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { SourceSubmit } from "../../actions";
var SourceUpsertComponent = /** @class */ (function () {
    function SourceUpsertComponent(sourceService, formBuilder, route, store) {
        var _this = this;
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = ((/** @type {?} */ (this.formGroup.controls.Thresholds))).controls;
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var sourceId = params["id"];
            sourceId &&
                _this.sourceService.getSourceById(sourceId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach((/**
                     * @param {?} mapping
                     * @return {?}
                     */
                    function (mapping) {
                        return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type);
                    }));
                }));
        }));
    }
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    SourceUpsertComponent.prototype.addItem = /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    function (Name, Formula, Message, Type) {
        if (Name === void 0) { Name = ""; }
        if (Formula === void 0) { Formula = ""; }
        if (Message === void 0) { Message = ""; }
        if (Type === void 0) { Type = "critical"; }
        /** @type {?} */
        var control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
        control.push(new FormGroup({
            Name: new FormControl(Name, [Validators.required]),
            Formula: new FormControl(Formula, [Validators.required]),
            Message: new FormControl(Message, [Validators.required]),
            Type: new FormControl(Type, [Validators.required])
        }));
        //    control.push(this.formBuilder.group({
        //      Name: [Name],
        //      Formula: [Formula],
        //      Message: [Message]
        //    }));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SourceUpsertComponent.prototype.removeItem = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.data = data.Data;
        }));
        return o$;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SourceUpsertComponent.prototype.add = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    };
    SourceUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "source-source-upsert",
                    template: "<div fxLayout=\"column\">\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div>\r\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <!-- TODO: -->\r\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\r\n                </mat-form-field>\r\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\r\n                  <label>\u0646\u0648\u0639 :</label>\r\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\r\n                    {{item}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\r\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n",
                    styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
                }] }
    ];
    /** @nocollapse */
    SourceUpsertComponent.ctorParameters = function () { return [
        { type: SourceService },
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return SourceUpsertComponent;
}());
export { SourceUpsertComponent };
if (false) {
    /** @type {?} */
    SourceUpsertComponent.prototype.formGroup;
    /** @type {?} */
    SourceUpsertComponent.prototype.sources;
    /** @type {?} */
    SourceUpsertComponent.prototype.thresholds;
    /** @type {?} */
    SourceUpsertComponent.prototype.data;
    /** @type {?} */
    SourceUpsertComponent.prototype.types;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.sourceService;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXVwc2VydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sY0FBYyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdDO0lBWUMsK0JBQ1MsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsS0FBeUM7UUFKbEQsaUJBeUJDO1FBeEJRLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW9DOztRQVRsRCxjQUFTLEdBQWMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUk5RCxVQUFLLEdBQUcsQ0FBRSxVQUFVLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFPOUIsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FB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LElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOztnQkExRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDAzSEFBNkM7O2lCQUU3Qzs7OztnQkFaUSxhQUFhO2dCQUZGLFdBQVc7Z0JBSXRCLGNBQWM7Z0JBRGQsS0FBSzs7SUFrRmQsNEJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXRFWSxxQkFBcUI7OztJQUVqQywwQ0FBOEQ7O0lBQzlELHdDQUFtQzs7SUFDbkMsMkNBQThCOztJQUM5QixxQ0FBVTs7SUFDVixzQ0FBK0I7Ozs7O0lBRTlCLDhDQUFvQzs7Ozs7SUFDcEMsNENBQWdDOzs7OztJQUNoQyxzQ0FBNkI7Ozs7O0lBQzdCLHNDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU291cmNlU3VibWl0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2Utc291cmNlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vc291cmNlLXVwc2VydC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vc291cmNlLXVwc2VydC5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Ly9jb25maWdJbmZvcmFtYXRpb247XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdHRocmVzaG9sZHM6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGE6IGFueTtcclxuXHR0eXBlcyA9IFsgXCJjcml0aWNhbFwiLCBcImdvYWxcIiBdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdC8vIHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLnRocmVzaG9sZHMgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVGhyZXNob2xkcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IHNvdXJjZUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0c291cmNlSWQgJiZcclxuXHRcdFx0XHR0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlQnlJZChzb3VyY2VJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdEVuZHBvaW50OiBkYXRhLkVuZHBvaW50LFxyXG5cdFx0XHRcdFx0XHRJbnRlcnZhbDogZGF0YS5JbnRlcnZhbCxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUgfHwgZmFsc2UsXHJcblx0XHRcdFx0XHRcdFRocmVzaG9sZHM6IGRhdGEuVGhyZXNob2xkc1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0ZGF0YS5UaHJlc2hvbGRzLmZvckVhY2gobWFwcGluZyA9PlxyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0obWFwcGluZy5OYW1lLCBtYXBwaW5nLkZvcm11bGEsIG1hcHBpbmcuTWVzc2FnZSwgbWFwcGluZy5UeXBlKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRhZGRJdGVtKE5hbWU6IHN0cmluZyA9IFwiXCIsIEZvcm11bGE6IHN0cmluZyA9IFwiXCIsIE1lc3NhZ2U6IHN0cmluZyA9IFwiXCIsIFR5cGU6IHN0cmluZyA9IFwiY3JpdGljYWxcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUaHJlc2hvbGRzXCJdO1xyXG5cdFx0Y29udHJvbC5wdXNoKFxyXG5cdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woTmFtZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEZvcm11bGE6IG5ldyBGb3JtQ29udHJvbChGb3JtdWxhLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TWVzc2FnZTogbmV3IEZvcm1Db250cm9sKE1lc3NhZ2UsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woVHlwZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0Ly8gICAgY29udHJvbC5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0Ly8gICAgICBOYW1lOiBbTmFtZV0sXHJcblx0XHQvLyAgICAgIEZvcm11bGE6IFtGb3JtdWxhXSxcclxuXHRcdC8vICAgICAgTWVzc2FnZTogW01lc3NhZ2VdXHJcblx0XHQvLyAgICB9KSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUaHJlc2hvbGRzXCJdO1xyXG5cdFx0Y29udHJvbC5yZW1vdmVBdChpKTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoKSB7XHJcblx0XHRjb25zdCBvJCA9IHRoaXMuc291cmNlU2VydmljZS5nZXREYXRhKHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdG8kLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZGF0YS5EYXRhO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbyQ7XHJcblx0fVxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0Ly9pZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTb3VyY2VTdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIl19