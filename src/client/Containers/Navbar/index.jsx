import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import * as selectors from './selectors';

class Navigationbar extends React.Component {
	render() {
		const {
			title,
		} = this.props;
		return (
			<nav className="navbar">
				{title}
			</nav>
		);
	}
}

Navigationbar.propTypes = {
	title: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
	title: selectors.makeSelectorTitle(state),
});

const ReduxNavigationbar = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Navigationbar);

export default ReduxNavigationbar;
