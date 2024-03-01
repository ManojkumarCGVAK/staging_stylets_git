import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Image from 'next/image';

// import components
import Filter from './Filter';
import { getProperties } from '../../actions/propertiesActions';
import SellingPoints from '../elements/SellingPoints';
import Gallery from '../property/Gallery';
import ContactForm from '../contact/ContactForm';

// Images
import London from '../../images/london.jpg';
import MagnaHouse from '../../images/buildings/magna-house.jpg';
import CentralLondon from '../../images/central-london.jpg';
import Bedroom from '../../images/buildings/bedroom.jpg';
import Lounge from '../../images/buildings/property.jpg';
import Lounge2 from '../../images/buildings/lounge2.jpg';
import Bathroom from '../../images/buildings/bathroom.jpg';
import Bedroom2 from '../../images/buildings/bedroom2.jpg';
import Bedroom3 from '../../images/buildings/bedroom3.jpg';
import Kitchen from '../../images/buildings/kitchen.jpg';
import Town from '../../images/town.jpg';

const items = [
	{
		image: CentralLondon,
		text: '45 minute train ride from Central London',
	},
	{
		image: Lounge,
		text: '1, 2 or 3 bed apartments',
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

class Surrey extends Component {
	componentDidMount() {
		this.props.getProperties();
	}

	render() {
		return (
			<div className='landing-page'>
				
				<section
					className='hero'
					style={{
						backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${London.src})`,
					}}
				>
					<Filter />
				</section>

				<section className='inner-page'>
					<div className='container'>
						<div className='selling-points-section'>
							<h3 className='heading'>Stylish Accommodation Near London</h3>
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
									Our stylish, beautifully decorated and well appointed comfortable apartments come
									with all the comforts of home away from home, ideal for either short or long stays.
								</p>
								<p>
									Competitively priced fully furnished accommodation, much more competitive than
									hotels for longer stays.
								</p>
								<p>
									Self contained living accommodation with a kitchen area and plenty of space to relax
									and free wifi.
								</p>
								<p>
									Areas where you can work if you need to. The freedom to come and go as you see fit.
								</p>
								<p>
									Online booking or speak to one of our team. We pride ourselves on our highly
									personable approach. Our team has a proven track record of care and consideration
									for our guests.
								</p>
								<p>
									Our locations are conveniently located with great transport connections and local
									amenities.
								</p>
								<p>
									StayLets continues to operate our serviced apartments despite the Coronavirus
									situation, to ensure our properties are available, particularly for those who find
									themselves unable to return home or for those whose work demands that they
									temporarily stay away from home. That is not to say though that we are not taking
									special precautions. With our un-manned sites and remote access capabilities, human
									contact is kept to a minimum. In many respects we consider that we offer the perfect
									accommodation if you are looking to limit your interaction with others. Each
									apartment or studio offers a fully equipped kitchen, en suite bathroom, and double
									bed – everything that you might need.
								</p>
							</div>
						</div>
					</div>

					<div className='container'>
						<div className='landing-gallery'>
							<div className='landing-gallery__left'>
								<div className='header'>
									<h3 className='heading'>Looking for Accommodation Near London?</h3>
									<hr />
								</div>
								<p>
									If you are looking for accommodation in near London then Magna House in Surrey,
									Egham could be just what you are looking for. Our new purpose-built property is just
									5 minutes walk from Egham Train Station, which is only a 45-minute train ride from
									Central London (so just a short commute). Choose from our attractive range of
									studio, 1, 2 or 3-bed apartments, which are ideal whether your stay is for business
									or leisure.
								</p>
								<p>
									All our rooms are available can be booked on a short term lets basis with stays from
									1 night to 365 nights (ask about our discounts for stays of over 7 nights). Magna
									House has free parking and all our rooms are furnished with high-quality bed linen
									and towels, Smart TVs and our high-speed wifi and all utilities are included in the
									price we quote.
								</p>

								<Link href='/accommodation/egham'>
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

					<div className='container'>
						<div className='landing-gallery'>
							<div className='landing-gallery__left'>
								<Image src={Town} alt='Guildfor Town Street' />
							</div>
							<div className='landing-gallery__right'>
								<div className='header'>
									<h3 className='heading'>Why Choose Surrey?</h3>
									<hr />
								</div>
								<p>
									Surrey in the South East of England is a county full of surprises, just a short
									journey from London but set away for the capital’s hustle and bustle. There is so
									much to see and do in Surrey with wonderful attractions, a rich history and culture.
									Surrey has fantastic road links and the county’s vibrant market towns offer a great
									mix of shops and tasty variety of places to eat and drink as well. Then there are
									the picture postcard villages which keep people coming back to Surrey again and
									again.
								</p>
								<p>
									We hope you will agree that whatever your requirements, Magna House could be the
									perfect solution. So why not check availability and make your booking now?
								</p>
							</div>
						</div>
					</div>

					<div className='container'>
						<div className='landing-map'>
							<div className='landing-map__left'>
								<div className='landing-map__left--content'>
									<h3>Choose Your Ideal Appartment</h3>
									<p>
										View our range of Studio or 1, 2, and 3 bedroom furnished apartments in our new
										purpose-built property
									</p>
									<Link href='/accommodation/egham/magna-house'>
										<a className='btn btn-secondary'>
											View Apartments
										</a>
									</Link>
								</div>
							</div>
							<div className='landing-map__right'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39803.57293214614!2d-0.5682059398110887!3d51.42650917161703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x978c424b167bae5e!2sMagna%20House!5e0!3m2!1sen!2suk!4v1586177512927!5m2!1sen!2suk'
									width='800'
									height='600'
									frameBorder='0'
									style={{ border: 0 }}
									allowFullScreen=''
									aria-hidden='false'
									tabIndex='0'
								></iframe>
							</div>
						</div>
					</div>
				</section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Surrey);
