import * as constant from '../constant/app-constant';

const initialState = {
    userName: null,
    password: null,
    user: null,
    redirectToReferrer: false
};

export default function appReducer(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case constant.UPDATE_CREDENTIALS:
            newState[action.key] = action.value;
            return newState;
        case constant.LOAD_USER:
        	newState.user = action.user;
        	newState.redirectToReferrer= true;
        	return newState;
        case constant.LOGOUT:
        	newState.userName = null;
        	newState.password = null;
        	newState.user = null;
        	newState.redirectToReferrer= false;
        	return newState;
        default:
            return state;
    }
}