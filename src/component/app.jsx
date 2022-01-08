import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ReduxToastr from 'react-redux-toastr';

import Public from './public';
import Private from './private';
import PrivateRoute from './private-route';
import Login from './login';
import AuthNav from './auth-nav';

class App extends React.Component {
	render() {
		return (
			<>
				<Navbar bg='dark' variant='dark'>
					<Container>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className='mr-auto'>
								<Nav.Link href="/public">Public Page</Nav.Link>
								<Nav.Link href="/private">Private Page</Nav.Link>
							</Nav>
							<AuthNav />
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Route exact path='/' component={Public} />
				<Route path='/public' component={Public} />
				<Route path='/login' component={Login} />
				<Switch>
					<PrivateRoute path='/private' component={Private} />
				</Switch>

				<ReduxToastr
					timeOut={4000}
					newestOnTop={false}
					preventDuplicates
					position="bottom-right"
					transitionIn="fadeIn"
					transitionOut="fadeOut"
					progressBar
					closeOnToastrClick />
			</>
		);
	}
}

export default App;