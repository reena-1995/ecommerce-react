import {combineReducers} from 'redux'
import auth from './auth/index';
import horseReducer from './auth/horseReducer'
export const rootReducers =combineReducers({auth,horseReducer});