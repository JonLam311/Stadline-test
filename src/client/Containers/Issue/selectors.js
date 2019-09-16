import { createSelector } from 'reselect';

const urlToSend = state => state.issue.get('urlToSend');
const reposDatas = state => state.issue.get('currentIssue').toJS();

export const makeSelectorUrlToSend = createSelector(
	urlToSend,
	subState => subState,
);

export const makeSelectorReposDatas = createSelector(
	reposDatas,
	subState => subState,
);
