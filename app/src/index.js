import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from "react-redux";
import logger from "redux-logger";



const asyncMiddleware = storeAPI => next => action => {
    if (typeof action === 'function') {
        return action(storeAPI.dispatch, storeAPI.getState)
    }
    next(action)
}

const middlewareEnhancer = applyMiddleware(asyncMiddleware, logger)
const rootReducer = combineReducers({})
const store = createStore(rootReducer, middlewareEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

