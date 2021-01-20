import {applyMiddleware, createStore} from 'redux';
import {rootReducers} from '../reducers/rootReducer';
import logger from "redux-logger"
import ReduxThunk from 'redux-thunk';
export const store = createStore(rootReducers,applyMiddleware(logger,ReduxThunk));