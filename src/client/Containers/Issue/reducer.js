import { fromJS } from 'immutable';

import { uniqBy } from 'lodash';

import {
	ONCHANGE_INPUT, SEND_URL_REQUEST, SEND_URL_SUCCESS, SEND_URL_ERROR,
} from './constants';

const issueStateModel = fromJS({
	urlToSend: '',
	sendingUrl: {
		status: false,
		sended: false,
	},
	currentIssue: {
		title: 'Stadline Test',
		author: '',
		comments: [],
		users: [],
	},
});

export default function issueReducer(
	state = issueStateModel,
	{ type, payload },
) {
	switch (type) {
	case ONCHANGE_INPUT:
		return state
			.set('urlToSend', payload);

	case SEND_URL_REQUEST:
		return state
			.setIn(['sendingUrl', 'status'], true);

	case SEND_URL_SUCCESS:
		return state
			.setIn(['sendingUrl', 'status'], false)
			.setIn(['sendingUrl', 'sended'], true)
			.setIn(['currentIssue', 'title'], payload.title)
			.setIn(['currentIssue', 'author'], payload.author)
			.setIn(['currentIssue', 'comments'], fromJS(payload.comments))
			.setIn(['currentIssue', 'users'], fromJS(uniqBy(payload.comments, comment => comment.user.id).map(n => n.user)));

	case SEND_URL_ERROR:
		return state;
		// .setIn(['sendingUrl', 'status'], false)
		// .setIn(['sendingUrl', 'sended'], false)
	default:
		return state;
	}
}
