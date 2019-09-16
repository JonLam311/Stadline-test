import { fromJS } from 'immutable';
import {
	ONCLICK_BUTTON_GO,
	ONCHANGE_INPUT,
} from './constants';

const issueStateModel = fromJS({
	urlToSend: '',
	sendingUrl: {
		status: false,
		sended: false,
	},
	currentIssue: {
		title: 'Stadline Test',
	},
});

export default function issueReducer(
	state = issueStateModel,
	{ type, payload },
) {
	switch (type) {
	case ONCHANGE_INPUT:
		console.log('onchange input fired');

		return state
			.set('urlToSend', payload);

	case ONCLICK_BUTTON_GO:
		console.log('onclick go fired');
		return state
			.setIn(['sendingUrl', 'status'], true);
	default:
		return state;
	}
}
