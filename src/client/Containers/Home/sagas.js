// import {
// 	put, takeEvery, all, call,
// } from 'redux-saga/effects';

// export const delay = ms => new Promise(res => setTimeout(res, ms));

// export function* incrementAsync() {
// 	yield call(delay, 1000);
// 	yield put({ type: 'UPDATE_FIRST_FLOOR' });
// }

// export function* watcherIncrementAsync() {
// 	yield takeEvery('INCREMENT_ASYNC', incrementAsync);
// }

// export function* rootIncrementAsync() {
// 	yield all([
// 		watcherIncrementAsync(),
// 	]);
// }
