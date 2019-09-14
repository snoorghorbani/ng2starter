import { MemoizedSelector } from "@ngrx/store";
import * as layout from "./layout.reducer";
import * as fromToolbar from "./toolbar.reducer";
export interface LayoutState {
    layout: layout.State;
    toolbar: fromToolbar.State;
}
export declare const LayoutReducers: {
    layout: typeof layout.Reducer;
    toolbar: typeof fromToolbar.Reducer;
};
export interface FeatureState {
    layout: LayoutState;
    toolbar: fromToolbar.State;
}
export declare const selectLayoutState: MemoizedSelector<object, LayoutState, import("@ngrx/store").DefaultProjectorFn<LayoutState>>;
export declare const getLayout: MemoizedSelector<object, layout.State, import("@ngrx/store").DefaultProjectorFn<layout.State>>;
export declare const getTitle: MemoizedSelector<object, string, import("@ngrx/store").DefaultProjectorFn<string>>;
export declare const getShowMainSidenav: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const getMainSideNavMode: MemoizedSelector<object, "push" | "over" | "side", import("@ngrx/store").DefaultProjectorFn<"push" | "over" | "side">>;
export declare const getLayoutMode: MemoizedSelector<object, "default" | "with-margin" | "without-margin", import("@ngrx/store").DefaultProjectorFn<"default" | "with-margin" | "without-margin">>;
export declare const getShowSecondSidebarStatus: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const getSecondSidebarMode: MemoizedSelector<object, "push" | "over" | "side", import("@ngrx/store").DefaultProjectorFn<"push" | "over" | "side">>;
export declare const getFullscreenMode: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const getLayoutToolbar: MemoizedSelector<object, fromToolbar.State, import("@ngrx/store").DefaultProjectorFn<fromToolbar.State>>;
export declare const getLayoutToolbarMode: MemoizedSelector<object, "hide" | "summary" | "comfortable" | "compact", import("@ngrx/store").DefaultProjectorFn<"hide" | "summary" | "comfortable" | "compact">>;
