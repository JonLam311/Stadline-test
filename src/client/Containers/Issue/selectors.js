import { createSelector } from 'reselect';

const urlToSend = state => state.issue.get('urlToSend');

export const makeSelectorUrlToSend = createSelector(
	urlToSend,
	subState => subState,
);
