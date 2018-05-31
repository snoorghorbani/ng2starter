/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from './public_api';
export { FooterComponent as ɵg } from './lib/dumb-components/footer/footer.component';
export { LogoContainerComponent as ɵe } from './lib/dumb-components/logo-container/logo-container.component';
export { MainMenuComponent as ɵa } from './lib/dumb-components/main-menu/main-menu.component';
export { MainComponent as ɵi } from './lib/dumb-components/main/main.component';
export { SearchBoxComponent as ɵd } from './lib/dumb-components/search-box/search-box.component';
export { TitleComponent as ɵh } from './lib/dumb-components/title/title.component';
export { ToolbarMenuComponent as ɵf } from './lib/dumb-components/toolbar-menu/toolbar-menu.component';
export { LayoutReducers as ɵj } from './lib/reducers';
export { LayoutConfigurationService as ɵc } from './lib/services/layout-configuration.service';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsic291c2hpYW5zLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsK1pBQWMsY0FBYyxDQUFDO0FBRTdCLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHNCQUFzQixJQUFJLEVBQUUsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzNHLE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsYUFBYSxJQUFJLEVBQUUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxrQkFBa0IsSUFBSSxFQUFFLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsY0FBYyxJQUFJLEVBQUUsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxFQUFFLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNyRyxPQUFPLEVBQW9CLGNBQWMsSUFBSSxFQUFFLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsMEJBQTBCLElBQUksRUFBRSxFQUFDLE1BQU0sNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG5cbmV4cG9ydCB7Rm9vdGVyQ29tcG9uZW50IGFzIMm1Z30gZnJvbSAnLi9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmV4cG9ydCB7TG9nb0NvbnRhaW5lckNvbXBvbmVudCBhcyDJtWV9IGZyb20gJy4vbGliL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnQnO1xuZXhwb3J0IHtNYWluTWVudUNvbXBvbmVudCBhcyDJtWF9IGZyb20gJy4vbGliL2R1bWItY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudCc7XG5leHBvcnQge01haW5Db21wb25lbnQgYXMgybVpfSBmcm9tICcuL2xpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudCc7XG5leHBvcnQge1NlYXJjaEJveENvbXBvbmVudCBhcyDJtWR9IGZyb20gJy4vbGliL2R1bWItY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50JztcbmV4cG9ydCB7VGl0bGVDb21wb25lbnQgYXMgybVofSBmcm9tICcuL2xpYi9kdW1iLWNvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcbmV4cG9ydCB7VG9vbGJhck1lbnVDb21wb25lbnQgYXMgybVmfSBmcm9tICcuL2xpYi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnQnO1xuZXhwb3J0IHtGZWF0dXJlU3RhdGUgYXMgybViLExheW91dFJlZHVjZXJzIGFzIMm1an0gZnJvbSAnLi9saWIvcmVkdWNlcnMnO1xuZXhwb3J0IHtMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSBhcyDJtWN9IGZyb20gJy4vbGliL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2UnOyJdfQ==