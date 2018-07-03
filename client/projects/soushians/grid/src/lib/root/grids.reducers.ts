import { GridModel } from "../models";
import { GridsActionTypes, GridsActions } from "./widget.actions";

export interface State {
	data: GridModel[];
}

const initialState: State = {
	data: []
};

export function Reducer(state = initialState, action: GridsActions): State {
	let _data: GridModel[];
	switch (action.type) {
		case GridsActionTypes.UPSERT:
			_data = state.data.concat();
			const newGrids = action.payload;

			newGrids.forEach((newGrid) => {
				const existedGridIndex = _data.findIndex((w) => w._id == newGrid._id);
				if (existedGridIndex > -1) {
					_data.splice(existedGridIndex, 1, newGrid);
				} else {
					_data.push(newGrid);
				}
			});

			return {
				...state,
				data: _data
			};

		case GridsActionTypes.DELETE:
			_data = Object.assign({}, state.data);

			const gridIndex = state.data.findIndex((w) => w._id == action.payload._id);
			_data.splice(gridIndex, 1);

			return {
				...state,
				data: _data
			};

		default:
			return state;
	}
}

export const getGrids = (state: State) => state.data;
