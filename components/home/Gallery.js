import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

// Images
import item1 from '../../images/gallery/item1.jpg';
import item2 from '../../images/gallery/item2.jpg';
import item3 from '../../images/gallery/item3.jpg';
import item4 from '../../images/gallery/item4.jpg';
import item5 from '../../images/gallery/item5.jpg';
import item6 from '../../images/gallery/item6.jpg';
import item7 from '../../images/gallery/item7.jpg';
import item8 from '../../images/gallery/item8.jpg';
import item9 from '../../images/gallery/item9.jpg';
import item10 from '../../images/gallery/item10.jpg';
import item11 from '../../images/gallery/item11.jpg';
import item12 from '../../images/gallery/item12.jpg';

const images = [
	item1,
	item2,
	item3,
	item4,
	item5,
	item6,
	item7,
	item8,
	item9,
	item10,
	item11,
	item12,
];

const Gallery = () => {
	const responsive = {
		max: {
			breakpoint: { max: 10000, min: 1440 },
			items: 5,
		},
		xxl: {
			breakpoint: { max: 1440, min: 1200 },
			items: 4,
		},
		xl: {
			breakpoint: { max: 1200, min: 992 },
			items: 3,
		},
		lg: {
			breakpoint: { max: 992, min: 440 },
			items: 2,
		},
		xs: {
			breakpoint: { max: 440, min: 0 },
			items: 1,
		},
	};
	return (
		<div className='image-carousel'>
			<Carousel
				responsive={responsive}
				autoPlay={true}
				showDots={false}
				infinite={true}
				arrows={false}
			>
				{images.map((item, index) => (
					<div key={index} className='image-carousel__image'>
						<Image src={item} alt='Property'  />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Gallery;
