import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "next/router"
import qs from 'qs';
import  Link from 'next/link';

import { getProperties, getAvailableProperties, getSinglePropertyType } from '../../actions/propertiesActions';
import isEmpty from '../../validation/is-empty';

// import components
import Sidebar from '../elements/Sidebar';
import PropertyCard from '../elements/PropertyCard';
import Spinner from '../elements/Spinner';
import Filter from './Filter';
import Locations from '../home/Locations';

const CheltenhamPara = () =>{
	return <p>Cheltenham has recently rebranded itself &quot;The Festival Town&quot;. Described as the Cultural Capital of the Cotswolds an article on Cheltenham by the New York Times described the town as enjoying a cultural renaissance with many &quot;happening spots&quot;. The Independent called the town a &quot;Design Destination&quot; with stylish places to eat and drink.</p>
}
const EghamPara = () =>{
	return <p>As a fully compliant and quality accredited accommodation provider in Surrey, we are proud to provide our clients with full-serviced and purpose-built rental accommodation at a competitive price. Offering an exceptional experience with a great price to match, we aim to please.
	Boasting newly refurbished accommodation in easily accessible locations, our properties provide excellent local amenities for your convenience. Offering both serviced apartments and studios, all of our accommodation is available for stays from 1 to 365 nights long. So, whether you are staying for a quick business trip or a long term stay, our rental properties in Surrey will meet your needs.
	Our selection of rental properties in Surrey offer brilliant flexibility for all types of stays, including corporate and business trips.</p>
}



class index extends Component {
	componentDidMount() {
		const query = this.props.router.query;

		if (isEmpty(query)) {
			this.props.getAllProperties();
		} else {
			this.props.getAvailableProperties(query);
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.router.query !== this.props.router.query) {
			const data = {
				pageSize: 1000,
			};

			const query = this.props.router.query;

			if (isEmpty(query)) {
				this.props.getAllProperties(data);
			} else {
				this.props.getAvailableProperties(query);
			}
		}

		if (prevProps.all !== this.props.all) {
			const { location, building, propertyType } = this.props.router.query;

			if (location && building && propertyType) {
				this.props.getSinglePropertyType({
					location,
					building,
					propertyType,
				});
			}
		}
	}

	render() {
		const { location, building, propertyType } = this.props.router.query;
		const query = this.props.router.query;

		let properties;

		if (this.props.loading) {
			properties = <Spinner />;
		} else if (location && building && propertyType) {
			properties =
				this.props.singlePropertyType.properties &&
				this.props.singlePropertyType.properties.length > 0 &&
				this.props.singlePropertyType.properties.map(property => (
					<PropertyCard key={property.id} property={property} />
				));
		} else if (isEmpty(query)) {
			properties = (
				<div className='accommodation-locations'>
					
					<Locations para={{Cheltenham:<CheltenhamPara />,Egham:<EghamPara/> }}/>
				</div>
			);
		} else {
			const prevTypes = [];

			properties =
				this.props.all &&
				this.props.all.length > 0 &&
				this.props.all.map(property => {
					if (prevTypes.includes(property.propertyTypeName)) {
						return null;
					} else {
						prevTypes.push(property.propertyTypeName);
						return <PropertyCard key={property.id} property={property} />;
					}
				});
		}

		return (
			<React.Fragment>
				<Filter />
				<div className='property-feed'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-9'>
								{!this.props.loading && !this.props.all.length ? (
									<div className='no-content'>
										<h3 className='heading'>
											We’re afraid that we don’t have any availability for those dates – please
											search for different dates or view our other properties to see what’s
											available
										</h3>
										<Link href='/accommodation'>
											<a className='btn btn-secondary'>
											View all properties
											</a>
										</Link>
									</div>
								) : (
									<div>{properties}</div>
									
								)}
							</div>

							<div className='col-lg-3 d-none d-lg-block'>
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		all: state.properties.all,
		singlePropertyType: state.properties.singlePropertyType,
		loading: state.properties.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllProperties: data => dispatch(getProperties(data)),
		getAvailableProperties: query => dispatch(getAvailableProperties(query)),
		getSinglePropertyType: query => dispatch(getSinglePropertyType(query)),
	};
};
const IndeWithrouter = withRouter(index)

export default connect(mapStateToProps, mapDispatchToProps)(IndeWithrouter);
