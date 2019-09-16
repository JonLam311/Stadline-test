import React from 'react';
import { connect } from 'react-redux';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


import * as selectors from './selectors';
import {
	toggleSwitchOpenAction,
} from './actions';
// import './index.scss';

class Navigationbar extends React.Component {
	render() {
		const { children, isOpen } = this.props;
		const { toggleSwitchOpen } = this.props;
		return (
			<nav>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">RyukoDev</NavbarBrand>
					<NavbarToggler onClick={() => toggleSwitchOpen()} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{
								children.map(child => (
									<NavItem key={`${child}`}>
										<NavLink href={child === 'Home' ? '/' : `/${child.toLowerCase()}`}>
											{child}
										</NavLink>
									</NavItem>
								))
							}
						</Nav>
					</Collapse>
				</Navbar>
			</nav>
		);
	}
}

Navigationbar.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	children: PropTypes.array.isRequired,

	toggleSwitchOpen: PropTypes.func.isRequired,
	// light: PropTypes.bool.isRequired,
	// dark: PropTypes.bool.isRequired,
	// fixed: PropTypes.string.isRequired,
	// color: PropTypes.string.isRequired,
	// role: PropTypes.string.isRequired,
	// expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
	// tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
	// pass in custom element to use
};

const mapDispatchToProps = dispatch => ({
	toggleSwitchOpen: () => {
		dispatch(toggleSwitchOpenAction());
	},
});
const mapStateToProps = state => ({
	isOpen: selectors.makeSelectorIsOpen(state),
});

const ReduxNavigationbar = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Navigationbar);

export default ReduxNavigationbar;
