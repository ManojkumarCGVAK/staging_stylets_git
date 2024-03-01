import axios from 'axios';

import * as actionTypes from './types';

export const getProperties = () => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});

	axios
		.get('/api/properties')
		.then(response => {
			
			// console.log(response);
			dispatch({
				type: actionTypes.GET_PROPERTIES,
				payload: response.data,
			});

			dispatch({
				type: actionTypes.SET_LOADING,
				payload: false,
			});
		})
		.catch(err => console.log(err.response));
};

export const getLocationBuildings = location => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});
	dispatch({
		type: actionTypes.GET_LOCATION_BUILDINGS,
		payload: location,
	});
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: false,
	});
};

export const getPropertyTypes = query => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});
	dispatch({
		type: actionTypes.GET_LOCATION_BUILDINGS,
		payload: query.location,
	});
	dispatch({
		type: actionTypes.GET_PROPERTY_TYPES,
		payload: query.building,
	});
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: false,
	});
};

export const getSinglePropertyType = query => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});
	dispatch({
		type: actionTypes.GET_LOCATION_BUILDINGS,
		payload: query.location,
	});
	dispatch({
		type: actionTypes.GET_PROPERTY_TYPES,
		payload: query.building,
	});
	dispatch({
		type: actionTypes.GET_SINGLE_PROPERTY_TYPE,
		payload: query.propertyType,
	});
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: false,
	});
};

export const getAvailableProperties = query => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});

	const structuredQuery = {
		...query,
		grouping: 'UNIT',
	};

	axios
		.get('/api/properties/availability', { params: structuredQuery })
		.then(response => {
			if (response.data.length === 0) {
				dispatch({
					type: actionTypes.GET_PROPERTIES,
					payload: [],
				});

				dispatch({
					type: actionTypes.SET_LOADING,
					payload: false,
				});

				return;
			}

			dispatch({
				type: actionTypes.GET_PROPERTIES,
				payload: response.data,
			});

			dispatch({
				type: actionTypes.SET_LOADING,
				payload: false,
			});
		})
		.catch(err => {
			console.log(err.response);
		});
};

export const getSingleProperty = propertyId => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});

	axios
		.get(`/api/properties/${propertyId}`)
		.then(response => {
			dispatch({
				type: actionTypes.GET_SINGLE_PROPERTY,
				payload: response.data,
			});
			dispatch({
				type: actionTypes.SET_LOADING,
				payload: false,
			});
		})
		.catch(err => console.log(err));
};

export const getSingleAvailability = query => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});
	axios
		.get('/api/properties/availability/type', { params: query })
		.then(response => {
			dispatch({
				type: actionTypes.GET_SINGLE_AVAILABILITY,
				payload: response.data ? response.data : 'unavailable',
				// payload: response.data === '' ? 'unavailable' : response.data,
			});
			dispatch({
				type: actionTypes.SET_LOADING,
				payload: false,
			});
		})
		.catch(err => console.log(err.response));
};

export const clearSingleAvailability = () => dispatch => {
	return dispatch({
		type: actionTypes.CLEAR_SINGLE_AVAILABILITY,
	});
};

export const savePropertyToLocalStorage = propertyId => dispatch => {
	if (localStorage.savedProperties) {
		const storedProperties = JSON.parse(
			localStorage.getItem('savedProperties')
		);

		if (!storedProperties.includes(propertyId)) {
			storedProperties.push(propertyId);
		}

		localStorage.setItem(
			'savedProperties',
			JSON.stringify(storedProperties)
		);
	} else {
		let storedProperties = [];

		storedProperties.push(propertyId);

		localStorage.setItem(
			'savedProperties',
			JSON.stringify(storedProperties)
		);
	}

	dispatch(getSavedPropertiesCount());
};

export const deleteSavedProperty = propertyId => dispatch => {
	const storedProperties = JSON.parse(
		localStorage.getItem('savedProperties')
	);

	let removeIndex = storedProperties.indexOf(propertyId);

	if (removeIndex !== -1) storedProperties.splice(removeIndex, 1);

	localStorage.setItem('savedProperties', JSON.stringify(storedProperties));

	// dispatch(getSavedProperties());
	dispatch(getSavedPropertiesCount());
};

export const getSavedPropertiesCount = () => dispatch => {
	const storedProperties = JSON.parse(
		localStorage.getItem('savedProperties')
	);

	dispatch({
		type: actionTypes.GET_SAVED_PROPERTIES_COUNT,
		payload: storedProperties ? storedProperties.length : 0,
	});
};

export const getSavedProperties = () => dispatch => {
	dispatch({
		type: actionTypes.SET_LOADING,
		payload: true,
	});

	// turn stored properties in to array of properties
	const storedProperties = JSON.parse(
		localStorage.getItem('savedProperties')
	);


	const query = { pageSize: 1000, storedProperties };

	axios
		.get('/api/properties/saved', { params: query })
		.then(response => {
			dispatch({
				type: actionTypes.GET_SAVED_PROPERTIES,
				payload: response.data,
			});
			dispatch({
				type: actionTypes.SET_LOADING,
				payload: false,
			});
		})
		.catch(err => console.log(err.response));
};
