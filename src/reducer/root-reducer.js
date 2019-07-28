import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import appReducer from './app-reducer';

const rootReducer = combineReducers({
	appReducer,
	toastr: toastrReducer
});

export default rootReducer;