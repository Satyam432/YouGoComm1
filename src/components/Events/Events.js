import React from 'react';
import './Events.css'
import Stock from './stock.jpg'

const Events = () => {
	return <div >
		          <br/>
     			  <u><h1 className='StockCookerTitle'>Stock cooker</h1></u>
                  <div className='StockCooker w-50 '>
					  <img src={Stock} className='StockCookerLogo w-75 p-3 h-75 d-inline-block' />
					  <div className='StockCookerDescription'></div>
				  </div>
	</div>;
};

export default Events;
