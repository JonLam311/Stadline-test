import { combineReducers } from 'redux';

import navReducer from './Containers/Navbar/reducer';
import issueReducer from './Containers/Issue/reducer';

export default function createReducer() {
	return combineReducers({
		nav: navReducer,
		issue: issueReducer,
	});
}
