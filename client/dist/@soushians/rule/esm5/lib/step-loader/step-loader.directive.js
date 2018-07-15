/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ViewChild, Directive } from "@angular/core";
var StepLoaderDirective = /** @class */ (function () {
    function StepLoaderDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    Object.defineProperty(StepLoaderDirective.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this.component.instance.params || {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StepLoaderDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            // this.component.instance.config = this.config;
            // this.component.instance.group = this.group;
        }
    };
    /**
     * @return {?}
     */
    StepLoaderDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.step.stepComponent) {
            debugger;
            throw new Error("Trying to use an unsupported type ().\n\t\t  Supported types: ");
        }
        // TODO: fix generic type
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        this.component.instance.params = this.step.params;
    };
    StepLoaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[rule-step-loader]"
                },] },
    ];
    /** @nocollapse */
    StepLoaderDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    StepLoaderDirective.propDecorators = {
        step: [{ type: Input }],
        component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }]
    };
    return StepLoaderDirective;
}());
export { StepLoaderDirective };
function StepLoaderDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    StepLoaderDirective.prototype.step;
    /** @type {?} */
    StepLoaderDirective.prototype.component;
    /** @type {?} */
    StepLoaderDirective.prototype.resolver;
    /** @type {?} */
    StepLoaderDirective.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdOLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDOztJQWlCdEIsNkJBQW9CLFFBQWtDLEVBQVUsU0FBMkI7UUFBdkUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtLQUFJO0lBSC9GLHNCQUFJLHVDQUFNOzs7O1FBQVY7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUM1Qzs7O09BQUE7Ozs7SUFHRCx5Q0FBVzs7O0lBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O1NBR3BCO0tBQ0Q7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUNkLGdFQUNrQixDQUNsQixDQUFDO1NBQ0Y7O1FBRUQscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNsRDs7Z0JBbENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO2lCQUc5Qjs7OztnQkFiQSx3QkFBd0I7Z0JBRHhCLGdCQUFnQjs7O3VCQWdCZixLQUFLOzRCQUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7OzhCQXJCbkQ7O1NBbUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Vmlld0NoaWxkLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRPbkNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltydWxlLXN0ZXAtbG9hZGVyXVwiXHJcblx0Ly8gdGVtcGxhdGVVcmw6IFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuaHRtbFwiLFxyXG5cdC8vIHN0eWxlVXJsczogWyBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0ZXBMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblx0QElucHV0KCkgc3RlcDogR3d0U3RlcDxhbnk+O1xyXG5cdEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0Ly8gVE9ETzogZml4IGdlbmVyaWMgdHlwZVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0Z2V0IHBhcmFtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgfHwge307XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XHJcblx0XHRcdC8vIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICghdGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgpLlxyXG5cdFx0ICBTdXBwb3J0ZWQgdHlwZXM6IGBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLnN0ZXAuc3RlcENvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zID0gdGhpcy5zdGVwLnBhcmFtcztcclxuXHR9XHJcbn1cclxuIl19