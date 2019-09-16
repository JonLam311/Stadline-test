/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as selectors from './selectors';
import { onChangeInputAction, sendUrlRequestAction } from './actions';

import Input from '../../Components/Input';

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
					<Input
						label="Entrez l'url de l'issue:"
						type="text"
						id="urlToFetch"
						placeholder=":user/:repos/issues/:number"
						required
						name="urlToFetch"
						onChange={onChangeInput}
					/>
					<button className="btn btn-primary" onClick={() => sendUrlRequest()} type="button">GO</button>
				</form>

				<div id="discussion" className="col-md-8 justify-content-end">
					{
						reposDatas.comments.length ?
							reposDatas.comments.map(comment => (
								<p>{comment.body}</p>
							))
							:
							''
					}
				</div>
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
