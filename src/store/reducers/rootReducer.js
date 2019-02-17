import booksReducer from './booksReducer';
import authReducer from './authReducer';
import {  combineReducers } from 'redux';

const rootReducer  = combineReducers({
    auth: authReducer,
    books: booksReducer,
});

export default rootReducer;