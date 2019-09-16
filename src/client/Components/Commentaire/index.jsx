/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Commentaire extends PureComponent {
	render() {
		const {
			classNames, text, imgSrc,
		} = this.props;

		return (
			<div
				className={` row col-md-8 offset-md-2 comment justify-content-around align-items-center ${classNames}`
				}
			>
				<img src={imgSrc} alt="avatar" className="avatars img-thumbnail" />
				<p className="col sentence">
					{text}
				</p>
			</div>
		);
	}
}

Commentaire.propTypes = {
	classNames: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
};


export default Commentaire;
