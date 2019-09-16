import { fromJS } from 'immutable';

import {
	SWITCH_OPEN,
} from './constants';

const navStateModel = fromJS({
	isOpen: true,
});

export default function navReducer(
	state = navStateModel,
	{ type/* , payload */ },
) {
	const isOpen = state.get('isOpen');

	switch (type) {
	case SWITCH_OPEN:
		console.log('switch open called');
		return state
			.set('hello', !isOpen);
	default:
		return state;
	}
}
