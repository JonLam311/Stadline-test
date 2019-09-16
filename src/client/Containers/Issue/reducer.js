import { fromJS } from 'immutable';

import { sortBy, uniqBy, uniq } from 'lodash';

import {
	ONCHANGE_INPUT, ONCLICK_USER, SEND_URL_REQUEST, SEND_URL_SUCCESS, SEND_URL_ERROR, ONCHANGE_TEXTAREA,
} from './constants';
import pieCalculator from '../../Utils/Calculs/PieCalculator';

const issueStateModel = fromJS({
	urlToSend: '',
	createCommentValue: '',
	sendingUrl: {
		status: false,
		sended: false,
	},
	currentIssue: {
		title: 'Stadline Test',
		author: '',
		comments: [],
		hiddenComments: [],
		users: [],
		hideCommentsForId: -1,
		pieDatas: {
			totalMots: 0,
			participants: [],
		},
	},
});

export default function issueReducer(
	state = issueStateModel,
	{ type, payload },
) {
	const comments = state.getIn(['currentIssue', 'comments']).toJS();
	const hiddenComments = state.getIn(['currentIssue', 'hiddenComments']).toJS();

	switch (type) {
	// INPUT EVENTS
	case ONCHANGE_INPUT:

		return state
			.set('urlToSend', payload);

	case ONCHANGE_TEXTAREA:
		return state
			.set('createCommentValue', payload);

	// CLICK EVENTS
	case ONCLICK_USER:

		return state
			.setIn(['currentIssue', 'hideCommentsForId'], payload)
			.setIn(['currentIssue', 'hiddenComments'], fromJS(comments.filter(com => com.user.id === payload)))
			.setIn(['currentIssue', 'comments'], fromJS(sortBy(hiddenComments.length ?
				comments.concat(hiddenComments)
				:
				comments.filter(com => com.user.id !== payload), entry => entry.created_at)))
			.setIn(['currentIssue', 'pieDatas'], fromJS(hiddenComments.length ?
				pieCalculator(comments.concat(hiddenComments))
				:
				pieCalculator(comments.filter(com => com.user.id !== payload))));

	// ASYNC REQUEST
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
			.setIn(['currentIssue', 'users'], fromJS(uniqBy(payload.comments, comment => comment.user.id).map(n => n.user)))
			.setIn(['currentIssue', 'pieDatas'], fromJS(pieCalculator(payload.comments)));

	case SEND_URL_ERROR:
		return state
			.setIn(['sendingUrl', 'status'], false)
			.setIn(['sendingUrl', 'sended'], false);
	default:
		return state;
	}
}
