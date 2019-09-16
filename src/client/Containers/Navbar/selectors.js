import { createSelector } from 'reselect';


const selectIsOpen = state => state.nav.get('isOpen');

export const makeSelectorIsOpen = createSelector(
	selectIsOpen,
	subState => subState,
);
