import React, { Component } from 'react';
import  Link  from 'next/link';
import Image from 'next/image'
import BicycleHub from '../../images/the-bicycle-hub.png';
import {withRouter} from "next/router"

class Sidebar extends Component {
	render() {
		return (
			<div className='properties-sidebar'>
				<div className='inner-content'>
					<div className='header'>
						<h3 className='heading'>Get in touch</h3>
					</div>

					<div className='content'>
						<p>
							You can book with us online via this website, you can call us or you can contact us using
							this form. We look forward to hearing from you.
						</p>

						<h4 className='call-us'>
							Call us on <a href='tel:+443301075622'>03301 075622</a>
						</h4>

						<Link href='/contact'>
							<a className='btn btn-secondary'>
							Contact Us
							</a>
						</Link>
					</div>
				</div>
				{this.props.router &&
					
					(this.props.router.asPath === '/accommodation/cheltenham/spa-court' ||
						this.props.router.asPath === '/accommodation/cheltenham') && (
						<div className='inner-content mt-2'>
							<div className='header'>
								<h3 className='heading'>On Your Bike!</h3>
							</div>

							<div className='content'>
								<p>
									<strong>
										Why not hire a bike from our friends at The Bicycle Hub and make the most of
										your time in Cheltenham and the Cotswolds?
									</strong>
								</p>
								<p>
									The Regency Cycle Trail is a great way to discover more about the UK&apos;s most complete
									Regency Town. The 6-mile trail takes in the sights of the town, with plenty of
									opportunities to stop for coffee, a bite to eat or some shopping. You can hire bikes
									from our friends at{' '}
									<a
										href='https://www.bicycle-hub.co.uk/hire-services'
										target='_blank'
										rel='noopener noreferrer'
									>
										The Bicycle Hub
									</a>
									, and they will deliver direct to our properties too!
								</p>
								<p>
									<strong>Prices from £19 per day</strong>
								</p>
								<p>
									More information:{' '}
									<a
										href='https://www.bicycle-hub.co.uk/hire-services'
										target='_blank'
										rel='noopener noreferrer'
									>
										https://www.bicycle-hub.co.uk/hire-services
									</a>
								</p>
								<p>
									Guests can book online via our website, call{' '}
									<a href='tel:01242231690'>01242 231690</a> or email{' '}
									<a href='mailto:info@bicycle-hub.co.uk'>info@bicycle-hub.co.uk</a>
								</p>

								<Image src={BicycleHub} alt='The Bicycle Hub' />
							</div>
						</div>
					)}
			</div>
		);
	}
}

export default withRouter(Sidebar)