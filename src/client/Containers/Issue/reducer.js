import { fromJS } from 'immutable';

const issueStateModel = fromJS({
	currentIssue: {
		title: 'Stadline Test',
	},
});

export default function issueReducer(
	state = issueStateModel,
	{ type, payload },
) {
	switch (type) {
	default:
		return state;
	}
}
