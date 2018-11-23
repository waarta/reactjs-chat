import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import Chat from "./components/Chat";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") middleware.push(createLogger());

const store = createStore(reducer, applyMiddleware(...middleware));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Chat />
				</div>
			</Provider>
		);
	}
}

export default App;
