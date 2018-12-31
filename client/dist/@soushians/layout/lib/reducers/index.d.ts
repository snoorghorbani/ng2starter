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
export declare const selectLayoutState: MemoizedSelector<object, LayoutState>;
export declare const getLayout: MemoizedSelector<object, layout.State>;
export declare const getTitle: MemoizedSelector<object, string>;
export declare const getShowMainSidenav: MemoizedSelector<object, boolean>;
export declare const getMainSideNavMode: MemoizedSelector<object, "over" | "push" | "side">;
export declare const getLayoutMode: MemoizedSelector<object, "default" | "with-margin" | "without-margin">;
export declare const getShowSecondSidebarStatus: MemoizedSelector<object, boolean>;
export declare const getSecondSidebarMode: MemoizedSelector<object, "over" | "push" | "side">;
export declare const getFullscreenMode: MemoizedSelector<object, boolean>;
export declare const getLayoutToolbar: MemoizedSelector<object, fromToolbar.State>;
export declare const getLayoutToolbarMode: MemoizedSelector<object, "comfortable" | "compact" | "summary" | "hide">;
