import { combineReducers } from 'redux';

import propertiesReducer from './propertiesReducer';

// combine all reducers
export default combineReducers({
	properties: propertiesReducer,
});
