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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdOLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDOztJQWlCdEIsNkJBQW9CLFFBQWtDLEVBQVUsU0FBMkI7UUFBdkUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtLQUFJO0lBSC9GLHNCQUFJLHVDQUFNOzs7O1FBQVY7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUM1Qzs7O09BQUE7Ozs7SUFHRCx5Q0FBVzs7O0lBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O1NBR3BCO0tBQ0Q7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUNkLGdFQUNrQixDQUNsQixDQUFDO1NBQ0Y7O1FBRUQscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNsRDs7Z0JBbENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO2lCQUc5Qjs7OztnQkFiQSx3QkFBd0I7Z0JBRHhCLGdCQUFnQjs7O3VCQWdCZixLQUFLOzRCQUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7OzhCQXJCbkQ7O1NBbUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25Jbml0LFxuXHRJbnB1dCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdFZpZXdDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRPbkNoYW5nZXNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltydWxlLXN0ZXAtbG9hZGVyXVwiXG5cdC8vIHRlbXBsYXRlVXJsOiBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50Lmh0bWxcIixcblx0Ly8gc3R5bGVVcmxzOiBbIFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuY3NzXCIgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwTG9hZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXHRASW5wdXQoKSBzdGVwOiBHd3RTdGVwPGFueT47XG5cdEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG5cdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55Pjtcblx0Z2V0IHBhcmFtcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zIHx8IHt9O1xuXHR9XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcblx0XHRcdC8vIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAoIXRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KSB7XG5cdFx0XHRkZWJ1Z2dlcjtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoKS5cblx0XHQgIFN1cHBvcnRlZCB0eXBlczogYFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Ly8gVE9ETzogZml4IGdlbmVyaWMgdHlwZVxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLnN0ZXAuc3RlcENvbXBvbmVudCk7XG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgPSB0aGlzLnN0ZXAucGFyYW1zO1xuXHR9XG59XG4iXX0=