/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListGroup extends PureComponent {
	render() {
		const {
			classNames, value, srcImg, altImg, titleImg,
		} = this.props;
		const {
			onClick,
		} = this.props;
		return (
			<li
				onClick={() => onClick(value)}
				className={classNames}
			>
				<img
					src={srcImg}
					alt={altImg}
					title={titleImg}
					className="avatars img-thumbnail"
				/>
			</li>
		);
	}
}

ListGroup.propTypes = {
	classNames: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	srcImg: PropTypes.string.isRequired,
	altImg: PropTypes.string.isRequired,
	titleImg: PropTypes.string.isRequired,

	onClick: PropTypes.func.isRequired,
};


export default ListGroup;
