/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReactMinimalPieChart from 'react-minimal-pie-chart';

import * as selectors from './selectors';
import { 
	onChangeInputAction, 
	onClickUserAction, 
	onChangeTextareaAction, 
	
	sendUrlRequestAction, 
	createCommentRequestAction,
} from './actions';

import Input from '../../Components/Input';
import Commentaire from '../../Components/Commentaire';
import ListGroup from '../../Components/ListGroup';
import Textarea from '../../Components/Textarea';

const colors = [
	'#313B44', '#840032', '#E59500', '#6E6362', '#839073', '#7D6B91', '#C492B1',
];

class Issue extends React.Component {
	render() {
		const {
			reposDatas,
		} = this.props;
		const {
			onChangeInput,
			onChangeTextarea,
			onClickUser,

			sendUrlRequest,
			createCommentRequest,
		} = this.props;

		let previousUsersPosition = 'left';
		return (
			<div id="Issue" className="row justify-content-center">
				<form className="row col-md-12 align-items-center" onSubmit={() => sendUrlRequest()} >
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
				<div className="col-md-3" id="list_and_pie">
					<ul className="users list-group col-md-4 align-items-center">
						{
							reposDatas.users.map(user => (
								<ListGroup
									onClick={onClickUser}
									key={`${user.id}${user.created_at}`}
									value={user.id}
									classNames={`
										list-group-item
										${reposDatas.hideCommentsForId === user.id ? 'selectedUser' : ''}
										${reposDatas.author === user.id ? 'author' : ''}`
									}
									srcImg={user.avatar_url}
									altImg={`${user.login}'s avatar`}
									titleImg={`${user.login} ${reposDatas.author === user.id ? '(Author)' : ''}`}
								/>
							))
						}
					</ul>
					{
						reposDatas.comments.length ? (
							<ReactMinimalPieChart
								data={
									reposDatas.pieDatas.participants.map((participant, id) => ({
										title: participant.user,
										value: participant.nombreMots,
										color: colors[id],
									}))
								}
								label
								labelStyle={{
									fontSize: '5px',
									fontFamily: 'sans-serif',
									fill: '#121212',
								}}
								style={{ height: '400px' }}
							/>
						) : ''}
				</div>
				<div id="discussion" className="col-md-8 justify-content-end">
				{
						reposDatas.comments.length ?
							reposDatas.comments.map((comment, id) => {
								const leftOrRight = id === 0 ?
									'left'
									:
									comment.user.id !== reposDatas.comments[id - 1].user.id ?
										previousUsersPosition === 'right' ?
											'left'
											:
											'right'
										:
										previousUsersPosition;
								previousUsersPosition = leftOrRight;
								return (
									<Commentaire
										key={comment.id}
										classNames={`
											${leftOrRight} 
											${reposDatas.author === comment.user.id ? 'author' : ''}`
										}
										imgSrc={comment.user.avatar_url}
										text={comment.body}
									/>
								);
							})
							:
							''
					}
					{
						reposDatas.comments.length ? (
							<div>
								<Textarea
									id="comment"
									label="Post a comment on this issue"
									placeholder="Insert your message here"
									required
									rows={5}
									name="create_comment"
									onChange={onChangeTextarea}
									helpertext="Be warned, your message will be published on github site"
								/>
								<button className="btn btn-primary" onClick={() => createCommentRequest()} type="button">Comment</button>
							</div>
						)
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
	onClickUser: PropTypes.func.isRequired,

	sendUrlRequest: PropTypes.func.isRequired,
	onChangeTextarea: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	onChangeInput: (payload) => {
		dispatch(onChangeInputAction(payload));
	},
	onChangeTextarea: (payload) => {
		dispatch(onChangeTextareaAction(payload));
	},
	onClickUser: (payload) => {
		dispatch(onClickUserAction(payload));
	},
	sendUrlRequest: () => {
		dispatch(sendUrlRequestAction());
	},
	createCommentRequest: () => {
		dispatch(createCommentRequestAction());
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
