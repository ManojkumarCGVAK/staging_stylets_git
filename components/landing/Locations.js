import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link  from 'next/link';
import Image from 'next/future/image'

// Images
import Cheltenham from '../../images/cheltenham.jpg';
import Surrey from '../../images/surrey.jpg';

// Utils
import slugify from '../../util/slugify';

class Locations extends Component {
	render() {
		const locations = this.props.areas.map((area, index) => {
			if (this.props.hideLocation && this.props.hideLocation === area.location) {
				return;
			}

			return (
				<Link key={index} href={`/accommodation/${slugify(area.location)}`} >
					<a className='locations__card'>
					<Image src={area.location === 'Cheltenham' ? Cheltenham : Surrey} alt={`${area.location}`} />
					<div className='locations__card--overlay'>
						<h2>{area.location === 'Egham' ? 'Surrey' : area.location}</h2>
					</div>
					</a>
				</Link>
			);
		});

		return (
			<section className='featured-locations'>
				<div className='container'>
					<div className='header'>
						<h3 className='heading'>{this.props.title || 'Locations'}</h3>
						<hr />
					</div>

					<div className='locations'>{locations}</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		areas: state.properties.all,
	};
};

export default connect(mapStateToProps)(Locations);
