import { createSelector } from 'reselect';


const selectHello = state => state.home.get('hello');

export const makeSelectorHello = createSelector(
	selectHello,
	subState => subState,
);
