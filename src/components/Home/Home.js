import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Link to='/login'>Home</Link>
		</div>
	);
};

export default Home;
