import { createSelector } from 'reselect';


const selectTitle = state => state.issue.getIn(['currentIssue', 'title']);

export const makeSelectorTitle = createSelector(
	selectTitle,
	subState => subState,
);
