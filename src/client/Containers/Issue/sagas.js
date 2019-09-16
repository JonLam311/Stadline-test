import {
	put, takeEvery, all, call, select,
} from 'redux-saga/effects';
import { makeSelectorUrlToSend, makeSelectorCommentToSend } from './selectors';
import { getFetch, postFetch } from '../../api/fetch';

const githubApiHeaders = {
	undefinedaccept: 'application/json',
	'accept-language': 'en-US,en;q=0.8',
	'accept-encoding': 'gzip, deflate',
	'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
	Accept: 'application/vnd.github.symmetra-preview+json',
	'Content-Type': 'application/json',
	Authorization: 'Token 295959a37f74b1f6d1418db78d2b6d081aeb0744', // Not recognized by github api...
};


// =========================== START GET ASYNC SAGA
const sendUrlAndGetTitle = url => getFetch(`https://api.github.com/repos/${url}`, githubApiHeaders);
const getComments = url => getFetch(`https://api.github.com/repos/${url}/comments`, githubApiHeaders);

export function* sendUrlAndGetInfosAsync() {
	try {
		const url = yield select(makeSelectorUrlToSend);
		const infosIssue = yield call(sendUrlAndGetTitle, url);
		const comments = yield call(getComments, url);
		yield put({
			type: 'SEND_URL_SUCCESS',
			payload: {
			 title: infosIssue.title,
			 author: infosIssue.user.id,
			 comments: [infosIssue, ...comments],
			},
		});
	} catch (error) {
		yield put({ type: 'SEND_URL_ERROR' });
	}
}

export function* watcherSendUrlAndGetInfosAsync() {
	yield takeEvery('SEND_URL_REQUEST', sendUrlAndGetInfosAsync);
}

export function* rootSendUrlAndGetInfosAsync() {
	yield all([
		watcherSendUrlAndGetInfosAsync(),
	]);
}
// ========================== END GET ASYNC SAGA

// =========================== POST ASYNC SAGA

const createComment = (url, body) => postFetch(`https://api.github.com/repos/${url}/comments`, githubApiHeaders, body);

export function* createCommentAsync() {
	console.log('sagas createCommentAsync');

	try {
		const url = yield select(makeSelectorUrlToSend);
		const body = yield select(makeSelectorCommentToSend);
		const createCommentRequest = yield call(createComment, url, body);
		yield put({
			type: 'CREATE_COMMENT_SUCCESS',
			payload: createCommentRequest,
		});
	} catch (error) {
		yield put({ type: 'CREATE_COMMENT_ERROR' });
	}
}

export function* watchercreateCommentAsync() {
	yield takeEvery('CREATE_COMMENT_REQUEST', createCommentAsync);
}
// ======================= END POST ASYNC SAGA

export function* rootCreateCommentAsync() {
	yield all([
		watchercreateCommentAsync(),
	]);
}
