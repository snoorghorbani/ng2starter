/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
export { FooterComponent };
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: "app-footer",
                template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\n    {{app_config?.Config.FooterCopyright}}\n</div>",
                styles: [":host{position:absolute;bottom:0;left:0;right:0;border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = function () { return []; };
FooterComponent.propDecorators = {
    app_config: [{ type: Input, args: ["app-config",] }]
};
function FooterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FooterComponent.prototype.app_config;
}
//# sourceMappingURL=footer.component.js.map
