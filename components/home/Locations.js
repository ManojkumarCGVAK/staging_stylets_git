import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Link  from 'next/link';
import Image from 'next/image'
// Images
import Cheltenham from '../../images/cheltenham.jpg';
import Surrey from '../../images/surrey.jpg';

// Utils
import slugify from '../../util/slugify';

class Locations extends Component {
	
	render() {
		return <section className="featured-locations">
				<div className="container">
					<div className="header">
						<h3 className='heading'>Locations</h3>
						<hr />
					</div>
					<div className="locations">
						<Listareas areas={this.props.areas} para={this.props.para && this.props.para} />
					</div>
				</div>
			</section>
	}
}

const mapStateToProps = state => {
	return {
		areas: state.properties.all,
	};
};

export default connect(mapStateToProps)(Locations);


const Listareas = ({areas, para}) =>{
	return <>
	{
		areas.map((area, index) =><Listarea area={area} key={index} parcom={para} />)
		
	}
	</>
}
const Listarea = ({area, parcom}) =>{
	return <>
			{
				parcom && parcom[area?.location]
			}
		<Link href={`/accommodation/${slugify(area.location)}`}>
			<a className='locations__card locations__span--full '>
			<Image
				id={`${area.location}_img`}
				src={area.location === 'Cheltenham' ? Cheltenham : Surrey}
				alt={`${area.location}_img`}
				lazy="true"
				layout="responsive"
				priority={80}
				/>
			<div className='locations__card--overlay'>
				<h2>
					{area.location === 'Egham' ? 'Surrey' : area.location}
				</h2>
			</div>
			</a>
		</Link>
	</>
	
}


