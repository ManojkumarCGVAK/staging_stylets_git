import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from '../components/elements/Loadable';

// Components
const Home = Loadable(lazy(() => import('../components/home')));
const BuildingList = Loadable(lazy(() => import('../components/accommodation/BuildingList')));
const PropertyTypeList = Loadable(lazy(() => import('../components/accommodation/PropertyTypeList')));
const Accommodation = Loadable(lazy(() => import('../components/accommodation')));
const Contact = Loadable(lazy(() => import('../components/contact')));
const Property = Loadable(lazy(() => import('../components/property')));
const Saved = Loadable(lazy(() => import('../components/saved')));
const Cheltenham = Loadable(lazy(() => import('../components/locations/cheltenham')));
const Surrey = Loadable(lazy(() => import('../components/locations/surrey')));
const About = Loadable(lazy(() => import('../components/content/About')));
const PrivacyPolicy = Loadable(lazy(() => import('../components/content/PrivacyPolicy')));
const CookiePolicy = Loadable(lazy(() => import('../components/content/CookiePolicy')));
const TermsAndConditions = Loadable(lazy(() => import('../components/content/TermsAndConditions')));
const Corporate = Loadable(lazy(() => import('../components/landing/Corporate')));
const SurreyLanding = Loadable(lazy(() => import('../components/landing/Surrey')));
const CorporateOffer = Loadable(lazy(() => import('../components/landing/CorporateOffer')));
const CorporateOfferCheltenham = Loadable(lazy(() => import('../components/landing/CheltenhamAccommodation')));
const CorporateSurrey = Loadable(lazy(() => import('../components/landing/CorporateSurrey')));
const SurreyAccommodation = Loadable(lazy(() => import('../components/landing/SurreyAccommodation')));
const BookingLandingSuccess = Loadable(lazy(() => import('../components/landing/BookingLandingSuccess')));

export default (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/accommodation/:location' component={BuildingList} />
			<Route exact path='/accommodation/:location/:building' component={PropertyTypeList} />
			<Route exact path='/accommodation/:location/:building/:propertyType' component={Accommodation} />
			<Route exact path='/contact' component={Contact} />
			<Route path='/property/:location/:building/:propertyType' component={Property} />
			<Route path='/saved' component={Saved} />
			<Route path='/about-cheltenham' component={Cheltenham} />
			<Route path='/about-surrey' component={Surrey} />
			<Route exact path='/about-us' component={About} />
			<Route exact path='/privacy-policy' component={PrivacyPolicy} />
			<Route exact path='/cookie-policy' component={CookiePolicy} />
			<Route exact path='/terms-and-conditions' component={TermsAndConditions} />
			<Route exact path='/corporate' component={Corporate} />
			<Route exact path='/london-surrey' component={SurreyLanding} />
			<Route exact path='/corporate-offer' component={CorporateOffer} />
			<Route exact path='/cheltenham-accommodation' component={CorporateOfferCheltenham} />
			<Route exact path='/corporate-surrey' component={CorporateSurrey} />
			<Route exact path='/surrey-accommodation' component={SurreyAccommodation} />
			<Route exact path='/booking-success' component={BookingLandingSuccess} />
		</Switch>
	</Router>
);
