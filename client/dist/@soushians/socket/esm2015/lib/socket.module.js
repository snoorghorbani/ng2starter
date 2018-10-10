/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { MODULE_CONFIG_TOKEN } from "./socket.config";
import { SocketConfigurationService } from "./services/socket-configuration.service";
import { SocketService } from "./services/socket.service";
import { SocketReducer } from "./socket.reducer";
export class NgsSocketModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsSocketRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, SocketConfigurationService, SocketService]
        };
    }
}
NgsSocketModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
export class NgsSocketRootModule {
    /**
     * @param {?} socketService
     */
    constructor(socketService) {
        this.socketService = socketService;
    }
}
NgsSocketRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgsSocketModule, StoreModule.forFeature("socket", SocketReducer)]
            },] },
];
/** @nocollapse */
NgsSocketRootModule.ctorParameters = () => [
    { type: SocketService }
];
if (false) {
    /** @type {?} */
    NgsSocketRootModule.prototype.socketService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc29ja2V0LyIsInNvdXJjZXMiOlsibGliL3NvY2tldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBc0IsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUEyQjtRQUN6QyxPQUFPO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFFO1NBQzVHLENBQUM7S0FDRjs7O1lBVEQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFFLFlBQVksQ0FBRTthQUN6Qjs7QUFhRCxNQUFNOzs7O0lBQ0wsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7S0FBSTs7O1lBSnBELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUU7YUFDN0U7Ozs7WUFqQlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vc29ja2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNvY2tldFJlZHVjZXIgfSBmcm9tIFwiLi9zb2NrZXQucmVkdWNlclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NTb2NrZXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNvY2tldE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1NvY2tldFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIFNvY2tldFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBOZ3NTb2NrZXRNb2R1bGUsIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb2NrZXRcIiwgU29ja2V0UmVkdWNlcikgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzU29ja2V0Um9vdE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlKSB7fVxyXG59XHJcbiJdfQ==