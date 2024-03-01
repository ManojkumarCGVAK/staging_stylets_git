import * as actionTypes from '../actions/types';

import slugify from '../util/slugify';

const initialState = {
	all: [],
	buildings: [],
	propertyTypes: [],
	singlePropertyType: {},
	singleProperty: {},
	singleAvailability: false,
	savedProperties: false,
	savedCount: 0,
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_FEATURED_PROPERTIES:
			return {
				...state,
				featured: action.payload,
			};
		case actionTypes.GET_PROPERTIES:
			return {
				...state,
				all: action.payload,
			};
		case actionTypes.GET_SINGLE_PROPERTY:
			return {
				...state,
				singleProperty: action.payload,
			};
		case actionTypes.GET_SINGLE_AVAILABILITY:
			return {
				...state,
				singleAvailability: action.payload,
			};
		case actionTypes.CLEAR_SINGLE_AVAILABILITY:
			return {
				...state,
				singleAvailability: false,
			};
		case actionTypes.GET_SAVED_PROPERTIES_COUNT:
			return {
				...state,
				savedCount: action.payload,
			};
		case actionTypes.GET_SAVED_PROPERTIES:
			return {
				...state,
				savedProperties: action.payload,
			};
		case actionTypes.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case actionTypes.GET_LOCATION_BUILDINGS:
			return {
				...state,
				buildings: action.payload
					? state.all.filter(
							item => slugify(item.location) === action.payload
					  )[0]?.buildings
					: [],
			};
		case actionTypes.GET_PROPERTY_TYPES:
			if(action.payload){
			return {
					...state,
					propertyTypes: state.buildings?.filter(building => slugify(building.name) === action.payload)[0].details,
				}
			};
		case actionTypes.GET_SINGLE_PROPERTY_TYPE:
			return {
				...state,
				singlePropertyType: state.propertyTypes?.filter(
					propertyType =>
						slugify(propertyType.type) === action.payload
				)[0],
			};
		default:
			return state;
	}
};
