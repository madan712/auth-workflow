import {toastr} from 'react-redux-toastr';

import * as constant from '../constant/app-constant';
import AppApi from '../api/app-api';

export function updateCredentials(key, value) {
	return { type: constant.UPDATE_CREDENTIALS, key, value };
}

function loadUser(user) {
	return { type: constant.LOAD_USER, user };
}

export function login(userName, password) {
	console.log('login...'+userName);
	return function(dispatch) {
        return AppApi.login(userName, password).then(user => {
        	localStorage.setItem('user',JSON.stringify(user));
            dispatch(loadUser(user));
            toastr.success('Success', 'Successfully logged in!');
        }).catch(error => {
            console.log(error);
            toastr.error('Invalid', 'Invalid user!');
        });
    };
}

export function logout() {
	console.log('logout...');
	localStorage.removeItem('user');
	return { type: constant.LOGOUT };
}