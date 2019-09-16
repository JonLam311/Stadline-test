import { fromJS } from 'immutable';

import {
	SAY_HELLO,
} from './constants';

const homeStateModel = fromJS({
	hello: 'Bonjour',
});

export default function homeReducer(
	state = homeStateModel,
	{ type/* , payload */ },
) {
	const hello = state.get('hello');
	const switchu = hello === 'Bonjour' ? 'Hello' : 'Bonjour';

	switch (type) {
	case SAY_HELLO:
		return state
			.set('hello', switchu);
	default:
		return state;
	}
}
