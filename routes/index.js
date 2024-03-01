import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from '../components/home';
import BuildingList from '../components/accommodation/BuildingList';
import PropertyTypeList from '../components/accommodation/PropertyTypeList';
import Accommodation from '../components/accommodation';
import Contact from '../components/contact';
import Property from '../components/property';
import Saved from '../components/saved';
import Cheltenham from '../components/locations/cheltenham';
import Surrey from '../components/locations/surrey';
import About from '../components/content/About';
import PrivacyPolicy from '../components/content/PrivacyPolicy';
import CookiePolicy from '../components/content/CookiePolicy';
import TermsAndConditions from '../components/content/TermsAndConditions';
import Corporate from '../components/landing/Corporate';
import SurreyLanding from '../components/landing/Surrey';
import CorporateOffer from '../components/landing/CorporateOffer';
import CorporateOfferCheltenham from '../components/landing/CheltenhamAccommodation';
import CorporateSurrey from '../components/landing/CorporateSurrey';
import SurreyAccommodation from '../components/landing/SurreyAccommodation';
import BookingLandingSuccess from '../components/landing/BookingLandingSuccess';

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
