import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Nav, NavDropdown } from 'react-bootstrap';

import * as appAction from '../action/app-action';
import { isAuthenticated } from '../service/auth-service';

class AuthNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.appAction.logout();
        this.props.history.push('/login');
    }

    render() {
        return isAuthenticated() ?
            (
                <Nav>
                    <NavDropdown title='Welcome!' id='basic-nav-dropdown'>
                        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            ) : (
                <Nav>
                    <Link className='nav-link' to='/login'>Login</Link>
                </Nav>
            );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appAction: bindActionCreators(appAction, dispatch)
    };
}

export default withRouter(connect(null, mapDispatchToProps)(AuthNav));