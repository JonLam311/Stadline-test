import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './createReducer';
import saga_runs from './sagas_run';

export default function configureStore(initialState = {}) {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		actions => (action) => {
			console.log('Une action vient de passer dans le store', actions, action);
			return action;
		},
		sagaMiddleware,
	];

	const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		:		compose;

	const enhancer = composeEnhancers(
		applyMiddleware(...middlewares),
		// other store enhancers if any
	);

	const store = createStore(
		createReducer(),
		initialState,
		enhancer,
	);

	/* saga runs */
	saga_runs(sagaMiddleware);

	return store;
}
