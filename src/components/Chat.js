import React, { Component } from "react";
import Message from "./Message";
import { connect } from "react-redux";
import { newMessages, send } from "../actions/action";

class Chat extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getText = element => {
			this.text = element;
		};
	}

	async componentDidMount() {
		await fetch("http://chat.1z1.fr/", { credentials: "include" });
		const url = new URL("http://chat.1z1.fr/hub");
		url.searchParams.append("topic", "general");
		const eventSource = new EventSource(url);
		eventSource.addEventListener("message", this.props.newMessages);
	}

	handleSubmit(event) {
		if (this.text.value !== "") {
			event.preventDefault();
			this.props.send("Melvyn", this.text.value);
			this.text.value = "";
		}
	}

	render() {
		return (
			<div>
				<div>
					{this.props.messages.map((mes, i) => (
						<Message key={i} message={mes} />
					))}
				</div>
				<div>
					<form action="#" onSubmit={this.handleSubmit}>
						<label>
							<input ref={this.getText} type="text" name="message" />
						</label>
						<button onClick={this.sendMessage}>Send</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	messages: state.messages.messages
});

function mapDispatchToProps(dispatch) {
	return {
		newMessages: msg => dispatch(newMessages(msg)),
		send: (author, message) => dispatch(send(author, message))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
