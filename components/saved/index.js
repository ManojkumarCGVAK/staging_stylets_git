import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	getSavedProperties,
	deleteSavedProperty,
} from '../../actions/propertiesActions';
import  Link  from 'next/link';

// import components
import PropertyCard from '../elements/PropertyCard';
import Sidebar from '../elements/Sidebar';
import Spinner from '../elements/Spinner';

class SavedProperties extends Component {
	
	componentDidMount() {
		this.props.getSavedProperties();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.savedCount !== this.props.savedCount) {
			this.props.getSavedProperties();
		}
	}

	deleteSavedProperty = propertyId => {
		this.props.deleteSavedProperty(propertyId);
	};

	render() {
		const { loading, savedProperties } = this.props;
		let propertyContent;

		if (loading) {
			propertyContent = <Spinner />;
		} else if ( Array.isArray(savedProperties)) {
			propertyContent = savedProperties.map(property => (
				<PropertyCard property={property} key={property.id} />
			));
		} else {
			propertyContent = (
				<div className='no-content'>
					<h3 className='heading'>
						You currently have no Saved Properties, Saved Properties
						are only available on the device you saved them on.
					</h3>

					<Link href='/accommodation'>
						<a className='btn btn-secondary'>
						 View accommodation
						</a>
					</Link>
				</div>
			);
		}

		return (
			<section className='saved-properties'>
				<div className='container'>
					<div className='row narrow'>
						<div className='col-lg-8 col-xl-9'>
							<div className='properties'>
								<div className='header'>
									<h1 className='heading'>
										Saved Properties
									</h1>
									<hr />
								</div>

								{propertyContent}
							</div>
						</div>

						<div className='col-lg-4 col-xl-3'>
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	savedProperties: state.properties.savedProperties,
	loading: state.properties.loading,
	savedCount: state.properties.savedCount,
});

export default connect(
	mapStateToProps,
	{ getSavedProperties, deleteSavedProperty }
)(SavedProperties);
