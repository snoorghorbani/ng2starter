/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatListModule } from "@angular/material";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ArticleUpsertComponent } from "./article/article-upsert/article-upsert.component";
import { ArticleViewComponent } from "./article/article-view/article-view.component";
import { LinksUpsertComponent } from "./links/links-upsert/links-upsert.component";
import { LinksViewComponent } from "./links/links-view/links-view.component";
var NgsWidgetTypesModule = /** @class */ (function () {
    function NgsWidgetTypesModule() {
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
                        // EditorModule
                        FroalaEditorModule.forRoot(),
                        FroalaViewModule.forRoot()
                    ],
                    declarations: [ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent],
                    entryComponents: [ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent],
                    exports: [ArticleViewComponent]
                },] },
    ];
    return NgsWidgetTypesModule;
}());
export { NgsWidgetTypesModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXR5cGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsYUFBYSxFQUNiLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7O2dCQUU1RSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7O3dCQUVoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzVCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtxQkFDMUI7b0JBQ0QsWUFBWSxFQUFFLENBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUU7b0JBQ3hHLGVBQWUsRUFBRSxDQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixDQUFFO29CQUMzRyxPQUFPLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtpQkFDakM7OytCQWpFRDs7U0FrRWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZyb2FsYUVkaXRvck1vZHVsZSwgRnJvYWxhVmlld01vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWZyb2FsYS13eXNpd3lnXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuXHJcbi8qKlxyXG4gKiBhcnRpY2xlXHJcbiAqL1xyXG5pbXBvcnQgeyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS9hcnRpY2xlLXVwc2VydC9hcnRpY2xlLXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9hcnRpY2xlL2FydGljbGUtdmlldy9hcnRpY2xlLXZpZXcuY29tcG9uZW50XCI7XHJcbi8qKlxyXG4gKiBsaW5rc1xyXG4gKi9cclxuaW1wb3J0IHsgTGlua3NVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9saW5rcy9saW5rcy11cHNlcnQvbGlua3MtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5rc1ZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHQvLyBFZGl0b3JNb2R1bGVcclxuXHRcdEZyb2FsYUVkaXRvck1vZHVsZS5mb3JSb290KCksXHJcblx0XHRGcm9hbGFWaWV3TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIEFydGljbGVVcHNlcnRDb21wb25lbnQsIEFydGljbGVWaWV3Q29tcG9uZW50LCBMaW5rc1Vwc2VydENvbXBvbmVudCwgTGlua3NWaWV3Q29tcG9uZW50IF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEFydGljbGVVcHNlcnRDb21wb25lbnQsIEFydGljbGVWaWV3Q29tcG9uZW50LCBMaW5rc1Vwc2VydENvbXBvbmVudCwgTGlua3NWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBBcnRpY2xlVmlld0NvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRUeXBlc01vZHVsZSB7fVxyXG4iXX0=