import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './component/app';
import appStore from './service/app-store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(<Provider store={appStore}><HashRouter><App /></HashRouter></Provider>, document.getElementById('app'));