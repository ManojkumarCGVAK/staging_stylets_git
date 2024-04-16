import React, { Component } from 'react';
import  Link  from 'next/link'
import Logo from '../../images/logo.gif';
import MarkeyGroup from '../../images/m-group.png';
import public_hearts from '../../images/public_hearts.jpg';
import Asap from '../../images/ASAP_new.jpg';
import Swla from '../../images/swla.jpg';
import Imagefu from 'next/future/image';


export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className='main-footer'>
					<div className='logo-section'>
						<Link href='/'>
							<a>
							<Imagefu src={Logo} alt='Stay Lets Logo' className='stay-logo' width='150' height='96' />
							</a>
						</Link>
						<a href='https://www.markeygroup.co.uk/' target='_blank' rel='noreferrer'>
							<Imagefu src={MarkeyGroup} alt='Markey Group Logo' className='group-logo' width='50' height='50' />
						</a>
					</div>

					<div className='text-section'>
						<small>
							For stays longer than a week at any of our properties, please contact us direct for the best
							available quote: <a href='mailto:bookings@staylets.co.uk?subject=Website Enquiry'>bookings@staylets.co.uk</a>
						</small>
					</div>

					<div className='accreditations'>
						<a
							href='https://staywithconfidence.com/'
							target='_blank'
							rel='noreferrer'
						>
							<Imagefu src={Asap} alt='The Association of Serviced Apartment Providers' width='70' height='70' />
						</a>
						<a href='https://www.landlordssouthwest.co.uk/' target='_blank' rel='noreferrer'>
							<Imagefu src={Swla} alt='South West Landlords Association' width='163' height='70' />
						</a>
					</div>
<a
							href='#'
							// target='_blank'
							rel='noreferrer'
							style={{zIndex:1}}
						>
							<Imagefu src={public_hearts} alt='isaap Compliance Assured Provider' width='208' height='107' />
						</a>
					<div className='contact-section'>
						<div className='inner-content'>
							<div className='icons'>
								<a
									href='https://twitter.com/staylets1'
									target='_blank'
								 	rel='noreferrer'
									aria-label="Visit our Twitter profile"
								 >
									<i className='fab fa-twitter' />
								</a>

								<a
									href='https://www.facebook.com/StayLets/'
									target='_blank' 
									rel='noreferrer'
									aria-label="Visit our Facebook profile"
								>
									<i className='fab fa-facebook' />
								</a>

								<a
									href='https://www.linkedin.com/company/52199067/'
									target='_blank'
									rel='noreferrer'
									aria-label="Visit our Linkedin profile"
								>
									<i className='fab fa-linkedin' />
								</a>
							</div>

							<div className='info'>
								<p className='phone'>
									Call us on <a href='tel:+443301075622'>03301 075622</a>
								</p>

								<Link href='/contact'>
									<a className='btn btn-white'>
									Contact Us
									</a>
								</Link>
							</div>
						</div>
					</div>
				</footer>

				<div className='small-footer'>
					<div className='container'>
						<div className='content'>
							<div className='links'>
								<ul>
									<li>
										<Link href='/privacy-policy'>Privacy Policy</Link>
									</li>
									<li>
										<Link href='/cookie-policy'>Cookie Policy</Link>
									</li>
									<li>
										<Link href='/terms-and-conditions'>Terms & Conditions</Link>
									</li>
								</ul>
							</div>

							<div className='brace'>
								<p>
									Website created by
									{' '}
									<a href='https://www.brace.co.uk' target='_blank' rel='noopener noreferrer'>
										Brace Creative Agency
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
