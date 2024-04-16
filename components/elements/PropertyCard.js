import React, { Component } from 'react';
import  Link from 'next/link';
import { withRouter } from 'next/router';
import qs from 'qs';
import Image from 'next/future/image'
// Utils
import isEmpty from '../../validation/is-empty';
import formatCurrency from '../../util/formatCurrency';
import slugify from '../../util/slugify';

// import components
import FeaturedImage from '../../images/featured-image.jpg';
import SaveButton from './SaveButton';

class PropertyCard extends Component {
	getShortDescription() {
		const { property } = this.props;
		let newString;

		if (property.propertyTypeDescription) {
			newString = property.propertyTypeDescription.split(/\s+/).slice(0, 20).join(' ');
		}

		return newString + '...';
	}

	render() {
		const { property } = this.props;

		const imageArray =
			!isEmpty(property.images) &&
			property.images[0].url &&
			property.images.filter(image => image.name.includes(property.name));

		const images =
			imageArray.length > 0 ? (
				imageArray.map((image, index) => {
					if (index > 1) {
						return;
					}
					return (
						<div key={index} className='image-block'>
							<Image src={image.url.replace(/(^\w+:|^)\/\//, 'https://')} alt={image.name} width={"273"} height={"300"}/>
						</div>
					);
				})
			) : property.images && property.images.length > 0 && property.images[0].url ? (
				property.images.map((image, index) => {
					if (index > 1) {
						return;
					}
					return (
						<div key={index} className='image-block'>
							<Image src={image.url.replace(/(^\w+:|^)\/\//, 'https://')} alt={image.name} width={"300"} height={"300"}/>
						</div>
					);
				})
			) : (
				<React.Fragment>
					<div className='image-block'>
						<Image src={FeaturedImage} alt='Placeholder' width={"300"} height={"300"} />
					</div>
					<div className='image-block'>
						<Image src={FeaturedImage} alt='Placeholder' width={"300"} height={"300"} />
					</div>
				</React.Fragment>
			);

		const query = this.props.router.query;

		const { dateFrom, dateTo, promoCode } = query;

		let price =
			!isEmpty(query) && property.rateAvailability
				? `${formatCurrency(property.rateAvailability.totals.gross)} for ${
						property.rateAvailability.nights
				  } night${property.rateAvailability.nights > 1 ? 's' : ''}`
				: 'Check availability';

		if (property.rateAvailability && property.rateAvailability.promoTotals.gross) {
			price = `${formatCurrency(property.rateAvailability.promoTotals.gross)} for ${
				property.rateAvailability.nights
			} night${property.rateAvailability.nights > 1 ? 's' : ''}`;
		}

		const to = {
			pathname: `/property/${slugify(property.areaName)}/${slugify(property.buildingName)}/${slugify(
				property.propertyTypeName
			)}`,
		};

		if (dateFrom && dateTo) {
			to['search'] = qs.stringify({
				dateFrom,
				dateTo,
			});
		}

		if (dateFrom && dateTo && promoCode) {
			to['search'] = qs.stringify({
				promoCode,
				dateFrom,
				dateTo,
			});
		}

		return (
			<div className='property-card'>
				<Link href={to}>
					<a>
					<div className='header'>
						<h2 className='heading'>{property.propertyTypeName}</h2>
						<SaveButton property={property} />
					</div>

					<div className='row no-gutters'>
						<div className='col-md-8'>
							<div className='left-content'>
								<div className='featured-images'>{images}</div>

								<div className='price'>
									<h3>{price}</h3>
									<button className='btn btn-secondary'>Book Now</button>
								</div>
							</div>
						</div>

						<div className='col-md-4'>
							<div className='property-info'>
								{/* <h3 className='address'>{property.location}</h3> */}

								<ul className='meta-info'>
									<li>
										<i className='fas fa-user fa-fw' /> {`Sleeps 1 - ${property.maxOccupancy}`}
									</li>
									<li>
										<i className='fas fa-map-marker-alt fa-fw' /> {property.location}
									</li>
								</ul>

								{property.propertyTypeDescription ? (
									<div className='description'>
										<p>{this.getShortDescription()}</p>
										<div className='cta-container'>
											<button className='btn btn-secondary'>Book Now</button>
										</div>
									</div>
								) : null}
							</div>
						</div>
					</div>
					</a>
				</Link>
			</div>
		);
	}
}

export default withRouter(PropertyCard);
