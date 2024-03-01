import React, { Component } from 'react';
import  Link  from 'next/link';
import { connect } from 'react-redux';
import { Link as SmoothLink } from 'react-scroll';

// import components
import Filter from './Filter';
import Locations from './Locations';
import { getProperties } from '../../actions/propertiesActions';
import Spinner from '../elements/Spinner';
import SellingPoints from '../elements/SellingPoints';
import Gallery from '../property/Gallery';
import ContactForm from '../contact/ContactForm';
import TermsModal from '../elements/TermsModal';

// Images
import MagnaHouse from '../../images/buildings/magna-house.jpg';
import Bistro from '../../images/bistro.jpg';
import Bedroom from '../../images/buildings/bedroom.jpg';
import Lounge from '../../images/buildings/property.jpg';
import Lounge2 from '../../images/buildings/lounge2.jpg';
import Bathroom from '../../images/buildings/bathroom.jpg';
import Bedroom2 from '../../images/buildings/bedroom2.jpg';
import Bedroom3 from '../../images/buildings/bedroom3.jpg';
import Kitchen from '../../images/buildings/kitchen.jpg';

const items = [
	{
		image: Lounge,
		text: 'Competitively priced accommodation',
	},
	{
		image: Bistro,
		text: 'Great transport connections and local amenities',
	},
	{
		image: Bedroom,
		text: 'Fully furnished - stay from 1 night to 365',
	},
];

const images = [MagnaHouse, Bedroom, Lounge, Lounge2, Bathroom, Bedroom2, Bedroom3, Kitchen];

const imageArray = images.map(image => {
	return { original: image.src, thumbnail: image.src };
});

class CorporateOffer extends Component {
	componentDidMount() {
		this.props.getProperties();
	}

	render() {
		const properties = this.props.loading ? <Spinner /> : <Locations />;

		return (
			<div className='landing-page'>
				<section
					className='hero'
					style={{
						backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) ), url(${MagnaHouse.src})`,
					}}
				>
					{/* <Filter /> */}
					<h2>Book Your Free Stay Today</h2>
					<SmoothLink to='landing-contact' smooth={true} offset={-70} className='btn btn-secondary'>
						Book Now
					</SmoothLink>
				</section>

				<section className='inner-page'>
					<div className='container'>
						<div className='selling-points-section'>
							<h3 className='heading'>Corporate Accommodation in Cheltenham & Surrey</h3>
							{/* <SmoothLink
								to='landing-contact'
								smooth={true}
								offset={-70}
								className='btn btn-secondary mb-5'
							>
								Book Your Free Stay Today
							</SmoothLink> */}
							<SellingPoints items={items} />
						</div>
					</div>

					<div className='landing-text'>
						<div className='container'>
							<div className='header'>
								<h3 className='heading'>Why Choose Us?</h3>
								<hr />
							</div>
							<div className='content'>
								<p>
									StayLets are a small, fully compliance and quality accredited, privately-owned
									serviced accommodation provider in Cheltenham, Gloucestershire and Egham near
									Windsor, Surrey (with great accessibility to London). At StayLets we offer short let
									serviced apartments and studios available for stays from 1 to 365 nights a year, so
									suitable for all manner of business engagements and requirements.
								</p>
								<p>
									Our accommodation options are great for all kinds of business and corporate stays -
									suppliers, contractors, or longer-term stays. But what makes us a great option for
									business, work and corporate stays?
								</p>
							</div>
						</div>
					</div>

					<div className='container'>
						<div className='landing-gallery'>
							<div className='landing-gallery__left'>
								<div className='header'>
									<h3 className='heading'>Purpose Built Accommodation</h3>
									<hr />
								</div>
								<p>
									Our stylish recently renovated accommodation offers all the comforts of home away
									from home.
								</p>
								<p>
									Competitively priced accommodation, much more competitive than hotels for longer
									stays.
								</p>
								<p>
									Self-contained living accommodation with a kitchen area and plenty of space to relax
									and free Wi-Fi. Areas where you can work if you need to and the freedom to come and
									go as you see fit.
								</p>
								<p>
									Convenient online booking is available or speak to one of our team. We pride
									ourselves on our highly personable approach. Our team has a proven track record of
									care and consideration for our guests.
								</p>
								<p>
									Our locations are conveniently located with great transport connections and local
									amenities.
								</p>
								<Link href='/accommodation'>
									<a className='btn btn-secondary'>
										Book Now
									</a>
								</Link>
							</div>
							<div className='landing-gallery__right'>
								<Gallery images={imageArray} />
							</div>
						</div>
					</div>

					{properties}

					<div className='container'>
						<div id='landing-contact' className='landing-contact'>
							<div className='landing-contact__left'>
								<div className='landing-contact__left--content'>
									<h3>Book Your Free Stay Today</h3>
									<p>
										We are offering a one night free stay for potential corporate customers, book
										today and take the opportunity to experience our purpose built, professional
										apartments for free! Please see our terms and conditions below and contact us to
										book your free stay through the following form:
									</p>
									<button
										type='button'
										className='btn btn-secondary'
										data-toggle='modal'
										data-target='#termsModal'
									>
										T&Cs
									</button>
								</div>
							</div>
							<div className='landing-contact__right'>
								<ContactForm pageSource='Corporate Offer Page' addCompanyField={true} />
							</div>
						</div>
					</div>
				</section>
				<TermsModal />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.properties.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProperties: config => dispatch(getProperties(config)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CorporateOffer);
