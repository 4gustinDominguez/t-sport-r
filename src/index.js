import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss";
import "./assets/demo/demo.css";

import indexRoutes from './routes/index';

const history = createHistory();

ReactDOM.render(

	<Router history={history}>
		<Switch>
			{indexRoutes.map((prop, key) => {
				return <Route path={prop.path} key={key} component={prop.component} />;
			})}
		</Switch>
	</Router>
	,
	document.querySelector('#root')
);
