import React, { Component } from "react";
import { connect } from "react-redux";

class Message extends Component {
	render() {
		return (
			<div>
				<p style={{ color: "grey" }}>{this.props.message.author} :</p>
				<p>{this.props.message.message}</p>
				<p>{this.props.message.date}</p>
			</div>
		);
	}
}

export default connect()(Message);
