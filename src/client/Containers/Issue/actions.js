import {
	ONCLICK_BUTTON_GO,
	ONCHANGE_INPUT,
	SEND_URL_REQUEST,
	SEND_URL_SUCCESS,
	SEND_URL_ERROR,
} from './constants';


export function onChangeInputAction(payload) {
	return {
		type: ONCHANGE_INPUT,
		payload,
	};
}
export function onClickButtonGoAction(payload) {
	return {
		type: ONCLICK_BUTTON_GO,
		payload,
	};
}

// ========== START CONTROL SEND URL ACTION
export function sendUrlRequestAction() {
	return {
		type: SEND_URL_REQUEST,
	};
}

export function sendUrlSuccessAction(payload) {
	return {
		type: SEND_URL_SUCCESS,
		payload,
	};
}

export function sendUrlErrorAction(payload) {
	return {
		type: SEND_URL_ERROR,
		payload,
	};
}
// ======== END CONTROL SEND URL ACTION


export const onClickButtonGo = onClickButtonGoAction;

export const onChangeInput = onChangeInputAction;
