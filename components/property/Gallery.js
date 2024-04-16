import React from 'react';
import ImageGallery from 'react-image-gallery';

const Gallery = props => {
	return (
		<ImageGallery
			items={props.images}
			showFullscreenButton={false}
			autoPlay={true}
		/>
	);
};

export default Gallery;
