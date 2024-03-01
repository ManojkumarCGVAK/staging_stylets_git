import React, { Component } from 'react';
import { connect } from 'react-redux';

// import components
import Property from './Property';

class Properties extends Component {
	render() {
		const properties =
			this.props.featured &&
			this.props.featured.map(property => (
				<Property key={property.id} property={property} />
			));

		return (
			<section className='featured-properties'>
				<div className='container'>
					<div className='header'>
						<h3 className='heading'>Featured Properties</h3>
						<hr />
					</div>

					<div className='properties'>
						<div className='row'>{properties}</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		featured: state.properties.featured,
	};
};

export default connect(mapStateToProps)(Properties);
