import axios from 'axios';

class AppApi {
	static login(userName, password) {
		return new Promise((resolve, reject) => {
			// You can use axios call to your API here
			if (userName === 'admin' && password === 'Admin@123') {
				const fakeUser = { 'userName': 'admin', 'role': 'ADMIN' };
				resolve(fakeUser);
			} else {
				reject('Invalid User!');
			}
		});
	}
}

export default AppApi;