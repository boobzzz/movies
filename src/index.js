import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as R from './store/reducers';

import './index.scss';
import App from './App';

// const reducers = combineReducers({
//     movies: R.moviesReducer,
// })
// const store = createStore(reducers);

ReactDOM.render(
    // <Provider store={store}>
    //     <App />
    // </Provider>
    <App />
, document.getElementById('root'));
