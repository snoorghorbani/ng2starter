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
import { DiagramReducers } from "./reducers/index";
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
var NgsDiagramModule = /** @class */ (function () {
    function NgsDiagramModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsDiagramModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
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
    return NgsDiagramModule;
}());
export { NgsDiagramModule };
var RootNgsDiagramModule = /** @class */ (function () {
    function RootNgsDiagramModule() {
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
    return RootNgsDiagramModule;
}());
export { RootNgsDiagramModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFJNUQsT0FBTyxFQUF1QixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsaUNB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Q0FBQyxDQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO3dCQUMvRCxhQUFhO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFFLGdCQUFnQixDQUFFO2lCQUM3Qjs7K0JBNUhEOztTQTZIYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRUb29sdGlwTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2RpYWdyYW0uY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1lZGl0LWRpYWdyYW0vbnVtZXJpYy1lZGl0LWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhTWFwcGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kYXRhLW1hcHBlci9kYXRhLW1hcHBlci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBkaWFncmFtVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZWRpdC1kaWFncmFtL2VkaXQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvYWRkLWRpYWdyYW0uZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RpYWdyYW0tcm91dGluZy5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdFNsaWRlck1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0VG9vbHRpcE1vZHVsZSxcclxuXHRcdE1hdEdyaWRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFkZERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtc0NvbXBvbmVudCxcclxuXHRcdGRpYWdyYW1WaWV3Q29tcG9uZW50LFxyXG5cdFx0RWRpdERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhdGFNYXBwZXJDb21wb25lbnQsXHJcblx0XHROdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0RpYWdyYW1Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IERpYWdyYW1Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzRGlhZ3JhbU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0RpYWdyYW1Nb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZGlhZ3JhbVwiLCBEaWFncmFtUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgRGlhZ3JhbUVmZmVjdHMsIEFkZERpYWdyYW1FZmZlY3RzIF0pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NEaWFncmFtTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NEaWFncmFtTW9kdWxlIHt9XHJcbiJdfQ==