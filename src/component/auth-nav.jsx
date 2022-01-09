import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import * as appAction from '../action/app-action';
import { isAuthenticated } from '../service/auth-service';

const AuthNav = props => {
	const navigate = useNavigate();
	const logout = () => {
		props.appAction.logout();
		navigate('/login');
	}

	return isAuthenticated() ?
		(
			<Navbar.Collapse className='justify-content-end'>
				<Nav>
					<NavDropdown title='Welcome!' id='basic-nav-dropdown'>
						<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		) : (
			<Navbar.Collapse className='justify-content-end'>
				<Nav>
					<Link className='nav-link' to='/login'>Login</Link>
				</Nav>
			</Navbar.Collapse>
		);
}

function mapDispatchToProps(dispatch) {
	return {
		appAction: bindActionCreators(appAction, dispatch)
	};
}

export default connect(null, mapDispatchToProps)(AuthNav);