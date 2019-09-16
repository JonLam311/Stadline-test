import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as selectors from './selectors';

class Issue extends React.Component {
	render() {
		return (
			<div id="Issue" className="row justify-content-center">
				<form className="col-md-12">
					<label htmlFor="urlToFetch">Entrez l&apos;url de l&apos;issue:</label>
					<input type="text" id="urlToFetch" name="urlToFetch" placeholder=":user/:repos/issues/:number" required onChange={_ => console.log(_)} />
					<button className="btn btn-primary" onClick={() => console.log('fired')} type="button">GO</button>
				</form>
			</div>
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
