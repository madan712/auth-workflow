import React from 'react';
import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../service/auth-service';

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
}