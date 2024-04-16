import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head'
import Link from 'next/link';
import {withRouter} from 'next/router'
import { 
	getProperties,
	getSingleProperty,
	getSinglePropertyType,
	getSingleAvailability,
	clearSingleAvailability,
} from '../../actions/propertiesActions';
import Header from './Header';
import Featured from '../../images/featured-image.jpg';
import Gallery from './Gallery';
import PropertyInfo from './PropertyInfo';
import RightSidebar from './RightSidebar';
import Spinner from '../elements/Spinner';
import Filter from './Filter';
import isEmpty from '../../validation/is-empty';
import EnquiryModal from './EnquiryModal';
import BookingModal from './BookingModal';
import Dialog from '@material-ui/core/Dialog'

class index extends Component {

	state = {
		isBooking:false,
		isEnquiry:false
	}

	dialogOpen = (typeofDialog) =>{
		if(typeofDialog==='booking') return this.setState((old)=>({isBooking:!old.isBooking}))
		if(typeofDialog==='enquiry') return this.setState((old)=>({isEnquiry:!old.isEnquiry}))
	}

	componentDidMount() {
		this.props.getProperties();
	}

	componentDidUpdate(prevProps) {
		let propertyIdentifier;
		

		if (prevProps.all !== this.props.all) {
			const { location, building, propertyType } = this.props.router.query;

			this.props.getSinglePropertyType({
				location,
				building,
				propertyType,
			});
		}

		if (prevProps.singlePropertyType !== this.props.singlePropertyType && this.props.singlePropertyType?.properties[0]) {
			
			const { id, propertyType, propertyTypeName } = this.props.singlePropertyType?.properties[0];
			propertyIdentifier = id
			this.props.getSingleProperty(propertyIdentifier);

			const query = this.props.router.query;

			if (!isEmpty(query)) {
				const { dateFrom, dateTo, promoCode } = query;

				if (dateFrom && dateTo) {
					const query = {
						dateFrom,
						dateTo,
						propertyType,
						propertyTypeName,
						location: this.props.router.query.location,
						promoCode,
						grouping: 'UNIT_TYPE',
					};
					
					return this.props.getSingleAvailability(query);
				}
			}
		}

		if (prevProps.router.query !== this.props.router.query) {
			const query = this.props.router.query;
			const { propertyType, propertyTypeName } =  Array.isArray(this.props.singlePropertyType?.properties) && this.props.singlePropertyType?.properties.at(0);

			if (!isEmpty(query)) {
				const { dateFrom, dateTo, promoCode } = query;

				if (dateFrom && dateTo) {
					const query = {
						dateFrom,
						dateTo,
						propertyType,
						propertyTypeName,
						location: this.props.router.query.location,
						grouping: 'UNIT',
						promoCode,
					};
					this.props.getSingleAvailability(query);
				}
			}
		}
		
		if (prevProps.availability !== this.props.availability && this.props.availability !== 'unavailable') {
			const { id } = this.props.availability;
			this.props.getSingleProperty(id);
		}
	}

	componentWillUnmount() {
		this.props.clearSingleAvailability();
	}

	render() {
		const { propertyTypeName: name, images } = this.props.singleProperty;

		let imageArray = [
			{
				original: Featured.src,
				thumbnail: Featured.src,
				originalAlt: 'Placeholder',
				thumbnailAlt: 'Placeholder',
			},
		];

		const filteredImages =
			images && images[0].url && images.filter(image => image.name && image.name.includes(name));

		if (images && images.length > 0 && images[0].url) {
			imageArray = images.map(image => {
				return {
					original: image.url,
					thumbnail: image.url,
					originalAlt: image.name,
					thumbnailAlt: image.name,
				};
			});
		}

		if (filteredImages && filteredImages.length > 0) {
			imageArray = filteredImages.map(image => {
				return {
					original: image.url,
					thumbnail: image.url,
					originalAlt: image.name,
					thumbnailAlt: image.name,
				};
			});
		}
		
		const details = this.props.loading ? (
			<Spinner />
		) : (
			<React.Fragment>
				{this.props.availability === 'unavailable' && (
					<div className='no-content-wrapper'>
						<div className='container'>
							<div className='no-content'>
								<h3 className='heading'>
									We’re afraid that we don’t have any availability for those dates – please search for
									different dates or view our other properties to see what’s available
								</h3>

								<Link href='/accommodation'>
									<a className='btn btn-secondary'>
									View all properties
									</a>
								</Link>
							</div>
						</div>
					</div>
				)}
				<section className='property-page'>
					<Head>
						<title>{name ? name : 'Property'}</title>
					</Head>

					<div className='container'>
						<div className='row'>
							<div className='col-md-8'>
								<Header property={this.props.singleProperty} />
							</div>
						</div>

						<div className='main-content'>
							<div className='row'>
								<div className='col-md-8'>
									<Gallery property={this.props.singleProperty} images={imageArray} />

									<Filter property={this.props.singleProperty} />

									<RightSidebar
										property={this.props.singleProperty}
										availability={this.props.availability}
										classes='mobile'
										dialogOpen={this.dialogOpen}
									/>

									<PropertyInfo property={this.props.singleProperty} />

									<div className='cta-request d-md-none'>
										<div className='call'>
											<p>
												Call us on <a href='tel:+443301075622'>03301 075622</a>
											</p>
										</div>

										<button
											type='button'
											className='btn btn-secondary'
											data-toggle='modal'
											data-target='#enquiryModal'
										>
											Request Details
										</button>
									</div>
								</div>
								<div className='col-md-4'>
									<RightSidebar
										property={this.props.singleProperty}
										availability={this.props.availability}
										dialogOpen={this.dialogOpen}
									/>
								</div>
							</div>
						</div>
					</div>
					{
						this.state.isEnquiry && <Dialog 
							open={this.state.isEnquiry}
							maxWidth={'md'}
							scroll='body'
						>
						<EnquiryModal
						property={this.props.singleProperty}
						close={this.dialogOpen}
						/></Dialog> 
					}
					{
						this.state.isBooking && <Dialog 
							open={this.state.isBooking}
							maxWidth={'md'}
							scroll='body'
							>
							<BookingModal 
								availability={this.props.availability}
								close={this.dialogOpen}
							 />
							</Dialog>
					}
					
				</section>
			</React.Fragment>
		);

		return <React.Fragment>{details}</React.Fragment>;
	}
}

const mapStateToProps = state => {
	return {
		all: state.properties.all,
		singleProperty: state.properties.singleProperty,
		singlePropertyType: state.properties.singlePropertyType,
		availability: state.properties.singleAvailability,
		loading: state.properties.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProperties: () => dispatch(getProperties()),
		getSingleProperty: propertyId => dispatch(getSingleProperty(propertyId)),
		getSingleAvailability: query => dispatch(getSingleAvailability(query)),
		getSinglePropertyType: query => dispatch(getSinglePropertyType(query)),
		clearSingleAvailability: () => dispatch(clearSingleAvailability()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
