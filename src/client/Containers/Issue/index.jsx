/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as selectors from './selectors';
import { onChangeInputAction, sendUrlRequestAction } from './actions';

class Issue extends React.Component {
	render() {
		const {
			reposDatas,
		} = this.props;
		const {
			onChangeInput,
			sendUrlRequest,
		} = this.props;
		console.log(reposDatas);

		return (
			<div id="Issue" className="row justify-content-center">
				<form className="col-md-12">
					<label htmlFor="urlToFetch">Entrez l&apos;url de l&apos;issue:</label>
					<input
						type="text"
						id="urlToFetch"
						name="urlToFetch"
						placeholder=":user/:repos/issues/:number"
						required
						onChange={_ => onChangeInput(_.target.value)}
					/>
					<button className="btn btn-primary" onClick={() => sendUrlRequest()} type="button">GO</button>
				</form>
			</div>
		);
	}
}

Issue.propTypes = {
	reposDatas: PropTypes.object.isRequired,

	onChangeInput: PropTypes.func.isRequired,
	sendUrlRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	onChangeInput: (payload) => {
		dispatch(onChangeInputAction(payload));
	},
	sendUrlRequest: () => {
		dispatch(sendUrlRequestAction());
	},
});
const mapStateToProps = state => ({
	urlToSend: selectors.makeSelectorUrlToSend(state),
	reposDatas: selectors.makeSelectorReposDatas(state),
});

const ReduxIssue = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Issue);

export default ReduxIssue;
