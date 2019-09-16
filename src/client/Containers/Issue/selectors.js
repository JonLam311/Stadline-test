import { createSelector } from 'reselect';

const urlToSend = state => state.issue.get('urlToSend');
const commentToSend = state => state.issue.get('createCommentValue');
const reposDatas = state => state.issue.get('currentIssue').toJS();

export const makeSelectorUrlToSend = createSelector(
	urlToSend,
	subState => subState,
);

export const makeSelectorCommentToSend = createSelector(
	commentToSend,
	subState => subState,
);

export const makeSelectorReposDatas = createSelector(
	reposDatas,
	subState => subState,
);
