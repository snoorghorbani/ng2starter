import { PageModel } from "../models/page.model";
import { PagesActions, PagesActionTypes } from "./pages.actions";

export interface State {
	data: PageModel<any>[];
}

const initialState: State = {
	data: []
};

export function Reducer(state = initialState, action: PagesActions): State {
	let _data: PageModel<any>[];
	switch (action.type) {
		case PagesActionTypes.UPSERT:
			_data = state.data.concat();
			let newPages = action.payload;
			if (!(newPages instanceof Array)) {
				newPages = [ newPages ];
				console.error("'PagesActionTypes.UPSERT' does not get array payload");
			}

			newPages.forEach((newPage) => {
				const existedPageIndex = _data.findIndex((w) => w._id == newPage._id);
				if (existedPageIndex > -1) {
					_data.splice(existedPageIndex, 1, newPage);
				} else {
					_data.push(newPage);
				}
			});

			return {
				...state,
				data: _data
			};

		case PagesActionTypes.DELETE:
			_data = Object.assign({}, state.data);

			const pageIndex = state.data.findIndex((w) => w._id == action.payload._id);
			_data.splice(pageIndex, 1);

			return {
				...state,
				data: _data
			};

		default:
			return state;
	}
}

export const getPages = (state: State) => state.data;
