import {
	SAY_HELLO,
} from './constants';


export function toggleHelloAction() {
	return {
		type: SAY_HELLO,
	};
}

export const toggleHello = toggleHelloAction;
