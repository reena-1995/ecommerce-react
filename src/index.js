import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import axios from 'axios'
axios.default.BaseUrl="http://api-dev.manewayznavigation.com/api/"
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


