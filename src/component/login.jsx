import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { Card, Form, Button } from 'react-bootstrap';

import * as appAction from '../action/app-action';

class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.login = this.login.bind(this);
		this.updateCredentials = this.updateCredentials.bind(this);
	}

	login(event) {
		event.preventDefault();
		this.props.appAction.login(this.props.appReducer.userName, this.props.appReducer.password);
	}

	updateCredentials(event) {
		this.props.appAction.updateCredentials(event.target.name, event.target.value);
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } };

		if (this.props.appReducer.redirectToReferrer) {
			return <Redirect to={from} />;
		}

		return (
			<Card>
				<Card.Header>Login</Card.Header>
				<Card.Body onSubmit={this.login}>
					<Form>
						<Form.Text className="text-muted">
							Login with user name 'admin' and password 'Admin@123'
						</Form.Text>
						<Form.Group controlId='formBasicUsername'>
							<Form.Label>User name</Form.Label>
							<Form.Control type='text' name='userName' onChange={this.updateCredentials} />
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' name='password' autoComplete='off' onChange={this.updateCredentials} />
						</Form.Group>
						<br />
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		);
	}
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