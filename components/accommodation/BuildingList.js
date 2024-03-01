import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link  from 'next/link';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import {withRouter} from 'next/router';
import Image from 'next/future/image'
import Head from 'next/head'

import { getProperties, getLocationBuildings } from '../../actions/propertiesActions';

// import components
import Sidebar from '../elements/Sidebar';
import Spinner from '../elements/Spinner';
import Filter from './Filter';
import slugify from '../../util/slugify';
import checkForImage from '../../util/checkForImage';
// import LockdownGuarantee from '../elements/LockdownGuarantee';

import FeaturedImage from '../../images/featured-image.jpg';

import AwardCheltenham from '../../images/award-cheltenham.jpg';
import AwardEgham from '../../images/award-egham.jpg';
// import RightSidebar from '../property/RightSidebar'; a

class BuildingList extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		loading: true,
	};

	componentDidMount() {
		this.props.getProperties();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.all !== this.props.all) {
			const { location } = this.props.router.query;
			if (location && this.props.all.length > 0) {
				this.props.getLocationBuildings(location);
			}
			if (this.props.buildings.length > 0) {
				this.setState({ loading: false });
			}
		}

		if (prevProps.buildings !== this.props.buildings) {
			if (this.props.buildings.length > 0) {
				this.setState({ loading: false });
			}
		}
	}

	onMarkerClick = (props, marker) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true,
		});
	};

	displayMarkers = () => {
		return (
			this.props.buildings.length > 0 &&
			this.props.buildings.map((building, index) => {
				const buildingName = slugify(building.name);

				return (
					<Marker
						key={index}
						id={index}
						title={building.name}
						image={
							checkForImage(building.name)
								? require(`../../images/buildings/${buildingName}.jpg`)
								: FeaturedImage
						}
						position={{
							lat: building.coordinates.latitude,
							lng: building.coordinates.longitude,
						}}
						onClick={this.onMarkerClick}
					/>
				);
			})
		);
	};

	onMapClicked = () => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
			});
		}
	};

	render() {
		const { location } = this.props.router.query;

		const buildings =
			this.props.buildings &&
			this.props.buildings.map((building, index) => {
				const buildingName = slugify(building.name);

				const description = building.description.split('*');

				return (
					<div key={index} className='property-card single-image'>
						<Link href={`/accommodation/${location}/${slugify(building.name)}`}>
							<a>
							<div className='header'>
								<h2 className='heading'>{`${building.name}, ${building.location}`}</h2>
							</div>

							<div className='row no-gutters'>
								<div className='col-md-6'>
									<div className='left-content'>
										<div className='featured-images'>
											<Image
												src={
													checkForImage(building.name)
														? require(`../../images/buildings/${buildingName}.jpg`)
														: FeaturedImage
												}
												alt='Placeholder'
											/>
										</div>
									</div>
								</div>

								<div className='col-md-6'>
									<div className='property-info extra-padding'>
										{slugify(building.name) === 'spa-court' && (
											<div className='award-image mobile'>
												<Image
													src={AwardCheltenham}
													alt='Booking.com Traveller Review Awards 2021 for Spa Court. 9.3 out of 10 score.'
												/>
											</div>
										)}
										{slugify(building.name) === 'magna-house' && (
											<div className='award-image mobile'>
												<Image
													src={AwardEgham}
													alt='Booking.com Traveller Review Awards 2021 for Magna House. 8.3 out of 10 score.'
												/>
											</div>
										)}
										<div className='description'>
											{/* <p>{building.description}</p> */}
											<ul>
												{description.map((item, index) => {
													if (!item) {
														return;
													}

													return <li key={index}>{item}</li>;
												})}
											</ul>
											<a
												href={`/accommodation/${location}/${slugify(building.name)}`}
												className='btn btn-secondary'
											>
												Book Now
											</a>
										</div>
										{slugify(building.name) === 'spa-court' && (
											<div className='award-image desktop'>
												<Image
													src={AwardCheltenham}
													alt='Booking.com Traveller Review Awards 2021 for Spa Court. 9.3 out of 10 score.'
												/>
											</div>
										)}
										{slugify(building.name) === 'magna-house' && (
											<div className='award-image desktop'>
												<Image
													src={AwardEgham}
													alt='Booking.com Traveller Review Awards 2021 for Magna House. 8.3 out of 10 score.'
												/>
											</div>
										)}
									</div>
								</div>
							</div>
							</a>
						</Link>
					</div>
				);
			});

		const mapStyles = {
			width: '100%',
			height: '100%',
		};

		const bounds = new this.props.google.maps.LatLngBounds();

		if (this.props.buildings.length > 0) {
			this.props.buildings.forEach(building => {
				bounds.extend({
					lat: building.coordinates.latitude,
					lng: building.coordinates.longitude,
				});
			});
		}

		const center = bounds.getCenter();

		return (
			<React.Fragment>
				{this.props.router.query.location === 'cheltenham' && (
					<Head>
						<title>Modern, Serviced Apartments in Cheltenham</title>
						<meta
							name='description'
							content='View our centrally located and newly refurbished studios and apartments in Cheltenham'
						/>
					</Head>
				)}
				{this.props.router.query.location === 'egham' && (
					<Head>
						<title>Modern, Serviced Apartments in Egham, Surrey</title>
						<meta
							name='description'
							content='View our centrally located and newly refurbished studios and apartments in Surrey'
						/>
					</Head>
				)}
				<Filter />
				<div className='container'>
					<div className='google-maps'>
						{!this.state.loading && this.props.buildings.length > 0 ? (
							<Map
								google={this.props.google}
								zoom={13}
								style={mapStyles}
								initialCenter={{
									lat: center?.lat(),
									lng: center?.lng(),
								}}
								onClick={this.onMapClicked}
							>
								{this.displayMarkers()}
								<InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
									<div className='infowindow'>
										<h6>{this.state.selectedPlace.title}</h6>
										<Image src={this.state.selectedPlace.image} alt='Placeholder' />
									</div>
								</InfoWindow>
							</Map>
						) : (
							<Spinner />
						)}
					</div>
				</div>
				<div className='property-feed'>
					{/* <LockdownGuarantee /> */}
					<div className='container'>
						<div className='row'>
							<div className='col-lg-9'>
								{this.props.loading ? (
									<Spinner />
								) : (
									<React.Fragment>
										{buildings}
										{this.props.router.query.location === 'cheltenham' && (
											<div className='key-video'>
												<iframe
													src='https://player.vimeo.com/video/416385889'
													width='auto'
													height='auto'
													frameBorder='0'
													allow='autoplay; fullscreen'
													allowFullScreen
												></iframe>
											</div>
										)}
									</React.Fragment>
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
		buildings: state.properties.buildings,
		loading: state.properties.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProperties: () => dispatch(getProperties()),
		getLocationBuildings: location => dispatch(getLocationBuildings(location)),
	};
};

export default GoogleApiWrapper({apiKey: "AIzaSyDru6wPZx56YGRdtvhuWED1AX0HOgrClHo",})(connect(mapStateToProps, mapDispatchToProps)(withRouter(BuildingList)));
