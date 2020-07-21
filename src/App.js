import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
