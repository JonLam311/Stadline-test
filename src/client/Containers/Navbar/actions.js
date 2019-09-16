import {
	SWITCH_OPEN,
} from './constants';


export function toggleSwitchOpenAction() {
	return {
		type: SWITCH_OPEN,
	};
}

export const toggleSwitchOpen = toggleSwitchOpenAction;
