/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "@soushians/shared";
import { SourceReducers } from "./reducers/index";
import { RoutingModule } from "./source.routing-module";
import { SourceEffects } from "./effects/source.effects";
import { SourceListComponent } from "./smart-components/source-list/source-list.component";
import { SourceUpsertComponent } from "./smart-components/source-upsert/source-upsert.component";
import { SourceModuleContainerComponent } from "./smart-components/source-module-container/source-module-container.component";
var SourceModule = /** @class */ (function () {
    function SourceModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.source = "8.0.10";
    }
    SourceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        FlexLayoutModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSnackBarModule,
                        MatSidenavModule,
                        MatExpansionModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatListModule,
                        MatMenuModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatInputModule,
                        MatToolbarModule,
                        MatDatepickerModule,
                        MatProgressBarModule,
                        BrowserModule,
                        StoreModule.forFeature("source", SourceReducers),
                        BrowserAnimationsModule,
                        RoutingModule,
                        EffectsModule.forFeature([SourceEffects]),
                        SharedModule
                    ],
                    declarations: [SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SourceModule.ctorParameters = function () { return []; };
    return SourceModule;
}());
export { SourceModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBUyxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBRTlIO0lBbUNDO1FBQ0MsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUMxRCxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDNUMsQ0FBQzs7Z0JBdENELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQzt3QkFDaEQsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDekMsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSw4QkFBOEIsQ0FBQztvQkFDMUYsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUFNRCxtQkFBQztDQUFBLEFBdkNELElBdUNDO1NBTFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUsIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBTb3VyY2VSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zb3VyY2Uucm91dGluZy1tb2R1bGVcIjtcclxuaW1wb3J0IHsgU291cmNlRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc291cmNlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLWxpc3Qvc291cmNlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNvdXJjZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLXVwc2VydC9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb3VyY2VcIiwgU291cmNlUmVkdWNlcnMpLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtTb3VyY2VFZmZlY3RzXSksXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1NvdXJjZUxpc3RDb21wb25lbnQsIFNvdXJjZVVwc2VydENvbXBvbmVudCwgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlTW9kdWxlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdCg8YW55PndpbmRvdykuX19fc3RhcnRlciA9ICg8YW55PndpbmRvdykuX19fc3RhcnRlciB8fCB7fTtcclxuXHRcdCg8YW55PndpbmRvdykuX19fc3RhcnRlci5zb3VyY2UgPSBcIjguMC4xMFwiO1xyXG5cdH1cclxufVxyXG4iXX0=