import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as selectors from './selectors';
import {
	toggleHelloAction,
} from './actions';

class Home extends React.Component {
	render() {
		const {
			hello,
		 } = this.props;
		const {
			toggleHello,
		} = this.props;

		return (
			<header className="Home main container-fluid" onClick={() => toggleHello()}>
				<div className="row">
					<div className="col-md-4" />
					<div className="col-md-4 text-center">{hello}</div>
					<div className="col-md-4" />
				</div>
			</header>
		);
	}
}

Home.propTypes = {
	hello: PropTypes.string.isRequired,
	toggleHello: PropTypes.func.isRequired,
};

// console.log(dispatch)
const mapDispatchToProps = dispatch => ({
	toggleHello: () => {
		dispatch(toggleHelloAction());
	},
});
const mapStateToProps = state => ({
	hello: selectors.makeSelectorHello(state),
});

const ReduxHome = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);

export default ReduxHome;
