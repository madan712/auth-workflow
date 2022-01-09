import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Card, Form, Button, Container } from 'react-bootstrap';

import * as appAction from '../action/app-action';

const Login = props => {
	const login = (event) => {
		event.preventDefault();
		props.appAction.login(props.appReducer.userName, props.appReducer.password);
	}

	const updateCredentials = (event) => {
		props.appAction.updateCredentials(event.target.name, event.target.value);
	}

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	if (props.appReducer.redirectToReferrer) {
		navigate(from, { replace: true });
	}

	return (
		<Container fluid className='bg-light text-dark p-5'>
			<Card>
				<Card.Header>Login</Card.Header>
				<Card.Body onSubmit={login}>
					<Form>
						<Form.Text className='text-muted'>
							Login with user name 'admin' and password 'Admin@123'
						</Form.Text>
						<Form.Group controlId='formBasicUsername'>
							<Form.Label>User name</Form.Label>
							<Form.Control type='text' name='userName' onChange={updateCredentials} />
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' name='password' autoComplete='off' onChange={updateCredentials} />
						</Form.Group>
						<br />
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	)
}

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		appAction: bindActionCreators(appAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);