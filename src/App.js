import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Link,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { APP } from "./Store";
import Form from "./pages/Form.jsx";

function App() {
	const appStore = APP.useState();
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/">
						<div>Welcome to shuffler app</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
