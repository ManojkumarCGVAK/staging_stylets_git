import React, { Component } from 'react';
import Image from 'next/future/image'
// Images
import HeroImage from '../../../images/hero-image.png';
import TownImage from '../../../images/surrey/town.jpg';
import RiverImage from '../../../images/surrey/river.jpg';
import BridgeImage from '../../../images/surrey/bridge.jpg';

// Components
import BlogPosts from '../../blog/BlogPosts';
import BookingPopup from '../../elements/BookingPopup';

class index extends Component {
	render() {
		const images = [
			{
				src: TownImage,
				alt: 'Street in Guildford at night',
			},
			{
				src: RiverImage,
				alt: 'Stepping Stones over the river Mole at the foot of Box Hill, Surrey, UK',
			},
			{
				src: BridgeImage,
				alt: 'Colorful sky at sunset over Chertsey Bridge, Surrey, UK',
			},
		];

		return (
			<div className='content-page'>
				<BookingPopup />

				<section className='hero'>
					<div className='container'>
						<Image src={HeroImage} alt='Bedroom' />
					</div>
				</section>

				<section className='main-content'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 mx-auto'>
								<div className='header'>
									<h1 className='heading'>Surrey</h1>
								</div>

								<div className='text-content'>
									<p>
										Surrey in the south-east of England is a county full of surprises. Just a short
										journey from London but a million miles from the capital’s hustle and bustle.
									</p>

									<p>
										There is so much to see and do in Surrey, with wonderful attractions, a rich
										history and culture.
									</p>

									<p>
										Egham is an ideal base whether you are planning day trips in to London or you
										simply want to explore the rolling countryside and vast woodlands. As reputedly
										England’s leafiest county you’ll discover the Surrey Hills Areas of Outstanding
										Natural Beauty (AONB), complete with the highest point in the south east of
										England, Leith Hill. Surrey has also got expanses of ancient heathland,
										beautiful stretches of waterways and many stunning scenic landscapes for you to
										discover!
									</p>

									<p>
										Egham is a town in the Runnymede borough of Surrey. It is part of the London
										commuter belt and has its own railway station. It is conveniently located close
										to junction 13 of the M25 motorway and is situated 19 miles from London. It can
										be considered a university town as it has on its higher part, Egham Hill, the
										campus of Royal Holloway, University of London. Not far from Egham is Runnymede,
										where the historic document the Magna Carta was sealed.
									</p>

									<p>
										Surrey’s vibrant market towns offer a great mix of shops and tasty variety of
										places to eat and drink as well as the picture postcard English villages
										ensuring people return to Surrey time and time again.
									</p>

									<p>
										Egham, Surrey is a great base to discover the delights of the home counties of
										England, as well as the great attractions London has to offer.
									</p>
								</div>
							</div>

							{images && (
								<div className='col-md-4'>
									<div className='images-container'>
										{images
											? images.map((image, index) => (
													<Image src={image.src} alt={image.alt} key={index} />
											  ))
											: null}
									</div>
								</div>
							)}
						</div>
					</div>
				</section>

				<section className='inner-page'>
					<BlogPosts posts={this.props.posts} location={this.props.location} />
				</section>
			</div>
		);
	}
}

export default index;
