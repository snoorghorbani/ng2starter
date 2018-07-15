/*
 * Public API Surface of layout
 */

//routings
// export {} from "./lib/reducers";

//models
// export * from "./lib/models";

//modules
export * from "./lib/layout.module";
export * from "./lib/layout.config";

//actions
export {
	LayoutActionTypes,
	TitleChangedAction,
	OpenSidenavAction,
	CloseSidenavAction,
	ChangeSideNavMode,
	ChangeLayout,
	CloseSecondSidenavAction,
	ChangeSecondSidenavMode,
	OpenSecondSidenavAction,
	ChangeToolbatToComfortableModeAction,
	ChangeToolbatToCompactModeAction,
	DisableComfortableModeAction,
	EnableComfortableModeAction,
	VisibleToolbarAction,
	FullscreenAction,
	ExitFullscreenAction,
	InvisibleToolbarAction,
	ToggleFullscreenAction
} from "./lib/actions";

//components

export { NgsLayoutMainComponent } from "./lib/dumb-components/main";
export { LayoutOutlets } from "./lib/models/layout-outlets.enum";
