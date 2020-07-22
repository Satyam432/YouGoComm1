import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.css';
import Logo from './logo.png';
const Home = () => {
	return (
		<div className='container'>
			<div className='row align-items-center'>
				<div className='col-3 col-md-2 offset-md-3'>
					<img src={Logo} className='img-fluid' alt='logo' />
				</div>
				<div className='col-9 col-md-7'>
					<h1 className='m-0 p-0'>YouGoComm</h1>
				</div>
			</div>
			<div className='row m-auto'>
				<div className='col-8 offset-2'>
					<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
						<a href='#' className='navbar-brand'>
							Academind
						</a>
						<button
							className='navbar-toggler'
							data-toggle='collapse'
							data-target='#navbarMenu'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarMenu'>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<a href='#' className='nav-link'>
										Users
									</a>
								</li>
								<li className='nav-item'>
									<a href='#' className='nav-link'>
										Products
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Home;
