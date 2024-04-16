import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const BookingPopup = () => {
	const [active, setActive] = useState(false);
	const [appear, setAppear] = useState(false);

	// Memoize the content JSX to avoid unnecessary re-renders
	const popupContent = useMemo(() => (
		<div className={`booking-popup__content ${active ? 'active' : ''}`}>
			<i onClick={() => setActive(false)} className="fas fa-times"></i>
			<h4>The only way to guarantee our best rates is to book direct</h4>
			<p>
				Email <a href="mailto:ask@staylets.co.uk">ask@staylets.co.uk</a> with your enquiry
				and join our mailing list for discounts next time you book
			</p>
			<Link href="/accommodation">
				<a className="btn btn-secondary">Accommodation</a>
			</Link>
		</div>
	), [active]); // Memoize based on the 'active' state

	// Apply the animation delay using useEffect
	React.useEffect(() => {
		setTimeout(() => {
			setAppear(true);
		}, 1500);
	}, []);

	return (
		<div className='booking-popup'>
			<div
				onClick={() => setActive(true)}
				className={`booking-popup__toggle ${appear ? 'active' : ''}`}
			>
				<h5>BOOK DIRECT</h5>
			</div>
			{popupContent}
		</div>
	);
};

export default BookingPopup;
