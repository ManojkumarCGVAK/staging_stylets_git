import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

// import components
import Spinner from '../elements/Spinner';
import SaveButton from '../elements/SaveButton';

class Header extends Component {
	render() {
		const { property } = this.props;
		let headerContent;

		if (isEmpty(property)) {
			headerContent = <Spinner />;
		} else {
			headerContent = (
				<div className='property-header'>
					<div className='main-meta'>
						<h1 className='heading'>{`${property.propertyTypeName}, ${property.buildingName}`}</h1>

						<SaveButton property={property} />
					</div>
					<h3 className='address'>{property.location}</h3>
				</div>
			);
		}

		return headerContent;
	}
}

export default Header;
