import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as selectors from './selectors';

class Issue extends React.Component {
	render() {
		return (
			<header />
		);
	}
}

Issue.propTypes = {
};

const mapDispatchToProps = dispatch => ({
});
const mapStateToProps = state => ({
});

const ReduxIssue = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Issue);

export default ReduxIssue;
