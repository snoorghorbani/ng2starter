import { WidgetActions, WidgetActionTypes } from "app/dashboard/widget/widget.actions";
import { WidgetModel } from "app/dashboard/models/widget.model";

export interface State {
	status: string;
	data: WidgetModel[];
}
export const initialState: State = {
	status: "pristine",
	data: []
};

export function reducer(state = initialState, action: WidgetActions): State {
	switch (action.type) {
		//FETCH
		case WidgetActionTypes.GET_WIDGET_LIST: {
			return {
				...state,
				status: "get_list"
			};
		}
		case WidgetActionTypes.WIDGET_LIST_START: {
			return {
				...state,
				status: "get_list_start"
			};
		}
		case WidgetActionTypes.GET_WIDGET_LIST_SUCCEED: {
			return {
				...state,
				status: "get_list_succeed",
				data: action.payload
			};
		}
		case WidgetActionTypes.WIDGET_LIST_FAILED: {
			return {
				...state,
				status: "get_list_failed"
			};
		}

		//ADD
		case WidgetActionTypes.ADD_WIDGET: {
			return {
				...state,
				status: "add_widget"
			};
		}
		case WidgetActionTypes.ADD_WIDGET_START: {
			return {
				...state,
				status: "add_widget_start"
			};
		}
		case WidgetActionTypes.ADD_WIDGET_SUCCEED: {
			return {
				...state,
				status: "add_widget_succeed",
				data: state.data.concat(action.payload)
			};
		}
		case WidgetActionTypes.ADD_WIDGET_FAILED: {
			return {
				...state,
				status: "add_widget_failed"
			};
		}

		//EDIT
		case WidgetActionTypes.EDIT_WIDGET: {
			return {
				...state,
				status: "edit_widget"
			};
		}
		case WidgetActionTypes.EDIT_WIDGET_SUCCEED: {
			debugger;
			const data = state.data.concat([]);
			var updatedData = data.splice(data.findIndex(item => item._id == action.payload._id), 1);
			updatedData = action.payload;
			return {
				...state,
				status: "edit_widget_succeed"
			};
		}
		case WidgetActionTypes.EDIT_WIDGET_FAILED: {
			return {
				...state,
				status: "edit_widget_failed"
			};
		}

		//BULK EDIT
		case WidgetActionTypes.BULK_EDIT_WIDGETS: {
			return {
				...state,
				status: "bulk_edit_widget"
			};
		}
		case WidgetActionTypes.BULK_EDIT_WIDGETS_SUCCEED: {
			return {
				...state,
				status: "bulk_edit_widget_succeed",
				data: action.payload
			};
		}
		case WidgetActionTypes.BULK_EDIT_WIDGETS_FAILED: {
			return {
				...state,
				status: "bulk_edit_widget_failed"
			};
		}

		//DELETE
		case WidgetActionTypes.DELETE_WIDGET: {
			return {
				...state,
				status: "delete_widget"
			};
		}
		case WidgetActionTypes.DELETE_WIDGET_START: {
			return {
				...state,
				status: "delete_widget_start"
			};
		}
		case WidgetActionTypes.DELETE_WIDGET_SUCCEED: {
			const data = state.data.concat([]);
			data.splice(data.findIndex(item => item._id == action.payload._id), 1);
			debugger;
			return {
				...state,
				data,
				status: "delete_widget_succeed"
			};
		}
		case WidgetActionTypes.DELETE_WIDGET_FAILED: {
			return {
				...state,
				status: "delete_widget_failed"
			};
		}

		default: {
			return state;
		}
	}
}
