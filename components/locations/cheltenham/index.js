import React, { Component } from 'react';
import Image from 'next/future/image'
// Images
import HeroImage from '../../../images/hero-image.png';
import NeptuneImage from '../../../images/cheltenham/neptune.jpg';
import OfficeImage from '../../../images/cheltenham/offices.jpg';
import ParkImage from '../../../images/cheltenham/park.jpg';
import RaceCourseImage from '../../../images/cheltenham/racecourse.jpg';
import TownHallImage from '../../../images/cheltenham/town-hall.jpg';

// Components
import BlogPosts from '../../blog/BlogPosts';
import BookingPopup from '../../elements/BookingPopup';


class index extends Component {
	render() {
		const images = [
			{
				src: NeptuneImage,
				alt: 'Neptune statue in Cheltenham covered in snow',
			},
			{
				src: OfficeImage,
				alt: 'Municipal offices in Cheltenham from the outside',
			},
			{ src: ParkImage, alt: 'Cheltenham park with blue sky' },
			{
				src: RaceCourseImage,
				alt: 'Finishing line at the Cheltenham race course',
			},
			{
				src: TownHallImage,
				alt: 'Cheltenham town hall from the outside',
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
									<h1 className='heading'>Cheltenham</h1>
								</div>

								<div className='text-content'>
									<p>
										Cheltenham has recently rebranded itself &quot;The Festival Town&quot;. Described as the
										Cultural Capital of the Cotswolds an article on Cheltenham by the New York Times
										described the town as enjoying a cultural renaissance with many &quot;happening
										spots&quot;. The Independent called the town a &quot;Design Destination&quot; with stylish
										places to eat and drink.
									</p>

									<p>
										Cheltenham has so much to offer but the simple pleasures can sometimes be the
										best such as taking a stroll along the leaf-lined promenade as autumn falls on
										Cheltenham, experiencing many of the architectural and heritage features that
										can still be seen today. Being part of the Cotswolds, the town is highly
										regarded for its surrounding green acres. However, Cheltenham has plenty of
										greenery within the town including Imperial Square Gardens, Pittville Park and
										Montpellier Gardens which all provide glorious open space that is ideal for
										relaxation and recreation. At different points in the year they also act as a
										flexible venue for one of the many events that take place in the town.
									</p>

									<p>
										Renowned for its shopping, theatre and festivals, Cheltenham is truly a
										year-round town, with something for all interests and tastes. With a continental
										feel, enjoy Cheltenham&apos;s cafe culture, wrap up and grab a bite to eat al fresco
										or enjoy a drink or meal at some of the many high street and independent
										restaurants, cafes and bars across the town.
									</p>

									<p>
										The Wilson, Cheltenham&apos;s Museum & Art Gallery is home to an internationally
										significant museum collection of exceptional quality and variety and fine art
										collections, and their temporary gallery spaces offer an exciting programme of
										changing exhibitions. The birthplace of Gustav Holst is open to the public as a
										Museum, one of England&apos;s most respected composers, best known for his work The
										Planets. The museum is one of only two composer birthplaces open to the public
										in the country.
									</p>

									<p>
										In Cheltenham there is a myriad of bars and restaurants. From trendy independent
										cocktail bars to more traditional pubs and cuisine from all corners of the
										world, you will be spoilt for choice. For those seeking late night
										entertainment, there are plenty of late night bars and nightclubs to dance the
										night away. Cheltenham is a Purple Flag town meaning that it has been recognised
										nationally as one of the safest nights out.
									</p>

									<p>
										The Brewery Quarter is a buzzing district where old meets new and is home to
										branded eateries, a multi-screen cinema, bowling alley and bars offering live
										gigs and entertainment throughout the week.
									</p>

									<p>
										The jewel in Cheltenham’s crown is undoubtedly Cheltenham Racecourse and in
										particular the world renowned March Festival which sees over 250,000 people
										visit in March. The town though is also home to Cheltenham Town Football Club
										who play in Division Two and in July each year Cheltenham Boys College, hosts
										first class cricket at what is believed to be the longest running Cricket
										Festival in the world. In 2018 Cheltenham hosted a tour stage in the cycling
										Tour of Britain and in 2019, the Centaur, Cheltenham racecourse hosted the World
										Snooker Grand Prix.
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
					<BlogPosts location='Cheltenham' posts={this.props.posts} />
					{/* <BlogPosts location='Cheltenham' tag='Events' /> */}
					{/* <BlogPosts location='Cheltenham' tag='Locations' />
					<BlogPosts location='Cheltenham' tag='Activities' /> */}
				</section>
			</div>
		);
	}
}

export default index;
