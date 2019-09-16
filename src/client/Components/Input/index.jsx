import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
	render() {
		const {
			id, type, placeholder, required, label, name,
		} = this.props;
		const {
			onChange,
		} = this.props;
		return (
			<div>
				<label htmlFor={id}>{label}
					<input
						type={type}
						className="form-control"
						id={id}
						placeholder={placeholder}
						required={required}
						name={name}
						onChange={_ => onChange(_.target.value)}
					/>
				</label>
			</div>
		);
	}
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,

	onChange: PropTypes.func.isRequired,
};


export default Input;
