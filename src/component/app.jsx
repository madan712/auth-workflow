import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
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
                <Nav className='mr-auto'>
                    <Link className='nav-link' to='/public'>Public Page</Link>
                    <Link className='nav-link' to='/private'>Private Page</Link>
                </Nav>
                <AuthNav />
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