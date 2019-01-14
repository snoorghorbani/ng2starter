/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatListModule } from "@angular/material";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { FlexLayoutModule } from "@angular/flex-layout";
/**
 * article
 */
import { ArticleUpsertComponent } from "./article/article-upsert/article-upsert.component";
import { ArticleViewComponent } from "./article/article-view/article-view.component";
/**
 * links
 */
import { LinksUpsertComponent } from "./links/links-upsert/links-upsert.component";
import { LinksViewComponent } from "./links/links-view/links-view.component";
/**
 * lists
 */
import { ListUpsertComponent } from "./list/list-upsert/list-upsert.component";
import { ListViewComponent } from "./list/list-view/list-view.component";
export class NgsWidgetTypesModule {
}
NgsWidgetTypesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MatExpansionModule,
                    MatSnackBarModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSelectModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatTabsModule,
                    MatRadioModule,
                    MatDividerModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatSlideToggleModule,
                    MatDividerModule,
                    MatCheckboxModule,
                    MatTableModule,
                    MatListModule,
                    FlexLayoutModule,
                    FroalaEditorModule.forRoot(),
                    FroalaViewModule.forRoot()
                ],
                declarations: [
                    ArticleUpsertComponent,
                    ArticleViewComponent,
                    LinksUpsertComponent,
                    LinksViewComponent,
                    ListUpsertComponent,
                    ListViewComponent
                ],
                entryComponents: [
                    ArticleUpsertComponent,
                    ArticleViewComponent,
                    LinksUpsertComponent,
                    LinksViewComponent,
                    ListUpsertComponent,
                    ListViewComponent
                ],
                exports: [ArticleViewComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXR5cGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsYUFBYSxFQUNiLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFJckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7QUFJN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUE4Q3pFLE1BQU0sT0FBTyxvQkFBb0I7OztZQTVDaEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtpQkFDMUI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ2pCO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRnJvYWxhRWRpdG9yTW9kdWxlLCBGcm9hbGFWaWV3TW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZnJvYWxhLXd5c2l3eWdcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5cclxuLyoqXHJcbiAqIGFydGljbGVcclxuICovXHJcbmltcG9ydCB7IEFydGljbGVVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9hcnRpY2xlL2FydGljbGUtdXBzZXJ0L2FydGljbGUtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnRcIjtcclxuLyoqXHJcbiAqIGxpbmtzXHJcbiAqL1xyXG5pbXBvcnQgeyBMaW5rc1Vwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpbmtzVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2xpbmtzL2xpbmtzLXZpZXcvbGlua3Mtdmlldy5jb21wb25lbnRcIjtcclxuLyoqXHJcbiAqIGxpc3RzXHJcbiAqL1xyXG5pbXBvcnQgeyBMaXN0VXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9saXN0LXVwc2VydC9saXN0LXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGcm9hbGFFZGl0b3JNb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0RnJvYWxhVmlld01vZHVsZS5mb3JSb290KClcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXJ0aWNsZVVwc2VydENvbXBvbmVudCxcclxuXHRcdEFydGljbGVWaWV3Q29tcG9uZW50LFxyXG5cdFx0TGlua3NVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaW5rc1ZpZXdDb21wb25lbnQsXHJcblx0XHRMaXN0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0TGlzdFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0QXJ0aWNsZVVwc2VydENvbXBvbmVudCxcclxuXHRcdEFydGljbGVWaWV3Q29tcG9uZW50LFxyXG5cdFx0TGlua3NVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaW5rc1ZpZXdDb21wb25lbnQsXHJcblx0XHRMaXN0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0TGlzdFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtBcnRpY2xlVmlld0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldFR5cGVzTW9kdWxlIHsgfVxyXG4iXX0=