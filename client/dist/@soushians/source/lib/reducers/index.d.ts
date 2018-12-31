import { MemoizedSelector } from '@ngrx/store';
import * as sourceList from './source-list.reducer';
export interface SourceState {
    list: sourceList.State;
}
export declare const SourceReducers: {
    sources: typeof sourceList.Reducer;
};
export interface FeatureState {
    'sources': SourceState;
}
export declare const selectSourceState: MemoizedSelector<object, SourceState>;
export declare const getSourceList: MemoizedSelector<object, sourceList.State>;
