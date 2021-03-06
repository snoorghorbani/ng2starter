/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ViewChild, Directive } from "@angular/core";
export class StepLoaderDirective {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    get params() {
        return this.component.instance.params || {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.component) {
            // this.component.instance.config = this.config;
            // this.component.instance.group = this.group;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.step.stepComponent) {
            debugger;
            throw new Error(`Trying to use an unsupported type ().
		  Supported types: `);
        }
        // TODO: fix generic type
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        debugger;
        this.component.instance.params = this.step.params;
    }
}
StepLoaderDirective.decorators = [
    { type: Directive, args: [{
                selector: "[rule-step-loader]"
                // templateUrl: "./step-loader.component.html",
                // styleUrls: [ "./step-loader.component.css" ]
            },] }
];
/** @nocollapse */
StepLoaderDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
StepLoaderDirective.propDecorators = {
    step: [{ type: Input }],
    component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    StepLoaderDirective.prototype.step;
    /** @type {?} */
    StepLoaderDirective.prototype.component;
    /**
     * @type {?}
     * @private
     */
    StepLoaderDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    StepLoaderDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdOLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDO0FBU3ZCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUS9CLFlBQW9CLFFBQWtDLEVBQVUsU0FBMkI7UUFBdkUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7Ozs7SUFIaEcsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLGdEQUFnRDtZQUNoRCw4Q0FBOEM7U0FDOUM7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3QixRQUFRLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUNkO3NCQUNrQixDQUNsQixDQUFDO1NBQ0Y7OztjQUVLLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsUUFBUSxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7OztZQW5DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsK0NBQStDO2dCQUMvQywrQ0FBK0M7YUFDL0M7Ozs7WUFiQSx3QkFBd0I7WUFEeEIsZ0JBQWdCOzs7bUJBZ0JmLEtBQUs7d0JBQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7OztJQURsRCxtQ0FBNEI7O0lBQzVCLHdDQUU2Qjs7Ozs7SUFJakIsdUNBQTBDOzs7OztJQUFFLHdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Vmlld0NoaWxkLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRPbkNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltydWxlLXN0ZXAtbG9hZGVyXVwiXHJcblx0Ly8gdGVtcGxhdGVVcmw6IFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuaHRtbFwiLFxyXG5cdC8vIHN0eWxlVXJsczogWyBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0ZXBMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblx0QElucHV0KCkgc3RlcDogR3d0U3RlcDxhbnk+O1xyXG5cdEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0Ly8gVE9ETzogZml4IGdlbmVyaWMgdHlwZVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0Z2V0IHBhcmFtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgfHwge307XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoKS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiBgXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zID0gdGhpcy5zdGVwLnBhcmFtcztcclxuXHR9XHJcbn1cclxuIl19