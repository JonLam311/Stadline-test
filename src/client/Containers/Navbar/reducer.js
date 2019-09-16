import { fromJS } from 'immutable';

import {
	SWITCH_OPEN,
} from './constants';

const navStateModel = fromJS({
	title: 'Un titre',
});

export default function navReducer(
	state = navStateModel,
	{ type/* , payload */ },
) {
	const title = state.get('title');

	switch (type) {
	case SWITCH_OPEN:
		return state
			.set('title', !title);
	default:
		return state;
	}
}
