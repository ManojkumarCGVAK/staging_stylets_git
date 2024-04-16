import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import components
import FeaturedImage from '../../images/featured-image.jpg';

export default class Property extends Component {
	render() {
		const { property } = this.props;

		const filteredImages =
			property.images &&
			property.images[0].url &&
			property.images.filter(
				image => image.name.includes(property.name) || image.url
			);

		const featuredImage =
			filteredImages.length > 0 ? (
				<img src={filteredImages[0].url} alt={filteredImages[0].name ? filteredImages[0].name : "test_image"} />
			) : (
				<img src={FeaturedImage} alt='Placeholder' />
			);

		return (
			<div className='col-md-4 col-sm-6 col-lg-3'>
				<div className='property'>
					<Link href={`/property/${property.id}`}>
						<div className='property-card'>
							<div className='featured-image'>
								{featuredImage}
							</div>

							<div className='property-info'>
								<div className='meta-header'>
									<h4 className='name'>{property.name}</h4>
									<hr />
									<p className='bedrooms'>
										{property.buildingName}
									</p>
								</div>

								<ul className='meta-data'>
									<li>
										<i className='fas fa-user' />{' '}
										{`Sleeps 1 - ${property.maxOccupancy}`}
									</li>

									<li>
										<i className='fas fa-map-marker-alt' />{' '}
										{property.location}
									</li>
								</ul>
							</div>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}
