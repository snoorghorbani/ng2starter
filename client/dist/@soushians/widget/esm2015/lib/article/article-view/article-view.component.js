/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { WidgetService } from "@soushians/widget";
export class ArticleViewComponent {
    /**
     * @param {?} store
     * @param {?} service
     */
    constructor(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ArticleViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-view",
                template: `<mat-card>
  <mat-card-title>{{widget.name}}</mat-card-title>
  <mat-card-content>
    <p>
      article-view works!
    </p>
    <!-- <editor apiKey="test" [init]="{plugins: 'link'}"></editor> -->
    {{(widget)?.Config.content}}
  </mat-card-content>
</mat-card>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ArticleViewComponent.ctorParameters = () => [
    { type: Store },
    { type: WidgetService }
];
function ArticleViewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ArticleViewComponent.prototype.widget;
    /** @type {?} */
    ArticleViewComponent.prototype.store;
    /** @type {?} */
    ArticleViewComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFlLGFBQWEsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBbUI1RSxNQUFNOzs7OztJQUdMLFlBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7S0FBSTs7OztJQUV6RSxRQUFRLE1BQUs7OztZQXBCYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7O0NBVVY7Z0JBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ1o7Ozs7WUFwQlEsS0FBSztZQUVRLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgV2lkZ2V0U2VydmljZSwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcblxuaW1wb3J0IHsgQXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2FydGljbGUtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWFydGljbGUtdmlld1wiLFxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLXRpdGxlPnt7d2lkZ2V0Lm5hbWV9fTwvbWF0LWNhcmQtdGl0bGU+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxwPlxuICAgICAgYXJ0aWNsZS12aWV3IHdvcmtzIVxuICAgIDwvcD5cbiAgICA8IS0tIDxlZGl0b3IgYXBpS2V5PVwidGVzdFwiIFtpbml0XT1cIntwbHVnaW5zOiAnbGluayd9XCI+PC9lZGl0b3I+IC0tPlxuICAgIHt7KHdpZGdldCk/LkNvbmZpZy5jb250ZW50fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbmAsXG5cdHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPiB7XG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxufVxuIl19