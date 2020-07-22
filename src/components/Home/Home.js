import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.css';
import Logo from './logo.png';
const Home = () => {
	return (

			<div className='container'>
				<div className='row'>
					<div className='col-2'>


					</div>
					<div className='col-8'>
                       <img src={Logo} className='Logo'/>
                        <h1 className='LogoName'>YouGoComm</h1>
						<br/>
						<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
							<a href="#" className="navbar-brand">Academind</a>
							<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarMenu">
								<ul className="navbar-nav">
									<li className="nav-item">
										<a href="#" className="nav-link">Users</a>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link">Products</a>
									</li>
								</ul>
							</div>

						</nav>
						<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
								integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
								crossOrigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
								integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
								crossOrigin="anonymous"></script>
						<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
								integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
								crossOrigin="anonymous"></script>
					</div>
					<div className='col-2'>


					</div>
				</div>
			</div>

	);
};

export default Home;
