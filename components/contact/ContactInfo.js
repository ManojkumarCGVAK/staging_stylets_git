import React from 'react';

export default function ContactInfo() {
	return (
		<div className='contact-info'>
			<div className='info-section'>
				<h3 className='heading'>Phone</h3>
				<a href='tel:+443301075622'>03301 075622</a>
			</div>

			<div className='info-section'>
				<h3 className='heading'>Email</h3>
				<a href='mailto:bookings@staylets.co.uk?subject=Website Enquiry'>
					bookings@staylets.co.uk
				</a>
			</div>
		</div>
	);
}
