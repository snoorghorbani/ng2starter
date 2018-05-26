import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as sourceList from './source-list.reducer';

export interface SourceState {
        list: sourceList.State
}

export const SourceReducers = {
      sources: sourceList.Reducer
};

export interface FeatureState {
        'sources': SourceState;
}



//#region selectors

export const selectSourceState = createFeatureSelector<SourceState>("source");

//#endregion

export const getSourceList = createSelector(
        selectSourceState,
        (state: SourceState) => state.list
);
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);
