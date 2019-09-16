import 'babel-polyfill';
import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './createStore';
import DynamicRouter from './router';
import ReduxNavigationbar from './Containers/Navbar';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/bootstrap/scss/bootstrap.scss';
import './scss/index.scss';

const AppRouter = () => (
	<DynamicRouter>
		<ReduxNavigationbar />
	</DynamicRouter>
);

const store = configureStore();

// console.log(store)

ReactDom.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.querySelector('#root'),
);
