import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/events' component={Events} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
