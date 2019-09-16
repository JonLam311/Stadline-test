import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import * as selectors from './selectors';

class ReduxNavigationbar extends React.Component {
	render() {
		return (
			<nav className="navbar" />
		);
	}
}

// Navigationbar.propTypes = {
// };

// const mapDispatchToProps = dispatch => ({
// });

// const mapStateToProps = state => ({
// });

// const ReduxNavigationbar = connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// )(Navigationbar);

export default ReduxNavigationbar;
