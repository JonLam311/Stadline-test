/* eslint-disable react/jsx-indent-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Textarea extends PureComponent {
	render() {
		const {
			id, placeholder, required, label, helpertext, rows, name,
		} = this.props;
		const {
			onChange,
		} = this.props;
		return (
			<div className="form-group w-100">
				<label className="w-100" htmlFor={id}>{label}
					<textarea
						className="form-control"
						id={id}
						placeholder={placeholder}
						required={required}
						aria-describedby={`${id}-helper`}
						rows={rows}
						name={name}
						onChange={_ => onChange(_.target.value)}
					/>
				</label>
				<small id={`${id}-helper`} className="form-text text-muted">{helpertext}</small>
			</div>
		);
	}
}

Textarea.propTypes = {
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	helpertext: PropTypes.string.isRequired,
	rows: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,

	onChange: PropTypes.func.isRequired,
};


export default Textarea;
