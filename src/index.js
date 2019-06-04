import React from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://biz-connect.herokuapp.com/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
