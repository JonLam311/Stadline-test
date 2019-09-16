import { rootSendUrlAndGetInfosAsync, rootCreateCommentAsync } from './Containers/Issue/sagas';

export default function saga_runs(sagaMiddleware) {
	sagaMiddleware.run(rootSendUrlAndGetInfosAsync);
	sagaMiddleware.run(rootCreateCommentAsync);
}
