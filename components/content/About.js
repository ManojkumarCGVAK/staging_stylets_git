import React from 'react';
// Components
import ContentPage from './ContentPage';
import BookingPopup from '../elements/BookingPopup';

// Images
import RoomImage from '../../images/about/about1.jpg';
import TowelImage from '../../images/about/about2.jpg';
import KeysImage from '../../images/about/about3.jpg';
import DoorImage from '../../images/about/about4.jpg';
import BedImage from '../../images/about/about5.jpg';

const About = () => {
	const images = [
		{
			src: RoomImage,
			alt: 'Tourist looking out of bedroom window next to suitcase',
		},
		{ src: TowelImage, alt: 'Folded towels being put on bed' },
		{
			src: KeysImage,
			alt: 'Keys being handed over with a suitcase in the background',
		},
		{
			src: DoorImage,
			alt: 'Door being opened with a bed & some chairs in the background',
		},
		{ src: BedImage, alt: 'Close up of a double bed with orange cushions' },
	];

	return (
		<ContentPage heading='About Us' images={images}>
			
			<BookingPopup />

			<div className='text-content'>
				<p>
					We all want comfort, value and flexibility when we’re looking for accommodation these days, no
					matter the reason whether it is business or pleasure. If you’re tired of scruffy “budget”
					accommodation, dusty B&Bs, or the rules and restrictions that come with often characterless hotels,
					then look no further than StayLets.
				</p>

				<p>
					Our aim is very simple – to provide you with accommodation that offers quality, comfort, value for
					money and that feeling of being appreciated. At StayLets you aren’t just another number, or a
					nuisance, like many hotels make you feel. You are our guest.
				</p>

				<p>
					We offer modern design, with maximum comfort. Freedom to explore, to work, to find peace, to visit
					and experience… StayLets you do this, on your own terms.
				</p>

				<p>
					We offer the best of hospitality without the small print – embracing reliability, value, ease of
					use, technology, safety and integrity – all combined with personal service dedicated to your comfort
					and convenience, and with a sustainable approach to minimise wastefulness and the disposable nature
					of the hotel world.
				</p>

				<p>
					Within our portfolio of small luxury serviced apartments, we can give you the perfect base to
					explore some of the buzziest parts of the country, brimming with culture, sport and fun. And we
					cater to all.
				</p>

				<p>
					<strong>
						Just getting away for some quality time and the opportunity to explore a new part of the UK?
					</strong>{' '}
					...StayLets you
				</p>

				<p>
					<strong>Visiting friends, family, offspring at Uni or boarding school?</strong> …StayLets you
				</p>

				<p>
					<strong>Want to keep visiting relatives at arms length?!</strong> …StayLets you
				</p>

				<p>
					<strong>Spending time in the area for a work project, contract, secondment or training?</strong>{' '}
					…StayLets you do that too
				</p>

				<p>
					<strong>Need a base to lie low whilst the builders are in or relocating?</strong> …StayLets you
				</p>

				<p>
					<strong>Researching somewhere to relocate to?</strong> …StayLets you
				</p>

				<p>
					Explore our properties and book seamlessly online. Check in and access your accommodation through
					secure technology – reliable, quick and without fuss.
				</p>

				<p>
					We welcome everyone, and our accommodation caters to that. Simple comfortable studios for a short
					stay, larger more equipped units for an extended visit, and more than enough room for whole families
					(little ones are always welcome) and friends to come together for whatever the reason.
				</p>

				<p>
					Want a human being to have a chat to? No problem, we’re always on hand, and our team comes with a
					proven track record of care and consideration for a variety of guests. Want your loyalty to us
					acknowledged and rewarded? With direct booking perks and discounts, as well as reduced rates for
					extended stays, we have that covered as well.
				</p>
			</div>
		</ContentPage>
	);
};

export default About;
