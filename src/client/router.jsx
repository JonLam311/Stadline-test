import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import routes from './routes';
// import Img from "Images/bg.svg"

const DynamicRouter = (props) => {
	const { children } = props;
	return (
		<Router>
			<div id="div-router">
				{/* <img id="main-bg" src={Img} /> */}
				{ children }
				<Switch>
					{
						routes.map(route => (
							route.name !== '404'
								? <Route exact key={`route-spec-${route.name}`} path={route.path} render={() => <route.component />} />
								:							<Route key={`route-spec-${route.name}`} render={() => <route.component />} />
						))
					}
				</Switch>
			</div>
		</Router>
	);
};

DynamicRouter.propTypes = {
	children: PropTypes.object,
};

DynamicRouter.defaultProps = {
	children: {},
};

export default DynamicRouter;
