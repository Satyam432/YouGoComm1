import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
	return <div>
		<br/><br/>
		<div className='row m-auto'>
			<div className='col-8 offset-2'>
				<nav className='navbar navbar-expand-md navbar-light bg-light'>
					<Link to='/' className='navbar-brand'>
						YouGoComm
					</Link>
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
								<Link to='/' className='nav-link'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='portfolio' className='nav-link'>
									Portfolio
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='events' className='nav-link'>
									Events
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>


	</div>;
};

export default Footer;
