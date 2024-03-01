import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "next/router"
import qs from 'qs';
import  Link from 'next/link';

import { getProperties, getAvailableProperties, getSinglePropertyType } from '../../actions/propertiesActions';
import isEmpty from '../../validation/is-empty';

// import components
import Sidebar from '../elements/Sidebar';
import PropertyCard from '../elements/PropertyCard';
import Spinner from '../elements/Spinner';
import Filter from './Filter';
import Locations from '../home/Locations';
import Image from 'next/image'
import Cheltenham from '../../images/cheltenham/CC_Banner_2_.jpg';

const CheltenhamPara = () =>{
	return <>
	<p>After several years of successful trading across the Jockey Club’s full calendar of race meetings in Cheltenham, your favourite serviced accommodation provider, StayLets, has partnered up with Cube Modular Ltd and Cheltenham Tigers RFC, to bring a unique and never-before seen accommodation village within cheering distance of Cheltenham Racecourse for the coming festival in March 2024. Situated at the Tigers’ Newlands Park complex, only a 15 minute walk from the Grandstand, this is the closest accommodation you can get, short of sleeping in a stable!</p>
	
	<h6>Caboose Town Luxury Event Accommodation</h6>
	<p>Caboose Town is a temporary accommodation village offering stylish, compact, en-suite twin and double bedrooms all featuring individual covered terraces.</p>
<p>This luxury self-contained accommodation features a mix of twin bunk rooms and double bedrooms. The units feature comfortable beds with soft linens. Individual en-suite with flushing toilet, shower, wash basin and hot running water. Benefits also include hanging and storage space, USB sockets, LED lighting and reading lamps. Each unit has an individual outside deck covered by a sail shade.

Bookings are taken for a minimum of two nights, per unit, based on two people sharing. On site parking is available at additional cost.

Full on-site food and beverage options are available (additional cost) via our venue partner Cheltenham Tigers RFC, with clubhouse bar, optional cooked breakfast and evening food concessions all based on-site.</p>
 <p>
 All units are available, priced per nigh. Linens will be provided (but please bring your own towels), and parking and breakfast can be booked in advance, on request.
</p>
	<ul>
			<li>Security will be provided on site.</li>
			<li>Parking will be at own risk.</li>
			<li>There will be a speedy exit at the end of the races.</li>
		</ul>
	<p>We’re so excited to bring this village to Cheltenham for the first time, and hopefully it will be a staple of The Festival for years to come.</p>
<p>
To book, check availability, or send us any queries, please see below. And don’t forget, you only get the best rates direct through us!!!</p>
<p>
Rates from £125 per person, per night, per unit - minimum 2 night-stay
</p>
	</>
}



class OfferStaticpage extends Component {
	
	

	render() {
		

		return (
			<React.Fragment>
				<Filter />
				<div className='property-feed'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-9'>
								{/* <div>{properties}</div> */}
								<div className='village-design'>
									<div className='image-caption-center'>
									<h5 style={{marginTop:"10px"}}>Caboose Town @ The Festival, Cheltenham March 2024</h5>
									
									<Image
										src={Cheltenham}
										// alt={`${area.location}`}
										lazy="true"
										priority={80}
										/>
</div>
								<CheltenhamPara />
										<a href="/accommodation/cheltenham" className="btn btn-secondary">Book Now</a>
								</div>
									{/* <div class="property-card single-image">
   									<div class="header">
										<h2 class="heading">StayLets Village and Caboose Town @ The Festival, Cheltenham March 2023</h2>
									</div>
									<div class="row no-gutters">
										<div class="col-md-6">
											<div class="left-content">
											<div class="featured-images">
													<Image
														src={Cheltenham}
														// alt={`${area.location}`}
														lazy="true"
														priority={80}
													/>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="property-info extra-padding">
											<div class="award-image mobile">
													<img alt="Booking.com Traveller Review Awards 2021 for Spa Court. 9.3 out of 10 score." srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward-cheltenham.27930824.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward-cheltenham.27930824.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward-cheltenham.27930824.jpg&amp;w=1080&amp;q=75" width="500" height="500" decoding="async" data-nimg="future" loading="lazy"/>
												</div>
											<div class="description">
											<CheltenhamPara />
								<a href="/accommodation/cheltenham/caboose-town" class="btn btn-secondary">Book Now</a>
								</div>
								<div class="award-image desktop">
									<img alt="Booking.com Traveller Review Awards 2021 for Spa Court. 9.3 out of 10 score." srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward-cheltenham.27930824.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward-cheltenham.27930824.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward-cheltenham.27930824.jpg&amp;w=1080&amp;q=75" width="500" height="500" decoding="async" data-nimg="future" loading="lazy" />
										</div>
										</div>
										</div>
										</div>
								</div> */}
		
								
							</div>

							<div className='col-lg-3 d-none d-lg-block'>
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}


export default OfferStaticpage
