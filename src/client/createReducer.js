import { combineReducers } from 'redux';

import navReducer from './Containers/Navbar/reducer';

export default function createReducer() {
	return combineReducers({
		nav: navReducer,
	});
}
