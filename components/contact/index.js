import React, { Component } from 'react';
// import components
import HeroImage from '../../images/hero-image.png';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Image from 'next/future/image'
// import MapFooter from './MapFooter';

export default class index extends Component {
	render() {
		return (
			<div className='contact-page'>
				<section className='hero'>
					<div className='container'>
						<Image src={HeroImage} alt='Bedroom' />
					</div>
				</section>

				<div className='main-content'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-7 order-2 order-md-1'>
								<ContactForm />
							</div>
							<div className='col-md-5 order-1 order-md-2'>
								<ContactInfo />
							</div>
						</div>
					</div>
				</div>

				{/* <MapFooter /> */}
			</div>
		);
	}
}
