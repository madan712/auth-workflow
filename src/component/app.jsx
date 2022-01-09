import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ReduxToastr from 'react-redux-toastr';
import { Link, Route, Routes } from 'react-router-dom';

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
								<Link className='nav-link' to='/public'>Public Page</Link>
								<Link className='nav-link' to='/private'>Private Page</Link>
							</Nav>
							<AuthNav />
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Routes>
					<Route path='/' element={<Public />} />
					<Route path='/public' element={<Public />} />
					<Route path='/login' element={<Login />} />
					<Route path='/private' element={<PrivateRoute><Private /></PrivateRoute>} />
				</Routes>

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