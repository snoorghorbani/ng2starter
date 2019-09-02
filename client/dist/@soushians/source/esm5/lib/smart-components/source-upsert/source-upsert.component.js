/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var sourceId = params["id"];
            sourceId &&
                _this.sourceService.getSourceById(sourceId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(function (mapping) {
                        return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type);
                    });
                });
        });
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
        o$.subscribe(function (data) {
            _this.data = data.Data;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXVwc2VydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sY0FBYyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdDO0lBWUMsK0JBQ1MsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsS0FBeUM7UUFKbEQsaUJBeUJDO1FBeEJRLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW9DOztRQVRsRCxjQUFTLEdBQWMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUk5RCxVQUFLLEdBQUcsQ0FBRSxVQUFVLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFPOUIsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FB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QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBMUVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywwM0hBQTZDOztpQkFFN0M7Ozs7Z0JBWlEsYUFBYTtnQkFGRixXQUFXO2dCQUl0QixjQUFjO2dCQURkLEtBQUs7O0lBa0ZkLDRCQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0F0RVkscUJBQXFCOzs7SUFFakMsMENBQThEOztJQUM5RCx3Q0FBbUM7O0lBQ25DLDJDQUE4Qjs7SUFDOUIscUNBQVU7O0lBQ1Ysc0NBQStCOzs7OztJQUU5Qiw4Q0FBb0M7Ozs7O0lBQ3BDLDRDQUFnQzs7Ozs7SUFDaEMsc0NBQTZCOzs7OztJQUM3QixzQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRTb3VyY2VBcGlNb2RlbCwgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVN1Ym1pdCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic291cmNlLXNvdXJjZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3NvdXJjZS11cHNlcnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3NvdXJjZS11cHNlcnQuY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdC8vY29uZmlnSW5mb3JhbWF0aW9uO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPjtcclxuXHR0aHJlc2hvbGRzOiBBYnN0cmFjdENvbnRyb2xbXTtcclxuXHRkYXRhOiBhbnk7XHJcblx0dHlwZXMgPSBbIFwiY3JpdGljYWxcIiwgXCJnb2FsXCIgXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy50aHJlc2hvbGRzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLlRocmVzaG9sZHMgYXMgRm9ybUFycmF5KS5jb250cm9scztcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBzb3VyY2VJZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHNvdXJjZUlkICYmXHJcblx0XHRcdFx0dGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZUJ5SWQoc291cmNlSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHRFbmRwb2ludDogZGF0YS5FbmRwb2ludCxcclxuXHRcdFx0XHRcdFx0SW50ZXJ2YWw6IGRhdGEuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlIHx8IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRUaHJlc2hvbGRzOiBkYXRhLlRocmVzaG9sZHNcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGRhdGEuVGhyZXNob2xkcy5mb3JFYWNoKG1hcHBpbmcgPT5cclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKG1hcHBpbmcuTmFtZSwgbWFwcGluZy5Gb3JtdWxhLCBtYXBwaW5nLk1lc3NhZ2UsIG1hcHBpbmcuVHlwZSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0YWRkSXRlbShOYW1lOiBzdHJpbmcgPSBcIlwiLCBGb3JtdWxhOiBzdHJpbmcgPSBcIlwiLCBNZXNzYWdlOiBzdHJpbmcgPSBcIlwiLCBUeXBlOiBzdHJpbmcgPSBcImNyaXRpY2FsXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVGhyZXNob2xkc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKE5hbWUsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRGb3JtdWxhOiBuZXcgRm9ybUNvbnRyb2woRm9ybXVsYSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdE1lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChNZXNzYWdlLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFR5cGUsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdC8vICAgIGNvbnRyb2wucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdC8vICAgICAgTmFtZTogW05hbWVdLFxyXG5cdFx0Ly8gICAgICBGb3JtdWxhOiBbRm9ybXVsYV0sXHJcblx0XHQvLyAgICAgIE1lc3NhZ2U6IFtNZXNzYWdlXVxyXG5cdFx0Ly8gICAgfSkpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVGhyZXNob2xkc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCkge1xyXG5cdFx0Y29uc3QgbyQgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRvJC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG8kO1xyXG5cdH1cclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdC8vaWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU291cmNlU3VibWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==