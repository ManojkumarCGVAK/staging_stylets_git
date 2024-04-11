import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
	const responsive = {
		xs: {
			breakpoint: { max: 10000, min: 0 },
			items: 1,
		},
	};

	const testimonials = [
		{
			content:
				'Really lovely rooms, fairly small but decorated quite nicely. It was clean and using touch free exit keys and digital keys on your phone make it easier and safer to enter and exit building. Amazing location, just a short walk to the High St & main shopping bit. Really enjoyed our stay, and the manager of our room was nice enough to allow us to keep our luggage in the rooms for the morning Of check out so we didn’t have to run around Cheltenham with all of our bags and cases! Will definitely return and stay here again!',
			name: 'Jasmine',
		},
		{
			content:
				'An excellent stay. Clean, stylish, good location. Brilliant with swift, accurate responses when I asked a question or two. Great check-in/check-out system and top-notch Thanks Oliver for the great stay! Will be staying again when next back in the area.',
			name: 'Mark, Plymouth',
		},
		{
			content: 'Great communication. Clean Tidy Accurate photos.',
			name: 'Akash, London',
		},
		{
			content:
				'The room was sparkling clean and the bed was very comfortable. Walking distance from local pubs and shops and very easy check in process.',
			name: 'Charlotte, England',
		},
		{
			content: 'Good all round, thoroughly enjoyed our stay.',
			name: 'Hannah, England',
		},
	];
	return (
		<div className='container'>
			<div className='testimonials'>
				<div className='header'>
					<h3 className='heading'>Reviews</h3>
					<hr />
				</div>
				<Carousel
					responsive={responsive}
					swipeable={true}
					draggable={true}
					showDots={true}
					autoPlay={true}
					arrows={false}
					infinite={true}
					autoPlaySpeed={5000}
				>
					{testimonials.map((item,index) => (
						<div key={index.toString()}>
							<h4>&quot;{item.content}&quot;</h4>
							<small>- {item.name}</small>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;
