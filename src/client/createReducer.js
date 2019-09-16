import { combineReducers } from 'redux';

import homeReducer from './Containers/Home/reducer';
import navReducer from './Containers/Navbar/reducer';

export default function createReducer() {
	return combineReducers({
		home: homeReducer,
		nav: navReducer,
	});
}
