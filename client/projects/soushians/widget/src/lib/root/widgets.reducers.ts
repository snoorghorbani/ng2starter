import { WidgetModel } from "../models/widget.model";
import { WidgetsActions, WidgetsActionTypes } from "./widget.actions";

export interface State {
	data: WidgetModel<any>[];
}

const initialState: State = {
	data: []
};

export function Reducer(state = initialState, action: WidgetsActions): State {
	let _data: WidgetModel<any>[];
	switch (action.type) {
		case WidgetsActionTypes.UPSERT:
			_data = state.data.concat();
			const newWidgets = action.payload;

			newWidgets.forEach(newWidget => {
				const existedWidgetIndex = _data.findIndex(w => w._id == newWidget._id);
				if (existedWidgetIndex > -1) {
					_data.splice(existedWidgetIndex, 1, newWidget);
				} else {
					_data.push(newWidget);
				}
			});

			return {
				...state,
				data: _data
			};

		case WidgetsActionTypes.DELETE:
			_data = Object.assign({}, state.data);

			const widgetIndex = state.data.findIndex(w => w._id == action.payload._id);
			_data.splice(widgetIndex, 1);

			return {
				...state,
				data: _data
			};

		default:
			return state;
	}
}

export const getWidgets = (state: State) => state.data;
