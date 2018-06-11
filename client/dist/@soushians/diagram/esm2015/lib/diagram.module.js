/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatCheckboxModule, MatGridListModule, MatSliderModule, MatAutocompleteModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MODULE_CONFIG_TOKEN } from "./diagram.config";
import { DiagramReducers } from "./reducers";
import { ServerStatusDiagramComponent } from "./dumb-components/server-status-diagram/server-status-diagram.component";
import { DiagramPartialConfigEditComponent } from "./dumb-components/diagram-partial-config-edit/diagram-partial-config-edit.component";
import { PieDiagramPartialConfigComponent } from "./dumb-components/pie-diagram-partial-config/pie-diagram-partial-config.component";
import { BooleanoWidgetPartialConfigComponent } from "./dumb-components/booleano-widget-partial-config/booleano-widget-partial-config.component";
import { NumericWidgetPartialConfigComponent } from "./dumb-components/numeric-widget-partial-config/numeric-widget-partial-config.component";
import { LinearDiagramPartialConfigComponent } from "./dumb-components/linear-diagram-partial-config/linear-diagram-partial-config.component";
import { ServerConnectingTimeDiagramComponent } from "./dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { NumericEditDiagramComponent } from "./dumb-components/numeric-edit-diagram/numeric-edit-diagram.component";
import { NumericDiagramComponent } from "./dumb-components/numeric-diagram/numeric-diagram.component";
import { DiagramModuleContainerComponent } from "./smart-components/diagram-module-container/diagram-module-container.component";
import { DataMapperComponent } from "./smart-components/data-mapper/data-mapper.component";
import { AddDiagramComponent } from "./smart-components/add-diagram/add-diagram.component";
import { diagramViewComponent } from "./smart-components/diagram-view/diagram-view.component";
import { DiagramsComponent } from "./smart-components/diagrams/diagrams.component";
import { EditDiagramComponent } from "./smart-components/edit-diagram/edit-diagram.component";
import { DiagramComponent } from "./smart-components/diagram/diagram.component";
import { DynamicComponentSelectorComponent } from "./smart-components/dynamic-component-selector/dynamic-component-selector.component";
import { DynamicConfigComponentSelectorComponent } from "./smart-components/dynamic-config-component-selector/dynamic-config-component-selector.component";
import { DiagramEffects } from "./effects/diagrams.effects";
import { AddDiagramEffects } from "./effects/add-diagram.effects";
import { RoutingModule } from "./diagram-routing.module";
export class NgsDiagramModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
NgsDiagramModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                    FormsModule,
                    RouterModule,
                    CommonModule,
                    MatExpansionModule,
                    MatSnackBarModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSelectModule,
                    MatSliderModule,
                    MatInputModule,
                    MatCheckboxModule,
                    MatFormFieldModule,
                    MatTabsModule,
                    FlexLayoutModule,
                    MatRadioModule,
                    MatTooltipModule,
                    MatGridListModule,
                    MatAutocompleteModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule
                ],
                declarations: [
                    AddDiagramComponent,
                    DiagramsComponent,
                    diagramViewComponent,
                    EditDiagramComponent,
                    DynamicConfigComponentSelectorComponent,
                    DiagramComponent,
                    DynamicComponentSelectorComponent,
                    DiagramModuleContainerComponent,
                    DataMapperComponent,
                    NumericDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent,
                    NumericWidgetPartialConfigComponent,
                    ServerConnectingTimeDiagramComponent,
                    NumericEditDiagramComponent,
                    LinearDiagramPartialConfigComponent
                ],
                providers: []
            },] },
];
export class RootNgsDiagramModule {
}
RootNgsDiagramModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsDiagramModule,
                    StoreModule.forFeature("diagram", DiagramReducers),
                    EffectsModule.forFeature([DiagramEffects, AddDiagramEffects]),
                    RoutingModule
                ],
                exports: [NgsDiagramModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFJNUQsT0FBTyxFQUF1QixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGlDQUFp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LGNBQWMsRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO29CQUMvRCxhQUFhO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFFLGdCQUFnQixDQUFFO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0VG9vbHRpcE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0R3JpZExpc3RNb2R1bGUsXHJcblx0TWF0U2xpZGVyTW9kdWxlLFxyXG5cdE1hdEF1dG9jb21wbGV0ZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9kaWFncmFtLmNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcvbnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0YU1hcHBlckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGF0YS1tYXBwZXIvZGF0YS1tYXBwZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZGlhZ3JhbVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtcy9kaWFncmFtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbUVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2RpYWdyYW1zLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kaWFncmFtLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFRvb2x0aXBNb2R1bGUsXHJcblx0XHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRcdE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBZGREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbXNDb21wb25lbnQsXHJcblx0XHRkaWFncmFtVmlld0NvbXBvbmVudCxcclxuXHRcdEVkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXRhTWFwcGVyQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHROdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50XHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NEaWFncmFtTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBEaWFncmFtTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0RpYWdyYW1Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NEaWFncmFtTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImRpYWdyYW1cIiwgRGlhZ3JhbVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIERpYWdyYW1FZmZlY3RzLCBBZGREaWFncmFtRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzRGlhZ3JhbU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRGlhZ3JhbU1vZHVsZSB7fVxyXG4iXX0=