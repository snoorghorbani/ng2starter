/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef, static: false },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdOLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDO0FBU3ZCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUS9CLFlBQW9CLFFBQWtDLEVBQVUsU0FBMkI7UUFBdkUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7Ozs7SUFIaEcsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLGdEQUFnRDtZQUNoRCw4Q0FBOEM7U0FDOUM7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3QixRQUFRLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUNkO3NCQUNrQixDQUNsQixDQUFDO1NBQ0Y7OztjQUVLLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsUUFBUSxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7OztZQW5DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsK0NBQStDO2dCQUMvQywrQ0FBK0M7YUFDL0M7Ozs7WUFiQSx3QkFBd0I7WUFEeEIsZ0JBQWdCOzs7bUJBZ0JmLEtBQUs7d0JBQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBRGpFLG1DQUE0Qjs7SUFDNUIsd0NBRTZCOzs7OztJQUlqQix1Q0FBMEM7Ozs7O0lBQUUsd0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRWaWV3Q2hpbGQsXHJcblx0RGlyZWN0aXZlLFxyXG5cdE9uQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW3J1bGUtc3RlcC1sb2FkZXJdXCJcclxuXHQvLyB0ZW1wbGF0ZVVybDogXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcblx0Ly8gc3R5bGVVcmxzOiBbIFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlcExvYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuXHRASW5wdXQoKSBzdGVwOiBHd3RTdGVwPGFueT47XHJcblx0QFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcclxuXHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRnZXQgcGFyYW1zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyB8fCB7fTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XHJcblx0XHRcdC8vIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICghdGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgpLlxyXG5cdFx0ICBTdXBwb3J0ZWQgdHlwZXM6IGBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLnN0ZXAuc3RlcENvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgPSB0aGlzLnN0ZXAucGFyYW1zO1xyXG5cdH1cclxufVxyXG4iXX0=