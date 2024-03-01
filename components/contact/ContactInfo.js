import React from 'react';

export default function ContactInfo() {
	return (
		<div className='contact-info'>
			<div className='info-section'>
				<h3 className='heading'>Phone</h3>
				<a href='tel:+443301075622'>03301 075622</a>
			</div>

			{/* <div className='info-section'>
				<h3 className='heading'>Address</h3>
				<p>
					1E Worcester Street <br />
					Gloucester <br />
					GL1 3AJ
				</p>
				<a
					href='https://goo.gl/maps/MqjSCCFJbMJZ2zqZ9'
					target='_blank'
					rel='noopener noreferrer'
				>
					View on Google Maps
				</a>
			</div> */}

			{/* <div className='info-section'>
				<h3 className='heading'>Opening Times</h3>
				<p>
					Mon - Fri <br />
					9am - 4pm
				</p>
			</div> */}

			<div className='info-section'>
				<h3 className='heading'>Email</h3>
				<a href='mailto:bookings@staylets.co.uk?subject=Website Enquiry'>
					bookings@staylets.co.uk
				</a>
			</div>
		</div>
	);
}
