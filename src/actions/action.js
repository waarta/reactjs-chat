export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERROR = "RECEIVE_MESSAGE_ERROR";
export const newMessages = msg => async dispatch => {
	dispatch({
		type: RECEIVE_MESSAGE,
		data: JSON.parse(msg.data)
	});
};

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR";
export const send = (author, message) => async dispatch => {
	try {
		const res = await fetch("http://chat.1z1.fr/api/chat_message/send", {
			method: "POST",
			headers: {
				Accept: "application/ld+json",
				"Content-Type": "application/ld+json"
			},
			body: JSON.stringify({ author, message })
		});
		console.log("res", res);
		dispatch({
			type: SEND_MESSAGE,
			data: { author, message }
		});
	} catch (error) {
		dispatch({ type: SEND_MESSAGE_ERROR, error });
	}
};
