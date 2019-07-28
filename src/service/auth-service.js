export function isAuthenticated() {
	const user = localStorage.getItem('user');
	if (user) {
		return true;
	} else {
		return false;
	}
}