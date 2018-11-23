import { RECEIVE_MESSAGE, SEND_MESSAGE } from "../actions/action";
import { combineReducers } from "redux";

const initialState = {
	messages: []
};

const messages = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_MESSAGE:
			return { ...state, messages: [...state.messages, action.data] };
		case SEND_MESSAGE:
			return { ...state };
		default:
			return state;
	}
};

export default combineReducers({ messages });
